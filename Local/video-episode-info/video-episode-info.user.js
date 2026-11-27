// ==UserScript==
// @name         视频剧集信息显示
// @namespace    local.edge-userscripts/video-episode-info
// @version      6.7.0
// @description  竖排/横排显示剧集名+集数，带完整设置面板、主题、快捷键、全屏适配、按站配置、移动端触摸适配。v4.1 修复爱奇艺等站点全屏不显示；v4.2 剧名优先读播放器 DOM 与选集高亮项，切集不滞后；v4.3 识别失败自动降级；v4.4 切集重播入场动画、小屏字号自适应、竖排长标题溢出保护、可选沉浸淡出、面板位置记忆与 Esc 关闭；v4.5 新增电脑/手机/极简一键预设；v4.6 按真实播放页 DOM 重写识别层（CSS Module 哈希类名、8 位期号、播放器标题区取集数、避开热搜榜等数字干扰）；v4.6.2 修集数位于标题开头时剧名被污染、剧名尾随时长未剥离；v4.7 修竖排换行实为换列、固定单列宽度+overflow:hidden 把集数列整列裁掉（“看不到集数”的真凶）；v4.8 竖排数字/字母改为逐字直立（text-orientation: upright），不再横躺，可在面板切回；v4.9 集数支持独立字号（默认自动取剧名70%），两列高度更协调；v5.0 新增列间距滑杆（竖排下用 line-height 拉开两列，间距仍带背景不断裂）；v5.1 一键预设纳入集数字号与列间距，电脑/手机/极简三档整套观感一起切换；v6.0 全站注入（检测到 video 才启用，iframe 内不运行）、设置入口改为头像按钮（默认仅全屏显示，可自定义图片地址或上传）、面板新增保存选项、未知站点走通用识别兜底（标题区 / JSON-LD / 选集高亮），爱奇艺专属逻辑保持不变；v6.1 默认头像改为「剧」字；优化 YouTube 标题/集数识别（专属选择器、剥离 - YouTube 尾巴、支持 Episode/Ep/SxxExx 英文集数格式）；v6.1.1 为 Tampermonkey 脚本列表添加「剧」字 @icon；v6.2 实测主流站修复：B站 mediaTitle、腾讯 player-play-title、剥离 15:18 时长尾巴、强化腾讯/B站标题噪音与英文集数清理；v6.3 增强非主流站：MacCMS 系（trvod/szctv）、爱壹帆 iyf.tv、OnDemandChina 标题/URL 集数识别与站点尾巴清理；v6.4 手机端油猴菜单新增：打开设置、切换显示、手机预设、头像常驻；v6.5 配置改存油猴自身存储（GM_setValue）并双写 localStorage 兜底，修复关闭「按站配置」后一保存就丢的问题，重启浏览器后不再回到默认；v6.6 新增「仅全屏时显示标题」选项（与「全屏时隐藏标题」互斥）；v6.7 侧边默认只显示「剧名+数字集数」单列（红日第一集 → 红日1），长剧名自动折成多列，面板可关闭合并
// @author       Jackson Smith
// @icon         data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2232%22%20fill%3D%22%231a1a1a%22%2F%3E%3Ctext%20x%3D%2232%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-size%3D%2236%22%20font-weight%3D%22700%22%20fill%3D%22%23f5f5f5%22%20font-family%3D%22system-ui%2Csans-serif%22%3E%E5%89%A7%3C%2Ftext%3E%3C%2Fsvg%3E
// @match        *://*/*
// @noframes
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-body
// @updateURL    https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/video-episode-info/video-episode-info.user.js
// @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/video-episode-info/video-episode-info.user.js
// ==/UserScript==

(function () {
    'use strict';

    // ============ 主题定义 ============
    const THEMES = {
        default: {
            name: '默认暗色',
            color: '#ffffff',
            bgFrom: 'rgba(0,0,0,',
            bgTo: 'rgba(0,0,0,',
            textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
            panelBg: 'rgba(20, 20, 20, 0.95)',
            panelBorder: 'rgba(255,255,255,0.15)',
            accent: '#4fc3f7',
        },
        cyberpunk: {
            name: '赛博朋克',
            color: '#00ffff',
            bgFrom: 'rgba(255,0,128,',
            bgTo: 'rgba(0,255,255,',
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
            panelBg: 'rgba(10, 10, 30, 0.95)',
            panelBorder: 'rgba(0,255,255,0.3)',
            accent: '#ff0080',
        },
        minimal: {
            name: '极简白',
            color: '#333333',
            bgFrom: 'rgba(255,255,255,',
            bgTo: 'rgba(255,255,255,',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            panelBg: 'rgba(255, 255, 255, 0.95)',
            panelBorder: 'rgba(0,0,0,0.1)',
            accent: '#333333',
        },
        neon: {
            name: '霓虹渐变',
            color: '#ffe066',
            bgFrom: 'rgba(138,43,226,',
            bgTo: 'rgba(255,20,147,',
            textShadow: '0 0 8px #ffe066, 0 0 16px #ff1493',
            panelBg: 'rgba(30, 0, 40, 0.95)',
            panelBorder: 'rgba(255,224,102,0.3)',
            accent: '#ffe066',
        },
    };

    // ============ 一键预设 ============
    // 只覆盖“显示相关”参数；左右位置、启用开关、自定义文字、快捷键属于用户习惯，预设一律不碰。
    const PRESETS = {
        pc: {
            label: '电脑',
            cfg: { layout: 'vertical', offsetY: 50, fontSize: 34, fontWeight: 900,
                   bgOpacity: 0.45, adaptiveFontSize: true, immersiveFade: 0,
                   episodeFontSize: 0, columnGap: 10 },
        },
        mobile: {
            label: '手机',
            cfg: { layout: 'vertical', offsetY: 44, fontSize: 26, fontWeight: 700,
                   bgOpacity: 0.35, adaptiveFontSize: true, immersiveFade: 10,
                   episodeFontSize: 0, columnGap: 4 },
        },
        minimal: {
            label: '极简',
            cfg: { layout: 'vertical', offsetY: 50, fontSize: 26, fontWeight: 400,
                   bgOpacity: 0, adaptiveFontSize: true, immersiveFade: 20,
                   episodeFontSize: 16, columnGap: 18 },
        },
    };

    // ============ 配置管理 ============
    const DEFAULTS = {
        enabled: true,
        position: 'left',
        layout: 'vertical',
        fontSize: 36,
        fontWeight: 900,
        color: '#ffffff',
        bgOpacity: 0.6,
        displayMode: 'both',
        // v6.7：侧边默认只显示「剧名+数字集数」（红日第一集 → 红日1），单列显示；关闭后回到两列旧样式。
        compactEp: true,
        customText: '',
        offsetY: 50,
        theme: 'default',
        animation: true,
        // v4.1：默认关闭“全屏自动隐藏”。旧版默认 true 会让全屏必然不显示，
        // 而全屏检测又存在误判（见 isFullscreen 注释），两者叠加直接导致“全屏不显示”。
        autoHideFullscreen: false,
        touchMode: true,
        replayOnEpisodeChange: true,
        adaptiveFontSize: true,
        immersiveFade: 0, // 0=常驻显示；>0 表示切集静默 N 秒后淡到半透明
        hotkeyToggle: 'Alt+E',
        hotkeySettings: 'Alt+S',
        perSite: true,
        preset: '', // '' = 未套用预设；手动调整后变 'custom'
        uprightDigits: true, // 竖排时数字/字母逐字直立；false 则整体旋转90°横躺
        episodeFontSize: 0, // 集数字号(px)，0 = 自动取剧名的 70%
        columnGap: 8, // 两列之间的额外间距(px)。竖排下 line-height 即列宽，用它拉开列间距
        // v6.0：设置入口改为头像按钮。头像图片地址留空时用内置 SVG 头像；
        // 默认仅在全屏显示，避免普通页面上多出一个悬浮球。
        avatarUrl: '',
        avatarFullscreenOnly: true,
        // v6.6：只想在真正全屏看剧时看到剧名/集数，窗口/网页浏览时不想被挡着，可开启此项。
        // 与 autoHideFullscreen 互斥（同时开启等于哪都不显示），勾选一个会自动取消另一个。
        fullscreenOnly: false,
    };

    // ============ 存储层（v6.5） ============
    // 旧版全部写页面 localStorage，有两个坑：
    //   1) 浏览器「关闭时清除 Cookie 及网站数据」、站点自身清理、隐私窗口等，都会把配置一起抹掉，
    //      表现就是「面板里点保存没问题，重启浏览器后回到默认」；
    //   2) 「按站配置」关掉时，站点键与全局键同名（都是 episode_title_global），saveConfig 先写入完整配置、
    //      紧接着又用只含 3 个全局项的对象覆盖同一个键，配置当场就没了。
    // 现在：优先写油猴自身存储（GM_setValue，存在扩展里，不随页面数据被清），同时双写 localStorage 兜底；
    //       全局项与站点配置各用独立键，互不覆盖；首次运行自动迁移旧数据。
    const KV_GLOBAL = 'ets.global';        // 只存 perSite / avatarUrl / avatarFullscreenOnly
    const KV_SITE = 'ets.site.';           // 每站一份完整配置
    const KV_ALL = 'ets.site.__all__';     // 关闭「按站配置」时的统一配置
    const KV_PANEL_POS = 'ets.panelPos';
    const LS_PREFIX = 'episode_title_kv_';

    function gmStoreReady() {
        return typeof GM_getValue === 'function' && typeof GM_setValue === 'function';
    }

    function rawGet(key) {
        if (gmStoreReady()) {
            try {
                const v = GM_getValue(key, null);
                if (v !== null && v !== undefined) return String(v);
            } catch (e) {}
        }
        try { return localStorage.getItem(LS_PREFIX + key); } catch (e) { return null; }
    }

    function rawSet(key, value) {
        const str = String(value);
        let ok = false;
        if (gmStoreReady()) {
            try { GM_setValue(key, str); ok = true; } catch (e) {}
        }
        try { localStorage.setItem(LS_PREFIX + key, str); ok = true; } catch (e) {}
        return ok;
    }

    function parseStored(str) {
        try {
            const v = JSON.parse(str || '{}');
            return (v && typeof v === 'object') ? v : {};
        } catch (e) { return {}; }
    }

    function pickGlobal(cfg) {
        return { perSite: cfg.perSite, avatarUrl: cfg.avatarUrl, avatarFullscreenOnly: cfg.avatarFullscreenOnly };
    }

    // 旧版 localStorage 数据一次性搬进新存储；其它站点的旧配置在各站首次访问时各自迁移
    function migrateLegacyStore() {
        if (rawGet('ets.migrated') === '1') return;
        try {
            const legacyGlobal = parseStored(localStorage.getItem('episode_title_global'));
            const legacySite = parseStored(localStorage.getItem('episode_title_' + location.hostname));
            if (Object.keys(legacyGlobal).length || Object.keys(legacySite).length) {
                const merged = Object.assign({}, DEFAULTS, legacyGlobal, legacySite);
                rawSet(merged.perSite === false ? KV_ALL : KV_SITE + location.hostname, JSON.stringify(merged));
                rawSet(KV_GLOBAL, JSON.stringify(pickGlobal(merged)));
            }
            const legacyPos = localStorage.getItem('episode_title_panel_pos');
            if (legacyPos) rawSet(KV_PANEL_POS, legacyPos);
        } catch (e) {}
        rawSet('ets.migrated', '1');
    }

    function siteStoreKey(perSite) {
        return perSite === false ? KV_ALL : KV_SITE + location.hostname;
    }

    function loadConfig() {
        migrateLegacyStore();
        const globalStored = parseStored(rawGet(KV_GLOBAL));
        const stored = parseStored(rawGet(siteStoreKey(globalStored.perSite)));
        const merged = Object.assign({}, DEFAULTS, globalStored, stored);

        // 一次性迁移：老版本（<=4.0）把 autoHideFullscreen 默认存成了 true，
        // 这些用户的 localStorage 里已经写死了 true，光改 DEFAULTS 是无效的。
        // 只迁移一次，迁移后用户手动勾选的“全屏自动隐藏”仍会被尊重。
        if (!merged.fsVisibleMigrated) {
            merged.autoHideFullscreen = false;
            merged.fsVisibleMigrated = true;
            merged._needsSave = true;
        }
        return merged;
    }

    let config = loadConfig();

    function saveConfig() {
        const full = Object.assign({}, config);
        delete full._needsSave; // 内部标记，不落盘
        // 完整配置写站点键（或统一键）；全局项单独一个键，永远只放三项，不会再覆盖完整配置
        const okSite = rawSet(siteStoreKey(full.perSite), JSON.stringify(full));
        const okGlobal = rawSet(KV_GLOBAL, JSON.stringify(pickGlobal(full)));
        return okSite && okGlobal;
    }

    // ============ 环境判断 ============
    function isIqiyi() {
        return /(^|\.)iqiyi\.com$/.test(location.hostname);
    }

    // 原生全屏元素（带各浏览器旧前缀）。这是唯一 100% 可靠的全屏信号。
    function getNativeFullscreenElement() {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement || null;
    }

    // v4.1 关键修复 1：修正全屏误判。
    // 旧实现里的 document.querySelector('.iqp-player-fullscreen, .player-fullscreen, .iqp-fullscreen, .fullscreen')
    // 是「全站任意元素」匹配 —— 播放器控制条上的“全屏按钮”本身就常年带这类 class，
    // 于是根本没全屏也会被判成全屏，配合 autoHideFullscreen 默认 true 直接永久隐藏。
    // 现在只在真正的根容器 / 播放器容器上按完整 class token 匹配，不再扫全站按钮。
    const FS_CLASS_RE = /(^|[\s_-])(fullscreen|fullscreened|full-screen|is-fullscreen|isfullscreen|player-full-screen|fullplayer|full-player|fullscreen-wrap|fullscreen-mode)([\s_-]|$)/i;

    function hasFsClass(el) {
        if (!el || !el.getAttribute) return false;
        return FS_CLASS_RE.test(el.getAttribute('class') || '');
    }

    function isFullscreen() {
        if (getNativeFullscreenElement()) return true;
        if (document.webkitIsFullScreen === true || document.msFullscreenElement) return true;

        // v6.0 通用站兜底：伪全屏只看 <video> 自己所在的播放器容器，
        // 依旧不扫全站按钮，不会重现 v4.1 那种“控制条上的全屏按钮把全站判成全屏”的误判。
        const vid = document.querySelector('video');
        if (vid && vid.closest) {
            const box = vid.closest('[class*="player" i],[id*="player" i],[class*="video" i]');
            if (box && box !== document.body && box !== document.documentElement && hasFsClass(box)) return true;
        }

        // 伪全屏（CSS 全屏 / 网页全屏）：只看根容器和播放器容器，不看按钮
        const roots = [
            document.documentElement,
            document.body,
            document.querySelector('.iqp-player'),
            document.querySelector('.iqp-player-container'),
            document.querySelector('#flashbox'),
            document.querySelector('#player'),
            document.querySelector('.player-container'),
            document.querySelector('.playBox-area'),
            document.querySelector('.player-wrap'),
            document.querySelector('#movie_player'),
            document.querySelector('.html5-video-player'),
            document.querySelector('ytd-watch-flexy'),
        ];
        return roots.some(hasFsClass);
    }

    // v4.1 关键修复 2：overlay 必须待在全屏元素子树里。
    // 原生全屏时浏览器把 fullscreenElement 提升到 top layer，document.body 的其它子节点
    // 全部留在下层 —— 无论 z-index 开多大（哪怕 2147483647）都不可见。
    // 旧版那句“确保始终挂在 body 下，规避 transform 包含块”正好把元素钉死在错误的地方，
    // 这才是爱奇艺全屏不显示的根本原因。
    // 这些标签是替换元素 / 空内容元素，往里塞子节点不会渲染，需要回避。
    const NO_CHILD_RENDER_TAGS = new Set([
        'VIDEO', 'AUDIO', 'CANVAS', 'IMG', 'IFRAME', 'OBJECT', 'EMBED',
        'INPUT', 'BR', 'HR', 'SOURCE', 'TRACK', 'AREA', 'COL', 'META', 'LINK',
    ]);

    function getOverlayHost() {
        const fsEl = getNativeFullscreenElement();
        // 全屏的是 <html> 或 <body> 时，挂 body 就等价且更安全
        if (!fsEl || fsEl === document.documentElement || fsEl === document.body) {
            return document.body;
        }
        // 极少数站点直接对 <video> 全屏，其内部无法承载 overlay，退回 body
        if (NO_CHILD_RENDER_TAGS.has(fsEl.tagName)) return document.body;
        return fsEl;
    }

    let gearEl = null;
    let contentChangedAt = Date.now();
    let lastFaded = false;

    // 沉浸淡出判定：剧名/集数变化会重置计时，静默超过阈值才淡出
    function shouldFadeNow() {
        const sec = Number(config.immersiveFade) || 0;
        if (sec <= 0) return false;
        return (Date.now() - contentChangedAt) > sec * 1000;
    }

    // 把标题 / 齿轮 / 设置面板统一搬到当前 overlay 宿主下；
    // 播放器重建 DOM 导致节点被摘掉时也能自动接回去。
    function mountOverlays() {
        const host = getOverlayHost();
        if (!host) return;
        [titleEl, gearEl, panelEl].forEach(el => {
            if (el && (el.parentElement !== host || !el.isConnected)) {
                host.appendChild(el);
            }
        });
    }

    // ============ 竖排标题 ============
    let titleEl = null;
    let animationPlayed = false;
    let lastFsState = null; // 上一次判定出的全屏状态，用于避免无谓重绘

    // v6.6：可见性集中一处计算（样式与入场动画共用）。
    // 否则「仅全屏显示」在窗口模式首帧会被入场动画强行淡入一次，闪一下就消失。
    function isTitleVisibleNow(fs) {
        const isFS = typeof fs === 'boolean' ? fs : isFullscreen();
        return !!config.enabled && overlayHasText
            && !(isFS && config.autoHideFullscreen)
            && !(config.fullscreenOnly && !isFS);
    }

    function createTitleElement() {
        if (titleEl) titleEl.remove();
        titleEl = document.createElement('div');
        titleEl.id = 'episode-vertical-title';
        document.body.appendChild(titleEl);
        updateTitle();      // 先确定内容，再决定显不显示，避免空框闪一下再消失
        applyTitleStyle();
        if (config.animation && !animationPlayed && isTitleVisibleNow()) {
            playEntranceAnimation();
            animationPlayed = true;
        }
    }

    function getTheme() {
        return THEMES[config.theme] || THEMES.default;
    }

    function applyTitleStyle() {
        if (!titleEl) return;
        const theme = getTheme();
        const isFS = isFullscreen();
        lastFsState = isFS;

        // v4.1 关键修复 3：可见性一次算清，直接写进 cssText。
        // 旧实现是 cssText 里先写 opacity:0，再靠两层 requestAnimationFrame 补成 1；
        // 而爱奇艺每 800ms 就重新执行一次 applyTitleStyle，浏览器后台节流 / rAF 未触发时
        // 元素就长期停在 opacity:0，表现同样是“全屏不显示”。
        // v4.2：overlayHasText 为 false（剧名和集数都没识别出来）时整块隐藏，
        // 而不是留一个只有背景没有字的空框挂着。
        const visible = isTitleVisibleNow(isFS);
        // 全屏时绝不吞掉点击，否则会盖住播放器控制条
        const interactive = !!visible && !isFS && config.touchMode;

        // v4.4 字号自适应：小屏按视口等比缩小；竖排再按最长行预估高度二次收缩，
        // 避免手机上 36px 竖排顶满整屏、或长剧名溢出到屏幕外看不见。
        // v4.9：抽成 computeTitleFontSize，集数另算一档字号
        const isVertical = config.layout === 'vertical';
        const fs = computeTitleFontSize(isVertical);
        currentTitleFs = fs;
        applyEpisodeFontSize();


        const faded = shouldFadeNow();
        lastFaded = faded;
        const paintOpacity = !visible ? 0 : (faded ? 0.28 : 1);

        const isGradient = config.theme !== 'default' && config.theme !== 'minimal';
        let bgStyle;
        if (isGradient) {
            bgStyle = `linear-gradient(${config.layout === 'vertical' ? 'to bottom' : 'to right'}, ${theme.bgFrom}${config.bgOpacity}) 0%, ${theme.bgTo}${config.bgOpacity * 0.5}) 100%)`;
        } else {
            bgStyle = `${theme.bgFrom}${config.bgOpacity})`;
        }

        const safeLeft = 'env(safe-area-inset-left, 0px)';
        const safeRight = 'env(safe-area-inset-right, 0px)';
        const safeTop = 'env(safe-area-inset-top, 0px)';

        let extraCSS = '';
        if (config.layout === 'horizontal') {
            extraCSS = `
                white-space: nowrap;
                width: auto;
                max-width: 80vw;
                padding: 8px 16px !important;
                left: 50%;
                transform: translateX(-50%) !important;
                top: calc(${config.offsetY}% + ${safeTop}) !important;
                letter-spacing: 2px;
            `;
        }

        const baseZ = isFS ? 2147483647 : 99998;

        titleEl.style.cssText = `
            position: fixed !important;
            ${config.position}: 0 !important;
            top: ${config.layout === 'vertical' ? config.offsetY + '%' : 'calc(' + config.offsetY + '% + ' + safeTop + ')'} !important;
            transform: ${config.layout === 'vertical' ? 'translateY(-50%)' : 'translateX(-50%)'} !important;
            width: ${isVertical ? 'fit-content' : 'auto'};
            max-width: ${isVertical ? '78vw' : '80vw'};
            writing-mode: ${config.layout === 'vertical' ? 'vertical-rl' : 'horizontal-tb'} !important;
            text-orientation: ${(isVertical && !config.uprightDigits) ? 'mixed' : 'upright'} !important;
            font-size: ${fs}px !important;
            line-height: ${fs + (Number(config.columnGap) || 0)}px;
            font-weight: ${config.fontWeight} !important;
            color: ${config.color} !important;
            background: ${bgStyle} !important;
            padding: ${config.layout === 'vertical' ? '20px 8px' : '8px 16px'} !important;
            border-radius: ${config.position === 'left'
                ? (config.layout === 'vertical' ? '0 12px 12px 0' : '999px')
                : (config.layout === 'vertical' ? '12px 0 0 12px' : '999px')} !important;
            pointer-events: ${interactive ? 'auto' : 'none'};
            z-index: ${baseZ} !important;
            letter-spacing: 6px;
            white-space: pre-wrap; /* 让剧名/集数之间的 \n 真正换行 */
            text-shadow: ${theme.textShadow} !important;
            font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
            transition: opacity 0.3s ease, transform 0.3s ease;
            display: ${visible ? 'block' : 'none'};
            opacity: ${paintOpacity};
            max-height: ${isVertical ? 'calc(100vh - 10%)' : 'none'};
            overflow: visible;
            margin-${config.position}: ${config.position === 'left' ? safeLeft : safeRight};
            ${extraCSS}
        `;

        // 全屏时 overlay 必须待在 fullscreenElement 内部（top layer），
        // 退出全屏再自动搬回 body —— 旧版钉死在 body 是本次 bug 的根因。
        mountOverlays();

        // transform / filter 祖先会让 position:fixed 失效；爱奇艺播放器容器一般干净，
        // 这里只做兜底：发现宿主带 transform 时改用 absolute 贴宿主定位。
        const host = titleEl.parentElement;
        const hostHasTransform = host && host !== document.body &&
            host !== document.documentElement &&
            /matrix|translate|rotate|scale/i.test(getComputedStyle(host).transform || 'none');
        if (hostHasTransform && config.layout === 'vertical') {
            titleEl.style.position = 'absolute';
        } else {
            titleEl.style.position = 'fixed';
        }
    }

    function playEntranceAnimation() {
        if (!titleEl) return;
        // 瞬时标记：既方便外部样式钩子，也让自动化测试能稳定断言动画确实重播过
        titleEl.dataset.epFlash = '1';
        setTimeout(() => { if (titleEl) delete titleEl.dataset.epFlash; }, 700);
        titleEl.style.transition = 'none';
        titleEl.style.opacity = '0';
        const offset = config.position === 'left' ? '-20px' : '20px';
        if (config.layout === 'vertical') {
            titleEl.style.transform = `translateY(-50%) translateX(${offset})`;
        } else {
            titleEl.style.transform = `translateX(-50%) translateY(${offset})`;
        }
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                titleEl.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                titleEl.style.opacity = '1';
                titleEl.style.transform = config.layout === 'vertical' ? 'translateY(-50%)' : 'translateX(-50%)';
            });
        });
    }

    // ============ 剧集信息识别（v4.6：按真实 DOM 重写） ============
    // v4.6 用无头浏览器抓了爱奇艺真实播放页，结论推翻了过去几轮的假设：
    //   1) 爱奇艺类名是 CSS Module 哈希（webHead_title__Sm9Li / superAlbumEpisodes_contentWrapper__WnANS），
    //      之前写的 .widget-title-line h1 之类根本不存在，class 子串选择器还因大小写全部失配；
    //   2) 集数不只在 document.title，播放器上方 .webHead_title 里写着「夏日的星星 第2期 素人夫妻…」，
    //      这一处更新最及时，且综艺是「期」不是「集」；
    //   3) 期数可能是 8 位日期号（第20240303期），旧正则 \d{1,4} 直接失配 → 这就是「识别不到集数」的主因；
    //   4) 页面上有热搜榜 1-6、红包倒计时 00/29/58 这类「看着像选集」的数字列表，必须避开。
    const SITE_TITLE_SELECTORS = {
        iqiyi: [
            '[class*="webHead_title" i]', '[class*="webLongHead" i]',
            '[class*="videoListItem_title" i]', '[class*="main-title" i]',
            '[class*="video-title" i]', '[class*="title" i] h1', 'h1',
        ],
        qq: [
            '.player-play-title', '[class*="player-play-title" i]', '[class*="play-title" i]',
            '[class*="title_text" i]', '[class*="title-label" i] h2',
            '[class*="title" i] h1', '[class*="title" i] h2', 'h1',
        ],
        youku: ['[class*="title-doc" i] h1', '[class*="video-title" i] h1', '[class*="title" i] h1', 'h1'],
        bilibili: [
            '[class*="mediaTitle" i]', '[class*="mediainfo_mediaTitle" i]',
            '.mediainfo_mediaTitle', '.video-title', '.v-title', '.tit',
            '[class*="title" i] h1', 'h1',
        ],
        mgtv: ['[class*="info-title" i] h1', '[class*="title" i] h1', 'h1'],
        // YouTube：标题在 ytd-watch-metadata 的 yt-formatted-string 里，h1 选择器 alone 容易命中侧栏/推荐
        youtube: [
            'h1.ytd-watch-metadata yt-formatted-string',
            'ytd-watch-metadata h1 yt-formatted-string',
            '#title h1 yt-formatted-string',
            'h1.ytd-video-primary-info-renderer',
            'yt-formatted-string.ytd-watch-metadata',
            '#above-the-fold #title h1',
            'h1 yt-formatted-string',
            'h1',
        ],
        // v6.0 全站通用：未知站点没有专属选择器，用一组“播放页常见”的宽泛选择器兜底。
        // 误伤由 isJunkSource / cleanTitle 的噪音过滤收住；完全识别不到就整块隐藏，不留空框。
        generic: [
            // MacCMS / 海螺等常见播放页标题
            '.MacPlayer .title', '#play_title', '.player-title-bar', '.hl-player-title',
            '.hl-ma-title', '.myui-player__title', '.stui-player__title',
            '[class*="player__title" i]', '[class*="player-title" i]',
            // 通用
            '[itemprop="name"]', '[class*="video-title" i]', '[class*="videotitle" i]',
            '[class*="media-title" i]', '[class*="movie-title" i]',
            '[class*="ProgramDetail" i] h2', '.ProgramDetail__titleAndMeta h2',
            '.video-title', '.player-title', '.title h1', '[class*="title" i] h1',
            'h1', '[class*="title" i] h2',
        ],
    };

    function pickSiteKey() {
        const h = location.hostname;
        if (/iqiyi\.com/.test(h)) return 'iqiyi';
        if (/v\.qq\.com/.test(h)) return 'qq';
        if (/youku\.com/.test(h)) return 'youku';
        if (/bilibili\.com/.test(h)) return 'bilibili';
        if (/mgtv\.com/.test(h)) return 'mgtv';
        if (/(^|\.)youtube\.com$|(^|\.)youtu\.be$/.test(h)) return 'youtube';
        return 'generic';
    }

    // 站点名尾巴 / 段内噪音 / 整段元信息
    const SITE_TAIL_RE = /[-—|_]\s*[^-—|_]{0,28}(爱奇艺|iqiyi|腾讯视频|v\.qq|优酷|youku|哔哩哔哩|bilibili|bili|芒果\s*TV|mgtv|搜狐视频|乐视|YouTube|Netflix|NETFLIX|Anime-Complete|HDOfficial|OnDemandChina|ODC影视|爱壹帆|iyf\.tv|唐人街影院|trvod|chinatownfilm|szctv)[^-—|_]{0,24}$/i;
    const NOISE_WORDS = /(在线观看|全网上线|热播中|完整版|高清版?|超清|蓝光|独播|独家|免费观看|预告片?|花絮|片花|4K|HDR|VIP|会员|Anime-Complete|HDOfficial|VersionWatch\s*Online|Watch\s*Online|Full\s*Episode)/gi;
    const NOISE_SEG_EXACT = /^(爱奇艺|iqiyi|腾讯视频|v\.qq|优酷|youku|哔哩哔哩|bilibili|bili|芒果\s*tv|mgtv|搜狐视频|乐视|youtube|netflix|ondemandchina|爱壹帆|唐人街影院|trvod|szctv|在线观看|在线播放|全集|完整版|高清版?|超清|蓝光|独播|独家|免费观看|免费在线观看|手机观看|电视剧|电视连续剧|网络剧|剧场|动漫|综艺|综艺节目|综艺剧场|纪录片|电影|预告|花絮|片花|4k|hdr|vip|会员|高清完整版视频在线观看|完整版视频在线观看|高清正版视频在线观看|高清免费在线观看)$/i;
    const NOISE_SEG_SUB = /(在线观看|在线播放|完整版|高清完整版|高清正版|高清免费|高清|超清|蓝光|独播|独家|免费观看|免费在线观看|手机观看|电视剧|电视连续剧|综艺(节目)?|动漫|纪录片|花絮|预告|片花|剧场|全集|套装|视频在线观看)$/i;

    function isNoiseSeg(s) {
        return NOISE_SEG_EXACT.test(s) || NOISE_SEG_SUB.test(s);
    }

    // 播放时长尾巴（狂飙第1集12秒 / 黑亚当5分钟 / 腾讯「第01集15:18」）
    const RUNTIME_TAIL_RE = /(?:\d+\s*(?:分钟|秒钟|秒|小时)|\d{1,2}:\d{2}(?::\d{2})?)\s*$/;

    function cleanTitle(raw) {
        const original = String(raw || '').replace(/\s+/g, ' ').trim();
        if (!original) return '';
        const flat = original.replace(/[《》]/g, '');
        // 集数可能在中段（夏日的星星 第2期 素人夫妻…），也可能在开头（第1集《黑亚当》）。
        // 取「集数两侧更干净的那一段」：优先集数之前，为空则取集数之后。
        // 旧写法是 split 之后无脑取第一段，遇到「第1集《黑亚当》」会得到空串，
        // 再回退整段，结果把「第1集」又当成剧名显示出来。
        // 先剥尾部时长，避免「第01集15:18」干扰集数切分
        const noRuntime = flat.replace(RUNTIME_TAIL_RE, '').trim() || flat;
        const parts = noRuntime.split(/第\s*\d{1,8}\s*[集话期章]/);
        let base = parts.length > 1
            ? (parts[0].trim() || parts.slice(1).join('').trim() || noRuntime)
            : noRuntime;
        // 腾讯常见「重生密码_01_电视剧_…」：去掉纯数字集数段
        base = base.replace(/(?:^|[_\-—|\s])0*\d{1,3}(?=[_\-—|\s]|$)/g, ' ').replace(/\s+/g, ' ').trim() || base;
        base = base.replace(SITE_TAIL_RE, '');
        // 站点品牌尾巴（YouTube / 爱壹帆 / OnDemandChina / 唐人街…）
        base = base.replace(/\s*[-—|_]\s*(YouTube|Netflix|NETFLIX|bilibili|Bilibili|OnDemandChina|爱壹帆|唐人街影院|iyf\.tv)\s*$/i, '').trim();
        // 「剧名-28-免费在线观看」中间的裸集数段（iyf / 部分 MacCMS 标题）
        base = base.replace(/(?:^|[-—|_\s])0*\d{1,3}(?=[-—|_\s](?:免费|在线|高清|正片|全集|更新|$))/g, ' ').replace(/\s+/g, ' ').trim() || base;
        // 标题常见「剧名+类型词+第N集」，切掉集数后类型词会粘在剧名尾巴上
        base = base.replace(/(电视连续剧|电视剧|网络剧|综艺(节目)?|动漫|动画片?|纪录片|电影|短剧)$/,'').trim() || base;
        // 去掉标题里已可识别的英文集数标记，避免与集数列重复
        base = base.replace(/\bS\s*\d{1,2}\s*[Eex]\s*\d{1,3}\b/ig, ' ')
                   .replace(/\b(?:Episodes?|Ep)\.?\s*\d{1,4}\b/ig, ' ')
                   .replace(/\s+/g, ' ').trim() || base;
        const segs = base.split(/[-—|_]/).map(s => s.trim()).filter(Boolean);
        while (segs.length > 1 && isNoiseSeg(segs[segs.length - 1])) segs.pop();
        // B站英文路径「中文名-Anime-Complete series-…」：优先保留中文段
        if (segs.length > 1) {
            const zh = segs.find(s => /[\u4e00-\u9fff]{2,}/.test(s));
            if (zh && segs.some(s => /anime|complete|official|version|watch|online|series|hd/i.test(s))) {
                segs.length = 0;
                segs.push(zh);
            }
        }
        const candidates = [
            segs.join('-').replace(NOISE_WORDS, '').replace(RUNTIME_TAIL_RE, '').replace(/(\D)[\s\-]*\d{1,3}$/, '$1'),
            base.replace(NOISE_WORDS, '').replace(RUNTIME_TAIL_RE, ''),
            original,
        ];
        for (const c of candidates) {
            const t = c.trim();
            if (t.length >= 2) return t;
        }
        return '';
    }

    // 站点级兜底标题：播放页还没渲染出片名时，document.title 会是「爱奇艺-在线视频网站-海量正版…」
    // 这种门户标题，绝不能当剧名显示（真实端到端跑出来过这个笑话）。
    // 只列门户式兜底标题的特征词，宁窄勿宽：正常片名里出现的“在线观看”等不能误判
    const GENERIC_TITLE_RE = /(在线视频网站|海量正版|官网首页|免费在线观看视频|领先的视频平台|弹幕视频网站|好剧看不完|つロ 干杯)/;
    const BARE_SITE_NAMES = new Set(['爱奇艺', 'iqiyi', '腾讯视频', 'v.qq', '优酷', 'youku', '搜狐视频',
        '哔哩哔哩', 'bilibili', 'bili', '芒果tv', 'mgtv', 'netflix', 'youtube']);

    function isJunkSource(text) {
        const t = String(text || '').replace(/\s+/g, ' ').trim();
        if (!t) return true;
        if (GENERIC_TITLE_RE.test(t)) return true;
        const low = t.toLowerCase();
        if (BARE_SITE_NAMES.has(low)) return true;
        const cleaned = cleanTitle(t).toLowerCase();
        return cleaned.length < 2 || BARE_SITE_NAMES.has(cleaned);
    }

    function isPureEpisodeLike(txt) {
        return /^(第\s*\d{1,8}\s*[集话期]|P?\d{1,4})$/i.test(String(txt || '').trim());
    }

    // 播放器标题区原文（剧名和集数常常写在同一行）
    function readHeadTexts() {
        const sels = SITE_TITLE_SELECTORS[pickSiteKey()] || [];
        const out = [];
        for (const sel of sels) {
            let nodes = [];
            try { nodes = Array.from(document.querySelectorAll(sel)).slice(0, 4); } catch (e) { continue; }
            for (const el of nodes) {
                const t = String(el.textContent || el.getAttribute('title') || '').replace(/\s+/g, ' ').trim();
                if (t && t.length <= 160 && !isJunkSource(t) && out.indexOf(t) < 0) out.push(t);
            }
        }
        const og = document.querySelector('meta[property="og:title"], meta[name="twitter:title"]');
        if (og) {
            const t = String(og.getAttribute('content') || '').trim();
            if (t && t.length <= 160 && !isJunkSource(t)) out.push(t);
        }
        return out;
    }

    // v6.0 通用站兜底：结构化数据（JSON-LD）里常带 name / headline / episodeNumber，
    // 比页面标题干净，标题区识别不到时用它补。深度与数量都做限制，避免在大站上扫太多脚本。
    // updateTitle 每 2 秒跑一次，JSON-LD 没必要反复解析：8 秒内复用上次结果
    const ldCache = { at: 0, info: { name: '', episode: '' } };

    function readJsonLdInfo() {
        if (Date.now() - ldCache.at < 8000) return ldCache.info;
        const out = { name: '', episode: '' };
        let scripts = [];
        try {
            scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).slice(0, 6);
        } catch (e) {
            ldCache.at = Date.now();
            ldCache.info = out;
            return out;
        }
        for (const s of scripts) {
            let data = null;
            try { data = JSON.parse(s.textContent || 'null'); } catch (e) { continue; }
            const nodes = [];
            const walk = (n, depth) => {
                if (!n || depth > 4 || nodes.length > 60) return;
                if (Array.isArray(n)) { n.forEach(x => walk(x, depth + 1)); return; }
                if (typeof n !== 'object') return;
                nodes.push(n);
                if (n['@graph']) walk(n['@graph'], depth + 1);
                ['itemListElement', 'episode', 'partOfSeries', 'mainEntity', 'itemList'].forEach(k => {
                    if (n[k]) walk(n[k], depth + 1);
                });
            };
            walk(data, 0);
            for (const n of nodes) {
                const nm = String(n.name || n.headline || '').replace(/\s+/g, ' ').trim();
                if (!out.name && nm.length >= 2 && nm.length <= 60 && !isJunkSource(nm)) out.name = nm;
                const no = n.episodeNumber;
                if (!out.episode && no !== undefined && no !== null && /^\d{1,4}$/.test(String(no).trim())) {
                    const num = parseInt(String(no).trim(), 10);
                    if (num >= 1 && num <= 800) out.episode = `第${num}集`;
                }
            }
            if (out.name && out.episode) break;
        }
        ldCache.at = Date.now();
        ldCache.info = out;
        return out;
    }

    // 选集容器：CSS Module 下大小写混用（superAlbumEpisodes / videolist_xxx），一律加 i 忽略大小写
    const EPISODE_BOX_SEL = '[class*="episode" i],[class*="anthology" i],[class*="videolist" i],[class*="video-list" i],' +
        '[class*="album" i],[class*="series" i],[class*="catalog" i],[class*="select-list" i],' +
        '[class*="chooselist" i],[class*="choose-list" i],[class*="cap-list" i],[class*="ep-list" i]';
    const ACTIVE_TOKENS = new Set(['active', 'selected', 'current', 'cur', 'playing', 'checked',
        'on', 'now', 'is-active', 'is-play', 'play-on', 'highline', 'highlight', 'playing-now']);

    function hasStateClass(el) {
        if (!el || !el.getAttribute) return false;
        if (el.getAttribute('aria-current')) return true;
        if (el.dataset && (el.dataset.active || el.dataset.current)) return true;
        return String(el.getAttribute('class') || '').split(/\s+/).some(tk => {
            const low = tk.toLowerCase();
            // 既要认精确 token（selected），也要认 CSS Module 形式（tabMenu_selected__-BAEY、playingIcon_bar__aIMgO）
            return ACTIVE_TOKENS.has(low) || /(^|[_\-\s])(active|selected|current|playing|checked)([_\-\s]|$)/.test(low);
        });
    }

    // 统一的集数提取。strict=true 用于选集列表项这类“混合文本”，只认明确格式；
    // 真实站点踩过坑：综艺选集项写成「11-17第2期…」，非严格模式会先把日期 11-17 里的
    // 11 猜成“第11期”，把正确结果压掉。
    function extractEpisode(text, unitHint, strict) {
        let t = String(text || '').replace(/\s+/g, ' ').trim();
        if (!t || t.length > 140) return '';
        // 腾讯播放器标题常见「重生密码 第01集15:18」，先去掉尾部时长再匹配
        t = t.replace(RUNTIME_TAIL_RE, '').trim() || t;
        let m = t.match(/第\s*(\d{1,8})\s*([集话期章])/);
        if (m) return `第${m[1]}${m[2]}`;
        // iyf / 部分站标题：「剧名-28-免费在线观看」或「剧名 28」
        m = t.match(/(?:^|[-—|_\s])0*(\d{1,3})(?=[-—|_\s](?:免费|在线|高清|正片|全集|更新|爱壹帆|$))/);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 800) return `第${n}${unitHint || '集'}`;
        }
        m = t.match(/第\s*(\d{1,8})(?![\d])/);
        if (m) return `第${m[1]}${unitHint || '集'}`;
        // 英文站常见：Episode 12 / Ep. 3 / EP 07 / S01E05 / S1E2
        m = t.match(/\b(?:Episode|Episodes?)\s*[.#:\-]?\s*(\d{1,4})\b/i);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 800) return `第${n}${unitHint || '集'}`;
        }
        m = t.match(/\bEp\.?\s*(\d{1,4})\b/i);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 800) return `第${n}${unitHint || '集'}`;
        }
        m = t.match(/\bS\s*(\d{1,2})\s*[Eex]\s*(\d{1,3})\b/i);
        if (m) {
            const n = parseInt(m[2], 10);
            if (n >= 1 && n <= 800) return `第${n}${unitHint || '集'}`;
        }
        if (/^\d{1,4}$/.test(t)) {
            const n = parseInt(t, 10);
            return (n >= 1 && n <= 800) ? `第${n}${unitHint || '集'}` : '';
        }
        // 以下是“从整行标题里找裸编号”（如 《狂飙》01_电视剧），只用于标题/文档标题，
        // 选集项一律不走，避免把日期、年份、评分里的数字当集数
        if (strict) return '';
        m = t.match(/(?:^|[\s》)）】\-_])(\d{1,3})(?=$|[\s_\-—|《（(】])/);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 300) return `第${n}${unitHint || '集'}`;
        }
        m = t.match(/\bP\s*(\d{1,4})\b/i);
        if (m) return `P${m[1]}`;
        return '';
    }

    function unitHintOf(text) {
        const m = String(text || '').match(/第\s*\d{1,8}\s*([集话期])/);
        return m ? m[1] : '';
    }

    // 选集列表里的“当前集”。选中态必须唯一才可信：真实爱奇艺每个选集项都挂着
    // tvg-playing-icon 这类装饰节点，多项命中说明它不是“正在播放”标记，此时宁可不认，
    // 把判断让给播放器标题区和 document.title。
    function readDomEpisode(unitHint) {
        const all = Array.from(document.querySelectorAll(EPISODE_BOX_SEL));
        // 只认顶层容器：否则列表里每个 a/span（class 都带 videoListItem_）也会成为“容器”，
        // 各自内部恰好只有一个选中节点，上面的唯一性判断就被架空了——真实站点正是这样翻车的。
        const boxes = all.filter(el => !all.some(o => o !== el && o.contains(el))).slice(0, 6);
        for (const box of boxes) {
            const hits = [];
            const cand = Array.from(box.querySelectorAll('[class],[aria-current]')).slice(0, 400);
            for (const el of cand) {
                if (!hasStateClass(el)) continue;
                const item = (el.matches && el.matches('li,a')) ? el : ((el.closest && el.closest('li,a')) || el);
                if (hits.indexOf(item) < 0) hits.push(item);
            }
            if (hits.length !== 1) continue;
            const text = String(hits[0].textContent || '').replace(/\s+/g, ' ').trim();
            if (!text || text.length > 60) continue;
            const hit = extractEpisode(text, unitHint, true);
            if (hit) return hit;
        }
        return '';
    }

    // MacCMS 播放页 URL：/play/105860-2-18.html 或 /vodplay/xxx-1-18.html，末段 nid 即集序号
    function episodeFromUrl() {
        try {
            const path = location.pathname || '';
            let m = path.match(/\/(?:vod)?play\/[\w-]*?(\d+)[-_](\d+)[-_](\d+)(?:\.html)?/i);
            if (m) {
                const n = parseInt(m[3], 10);
                if (n >= 1 && n <= 2000) return `第${n}集`;
            }
            m = location.search.match(/[?&](?:nid|ep|episode|n)=(\d{1,4})\b/i);
            if (m) {
                const n = parseInt(m[1], 10);
                if (n >= 1 && n <= 2000) return `第${n}集`;
            }
        } catch (e) {}
        return '';
    }

    function getEpisodeInfo() {
        if (config.customText) return { title: config.customText, episode: '' };

        const page = document.title || '';
        const heads = readHeadTexts();
        const joined = heads.join(' ');
        const unit = unitHintOf(page) || unitHintOf(joined) || '集';
        // 兜底标题里没有集数，unit 猜不出来就用默认“集”，不影响后续降级

        // 剧名：播放器标题区 > document.title。但标题区常常是「剧名 第2期 本集副标题」，
        // 若副标题前没有集数可切（head 未渲染期号），document.title 解析出的更短剧名
        // 且正好是它的前缀时，说明标题区被副标题污染，取更干净的那个。
        const pageOk = !isJunkSource(page);
        const fromPage = pageOk ? cleanTitle(page.split(/第\s*\d{1,8}\s*[集话期章]/)[0] || page) : '';
        const ld = readJsonLdInfo(); // v6.0 通用站结构化数据兜底

        let title = '';
        for (const h of heads) {
            const c = cleanTitle(h);
            if (c.length >= 2 && c.length <= 60 && !isPureEpisodeLike(c)) { title = c; break; }
        }
        if (!title && ld.name) {
            const c = cleanTitle(ld.name);
            if (c.length >= 2 && c.length <= 60 && !isPureEpisodeLike(c)) title = c;
        }
        if (!title && fromPage.length >= 2 && !isPureEpisodeLike(fromPage)) title = fromPage;
        if (title && fromPage.length >= 2 && fromPage.length < title.length && title.indexOf(fromPage) === 0) {
            title = fromPage;
        }

        // 集数：选集“正在播放”项 > 播放器标题区 > JSON-LD > document.title。
        // 选集高亮/playing 图标是播放器运行时写上去的，切集时最可靠；
        // 标题区和 document.title 都可能是服务端渲染的初始值，会滞后。
        let episode = readDomEpisode(unit);
        if (!episode) {
            // 标题区同样按严格模式：它常带着「33分钟」这类时长数字，不能瞎猜裸编号
            for (const h of heads) {
                const e = extractEpisode(h, unit, true);
                if (e) { episode = e; break; }
            }
        }
        if (!episode && ld.episode) episode = ld.episode;
        // 只有 document.title 允许非严格（《狂飙》01_电视剧 这种裸编号格式只出现在标题里）
        if (!episode && pageOk) episode = extractEpisode(page, unit);
        // MacCMS / 第三方站：URL 里的集序号往往比标题更准
        if (!episode) episode = episodeFromUrl();

        return { title, episode };
    }

    let lastRenderedText = null;
    let overlayHasText = true;      // 初始为 true：首帧先按“有内容”渲染，识别不到再由 updateTitle 收掉
    let detectState = { title: '', episode: '', source: '' };

    // 识别状态回显：爱奇艺改版导致选择器失配时，用户在面板上能直接看到“未识别到”，
    // 而不是对着一个空白框猜是脚本坏了还是网站变了。
    function refreshDetectState() {
        if (!panelEl) return;
        const box = panelEl.querySelector('#ets-detectState');
        if (!box) return;
        const t = detectState.title || '未识别';
        const e = detectState.episode || '未识别';
        box.textContent = `识别结果 → 剧名：${t}　集数：${e}`;
        box.style.color = (detectState.title && detectState.episode) ? '' : themeWarnColor();
    }

    function themeWarnColor() {
        const theme = getTheme();
        return (THEMES[config.theme] && config.theme === 'minimal') ? '#c62828' : theme.accent;
    }

    // 剧名与集数各自独立字号：集数默认自动取剧名的 70%，也可手动指定（仍跟随屏幕缩放）
    let currentTitleFs = 0;

    function computeTitleFontSize(isVertical) {
        const viewportScale = config.adaptiveFontSize
            ? Math.min(1, window.innerWidth / 1200, window.innerHeight / 720)
            : 1;
        let fs = Math.max(14, Math.round(config.fontSize * viewportScale));
        if (isVertical) {
            const raw = String(titleEl.textContent || '');
            const avail = window.innerHeight * 0.9 - 44;
            if (config.compactEp !== false) {
                // v6.7 合并显示：单段文字靠 max-height 自动折成多列，不再按整段长度压字号
                // （旧算法对 20 字以上的整段会一直压到 14px 仍溢出）；只在超长时轻微缩小一次。
                const len = raw.replace(/\s+/g, '').length;
                if (len > 40) fs = Math.max(16, Math.round(fs * Math.min(1, 40 / len)));
            } else {
                const longest = raw.split('\n').reduce((m, line) => Math.max(m, line.trim().length), 0) || 1;
                if (longest * (fs + 6) > avail) fs = Math.max(14, Math.floor(avail / longest - 6));
            }
        }
        return fs;
    }

    function computeEpisodeFontSize(fs) {
        const manual = Number(config.episodeFontSize) || 0;
        if (manual > 0) {
            // 手动值同样按当前缩放比例折算，小屏上不会比剧名还大
            const ratio = fs / Math.max(1, config.fontSize || 1);
            return Math.max(10, Math.round(manual * ratio));
        }
        return Math.max(12, Math.round(fs * 0.7));
    }

    // v6.7：集数只取数字部分，「第1集 / 第2期 / 第3话」统一成 1 / 2 / 3
    function episodeNumberText(ep) {
        return String(ep || '').replace(/^第\s*/, '').replace(/\s*(集|话|期|章)$/, '').replace(/^0+(?=\d)/, '').trim();
    }

    // 最终显示的文本：合并模式是「剧名+数字」（红日第一集 → 红日1），否则仍是「剧名 集数」
    function displayText(title, episode) {
        const t = config.displayMode !== 'episode' && title ? String(title).trim() : '';
        const e = config.displayMode !== 'title' && episode ? String(episode).trim() : '';
        if (config.compactEp !== false) {
            if (t && e) return t + episodeNumberText(e);
            return t || episodeNumberText(e) || '';
        }
        return [t, e].filter(Boolean).join('\n');
    }

    // 渲染：合并模式下整块只有一个 span（单列；超长剧名由 max-height 自动折成多列）；
    // 关闭合并则保留旧行为：剧名 span + 换行 + 集数 span，各用各的字号。
    function renderTitleParts(title, episode) {
        if (!titleEl) return;
        while (titleEl.firstChild) titleEl.removeChild(titleEl.firstChild);
        if (config.compactEp !== false) {
            const text = displayText(title, episode);
            if (text) {
                const span = document.createElement('span');
                span.className = 'evt-title';
                span.textContent = text;
                titleEl.appendChild(span);
            }
            applyEpisodeFontSize();
            return;
        }
        const showTitle = config.displayMode !== 'episode' && !!title;
        const showEp = config.displayMode !== 'title' && !!episode;
        if (showTitle) {
            const t = document.createElement('span');
            t.className = 'evt-title';
            t.textContent = title;
            titleEl.appendChild(t);
        }
        if (showTitle && showEp) titleEl.appendChild(document.createTextNode('\n'));
        if (showEp) {
            const e = document.createElement('span');
            e.className = 'evt-episode';
            e.textContent = episode;
            titleEl.appendChild(e);
        }
        applyEpisodeFontSize();
    }

    function applyEpisodeFontSize() {
        if (!titleEl) return;
        const ep = titleEl.querySelector('.evt-episode');
        if (ep) ep.style.fontSize = computeEpisodeFontSize(currentTitleFs || 24) + 'px';
    }

    function updateTitle() {
        if (!titleEl) return;
        const { title, episode } = getEpisodeInfo();

        // 降级链：两个都有 → 剧名+集数；只有一个 → 只显示那一个；都没有 → 整块隐藏
        const parts = [];
        if (config.displayMode !== 'episode' && title) parts.push(title);
        if (config.displayMode !== 'title' && episode) parts.push(episode);
        const text = displayText(title, episode);

        detectState.title = title;
        detectState.episode = episode;

        const nowHasText = !!text.trim();
        if (nowHasText !== overlayHasText) {
            overlayHasText = nowHasText;   // 空框问题在这里收掉（隐藏 / 恢复都走样式）
            applyTitleStyle();
        }
        if (!nowHasText) {
            refreshDetectState();
            return;
        }

        if (text === lastRenderedText && titleEl.textContent === text) {
            refreshDetectState();
            return; // 文本没变就不重排
        }
        const hadRealText = !!(lastRenderedText && lastRenderedText.trim());
        lastRenderedText = text;
        renderTitleParts(title, episode);
        contentChangedAt = Date.now(); // 沉浸淡出重新计时
        // 只在“原本已有内容 → 换成新内容”时重播，避免首次识别出来也闪一下
        if (hadRealText && nowHasText && config.replayOnEpisodeChange) playEntranceAnimation();
        refreshDetectState();
    }

    // ============ 全屏检测 ============
    function checkFullscreen() {
        mountOverlays();
        applyTitleStyle();
        applyAvatarStyle();   // v6.0：头像按钮默认只跟随全屏显隐
        updateTitle();
        // v6.6：窗口模式被隐藏、进全屏才首次露面时，把入场动画补上（只播一次）
        if (config.animation && !animationPlayed && isTitleVisibleNow()) {
            playEntranceAnimation();
            animationPlayed = true;
        }
    }

    // 轻量校准：只在「宿主变了 / 全屏状态变了 / 节点被播放器重建摘掉」时才重绘，
    // 避免高频重写 cssText 造成闪烁。
    function syncOverlay(force) {
        if (!titleEl) return;
        const host = getOverlayHost();
        const fsChanged = isFullscreen() !== lastFsState;
        const hostChanged = !titleEl.isConnected || titleEl.parentElement !== host;
        const fadeChanged = shouldFadeNow() !== lastFaded;
        if (force || fsChanged || hostChanged || fadeChanged) checkFullscreen();
    }

    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
        .forEach(evt => document.addEventListener(evt, checkFullscreen));
    // 部分站点进入/退出伪全屏只触发 fullscreenerror 或不触发事件，靠下面的轮询兜底
    window.addEventListener('resize', () => syncOverlay(true));

    // ============ 爱奇艺伪全屏监听 ============
    const IQIYI_FS_SELECTORS = [
        '.iqp-player', '.iqp-player-container', '#flashbox',
        '#player', '.player-container', '.playBox-area', '.player-wrap',
    ];

    function watchIqiyiFullscreen() {
        let throttled = false;
        const onMutate = () => {
            if (throttled) return;
            throttled = true;
            requestAnimationFrame(() => {
                throttled = false;
                syncOverlay(true);
            });
        };

        const obs = new MutationObserver(onMutate);
        const bindTargets = () => {
            const targets = IQIYI_FS_SELECTORS
                .map(sel => document.querySelector(sel))
                .filter(el => el && (!el.__etsObserved || el.__etsObserved !== obs));
            targets.forEach(t => {
                t.__etsObserved = obs;
                obs.observe(t, { attributes: true, attributeFilter: ['class', 'style'] });
            });
            return targets.length;
        };

        bindTargets();
        // 爱奇艺是 SPA，播放器容器可能晚于脚本初始化才出现，补绑几次
        let retries = 0;
        const bindTimer = setInterval(() => {
            if (bindTargets() > 0 || ++retries > 30) clearInterval(bindTimer);
        }, 1000);
    }

    // ============ 设置面板 ============
    let panelEl = null;
    let waitingForKey = null;

    function buildPanelCSS() {
        const theme = getTheme();
        return `
            #episode-title-settings-panel {
                position: fixed;
                top: 80px;
                right: 20px;
                width: 280px;
                max-width: calc(100vw - 40px);
                background: ${theme.panelBg};
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid ${theme.panelBorder};
                border-radius: 12px;
                color: #eee;
                font-size: 13px;
                font-family: "Microsoft YaHei", sans-serif;
                z-index: 2147483647;
                box-shadow: 0 8px 32px rgba(0,0,0,0.5);
                display: none;
            }
            #episode-title-settings-panel .ets-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                border-bottom: 1px solid ${theme.panelBorder};
                cursor: move;
                touch-action: none;
                font-weight: bold;
                font-size: 14px;
            }
            #episode-title-settings-panel .ets-close {
                cursor: pointer;
                opacity: 0.6;
                font-size: 16px;
            }
            #episode-title-settings-panel .ets-close:hover { opacity: 1; }
            #episode-title-settings-panel .ets-body {
                padding: 12px 16px;
                max-height: 70vh;
                overflow-y: auto;
            }
            #episode-title-settings-panel .ets-body::-webkit-scrollbar { width: 6px; }
            #episode-title-settings-panel .ets-body::-webkit-scrollbar-thumb { background: ${theme.accent}; border-radius: 3px; }
            #episode-title-settings-panel label {
                display: block;
                margin: 8px 0 4px;
                font-size: 12px;
                opacity: 0.9;
            }
            #episode-title-settings-panel input[type="range"] {
                width: 100%;
                accent-color: ${theme.accent};
            }
            #episode-title-settings-panel input[type="text"],
            #episode-title-settings-panel input[type="color"],
            #episode-title-settings-panel select {
                width: 100%;
                background: rgba(255,255,255,0.1);
                border: 1px solid ${theme.panelBorder};
                border-radius: 6px;
                color: #fff;
                padding: 6px 8px;
                font-size: 12px;
                box-sizing: border-box;
            }
            #episode-title-settings-panel input[type="color"] { height: 32px; cursor: pointer; }
            #episode-title-settings-panel button {
                width: 100%;
                margin-top: 12px;
                padding: 8px;
                background: rgba(255,255,255,0.1);
                border: 1px solid ${theme.panelBorder};
                border-radius: 6px;
                color: ${theme.accent};
                cursor: pointer;
                font-size: 12px;
            }
            #episode-title-settings-panel button:hover { background: rgba(255,255,255,0.2); }
            #episode-title-settings-panel input[type="checkbox"] { margin-right: 6px; }
            #episode-title-settings-panel .ets-divider {
                border-top: 1px solid ${theme.panelBorder};
                margin: 12px 0 4px;
                padding-top: 8px;
                font-weight: bold;
                color: ${theme.accent};
            }
            #episode-title-settings-panel .ets-row {
                display: flex;
                gap: 8px;
            }
            #episode-title-settings-panel .ets-preset-on {
                background: rgba(255,255,255,0.22);
                border-color: ${theme.accent};
                box-shadow: inset 0 0 0 1px ${theme.accent};
            }
            #episode-title-settings-panel .ets-half-btn {
                flex: 1;
                margin-top: 0;
                font-size: 11px;
                padding: 6px;
            }
            #episode-title-settings-panel .ets-mini-btn {
                width: auto;
                margin: 0 0 0 6px;
                padding: 2px 8px;
                font-size: 10px;
                display: inline-block;
            }
            #episode-title-settings-panel .ets-kbd {
                background: rgba(255,255,255,0.15);
                padding: 1px 6px;
                border-radius: 3px;
                font-family: monospace;
                font-size: 11px;
            }
            #episode-title-settings-panel .ets-site-info {
                margin-top: 12px;
                font-size: 10px;
                opacity: 0.5;
                text-align: center;
            }
            #episode-title-settings-panel #ets-detectState {
                text-align: left;
                opacity: 0.85;
                line-height: 1.6;
                word-break: break-all;
            }
            #episode-title-settings-panel .ets-avatar-preview {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                object-fit: cover;
                display: block;
                margin: 6px 0 2px;
                background: rgba(255,255,255,0.1);
                border: 1px solid ${theme.panelBorder};
            }
            #episode-title-settings-panel .ets-hint {
                font-size: 10px;
                opacity: 0.55;
                line-height: 1.5;
                margin-top: 2px;
            }
            #ets-toast {
                position: fixed;
                left: 50%;
                bottom: 12%;
                transform: translateX(-50%);
                padding: 8px 18px;
                border-radius: 999px;
                background: rgba(20,20,20,0.92);
                color: #fff;
                font-size: 13px;
                font-family: "Microsoft YaHei", sans-serif;
                border: 1px solid rgba(255,255,255,0.2);
                box-shadow: 0 6px 20px rgba(0,0,0,0.45);
                z-index: 2147483647;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.25s ease;
            }
            #ets-toast.ets-toast-on { opacity: 1; }
        `;
    }

    // 手动调过任何一项，就退出“预设态”，按钮不再高亮。
    // 头像相关控件不属于观感预设，带 data-nonpreset 的控件改动不触发退出预设。
    function markCustomPreset(e) {
        if (e && e.target && e.target.closest && e.target.closest('[data-nonpreset]')) return;
        if (config.preset === 'custom') return;
        config.preset = 'custom';
        saveConfig();
        refreshPresetButtons();
    }

    function refreshPresetButtons() {
        if (!panelEl) return;
        ['pc', 'mobile', 'minimal'].forEach(k => {
            const b = panelEl.querySelector('#ets-preset-' + k);
            if (b) b.classList.toggle('ets-preset-on', config.preset === k);
        });
    }

    function applyPreset(key) {
        const p = PRESETS[key];
        if (!p) return;
        Object.assign(config, p.cfg);
        config.preset = key;
        saveConfig();
        applyTitleStyle();
        updateTitle();
        createPanel();            // 重建面板，让所有滑杆/下拉同步到新值
        panelEl.style.display = 'block';
    }

    // 面板 HTML 用模板串拼装，用户可控的字符串（头像地址、自定义文字）必须先转义
    function escapeAttr(v) {
        return String(v == null ? '' : v)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // 面板显隐：初始 display 来自样式表（none），只看内联 style 会判错，
    // 首次点击头像/快捷键时统一按计算样式判断，避免“点一下没反应、要点两下”。
    function isPanelVisible() {
        if (!panelEl) return false;
        if (panelEl.style.display === 'block') return true;
        if (panelEl.style.display === 'none') return false;
        try {
            return getComputedStyle(panelEl).display !== 'none';
        } catch (e) {
            return false;
        }
    }

    function setPanelVisible(show) {
        if (!panelEl) return;
        if (show) {
            mountOverlays(); // 全屏时把面板一起带进 top layer
            panelEl.style.display = 'block';
        } else {
            panelEl.style.display = 'none';
        }
    }

    function createPanel() {
        if (panelEl) panelEl.remove();
        const theme = getTheme();

        panelEl = document.createElement('div');
        panelEl.id = 'episode-title-settings-panel';
        panelEl.innerHTML = `
            <div class="ets-header">
                <span>📺 显示设置</span>
                <span class="ets-close">✕</span>
            </div>
            <div class="ets-body">
                <div class="ets-divider">一键预设</div>
                <div class="ets-row">
                    <button id="ets-preset-pc" class="ets-half-btn">电脑</button>
                    <button id="ets-preset-mobile" class="ets-half-btn">手机</button>
                    <button id="ets-preset-minimal" class="ets-half-btn">极简</button>
                </div>
                <label><input type="checkbox" id="ets-enabled"> 启用显示</label>
                <label><input type="checkbox" id="ets-perSite"> 按网站独立配置</label>

                <label>位置</label>
                <select id="ets-position">
                    <option value="left">左侧</option>
                    <option value="right">右侧</option>
                </select>

                <label>排列方向</label>
                <select id="ets-layout">
                    <option value="vertical">竖排</option>
                    <option value="horizontal">横排</option>
                </select>

                <label>显示内容</label>
                <select id="ets-displayMode">
                    <option value="both">剧名 + 集数</option>
                    <option value="title">仅剧名</option>
                    <option value="episode">仅集数</option>
                </select>
                <label><input type="checkbox" id="ets-compactEp"> 剧名+集数合并显示（红日1；长剧名自动分列）</label>

                <label>主题</label>
                <select id="ets-theme">
                    ${Object.entries(THEMES).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join('')}
                </select>

                <label>字体大小: <span id="ets-fontSize-val">${config.fontSize}</span>px</label>
                <input type="range" id="ets-fontSize" min="16" max="80" value="${config.fontSize}">

                <label>字体粗细</label>
                <select id="ets-fontWeight">
                    <option value="400">普通</option>
                    <option value="700">粗体</option>
                    <option value="900">特粗</option>
                </select>

                <label>文字颜色</label>
                <input type="color" id="ets-color" value="${config.color}">

                <label>背景透明度: <span id="ets-bgOpacity-val">${config.bgOpacity}</span></label>
                <input type="range" id="ets-bgOpacity" min="0" max="1" step="0.05" value="${config.bgOpacity}">

                <label>列间距: <span id="ets-colGap-val">${config.columnGap}</span>px</label>
                <input type="range" id="ets-colGap" min="0" max="40" step="2" value="${config.columnGap}">
                <label>集数字号: <span id="ets-epSize-val">${config.episodeFontSize || '自动'}</span>${config.episodeFontSize ? 'px' : '（0=自动≈剧名70%）'}</label>
                <input type="range" id="ets-epSize" min="0" max="60" step="2" value="${config.episodeFontSize}">
                <label>垂直位置: <span id="ets-offsetY-val">${config.offsetY}</span>%</label>
                <input type="range" id="ets-offsetY" min="10" max="90" value="${config.offsetY}">

                <label>自定义文字（留空自动识别）</label>
                <input type="text" id="ets-customText" placeholder="覆盖自动识别" value="${escapeAttr(config.customText)}">

                <label class="ets-divider">快捷键</label>
                <label>切换显示: <span id="ets-hotkeyToggle" class="ets-kbd">${config.hotkeyToggle}</span> <button id="ets-setToggleKey" class="ets-mini-btn">修改</button></label>
                <label>打开设置: <span id="ets-hotkeySettings" class="ets-kbd">${config.hotkeySettings}</span> <button id="ets-setSettingsKey" class="ets-mini-btn">修改</button></label>

                <label class="ets-divider">设置头像</label>
                <label>头像图片地址（留空 = 内置头像）</label>
                <img class="ets-avatar-preview" id="ets-avatarPreview" alt="">
                <input type="text" id="ets-avatarUrl" data-nonpreset placeholder="https://… 图片地址" value="${escapeAttr(config.avatarUrl)}">
                <div class="ets-row">
                    <button id="ets-avatarUpload" class="ets-half-btn">上传图片</button>
                    <button id="ets-avatarClear" class="ets-half-btn">清除头像</button>
                </div>
                <input type="file" id="ets-avatarFile" data-nonpreset accept="image/*" style="display:none">
                <label data-nonpreset><input type="checkbox" id="ets-avatarFsOnly"> 头像仅在全屏显示</label>
                <div class="ets-hint">头像按钮即设置入口，点它打开本面板；头像被隐藏时按快捷键 ${config.hotkeySettings} 可打开本面板。</div>

                <label class="ets-divider">其他</label>
                <label><input type="checkbox" id="ets-animation"> 启用入场动画</label>
                <label><input type="checkbox" id="ets-autoHideFullscreen"> 全屏时隐藏标题（默认关闭 = 全屏也显示）</label>
                <label><input type="checkbox" id="ets-fullscreenOnly"> 仅全屏时显示标题（窗口模式隐藏）</label>
                <label><input type="checkbox" id="ets-touchMode"> 启用触摸手势</label>
                <label><input type="checkbox" id="ets-uprightDigits"> 数字竖立显示（不横躺）</label>
                <label><input type="checkbox" id="ets-replayAnim"> 切集时重播入场动画</label>
                <label><input type="checkbox" id="ets-adaptive"> 小屏自动缩小字号</label>
                <label>沉浸淡出: <span id="ets-immersiveFade-val">${config.immersiveFade}</span>s（0=常显）</label>
                <input type="range" id="ets-immersiveFade" min="0" max="60" step="5" value="${config.immersiveFade}">

                <label class="ets-divider">保存</label>
                <button id="ets-save">保存设置</button>
                <div class="ets-hint">调整后立即生效；点“保存设置”会写入油猴存储（并双写 localStorage 兜底）。</div>

                <label class="ets-divider">导入/导出</label>
                <div class="ets-row">
                    <button id="ets-export" class="ets-half-btn">导出配置</button>
                    <button id="ets-import" class="ets-half-btn">导入配置</button>
                </div>
                <input type="file" id="ets-fileInput" accept=".json" style="display:none">

                <button id="ets-reset">重置默认</button>
                <div id="ets-detectState" class="ets-site-info">识别结果 → 剧名：—　集数：—</div>
                <div class="ets-site-info">当前站点: ${location.hostname}　存储: ${gmStoreReady() ? '油猴存储' : 'localStorage'}</div>
            </div>
        `;

        // 移除旧样式
        const oldStyle = document.getElementById('episode-title-panel-style');
        if (oldStyle) oldStyle.remove();

        const panelStyle = document.createElement('style');
        panelStyle.id = 'episode-title-panel-style';
        panelStyle.textContent = buildPanelCSS();
        document.head.appendChild(panelStyle);
        document.body.appendChild(panelEl);

        bindPanelEvents();
        enablePanelDrag();
        applyPanelPos();      // 恢复上次拖动位置，并夹回当前视口内
        refreshPresetButtons();
        refreshDetectState(); // 面板一打开就是最新识别状态
    }

    function bindPanelEvents() {
        panelEl.querySelector('.ets-close').onclick = () => { setPanelVisible(false); };

        const enabledEl = panelEl.querySelector('#ets-enabled');
        enabledEl.checked = config.enabled;
        enabledEl.onchange = () => { config.enabled = enabledEl.checked; saveConfig(); applyTitleStyle(); };

        const perSiteEl = panelEl.querySelector('#ets-perSite');
        perSiteEl.checked = config.perSite;
        perSiteEl.onchange = () => {
            config.perSite = perSiteEl.checked;
            saveConfig();
            location.reload();
        };

        const posEl = panelEl.querySelector('#ets-position');
        posEl.value = config.position;
        posEl.onchange = () => { config.position = posEl.value; saveConfig(); applyTitleStyle(); };

        const layoutEl = panelEl.querySelector('#ets-layout');
        layoutEl.value = config.layout;
        layoutEl.onchange = () => { config.layout = layoutEl.value; saveConfig(); applyTitleStyle(); };

        const dispEl = panelEl.querySelector('#ets-displayMode');
        dispEl.value = config.displayMode;
        dispEl.onchange = () => { config.displayMode = dispEl.value; saveConfig(); updateTitle(); };

        const themeEl = panelEl.querySelector('#ets-theme');
        themeEl.value = config.theme;
        themeEl.onchange = () => {
            config.theme = themeEl.value;
            const t = getTheme();
            config.color = t.color;
            saveConfig();
            applyTitleStyle();
            const wasVisible = isPanelVisible();
            createPanel();
            mountOverlays(); // 重建后的面板要搬回当前全屏宿主
            if (wasVisible) panelEl.style.display = 'block';
        };

        const fsEl = panelEl.querySelector('#ets-fontSize');
        const fsVal = panelEl.querySelector('#ets-fontSize-val');

        fsEl.oninput = () => { config.fontSize = parseInt(fsEl.value); fsVal.textContent = config.fontSize; saveConfig(); applyTitleStyle(); };

        const fwEl = panelEl.querySelector('#ets-fontWeight');
        fwEl.value = config.fontWeight;
        fwEl.onchange = () => { config.fontWeight = fwEl.value; saveConfig(); applyTitleStyle(); };

        const colorEl = panelEl.querySelector('#ets-color');

        colorEl.onchange = () => { config.color = colorEl.value; saveConfig(); applyTitleStyle(); };

        const bgEl = panelEl.querySelector('#ets-bgOpacity');
        const bgVal = panelEl.querySelector('#ets-bgOpacity-val');
        bgEl.oninput = () => { config.bgOpacity = parseFloat(bgEl.value); bgVal.textContent = config.bgOpacity; saveConfig(); applyTitleStyle(); };

        const gapEl = panelEl.querySelector('#ets-colGap');
        const gapValEl = panelEl.querySelector('#ets-colGap-val');
        gapEl.oninput = () => {
            config.columnGap = parseInt(gapEl.value, 10);
            gapValEl.textContent = config.columnGap;
            saveConfig();
            applyTitleStyle();
        };

        const epEl = panelEl.querySelector('#ets-epSize');
        const epValEl = panelEl.querySelector('#ets-epSize-val');
        epEl.oninput = () => {
            config.episodeFontSize = parseInt(epEl.value, 10);
            epValEl.textContent = config.episodeFontSize || '自动';
            saveConfig();
            applyEpisodeFontSize();
        };

        const oyEl = panelEl.querySelector('#ets-offsetY');
        const oyVal = panelEl.querySelector('#ets-offsetY-val');
        oyEl.oninput = () => { config.offsetY = parseInt(oyEl.value); oyVal.textContent = config.offsetY; saveConfig(); applyTitleStyle(); };

        const ctEl = panelEl.querySelector('#ets-customText');
        ctEl.value = config.customText;
        ctEl.onchange = () => { config.customText = ctEl.value; saveConfig(); updateTitle(); };

        const animEl = panelEl.querySelector('#ets-animation');
        animEl.checked = config.animation;
        animEl.onchange = () => { config.animation = animEl.checked; saveConfig(); };

        const fsHideEl = panelEl.querySelector('#ets-autoHideFullscreen');
        const fsOnlyEl = panelEl.querySelector('#ets-fullscreenOnly');
        fsHideEl.checked = config.autoHideFullscreen;
        fsOnlyEl.checked = config.fullscreenOnly === true;

        // v6.6：两项互斥 —— 都开就等于窗口和全屏都不显示（永久隐身），勾一个自动关另一个
        fsHideEl.onchange = () => {
            config.autoHideFullscreen = fsHideEl.checked;
            if (config.autoHideFullscreen) {
                config.fullscreenOnly = false;
                fsOnlyEl.checked = false;
            }
            saveConfig();
            checkFullscreen();
        };
        fsOnlyEl.onchange = () => {
            config.fullscreenOnly = fsOnlyEl.checked;
            if (config.fullscreenOnly) {
                config.autoHideFullscreen = false;
                fsHideEl.checked = false;
            }
            saveConfig();
            checkFullscreen();
        };

        const touchEl = panelEl.querySelector('#ets-touchMode');
        touchEl.checked = config.touchMode;
        touchEl.onchange = () => { config.touchMode = touchEl.checked; saveConfig(); };

        panelEl.querySelector('#ets-preset-pc').onclick = () => applyPreset('pc');
        panelEl.querySelector('#ets-preset-mobile').onclick = () => applyPreset('mobile');
        panelEl.querySelector('#ets-preset-minimal').onclick = () => applyPreset('minimal');
        // 任何滑杆/开关/下拉被手动改动，即视为自定义配置
        panelEl.addEventListener('input', markCustomPreset);
        panelEl.addEventListener('change', markCustomPreset);

        const uprightEl = panelEl.querySelector('#ets-uprightDigits');
        uprightEl.checked = config.uprightDigits !== false;
        uprightEl.onchange = () => { config.uprightDigits = uprightEl.checked; saveConfig(); applyTitleStyle(); };

        const compactEl = panelEl.querySelector('#ets-compactEp');
        if (compactEl) {
            compactEl.checked = config.compactEp !== false;
            compactEl.onchange = () => {
                config.compactEp = compactEl.checked;
                saveConfig();
                updateTitle();
                applyTitleStyle();
            };
        }

        const replayEl = panelEl.querySelector('#ets-replayAnim');
        replayEl.checked = config.replayOnEpisodeChange;
        replayEl.onchange = () => { config.replayOnEpisodeChange = replayEl.checked; saveConfig(); };

        const adaptEl = panelEl.querySelector('#ets-adaptive');
        adaptEl.checked = config.adaptiveFontSize;
        adaptEl.onchange = () => { config.adaptiveFontSize = adaptEl.checked; saveConfig(); applyTitleStyle(); };

        const fadeEl = panelEl.querySelector('#ets-immersiveFade');
        const fadeValEl = panelEl.querySelector('#ets-immersiveFade-val');
        fadeEl.oninput = () => {
            config.immersiveFade = parseInt(fadeEl.value, 10);
            fadeValEl.textContent = config.immersiveFade;
            saveConfig();
            applyTitleStyle();
        };

        // v6.0 保存选项：显式落盘 + 立即重绘 + 轻提示，避免用户不确定有没有存上
        panelEl.querySelector('#ets-save').onclick = () => {
            const ok = saveConfig();
            applyTitleStyle();
            applyAvatarStyle();
            updateTitle();
            showToast(ok ? '设置已保存（重启浏览器后依然生效）' : '保存失败：浏览器或扩展拒绝写入存储');
        };

        // v6.0 设置头像
        const avUrlEl = panelEl.querySelector('#ets-avatarUrl');
        if (avUrlEl) {
            avUrlEl.onchange = () => {
                const v = sanitizeAvatarUrl(avUrlEl.value.trim());
                config.avatarUrl = v;
                avUrlEl.value = v;
                saveConfig();
                applyAvatarStyle();
                refreshAvatarPreview();
                showToast(v ? '头像地址已更新' : '已恢复内置头像');
            };
        }

        const avFsEl = panelEl.querySelector('#ets-avatarFsOnly');
        if (avFsEl) {
            avFsEl.checked = config.avatarFullscreenOnly !== false;
            avFsEl.onchange = () => {
                config.avatarFullscreenOnly = avFsEl.checked;
                saveConfig();
                applyAvatarStyle();
            };
        }

        const avFileEl = panelEl.querySelector('#ets-avatarFile');
        const avUploadBtn = panelEl.querySelector('#ets-avatarUpload');
        if (avUploadBtn && avFileEl) {
            avUploadBtn.onclick = () => avFileEl.click();
            avFileEl.onchange = (e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;
                // dataURL 要进 localStorage，先压成 128×128 再存，避免大图撑爆配额
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const dataUrl = String(ev.target.result || '');
                    const img = new Image();
                    img.onload = () => {
                        try {
                            const size = 128;
                            const canvas = document.createElement('canvas');
                            canvas.width = size;
                            canvas.height = size;
                            const ctx = canvas.getContext('2d');
                            const s = Math.min(img.width, img.height) || size;
                            ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
                            config.avatarUrl = canvas.toDataURL('image/jpeg', 0.85);
                        } catch (err) {
                            config.avatarUrl = dataUrl; // canvas 不可用时退回原图 dataURL
                        }
                        saveConfig();
                        applyAvatarStyle();
                        if (panelEl) {
                            const u = panelEl.querySelector('#ets-avatarUrl');
                            if (u) u.value = config.avatarUrl;
                        }
                        refreshAvatarPreview();
                        showToast('头像已更新');
                    };
                    img.onerror = () => showToast('图片读取失败');
                    img.src = dataUrl;
                };
                reader.readAsDataURL(file);
                avFileEl.value = '';
            };
        }

        const avClearBtn = panelEl.querySelector('#ets-avatarClear');
        if (avClearBtn) {
            avClearBtn.onclick = () => {
                config.avatarUrl = '';
                saveConfig();
                applyAvatarStyle();
                if (avUrlEl) avUrlEl.value = '';
                refreshAvatarPreview();
                showToast('已恢复内置头像');
            };
        }

        refreshAvatarPreview();

        panelEl.querySelector('#ets-setToggleKey').onclick = () => {
            waitingForKey = 'toggle';
            panelEl.querySelector('#ets-hotkeyToggle').textContent = '按下组合键...';
        };
        panelEl.querySelector('#ets-setSettingsKey').onclick = () => {
            waitingForKey = 'settings';
            panelEl.querySelector('#ets-hotkeySettings').textContent = '按下组合键...';
        };

        panelEl.querySelector('#ets-export').onclick = () => {
            const data = JSON.stringify(config, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `episode-title-config-${location.hostname}-${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
        };

        const fileInput = panelEl.querySelector('#ets-fileInput');
        panelEl.querySelector('#ets-import').onclick = () => fileInput.click();
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                try {
                    const imported = JSON.parse(ev.target.result);
                    config = Object.assign({}, DEFAULTS, imported);
                    saveConfig();
                    location.reload();
                } catch (err) {
                    alert('配置文件无效！');
                }
            };
            reader.readAsText(file);
        };

        panelEl.querySelector('#ets-reset').onclick = () => {
            if (confirm('确认重置为默认配置？')) {
                config = Object.assign({}, DEFAULTS);
                saveConfig();
                location.reload();
            }
        };
    }

    // 面板拖拽（鼠标 + 触摸）+ 位置记忆（同样走 GM 存储，避免被清理站点数据带走）
    function savePanelPos(x, y) {
        rawSet(KV_PANEL_POS, JSON.stringify({ x: Math.round(x), y: Math.round(y) }));
    }

    // 窗口可能比上次更小，恢复时夹回可视范围，避免面板被挪出屏外找不回来
    function applyPanelPos() {
        if (!panelEl) return;
        let pos = null;
        try { pos = JSON.parse(rawGet(KV_PANEL_POS) || 'null'); } catch (e) { return; }
        if (!pos || typeof pos.x !== 'number' || typeof pos.y !== 'number') return;
        panelEl.style.left = Math.max(4, Math.min(window.innerWidth - 80, pos.x)) + 'px';
        panelEl.style.top = Math.max(4, Math.min(window.innerHeight - 80, pos.y)) + 'px';
        panelEl.style.right = 'auto';
    }

    function enablePanelDrag() {
        const header = panelEl.querySelector('.ets-header');
        let dragging = false, sx, sy, ox, oy;
        let lastX = null, lastY = null;

        const start = (x, y) => {
            dragging = true;
            const rect = panelEl.getBoundingClientRect();
            sx = x; sy = y; ox = rect.left; oy = rect.top;
        };
        const move = (x, y) => {
            if (!dragging) return;
            lastX = ox + x - sx;
            lastY = oy + y - sy;
            panelEl.style.left = lastX + 'px';
            panelEl.style.top = lastY + 'px';
            panelEl.style.right = 'auto';
        };
        const end = () => {
            if (dragging && lastX !== null) savePanelPos(lastX, lastY);
            dragging = false;
        };

        header.addEventListener('mousedown', e => start(e.clientX, e.clientY));
        document.addEventListener('mousemove', e => move(e.clientX, e.clientY));
        document.addEventListener('mouseup', end);

        header.addEventListener('touchstart', e => {
            const t = e.touches[0];
            start(t.clientX, t.clientY);
        }, { passive: true });
        header.addEventListener('touchmove', e => {
            const t = e.touches[0];
            move(t.clientX, t.clientY);
        }, { passive: true });
        header.addEventListener('touchend', end);
    }

    // 快捷键捕获
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (waitingForKey) { // Esc 取消录入，把文案还原成原快捷键
                const which = waitingForKey;
                const span = panelEl && panelEl.querySelector(which === 'toggle' ? '#ets-hotkeyToggle' : '#ets-hotkeySettings');
                if (span) span.textContent = which === 'toggle' ? config.hotkeyToggle : config.hotkeySettings;
                waitingForKey = null;
                return;
            }
            if (isPanelVisible()) setPanelVisible(false);
            return;
        }

        if (waitingForKey) {
            e.preventDefault();
            const parts = [];
            if (e.ctrlKey) parts.push('Ctrl');
            if (e.altKey) parts.push('Alt');
            if (e.shiftKey) parts.push('Shift');
            if (e.metaKey) parts.push('Meta');
            if (!['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) {
                parts.push(e.key.toUpperCase());
                const combo = parts.join('+');
                if (waitingForKey === 'toggle') {
                    config.hotkeyToggle = combo;
                    panelEl.querySelector('#ets-hotkeyToggle').textContent = combo;
                } else {
                    config.hotkeySettings = combo;
                    panelEl.querySelector('#ets-hotkeySettings').textContent = combo;
                }
                saveConfig();
                waitingForKey = null;
            }
            return;
        }

        const toggleParts = config.hotkeyToggle.split('+');
        const setParts = config.hotkeySettings.split('+');

        function matchCombo(parts) {
            return parts.includes('Ctrl') === e.ctrlKey &&
                parts.includes('Alt') === e.altKey &&
                parts.includes('Shift') === e.shiftKey &&
                parts.includes('Meta') === e.metaKey &&
                parts[parts.length - 1] === e.key.toUpperCase();
        }

        if (matchCombo(toggleParts)) {
            e.preventDefault();
            config.enabled = !config.enabled;
            saveConfig();
            applyTitleStyle();
        }
        if (matchCombo(setParts)) {
            e.preventDefault();
            if (!panelEl) return;
            setPanelVisible(!isPanelVisible());
        }
    });

    // ============ 设置头像按钮（v6.0 取代齿轮） ============
    // 头像图片：用户填的 http(s) / data:image 地址优先，留空或非法时用内置 SVG 头像。
    const AVATAR_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
        '<circle cx="32" cy="32" r="32" fill="#1a1a1a"/>' +
        '<text x="32" y="42" text-anchor="middle" font-size="34" font-weight="700" ' +
        'fill="#f0f0f0" font-family="system-ui,-apple-system,sans-serif">剧</text>' +
        '</svg>'
    );

    function sanitizeAvatarUrl(v) {
        const s = String(v || '').trim();
        if (!s) return '';
        if (/^https?:\/\//i.test(s) || /^data:image\//i.test(s) || /^blob:/i.test(s)) return s;
        return '';
    }

    function resolveAvatarSrc() {
        return sanitizeAvatarUrl(config.avatarUrl) || AVATAR_FALLBACK;
    }

    function refreshAvatarPreview() {
        if (!panelEl) return;
        const img = panelEl.querySelector('#ets-avatarPreview');
        if (img) img.src = resolveAvatarSrc();
    }

    // 头像按钮的显隐：默认只跟全屏；关掉“仅全屏显示”后常驻
    function applyAvatarStyle() {
        if (!gearEl) return;
        const show = config.avatarFullscreenOnly === false ? true : isFullscreen();
        gearEl.style.display = show ? 'flex' : 'none';
        const img = gearEl.querySelector('img');
        if (img) {
            const src = resolveAvatarSrc();
            if (img.getAttribute('src') !== src) img.src = src;
        }
    }

    let toastTimer = null;
    function showToast(msg) {
        const host = getOverlayHost() || document.body;
        let el = document.getElementById('ets-toast');
        if (!el) {
            el = document.createElement('div');
            el.id = 'ets-toast';
        }
        if (el.parentElement !== host) host.appendChild(el);
        el.textContent = msg;
        el.classList.add('ets-toast-on');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('ets-toast-on'), 1400);
    }

    function createGearButton() {
        const btn = document.createElement('div');
        gearEl = btn;
        btn.id = 'episode-title-gear';
        btn.title = '显示设置（点击打开）';
        btn.style.cssText = `
            position: fixed;
            top: 12px;
            right: 12px;
            width: 40px;
            height: 40px;
            background: rgba(0,0,0,0.45);
            border: 1px solid rgba(255,255,255,0.45);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            cursor: pointer;
            z-index: 2147483646;
            color: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.45);
            transition: transform 0.2s ease;
        `;
        const img = document.createElement('img');
        img.alt = '';
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;';
        btn.appendChild(img);
        btn.onmouseenter = () => btn.style.transform = 'scale(1.08)';
        btn.onmouseleave = () => btn.style.transform = 'scale(1)';
        btn.onclick = () => {
            if (!panelEl) return;
            setPanelVisible(!isPanelVisible());
        };
        document.body.appendChild(btn);
        applyAvatarStyle();
    }

    // ============ 标题触摸手势 ============
    function bindTitleTouch() {
        if (!config.touchMode) return;
        let startX = 0, startY = 0, startT = 0;

        document.addEventListener('touchstart', (e) => {
            const t = e.touches[0];
            startX = t.clientX;
            startY = t.clientY;
            startT = Date.now();
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            const t = e.changedTouches[0];
            const dx = t.clientX - startX;
            const dy = t.clientY - startY;
            const dt = Date.now() - startT;

            // 左侧边缘右滑：切换显示
            if (startX < 40 && dx > 60 && Math.abs(dy) < 40 && dt < 400) {
                config.enabled = !config.enabled;
                saveConfig();
                applyTitleStyle();
            }
        }, { passive: true });

        // 双击标题隐藏（pointer-events 统一由 applyTitleStyle 计算，避免被 cssText 覆盖）
        let lastTap = 0;
        titleEl.addEventListener('touchend', () => {
            const now = Date.now();
            if (now - lastTap < 300) {
                config.enabled = false;
                saveConfig();
                applyTitleStyle();
            }
            lastTap = now;
        });
    }

    // ============ 油猴菜单（手机端主入口） ============
    // 手机上快捷键不可用、头像默认仅全屏显示，用户常找不到设置入口。
    // 通过 Tampermonkey / Violentmonkey 的脚本菜单暴露常用操作。
    let menuIds = [];
    function refreshMenuCommands() {
        try {
            if (typeof GM_unregisterMenuCommand === 'function') {
                menuIds.forEach(id => { try { GM_unregisterMenuCommand(id); } catch (e) {} });
            }
        } catch (e) {}
        menuIds = [];
        if (typeof GM_registerMenuCommand !== 'function') return;

        const add = (label, fn) => {
            try {
                const id = GM_registerMenuCommand(label, fn);
                if (id != null) menuIds.push(id);
            } catch (e) {}
        };

        add('📺 打开设置面板', () => {
            if (!started) { try { start(); } catch (e) {} }
            if (!panelEl) createPanel();
            setPanelVisible(true);
            showToast('已打开设置');
        });

        add(config.enabled ? '⏸ 关闭剧集显示' : '▶️ 开启剧集显示', () => {
            config.enabled = !config.enabled;
            saveConfig();
            applyTitleStyle();
            showToast(config.enabled ? '已开启显示' : '已关闭显示');
            refreshMenuCommands();
        });

        add('📱 应用手机预设', () => {
            if (typeof applyPreset === 'function') {
                applyPreset('mobile');
            } else {
                // 兜底：直接写入手机预设参数
                Object.assign(config, {
                    layout: 'vertical', offsetY: 44, fontSize: 26, fontWeight: 700,
                    bgOpacity: 0.35, adaptiveFontSize: true, immersiveFade: 10,
                    episodeFontSize: 0, columnGap: 4, preset: 'mobile',
                });
                saveConfig();
                applyTitleStyle();
                if (panelEl) createPanel();
            }
            showToast('已应用手机预设');
            refreshMenuCommands();
        });

        add(config.avatarFullscreenOnly !== false ? '👁 头像改为常驻显示' : '👁 头像仅全屏显示', () => {
            config.avatarFullscreenOnly = !(config.avatarFullscreenOnly !== false);
            saveConfig();
            applyAvatarStyle();
            showToast(config.avatarFullscreenOnly ? '头像仅全屏显示' : '头像常驻显示');
            refreshMenuCommands();
        });

        add(config.touchMode ? '✋ 关闭触摸手势' : '✋ 开启触摸手势', () => {
            config.touchMode = !config.touchMode;
            saveConfig();
            showToast(config.touchMode ? '触摸手势已开' : '触摸手势已关');
            refreshMenuCommands();
        });
    }

    // ============ 初始化 ============
    function init() {
        if (config._needsSave) saveConfig(); // 写入一次性迁移结果

        createTitleElement();
        createPanel();
        createGearButton();
        bindTitleTouch();
        mountOverlays();
        refreshMenuCommands();

        if (isIqiyi()) watchIqiyiFullscreen();

        // 观察 head：SPA 可能整体替换 <title>，只盯旧节点会漏更新
        const observer = new MutationObserver(updateTitle);
        if (document.head) {
            observer.observe(document.head, { subtree: true, childList: true, characterData: true });
        }

        setInterval(updateTitle, 2000);
        // 全屏 / 伪全屏兜底校准：事件丢失、播放器重建容器、iframe 抢焦点时都能自愈
        setInterval(() => syncOverlay(false), 1000);
    }

    // ============ 启动闸门：全站注入，但只在真的有视频的页面启用 ============
    // v6.0 改成 @match *://*/* 后，绝大多数页面没有任何播放器。
    // 先等 <video>（或已知站点的播放器容器）出现，再初始化整套 DOM，
    // 普通网页上不挂悬浮球、不跑定时器，避免影响无关页面。
    let started = false;
    let gateObserver = null;
    let gateTimer = null;

    function pageHasVideo() {
        try {
            if (document.querySelector('video')) return true;
            // 已知站点的播放器容器：<video> 可能是点击播放后才注入的
            if (isIqiyi() && document.querySelector('.iqp-player, .iqp-player-container, #flashbox, #player')) return true;
            if (/v\.qq\.com|youku\.com|bilibili\.com|mgtv\.com|youtube\.com|netflix\.com/.test(location.hostname) &&
                document.querySelector('.txp_player, .h5player, .bpx-player-container, #bilibili-player, .mgtv-player, #movie_player')) return true;
            // MacCMS / 海螺 / 常见第三方播放页
            if (document.querySelector('.MacPlayer, #player-con, #playleft, .dplayer, .jwplayer, .artplayer, .plyr, .video-js, #m-player, .player-box, .hl-player-wrap')) return true;
        } catch (e) {}
        return false;
    }

    function start() {
        if (started || window.top !== window.self) return;
        started = true;
        if (gateObserver) { try { gateObserver.disconnect(); } catch (e) {} gateObserver = null; }
        if (gateTimer) { clearInterval(gateTimer); gateTimer = null; }
        init();
    }

    function watchForVideo() {
        // 播放器 iframe 里没有剧名信息，且会重复注入，直接不在框架内工作
        if (window.top !== window.self) return;
        if (pageHasVideo()) { start(); return; }

        let queued = false;
        const gateStartAt = Date.now();
        try {
            gateObserver = new MutationObserver(() => {
                if (queued || started) return;
                queued = true;
                setTimeout(() => {
                    queued = false;
                    if (!started && pageHasVideo()) start();
                }, 800);
            });
            gateObserver.observe(document.documentElement, { childList: true, subtree: true });
        } catch (e) {}

        // 兜底轮询：SPA 换页、视频晚注入、observer 漏报时也能等到。
        // 90 秒还没出现视频（多半是普通网页），卸掉 observer、轮询降到 5 秒，
        // 全站注入也不至于给无关页面持续增加负担。
        gateTimer = setInterval(() => {
            if (started) return;
            if (Date.now() - gateStartAt > 90000) {
                if (gateObserver) {
                    try { gateObserver.disconnect(); } catch (e) {}
                    gateObserver = null;
                }
                clearInterval(gateTimer);
                gateTimer = setInterval(() => {
                    if (!started && pageHasVideo()) start();
                }, 5000);
                return;
            }
            if (pageHasVideo()) start();
        }, 1500);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', watchForVideo);
    } else {
        watchForVideo();
    }

    // 脚本一加载就挂油猴菜单（不必等 video），方便手机端随时打开设置
    try { refreshMenuCommands(); } catch (e) {}
})();
