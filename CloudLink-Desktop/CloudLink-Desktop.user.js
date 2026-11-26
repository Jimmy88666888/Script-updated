// ==UserScript==
// @name              CloudLink Desktop
// @namespace         github.com/Jimmy88666888/CloudLink-Desktop
// @version           1.0.2
// @description       国际网盘电脑直链助手：Google Drive / OneDrive / Dropbox。支持复制直链、IDM(.ef2)、Mister Download Manager(MDM)、Aria2 RPC、curl/aria2c。
// @description:zh-CN 国际网盘电脑直链助手：Google Drive / OneDrive / Dropbox。支持复制直链、IDM(.ef2)、Mister Download Manager(MDM)、Aria2 RPC、curl/aria2c。
// @author            CloudLink Desktop
// @license           MIT
// @icon              https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Desktop/main/icon.svg
// @match             *://drive.google.com/*
// @match             *://drive.usercontent.google.com/*
// @match             *://docs.google.com/*
// @match             *://onedrive.live.com/*
// @match             *://*.onedrive.live.com/*
// @match             *://1drv.ms/*
// @match             *://*.sharepoint.com/*
// @match             *://*.sharepoint.cn/*
// @match             *://www.dropbox.com/*
// @match             *://dropbox.com/*
// @match             *://www.dropboxusercontent.com/*
// @grant             GM_setClipboard
// @grant             GM_notification
// @grant             GM_addStyle
// @grant             GM_xmlhttpRequest
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_download
// @connect           127.0.0.1
// @connect           localhost
// @connect           *
// @run-at            document-idle
// @updateURL         https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Desktop/main/CloudLink-Desktop.user.js
// @downloadURL       https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Desktop/main/CloudLink-Desktop.user.js
// @homepageURL       https://github.com/Jimmy88666888/CloudLink-Desktop
// @supportURL        https://github.com/Jimmy88666888/CloudLink-Desktop/issues
// ==/UserScript==

(function () {
  "use strict";

  const HOST = location.hostname;
  const PATH = location.pathname;
  const HREF = location.href;

  const DEFAULTS = {
    aria2Url: "http://127.0.0.1:6800/jsonrpc",
    aria2Token: "",
    aria2Dir: "",
  };

  function cfg(key) {
    const v = GM_getValue(key, DEFAULTS[key]);
    return v == null ? DEFAULTS[key] : v;
  }
  function setCfg(key, val) {
    GM_setValue(key, val);
  }

  function toast(msg) {
    try {
      GM_notification({ title: "CloudLink Desktop", text: String(msg), timeout: 2800 });
    } catch (_) {}
    let el = document.getElementById("cld-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "cld-toast";
      document.documentElement.appendChild(el);
    }
    el.textContent = String(msg);
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function copyText(text) {
    const t = String(text || "").trim();
    if (!t) return toast("没有可复制的内容");
    try {
      GM_setClipboard(t, "text");
      toast("已复制到剪贴板");
      return;
    } catch (_) {}
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(t).then(
        () => toast("已复制到剪贴板"),
        () => toast("复制失败")
      );
      return;
    }
    toast("复制失败");
  }

  function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.remove();
    }, 1000);
    toast("已导出 " + filename);
  }

  /** IDM 批量导入格式 .ef2 */
  function toIDMEf2(items) {
    // 每条：<url>\r\n  可选 referer / filename 用 IDM 扩展语法
    return items
      .map((it) => {
        const lines = [`<${it.url}>`];
        if (it.referer) lines.push(`referer: ${it.referer}`);
        if (it.name) lines.push(`filename: ${it.name}`);
        return lines.join("\r\n");
      })
      .join("\r\n\r\n");
  }

  /**
   * Mister Download Manager (MDM)
   * - 官方支持：任务 → 导入 → 从 IDM 导出文件（.ef2，含 referer）
   * - 剪贴板批量：任务 → 从剪贴板批量添加下载 (Ctrl+B)，识别 http(s) 与 <url>
   * - 文本导入：任务 → 导入 → 从文本文件（一行一个 URL）
   * 这里同时提供：纯 URL 列表（Ctrl+B / 文本导入）以及带文件名的 Markdown 列表
   */
  function toMDMUrlList(items) {
    return items.map((it) => it.url).join("\n");
  }

  function toMDMMarkdown(items) {
    return items
      .map((it) => {
        const name = (it.name || "file").replace(/[\[\]]/g, "");
        return `[${name}](${it.url})`;
      })
      .join("\n");
  }

  function toMDMAngle(items) {
    // MDM 也识别尖括号中的地址
    return items.map((it) => `<${it.url}>`).join("\n");
  }

  function toAria2cLines(items) {
    return items
      .map((it) => {
        const parts = [`aria2c "${it.url}"`];
        if (it.name) parts.push(`-o "${String(it.name).replace(/"/g, "")}"`);
        if (it.referer) parts.push(`--referer="${it.referer}"`);
        parts.push(`--user-agent="${navigator.userAgent}"`);
        return parts.join(" ");
      })
      .join("\n");
  }

  function toCurlLines(items) {
    return items
      .map((it) => {
        const parts = [`curl -L -O`];
        if (it.referer) parts.push(`-e "${it.referer}"`);
        parts.push(`-A "${navigator.userAgent}"`);
        if (it.name) parts.push(`-o "${String(it.name).replace(/"/g, "")}"`);
        parts.push(`"${it.url}"`);
        return parts.join(" ");
      })
      .join("\n");
  }

  function pushAria2(items) {
    const url = cfg("aria2Url") || DEFAULTS.aria2Url;
    const token = cfg("aria2Token") || "";
    const dir = cfg("aria2Dir") || "";
    let ok = 0;
    let fail = 0;
    const jobs = items.map((it) => {
      const opts = {
        out: it.name || undefined,
        referer: it.referer || location.origin + "/",
        "user-agent": navigator.userAgent,
      };
      if (dir) opts.dir = dir;
      const params = [[it.url], opts];
      if (token) params.unshift(`token:${token}`);
      return new Promise((resolve) => {
        GM_xmlhttpRequest({
          method: "POST",
          url,
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            jsonrpc: "2.0",
            id: "cld-" + Date.now() + Math.random(),
            method: "aria2.addUri",
            params,
          }),
          onload(res) {
            try {
              const j = JSON.parse(res.responseText);
              if (j.result) ok++;
              else fail++;
            } catch (_) {
              fail++;
            }
            resolve();
          },
          onerror() {
            fail++;
            resolve();
          },
        });
      });
    });
    Promise.all(jobs).then(() => {
      toast(`Aria2 推送完成：成功 ${ok}，失败 ${fail}`);
    });
  }

  // ---------- UI ----------
  GM_addStyle(`
    #cld-fab{
      position:fixed;right:18px;bottom:22px;z-index:2147483646;
      height:44px;padding:0 16px;border:none;border-radius:999px;
      background:#1d4ed8;color:#fff;font:700 13px/44px system-ui,sans-serif;
      box-shadow:0 10px 28px rgba(29,78,216,.4);cursor:pointer;
    }
    #cld-fab:hover{filter:brightness(1.08)}
    #cld-panel{
      position:fixed;right:18px;bottom:78px;width:min(440px,94vw);max-height:72vh;
      z-index:2147483647;background:#0b1220;color:#e5e7eb;border-radius:14px;
      box-shadow:0 18px 50px rgba(0,0,0,.4);display:flex;flex-direction:column;
      font:13px/1.45 system-ui,sans-serif;overflow:hidden;
    }
    #cld-panel .hd{
      display:flex;align-items:center;justify-content:space-between;gap:8px;
      padding:12px 14px;border-bottom:1px solid #1f2937;font-weight:700;
    }
    #cld-panel .hd button{
      border:none;background:#111827;color:#e5e7eb;border-radius:8px;
      padding:6px 10px;cursor:pointer;font-weight:600;
    }
    #cld-panel .tools{
      display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px;border-bottom:1px solid #1f2937;
    }
    #cld-panel .tools button{
      border:none;border-radius:8px;padding:7px 10px;cursor:pointer;font-weight:700;color:#fff;
      background:#2563eb;
    }
    #cld-panel .tools button.s2{background:#0f766e}
    #cld-panel .tools button.s3{background:#7c3aed}
    #cld-panel .tools button.s4{background:#b45309}
    #cld-panel .tools button.s5{background:#334155}
    #cld-panel .list{overflow:auto;padding:8px 12px 14px;flex:1}
    #cld-panel .row{
      padding:8px 0;border-bottom:1px solid #1f2937;
    }
    #cld-panel .row:last-child{border-bottom:0}
    #cld-panel .name{font-weight:600;color:#f9fafb;word-break:break-all;margin-bottom:4px}
    #cld-panel .url{color:#93c5fd;font-size:12px;word-break:break-all;opacity:.9}
    #cld-panel .settings{padding:10px 12px 14px;border-top:1px solid #1f2937;display:none}
    #cld-panel .settings.show{display:block}
    #cld-panel .settings label{display:block;margin:8px 0 4px;color:#9ca3af}
    #cld-panel .settings input{
      width:100%;box-sizing:border-box;border:1px solid #374151;border-radius:8px;
      background:#111827;color:#e5e7eb;padding:8px 10px;
    }
    #cld-toast{
      position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);
      z-index:2147483647;background:#111827;color:#fff;padding:10px 16px;border-radius:10px;
      opacity:0;pointer-events:none;transition:.2s;max-width:90vw;text-align:center;
      box-shadow:0 8px 24px rgba(0,0,0,.3);
    }
    #cld-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
  `);

  let currentItems = [];

  function showPanel(items) {
    currentItems = (items || []).filter((x) => x && x.url);
    const old = document.getElementById("cld-panel");
    if (old) old.remove();

    const box = document.createElement("div");
    box.id = "cld-panel";
    box.innerHTML = `
      <div class="hd">
        <span>CloudLink Desktop · ${currentItems.length} 个文件</span>
        <div>
          <button type="button" id="cld-set">设置</button>
          <button type="button" id="cld-close">关闭</button>
        </div>
      </div>
      <div class="tools">
        <button type="button" data-act="copy-all">复制全部直链</button>
        <button type="button" class="s2" data-act="idm">导出 IDM/MDM (.ef2)</button>
        <button type="button" class="s3" data-act="mdm">复制给 MDM (Ctrl+B)</button>
        <button type="button" class="s3" data-act="mdm-txt">导出 MDM 文本</button>
        <button type="button" class="s4" data-act="aria2">推送 Aria2</button>
        <button type="button" class="s5" data-act="aria2c">复制 aria2c</button>
        <button type="button" class="s5" data-act="curl">复制 curl</button>
      </div>
      <div class="list"></div>
      <div class="settings" id="cld-settings">
        <label>Aria2 RPC 地址</label>
        <input id="cld-aria2-url" />
        <label>Aria2 Token（可空）</label>
        <input id="cld-aria2-token" />
        <label>下载目录 dir（可空）</label>
        <input id="cld-aria2-dir" />
        <div style="margin-top:10px">
          <button type="button" id="cld-save-set" style="border:none;border-radius:8px;padding:8px 12px;background:#2563eb;color:#fff;font-weight:700;cursor:pointer">保存设置</button>
        </div>
        <p style="color:#9ca3af;margin:10px 0 0;font-size:12px">
          <b>IDM</b>：导出 .ef2 → 任务 → 导入 → 从 EF2 文件导入。<br/>
          <b>Mister Download Manager (MDM)</b>：<br/>
          · 推荐：同一 .ef2 → 任务 → 导入 → 从 IDM 导出文件（带 referer）<br/>
          · 或点「复制给 MDM」后在 MDM 按 <b>Ctrl+B</b>（从剪贴板批量添加）<br/>
          · 或「导出 MDM 文本」→ 任务 → 导入 → 从文本文件
        </p>
      </div>
    `;
    document.documentElement.appendChild(box);

    const list = box.querySelector(".list");
    currentItems.forEach((it) => {
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `<div class="name"></div><div class="url"></div>`;
      row.querySelector(".name").textContent = it.name || "file";
      row.querySelector(".url").textContent = it.url;
      list.appendChild(row);
    });

    box.querySelector("#cld-close").onclick = () => box.remove();
    box.querySelector("#cld-set").onclick = () => {
      box.querySelector("#cld-settings").classList.toggle("show");
    };
    box.querySelector("#cld-aria2-url").value = cfg("aria2Url");
    box.querySelector("#cld-aria2-token").value = cfg("aria2Token");
    box.querySelector("#cld-aria2-dir").value = cfg("aria2Dir");
    box.querySelector("#cld-save-set").onclick = () => {
      setCfg("aria2Url", box.querySelector("#cld-aria2-url").value.trim());
      setCfg("aria2Token", box.querySelector("#cld-aria2-token").value.trim());
      setCfg("aria2Dir", box.querySelector("#cld-aria2-dir").value.trim());
      toast("设置已保存");
    };

    box.querySelector(".tools").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-act]");
      if (!btn) return;
      const act = btn.getAttribute("data-act");
      if (!currentItems.length) return toast("没有可处理的链接");
      if (act === "copy-all") copyText(currentItems.map((x) => x.url).join("\n"));
      // IDM 与 MDM 共用 .ef2（MDM 官方支持导入 IDM 导出文件）
      if (act === "idm") downloadTextFile("cloudlink-idm.ef2", toIDMEf2(currentItems));
      // Mister Download Manager：复制 URL 列表，用户在 MDM 中 Ctrl+B
      if (act === "mdm") {
        copyText(toMDMUrlList(currentItems));
        toast("已复制 URL 列表，请在 MDM 中按 Ctrl+B");
      }
      // 导出纯文本 / Markdown，便于 MDM「导入 → 从文本文件」
      if (act === "mdm-txt") {
        const body =
          toMDMUrlList(currentItems) +
          "\n\n# markdown\n" +
          toMDMMarkdown(currentItems) +
          "\n\n# angle-brackets\n" +
          toMDMAngle(currentItems);
        downloadTextFile("cloudlink-mdm.txt", body);
        copyText(toMDMUrlList(currentItems));
      }
      if (act === "aria2") pushAria2(currentItems);
      if (act === "aria2c") copyText(toAria2cLines(currentItems));
      if (act === "curl") copyText(toCurlLines(currentItems));
    });
  }

  function fab(onClick) {
    if (document.getElementById("cld-fab")) return;
    const btn = document.createElement("button");
    btn.id = "cld-fab";
    btn.type = "button";
    btn.textContent = "CloudLink";
    btn.onclick = onClick;
    document.documentElement.appendChild(btn);
  }

  // ---------- Google Drive ----------
  function gdriveId(url) {
    const u = url || HREF;
    let m = u.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    m = u.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    m = u.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  }
  function gdriveUrl(id) {
    return `https://drive.usercontent.google.com/download?id=${id}&export=download&authuser=0&confirm=t`;
  }

  function collectGoogle() {
    const items = [];
    const id = gdriveId();
    if (id && /\/file\/d\//.test(PATH)) {
      let name = document.title.replace(/\s*-\s*Google Drive\s*$/i, "").trim() || id;
      items.push({
        name,
        url: gdriveUrl(id),
        referer: "https://drive.google.com/",
      });
      return items;
    }
    const seen = new Set();
    document.querySelectorAll("[data-id]").forEach((n) => {
      const fid = n.getAttribute("data-id");
      if (!fid || fid.length < 10 || seen.has(fid)) return;
      const label = (n.getAttribute("aria-label") || n.textContent || "").trim();
      if (/folder|文件夹/i.test(label) && !/\.\w{1,8}\b/.test(label)) return;
      seen.add(fid);
      const name =
        (n.querySelector(".Q5txwe, .KL4NAf, .DNoYtb") || {}).textContent ||
        label.split(",")[0] ||
        fid;
      items.push({
        name: String(name).trim().slice(0, 180),
        url: gdriveUrl(fid),
        referer: "https://drive.google.com/",
      });
    });
    return items;
  }

  // ---------- OneDrive / SharePoint ----------
  function collectOneDrive() {
    const items = [];
    const page = HREF.split("#")[0];
    try {
      const u = new URL(page);
      if (u.hostname.includes("onedrive.live.com")) {
        if (u.pathname.includes("/redir")) {
          u.pathname = u.pathname.replace("/redir", "/download");
          items.push({
            name: document.title || "onedrive-file",
            url: u.toString(),
            referer: location.origin + "/",
          });
        } else if (u.searchParams.has("resid") || u.searchParams.has("cid")) {
          u.searchParams.set("download", "1");
          items.push({
            name: document.title || "onedrive-file",
            url: u.toString(),
            referer: location.origin + "/",
          });
        }
      }
      if (u.hostname.includes("sharepoint.com") || u.hostname.includes("sharepoint.cn")) {
        const u2 = new URL(page);
        u2.searchParams.set("download", "1");
        items.push({
          name: document.title || "sharepoint-file",
          url: u2.toString(),
          referer: location.origin + "/",
        });
      }
    } catch (_) {}

    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.href || "";
      if (!/download/i.test(href) && !/download\.aspx/i.test(href)) return;
      const name = (a.textContent || a.getAttribute("aria-label") || "file").trim().slice(0, 180);
      items.push({ name, url: href, referer: location.origin + "/" });
    });

    // 去重
    const map = new Map();
    items.forEach((it) => {
      if (it.url && !map.has(it.url)) map.set(it.url, it);
    });
    return [...map.values()];
  }

  // ---------- Dropbox ----------
  function dropboxDirect(url) {
    try {
      const u = new URL(url);
      if (u.hostname.includes("dropbox.com")) {
        u.searchParams.set("dl", "1");
        return u.toString();
      }
    } catch (_) {}
    return url;
  }

  function collectDropbox() {
    const items = [];
    const page = HREF.split("#")[0];
    let name = document.title.replace(/\s*-\s*Dropbox\s*$/i, "").trim() || "dropbox-file";
    items.push({
      name,
      url: dropboxDirect(page),
      referer: "https://www.dropbox.com/",
    });
    document.querySelectorAll("a[href*='dropbox.com'], a[href*='dropboxusercontent.com']").forEach((a) => {
      if (!a.href || a.href === page) return;
      items.push({
        name: (a.textContent || "file").trim().slice(0, 120),
        url: dropboxDirect(a.href),
        referer: "https://www.dropbox.com/",
      });
    });
    const map = new Map();
    items.forEach((it) => {
      if (it.url && !map.has(it.url)) map.set(it.url, it);
    });
    return [...map.values()];
  }

  // ---------- boot ----------
  function runCollect() {
    let items = [];
    if (HOST.includes("google.com") || HOST.includes("drive.usercontent.google.com")) {
      items = collectGoogle();
    } else if (
      HOST.includes("onedrive.live.com") ||
      HOST.includes("sharepoint.com") ||
      HOST.includes("sharepoint.cn") ||
      HOST === "1drv.ms"
    ) {
      if (HOST === "1drv.ms") {
        toast("请等待跳转到 OneDrive/SharePoint 页面后再点 CloudLink");
        return;
      }
      items = collectOneDrive();
    } else if (HOST.includes("dropbox.com") || HOST.includes("dropboxusercontent.com")) {
      items = collectDropbox();
    }
    if (!items.length) {
      toast("未解析到下载链接（可打开具体文件/分享页后重试）");
      return;
    }
    showPanel(items);
  }

  function boot() {
    // Google 下载确认页自动点
    if (HOST.includes("drive.usercontent.google.com")) {
      setTimeout(() => {
        const form = document.getElementById("download-form");
        if (form) form.submit();
        else document.getElementById("uc-download-link")?.click();
      }, 400);
    }
    fab(runCollect);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
