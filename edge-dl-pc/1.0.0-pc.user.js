// ==UserScript==
// @name         EdgeDL-PC锛堢數鑴戠増涓嬭浇鎺ョ + 濯掍綋鍡呮帰锛?// @namespace    local.edgedl-pc
// @version      1.0.0-pc
// @updateURL    https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/edge-dl-pc.user.js
// @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/edge-dl-pc.user.js
// @description  璁?Windows 涓婄殑 Edge/Chrome 鎶婁笅杞戒换鍔′氦缁?Mister Download Manager / IDM / aria2锛屽苟鍡呮帰椤甸潰濯掍綋銆佸浘鐗囨偓娴笅杞姐€佽皟鐢?yt-dlp 瑙ｆ瀽椤甸潰瑙嗛銆佹帹閫佹湰鏈烘挱鏀惧櫒锛屽悓鏃跺洖浼犱笅杞借繘搴︺€傜敱瀹夊崜鐗?EdgeDL 鏀瑰啓涓?PC 鐗堛€?// @author       Chumor锛堝師鐗堬級鈫?PC 鐗堟敼鍐?// @match        *://*/*
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
// ==/UserScript==

(function () {
    'use strict';

    /* =====================================================================
     * 0. 甯搁噺涓庨厤缃?     * ===================================================================== */

    const VER = '1.0.0-pc';

    // 鏈湴鍔╂墜榛樿鍦板潃锛堝彲鐢ㄨ彍鍗曞懡浠や慨鏀癸級
    const HELPER_KEY = 'edgedlpc-helper-base';
    const DEFAULT_HELPER = 'http://127.0.0.1:47631';
    const TOKEN_KEY = 'edgedlpc-token';

    const DEFAULT_BACKEND_KEY = 'edgedlpc-default-backend';
    const FLOAT_KEY = 'edgedlpc-float-buttons';
    const INTERCEPT_KEY = 'edgedlpc-site-intercept';
    const AUTO_PANEL_KEY = 'edgedlpc-auto-panel';
    const PAIR_CODE_KEY = 'edgedlpc-pair-code';

    // PC 绔彲鐢ㄧ殑涓嬭浇鍚庣
    const BACKENDS = [
        { key: 'mdm', name: 'Mister Download Manager', short: 'MDM', hint: '寮圭獥纭锛岀晫闈㈠悓 IDM' },
        { key: 'mdm-cli', name: 'MDM CLI锛?6 绾跨▼鐩翠笅锛?, short: 'MDM路蹇?, hint: '涓嶅脊绐楋紝闈欓粯澶氱嚎绋? },
        { key: 'idm', name: 'Internet Download Manager', short: 'IDM', hint: '浜ょ粰 IDM 鎺ョ' },
        { key: 'aria2', name: 'aria2锛堟湰鏈?RPC锛?, short: 'aria2', hint: '鍒嗙墖涓嬭浇锛岃蛋浣犵殑瀹堟姢鍣? },
        { key: 'browser', name: '娴忚鍣ㄥ師鐢熶笅杞?, short: 'Edge', hint: '涓嶆帴绠★紝浜よ繕娴忚鍣? },
        { key: 'copy', name: '鍙鍒剁洿閾?, short: '澶嶅埗', hint: '鍐欏叆鍓创鏉匡紝鎵嬪姩澶勭悊' },
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
     * 1. 瀛樺偍锛堝悓姝ュ寘瑁咃紝閬垮厤鍒板 await锛?     * ===================================================================== */

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
     * 2. 鏈湴鍔╂墜瀹㈡埛绔?     * ===================================================================== */

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
                log('鏉ユ簮鏈彈淇★紝闇€瑕侀厤瀵圭爜');
                needsPair = true;
                // 椤甸潰鍔犺浇鏃剁殑闈欓粯棰勭儹涓嶆墦鎵扮敤鎴凤紱鐪熸鐐逛笅杞芥椂鎵嶈闂?                if (!interactive) return false;
                return await pairWithCode();
            }
            log('鎻℃墜琚嫆: ' + r.status + (r.text ? ' ' + r.text.slice(0, 120) : ''));
            return false;
        } catch (e) {
            log('鍔╂墜鏈搷搴? ' + e.message);
            return false;
        }
    }

    // 绔欑偣 Origin 涓嶅湪鍔╂墜鐧藉悕鍗曟椂锛岀敤涓€娆℃€ч厤瀵圭爜瀹屾垚缁戝畾
    async function pairWithCode(code) {
        try {
            const c = code || prompt(
                '鏈湴鍔╂墜涓嶄俊浠诲綋鍓嶉〉闈㈡潵婧愶紝闇€瑕佽緭鍏?6 浣嶉厤瀵圭爜銆俓n\n' +
                '鍙栧緱鏂瑰紡锛堜簩閫変竴锛夛細\n' +
                '  1. 鍙屽嚮杩愯銆屾煡鐪嬪姪鎵嬩俊鎭?bat銆嶏紝鎶勫啓閲岄潰鐨勯厤瀵圭爜\n' +
                '  2. 鎵撳紑鏂囦欢 %LOCALAPPDATA%\\EdgeDL-PC\\pairing-code.txt 绗竴琛?,
                store(PAIR_CODE_KEY, ''));
            if (!c) return false;
            const r = await rawXhr('POST', '/pair', { code: String(c).trim() },
                { 'Content-Type': 'application/json' });
            if (r.status === 200 && r.json && r.json.token) {
                token = r.json.token;
                save(TOKEN_KEY, token);
                save(PAIR_CODE_KEY, String(c).trim());
                toast('閰嶅鎴愬姛锛屾湰绔欏凡鍙帴绠′笅杞?, 'ok', 2400);
                return true;
            }
            toast('閰嶅澶辫触锛? + ((r.json && r.json.error) || ('HTTP ' + r.status)), 'error', 4000);
            return false;
        } catch (e) {
            failNotice(e);
            return false;
        }
    }

    async function api(path, body) {
        // 鐢ㄦ埛宸茬粡鍦ㄦ搷浣滀簡锛屾鏃跺彲浠ュ脊鍑洪厤瀵硅闂?        if (!(await handshake(false, path !== '/jobs'))) {
            if (needsPair && !(await pairWithCode())) {
                throw new Error('鍔╂墜鎷掔粷浜嗚繛鎺ワ紝璇风敤鑿滃崟銆屼笌鏈湴鍔╂墜閰嶅 / 閲嶈繛銆?);
            }
            if (!token) throw new Error('鍔╂墜鏈惎鍔紝瑙佽彍鍗曘€屾湰鍦板姪鎵嬬姸鎬?/ 鎺掗敊銆?);
        }
        let r = await rawXhr('POST', path, body, { 'Content-Type': 'application/json', 'X-EdgeDL-Token': token });
        if (r.status === 401) {              // 鍔╂墜閲嶅惎鍚庝护鐗屽彉浜嗭紝閲嶆彙涓€娆?            token = '';
            save(TOKEN_KEY, '');
            if (await handshake(true)) {
                r = await rawXhr('POST', path, body, { 'Content-Type': 'application/json', 'X-EdgeDL-Token': token });
            }
        }
        if (r.status >= 400 || !r.json) {
            throw new Error((r.json && r.json.error) || ('鍔╂墜杩斿洖 ' + r.status));
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
     * 3. 鏍囬鎻愬彇 / 鏂囦欢鍚嶆竻娲楋紙娌跨敤鍘熺増閫昏緫锛?     * ===================================================================== */

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

    const PLATFORM = '(?:X|Twitter|Facebook|Instagram|TikTok|YouTube|Bilibili|鍝斿摡鍝斿摡|鎶栭煶|蹇墜|寰崥|灏忕孩涔Reddit|Telegram)';

    function cleanTitle(raw) {
        if (!raw) return '';
        let t = raw.replace(/\s+/g, ' ').replace(/[\u0000-\u001F\u007F]/g, '').trim();
        // 鍘绘帀甯歌骞冲彴鍚庣紑锛堜笁绉嶅垎闅斿啓娉曢兘瑕佽鐩栵紝閬垮厤婕忓墺锛?        t = t
            .replace(new RegExp('\\s*[|/路鈥\\s*' + PLATFORM + '\\s*.*$', 'i'), '')
            .replace(new RegExp('\\s*[-鈥撯€擼\\s*' + PLATFORM + '\\s*.*$', 'i'), '')
            .replace(new RegExp('\\s+on\\s+' + PLATFORM + '\\s*.*$', 'i'), '')
            .replace(new RegExp('\\s*[-鈥撯€攟]\\s*' + PLATFORM + '$', 'i'), '')
            .replace(/[\s\-鈥撯€攟路鈥+$/, '')
            .trim();
        return t;
    }

    function hostIs(re) {
        try { return re.test((location.hostname || '').toLowerCase()); } catch (_) { return false; }
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

    function q(sel, root) {
        try { return (root || document).querySelector(sel); } catch (_) { return null; }
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
     * 4. 涓嬭浇閾炬帴鍒ゅ畾锛堟部鐢ㄥ師鐗堣鍒欙級
     * ===================================================================== */

    const EXTENSIONS = [
        '.mp4', '.mkv', '.avi', '.mov', '.flv', '.wmv', '.webm', '.m4v', '.3gp', '.mpg', '.mpeg', '.vob', '.mts', '.m2ts', '.m3u8',
        '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.tif', '.ico', '.heic', '.heif', '.avif', '.jfif', '.raw', '.psd', '.eps',
        '.txt', '.log', '.md', '.json', '.xml', '.csv', '.tsv', '.rtf', '.yaml', '.yml', '.toml', '.ini', '.conf', '.tex', '.srt', '.vtt',
        '.css', '.scss', '.less', '.js', '.mjs', '.cjs', '.jsx', '.tsx', '.vue', '.woff', '.woff2', '.ttf', '.otf', '.eot', '.map',
        '.mp3', '.flac', '.wav', '.ogg', '.m4a', '.aac', '.wma', '.ape', '.opus', '.aiff', '.aif', '.au', '.ac3', '.wv', '.mid', '.midi', '.mka',
        '.pdf', '.epub', '.mobi', '.azw3', '.djvu', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
        '.zip', '.rar', '.7z', '.tar', '.gz', '.tgz', '.bz2', '.xz', '.iso', '.cab', '.jar',
        '.apk', '.apks', '.xapk', '.apkm', '.ipa', '.obb', '.aab',
        '.exe', '.msi', '.bin', '.dmg', '.torrent',
    ];
    // .html/.htm 涓嶆嫤鎴紝鍚﹀垯鏅€氱綉椤佃烦杞細琚浼?
    const KEYWORDS = ['/down/', '/download/', '/downloads/', '/dl/', '/fetch/', '/files/', '/file/', '/attach/', '/attachment/',
        '/repo/', '/backup/', '/upload/', '/releases/download/', '/binary/', '/pkg/', '/setup/', '/installer/', '/patch/', '/getfile',
        '?file=', '&file=', '?filename=', '&filename=', 'download?', '&download=', '?download=',
        '?act=download', '&act=download', '?action=download', '?mode=download', '?down=', '&down=',
        'force_download', 'response-content-disposition=', 'content-disposition=attachment'];

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
            if (/鐧诲綍|鐧婚檰|娉ㄥ唽|鏀粯|浠樻|缁撹处|鏀堕摱鍙皘checkout|sign\s*in|log\s*in|payment|password/i.test(title)) {
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
        // 鎺掗櫎 HLS/DASH 鍒嗙墖锛岄伩鍏嶆墦鏂挱鏀惧櫒
        if (/\.(m4s|ts|m4v)(?:$|[?#])/i.test(lower) || /[?&](?:byterange|range|segment|sq)=/i.test(lower)) return false;
        if (/\/data\/data\/[^?#]*$/i.test(lower)) return false;
        if (REDIRECT_DOWNLOAD_PAGES.some(p => p.test(lower))) return true;
        try {
            const path = new URL(url).pathname.toLowerCase();
            if (EXTENSIONS.some(ext => path.endsWith(ext))) return true;
        } catch (_) {
            const path = lower.split('?')[0].split('#')[0];
            if (EXTENSIONS.some(ext => path.endsWith(ext))) return true;
        }
        return KEYWORDS.some(kw => lower.includes(kw));
    }

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
     * 5. UI锛歍oast / 閫夋嫨闈㈡澘 / 杩涘害闈㈡澘
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

    // ---- 鍚庣閫夋嫨闈㈡澘 ----
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
                '<h3>閫夋嫨涓嬭浇鏂瑰紡</h3>' +
                '<div class="edgedlpc-sub">' + esc((pageUrl || '').slice(0, 130)) + '</div>' +
                '<div class="edgedlpc-grid">' +
                BACKENDS.map(b => {
                    const on = (b.key === 'browser' || b.key === 'copy') ? true : !!avail[b.key.replace('-cli', '')] || (b.key === 'mdm-cli' && !!avail.mdm_cli);
                    return '<button class="edgedlpc-opt' + (on ? '' : ' edgedlpc-off') + (def === b.key ? ' sel' : '') +
                        '" data-k="' + b.key + '" ' + (on ? '' : 'disabled') + ' title="' + esc(on ? b.hint : '鏈娴嬪埌璇ョ▼搴?) + '">' +
                        '<img src="' + (ICONS[b.key === 'mdm-cli' ? 'mdm-cli' : b.key] || ICONS.browser) + '"><span><b>' + esc(b.short) + '</b><i>' + esc(on ? b.hint : '鏈娴嬪埌') + '</i></span></button>';
                }).join('') +
                '</div>' +
                '<div class="edgedlpc-foot">' +
                '<label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="edpc-def"' + (def ? ' checked' : '') + '>璁颁綇涓洪粯璁?/label>' +
                '<button class="edgedlpc-cancel">鍙栨秷锛圗sc锛?/button>' +
                '</div></div>';
            document.documentElement.appendChild(host);

            const done = (k) => { host.remove(); resolve(k); };
            host.addEventListener('click', (e) => { if (e.target === host) done(null); });
            host.querySelector('.edgedlpc-cancel').addEventListener('click', () => done(null));
            const onKey = (e) => { if (e.key === 'Escape') { done(null); document.removeEventListener('keydown', onKey, true); } };
            document.addEventListener('keydown', onKey, true);
            host.querySelectorAll('.edgedlpc-opt').forEach(btn => {
                btn.addEventListener('click', () => {
                    const k = btn.dataset.k;
                    if (host.querySelector('#edpc-def').checked) save(DEFAULT_BACKEND_KEY, k);
                    document.removeEventListener('keydown', onKey, true);
                    done(k);
                });
            });
        });
    }

    // ---- 杩涘害闈㈡澘 ----
    let panelEl = null;
    let panelTimer = null;

    function pctText(j) {
        if (j.percent != null) return Math.round(j.percent) + '%';
        return { downloading: '涓嬭浇涓?, running: '瑙ｆ瀽涓?, queued: '鎺掗槦', paused: '宸叉殏鍋?, done: '瀹屾垚', error: '澶辫触' }[j.state] || j.state;
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
            panelEl.querySelector('.edgedlpc-body').innerHTML = '<div class="edpc-empty">' + (e.message || '璇诲彇澶辫触') + '</div>';
            return;
        }
        const list = [].concat(data.local || [], data.aria2 || []);
        const body = panelEl.querySelector('.edgedlpc-body');
        if (!list.length) {
            body.innerHTML = '<div class="edpc-empty">褰撳墠娌℃湁杩涜涓殑浠诲姟</div>';
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
        panelEl.innerHTML = '<h4><span>涓嬭浇浠诲姟</span><button title="鍏抽棴">脳</button></h4><div class="edgedlpc-body"></div>';
        (document.body || document.documentElement).appendChild(panelEl);
        panelEl.querySelector('button').addEventListener('click', closePanel);
        refreshPanel();
        panelTimer = setInterval(refreshPanel, 1500);
    }
    function closePanel() {
        if (panelTimer) clearInterval(panelTimer);
        panelTimer = null;
        if (panelEl) panelEl.remove();
        panelEl = null;
    }

    /* =====================================================================
     * 6. 鍔ㄤ綔锛氫笅杞?/ 瑙嗛瑙ｆ瀽 / 鎾斁 / 澶嶅埗
     * ===================================================================== */

    async function sendDownload(url, filename, forcePick) {
        const backend = forcePick ? null : store(DEFAULT_BACKEND_KEY, '');
        const use = backend || await pickBackend(url, false);
        if (!use) { toast('宸插彇娑堬紝鏈氦缁欎换浣曚笅杞藉櫒', 'info', 1400); return; }
        if (use === 'browser') {
            toast('宸蹭氦杩樻祻瑙堝櫒鍘熺敓涓嬭浇');
            suppressUntil = Date.now() + 2500;
            setTimeout(() => { try { location.href = url; } catch (_) { } }, 0);
            return;
        }
        if (use === 'copy') {
            copyText(url, '鐩撮摼');
            return;
        }
        try {
            const r = await api('/download', {
                url, filename: filename || '', referer: location.href, pageUrl: location.href, backend: use,
            });
            toast(r.message || '宸蹭氦缁?' + use, 'ok', 1500);
            if (store(AUTO_PANEL_KEY, true)) openPanel();
        } catch (e) {
            failNotice(e);
        }
    }

    function failNotice(e) {
        const msg = String(e && e.message || e || '');
        if (/鍔╂墜鏈惎鍔▅HELPER_DOWN|HELPER_TIMEOUT|NO_GM_XHR|Failed to fetch/i.test(msg)) {
            const now = Date.now();
            if (now - helperDownNoticeAt < 8000) return;
            helperDownNoticeAt = now;
            toast('鏈湴鍔╂墜娌″湪杩愯銆傚紑濮嬭彍鍗曢噷鍙屽嚮銆屽惎鍔ㄦ湰鍦板姪鎵?bat銆嶏紝鎴栨寜鑴氭湰鑿滃崟閲岀殑璇存槑鍚姩銆?, 'error', 6000);
        } else {
            toast('澶辫触锛? + msg.slice(0, 140), 'error', 4000);
        }
    }

    async function detectVideo(quality, forcePick) {
        if (isSensitivePage()) {
            toast('褰撳墠鏄櫥褰?鏀粯绛夋晱鎰熼〉闈紝宸茬姝㈠獟浣撳梾鎺?, 'error', 3000);
            return;
        }
        const page = location.href;
        try {
            const r = await api('/video', { url: page, title: extractMediaTitle() || document.title, quality: quality || '', dir: '' });
            toast(r.message || '宸插紑濮嬭В鏋?, 'ok', 2000);
            if (store(AUTO_PANEL_KEY, true)) openPanel();
        } catch (e) { failNotice(e); }
    }

    async function playMedia(url, title, player) {
        if (!url) { toast('娌℃湁鍙敤鐨勫獟浣撳湴鍧€', 'error'); return; }
        try {
            const r = await api('/play', { url, title: title || extractMediaTitle(), referer: location.href, pageUrl: location.href, player: player || '' });
            toast(r.message || '宸叉墦寮€鎾斁鍣?, 'ok', 1800);
        } catch (e) { failNotice(e); }
    }

    function copyText(text, label) {
        const ok = setClipboard(text);
        toast(ok ? ('宸插鍒? + (label || '') + '锛? + (text.length > 46 ? text.slice(0, 44) + '鈥? : text)) : '澶嶅埗澶辫触', ok ? 'ok' : 'error', 2400);
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
     * 7. 鐐瑰嚮 / 瀵艰埅鎷︽埅
     * ===================================================================== */

    let interceptEnabled = true;
    let suppressUntil = 0;
    let lastGesture = 0;

    function controlledHost() {
        try { return (window.top && window.top.location.hostname) || location.hostname; }
        catch (_) { return location.hostname; }
    }

    function getSiteBlock() {
        const l = store(INTERCEPT_KEY, []);
        return Array.isArray(l) ? l : [];
    }
    function setSiteBlock(list) {
        save(INTERCEPT_KEY, list.map(x => String(x).toLowerCase()));
        interceptEnabled = !getSiteBlock().includes(String(controlledHost()).toLowerCase());
        return list;
    }
    function toggleSiteBlock() {
        const host = String(controlledHost()).toLowerCase();
        const list = getSiteBlock();
        const i = list.findIndex(x => String(x).toLowerCase() === host);
        if (i >= 0) list.splice(i, 1); else list.push(host);
        setSiteBlock(list);
        return i < 0;
    }

    function requestDownload(url, filename) {
        if (!url) return;
        if (Date.now() < suppressUntil) return;
        void sendDownload(url, filename || sanitizeFilename(extractMediaTitle(), url), false);
    }

    function tryInterceptNavigation(input, opts) {
        if (!interceptEnabled || Date.now() < suppressUntil) return false;
        if (opts && opts.requireGesture && Date.now() - lastGesture > 1600) return false;
        const url = normalizeUrl(input);
        if (!url || !isDownloadLink(url)) return false;
        requestDownload(url);
        return true;
    }

    function extractUrlFromOnclick(onclick) {
        if (!onclick) return null;
        const m = String(onclick).match(/(https?:\/\/[^"'()\s]+)/i);
        return m ? m[1] : null;
    }

    function handleClick(e) {
        lastGesture = Date.now();
        if (e.__edgedlpc) return;
        e.__edgedlpc = true;
        if (e.target && e.target.closest && e.target.closest('#edgedlpc-panel, .edgedlpc-mask, .edgedlpc-float')) return;

        const link = e.target && e.target.closest
            ? e.target.closest('a, [onclick], [data-ng-href], [data-href], [data-url], [data-gokey]') : null;
        let url = '';
        if (link) {
            url = link.getAttribute('href') || link.getAttribute('data-ng-href') || link.getAttribute('data-href')
                || (link.getAttribute('data-gokey') || '').match(/download_url=([^&]+)/)?.[1]
                || link.getAttribute('data-url') || link.href || '';
        }
        if (isInvalidNav(url) && link) {
            const oc = link.getAttribute('onclick') || (link.closest('[onclick]') && link.closest('[onclick]').getAttribute('onclick'));
            if (oc) url = extractUrlFromOnclick(oc) || '';
        }
        url = normalizeUrl(url);
        if (!url || !isDownloadLink(url)) return;
        if (!interceptEnabled) {
            toast('鏈珯宸茶涓轰笉鎺ョ锛屼娇鐢ㄦ祻瑙堝櫒榛樿琛屼负', 'info', 1500);
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        requestDownload(url);
    }

    function attachBridge() {
        interceptEnabled = !getSiteBlock().includes(String(controlledHost()).toLowerCase());
        document.addEventListener('click', handleClick, true);

        const w = (typeof unsafeWindow !== 'undefined' && unsafeWindow) || window;
        try {
            const originOpen = w.open;
            w.open = function (url, t, f) {
                if (tryInterceptNavigation(url)) return null;
                return originOpen.call(w, url, t, f);
            };
        } catch (_) { }
        try {
            const originClick = w.HTMLAnchorElement.prototype.click;
            w.HTMLAnchorElement.prototype.click = function () {
                if (tryInterceptNavigation(this.href)) return;
                return originClick.call(this);
            };
        } catch (_) { }
        ['assign', 'replace'].forEach(m => {
            try {
                const o = w.Location.prototype[m];
                w.Location.prototype[m] = function (u) {
                    if (tryInterceptNavigation(u)) return;
                    return o.call(this, u);
                };
            } catch (_) { }
        });
        try {
            const d = Object.getOwnPropertyDescriptor(w.Location.prototype, 'href');
            if (d && d.set) {
                const o = d.set;
                Object.defineProperty(w.Location.prototype, 'href', {
                    ...d, set: function (v) { if (tryInterceptNavigation(v)) return; o.call(this, v); }
                });
            }
        } catch (_) { }
        try {
            const di = Object.getOwnPropertyDescriptor(w.HTMLIFrameElement.prototype, 'src');
            if (di && di.set) {
                const oi = di.set;
                Object.defineProperty(w.HTMLIFrameElement.prototype, 'src', {
                    ...di, set: function (v) { if (tryInterceptNavigation(v, { requireGesture: true })) return; oi.call(this, v); }
                });
            }
            const sa = w.Element.prototype.setAttribute;
            w.Element.prototype.setAttribute = function (name, value) {
                if (this instanceof w.HTMLIFrameElement && String(name).toLowerCase() === 'src') {
                    if (tryInterceptNavigation(value, { requireGesture: true })) return;
                }
                return sa.call(this, name, value);
            };
        } catch (_) { }
    }

    /* =====================================================================
     * 8. 濯掍綋鍡呮帰 + CDN 鍘熷浘鍗囩骇
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
                performance.getEntriesByType('resource').forEach(e => {
                    if (isImageUrl(e.name) && (e.transferSize || 0) > 40000) addImg(e.name, 25);
                    else if (isVideoUrl(e.name)) addVid(e.name);
                });
            } catch (_) { }
            document.querySelectorAll('script').forEach(s => {
                const txt = (s.textContent || '');
                if (txt.length > 1_500_000) return;
                (txt.match(IMAGE_URL_RE) || []).forEach(m => addImg(m, 15));
                (txt.match(VIDEO_URL_RE) || []).forEach(addVid);
            });
        } catch (e) { log('鍡呮帰澶辫触: ' + e); }

        return {
            videos: [...vids],
            images: [...imgs.entries()].sort((a, b) => b[1] - a[1]).map(x => x[0]),
        };
    }

    /* =====================================================================
     * 9. 鍥剧墖/瑙嗛鎮诞涓嬭浇鎸夐挳
     * ===================================================================== */

    const SEARCH_HOST_RE = /(^|\.)(bing\.com|google\.[a-z.]+|baidu\.com|sogou\.com|so\.com|yahoo\.com|duckduckgo\.com|yandex\.[a-z.]+|search\.brave\.com|ecosia\.org)/i;
    const PLAYER_HOST_RE = /(^|\.)(youtube\.com|youtu\.be|bilibili\.com|iqiyi\.com|youku\.com|v\.qq\.com|mgtv\.com|sohu\.com|netflix\.com|twitch\.tv|vimeo\.com|dailymotion\.com|nicovideo\.jp|douyin\.com|kuaishou\.com|pornhub\.com|xvideos\.com)/i;
    const CFG = { minW: 110, minH: 110, size: 26 };

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

    function makeFloat(target, isVideo) {
        if (!store(FLOAT_KEY, true)) return;
        if (!target || target.dataset.edgedlpc) return;
        if (!isVideo && isLikelyIconOrUI(target)) { target.dataset.edgedlpc = 'skip'; return; }
        if (!isVideo && !target.complete && !(target.naturalWidth > 0)) {
            target.dataset.edgedlpc = 'wait';
            target.addEventListener('load', () => { target.dataset.edgedlpc = ''; makeFloat(target, false); }, { once: true });
            return;
        }
        const parent = target.parentElement;
        if (!parent) return;
        if (!isVideo) {
            const nw = target.naturalWidth || target.clientWidth || 0;
            const nh = target.naturalHeight || target.clientHeight || 0;
            if ((nw && nw < CFG.minW) || (nh && nh < CFG.minH)) { target.dataset.edgedlpc = 'skip-small'; return; }
        }
        target.dataset.edgedlpc = '1';

        let host = parent;
        try {
            if (getComputedStyle(host).position === 'static') {
                host.style.setProperty('position', 'relative', 'important');
            }
        } catch (_) { }

        injectStyle();
        const btn = document.createElement('div');
        btn.className = 'edgedlpc-float';
        btn.title = isVideo ? '涓嬭浇瑙嗛锛圗dgeDL-PC锛? : '涓嬭浇鍥剧墖锛圗dgeDL-PC锛?;
        btn.style.cssText = 'position:absolute!important;top:6px;right:6px;width:' + CFG.size + 'px;height:' + CFG.size +
            'px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2147483640;' +
            'background:' + (isVideo ? 'rgba(220,38,38,.88)' : 'rgba(0,0,0,.68)') + ';opacity:0;transition:opacity .15s,transform .15s;' +
            'box-shadow:0 2px 10px rgba(0,0,0,.45);pointer-events:auto;-webkit-user-select:none;user-select:none;';
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

        // 榧犳爣绉诲埌鍥句笂鎵嶆樉绀猴紝鍑忓皯瀵归〉闈㈣瑙夌殑骞叉壈
        const show = () => { btn.style.opacity = '1'; };
        const hide = () => { btn.style.opacity = '0'; };

        if (!isVideo) {
            const wrap = document.createElement('span');
            wrap.style.cssText = 'position:relative;display:inline-block;max-width:100%;vertical-align:middle;';
            parent.insertBefore(wrap, target);
            wrap.appendChild(target);
            wrap.appendChild(btn);
            wrap.dataset.edgedlpcWrap = '1';
            wrap.addEventListener('mouseenter', show);
            wrap.addEventListener('mouseleave', hide);
        } else {
            host.appendChild(btn);
            target.addEventListener('mouseenter', show);
            target.addEventListener('mouseleave', hide);
            btn.addEventListener('mouseenter', show);
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            const url = isVideo ? bestVideoUrl(target) : upgradeImageUrl(bestImageUrl(target));
            if (!url) { toast('娌℃壘鍒板彲鐩存帴涓嬭浇鐨勫湴鍧€锛岃瘯璇曡彍鍗曘€岃В鏋愭湰椤佃棰戙€?, 'error', 2600); return; }
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
            menu.innerHTML = '<div data-a="dl" style="padding:7px 12px;border-radius:7px;cursor:pointer">涓嬭浇</div>' +
                (isV ? '<div data-a="play" style="padding:7px 12px;border-radius:7px;cursor:pointer">鐢ㄦ挱鏀惧櫒鎵撳紑</div>' : '') +
                '<div data-a="copy" style="padding:7px 12px;border-radius:7px;cursor:pointer">澶嶅埗鐩撮摼</div>';
            document.body.appendChild(menu);
            const off = () => { menu.remove(); document.removeEventListener('click', off, true); };
            setTimeout(() => document.addEventListener('click', off, true), 0);
            menu.addEventListener('click', (ev) => {
                const a = ev.target.dataset && ev.target.dataset.a;
                if (!a) return;
                if (a === 'dl') requestDownload(url, sanitizeFilename(elementTitle(target), url, isV ? 'mp4' : 'jpg'));
                else if (a === 'play') playMedia(url, elementTitle(target), '');
                else copyText(url, isV ? '瑙嗛鐩撮摼' : '鍥剧墖鐩撮摼');
                off();
            });
        });
    }

    function scanMedia(root) {
        if (!store(FLOAT_KEY, true)) return;
        if (isSensitivePage()) return;
        const host = (location.hostname || '').toLowerCase().replace(/^www\./, '');
        if (SEARCH_HOST_RE.test(host)) return;      // 淇濇姢鎼滅储缁撴灉椤靛浘鏍?        (root || document).querySelectorAll('img:not([data-edgedlpc])').forEach(img => {
            if (!img.src && !img.currentSrc && !img.getAttribute('data-src')) return;
            makeFloat(img, false);
        });
        if (!PLAYER_HOST_RE.test(host)) {
            (root || document).querySelectorAll('video:not([data-edgedlpc])').forEach(v => {
                if (bestVideoUrl(v)) makeFloat(v, true);
                else v.dataset.edgedlpc = 'blob';
            });
        }
    }

    function initFloat() {
        if (!store(FLOAT_KEY, true)) { log('鎮诞鎸夐挳宸插叧闂?); return; }
        const start = () => {
            scanMedia();
            setTimeout(scanMedia, 1200);
            setTimeout(scanMedia, 4000);
            const obs = new MutationObserver(muts => {
                let broad = false;
                for (const m of muts) {
                    if (m.type === 'childList') {
                        m.addedNodes.forEach(n => {
                            if (n.nodeType !== 1 || n.id === 'edgedlpc-panel' || n.classList?.contains('edgedlpc-toast')) return;
                            if (n.tagName === 'IMG' || n.tagName === 'VIDEO') makeFloat(n, n.tagName === 'VIDEO');
                            else if (n.querySelectorAll) broad = true;
                        });
                    }
                }
                if (broad) clearTimeout(obs._t), obs._t = setTimeout(() => scanMedia(), 400);
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') setTimeout(scanMedia, 300);
            });
        };
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
        else start();
    }

    function clearFloat() {
        document.querySelectorAll('.edgedlpc-float').forEach(el => el.remove());
        document.querySelectorAll('span[data-edgedlpc-wrap]').forEach(w => {
            const img = w.querySelector('img');
            if (img) { img.dataset.edgedlpc = ''; w.replaceWith(img); } else w.remove();
        });
        document.querySelectorAll('img[data-edgedlpc], video[data-edgedlpc]').forEach(el => { el.dataset.edgedlpc = ''; });
    }

    /* =====================================================================
     * 10. 鑿滃崟鍛戒护
     * ===================================================================== */

    async function menuSelfTest() {
        const h = await helperStatus();
        if (!h) {
            toast('鏈湴鍔╂墜娌℃湁鍝嶅簲锛? + helperBase() + '锛夈€傚弻鍑汇€屽惎鍔ㄦ湰鍦板姪鎵?bat銆嶅悗鍐嶅埛鏂伴〉闈€?, 'error', 6000);
            return;
        }
        const b = h.backends || {};
        const line = ['MDM' + (b.mdm ? '鉁? : '鉁?), 'IDM' + (b.idm ? '鉁? : '鉁?), 'aria2' + (b.aria2 ? '鉁? : '鉁?),
        'yt-dlp' + (b.ytdlp ? '鉁? : '鉁?), 'ffmpeg' + (b.ffmpeg ? '鉁? : '鉁?),
            '鎾斁鍣?' + ((b.player || []).join('/') || '鏃?)].join('  ');
        const ok = await handshake(true);
        toast('鍔╂墜 v' + (h.version || '?') + ' 鍦ㄧ嚎 路 浠ょ墝' + (ok ? '宸茶幏鍙? : '琚嫆锛堟妸鏈珯鍔犲叆鍔╂墜 allow_origins锛?) + ' 路 ' + line,
            ok ? 'ok' : 'error', 7000);
    }

    function registerMenu() {
        if (typeof GM_registerMenuCommand !== 'function') return;

        GM_registerMenuCommand('鍡呮帰鏈〉濯掍綋骞朵笅杞斤紙Alt+Shift+D锛?, () => sniffAndDownload());
        GM_registerMenuCommand('瑙ｆ瀽鏈〉瑙嗛锛坹t-dlp / MDM锛?, () => detectVideo(''));
        GM_registerMenuCommand('瑙ｆ瀽鏈〉瑙嗛 鈫?鍙笅闊抽 MP3', () => detectVideo('audio'));
        GM_registerMenuCommand('鐢ㄦ湰鏈烘挱鏀惧櫒鎵撳紑鏈〉濯掍綋', () => {
            const m = collectMedia();
            const t = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0];
            if (!t) { toast('鏈〉娌℃湁鍙洿鎺ユ挱鏀剧殑濯掍綋娴?, 'error', 2200); return; }
            playMedia(t, extractMediaTitle(), '');
        });
        GM_registerMenuCommand('澶嶅埗鏈〉鏈€浣冲獟浣撶洿閾撅紙Alt+Shift+C锛?, () => {
            const m = collectMedia();
            const t = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0] || m.images[0];
            copyText(t || location.href, t ? (isVideoUrl(t) ? '瑙嗛鐩撮摼' : '鍥剧墖鐩撮摼') : '椤甸潰鍦板潃');
        });
        GM_registerMenuCommand('鏇存敼榛樿涓嬭浇鏂瑰紡', async () => {
            drop(DEFAULT_BACKEND_KEY);
            const k = await pickBackend('锛堣缃粯璁や笅杞芥柟寮忥級', true);
            if (k) toast('榛樿涓嬭浇鏂瑰紡锛? + (BACKENDS.find(b => b.key === k) || {}).short, 'ok');
            else toast('宸茶涓烘瘡娆￠兘璇㈤棶', 'info');
        });
        GM_registerMenuCommand('鍒囨崲鏈珯鎺ョ锛堝綋鍓嶏細' + (interceptEnabled ? '鎺ョ涓? : '宸叉斁琛?) + '锛?, () => {
            const blocked = toggleSiteBlock();
            toast(blocked ? '宸茬姝㈡帴绠℃湰绔欙紝浜よ繕娴忚鍣? : '宸叉仮澶嶆帴绠℃湰绔?, 'info', 2200);
        });
        GM_registerMenuCommand('鍒囨崲鍥剧墖鎮诞涓嬭浇鎸夐挳', () => {
            const next = !store(FLOAT_KEY, true);
            save(FLOAT_KEY, next);
            if (!next) clearFloat();
            toast(next ? '宸插紑鍚偓娴笅杞芥寜閽紝鍒锋柊椤甸潰鐢熸晥' : '宸插叧闂偓娴笅杞芥寜閽?, 'info', 2200);
        });
        GM_registerMenuCommand('涓嬭浇浠诲姟闈㈡澘', () => (panelEl ? closePanel() : openPanel()));
        GM_registerMenuCommand('涓庢湰鍦板姪鎵嬮厤瀵?/ 閲嶈繛', async () => {
            save(TOKEN_KEY, '');
            token = '';
            handshakeTried = true;
            const ok = await pairWithCode();
            if (ok) return;
            const h = await helperStatus();
            if (!h) toast('鍔╂墜娌″湪杩愯锛岃鍏堝弻鍑汇€岄潤榛樺悗鍙板惎鍔?vbs銆嶆垨銆屽惎鍔ㄦ湰鍦板姪鎵?bat銆?, 'error', 5000);
            else toast('鍔╂墜鍦ㄧ嚎浣嗘嫆缁濊繛鎺ワ紝璇锋妸鏉ユ簮鍔犲叆鍔╂墜閰嶇疆 allow_origins', 'error', 5000);
        });
        GM_registerMenuCommand('鏈湴鍔╂墜鐘舵€?/ 鎺掗敊', () => menuSelfTest());
        GM_registerMenuCommand('璁剧疆鍔╂墜鍦板潃锛堝綋鍓?' + helperBase() + '锛?, () => {
            const v = prompt('鏈湴鍔╂墜 HTTP 鍦板潃', helperBase());
            if (v && /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(v.trim())) {
                save(HELPER_KEY, v.trim());
                save(TOKEN_KEY, '');
                token = '';
                toast('宸蹭繚瀛橈紝鍒锋柊椤甸潰鐢熸晥', 'ok', 2000);
            } else if (v) {
                toast('鍙厑璁告湰鏈哄湴鍧€锛?27.0.0.1 / localhost锛?, 'error', 3000);
            }
        });
    }

    async function sniffAndDownload() {
        if (isSensitivePage()) {
            toast('褰撳墠鏄櫥褰?鏀粯绛夋晱鎰熼〉闈紝宸茬姝㈠獟浣撳梾鎺?, 'error', 3200);
            return;
        }
        const m = collectMedia();
        const total = m.videos.length + m.images.length;
        if (!total) { toast('鏈梾鎺㈠埌鍙笅杞界殑濯掍綋', 'info', 1800); return; }
        const target = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0] || m.images[0];
        const isImg = !isVideoUrl(target);
        toast('鍡呭埌 ' + m.videos.length + ' 涓棰戞簮 / ' + m.images.length + ' 寮犲浘鐗囷紝鎺ョ' + (isImg ? '鍥剧墖' : '瑙嗛'), 'ok', 1800);
        requestDownload(target, sanitizeFilename(extractMediaTitle(), target, isImg ? 'jpg' : 'mp4'));
    }

    /* =====================================================================
     * 11. 鍚姩
     * ===================================================================== */

    function init() {
        injectStyle();
        attachBridge();
        registerMenu();
        void handshake();          // 棰勭儹锛岃绗竴娆′笅杞戒笉鐢ㄧ瓑鎻℃墜
        setTimeout(initFloat, 400);

        document.addEventListener('keydown', (e) => {
            if (!e.altKey || !e.shiftKey) return;
            if (e.key === 'D' || e.key === 'd') { e.preventDefault(); sniffAndDownload(); }
            if (e.key === 'C' || e.key === 'c') { e.preventDefault(); copyBestLink(); }
            if (e.key === 'V' || e.key === 'v') { e.preventDefault(); detectVideo(''); }
        }, true);
    }

    function copyBestLink() {
        const m = collectMedia();
        const t = m.videos.find(u => /\.m3u8/i.test(u)) || m.videos[0] || m.images[0];
        copyText(t || location.href, t ? (isVideoUrl(t) ? '濯掍綋鐩撮摼' : '濯掍綋鐩撮摼') : '椤甸潰鍦板潃');
    }

    init();
})();
