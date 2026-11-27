// ==UserScript==
// @name         Markdown
// @namespace    local.edge-userscripts/universal-post-to-markdown
// @version      3.0.2
// @description  X/Threads/Reddit/IG/FB/Pinterest/DM/TikTok/TG + 微博/小红书/CSDN/知乎 导出 MD+图片/视频（每条旁悬浮按钮）
// @author       local
// @icon         data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230ea5e9'/%3E%3Cstop offset='100%25' stop-color='%236366f1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='30' fill='url(%23g)'/%3E%3Cpath fill='%23fff' d='M18 16h10.5c5.2 0 8.5 2.8 8.5 7.2 0 3.2-1.7 5.5-4.4 6.6L38 48h-7.2l-4.6-16.2H24.5V48H18V16zm6.5 6.2v9.2h3.3c2.8 0 4.4-1.4 4.4-3.6s-1.6-3.6-4.4-3.6h-3.3z'/%3E%3Cpath fill='%23fff' opacity='.9' d='M42 28v8h-3.5l4.5 8 4.5-8H44v-8h-2z'/%3E%3C/svg%3E
// @match        *://x.com/*
// @match        *://*.x.com/*
// @match        *://twitter.com/*
// @match        *://*.twitter.com/*
// @match        *://www.threads.com/*
// @match        *://threads.com/*
// @match        *://*.threads.com/*
// @match        *://www.threads.net/*
// @match        *://threads.net/*
// @match        *://*.threads.net/*
// @match        *://reddit.com/*
// @match        *://*.reddit.com/*
// @match        *://instagram.com/*
// @match        *://*.instagram.com/*
// @match        *://www.instagram.com/*
// @match        *://facebook.com/*
// @match        *://*.facebook.com/*
// @match        *://www.facebook.com/*
// @match        *://m.facebook.com/*
// @match        *://touch.facebook.com/*
// @match        *://mbasic.facebook.com/*
// @match        *://fb.com/*
// @match        *://*.fb.com/*
// @match        *://fb.watch/*
// @match        *://www.fb.watch/*
// @match        *://pinterest.com/*
// @match        *://*.pinterest.com/*
// @match        *://www.pinterest.com/*
// @match        *://pin.it/*
// @match        *://dailymotion.com/*
// @match        *://*.dailymotion.com/*
// @match        *://www.dailymotion.com/*
// @match        *://dai.ly/*
// @match        *://tiktok.com/*
// @match        *://*.tiktok.com/*
// @match        *://www.tiktok.com/*
// @match        *://vm.tiktok.com/*
// @match        *://vt.tiktok.com/*
// @match        *://t.me/*
// @match        *://telegram.me/*
// @match        *://weibo.com/*
// @match        *://*.weibo.com/*
// @match        *://m.weibo.cn/*
// @match        *://weibo.cn/*
// @match        *://*.weibo.cn/*
// @match        *://s.weibo.com/*
// @match        *://media.weibo.cn/*
// @match        *://xiaohongshu.com/*
// @match        *://*.xiaohongshu.com/*
// @match        *://www.xiaohongshu.com/*
// @match        *://m.xiaohongshu.com/*
// @match        *://xhslink.com/*
// @match        *://*.xhslink.com/*
// @match        *://csdn.net/*
// @match        *://*.csdn.net/*
// @match        *://blog.csdn.net/*
// @match        *://m.csdn.net/*
// @match        *://www.csdn.net/*
// @match        *://zhihu.com/*
// @match        *://*.zhihu.com/*
// @match        *://www.zhihu.com/*
// @match        *://m.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @match        *://m.reddit.com/*
// @match        *://old.reddit.com/*
// @match        *://m.tiktok.com/*
// @match        *://m.instagram.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_download
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @connect      *
// @run-at       document-idle
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/universal-post-to-markdown/universal-post-to-markdown.user.js
// @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/universal-post-to-markdown/universal-post-to-markdown.user.js
// ==/UserScript==

(function () {
    "use strict";

    const host = location.hostname.replace(/^www\./, "");
    let platform = "generic";
    if (/(^|\.)x\.com$|(^|\.)twitter\.com$/i.test(host)) platform = "x";
    else if (/(^|\.)threads\.(com|net)$/i.test(host)) platform = "threads";
    else if (/(^|\.)reddit\.com$/i.test(host)) platform = "reddit";
    else if (/(^|\.)instagram\.com$/i.test(host)) platform = "instagram";
    else if (/(^|\.)facebook\.com$|(^|\.)fb\.com$|^fb\.watch$|(^|\.)fb\.me$/i.test(host)) platform = "facebook";
    else if (/(^|\.)pinterest\.com$|^pin\.it$/i.test(host)) platform = "pinterest";
    else if (/(^|\.)dailymotion\.com$|^dai\.ly$/i.test(host)) platform = "dailymotion";
    else if (/(^|\.)tiktok\.com$/i.test(host)) platform = "tiktok";
    else if (/^(t\.me|telegram\.me)$/i.test(host)) platform = "telegram";
    else if (/(^|\.)weibo\.com$|(^|\.)weibo\.cn$|^s\.weibo\.com$/i.test(host)) platform = "weibo";
    else if (/(^|\.)xiaohongshu\.com$|(^|\.)xhslink\.com$/i.test(host)) platform = "xiaohongshu";
    else if (/(^|\.)csdn\.net$/i.test(host)) platform = "csdn";
    else if (/(^|\.)zhihu\.com$/i.test(host)) platform = "zhihu";

    console.log("[UPMD] v3.0.2 boot", { host, platform, href: location.href, JSZip: typeof JSZip });

    GM_addStyle(`
        .upmd-inline-btn, #upmd-fab {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            width: 28px; height: 28px; min-width: 28px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%) !important;
            color: #fff !important;
            border: 1px solid rgba(255,255,255,.3) !important;
            box-shadow: 0 2px 8px rgba(99,102,241,.5) !important;
            cursor: pointer !important;
            font-size: 14px !important;
            line-height: 1 !important;
            margin: 0 6px 0 0 !important;
            flex-shrink: 0 !important;
            padding: 0 !important;
            z-index: 2147483000 !important;
            position: relative;
        }
        #upmd-fab {
            position: fixed !important;
            right: 14px !important;
            bottom: 88px !important;
            width: 48px !important;
            height: 48px !important;
            font-size: 22px !important;
            margin: 0 !important;
            z-index: 2147483640 !important;
        }
        #upmd-toast {
            position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
            background: #0f172a; color: #f8fafc; padding: 10px 16px; border-radius: 10px;
            z-index: 2147483647; font-size: 13px; opacity: 0; transition: opacity .25s;
            pointer-events: none; box-shadow: 0 4px 20px rgba(0,0,0,.45);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            max-width: 92vw; text-align: center;
        }
        #upmd-toast.show { opacity: 1; }
        #upmd-menu {
            position: fixed; z-index: 2147483646; background: #0f172a; color: #e2e8f0;
            border-radius: 12px; box-shadow: 0 8px 28px rgba(0,0,0,.55); padding: 6px;
            min-width: 230px; display: none; flex-direction: column; gap: 2px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 13px;
        }
        #upmd-menu.show { display: flex; }
        #upmd-menu button {
            background: transparent; border: none; color: #e2e8f0; text-align: left;
            padding: 11px 12px; border-radius: 8px; cursor: pointer;
            display: flex; align-items: center; gap: 8px;
        }
        #upmd-menu button:hover { background: #1e293b; }
        #upmd-menu button:disabled { opacity: 0.55; cursor: wait; }
    `);

    const toast = document.createElement("div");
    toast.id = "upmd-toast";
    document.body.appendChild(toast);

    const menu = document.createElement("div");
    menu.id = "upmd-menu";
    function rebuildMenu() {
        const webBtns = {
            x: `
        <button data-action="web-xtracticle">🌐 Xtracticle（ZIP+图）</button>
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            threads: `
        <button data-action="web-threads-dl">🌐 ThreadsDownloader</button>
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            reddit: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>
        <button data-action="web-imagetools">🌐 ImageTools 下图 ZIP</button>
        <button data-action="web-reddit-md">🌐 Reddit MD Exporter</button>`,
            instagram: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>
        <button data-action="web-ig-dl">🌐 打开 IG 下载站</button>`,
            facebook: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>
        <button data-action="web-fb-dl">🌐 打开 FB 媒体下载站</button>`,
            pinterest: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>
        <button data-action="web-saverpin">🌐 SaverPin 下图/视频</button>
        <button data-action="web-pinsuite">🌐 PinSuite 下 Pin</button>`,
            dailymotion: `
        <button data-action="web-dm-page">🌐 本页视频直链/下载</button>
        <button data-action="web-anypost">🌐 AnyPost（若支持）</button>`,
            tiktok: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            telegram: `
        <button data-action="web-anypost">🌐 AnyPost（公开帖）</button>`,
            weibo: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            xiaohongshu: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            csdn: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            zhihu: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`,
            generic: `
        <button data-action="web-anypost">🌐 AnyPost → Markdown</button>`
        };
        menu.innerHTML = `
        <div style="padding:6px 12px 4px;font-size:11px;color:#94a3b8;user-select:none">本地</div>
        <button data-action="zip">📦 下载 MD + 图片/视频</button>
        <button data-action="md">📝 仅下载 Markdown</button>
        <button data-action="imgs">🖼️ 只下载图片/视频</button>
        <button data-action="copy">📋 复制 Markdown</button>
        <button data-action="pdf">🖨️ 打印 / 存 PDF</button>
        <div style="padding:8px 12px 4px;font-size:11px;color:#94a3b8;user-select:none;border-top:1px solid #1e293b;margin-top:4px">外部下载器</div>
        <button data-action="web-1dm">📥 1DM+ / 1DM 下载媒体</button>
        <button data-action="web-ytdlnis">📲 YTDLnis App 下载（通用）</button>
        <div style="padding:8px 12px 4px;font-size:11px;color:#94a3b8;user-select:none;border-top:1px solid #1e293b;margin-top:4px">网站（更稳 / 可出 ZIP）</div>
        ${webBtns[platform] || webBtns.generic}
        <div style="padding:8px 12px 4px;font-size:11px;color:#94a3b8;user-select:none;border-top:1px solid #1e293b;margin-top:4px">设置</div>
        <button data-action="toggle-fab">${(typeof isFabVisible === "function" ? isFabVisible() : true) ? "👁️ 关闭悬浮按钮" : "👁️ 开启悬浮按钮"}</button>
    `;
        menu.querySelectorAll("button").forEach(bindMenuButton);
    }

    rebuildMenu();
    document.body.appendChild(menu);

    // Always-visible FAB (works when inline inject fails on X/Threads mobile)
    const fab = document.createElement("button");
    fab.id = "upmd-fab";
    fab.type = "button";
    fab.title = "导出当前页帖子";
    fab.textContent = "📄";
    document.body.appendChild(fab);

    // 悬浮按钮开关（默认开启，写入 GM 存储）
    const FAB_KEY = "upmd_fab_visible";
    function isFabVisible() {
        try {
            if (typeof GM_getValue === "function") return GM_getValue(FAB_KEY, true) !== false;
        } catch (_) {}
        return true;
    }
    function setFabVisible(on) {
        try {
            if (typeof GM_setValue === "function") GM_setValue(FAB_KEY, !!on);
        } catch (_) {}
        fab.style.display = on ? "" : "none";
        try { rebuildMenu(); } catch (_) {}
    }
    function applyFabVisibility() {
        fab.style.display = isFabVisible() ? "" : "none";
    }
    applyFabVisibility();
    // 函数已就绪，刷新菜单文案（开启/关闭悬浮）
    rebuildMenu();

    // Tampermonkey 菜单备用开关（悬浮关了也能重新打开）
    try {
        if (typeof GM_registerMenuCommand === "function") {
            GM_registerMenuCommand("开启/关闭悬浮按钮", () => {
                const next = !isFabVisible();
                setFabVisible(next);
                showToast(next ? "已开启悬浮按钮" : "已关闭悬浮按钮", 2500);
            });
        }
    } catch (_) {}

    function showToast(msg, ms = 3000) {
        toast.textContent = msg;
        toast.classList.add("show");
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toast.classList.remove("show"), ms);
    }

    let currentPostEl = null;
    let currentData = null;

    let menuOpenedAt = 0;
    function openMenuNear(el) {
        const r = el.getBoundingClientRect();
        const menuW = 250;
        const menuH = 320;
        let left = Math.max(8, Math.min(r.left, window.innerWidth - menuW - 8));
        let top = r.bottom + 6;
        if (top + menuH > window.innerHeight - 8) {
            top = Math.max(8, r.top - menuH - 6);
        }
        menu.style.left = left + "px";
        menu.style.top = top + "px";
        menu.classList.add("show");
        menuOpenedAt = Date.now();
    }

    function makeInlineBtn(postEl) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "upmd-inline-btn";
        btn.title = "导出 Markdown";
        btn.textContent = "📄";

        const open = (e) => {
            if (e) {
                try { e.preventDefault(); } catch (_) {}
                try { e.stopPropagation(); } catch (_) {}
            }
            currentPostEl = postEl;
            currentData = null;
            openMenuNear(btn);
        };

        // 仅 stopPropagation，不要在 touchstart 上 preventDefault（否则手机不会触发 click）
        const stopBubble = (e) => { try { e.stopPropagation(); } catch (_) {} };
        ["mousedown", "pointerdown", "touchstart"].forEach(type => {
            btn.addEventListener(type, stopBubble, true);
        });

        btn.addEventListener("click", open, true);

        // 手机：用 touchend 打开（并 preventDefault 避免随后的合成 click 进链接 / 立刻关菜单）
        let touchMoved = false;
        btn.addEventListener("touchstart", () => { touchMoved = false; }, true);
        btn.addEventListener("touchmove", () => { touchMoved = true; }, true);
        btn.addEventListener("touchend", (e) => {
            if (touchMoved) return;
            open(e);
        }, true);

        return btn;
    }

    fab.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Prefer visible post under center, else first post, else document
        currentPostEl = findBestPost() || document.body;
        currentData = null;
        openMenuNear(fab);
    });

    function findBestPost() {
        if (platform === "x") {
            const list = [...document.querySelectorAll('article[data-testid="tweet"], article, div[data-testid="cellInnerDiv"]')];
            // prefer one near viewport center
            const cy = window.innerHeight / 2;
            let best = null, bestDist = 1e9;
            for (const el of list) {
                const r = el.getBoundingClientRect();
                if (r.height < 40 || r.bottom < 0 || r.top > window.innerHeight) continue;
                const dist = Math.abs((r.top + r.bottom) / 2 - cy);
                if (dist < bestDist) { bestDist = dist; best = el; }
            }
            return best || list[0] || null;
        }
        if (platform === "threads") {
            const list = [...document.querySelectorAll('[data-pressable-container="true"], div[role="article"], div[class*="x1a2a7pz"]')];
            const cy = window.innerHeight / 2;
            let best = null, bestDist = 1e9;
            for (const el of list) {
                const r = el.getBoundingClientRect();
                if (r.height < 60 || r.width < 150) continue;
                if (r.bottom < 0 || r.top > window.innerHeight) continue;
                const dist = Math.abs((r.top + r.bottom) / 2 - cy);
                if (dist < bestDist) { bestDist = dist; best = el; }
            }
            return best || list[0] || null;
        }
        if (platform === "reddit") {
            return document.querySelector("shreddit-post") ||
                document.querySelector('[data-testid="post-container"]') ||
                document.querySelector("article");
        }
        if (platform === "instagram") {
            return document.querySelector('article') ||
                document.querySelector('main') ||
                document.querySelector('[role="dialog"]') ||
                document.body;
        }
        if (platform === "facebook") {
            const list = [...document.querySelectorAll('div[role="article"], div[data-pagelet*="FeedUnit"], div[data-ad-preview="message"]')];
            const cy = window.innerHeight / 2;
            let best = null, bestDist = 1e9;
            for (const el of list) {
                const r = el.getBoundingClientRect();
                if (r.height < 80 || r.bottom < 0 || r.top > window.innerHeight) continue;
                const dist = Math.abs((r.top + r.bottom) / 2 - cy);
                if (dist < bestDist) { bestDist = dist; best = el; }
            }
            return best || list[0] || document.querySelector('[role="main"]') || document.body;
        }
        if (platform === "pinterest") {
            return document.querySelector('[data-test-id="pin"]') ||
                document.querySelector('[data-test-id="pin-closeup-image"]') ||
                document.querySelector('div[data-test-id="closeup-body"]') ||
                document.querySelector('main') ||
                document.body;
        }
        if (platform === "dailymotion") {
            return document.querySelector('main') ||
                document.querySelector('#player-wrapper') ||
                document.querySelector('article') ||
                document.body;
        }
        if (platform === "tiktok") {
            return document.querySelector('article') ||
                document.querySelector('[data-e2e="browse-video"]') ||
                document.querySelector('[class*="VideoPlayer"]') ||
                document.querySelector('main') ||
                document.body;
        }
        if (platform === "telegram") {
            return document.querySelector('.tgme_page') ||
                document.querySelector('.tgme_widget_message') ||
                document.querySelector('main') ||
                document.body;
        }
        if (platform === "weibo") {
            return document.querySelector('.Feed_body') ||
                document.querySelector('[class*="Feed_body"]') ||
                document.querySelector('.woo-panel-main') ||
                document.querySelector('article') ||
                document.querySelector('.main-page') ||
                document.body;
        }
        if (platform === "xiaohongshu") {
            return document.querySelector('#detail-desc') ||
                document.querySelector('.note-container') ||
                document.querySelector('[class*="note-detail"]') ||
                document.querySelector('article') ||
                document.querySelector('main') ||
                document.body;
        }
        if (platform === "csdn") {
            return document.querySelector('#content_views') ||
                document.querySelector('.blog-content-box') ||
                document.querySelector('article') ||
                document.querySelector('main') ||
                document.body;
        }
        if (platform === "zhihu") {
            return document.querySelector('.Post-RichTextContainer') ||
                document.querySelector('.RichContent') ||
                document.querySelector('.QuestionAnswer-content') ||
                document.querySelector('article') ||
                document.querySelector('main') ||
                document.body;
        }
        return null;
    }

    // ---------- inject inline ----------
    function injectX() {
        const nodes = document.querySelectorAll('article[data-testid="tweet"], article');
        nodes.forEach(article => {
            if (article.querySelector(".upmd-inline-btn")) return;
            if (article.getBoundingClientRect().height < 30) return;
            const userName = article.querySelector('[data-testid="User-Name"]');
            const btn = makeInlineBtn(article);
            if (userName && userName.parentElement) {
                userName.parentElement.insertBefore(btn, userName);
            } else {
                // absolute corner
                article.style.position = article.style.position || "relative";
                btn.style.position = "absolute";
                btn.style.top = "8px";
                btn.style.right = "8px";
                btn.style.left = "auto";
                btn.style.zIndex = "50";
                article.appendChild(btn);
            }
        });
        // mobile sometimes nests without article testid
        document.querySelectorAll('div[data-testid="cellInnerDiv"]').forEach(cell => {
            if (cell.querySelector(".upmd-inline-btn")) return;
            const tweet = cell.querySelector('[data-testid="tweetText"]');
            if (!tweet) return;
            const hostEl = cell;
            if (hostEl.getBoundingClientRect().height < 40) return;
            const btn = makeInlineBtn(hostEl);
            hostEl.style.position = hostEl.style.position || "relative";
            btn.style.position = "absolute";
            btn.style.top = "6px";
            btn.style.right = "6px";
            btn.style.left = "auto";
            btn.style.zIndex = "50";
            hostEl.appendChild(btn);
        });
    }

    function injectThreads() {
        // Broad set — Threads class names change often
        const candidates = new Set();
        document.querySelectorAll('[data-pressable-container="true"], div[role="article"]').forEach(n => candidates.add(n));
        // any block that has a /@ profile link and substantial height
        document.querySelectorAll('a[href*="/@"]').forEach(a => {
            let p = a.parentElement;
            for (let i = 0; i < 8 && p; i++) {
                const r = p.getBoundingClientRect();
                if (r.height > 100 && r.width > 200) {
                    candidates.add(p);
                    break;
                }
                p = p.parentElement;
            }
        });
        candidates.forEach(card => {
            if (card.querySelector(".upmd-inline-btn")) return;
            const r = card.getBoundingClientRect();
            if (r.height < 80 || r.width < 150) return;
            const btn = makeInlineBtn(card);
            const userLink = card.querySelector('a[href*="/@"]');
            if (userLink && userLink.parentElement) {
                userLink.parentElement.insertBefore(btn, userLink);
            } else {
                card.style.position = card.style.position || "relative";
                btn.style.position = "absolute";
                btn.style.top = "8px";
                btn.style.left = "8px";
                btn.style.zIndex = "50";
                card.appendChild(btn);
            }
        });
    }

    function injectReddit() {
        document.querySelectorAll("shreddit-post").forEach(post => {
            if (post.querySelector(".upmd-inline-btn")) return;
            const btn = makeInlineBtn(post);
            post.style.position = post.style.position || "relative";
            btn.style.position = "absolute";
            btn.style.top = "10px";
            btn.style.left = "8px";
            btn.style.zIndex = "30";
            post.appendChild(btn);
        });
        document.querySelectorAll('[data-testid="post-container"], article').forEach(post => {
            if (post.querySelector(".upmd-inline-btn")) return;
            if (post.closest("shreddit-post")) return;
            if (post.getBoundingClientRect().height < 60) return;
            const btn = makeInlineBtn(post);
            post.style.position = post.style.position || "relative";
            btn.style.position = "absolute";
            btn.style.top = "8px";
            btn.style.left = "8px";
            btn.style.zIndex = "30";
            post.appendChild(btn);
        });
    }


    // Instagram: inject next to author avatar / header as posts scroll
    function injectInstagram() {
        const cards = new Set();

        // Feed posts & profile grid open often use <article>
        document.querySelectorAll("article").forEach(a => cards.add(a));

        // Modal / reel / single post dialog
        document.querySelectorAll('[role="dialog"]').forEach(dlg => {
            const art = dlg.querySelector("article");
            if (art) cards.add(art);
            else cards.add(dlg);
        });

        // Section-based feed items (IG sometimes skips article)
        document.querySelectorAll('main[role="main"] section').forEach(sec => {
            const r = sec.getBoundingClientRect();
            if (r.height > 180 && r.width > 200) cards.add(sec);
        });

        cards.forEach(card => {
            if (!card || card.querySelector(".upmd-inline-btn")) return;
            const r = card.getBoundingClientRect();
            // skip tiny stubs
            if (r.height < 60 && card.tagName !== "ARTICLE") return;

            const btn = makeInlineBtn(card);

            // Prefer header row / avatar area
            // 1) header with profile link
            let header =
                card.querySelector("header") ||
                card.querySelector('div[class] > a[href^="/"][role="link"]') &&
                    card.querySelector('div[class] > a[href^="/"][role="link"]').closest("div");

            // 2) first profile avatar image near top of card
            let avatarImg = null;
            card.querySelectorAll('img').forEach(img => {
                if (avatarImg) return;
                const src = img.src || "";
                const alt = (img.alt || "").toLowerCase();
                const br = img.getBoundingClientRect();
                // profile pics are small circular; skip large post media
                if (br.width > 20 && br.width < 90 && br.height < 90) {
                    if (/profile|user|avatar/i.test(alt) || /s150x150|s320x320|s40x40|s60x60|s80x80/i.test(src) || br.top < r.top + 120) {
                        avatarImg = img;
                    }
                }
            });

            // 3) username link in header area
            let userLink = null;
            card.querySelectorAll('a[href^="/"]').forEach(a => {
                if (userLink) return;
                const href = (a.getAttribute("href") || "").split("?")[0];
                if (!/^\/[A-Za-z0-9._]+\/?$/.test(href)) return;
                const name = href.replace(/\//g, "");
                if (["p", "reel", "reels", "stories", "explore", "accounts", "direct", "stories"].includes(name)) return;
                // prefer links near top
                const ar = a.getBoundingClientRect();
                if (ar.top >= r.top - 10 && ar.top < r.top + 140) userLink = a;
            });

            let placed = false;

            if (userLink && userLink.parentElement) {
                try {
                    userLink.parentElement.insertBefore(btn, userLink);
                    btn.style.marginRight = "8px";
                    placed = true;
                } catch (_) {}
            }

            if (!placed && avatarImg) {
                const wrap = avatarImg.closest("a") || avatarImg.parentElement;
                if (wrap && wrap.parentElement) {
                    try {
                        wrap.parentElement.insertBefore(btn, wrap);
                        btn.style.marginRight = "8px";
                        placed = true;
                    } catch (_) {}
                }
            }

            if (!placed && header) {
                try {
                    header.insertBefore(btn, header.firstChild);
                    btn.style.margin = "0 8px 0 0";
                    placed = true;
                } catch (_) {}
            }

            if (!placed) {
                // absolute top-left on card
                const host = card;
                try {
                    const cs = getComputedStyle(host);
                    if (cs.position === "static") host.style.position = "relative";
                } catch (_) {
                    host.style.position = "relative";
                }
                btn.style.position = "absolute";
                btn.style.top = "12px";
                btn.style.left = "12px";
                btn.style.right = "auto";
                btn.style.zIndex = "50";
                try { host.appendChild(btn); } catch (_) {}
            }
        });
    }

    // Facebook: desktop + mobile (m/touch/mbasic/responsive www)
    function injectFacebook() {
        const isMobileHost = /^(m|touch|mbasic)\.facebook\.com$/i.test(location.hostname.replace(/^www\./, ""));
        const isNarrow = window.innerWidth < 720;
        const mobile = isMobileHost || isNarrow;
        const cards = new Set();

        function addCard(n) {
            if (!n || n === document.body || n === document.documentElement) return;
            if (n.querySelector && n.querySelector(".upmd-inline-btn")) return;
            let r;
            try { r = n.getBoundingClientRect(); } catch (_) { return; }
            const minH = mobile ? 70 : 90;
            const minW = mobile ? 140 : 200;
            if (r.height < minH || r.widt