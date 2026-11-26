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
    -Branch           推送分支，默认 main
    -RemoteName       远程名，默认 origin
    -DebounceSeconds  文件停止变动后等待几秒再提交，默认 8
    -NoPush           只提交不推送
#>
[CmdletBinding()]
param(
    [ValidateSet('start', 'stop', 'status', 'sync', 'watch', 'autostart', 'unautostart')]
    [string]$Mode = 'status',
    [string]$RepoPath = 'D:\script',
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
    $head = RunGit @('rev-parse', '--verify', 'HEAD')
    if ($head.Code -ne 0) {
        $null = RunGit @('commit', '--allow-empty', '-m', ('init: userscript repo ' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')))
        Write-Log '当前分支没有提交，已创建初始提交'
    }
    return $true
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

    try {
        while ($true) {
            Start-Sleep -Milliseconds 500
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
    'start' {
        if (-not (Test-Repo)) { break }
        $existing = Get-RunningPid
        if ($existing) {
            Write-Host ('监控已在运行，进程号 ' + $existing)
            break
        }
        $self = $PSCommandPath
        $childArgs = '-NoProfile -ExecutionPolicy Bypass -File "' + $self + '" -Mode watch -RepoPath "' + $RepoPath + '" -Branch "' + $Branch + '" -RemoteName "' + $RemoteName + '" -DebounceSeconds ' + $DebounceSeconds
        if ($NoPush) { $childArgs = $childArgs + ' -NoPush' }
        # 本机 PowerShell 5.1 在扫描脚本时会崩溃，优先用 PowerShell 7 常驻
        $shell = 'powershell.exe'
        $pwsh = Get-Command pwsh -ErrorAction SilentlyContinue
        if ($pwsh) { $shell = $pwsh.Source }
        $proc = Start-Process -FilePath $shell -ArgumentList $childArgs -WindowStyle Hidden -PassThru
        Set-Content -LiteralPath $PidFile -Value $proc.Id -Encoding ASCII
        Write-Host ('后台监控已启动，进程号 ' + $proc.Id)
    }
    'stop' {
        $existing = Get-RunningPid
        if (-not $existing) {
            # 进程号文件缺失时，按命令行特征兜底查找本目录的监控进程
            $left = @(Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
                Where-Object { $_.CommandLine -like '*auto-push.ps1*-Mode watch*' -and $_.CommandLine -like ('*' + $RepoPath + '*') })
            if ($left.Count -eq 0) {
                Write-Host '当前没有正在运行的监控'
                break
            }
            foreach ($x in $left) {
                Stop-Process -Id $x.ProcessId -Force -ErrorAction SilentlyContinue
                Write-Host ('监控已停止，进程号 ' + $x.ProcessId)
            }
            Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
            break
        }
        Stop-Process -Id $existing -Force -ErrorAction SilentlyContinue
        Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
        Write-Host ('监控已停止，进程号 ' + $existing)
    }
    'autostart' {
        if (-not (Test-Repo)) { break }
        $sch = Join-Path $env:SystemRoot 'System32\schtasks.exe'
        $self = $PSCommandPath
        $shell = 'powershell.exe'
        $pwsh = Get-Command pwsh -ErrorAction SilentlyContinue
        if ($pwsh) { $shell = '"' + $pwsh.Source + '"' }
        $inner = $shell + ' -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "' + $self + '" -Mode watch -RepoPath "' + $RepoPath + '" -Branch "' + $Branch + '" -RemoteName "' + $RemoteName + '" -DebounceSeconds ' + $DebounceSeconds
        $null = & $sch /Delete /TN $TaskName /F 2>&1
        $null = & $sch /Create /TN $TaskName /SC ONLOGON /RL LIMITED /TR ('"' + $inner + '"') /F 2>&1
        if ($LASTEXITCODE -eq 0) { Write-Host '已注册开机自动监控，登录后自动启动' }
        else { Write-Host '注册计划任务失败，可改用 start 手动启动' }
    }
    'unautostart' {
        $sch = Join-Path $env:SystemRoot 'System32\schtasks.exe'
        $null = & $sch /Delete /TN $TaskName /F 2>&1
        if ($LASTEXITCODE -eq 0) { Write-Host '已移除开机自动监控任务' }
        else { Write-Host '未发现开机自动监控任务' }
    }
    'status' {
        $running = Get-RunningPid
        if ($running) { Write-Host ('监控状态：运行中，进程号 ' + $running) }
        else { Write-Host '监控状态：未运行' }
        Write-Host ('仓库目录：' + $RepoPath)
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
