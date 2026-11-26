import subprocess, re, collections, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

REPOS = ['edge-userscripts', 'CloudLink-Desktop', 'CloudLink-Mobile', 'LinkSwift-Mobile']
files = subprocess.run(['git', 'ls-files'], capture_output=True, text=True,
                       encoding='utf-8', errors='replace').stdout.split('\n')

pat = re.compile(
    r'(?:https?://[^\s"\'<>()\[\]]*?)(?:' + '|'.join(re.escape(r) for r in REPOS) + r')[^\s"\'<>()\[\]]*'
    r'|(?<![\w./-])(?:' + '|'.join(re.escape(r) for r in REPOS) + r')(?:/[^\s"\'<>()\[\]]*)?'
)

forms = collections.Counter()
per_file = collections.Counter()
samples = {}

for f in files:
    if not f or f.endswith(('.png', '.ico', '.jpg', '.gif', '.woff', '.woff2')):
        continue
    try:
        txt = subprocess.run(['git', 'show', 'HEAD:' + f], capture_output=True, text=True,
                             encoding='utf-8', errors='replace')
        if txt.returncode != 0:
            continue
        content = txt.stdout
    except Exception:
        continue
    for m in pat.finditer(content):
        s = m.group(0)
        # 归类形态
        if 'cdn.jsdelivr.net' in s:
            key = 'jsdelivr'
        elif 'raw.githubusercontent.com' in s:
            key = 'raw'
        elif 'github.io' in s:
            key = 'pages'
        elif 'github.com' in s and '/blob/' in s:
            key = 'github-blob'
        elif 'github.com' in s and '/tree/' in s:
            key = 'github-tree'
        elif 'github.com' in s:
            key = 'github-root'
        elif 'update.greasyfork' in s:
            key = 'greasyfork'
        else:
            key = 'bare-name'
        if s.endswith(('.', ',', ';', ')', "'", '"')):
            key += ' [trailing-punct?]'
        repo = next((r for r in REPOS if r in s), '?')
        forms[key] += 1
        per_file[repo] += 1
        samples.setdefault((key, repo), s)

print('=== 按形态 ===')
for k, v in forms.most_common():
    print(f'{v:5d}  {k}')
print('=== 按源仓库 ===')
for k, v in per_file.most_common():
    print(f'{v:5d}  {k}')
print('=== 每种形态样本 ===')
for (k, r), s in sorted(samples.items()):
    print(f'{k} | {r}')
    print(f'    {s[:200]}')
print('=== 总引用 ===', sum(forms.values()))
