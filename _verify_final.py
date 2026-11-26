"""迁移保真 + CI 稳定性双判据校验。

判据 A（迁移保真）：每个 .user.js 头部 @updateURL/@downloadURL，
   必须等于「源仓库同一文件的头部值」按前缀映射规则变换后的结果，
   即 Jimmy88666888/<源仓>/main/X -> Jimmy88666888/Script-updated/main/<源仓>/X
      cdn...gh/Jimmy88666888/<源仓>@main/X -> ...@main/<源仓>/X
   这条保证：我没有改变任何脚本的指向关系，只换了仓库与加了子目录前缀。

判据 B（CI 稳定）：对参与上游同步的记录（updates.json 中带 upstream 的），
   头部 @updateURL 必须等于新版 CHANNEL 的输出，
   否则明天 CI 会把地址改成另一种写法，形成来回震荡。
"""
import json, re, io, os, sys, subprocess

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
SRC = os.path.join(os.environ['TEMP'], 'sc-migrate', 'edge-userscripts')
DST = r'D:\script'
OWNER = 'Jimmy88666888'
TARGET = 'Script-updated'
SUBDIR = 'edge-userscripts'


def map_old_to_new(u):
    if not u:
        return u
    u = u.replace(f'https://raw.githubusercontent.com/{OWNER}/edge-userscripts/main/',
                  f'https://raw.githubusercontent.com/{OWNER}/{TARGET}/main/{SUBDIR}/')
    u = u.replace(f'https://cdn.jsdelivr.net/gh/{OWNER}/edge-userscripts@main/',
                  f'https://cdn.jsdelivr.net/gh/{OWNER}/{TARGET}@main/{SUBDIR}/')
    u = u.replace(f'https://github.com/{OWNER}/edge-userscripts/blob/main/',
                  f'https://github.com/{OWNER}/{TARGET}/blob/main/{SUBDIR}/')
    return u


def head(text, key):
    m = re.search(r'^//\s*@' + key + r'\s+(\S+)', text, re.M)
    return m.group(1) if m else None


failA, failB = [], []
checkedA = 0

# ---- 判据 A：遍历源仓库所有 user.js，比对映射后的头部 ----
for root, dirs, fs in os.walk(SRC):
    dirs[:] = [d for d in dirs if d != '.git']
    for fn in fs:
        if not fn.endswith('.user.js'):
            continue
        rel = os.path.relpath(os.path.join(root, fn), SRC).replace('\\', '/')
        sp = os.path.join(DST, SUBDIR, rel)
        if not os.path.exists(sp):
            failA.append(f'{rel}: 迁移后文件缺失')
            continue
        o = io.open(os.path.join(root, fn), encoding='utf-8', errors='replace').read()
        n = io.open(sp, encoding='utf-8', errors='replace').read()
        for key in ('updateURL', 'downloadURL'):
            ov, nv = head(o, key), head(n, key)
            checkedA += 1
            if ov is None and nv is None:
                continue
            exp = map_old_to_new(ov)
            if nv != exp:
                failA.append(f'{rel} @{key}\n      期望: {exp}\n      实际: {nv}')

# ---- 判据 B：非 local 记录的头部必须等于新 CHANNEL ----
recs = json.load(io.open(os.path.join(DST, SUBDIR, 'updates.json'), encoding='utf-8'))
by_file = {r['file']: r for r in recs}
chan = {
    'pc': lambda s: f'https://cdn.jsdelivr.net/gh/{OWNER}/{TARGET}@main/{SUBDIR}/pc/{s}.user.js',
    'mobile': lambda s: f'https://raw.githubusercontent.com/{OWNER}/{TARGET}/main/{SUBDIR}/mobile/{s}.user.js',
}
synced = 0
for f, r in by_file.items():
    if not r.get('upstream'):
        continue
    synced += 1
    slug = os.path.basename(f).replace('.user.js', '')
    expect = chan[r['platform']](slug)
    n = io.open(os.path.join(DST, SUBDIR, f), encoding='utf-8', errors='replace').read()
    for key in ('updateURL', 'downloadURL'):
        got = head(n, key)
        if got != expect:
            failB.append(f'{f} @{key}\n      CHANNEL: {expect}\n      文件     : {got}')
    if r.get('update_url') != expect:
        failB.append(f'{f} json.update_url\n      CHANNEL: {expect}\n      json     : {r.get("update_url")}')

print(f'判据A 迁移保真：比对头部字段 {checkedA} 项，异常 {len(failA)} 项')
for x in failA[:12]:
    print('  X ' + x)
print(f'判据B CI 稳定：参与上游同步的记录 {synced} 条，异常 {len(failB)} 项')
for x in failB[:12]:
    print('  X ' + x)
print()
if not failA and not failB:
    print('全部通过：迁移未改变任何指向关系，且 CI 明日起不会回写异常地址')
else:
    print('存在问题，需先解决再提交')
