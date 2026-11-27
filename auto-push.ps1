#Requires -Version 5.1
<#
  油猴脚本目录自动推送到 GitHub

  常用命令：
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode start     # 后台启动实时监控
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode status   # 查看状态与日志
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode sync     # 立刻同步一次
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode watch    # 前台运行监控
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode stop     # 停止后台监控
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode autostart    # 注册开机自启
    powershell -ExecutionPolicy Bypass -File auto-push.ps1 -Mode unautostart  # 取消开机自启

  参数：
    -RepoPath         仓库目录，默认 D:\script
    -InboxPath        收件箱目录，默认 D:\脚本收件箱（丢入的脚本推送核验后自动删除原件）
    -Branch           推送分支，默认 main
    -RemoteName       远程名，默认 origin
    -DebounceSeconds  文件停止变动后等待几秒再提交，默认 8
    -NoPush           只提交不推送
#>
[CmdletBinding()]
param(
    [ValidateSet('start', 'stop', 'status', 'sync', 'watch', 'ensure', 'autostart', 'unautostart')]
    [string]$Mode = 'status',
    [string]$RepoPath = 'D:\script',
    [string]$InboxPath = 'D:\脚本收件箱',
    [string]$Branch = 'main',
    [string]$RemoteName = 'origin',
    [int]$DebounceSeconds = 8,
    [switch]$NoPush
)

$ErrorActionPreference = 'Continue'
$ProgressPreference = 'SilentlyContinue'

# 后台守护绝不能停在交互提问上：禁止终端与凭据管理器的交互，失败直接返回
$env:GIT_TERMINAL_PROMPT = '0'
$env:GCM_INTERACTIVE = 'never'
$env:GCM_GUI_PROMPT = 'never'

$RepoPath = (Resolve-Path -LiteralPath $RepoPath).Path
$LogFile = Join-Path $RepoPath 'auto-push.log'
# 进程号文件放系统临时目录：不污染仓库，也不受仓库目录权限限制
$PidFile = Join-Path $env:TEMP 'qwen-autopush-userscripts.pid'
$TaskName = 'QwenAutoPushUserscripts'

# 全局状态：跨 runspace 与事件回调用同一个同步哈希表
$global:PushState = [hashtable]::Synchronized(@{
    Dirty     = $false
    Pending   = $false
    Syncing   = $false
    LastEvent = [datetime]::MinValue
    LastSync  = [datetime]::MinValue
})

function Write-Log {
    param([string]$Message, [string]$Level = 'INFO')
    $line = '{0} [{1}] {2}' -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Level, $Message
    try { Add-Content -LiteralPath $LogFile -Value $line -Encoding UTF8 } catch { }
    Write-Host $line
}

# 执行 git，把退出码和输出一起返回，避免依赖 $LASTEXITCODE 的作用域行为
function RunGit {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
    $raw = & git -C $RepoPath @GitArgs 2>&1
    $lines = @()
    foreach ($item in $raw) { $lines += [string]$item }
    $code = 0
    if ($null -ne $LASTEXITCODE) { $code = [int]$LASTEXITCODE }
    return @{ Code = $code; Out = $lines }
}

function RunGitOk {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
    $r = RunGit @GitArgs
    if ($r.Code -eq 0) { return $r }
    return $null
}

function Get-ScriptVersion {
    param([string]$Text)
    $m = [regex]::Match($Text, '(?m)^\s*//\s*@version\s+(\S+)')
    if ($m.Success) { return $m.Groups[1].Value }
    return $null
}

function Archive-OldVersions {
    # 同名 .user.js 被新版本覆盖时：先把 HEAD 里的旧版内容写到同级目录下
    # 与脚本同名的子目录中（如 LinkSwift.user.js v1.0.0 -> LinkSwift/1.0.0.user.js），
    # 新版继续占用主路径，新旧两个版本都进仓库。
    # 排除 CI 管理的 edge-userscripts/pc|mobile|archive|tools 与根 docs，避免与每日同步互相覆盖；
    # 归档目录内的文件本身不再二次归档。
    $status = RunGit @('-c', 'core.quotepath=false', 'status', '--porcelain', '-uall')
    if ($status.Code -ne 0) { return }
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)

    foreach ($line in $status.Out) {
        if (-not $line -or $line.Length -lt 4) { continue }
        $xy = $line.Substring(0, 2)
        if ($xy.Trim() -eq 'D') { continue }
        $rel = $line.Substring(3)
        if ($rel -match '^(.:)?(.+ )?-> (.+)$') { $rel = $Matches[3] }
        $rel = ($rel -replace '\\', '/')
        if (-not $rel.EndsWith('.user.js')) { continue }
        if ($rel -match '/archive/') { continue }
        if ($rel -match '^docs/') { continue }

        $leaf = $rel -replace '^.*/', ''
        $stem = $leaf -replace '\.user\.js$', ''
        $slash = $rel.LastIndexOf('/')
        $dirRel = if ($slash -ge 0) { $rel.Substring(0, $slash) } else { '' }
        # 已在 archive/ 内的文件不再二次归档
        if ($dirRel -match '/archive$') { continue }

        $full = Join-Path $RepoPath ($rel -replace '/', [System.IO.Path]::DirectorySeparatorChar)
        if (-not (Test-Path -LiteralPath $full)) { continue }
        $newText = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)
        $newVer = Get-ScriptVersion $newText
        if (-not $newVer) {
            Write-Log ('跳过归档：' + $rel + ' 未找到 @version 注释') 'WARN'
            continue
        }

        $old = RunGit @('show', ('HEAD:' + $rel))
        if ($old.Code -ne 0) { continue }   # 仓库里原本没有这个脚本，全新文件无需归档
        $oldText = ($old.Out -join "`n")
        if (-not $oldText.EndsWith("`n")) { $oldText = $oldText + "`n" }
        $oldVer = Get-ScriptVersion $oldText
        if (-not $oldVer -or $oldVer -eq $newVer) { continue }   # 版本没变：视为就地修改，走普通提交

        $parent = if ($dirRel) { Join-Path $RepoPath ($dirRel -replace '/', [System.IO.Path]::DirectorySeparatorChar) } else { $RepoPath }
        if ($dirRel -and (($dirRel -replace '^.*/', '') -eq $stem)) {
            # 新结构：脚本已在 Local/<脚本名>/ 或 Author/<脚本名>/ 下，旧版放进该目录的 archive/
            $archDir = Join-Path $parent 'archive'
            $archRel = $dirRel + '/archive/' + $oldVer + '.user.js'
        } else {
            $archDir = Join-Path $parent $stem
            $archRel = if ($dirRel) { $dirRel + '/' + $stem + '/' + $oldVer + '.user.js' } else { $stem + '/' + $oldVer + '.user.js' }
        }
        $archFile = Join-Path $archDir ($oldVer + '.user.js')

        if (Test-Path -LiteralPath $archFile) {
            $cur = [System.IO.File]::ReadAllText($archFile, [System.Text.Encoding]::UTF8)
            if ($cur -ne $oldText) {
                Write-Log ('归档目标已存在且内容不同，保留现有归档：' + $archRel) 'WARN'
            }
            continue
        }
        New-Item -ItemType Directory -Path $archDir -Force | Out-Null
        [System.IO.File]::WriteAllText($archFile, $oldText, $utf8NoBom)
        Write-Log ('已归档旧版：' + $rel + ' v' + $oldVer + ' -> ' + $archRel)
    }
}

# 收件箱摄取：把 D:\脚本收件箱 里写完的脚本复制进仓库根
$IngestBlacklist = @('auto-push.ps1', '.gitignore', 'LICENSE', 'auto-push.log', '.auto-push.pid')

# 收件箱内容签名：文件名|大小|修改时间 拼串，用于低成本判断是否有新增或替换
function Get-InboxSignature {
    if (-not (Test-Path -LiteralPath $InboxPath)) { return '' }
    $parts = @()
    foreach ($f in @(Get-ChildItem -LiteralPath $InboxPath -File -Force -ErrorAction SilentlyContinue)) {
        if ($f.Name -notlike '*.js') { continue }
        $parts += ($f.Name + '|' + $f.Length + '|' + $f.LastWriteTime.Ticks)
    }
    return ($parts -join ';')
}

function Ensure-Inbox {
    if (-not (Test-Path -LiteralPath $InboxPath)) {
        try { New-Item -ItemType Directory -Path $InboxPath -Force | Out-Null } catch { }
    }
}

# LocalSend / 蓝牙 / 网盘在收到重名文件时会自动改名成 xxx (1).user.js、xxx-2.user.js、xxx-副本.user.js。
# 这类文件往往是同一脚本的重复送达，直接摄取会在仓库里造出第二个“不同名”的脚本。
# 这里把带尾缀的名字归一化回主名，供摄取环节做同内容去重。
function Get-NormalizedInboxName {
    param([string]$Name)
    $stem = $Name -replace '\.user\.js$', ''
    $changed = $true
    while ($changed) {
        $before = $stem
        $stem = $stem -replace '\s*[（(]\s*(?:\d+|[一二三四五六七八九十]+)\s*[)）]\s*$', ''
        $stem = $stem -replace '[-_ ](?:copy|副本|冲突文件|已接收|来自)\S*$', ''
        $stem = $stem -replace '[-_ ]\d{1,3}$', ''
        $changed = ($stem -ne $before)
    }
    if (-not $stem) { return $Name }
    return ($stem + '.user.js')
}

# 文件名主干：把结尾的版本号（link1.0 / link-1.1 / link v2.0.0）剥掉，归入主干名目录。
# 只认带小数点的版本号，避免把 html5、video-episode-info 这类正常名字截断。
function Get-ScriptBaseStem {
    param([string]$Stem)
    $base = $Stem -replace '[-_ .]?v?\d+(?:\.\d+)+$', ''
    if (-not $base -or $base -eq $Stem) { return $Stem }
    return $base
}

# 脚本落位规则：
#   1) 仓库里已有同名脚本 -> 原地替换它原来的文件（Local/ 或 Author/ 下同名目录）
#   2) 文件名带版本号（如 link1.0、link1.1）-> 归入主干名目录 link/；目录已存在就放进去，没有就新建
#   3) 其余视为新脚本 -> Local/<脚本名>/，同名目录已存在则直接放进去，不存在自动新建
function Resolve-ScriptPath {
    param([string]$FileName)
    $stem = $FileName -replace '\.user\.js$', ''
    foreach ($root in @('Local', 'Author')) {
        $cand = Join-Path $RepoPath (Join-Path (Join-Path $root $stem) $FileName)
        if (Test-Path -LiteralPath $cand) { return $cand }
    }
    $base = Get-ScriptBaseStem $stem
    foreach ($root in @('Local', 'Author')) {
        $dir = Join-Path $RepoPath (Join-Path $root $base)
        if (-not (Test-Path -LiteralPath $dir)) { continue }
        # 同名目录里已有脚本文件：这是同一脚本的又一个版本，并进这个目录
        $existing = @(Get-ChildItem -LiteralPath $dir -Filter '*.user.js' -File -ErrorAction SilentlyContinue)
        if ($existing.Count -gt 0) { return (Join-Path $dir $FileName) }
    }
    return (Join-Path $RepoPath (Join-Path 'Local' (Join-Path $base $FileName)))
}

function Ingest-Inbox {
    if (-not (Test-Path -LiteralPath $InboxPath)) {
        try { New-Item -ItemType Directory -Path $InboxPath -Force | Out-Null } catch { return }
    }
    # 先收集快照再处理，避免边遍历边删
    $files = @(Get-ChildItem -LiteralPath $InboxPath -File -Force -ErrorAction SilentlyContinue |
               Where-Object { ([datetime]::Now - $_.LastWriteTime).TotalSeconds -ge 5 })
    foreach ($f in $files) {
        if ($f.Name -notlike '*.js') {
            Write-Log ('收件箱内有非脚本文件，已跳过（保留原件）：' + $f.Name) 'WARN'
            continue
        }

        # 归一化目标名：重名送达的副本合并到主名
        $target = Get-NormalizedInboxName $f.Name
        if ($target -ne $f.Name) {
            $main = Join-Path $InboxPath $target
            if (Test-Path -LiteralPath $main) {
                # 收件箱里已有主名版本：谁新用谁，旧的一律当重复吃掉
                $mainItem = Get-Item -LiteralPath $main
                if ($f.LastWriteTime -le $mainItem.LastWriteTime) {
                    Remove-Item -LiteralPath $f.FullName -Force -ErrorAction SilentlyContinue
                    Write-Log ('重复送达已合并（较旧）：' + $f.Name + ' -> 保留 ' + $target)
                } else {
                    Move-Item -LiteralPath $f.FullName -Destination $main -Force
                    Write-Log ('重复送达已合并（较新）：' + $f.Name + ' -> 替换 ' + $target)
                }
                continue
            }
            # 主名不在收件箱：可能已在仓库。同内容就静默吃掉；
            # 不同内容则这是“改过名重新投递”的真实升版，改名后继续摄取。
            $repoFile = Resolve-ScriptPath $target
            $repoDir = Split-Path -Parent $repoFile
            if (-not (Test-Path -LiteralPath $repoDir)) { New-Item -ItemType Directory -Path $repoDir -Force | Out-Null }
            if (Test-Path -LiteralPath $repoFile) {
                $a = RunGit @('hash-object', '--', $f.FullName)
                $b = RunGit @('hash-object', '--', $repoFile)
                if ($a.Code -eq 0 -and $b.Code -eq 0 -and $a.Out[0] -eq $b.Out[0]) {
                    Remove-Item -LiteralPath $f.FullName -Force -ErrorAction SilentlyContinue
                    Write-Log ('与仓库现有内容相同的重复送达，已清理：' + $f.Name)
                    continue
                }
            }
            Move-Item -LiteralPath $f.FullName -Destination $repoFile -Force
            Write-Log ('已按主名摄取：' + $f.Name + ' -> ' + $target)
            continue
        }

        if ($IngestBlacklist -contains $f.Name) {
            Write-Log ('收件箱文件与仓库关键文件同名，拒绝摄取：' + $f.Name) 'WARN'
            continue
        }

        $dest = Resolve-ScriptPath $f.Name
        $destDir = Split-Path -Parent $dest
        if (-not (Test-Path -LiteralPath $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
        $same = $false
        if (Test-Path -LiteralPath $dest) {
            $a = RunGit @('hash-object', '--', $f.FullName)
            $b = RunGit @('hash-object', '--', $dest)
            if ($a.Code -eq 0 -and $b.Code -eq 0 -and $a.Out[0] -eq $b.Out[0]) { $same = $true }
        }
        if ($same) { continue }   # 内容一致，等推送核验阶段处理
        try {
            Copy-Item -LiteralPath $f.FullName -Destination $dest -Force
            Write-Log ('已摄取进仓库：' + $f.Name + '（' + $f.Length + ' B）')
        } catch {
            Write-Log ('摄取失败：' + $f.Name + ' ' + $_.Exception.Message) 'ERROR'
        }
    }
}

# 清理：收件箱原件只有在“远端已保存完全相同内容”时才删除。
# 判据用收件箱文件自身的哈希对比远端 blob——若用户刚放入更新版而它还没推上去，
# 两者不一致，绝不删除，杜绝“本地删了但新版没上传”的数据丢失。
function Purge-VerifiedInbox {
    if (-not (Test-Path -LiteralPath $InboxPath)) { return }
    $ref = RunGit @('rev-parse', '--verify', ('refs/remotes/' + $RemoteName + '/' + $Branch))
    if ($ref.Code -ne 0) { return }   # 还没有远端跟踪引用，不删任何东西
    foreach ($f in @(Get-ChildItem -LiteralPath $InboxPath -File -Force -ErrorAction SilentlyContinue)) {
        if ($f.Name -notlike '*.js') { continue }
        if (([datetime]::Now - $f.LastWriteTime).TotalSeconds -lt 5) { continue }
        $destPath = Resolve-ScriptPath $f.Name
        $relPath = $destPath.Substring($RepoPath.Length + 1).Replace('\', '/')
        $remoteHash = RunGit @('rev-parse', ($RemoteName + '/' + $Branch + ':' + $relPath))
        if ($remoteHash.Code -ne 0) { continue }          # 远端没有这个文件：未上传，保留
        $inboxBlob = RunGit @('hash-object', '--', $f.FullName)
        if ($inboxBlob.Code -ne 0) { continue }
        if ($inboxBlob.Out[0].Trim() -ne $remoteHash.Out[0].Trim()) { continue }  # 远端内容不同：保留
        try {
            Remove-Item -LiteralPath $f.FullName -Force
            Write-Log ('远端核验一致，收件箱原件已删除：' + $f.Name)
        } catch {
            Write-Log ('原件删除失败（不影响已推送内容）：' + $f.Name + ' ' + $_.Exception.Message) 'WARN'
        }
    }
}

function Invoke-Sync {
    param([string]$Reason)

    $st = $global:PushState
    if ($st.Syncing) {
        $st.Pending = $true
        return
    }
    $st.Syncing = $true
    try {
        $guard = 0
        while ($guard -lt 20) {
            $guard++
            $st.Pending = $false

            # 先摄取收件箱（新脚本入仓），再归档旧版，然后提交
            Ingest-Inbox
            Archive-OldVersions

            if (-not (RunGitOk @('add', '-A', '--', '.'))) {
                Write-Log ('git add 失败，本轮跳过，触发原因 ' + $Reason) 'WARN'
                break
            }

            # diff --cached --quiet 返回 0 表示暂存区无变化
            $diff = RunGit @('diff', '--cached', '--quiet')
            if ($diff.Code -eq 0) {
                Write-Log ('工作区无变化，无需提交，触发原因 ' + $Reason)
                break
            }

            $nameOnly = RunGit @('diff', '--cached', '--name-only')
            $names = @($nameOnly.Out | Where-Object { $_ })
            $list = $names -join ', '
            if ($list.Length -gt 300) { $list = $list.Substring(0, 300) + ' ...' }

            $msg = 'auto: update userscripts ' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
            if (-not (RunGitOk @('commit', '-m', $msg, '-m', ('changed: ' + $list)))) {
                Write-Log ('git commit 失败，触发原因 ' + $Reason) 'ERROR'
                break
            }
            Write-Log ('已提交 ' + $names.Count + ' 个文件：' + $list)

            if ($NoPush) {
                Write-Log '按 NoPush 参数跳过推送'
                break
            }

            $url = RunGitOk @('remote', 'get-url', $RemoteName)
            if (-not $url) {
                Write-Log ('尚未配置远程 ' + $RemoteName + '，改动只提交到本地') 'WARN'
                break
            }

            $push = RunGit @('push', $RemoteName, ('HEAD:' + $Branch))
            if ($push.Code -eq 0) {
                Write-Log ('已推送到 ' + $RemoteName + '/' + $Branch)
                break
            }

            Write-Log ('推送失败，尝试同步远端后重试。输出 ' + (($push.Out | Select-Object -Last 2) -join ' / ')) 'WARN'
            if (-not (RunGitOk @('fetch', $RemoteName, $Branch))) {
                Write-Log '无法连接远程（网络或权限问题），提交已保留在本地，下一轮变动会自动重试' 'ERROR'
                break
            }
            if (-not (RunGitOk @('rebase', ($RemoteName + '/' + $Branch)))) {
                $null = RunGit @('rebase', '--abort')
                Write-Log '本地与远端历史冲突，已中止变基并保留本地提交，需要手动处理' 'ERROR'
                break
            }
            $push = RunGit @('push', $RemoteName, ('HEAD:' + $Branch))
            if ($push.Code -eq 0) { Write-Log '重试推送成功' }
            else { Write-Log ('重试推送仍失败 ' + (($push.Out | Select-Object -Last 2) -join ' / ')) 'ERROR' }

            if (-not $st.Pending) { break }
        }
    }
    finally {
        $st.LastSync = [datetime]::Now
        $st.Syncing = $false
        # 本轮结束统一核验清理：推送成功的原件被删，未推上的自动保留待下轮
        Purge-VerifiedInbox
    }
}

function Ensure-Ignore {
    $gi = Join-Path $RepoPath '.gitignore'
    $need = @('auto-push.log', '.auto-push.pid')
    $have = @()
    if (Test-Path -LiteralPath $gi) { $have = @(Get-Content -LiteralPath $gi -Encoding UTF8 -ErrorAction SilentlyContinue | ForEach-Object { [string]$_ }) }
    $add = @($need | Where-Object { $have -notcontains $_ })
    if ($add.Count -gt 0) {
        $body = "`n# auto-push daemon`n" + ($add -join "`n") + "`n"
        try { Add-Content -LiteralPath $gi -Value $body -Encoding UTF8 } catch { }
    }
}

function Test-Repo {
    if (-not (Test-Path -LiteralPath (Join-Path $RepoPath '.git'))) {
        Write-Log ('目标目录不是 git 仓库：' + $RepoPath) 'ERROR'
        return $false
    }
    Ensure-Ignore
    Ensure-Inbox
    $head = RunGit @('rev-parse', '--verify', 'HEAD')
    if ($head.Code -ne 0) {
        $null = RunGit @('commit', '--allow-empty', '-m', ('init: userscript repo ' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')))
        Write-Log '当前分支没有提交，已创建初始提交'
    }
    return $true
}

function Get-ShellPath {
    # 本机 PowerShell 5.1 在扫描脚本内容时会崩溃，必须优先用 PowerShell 7。
    # 优先取 AppX 包内的真实 pwsh.exe：WindowsApps 下的别名 stub 每次激活都会闪一下窗口。
    try {
        $pkg = Get-ChildItem -LiteralPath (Join-Path $env:LOCALAPPDATA 'Microsoft\WindowsApps') -Directory -Filter 'Microsoft.PowerShell_*' -ErrorAction Stop |
            Sort-Object Name -Descending | Select-Object -First 1
        if ($pkg) {
            $real = Join-Path $pkg.FullName 'pwsh.exe'
            if (Test-Path -LiteralPath $real) { return $real }
        }
    } catch { }
    $pwsh = Get-Command pwsh -ErrorAction SilentlyContinue
    if ($pwsh -and $pwsh.Source -and ($pwsh.Source -notmatch '\\WindowsApps\\pwsh\.exe$')) { return $pwsh.Source }
    foreach ($c in @("$env:ProgramFiles\PowerShell\7\pwsh.exe",
                     "$env:ProgramFiles\PowerShell\7-preview\pwsh.exe",
                     "$env:LOCALAPPDATA\Programs\PowerShell\7\pwsh.exe")) {
        if (Test-Path -LiteralPath $c) { return $c }
    }
    if ($pwsh) { return $pwsh.Source }
    return 'powershell.exe'
}

function Get-HiddenLauncherPath {
    $dir = Join-Path $env:LOCALAPPDATA 'QwenAutoPush'
    if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    return (Join-Path $dir 'auto-push-hidden.vbs')
}

function Write-HiddenLauncher {
    # 静默启动载体：wscript 是 GUI 宿主，本身没有控制台；脚本里再用窗口样式 0 运行 pwsh，
    # 这样登录、保活、手动 start 都不会闪黑框。
    $vbs = Get-HiddenLauncherPath
    $shell = Get-ShellPath
    $self = $PSCommandPath
    $cmd = '"' + $shell + '" -NoProfile -ExecutionPolicy Bypass -File "' + $self + '"' +
        ' -Mode MODE -RepoPath "' + $RepoPath + '" -InboxPath "' + $InboxPath +
        '" -Branch "' + $Branch + '" -RemoteName "' + $RemoteName + '" -DebounceSeconds ' + $DebounceSeconds
    if ($NoPush) { $cmd = $cmd + ' -NoPush' }
    $cmdEsc = $cmd -replace '"', '""'
    $body = @(
        'Set sh = CreateObject("WScript.Shell")',
        'mode = "ensure"',
        'If WScript.Arguments.Count > 0 Then',
        '  If LCase(WScript.Arguments(0)) = "watch" Then mode = "watch"',
        'End If',
        ('cmd = "' + $cmdEsc + '"'),
        'cmd = Replace(cmd, "-Mode MODE", "-Mode " & mode)',
        'sh.Run cmd, 0, False'
    ) -join "`r`n"
    $tmp = $vbs + '.tmp'
    Set-Content -LiteralPath $tmp -Value $body -Encoding Unicode
    Move-Item -LiteralPath $tmp -Destination $vbs -Force
    return $vbs
}

function Start-HiddenWatcher {
    $vbs = Write-HiddenLauncher
    $wscript = Join-Path $env:SystemRoot 'System32\wscript.exe'
    Start-Process -FilePath $wscript -ArgumentList @('//B', '//Nologo', ('"' + $vbs + '"'), 'watch') -WindowStyle Hidden | Out-Null
    $deadline = [datetime]::Now.AddSeconds(8)
    do {
        Start-Sleep -Milliseconds 400
        $p = Find-WatcherProcess
        if ($p.Count -gt 0) {
            Set-Content -LiteralPath $PidFile -Value ($p[0]) -Encoding ASCII -ErrorAction SilentlyContinue
            return $p[0]
        }
    } while ([datetime]::Now -lt $deadline)
    return $null
}
function Push-Only {
    # 保活补推：只做 push，不碰工作区与暂存区，避免和监控进程争抢 git 索引锁
    if ($NoPush) { return }
    $url = RunGitOk @('remote', 'get-url', $RemoteName)
    if (-not $url) { return }
    # 无论有没有待推提交，都先清理此前推送成功但没删掉的收件箱原件
    Purge-VerifiedInbox
    $ahead = RunGit @('rev-list', '--count', ($RemoteName + '/' + $Branch + '..HEAD'))
    if ($ahead.Code -eq 0 -and $ahead.Out[0] -eq '0') { return }
    $push = RunGit @('push', $RemoteName, ('HEAD:' + $Branch))
    if ($push.Code -eq 0) {
        Write-Log '保活补推成功，漏推的提交已同步到 GitHub'
        Purge-VerifiedInbox
    } else {
        Write-Log ('补推未成功（网络或远端变化）：' + (($push.Out | Select-Object -Last 1))) 'WARN'
    }
}

function Find-WatcherProcess {
    # 进程号文件可能因目录权限写不进去，再用命令行特征兜底。
    # 必须限定为解释器进程本身且以 -File 方式启动本脚本，否则任何提到该字符串的
    # 查询命令都会被误判为监控进程，停止操作时会误杀无关进程。
    $found = Get-RunningPid
    $ids = @()
    if ($found) { $ids += [int]$found }
    $marker = '-File "' + (Join-Path $RepoPath 'auto-push.ps1') + '" -Mode watch'
    foreach ($x in @(Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
        Where-Object { $_.ProcessName -match '^(pwsh|powershell)(\.exe)?$' -and $_.CommandLine -like ('*' + $marker + '*') })) {
        $pid_ = [int]$x.ProcessId
        if ($pid_ -eq $PID) { continue }
        if ($ids -notcontains $pid_) { $ids += $pid_ }
    }
    return ,$ids
}

function Get-RunningPid {
    if (-not (Test-Path -LiteralPath $PidFile)) { return $null }
    $text = (Get-Content -LiteralPath $PidFile -ErrorAction SilentlyContinue | Select-Object -First 1)
    if (-not $text) { return $null }
    $candidate = 0
    if (-not [int]::TryParse([string]$text, [ref]$candidate)) { return $null }
    if (Get-Process -Id $candidate -ErrorAction SilentlyContinue) { return $candidate }
    return $null
}

function Start-Watcher {
    $st = $global:PushState

    $watcher = New-Object System.IO.FileSystemWatcher
    $watcher.Path = $RepoPath
    $watcher.IncludeSubdirectories = $true
    $watcher.InternalBufferSize = 65536
    $filter = [System.IO.NotifyFilters]::FileName
    $filter = $filter -bor [System.IO.NotifyFilters]::LastWrite
    $filter = $filter -bor [System.IO.NotifyFilters]::Size
    $filter = $filter -bor [System.IO.NotifyFilters]::DirectoryCreation
    $filter = $filter -bor [System.IO.NotifyFilters]::DirectoryDeletion
    $watcher.NotifyFilter = $filter

    $action = {
        $md = $Event.MessageData
        if ($null -eq $md) { return }
        $p = [string]$Event.SourceEventArgs.FullPath
        if ($p) {
            if ($p -match '[\\/]\.git([\\/]|$)') { return }
            if ($p -match 'auto-push\.log$') { return }
            if ($p -match '\.auto-push\.pid$') { return }
        }
        $md.Dirty = $true
        $md.LastEvent = [datetime]::Now
    }

    $subs = @()
    foreach ($evt in @('Changed', 'Created', 'Deleted', 'Renamed', 'Error')) {
        $s = Register-ObjectEvent -InputObject $watcher -EventName $evt -MessageData $st -Action $action
        if ($s) { $subs += $s }
    }
    $watcher.EnableRaisingEvents = $true
    Write-Log ('监控已启动：' + $RepoPath + '，防抖 ' + $DebounceSeconds + ' 秒，分支 ' + $Branch)
    if ($InboxPath) { Write-Log ('收件箱已启用：' + $InboxPath + '（上传核验后自动删除原件）') }

    $lastInboxScan = [datetime]::MinValue
    $lastInboxSig = ''
    try {
        while ($true) {
            Start-Sleep -Milliseconds 500
            # 收件箱在仓库外，仓库 watcher 感知不到；这里每 2 秒轮询其签名（文件名+大小+时间）
            # 一旦有新增/替换文件就让本轮变为脏，走防抖后统一摄取提交推送
            if ($InboxPath -and (([datetime]::Now) - $lastInboxScan).TotalSeconds -ge 2) {
                $lastInboxScan = [datetime]::Now
                $sig = Get-InboxSignature
                if ($sig -ne $lastInboxSig) {
                    $lastInboxSig = $sig
                    if ($sig) { $st.Dirty = $true; $st.LastEvent = [datetime]::Now }
                }
            }
            if ($st.Dirty) {
                if ((([datetime]::Now) - $st.LastEvent).TotalSeconds -ge $DebounceSeconds) {
                    Invoke-Sync 'file-change'
                    $st.Dirty = $false
                }
            }
        }
    }
    finally {
        $watcher.EnableRaisingEvents = $false
        foreach ($s in $subs) { Unregister-Event -SubscriptionId $s.Id -ErrorAction SilentlyContinue }
        $watcher.Dispose()
        Write-Log '监控已退出'
    }
}

switch ($Mode) {
    'sync' {
        if (Test-Repo) { Invoke-Sync 'manual' }
    }
    'watch' {
        if (Test-Repo) { Start-Watcher }
    }
    'ensure' {
        # 幂等保活：计划任务反复调用安全。
        # 监控没跑就拉起来；已在跑则顺手补一次同步（网络恢复后自动补齐漏推的提交）
        if (-not (Test-Repo)) { break }
        $running = Find-WatcherProcess
        if ($running.Count -gt 0) {
            Push-Only
            Write-Host ('监控运行中，进程号 ' + ($running -join ','))
            break
        }
        $self = $PSCommandPath
        $childArgs = '-NoProfile -ExecutionPolicy Bypass -File "' + $self + '" -Mode watch -RepoPath "' + $RepoPath + '" -InboxPath "' + $InboxPath + '" -Branch "' + $Branch + '" -RemoteName "' + $RemoteName + '" -DebounceSeconds ' + $DebounceSeconds
        if ($NoPush) { $childArgs = $childArgs + ' -NoPush' }
        $newPid = Start-HiddenWatcher
        if ($newPid) {
            Write-Host ('监控已拉起，进程号 ' + $newPid)
        } else {
            Write-Host '监控拉起失败'
        }
    }
    'start' {
        if (-not (Test-Repo)) { break }
        $existing = Find-WatcherProcess
        if ($existing.Count -gt 0) {
            Write-Host ('监控已在运行，进程号 ' + ($existing -join ','))
            break
        }
        $self = $PSCommandPath
        $childArgs = '-NoProfile -ExecutionPolicy Bypass -File "' + $self + '" -Mode watch -RepoPath "' + $RepoPath + '" -InboxPath "' + $InboxPath + '" -Branch "' + $Branch + '" -RemoteName "' + $RemoteName + '" -DebounceSeconds ' + $DebounceSeconds
        if ($NoPush) { $childArgs = $childArgs + ' -NoPush' }
        $newPid = Start-HiddenWatcher
        if ($newPid) { Write-Host ('后台监控已启动，进程号 ' + $newPid) }
        else { Write-Host '后台监控启动失败' }
    }
    'stop' {
        $left = Find-WatcherProcess
        if ($left.Count -eq 0) {
            Write-Host '当前没有正在运行的监控'
            break
        }
        foreach ($x in $left) {
            Stop-Process -Id $x -Force -ErrorAction SilentlyContinue
            Write-Host ('监控已停止，进程号 ' + $x)
        }
        Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
    }
    'autostart' {
        if (-not (Test-Repo)) { break }
        $sch = Join-Path $env:SystemRoot 'System32\schtasks.exe'
        $self = $PSCommandPath
        $shell = Get-ShellPath
        # 计划任务只负责“确保有监控在跑”，具体参数沿用脚本默认值，命令行更短更稳
        $vbsPath = Write-HiddenLauncher
        $wscript = Join-Path $env:SystemRoot 'System32\wscript.exe'
        $inner = '"' + $wscript + '" //B //Nologo "' + $vbsPath + '"'
        $null = & $sch /Delete /TN $TaskName /F 2>&1
        $null = & $sch /Delete /TN ($TaskName + 'KeepAlive') /F 2>&1
        # 触发器一：登录即启动监控（登录型任务在某些权限配置下会被拒绝）
        $null = & $sch /Create /TN $TaskName /SC ONLOGON /RL LIMITED /TR $inner /F 2>&1
        $loginOk = ($LASTEXITCODE -eq 0)
        # 触发器二：每 5 分钟保活一次，崩溃或断网后能自动恢复并补推
        $null = & $sch /Create /TN ($TaskName + 'KeepAlive') /SC MINUTE /MO 5 /RL LIMITED /TR $inner /F 2>&1
        $aliveOk = ($LASTEXITCODE -eq 0)
        Write-Host ('启动解释器：' + $shell)
        if ($loginOk) { Write-Host '已注册登录即启动任务' }
        else { Write-Host '登录即启动任务被系统拒绝，改用启动文件夹兜底' }
        if ($aliveOk) { Write-Host '已注册 5 分钟保活任务（自动恢复并补推）' }
        else { Write-Host '保活任务注册失败' }

        # 启动文件夹：不需要管理员权限，登录后立即拉起，和保活任务互为备份
        $startupDir = [Environment]::GetFolderPath('Startup')
        $vbs = Join-Path $startupDir 'QwenAutoPushUserscripts.vbs'
        # 登录启动项同样只调用隐藏启动器，登录时不会闪黑框
        $innerLaunch = '"' + $wscript + '" //B //Nologo "' + $vbsPath + '"'
        $vbsBody = "Set sh = CreateObject(""WScript.Shell"")" + "`r`n" + "sh.Run " + ('"' + ($innerLaunch -replace '"', '""') + '"') + ", 0, False" + "`r`n"
        try {
            Set-Content -LiteralPath $vbs -Value $vbsBody -Encoding Unicode
            Write-Host ('已写入登录启动项：' + $vbs)
        } catch {
            Write-Host ('写入启动项失败：' + $_.Exception.Message)
        }
    }
    'unautostart' {
        $sch = Join-Path $env:SystemRoot 'System32\schtasks.exe'
        $a = (& $sch /Delete /TN $TaskName /F 2>&1); $codeA = $LASTEXITCODE
        $b = (& $sch /Delete /TN ($TaskName + 'KeepAlive') /F 2>&1); $codeB = $LASTEXITCODE
        $vbs = Join-Path ([Environment]::GetFolderPath('Startup')) 'QwenAutoPushUserscripts.vbs'
        $removedVbs = $false
        if (Test-Path -LiteralPath $vbs) {
            Remove-Item -LiteralPath $vbs -Force -ErrorAction SilentlyContinue
            $removedVbs = -not (Test-Path -LiteralPath $vbs)
        }
        $hidden = Get-HiddenLauncherPath
        if (Test-Path -LiteralPath $hidden) { Remove-Item -LiteralPath $hidden -Force -ErrorAction SilentlyContinue }
        if ($codeA -eq 0 -or $codeB -eq 0 -or $removedVbs) { Write-Host '已移除开机自启与保活任务' }
        else { Write-Host '未发现开机自启任务' }
    }
    'status' {
        $running = Find-WatcherProcess
        if ($running.Count -gt 0) { Write-Host ('监控状态：运行中，进程号 ' + ($running -join ',')) }
        else { Write-Host '监控状态：未运行' }
        Write-Host ('仓库目录：' + $RepoPath)
        Write-Host ('收件箱目录：' + $InboxPath)
        if (Test-Path -LiteralPath $InboxPath) {
            $inboxFiles = @(Get-ChildItem -LiteralPath $InboxPath -File -Force -ErrorAction SilentlyContinue)
            $jsCount = @($inboxFiles | Where-Object { $_.Name -like '*.js' }).Count
            $otherCount = $inboxFiles.Count - $jsCount
            $state = '空闲'
            if ($jsCount -gt 0) {
                $state = '有 ' + $jsCount + ' 个脚本待处理'
                if ($otherCount -gt 0) { $state = $state + '（另有 ' + $otherCount + ' 个非脚本文件被搁置）' }
            } elseif ($otherCount -gt 0) { $state = '有 ' + $otherCount + ' 个非脚本文件被搁置' }
            Write-Host ('收件箱：' + $state)
            foreach ($q in @($inboxFiles | Where-Object { $_.Name -like '*.js' } | Select-Object -First 6)) {
                Write-Host ('  待处理 - ' + $q.Name + '（' + $q.Length + ' B，' + $q.LastWriteTime.ToString('MM-dd HH:mm') + '）')
            }
        }
        if (Test-Path -LiteralPath (Join-Path $RepoPath '.git')) {
            $url = RunGitOk @('remote', 'get-url', $RemoteName)
            if ($url) { Write-Host ('远程仓库：' + $url.Out[0]) } else { Write-Host '远程仓库：未配置' }
            $head = RunGitOk @('log', '-1', '--pretty=%h %ad %s', '--date=format:%Y-%m-%d %H:%M')
            if ($head) { Write-Host ('最新提交：' + $head.Out[0]) }
            $porcelain = RunGit @('status', '--porcelain')
            Write-Host ('待提交文件：' + @($porcelain.Out | Where-Object { $_ }).Count + ' 个')
            $ahead = RunGit @('rev-list', '--count', ($RemoteName + '/' + $Branch + '..HEAD'))
            if ($ahead.Code -eq 0) { Write-Host ('领先远端：' + $ahead.Out[0] + ' 个提交') }
            $behind = RunGit @('rev-list', '--count', ('HEAD..' + $RemoteName + '/' + $Branch))
            if ($behind.Code -eq 0) { Write-Host ('落后远端：' + $behind.Out[0] + ' 个提交') }
        }
        if (Test-Path -LiteralPath $LogFile) {
            Write-Host '--- 最近 10 条日志 ---'
            Get-Content -LiteralPath $LogFile -Tail 10 | ForEach-Object { Write-Host ([string]$_) }
        }
    }
}
