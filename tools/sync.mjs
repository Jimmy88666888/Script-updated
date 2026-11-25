#!/usr/bin/env node
/**
 * sync.mjs — 上游脚本同步器
 *
 * 读取 updates.json，对 update_channel === 'upstream' 的条目抓取上游 meta，
 * 比对 @version；上游更新时用上游完整脚本替换本地文件，并回写版本号。
 * 由 update_channel === 'repo' 的条目由本仓库自行维护，不做拉取。
 *
 * 用法：node tools/sync.mjs [--dry-run]
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = path.join(ROOT, 'updates.json');
const DRY = process.argv.includes('--dry-run');

const VERSION_RE = /^\/\/\s*@version\s+(\S+)\s*$/m;
const NAME_RE = /^\/\/\s*@name\s+(.+?)\s*$/m;

function pickVersion(text) {
  const m = text.match(VERSION_RE);
  return m ? m[1] : null;
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'edge-userscripts-sync/1.0' },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.text();
}

/** 抓取 meta 以取版本；meta 不可用时退回抓完整脚本 */
async function upstreamVersion(url) {
  const metaUrl = url.replace(/\.user\.js(\?.*)?$/, '.meta.js$1');
  const candidates = metaUrl !== url ? [metaUrl, url] : [url];
  let lastErr;
  for (const u of candidates) {
    try {
      const text = await fetchText(u);
      const version = pickVersion(text);
      if (version) return { version, metaUrl: u };
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('no version found');
}

function withVersion(text, version) {
  if (VERSION_RE.test(text)) return text.replace(VERSION_RE, `// @version ${version}`);
  return text;
}

async function main() {
  const records = JSON.parse(await readFile(MANIFEST, 'utf8'));
  const changes = [];
  const skipped = [];

  for (const rec of records) {
    if (rec.update_channel !== 'upstream' || !rec.upstream) {
      skipped.push(rec);
      continue;
    }
    process.stdout.write(`check ${rec.file} ... `);
    try {
      const { version } = await upstreamVersion(rec.upstream);
      if (version === rec.version) {
        console.log(`up to date (${version})`);
        continue;
      }
      const installUrl = rec.upstream_install || rec.upstream;
      let body = await fetchText(installUrl);
      const fetchedName = (body.match(NAME_RE) || [])[1] || rec.name;
      if (fetchedName.trim() !== rec.name.trim()) {
        console.log(`skip: upstream name changed -> ${fetchedName}`);
        continue;
      }
      if (!body.endsWith('\n')) body += '\n';
      console.log(`update ${rec.version} -> ${version}`);
      changes.push({ rec, version, body });
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  }

  if (!changes.length) {
    console.log('no updates');
    return;
  }
  if (DRY) {
    console.log(`dry-run: ${changes.length} file(s) would change`);
    return;
  }
  for (const { rec, version, body } of changes) {
    await writeFile(path.join(ROOT, rec.file), withVersion(body, version), 'utf8');
    rec.version = version;
    rec.synced_at = new Date().toISOString().slice(0, 10);
  }
  await writeFile(MANIFEST, JSON.stringify(records, null, 2) + '\n', 'utf8');
  console.log(`updated ${changes.length} file(s), manifest refreshed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});