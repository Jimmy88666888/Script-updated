// ==UserScript==
// @name         EdgeDL-PC（电脑版下载接管 + 媒体嗅探）
// @namespace    local.edgedl-pc
// @version      1.1.1-pc
// @updateURL    https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/edge-dl-pc/edge-dl-pc.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/edge-dl-pc/edge-dl-pc.user.js
// @description  让 Windows 上的 Edge/Chrome 把下载任务交给 Mister Download Manager / IDM / aria2，并嗅探页面媒体、图片悬浮下载、调用 yt-dlp 解析页面视频、推送本机播放器，同时回传下载进度。由安卓版 EdgeDL 改写为 PC 版。1.1 起改为低侵入：不改写宿主 API、不重排页面 DOM，视频/音乐站点默认只嗅探不劫持点击。
// @author       Jackson Smith
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      127.0.0.1
// @connect      localhost
// @license      Apache-2.0
// @run-at       document-idle
// @exclude      *://accounts.google.com/*
// @exclude      *://login.microsoftonline.com/*
// @exclude      *://login.live.com/*
// @exclude      *://id.apple.com/*
// @exclude      *://login.taobao.com/*
// @exclude      *://passport.jd.com/*
// @exclude      *://passport.baidu.com/*
// @exclude      *://passport.weibo.com/*
// @exclude      *://login.zhihu.com/*
// @exclude      *://account.xiaomi.com/*
// @exclude      *://*.alipay.com/*
// @exclude      *://*.alipay.net/*
// @exclude      *://*.tenpay.com/*
// @exclude      *://pay.weixin.qq.com/*
// @exclude      *://*.paypal.com/*
// @exclude      *://*.stripe.com/*
// @exclude      *://checkout.stripe.com/*
// @exclude      *://*.unionpay.com/*
// @exclude      *://*.95516.com/*
// @exclude      *://*.icbc.com.cn/*
// @exclude      *://*.ccb.com/*
// @exclude      *://*.boc.cn/*
// @exclude      *://*.abchina.com/*
// @exclude      *://*.cmbchina.com/*
// @exclude      *://*.bankcomm.com/*
// @exclude      *://*.citicbank.com/*
// @exclude      *://*.spdb.com.cn/*
// @exclude      *://*.cmbc.com.cn/*
// @exclude      *://*.cebbank.com/*
// @exclude      *://*.psbc.com/*
// @exclude      *://mail.google.com/*
// @exclude      *://*.gmail.com/*
// @exclude      *://*.outlook.com/*
// @exclude      *://outlook.live.com/*
// @exclude      *://*.mail.163.com/*
// @exclude      *://*.mail.126.com/*
// @exclude      *://*.mail.qq.com/*
// @exclude      *://*.mail.sina.com.cn/*
// @exclude      *://*.gov.cn/*
// @exclude      *://*.feishu.cn/*
// @exclude      *://*.larksuite.com/*
// @exclude      *://*.dingtalk.com/*
// @exclude      *://*.office.com/*
// @exclude      *://*.office365.com/*
// @exclude      *://*.sharepoint.com/*
// @exclude      *://*.onedrive.com/*
// @exclude      *://*.notion.so/*
// @exclude      *://*.yuque.com/*
// @exclude      *://*.microsoft.com/*
// @exclude      *://*.live.com/*
// @exclude      *://*.1password.com/*
// @exclude      *://*.lastpass.com/*
// @exclude      *://*.bitwarden.com/*
// @exclude      *://*.dashlane.com/*
// ==/UserScript==

(function () {
    'use strict';

    /* =====================================================================
     * 0. 常量与配置
     * ===================================================================== */

    const VER = '1.1.0-pc';

    // 本地助手默认地址（可用菜单命令修改）
    const HELPER_KEY = 'edgedlpc-helper-base';
    const DEFAULT_HELPER = 'http://127.0.0.1:47631';
    const TOKEN_KEY = 'edgedlpc-token';

    const DEFAULT_BACKEND_KEY = 'edgedlpc-default-backend';
    const FLOAT_KEY = 'edgedlpc-float-buttons';
    const INTERCEPT_KEY = 'edgedlpc-site-intercept';        // 旧版：站点黑名单数组
    const SITE_MODE_KEY = 'edgedlpc-site-mode';             // 1.1 起：{ host: 'on' | 'off' }
    const AUTO_PANEL_KEY = 'edgedlpc-auto-panel';
    const PAIR_CODE_KEY = 'edgedlpc-pair-code';

    // PC 端可用的下载后端
    const BACKENDS = [
        { key: 'mdm', name: 'Mister Download Manager', short: 'MDM', hint: '弹窗确认，界面同 IDM' },
        { key: 'mdm-cli', name: 'MDM CLI（16 线程直下）', short: 'MDM·快', hint: '不弹窗，静默多线程' },
        { key: 'idm', name: 'Internet Download Manager', short: 'IDM', hint: '交给 IDM 接管' },
        { key: 'aria2', name: 'aria2（本机 RPC）', short: 'aria2', hint: '分片下载，走你的守护器' },
        { key: 'browser', name: '浏览器原生下载', short: 'Edge', hint: '不接管，交还浏览器' },
        { key: 'copy', name: '只复制直链', short: '复制', hint: '写入剪贴板，手动处理' },
    ];

    const ICONS = {
        mdm: svgIcon('#2563eb', '<path d="M12 4v10m0 0l-4-4m4 4l4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M5 18h14" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'),
        'mdm-cli': svgIcon('#1d4ed8', '<path d="M12 4v10m0 0l-4-4m4 4l4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M4 15v3h16v-3" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>'),
        idm: svgIcon('#f97316', '<path d="M7 17V9l5 5 5-5v8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'),
        aria2: svgIcon('#059669', '<circle cx="12" cy="12" r="6.5" stroke="#fff" stroke-width="2" fill="none"/><path d="M12 8v5m0 0l-2.4-2.4M12 13l2.4-2.4" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>'),
        browser: svgIcon('#0891b2', '<path d="M12 5v9m0 0l-3.4-3.4M12 14l3.4-3.4" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M6 18h12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'),
        copy: svgIcon('#64748b', '<rect x="8" y="8" width="10" height="11" rx="2" stroke="#fff" stroke-width="2" fill="none"/><path d="M6 15V6a2 2 0 0 1 2-2h7" stroke="#fff" stroke-width="2" fill="none"/>'),
        video: svgIcon('#dc2626', '<polygon points="9 6 18 12 9 18 9 6" fill="#fff"/>'),
        play: svgIcon('#7c3aed', '<polygon points="8 5 19 12 8 19 8 5" fill="#fff"/>'),
    };

    function svgIcon(bg, inner) {
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="' + bg + '"/>' + inner + '</svg>');
    }

    /* =====================================================================
     * 1. 存储（同步包装，避免到处 await）
     * ===================================================================== */

    function store(key, def) {
        try {
            const v = GM_getValue(key);
            return (v === undefined || v === null) ? def : v;
        } catch (_) { return def; }
    }
    function save(key, val) {
        try { GM_setValue(key, val); } catch (_) { }
    }
    function drop(key) {
        try { GM_deleteValue(key); } catch (_) { }
    }
    function helperBase() {
        return String(store(HELPER_KEY, DEFAULT_HELPER)).replace(/\/+$/, '');
    }

    /* =====================================================================
     * 2. 本地助手客户端
     * ===================================================================== */

    let token = store(TOKEN_KEY, '');
    let handshakeTried = false;
    let needsPair = false;
    let helperDownNoticeAt = 0;

    function rawXhr(method, path, body, headers) {
        return new Promise((resolve, reject) => {
            if (typeof GM_xmlhttpRequest !== 'function') {
                return reject(new Error('NO_GM_XHR'));
            }
            GM_xmlhttpRequest({
                method,
                url: helperBase() + path,
                headers: headers || {},
                data: body ? JSON.stringify(body) : undefined,
                timeout: 20000,
                onload: (r) => {
                    let json = null;
                    try { json = JSON.parse(r.responseText || 'null'); } catch (_) { }
                    resolve({ status: r.status, json, text: r.responseText || '' });
                },
                onerror: () => reject(new Error('HELPER_DOWN')),
                ontimeout: () => reject(new Error('HELPER_TIMEOUT')),
            });
        });
    }

    async function handshake(force, interactive) {
        if (token && !force) return true;
        if (handshakeTried && !force) return false;
        handshakeTried = true;
        try {
            const r = await rawXhr('GET', '/handshake');
            if (r.status === 200 && r.json && r.json.token) {
                token = r.json.token;
                save(TOKEN_KEY, token);
                needsPair = false;
                return true;
            }
            if (r.status === 403 && r.json && r.json.pair_required) {
                log('来源未受信，需要配对码');
                needsPair = true;
                // 页面加载时的静默预热不打扰用户；真正点下载时才询问
                if (!interactive) return false;
                return await pairWithCode();
            }
            log('握手被拒: ' + r.status + (r.text ? ' ' + r.text.slice(0, 120) : ''));
            return false;
        } catch (e) {
            log('助手未响应: ' + e.message);
            return false;
        }
    }

    // 站点 Origin 不在助手白名单时，用一次性配对码完成绑定
    async function pairWithCode(code) {
        try {
            const c = code || prompt(
                '本地助手不信任当前页面来源，需要输入 6 位配对码。\n\n' +
                '取得方式（二选一）：\n' +
                '  1. 双击运行「查看助手信息.bat」，抄写里面的配对码\n' +
                '  2. 打开文件 %LOCALAPPDATA%\\EdgeDL-PC\\pairing-code.txt 第一行',
                store(PAIR_CODE_KEY, ''));
            if (!c) return false;
            const r = await rawXhr('POST', '/pair', { code: String(c).trim() },
                { 'Content-Type': 'application/json' });
            if (r.status === 200 && r.json && r.json.token) {
                token = r.json.token;
                save(TOKEN_KEY, token);
                save(PAIR_CODE_KEY, String(c).trim());
                toast('配对成功，本站已可接管下载', 'ok', 2400);
                return true;
            }
            toast('配对失败：' + ((r.json && r.json.error) || ('HTTP ' + r.status)), 'error', 4000);
            return false;
        } catch (e) {
            failNotice(e);
            return false;
        }
    }

    async function api(path, body) {
        // 用户已经在操作了，此时可以弹出配对询问
        if (!(await handshake(false, path !== '/jobs'))) {
            if (needsPair && !(await pairWithCode())) {
                throw new Error('助手拒绝了连接，请用菜单「与本地助手配对 / 重连」');
            }
            if (!token) throw new Error('助手未启动，见菜单「本地助手状态 / 排错」');
        }
        let r = await rawXhr('POST', path, body, { 'Content-Type': 'application/json', 'X-EdgeDL-Token': token });
        if (r.status === 401) {              // 助手重启后令牌变了，重握一次
            token = '';
            save(TOKEN_KEY, '');
            if (await handshake(true)) {
                r = await rawXhr('POST', path, body, { 'Content-Type': 'application/json', 'X-EdgeDL-Token': token });
            }
        }
        if (r.status >= 400 || !r.json) {
            throw new Error((r.json && r.json.error) || ('助手返回 ' + r.status));
        }
        return r.json;
    }

    async function helperStatus() {
        try {
            const hdr = token ? { 'X-EdgeDL-Token': token } : {};
            const r = await rawXhr('GET', '/health', null, hdr);
            return r.json || null;
        } catch (_) {
            return null;
        }
    }

    function log(msg) {
        try { console.log('[EdgeDL-PC] ' + msg); } catch (_) { }
    }

    /* =====================================================================
     * 3. 标题提取 / 文件名清洗
     * ===================================================================== */

    function getMetaContent(selectors) {
        for (const sel of selectors) {
            let el = null;
            try { el = document.querySelector(sel); } catch (_) { continue; }
            if (el) {
                const v = (el.getAttribute('content') || el.textContent || '').trim();
                if (v) return v;
            }
        }
        return '';
    }

    const PLATFORM = '(?:X|Twitter|Facebook|Instagram|TikTok|YouTube|Bilibili|哔哩哔哩|抖音|快手|微博|小红书|Reddit|Telegram)';

    function cleanTitle(raw) {
        if (!raw) return '';
        let t = raw.replace(/\s+/g, ' ').replace(/[\u0000-\u001F\u007F]/g, '').trim();
        // 去掉常见平台后缀（三种分隔写法都要覆盖，避免漏剥）
        t = t
            .replace(new RegExp('\\s*[|/·•]\\s*' + PLATFORM + '\\s*.*$', 'i'), '')
            .replace(new RegExp('\\s*[-–—]\\s*' + PLATFORM + '\\s*.*$', 'i'), '')
            .replace(new RegExp('\\s+on\\s+' + PLATFORM + '\\s*.*$', 'i'), '')
            .replace(new RegExp('\\s*[-–—|]\\s*' + PLATFORM + '$', 'i'), '')
            .replace(/[\s\-–—|·•]+$/, '')
            .trim();
        return t;
    }

    function hostIs(re) {
        try { return re.test((location.hostname || '').toLowerCase()); } catch (_) { return false; }
    }

    function q(sel, root) {
        try { return (root || document).querySelector(sel); } catch (_) { return null; }
    }

    function extractMediaTitle() {
        if (hostIs(/(^|\.)(x\.com|twitter\.com)$/)) {
            const tw = q('[data-testid="tweetText"]') || q('article [lang]');
            const txt = tw && tw.textContent ? tw.textContent.trim() : '';
            if (txt && txt.length > 3) return cleanTitle(txt.slice(0, 120));
            const og = getMetaContent(['meta[property="og:title"]', 'meta[name="twitter:title"]']);
            if (og) return cleanTitle(og);
        }
        if (hostIs(/instagram\.com/) || hostIs(/facebook\.com|fb\.watch|fb\.com/)) {
            const og = getMetaContent(['meta[property="og:title"]', 'meta[property="og:description"]']);
            if (og) return cleanTitle(og);
            const h = q('h1');
            if (h && h.textContent.trim()) return cleanTitle(h.textContent.trim().slice(0, 120));
        }
        if (hostIs(/tiktok\.com|douyin\.com/)) {
            const og = getMetaContent(['meta[property="og:title"]', 'meta[property="og:description"]', 'meta[name="description"]']);
            if (og) return cleanTitle(og);
            const d = q('[data-e2e="browse-video-desc"]');
            if (d && d.textContent.trim()) return cleanTitle(d.textContent.trim().slice(0, 120));
        }
        if (hostIs(/bilibili\.com|b23\.tv/)) {
            const t = q('.video-title, h1.video-title, [class*="video-title"]');
            if (t && t.textContent.trim()) return cleanTitle(t.textContent.trim().slice(0, 100));
        }
        const general = getMetaContent([
            'meta[property="og:title"]',
            'meta[name="twitter:title"]',
            'meta[property="og:description"]',
            'meta[name="description"]',
        ]);
        if (general) return cleanTitle(general);

        const docTitle = (document.title || '').trim();
        if (docTitle && !/^facebook$|^instagram$|^tiktok$|^x$|^twitter$|^bilibili$/i.test(docTitle)) {
            return cleanTitle(docTitle);
        }
        return '';
    }

    function guessExtension(url) {
        try {
            const path = new URL(url).pathname.toLowerCase();
            let m = path.match(/\.(m3u8|mp4|webm|mkv|mov|flv|m4v|mp3|m4a|aac|opus|flac|zip|rar|7z|pdf|epub|apk|exe|iso|png|jpe?g|gif|webp|avif|svg|docx?|xlsx?|pptx?)(?:$)/i);
            if (m) {
                const e = m[1];
                if (e === 'm3u8') return 'mp4';
                return e === 'jpeg' ? 'jpg' : e;
            }
            const u = new URL(url);
            const fmt = (u.searchParams.get('format') || u.searchParams.get('fm') || '').toLowerCase();
            if (/^(jpe?g|png|webp|gif)$/.test(fmt)) return fmt === 'jpeg' ? 'jpg' : fmt;
        } catch (_) { }
        if (/image|photo|pic|img|cdninstagram|twimg|fbcdn|tiktokcdn|sinaimg|bcyimg/i.test(url)) return 'jpg';
        return 'bin';
    }

    function sanitizeFilename(title, url, fallbackExt) {
        let name = (title || '').trim();
        if (!name) {
            try {
                const base = new URL(url).pathname.split('/').filter(Boolean).pop() || '';
                name = decodeURIComponent(base).replace(/\.[a-z0-9]{2,5}$/i, '') || 'media';
            } catch (_) { name = 'media'; }
        }
        name = name.replace(/[\\/:*?"<>|\u0000-\u001F]/g, '_').replace(/\s+/g, ' ').trim().slice(0, 100);
        if (!name) name = 'media';
        let ext = guessExtension(url);
        if (ext === 'bin' && fallbackExt) ext = fallbackExt;
        try {
            if (!new RegExp('\\.' + ext + '$', 'i').test(name)) name += '.' + ext;
        } catch (_) { }
        return name;
    }

    /* =====================================================================
     * 4. 下载链接判定
     *    1.1 收紧：只认"文件"与"明确下载语义"，不再把 .js/.css/.json
     *    等资源、以及 ?file= 这类通用参数当成下载，避免误伤播放器。
     * ===================================================================== */

    const FILE_EXTENSIONS = [
        // 视频 / 音频
        '.mp4', '.mkv', '.avi', '.mov', '.flv', '.wmv', '.webm', '.m4v', '.3gp', '.mpg', '.mpeg', '.vob', '.mts', '.m2ts',
        '.mp3', '.flac', '.wav', '.ogg', '.m4a', '.aac', '.wma', '.ape', '.opus', '.aiff', '.aif', '.au', '.ac3', '.wv', '.mid', '.midi', '.mka',
        // 图片
        '.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff', '.tif', '.heic', '.heif', '.avif', '.jfif', '.psd',
        // 文档
        '.pdf', '.epub', '.mobi', '.azw3', '.djvu', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.srt', '.vtt',
        // 压缩包 / 镜像 / 安装包
        '.zip', '.rar', '.7z', '.tar', '.gz', '.tgz', '.bz2', '.xz', '.iso', '.cab', '.jar',
        '.apk', '.apks', '.xapk', '.apkm', '.ipa', '.obb', '.aab',
        '.exe', '.msi', '.dmg', '.torrent', '.bin',
    ];

    // 明确带"下载"语义的 URL 特征；不再收录 ?file= / /file/ 这类通用参数
    const DOWNLOAD_KEYWORDS = [
        '/down/', '/download/', '/downloads/', '/dl/', '/fetch/',
        '/attach/', '/attachment/', '/releases/download/', '/getfile',
        'download?', '&download=', '?download=', '?dl=',
        '?act=download', '&act=download', '?action=download', '&action=download',
        '?mode=download', '?down=', '&down=', 'force_download',
        'response-content-disposition=', 'content-disposition=attachment',
    ];

    const EXCLUDE_PATHS = /\/(login|reg(ister)?|sign(in|up|out)|logout|account|user|blob|src|tree)(?:[\/?#]|$)/i;

    const SENSITIVE_HOST_RE = new RegExp([
        'paypal\\.com', 'stripe\\.com', 'alipay\\.com', 'alipay\\.net', 'tenpay\\.com', 'weixin\\.qq\\.com', 'wx\\.tenpay\\.com',
        'pay\\.google\\.com', 'payments\\.google', 'unionpay\\.com', 'chinapay\\.com', 'yeepay\\.com', '99bill\\.com',
        'icbc\\.com', 'ccb\\.com', 'boc\\.cn', 'abchina\\.com', 'bankcomm\\.com', 'cmbchina\\.com', 'spdb\\.com',
        'citibank', 'hsbc\\.', 'chase\\.com', 'bankofamerica\\.com', 'wellsfargo\\.com',
        'taobao\\.com', 'tmall\\.com', 'jd\\.com', 'amazon\\.', 'aliexpress\\.com', 'ebay\\.', 'pinduoduo\\.com',
        'suning\\.com', 'vip\\.com', 'kaola\\.com', 'shopify\\.com', 'checkout\\.',
        'accounts\\.google\\.com', 'login\\.microsoftonline\\.com', 'login\\.live\\.com', 'id\\.apple\\.com',
        'auth0\\.com', 'okta\\.com', 'sso\\.', 'passport\\.', 'account\\.', 'signin\\.', 'signup\\.',
        'gov\\.cn', 'irs\\.gov', 'ssa\\.gov',
    ].join('|'), 'i');

    const SENSITIVE_PATH_RE = /\/(login|log-in|signin|sign-in|signup|sign-up|register|regist|logout|signout|auth|oauth|sso|passport|account|accounts|checkout|cart|payment|pay|billing|wallet|secure|verify|password|passwd|forgot|2fa|mfa|otp)(?:\/|$|\?|#)/i;

    const REDIRECT_DOWNLOAD_PAGES = [
        /\/zlkdatasys\/mct\/(?:d\/[^/?#]+|proj_\d+\/download)\.shtml(?:[?#].*)?$/i,
        /\/downm\/\d+(?:[?#].*)?$/i,
        /\/apps\/\d+\/binding(?:[?#].*)?$/i,
    ];

    function isSensitivePage() {
        try {
            const host = (location.hostname || '').toLowerCase();
            const path = (location.pathname || '') + (location.search || '');
            if (SENSITIVE_HOST_RE.test(host)) return true;
            if (SENSITIVE_PATH_RE.test(path)) return true;
            const title = (document.title || '').toLowerCase();
            if (/登录|登陆|注册|支付|付款|结账|收银台|checkout|sign\s*in|log\s*in|payment|password/i.test(title)) {
                if (SENSITIVE_PATH_RE.test(path) || path.length < 3) return true;
            }
            return false;
        } catch (_) { return false; }
    }

    function isDownloadLink(url) {
        if (!url || !/^https?:\/\//i.test(url)) return false;
        if (url.includes('sourceforge.net/projects/') && url.includes('/files/')) return false;
        const lower = url.toLowerCase();
        if (EXCLUDE_PATHS.test(lower) || SENSITIVE_PATH_RE.test(lower)) return false;
        try { if (SENSITIVE_HOST_RE.test(new URL(url).hostname)) return false; } catch (_) { }
        // 排除 HLS/DASH 分片，避免打断播放器
        if (/\.(m4s|ts)(?:$|[?#])/i.test(lower) || /[?&](?:byterange|range|segment|sq)=/i.test(lower)) return false;
        if (/\/data\/data\/[^?#]*$/i.test(lower)) return false;
        if (REDIRECT_DOWNLOAD_PAGES.some(p => p.test(lower))) return true;
        try {
            const path = new URL(url).pathname.toLowerCase();
            if (FILE_EXTENSIONS.some(ext => path.endsWith(ext))) return true;
        } catch (_) {
            const path = lower.split('?')[0].split('#')[0];
            if (FILE_EXTENSIONS.some(ext => path.endsWith(ext))) return true;
        }
        return DOWNLOAD_KEYWORDS.some(kw => lower.includes(kw));
    }

    // 媒体文件本身（点开通常是"播放/查看"，不是下载）
    const MEDIA_FILE_RE = /\.(?:m3u8|mpd|mp4|flv|m4v|webm|mov|mkv|avi|mp3|m4a|aac|flac|wav|ogg|opus)(?:$|[?#])/i;
    function isMediaFileUrl(url) { return MEDIA_FILE_RE.test(String(url || '').toLowerCase()); }

    // 视频 / 音乐 / 播放器站点：默认只嗅探，不劫持点击
    const MEDIA_HOST_RE = /(^|\.)(youtube\.com|youtu\.be|ytimg\.com|bilibili\.com|b23\.tv|acfun\.cn|iqiyi\.com|youku\.com|v\.qq\.com|y\.qq\.com|mgtv\.com|sohu\.com|tv\.sohu\.com|le\.com|miguvideo\.com|pptv\.com|1905\.com|netflix\.com|twitch\.tv|vimeo\.com|dailymotion\.com|nicovideo\.jp|disneyplus\.com|primevideo\.com|hbomax\.com|max\.com|viki\.com|crunchyroll\.com|wetv\.vip|viu\.com|douyin\.com|iesdouyin\.com|kuaishou\.com|huya\.com|douyu\.com|spotify\.com|music\.163\.com|kugou\.com|kuwo\.cn|pornhub\.com|xvideos\.com|xhamster\.com)$/i;

    function normalizeUrl(input) {
        if (!input) return '';
        try {
            const u = new URL(String(input), location.href).href;
            return u.startsWith('http') ? u : '';
        } catch (_) { return ''; }
    }

    function isInvalidNav(url) {
        const v = String(url || '').trim().toLowerCase();
        return !v || v === '#' || v === '##' || v.startsWith('javascript:') || v.startsWith('blob:') || v.startsWith('data:');
    }

    /* =====================================================================
     * 5. 站点接管策略
     * ===================================================================== */

    let siteModesCache = null;
    let legacyBlockCache = null;

    function siteModes() {
        if (!siteModesCache) {
            const raw = store(SITE_MODE_KEY, {});
            siteModesCache = (raw && typeof raw === 'object') ? Object.assign({}, raw) : {};
        }
        return siteModesCache;
    }
    function legacyBlockList() {
        if (!legacyBlockCache) {
            const raw = store(INTERCEPT_KEY, []);
            legacyBlockCache = Array.isArray(raw) ? raw.map(x => String(x).toLowerCase()) : [];
        }
        return legacyBlockCache;
    }
    function controlledHost() {
        try { return String((window.top && window.top.location.hostname) || location.hostname).toLowerCase(); }
        catch (_) { return String(location.hostname || '').toLowerCase(); }
    }
    // 本站是否接管点击下载
    function siteInterceptOn() {
        try {
            const host = controlledHost();
            const m = siteModes()[host];
            if (m === 'on') return true;
            if (m === 'off') return false;
            if (legacyBlockList().includes(host)) return false;
            if (MEDIA_HOST_RE.test(host)) return false;   // 媒体站点默认放行，只做主动嗅探
            return true;
        } catch (_) { return true; }
    }
    function toggleSiteIntercept() {
        const host = controlledHost();
        const next = !siteInterceptOn();
        siteModes()[host] = next ? 'on' : 'off';
        save(SITE_MODE_KEY, siteModes());
        return next;
    }

    /* =====================================================================
     * 6. UI：Toast / 选择面板 / 进度面板
     * ===================================================================== */

    let toastEl = null;
    let styleInjected = false;

    function injectStyle() {
        if (styleInjected) return;
        styleInjected = true;
        const s = document.createElement('style');
        s.id = 'edgedlpc-style';
        s.textContent = [
            '.edgedlpc-toast{position:fixed;top:16px;right:16px;z-index:2147483647;pointer-events:none;font:500 13px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,"Microsoft YaHei",sans-serif;padding:9px 14px;border-radius:10px;max-width:min(420px,80vw);white-space:normal;opacity:0;transform:translateY(-8px);transition:opacity .2s ease,transform .2s ease;backdrop-filter:blur(10px);box-shadow:0 6px 20px rgba(0,0,0,.28);background:rgba(28,28,30,.94);color:#fff;}',
            '.edgedlpc-toast.show{opacity:1;transform:translateY(0)}',
            '.edgedlpc-toast[data-type="error"]{background:rgba(153,27,27,.95)}',
            '.edgedlpc-toast[data-type="ok"]{background:rgba(6,95,70,.95)}',
            '.edgedlpc-mask{position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.42);backdrop-filter:blur(14px);font-family:system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif;animation:edpc-fade .16s ease both;}',
            '.edgedlpc-card{background:#fff;color:#222;border-radius:16px;padding:18px;width:min(430px,92vw);box-shadow:0 18px 48px rgba(0,0,0,.35);animation:edpc-up .2s cubic-bezier(0,0,.2,1) both;}',
            '@media (prefers-color-scheme:dark){.edgedlpc-card{background:#232324;color:#f2f2f2;}.edgedlpc-opt{background:#313133!important;color:#f2f2f2!important;}.edgedlpc-opt:hover{background:#3d3d40!important;}.edgedlpc-card h3{color:#fafafa!important;}.edgedlpc-sub{color:#a1a1a6!important;}}',
            '.edgedlpc-card h3{margin:0 0 4px;font-size:16px;font-weight:600;}',
            '.edgedlpc-sub{font-size:12px;color:#767676;margin-bottom:14px;word-break:break-all;line-height:1.5;}',
            '.edgedlpc-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;}',
            '.edgedlpc-opt{display:flex;align-items:center;gap:9px;padding:10px 11px;border:1.5px solid transparent;border-radius:11px;background:#f2f2f4;font:500 13.5px/1.2 inherit;cursor:pointer;text-align:left;}',
            '.edgedlpc-opt:hover{background:#e6e6ea;}',
            '.edgedlpc-opt.sel{border-color:#2563eb;background:rgba(37,99,235,.10);}',
            '.edgedlpc-opt img{width:22px;height:22px;flex:none;border-radius:5px;}',
            '.edgedlpc-opt b{display:block;font-weight:600;}',
            '.edgedlpc-opt i{display:block;font-style:normal;font-size:11px;opacity:.66;margin-top:2px;}',
            '.edgedlpc-off{opacity:.4;cursor:not-allowed!important;}',
            '.edgedlpc-foot{display:flex;align-items:center;justify-content:space-between;margin-top:14px;font-size:12.5px;}',
            '.edgedlpc-cancel{background:none;border:none;color:#8a8a8e;font:inherit;cursor:pointer;padding:6px 4px;}',
            '.edgedlpc-ver{position:absolute;top:12px;right:14px;font:600 9.5px ui-monospace,Consolas,monospace;color:#9a9a9e;}',
            '@keyframes edpc-fade{from{opacity:0}to{opacity:1}}',
            '@keyframes edpc-up{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}',
            '.edgedlpc-float{position:fixed;width:26px;height:26px;border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:2147483640;box-shadow:0 2px 10px rgba(0,0,0,.45);pointer-events:auto;-webkit-user-select:none;user-select:none;}',
            '#edgedlpc-panel{position:fixed;right:16px;bottom:16px;z-index:2147483645;width:322px;max-height:52vh;overflow:auto;background:rgba(24,24,26,.95);color:#fff;border-radius:14px;padding:11px 12px 8px;font:12.5px/1.5 system-ui,-apple-system,"Microsoft YaHei",sans-serif;box-shadow:0 12px 34px rgba(0,0,0,.4);backdrop-filter:blur(12px);}',
            '#edgedlpc-panel h4{margin:0 0 8px;font-size:12.5px;font-weight:600;display:flex;justify-content:space-between;align-items:center;}',
            '#edgedlpc-panel h4 button{background:none;border:none;color:#9a9aa0;cursor:pointer;font-size:15px;line-height:1;padding:0 2px;}',
            '.edpc-job{margin-bottom:9px;}',
            '.edpc-job .row{display:flex;justify-content:space-between;gap:8px;font-size:11.5px;opacity:.9;}',
            '.edpc-job .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:210px;}',
            '.edpc-job .bar{height:4px;border-radius:3px;background:rgba(255,255,255,.16);margin-top:4px;overflow:hidden;}',
            '.edpc-job .fill{height:100%;background:linear-gradient(90deg,#22c55e,#3b82f6);transition:width .3s;}',
            '.edpc-job.error .fill{background:#ef4444;}',
            '.edpc-job.done .fill{background:#22c55e;}',
            '.edpc-empty{opacity:.6;font-size:12px;padding:6px 0 2px;}',
        ].join('');
        (document.head || document.documentElement).appendChild(s);
    }

    function toast(msg, type, ms) {
        try {
            injectStyle();
            if (toastEl) toastEl.remove();
            const el = document.createElement('div');
            el.className = 'edgedlpc-toast';
            el.dataset.type = type || 'info';
            el.textContent = msg;
            (document.body || document.documentElement).appendChild(el);
            toastEl = el;
            requestAnimationFrame(() => el.classList.add('show'));
            setTimeout(() => {
                el.classList.remove('show');
                el.addEventListener('transitionend', () => el.remove(), { once: true });
                setTimeout(() => el.remove(), 400);
            }, ms || 1600);
        } catch (_) { }
    }

    // ---- 后端选择面板 ----
    let backendCache = null;

    async function pickBackend(pageUrl, force) {
        if (!force) {
            const def = store(DEFAULT_BACKEND_KEY, '');
            if (def) return def;
        }
        if (!backendCache) backendCache = await handshake();
        const health = await helperStatus();
        const avail = (health && health.backends) || {};
        return new Promise((resolve) => {
            injectStyle();
            const host = document.createElement('div');
            host.className = 'edgedlpc-mask';
            const def = store(DEFAULT_BACKEND_KEY, '');
            const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
            host.innerHTML =
                '<div class="edgedlpc-card" style="position:relative">' +
                '<span class="edgedlpc-ver">EdgeDL-PC v' + VER + '</span>' +
                '<h3>选择下载方式</h3>' +
                '<div class="edgedlpc-sub">' + esc((pageUrl || '').slice(0, 130)) + '</div>' +
                '<div class="edgedlpc-grid">' +
                BACKENDS.map(b => {
                    const on = (b.key === 'browser' || b.key === 'copy') ? true : !!avail[b.key.replace('-cli', '')] || (b.key === 'mdm-cli' && !!avail.mdm_cli);
                    return '<button class="edgedlpc-opt' + (on ? '' : ' edgedlpc-off') + (def === b.key ? ' sel' : '') +
                        '" data-k="' + b.key + '" ' + (on ? '' : 'disabled') + ' title="' + esc(on ? b.hint : '未检测到该程序') + '">' +
                        '<img src="' + (ICONS[b.key === 'mdm-cli' ? 'mdm-cli' : b.key] || ICONS.browser) + '"><span><b>' + esc(b.short) + '</b><i>' + esc(on ? b.hint : '未检测到') + '</i></span></button>';
                }).join('') +
                '</div>' +
                '<div class="edgedlpc-foot">' +
                '<label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="edpc-def"' + (def ? ' checked' : '') + '>记住为默认</label>' +
                '<button class="edgedlpc-cancel">取消（Esc）</button>' +
                '</div></div>';
            document.documentElement.appendChild(host);

            const onKey = (e) => { if (e.key === 'Escape') done(null); };
            const done = (k) => {
                document.removeEventListener('keydown', onKey, true);
                if (host.isConnected) host.remove();
                resolve(k);
            };
            document.addEventListener('keydown', onKey, true);
            host.addEventListener('click', (e) => { if (e.target === host) done(null); });
            host.querySelector('.edgedlpc-cancel').addEventListener('click', () => done(null));
            host.querySelectorAll('.edgedlpc-opt').forEach(btn => {
                btn.addEventListener('click', () => {
                    const k = btn.dataset.k;
                    if (host.querySelector('#edpc-def').checked) save(DEFAULT_BACKEND_KEY, k);
                    done(k);
                });
            });
        });
    }

    // ---- 进度面板 ----
    let panelEl = null;
    let panelTimer = null;

    function pctText(j) {
        if (j.percent != null) return Math.round(j.percent) + '%';
        return { downloading: '下载中', running: '解析中', queued: '排队', paused: '已暂停', done: '完成', error: '失败' }[j.state] || j.state;
    }

    function speedText(n) {
        if (!n) return '';
        const u = ['B/s', 'KiB/s', 'MiB/s', 'GiB/s'];
        let i = 0;
        while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
        return n.toFixed(i ? 1 : 0) + ' ' + u[i];
    }

    async function refreshPanel() {
        if (!panelEl) return;
        let data;
        try { data = await api('/jobs', {}); }
        catch (e) {
            const b = panelEl.querySelector('.edgedlpc-body');
            if (b) b.innerHTML = '<div class="edpc-empty">' + String(e.message || '读取失败').replace(/[&<>]/g, '') + '</div>';
            return;
        }
        const list = [].concat(data.local || [], data.aria2 || []);
        const body = panelEl.querySelector('.edgedlpc-body');
        if (!body) return;
        if (!list.length) {
            body.innerHTML = '<div class="edpc-empty">当前没有进行中的任务</div>';
            return;
        }
        body.innerHTML = list.slice(0, 8).map(j => {
            const p = Math.max(0, Math.min(100, j.percent == null ? (j.state === 'done' ? 100 : 0) : j.percent));
            const right = j.speed ? speedText(j.speed) : pctText(j);
            const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
            return '<div class="edpc-job ' + esc(j.state) + '">' +
                '<div class="row"><span class="name" title="' + esc(j.label) + '">' + esc(j.label) + '</span><span>' + esc(right) + '</span></div>' +
                '<div class="bar"><div class="fill" style="width:' + p + '%"></div></div>' +
                (j.message ? '<div class="row"><span style="opacity:.6">' + esc(String(j.message).slice(0, 44)) + '</span><span></span></div>' : '') +
                '</div>';
        }).join('');
    }

    function openPanel() {
        injectStyle();
        if (panelEl) { refreshPanel(); return; }
        panelEl = document.createElement('div');
        panelEl.id = 'edgedlpc-panel';
        panelEl.innerHTML = '<h4><span>下载任务</span><button title="关闭">×</button></h4><div class="edgedlpc-body"></div>';
        (document.body || document.documentElement).appendChild(panelEl);
        panelEl.querySelector('button').addEventListener('click', closePanel);
        refreshPanel();
        panelTimer = setInterval(refreshPanel, 2000);
    }
    function closePanel() {
        if (panelTimer) clearInterval(panelTimer);
        panelTimer = null;
        if (panelEl) panelEl.remove();
        panelEl = null;
    }

    /* =====================================================================
     * 7. 动作：下载 / 视频解析 / 播放 / 复制
     * ===================================================================== */

    let suppressUntil = 0;

    async function sendDownload(url, filename, forcePick) {
        const backend = forcePick ? null : store(DEFAULT_BACKEND_KEY, '');
        const use = backend || await pickBackend(url, false);
        if (!use) { toast('已取消，未交给任何下载器', 'info', 1400); return; }
        if (use === 'browser') {
            toast('已交还浏览器原生下载');
            suppressUntil = Date.now() + 2500;
            setTimeout(() => { try { location.href = url; } catch (_) { } }, 0);
            return;
        }
        if (use === 'copy') {
            copyText(url, '直链');
            return;
        }
        try {
            const r = await api('/download', {
                url, filename: filename || '', referer: location.href, pageUrl: location.href, backend: use,
            });
            toast(r.message || '已交给 ' + use, 'ok', 1500);
            if (store(AUTO_PANEL_KEY, true)) openPanel();
        } catch (e) {
            failNotice(e);
        }
    }

    function failNotice(e) {
        const msg = String(e && e.message || e || '');
        if (/助手未启动|HELPER_DOWN|HELPER_TIMEOUT|NO_GM_XHR|Failed to fetch/i.test(msg)) {
            const now = Date.now();
            if (now - helperDownNoticeAt < 8000) return;
            helperDownNoticeAt = now;
            toast('本地助手没在运行。开始菜单里双击「启动本地助手.bat」，或按脚本菜单里的说明启动。', 'error', 6000);
        } else {
            toast('失败：' + msg.slice(0, 140), 'error', 4000);
        }
    }

    async function detectVideo(quality) {
        if (isSensitivePage()) {
            toast('当前是登录/支付等敏感页面，已禁止媒体嗅探', 'error', 3000);
            return;
        }
        const page = location.href;
        try {
            const r = await api('/video', { url: page, title: extractMediaTitle() || document.title, quality: quality || '', dir: '' });
            toast(r.message || '已开始解析', 'ok', 2000);
            if (store(AUTO_PANEL_KEY, true)) openPanel();
        } catch (e) { failNotice(e); }
    }

    async function playMedia(url, title, player) {
        if (!url) { toast('没有可用的媒体地址', 'error'); return; }
        try {
            const r = await api('/play', { url, title: title || extractMediaTitle(), referer: location.href, pageUrl: location.href, player: player || '' });
            toast(r.message || '已打开播放器', 'ok', 1800);
        } catch (e) { failNotice(e); }
    }

    function copyText(text, label) {
        const ok = setClipboard(text);
        toast(ok ? ('已复制' + (label || '') + '：' + (text.length > 46 ? text.slice(0, 44) + '…' : text)) : '复制失败', ok ? 'ok' : 'error', 2400);
        return ok;
    }

    function setClipboard(text) {
        try { if (typeof GM_setClipboard === 'function') { GM_setClipboard(text, 'text'); return true; } } catch (_) { }
        try { if (navigator.clipboard) { navigator.clipboard.writeText(text); return true; } } catch (_) { }
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.cssText = 'position:fixed;left:-9999px;opacity:0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            ta.remove();
            return !!ok;
        } catch (_) { return false; }
    }

    /* =====================================================================
     * 8. 点击接管 / 导航守卫
     *    1.1 的边界：
     *    - 只处理真实用户点击（e.isTrusted），程序化点击一律放行；
     *    - 不再改写 window.open / a.click / iframe.src / setAttribute；
     *    - 只在"本站接管"开启、且确实命中文件下载链接时阻断，不做三连 stop；
     *    - 媒体站点默认不接管（菜单可逐站开启）。
     * ===================================================================== */

    let lastGesture = 0;
    let lastPassNoticeAt = 0;

    function requestDownload(url, filename) {
        if (!url) return;
        if (Date.now() < suppressUntil) return;
        void sendDownload(url, filename || sanitizeFilename('', url), false);
    }

    function extractUrlFromOnclick(onclick) {
        if (!onclick) return null;
        const m = String(onclick).match(/(https?:\/\/[^"'()\s]+)/i);
        return m ? m[1] : null;
    }

    function linkTargetUrl(link) {
        let url = link.getAttribute('href') || link.getAttribute('data-ng-href')
            || link.getAttribute('data-href') || link.getAttribute('data-url') || '';
        if (!url) {
            const gk = link.getAttribute('data-gokey');
            if (gk) {
                const m = String(gk).match(/download_url=([^&]+)/);
                if (m) { try { url = decodeURIComponent(m[1]); } catch (_) { } }
            }
        }
        if (isInvalidNav(url)) {
            let oc = link.getAttribute('onclick') || '';
            if (!oc) {
                const anc = link.closest('[onclick]');
                oc = (anc && anc.getAttribute('onclick')) || '';
            }
            if (oc) url = extractUrlFromOnclick(oc) || '';
        }
        if (!url && link.href) url = link.href;
        return normalizeUrl(url);
    }

    function handleClick(e) {
        if (!e.isTrusted) return;             // 合成/程序化点击属于页面自己的逻辑
        lastGesture = Date.now();
        if (e.defaultPrevented) return;
        const t = e.target;
        if (!t || !t.closest) return;
        if (t.closest('.edgedlpc-float, #edgedlpc-panel, .edgedlpc-mask, .edgedlpc-toast')) return;

        const link = t.closest('a, [onclick], [data-ng-href], [data-href], [data-url], [data-gokey]');
        if (!link) return;
        const url = linkTargetUrl(link);
        if (!url || !isDownloadLink(url)) return;

        // 媒体站上点开视频/音频文件是"播放"诉求，不是下载
        if (isMediaFileUrl(url) && MEDIA_HOST_RE.test(controlledHost())) {
            if (Date.now() - lastPassNoticeAt > 20000) {
                lastPassNoticeAt = Date.now();
                log('媒体链接放行（本站在只嗅探模式）：' + url.slice(0, 120));
            }
            return;
        }
        if (!siteInterceptOn()) return;
        if (Date.now() < suppressUntil) return;

        e.preventDefault();
        e.stopPropagation();
        const dlName = link.getAttribute('download') || '';
        requestDownload(url, sanitizeFilename(dlName, url));
    }

    // 仅守卫"用户刚点过、且是同页跳转到文件"的场景；不碰 open / a.click / iframe
    function attachNavigationGuard() {
        const w = (typeof unsafeWindow !== 'undefined' && unsafeWindow) || window;
        const guarded = (target) => {
            if (Date.now() < suppressUntil) return false;
            if (Date.now() - lastGesture > 2000) return false;      // 没有紧邻的用户手势，不动
            if (window.top !== window.self) return false;           // 只在顶层生效
            const url = normalizeUrl(target);
            if (!url) return false;
            if (!siteInterceptOn()) return false;
            if (isMediaFileUrl(url) && MEDIA_HOST_RE.test(controlledHost())) return false;
            if (!isDownloadLink(url)) return false;
            requestDownload(url);
            return true;
        };
        if (!w || !w.Location || !w.Location.prototype) return;
        ['assign', 'replace'].forEach(m => {
            try {
                const o = w.Location.prototype[m];
                if (typeof o !== 'function') return;
                w.Location.prototype[m] = function (u) {
                    if (guarded(u)) return;
                    return o.call(this, u);
                };
            } catch (_) { }
        });
        try {
            const d = Object.getOwnPropertyDescriptor(w.Location.prototype, 'href');
            if (d && d.set) {
                const o = d.set;
                Object.defineProperty(w.Location.prototype, 'href', {
                    ...d, set: function (v) { if (guarded(v)) return; o.call(this, v); }
                });
            }
        } catch (_) { }
    }

    /* =====================================================================
     * 9. 媒体嗅探 + CDN 原图升级
     * ===================================================================== */

    const VIDEO_EXT_RE = /\.(?:m3u8|mp4|flv|m4v|webm|mov|mkv|avi|m4s|ts)(?:[?#]|$)/i;
    const IMAGE_EXT_RE = /\.(?:jpe?g|png|gif|webp|bmp|tiff?|heic|avif)(?:[?#]|$)/i;
    const VIDEO_URL_RE = /(?:https?:)?\/\/[^\s"'<>()\\]+?\.(?:m3u8|mp4|flv|m4v|webm|mov|mkv|avi)(?:\?[^\s"'<>()]*)?/gi;
    const IMAGE_URL_RE = /(?:https?:)?\/\/[^\s"'<>()\\]+?\.(?:jpe?g|png|gif|webp|bmp|tiff?|heic|avif)(?:\?[^\s"'<>()]*)?/gi;

    const isVideoUrl = u => VIDEO_EXT_RE.test(u);
    const isImageUrl = u => IMAGE_EXT_RE.test(u) || /[?&](?:format|fm)=(jpe?g|png|webp|gif)/i.test(u);

    function normalizeMediaUrl(raw) {
        if (!raw || typeof raw !== 'string') return '';
        let u = raw.replace(/\\\//g, '/');
        if (u.startsWith('//')) u = 'https:' + u;
        const n = normalizeUrl(u);
        return n && (isVideoUrl(n) || isImageUrl(n)) ? n : '';
    }

    function upgradeImageUrl(url) {
        if (!url) return url;
        try {
            const u = new URL(url);
            const host = u.hostname.toLowerCase();
            if (/twimg\.com/.test(host)) {
                u.searchParams.set('name', 'orig');
                u.searchParams.delete('size');
                return u.href;
            }
            if (/cdninstagram|fbcdn|instagram|facebook/.test(host)) {
                ['stp', 'se', 'oh', 'oe', '_nc_cat'].forEach(k => u.searchParams.delete(k));
                u.pathname = u.pathname.replace(/\/(s|p)\d+x\d+\//g, '/').replace(/\/c\d+\.\d+\.\d+\.\d+\//g, '/').replace(/\/e\d+\//g, '/');
                return u.href;
            }
            if (/tiktokcdn|byteicdn|musical\.ly/.test(host)) {
                u.pathname = u.pathname.replace(/~\w+\.(jpe?g|png|webp)$/i, '.$1');
                return u.href;
            }
            if (/googleusercontent|ggpht/.test(host)) {
                u.pathname = u.pathname.replace(/=(?:s\d+|w\d+)(?:-[a-z]+)?$/i, '=s0');
                return u.href;
            }
            if (/sinaimg/.test(host)) {
                u.pathname = u.pathname.replace(/\/(thumbnail|middle|small|bmiddle)\//, '/large/');
                return u.href;
            }
            ['w', 'h', 'width', 'height', 'resize', 'thumb', 'thumbnail'].forEach(k => {
                if (u.searchParams.has(k) && parseInt(u.searchParams.get(k) || '0', 10) < 4096) u.searchParams.delete(k);
            });
            return u.href;
        } catch (_) { return url; }
    }

    function extractBingImageUrl() {
        if (!/bing\.com\/images/i.test(location.href)) return null;
        try {
            const m = new URL(location.href).searchParams.get('mediaurl');
            if (!m) return null;
            let dec = decodeURIComponent(m);
            try {
                const riu = new URL(dec).searchParams.get('riu');
                if (riu) return decodeURIComponent(riu);
            } catch (_) { }
            return /^https?:\/\//i.test(dec) ? dec : null;
        } catch (_) { return null; }
    }

    function collectMedia() {
        if (isSensitivePage()) return { videos: [], images: [] };
        const vids = new Set();
        const imgs = new Map();

        const addImg = (raw, score) => {
            let n = normalizeMediaUrl(raw) || normalizeUrl(String(raw || ''));
            if (!n || !/^https?:/i.test(n) || n.length < 20) return;
            if (/favicon|emoji|sprite|logo|icon|avatar|\/\d{1,3}x\d{1,3}\//i.test(n) && score < 5) return;
            n = upgradeImageUrl(n);
            imgs.set(n, Math.max(imgs.get(n) || 0, score));
        };
        const addVid = raw => { const n = normalizeMediaUrl(raw); if (n && isVideoUrl(n)) vids.add(n); };

        try {
            document.querySelectorAll('video, video source, audio, audio source').forEach(el => {
                addVid(el.currentSrc || el.getAttribute('src'));
            });
            document.querySelectorAll('source').forEach(s => {
                const t = s.getAttribute('srcset') || s.getAttribute('src');
                if (t) t.split(',').forEach(p => addVid(p.trim().split(/\s+/)[0]));
            });
            document.querySelectorAll('meta[property="og:video"], meta[property="og:video:url"], meta[property="og:video:secure_url"], meta[name="twitter:player:stream"]').forEach(m => addVid(m.getAttribute('content')));

            const bing = extractBingImageUrl();
            if (bing) addImg(bing, 100);
            document.querySelectorAll('meta[property="og:image"], meta[property="og:image:url"], meta[name="twitter:image"]').forEach(m => addImg(m.getAttribute('content'), 80));

            document.querySelectorAll('img').forEach(img => {
                const area = (img.naturalWidth || img.width || 0) * (img.naturalHeight || img.height || 0);
                const score = area > 640000 ? 60 : area > 160000 ? 30 : area > 40000 ? 10 : 1;
                addImg(img.currentSrc || img.src, score);
                ['data-src', 'data-original', 'data-full', 'data-lazy-src', 'data-large', 'data-hires'].forEach(a => {
                    const v = img.getAttribute(a);
                    if (v) addImg(v, score + 20);
                });
                const ss = img.getAttribute('srcset') || img.getAttribute('data-srcset');
                if (ss) ss.split(',').forEach(p => {
                    const [u, d] = p.trim().split(/\s+/);
                    addImg(u, score + (parseFloat(d) || 1) * 5);
                });
            });
            document.querySelectorAll('picture source').forEach(s => addImg(s.getAttribute('srcset'), 40));
            try {
                const entries = performance.getEntriesByType('resource').slice(-400);
                entries.forEach(e => {
                    if (isImageUrl(e.name) && (e.transferSize || 0) > 40000) addImg(e.name, 25);
                    else if (isVideoUrl(e.name)) addVid(e.name);
                });
            } catch (_) { }
            // 只扫内联脚本，且先做关键词快筛，避免在巨型页面里跑大正则
            let scanned = 0;
            document.querySelectorAll('script:not([src])').forEach(s => {
                if (scanned++ > 400) return;
                const txt = s.textContent || '';
                if (txt.length < 20 || txt.length > 600000) return;
                if (txt.indexOf('m3u8') < 0 && txt.indexOf('.mp4') < 0 && txt.indexOf('.jpg') < 0 &&
                    txt.indexOf('.png') < 0 && txt.indexOf('.webp') < 0 && txt.indexOf('.m4v') < 0) return;
                (txt.match(IMAGE_URL_RE) || []).forEach(m => addImg(m, 15));
                (txt.match(VIDEO_URL_RE) || []).forEach(addVid);
            });
        } catch (e) { log('嗅探失败: ' + e); }

        return {
            videos: [...vids],
            images: [...imgs.entries()].sort((a, b) => b[1] - a[1]).map(x => x[0]),
        };
    }

    /* =====================================================================
     * 10. 媒体悬浮下载按钮
     *     1.1 起：不再包装/移动页面图片，只在自己的 fixed 悬浮层里放一个按钮，
     *     鼠标经过时出现、离开即移除，页面 DOM 零改动。
     * ===================================================================== */

    const SEARCH_HOST_RE = /(^|\.)(bing\.com|google\.[a-z.]+|baidu\.com|sogou\.com|so\.com|yahoo\.com|duckduckgo\.com|yandex\.[a-z.]+|search\.brave\.com|ecosia\.org)$/i;
    const PLAYER_HOST_RE = MEDIA_HOST_RE;
    const CFG = { minW: 110, minH: 110, size: 26 };

    let floatBtn = null;
    let floatTarget = null;
    let floatRaf = 0;

    function floatEnabled() {
        try { return !!store(FLOAT_KEY, true); } catch (_) { return false; }
    }

    function isLikelyIconOrUI(img) {
        if (!img || img.tagName !== 'IMG') return true;
        const src = (img.currentSrc || img.src || img.getAttribute('data-src') || '').toLowerCase();
        const cls = (typeof img.className === 'string' ? img.className : '').toLowerCase();
        const id = (img.id || '').toLowerCase();
        const alt = (img.alt || '').toLowerCase();
        if (/favicon|apple-touch-icon|site-icon|sprite|emoji|avatar|logo|icon[-_]|[-_](16|24|32|48|64)x\1|\/\d{1,3}x\d{1,3}[\/._]/i.test(src)) return true;
        if (/icon|logo|favicon|sprite|emoji|avatar|badge|button|nav|menu|toolbar|ui[_-]/i.test(cls + ' ' + id + ' ' + alt)) return true;
        const nw = img.naturalWidth || 0, nh = img.naturalHeight || 0;
        if (nw > 0 && nh > 0 && (nw < 72 || nh < 72)) return true;
        if ((img.clientWidth || 0) > 0 && (img.clientHeight || 0) > 0 &&
            (img.clientWidth < CFG.minW || img.clientHeight < CFG.minH)) return true;
        try {
            if (img.closest('button, nav, header, footer, [role="toolbar"], [role="menubar"], [role="navigation"], [role="banner"], cite')) return true;
            const p = img.parentElement;
            if (p && p.clientWidth > 0 && p.clientHeight > 0 && p.clientWidth < 90 && p.clientHeight < 90) return true;
        } catch (_) { }
        return false;
    }

    function bestImageUrl(img) {
        const ss = img.getAttribute('srcset') || img.getAttribute('data-srcset');
        if (ss) {
            let best = '', max = 0;
            ss.split(',').forEach(part => {
                const [u, d] = part.trim().split(/\s+/);
                const w = d && d.endsWith('w') ? parseInt(d) : 0;
                if (w > max || !best) { max = w; best = u; }
            });
            if (best) return best;
        }
        for (const c of [img.currentSrc, img.src, img.getAttribute('data-src'), img.getAttribute('data-original'), img.getAttribute('data-large')]) {
            if (c && !c.startsWith('data:') && c.length > 10) return c;
        }
        return img.src || '';
    }

    function bestVideoUrl(v) {
        for (const s of v.querySelectorAll('source')) {
            const src = s.src || s.getAttribute('data-src');
            if (src && !/^(blob|mediasource):/i.test(src)) return src;
        }
        const c = v.currentSrc || v.src || v.getAttribute('data-src');
        return (c && !/^(blob|data|mediasource):/i.test(c)) ? c : '';
    }

    function elementTitle(el) {
        const list = [el.getAttribute && el.getAttribute('title'), el.getAttribute && el.getAttribute('alt'),
        el.getAttribute && el.getAttribute('aria-label')];
        try {
            const fig = el.closest('figure');
            if (fig && fig.querySelector('figcaption')) list.push(fig.querySelector('figcaption').textContent);
        } catch (_) { }
        for (const c of list) if (c && String(c).trim().length > 1) return String(c).trim();
        return extractMediaTitle() || document.title || '';
    }

    function hideFloat() {
        floatTarget = null;
        if (floatBtn) { floatBtn.remove(); floatBtn = null; }
    }

    function placeFloat() {
        if (!floatBtn || !floatTarget) return;
        const r = floatTarget.getBoundingClientRect();
        if (r.width < 40 || r.height < 40 || r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) {
            floatBtn.style.display = 'none';
            return;
        }
        floatBtn.style.display = 'flex';
        const left = Math.min(Math.max(4, r.right - CFG.size - 6), innerWidth - CFG.size - 4);
        const top = Math.min(Math.max(4, r.top + 6), innerHeight - CFG.size - 4);
        floatBtn.style.left = left + 'px';
        floatBtn.style.top = top + 'px';
    }

    function scheduleFloatPlace() {
        if (floatRaf) return;
        floatRaf = requestAnimationFrame(() => { floatRaf = 0; placeFloat(); });
    }

    function floatCandidate(el) {
        if (!el || el.nodeType !== 1) return false;
        if (!floatEnabled() || isSensitivePage()) return false;
        const host = String(location.hostname || '').toLowerCase();
        if (SEARCH_HOST_RE.test(host.replace(/^www\./, ''))) return false;
        if (el.tagName === 'IMG') {
            if (isLikelyIconOrUI(el)) return false;
            const nw = el.naturalWidth || el.clientWidth || 0;
            const nh = el.naturalHeight || el.clientHeight || 0;
            if (nw < CFG.minW || nh < CFG.minH) return false;
            if (!el.complete && !el.naturalWidth) return false;
            return true;
        }
        if (el.tagName === 'VIDEO') {
            if (PLAYER_HOST_RE.test(host)) return false;   // 播放器站点不叠加按钮，避免与控件打架
            return !!bestVideoUrl(el);
        }
        return false;
    }

    function buildFloatButton(target, isVideo) {
        const btn = document.createElement('div');
        btn.className = 'edgedlpc-float';
        btn.title = isVideo ? '下载视频（EdgeDL-PC）' : '下载图片（EdgeDL-PC）';
        btn.style.background = isVideo ? 'rgba(220,38,38,.88)' : 'rgba(0,0,0,.68)';
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

        btn.addEventListener('mouseenter', () => { btn.style.opacity = '1'; });
        btn.addEventListener('mouseleave', hideFloat);

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const url = isVideo ? bestVideoUrl(target) : upgradeImageUrl(bestImageUrl(target));
            hideFloat();
            if (!url) { toast('没找到可直接下载的地址，试试菜单「解析本页视频」', 'error', 2600); return; }
            const title = elementTitle(target);
            requestDownload(url, sanitizeFilename(title, url, isVideo ? 'mp4' : 'jpg'));
        });

        btn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const url = isVideo ? bestVideoUrl(target) : upgradeImageUrl(bestImageUrl(target));
            if (!url) return;
            const isV = !!isVideo;
            const menu = document.createElement('div');
            menu.style.cssText = 'position:fixed;z-index:2147483647;background:#1c1c1e;color:#fff;border-radius:10px;padding:5px;font:13px system-ui,"Microsoft YaHei",sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.45);left:' + Math.min(e.clientX, innerWidth - 190) + 'px;top:' + Math.min(e.clientY, innerHeight - 130) + 'px;';
            menu.innerHTML = '<div data-a="dl" style="padding:7px 12px;border-radius:7px;cursor:pointer">下载</div>' +
                (isV ? '<div data-a="play" style="padding:7px 12px;border-radius:7px;cursor:pointer">用播放器打开</div>' : '') +
                '<div data-a="copy" style="padding:7px 12px;border-radius:7px;cursor:pointer">复制直链</div>';
            document.body.appendChild(menu);
            const off = () => { menu.remove(); document.removeEventListener('click', off, true); };
            setTimeout(() => document.addEventListener('click', off, true), 0);
            menu.addEventListener('click', (ev) => {
                const a = ev.target.dataset && ev.target.dataset.a;
                if (!a) return;
                if (a === 'dl') requestDownload(url, sanitizeFilename(elementTitle(target), url, isV ? 'mp4' : 'jpg'));
                else if (a === 'play') playMedia(url, elementTitle(target), '');
                else copyText(url, isV ? '视频直链' : '图片直链');
                hideFloat();
                off();
            });
        });
        return btn;
    }

    function showFloat(target) {
        if (floatTarget === target && floatBtn) return;
        if (document.fullscreenElement) return;              // 全屏观看时不出现按钮
        hideFloat();
        if (!floatCandidate(target)) return;
        floatTarget = target;
        floatBtn = buildFloatButton(target, target.tagName === 'VIDEO');
        (document.body || document.documentElement).appendChild(floatBtn);
        placeFloat();
    }

    function attachFloatLayer() {
        const onOver = (e) => {
            const t = e.target;
            if (!t || t.nodeType !== 1) return;
            if (t === floatBtn) return;
            if (t.tagName === 'IMG' || t.tagName === 'VIDEO') showFloat(t);
        };
        const onOut = (e) => {
            if (!floatTarget || e.target !== floatTarget) return;
            const to = e.relatedTarget;
            if (to && (to === floatBtn || (to.nodeType === 1 && floatBtn && floatBtn.contains(to)))) return;
            if (to && floatTarget.contains && floatTarget.contains(to)) return;
            hideFloat();
        };
        document.addEventListener('mouseover', onOver, true);
        document.addEventListener('mouseout', onOut, true);
        document.addEventListener('scroll', () => { if (floatBtn) scheduleFloatPlace(); }, true);
        window.addEventListener('resize', () => { if (floatBtn) scheduleFloatPlace(); }, true);
        document.addEventListener('visibilitychange', () => { if (document.hidden) hideFloat(); });
    }

    /* =====================================================================
     * 11. 菜单命令 / 快捷键 / 启动
     * ===================================================================== */

    async function menuSelfTest() {
        const h = await helperStatus();
        if (!h) {
            toast('本地助手没有响应（' + helperBase() + '）。双击「启动本地助手.bat」后再刷新页面。', 'error', 6000);
            return;
        }
        const b = h.backends || {};
        const line = ['MDM' + (b.mdm ? '✓' : '✗'), 'IDM' + (b.idm ? '✓' : '✗'), 'aria2' + (b.aria2 ? '✓' : '✗'),
        'yt-dlp' + (b.ytdlp ? '✓' : '✗'), 'ffmpeg' + (b.ffmpeg ? '✓' : '✗'),
            '播放器:' + ((b.player || []).join('/') || '无')].join('  ');
        const ok = await handshake(true);
        toast('助手 v' + (h.version || '?') + ' 在线 · 令牌' + (ok ? '已获取' : '被拒（把本站加入助手 allow_origins）') + ' · ' + line,
            ok ? 'ok' : 'error', 7000);
    }

    async function sniffAndDownload() {
        if (isSensitivePage()) {
            toast('当前是登录/支付等敏感页面，已禁止媒体嗅探', 'error', 3200);
            return;
        }
        const m = collectMedia();
        const total = m.videos.length + m.images.length;
        if (!total) { toast('未嗅探到可下载的媒体', 'info', 1800); return; }
        const target = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0] || m.images[0];
        const isImg = !isVideoUrl(target);
        toast('嗅到 ' + m.videos.length + ' 个视频源 / ' + m.images.length + ' 张图片，接管' + (isImg ? '图片' : '视频'), 'ok', 1800);
        requestDownload(target, sanitizeFilename(extractMediaTitle(), target, isImg ? 'jpg' : 'mp4'));
    }

    function copyBestLink() {
        const m = collectMedia();
        const t = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0] || m.images[0];
        copyText(t || location.href, t ? '媒体直链' : '页面地址');
    }

    function registerMenu() {
        if (typeof GM_registerMenuCommand !== 'function') return;

        GM_registerMenuCommand('嗅探本页媒体并下载（Alt+Shift+D）', () => sniffAndDownload());
        GM_registerMenuCommand('解析本页视频（yt-dlp / MDM）', () => detectVideo(''));
        GM_registerMenuCommand('解析本页视频 → 只下音频 MP3', () => detectVideo('audio'));
        GM_registerMenuCommand('用本机播放器打开本页媒体', () => {
            const m = collectMedia();
            const t = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0];
            if (!t) { toast('本页没有可直接播放的媒体流', 'error', 2200); return; }
            playMedia(t, extractMediaTitle(), '');
        });
        GM_registerMenuCommand('复制本页最佳媒体直链（Alt+Shift+C）', () => copyBestLink());
        GM_registerMenuCommand('更改默认下载方式', async () => {
            drop(DEFAULT_BACKEND_KEY);
            const k = await pickBackend('（设置默认下载方式）', true);
            if (k) toast('默认下载方式：' + (BACKENDS.find(b => b.key === k) || {}).short, 'ok');
            else toast('已设为每次都询问', 'info');
        });
        GM_registerMenuCommand('本站接管：' + (siteInterceptOn() ? '开（点击下载即接管）' : '关（只做主动嗅探）') + ' — 点击切换', () => {
            const on = toggleSiteIntercept();
            toast(on ? '已接管本站：点文件链接会交给下载器' : '已放行本站：只嗅探，不劫持点击', 'info', 2600);
        });
        GM_registerMenuCommand('切换图片/视频悬浮下载按钮', () => {
            const next = !floatEnabled();
            save(FLOAT_KEY, next);
            if (!next) hideFloat();
            toast(next ? '已开启悬浮下载按钮（鼠标悬停大图/视频生效）' : '已关闭悬浮下载按钮', 'info', 2400);
        });
        GM_registerMenuCommand('下载任务面板', () => (panelEl ? closePanel() : openPanel()));
        GM_registerMenuCommand('与本地助手配对 / 重连', async () => {
            save(TOKEN_KEY, '');
            token = '';
            handshakeTried = true;
            const ok = await pairWithCode();
            if (ok) return;
            const h = await helperStatus();
            if (!h) toast('助手没在运行，请先双击「静默后台启动.vbs」或「启动本地助手.bat」', 'error', 5000);
            else toast('助手在线但拒绝连接，请把来源加入助手配置 allow_origins', 'error', 5000);
        });
        GM_registerMenuCommand('本地助手状态 / 排错', () => menuSelfTest());
        GM_registerMenuCommand('设置助手地址（当前 ' + helperBase() + '）', () => {
            const v = prompt('本地助手 HTTP 地址', helperBase());
            if (v && /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(v.trim())) {
                save(HELPER_KEY, v.trim());
                save(TOKEN_KEY, '');
                token = '';
                toast('已保存，刷新页面生效', 'ok', 2000);
            } else if (v) {
                toast('只允许本机地址（127.0.0.1 / localhost）', 'error', 3000);
            }
        });
    }

    function bindShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (!e.altKey || !e.shiftKey || e.isTrusted === false) return;
            if (e.ctrlKey || e.metaKey) return;
            if (e.key === 'D' || e.key === 'd') { e.preventDefault(); sniffAndDownload(); }
            if (e.key === 'C' || e.key === 'c') { e.preventDefault(); copyBestLink(); }
            if (e.key === 'V' || e.key === 'v') { e.preventDefault(); detectVideo(''); }
        }, true);
    }

    function init() {
        injectStyle();
        document.addEventListener('click', handleClick, true);
        attachNavigationGuard();
        attachFloatLayer();
        registerMenu();
        bindShortcuts();
        // 预热握手，让第一次下载不用等；失败时静默
        setTimeout(() => { void handshake(); }, 800);
    }

    init();
})();
