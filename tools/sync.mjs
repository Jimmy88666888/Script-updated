#!/usr/bin/env node
/**
 * sync.mjs — 上游脚本同步器（同一脚本目录下的电脑版 / 手机版两份）
 *
 * 仓库按作者归属分为 Local/ 与 Author/，每个脚本一个同名子目录，目录内放
 * <脚本名>.user.js（电脑版）与 <脚本名>-mobile.user.js（手机版）。
 * updates.json 每条记录带 platform（pc / mobile）与 file（仓库内相对路径），
 * 同步时取上游最新 @version 与全文，再按各自平台重写 @version 与更新地址：
 *   pc     -> https://cdn.jsdelivr.net/gh/<owner>/<repo>@main/<file>
 *   mobile -> https://raw.githubusercontent.com/<owner>/<repo>/main/<file>
 * 无上游来源（本地维护脚本）不参与同步。
 *
 * 用法：node tools/sync.mjs [--dry-run]
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = path.join(ROOT, 'updates.json');
const DRY = process.argv.includes('--dry-run');

const OWNER = 'Jimmy88666888';
const REPO = 'Script-updated';
// rec.file 已经是仓库内相对路径（如 Author/pagetual/pagetual-mobile.user.js），
// 直接由它拼出更新地址，避免再手写一层目录前缀。
const CHANNEL = {
  pc: (file) => `https://cdn.jsdelivr.net/gh/${OWNER}/${REPO}@main/${file}`,
  mobile: (file) => `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/${file}`,
};

const VERSION_RE = /^\/\/\s*@version\s+(\S+)\s*$/m;
const UP_RE = /^\/\/\s*@updateURL\s+\S+\s*$/m;
const DOWN_RE = /^\/\/\s*@downloadURL\s+\S+\s*$/m;

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'edge-userscripts-sync/1.0' },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.text();
}

function pickVersion(text) {
  const m = text.match(VERSION_RE);
  return m ? m[1] : null;
}

async function upstreamVersion(url) {
  const metaUrl = url.replace(/\.user\.js(\?.*)?$/, '.meta.js$1');
  const candidates = metaUrl !== url ? [metaUrl, url] : [url];
  let lastErr;
  for (const u of candidates) {
    try {
      const text = await fetchText(u);
      const version = pickVersion(text);
      if (version) return version;
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('no version found');
}

function rewrite(text, version, url) {
  let out = text.replace(VERSION_RE, `// @version ${version}`);
  out = out.replace(UP_RE, `// @updateURL    ${url}`);
  out = out.replace(DOWN_RE, `// @downloadURL  ${url}`);
  return out.endsWith('\n') ? out : out + '\n';
}

async function main() {
  const records = JSON.parse(await readFile(MANIFEST, 'utf8'));
  const groups = new Map();
  for (const r of records) {
    const slug = path.basename(r.file, '.user.js');
    if (!groups.has(slug)) groups.set(slug, []);
    groups.get(slug).push(r);
  }

  const changes = [];
  for (const [slug, group] of groups) {
    const upstream = group.find((r) => r.upstream)?.upstream;
    if (!upstream) continue;
    process.stdout.write(`check ${slug} ... `);
    try {
      const version = await upstreamVersion(upstream);
      if (version === group[0].version) {
        console.log(`up to date (${version})`);
        continue;
      }
      const installUrl = group[0].upstream_install || upstream;
      const body = await fetchText(installUrl);
      console.log(`update ${group[0].version} -> ${version}`);
      changes.push({ slug, group, version, body });
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  }

  if (!changes.length) {
    console.log('no updates');
    return;
  }
  if (DRY) {
    console.log(`dry-run: ${changes.length} script(s) would change`);
    return;
  }
  for (const { slug, group, version, body } of changes) {
    for (const rec of group) {
      const url = CHANNEL[rec.platform](rec.file);
      const target = path.join(ROOT, rec.file);
      await writeFile(target, rewrite(body, version, url), 'utf8');
      rec.version = version;
      rec.synced_at = new Date().toISOString().slice(0, 10);
    }
  }
  await writeFile(MANIFEST, JSON.stringify(records, null, 2) + '\n', 'utf8');
  console.log(`updated ${changes.length} script(s), ${changes.length * 2} file(s), manifest refreshed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});