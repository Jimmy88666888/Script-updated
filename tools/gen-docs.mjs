#!/usr/bin/env node
/**
 * gen-docs.mjs — 说明文件生成器（updates.json / README / 安装页 三处同源）
 *
 * 仓库里"说明"分三层：updates.json（机器可读清单）、README 的两张脚本清单表、
 * docs/index.html 的卡片。以前三处全靠手改，新增脚本很容易漏。本生成器以
 * 「目录 + 脚本头部元数据 + updates.json 里已有人工说明」为唯一数据源，幂等重建：
 *
 *   1. 扫描 Local/、Author/ 下每个 <脚本名>/ 里的 *.user.js（archive/ 不算）；
 *   2. 读脚本头部的 @name / @version / @author / @license / @namespace / @description；
 *   3. 与 updates.json 合并：路径、版本、更新地址按文件实际情况刷新；name / author /
 *      description / upstream 若仓库里已有值就保留（人工整理过的说明不会被头部覆盖）；
 *      清单里已经没有对应文件的记录会被删除，新脚本则自动补一条；所有说明文本统一
 *      做空白归一化（折叠换行与连续空格、去掉包裹引号与零宽字符）；
 *   4. 用同一份数据重建 README 的 Local / Author 两张表、各处计数，以及
 *      docs/index.html 的两组卡片与计数。
 *
 * 排序固定为「Local 在前、Author 在后，组内按脚本目录名升序，同一脚本电脑版在前」，
 * 所以连跑多次不会产生 diff。
 *
 * 用法：
 *   node tools/gen-docs.mjs            # 直接写回三个文件
 *   node tools/gen-docs.mjs --dry-run  # 只报告将要发生的变化
 *   node tools/gen-docs.mjs --check    # 有不同步就退出码 1（给 CI / 提交前钩子用）
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OWNER = 'Jimmy88666888';
const REPO = 'Script-updated';

const MANIFEST = path.join(ROOT, 'updates.json');
const README = path.join(ROOT, 'README.md');
const PAGE = path.join(ROOT, 'docs/index.html');

const GROUPS = ['Local', 'Author'];
const CHECK = process.argv.includes('--check');
const DRY = process.argv.includes('--dry-run');

const cdn = (f) => `https://cdn.jsdelivr.net/gh/${OWNER}/${REPO}@main/${f}`;
const raw = (f) => `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/${f}`;
const blob = (f) => `https://github.com/${OWNER}/${REPO}/blob/main/${f}`;

/** 脚本头部更新地址的规范值：电脑版走 jsDelivr、手机版走 raw，路径统一按 encodeURI 转义 */
function expectedHeaderUrl(relPath) {
  const folder = relPath.split('/')[1];
  const stem = path.basename(relPath, '.user.js');
  const platform = stem === `${folder}-mobile` ? 'mobile' : 'pc';
  return { platform, url: encodeURI((platform === 'pc' ? cdn : raw)(relPath)) };
}

const decodeUrl = (u) => {
  try {
    return decodeURI(u);
  } catch {
    return u;
  }
};

/** 说明文本归一化：去零宽字符、折叠换行与连续空格、去掉包裹引号 */
function normText(value) {
  let s = String(value ?? '')
    .replace(/[\u200b-\u200d\ufeff]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const stripped = s.replace(/^["“”'']+/, '').replace(/["“”'']+$/, '').trim();
  if (stripped) s = stripped;
  return s;
}

/** 解析 userscript 头部注释里的 @key value */
function parseHeader(text) {
  const head = text.slice(0, 40000);
  const meta = { match: [] };
  const re = /^\/\/\s*@([\w:-]+)[ \t]+(.*)$/gm;
  let m;
  while ((m = re.exec(head))) {
    const key = m[1];
    const val = normText(m[2]);
    if (!val) continue;
    if (key === 'description') {
      // 只取第一条：多数脚本把历史更新日志也写成 @description，取首条最接近当前简介
      if (!meta.description) meta.description = val;
    } else if (key === 'match' || key === 'include' || key === 'include-match') {
      if (meta.match.length < 200 && !meta.match.includes(val)) meta.match.push(val);
    } else if (key === 'name') {
      if (!meta.name) meta.name = val;
    } else if (key === 'name:zh-CN' || key === 'name:zh-cn') {
      if (!meta.nameZh) meta.nameZh = val;
    } else if (key === 'version' && !meta.version) {
      meta.version = val;
    } else if (key === 'author' && !meta.author) {
      meta.author = val;
    } else if (key === 'license' && !meta.license) {
      meta.license = val;
    } else if (key === 'namespace' && !meta.namespace) {
      meta.namespace = val;
    }
  }
  return meta;
}

/** 扫描仓库里的脚本文件：Local/<名>/*.user.js、Author/<名>/*.user.js */
async function scanScripts() {
  const found = [];
  for (const group of GROUPS) {
    let dirs = [];
    try {
      dirs = await readdir(path.join(ROOT, group), { withFileTypes: true });
    } catch {
      continue;
    }
    for (const dir of dirs.filter((d) => d.isDirectory() && !d.name.startsWith('.'))) {
      const abs = path.join(ROOT, group, dir.name);
      const files = (await readdir(abs, { withFileTypes: true }))
        .filter((f) => f.isFile() && f.name.endsWith('.user.js'))
        .map((f) => f.name);
      for (const file of files) {
        found.push({ group, folder: dir.name, file: `${group}/${dir.name}/${file}` });
      }
    }
  }
  return found;
}

/** 更新地址归一化：脚本头部 @updateURL / @downloadURL 必须指向该文件当前的仓库路径。
 * 目录搬迁、改名、电脑版误用 raw 时自动改正；archive/ 里的旧版副本不动。
 * 返回改动过的文件清单（--check / --dry-run 只报告、不写盘）。*/
async function normalizeHeaders() {
  const changed = [];
  const line = (key, url) => `// ${key}  ${url}`;
  for (const item of await scanScripts()) {
    const abs = path.join(ROOT, item.file);
    const text = await readFile(abs, 'utf8');
    const { url } = expectedHeaderUrl(item.file);
    let out = text;

    for (const key of ['@updateURL', '@downloadURL']) {
      const re = new RegExp(`^(//\\s*${key}\\s+)(\\S+)[ \\t]*$`, 'm');
      const m = out.match(re);
      if (m) {
        if (decodeUrl(m[2]) !== decodeUrl(url)) out = out.replace(re, () => `${m[1]}${url}`);
        continue;
      }
      // 头部没有这一行时补上：@updateURL 跟在 @version 后，@downloadURL 跟在 @updateURL 后
      const anchor =
        key === '@downloadURL' && /^\/\/\s*@updateURL\s+\S+/m.test(out)
          ? /^(?:\/\/\s*@updateURL\s+\S+)[ \t]*$/m
          : /^(?:\/\/\s*@version\s+\S+)[ \t]*$/m;
      if (anchor.test(out)) out = out.replace(anchor, (found) => `${found}\n${line(key, url)}`);
    }

    if (out !== text) {
      changed.push(item.file);
      if (!CHECK && !DRY) await writeFile(abs, out, 'utf8');
    }
  }
  return changed;
}

/** 合并清单：以文件系统为准，人工字段优先保留 */
async function buildRecords() {
  const previous = JSON.parse(await readFile(MANIFEST, 'utf8'));
  const prevByFile = new Map(previous.map((r) => [r.file, r]));
  const scripts = await scanScripts();
  const records = [];
  const seen = new Set();

  for (const item of scripts) {
    const text = await readFile(path.join(ROOT, item.file), 'utf8');
    const h = parseHeader(text);
    const prev = prevByFile.get(item.file);
    const stem = path.basename(item.file, '.user.js');
    // 手机版判定只认「<目录名>-mobile.user.js」：像 html5-video-mobile.user.js 这种
    // 名字里本来就带 mobile 的电脑版脚本，不能被误判成手机版。
    const platform = stem === `${item.folder}-mobile` ? 'mobile' : 'pc';
    const pick = (key, fallback) =>
      prev && prev[key] !== undefined && prev[key] !== '' ? prev[key] : fallback;

    records.push({
      file: item.file,
      platform,
      name: pick('name', h.nameZh || h.name || stem),
      version: h.version || pick('version', '0.0.0'),
      author: prev && prev.author !== undefined ? prev.author : h.author || '',
      license: pick('license', h.license || ''),
      namespace: h.namespace || prev?.namespace || '',
      description: normText(pick('description', h.description || '')),
      upstream: prev?.upstream || '',
      upstream_install: prev?.upstream_install || '',
      // match 属于参考信息：清单里已有（哪怕是空数组）就沿用，避免每次生成把上百条
      // @match 重新灌进来；只有全新脚本才从头部取。
      match: prev ? prev.match || [] : h.match,
      update_channel: platform === 'pc' ? 'repo-mirror' : 'repo-raw',
      mirror: platform === 'pc' ? 'jsdelivr' : 'raw',
      // universal：电脑版与手机版内容一致的脚本，页面上只给一个「默认安装」入口
      universal: prev?.universal === true,
      update_url: (platform === 'pc' ? cdn : raw)(item.file),
      raw: raw(item.file),
      group: item.group,
    });
    seen.add(item.file);
  }

  for (const r of previous) {
    if (!seen.has(r.file)) {
      console.log(`  - 移除清单里已不存在的记录：${r.file}`);
    }
  }

  // 清单保持既有记录顺序，新记录按文件名排在末尾：避免每次生成都把整份 JSON 重排，
  // 让 git diff 只体现真正的内容变化（展示顺序由 groupByScript 另行排序）。
  const oldIndex = new Map(previous.map((r, i) => [r.file, i]));
  const indexOf = (r) => (oldIndex.has(r.file) ? oldIndex.get(r.file) : Number.MAX_SAFE_INTEGER);
  records.sort((a, b) => {
    const d = indexOf(a) - indexOf(b);
    return d !== 0 ? d : a.file.localeCompare(b.file, 'en');
  });

  return records;
}

/** 按脚本目录聚合，返回 [{ group, dir, pc, mobile }] */
function groupByScript(records) {
  const map = new Map();
  for (const r of records) {
    const dir = r.file.slice(0, r.file.lastIndexOf('/'));
    if (!map.has(dir)) map.set(dir, { group: r.group, dir, pc: null, mobile: null });
    const entry = map.get(dir);
    if (r.platform === 'mobile') entry.mobile = r;
    else entry.pc = r;
  }
  // 展示顺序固定：Local 在前、Author 在后，组内按脚本目录名升序（CJK 排在 ASCII 之后）
  return [...map.values()].sort((a, b) => {
    const g = GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group);
    if (g) return g;
    return a.dir.split('/')[1].localeCompare(b.dir.split('/')[1], 'en');
  });
}

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

/** README：Local 表（脚本 / 版本 / 安装 / 位置） */
function readmeLocalTable(scripts) {
  const rows = [
    '| 脚本 | 版本 | 安装 | 位置 |',
    '| --- | --- | --- | --- |',
  ];
  for (const s of scripts) {
    const main = s.pc || s.mobile;
    const href = encodeURI(main.file);
    // 通用脚本（两份内容一致）只给一个默认入口，避免同内容装两遍
    const install = main.universal
      ? `[默认安装]( ${cdn(main.file)} )（通用）`
      : s.pc && s.mobile
        ? `[电脑端]( ${cdn(s.pc.file)} ) · [手机端]( ${raw(s.mobile.file)} )`
        : `[安装]( ${raw(main.file)} )`;
    rows.push(`| [${main.name}](${href}) | ${main.version} | ${install} | \`${s.dir}/\` |`);
  }
  return rows.join('\n');
}

/** README：Author 表（脚本 / 版本 / 电脑端 / 手机端 / 原始来源） */
function readmeAuthorTable(scripts) {
  const rows = [
    '| 脚本 | 版本 | 电脑端 | 手机端 | 原始来源 |',
    '| --- | --- | --- | --- | --- |',
  ];
  for (const s of scripts) {
    const main = s.pc || s.mobile;
    const href = encodeURI(main.file);
    const pcCell = s.pc ? `[电脑端]( ${cdn(s.pc.file)} )` : '—';
    const mobileCell = s.mobile ? `[手机端]( ${raw(s.mobile.file)} )` : '—';
    const origin = main.upstream_install
      ? main.upstream_install.replace(/^https?:\/\//, '').slice(0, 64) +
        (main.upstream_install.replace(/^https?:\/\//, '').length > 64 ? '…' : '')
      : '第三方收录';
    rows.push(
      `| [${main.name}](${href}) | ${main.version} | ${pcCell} | ${mobileCell} | ${origin} |`
    );
  }
  return rows.join('\n');
}

/** 安装页：一组卡片 */
function pageCards(scripts) {
  const cards = [];
  for (const s of scripts) {
    const main = s.pc || s.mobile;
    const badge =
      s.group === 'Local'
        ? '<span class="badge local">本地维护</span>'
        : main.upstream_install
          ? '<span class="badge upstream">上游镜像</span>'
          : '<span class="badge chip">第三方收录</span>';
    // 通用脚本额外挂一个「通用」标记，按钮只留一个默认安装
    const universalTag = main.universal ? '<span class="badge chip">通用</span>' : '';
    const meta = main.author
      ? `v${esc(main.version)} · 作者 ${esc(main.author)}`
      : `v${esc(main.version)}`;
    const buttons = [];
    if (main.universal) {
      buttons.push(`<a class="btn primary" href="${cdn(main.file)}">默认安装</a>`);
    } else if (s.pc && s.mobile) {
      buttons.push(`<a class="btn primary" href="${cdn(s.pc.file)}">电脑端安装</a>`);
      buttons.push(`<a class="btn primary" href="${raw(s.mobile.file)}">手机端安装</a>`);
    } else {
      buttons.push(`<a class="btn primary" href="${raw(main.file)}">安装</a>`);
    }
    const source = `<a class="btn" href="${blob(main.file)}" target="_blank" rel="noopener">源码</a>`;
    const origin = main.upstream_install
      ? `<a class="btn" href="${main.upstream_install}" target="_blank" rel="noopener">原站</a>`
      : '';

    const lines = [
      '      <article class="card">',
      '        <div class="head">',
      `          <h3>${esc(main.name)}</h3>`,
      `          ${badge}${universalTag}`,
      '        </div>',
      `        <p class="meta">${meta}</p>`,
      `        <p class="desc">${esc(main.description)}</p>`,
      `        <div class="actions">${buttons[0]}`,
    ];
    for (const b of buttons.slice(1)) lines.push(`          ${b}`);
    lines.push(`          ${source}${origin ? `\n          ${origin}` : ''}</div>`);
    lines.push('      </article>');
    cards.push(lines.join('\n'));
  }
  return cards.join('\n');
}

function renderReadme(readme, scripts, recordCount) {
  const local = scripts.filter((s) => s.group === 'Local');
  const author = scripts.filter((s) => s.group === 'Author');
  const total = scripts.length;

  let out = readme.replace(/共 \*\*\d+\*\* 个用户脚本/, `共 **${total}** 个用户脚本`);
  out = out.replace(
    /(Author\/)(\s+)# 第三方脚本收录（\d+ 个/,
    `$1$2# 第三方脚本收录（${author.length} 个`
  );
  out = out.replace(
    /(updates\.json)(\s+)# 机器可读清单（\d+ 条：\d+ 个脚本/,
    `$1$2# 机器可读清单（${recordCount} 条：${total} 个脚本`
  );

  const localBlock =
    `### Local（${local.length} 个，自建与本地改写）\n\n${readmeLocalTable(local)}\n\n`;
  const authorBlock =
    `### Author（${author.length} 个，第三方收录）\n\n${readmeAuthorTable(author)}\n\n`;

  const localStart = out.indexOf('### Local（');
  const authorStart = out.indexOf('### Author（');
  const tailStart = out.indexOf('## 自更新机制');
  if (localStart < 0 || authorStart < 0 || tailStart < 0) {
    throw new Error('README 结构不符合预期：找不到 Local / Author / 自更新机制 章节');
  }
  out = out.slice(0, localStart) + localBlock + authorBlock + out.slice(tailStart);
  return out;
}

function renderPage(html, scripts) {
  const local = scripts.filter((s) => s.group === 'Local');
  const author = scripts.filter((s) => s.group === 'Author');
  const total = scripts.length;

  let out = html.replace(/共 \d+ 个脚本/, `共 ${total} 个脚本`);
  out = out.replace(
    /<p class="lead">共 <strong>\d+<\/strong> 个脚本：<strong>Local \d+<\/strong> 个自建与本地改写，<strong>Author \d+<\/strong> 个第三方收录。<\/p>/,
    `<p class="lead">共 <strong>${total}</strong> 个脚本：<strong>Local ${local.length}</strong> 个自建与本地改写，<strong>Author ${author.length}</strong> 个第三方收录。</p>`
  );

  const localSection =
    `  <h2 class="sect">Local <small>自建与本地改写，${local.length} 个</small></h2>\n` +
    `  <main>\n${pageCards(local)}  </main>\n`;
  const authorSection =
    `  <h2 class="sect">Author <small>第三方脚本收录，${author.length} 个</small></h2>\n` +
    `  <main>\n${pageCards(author)}  </main>\n`;

  const localStart = out.indexOf('  <h2 class="sect">Local <small>');
  const authorStart = out.indexOf('  <h2 class="sect">Author <small>');
  const footerStart = out.indexOf('</div>\n<footer>');
  if (localStart < 0 || authorStart < 0 || footerStart < 0) {
    throw new Error('安装页结构不符合预期：找不到 Local / Author 分组或页脚');
  }
  out = out.slice(0, localStart) + localSection + authorSection + out.slice(footerStart);
  return out;
}

async function main() {
  const scriptChanges = await normalizeHeaders();
  const records = await buildRecords();
  const scripts = groupByScript(records);
  const total = scripts.length;
  const local = scripts.filter((s) => s.group === 'Local').length;
  const author = scripts.filter((s) => s.group === 'Author').length;

  const nextManifest = JSON.stringify(records, null, 2) + '\n';
  const nextReadme = renderReadme(await readFile(README, 'utf8'), scripts, records.length);
  const nextPage = renderPage(await readFile(PAGE, 'utf8'), scripts);

  const changes = [];
  const pairs = [
    [MANIFEST, nextManifest],
    [README, nextReadme],
    [PAGE, nextPage],
  ];
  for (const [file, next] of pairs) {
    const current = await readFile(file, 'utf8');
    if (current !== next) changes.push([file, next]);
  }
  // 脚本头部地址已在 normalizeHeaders 中写过（--check / --dry-run 时未写），这里只登记
  for (const file of scriptChanges) changes.push([path.join(ROOT, file), null]);

  console.log(
    `脚本 ${total} 个（Local ${local} / Author ${author}），清单 ${records.length} 条`
  );

  if (!changes.length) {
    console.log('说明文件与脚本头部地址均已最新，无需改动');
    return 0;
  }
  for (const [file] of changes) console.log(`  待更新：${path.relative(ROOT, file)}`);

  if (CHECK) {
    console.log('--check：说明文件与脚本现状不同步');
    return 1;
  }
  if (DRY) {
    console.log('--dry-run：未写入');
    return 0;
  }
  for (const [file, next] of changes) {
    if (next === null) {
      console.log(`  已改写头部地址：${path.relative(ROOT, file)}`);
      continue;
    }
    await writeFile(file, next, 'utf8');
    console.log(`  已写入：${path.relative(ROOT, file)}`);
  }
  return 0;
}

main().then((code) => {
  process.exitCode = code;
});