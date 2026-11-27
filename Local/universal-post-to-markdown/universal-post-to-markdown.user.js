// ==UserScript==
// @name         Markdown
// @namespace    local.edge-userscripts/universal-post-to-markdown
// @version      3.0.2
// @description  X/Threads/Reddit/IG/FB/Pinterest/DM/TikTok/TG + 微博/小红书/CSDN/知乎 导出 MD+图片/视频（每条旁悬浮按钮）
// @author       Jackson Smith
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
            if (r.height < minH || r.width < minW) return;
            // skip ultra-tall page shells
            if (r.height > window.innerHeight * 4) return;
            cards.add(n);
        }

        // Desktop-ish
        document.querySelectorAll('[role="article"]').forEach(addCard);
        document.querySelectorAll('[data-pagelet*="FeedUnit"], [data-pagelet*="Feed"]').forEach(addCard);
        document.querySelectorAll('[aria-posinset]').forEach(addCard);
        document.querySelectorAll('[role="feed"] > div').forEach(div => {
            const art = div.querySelector('[role="article"]');
            addCard(art || div);
        });
        document.querySelectorAll('[role="dialog"]').forEach(dlg => {
            const art = dlg.querySelector('[role="article"]');
            if (art) addCard(art);
            else addCard(dlg);
        });

        // Mobile / m.facebook / mbasic markers
        document.querySelectorAll("article").forEach(addCard);
        document.querySelectorAll("[data-ft]").forEach(n => {
            // data-ft often on story root on m.facebook
            if (n.querySelector && (n.querySelector("img") || n.querySelector("video"))) addCard(n);
        });
        document.querySelectorAll(
            '#m_news_feed_stream > div, #root [data-tracking-duration-id], section > article, div[id^="u_0_"] > div'
        ).forEach(addCard);
        // story containers with action bar text
        document.querySelectorAll("div, section, article").forEach(n => {
            if (cards.has(n)) return;
            const t = (n.innerText || "").slice(0, 200);
            if (!t) return;
            if (!/(赞|Like|讚|Comment|评论|留言|Share|分享)/.test(t)) return;
            if (!n.querySelector("img, image, video")) return;
            const r = n.getBoundingClientRect();
            if (r.height < (mobile ? 100 : 140) || r.height > 2500) return;
            if (r.width < (mobile ? 140 : 200)) return;
            // prefer mid-level nodes: not whole feed
            if (n.querySelectorAll('[role="article"], article, [data-ft]').length > 3) return;
            addCard(n);
        });

        // Walk up from avatars (img + svg image)
        document.querySelectorAll(
            'a img, a image, svg image, img[src*="scontent"], img[src*="fbcdn"]'
        ).forEach(img => {
            let br;
            try { br = img.getBoundingClientRect(); } catch (_) { return; }
            // mobile avatars often 36–48px
            if (br.width < 18 || br.width > 96 || br.height > 96) return;
            if (br.bottom < -80 || br.top > window.innerHeight + 80) return;
            let p = img.parentElement;
            for (let i = 0; i < 16 && p; i++) {
                const pr = p.getBoundingClientRect();
                if (pr.height > (mobile ? 100 : 160) && pr.width > (mobile ? 140 : 260) &&
                    pr.height < window.innerHeight * 3.5) {
                    addCard(p);
                    break;
                }
                p = p.parentElement;
            }
        });

        cards.forEach(card => {
            if (!card || card.querySelector(".upmd-inline-btn")) return;
            const r = card.getBoundingClientRect();
            if (r.height < (mobile ? 70 : 90)) return;

            const btn = makeInlineBtn(card);
            btn.setAttribute("data-upmd-fb", mobile ? "m" : "d");
            btn.title = "导出 Markdown";
            if (mobile) {
                btn.style.width = "28px";
                btn.style.height = "28px";
                btn.style.minWidth = "28px";
                btn.style.fontSize = "13px";
            }

            // 必须挂在卡片上且不在任何 <a> 内，否则点按钮会进主页
            try {
                const cs = getComputedStyle(card);
                if (!cs.position || cs.position === "static") card.style.position = "relative";
            } catch (_) {
                card.style.position = "relative";
            }

            const timeRe = /(\d+\s*(小时|小時|分钟|分鐘|天|周|週|秒|h|m|d|hr|min|sec|hour|day|week)|昨天|剛剛|刚刚|Just now|ago)/i;
            let timeEl = null;
            card.querySelectorAll("a, span, abbr, time").forEach(el => {
                if (timeEl) return;
                const t = (el.getAttribute("aria-label") || el.getAttribute("title") || textOf(el) || "").trim();
                if (!t || t.length > 48) return;
                if (!timeRe.test(t) && el.tagName !== "TIME" && !el.getAttribute("data-utime")) return;
                const br = el.getBoundingClientRect();
                if (br.top < r.top - 5 || br.top > r.top + 130 || br.width < 1) return;
                timeEl = el;
            });

            btn.style.position = "absolute";
            btn.style.zIndex = "2147483000";
            btn.style.margin = "0";
            btn.style.pointerEvents = "auto";

            if (timeEl) {
                const tr = timeEl.getBoundingClientRect();
                const top = Math.max(0, tr.top - r.top + (tr.height - (mobile ? 28 : 28)) / 2);
                const left = Math.max(0, tr.right - r.left + 6);
                btn.style.top = top + "px";
                btn.style.left = left + "px";
                btn.style.right = "auto";
            } else {
                // 时间行大概高度，避开右上角 ⋯
                btn.style.top = mobile ? "34px" : "38px";
                btn.style.right = mobile ? "48px" : "52px";
                btn.style.left = "auto";
            }

            try { card.appendChild(btn); } catch (_) {}
        });
    }


    // Generic floating corner buttons for Pinterest / Dailymotion

    /** 给卡片右上角挂导出按钮（与 X/Threads 一致） */
    function pinInlineBtn(card, preferLeft) {
        if (!card || card.querySelector(".upmd-inline-btn")) return;
        const r = card.getBoundingClientRect();
        if (r.height < 60) return;
        const btn = makeInlineBtn(card);
        try {
            const cs = window.getComputedStyle(card);
            if (cs.position === "static") card.style.position = "relative";
        } catch (_) {
            card.style.position = card.style.position || "relative";
        }
        btn.style.position = "absolute";
        btn.style.top = "8px";
        btn.style.zIndex = "50";
        if (preferLeft) {
            btn.style.left = "8px";
            btn.style.right = "auto";
        } else {
            btn.style.right = "8px";
            btn.style.left = "auto";
        }
        try { card.appendChild(btn); } catch (_) {}
    }

    function injectWeibo() {
        const sels = [
            '[class*="Feed_main"]',
            '[class*="Feed_body"]',
            '.woo-panel-main',
            'article',
            '[class*="card-wrap"]',
            '[class*="card-list"] > div',
            '.WB_cardwrap',
            '.WB_feed_detail',
            '[node-type="feed_list_item"]',
            '.vue-recycle-scroller__item-view > div'
        ];
        const seen = new Set();
        sels.forEach(sel => {
            document.querySelectorAll(sel).forEach(n => {
                if (seen.has(n)) return;
                const r = n.getBoundingClientRect();
                if (r.height < 100 || r.width < 180) return;
                // 需像一条微博：有图或有文字块
                if (!n.querySelector("img, video, [class*='wbtext'], [class*='detail'], [node-type='feed_list_content']") &&
                    textOf(n).length < 20) return;
                seen.add(n);
                pinInlineBtn(n, false);
            });
        });
        // 详情页单条
        const detail = document.querySelector('[class*="Detail_box"], [class*="detail_feed"], .main-page');
        if (detail && !detail.querySelector(".upmd-inline-btn")) pinInlineBtn(detail, false);
    }

    function injectXiaohongshu() {
        const sels = [
            '.note-item',
            '[class*="note-item"]',
            '[class*="NoteItem"]',
            '.feeds-container section',
            '[class*="note-container"]',
            '[class*="note-detail"]',
            '#detail-desc',
            'section.note',
            'a.cover[href*="/explore/"]',
            '[data-v-] section'
        ];
        const seen = new Set();
        function addCard(n) {
            if (!n || seen.has(n)) return;
            let card = n;
            // 从封面 a 往上找到卡片
            if (n.tagName === "A") {
                for (let i = 0; i < 6 && card; i++) {
                    const r = card.getBoundingClientRect();
                    if (r.height > 120 && r.width > 100) break;
                    card = card.parentElement;
                }
            }
            if (!card) return;
            const r = card.getBoundingClientRect();
            if (r.height < 100 || r.width < 100) return;
            seen.add(card);
            pinInlineBtn(card, false);
        }
        sels.forEach(sel => {
            try { document.querySelectorAll(sel).forEach(addCard); } catch (_) {}
        });
        // 详情页
        const detail = document.querySelector('.note-container, [class*="note-detail"], #noteContainer, main');
        if (detail && detail.getBoundingClientRect().height > 200) pinInlineBtn(detail, false);
    }

    function injectCsdn() {
        // 列表文章卡
        const listSels = [
            '.article-item-box',
            '.blog-list-box article',
            '.list-item',
            '.community-item',
            '.feedlist_item',
            '#feedlist_id li',
            '.blog-unit',
            'article.clearfix'
        ];
        listSels.forEach(sel => {
            document.querySelectorAll(sel).forEach(n => {
                const r = n.getBoundingClientRect();
                if (r.height < 60 || r.width < 150) return;
                pinInlineBtn(n, false);
            });
        });
        // 正文页：标题旁 / 正文容器
        const title = document.querySelector("h1.title-article, #articleContentId, h1");
        if (title && title.parentElement && !title.parentElement.querySelector(".upmd-inline-btn")) {
            const btn = makeInlineBtn(document.querySelector("#content_views, .blog-content-box, article") || document.body);
            try {
                title.parentElement.insertBefore(btn, title);
            } catch (_) {
                pinInlineBtn(document.querySelector(".blog-content-box") || document.body, false);
            }
        } else {
            const body = document.querySelector("#content_views, .blog-content-box, article");
            if (body) pinInlineBtn(body, false);
        }
    }

    function injectZhihu() {
        const sels = [
            '.List-item',
            '.Card.TopstoryItem',
            '.TopstoryItem',
            '.ContentItem',
            '.AnswerItem',
            '.ArticleItem',
            '.Post-content',
            '.QuestionAnswer-content',
            '.RichContent',
            'div[itemprop="articleBody"]',
            '.Post-RichTextContainer'
        ];
        const seen = new Set();
        sels.forEach(sel => {
            document.querySelectorAll(sel).forEach(n => {
                if (seen.has(n)) return;
                // 避免给内部 RichContent 再挂一遍：优先外层 List-item / ContentItem
                if (n.classList.contains("RichContent") && n.closest(".ContentItem, .List-item, .TopstoryItem, .AnswerItem")) {
                    return;
                }
                const r = n.getBoundingClientRect();
                if (r.height < 80 || r.width < 180) return;
                if (!n.querySelector("img, .RichText, .RichContent, .ContentItem-title, h2, h1") && textOf(n).length < 30) return;
                seen.add(n);
                pinInlineBtn(n, false);
            });
        });
        // 专栏正文页
        const post = document.querySelector('.Post-Main, .Post-content, article');
        if (post && post.getBoundingClientRect().height > 150) pinInlineBtn(post, false);
    }


    function injectSimple(kind) {
        const roots = [];
        if (kind === "pinterest") {
            document.querySelectorAll('[data-test-id="pin"], [data-test-id="closeup-body"], main, [data-test-id="pin-closeup-image"]').forEach(n => roots.push(n));
        } else if (kind === "dailymotion") {
            document.querySelectorAll('main, #player-wrapper, article, body').forEach(n => roots.push(n));
        }
        // always ensure FAB exists (already global); add one absolute btn on first large container
        const host = roots.find(r => r && r.getBoundingClientRect && r.getBoundingClientRect().height > 120) || document.body;
        if (host.querySelector && host.querySelector(".upmd-inline-btn")) return;
        if (host === document.body && document.querySelector(".upmd-inline-btn.upmd-simple")) return;
        const btn = makeInlineBtn(host === document.body ? (findBestPost() || document.body) : host);
        btn.classList.add("upmd-simple");
        if (host === document.body || host.tagName === "BODY") {
            // rely on FAB only
            return;
        }
        host.style.position = host.style.position || "relative";
        btn.style.position = "absolute";
        btn.style.top = "10px";
        btn.style.right = "10px";
        btn.style.left = "auto";
        btn.style.zIndex = "50";
        try { host.appendChild(btn); } catch (_) {}
    }

    function injectAll() {
        try {
            if (platform === "x") injectX();
            else if (platform === "threads") injectThreads();
            else if (platform === "reddit") injectReddit();
            else if (platform === "instagram") injectInstagram();
            else if (platform === "facebook") injectFacebook();
            else if (platform === "pinterest") injectSimple("pinterest");
            else if (platform === "dailymotion") injectSimple("dailymotion");
            else if (platform === "tiktok") injectSimple("tiktok");
            else if (platform === "telegram") injectSimple("telegram");
            else if (platform === "weibo") injectWeibo();
            else if (platform === "xiaohongshu") injectXiaohongshu();
            else if (platform === "csdn") injectCsdn();
            else if (platform === "zhihu") injectZhihu();
        } catch (e) {
            console.warn("[UPMD] inject", e);
        }
    }

    const obs = new MutationObserver(() => {
        clearTimeout(injectAll._t);
        injectAll._t = setTimeout(injectAll, platform === "facebook" ? 250 : 400);
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    injectAll();
    setTimeout(injectAll, 800);
    setTimeout(injectAll, 2000);
    setTimeout(injectAll, 4000);
    setInterval(injectAll, platform === "facebook" ? 1500 : 2500);

    document.addEventListener("click", () => {
        // 刚打开时忽略（避免同一手势里 touchend 开菜单、随后 click 又关掉）
        if (Date.now() - menuOpenedAt < 500) return;
        menu.classList.remove("show");
    });
    document.addEventListener("touchend", () => {
        if (Date.now() - menuOpenedAt < 500) return;
        // 点空白处关闭；不在 capture，让按钮自己的 touchend 先跑完
    }, false);
    menu.addEventListener("click", (e) => e.stopPropagation());
    menu.addEventListener("touchend", (e) => e.stopPropagation());

    function isHomeLikeUrl(u) {
        if (!u) return true;
        try {
            const x = new URL(u, location.href);
            let p = x.pathname.replace(/\/+$/, "") || "/";
            if (p === "/" || p === "") return true;
            // bare site roots / feeds without post id
            if (/^\/(home|feed|watch|reels|explore|friends|notifications|marketplace|gaming)?$/i.test(p)) return true;
            if (/instagram\.com$/i.test(x.hostname) && /^\/([A-Za-z0-9._]+)\/?$/.test(p) && !/\/(p|reel|reels|tv)\//i.test(p)) {
                // profile root only — not a post
                return true;
            }
            if (/facebook\.com$/i.test(x.hostname) && /^\/(watch|reel|reels)?$/i.test(p)) return true;
            return false;
        } catch {
            return true;
        }
    }

    function pickPermalinkFromEl(root) {
        if (!root || !root.querySelectorAll) return "";
        const tryHref = (href, keepQuery) => {
            if (!href) return "";
            if (!keepQuery) href = href.split("?")[0].split("#")[0];
            else href = href.split("#")[0];
            if (!href || href === "#" || href.startsWith("javascript:")) return "";
            const full = absUrl(href);
            if (isHomeLikeUrl(full.split("?")[0])) return "";
            return full;
        };

        // canonical / og:url inside scoped root first when available
        const metaUrl = () => {
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content) {
                const u = tryHref(og.content);
                if (u && !isHomeLikeUrl(u)) return u;
            }
            const can = document.querySelector('link[rel="canonical"]');
            if (can && can.href) {
                const u = tryHref(can.href);
                if (u && !isHomeLikeUrl(u)) return u;
            }
            return "";
        };

        if (platform === "x") {
            for (const a of root.querySelectorAll('a[href*="/status/"]')) {
                const u = tryHref(a.getAttribute("href"));
                if (u && /\/status\/\d+/.test(u)) return u;
            }
            // time element often wraps status link
            const timeA = root.querySelector('time') && root.querySelector('time').closest("a");
            if (timeA) {
                const u = tryHref(timeA.getAttribute("href"));
                if (u && /\/status\/\d+/.test(u)) return u;
            }
        }
        if (platform === "threads") {
            for (const a of root.querySelectorAll('a[href*="/post/"], a[href*="/t/"], a[href*="/@"]')) {
                const href = a.getAttribute("href") || "";
                if (/\/(post|t)\//.test(href)) {
                    const u = tryHref(href);
                    if (u) return u;
                }
            }
            // Threads short path: /@user/post/xxx
            for (const a of root.querySelectorAll("a[href]")) {
                const href = a.getAttribute("href") || "";
                const m = href.match(/\/@[^/]+\/(post|t)\/([A-Za-z0-9_-]+)/);
                if (m) {
                    const u = tryHref(href);
                    if (u) return u;
                }
            }
        }
        if (platform === "reddit") {
            if (root.tagName === "SHREDDIT-POST" && root.getAttribute("permalink")) {
                const u = tryHref(root.getAttribute("permalink"));
                if (u) return u;
            }
            for (const a of root.querySelectorAll('a[href*="/comments/"]')) {
                const u = tryHref(a.getAttribute("href"));
                if (u && /\/comments\//.test(u)) return u;
            }
            // data-permalink attributes
            const dp = root.getAttribute && (root.getAttribute("data-permalink") || root.getAttribute("permalink"));
            if (dp) {
                const u = tryHref(dp);
                if (u) return u;
            }
        }
        if (platform === "instagram") {
            for (const a of root.querySelectorAll('a[href*="/p/"], a[href*="/reel/"], a[href*="/reels/"], a[href*="/tv/"]')) {
                const u = tryHref(a.getAttribute("href"));
                if (u && /\/(p|reel|reels|tv)\//.test(u)) return u;
            }
            // share / embed links sometimes hold shortcode
            for (const a of root.querySelectorAll("a[href]")) {
                const href = a.getAttribute("href") || "";
                const m = href.match(/\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
                if (m) {
                    const u = tryHref("/" + m[1] + "/" + m[2] + "/");
                    if (u) return u;
                }
            }
            const mu = metaUrl();
            if (mu && /instagram\.com\/(p|reel|reels|tv)\//i.test(mu)) return mu;
        }
        if (platform === "facebook") {
            const sels = [
                'a[href*="/posts/"]',
                'a[href*="story_fbid="]',
                'a[href*="/permalink.php"]',
                'a[href*="permalink"]',
                'a[href*="/videos/"]',
                'a[href*="/reel/"]',
                'a[href*="/watch/"]',
                'a[href*="/photo"]',
                'a[href*="multi_permalinks"]',
                'a[href*="/share/"]',
                'a[href*="pfbid"]'
            ];
            for (const sel of sels) {
                for (const a of root.querySelectorAll(sel)) {
                    let href = a.getAttribute("href") || "";
                    // keep identifying query params
                    if (/story_fbid=|multi_permalinks=|pfbid|id=/i.test(href)) {
                        const full = absUrl(href.split("#")[0]);
                        if (!isHomeLikeUrl(full.split("?")[0]) || /story_fbid=|permalink\.php|pfbid/i.test(full)) {
                            return full;
                        }
                    }
                    const u = tryHref(href);
                    if (u && /\/(posts|videos|reel|watch|photo|permalink|share)/i.test(u)) return u;
                }
            }
            // time / aria-label links often are the permalink on FB
            for (const a of root.querySelectorAll("a[href]")) {
                const href = a.getAttribute("href") || "";
                if (/\/posts\/|story_fbid=|\/videos\/|\/reel\/|permalink\.php|pfbid|\/share\//i.test(href)) {
                    const full = absUrl(href.split("#")[0]);
                    if (!isHomeLikeUrl(full.split("?")[0]) || /story_fbid=|permalink\.php|pfbid/i.test(full)) {
                        return full;
                    }
                }
            }
            // data-lynx-uri / data-href
            for (const el of root.querySelectorAll("[data-lynx-uri], [data-href], [data-uri]")) {
                const raw = el.getAttribute("data-lynx-uri") || el.getAttribute("data-href") || el.getAttribute("data-uri") || "";
                if (/facebook\.com|fb\.com|fb\.watch/i.test(raw) && /posts|videos|reel|story_fbid|permalink|pfbid/i.test(raw)) {
                    const u = tryHref(raw, true);
                    if (u) return u;
                }
            }
            const mu = metaUrl();
            if (mu && /facebook\.com|fb\.com|fb\.watch/i.test(mu)) return mu;
        }
        if (platform === "pinterest") {
            for (const a of root.querySelectorAll('a[href*="/pin/"]')) {
                const u = tryHref(a.getAttribute("href"));
                if (u && /\/pin\//.test(u)) return u;
            }
            const mu = metaUrl();
            if (mu && /\/pin\//.test(mu)) return mu;
        }
        if (platform === "dailymotion") {
            for (const a of root.querySelectorAll('a[href*="/video/"]')) {
                const u = tryHref(a.getAttribute("href"));
                if (u && /\/video\//.test(u)) return u;
            }
            const mu = metaUrl();
            if (mu && /dailymotion|dai\.ly/i.test(mu)) return mu;
        }
        if (platform === "tiktok") {
            for (const a of root.querySelectorAll('a[href*="/video/"]')) {
                const u = tryHref(a.getAttribute("href"));
                if (u && /\/@[^/]+\/video\/\d+/.test(u)) return u;
            }
            const mu = metaUrl();
            if (mu && /tiktok\.com\/@.*\/video\//i.test(mu)) return mu;
            if (/\/@[^/]+\/video\/\d+/.test(location.pathname)) return location.href.split("?")[0];
        }
        if (platform === "telegram") {
            // 公开频道帖：t.me/channel/123
            if (/^\/[^/]+\/\d+/.test(location.pathname)) return location.href.split("?")[0];
            const mu = metaUrl();
            if (mu && /t\.me|telegram\.me/i.test(mu)) return mu;
        }
        // generic fallback: og/canonical when scoped root is document-like
        return metaUrl();
    }

    function getPostUrl(data) {
        // prefer extracted url if it looks like a real post
        if (data && data.url && !isHomeLikeUrl(data.url)) {
            return data.url.split("#")[0];
        }
        const fromEl = pickPermalinkFromEl(currentPostEl || document.body);
        if (fromEl) return fromEl;

        // og:url / canonical
        const og = document.querySelector('meta[property="og:url"]');
        if (og && og.content) {
            const u = absUrl(og.content.split("#")[0]);
            if (u && !isHomeLikeUrl(u)) return u;
        }
        const can = document.querySelector('link[rel="canonical"]');
        if (can && can.href) {
            const u = absUrl(can.href.split("#")[0]);
            if (u && !isHomeLikeUrl(u)) return u;
        }

        // last resort: page url only if not a bare home/feed
        const loc = location.href.split("#")[0];
        if (!isHomeLikeUrl(loc)) return loc.split("?")[0] || loc;

        // still home — try page-wide search near current post
        if (currentPostEl && currentPostEl.querySelector) {
            const again = pickPermalinkFromEl(currentPostEl);
            if (again) return again;
        }
        return loc.split("?")[0] || loc;
    }

    function openExternal(url) {
        window.open(url, "_blank", "noopener,noreferrer");
        showToast("已打开外部网站，请在新标签完成下载", 3200);
    }

    function toAnyPostUrl(postUrl) {
        try {
            const u = new URL(postUrl);
            const host = u.hostname.replace(/^www\./, "");
            let path = u.pathname.replace(/\/$/, "");
            if (/(^|\.)x\.com$|(^|\.)twitter\.com$/i.test(host)) {
                // anypost.md/x/user/status/id
                return "https://anypost.md/x" + path;
            }
            if (/(^|\.)threads\.(com|net)$/i.test(host)) {
                return "https://anypost.md/threads" + path;
            }
            if (/(^|\.)reddit\.com$/i.test(host)) {
                return "https://anypost.md/reddit" + path;
            }
            if (/(^|\.)instagram\.com$/i.test(host)) {
                return "https://anypost.md/instagram" + path;
            }
            if (/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(host) || host === "fb.watch") {
                return "https://anypost.md/facebook" + path;
            }
            if (/(^|\.)pinterest\.com$/i.test(host) || host === "pin.it") {
                return "https://anypost.md/pinterest" + path;
            }
            if (/(^|\.)dailymotion\.com$/i.test(host) || host === "dai.ly") {
                return "https://anypost.md/dailymotion" + path;
            }
            return "https://anypost.md/";
        } catch {
            return "https://anypost.md/";
        }
    }

    function toXtracticleUrl(postUrl) {
        // xtracticle: replace x.com with xtracticle.com
        try {
            const u = new URL(postUrl);
            if (/twitter\.com$/i.test(u.hostname)) u.hostname = "xtracticle.com";
            else if (/x\.com$/i.test(u.hostname)) u.hostname = "xtracticle.com";
            else return "https://xtracticle.com/?url=" + encodeURIComponent(postUrl);
            u.search = "";
            u.hash = "";
            return u.href;
        } catch {
            return "https://xtracticle.com/?url=" + encodeURIComponent(postUrl);
        }
    }

    function toThreadsDownloaderUrl(postUrl) {
        return "https://threadsdownloader.org/en/tools?url=" + encodeURIComponent(postUrl);
    }

    function toImageToolsUrl(postUrl) {
        // site may just need paste; open with hash or query if supported
        return "https://www.imagetools.org/reddit-image-downloader?url=" + encodeURIComponent(postUrl);
    }

    function toRedditMdExporterUrl(postUrl) {
        return "https://grigorkh.github.io/reddit-markdown-exporter/?url=" + encodeURIComponent(postUrl);
    }

    async function ensureData() {
        if (!currentPostEl) currentPostEl = findBestPost() || document.body;
        if (!currentData) {
            showToast("正在解析…");
            currentData = await extractFromElement(currentPostEl);
            if (platform === "reddit") currentData = enrichReddit(currentData, currentPostEl);
        }
        return currentData;
    }

    function bindMenuButton(b) {
        b.addEventListener("click", async () => {
            const action = b.dataset.action;
            menu.classList.remove("show");
            // 设置类动作：不禁用按钮、不走解析流程
            if (action === "toggle-fab") {
                const next = !isFabVisible();
                setFabVisible(next);
                showToast(next ? "已开启悬浮按钮" : "已关闭悬浮按钮", 2500);
                return;
            }
            b.disabled = true;
            try {
                // ---- external sites ----
                if (action && action.startsWith("web-")) {
                    let data = null;
                    try { data = await ensureData(); } catch (_) {}
                    const postUrl = getPostUrl(data);
                    if (action === "web-anypost") {
                        openExternal(toAnyPostUrl(postUrl));
                        // also copy URL for paste if site ignores query
                        try {
                            const ap = toAnyPostUrl(postUrl);
                            if (typeof GM_setClipboard === "function") GM_setClipboard(ap);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-xtracticle") {
                        openExternal(toXtracticleUrl(postUrl));
                        return;
                    }
                    if (action === "web-threads-dl") {
                        openExternal(toThreadsDownloaderUrl(postUrl));
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                            showToast("链接已复制，若网站未自动填入请粘贴", 3500);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-imagetools") {
                        openExternal(toImageToolsUrl(postUrl));
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                            showToast("帖子链接已复制，请在网站粘贴", 3500);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-reddit-md") {
                        openExternal(toRedditMdExporterUrl(postUrl));
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-ig-dl") {
                        // generic IG download portals – copy link for paste
                        openExternal("https://snapinsta.app/");
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                            showToast("链接已复制，请粘贴到下载站", 3500);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-fb-dl") {
                        openExternal("https://fdown.net/");
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                            showToast("链接已复制，请粘贴到下载站", 3500);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-1dm") {
                        // 只推「媒体 CDN 直链」给 1DM，绝不推帖子网页（避免「已接收网页」）
                        // 同时本地下载 MD（本地文件名 + 外链）
                        const data = await ensureData();
                        if (!data) {
                            showToast("解析失败");
                            return;
                        }
                        const workName = sanitizeFilename(data.title || data.folderName || "post", 80);
                        try {
                            const localNames = (data.images || []).map((src, i) => {
                                const ext = ((src.match(/\.(png|jpe?g|webp|gif)(?:\?|$)/i) || [])[1] || "jpg")
                                    .toLowerCase().replace("jpeg", "jpg");
                                return (data.images.length === 1 ? workName : workName + "_" + pad2(i + 1)) + "." + ext;
                            });
                            const md = buildMarkdown(data, localNames);
                            triggerDownload(
                                new Blob(["\ufeff" + md], { type: "text/markdown;charset=utf-8" }),
                                workName + ".md"
                            );
                            showToast("已触发 MD 下载…");
                            await sleep(1000);
                        } catch (e) {
                            console.warn("[UPMD] md for 1dm", e);
                        }
                        const mediaUrls = [];
                        (data.images || []).forEach(u => {
                            if (isDirectMediaUrl(u)) mediaUrls.push(u);
                        });
                        (data.videos || []).forEach(v => {
                            if (v && isDirectMediaUrl(v.url)) mediaUrls.push(v.url);
                            if (v && isDirectMediaUrl(v.poster) && !mediaUrls.includes(v.poster)) {
                                mediaUrls.push(v.poster);
                            }
                        });
                        if (!mediaUrls.length) {
                            showToast("没有媒体直链可给 1DM（不会发送帖子网页，以免报错）", 4500);
                            // 把直链列表复制方便手动粘贴
                            try {
                                const all = [].concat(data.images || [], (data.videos || []).map(v => v && v.url).filter(Boolean));
                                if (all.length && typeof GM_setClipboard === "function") GM_setClipboard(all.join("\n"));
                            } catch (_) {}
                            return;
                        }
                        await sendMediaListTo1DM(mediaUrls, workName);
                        return;
                    }
                    if (action === "web-ytdlnis") {
                        // 系统分享面板唤起 YTDLnis（用户自选 App），并复制链接兜底
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                        } catch (_) {}

                        let shared = false;
                        // 1) Web Share API → 系统分享菜单
                        if (navigator.share) {
                            try {
                                await navigator.share({
                                    title: "YTDLnis",
                                    text: postUrl,
                                    url: postUrl
                                });
                                shared = true;
                                showToast("请在分享列表中选择 YTDLnis", 3500);
                            } catch (e) {
                                // 用户取消 share 不视为失败
                                if (e && (e.name === "AbortError" || /abort|cancel/i.test(String(e.message || e)))) {
                                    showToast("已取消分享（链接仍在剪贴板）", 2500);
                                    return;
                                }
                            }
                        }

                        // 2) Android：不指定 package，弹出系统分享 sheet
                        if (!shared && /Android/i.test(navigator.userAgent)) {
                            const encoded = encodeURIComponent(postUrl);
                            const intentSheet =
                                "intent://#Intent;action=android.intent.action.SEND;type=text/plain;" +
                                "S.android.intent.extra.TEXT=" + encoded + ";" +
                                "S.android.intent.extra.SUBJECT=" + encodeURIComponent("Download") + ";" +
                                "end";
                            try {
                                location.href = intentSheet;
                                shared = true;
                                showToast("请在系统分享中选择 YTDLnis", 3500);
                            } catch (_) {}
                        }

                        if (!shared) {
                            showToast("链接已复制。请打开 YTDLnis 从剪贴板下载", 4000);
                            if (!/Android/i.test(navigator.userAgent)) {
                                try { openExternal("https://ytdlnis.org/"); } catch (_) {}
                            }
                        }
                        return;
                    }
                    if (action === "web-saverpin") {
                        openExternal("https://saverpin.com/?url=" + encodeURIComponent(postUrl));
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                            showToast("链接已复制，若未自动填入请粘贴", 3500);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-pinsuite") {
                        openExternal("https://pinsuite.app/pinterest-pin-downloader");
                        try {
                            if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                            else await navigator.clipboard.writeText(postUrl);
                            showToast("链接已复制，请粘贴到 PinSuite", 3500);
                        } catch (_) {}
                        return;
                    }
                    if (action === "web-dm-page") {
                        // try local extract + download video/poster
                        const data = await ensureData();
                        if (data && (data.images || []).length) {
                            await downloadImagesOnly(data);
                        } else {
                            showToast("未解析到媒体，已复制页面链接");
                            try {
                                if (typeof GM_setClipboard === "function") GM_setClipboard(postUrl);
                                else await navigator.clipboard.writeText(postUrl);
                            } catch (_) {}
                        }
                        return;
                    }
                }

                // ---- local actions (original) ----

                if (!currentPostEl) currentPostEl = findBestPost() || document.body;
                showToast("正在解析…");
                currentData = await extractFromElement(currentPostEl);
                if (platform === "reddit") currentData = enrichReddit(currentData, currentPostEl);
                if ((!currentData.images || !currentData.images.length) && (!currentData.text || currentData.text.length < 5)) {
                    const fallback = await extractFromElement(document.body);
                    if (fallback && ((fallback.images || []).length || (fallback.text || "").length > (currentData.text || "").length)) {
                        currentData = Object.assign({}, currentData, {
                            text: currentData.text || fallback.text,
                            images: (currentData.images && currentData.images.length) ? currentData.images : fallback.images,
                            title: currentData.title || fallback.title,
                            author: currentData.author || fallback.author,
                            handle: currentData.handle || fallback.handle
                        });
                    }
                }
                console.log("[UPMD] extracted", currentData);

                if (!currentData || (!currentData.title && !currentData.text && !(currentData.images || []).length)) {
                    showToast("提取失败：请打开单条帖子详情再试");
                    return;
                }

                if (action === "zip") await downloadZip(currentData);
                else if (action === "md") {
                    const mdName = sanitizeFilename(currentData.title || currentData.folderName || "post", 80);
                    const wantTxt = isAndroid() || platform === "facebook";
                    saveMarkdownFile("\ufeff" + buildMarkdown(currentData, null), mdName, { withTxt: wantTxt });
                    showToast("✅ Markdown 已触发（.md" + (wantTxt ? " + 一份.txt" : "") + "）+ 已复制剪贴板：" + mdName, 4000);
                } else if (action === "imgs") await downloadImagesOnly(currentData);
                else if (action === "copy") {
                    const md = buildMarkdown(currentData, false);
                    try {
                        if (typeof GM_setClipboard === "function") GM_setClipboard(md);
                        else await navigator.clipboard.writeText(md);
                        showToast("✅ 已复制");
                    } catch (_) { showToast("复制失败，请用仅下载 Markdown"); }
                } else if (action === "pdf") openPrintView(currentData);
            } catch (err) {
                console.error("[UPMD]", err);
                showToast("失败: " + (err && err.message ? err.message : String(err)), 4500);
            } finally {
                b.disabled = false;
            }
        });
    }


    // ---------- helpers ----------
    function textOf(el) {
        if (!el) return "";
        return (el.innerText || el.textContent || "").trim();
    }
    function absUrl(u) {
        if (!u) return "";
        try { return new URL(u, location.href).href; } catch { return u; }
    }
    function sanitizeFilename(name, max = 60) {
        return String(name || "post")
            .replace(/[\\/:*?"<>|\x00-\x1f]/g, "_")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, max) || "post";
    }
    function pad2(n) { return String(n).padStart(2, "0"); }
    function todayStr() {
        const d = new Date();
        return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
    }
    function formatCNDate(iso) {
        if (!iso) return "";
        try {
            const d = new Date(iso);
            if (isNaN(d.getTime())) return iso;
            return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 " +
                pad2(d.getHours()) + ":" + pad2(d.getMinutes());
        } catch { return iso; }
    }

    function isAndroid() {
        return /Android/i.test(navigator.userAgent || "");
    }

    /** 规范化媒体 URL 用于去重（去掉 name= / :large 等尺寸参数） */
    function mediaDedupeKey(url) {
        if (!url || typeof url !== "string") return "";
        try {
            const u = new URL(url);
            // pbs.twimg.com/media/xxx?format=jpg&name=large → 按 pathname 去重
            if (/pbs\.twimg\.com/i.test(u.hostname)) {
                return u.hostname + u.pathname.replace(/:(large|orig|small|medium|thumb|360x360)$/i, "");
            }
            return u.hostname + u.pathname;
        } catch {
            return url.split("?")[0].replace(/:(large|orig|small|medium|thumb)$/i, "");
        }
    }

    /** 字符串 URL 列表去重（保持顺序） */
    function dedupeUrls(list) {
        const out = [];
        const seen = new Set();
        (list || []).forEach(u => {
            if (!u || typeof u !== "string") return;
            const key = mediaDedupeKey(u) || u.split("?")[0];
            if (seen.has(key)) return;
            seen.add(key);
            out.push(u);
        });
        return out;
    }

    /** 视频对象列表按 url 去重（保持顺序） */
    function dedupeVideos(list) {
        const out = [];
        const seen = new Set();
        (list || []).forEach(v => {
            if (!v || !v.url) return;
            const key = String(v.url).split("?")[0];
            if (seen.has(key)) return;
            seen.add(key);
            out.push(v);
        });
        return out;
    }

    /** 是否为可直接下载的媒体 CDN 链接（排除帖子网页，避免 1DM「已接收网页」） */
    function isDirectMediaUrl(url) {
        if (!url || typeof url !== "string") return false;
        if (!/^https?:\/\//i.test(url)) return false;
        if (/^blob:/i.test(url)) return false;
        let host = "", path = "", search = "";
        try {
            const u = new URL(url);
            host = u.hostname.replace(/^www\./, "").toLowerCase();
            path = u.pathname || "";
            search = u.search || "";
        } catch {
            return false;
        }
        const tail = path + search;
        // 社交站点「帖子页」一律不给 1DM（否则会报「已接收网页」）
        if (/^(threads\.(com|net)|instagram\.com|facebook\.com|fb\.com|fb\.watch|x\.com|twitter\.com|reddit\.com|pinterest\.com|pin\.it|dailymotion\.com|dai\.ly)$/i.test(host)) {
            if (!/\.(jpe?g|png|webp|gif|mp4|webm|mov|m4v)(\?|$)/i.test(tail)) return false;
        }
        // 明确的 CDN / 媒体域名
        if (/cdninstagram|scontent|fbcdn|fbsbx|twimg|video\.twimg|pinimg|i\.redd\.it|preview\.redd\.it|v\.redd\.it|external-preview\.redd\.it|dmcdn|cloudfront|akamai|tiktokcdn|musical\.ly|byteoversea|ibytedtos|tgur|telegram\.org|sinaimg|weibocdn|xhscdn|sns-webpic|xiaohongshu|zhimg|hdslb|bilivideo|ytimg|googlevideo|csdnimg|byteimg/i.test(host)) {
            return true;
        }
        if (/\.(jpe?g|png|webp|gif|mp4|webm|mov|m4v)(\?|$)/i.test(tail)) return true;
        return false;
    }

    /**
     * 调用 1DM+ 优先，失败再试 1DM。仅适用于媒体直链。
     */
    function sendTo1DM(url, filename) {
        if (!isDirectMediaUrl(url)) {
            console.warn("[UPMD] 1DM skip non-media url", (url || "").slice(0, 120));
            return false;
        }
        if (!isAndroid()) return false;
        const name = filename ? String(filename) : "";
        const pkgs = [
            "idm.internet.download.manager.plus",
            "idm.internet.download.manager"
        ];
        try {
            let path = url.replace(/^https?:\/\//i, "").split("#")[0];
            const scheme = /^https:/i.test(url) ? "https" : "http";
            for (const pkg of pkgs) {
                const intent =
                    "intent://" + path +
                    "#Intent;scheme=" + scheme +
                    ";action=android.intent.action.VIEW" +
                    ";package=" + pkg +
                    ";S.browser_fallback_url=" + encodeURIComponent(url) +
                    ";end";
                try {
                    const ifr = document.createElement("iframe");
                    ifr.style.cssText = "display:none;width:0;height:0;border:0";
                    ifr.src = intent;
                    document.body.appendChild(ifr);
                    setTimeout(() => { try { ifr.remove(); } catch (_) {} }, 2500);
                    console.log("[UPMD] 1DM intent", pkg, name || url.slice(0, 80));
                    return true;
                } catch (e) {
                    console.warn("[UPMD] 1DM intent fail", pkg, e);
                }
            }
            try {
                location.href =
                    "intent://" + path +
                    "#Intent;scheme=" + scheme +
                    ";action=android.intent.action.VIEW" +
                    ";package=" + pkgs[0] +
                    ";end";
                return true;
            } catch (_) {}
        } catch (e) {
            console.warn("[UPMD] sendTo1DM", e);
        }
        return false;
    }

    /** 批量把「媒体直链」交给 1DM；非直链自动跳过 */
    async function sendMediaListTo1DM(urls, nameBase) {
        const list = (urls || []).filter(isDirectMediaUrl);
        const skipped = (urls || []).length - list.length;
        if (!list.length) {
            showToast(
                skipped
                    ? "没有媒体直链可给 1DM（多为网页链接，已跳过 " + skipped + " 条）"
                    : "没有可交给 1DM 的媒体直链",
                4000
            );
            return 0;
        }
        if (!isAndroid()) {
            showToast("1DM 仅支持 Android。直链已复制到剪贴板", 3500);
            try {
                const text = list.join("\n");
                if (typeof GM_setClipboard === "function") GM_setClipboard(text);
                else await navigator.clipboard.writeText(text);
            } catch (_) {}
            return 0;
        }
        let n = 0;
        for (let i = 0; i < list.length; i++) {
            const u = list[i];
            const fn = nameBase
                ? (list.length === 1 ? nameBase : nameBase + "_" + pad2(i + 1))
                : "";
            showToast(`1DM 媒体直链 ${i + 1}/${list.length}…`);
            if (sendTo1DM(u, fn)) n++;
            await sleep(1000);
        }
        showToast(`已向 1DM 发送 ${n}/${list.length} 条媒体直链` + (skipped ? `（跳过网页 ${skipped}）` : ""), 4000);
        return n;
    }

    /**
     * 本地下载（浏览器 / GM_download）。
     * 默认不走 1DM；仅当 opts.also1DM 且为媒体直链时额外发给 1DM。
     */
    function triggerDownload(blobOrUrl, filename, opts) {
        opts = opts || {};
        const isBlob = typeof blobOrUrl !== "string";
        // 可选：额外推给 1DM（不影响浏览器下载）
        if (!isBlob && opts.also1DM && isDirectMediaUrl(blobOrUrl)) {
            try { sendTo1DM(blobOrUrl, filename); } catch (_) {}
        }
        const url = isBlob ? URL.createObjectURL(blobOrUrl) : blobOrUrl;
        if (typeof GM_download === "function") {
            try {
                GM_download({
                    url, name: filename, saveAs: false,
                    onload: () => console.log("[UPMD] GM_download ok", filename),
                    onerror: (e) => { console.warn("[UPMD] GM_download err", e); fallbackAnchor(url, filename, isBlob); },
                    ontimeout: () => fallbackAnchor(url, filename, isBlob)
                });
                if (isBlob) setTimeout(() => URL.revokeObjectURL(url), 180000);
                return;
            } catch (e) { console.warn("[UPMD] GM_download throw", e); }
        }
        fallbackAnchor(url, filename, isBlob);
    }
    function fallbackAnchor(url, filename, isBlob) {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || "download";
        a.target = "_blank";
        a.rel = "noopener";
        a.style.display = "none";
        document.body.appendChild(a);
        try { a.click(); } catch (_) {}
        // 只点一次，避免浏览器弹出多次确认 / 重复落盘
        setTimeout(() => {
            try { a.remove(); } catch (_) {}
            if (isBlob) {
                setTimeout(() => { try { URL.revokeObjectURL(url); } catch (_) {} }, 60000);
            }
        }, 8000);
    }

    /**
     * 专门保存 Markdown：Edge/Android/Facebook 上 .md 易被吞。
     * - 剪贴板必写
     * - 默认只下 .md；opts.withTxt 时才额外下 .txt（避免重复多份）
     * - 与视频下载错开调用
     * @param {object} [opts]
     * @param {boolean} [opts.withTxt=false] 是否额外触发 .txt
     * @param {boolean} [opts.clipboardOnly=false] 只写剪贴板，不触发文件下载
     */
    function saveMarkdownFile(mdText, baseName, opts) {
        opts = opts || {};
        const body = String(mdText || "");
        const plain = body.replace(/^\ufeff/, "");
        const withBom = body.startsWith("\ufeff") ? body : ("\ufeff" + body);
        const name = sanitizeFilename(baseName || "post", 80);
        // 1) 剪贴板（最稳）
        try {
            if (typeof GM_setClipboard === "function") GM_setClipboard(plain);
            else if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(plain).catch(() => {});
            }
        } catch (_) {}
        if (opts.clipboardOnly) return;
        // 2) .md
        try {
            triggerDownload(
                new Blob([withBom], { type: "text/markdown;charset=utf-8" }),
                name + ".md"
            );
        } catch (e) {
            console.warn("[UPMD] save md", e);
        }
        // 3) 仅在明确要求时再下 .txt（Edge Android 部分环境 .md 会被吞）
        //    默认不再每次都下，避免出现两份 txt
        if (opts.withTxt && (isAndroid() || platform === "facebook")) {
            try {
                setTimeout(() => {
                    triggerDownload(
                        new Blob([withBom], { type: "text/plain;charset=utf-8" }),
                        name + ".txt"
                    );
                }, 500);
            } catch (_) {}
        }
    }

    // ---------- extract ----------
    /** Collect playable video URLs + posters from a scope. Skips blob: (not downloadable). */
    function collectVideos(scope) {
        const videos = [];
        const seen = new Set();
        const root = (scope && scope.querySelectorAll) ? scope : document;

        // 1) DOM <video> / <source> (non-blob)
        root.querySelectorAll("video").forEach(v => {
            let src = v.currentSrc || v.src || "";
            if (!src) {
                const s = v.querySelector("source");
                if (s) src = s.src || s.getAttribute("src") || "";
            }
            const poster = v.poster || v.getAttribute("poster") || "";
            if (src && !/^blob:/i.test(src) && !seen.has(src)) {
                seen.add(src);
                videos.push({ url: absUrl(src), poster: poster ? absUrl(poster) : "" });
            }
        });

        // 2) meta og:video (page-level, useful for single-post pages)
        document.querySelectorAll(
            'meta[property="og:video"], meta[property="og:video:url"], meta[property="og:video:secure_url"]'
        ).forEach(m => {
            const u = (m.content || "").trim();
            if (u && !/^blob:/i.test(u) && !seen.has(u)) {
                seen.add(u);
                const posterMeta = document.querySelector('meta[property="og:image"]');
                videos.push({
                    url: absUrl(u),
                    poster: posterMeta && posterMeta.content ? absUrl(posterMeta.content) : ""
                });
            }
        });

        // 3) X / Twitter: page often only exposes blob: on <video>; real MP4s live in embedded JSON / HTML
        if (platform === "x") {
            collectXVideoUrls(scope, videos, seen);
        }

        return videos;
    }

    /**
     * X.com 专用：从页面 HTML / script 文本中提取 video.twimg.com 直链 MP4，
     * 并尽量挑最高分辨率。解决 <video> 只有 blob: 导致「只识别到图片」的问题。
     */
    function collectXVideoUrls(scope, videos, seen) {
        const candidates = []; // { url, width, height, score }

        function addCandidate(raw) {
            if (!raw || typeof raw !== "string") return;
            let u = raw
                .replace(/\\u002F/g, "/")
                .replace(/\\\//g, "/")
                .replace(/\\/g, "")
                .split(/["'\s<>]/)[0]
                .trim();
            if (!u || !/^https?:\/\//i.test(u)) return;
            // only progressive MP4 we can download
            if (!/video\.twimg\.com/i.test(u) && !/\/(ext_tw_video|amplify_video|tweet_video)\//i.test(u)) return;
            if (!/\.mp4(\?|$)/i.test(u)) return;
            if (seen.has(u) || candidates.some(c => c.url === u)) return;

            let width = 0, height = 0;
            const dim = u.match(/\/(\d+)x(\d+)\//);
            if (dim) {
                width = parseInt(dim[1], 10) || 0;
                height = parseInt(dim[2], 10) || 0;
            }
            // prefer higher resolution; slight bias to larger area
            const score = width * height || 1;
            candidates.push({ url: u, width, height, score });
        }

        // A) Full page HTML scan (covers React-serialized data & script tags)
        try {
            const html = document.documentElement ? document.documentElement.innerHTML : "";
            const patterns = [
                /https:\/\/video\.twimg\.com\/[^"'\\\s<>]+\.mp4[^"'\\\s<>]*/gi,
                /https:\\\/\\\/video\.twimg\.com\\\/[^"'\\\s<>]+\.mp4[^"'\\\s<>]*/gi,
                /https:\/\/[^"'\\\s<>]*\/(ext_tw_video|amplify_video|tweet_video)\/[^"'\\\s<>]+\.mp4[^"'\\\s<>]*/gi
            ];
            patterns.forEach(re => {
                const matches = html.match(re) || [];
                matches.forEach(addCandidate);
            });
        } catch (e) {
            console.warn("[UPMD] X video HTML scan fail", e);
        }

        // B) Also scan <script> texts that may hold entities / video_info
        try {
            document.querySelectorAll('script').forEach(sc => {
                const t = sc.textContent || sc.innerText || "";
                if (t.length < 80 || t.length > 2e6) return;
                if (!/video\.twimg\.com|ext_tw_video|amplify_video|video_info|variants/i.test(t)) return;
                const re = /https:\\\/\\\/video\.twimg\.com\\\/[^"']+\.mp4[^"']*|https:\/\/video\.twimg\.com\/[^"'\s]+\.mp4[^"'\s]*/gi;
                const m = t.match(re) || [];
                m.forEach(addCandidate);
            });
        } catch (e) { /* ignore */ }

        // C) Optional: walk React fiber on the article to find video_info.variants (more precise for one tweet)
        try {
            const rootEl = (scope && scope.nodeType === 1) ? scope : null;
            if (rootEl) {
                const fiberKey = Object.keys(rootEl).find(k =>
                    k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$")
                );
                if (fiberKey) {
                    const queue = [rootEl[fiberKey]];
                    const visited = new Set();
                    let steps = 0;
                    while (queue.length && steps < 120) {
                        const fiber = queue.shift();
                        steps++;
                        if (!fiber || visited.has(fiber)) continue;
                        visited.add(fiber);
                        const props = fiber.memoizedProps || fiber.pendingProps;
                        if (props) {
                            const tryMedia = (list) => {
                                if (!Array.isArray(list)) return;
                                list.forEach(item => {
                                    if (!item || (item.type !== "video" && item.type !== "animated_gif")) return;
                                    const variants = (item.video_info && item.video_info.variants) || item.variants || [];
                                    variants.forEach(v => {
                                        if (v && v.content_type === "video/mp4" && v.url) addCandidate(v.url);
                                    });
                                });
                            };
                            tryMedia(props.media);
                            tryMedia(props.entities && props.entities.media);
                            tryMedia(props.extended_entities && props.extended_entities.media);
                            if (props.legacy) {
                                tryMedia(props.legacy.extended_entities && props.legacy.extended_entities.media);
                                tryMedia(props.legacy.entities && props.legacy.entities.media);
                            }
                            if (props.video_info && Array.isArray(props.video_info.variants)) {
                                props.video_info.variants.forEach(v => {
                                    if (v && v.content_type === "video/mp4" && v.url) addCandidate(v.url);
                                });
                            }
                        }
                        if (fiber.child) queue.push(fiber.child);
                        if (fiber.sibling) queue.push(fiber.sibling);
                        if (fiber.return && steps < 30) queue.push(fiber.return); // limited upward
                    }
                }
            }
        } catch (e) {
            // React internals change often; ignore
        }

        // D) Prefer highest resolution; keep a small set (multi-video tweets rare, but possible)
        candidates.sort((a, b) => b.score - a.score);

        // Try to attach poster from nearby video thumbs inside the article/scope
        let poster = "";
        try {
            const root = (scope && scope.querySelectorAll) ? scope : document;
            const thumb = root.querySelector(
                'img[src*="ext_tw_video_thumb"], img[src*="amplify_video_thumb"], img[src*="tweet_video_thumb"], video[poster]'
            );
            if (thumb) {
                poster = (thumb.poster || thumb.src || thumb.currentSrc || "").trim();
                if (poster && /^blob:/i.test(poster)) poster = "";
                if (poster) poster = absUrl(poster);
            }
        } catch (e) { /* ignore */ }

        // 按「媒体 ID」去重：同一条视频的 720p/480p/360p 只保留最高分辨率
        // 路径形如 /ext_tw_video/1234567890/pu/vid/1280x720/xxx.mp4 或 /amplify_video/123/...
        function mediaKey(url) {
            try {
                const path = new URL(url).pathname;
                // 取 video 类型 + 数字 id 作为同一视频的 key
                const m = path.match(/\/(ext_tw_video|amplify_video|tweet_video)\/(\d+)/i);
                if (m) return m[1].toLowerCase() + ":" + m[2];
                // 回退：去掉分辨率段后的路径主干
                return path.replace(/\/\d+x\d+\//, "/").replace(/\/[^/]+\.mp4$/i, "");
            } catch {
                return url;
            }
        }
        const byMedia = new Map();
        candidates.forEach(c => {
            const key = mediaKey(c.url);
            const prev = byMedia.get(key);
            if (!prev || c.score > prev.score) byMedia.set(key, c);
        });
        // 同一推文通常只有 1 个视频（偶尔 2）；只取最高质量的前 2 个不同 media
        const best = Array.from(byMedia.values()).sort((a, b) => b.score - a.score).slice(0, 2);

        best.forEach(c => {
            if (seen.has(c.url)) return;
            seen.add(c.url);
            videos.push({
                url: absUrl(c.url),
                poster: poster || "",
                quality: c.width && c.height ? (c.width + "x" + c.height) : ""
            });
        });

        if (best.length) {
            console.log("[UPMD] X videos found (deduped):", best.map(b => (b.quality || "") + " " + b.url.slice(0, 70)));
        }
    }

    /** Ensure posters of videos also appear in images list. */
    function mergeVideoPosters(images, videos) {
        const out = Array.isArray(images) ? images.slice() : [];
        (videos || []).forEach(v => {
            if (v && v.poster && !out.includes(v.poster)) out.push(v.poster);
        });
        return out;
    }

    async function extractFromElement(el) {
        if (platform === "x") return extractX(el);
        if (platform === "threads") return extractThreads(el);
        if (platform === "reddit") return extractReddit(el);
        if (platform === "instagram") return await extractInstagram(el);
        if (platform === "facebook") return extractFacebook(el);
        if (platform === "pinterest") return extractPinterest(el);
        if (platform === "dailymotion") return extractDailymotion(el);
        if (platform === "tiktok") return extractTikTok(el);
        if (platform === "telegram") return extractTelegram(el);
        if (platform === "weibo") return extractWeibo(el);
        if (platform === "xiaohongshu") return extractXiaohongshu(el);
        if (platform === "csdn") return extractCsdn(el);
        if (platform === "zhihu") return extractZhihu(el);
        return extractGeneric(el);
    }

    function extractX(article) {
        article = (article && article.closest && article.closest('article[data-testid="tweet"]')) || article || document.body;
        let author = "", handle = "", userUrl = "";
        const userNameEl = article.querySelector && article.querySelector('[data-testid="User-Name"]');
        if (userNameEl) {
            for (const a of userNameEl.querySelectorAll("a[href^='/']")) {
                const href = a.getAttribute("href") || "";
                if (/^\/[A-Za-z0-9_]+\/?$/.test(href) && !href.includes("/status/")) {
                    handle = href.replace(/\//g, "");
                    userUrl = "https://x.com/" + handle;
                    author = textOf(a.querySelector("span")) || textOf(a);
                    break;
                }
            }
        }
        if (!handle) {
            const m = location.pathname.match(/^\/([A-Za-z0-9_]+)\//);
            if (m && m[1] !== "i" && m[1] !== "home") handle = m[1];
        }
        const timeEl = article.querySelector && article.querySelector("time");
        const datetime = timeEl ? (timeEl.getAttribute("datetime") || "") : "";
        let text = "";
        if (article.querySelectorAll) {
            text = Array.from(article.querySelectorAll('[data-testid="tweetText"]')).map(textOf).filter(Boolean).join("\n\n");
        }
        if (!text && article.querySelector) {
            const t = article.querySelector('[data-testid="tweetText"]');
            text = textOf(t);
        }
        const images = [];
        const scope = article.querySelectorAll ? article : document;
        (article.querySelectorAll ? article : document).querySelectorAll("img").forEach(img => {
            let src = img.src || img.currentSrc || "";
            if (/pbs\.twimg\.com\/(media|ext_tw_video_thumb|amplify_video_thumb)/i.test(src)) {
                src = src.replace(/name=\w+/, "name=large");
                if (!src.includes("name=")) src += (src.includes("?") ? "&" : "?") + "name=large";
                if (!images.includes(src)) images.push(src);
            }
        });
        // page-wide fallback
        /* no page-wide image fallback */
        const links = [];
        (article.querySelectorAll ? article : document).querySelectorAll('a[href^="http"]').forEach(a => {
            if (!/x\.com|twitter\.com|t\.co\//i.test(a.href) && a.href.length > 12 && !links.includes(a.href)) links.push(a.href);
        });
        const videos = collectVideos(article);
        // also keep video poster thumbs already matched by pbs.twimg patterns
        const images2 = mergeVideoPosters(images, videos);
        let url = location.href.split("?")[0], statusId = "";
        const statusLink = article.querySelector && article.querySelector('a[href*="/status/"]');
        if (statusLink) {
            const m = (statusLink.getAttribute("href") || "").match(/\/status\/(\d+)/);
            if (m) { statusId = m[1]; url = absUrl((statusLink.getAttribute("href") || "").split("?")[0]); }
        }
        if (!statusId) {
            const m = location.pathname.match(/\/status\/(\d+)/);
            if (m) statusId = m[1];
        }
        // og:url fallback for real permalink
        if (!statusId || isHomeLikeUrl(url)) {
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content && /\/status\/\d+/.test(og.content)) {
                url = og.content.split("?")[0];
                const mm = url.match(/\/status\/(\d+)/);
                if (mm) statusId = mm[1];
            }
        }
        const title = text ? text.split("\n")[0].slice(0, 80) : (author || handle || "推文");
        return {
            platform: "X", author, handle: handle ? "@" + handle.replace(/^@/, "") : "", userUrl,
            datetime, text, images: images2, links, videos, url, statusId,
            folderName: (handle || "user") + (statusId ? "-" + statusId : ""),
            title
        };
    }

    function extractThreads(el) {
        el = el || document.body;
        let author = "", handle = "", userUrl = "";
        const linksA = (el.querySelectorAll ? el : document).querySelectorAll('a[href*="/@"]');
        for (const a of linksA) {
            const m = (a.getAttribute("href") || "").match(/\/@([A-Za-z0-9._]+)/);
            if (m) {
                handle = "@" + m[1];
                userUrl = absUrl("/@" + m[1]);
                author = textOf(a) || m[1];
                break;
            }
        }
        const timeEl = (el.querySelector && el.querySelector("time")) || document.querySelector("time");
        const datetime = timeEl ? (timeEl.getAttribute("datetime") || textOf(timeEl)) : "";
        const texts = [];
        (el.querySelectorAll ? el : document).querySelectorAll('span[dir="auto"], div[dir="auto"]').forEach(node => {
            const t = textOf(node);
            if (t.length > 8 && !/^(关注|Follow|回复|Reply|分享|Share|赞|Like)/i.test(t)) {
                if (!texts.some(x => x.includes(t) || t.includes(x))) texts.push(t);
            }
        });
        texts.sort((a, b) => b.length - a.length);
        const text = texts.slice(0, 8).join("\n\n");
        const images = [];
        (el.querySelectorAll ? el : document).querySelectorAll("img").forEach(img => {
            const src = img.src || img.currentSrc;
            if (src && /cdninstagram|scontent|threads|fbcdn/i.test(src) && (img.naturalWidth > 40 || img.width > 40 || img.getBoundingClientRect().width > 40)) {
                if (!images.includes(src)) images.push(src);
            }
        });
        /* no page-wide image fallback */
        const links = [];
        (el.querySelectorAll ? el : document).querySelectorAll('a[href^="http"]').forEach(a => {
            if (!/threads\.(com|net)|instagram\.com|facebook\.com/i.test(a.href) && !links.includes(a.href)) links.push(a.href);
        });
        const videos = collectVideos(el);
        const images2 = mergeVideoPosters(images, videos);
        let url = location.href.split("?")[0];
        let statusId = "";
        const m = url.match(/\/post\/([A-Za-z0-9_-]+)/) || url.match(/\/t\/([A-Za-z0-9_-]+)/) ||
            url.match(/\/@[^/]+\/(post|t)\/([A-Za-z0-9_-]+)/);
        if (m) statusId = m[2] || m[1];
        // prefer permalink from element
        const fromEl = pickPermalinkFromEl(el);
        if (fromEl && !isHomeLikeUrl(fromEl)) {
            url = fromEl.split("?")[0];
            const mm = url.match(/\/(post|t)\/([A-Za-z0-9_-]+)/);
            if (mm) statusId = mm[2];
        } else {
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content && /threads\.(com|net)/i.test(og.content)) {
                url = og.content.split("?")[0];
                const mm = url.match(/\/(post|t)\/([A-Za-z0-9_-]+)/);
                if (mm) statusId = mm[2];
            }
        }
        return {
            platform: "Threads", author, handle, userUrl, datetime, text, images: images2, links, videos, url, statusId,
            folderName: (handle || "user").replace("@", "") + (statusId ? "-" + statusId : "-" + Date.now()),
            title: text ? text.split("\n")[0].slice(0, 80) : (author || "Threads 帖子")
        };
    }

    function extractReddit(el) {
        const root = (el && el.closest && (el.closest("shreddit-post") || el.closest("[data-testid='post-container']"))) || el || document.body;
        let title = "";
        if (root.tagName === "SHREDDIT-POST") title = root.getAttribute("post-title") || root.getAttribute("title") || "";
        if (!title) {
            for (const sel of ["h1", "[slot='title']", "a[slot='title']", "h3", "[id*='post-title']", "a.title"]) {
                const t = root.querySelector && root.querySelector(sel);
                if (t && textOf(t).length > 2) { title = textOf(t); break; }
            }
        }
        if (!title) title = textOf(document.querySelector("h1")) || "";

        let author = "", handle = "", userUrl = "";
        if (root.tagName === "SHREDDIT-POST") {
            author = root.getAttribute("author") || "";
            if (author) handle = "u/" + author;
        }
        if (!author && root.querySelector) {
            for (const sel of ['a[href*="/user/"]', 'a[href*="/u/"]', "[data-testid='post_author_link']", "a.author"]) {
                const a = root.querySelector(sel);
                if (a) {
                    author = textOf(a);
                    const m = (a.getAttribute("href") || "").match(/\/(u|user)\/([^/?#]+)/);
                    if (m) { handle = "u/" + m[2]; userUrl = absUrl(a.getAttribute("href")); }
                    break;
                }
            }
        }

        let subreddit = "";
        if (root.tagName === "SHREDDIT-POST") {
            subreddit = root.getAttribute("subreddit-prefixed-name") || root.getAttribute("subreddit-name") || "";
            if (subreddit && !subreddit.startsWith("r/")) subreddit = "r/" + subreddit;
        }
        if (!subreddit && root.querySelector) {
            const subEl = root.querySelector('a[href*="/r/"]');
            if (subEl) {
                const m = (subEl.getAttribute("href") || textOf(subEl)).match(/r\/([^/\s]+)/);
                if (m) subreddit = "r/" + m[1];
            }
        }

        let datetime = "";
        if (root.tagName === "SHREDDIT-POST") datetime = root.getAttribute("created-timestamp") || "";
        const timeEl = root.querySelector && root.querySelector("time, faceplate-timeago time");
        if (!datetime && timeEl) datetime = timeEl.getAttribute("datetime") || textOf(timeEl);

        let text = "";
        if (root.querySelector) {
            for (const sel of ['[slot="text-body"]', ".usertext-body .md", "[data-testid='post-content'] .md", "div[data-click-id='text']"]) {
                const b = root.querySelector(sel);
                if (b && textOf(b).length > 5) { text = textOf(b); break; }
            }
        }
        if (!text) text = title;

        const images = [];
        function addImg(src) {
            if (!src || src.startsWith("data:")) return;
            src = String(src).replace(/&amp;/g, "&");
            if (/external-preview\.redd\.it/i.test(src)) return;
            if (/i\.redd\.it|preview\.redd\.it|i\.imgur\.com/i.test(src)) {
                if (!images.includes(src)) images.push(src);
            }
        }
        if (root.querySelectorAll) {
            root.querySelectorAll("img").forEach(img => addImg(img.src || img.currentSrc));
            root.querySelectorAll('a[href*="i.redd.it"], a[href*="preview.redd.it"]').forEach(a => addImg(a.href));
        }
        if (!images.length) {
            document.querySelectorAll("img").forEach(img => {
                if (img.getBoundingClientRect().width > 100) addImg(img.src);
            });
        }

        const links = [];
        if (root.querySelectorAll) {
            root.querySelectorAll('a[href^="http"]').forEach(a => {
                if (!/reddit\.com|redd\.it/i.test(a.href) && a.href.length > 12 && !links.includes(a.href)) links.push(a.href);
            });
        }
        const videos = collectVideos(root);
        // v.redd.it poster via video
        const images2 = mergeVideoPosters(images, videos);

        let url = location.href.split("?")[0], statusId = "";
        if (root.tagName === "SHREDDIT-POST") {
            statusId = (root.getAttribute("id") || root.getAttribute("post-id") || "").replace(/^t3_/, "");
            const pl = root.getAttribute("permalink");
            if (pl) url = absUrl(pl);
        }
        if (!statusId) {
            const m = url.match(/\/comments\/([a-z0-9]+)/i);
            if (m) statusId = m[1];
        }
        if (!statusId || isHomeLikeUrl(url)) {
            const fromEl = pickPermalinkFromEl(root);
            if (fromEl) {
                url = fromEl.split("?")[0];
                const mm = url.match(/\/comments\/([a-z0-9]+)/i);
                if (mm) statusId = mm[1];
            }
        }

        const folderName = (handle || subreddit || "reddit").replace(/^u\//, "").replace(/^r\//, "") +
            (statusId ? "-" + statusId : "-" + Date.now());

        return {
            platform: "Reddit", author, handle, userUrl, subreddit, datetime,
            text, images: images2, links, videos, url, statusId, folderName,
            title: title || text.slice(0, 80) || "Reddit Post"
        };
    }

    function enrichReddit(data, el) {
        if (!data) return data;
        if (!(data.images || []).length) {
            const scope = (el && el.closest && el.closest("shreddit-post")) || el || document;
            const more = [];
            if (scope.querySelectorAll) {
                scope.querySelectorAll("img").forEach(img => {
                    const src = img.src || img.currentSrc;
                    if (src && /redd\.it|imgur/i.test(src) && (img.naturalWidth > 40 || img.width > 40)) {
                        if (!more.includes(src)) more.push(src);
                    }
                });
            }
            if (more.length) data.images = more;
        }
        return data;
    }


    async function extractInstagram(el) {
        // Scope strictly to the clicked post card — never whole page
        let root = el;
        if (!root || root === document.body || root === document.documentElement) {
            root = document.querySelector('[role="dialog"] article') ||
                document.querySelector('[role="dialog"]') ||
                document.querySelector("article") ||
                document.body;
        }
        if (el && el.closest) {
            const art = el.closest("article") || el.closest('[role="dialog"]');
            if (art) root = art;
        }

        let author = "", handle = "", userUrl = "";
        const userA =
            root.querySelector("header a[href^='/']") ||
            root.querySelector('a[role="link"][href^="/"]');
        if (userA) {
            const href = (userA.getAttribute("href") || "").split("?")[0];
            const m = href.match(/^\/([A-Za-z0-9._]+)\/?$/);
            if (m && !["p", "reel", "reels", "stories", "explore", "accounts", "direct"].includes(m[1])) {
                handle = "@" + m[1];
                userUrl = absUrl("/" + m[1] + "/");
                author = textOf(userA) || m[1];
            }
        }
        if (!handle) {
            const m = location.pathname.match(/^\/([A-Za-z0-9._]+)\//);
            if (m && !["p", "reel", "reels", "stories", "explore"].includes(m[1])) handle = "@" + m[1];
        }

        // Caption only inside this post
        let text = "";
        const texts = [];
        root.querySelectorAll('h1, span[dir="auto"], div[dir="auto"], li[role="menuitem"] span').forEach(n => {
            const t = textOf(n);
            if (t.length > 12 && !/^(关注|Follow|分享|Share|赞|Like|评论|Comment|·)/i.test(t)) {
                if (!texts.some(x => x.includes(t) || t.includes(x))) texts.push(t);
            }
        });
        texts.sort((a, b) => b.length - a.length);
        text = texts.slice(0, 3).join("\n\n");
        if (!text && /\/(p|reel|reels)\//i.test(location.pathname)) {
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) text = ogDesc.content || "";
        }

        const images = [];
        // key: normalized identity (path without size tokens); value: best URL
        const bestByKey = new Map();

        function igKey(src) {
            try {
                const u = new URL(src, location.href);
                // path often encodes size; strip common size segments for identity
                let path = u.pathname
                    .replace(/\/s\d+x\d+\//g, "/")
                    .replace(/\/p\d+x\d+\//g, "/")
                    .replace(/\/\d+x\d+\//g, "/")
                    .replace(/\/v\/t[\d.]+-\d+\//, "/v/");
                // keep last meaningful filename segment
                const base = path.split("/").filter(Boolean).pop() || path;
                return base.split("?")[0];
            } catch {
                return String(src).split("?")[0];
            }
        }
        function igScore(src) {
            let s = 0;
            if (/\/1080|1080x|e35|s1080|s2048|s1440/i.test(src)) s += 5;
            if (/\/720|720x|s720/i.test(src)) s += 3;
            if (/\/640|640x|s640/i.test(src)) s += 2;
            if (/stp=|p\d+x\d+/i.test(src)) s -= 2;
            if (/s150x150|s320x320|s40x40|s50x50|s60x60|s64x64|s80x80|s100x100/i.test(src)) s -= 10;
            // longer query often = higher res params on IG CDN
            s += Math.min(3, Math.floor((src.length || 0) / 120));
            return s;
        }
        function isAvatarLike(img, src) {
            const alt = ((img && img.alt) || "").toLowerCase();
            if (/profile|user|avatar|的头像|profile picture/i.test(alt)) return true;
            if (/s150x150|s320x320|s40x40|s50x50|s60x60|s64x64|s80x80|s100x100/i.test(src)) return true;
            if (img) {
                const r = img.getBoundingClientRect();
                // only treat *visible* tiny squares as avatars; hidden carousel slides may be 0×0
                if (r.width > 0 && r.width < 96 && r.height > 0 && r.height < 96) return true;
            }
            return false;
        }
        function preferHigherRes(src) {
            if (!src) return src;
            // try bump common size tokens toward larger
            return src
                .replace(/\/s150x150\//g, "/s1080x1080/")
                .replace(/\/s320x320\//g, "/s1080x1080/")
                .replace(/\/s640x640\//g, "/s1080x1080/")
                .replace(/\/s750x750\//g, "/s1080x1080/");
        }
        function add(src, img) {
            if (!src || src.startsWith("data:")) return;
            if (!/cdninstagram|fbcdn|scontent|instagram\.com/i.test(src)) return;
            if (img && isAvatarLike(img, src)) return;
            // skip only clearly-visible tiny non-media (icons); allow 0-size (off-screen slides)
            if (img) {
                const r = img.getBoundingClientRect();
                if (r.width > 0 && r.width < 80 && r.height > 0 && r.height < 80) return;
            }
            src = preferHigherRes(src);
            const key = igKey(src);
            if (!key) return;
            const prev = bestByKey.get(key);
            if (!prev || igScore(src) > igScore(prev)) bestByKey.set(key, src);
        }
        function harvest(scope) {
            if (!scope || !scope.querySelectorAll) return;
            scope.querySelectorAll("img").forEach(img => {
                const src = img.currentSrc || img.src || "";
                add(src, img);
                const ss = img.getAttribute("srcset");
                if (ss) {
                    const parts = ss.split(",").map(s => s.trim().split(/\s+/)[0]).filter(Boolean);
                    // take several largest candidates from srcset, not only last
                    parts.slice(-4).forEach(p => add(p, img));
                }
            });
            scope.querySelectorAll("video").forEach(v => {
                if (v.poster) add(v.poster, null);
                const src = v.currentSrc || v.src;
                if (src && /cdninstagram|fbcdn|scontent/i.test(src)) {
                    // keep video URL in links later; poster already added
                }
            });
            // background-image on carousel tiles
            scope.querySelectorAll("[style*='background']").forEach(node => {
                const st = node.getAttribute("style") || "";
                const m = st.match(/url\(["']?([^"')]+)["']?\)/i);
                if (m) add(m[1], null);
            });
        }

        harvest(root);

        // Single-post page: og:image as seed if empty
        if (!bestByKey.size && /\/(p|reel|reels)\//i.test(location.pathname)) {
            const ogImage = document.querySelector('meta[property="og:image"]');
            if (ogImage && ogImage.content) add(ogImage.content, null);
        }

        // --- Carousel: IG only mounts ~1–3 slides in DOM. Click "Next" and re-harvest. ---
        async function collectCarousel() {
            const nextSel = [
                'button[aria-label="Next"]',
                'button[aria-label="下一步"]',
                'button[aria-label="次へ"]',
                'button[aria-label*="Next"]',
                'button[aria-label*="下一"]',
                '[aria-label="Next"]',
                '[aria-label="下一步"]'
            ].join(",");

            let nextBtn = root.querySelector(nextSel);
            if (!nextBtn) {
                // sometimes controls sit just outside article inside dialog
                const dlg = root.closest('[role="dialog"]') || document.querySelector('[role="dialog"]');
                if (dlg) nextBtn = dlg.querySelector(nextSel);
            }
            if (!nextBtn) return;

            // no hard image cap; stop when Next gone / hidden, or 2 steps with no new images
            // safetyCeil only prevents infinite loop if DOM never settles
            const safetyCeil = 80;
            let stable = 0;
            let lastCount = bestByKey.size;
            for (let i = 0; i < safetyCeil; i++) {
                nextBtn = (root.closest('[role="dialog"]') || root).querySelector(nextSel) ||
                    document.querySelector(nextSel);
                if (!nextBtn || nextBtn.disabled) break;
                // if button is hidden, stop
                const br = nextBtn.getBoundingClientRect();
                if (br.width < 1 && br.height < 1) break;

                try {
                    nextBtn.click();
                } catch (_) {
                    break;
                }
                await sleep(1300);
                harvest(root);
                const dlg = root.closest('[role="dialog"]');
                if (dlg) harvest(dlg);

                if (bestByKey.size === lastCount) {
                    stable++;
                    if (stable >= 2) break; // no new images for 2 steps
                } else {
                    stable = 0;
                    lastCount = bestByKey.size;
                }
            }
        }

        // Only walk carousel when we already see media (post open) or on /p/|/reel/
        const looksLikePost = /\/(p|reel|reels)\//i.test(location.pathname) ||
            !!root.querySelector('img[src*="cdninstagram"], img[src*="scontent"], video');
        if (looksLikePost) {
            try {
                showToast("解析轮播图片…");
                await collectCarousel();
            } catch (e) {
                console.warn("[UPMD] carousel", e);
            }
        }

        // rebuild images array sorted by quality
        const sorted = [...bestByKey.values()].sort((a, b) => igScore(b) - igScore(a));
        images.push(...sorted);

        // video + external links
        const videos = collectVideos(root);
        const images2 = mergeVideoPosters(images, videos);
        const links = [];
        videos.forEach(v => {
            if (v.url && !links.includes(v.url)) links.push(v.url);
        });
        root.querySelectorAll('a[href^="http"]').forEach(a => {
            if (!/instagram\.com|facebook\.com|meta\.com/i.test(a.href) && a.href.length > 12 && !links.includes(a.href)) {
                links.push(a.href);
            }
        });

        let statusId = "";
        const pm = location.pathname.match(/\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
        if (pm) statusId = pm[2];
        if (!statusId) {
            const postA = root.querySelector('a[href*="/p/"], a[href*="/reel/"], a[href*="/tv/"]');
            if (postA) {
                const mm = (postA.getAttribute("href") || "").match(/\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
                if (mm) statusId = mm[2];
            }
        }

        let postUrl = (function () {
            const postA = root.querySelector('a[href*="/p/"], a[href*="/reel/"], a[href*="/reels/"], a[href*="/tv/"]');
            if (postA) {
                const href = (postA.getAttribute("href") || "").split("?")[0];
                if (href && /\/(p|reel|reels|tv)\//.test(href)) return absUrl(href);
            }
            if (/\/(p|reel|reels|tv)\//i.test(location.pathname)) return location.href.split("?")[0];
            const fromEl = pickPermalinkFromEl(root);
            if (fromEl) return fromEl;
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content && /instagram\.com\/(p|reel|reels|tv)\//i.test(og.content)) {
                return og.content.split("?")[0];
            }
            return location.href.split("?")[0];
        })();
        if (!statusId && postUrl) {
            const mm = postUrl.match(/\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/);
            if (mm) statusId = mm[2];
        }

        const title = text ? text.split("\n")[0].slice(0, 80) : (author || handle || "Instagram");
        return {
            platform: "Instagram", author, handle, userUrl, datetime: "",
            text, images: images2, links, videos,
            url: postUrl,
            statusId,
            folderName: (handle || "ig").replace("@", "") + (statusId ? "-" + statusId : "-" + Date.now()),
            title
        };
    }

    function extractFacebook(el) {
        let root = el;
        if (!root || root === document.body || root === document.documentElement) {
            root = document.querySelector('[role="dialog"] div[role="article"]') ||
                document.querySelector('div[role="article"]') ||
                document.querySelector('[role="main"]') ||
                document.body;
        }
        if (el && el.closest) {
            const art = el.closest('div[role="article"]') || el.closest('[role="dialog"]');
            if (art) root = art;
        }

        let author = "", handle = "", userUrl = "";
        const nameA = root.querySelector('h2 a[role="link"], strong a[role="link"], a[role="link"][href*="facebook.com/"]');
        if (nameA) {
            author = textOf(nameA).split("\n")[0].trim();
            const href = nameA.getAttribute("href") || "";
            userUrl = absUrl(href.split("?")[0]);
            try {
                const u = new URL(userUrl);
                const seg = u.pathname.split("/").filter(Boolean)[0] || "";
                if (seg && !/^(posts|photos|videos|watch|reel|permalink|story|groups)$/i.test(seg)) {
                    handle = seg;
                }
            } catch (_) {}
        }

        let text = "";
        const message =
            root.querySelector('[data-ad-preview="message"]') ||
            root.querySelector('[data-ad-comet-preview="message"]') ||
            root.querySelector('div[dir="auto"][style*="text-align"]');
        if (message) text = textOf(message);
        if (!text) {
            const blocks = [];
            root.querySelectorAll('div[dir="auto"]').forEach(n => {
                const t = textOf(n);
                if (t.length > 15 && !/^(赞|Like|评论|Comment|分享|Share|关注|Follow)/i.test(t)) {
                    if (!blocks.some(x => x.includes(t) || t.includes(x))) blocks.push(t);
                }
            });
            blocks.sort((a, b) => b.length - a.length);
            text = blocks.slice(0, 4).join("\n\n");
        }
        if (!text && /facebook\.com|fb\.watch/i.test(location.hostname)) {
            const og = document.querySelector('meta[property="og:description"]');
            if (og) text = og.content || "";
        }
        // 展开后的全文（部分帖「查看更多」后有 data-ad-preview）
        if (!text || text.length < 20) {
            const expanded = root.querySelector('[data-ad-comet-preview="message"], [data-ad-preview="message"], div[data-testid="post_message"]');
            if (expanded) {
                const t = textOf(expanded);
                if (t.length > text.length) text = t;
            }
        }

        const images = [];
        const seen = new Set();
        function add(src) {
            if (!src || src.startsWith("data:") || seen.has(src)) return;
            if (!/scontent|fbcdn|facebook\.com\/.*\/t\d|fbsbx|fbcdn\.net/i.test(src)) return;
            // skip tiny emoji / icons
            seen.add(src);
            images.push(src);
        }
        root.querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            const src = img.currentSrc || img.src || "";
            // skip avatars
            if (r.width > 0 && r.width < 90 && r.height < 90) return;
            add(src);
            const ss = img.getAttribute("srcset");
            if (ss) {
                const parts = ss.split(",").map(s => s.trim().split(/\s+/)[0]).filter(Boolean);
                if (parts.length) add(parts[parts.length - 1]);
            }
        });
        // background images in photo grid
        root.querySelectorAll("[style*='background']").forEach(node => {
            const st = node.getAttribute("style") || "";
            const m = st.match(/url\(["']?([^"')]+)["']?\)/i);
            if (m) add(m[1]);
        });
        if (!images.length) {
            const ogImage = document.querySelector('meta[property="og:image"]');
            if (ogImage && ogImage.content) add(ogImage.content);
        }

        let datetime = "";
        const timeA = root.querySelector('a[href*="/posts/"] abbr, a[href*="permalink"] abbr, span[id] a abbr');
        if (timeA) datetime = timeA.getAttribute("data-utime")
            ? new Date(parseInt(timeA.getAttribute("data-utime"), 10) * 1000).toISOString()
            : (timeA.getAttribute("title") || textOf(timeA));

        const videos = collectVideos(root);
        const images2 = mergeVideoPosters(images, videos);
        const links = [];
        videos.forEach(v => { if (v.url && !links.includes(v.url)) links.push(v.url); });

        let url = location.href.split("?")[0], statusId = "";
        const fromEl = pickPermalinkFromEl(root);
        if (fromEl) {
            url = fromEl;
        } else {
            const permalink = root.querySelector('a[href*="/posts/"], a[href*="permalink"], a[href*="/videos/"], a[href*="/reel/"], a[href*="pfbid"]');
            if (permalink) {
                const href = permalink.getAttribute("href") || "";
                url = /story_fbid=|pfbid|permalink\.php/i.test(href) ? absUrl(href.split("#")[0]) : absUrl(href.split("?")[0]);
            }
        }
        const idm = url.match(/\/posts\/(\d+)/) || url.match(/story_fbid=(\d+)/) || url.match(/\/videos\/(\d+)/) ||
            url.match(/\/reel\/(\d+)/) || url.match(/pfbid0([A-Za-z0-9]+)/);
        if (idm) statusId = idm[1];
        if (!statusId) {
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content) {
                url = og.content.split("#")[0];
                const mm = url.match(/\/posts\/(\d+)/) || url.match(/story_fbid=(\d+)/) || url.match(/\/videos\/(\d+)/);
                if (mm) statusId = mm[1];
            }
        }

        // 标题：优先 og:title，再正文首行，再作者（保证 MD 文件名有意义）
        let title = "";
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && ogTitle.content) title = ogTitle.content.split("|")[0].trim();
        if (!title && text) title = text.split("\n")[0].slice(0, 80);
        if (!title) title = author || handle || "Facebook Post";
        title = title.slice(0, 80);
        const folderName = (handle || author || "facebook").replace(/\s+/g, "_").slice(0, 40) +
            (statusId ? "-" + statusId : "-" + Date.now());

        return {
            platform: "Facebook", author, handle, userUrl, datetime,
            text, images: images2, links, videos, url, statusId, folderName, title
        };
    }

    function extractPinterest(el) {
        el = el || document.body;
        let title = "";
        const h1 = document.querySelector("h1");
        title = textOf(h1);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (!title && ogTitle) title = ogTitle.content || "";
        let text = "";
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) text = ogDesc.content || "";
        if (!text) {
            const desc = document.querySelector('[data-test-id="pin-description"], [data-test-id="truncated-description"]');
            text = textOf(desc);
        }
        let author = "";
        const auth = document.querySelector('[data-test-id="creator-profile-name"], a[href*="/"][data-test-id]');
        author = textOf(auth);
        const images = [];
        function add(src) {
            if (!src || src.startsWith("data:")) return;
            // prefer originals
            src = src.replace(/\/\d+x\//, "/originals/").replace(/\/\d+x\d+\//, "/originals/");
            if (/pinimg\.com/i.test(src) && !images.includes(src)) images.push(src);
        }
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage && ogImage.content) add(ogImage.content);
        document.querySelectorAll('img[src*="pinimg"]').forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 60) add(img.src || img.currentSrc);
        });
        // closeup image
        const closeup = document.querySelector('[data-test-id="pin-closeup-image"] img, [data-test-id="closeup-image"] img');
        if (closeup) add(closeup.src || closeup.currentSrc);
        const videos = collectVideos(el);
        const images2 = mergeVideoPosters(images, videos);
        let statusId = "";
        let pinUrl = location.href.split("?")[0];
        const m = location.pathname.match(/\/pin\/(\d+)/);
        if (m) statusId = m[1];
        const fromEl = pickPermalinkFromEl(el);
        if (fromEl && /\/pin\//.test(fromEl)) {
            pinUrl = fromEl.split("?")[0];
            const mm = pinUrl.match(/\/pin\/(\d+)/);
            if (mm) statusId = mm[1];
        } else {
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content && /\/pin\//.test(og.content)) {
                pinUrl = og.content.split("?")[0];
                const mm = pinUrl.match(/\/pin\/(\d+)/);
                if (mm) statusId = mm[1];
            }
        }
        return {
            platform: "Pinterest", author, handle: "", userUrl: "", datetime: "",
            text: text || title, images: images2, links: videos.map(v => v.url).filter(Boolean), videos,
            url: pinUrl, statusId,
            folderName: "pinterest" + (statusId ? "-" + statusId : "-" + Date.now()),
            title: title || text.slice(0, 80) || "Pinterest Pin"
        };
    }

    function extractDailymotion(el) {
        el = el || document.body;
        let title = document.title.replace(/\s*[-|].*$/, "").trim();
        const h1 = document.querySelector("h1");
        if (h1) title = textOf(h1) || title;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && ogTitle.content) title = ogTitle.content;
        let text = "";
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) text = ogDesc.content || "";
        let author = "";
        const ch = document.querySelector('a[href*="/channel/"], [class*="Channel"] a');
        if (ch) author = textOf(ch);
        const images = [];
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage && ogImage.content) images.push(ogImage.content);
        document.querySelectorAll("video").forEach(v => {
            if (v.poster && !images.includes(v.poster)) images.push(v.poster);
        });
        // poster images on page
        document.querySelectorAll('img[src*="dmcdn"], img[src*="dailymotion"]').forEach(img => {
            if (img.getBoundingClientRect().width > 100) {
                const s = img.src || img.currentSrc;
                if (s && !images.includes(s)) images.push(s);
            }
        });
        let statusId = "";
        const m = location.pathname.match(/\/video\/([a-zA-Z0-9]+)/) || location.pathname.match(/\/([a-zA-Z0-9]+)\/?$/);
        if (m) statusId = m[1];
        const videos = collectVideos(el);
        const images2 = mergeVideoPosters(images, videos);
        const links = videos.map(v => v.url).filter(Boolean);
        let dmUrl = location.href.split("?")[0];
        const og = document.querySelector('meta[property="og:url"]');
        if (og && og.content) dmUrl = og.content.split("?")[0];
        return {
            platform: "Dailymotion", author, handle: "", userUrl: "", datetime: "",
            text: text || title, images: images2, links, videos, url: dmUrl, statusId,
            folderName: "dailymotion" + (statusId ? "-" + statusId : "-" + Date.now()),
            title: title || "Dailymotion Video"
        };
    }

    function extractTikTok(el) {
        el = el || document.body;
        let author = "", handle = "", userUrl = "", text = "", title = "", statusId = "";
        let images = [];
        const videos = [];

        // 1) 内嵌 JSON：__UNIVERSAL_DATA_FOR_REHYDRATION__ / SIGI_STATE
        function tryParseJson(raw) {
            try { return JSON.parse(raw); } catch { return null; }
        }
        function walkFindItem(obj, depth) {
            if (!obj || depth > 12) return null;
            if (Array.isArray(obj)) {
                for (const x of obj) {
                    const f = walkFindItem(x, depth + 1);
                    if (f) return f;
                }
                return null;
            }
            if (typeof obj === "object") {
                if (obj.id && (obj.desc != null || obj.video || obj.author) && (obj.video || obj.music || obj.createTime)) {
                    return obj;
                }
                if (obj.itemInfo && obj.itemInfo.itemStruct) return obj.itemInfo.itemStruct;
                if (obj.itemStruct) return obj.itemStruct;
                for (const k of Object.keys(obj)) {
                    const f = walkFindItem(obj[k], depth + 1);
                    if (f) return f;
                }
            }
            return null;
        }

        let item = null;
        document.querySelectorAll('script#__UNIVERSAL_DATA_FOR_REHYDRATION__, script#SIGI_STATE, script[id*="SIGI"], script[type="application/json"]').forEach(s => {
            if (item) return;
            const j = tryParseJson(s.textContent || "");
            if (!j) return;
            item = walkFindItem(j, 0);
        });
        // 也扫普通 script 文本里的 itemStruct
        if (!item) {
            for (const s of document.querySelectorAll("script:not([src])")) {
                const t = s.textContent || "";
                if (t.length < 200 || t.length > 5e6) continue;
                if (!/itemStruct|"desc"/.test(t)) continue;
                const m = t.match(/\{"itemStruct":(\{.+?\})\s*,\s*"shareMeta"/);
                if (m) {
                    try {
                        item = JSON.parse(m[1]);
                        break;
                    } catch (_) {}
                }
            }
        }

        if (item) {
            text = (item.desc || "").trim();
            title = text ? text.split("\n")[0].slice(0, 80) : "";
            statusId = String(item.id || item.awemeId || "");
            if (item.author) {
                handle = item.author.uniqueId || item.author.unique_id || "";
                author = item.author.nickname || handle;
                if (handle) userUrl = "https://www.tiktok.com/@" + handle;
            }
            const cover = item.video && (item.video.cover || item.video.originCover || item.video.dynamicCover);
            if (cover && !images.includes(cover)) images.push(cover);
            const play = item.video && (item.video.playAddr || item.video.downloadAddr);
            const playUrl = typeof play === "string" ? play
                : (play && play.url_list && play.url_list[0]) || "";
            if (playUrl && !/^blob:/i.test(playUrl)) {
                videos.push({ url: playUrl, poster: cover || "" });
            }
        }

        // 2) meta / DOM 兜底
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogVideo = document.querySelector('meta[property="og:video"]') ||
            document.querySelector('meta[property="og:video:url"]') ||
            document.querySelector('meta[property="og:video:secure_url"]');
        if (!title && ogTitle) title = (ogTitle.content || "").split("|")[0].trim();
        if (!text && ogDesc) text = ogDesc.content || "";
        if (!text) {
            const cap = document.querySelector('[data-e2e="browse-video-desc"], [data-e2e="video-desc"], [class*="Description"]');
            if (cap) text = textOf(cap);
        }
        if (!handle) {
            const m = location.pathname.match(/\/@([^/]+)/);
            if (m) {
                handle = m[1];
                userUrl = "https://www.tiktok.com/@" + handle;
                author = author || handle;
            }
        }
        if (!statusId) {
            const m = location.pathname.match(/\/video\/(\d+)/);
            if (m) statusId = m[1];
        }
        if (ogImage && ogImage.content && !images.includes(ogImage.content)) images.push(ogImage.content);
        document.querySelectorAll("video").forEach(v => {
            if (v.poster && !images.includes(v.poster)) images.push(v.poster);
            const src = v.currentSrc || v.src;
            if (src && !/^blob:/i.test(src) && !videos.some(x => x.url === src)) {
                videos.push({ url: absUrl(src), poster: v.poster || "" });
            }
        });
        if (ogVideo && ogVideo.content && !videos.some(x => x.url === ogVideo.content)) {
            videos.push({ url: ogVideo.content, poster: (ogImage && ogImage.content) || "" });
        }
        const images2 = mergeVideoPosters(images, videos);
        const pageUrl = (function () {
            const fromEl = pickPermalinkFromEl(el);
            if (fromEl) return fromEl;
            const og = document.querySelector('meta[property="og:url"]');
            if (og && og.content) return og.content.split("?")[0];
            if (/\/@[^/]+\/video\/\d+/.test(location.pathname)) return location.href.split("?")[0];
            return location.href.split("?")[0];
        })();
        if (!title) title = text ? text.split("\n")[0].slice(0, 80) : (author || handle || "TikTok");
        return {
            platform: "TikTok", author, handle: handle ? "@" + handle.replace(/^@/, "") : "", userUrl,
            datetime: "", text: text || title, images: images2,
            links: videos.map(v => v.url).filter(Boolean), videos, url: pageUrl, statusId,
            folderName: (handle || "tiktok").replace("@", "") + (statusId ? "-" + statusId : "-" + Date.now()),
            title: title.slice(0, 80)
        };
    }

    function extractTelegram(el) {
        // 仅公开页 t.me / telegram.me（非 web.telegram.org 客户端）
        el = el || document.body;
        let title = "", text = "", author = "", statusId = "";
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogVideo = document.querySelector('meta[property="og:video"]') ||
            document.querySelector('meta[property="og:video:url"]');
        if (ogTitle) title = (ogTitle.content || "").trim();
        if (ogDesc) text = (ogDesc.content || "").trim();

        const msg = document.querySelector(".tgme_widget_message_text, .tgme_page_description, .js-message_text");
        if (msg && textOf(msg).length > text.length) text = textOf(msg);
        if (!title) title = textOf(document.querySelector(".tgme_page_title, .tgme_channel_info_header_title")) || document.title;

        const authorEl = document.querySelector(".tgme_page_title, .tgme_channel_info_header_title, .tgme_widget_message_owner_name");
        if (authorEl) author = textOf(authorEl).split("\n")[0];

        const images = [];
        function add(src) {
            if (!src || src.startsWith("data:") || images.includes(src)) return;
            images.push(absUrl(src));
        }
        if (ogImage && ogImage.content) add(ogImage.content);
        document.querySelectorAll(".tgme_widget_message_photo_wrap, a.tgme_widget_message_photo_wrap").forEach(a => {
            const st = a.getAttribute("style") || "";
            const m = st.match(/url\(['"]?([^'")]+)['"]?\)/);
            if (m) add(m[1]);
        });
        document.querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 80) add(img.currentSrc || img.src);
        });

        const videos = collectVideos(el);
        if (ogVideo && ogVideo.content && !videos.some(v => v.url === ogVideo.content)) {
            videos.push({ url: ogVideo.content, poster: (ogImage && ogImage.content) || "" });
        }
        // 公开页上的 video poster
        document.querySelectorAll(".tgme_widget_message_video_thumb, video").forEach(n => {
            const st = n.getAttribute("style") || "";
            const m = st.match(/url\(['"]?([^'")]+)['"]?\)/);
            if (m) add(m[1]);
            if (n.poster) add(n.poster);
        });

        const images2 = mergeVideoPosters(images, videos);
        let pageUrl = location.href.split("?")[0];
        const m = location.pathname.match(/^\/([^/]+)\/(\d+)/);
        if (m) {
            statusId = m[2];
            pageUrl = "https://t.me/" + m[1] + "/" + m[2];
            if (!author) author = m[1];
        }
        if (!title) title = text ? text.split("\n")[0].slice(0, 80) : (author || "Telegram");
        return {
            platform: "Telegram", author, handle: author ? "@" + String(author).replace(/\s+/g, "") : "",
            userUrl: author ? "https://t.me/" + String(author).replace(/^@/, "").split(/\s/)[0] : "",
            datetime: "", text: text || title, images: images2,
            links: videos.map(v => v.url).filter(Boolean), videos, url: pageUrl, statusId,
            folderName: (author || "telegram").replace(/\s+/g, "_").slice(0, 40) +
                (statusId ? "-" + statusId : "-" + Date.now()),
            title: String(title).slice(0, 80)
        };
    }


    // ---------- 微博 / 小红书 / CSDN / 知乎 ----------
    function extractWeibo(el) {
        el = el || document.body;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        let author = "", text = "", title = "", statusId = "";
        const nick = document.querySelector('[class*="head_name"], .username, a[class*="name"], .woo-font');
        if (nick) author = textOf(nick).split("\n")[0];
        const detail = document.querySelector('[class*="detail_wbtext"], [class*="wbpro-feed-content"], [class*="Feed_body"], [node-type="feed_list_content"]');
        if (detail) text = textOf(detail);
        if (!text && ogDesc) text = ogDesc.content || "";
        if (ogTitle) title = (ogTitle.content || "").trim();
        let m = location.href.match(/weibo\.com\/\d+\/([A-Za-z0-9]+)/) ||
            location.pathname.match(/\/detail\/(\d+)/) ||
            location.pathname.match(/\/status\/(\d+)/) ||
            location.pathname.match(/\/(\d{10,})/);
        if (m) statusId = m[1];
        const images = [];
        function add(src) {
            if (!src || /^data:/.test(src) || images.includes(src)) return;
            if (/avatar|face|icon|emoji|sprite|logo|sinaimg\.cn\/default/i.test(src)) return;
            src = String(src).replace(/\/orj360\//, "/large/").replace(/\/thumb\d+\//, "/large/")
                .replace(/\/bmiddle\//, "/large/").replace(/\/mw\d+\//, "/large/");
            if (!images.includes(src)) images.push(absUrl(src));
        }
        if (ogImage && ogImage.content) add(ogImage.content);
        (el.querySelectorAll ? el : document).querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 0 && r.width < 60) return;
            add(img.currentSrc || img.src || img.getAttribute("data-src"));
        });
        const videos = collectVideos(el);
        document.querySelectorAll('meta[property="og:video"], meta[property="og:video:url"]').forEach(n => {
            const u = (n.content || "").trim();
            if (u && !/^blob:/i.test(u) && !videos.some(v => v.url === u)) {
                videos.push({ url: absUrl(u), poster: (ogImage && ogImage.content) || "" });
            }
        });
        const images2 = mergeVideoPosters(images, videos);
        if (!title) title = text ? text.split("\n")[0].slice(0, 80) : (author || "微博");
        if (!author && title) author = title.split(/[-_|]/)[0].trim();
        return {
            platform: "Weibo", author, handle: "", userUrl: "",
            datetime: "", text: text || title, images: images2, links: [], videos,
            url: location.href.split("?")[0], statusId,
            folderName: "weibo" + (statusId ? "-" + statusId : "-" + Date.now()),
            title: String(title).slice(0, 80)
        };
    }

    function extractXiaohongshu(el) {
        el = el || document.body;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        let title = (ogTitle && ogTitle.content) || document.title || "";
        title = String(title).replace(/\s*-\s*小红书.*/, "").trim();
        let text = (ogDesc && ogDesc.content) || "";
        let author = "";
        const authorEl = document.querySelector('.author-wrapper .username, .user-name, [class*="author"] .name, a.name, .username');
        if (authorEl) author = textOf(authorEl).split("\n")[0];
        const desc = document.querySelector('#detail-desc, .desc, [class*="NoteContent"], [class*="note-text"], .title');
        if (desc && textOf(desc).length > text.length) text = textOf(desc);
        let statusId = "";
        const m = location.pathname.match(/\/explore\/([a-zA-Z0-9]+)/) ||
            location.pathname.match(/\/discovery\/item\/([a-zA-Z0-9]+)/) ||
            location.pathname.match(/\/([a-f0-9]{16,24})/);
        if (m) statusId = m[1];
        const images = [];
        function add(src) {
            if (!src || /^data:/.test(src) || images.includes(src)) return;
            if (/avatar|icon|logo|emoji|sprite/i.test(src)) return;
            images.push(absUrl(src));
        }
        if (ogImage && ogImage.content) add(ogImage.content);
        document.querySelectorAll('meta[property="og:image"]').forEach(meta => add(meta.content));
        (el.querySelectorAll ? el : document).querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 0 && r.width < 80) return;
            const s = img.currentSrc || img.src || img.getAttribute("data-src") || "";
            if (/xhscdn|sns-webpic|xiaohongshu|ci\.xiaohongshu/i.test(s) || r.width > 120) add(s);
        });
        const videos = collectVideos(el);
        document.querySelectorAll('meta[property="og:video"], meta[property="og:video:url"]').forEach(meta => {
            const u = (meta.content || "").trim();
            if (u && !/^blob:/i.test(u) && !videos.some(v => v.url === u)) {
                videos.push({ url: absUrl(u), poster: (ogImage && ogImage.content) || "" });
            }
        });
        const images2 = mergeVideoPosters(images, videos);
        if (!title) title = text ? text.split("\n")[0].slice(0, 80) : "小红书笔记";
        return {
            platform: "Xiaohongshu", author, handle: "", userUrl: "",
            datetime: "", text: text || title, images: images2, links: [], videos,
            url: location.href.split("?")[0], statusId,
            folderName: "xhs" + (statusId ? "-" + statusId.slice(0, 16) : "-" + Date.now()),
            title: String(title).slice(0, 80)
        };
    }

    function extractCsdn(el) {
        el = el || document.body;
        const titleEl = document.querySelector("#articleContentId, h1.title-article, h1");
        let title = textOf(titleEl) || document.title || "CSDN";
        title = title.replace(/\s*-\s*CSDN.*/, "").replace(/\s*-\s*博客.*/, "").trim();
        let author = "";
        const au = document.querySelector(".follow-nickName, a.follow-nickName, #uid, .user-info .name, .article-info-box .name");
        if (au) author = textOf(au).split("\n")[0];
        const timeEl = document.querySelector(".time, .blog-postTime, span.time");
        const datetime = timeEl ? textOf(timeEl) : "";
        let text = "";
        const content = document.querySelector("#content_views, #article_content, .blog-content-box, article .markdown_views");
        if (content) text = textOf(content).slice(0, 12000);
        if (!text) {
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) text = ogDesc.content || "";
        }
        const images = [];
        function add(src) {
            if (!src || /^data:/.test(src) || images.includes(src)) return;
            if (/avatar|icon|logo|emoji|badge|csdnimg\.cn\/release/i.test(src)) return;
            images.push(absUrl(src));
        }
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage && ogImage.content) add(ogImage.content);
        const scope = content || el;
        (scope.querySelectorAll ? scope : document).querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 0 && r.width < 50) return;
            add(img.currentSrc || img.src || img.getAttribute("data-src"));
        });
        const videos = collectVideos(scope);
        let statusId = "";
        const m = location.pathname.match(/\/article\/details\/(\d+)/) || location.pathname.match(/\/(\d{6,})/);
        if (m) statusId = m[1];
        const images2 = mergeVideoPosters(images, videos);
        return {
            platform: "CSDN", author, handle: "", userUrl: author ? "" : "",
            datetime, text: text || title, images: images2, links: [], videos,
            url: location.href.split("?")[0], statusId,
            folderName: "csdn" + (statusId ? "-" + statusId : "-" + Date.now()),
            title: String(title).slice(0, 80)
        };
    }

    function extractZhihu(el) {
        el = el || document.body;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        let title = (ogTitle && ogTitle.content) || document.title || "";
        title = String(title).replace(/\s*-\s*知乎.*/, "").trim();
        let author = "";
        const au = document.querySelector('.AuthorInfo-name, .UserLink-link, meta[itemprop="name"]');
        if (au) author = (au.content || textOf(au)).split("\n")[0];
        let text = "";
        const rich = document.querySelector('.Post-RichText, .RichContent-inner, .RichText, .QuestionRichText, article .RichText');
        if (rich) text = textOf(rich).slice(0, 12000);
        if (!text && ogDesc) text = ogDesc.content || "";
        let statusId = "";
        let m = location.pathname.match(/\/p\/(\d+)/) ||
            location.pathname.match(/\/question\/(\d+)/) ||
            location.pathname.match(/\/answer\/(\d+)/);
        if (m) statusId = m[1];
        const images = [];
        function add(src) {
            if (!src || /^data:/.test(src) || images.includes(src)) return;
            if (/avatar|icon|logo|emoji|sprite|zhimg\.com\/default/i.test(src)) return;
            // prefer origin
            src = String(src).replace(/_r\.jpg/, ".jpg").replace(/\/\d+\/v2-/, "/v2-");
            if (!images.includes(src)) images.push(absUrl(src));
        }
        if (ogImage && ogImage.content) add(ogImage.content);
        const scope = rich || el;
        (scope.querySelectorAll ? scope : document).querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 0 && r.width < 60) return;
            add(img.currentSrc || img.src || img.getAttribute("data-actualsrc") || img.getAttribute("data-src"));
        });
        const videos = collectVideos(scope);
        document.querySelectorAll('meta[property="og:video"]').forEach(n => {
            const u = (n.content || "").trim();
            if (u && !videos.some(v => v.url === u)) videos.push({ url: absUrl(u), poster: "" });
        });
        const images2 = mergeVideoPosters(images, videos);
        const timeEl = document.querySelector('time, .ContentItem-time, meta[itemprop="dateModified"]');
        const datetime = timeEl ? (timeEl.getAttribute("datetime") || timeEl.content || textOf(timeEl)) : "";
        return {
            platform: "Zhihu", author, handle: "", userUrl: "",
            datetime, text: text || title, images: images2, links: [], videos,
            url: location.href.split("?")[0], statusId,
            folderName: "zhihu" + (statusId ? "-" + statusId : "-" + Date.now()),
            title: String(title).slice(0, 80)
        };
    }

    function extractGeneric(el) {
        const scope = (el && el.querySelectorAll) ? el : document.body;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const title = (ogTitle && ogTitle.content) || document.title || "post";
        let text = "";
        if (ogDesc && ogDesc.content) text = ogDesc.content;
        if (!text || text.length < 20) {
            const main = document.querySelector("article") || document.querySelector("main") || scope;
            text = textOf(main).slice(0, 5000);
        }
        const images = [];
        const seen = new Set();
        function add(src) {
            if (!src || src.startsWith("data:") || seen.has(src)) return;
            if (/avatar|sprite|emoji|icon|logo|pixel|1x1/i.test(src)) return;
            seen.add(src);
            images.push(absUrl(src));
        }
        if (ogImage && ogImage.content) add(ogImage.content);
        document.querySelectorAll('meta[property="og:image"]').forEach(m => add(m.content));
        scope.querySelectorAll("img").forEach(img => {
            const r = img.getBoundingClientRect();
            if (r.width > 0 && r.width < 100) return;
            add(img.currentSrc || img.src);
        });
        const videos = collectVideos(scope);
        const images2 = mergeVideoPosters(images, videos);
        let pageUrl = location.href.split("?")[0];
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl && ogUrl.content) pageUrl = ogUrl.content.split("?")[0];
        else {
            const can = document.querySelector('link[rel="canonical"]');
            if (can && can.href) pageUrl = can.href.split("?")[0];
        }
        return {
            platform: "Web", author: "", handle: "", userUrl: "", datetime: "",
            text, images: images2, links: videos.map(v => v.url).filter(Boolean), videos,
            url: pageUrl, statusId: "",
            folderName: "web-" + Date.now(), title: (title || "post").slice(0, 80)
        };
    }

    function buildMarkdown(data, localImages) {
        const lines = [];
        const authorLine = data.author
            ? (data.handle ? `${data.author} (${data.handle})` : data.author)
            : (data.handle || "");
        lines.push("---");
        lines.push(`title: "${(data.title || "").replace(/"/g, '\\"')}"`);
        if (authorLine) lines.push(`author: "${authorLine.replace(/"/g, '\\"')}"`);
        lines.push(`source: "${data.url}"`);
        if (data.datetime) {
            try {
                const d = new Date(data.datetime);
                if (!isNaN(d.getTime())) lines.push(`published: ${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`);
                else lines.push(`published: ${data.datetime}`);
            } catch { lines.push(`published: ${data.datetime}`); }
        }
        lines.push(`saved: ${todayStr()}`);
        lines.push(`type: post`);
        lines.push(`tags: [${(data.platform || "web").toLowerCase()}, post]`);
        if (data.subreddit) lines.push(`subreddit: ${data.subreddit}`);
        lines.push("---");
        lines.push("");
        lines.push(`# ${data.title || "Post"}`);
        lines.push("");
        if (authorLine) {
            lines.push(data.userUrl
                ? `**作者：** ${data.author || ""} ([${data.handle}](${data.userUrl}))`
                : `**作者：** ${authorLine}`);
        }
        if (data.datetime) lines.push(`**日期：** ${formatCNDate(data.datetime) || data.datetime}`);
        if (data.subreddit) lines.push(`**版块：** ${data.subreddit}`);
        lines.push(`**来源：** ${data.url}`);
        lines.push("");
        lines.push("---");
        lines.push("");
        if (data.text && data.text !== data.title) {
            lines.push(data.text);
            lines.push("");
        }
        if (data.images && data.images.length) {
            lines.push("## 图片");
            lines.push("");
            data.images.forEach((src, i) => {
                const remote = src || "";
                // 预测/实际本地文件名：优先 localImages，否则按作品名生成（方便与下载文件对齐）
                let localBase = "";
                if (Array.isArray(localImages) && localImages[i]) {
                    localBase = String(localImages[i]).replace(/^\.\//, "").split("/").pop();
                } else if (localImages === true || localImages == null) {
                    // 与下载逻辑一致的命名：单图=作品名，多图=作品名_01
                    const work = sanitizeFilename(data.title || data.folderName || "post", 80);
                    const ext = (remote.match(/\.(png|jpe?g|webp|gif)(?:\?|$)/i) || [, "jpg"])[1]
                        .toLowerCase().replace("jpeg", "jpg");
                    localBase = data.images.length === 1
                        ? work + "." + ext
                        : work + "_" + pad2(i + 1) + "." + ext;
                }
                // Obsidian 嵌入 + 标准 MD 本地 + 外链备份（三者并存）
                if (localBase) {
                    lines.push(`![[${localBase}]]`);
                    lines.push(`![图片 ${i + 1}](${localBase})`);
                }
                if (remote) {
                    lines.push(`![图片 ${i + 1} 外链](${remote})`);
                }
                lines.push("");
            });
        }
        if (data.videos && data.videos.length) {
            lines.push("## 视频");
            lines.push("");
            data.videos.forEach((v, i) => {
                const n = i + 1;
                const work = sanitizeFilename(data.title || data.folderName || "post", 80);
                const vlabel = data.videos.length === 1 ? work : work + "_视频" + pad2(n);
                // 本地文件名约定 + 外链
                if (v.poster) {
                    const pExt = (v.poster.match(/\.(png|jpe?g|webp|gif)(?:\?|$)/i) || [, "jpg"])[1]
                        .toLowerCase().replace("jpeg", "jpg");
                    const pLocal = vlabel + "_预览." + pExt;
                    lines.push(`![[${pLocal}]]`);
                    lines.push(`![视频预览 ${n}](${pLocal})`);
                    lines.push(`![视频预览 ${n} 外链](${v.poster})`);
                }
                if (v.url) {
                    lines.push(`[视频 ${n} 本地约定](${vlabel}.mp4)`);
                    lines.push(`[视频 ${n} 外链](${v.url})`);
                }
                lines.push("");
            });
        }
        if (data.links && data.links.length) {
            lines.push("## 链接");
            lines.push("");
            data.links.forEach(l => lines.push(`- ${l}`));
            lines.push("");
        }
        return lines.join("\n");
    }

    function fetchBlob(url, timeoutMs = 12000) {
        return new Promise((resolve, reject) => {
            let done = false;
            const timer = setTimeout(() => { if (!done) { done = true; reject(new Error("超时")); } }, timeoutMs);
            const finish = (fn) => (arg) => { if (done) return; done = true; clearTimeout(timer); fn(arg); };
            if (typeof GM_xmlhttpRequest === "function") {
                GM_xmlhttpRequest({
                    method: "GET", url, responseType: "blob", timeout: timeoutMs,
                    onload: finish((res) => {
                        if (res.status >= 200 && res.status < 300 && res.response) resolve(res.response);
                        else reject(new Error("HTTP " + res.status));
                    }),
                    onerror: finish(() => reject(new Error("网络错误"))),
                    ontimeout: finish(() => reject(new Error("超时")))
                });
            } else {
                fetch(url, { credentials: "omit" })
                    .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.blob(); })
                    .then(finish(resolve)).catch(finish(reject));
            }
        });
    }

    function extFromBlob(blob, url) {
        const t = (blob && blob.type) || "";
        if (t.includes("mp4") || t.includes("mpeg4")) return "mp4";
        if (t.includes("webm")) return "webm";
        if (t.includes("quicktime") || t.includes("mov")) return "mov";
        if (t.includes("png")) return "png";
        if (t.includes("webp")) return "webp";
        if (t.includes("gif")) return "gif";
        if (t.includes("jpeg") || t.includes("jpg")) return "jpg";
        const m = (url || "").match(/\.(mp4|webm|mov|m4v|png|jpe?g|webp|gif)(?:\?|$)/i);
        if (m) return m[1].toLowerCase().replace("jpeg", "jpg").replace("m4v", "mp4");
        return "jpg";
    }

    async function downloadZip(data) {
        // 顺序：先写好「本地+外链」MD → 浏览器本地下载全部媒体
        // 1DM 仅作为「额外推送」且只推媒体直链，不再替代浏览器下载
        const workName = sanitizeFilename(data.title || data.folderName || "post", 80);
        const base = sanitizeFilename(data.folderName || data.title || "post");
        // 图片 / 视频 URL 去重，避免同一文件触发多次下载确认
        const imgs = dedupeUrls(data.images || []);
        const vids = dedupeVideos(data.videos || []);
        const localNames = new Array(imgs.length).fill(null);
        const also1DM = isAndroid(); // 额外尝试推直链到 1DM，失败不影响浏览器下载

        let ok = 0, fail = 0, vok = 0, vfail = 0;

        // 预先生成本地文件名（与实际下载一致），写入 MD
        for (let i = 0; i < imgs.length; i++) {
            const extGuess = ((imgs[i].match(/\.(png|jpe?g|webp|gif)(?:\?|$)/i) || [])[1] || "jpg")
                .toLowerCase().replace("jpeg", "jpg");
            localNames[i] = imgs.length === 1
                ? workName + "." + extGuess
                : workName + "_" + pad2(i + 1) + "." + extGuess;
        }

        // ① MD：开头只写剪贴板（或轻量落盘一次），真正带 .txt 的落盘统一放到媒体结束后，避免多份 txt
        const hasVideo = (vids || []).some(v => v && v.url && !/^blob:/i.test(v.url));
        const deferMdFile = isAndroid() || platform === "facebook" || platform === "instagram";
        showToast(deferMdFile ? "① 已复制 Markdown，媒体后再保存文件…" : "① 下载 Markdown…");
        let mdBody = "";
        try {
            mdBody = "\ufeff" + buildMarkdown(data, localNames);
            if (deferMdFile) {
                // 仅剪贴板，避免和视频抢下载槽、避免重复 txt
                saveMarkdownFile(mdBody, workName, { clipboardOnly: true });
                await sleep(300);
            } else {
                // 桌面：只下 .md，不附带 .txt
                saveMarkdownFile(mdBody, workName, { withTxt: false });
                await sleep(700);
            }
        } catch (e) {
            console.warn("[UPMD] md first", e);
            showToast("MD 触发失败，将继续下媒体（可点「复制 Markdown」）", 3000);
        }

        // ② 图片：始终浏览器本地下载；直链额外推 1DM
        for (let i = 0; i < imgs.length; i++) {
            showToast(`② 下载图片 ${i + 1}/${imgs.length}…`);
            try {
                const blob = await fetchBlob(imgs[i], 20000);
                const ext = extFromBlob(blob, imgs[i]);
                const name = imgs.length === 1
                    ? workName + "." + ext
                    : workName + "_" + pad2(i + 1) + "." + ext;
                localNames[i] = name;
                // triggerDownload 在 also1DM 时内部已推 1DM，勿再重复调用
                triggerDownload(blob, name, { also1DM: also1DM && isDirectMediaUrl(imgs[i]) });
                ok++;
                await sleep(isAndroid() ? 900 : 600);
            } catch (e) {
                console.warn("[UPMD] img", e);
                // fetch 失败时：若是直链，至少推 1DM / 直接 GM_download URL
                if (isDirectMediaUrl(imgs[i])) {
                    try {
                        triggerDownload(imgs[i], localNames[i] || (workName + "_" + pad2(i + 1) + ".jpg"), { also1DM: also1DM });
                        ok++;
                    } catch (_) { fail++; }
                } else {
                    fail++;
                }
            }
        }

        // ③ 视频：直链优先直接交给浏览器/GM_download（不必先整文件 fetch，X 视频会快很多）
        for (let i = 0; i < vids.length; i++) {
            const v = vids[i];
            if (!v || !v.url) continue;
            const vlabel = vids.length === 1 ? workName : workName + "_视频" + pad2(i + 1);
            showToast(`③ 下载视频 ${i + 1}/${vids.length}…`);
            if (/^blob:/i.test(v.url)) {
                vfail++;
                showToast("视频为 blob，无法直接保存", 2000);
                continue;
            }
            try {
                if (isDirectMediaUrl(v.url)) {
                    // X / twimg / 其它 CDN 直链：直接下，不等待整文件进内存
                    triggerDownload(v.url, vlabel + ".mp4", { also1DM: also1DM });
                    vok++;
                    await sleep(isAndroid() ? 600 : 400);
                } else {
                    try {
                        const blob = await fetchBlob(v.url, 20000);
                        const ext = extFromBlob(blob, v.url) || "mp4";
                        triggerDownload(blob, vlabel + "." + ext);
                        vok++;
                    } catch (_) {
                        vfail++;
                    }
                }
            } catch (e) {
                console.warn("[UPMD] video", e);
                vfail++;
            }
            // 封面已在 images 列表里下过则跳过，避免重复预览图
            if (v.poster && isDirectMediaUrl(v.poster) && !(imgs || []).includes(v.poster)) {
                // 再按 path 去重一次（pbs 可能 name= 不同）
                const posterKey = String(v.poster).split("?")[0].replace(/:large|:orig|:small|:thumb/gi, "");
                const already = (imgs || []).some(u => String(u).split("?")[0].replace(/:large|:orig|:small|:thumb/gi, "") === posterKey);
                if (!already) {
                    try {
                        const pblob = await fetchBlob(v.poster, 12000);
                        const pext = extFromBlob(pblob, v.poster);
                        triggerDownload(pblob, vlabel + "_预览." + pext, { also1DM: also1DM });
                        await sleep(400);
                    } catch (_) {}
                }
            }
        }

        // Optional ZIP desktop
        if (typeof JSZip !== "undefined" && (imgs.length > 0 || vids.length > 0) && (ok + vok) > 0 && (imgs.length + vids.length) <= 12) {
            try {
                if (!isAndroid() && !/iPhone|iPad|Mobile/i.test(navigator.userAgent)) {
                    showToast("④ 尝试生成 ZIP（可选）…");
                    const zip = new JSZip();
                    const root = zip.folder(base);
                    const imgFolder = root.folder("images");
                    const vidFolder = vids.length ? root.folder("videos") : null;
                    const zipLocals = [];
                    for (let i = 0; i < imgs.length; i++) {
                        try {
                            const blob = await fetchBlob(imgs[i], 10000);
                            const ext = extFromBlob(blob, imgs[i]);
                            const fn = pad2(i + 1) + "." + ext;
                            imgFolder.file(fn, blob, { compression: "STORE" });
                            zipLocals[i] = "images/" + fn;
                        } catch (_) {
                            zipLocals[i] = localNames[i] || null;
                        }
                    }
                    for (let i = 0; i < vids.length; i++) {
                        const v = vids[i];
                        if (!v || !v.url || !vidFolder || !isDirectMediaUrl(v.url)) continue;
                        try {
                            const blob = await fetchBlob(v.url, 45000);
                            const ext = extFromBlob(blob, v.url) || "mp4";
                            const fn = (vids.length === 1 ? workName : workName + "_" + pad2(i + 1)) + "." + ext;
                            vidFolder.file(fn, blob, { compression: "STORE" });
                        } catch (_) {}
                    }
                    root.file(workName + ".md", "\ufeff" + buildMarkdown(data, zipLocals), { compression: "STORE" });
                    const content = await Promise.race([
                        zip.generateAsync({ type: "blob", compression: "STORE" }),
                        new Promise((_, rej) => setTimeout(() => rej(new Error("zip timeout")), 45000))
                    ]);
                    triggerDownload(content, workName + ".zip");
                }
            } catch (e) {
                console.warn("[UPMD] optional zip skipped", e);
            }
        }

        // 媒体全部结束后统一落盘 MD（仅一次；Android/FB 才附带一份 .txt）
        try {
            showToast("保存 Markdown 文件…");
            await sleep(deferMdFile ? 900 : 200);
            const md2 = "\ufeff" + buildMarkdown(data, localNames);
            saveMarkdownFile(md2, workName, {
                withTxt: isAndroid() || platform === "facebook"
            });
            await sleep(isAndroid() ? 600 : 300);
        } catch (e) {
            console.warn("[UPMD] md final", e);
            showToast("MD 文件可能未写入，请用「复制 Markdown」", 4000);
        }

        const parts = [];
        if (imgs.length) parts.push(`图片 ${ok}` + (fail ? `/${imgs.length}` : ""));
        if (vids.length) parts.push(`视频 ${vok}` + (vfail ? `/${vids.length}` : ""));
        if (!imgs.length && !vids.length) {
            showToast("✅ 已下载 MD（无媒体）", 3500);
        } else {
            const mdHint = (isAndroid() || platform === "facebook") ? "MD（.md + 一份.txt）" : "MD（.md）";
            showToast(
                `✅ 完成：${parts.join(" · ") || "媒体"} + ${mdHint}；内容已在剪贴板` +
                (also1DM ? "；直链已尝试推 1DM" : ""),
                5500
            );
        }
        console.log("[UPMD] sequential done", { ok, fail, vok, vfail, base, workName, also1DM, localNames, platform, hasVideo, deferMdFile });
    }

    function sleep(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    async function downloadImagesOnly(data) {
        const workName = sanitizeFilename(data.title || data.folderName || "post", 80);
        const imgs = dedupeUrls(data.images || []);
        const vids = dedupeVideos(data.videos || []);
        if (!imgs.length && !vids.length) { showToast("没有检测到图片或视频"); return; }
        const also1DM = isAndroid();
        let ok = 0, vok = 0;
        for (let i = 0; i < imgs.length; i++) {
            showToast(`下载图片 ${i + 1}/${imgs.length}…`);
            const nameHint = imgs.length === 1 ? workName : workName + "_" + pad2(i + 1);
            try {
                const blob = await fetchBlob(imgs[i], 20000);
                const ext = extFromBlob(blob, imgs[i]);
                const name = nameHint + "." + ext;
                // also1DM 时 triggerDownload 内部已推 1DM，勿重复
                triggerDownload(blob, name, { also1DM: also1DM && isDirectMediaUrl(imgs[i]) });
                ok++;
                await sleep(isAndroid() ? 800 : 500);
            } catch (e) {
                console.warn("[UPMD] img only", e);
                if (isDirectMediaUrl(imgs[i])) {
                    try {
                        triggerDownload(imgs[i], nameHint + ".jpg", { also1DM: also1DM });
                        ok++;
                    } catch (_) {}
                }
            }
        }
        for (let i = 0; i < vids.length; i++) {
            const v = vids[i];
            if (!v || !v.url || /^blob:/i.test(v.url)) continue;
            const vlabel = vids.length === 1 ? workName : workName + "_视频" + pad2(i + 1);
            showToast(`下载视频 ${i + 1}/${vids.length}…`);
            try {
                if (isDirectMediaUrl(v.url)) {
                    // 直链直接下，避免长时间 fetch
                    triggerDownload(v.url, vlabel + ".mp4", { also1DM: also1DM });
                    vok++;
                    await sleep(isAndroid() ? 600 : 400);
                } else {
                    try {
                        const blob = await fetchBlob(v.url, 20000);
                        const ext = extFromBlob(blob, v.url) || "mp4";
                        triggerDownload(blob, vlabel + "." + ext);
                        vok++;
                    } catch (_) {}
                }
            } catch (e) { console.warn("[UPMD] video only", e); }
            // 封面已在 images 中则跳过，避免重复预览图
            if (v.poster && isDirectMediaUrl(v.poster)) {
                const posterKey = mediaDedupeKey(v.poster);
                const already = (imgs || []).some(u => mediaDedupeKey(u) === posterKey);
                if (!already) {
                    try {
                        const pblob = await fetchBlob(v.poster, 10000);
                        const pext = extFromBlob(pblob, v.poster);
                        triggerDownload(pblob, vlabel + "_预览." + pext, { also1DM: also1DM });
                        await sleep(400);
                    } catch (_) {}
                }
            }
        }
        const msg = [];
        if (imgs.length) msg.push(`图片 ${ok}/${imgs.length}`);
        if (vids.length) msg.push(`视频 ${vok}/${vids.length}`);
        showToast(`✅ ${msg.join(" · ")} 已本地下载` + (also1DM ? "（直链已尝试推 1DM）" : ""), 3500);
    }

    function openPrintView(data) {
        const w = window.open("", "_blank");
        if (!w) { showToast("请允许弹出窗口"); return; }
        const imgs = (data.images || []).map(src =>
            `<p style="margin:12px 0"><img src="${esc(src)}" style="max-width:100%;border-radius:8px" /></p>`
        ).join("");
        const links = (data.links || []).map(l => `<li><a href="${esc(l)}">${esc(l)}</a></li>`).join("");
        w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(data.title || "Post")}</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;max-width:720px;margin:40px auto;padding:0 20px;line-height:1.65;color:#111}
h1{font-size:1.35rem;margin-bottom:6px}.meta{color:#555;font-size:.9rem;margin-bottom:22px}
.body{white-space:pre-wrap;margin-bottom:22px}a{color:#2563eb}@media print{body{margin:0}}
</style></head><body>
<h1>${esc(data.title || "")}</h1>
<div class="meta">${esc(data.author || "")} ${esc(data.handle || "")}<br>
${esc(formatCNDate(data.datetime) || data.datetime || "")} · ${esc(data.platform || "")}<br>
<a href="${esc(data.url)}">${esc(data.url)}</a></div>
<div class="body">${esc(data.text || "")}</div>
${imgs}
${links ? `<h3>链接</h3><ul>${links}</ul>` : ""}
<script>setTimeout(function(){window.print()},400)<\/script>
</body></html>`);
        w.document.close();
    }

    function esc(s) {
        return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
})();
