// ==UserScript==
// @name              CloudLink Mobile
// @namespace         github.com/Jimmy88666888/CloudLink-Mobile
// @version           1.0.1
// @description       国际网盘手机直链助手：Google Drive / OneDrive / Dropbox。复制直链、1DM+、ytdlnis 格式，分享页一键复制。
// @description:zh-CN 国际网盘手机直链助手：Google Drive / OneDrive / Dropbox。复制直链、1DM+、ytdlnis 格式，分享页一键复制。
// @author            CloudLink Mobile
// @license           MIT
// @icon              https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Mobile/main/icon.svg
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
// @run-at            document-idle
// @updateURL         https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Mobile/main/CloudLink-Mobile.user.js
// @downloadURL       https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Mobile/main/CloudLink-Mobile.user.js
// @homepageURL       https://github.com/Jimmy88666888/CloudLink-Mobile
// @supportURL        https://github.com/Jimmy88666888/CloudLink-Mobile/issues
// ==/UserScript==

(function () {
  "use strict";

  const HOST = location.hostname;
  const PATH = location.pathname;
  const HREF = location.href;

  function toast(msg) {
    try {
      if (typeof GM_notification === "function") {
        GM_notification({ title: "CloudLink Mobile", text: msg, timeout: 2500 });
      }
    } catch (_) {}
    const el = document.createElement("div");
    el.textContent = msg;
    el.style.cssText =
      "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483647;" +
      "background:#111827;color:#fff;padding:10px 16px;border-radius:10px;font:14px/1.4 system-ui,sans-serif;" +
      "box-shadow:0 8px 24px rgba(0,0,0,.25);max-width:90vw;text-align:center";
    document.documentElement.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }

  function copyText(text) {
    const t = String(text || "").trim();
    if (!t) {
      toast("没有可复制的内容");
      return;
    }
    try {
      if (typeof GM_setClipboard === "function") {
        GM_setClipboard(t, "text");
        toast("已复制");
        return;
      }
    } catch (_) {}
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(
        () => toast("已复制"),
        () => fallbackCopy(t)
      );
      return;
    }
    fallbackCopy(t);
  }

  function fallbackCopy(t) {
    const ta = document.createElement("textarea");
    ta.value = t;
    ta.style.cssText = "position:fixed;left:-9999px;top:0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      toast("已复制");
    } catch (_) {
      toast("复制失败，请长按手动复制");
    }
    ta.remove();
  }

  function fmt1DM(url, name) {
    const ua = navigator.userAgent || "";
    const referer = location.origin + "/";
    const filename = (name || "download").replace(/[\\/:*?"<>|]/g, "_");
    return `${url}\nUser-Agent: ${ua}\nReferer: ${referer}\nFilename: ${filename}`;
  }

  function fmtYtdl(url, name) {
    const ua = navigator.userAgent || "";
    const referer = location.origin + "/";
    const filename = (name || "download").replace(/[\\/:*?"<>|]/g, "_");
    return `${url}\n  --add-header "User-Agent:${ua}"\n  --add-header "Referer:${referer}"\n  -o "${filename}"`;
  }

  function panel(items) {
    const old = document.getElementById("clm-panel");
    if (old) old.remove();

    const box = document.createElement("div");
    box.id = "clm-panel";
    box.innerHTML = `
      <div class="clm-head">
        <span>CloudLink Mobile</span>
        <button type="button" class="clm-close" aria-label="close">×</button>
      </div>
      <div class="clm-body"></div>
    `;
    document.documentElement.appendChild(box);
    box.querySelector(".clm-close").onclick = () => box.remove();

    const body = box.querySelector(".clm-body");
    items.forEach((it) => {
      const row = document.createElement("div");
      row.className = "clm-row";
      const title = document.createElement("div");
      title.className = "clm-title";
      title.textContent = it.title || "file";
      const actions = document.createElement("div");
      actions.className = "clm-actions";
      (it.actions || []).forEach((a) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = a.label;
        btn.onclick = () => a.onClick();
        actions.appendChild(btn);
      });
      row.appendChild(title);
      row.appendChild(actions);
      body.appendChild(row);
    });
  }

  function fab(onClick) {
    if (document.getElementById("clm-fab")) return;
    const btn = document.createElement("button");
    btn.id = "clm-fab";
    btn.type = "button";
    btn.textContent = "直链";
    btn.onclick = onClick;
    document.documentElement.appendChild(btn);
  }

  GM_addStyle(`
    #clm-fab{
      position:fixed;right:14px;bottom:18px;z-index:2147483646;
      width:56px;height:56px;border-radius:50%;border:none;
      background:#2563eb;color:#fff;font:700 14px/1 system-ui,sans-serif;
      box-shadow:0 10px 25px rgba(37,99,235,.45);cursor:pointer;
    }
    #clm-panel{
      position:fixed;left:10px;right:10px;bottom:84px;z-index:2147483647;
      background:#0b1220;color:#e5e7eb;border-radius:14px;
      box-shadow:0 16px 40px rgba(0,0,0,.35);max-height:60vh;overflow:auto;
      font:14px/1.4 system-ui,sans-serif;
    }
    #clm-panel .clm-head{
      display:flex;align-items:center;justify-content:space-between;
      padding:12px 14px;border-bottom:1px solid #1f2937;font-weight:700;
    }
    #clm-panel .clm-close{
      border:none;background:transparent;color:#9ca3af;font-size:22px;line-height:1;cursor:pointer;
    }
    #clm-panel .clm-body{padding:10px 12px 14px}
    #clm-panel .clm-row{
      padding:10px 0;border-bottom:1px solid #1f2937;
    }
    #clm-panel .clm-row:last-child{border-bottom:none}
    #clm-panel .clm-title{
      margin-bottom:8px;word-break:break-all;color:#f9fafb;font-weight:600;
    }
    #clm-panel .clm-actions{display:flex;flex-wrap:wrap;gap:8px}
    #clm-panel .clm-actions button{
      border:none;border-radius:999px;padding:8px 12px;cursor:pointer;
      background:#1d4ed8;color:#fff;font-weight:600;
    }
    #clm-panel .clm-actions button:nth-child(2){background:#0f766e}
    #clm-panel .clm-actions button:nth-child(3){background:#7c3aed}
    #clm-panel .clm-actions button:nth-child(4){background:#374151}
  `);

  // ---------------- Google Drive ----------------
  function gdriveFileIdFromUrl(url) {
    const u = url || HREF;
    let m = u.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    m = u.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    m = u.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  }

  function gdriveDirect(id) {
    // confirm=t 有助于跳过部分病毒扫描提示页
    return `https://drive.usercontent.google.com/download?id=${id}&export=download&authuser=0&confirm=t`;
  }

  function gdriveUc(id) {
    return `https://drive.google.com/uc?export=download&id=${id}`;
  }

  function handleGoogleDrive() {
    const id = gdriveFileIdFromUrl();
    const isFilePage =
      /\/file\/d\//.test(PATH) ||
      HOST.includes("drive.usercontent.google.com");

    // 下载确认页：尽量点下载
    if (HOST.includes("drive.usercontent.google.com")) {
      const tryClick = () => {
        const form = document.getElementById("download-form");
        if (form) {
          form.submit();
          return true;
        }
        const a = document.getElementById("uc-download-link");
        if (a) {
          a.click();
          return true;
        }
        return false;
      };
      setTimeout(() => {
        if (!tryClick()) setTimeout(tryClick, 800);
      }, 300);
    }

    const openPanel = () => {
      const fileId = gdriveFileIdFromUrl() || id;
      if (!fileId) {
        // 文件夹页：尝试收集当前可见文件
        const nodes = document.querySelectorAll("[data-id]");
        const list = [];
        const seen = new Set();
        nodes.forEach((n) => {
          const fid = n.getAttribute("data-id");
          if (!fid || seen.has(fid) || fid.length < 10) return;
          // 粗略排除文件夹：aria 或类型
          const label = (n.getAttribute("aria-label") || n.textContent || "").trim();
          if (/folder|文件夹/i.test(label) && !/\.\w{1,8}\b/.test(label)) return;
          seen.add(fid);
          const name =
            (n.querySelector(".Q5txwe, .KL4NAf, .DNoYtb, [data-tooltip]") || {})
              .textContent ||
            label.split(",")[0] ||
            fid;
          const url = gdriveDirect(fid);
          list.push({
            title: name.trim().slice(0, 120) || fid,
            actions: [
              { label: "1DM+", onClick: () => copyText(fmt1DM(url, name)) },
              { label: "ytdlnis", onClick: () => copyText(fmtYtdl(url, name)) },
              { label: "直链", onClick: () => copyText(url) },
              { label: "uc链接", onClick: () => copyText(gdriveUc(fid)) },
            ],
          });
        });
        if (!list.length) {
          toast("未识别到文件，请打开单个文件页或进入含文件的文件夹");
          return;
        }
        // 全部 1DM+
        const all = list
          .map((x) => {
            const fid2 = gdriveFileIdFromUrl(
              (x.actions.find((a) => a.label === "直链") && "") || ""
            );
            return null;
          })
          .filter(Boolean);
        const allText = [];
        list.forEach((item) => {
          // rebuild from title buttons is hard; re-query
        });
        // simpler: build from data-id again
        const all1dm = [];
        seen.forEach((fid) => {
          // find name from list
          const it = list.find((l) => l.title && l.title);
        });
        // Practical: provide bulk from current list construction
        const bulk = [];
        nodes.forEach((n) => {
          const fid = n.getAttribute("data-id");
          if (!fid || fid.length < 10) return;
          const name =
            (n.querySelector(".Q5txwe, .KL4NAf, .DNoYtb") || {}).textContent ||
            fid;
          bulk.push(fmt1DM(gdriveDirect(fid), name));
        });
        const uniqueBulk = [...new Set(bulk)].slice(0, 100);
        list.unshift({
          title: `共 ${list.length} 个可见文件（最多显示部分）`,
          actions: [
            {
              label: "复制全部 1DM+",
              onClick: () => copyText(uniqueBulk.join("\n\n")),
            },
          ],
        });
        panel(list.slice(0, 40));
        return;
      }

      let name = document.title || "download";
      name = name.replace(/\s*-\s*Google Drive\s*$/i, "").trim() || fileId;
      const url = gdriveDirect(fileId);
      const share = `https://drive.google.com/file/d/${fileId}/view`;
      panel([
        {
          title: name,
          actions: [
            { label: "1DM+", onClick: () => copyText(fmt1DM(url, name)) },
            { label: "ytdlnis", onClick: () => copyText(fmtYtdl(url, name)) },
            { label: "直链", onClick: () => copyText(url) },
            { label: "分享链接", onClick: () => copyText(share) },
          ],
        },
        {
          title: "更多",
          actions: [
            {
              label: "跳转下载页",
              onClick: () => {
                location.href = url;
              },
            },
            {
              label: "复制 uc 链接",
              onClick: () => copyText(gdriveUc(fileId)),
            },
          ],
        },
      ]);
    };

    fab(openPanel);
    // 文件页自动弹出一次
    if (isFilePage && id) {
      setTimeout(openPanel, 600);
    }
  }

  // ---------------- OneDrive / SharePoint ----------------
  function oneDriveConvertShareToDownload(url) {
    try {
      const u = new URL(url);
      // 经典：redir -> download
      if (u.hostname.includes("onedrive.live.com")) {
        if (u.pathname.includes("/redir")) {
          u.pathname = u.pathname.replace("/redir", "/download");
          return u.toString();
        }
        if (!u.searchParams.has("download")) {
          // resid + authkey 场景
          if (u.searchParams.has("resid") || u.searchParams.has("cid")) {
            u.searchParams.set("download", "1");
            return u.toString();
          }
        }
      }
      // SharePoint：尝试 download.aspx 形态或原链加 download=1
      if (u.hostname.includes("sharepoint.com") || u.hostname.includes("sharepoint.cn")) {
        if (/download\.aspx/i.test(u.pathname)) return u.toString();
        u.searchParams.set("download", "1");
        return u.toString();
      }
      // 1drv.ms 短链无法纯前端可靠解析，提示用户打开后再用
      if (u.hostname === "1drv.ms") {
        return null;
      }
    } catch (_) {}
    return null;
  }

  function handleOneDrive() {
    const openPanel = () => {
      const pageUrl = HREF.split("#")[0];
      const candidates = [];

      // 1) 当前页转下载链
      const converted = oneDriveConvertShareToDownload(pageUrl);
      if (converted) {
        candidates.push({ name: document.title || "当前文件", url: converted });
      }

      // 2) 页面里已有的 download 链接
      document.querySelectorAll("a[href]").forEach((a) => {
        const href = a.href || "";
        if (/download/i.test(href) || /download\.aspx/i.test(href)) {
          const name = (a.textContent || a.getAttribute("aria-label") || "download").trim().slice(0, 120);
          candidates.push({ name, url: href });
        }
      });

      // 3) 选中的列表项（尽力）
      document.querySelectorAll("[data-id], [data-selection-index]").forEach((el) => {
        const name =
          (el.getAttribute("aria-label") || el.textContent || "").trim().split("\n")[0].slice(0, 120);
        // OneDrive 列表直链不稳定，给出分享页提示
        if (name && name.length > 2 && name.length < 100) {
          // skip pure UI chrome
        }
      });

      // 去重
      const map = new Map();
      candidates.forEach((c) => {
        if (c.url && !map.has(c.url)) map.set(c.url, c.name || "file");
      });

      if (!map.size) {
        // 1drv.ms 引导
        if (HOST === "1drv.ms") {
          toast("请等待跳转到 onedrive.live.com / sharepoint 后再点「直链」");
          return;
        }
        toast("未找到可解析的下载链，请打开具体文件或共享文件页");
        return;
      }

      const items = [];
      let i = 0;
      map.forEach((name, url) => {
        if (i++ > 40) return;
        items.push({
          title: name,
          actions: [
            { label: "1DM+", onClick: () => copyText(fmt1DM(url, name)) },
            { label: "ytdlnis", onClick: () => copyText(fmtYtdl(url, name)) },
            { label: "直链", onClick: () => copyText(url) },
          ],
        });
      });

      const all1dm = [];
      map.forEach((name, url) => all1dm.push(fmt1DM(url, name)));
      items.unshift({
        title: `共 ${map.size} 条链接`,
        actions: [
          { label: "复制全部 1DM+", onClick: () => copyText(all1dm.join("\n\n")) },
          { label: "复制当前页链接", onClick: () => copyText(pageUrl) },
        ],
      });
      panel(items);
    };

    fab(openPanel);
  }

  // ---------------- Dropbox ----------------
  function dropboxToDirect(url) {
    try {
      const u = new URL(url);
      if (u.hostname.includes("dropbox.com")) {
        // www.dropbox.com/s/... -> dl=1
        if (u.searchParams.has("dl")) {
          u.searchParams.set("dl", "1");
        } else {
          u.searchParams.set("dl", "1");
        }
        // 也可换成 dl.dropboxusercontent.com（分享链不一定稳定）
        return u.toString();
      }
      if (u.hostname.includes("dropboxusercontent.com")) {
        return u.toString();
      }
    } catch (_) {}
    return url;
  }

  function handleDropbox() {
    const openPanel = () => {
      const pageUrl = HREF.split("#")[0];
      const direct = dropboxToDirect(pageUrl);
      let name = document.title || "dropbox-file";
      name = name.replace(/\s*-\s*Dropbox\s*$/i, "").trim();

      // 页面内其他分享链接
      const extras = [];
      document.querySelectorAll("a[href*='dropbox.com'], a[href*='dropboxusercontent.com']").forEach((a) => {
        if (a.href && a.href !== pageUrl) {
          extras.push({ name: (a.textContent || "link").trim().slice(0, 80), url: dropboxToDirect(a.href) });
        }
      });

      const items = [
        {
          title: name,
          actions: [
            { label: "1DM+", onClick: () => copyText(fmt1DM(direct, name)) },
            { label: "ytdlnis", onClick: () => copyText(fmtYtdl(direct, name)) },
            { label: "直链", onClick: () => copyText(direct) },
            {
              label: "打开下载",
              onClick: () => {
                location.href = direct;
              },
            },
          ],
        },
      ];
      extras.slice(0, 20).forEach((e) => {
        items.push({
          title: e.name || e.url,
          actions: [
            { label: "1DM+", onClick: () => copyText(fmt1DM(e.url, e.name)) },
            { label: "直链", onClick: () => copyText(e.url) },
          ],
        });
      });
      panel(items);
    };

    fab(openPanel);
    // 分享文件页自动弹出
    if (/\/s\//.test(PATH) || /\/scl\//.test(PATH)) {
      setTimeout(openPanel, 500);
    }
  }

  // ---------------- boot ----------------
  function boot() {
    if (HOST.includes("google.com") || HOST.includes("drive.usercontent.google.com")) {
      handleGoogleDrive();
      return;
    }
    if (
      HOST.includes("onedrive.live.com") ||
      HOST.includes("sharepoint.com") ||
      HOST.includes("sharepoint.cn") ||
      HOST === "1drv.ms"
    ) {
      handleOneDrive();
      return;
    }
    if (HOST.includes("dropbox.com") || HOST.includes("dropboxusercontent.com")) {
      handleDropbox();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
