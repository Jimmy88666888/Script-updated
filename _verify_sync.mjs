// 静态一致性校验：不联网、不执行 sync.mjs 的 main()。
// 从 sync.mjs 源码里取出 CHANNEL 的模板字符串，代入常量算出“CI 明天会写入的地址”，
// 再与两处现状比对：
//   1) 各 .user.js 头部的 @updateURL / @downloadURL（批量改写后的结果）
//   2) updates.json 里该记录的 update_url / raw
// 三者必须完全一致，否则定时同步会把地址改回旧仓库。
import { readFileSync } from 'node:fs';

const src = readFileSync('edge-userscripts/tools/sync.mjs', 'utf8');
const grab = (name) => {
  const m = src.match(new RegExp(`const ${name} = '([^']+)'`));
  return m ? m[1] : null;
};
const OWNER = grab('OWNER');
const REPO = grab('REPO');
const SUBDIR = grab('SUBDIR');
const chanBlock = src.match(/const CHANNEL = \{([\s\S]*?)\n\};/);

if (!chanBlock) { console.log('无法解析 CHANNEL'); process.exit(1); }
const templates = {};
for (const line of chanBlock[1].split('\n')) {
  const m = line.match(/^\s*(pc|mobile):\s*\(slug\)\s*=>\s*`([^`]+)`/);
  if (m) templates[m[1]] = m[2];
}
const expand = (tpl, slug) => tpl
  .replace(/\$\{OWNER\}/g, OWNER)
  .replace(/\$\{REPO\}/g, REPO)
  .replace(/\$\{SUBDIR\}/g, SUBDIR)
  .replace(/\$\{slug\}/g, slug);

console.log(`OWNER=${OWNER} REPO=${REPO} SUBDIR=${SUBDIR}`);
console.log(`pc 模板    = ${templates.pc}`);
console.log(`mobile 模板= ${templates.mobile}\n`);

const records = JSON.parse(readFileSync('edge-userscripts/updates.json', 'utf8'));
let bad = 0, checked = 0;

for (const rec of records) {
  const slug = rec.file.replace(/^.*\//, '').replace(/\.user\.js$/, '');
  const chanUrl = expand(templates[rec.platform], slug);
  const body = readFileSync('edge-userscripts/' + rec.file, 'utf8');
  const up = (body.match(/^\/\/\s*@updateURL\s+(\S+)/m) || [])[1];
  const down = (body.match(/^\/\/\s*@downloadURL\s+(\S+)/m) || [])[1];

  checked++;
  const errs = [];
  // CI 真正写回的只有脚本头部两个字段，必须等于 CHANNEL 输出
  if (up !== chanUrl) errs.push(`@updateURL 不一致\n      文件: ${up}\n      CI  : ${chanUrl}`);
  if (down !== chanUrl) errs.push(`@downloadURL 不一致\n      文件: ${down}\n      CI  : ${chanUrl}`);
  // update_url / raw 是文档字段，CI 不写回；只要求它们已指向新仓库的正确路径
  const selfRaw = `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/edge-userscripts/${rec.file}`;
  if (rec.raw !== selfRaw) errs.push(`updates.json.raw 未指向新仓库\n      json: ${rec.raw}\n      期望: ${selfRaw}`);
  if (rec.update_url !== selfRaw) errs.push(`updates.json.update_url 未指向新仓库\n      json: ${rec.update_url}\n      期望: ${selfRaw}`);

  if (errs.length) { bad++; console.log(`X ${rec.file} [${rec.platform}]`); for (const e of errs) console.log('    ' + e); }
}

console.log(`\n检查记录 ${checked} 条，问题 ${bad} 条`);
console.log(bad === 0 ? 'PASS: CI 重写地址与现状完全一致，不会出现回退死链' : 'FAIL: 存在不一致，CI 会覆盖成另一种地址');
