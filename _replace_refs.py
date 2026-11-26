"""把并入 Script-updated 的四个仓库中的旧仓库绝对地址，改写为新仓库+子目录地址。

替换规则（R = 源仓库名，P = 子目录前缀，与 R 同名）：
  raw        raw.githubusercontent.com/Jimmy88666888/{R}/main/{rest}
             -> raw.githubusercontent.com/Jimmy88666888/Script-updated/main/{R}/{rest}
  jsdelivr   cdn.jsdelivr.net/gh/Jimmy88666888/{R}@main/{rest}
             -> cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/{R}/{rest}
  blob/tree  github.com/Jimmy88666888/{R}/(blob|tree)/main/{rest}
             -> github.com/Jimmy88666888/Script-updated/\1/main/{R}/{rest}
  root       github.com/Jimmy88666888/{R}  (后面不接路径)
             -> github.com/Jimmy88666888/Script-updated/tree/main/{R}
  pages      jimmy88666888.github.io/{R}[/...]
             -> jimmy88666888.github.io/Script-updated/

刻意不改动：
  - "namespace": "local.edge-userscripts/..."  改了会让油猴管理器认成另一个脚本
  - 仓库内相对路径（README 表格里的 pc/xxx.user.js 之类）
"""
import subprocess, re, sys, io, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

OWNER = 'Jimmy88666888'
TARGET = 'Script-updated'
SOURCES = ['edge-userscripts', 'CloudLink-Desktop', 'CloudLink-Mobile', 'LinkSwift-Mobile']

APPLY = '--apply' in sys.argv

# 按“先具体后笼统”排序，避免 root 规则抢先把带路径的链接截断
RULES = []
for R in SOURCES:
    RULES += [
        ('raw', re.compile(
            r'https://raw\.githubusercontent\.com/' + OWNER + '/' + R + r'/main/(\S+?)'
            r'(?=["\'\s)\]>,;]|$)'),
            lambda m, R=R: 'https://raw.githubusercontent.com/' + OWNER + '/' + TARGET + '/main/' + R + '/' + m.group(1)),

        ('jsdelivr', re.compile(
            r'https://cdn\.jsdelivr\.net/gh/' + OWNER + '/' + R + r'@main/(\S+?)'
            r'(?=["\'\s)\]>,;]|$)'),
            lambda m, R=R: 'https://cdn.jsdelivr.net/gh/' + OWNER + '/' + TARGET + '@main/' + R + '/' + m.group(1)),

        ('blobtree', re.compile(
            r'https://github\.com/' + OWNER + '/' + R + r'/(blob|tree)/main/(\S+?)'
            r'(?=["\'\s)\]>,;]|$)'),
            lambda m, R=R: 'https://github.com/' + OWNER + '/' + TARGET + '/' + m.group(1) + '/main/' + R + '/' + m.group(2)),

        ('pages', re.compile(
            r'https://' + OWNER.lower() + r'\.github\.io/' + R + r'([^\s"\'<>)]*)'),
            lambda m, R=R: 'https://' + OWNER.lower() + '.github.io/' + TARGET + m.group(1)),

        # 纯尾斜杠形式：github.com/{R}/  （后面紧跟定界符，排除 /blob/ /issues/ 等）
        ('rootslash', re.compile(
            r'https://github\.com/' + OWNER + '/' + R + r'/(?=["\'\s)\]>,;]|$)'),
            lambda m, R=R: 'https://github.com/' + OWNER + '/' + TARGET + '/tree/main/' + R + '/'),

        ('root', re.compile(
            r'https://github\.com/' + OWNER + '/' + R + r'(?![\w/.-])'),
            lambda m, R=R: 'https://github.com/' + OWNER + '/' + TARGET + '/tree/main/' + R),

        # github.com/{R}/issues|releases|pulls|actions 等子页面 -> 新仓库同名子页面
        ('subpage', re.compile(
            r'https://github\.com/' + OWNER + '/' + R + r'/(issues|releases|pulls|actions|discussions|stars|forks|network)(\S*?)'
            r'(?=["\'\s)\]>,;]|$)'),
            lambda m: 'https://github.com/' + OWNER + '/' + TARGET + '/' + m.group(1) + m.group(2)),
    ]

files = [f for f in subprocess.run(['git', 'ls-files'], capture_output=True, text=True,
                                   encoding='utf-8', errors='replace').stdout.split('\n') if f]

report = {}
total = 0
after = {}   # 文件名 -> 替换后的文本（dry-run 也在内存里得到结果，残留检查据此判定）
for f in files:
    if f.endswith(('.png', '.ico', '.jpg', '.gif', '.woff', '.woff2', '.zip')):
        continue
    try:
        with open(f, 'r', encoding='utf-8') as fh:
            text = fh.read()
    except (UnicodeDecodeError, IsADirectoryError, FileNotFoundError):
        continue
    orig = text
    cnt = {}
    for name, rx, rep in RULES:
        text, n = rx.subn(rep, text)
        if n:
            cnt[name] = cnt.get(name, 0) + n
    after[f] = text
    if text != orig:
        s = sum(cnt.values())
        total += s
        report[f] = (s, cnt)
        if APPLY:
            with open(f, 'w', encoding='utf-8', newline='') as fh:
                fh.write(text)

print('模式: ' + ('APPLY（已写入）' if APPLY else 'DRY-RUN（未写入）'))
print('受影响文件: %d 个，替换总数: %d 处' % (len(report), total))
agg = {}
for f, (s, cnt) in report.items():
    for k, v in cnt.items():
        agg[k] = agg.get(k, 0) + v
print('按形态: ' + ', '.join('%s=%d' % (k, v) for k, v in sorted(agg.items(), key=lambda x: -x[1])))
print()
for f, (s, cnt) in sorted(report.items(), key=lambda x: -x[1][0])[:12]:
    print('  %4d  %s' % (s, f))

# 残留检查：只看“仍指向旧仓库”的 URL。
# 注意不能简单匹配仓库名，因为新地址里 edge-userscripts/ 是合法子目录名。
print()
print('=== 残留检查（替换后仍指向旧仓库的绝对 URL）===')
OLD_URL = re.compile(
    r'https?://(?:'
    r'(?:raw\.githubusercontent\.com|cdn\.jsdelivr\.net/gh|github\.com)/' + OWNER + r'/'
    r'|(?:[a-z0-9-]+)\.github\.io/'
    r')(?:' + '|'.join(re.escape(r) for r in SOURCES) + r')(?![\w-])',
    re.I)
leftover = []
for f, text in after.items():
    for m in OLD_URL.finditer(text):
        end = m.start()
        while end < len(text) and text[end] not in '"\'<> )]\r\n,;':
            end += 1
        leftover.append((f, text[m.start():end][:150]))
print('残留 URL 数: %d' % len(leftover))
for f, u in leftover[:20]:
    print('  %s  %s' % (f, u))
