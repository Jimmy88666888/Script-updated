// ==UserScript==
// @name         EdgeDL
// @namespace    https://github.com/Chumor/EdgeDL
// @version      2.3.3-local-float-toggle
// @description  让 Android Edge 支持调用外部下载器接管下载任务（标题/图片/VLC/YTDLnis + 敏感页排除 + 复制链接）+ 图片悬浮下载。本地修复版：可开关悬浮按钮，避免包裹搜索结果/favicon等小图标
// @icon         https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/edge.svg
// @author       Chumor (local fix)
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_getResourceURL
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @license      Apache-2.0
// @run-at       document-start
// @website      https://scriptcat.org/zh-CN/script-show-page/5391
// @supportURL   https://github.com/Chumor/EdgeDL/issues
// @resource     icon_idm       https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/idm.svg
// @resource     icon_idm_plus  https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/idm-plus.svg
// @resource     icon_adm       https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/adm.svg
// @resource     icon_abdm      https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/abdm.svg
// @resource     icon_fdm       https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/fdm.svg
// @resource     icon_edge      https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons/edge.svg
// @early-start
// @updateURL    https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/edge-dl.user.js
// @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/edge-dl.user.js
// ==/UserScript==


(function () {
    'use strict';

    const DOWNLOADERS={IDM: 'idm.internet.download.manager',IDM_PLUS: 'idm.internet.download.manager.plus',ADM: 'com.dv.adm',ABDM: 'com.abdownloadmanager',FDM: 'org.freedownloadmanager.fdm',YTDLNIS: 'com.deniscerri.ytdl',};
    // 默认下载器
    const DEFAULT_DOWNLOADER_KEY = 'edgedl-default-downloader';
    // 悬浮下载按钮开关（默认开启）
    const FLOAT_BUTTONS_KEY = 'edgedl-float-buttons-enabled';

    // ---------- 标题 / 文件名提取（解决 FB / IG / TikTok / X 等嗅探标题乱码） ----------
    function getMetaContent(selectors) {
        for (const sel of selectors) {
            const el = document.querySelector(sel);
            if (el) {
                const v = (el.getAttribute('content') || el.textContent || '').trim();
                if (v) return v;
            }
        }
        return '';
    }

    function cleanTitle(raw) {
        if (!raw) return '';
        let t = raw
            .replace(/\s+/g, ' ')
            .replace(/[\u0000-\u001F\u007F]/g, '')
            .trim();
        // 去掉常见平台后缀
        t = t
            .replace(/\s*[|/·•]\s*(X|Twitter|Facebook|Instagram|TikTok|抖音|快手|哔哩哔哩|Bilibili|YouTube).*$/i, '')
            .replace(/\s*on\s+(X|Twitter|Facebook|Instagram|TikTok).*$/i, '')
            .replace(/\s*[-–—]\s*(X|Twitter|Facebook|Instagram|TikTok).*$/i, '')
            .trim();
        return t;
    }

    function extractMediaTitle() {
        const host = (location.hostname || '').toLowerCase();

        // X / Twitter
        if (host.includes('x.com') || host.includes('twitter.com')) {
            // 推文正文优先
            const tweetText = document.querySelector('[data-testid="tweetText"]')?.textContent?.trim()
                || document.querySelector('article [lang]')?.textContent?.trim()
                || '';
            if (tweetText && tweetText.length > 3) return cleanTitle(tweetText.slice(0, 120));
            const og = getMetaContent(['meta[property="og:title"]', 'meta[name="twitter:title"]']);
            if (og) return cleanTitle(og);
        }

        // Instagram
        if (host.includes('instagram.com')) {
            const og = getMetaContent(['meta[property="og:title"]', 'meta[property="og:description"]']);
            if (og) return cleanTitle(og);
            const caption = document.querySelector('h1')?.textContent?.trim()
                || document.querySelector('[class*="Caption"]')?.textContent?.trim();
            if (caption) return cleanTitle(caption.slice(0, 120));
        }

        // Facebook
        if (host.includes('facebook.com') || host.includes('fb.watch') || host.includes('fb.com')) {
            const og = getMetaContent(['meta[property="og:title"]', 'meta[property="og:description"]']);
            if (og) return cleanTitle(og);
            const post = document.querySelector('[data-ad-preview="message"]')?.textContent?.trim()
                || document.querySelector('[data-testid="post_message"]')?.textContent?.trim();
            if (post) return cleanTitle(post.slice(0, 120));
        }

        // TikTok / 抖音
        if (host.includes('tiktok.com') || host.includes('douyin.com')) {
            const og = getMetaContent(['meta[property="og:title"]', 'meta[property="og:description"]', 'meta[name="description"]']);
            if (og) return cleanTitle(og);
            const desc = document.querySelector('[data-e2e="browse-video-desc"]')?.textContent?.trim()
                || document.querySelector('h1')?.textContent?.trim();
            if (desc) return cleanTitle(desc.slice(0, 120));
        }

        // 通用：og:title > twitter:title > document.title
        const general = getMetaContent([
            'meta[property="og:title"]',
            'meta[name="twitter:title"]',
            'meta[property="og:description"]',
            'meta[name="description"]'
        ]);
        if (general) return cleanTitle(general);

        const docTitle = (document.title || '').trim();
        if (docTitle && !/^facebook$|^instagram$|^tiktok$|^x$|^twitter$/i.test(docTitle)) {
            return cleanTitle(docTitle);
        }
        return '';
    }

    function guessExtension(url) {
        try {
            const path = new URL(url).pathname.toLowerCase();
            // 视频 / 音频
            let m = path.match(/\.(m3u8|mp4|webm|mkv|mov|flv|m4v|ts|m4s|mp3|m4a|aac)(?:$|\?)/i);
            if (m) {
                return m[1].toLowerCase() === 'm3u8' ? 'mp4' : m[1].toLowerCase();
            }
            // 图片
            m = path.match(/\.(jpe?g|png|gif|webp|bmp|tiff?|heic|avif|svg)(?:$|\?)/i);
            if (m) {
                const e = m[1].toLowerCase();
                return e === 'jpeg' ? 'jpg' : e;
            }
            // 从 query 里猜（很多 CDN 用 format=jpg / fm=webp）
            const u = new URL(url);
            const fmt = (u.searchParams.get('format') || u.searchParams.get('fm') || '').toLowerCase();
            if (/^(jpe?g|png|webp|gif)$/.test(fmt)) return fmt === 'jpeg' ? 'jpg' : fmt;
        } catch {}
        // 默认：URL 特征偏向图片则返回 jpg
        if (/image|photo|pic|img|cdninstagram|twimg|fbcdn|tiktokcdn|pbs\.twimg/i.test(url)) return 'jpg';
        return 'mp4';
    }

    function sanitizeFilename(title, url) {
        let name = (title || '').trim();
        if (!name) {
            // 从 URL 路径取最后一段当兜底
            try {
                const path = new URL(url).pathname;
                const base = path.split('/').filter(Boolean).pop() || '';
                name = decodeURIComponent(base).replace(/\.[a-z0-9]{2,5}$/i, '') || 'media';
            } catch {
                name = 'media';
            }
        }
        // 非法文件名字符
        name = name
            .replace(/[\\/:*?"<>|\u0000-\u001F]/g, '_')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 80); // 避免过长
        if (!name) name = 'media';
        const ext = guessExtension(url);
        // 已有扩展名则不重复添加
        if (!new RegExp('\\.' + ext + '$', 'i').test(name)) {
            name += '.' + ext;
        }
        return name;
    }
    // ---------- 标题提取结束 ----------

    // 版本信息
    function getEdgeDLVersion() {
        return (typeof GM_info !== 'undefined' && GM_info.script?.version)
            ? GM_info.script.version
            : 'dev';
    }

    const FALLBACK_ICON_BASE = 'https://cdn.jsdelivr.net/gh/Chumor/EdgeDL@main/assets/icons';
    function getIconUrl(name, fallback) {
        try {
            if (typeof GM_getResourceURL === 'function') {
                return GM_getResourceURL(name);
            }
        }
        catch {
            // ignore
        }
        return fallback;
    }
    const downloaderIcons = {
        IDM: getIconUrl('icon_idm', `${FALLBACK_ICON_BASE}/idm.svg`),
        IDM_PLUS: getIconUrl('icon_idm_plus', `${FALLBACK_ICON_BASE}/idm-plus.svg`),
        ADM: getIconUrl('icon_adm', `${FALLBACK_ICON_BASE}/adm.svg`),
        ABDM: getIconUrl('icon_abdm', `${FALLBACK_ICON_BASE}/abdm.svg`),
        FDM: getIconUrl('icon_fdm', `${FALLBACK_ICON_BASE}/fdm.svg`),
        // YTDLnis 无官方资源图标，使用内嵌 SVG（下载箭头 + 播放感）
        YTDLNIS: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#1a73e8"/><path d="M12 5v9m0 0l-3.5-3.5M12 14l3.5-3.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 18h12" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>'),
        EDGE: getIconUrl('icon_edge', `${FALLBACK_ICON_BASE}/edge.svg`),
    };

    async function showDownloadPicker(callback) {
        if (document.getElementById('edgedl-picker')) {
            callback(null);
            return;
        }
        const picker = document.createElement('div');
        picker.id = 'edgedl-picker';
        picker.classList.add('initializing');
        const shadow = picker.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<div class="edgedl-bg"></div><div class="edgedl-card"><h3>选择下载器</h3><div class="edgedl-version-tag">EdgeDL v${getEdgeDLVersion()}</div><div class="edgedl-options"><button data-pkg="${DOWNLOADERS.IDM}"><img src="${downloaderIcons.IDM}" />1DM </button><button data-pkg="${DOWNLOADERS.IDM_PLUS}"><img src="${downloaderIcons.IDM_PLUS}" />1DM+ </button><button data-pkg="${DOWNLOADERS.ADM}"><img src="${downloaderIcons.ADM}" />ADM </button><button data-pkg="${DOWNLOADERS.ABDM}"><img src="${downloaderIcons.ABDM}" />ABDM </button><button data-pkg="${DOWNLOADERS.FDM}"><img src="${downloaderIcons.FDM}" />FDM </button><button data-pkg="${DOWNLOADERS.YTDLNIS}"><img src="${downloaderIcons.YTDLNIS}" />YTDLnis </button><button data-pkg="edge"><img src="${downloaderIcons.EDGE}" />Edge </button></div><label style="margin-top:12px;display:flex;align-items:center;gap:6px;font-size:13px;"><input type="checkbox" id="edgedl-set-default" />设为默认下载器 </label></div>`;
        document.documentElement.appendChild(picker);
        const layoutPicker = () => {
            const vvp = window.visualViewport;
            const w = vvp ? vvp.width : document.documentElement.clientWidth;
            const card = shadow.querySelector('.edgedl-card');
            if (card)
                card.style.maxWidth = (w - 32) + 'px';
        };
        layoutPicker();
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', layoutPicker);
            window.visualViewport.addEventListener('scroll', layoutPicker);
        }
        const style = document.createElement('style');
        style.textContent = `:host{all:initial;position:fixed;inset:0;display:flex;justify-content:center;align-items:center;z-index:2147483647;pointer-events:none;contain:layout style paint;isolation:isolate;--edgedl-move-easing:cubic-bezier(0,0,0.2,1);--edgedl-fade-easing:cubic-bezier(0.4,0,0.2,1);--edgedl-exit-easing:cubic-bezier(0.4,0,1,1);--edgedl-enter-duration:300ms;--edgedl-fade-duration:200ms;--edgedl-exit-duration:200ms;}*,*::before,*::after{box-sizing:border-box;}.edgedl-bg{position:absolute;inset:0;background:rgba(0,0,0,0.42);backdrop-filter:blur(25px) saturate(140%);-webkit-backdrop-filter:blur(25px) saturate(140%);animation:edgedl-fade-in var(--edgedl-fade-duration) var(--edgedl-fade-easing) both;pointer-events:auto;will-change:opacity;}:host(.initializing) .edgedl-bg,:host(.initializing) .edgedl-card{pointer-events:none;user-select:none;cursor:wait;}.edgedl-card{position:relative;background:#fff;border-radius:24px;padding:20px;width:260px;max-width:100%;box-shadow:0 10px 28px rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;animation:edgedl-slide-up var(--edgedl-enter-duration) var(--edgedl-move-easing) both;transform-origin:center bottom;will-change:opacity,transform;pointer-events:auto;box-sizing:border-box;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.4;-webkit-font-smoothing:antialiased;}h3{margin:8px 0 18px 0;font-weight:600;font-size:16px;color:#333;}.edgedl-version-tag{position:absolute;top:10px;right:12px;font-size:9px;transform:translate(0,0);font-family:ui-monospace,SFMono-Regular,monospace;color:#888;background:rgba(0,0,0,0.04);padding:2px 8px;border-radius:12px;font-weight:600;letter-spacing:0.3px;pointer-events:none;border:1px solid rgba(0,0,0,0.02);}.edgedl-options{display:flex;flex-direction:column;width:100%;gap:12px;}.edgedl-options button{display:flex;align-items:center;gap:10px;padding:10px;border:none;border-radius:12px;background:#F0F0F0;font-weight:500;cursor:pointer;transition:background 0.2s;}.edgedl-options button:hover{background:#e0e0e0;}.edgedl-options img{width:24px;height:24px;}.edgedl-options button.selected{background:rgba(76,175,80,0.12);outline:1.5px solid rgba(76,175,80,0.72);}@media (prefers-color-scheme:dark){.edgedl-card{background:#292929;color:#FFFFFF;box-shadow:0 4px 16px rgba(0,0,0,0.6);}h3{color:#F5F5F5;}.edgedl-options button{background:#383838;color:#FFFFFF;}#edgedl-picker .edgedl-options button.selected{background:rgba(129,199,132,0.16);outline-color:rgba(129,199,132,0.82);}}@keyframes edgedl-fade-in{from{opacity:0;}to{opacity:1;}}@keyframes edgedl-slide-up{from{opacity:0;transform:translateY(24px) scale(0.96);}to{opacity:1;transform:translateY(0) scale(1);}}@keyframes edgedl-fade-out{from{opacity:1;}to{opacity:0;}}@keyframes edgedl-slide-down{from{opacity:1;transform:translateY(0) scale(1);}to{opacity:0;transform:translateY(12px) scale(0.98);}}:host(.closing) .edgedl-bg{animation:edgedl-fade-out var(--edgedl-exit-duration) var(--edgedl-exit-easing) forwards;}:host(.closing) .edgedl-card{animation:edgedl-slide-down var(--edgedl-exit-duration) var(--edgedl-exit-easing) forwards;}@media (prefers-reduced-motion:reduce){.edgedl-bg,.edgedl-card,:host(.closing) .edgedl-bg,:host(.closing) .edgedl-card{animation-duration:1ms;}}`;
        shadow.appendChild(style);
        // 读取默认下载器
        const defaultDownloader = await GM_getValue(DEFAULT_DOWNLOADER_KEY, null);
        const defaultCheckbox = shadow.querySelector('#edgedl-set-default');
        if (defaultCheckbox)
            defaultCheckbox.checked = !!defaultDownloader;
        if (defaultDownloader) {
            // 高亮默认下载器按钮
            const defaultBtn = shadow.querySelector(`button[data-pkg="${defaultDownloader}"]`);
            if (defaultBtn)
                defaultBtn.classList.add('selected');
        }
        // 取消勾选时清除默认下载器
        defaultCheckbox.addEventListener('change', async () => {
            if (!defaultCheckbox.checked) {
                await GM_deleteValue(DEFAULT_DOWNLOADER_KEY);
                shadow.querySelector('button.selected')?.classList.remove('selected');
            }
        });
        // 点击唤起
        shadow.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', async () => {
                const pkg = btn.dataset.pkg || '';
                // 按当前选择更新默认下载器
                if (pkg === 'edge') {
                    await GM_deleteValue(DEFAULT_DOWNLOADER_KEY);
                }
                else if (defaultCheckbox.checked) {
                    await GM_setValue(DEFAULT_DOWNLOADER_KEY, pkg);
                }
                callback(pkg);
                gotoClose(false);
            });
        });
        picker.classList.remove('initializing');
        function gotoClose(cancelled = true) {
            if (picker.classList.contains('closing'))
                return;
            if (cancelled)
                callback(null);
            picker.classList.add('closing');
            let removed = false;
            const removePicker = () => {
                if (removed)
                    return;
                removed = true;
                if (window.visualViewport) {
                    window.visualViewport.removeEventListener('resize', layoutPicker);
                    window.visualViewport.removeEventListener('scroll', layoutPicker);
                }
                picker.remove();
                window.dispatchEvent(new CustomEvent('edgedl:picker-closed'));
            };
            const card = shadow.querySelector('.edgedl-card');
            const onAnimationEnd = (event) => {
                if (event.target !== card)
                    return;
                card.removeEventListener('animationend', onAnimationEnd);
                removePicker();
            };
            card?.addEventListener('animationend', onAnimationEnd);
            window.setTimeout(removePicker, 260);
        }
        shadow.querySelector('.edgedl-bg')?.addEventListener('click', () => gotoClose());
    }

    function buildIntentUrl(url, packageName, filename) {
        const scheme = url.startsWith('https') ? 'https' : 'http';
        const path = url.replace(/^https?:\/\//, '');
        let intent = `intent://${path}#Intent;scheme=${scheme};package=${packageName};type=*/*;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE`;
        // 把干净文件名通过 extra 传给下载器，避免中文标题乱码
        if (filename) {
            const encoded = encodeURIComponent(filename);
            // 1DM / 1DM+
            if (packageName.includes('idm.internet.download.manager')) {
                intent += `;S.idm.extra.FILENAME=${encoded}`;
            }
            // ADM
            else if (packageName === 'com.dv.adm') {
                intent += `;S.com.android.extra.filename=${encoded}`;
            }
            // ABDM / FDM 等也尝试通用 key
            else {
                intent += `;S.android.intent.extra.TITLE=${encoded}`;
                intent += `;S.filename=${encoded}`;
            }
        }
        // YTDLnis：用 video/* + BROWSABLE 匹配其 Manifest；SEND 在 Edge 上常误跳 Play 商店
        if (packageName === 'com.deniscerri.ytdl') {
            const s = url.startsWith('https') ? 'https' : 'http';
            const p = url.replace(/^https?:\/\//, '');
            return `intent://${p}#Intent;scheme=${s};type=video/*;package=${packageName};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;category=android.intent.category.DEFAULT;end`;
        }
        intent += ';end';
        return intent;
    }

    function openDownloader(url, type, filename) {
        if (!url || typeof url !== 'string') {
            throw new Error('Invalid URL');
        }
        const packageName = DOWNLOADERS[type];
        if (!packageName) {
            throw new Error(`Unknown downloader type:${type}`);
        }
        // 没有外部传入文件名时，现场再提取一次
        const finalName = filename || sanitizeFilename(extractMediaTitle(), url);
        const intentUrl = buildIntentUrl(url, packageName, finalName);
        console.log('[EdgeDL] 唤起下载器', type, '文件名:', finalName);
        window.location.href = intentUrl;
    }

    // 用 VLC 打开媒体链接播放（支持 m3u8 / mp4 等流）
    function openInVLC(url) {
        if (!url || typeof url !== 'string') {
            showToast('无效的媒体链接', { type: 'error' });
            return;
        }
        // VLC Android 官方包名
        const VLC_PACKAGE = 'org.videolan.vlc';
        try {
            const scheme = url.startsWith('https') ? 'https' : 'http';
            const path = url.replace(/^https?:\/\//, '');
            // 方式1：标准 VIEW Intent，指定 VLC 包
            // 方式2：部分机型对 vlc:// 协议支持更好
            const intentUrl =
                `intent://${path}#Intent;` +
                `scheme=${scheme};` +
                `package=${VLC_PACKAGE};` +
                `type=video/*;` +
                `action=android.intent.action.VIEW;` +
                `category=android.intent.category.BROWSABLE;` +
                `S.title=${encodeURIComponent(extractMediaTitle() || 'EdgeDL Stream')};` +
                `end`;
            console.log('[EdgeDL] 唤起 VLC 播放', url);
            showToast('正在用 VLC 打开…');
            window.location.href = intentUrl;
        } catch (err) {
            console.warn('[EdgeDL] 打开 VLC 失败', err);
            showToast('打开 VLC 失败，请确认已安装 VLC', { type: 'error', duration: 2500 });
        }
    }

    let styleInjected = false;
    let activeToast = null;
    // 注入全局样式
    function injectStyle() {
        if (styleInjected)
            return;
        styleInjected = true;
        const style = document.createElement('style');
        style.textContent = `.edgedl-toast{position:fixed;top:64px;right:12px;left:auto;bottom:auto;transform:translateX(20px);z-index:999999;pointer-events:none;font-size:13px;font-weight:500;line-height:1.4;padding:7px 14px;border-radius:10px;white-space:nowrap;opacity:0;transition:opacity .22s ease,transform .22s ease;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}.edgedl-toast[data-theme="light"]{background:#333333;color:#fff;box-shadow:0 4px 10px rgba(0,0,0,.25);}.edgedl-toast[data-theme="dark"]{background:#383838;color:#f5f5f5;border:1px solid rgba(255,255,255,.08);box-shadow:0 6px 16px rgba(0,0,0,.6);}.edgedl-toast.show{opacity:1;transform:translateX(0);}.edgedl-toast[data-type="error"]::before{content:"⚠";margin-right:6px;color:#f87171;}.edgedl-toast[data-type="info"]::before{content:"ⓘ";margin-right:6px;opacity:.8;}`;
        document.head.appendChild(style);
    }
    function getTheme() {
        return window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    function showToast(message, options = {}) {
        try {
            injectStyle();
            const { duration = 900, type = 'info' } = options;
            if (activeToast)
                activeToast.remove();
            const toast = document.createElement('div');
            toast.className = 'edgedl-toast';
            toast.dataset.theme = getTheme();
            toast.dataset.type = type;
            toast.textContent = message;
            document.body.appendChild(toast);
            activeToast = toast;
            requestAnimationFrame(() => {
                toast.classList.add('show');
            });
            setTimeout(() => {
                toast.classList.remove('show');
                toast.addEventListener('transitionend', () => {
                    toast.remove();
                    if (activeToast === toast)
                        activeToast = null;
                }, { once: true });
            }, duration);
        }
        catch (err) {
            console.warn('Toast 创建失败', err);
        }
    }

    async function openDownload(url, downloader, filename) {
        const launcherKey = Object.keys(DOWNLOADERS)
            .find((key) => DOWNLOADERS[key] === downloader);
        if (launcherKey) {
            const name = filename || sanitizeFilename(extractMediaTitle(), url);
            showToast(`${launcherKey} 正在唤起`);
            openDownloader(url, launcherKey, name);
            return;
        }
        showToast('Edge 内置下载');
        setTimeout(() => {
            window.location.href = url;
        }, 0);
    }

    async function requestDownload(url, filename) {
        if (!url)
            return;
        // 统一生成一次干净文件名，后续复用
        const finalName = filename || sanitizeFilename(extractMediaTitle(), url);
        const dl = await GM_getValue(DEFAULT_DOWNLOADER_KEY);
        if (dl) {
            return openDownload(url, dl, finalName);
        }
        const selected = await new Promise((resolve) => {
            showDownloadPicker(resolve);
        });
        if (selected) {
            return openDownload(url, selected, finalName);
        }
        return null;
    }

    // 下载文件后缀匹配
    const EXTENSIONS = [
        // 视频格式
        '.mp4', '.mkv', '.avi', '.mov', '.flv', '.wmv', '.webm',
        '.m4v', '.3gp', '.ts', '.mpg', '.mpeg', '.vob', '.mts', '.m2ts',
        '.m3u8',
        // 图片格式
        '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff',
        '.tif', '.ico', '.heic', '.heif', '.avif', '.jfif', '.raw', '.psd',
        '.eps',
        // 文本格式
        '.txt', '.log', '.md', '.markdown', '.json', '.xml', '.csv', '.tsv',
        '.rtf', '.yaml', '.yml', '.toml', '.ini', '.conf', '.tex', '.srt',
        '.vtt', '.sub',
        // 网页资源格式（注：.html/.htm 是网页页面而非下载文件，不参与拦截，否则会导致普通链接无法跳转）
        '.css', '.scss', '.less', '.sass',
        '.js', '.mjs', '.cjs', '.ts', '.jsx', '.tsx', '.vue',
        '.woff', '.woff2', '.ttf', '.otf', '.eot', '.map',
        // 音频格式
        '.mp3', '.flac', '.wav', '.ogg', '.m4a', '.aac', '.wma', '.ape',
        '.opus', '.aiff', '.aif', '.au', '.ac3', '.wv', '.mpc', '.amr',
        '.mid', '.midi', '.mka', '.3ga', '.caf',
        // 音频播放列表/歌词
        '.m3u', '.pls', '.cue', '.lrc', '.krc',
        // 文档格式
        '.pdf', '.epub', '.mobi', '.azw3', '.djvu',
        '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
        // 压缩包格式
        '.zip', '.rar', '.7z', '.tar', '.gz', '.tgz', '.bz2', '.xz',
        '.iso', '.cab', '.jar', '.z',
        // 安装包格式
        '.apk', '.apks', '.xapk', '.apkm', '.ipa', '.obb', '.aab',
        // 可执行文件格式
        '.exe', '.msi', '.bin', '.dat', '.dmg', '.bat', '.sh', '.img',
        // 种子文件
        '.torrent',
    ];
    // 下载链接特征匹配
    const KEYWORDS=['/down/', '/download/', '/downloads/', '/dl/', '/fetch/','/files/', '/file/', '/attach/', '/attachment/','/repo/', '/backup/', '/upload/','/releases/download/', '/binary/', '/pkg/',
    // 软件商店/客户端常用下载路径（仅收录下载专属、普通导航页极少出现的片段）
    '/setup/', '/installer/', '/patch/', '/getfile', '/apk/',
    // 下载触发参数
    '?file=', '&file=', '?filename=', '&filename=','download?', '&download=', '?download=',
    '?act=download', '&act=download', '?action=download', '?mode=download', '?down=', '&down=',
    'force_download', 'response-content-disposition=', 'content-disposition=attachment'];
    // 非下载页面排除规则
    const EXCLUDE_PATHS = /\/(login|reg(ister)?|sign(in|up|out)|logout|account|user|blob|src|tree)(?:[\/?#]|$)/i;

    // ---------- 敏感页面排除（登录 / 支付 / 购物 / 银行等，禁止媒体嗅探） ----------
    const SENSITIVE_HOST_RE = new RegExp([
        // 支付 / 金融
        'paypal\\.com', 'stripe\\.com', 'alipay\\.com', 'alipay\\.net', 'tenpay\\.com',
        'weixin\\.qq\\.com', 'wx\\.tenpay\\.com', 'pay\\.weixin', 'checkout\\.stripe',
        'pay\\.google\\.com', 'payments\\.google', 'apple\\.com/.*pay',
        'unionpay\\.com', 'chinapay\\.com', 'yeepay\\.com', '99bill\\.com',
        // 银行
        'icbc\\.com', 'ccb\\.com', 'boc\\.cn', 'abchina\\.com', 'bankcomm\\.com',
        'cmbchina\\.com', 'spdb\\.com', 'citibank', 'hsbc\\.', 'chase\\.com',
        'bankofamerica\\.com', 'wellsfargo\\.com',
        // 电商 / 购物结账
        'taobao\\.com', 'tmall\\.com', 'jd\\.com', 'amazon\\.(com|cn|co\\.jp|co\\.uk)',
        'tmall\\.hk', 'aliexpress\\.com', 'ebay\\.(com|cn)', 'pinduoduo\\.com',
        'suning\\.com', 'vip\\.com', 'gome\\.com', 'kaola\\.com',
        'shopify\\.com', 'checkout\\.',
        // 账号 / 认证相关大站
        'accounts\\.google\\.com', 'login\\.microsoftonline\\.com', 'login\\.live\\.com',
        'id\\.apple\\.com', 'auth0\\.com', 'okta\\.com', 'sso\\.',
        'passport\\.', 'account\\.', 'signin\\.', 'signup\\.',
        // 政府 / 身份
        'gov\\.cn', 'irs\\.gov', 'ssa\\.gov',
    ].join('|'), 'i');

    const SENSITIVE_PATH_RE = /\/(login|log-in|signin|sign-in|signup|sign-up|register|regist|logout|signout|auth|oauth|sso|passport|account|accounts|checkout|cart|payment|pay|billing|wallet|secure|verify|password|passwd|reset-password|forgot|2fa|mfa|otp)(?:\/|$|\?|#)/i;

    function isSensitivePage() {
        try {
            const host = (location.hostname || '').toLowerCase();
            const path = (location.pathname || '') + (location.search || '');
            if (SENSITIVE_HOST_RE.test(host)) return true;
            if (SENSITIVE_PATH_RE.test(path)) return true;
            // 标题里明显是登录/支付页
            const title = (document.title || '').toLowerCase();
            if (/登录|登陆|注册|支付|付款|结账|收银台|checkout|sign\s*in|log\s*in|payment|password/i.test(title)) {
                // 避免误伤内容站，要求路径也有相关特征或 host 较短
                if (SENSITIVE_PATH_RE.test(path) || path.length < 3) return true;
            }
            return false;
        } catch {
            return false;
        }
    }
    // ---------- 敏感页面排除结束 ----------
    // 下载跳转页匹配
    const REDIRECT_DOWNLOAD_PAGES = [
        // 腾讯游戏
        /\/zlkdatasys\/mct\/(?:d\/[^/?#]+|proj_\d+\/download)\.shtml(?:[?#].*)?$/i,
        // 多多软件站等：/downm/<id> 形式的下载跳转链接（服务端 302 到真实文件）
        /\/downm\/\d+(?:[?#].*)?$/i,
        // 豌豆荚：/apps/<id>/binding 下载绑定页（服务端 302 到真实 apk）
        /\/apps\/\d+\/binding(?:[?#].*)?$/i,
    ];
    // 下载链接检测
    function isDownloadLink(url) {
        if (url?.includes('sourceforge.net/projects/') && url.includes('/files/'))
            return false;
        if (!url || !url.startsWith('http'))
            return false;
        const lowerUrl = url.toLowerCase();
        // 排除非下载页面 & 敏感路径
        if (EXCLUDE_PATHS.test(lowerUrl) || SENSITIVE_PATH_RE.test(lowerUrl))
            return false;
        // 敏感域名上的链接一律不接管（支付/银行/登录大站）
        try {
            if (SENSITIVE_HOST_RE.test(new URL(url).hostname))
                return false;
        } catch {}
        // 排除流媒体分片（.m4s/.ts 等），避免视频站播放器被拦截
        if (/\.(m4s|ts|m4v)(?:$|[?#])/i.test(lowerUrl) || /[?&](?:byterange|range|segment|sq)=/i.test(lowerUrl))
            return false;
        // 排除类 Unix 目录路径
        if (/\/data\/data\/[^?#]*$/i.test(lowerUrl))
            return false;
        // 下载跳转页匹配
        if (REDIRECT_DOWNLOAD_PAGES.some(pattern => pattern.test(lowerUrl)))
            return true;
        // 后缀匹配
        try {
            const path = new URL(url).pathname.toLowerCase();
            if (EXTENSIONS.some(ext => path.endsWith(ext)))
                return true;
        }
        catch {
            const path = lowerUrl.split('?')[0].split('#')[0];
            if (EXTENSIONS.some(ext => path.endsWith(ext)))
                return true;
        }
        // 关键字匹配
        return KEYWORDS.some(kw => lowerUrl.includes(kw));
    }

    function extractUrlFromOnclick(onclick) {
        if (!onclick)
            return null;
        const URL_PATTERN = /(https?:\/\/[^"'()\s]+)/i;
        const match = onclick.match(URL_PATTERN);
        if (match) {
            return match[1];
        }
        return null;
    }

    let interceptEnabled = false;
    let interceptStateReady = false;
    let bridgeAttached = false;
    const SCRIPT_NAVIGATION_USER_GESTURE_WINDOW_MS = 1500;
    let lastUserGestureAt = 0;
    function getPageWindow() {
        return (globalThis.unsafeWindow || window);
    }
    function getControlledHostname() {
        try {
            return window.top?.location.hostname.toLowerCase() || location.hostname.toLowerCase();
        }
        catch {
            try {
                return new URL(document.referrer).hostname.toLowerCase() || location.hostname.toLowerCase();
            }
            catch {
                return location.hostname.toLowerCase();
            }
        }
    }
    function isInvalidNavigationUrl(url) {
        const value = url.trim().toLowerCase();
        return !value || value === '#' || value === '##' || value.startsWith('javascript:');
    }
    function normalizeUrl(input) {
        if (!input)
            return '';
        try {
            const url = new URL(String(input), location.href).href;
            return url.startsWith('http') ? url : '';
        }
        catch {
            return '';
        }
    }
    function hasRecentUserGesture() {
        return Date.now() - lastUserGestureAt <= SCRIPT_NAVIGATION_USER_GESTURE_WINDOW_MS;
    }
    function tryInterceptNavigation(input, options) {
        if (!interceptStateReady || !interceptEnabled)
            return false;
        if (options?.requireUserGesture && !hasRecentUserGesture())
            return false;
        const url = normalizeUrl(input);
        if (!url || !isDownloadLink(url))
            return false;
        void requestDownload(url);
        return true;
    }
    const KEY = 'edgedl-site-intercept';
    // 获取接管站点列表
    async function getInterceptSites() {
        const list = await GM_getValue(KEY, []);
        return Array.isArray(list) ? list : [];
    }
    // 保存接管站点列表
    async function setInterceptSites(list) {
        const normalized = list.map((i) => typeof i === 'string' ? i.toLowerCase() : String(i).toLowerCase());
        await GM_setValue(KEY, normalized);
        interceptEnabled = !normalized.includes(getControlledHostname());
        interceptStateReady = true;
        return normalized;
    }
    // 判断当前站点是否已跳过接管
    async function isSiteIntercepted() {
        const host = getControlledHostname();
        const list = await getInterceptSites();
        if (list.length === 0)
            return false;
        return list.some(item => item.toLowerCase() === host);
    }
    // 切换当前站点接管状态
    async function toggleSiteIntercept() {
        const host = getControlledHostname();
        const list = await getInterceptSites();
        let added;
        const index = list.findIndex(item => item.toLowerCase() === host);
        if (index >= 0) {
            list.splice(index, 1);
            added = false;
        }
        else {
            list.push(host);
            added = true;
        }
        await setInterceptSites(list);
        return added;
    }
    // 挂载点击拦截器
    function attachClickInterceptor() {
        document.addEventListener('click', handleClick, true);
    }
    function handleClick(e) {
        lastUserGestureAt = Date.now();
        // @ts-expect-error: 自定义属性拦截
        if (e._edgedl_handled)
            return;
        // @ts-expect-error
        e._edgedl_handled = true;
        const target = e.target;
        if (target?.closest?.('label.hope-checkbox, .hope-checkbox, .hope-checkbox__control, input[type="checkbox"]'))
            return;
        const downloadTrigger = target?.closest?.('[class*="download" i], [id*="download" i], [dt-eid*="download" i]');
        const link = target?.closest?.('a, [onclick], [data-ng-href], [data-href], [data-url], [data-gokey]');
        let url = '';
        if (link) {
            url = link.getAttribute('href')
                || link.getAttribute('data-ng-href')
                || link.getAttribute('data-href')
                || (link.getAttribute('data-gokey')?.match(/download_url=([^&]+)/)?.[1])
                || link.getAttribute('data-url')
                || link.getAttribute('data-originalurl')
                || link.href
                || '';
        }
        if (isInvalidNavigationUrl(url)) {
            const onclick = link
                ? link.getAttribute('onclick') || link.closest('[onclick]')?.getAttribute('onclick')
                : target?.closest?.('[onclick]')?.getAttribute('onclick');
            if (onclick) {
                url = extractUrlFromOnclick(onclick) || '';
            }
        }
        if (isInvalidNavigationUrl(url) &&
            downloadTrigger &&
            isDownloadLink(location.href)) {
            url = location.href;
        }
        else {
            url = normalizeUrl(url);
        }
        if (!url || !isDownloadLink(url))
            return;
        if (!interceptStateReady)
            return;
        // 命中接管排除策略：跳过 EdgeDL 接管并提示，交还浏览器默认行为
        if (!interceptEnabled) {
            showToast('已跳过接管', { type: 'info', duration: 1500 });
            return;
        }
        // 阻止浏览器原生下载与页面跳转
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        void requestDownload(url);
    }
    // 接管页面脚本触发的下载跳转
    function attachPageBridgeInterceptor() {
        if (bridgeAttached)
            return;
        bridgeAttached = true;
        attachClickInterceptor();
        void isSiteIntercepted().then((value) => {
            interceptEnabled = !value;
            interceptStateReady = true;
        }).catch((error) => {
            console.error('[EdgeDL] Failed to load site intercept state', error);
            interceptEnabled = true;
            interceptStateReady = true;
        });
        const pageWindow = getPageWindow();
        const originalOpen = pageWindow.open;
        pageWindow.open = function patchedOpen(url, target, features) {
            if (tryInterceptNavigation(url))
                return null;
            return originalOpen.call(pageWindow, url, target, features);
        };
        try {
            const originalClick = pageWindow.HTMLAnchorElement.prototype.click;
            pageWindow.HTMLAnchorElement.prototype.click = function patchedClick() {
                if (tryInterceptNavigation(this.href))
                    return;
                return originalClick.call(this);
            };
        }
        catch { }
        ['assign', 'replace'].forEach((method) => {
            try {
                const original = pageWindow.Location.prototype[method];
                pageWindow.Location.prototype[method] =
                    function patchedLocation(url) {
                        if (tryInterceptNavigation(url))
                            return;
                        return original.call(this, url);
                    };
            }
            catch { }
        });
        // 拦截 location.href = xxx 直接赋值触发的下载（如豌豆荚等站点用 JS 赋 location.href 跳下载链接）
        try {
            const desc = Object.getOwnPropertyDescriptor(pageWindow.Location.prototype, 'href');
            if (desc && desc.set) {
                const originalHrefSet = desc.set;
                Object.defineProperty(pageWindow.Location.prototype, 'href', {
                    ...desc,
                    set: function patchedHref(value) {
                        if (tryInterceptNavigation(value))
                            return;
                        originalHrefSet.call(this, value);
                    }
                });
            }
        }
        catch { }
        // 拦截通过隐藏 <iframe> 动态唤起的下载行为
        try {
            const desc = Object.getOwnPropertyDescriptor(pageWindow.HTMLIFrameElement.prototype, 'src');
            if (desc && desc.set) {
                const originalSet = desc.set;
                Object.defineProperty(pageWindow.HTMLIFrameElement.prototype, 'src', {
                    ...desc,
                    set: function patchedIframeSrc(value) {
                        if (tryInterceptNavigation(value, { requireUserGesture: true }))
                            return;
                        originalSet.call(this, value);
                    }
                });
            }
            const originalSetAttribute = pageWindow.Element.prototype.setAttribute;
            pageWindow.Element.prototype.setAttribute = function patchedSetAttribute(name, value) {
                if (this instanceof pageWindow.HTMLIFrameElement && name.toLowerCase() === 'src') {
                    if (tryInterceptNavigation(value, { requireUserGesture: true }))
                        return;
                }
                return originalSetAttribute.call(this, name, value);
            };
        }
        catch { }
    }

    let menuRegistered = false;

    // ---- 检测本页内嵌音视频 + 高清图片 并转外部下载器 ----
    const VIDEO_EXT_RE = /\.(?:m3u8|mp4|flv|m4v|webm|mov|mkv|avi|m4s)(?:[?#]|$)/i;
    const IMAGE_EXT_RE = /\.(?:jpe?g|png|gif|webp|bmp|tiff?|heic|avif)(?:[?#]|$)/i;
    const VIDEO_URL_RE = /(?:https?:)?\/\/[^\s"'<>()]+?\.(?:m3u8|mp4|flv|m4v|webm|mov|mkv|avi|m4s)(?:\?[^\s"'<>()]*)?/gi;
    const IMAGE_URL_RE = /(?:https?:)?\/\/[^\s"'<>()]+?\.(?:jpe?g|png|gif|webp|bmp|tiff?|heic|avif)(?:\?[^\s"'<>()]*)?/gi;

    function isVideoUrl(url) {
        return VIDEO_EXT_RE.test(url);
    }
    function isImageUrl(url) {
        return IMAGE_EXT_RE.test(url) || /[?&](?:format|fm)=(jpe?g|png|webp|gif)/i.test(url);
    }
    function isMediaUrl(url) {
        return isVideoUrl(url) || isImageUrl(url);
    }

    function normalizeMediaUrl(raw) {
        if (!raw || typeof raw !== 'string')
            return '';
        // 处理 JS 源码里 \/ 转义
        let u = raw.replace(/\\\//g, '/');
        if (u.startsWith('//'))
            u = 'https:' + u;
        const normalized = normalizeUrl(u);
        return normalized && isMediaUrl(normalized) ? normalized : '';
    }

    // 把常见 CDN 缩略图升级到原图 / 大图
    function upgradeImageUrl(url) {
        if (!url) return url;
        try {
            const u = new URL(url);
            const host = u.hostname.toLowerCase();

            // X / Twitter : pbs.twimg.com → name=orig
            if (host.includes('pbs.twimg.com') || host.includes('twimg.com')) {
                u.searchParams.set('name', 'orig');
                // 去掉 size 限制
                u.searchParams.delete('format');
                if (!u.searchParams.has('format')) u.searchParams.set('format', 'jpg');
                return u.href;
            }

            // Instagram CDN
            if (host.includes('cdninstagram.com') || host.includes('fbcdn.net') || host.includes('instagram.')) {
                // 去掉尺寸限制参数，尽量拿原图
                ['stp', 'se', 'oh', 'oe', 'ig_cache_key'].forEach(k => u.searchParams.delete(k));
                // 常见缩略图路径替换
                let path = u.pathname
                    .replace(/\/s\d+x\d+\//g, '/')
                    .replace(/\/p\d+x\d+\//g, '/')
                    .replace(/\/c\d+\.\d+\.\d+\.\d+\//g, '/')
                    .replace(/\/e\d+\//g, '/');
                u.pathname = path;
                return u.href;
            }

            // Facebook CDN
            if (host.includes('fbcdn.net') || host.includes('facebook.com')) {
                u.searchParams.delete('stp');
                u.searchParams.delete('oh');
                u.searchParams.delete('oe');
                return u.href;
            }

            // TikTok
            if (host.includes('tiktokcdn') || host.includes('musical.ly') || host.includes('byteicdn')) {
                // 尽量去掉尺寸后缀
                u.pathname = u.pathname.replace(/~\w+\.(jpe?g|png|webp)$/i, '.$1');
                return u.href;
            }

            // Google / 其他常见
            if (host.includes('googleusercontent.com') || host.includes('ggpht.com')) {
                // 去掉 =sxxx 尺寸限制
                u.pathname = u.pathname.replace(/=s\d+(-[a-z]+)?$/i, '=s0');
                return u.href;
            }

            // 通用：去掉常见缩略图参数
            ['w', 'h', 'width', 'height', 'size', 'resize', 'thumb', 'thumbnail'].forEach(k => {
                if (u.searchParams.has(k) && parseInt(u.searchParams.get(k) || '0', 10) < 2000) {
                    u.searchParams.delete(k);
                }
            });
            return u.href;
        } catch {
            return url;
        }
    }

    // 从必应图片详情页(detailV2)地址栏 mediaurl 参数解码出原始图片地址
    function extractBingImageUrl() {
        if (!/bing\.com\/images\/search/i.test(location.href))
            return null;
        try {
            const u = new URL(location.href);
            const mediaurl = u.searchParams.get('mediaurl');
            if (!mediaurl)
                return null;
            let decoded = decodeURIComponent(mediaurl);
            // 必应的 mediaurl 是代理缩略图，真实原图常藏在其中的 riu 参数里（需二次解码）
            try {
                const riu = new URL(decoded).searchParams.get('riu');
                if (riu)
                    return decodeURIComponent(riu);
            }
            catch { }
            if (/^https?:\/\//i.test(decoded))
                return decoded;
        }
        catch { }
        return null;
    }

    // 从页面 img / picture / 背景 / meta 收集高清图片
    function collectPageImages() {
        const candidates = new Map(); // url -> score

        const scoreAndAdd = (raw, score = 1) => {
            let n = normalizeMediaUrl(raw) || normalizeUrl(String(raw || ''));
            if (!n || !/^https?:/i.test(n)) return;
            // 过滤明显小图 / 图标 / 表情
            if (/favicon|emoji|sprite|icon[_-]?|logo[_-]?|avatar.*s\d{2,3}|\/\d+x\d+\//i.test(n) && score < 5) return;
            if (n.length < 20) return;

            n = upgradeImageUrl(n);
            const prev = candidates.get(n) || 0;
            candidates.set(n, Math.max(prev, score));
        };

        try {
            // 0. 必应
            const bing = extractBingImageUrl();
            if (bing) scoreAndAdd(bing, 100);

            // 1. og:image / twitter:image（通常是高质量封面）
            document.querySelectorAll('meta[property="og:image"], meta[property="og:image:url"], meta[name="twitter:image"], meta[name="twitter:image:src"]').forEach(m => {
                scoreAndAdd(m.getAttribute('content'), 80);
            });

            // 2. <img> 及 srcset / data-* 
            document.querySelectorAll('img').forEach((img) => {
                const w = img.naturalWidth || img.width || 0;
                const h = img.naturalHeight || img.height || 0;
                const area = w * h;
                let score = 1;
                if (area > 800 * 800) score = 60;
                else if (area > 400 * 400) score = 30;
                else if (area > 200 * 200) score = 10;

                // 当前显示的图
                scoreAndAdd(img.currentSrc || img.src, score);

                // data-src / data-original / data-full 等懒加载原图
                ['data-src', 'data-original', 'data-full', 'data-fullsize', 'data-lazy-src', 'data-url', 'data-large', 'data-hires'].forEach(attr => {
                    const v = img.getAttribute(attr);
                    if (v) scoreAndAdd(v, score + 20);
                });

                // srcset 取最大的
                const srcset = img.getAttribute('srcset') || img.getAttribute('data-srcset');
                if (srcset) {
                    srcset.split(',').forEach(part => {
                        const [u, desc] = part.trim().split(/\s+/);
                        const multiplier = parseFloat(desc) || 1;
                        scoreAndAdd(u, score + multiplier * 5);
                    });
                }
            });

            // 3. <picture> <source>
            document.querySelectorAll('picture source').forEach(s => {
                scoreAndAdd(s.getAttribute('srcset') || s.getAttribute('src'), 40);
            });

            // 4. 平台特殊选择器
            const host = location.hostname.toLowerCase();

            // Instagram 主图
            if (host.includes('instagram.com')) {
                document.querySelectorAll('article img, [role="dialog"] img, img[src*="cdninstagram"]').forEach(img => {
                    scoreAndAdd(img.currentSrc || img.src, 70);
                });
            }

            // X / Twitter 媒体
            if (host.includes('x.com') || host.includes('twitter.com')) {
                document.querySelectorAll('[data-testid="tweetPhoto"] img, [data-testid="videoComponent"] img, img[src*="pbs.twimg.com"]').forEach(img => {
                    scoreAndAdd(img.currentSrc || img.src, 70);
                });
            }

            // Facebook
            if (host.includes('facebook.com') || host.includes('fb.')) {
                document.querySelectorAll('img[src*="fbcdn"], img[data-src*="fbcdn"]').forEach(img => {
                    scoreAndAdd(img.currentSrc || img.src || img.getAttribute('data-src'), 60);
                });
            }

            // TikTok
            if (host.includes('tiktok.com') || host.includes('douyin.com')) {
                document.querySelectorAll('img[src*="tiktokcdn"], video + img, [class*="cover"] img').forEach(img => {
                    scoreAndAdd(img.currentSrc || img.src, 50);
                });
            }

            // 5. performance 里已经加载过的大图
            try {
                performance.getEntriesByType('resource').forEach((e) => {
                    if (isImageUrl(e.name) && (e.transferSize || 0) > 30000) {
                        scoreAndAdd(e.name, 25);
                    }
                });
            } catch {}

            // 6. 脚本里出现的图片 URL
            document.querySelectorAll('script').forEach((s) => {
                const txt = (s.textContent || '').replace(/\\\//g, '/');
                if (txt.length > 1_500_000) return;
                const matches = txt.match(IMAGE_URL_RE) || [];
                matches.forEach(m => scoreAndAdd(m, 15));
            });

        } catch (err) {
            console.warn('[EdgeDL] 收集图片失败', err);
        }

        // 按分数排序，返回高质量优先
        return [...candidates.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([url]) => url);
    }

    // 扫描页面，收集可接管的视频 + 高清图片（去重，视频优先）
    function detectPageMedia() {
        // 敏感页面直接返回空，避免误嗅探
        if (isSensitivePage()) {
            console.log('[EdgeDL] 敏感页面，跳过媒体嗅探');
            return [];
        }
        const urls = new Set();
        const add = (raw) => {
            const n = normalizeMediaUrl(raw);
            if (n) urls.add(n);
        };
        try {
            // 视频部分（保持原逻辑）
            document.querySelectorAll('video, video source, audio, audio source').forEach((el) => {
                add(el.currentSrc || el.getAttribute('src'));
            });
            document.querySelectorAll('script').forEach((s) => {
                const txt = (s.textContent || '').replace(/\\\//g, '/');
                if (txt.length > 2_000_000) return;
                const matches = txt.match(VIDEO_URL_RE) || [];
                matches.forEach(add);
            });
            try {
                performance.getEntriesByType('resource').forEach((e) => add(e.name));
            } catch {}

            // 图片部分（新增强）
            const images = collectPageImages();
            images.forEach(u => urls.add(u));
        }
        catch (err) {
            console.warn('[EdgeDL] 检测页面媒体失败', err);
        }
        return [...urls];
    }

    function registerMenu() {
        if (menuRegistered)
            return;
        if (typeof GM_registerMenuCommand !== 'function')
            return;
        // 更改默认下载器
        GM_registerMenuCommand('更改默认下载器', () => {
            showDownloadPicker(() => { });
        });
        // 切换站点接管状态
        GM_registerMenuCommand('切换本站接管状态', async () => {
            const added = await toggleSiteIntercept();
            showToast(added ? '已禁止接管本站' : '已允许接管本站', { type: 'info', duration: 1500 });
        });
        // 检测本页媒体（视频 + 图片）并接管下载
        GM_registerMenuCommand('检测本页媒体并接管', () => {
            if (isSensitivePage()) {
                showToast('当前为敏感页面（登录/支付/购物等），已禁止媒体嗅探', { type: 'info', duration: 2500 });
                return;
            }
            const found = detectPageMedia();
            if (!found.length) {
                showToast('未检测到可接管的媒体链接', { type: 'info', duration: 1500 });
                return;
            }
            // 优先级：m3u8 > mp4 等视频 > 高分图片
            const target = found.find((u) => /\.m3u8/i.test(u))
                || found.find((u) => isVideoUrl(u))
                || found[0];
            const title = extractMediaTitle();
            const filename = sanitizeFilename(title, target);
            const isImg = isImageUrl(target) && !isVideoUrl(target);
            showToast(`检测到 ${found.length} 个媒体源，正在接管${isImg ? '图片' : '视频'}${title ? '：' + title.slice(0, 18) : ''}`, { type: 'info', duration: 1800 });
            void requestDownload(target, filename);
        });
        // 检测本页媒体并用 VLC 播放（优先视频流）
        GM_registerMenuCommand('检测本页媒体并用 VLC 播放', () => {
            if (isSensitivePage()) {
                showToast('当前为敏感页面（登录/支付/购物等），已禁止媒体嗅探', { type: 'info', duration: 2500 });
                return;
            }
            const found = detectPageMedia();
            // 只取视频类链接，图片交给下载器更合适
            const videos = found.filter(u => isVideoUrl(u) || /\.m3u8/i.test(u));
            if (!videos.length) {
                // 没有视频时，若只有图片也提示
                if (found.length) {
                    showToast('本页只有图片，请用「检测本页媒体并接管」下载', { type: 'info', duration: 2200 });
                } else {
                    showToast('未检测到可播放的视频链接', { type: 'info', duration: 1500 });
                }
                return;
            }
            // 优先 m3u8（流媒体），否则第一个视频
            const target = videos.find(u => /\.m3u8/i.test(u)) || videos[0];
            const title = extractMediaTitle();
            showToast(`正在用 VLC 播放${title ? '：' + title.slice(0, 18) : ''}`, { type: 'info', duration: 1800 });
            openInVLC(target);
        });
        // 提取本页链接并用 YTDLnis 下载（适合 YouTube / Bilibili / TikTok 等页面级链接）
        GM_registerMenuCommand('提取本页链接并用 YTDLnis 下载', () => {
            openInYTDLnis(location.href);
        });
        // 复制本页 / 检测到的视频链接到剪贴板
        GM_registerMenuCommand('复制视频链接', () => {
            copyVideoLink();
        });
        // 悬浮下载按钮开关
        GM_registerMenuCommand('切换悬浮下载按钮', async () => {
            const cur = await GM_getValue(FLOAT_BUTTONS_KEY, true);
            const next = !cur;
            await GM_setValue(FLOAT_BUTTONS_KEY, next);
            if (!next) {
                // 立即移除页面上已存在的悬浮按钮并还原被包裹的图片
                try {
                    document.querySelectorAll('.edgedl-float-btn').forEach(el => el.remove());
                    document.querySelectorAll('.edgedl-media-wrap').forEach(wrap => {
                        const img = wrap.querySelector('img');
                        if (img) {
                            img.dataset.edgedlBtn = '';
                            wrap.replaceWith(img);
                        } else {
                            wrap.remove();
                        }
                    });
                    // 清掉标记，方便再次开启后重新扫描
                    document.querySelectorAll('img[data-edgedl-btn], video[data-edgedl-btn]').forEach(el => {
                        el.dataset.edgedlBtn = '';
                    });
                } catch (e) {
                    console.warn('[EdgeDL] 移除悬浮按钮失败', e);
                }
                showToast('已关闭悬浮下载按钮', { type: 'info', duration: 1800 });
            } else {
                showToast('已开启悬浮下载按钮，请刷新页面生效', { type: 'info', duration: 2200 });
            }
        });
        menuRegistered = true;
    }

    /**
     * 唤起 YTDLnis。
     * 包名 com.deniscerri.ytdl 正确，但 App 不在 Play 商店；
     * 若 Intent 匹配失败，Edge 会误跳商店。因此：
     * - 不再自动静默跳 Intent（避免误进商店）
     * - 优先系统分享 / 可点面板
     * - Intent 使用 type=video/* 以匹配 YTDLnis 的 BROWSABLE VIEW 过滤器
     */
    function openInYTDLnis(pageUrl) {
        if (!pageUrl || !/^https?:\/\//i.test(pageUrl)) {
            showToast('当前页面没有有效链接', { type: 'error', duration: 1500 });
            return;
        }
        const title = extractMediaTitle() || document.title || '视频';
        const intents = buildYTDLnisIntents(pageUrl);
        // 不自动 launch，直接出面板，避免误跳 Play 商店
        showYTDLnisLaunchPanel(pageUrl, title, intents);
    }

    /** 生成尽量能命中 ShareActivity 的 Intent 列表（带 BROWSABLE + mime） */
    function buildYTDLnisIntents(pageUrl) {
        const PKG = 'com.deniscerri.ytdl';
        const COMP = 'com.deniscerri.ytdl/com.deniscerri.ytdl.receiver.ShareActivity';
        const encoded = encodeURIComponent(pageUrl);
        const scheme = pageUrl.startsWith('https') ? 'https' : 'http';
        const path = pageUrl.replace(/^https?:\/\//, '');
        // YTDLnis Manifest：http(s) + video/*|audio/* 带 BROWSABLE，比纯 SEND 更容易被浏览器放行
        return [
            // 关键：VIEW + video/* + package（匹配 BROWSABLE 过滤器，减少误跳商店）
            `intent://${path}#Intent;scheme=${scheme};type=video/*;package=${PKG};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;category=android.intent.category.DEFAULT;end`,
            // VIEW + video/* + 显式 component
            `intent://${path}#Intent;scheme=${scheme};type=video/*;package=${PKG};component=${COMP};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;category=android.intent.category.DEFAULT;end`,
            // 已知域名（YouTube 等）纯 VIEW
            `intent://${path}#Intent;scheme=${scheme};package=${PKG};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`,
            // SEND（官方 Tasker 方式；部分浏览器可能拒收）
            `intent:#Intent;action=android.intent.action.SEND;type=text/plain;package=${PKG};component=${COMP};S.android.intent.extra.TEXT=${encoded};end`,
        ];
    }

    function launchIntentUrl(intentUrl) {
        try {
            const a = document.createElement('a');
            a.href = intentUrl;
            a.rel = 'noopener';
            a.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (e) {
            try { window.location.href = intentUrl; } catch (_) { /* ignore */ }
        }
    }

    /** 页面中央面板：系统分享优先，Intent 为可选项（避免自动跳商店） */
    function showYTDLnisLaunchPanel(pageUrl, title, intents) {
        document.getElementById('edgedl-ytdlnis-panel')?.remove();

        const host = document.createElement('div');
        host.id = 'edgedl-ytdlnis-panel';
        host.style.cssText = 'position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.45);font-family:system-ui,sans-serif;';
        const safeTitle = String(title || '').slice(0, 60).replace(/[<>&]/g, '');
        host.innerHTML = `
            <div style="background:#1e1e1e;color:#fff;border-radius:16px;padding:20px 18px;width:min(320px,90vw);box-shadow:0 12px 40px rgba(0,0,0,.5);">
                <div style="font-size:16px;font-weight:600;margin-bottom:6px;">发送到 YTDLnis</div>
                <div style="font-size:12px;opacity:.75;margin-bottom:14px;word-break:break-all;line-height:1.4;">${safeTitle}${title && title.length > 60 ? '…' : ''}</div>
                <div style="font-size:11px;color:#f0c14b;margin-bottom:12px;line-height:1.45;">提示：YTDLnis 不在 Play 商店。若点「尝试打开」跳到商店，请改用下面「系统分享」或「复制链接」。</div>
                <button id="edgedl-ytdlnis-share" type="button" style="display:block;width:100%;background:#1a73e8;color:#fff;border:none;padding:12px;border-radius:10px;font-size:15px;font-weight:600;margin-bottom:10px;">系统分享 → 选 YTDLnis</button>
                <a id="edgedl-ytdlnis-open" href="${intents[0] || '#'}" style="display:block;text-align:center;background:#333;color:#fff;text-decoration:none;padding:11px;border-radius:10px;font-size:14px;margin-bottom:8px;">尝试直接打开</a>
                <button id="edgedl-ytdlnis-copy" type="button" style="display:block;width:100%;background:transparent;color:#9ecbff;border:1px solid #444;padding:10px;border-radius:10px;font-size:13px;margin-bottom:8px;">复制链接，打开 App 粘贴</button>
                <button id="edgedl-ytdlnis-close" type="button" style="display:block;width:100%;background:transparent;color:#aaa;border:none;padding:8px;font-size:13px;">取消</button>
            </div>`;
        document.body.appendChild(host);

        const close = () => host.remove();
        host.addEventListener('click', (e) => { if (e.target === host) close(); });
        host.querySelector('#edgedl-ytdlnis-close')?.addEventListener('click', close);

        // 主按钮：系统分享（最稳，不会进商店）
        host.querySelector('#edgedl-ytdlnis-share')?.addEventListener('click', async () => {
            if (typeof navigator.share === 'function') {
                try {
                    await navigator.share({
                        title: String(title || '').slice(0, 80),
                        text: pageUrl,
                        url: pageUrl,
                    });
                    close();
                } catch (_) {
                    showToast('已取消分享', { type: 'info', duration: 1200 });
                }
            } else {
                const ok = setClipboardText(pageUrl);
                close();
                showToast(ok ? '已复制链接，请打开 YTDLnis 粘贴' : '复制失败', { type: ok ? 'info' : 'error', duration: 2500 });
            }
        });

        // 次按钮：用户主动点再试 Intent（仍可能被 Edge 送去商店）
        host.querySelector('#edgedl-ytdlnis-open')?.addEventListener('click', () => {
            showToast('正在尝试打开…若跳到商店请改用系统分享', { type: 'info', duration: 2800 });
            (intents || []).slice(1).forEach((u, i) => {
                setTimeout(() => launchIntentUrl(u), 350 * (i + 1));
            });
            setTimeout(close, 600);
        });

        host.querySelector('#edgedl-ytdlnis-copy')?.addEventListener('click', () => {
            const ok = setClipboardText(pageUrl);
            close();
            showToast(ok ? '已复制，打开 YTDLnis 粘贴即可' : '复制失败', { type: ok ? 'info' : 'error', duration: 2500 });
        });
    }

    /** 复制当前页或检测到的最佳媒体链接到剪贴板 */
    function copyVideoLink() {
        try {
            let link = location.href;
            let label = '本页链接';
            if (!isSensitivePage()) {
                const found = detectPageMedia();
                const videos = found.filter(u => isVideoUrl(u) || /\.m3u8/i.test(u));
                if (videos.length) {
                    link = videos.find(u => /\.m3u8/i.test(u)) || videos[0];
                    label = '视频链接';
                } else if (found.length && isImageUrl(found[0])) {
                    // 仅图片时仍复制本页 URL 更实用（YTDLnis 等按页面解析）
                    link = location.href;
                    label = '本页链接';
                }
            }
            if (!link || !/^https?:\/\//i.test(link)) {
                showToast('没有可复制的有效链接', { type: 'error', duration: 1500 });
                return;
            }
            const ok = setClipboardText(link);
            if (ok) {
                const short = link.length > 42 ? link.slice(0, 40) + '…' : link;
                showToast(`已复制${label}：${short}`, { type: 'info', duration: 2200 });
            } else {
                showToast('复制失败，请手动选择地址栏复制', { type: 'error', duration: 2500 });
            }
        } catch (err) {
            console.warn('[EdgeDL] 复制链接失败', err);
            showToast('复制失败', { type: 'error', duration: 2000 });
        }
    }

    function setClipboardText(text) {
        try {
            if (typeof GM_setClipboard === 'function') {
                GM_setClipboard(text, 'text');
                return true;
            }
        } catch (e) { /* fall through */ }
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                navigator.clipboard.writeText(text);
                return true;
            }
        } catch (e) { /* fall through */ }
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;';
            document.body.appendChild(ta);
            ta.select();
            ta.setSelectionRange(0, text.length);
            const ok = document.execCommand('copy');
            ta.remove();
            return !!ok;
        } catch (e) {
            return false;
        }
    }

    function initDeepSeekHandler() {
        if (!location.hostname.includes('download.deepseek.com'))
            return;
        const APK_URL = "https://download.deepseek.com/apk/deepseek.apk";
        const takeover = (e) => {
            if (!e || e.defaultPrevented)
                return;
            e.preventDefault?.();
            e.stopPropagation?.();
            e.stopImmediatePropagation?.();
            requestDownload(APK_URL);
            return false;
        };
        document.addEventListener('click', e => {
            const target = e.target;
            if (target?.closest?.('div')?.textContent?.includes('下载 APK 文件'))
                takeover(e);
        }, true);
    }

    // =====================================================================
    //  悬浮下载按钮（图片 + 短视频）—— 本地修复版
    //  修复：不再对小图标 / favicon / 搜索结果图标做 DOM 包裹，避免页面图标异常
    // =====================================================================
    async function initFloatingMediaButtons() {
        // 用户关闭了悬浮按钮
        try {
            const enabled = await GM_getValue(FLOAT_BUTTONS_KEY, true);
            if (!enabled) {
                console.log('[EdgeDL] 悬浮下载按钮已在设置中关闭');
                return;
            }
        } catch (_) {}

        // 敏感页不注入
        try {
            if (typeof isSensitivePage === 'function' && isSensitivePage()) {
                console.log('[EdgeDL] 敏感页面，跳过悬浮下载按钮');
                return;
            }
        } catch (_) {}

        const host = (location.hostname || '').toLowerCase().replace(/^www\./, '');

        // 搜索引擎结果页：完全不注入悬浮按钮（favicon / 结果图标最容易被破坏）
        const SEARCH_HOST_RE = /(^|\.)(bing\.com|google\.[a-z.]+|baidu\.com|sogou\.com|so\.com|yahoo\.com|duckduckgo\.com|yandex\.[a-z.]+|search\.brave\.com|ecosia\.org)/i;
        if (SEARCH_HOST_RE.test(host)) {
            console.log('[EdgeDL] 搜索引擎页面，跳过悬浮下载按钮（保护网站图标）');
            return;
        }

        // 主流长视频 / 流媒体站：禁止给 <video> 挂悬浮按钮（会破坏播放器 DOM / 抢触摸事件）
        const VIDEO_PLAYER_HOST_RE = /(^|\.)(youtube\.com|youtu\.be|bilibili\.com|b23\.tv|iqiyi\.com|youku\.com|v\.qq\.com|qq\.com|mgtv\.com|sohu\.com|le\.com|pptv\.com|acfun\.cn|netflix\.com|hulu\.com|disneyplus\.com|primevideo\.com|twitch\.tv|vimeo\.com|dailymotion\.com|dai\.ly|niconico\.jp|nicovideo\.jp|ixigua\.com|douyin\.com|kuaishou\.com|haokan\.baidu\.com|y\.qq\.com|music\.163\.com|open\.spotify\.com|pornhub\.com|xvideos\.com|xnxx\.com|missav\.|javbus\.|javdb\.)/i;

        // 短视频 / 社交图文站：允许视频悬浮按钮（仍不改 video DOM 结构）
        const SHORT_VIDEO_HOST_RE = /(^|\.)(tiktok\.com|instagram\.com|facebook\.com|fb\.com|fb\.watch|threads\.(net|com)|x\.com|twitter\.com|reddit\.com|pinterest\.com|pin\.it|t\.me|telegram\.me)/i;

        const allowVideoFloat = SHORT_VIDEO_HOST_RE.test(host) && !VIDEO_PLAYER_HOST_RE.test(host);
        // 长视频站完全不挂 video 按钮；其它站点默认也不挂 video 按钮，仅图片（避免未知播放器冲突）
        const enableVideoFloat = allowVideoFloat;

        const isMobile = (() => {
            const ua = navigator.userAgent || '';
            const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const small = Math.min(screen.width, screen.height) < 820;
            return /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(ua) || (touch && small);
        })();

        // 提高最小尺寸阈值，减少对小图/图标的误伤
        const CFG = {
            minW: isMobile ? 72 : 96,
            minH: isMobile ? 72 : 96,
            size: isMobile ? 38 : 28,
            opacity: isMobile ? 0.9 : 0.82,
        };

        function getBestFromSrcset(srcset) {
            if (!srcset) return null;
            let best = null, maxW = 0;
            srcset.split(',').forEach(part => {
                const [url, desc] = part.trim().split(/\s+/);
                if (!url) return;
                const w = desc && desc.endsWith('w') ? parseInt(desc) : 0;
                if (w > maxW) { maxW = w; best = url; }
                else if (!best) best = url;
            });
            return best;
        }

        function getBestImageUrl(img) {
            const fromSrcset = getBestFromSrcset(img.srcset || img.getAttribute('data-srcset'));
            if (fromSrcset) return fromSrcset;
            const candidates = [
                img.currentSrc, img.src,
                img.getAttribute('data-src'),
                img.getAttribute('data-original'),
                img.getAttribute('data-lazy-src'),
                img.getAttribute('data-url'),
                img.getAttribute('data-large'),
                img.getAttribute('data-origin'),
                img.getAttribute('data-src-large'),
            ];
            for (const c of candidates) {
                if (c && !c.startsWith('data:') && c.length > 10) return c;
            }
            return img.src || null;
        }

        function getBestVideoUrl(video) {
            const sources = video.querySelectorAll('source');
            for (const s of sources) {
                const src = s.src || s.getAttribute('data-src');
                if (src && !src.startsWith('blob:') && !src.startsWith('mediasource:')) return src;
            }
            const candidates = [
                video.currentSrc, video.src,
                video.getAttribute('data-src'),
                video.getAttribute('data-video'),
                video.getAttribute('data-url'),
                video.getAttribute('data-original'),
            ];
            for (const c of candidates) {
                if (c && !c.startsWith('blob:') && !c.startsWith('data:') && !c.startsWith('mediasource:')) return c;
            }
            return null;
        }

        function getElementTitle(el) {
            const candidates = [
                el.getAttribute('title'),
                el.getAttribute('alt'),
                el.getAttribute('aria-label'),
                el.closest('[title]')?.getAttribute('title'),
                el.closest('figure')?.querySelector('figcaption')?.textContent?.trim(),
                el.closest('[data-title]')?.getAttribute('data-title'),
            ];
            for (const c of candidates) {
                if (c && c.trim().length > 1) return c.trim();
            }
            try {
                return (typeof extractMediaTitle === 'function' && extractMediaTitle()) || document.title || '';
            } catch (_) {
                return document.title || '';
            }
        }

        // ===== 核心修复：判断是否为图标 / UI 小图，坚决不包裹 =====
        function isLikelyIconOrUI(img) {
            if (!img || img.tagName !== 'IMG') return true;

            const src = (img.currentSrc || img.src || img.getAttribute('data-src') || img.getAttribute('data-original') || '').toLowerCase();
            const cls = (img.className && typeof img.className === 'string' ? img.className : '').toLowerCase();
            const id = (img.id || '').toLowerCase();
            const alt = (img.alt || '').toLowerCase();
            const title = (img.title || '').toLowerCase();

            // 1. URL / 文件名特征
            if (/favicon|icon[_-]?|logo[_-]?|sprite|emoji|emoticon|avatar.*(?:s\d{2,3}|_\d{2,3})|\/\d{1,3}x\d{1,3}[\/._]|[-_](16|24|32|48|64)x\1|apple-touch-icon|site-icon|brand[_-]?logo/i.test(src)) {
                return true;
            }

            // 2. class / id / alt / title
            if (/icon|logo|favicon|sprite|emoji|avatar|thumb|badge|button|nav|menu|toolbar|ui[_-]/i.test(cls + ' ' + id + ' ' + alt + ' ' + title)) {
                return true;
            }

            // 3. 尺寸（已加载的优先用 natural，其次 client）
            const nw = img.naturalWidth || 0;
            const nh = img.naturalHeight || 0;
            const cw = img.clientWidth || img.width || 0;
            const ch = img.clientHeight || img.height || 0;

            // 自然尺寸明确很小 → 图标
            if (nw > 0 && nh > 0 && (nw < 72 || nh < 72)) return true;
            // 显示尺寸很小
            if (cw > 0 && ch > 0 && (cw < CFG.minW || ch < CFG.minH)) return true;

            // 4. 父级结构（搜索结果、导航、工具栏等）
            try {
                if (img.closest('button, nav, header, footer, [role="toolbar"], [role="menubar"], [role="navigation"], [role="banner"], cite, .b_attribution, .tptt, [class*="favicon"], [class*="site-icon"], [class*="result-icon"], [class*="serp"], [data-testid*="icon"]')) {
                    return true;
                }
                // 父级本身很小
                const p = img.parentElement;
                if (p) {
                    const pw = p.clientWidth || 0;
                    const ph = p.clientHeight || 0;
                    if (pw > 0 && ph > 0 && pw < 80 && ph < 80) return true;
                }
            } catch (_) {}

            return false;
        }

        function shouldSkipVideo(video) {
            if (!enableVideoFloat) return true;
            // 不处理 blob/mediasource（播放器内部流，外链下载器无法直接用）
            const src = video.currentSrc || video.src || '';
            if (src.startsWith('blob:') || src.startsWith('mediasource:')) return true;
            // 已有可下载外链才挂按钮
            if (!getBestVideoUrl(video)) return true;
            // 跳过过小或明显是广告/预览的极小元素
            const w = video.clientWidth || video.videoWidth || 0;
            const h = video.clientHeight || video.videoHeight || 0;
            if (w > 0 && h > 0 && (w < CFG.minW || h < CFG.minH)) return true;
            // 跳过全屏主播放器倾向：占屏幕大部分且有 controls 的长视频
            try {
                const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                if (w >= vw * 0.7 && h >= vh * 0.35) return true;
            } catch (_) {}
            return false;
        }

        function styleBtn(btn, isVideo) {
            const s = btn.style;
            s.setProperty('position', 'absolute', 'important');
            s.setProperty('top', isMobile ? '8px' : '6px', 'important');
            s.setProperty('right', isMobile ? '8px' : '6px', 'important');
            s.setProperty('width', CFG.size + 'px', 'important');
            s.setProperty('height', CFG.size + 'px', 'important');
            s.setProperty('background', isVideo ? 'rgba(220,38,38,0.88)' : 'rgba(0,0,0,0.68)', 'important');
            s.setProperty('color', '#fff', 'important');
            s.setProperty('border-radius', '50%', 'important');
            s.setProperty('display', 'flex', 'important');
            s.setProperty('align-items', 'center', 'important');
            s.setProperty('justify-content', 'center', 'important');
            s.setProperty('cursor', 'pointer', 'important');
            s.setProperty('z-index', '2147483646', 'important');
            s.setProperty('opacity', String(CFG.opacity), 'important');
            s.setProperty('box-shadow', '0 2px 12px rgba(0,0,0,0.45)', 'important');
            s.setProperty('user-select', 'none', 'important');
            s.setProperty('pointer-events', 'auto', 'important');
            s.setProperty('-webkit-tap-highlight-color', 'transparent', 'important');
            s.setProperty('touch-action', 'manipulation', 'important');
            s.setProperty('transition', 'transform 0.15s, opacity 0.15s, background 0.15s', 'important');
        }

        function bindBtnEvents(btn, target, isVideo) {
            const handleDownload = (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation?.();

                let url = isVideo ? getBestVideoUrl(target) : getBestImageUrl(target);
                if (!url) {
                    showToast('未找到可下载地址', { type: 'error', duration: 1800 });
                    return;
                }
                if (!isVideo && typeof upgradeImageUrl === 'function') {
                    try { url = upgradeImageUrl(url) || url; } catch (_) {}
                }
                const title = getElementTitle(target);
                let filename;
                try {
                    const ext = (typeof guessExtension === 'function') ? guessExtension(url) : (isVideo ? 'mp4' : 'jpg');
                    const base = (typeof sanitizeFilename === 'function')
                        ? sanitizeFilename(title, url)
                        : (title || 'media').replace(/[\\/:*?"<>|]/g, '_').slice(0, 80);
                    filename = base.endsWith('.' + ext) ? base : (base + '.' + ext);
                } catch (_) {
                    filename = (isVideo ? 'video_' : 'image_') + Date.now() + (isVideo ? '.mp4' : '.jpg');
                }
                requestDownload(url, filename);
            };

            btn.addEventListener('click', handleDownload, true);

            if (isMobile) {
                btn.addEventListener('touchstart', () => {
                    btn.style.setProperty('transform', 'scale(0.9)', 'important');
                    btn.style.setProperty('opacity', '1', 'important');
                }, { passive: true });
                btn.addEventListener('touchend', () => {
                    btn.style.setProperty('transform', 'scale(1)', 'important');
                    btn.style.setProperty('opacity', String(CFG.opacity), 'important');
                }, { passive: true });
                btn.addEventListener('touchcancel', () => {
                    btn.style.setProperty('transform', 'scale(1)', 'important');
                }, { passive: true });
            } else {
                btn.addEventListener('mouseenter', () => {
                    btn.style.setProperty('opacity', '1', 'important');
                    btn.style.setProperty('transform', 'scale(1.12)', 'important');
                    btn.style.setProperty('background', isVideo ? 'rgba(220,38,38,0.95)' : 'rgba(0,120,255,0.9)', 'important');
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.setProperty('opacity', String(CFG.opacity), 'important');
                    btn.style.setProperty('transform', 'scale(1)', 'important');
                    btn.style.setProperty('background', isVideo ? 'rgba(220,38,38,0.88)' : 'rgba(0,0,0,0.68)', 'important');
                });
            }
        }

        function createBtn(target, isVideo) {
            if (!target || target.dataset.edgedlBtn) return;
            if (target.parentElement?.classList?.contains('edgedl-media-wrap')) {
                target.dataset.edgedlBtn = '1';
                return;
            }

            if (isVideo) {
                if (shouldSkipVideo(target)) {
                    target.dataset.edgedlBtn = 'skip';
                    return;
                }
                // 关键：绝不包裹 <video>，避免破坏播放器布局 / 全屏 / 手势
                target.dataset.edgedlBtn = '1';
                let hostEl = target.parentElement;
                if (!hostEl) return;
                try {
                    const cs = window.getComputedStyle(hostEl);
                    if (cs.position === 'static') {
                        // 仅在父级未定位时给父级加 relative，不移动 video 节点
                        hostEl.style.setProperty('position', 'relative', 'important');
                    }
                } catch (_) {}

                const btn = document.createElement('div');
                btn.className = 'edgedl-float-btn edgedl-float-video';
                btn.title = '下载视频（EdgeDL）';
                const svgSize = isMobile ? 18 : 15;
                btn.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
                styleBtn(btn, true);
                bindBtnEvents(btn, target, true);
                hostEl.appendChild(btn);
                return;
            }

            // ===== 图片：先判断是否图标 / 太小，再决定是否包裹 =====
            // 已经是图标或 UI 元素 → 直接跳过，永不包裹
            if (isLikelyIconOrUI(target)) {
                target.dataset.edgedlBtn = 'skip-icon';
                return;
            }

            // 图片尚未加载完成（natural 尺寸为 0）时，等 load 后再决定，避免误伤
            const nw = target.naturalWidth || 0;
            const nh = target.naturalHeight || 0;
            if (nw === 0 && nh === 0 && !target.complete) {
                target.dataset.edgedlBtn = 'pending';
                const onLoad = () => {
                    // load 后重新走一遍逻辑
                    target.dataset.edgedlBtn = '';
                    createBtn(target, false);
                };
                target.addEventListener('load', onLoad, { once: true });
                // 超时兜底：3 秒后如果还是 0 就放弃
                setTimeout(() => {
                    if (target.dataset.edgedlBtn === 'pending') {
                        target.dataset.edgedlBtn = 'skip-timeout';
                    }
                }, 3000);
                return;
            }

            // 再次用尺寸过滤（防止 isLikelyIconOrUI 漏判）
            if ((nw > 0 && nh > 0 && (nw < CFG.minW || nh < CFG.minH)) ||
                ((target.clientWidth || 0) > 0 && (target.clientHeight || 0) > 0 &&
                 (target.clientWidth < CFG.minW || target.clientHeight < CFG.minH))) {
                target.dataset.edgedlBtn = 'skip-small';
                return;
            }

            // 真正需要悬浮按钮的大图才包裹
            target.dataset.edgedlBtn = '1';
            const wrap = document.createElement('div');
            wrap.className = 'edgedl-media-wrap';
            // 尽量不破坏原有布局：只用 relative + inline-block，去掉 line-height:0
            wrap.style.cssText = 'position:relative!important;display:inline-block!important;max-width:100%!important;vertical-align:middle!important;';
            const parent = target.parentNode;
            if (!parent) return;
            parent.insertBefore(wrap, target);
            wrap.appendChild(target);

            const btn = document.createElement('div');
            btn.className = 'edgedl-float-btn';
            btn.title = '下载图片（EdgeDL）';
            const svgSize = isMobile ? 18 : 15;
            btn.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
            styleBtn(btn, false);
            bindBtnEvents(btn, target, false);
            wrap.appendChild(btn);

            // 二次尺寸检查（万一布局变化导致实际很小）
            const checkSize = () => {
                const w = target.clientWidth || target.naturalWidth || 0;
                const h = target.clientHeight || target.naturalHeight || 0;
                if (w > 0 && h > 0 && (w < CFG.minW || h < CFG.minH)) {
                    try { wrap.replaceWith(target); } catch (_) { wrap.remove(); }
                    target.dataset.edgedlBtn = 'skip-recheck';
                }
            };
            setTimeout(checkSize, 400);
            setTimeout(checkSize, 1500);
        }

        function process(root) {
            (root || document).querySelectorAll('img:not([data-edgedl-btn])').forEach(img => {
                if (!img.src && !img.currentSrc && !img.srcset && !img.getAttribute('data-src')) return;
                // 提前跳过明显 UI 区域
                try {
                    if (img.closest('button, nav, header, footer, [role="toolbar"], [role="menubar"], [role="navigation"]')) return;
                } catch (_) {}
                createBtn(img, false);
            });
            if (enableVideoFloat) {
                (root || document).querySelectorAll('video:not([data-edgedl-btn])').forEach(video => {
                    createBtn(video, true);
                });
            }
        }

        let processTimer = null;
        const scheduleProcess = () => {
            if (processTimer) return;
            processTimer = setTimeout(() => {
                processTimer = null;
                try { process(); } catch (e) { console.warn('[EdgeDL] process error', e); }
            }, 300);
        };

        const start = () => {
            process();
            setTimeout(() => process(), 1000);
            setTimeout(() => process(), 3000);

            const obs = new MutationObserver((mutations) => {
                let need = false;
                for (const m of mutations) {
                    if (m.type === 'childList') {
                        m.addedNodes.forEach(node => {
                            if (node.nodeType !== 1) return;
                            if (node.tagName === 'IMG') createBtn(node, false);
                            else if (enableVideoFloat && node.tagName === 'VIDEO') createBtn(node, true);
                            else need = true;
                        });
                    } else if (m.type === 'attributes') {
                        const t = m.target;
                        if (t.tagName === 'IMG' && !t.dataset.edgedlBtn) createBtn(t, false);
                        else if (enableVideoFloat && t.tagName === 'VIDEO' && !t.dataset.edgedlBtn) createBtn(t, true);
                    }
                }
                if (need) scheduleProcess();
            });
            obs.observe(document.documentElement, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['src', 'srcset', 'data-src', 'data-original']
            });

            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') scheduleProcess();
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', start, { once: true });
        } else {
            if (document.body) start();
            else document.addEventListener('DOMContentLoaded', start, { once: true });
        }

        console.log(`[EdgeDL] 悬浮下载按钮已启用 (${isMobile ? '手机' : '桌面'}; videoFloat=${enableVideoFloat}; host=${host}) [local-icon-fix]`);
    }

    // 初始化下载接管
    function init() {
        attachPageBridgeInterceptor();
        registerMenu();
        initDeepSeekHandler();
        // 悬浮按钮稍晚启动，避免和 document-start 拦截逻辑抢时机
        setTimeout(() => {
            try {
                const p = initFloatingMediaButtons();
                if (p && typeof p.catch === 'function') p.catch(e => console.warn('[EdgeDL] 悬浮按钮初始化失败', e));
            } catch (e) {
                console.warn('[EdgeDL] 悬浮按钮初始化失败', e);
            }
        }, 600);
    }
    init();

})();
