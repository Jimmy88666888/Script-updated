// ==UserScript==
// @name         瑙嗛鍓ч泦淇℃伅鏄剧ず
// @namespace    local.edge-userscripts/video-episode-info
// @version      6.7.0
// @description  绔栨帓/妯帓鏄剧ず鍓ч泦鍚?闆嗘暟锛屽甫瀹屾暣璁剧疆闈㈡澘銆佷富棰樸€佸揩鎹烽敭銆佸叏灞忛€傞厤銆佹寜绔欓厤缃€佺Щ鍔ㄧ瑙︽懜閫傞厤銆倂4.1 淇鐖卞鑹虹瓑绔欑偣鍏ㄥ睆涓嶆樉绀猴紱v4.2 鍓у悕浼樺厛璇绘挱鏀惧櫒 DOM 涓庨€夐泦楂樹寒椤癸紝鍒囬泦涓嶆粸鍚庯紱v4.3 璇嗗埆澶辫触鑷姩闄嶇骇锛泇4.4 鍒囬泦閲嶆挱鍏ュ満鍔ㄧ敾銆佸皬灞忓瓧鍙疯嚜閫傚簲銆佺珫鎺掗暱鏍囬婧㈠嚭淇濇姢銆佸彲閫夋矇娴告贰鍑恒€侀潰鏉夸綅缃蹇嗕笌 Esc 鍏抽棴锛泇4.5 鏂板鐢佃剳/鎵嬫満/鏋佺畝涓€閿璁撅紱v4.6 鎸夌湡瀹炴挱鏀鹃〉 DOM 閲嶅啓璇嗗埆灞傦紙CSS Module 鍝堝笇绫诲悕銆? 浣嶆湡鍙枫€佹挱鏀惧櫒鏍囬鍖哄彇闆嗘暟銆侀伩寮€鐑悳姒滅瓑鏁板瓧骞叉壈锛夛紱v4.6.2 淇泦鏁颁綅浜庢爣棰樺紑澶存椂鍓у悕琚薄鏌撱€佸墽鍚嶅熬闅忔椂闀挎湭鍓ョ锛泇4.7 淇珫鎺掓崲琛屽疄涓烘崲鍒椼€佸浐瀹氬崟鍒楀搴?overflow:hidden 鎶婇泦鏁板垪鏁村垪瑁佹帀锛堚€滅湅涓嶅埌闆嗘暟鈥濈殑鐪熷嚩锛夛紱v4.8 绔栨帓鏁板瓧/瀛楁瘝鏀逛负閫愬瓧鐩寸珛锛坱ext-orientation: upright锛夛紝涓嶅啀妯汉锛屽彲鍦ㄩ潰鏉垮垏鍥烇紱v4.9 闆嗘暟鏀寔鐙珛瀛楀彿锛堥粯璁よ嚜鍔ㄥ彇鍓у悕70%锛夛紝涓ゅ垪楂樺害鏇村崗璋冿紱v5.0 鏂板鍒楅棿璺濇粦鏉嗭紙绔栨帓涓嬬敤 line-height 鎷夊紑涓ゅ垪锛岄棿璺濅粛甯﹁儗鏅笉鏂锛夛紱v5.1 涓€閿璁剧撼鍏ラ泦鏁板瓧鍙蜂笌鍒楅棿璺濓紝鐢佃剳/鎵嬫満/鏋佺畝涓夋。鏁村瑙傛劅涓€璧峰垏鎹紱v6.0 鍏ㄧ珯娉ㄥ叆锛堟娴嬪埌 video 鎵嶅惎鐢紝iframe 鍐呬笉杩愯锛夈€佽缃叆鍙ｆ敼涓哄ご鍍忔寜閽紙榛樿浠呭叏灞忔樉绀猴紝鍙嚜瀹氫箟鍥剧墖鍦板潃鎴栦笂浼狅級銆侀潰鏉挎柊澧炰繚瀛橀€夐」銆佹湭鐭ョ珯鐐硅蛋閫氱敤璇嗗埆鍏滃簳锛堟爣棰樺尯 / JSON-LD / 閫夐泦楂樹寒锛夛紝鐖卞鑹轰笓灞為€昏緫淇濇寔涓嶅彉锛泇6.1 榛樿澶村儚鏀逛负銆屽墽銆嶅瓧锛涗紭鍖?YouTube 鏍囬/闆嗘暟璇嗗埆锛堜笓灞為€夋嫨鍣ㄣ€佸墺绂?- YouTube 灏惧反銆佹敮鎸?Episode/Ep/SxxExx 鑻辨枃闆嗘暟鏍煎紡锛夛紱v6.1.1 涓?Tampermonkey 鑴氭湰鍒楄〃娣诲姞銆屽墽銆嶅瓧 @icon锛泇6.2 瀹炴祴涓绘祦绔欎慨澶嶏細B绔?mediaTitle銆佽吘璁?player-play-title銆佸墺绂?15:18 鏃堕暱灏惧反銆佸己鍖栬吘璁?B绔欐爣棰樺櫔闊充笌鑻辨枃闆嗘暟娓呯悊锛泇6.3 澧炲己闈炰富娴佺珯锛歁acCMS 绯伙紙trvod/szctv锛夈€佺埍澹瑰竼 iyf.tv銆丱nDemandChina 鏍囬/URL 闆嗘暟璇嗗埆涓庣珯鐐瑰熬宸存竻鐞嗭紱v6.4 鎵嬫満绔补鐚磋彍鍗曟柊澧烇細鎵撳紑璁剧疆銆佸垏鎹㈡樉绀恒€佹墜鏈洪璁俱€佸ご鍍忓父椹伙紱v6.5 閰嶇疆鏀瑰瓨娌圭尨鑷韩瀛樺偍锛圙M_setValue锛夊苟鍙屽啓 localStorage 鍏滃簳锛屼慨澶嶅叧闂€屾寜绔欓厤缃€嶅悗涓€淇濆瓨灏变涪鐨勯棶棰橈紝閲嶅惎娴忚鍣ㄥ悗涓嶅啀鍥炲埌榛樿锛泇6.6 鏂板銆屼粎鍏ㄥ睆鏃舵樉绀烘爣棰樸€嶉€夐」锛堜笌銆屽叏灞忔椂闅愯棌鏍囬銆嶄簰鏂ワ級锛泇6.7 渚ц竟榛樿鍙樉绀恒€屽墽鍚?鏁板瓧闆嗘暟銆嶅崟鍒楋紙绾㈡棩绗竴闆?鈫?绾㈡棩1锛夛紝闀垮墽鍚嶈嚜鍔ㄦ姌鎴愬鍒楋紝闈㈡澘鍙叧闂悎骞?// @author       Jackson Smith
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

    // ============ 涓婚瀹氫箟 ============
    const THEMES = {
        default: {
            name: '榛樿鏆楄壊',
            color: '#ffffff',
            bgFrom: 'rgba(0,0,0,',
            bgTo: 'rgba(0,0,0,',
            textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
            panelBg: 'rgba(20, 20, 20, 0.95)',
            panelBorder: 'rgba(255,255,255,0.15)',
            accent: '#4fc3f7',
        },
        cyberpunk: {
            name: '璧涘崥鏈嬪厠',
            color: '#00ffff',
            bgFrom: 'rgba(255,0,128,',
            bgTo: 'rgba(0,255,255,',
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
            panelBg: 'rgba(10, 10, 30, 0.95)',
            panelBorder: 'rgba(0,255,255,0.3)',
            accent: '#ff0080',
        },
        minimal: {
            name: '鏋佺畝鐧?,
            color: '#333333',
            bgFrom: 'rgba(255,255,255,',
            bgTo: 'rgba(255,255,255,',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            panelBg: 'rgba(255, 255, 255, 0.95)',
            panelBorder: 'rgba(0,0,0,0.1)',
            accent: '#333333',
        },
        neon: {
            name: '闇撹櫣娓愬彉',
            color: '#ffe066',
            bgFrom: 'rgba(138,43,226,',
            bgTo: 'rgba(255,20,147,',
            textShadow: '0 0 8px #ffe066, 0 0 16px #ff1493',
            panelBg: 'rgba(30, 0, 40, 0.95)',
            panelBorder: 'rgba(255,224,102,0.3)',
            accent: '#ffe066',
        },
    };

    // ============ 涓€閿璁?============
    // 鍙鐩栤€滄樉绀虹浉鍏斥€濆弬鏁帮紱宸﹀彸浣嶇疆銆佸惎鐢ㄥ紑鍏炽€佽嚜瀹氫箟鏂囧瓧銆佸揩鎹烽敭灞炰簬鐢ㄦ埛涔犳儻锛岄璁句竴寰嬩笉纰般€?    const PRESETS = {
        pc: {
            label: '鐢佃剳',
            cfg: { layout: 'vertical', offsetY: 50, fontSize: 34, fontWeight: 900,
                   bgOpacity: 0.45, adaptiveFontSize: true, immersiveFade: 0,
                   episodeFontSize: 0, columnGap: 10 },
        },
        mobile: {
            label: '鎵嬫満',
            cfg: { layout: 'vertical', offsetY: 44, fontSize: 26, fontWeight: 700,
                   bgOpacity: 0.35, adaptiveFontSize: true, immersiveFade: 10,
                   episodeFontSize: 0, columnGap: 4 },
        },
        minimal: {
            label: '鏋佺畝',
            cfg: { layout: 'vertical', offsetY: 50, fontSize: 26, fontWeight: 400,
                   bgOpacity: 0, adaptiveFontSize: true, immersiveFade: 20,
                   episodeFontSize: 16, columnGap: 18 },
        },
    };

    // ============ 閰嶇疆绠＄悊 ============
    const DEFAULTS = {
        enabled: true,
        position: 'left',
        layout: 'vertical',
        fontSize: 36,
        fontWeight: 900,
        color: '#ffffff',
        bgOpacity: 0.6,
        displayMode: 'both',
        // v6.7锛氫晶杈归粯璁ゅ彧鏄剧ず銆屽墽鍚?鏁板瓧闆嗘暟銆嶏紙绾㈡棩绗竴闆?鈫?绾㈡棩1锛夛紝鍗曞垪鏄剧ず锛涘叧闂悗鍥炲埌涓ゅ垪鏃ф牱寮忋€?        compactEp: true,
        customText: '',
        offsetY: 50,
        theme: 'default',
        animation: true,
        // v4.1锛氶粯璁ゅ叧闂€滃叏灞忚嚜鍔ㄩ殣钘忊€濄€傛棫鐗堥粯璁?true 浼氳鍏ㄥ睆蹇呯劧涓嶆樉绀猴紝
        // 鑰屽叏灞忔娴嬪張瀛樺湪璇垽锛堣 isFullscreen 娉ㄩ噴锛夛紝涓よ€呭彔鍔犵洿鎺ュ鑷粹€滃叏灞忎笉鏄剧ず鈥濄€?        autoHideFullscreen: false,
        touchMode: true,
        replayOnEpisodeChange: true,
        adaptiveFontSize: true,
        immersiveFade: 0, // 0=甯搁┗鏄剧ず锛?0 琛ㄧず鍒囬泦闈欓粯 N 绉掑悗娣″埌鍗婇€忔槑
        hotkeyToggle: 'Alt+E',
        hotkeySettings: 'Alt+S',
        perSite: true,
        preset: '', // '' = 鏈鐢ㄩ璁撅紱鎵嬪姩璋冩暣鍚庡彉 'custom'
        uprightDigits: true, // 绔栨帓鏃舵暟瀛?瀛楁瘝閫愬瓧鐩寸珛锛沠alse 鍒欐暣浣撴棆杞?0掳妯汉
        episodeFontSize: 0, // 闆嗘暟瀛楀彿(px)锛? = 鑷姩鍙栧墽鍚嶇殑 70%
        columnGap: 8, // 涓ゅ垪涔嬮棿鐨勯澶栭棿璺?px)銆傜珫鎺掍笅 line-height 鍗冲垪瀹斤紝鐢ㄥ畠鎷夊紑鍒楅棿璺?        // v6.0锛氳缃叆鍙ｆ敼涓哄ご鍍忔寜閽€傚ご鍍忓浘鐗囧湴鍧€鐣欑┖鏃剁敤鍐呯疆 SVG 澶村儚锛?        // 榛樿浠呭湪鍏ㄥ睆鏄剧ず锛岄伩鍏嶆櫘閫氶〉闈笂澶氬嚭涓€涓偓娴悆銆?        avatarUrl: '',
        avatarFullscreenOnly: true,
        // v6.6锛氬彧鎯冲湪鐪熸鍏ㄥ睆鐪嬪墽鏃剁湅鍒板墽鍚?闆嗘暟锛岀獥鍙?缃戦〉娴忚鏃朵笉鎯宠鎸＄潃锛屽彲寮€鍚椤广€?        // 涓?autoHideFullscreen 浜掓枼锛堝悓鏃跺紑鍚瓑浜庡摢閮戒笉鏄剧ず锛夛紝鍕鹃€変竴涓細鑷姩鍙栨秷鍙︿竴涓€?        fullscreenOnly: false,
    };

    // ============ 瀛樺偍灞傦紙v6.5锛?============
    // 鏃х増鍏ㄩ儴鍐欓〉闈?localStorage锛屾湁涓や釜鍧戯細
    //   1) 娴忚鍣ㄣ€屽叧闂椂娓呴櫎 Cookie 鍙婄綉绔欐暟鎹€嶃€佺珯鐐硅嚜韬竻鐞嗐€侀殣绉佺獥鍙ｇ瓑锛岄兘浼氭妸閰嶇疆涓€璧锋姽鎺夛紝
    //      琛ㄧ幇灏辨槸銆岄潰鏉块噷鐐逛繚瀛樻病闂锛岄噸鍚祻瑙堝櫒鍚庡洖鍒伴粯璁ゃ€嶏紱
    //   2) 銆屾寜绔欓厤缃€嶅叧鎺夋椂锛岀珯鐐归敭涓庡叏灞€閿悓鍚嶏紙閮芥槸 episode_title_global锛夛紝saveConfig 鍏堝啓鍏ュ畬鏁撮厤缃€?    //      绱ф帴鐫€鍙堢敤鍙惈 3 涓叏灞€椤圭殑瀵硅薄瑕嗙洊鍚屼竴涓敭锛岄厤缃綋鍦哄氨娌′簡銆?    // 鐜板湪锛氫紭鍏堝啓娌圭尨鑷韩瀛樺偍锛圙M_setValue锛屽瓨鍦ㄦ墿灞曢噷锛屼笉闅忛〉闈㈡暟鎹娓咃級锛屽悓鏃跺弻鍐?localStorage 鍏滃簳锛?    //       鍏ㄥ眬椤逛笌绔欑偣閰嶇疆鍚勭敤鐙珛閿紝浜掍笉瑕嗙洊锛涢娆¤繍琛岃嚜鍔ㄨ縼绉绘棫鏁版嵁銆?    const KV_GLOBAL = 'ets.global';        // 鍙瓨 perSite / avatarUrl / avatarFullscreenOnly
    const KV_SITE = 'ets.site.';           // 姣忕珯涓€浠藉畬鏁撮厤缃?    const KV_ALL = 'ets.site.__all__';     // 鍏抽棴銆屾寜绔欓厤缃€嶆椂鐨勭粺涓€閰嶇疆
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

    // 鏃х増 localStorage 鏁版嵁涓€娆℃€ф惉杩涙柊瀛樺偍锛涘叾瀹冪珯鐐圭殑鏃ч厤缃湪鍚勭珯棣栨璁块棶鏃跺悇鑷縼绉?    function migrateLegacyStore() {
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

        // 涓€娆℃€ц縼绉伙細鑰佺増鏈紙<=4.0锛夋妸 autoHideFullscreen 榛樿瀛樻垚浜?true锛?        // 杩欎簺鐢ㄦ埛鐨?localStorage 閲屽凡缁忓啓姝讳簡 true锛屽厜鏀?DEFAULTS 鏄棤鏁堢殑銆?        // 鍙縼绉讳竴娆★紝杩佺Щ鍚庣敤鎴锋墜鍔ㄥ嬀閫夌殑鈥滃叏灞忚嚜鍔ㄩ殣钘忊€濅粛浼氳灏婇噸銆?        if (!merged.fsVisibleMigrated) {
            merged.autoHideFullscreen = false;
            merged.fsVisibleMigrated = true;
            merged._needsSave = true;
        }
        return merged;
    }

    let config = loadConfig();

    function saveConfig() {
        const full = Object.assign({}, config);
        delete full._needsSave; // 鍐呴儴鏍囪锛屼笉钀界洏
        // 瀹屾暣閰嶇疆鍐欑珯鐐归敭锛堟垨缁熶竴閿級锛涘叏灞€椤瑰崟鐙竴涓敭锛屾案杩滃彧鏀句笁椤癸紝涓嶄細鍐嶈鐩栧畬鏁撮厤缃?        const okSite = rawSet(siteStoreKey(full.perSite), JSON.stringify(full));
        const okGlobal = rawSet(KV_GLOBAL, JSON.stringify(pickGlobal(full)));
        return okSite && okGlobal;
    }

    // ============ 鐜鍒ゆ柇 ============
    function isIqiyi() {
        return /(^|\.)iqiyi\.com$/.test(location.hostname);
    }

    // 鍘熺敓鍏ㄥ睆鍏冪礌锛堝甫鍚勬祻瑙堝櫒鏃у墠缂€锛夈€傝繖鏄敮涓€ 100% 鍙潬鐨勫叏灞忎俊鍙枫€?    function getNativeFullscreenElement() {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement || null;
    }

    // v4.1 鍏抽敭淇 1锛氫慨姝ｅ叏灞忚鍒ゃ€?    // 鏃у疄鐜伴噷鐨?document.querySelector('.iqp-player-fullscreen, .player-fullscreen, .iqp-fullscreen, .fullscreen')
    // 鏄€屽叏绔欎换鎰忓厓绱犮€嶅尮閰?鈥斺€?鎾斁鍣ㄦ帶鍒舵潯涓婄殑鈥滃叏灞忔寜閽€濇湰韬氨甯稿勾甯﹁繖绫?class锛?    // 浜庢槸鏍规湰娌″叏灞忎篃浼氳鍒ゆ垚鍏ㄥ睆锛岄厤鍚?autoHideFullscreen 榛樿 true 鐩存帴姘镐箙闅愯棌銆?    // 鐜板湪鍙湪鐪熸鐨勬牴瀹瑰櫒 / 鎾斁鍣ㄥ鍣ㄤ笂鎸夊畬鏁?class token 鍖归厤锛屼笉鍐嶆壂鍏ㄧ珯鎸夐挳銆?    const FS_CLASS_RE = /(^|[\s_-])(fullscreen|fullscreened|full-screen|is-fullscreen|isfullscreen|player-full-screen|fullplayer|full-player|fullscreen-wrap|fullscreen-mode)([\s_-]|$)/i;

    function hasFsClass(el) {
        if (!el || !el.getAttribute) return false;
        return FS_CLASS_RE.test(el.getAttribute('class') || '');
    }

    function isFullscreen() {
        if (getNativeFullscreenElement()) return true;
        if (document.webkitIsFullScreen === true || document.msFullscreenElement) return true;

        // v6.0 閫氱敤绔欏厹搴曪細浼叏灞忓彧鐪?<video> 鑷繁鎵€鍦ㄧ殑鎾斁鍣ㄥ鍣紝
        // 渚濇棫涓嶆壂鍏ㄧ珯鎸夐挳锛屼笉浼氶噸鐜?v4.1 閭ｇ鈥滄帶鍒舵潯涓婄殑鍏ㄥ睆鎸夐挳鎶婂叏绔欏垽鎴愬叏灞忊€濈殑璇垽銆?        const vid = document.querySelector('video');
        if (vid && vid.closest) {
            const box = vid.closest('[class*="player" i],[id*="player" i],[class*="video" i]');
            if (box && box !== document.body && box !== document.documentElement && hasFsClass(box)) return true;
        }

        // 浼叏灞忥紙CSS 鍏ㄥ睆 / 缃戦〉鍏ㄥ睆锛夛細鍙湅鏍瑰鍣ㄥ拰鎾斁鍣ㄥ鍣紝涓嶇湅鎸夐挳
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

    // v4.1 鍏抽敭淇 2锛歰verlay 蹇呴』寰呭湪鍏ㄥ睆鍏冪礌瀛愭爲閲屻€?    // 鍘熺敓鍏ㄥ睆鏃舵祻瑙堝櫒鎶?fullscreenElement 鎻愬崌鍒?top layer锛宒ocument.body 鐨勫叾瀹冨瓙鑺傜偣
    // 鍏ㄩ儴鐣欏湪涓嬪眰 鈥斺€?鏃犺 z-index 寮€澶氬ぇ锛堝摢鎬?2147483647锛夐兘涓嶅彲瑙併€?    // 鏃х増閭ｅ彞鈥滅‘淇濆缁堟寕鍦?body 涓嬶紝瑙勯伩 transform 鍖呭惈鍧椻€濇濂芥妸鍏冪礌閽夋鍦ㄩ敊璇殑鍦版柟锛?    // 杩欐墠鏄埍濂囪壓鍏ㄥ睆涓嶆樉绀虹殑鏍规湰鍘熷洜銆?    // 杩欎簺鏍囩鏄浛鎹㈠厓绱?/ 绌哄唴瀹瑰厓绱狅紝寰€閲屽瀛愯妭鐐逛笉浼氭覆鏌擄紝闇€瑕佸洖閬裤€?    const NO_CHILD_RENDER_TAGS = new Set([
        'VIDEO', 'AUDIO', 'CANVAS', 'IMG', 'IFRAME', 'OBJECT', 'EMBED',
        'INPUT', 'BR', 'HR', 'SOURCE', 'TRACK', 'AREA', 'COL', 'META', 'LINK',
    ]);

    function getOverlayHost() {
        const fsEl = getNativeFullscreenElement();
        // 鍏ㄥ睆鐨勬槸 <html> 鎴?<body> 鏃讹紝鎸?body 灏辩瓑浠蜂笖鏇村畨鍏?        if (!fsEl || fsEl === document.documentElement || fsEl === document.body) {
            return document.body;
        }
        // 鏋佸皯鏁扮珯鐐圭洿鎺ュ <video> 鍏ㄥ睆锛屽叾鍐呴儴鏃犳硶鎵胯浇 overlay锛岄€€鍥?body
        if (NO_CHILD_RENDER_TAGS.has(fsEl.tagName)) return document.body;
        return fsEl;
    }

    let gearEl = null;
    let contentChangedAt = Date.now();
    let lastFaded = false;

    // 娌夋蹈娣″嚭鍒ゅ畾锛氬墽鍚?闆嗘暟鍙樺寲浼氶噸缃鏃讹紝闈欓粯瓒呰繃闃堝€兼墠娣″嚭
    function shouldFadeNow() {
        const sec = Number(config.immersiveFade) || 0;
        if (sec <= 0) return false;
        return (Date.now() - contentChangedAt) > sec * 1000;
    }

    // 鎶婃爣棰?/ 榻胯疆 / 璁剧疆闈㈡澘缁熶竴鎼埌褰撳墠 overlay 瀹夸富涓嬶紱
    // 鎾斁鍣ㄩ噸寤?DOM 瀵艰嚧鑺傜偣琚憳鎺夋椂涔熻兘鑷姩鎺ュ洖鍘汇€?    function mountOverlays() {
        const host = getOverlayHost();
        if (!host) return;
        [titleEl, gearEl, panelEl].forEach(el => {
            if (el && (el.parentElement !== host || !el.isConnected)) {
                host.appendChild(el);
            }
        });
    }

    // ============ 绔栨帓鏍囬 ============
    let titleEl = null;
    let animationPlayed = false;
    let lastFsState = null; // 涓婁竴娆″垽瀹氬嚭鐨勫叏灞忕姸鎬侊紝鐢ㄤ簬閬垮厤鏃犺皳閲嶇粯

    // v6.6锛氬彲瑙佹€ч泦涓竴澶勮绠楋紙鏍峰紡涓庡叆鍦哄姩鐢诲叡鐢級銆?    // 鍚﹀垯銆屼粎鍏ㄥ睆鏄剧ず銆嶅湪绐楀彛妯″紡棣栧抚浼氳鍏ュ満鍔ㄧ敾寮鸿娣″叆涓€娆★紝闂竴涓嬪氨娑堝け銆?    function isTitleVisibleNow(fs) {
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
        updateTitle();      // 鍏堢‘瀹氬唴瀹癸紝鍐嶅喅瀹氭樉涓嶆樉绀猴紝閬垮厤绌烘闂竴涓嬪啀娑堝け
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

        // v4.1 鍏抽敭淇 3锛氬彲瑙佹€т竴娆＄畻娓咃紝鐩存帴鍐欒繘 cssText銆?        // 鏃у疄鐜版槸 cssText 閲屽厛鍐?opacity:0锛屽啀闈犱袱灞?requestAnimationFrame 琛ユ垚 1锛?        // 鑰岀埍濂囪壓姣?800ms 灏遍噸鏂版墽琛屼竴娆?applyTitleStyle锛屾祻瑙堝櫒鍚庡彴鑺傛祦 / rAF 鏈Е鍙戞椂
        // 鍏冪礌灏遍暱鏈熷仠鍦?opacity:0锛岃〃鐜板悓鏍锋槸鈥滃叏灞忎笉鏄剧ず鈥濄€?        // v4.2锛歰verlayHasText 涓?false锛堝墽鍚嶅拰闆嗘暟閮芥病璇嗗埆鍑烘潵锛夋椂鏁村潡闅愯棌锛?        // 鑰屼笉鏄暀涓€涓彧鏈夎儗鏅病鏈夊瓧鐨勭┖妗嗘寕鐫€銆?        const visible = isTitleVisibleNow(isFS);
        // 鍏ㄥ睆鏃剁粷涓嶅悶鎺夌偣鍑伙紝鍚﹀垯浼氱洊浣忔挱鏀惧櫒鎺у埗鏉?        const interactive = !!visible && !isFS && config.touchMode;

        // v4.4 瀛楀彿鑷€傚簲锛氬皬灞忔寜瑙嗗彛绛夋瘮缂╁皬锛涚珫鎺掑啀鎸夋渶闀胯棰勪及楂樺害浜屾鏀剁缉锛?        // 閬垮厤鎵嬫満涓?36px 绔栨帓椤舵弧鏁村睆銆佹垨闀垮墽鍚嶆孩鍑哄埌灞忓箷澶栫湅涓嶈銆?        // v4.9锛氭娊鎴?computeTitleFontSize锛岄泦鏁板彟绠椾竴妗ｅ瓧鍙?        const isVertical = config.layout === 'vertical';
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
            white-space: pre-wrap; /* 璁╁墽鍚?闆嗘暟涔嬮棿鐨?\n 鐪熸鎹㈣ */
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

        // 鍏ㄥ睆鏃?overlay 蹇呴』寰呭湪 fullscreenElement 鍐呴儴锛坱op layer锛夛紝
        // 閫€鍑哄叏灞忓啀鑷姩鎼洖 body 鈥斺€?鏃х増閽夋鍦?body 鏄湰娆?bug 鐨勬牴鍥犮€?        mountOverlays();

        // transform / filter 绁栧厛浼氳 position:fixed 澶辨晥锛涚埍濂囪壓鎾斁鍣ㄥ鍣ㄤ竴鑸共鍑€锛?        // 杩欓噷鍙仛鍏滃簳锛氬彂鐜板涓诲甫 transform 鏃舵敼鐢?absolute 璐村涓诲畾浣嶃€?        const host = titleEl.parentElement;
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
        // 鐬椂鏍囪锛氭棦鏂逛究澶栭儴鏍峰紡閽╁瓙锛屼篃璁╄嚜鍔ㄥ寲娴嬭瘯鑳界ǔ瀹氭柇瑷€鍔ㄧ敾纭疄閲嶆挱杩?        titleEl.dataset.epFlash = '1';
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

    // ============ 鍓ч泦淇℃伅璇嗗埆锛坴4.6锛氭寜鐪熷疄 DOM 閲嶅啓锛?============
    // v4.6 鐢ㄦ棤澶存祻瑙堝櫒鎶撲簡鐖卞鑹虹湡瀹炴挱鏀鹃〉锛岀粨璁烘帹缈讳簡杩囧幓鍑犺疆鐨勫亣璁撅細
    //   1) 鐖卞鑹虹被鍚嶆槸 CSS Module 鍝堝笇锛坵ebHead_title__Sm9Li / superAlbumEpisodes_contentWrapper__WnANS锛夛紝
    //      涔嬪墠鍐欑殑 .widget-title-line h1 涔嬬被鏍规湰涓嶅瓨鍦紝class 瀛愪覆閫夋嫨鍣ㄨ繕鍥犲ぇ灏忓啓鍏ㄩ儴澶遍厤锛?    //   2) 闆嗘暟涓嶅彧鍦?document.title锛屾挱鏀惧櫒涓婃柟 .webHead_title 閲屽啓鐫€銆屽鏃ョ殑鏄熸槦 绗?鏈?绱犱汉澶鈥︺€嶏紝
    //      杩欎竴澶勬洿鏂版渶鍙婃椂锛屼笖缁艰壓鏄€屾湡銆嶄笉鏄€岄泦銆嶏紱
    //   3) 鏈熸暟鍙兘鏄?8 浣嶆棩鏈熷彿锛堢20240303鏈燂級锛屾棫姝ｅ垯 \d{1,4} 鐩存帴澶遍厤 鈫?杩欏氨鏄€岃瘑鍒笉鍒伴泦鏁般€嶇殑涓诲洜锛?    //   4) 椤甸潰涓婃湁鐑悳姒?1-6銆佺孩鍖呭€掕鏃?00/29/58 杩欑被銆岀湅鐫€鍍忛€夐泦銆嶇殑鏁板瓧鍒楄〃锛屽繀椤婚伩寮€銆?    const SITE_TITLE_SELECTORS = {
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
        // YouTube锛氭爣棰樺湪 ytd-watch-metadata 鐨?yt-formatted-string 閲岋紝h1 閫夋嫨鍣?alone 瀹规槗鍛戒腑渚ф爮/鎺ㄨ崘
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
        // v6.0 鍏ㄧ珯閫氱敤锛氭湭鐭ョ珯鐐规病鏈変笓灞為€夋嫨鍣紝鐢ㄤ竴缁勨€滄挱鏀鹃〉甯歌鈥濈殑瀹芥硾閫夋嫨鍣ㄥ厹搴曘€?        // 璇激鐢?isJunkSource / cleanTitle 鐨勫櫔闊宠繃婊ゆ敹浣忥紱瀹屽叏璇嗗埆涓嶅埌灏辨暣鍧楅殣钘忥紝涓嶇暀绌烘銆?        generic: [
            // MacCMS / 娴疯灪绛夊父瑙佹挱鏀鹃〉鏍囬
            '.MacPlayer .title', '#play_title', '.player-title-bar', '.hl-player-title',
            '.hl-ma-title', '.myui-player__title', '.stui-player__title',
            '[class*="player__title" i]', '[class*="player-title" i]',
            // 閫氱敤
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

    // 绔欑偣鍚嶅熬宸?/ 娈靛唴鍣煶 / 鏁存鍏冧俊鎭?    const SITE_TAIL_RE = /[-鈥攟_]\s*[^-鈥攟_]{0,28}(鐖卞鑹簗iqiyi|鑵捐瑙嗛|v\.qq|浼橀叿|youku|鍝斿摡鍝斿摡|bilibili|bili|鑺掓灉\s*TV|mgtv|鎼滅嫄瑙嗛|涔愯|YouTube|Netflix|NETFLIX|Anime-Complete|HDOfficial|OnDemandChina|ODC褰辫|鐖卞９甯唡iyf\.tv|鍞愪汉琛楀奖闄trvod|chinatownfilm|szctv)[^-鈥攟_]{0,24}$/i;
    const NOISE_WORDS = /(鍦ㄧ嚎瑙傜湅|鍏ㄧ綉涓婄嚎|鐑挱涓瓅瀹屾暣鐗坾楂樻竻鐗?|瓒呮竻|钃濆厜|鐙挱|鐙|鍏嶈垂瑙傜湅|棰勫憡鐗?|鑺辩诞|鐗囪姳|4K|HDR|VIP|浼氬憳|Anime-Complete|HDOfficial|VersionWatch\s*Online|Watch\s*Online|Full\s*Episode)/gi;
    const NOISE_SEG_EXACT = /^(鐖卞鑹簗iqiyi|鑵捐瑙嗛|v\.qq|浼橀叿|youku|鍝斿摡鍝斿摡|bilibili|bili|鑺掓灉\s*tv|mgtv|鎼滅嫄瑙嗛|涔愯|youtube|netflix|ondemandchina|鐖卞９甯唡鍞愪汉琛楀奖闄trvod|szctv|鍦ㄧ嚎瑙傜湅|鍦ㄧ嚎鎾斁|鍏ㄩ泦|瀹屾暣鐗坾楂樻竻鐗?|瓒呮竻|钃濆厜|鐙挱|鐙|鍏嶈垂瑙傜湅|鍏嶈垂鍦ㄧ嚎瑙傜湅|鎵嬫満瑙傜湅|鐢佃鍓鐢佃杩炵画鍓缃戠粶鍓鍓у満|鍔ㄦ极|缁艰壓|缁艰壓鑺傜洰|缁艰壓鍓у満|绾綍鐗噟鐢靛奖|棰勫憡|鑺辩诞|鐗囪姳|4k|hdr|vip|浼氬憳|楂樻竻瀹屾暣鐗堣棰戝湪绾胯鐪媩瀹屾暣鐗堣棰戝湪绾胯鐪媩楂樻竻姝ｇ増瑙嗛鍦ㄧ嚎瑙傜湅|楂樻竻鍏嶈垂鍦ㄧ嚎瑙傜湅)$/i;
    const NOISE_SEG_SUB = /(鍦ㄧ嚎瑙傜湅|鍦ㄧ嚎鎾斁|瀹屾暣鐗坾楂樻竻瀹屾暣鐗坾楂樻竻姝ｇ増|楂樻竻鍏嶈垂|楂樻竻|瓒呮竻|钃濆厜|鐙挱|鐙|鍏嶈垂瑙傜湅|鍏嶈垂鍦ㄧ嚎瑙傜湅|鎵嬫満瑙傜湅|鐢佃鍓鐢佃杩炵画鍓缁艰壓(鑺傜洰)?|鍔ㄦ极|绾綍鐗噟鑺辩诞|棰勫憡|鐗囪姳|鍓у満|鍏ㄩ泦|濂楄|瑙嗛鍦ㄧ嚎瑙傜湅)$/i;

    function isNoiseSeg(s) {
        return NOISE_SEG_EXACT.test(s) || NOISE_SEG_SUB.test(s);
    }

    // 鎾斁鏃堕暱灏惧反锛堢媯椋欑1闆?2绉?/ 榛戜簹褰?鍒嗛挓 / 鑵捐銆岀01闆?5:18銆嶏級
    const RUNTIME_TAIL_RE = /(?:\d+\s*(?:鍒嗛挓|绉掗挓|绉抾灏忔椂)|\d{1,2}:\d{2}(?::\d{2})?)\s*$/;

    function cleanTitle(raw) {
        const original = String(raw || '').replace(/\s+/g, ' ').trim();
        if (!original) return '';
        const flat = original.replace(/[銆娿€媇/g, '');
        // 闆嗘暟鍙兘鍦ㄤ腑娈碉紙澶忔棩鐨勬槦鏄?绗?鏈?绱犱汉澶鈥︼級锛屼篃鍙兘鍦ㄥ紑澶达紙绗?闆嗐€婇粦浜氬綋銆嬶級銆?        // 鍙栥€岄泦鏁颁袱渚ф洿骞插噣鐨勯偅涓€娈点€嶏細浼樺厛闆嗘暟涔嬪墠锛屼负绌哄垯鍙栭泦鏁颁箣鍚庛€?        // 鏃у啓娉曟槸 split 涔嬪悗鏃犺剳鍙栫涓€娈碉紝閬囧埌銆岀1闆嗐€婇粦浜氬綋銆嬨€嶄細寰楀埌绌轰覆锛?        // 鍐嶅洖閫€鏁存锛岀粨鏋滄妸銆岀1闆嗐€嶅張褰撴垚鍓у悕鏄剧ず鍑烘潵銆?        // 鍏堝墺灏鹃儴鏃堕暱锛岄伩鍏嶃€岀01闆?5:18銆嶅共鎵伴泦鏁板垏鍒?        const noRuntime = flat.replace(RUNTIME_TAIL_RE, '').trim() || flat;
        const parts = noRuntime.split(/绗琝s*\d{1,8}\s*[闆嗚瘽鏈熺珷]/);
        let base = parts.length > 1
            ? (parts[0].trim() || parts.slice(1).join('').trim() || noRuntime)
            : noRuntime;
        // 鑵捐甯歌銆岄噸鐢熷瘑鐮乢01_鐢佃鍓鈥︺€嶏細鍘绘帀绾暟瀛楅泦鏁版
        base = base.replace(/(?:^|[_\-鈥攟\s])0*\d{1,3}(?=[_\-鈥攟\s]|$)/g, ' ').replace(/\s+/g, ' ').trim() || base;
        base = base.replace(SITE_TAIL_RE, '');
        // 绔欑偣鍝佺墝灏惧反锛圷ouTube / 鐖卞９甯?/ OnDemandChina / 鍞愪汉琛椻€︼級
        base = base.replace(/\s*[-鈥攟_]\s*(YouTube|Netflix|NETFLIX|bilibili|Bilibili|OnDemandChina|鐖卞９甯唡鍞愪汉琛楀奖闄iyf\.tv)\s*$/i, '').trim();
        // 銆屽墽鍚?28-鍏嶈垂鍦ㄧ嚎瑙傜湅銆嶄腑闂寸殑瑁搁泦鏁版锛坕yf / 閮ㄥ垎 MacCMS 鏍囬锛?        base = base.replace(/(?:^|[-鈥攟_\s])0*\d{1,3}(?=[-鈥攟_\s](?:鍏嶈垂|鍦ㄧ嚎|楂樻竻|姝ｇ墖|鍏ㄩ泦|鏇存柊|$))/g, ' ').replace(/\s+/g, ' ').trim() || base;
        // 鏍囬甯歌銆屽墽鍚?绫诲瀷璇?绗琋闆嗐€嶏紝鍒囨帀闆嗘暟鍚庣被鍨嬭瘝浼氱矘鍦ㄥ墽鍚嶅熬宸翠笂
        base = base.replace(/(鐢佃杩炵画鍓鐢佃鍓缃戠粶鍓缁艰壓(鑺傜洰)?|鍔ㄦ极|鍔ㄧ敾鐗?|绾綍鐗噟鐢靛奖|鐭墽)$/,'').trim() || base;
        // 鍘绘帀鏍囬閲屽凡鍙瘑鍒殑鑻辨枃闆嗘暟鏍囪锛岄伩鍏嶄笌闆嗘暟鍒楅噸澶?        base = base.replace(/\bS\s*\d{1,2}\s*[Eex]\s*\d{1,3}\b/ig, ' ')
                   .replace(/\b(?:Episodes?|Ep)\.?\s*\d{1,4}\b/ig, ' ')
                   .replace(/\s+/g, ' ').trim() || base;
        const segs = base.split(/[-鈥攟_]/).map(s => s.trim()).filter(Boolean);
        while (segs.length > 1 && isNoiseSeg(segs[segs.length - 1])) segs.pop();
        // B绔欒嫳鏂囪矾寰勩€屼腑鏂囧悕-Anime-Complete series-鈥︺€嶏細浼樺厛淇濈暀涓枃娈?        if (segs.length > 1) {
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

    // 绔欑偣绾у厹搴曟爣棰橈細鎾斁椤佃繕娌℃覆鏌撳嚭鐗囧悕鏃讹紝document.title 浼氭槸銆岀埍濂囪壓-鍦ㄧ嚎瑙嗛缃戠珯-娴烽噺姝ｇ増鈥︺€?    // 杩欑闂ㄦ埛鏍囬锛岀粷涓嶈兘褰撳墽鍚嶆樉绀猴紙鐪熷疄绔埌绔窇鍑烘潵杩囪繖涓瑧璇濓級銆?    // 鍙垪闂ㄦ埛寮忓厹搴曟爣棰樼殑鐗瑰緛璇嶏紝瀹佺獎鍕垮锛氭甯哥墖鍚嶉噷鍑虹幇鐨勨€滃湪绾胯鐪嬧€濈瓑涓嶈兘璇垽
    const GENERIC_TITLE_RE = /(鍦ㄧ嚎瑙嗛缃戠珯|娴烽噺姝ｇ増|瀹樼綉棣栭〉|鍏嶈垂鍦ㄧ嚎瑙傜湅瑙嗛|棰嗗厛鐨勮棰戝钩鍙皘寮瑰箷瑙嗛缃戠珯|濂藉墽鐪嬩笉瀹寍銇ゃ儹 骞叉澂)/;
    const BARE_SITE_NAMES = new Set(['鐖卞鑹?, 'iqiyi', '鑵捐瑙嗛', 'v.qq', '浼橀叿', 'youku', '鎼滅嫄瑙嗛',
        '鍝斿摡鍝斿摡', 'bilibili', 'bili', '鑺掓灉tv', 'mgtv', 'netflix', 'youtube']);

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
        return /^(绗琝s*\d{1,8}\s*[闆嗚瘽鏈焆|P?\d{1,4})$/i.test(String(txt || '').trim());
    }

    // 鎾斁鍣ㄦ爣棰樺尯鍘熸枃锛堝墽鍚嶅拰闆嗘暟甯稿父鍐欏湪鍚屼竴琛岋級
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

    // v6.0 閫氱敤绔欏厹搴曪細缁撴瀯鍖栨暟鎹紙JSON-LD锛夐噷甯稿甫 name / headline / episodeNumber锛?    // 姣旈〉闈㈡爣棰樺共鍑€锛屾爣棰樺尯璇嗗埆涓嶅埌鏃剁敤瀹冭ˉ銆傛繁搴︿笌鏁伴噺閮藉仛闄愬埗锛岄伩鍏嶅湪澶х珯涓婃壂澶鑴氭湰銆?    // updateTitle 姣?2 绉掕窇涓€娆★紝JSON-LD 娌″繀瑕佸弽澶嶈В鏋愶細8 绉掑唴澶嶇敤涓婃缁撴灉
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
                    if (num >= 1 && num <= 800) out.episode = `绗?{num}闆哷;
                }
            }
            if (out.name && out.episode) break;
        }
        ldCache.at = Date.now();
        ldCache.info = out;
        return out;
    }

    // 閫夐泦瀹瑰櫒锛欳SS Module 涓嬪ぇ灏忓啓娣风敤锛坰uperAlbumEpisodes / videolist_xxx锛夛紝涓€寰嬪姞 i 蹇界暐澶у皬鍐?    const EPISODE_BOX_SEL = '[class*="episode" i],[class*="anthology" i],[class*="videolist" i],[class*="video-list" i],' +
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
            // 鏃㈣璁ょ簿纭?token锛坰elected锛夛紝涔熻璁?CSS Module 褰㈠紡锛坱abMenu_selected__-BAEY銆乸layingIcon_bar__aIMgO锛?            return ACTIVE_TOKENS.has(low) || /(^|[_\-\s])(active|selected|current|playing|checked)([_\-\s]|$)/.test(low);
        });
    }

    // 缁熶竴鐨勯泦鏁版彁鍙栥€俿trict=true 鐢ㄤ簬閫夐泦鍒楄〃椤硅繖绫烩€滄贩鍚堟枃鏈€濓紝鍙鏄庣‘鏍煎紡锛?    // 鐪熷疄绔欑偣韪╄繃鍧戯細缁艰壓閫夐泦椤瑰啓鎴愩€?1-17绗?鏈熲€︺€嶏紝闈炰弗鏍兼ā寮忎細鍏堟妸鏃ユ湡 11-17 閲岀殑
    // 11 鐚滄垚鈥滅11鏈熲€濓紝鎶婃纭粨鏋滃帇鎺夈€?    function extractEpisode(text, unitHint, strict) {
        let t = String(text || '').replace(/\s+/g, ' ').trim();
        if (!t || t.length > 140) return '';
        // 鑵捐鎾斁鍣ㄦ爣棰樺父瑙併€岄噸鐢熷瘑鐮?绗?1闆?5:18銆嶏紝鍏堝幓鎺夊熬閮ㄦ椂闀垮啀鍖归厤
        t = t.replace(RUNTIME_TAIL_RE, '').trim() || t;
        let m = t.match(/绗琝s*(\d{1,8})\s*([闆嗚瘽鏈熺珷])/);
        if (m) return `绗?{m[1]}${m[2]}`;
        // iyf / 閮ㄥ垎绔欐爣棰橈細銆屽墽鍚?28-鍏嶈垂鍦ㄧ嚎瑙傜湅銆嶆垨銆屽墽鍚?28銆?        m = t.match(/(?:^|[-鈥攟_\s])0*(\d{1,3})(?=[-鈥攟_\s](?:鍏嶈垂|鍦ㄧ嚎|楂樻竻|姝ｇ墖|鍏ㄩ泦|鏇存柊|鐖卞９甯唡$))/);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 800) return `绗?{n}${unitHint || '闆?}`;
        }
        m = t.match(/绗琝s*(\d{1,8})(?![\d])/);
        if (m) return `绗?{m[1]}${unitHint || '闆?}`;
        // 鑻辨枃绔欏父瑙侊細Episode 12 / Ep. 3 / EP 07 / S01E05 / S1E2
        m = t.match(/\b(?:Episode|Episodes?)\s*[.#:\-]?\s*(\d{1,4})\b/i);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 800) return `绗?{n}${unitHint || '闆?}`;
        }
        m = t.match(/\bEp\.?\s*(\d{1,4})\b/i);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 800) return `绗?{n}${unitHint || '闆?}`;
        }
        m = t.match(/\bS\s*(\d{1,2})\s*[Eex]\s*(\d{1,3})\b/i);
        if (m) {
            const n = parseInt(m[2], 10);
            if (n >= 1 && n <= 800) return `绗?{n}${unitHint || '闆?}`;
        }
        if (/^\d{1,4}$/.test(t)) {
            const n = parseInt(t, 10);
            return (n >= 1 && n <= 800) ? `绗?{n}${unitHint || '闆?}` : '';
        }
        // 浠ヤ笅鏄€滀粠鏁磋鏍囬閲屾壘瑁哥紪鍙封€濓紙濡?銆婄媯椋欍€?1_鐢佃鍓э級锛屽彧鐢ㄤ簬鏍囬/鏂囨。鏍囬锛?        // 閫夐泦椤逛竴寰嬩笉璧帮紝閬垮厤鎶婃棩鏈熴€佸勾浠姐€佽瘎鍒嗛噷鐨勬暟瀛楀綋闆嗘暟
        if (strict) return '';
        m = t.match(/(?:^|[\s銆?锛夈€慭-_])(\d{1,3})(?=$|[\s_\-鈥攟銆婏紙(銆慮)/);
        if (m) {
            const n = parseInt(m[1], 10);
            if (n >= 1 && n <= 300) return `绗?{n}${unitHint || '闆?}`;
        }
        m = t.match(/\bP\s*(\d{1,4})\b/i);
        if (m) return `P${m[1]}`;
        return '';
    }

    function unitHintOf(text) {
        const m = String(text || '').match(/绗琝s*\d{1,8}\s*([闆嗚瘽鏈焆)/);
        return m ? m[1] : '';
    }

    // 閫夐泦鍒楄〃閲岀殑鈥滃綋鍓嶉泦鈥濄€傞€変腑鎬佸繀椤诲敮涓€鎵嶅彲淇★細鐪熷疄鐖卞鑹烘瘡涓€夐泦椤归兘鎸傜潃
    // tvg-playing-icon 杩欑被瑁呴グ鑺傜偣锛屽椤瑰懡涓鏄庡畠涓嶆槸鈥滄鍦ㄦ挱鏀锯€濇爣璁帮紝姝ゆ椂瀹佸彲涓嶈锛?    // 鎶婂垽鏂缁欐挱鏀惧櫒鏍囬鍖哄拰 document.title銆?    function readDomEpisode(unitHint) {
        const all = Array.from(document.querySelectorAll(EPISODE_BOX_SEL));
        // 鍙椤跺眰瀹瑰櫒锛氬惁鍒欏垪琛ㄩ噷姣忎釜 a/span锛坈lass 閮藉甫 videoListItem_锛変篃浼氭垚涓衡€滃鍣ㄢ€濓紝
        // 鍚勮嚜鍐呴儴鎭板ソ鍙湁涓€涓€変腑鑺傜偣锛屼笂闈㈢殑鍞竴鎬у垽鏂氨琚灦绌轰簡鈥斺€旂湡瀹炵珯鐐规鏄繖鏍风炕杞︾殑銆?        const boxes = all.filter(el => !all.some(o => o !== el && o.contains(el))).slice(0, 6);
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

    // MacCMS 鎾斁椤?URL锛?play/105860-2-18.html 鎴?/vodplay/xxx-1-18.html锛屾湯娈?nid 鍗抽泦搴忓彿
    function episodeFromUrl() {
        try {
            const path = location.pathname || '';
            let m = path.match(/\/(?:vod)?play\/[\w-]*?(\d+)[-_](\d+)[-_](\d+)(?:\.html)?/i);
            if (m) {
                const n = parseInt(m[3], 10);
                if (n >= 1 && n <= 2000) return `绗?{n}闆哷;
            }
            m = location.search.match(/[?&](?:nid|ep|episode|n)=(\d{1,4})\b/i);
            if (m) {
                const n = parseInt(m[1], 10);
                if (n >= 1 && n <= 2000) return `绗?{n}闆哷;
            }
        } catch (e) {}
        return '';
    }

    function getEpisodeInfo() {
        if (config.customText) return { title: config.customText, episode: '' };

        const page = document.title || '';
        const heads = readHeadTexts();
        const joined = heads.join(' ');
        const unit = unitHintOf(page) || unitHintOf(joined) || '闆?;
        // 鍏滃簳鏍囬閲屾病鏈夐泦鏁帮紝unit 鐚滀笉鍑烘潵灏辩敤榛樿鈥滈泦鈥濓紝涓嶅奖鍝嶅悗缁檷绾?
        // 鍓у悕锛氭挱鏀惧櫒鏍囬鍖?> document.title銆備絾鏍囬鍖哄父甯告槸銆屽墽鍚?绗?鏈?鏈泦鍓爣棰樸€嶏紝
        // 鑻ュ壇鏍囬鍓嶆病鏈夐泦鏁板彲鍒囷紙head 鏈覆鏌撴湡鍙凤級锛宒ocument.title 瑙ｆ瀽鍑虹殑鏇寸煭鍓у悕
        // 涓旀濂芥槸瀹冪殑鍓嶇紑鏃讹紝璇存槑鏍囬鍖鸿鍓爣棰樻薄鏌擄紝鍙栨洿骞插噣鐨勯偅涓€?        const pageOk = !isJunkSource(page);
        const fromPage = pageOk ? cleanTitle(page.split(/绗琝s*\d{1,8}\s*[闆嗚瘽鏈熺珷]/)[0] || page) : '';
        const ld = readJsonLdInfo(); // v6.0 閫氱敤绔欑粨鏋勫寲鏁版嵁鍏滃簳

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

        // 闆嗘暟锛氶€夐泦鈥滄鍦ㄦ挱鏀锯€濋」 > 鎾斁鍣ㄦ爣棰樺尯 > JSON-LD > document.title銆?        // 閫夐泦楂樹寒/playing 鍥炬爣鏄挱鏀惧櫒杩愯鏃跺啓涓婂幓鐨勶紝鍒囬泦鏃舵渶鍙潬锛?        // 鏍囬鍖哄拰 document.title 閮藉彲鑳芥槸鏈嶅姟绔覆鏌撶殑鍒濆鍊硷紝浼氭粸鍚庛€?        let episode = readDomEpisode(unit);
        if (!episode) {
            // 鏍囬鍖哄悓鏍锋寜涓ユ牸妯″紡锛氬畠甯稿甫鐫€銆?3鍒嗛挓銆嶈繖绫绘椂闀挎暟瀛楋紝涓嶈兘鐬庣寽瑁哥紪鍙?            for (const h of heads) {
                const e = extractEpisode(h, unit, true);
                if (e) { episode = e; break; }
            }
        }
        if (!episode && ld.episode) episode = ld.episode;
        // 鍙湁 document.title 鍏佽闈炰弗鏍硷紙銆婄媯椋欍€?1_鐢佃鍓?杩欑瑁哥紪鍙锋牸寮忓彧鍑虹幇鍦ㄦ爣棰橀噷锛?        if (!episode && pageOk) episode = extractEpisode(page, unit);
        // MacCMS / 绗笁鏂圭珯锛歎RL 閲岀殑闆嗗簭鍙峰線寰€姣旀爣棰樻洿鍑?        if (!episode) episode = episodeFromUrl();

        return { title, episode };
    }

    let lastRenderedText = null;
    let overlayHasText = true;      // 鍒濆涓?true锛氶甯у厛鎸夆€滄湁鍐呭鈥濇覆鏌擄紝璇嗗埆涓嶅埌鍐嶇敱 updateTitle 鏀舵帀
    let detectState = { title: '', episode: '', source: '' };

    // 璇嗗埆鐘舵€佸洖鏄撅細鐖卞鑹烘敼鐗堝鑷撮€夋嫨鍣ㄥけ閰嶆椂锛岀敤鎴峰湪闈㈡澘涓婅兘鐩存帴鐪嬪埌鈥滄湭璇嗗埆鍒扳€濓紝
    // 鑰屼笉鏄鐫€涓€涓┖鐧芥鐚滄槸鑴氭湰鍧忎簡杩樻槸缃戠珯鍙樹簡銆?    function refreshDetectState() {
        if (!panelEl) return;
        const box = panelEl.querySelector('#ets-detectState');
        if (!box) return;
        const t = detectState.title || '鏈瘑鍒?;
        const e = detectState.episode || '鏈瘑鍒?;
        box.textContent = `璇嗗埆缁撴灉 鈫?鍓у悕锛?{t}銆€闆嗘暟锛?{e}`;
        box.style.color = (detectState.title && detectState.episode) ? '' : themeWarnColor();
    }

    function themeWarnColor() {
        const theme = getTheme();
        return (THEMES[config.theme] && config.theme === 'minimal') ? '#c62828' : theme.accent;
    }

    // 鍓у悕涓庨泦鏁板悇鑷嫭绔嬪瓧鍙凤細闆嗘暟榛樿鑷姩鍙栧墽鍚嶇殑 70%锛屼篃鍙墜鍔ㄦ寚瀹氾紙浠嶈窡闅忓睆骞曠缉鏀撅級
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
                // v6.7 鍚堝苟鏄剧ず锛氬崟娈垫枃瀛楅潬 max-height 鑷姩鎶樻垚澶氬垪锛屼笉鍐嶆寜鏁存闀垮害鍘嬪瓧鍙?                // 锛堟棫绠楁硶瀵?20 瀛椾互涓婄殑鏁存浼氫竴鐩村帇鍒?14px 浠嶆孩鍑猴級锛涘彧鍦ㄨ秴闀挎椂杞诲井缂╁皬涓€娆°€?                const len = raw.replace(/\s+/g, '').length;
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
            // 鎵嬪姩鍊煎悓鏍锋寜褰撳墠缂╂斁姣斾緥鎶樼畻锛屽皬灞忎笂涓嶄細姣斿墽鍚嶈繕澶?            const ratio = fs / Math.max(1, config.fontSize || 1);
            return Math.max(10, Math.round(manual * ratio));
        }
        return Math.max(12, Math.round(fs * 0.7));
    }

    // v6.7锛氶泦鏁板彧鍙栨暟瀛楅儴鍒嗭紝銆岀1闆?/ 绗?鏈?/ 绗?璇濄€嶇粺涓€鎴?1 / 2 / 3
    function episodeNumberText(ep) {
        return String(ep || '').replace(/^绗琝s*/, '').replace(/\s*(闆唡璇潀鏈焲绔?$/, '').replace(/^0+(?=\d)/, '').trim();
    }

    // 鏈€缁堟樉绀虹殑鏂囨湰锛氬悎骞舵ā寮忔槸銆屽墽鍚?鏁板瓧銆嶏紙绾㈡棩绗竴闆?鈫?绾㈡棩1锛夛紝鍚﹀垯浠嶆槸銆屽墽鍚?闆嗘暟銆?    function displayText(title, episode) {
        const t = config.displayMode !== 'episode' && title ? String(title).trim() : '';
        const e = config.displayMode !== 'title' && episode ? String(episode).trim() : '';
        if (config.compactEp !== false) {
            if (t && e) return t + episodeNumberText(e);
            return t || episodeNumberText(e) || '';
        }
        return [t, e].filter(Boolean).join('\n');
    }

    // 娓叉煋锛氬悎骞舵ā寮忎笅鏁村潡鍙湁涓€涓?span锛堝崟鍒楋紱瓒呴暱鍓у悕鐢?max-height 鑷姩鎶樻垚澶氬垪锛夛紱
    // 鍏抽棴鍚堝苟鍒欎繚鐣欐棫琛屼负锛氬墽鍚?span + 鎹㈣ + 闆嗘暟 span锛屽悇鐢ㄥ悇鐨勫瓧鍙枫€?    function renderTitleParts(title, episode) {
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

        // 闄嶇骇閾撅細涓や釜閮芥湁 鈫?鍓у悕+闆嗘暟锛涘彧鏈変竴涓?鈫?鍙樉绀洪偅涓€涓紱閮芥病鏈?鈫?鏁村潡闅愯棌
        const parts = [];
        if (config.displayMode !== 'episode' && title) parts.push(title);
        if (config.displayMode !== 'title' && episode) parts.push(episode);
        const text = displayText(title, episode);

        detectState.title = title;
        detectState.episode = episode;

        const nowHasText = !!text.trim();
        if (nowHasText !== overlayHasText) {
            overlayHasText = nowHasText;   // 绌烘闂鍦ㄨ繖閲屾敹鎺夛紙闅愯棌 / 鎭㈠閮借蛋鏍峰紡锛?            applyTitleStyle();
        }
        if (!nowHasText) {
            refreshDetectState();
            return;
        }

        if (text === lastRenderedText && titleEl.textContent === text) {
            refreshDetectState();
            return; // 鏂囨湰娌″彉灏变笉閲嶆帓
        }
        const hadRealText = !!(lastRenderedText && lastRenderedText.trim());
        lastRenderedText = text;
        renderTitleParts(title, episode);
        contentChangedAt = Date.now(); // 娌夋蹈娣″嚭閲嶆柊璁℃椂
        // 鍙湪鈥滃師鏈凡鏈夊唴瀹?鈫?鎹㈡垚鏂板唴瀹光€濇椂閲嶆挱锛岄伩鍏嶉娆¤瘑鍒嚭鏉ヤ篃闂竴涓?        if (hadRealText && nowHasText && config.replayOnEpisodeChange) playEntranceAnimation();
        refreshDetectState();
    }

    // ============ 鍏ㄥ睆妫€娴?============
    function checkFullscreen() {
        mountOverlays();
        applyTitleStyle();
        applyAvatarStyle();   // v6.0锛氬ご鍍忔寜閽粯璁ゅ彧璺熼殢鍏ㄥ睆鏄鹃殣
        updateTitle();
        // v6.6锛氱獥鍙ｆā寮忚闅愯棌銆佽繘鍏ㄥ睆鎵嶉娆￠湶闈㈡椂锛屾妸鍏ュ満鍔ㄧ敾琛ヤ笂锛堝彧鎾竴娆★級
        if (config.animation && !animationPlayed && isTitleVisibleNow()) {
            playEntranceAnimation();
            animationPlayed = true;
        }
    }

    // 杞婚噺鏍″噯锛氬彧鍦ㄣ€屽涓诲彉浜?/ 鍏ㄥ睆鐘舵€佸彉浜?/ 鑺傜偣琚挱鏀惧櫒閲嶅缓鎽樻帀銆嶆椂鎵嶉噸缁橈紝
    // 閬垮厤楂橀閲嶅啓 cssText 閫犳垚闂儊銆?    function syncOverlay(force) {
        if (!titleEl) return;
        const host = getOverlayHost();
        const fsChanged = isFullscreen() !== lastFsState;
        const hostChanged = !titleEl.isConnected || titleEl.parentElement !== host;
        const fadeChanged = shouldFadeNow() !== lastFaded;
        if (force || fsChanged || hostChanged || fadeChanged) checkFullscreen();
    }

    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
        .forEach(evt => document.addEventListener(evt, checkFullscreen));
    // 閮ㄥ垎绔欑偣杩涘叆/閫€鍑轰吉鍏ㄥ睆鍙Е鍙?fullscreenerror 鎴栦笉瑙﹀彂浜嬩欢锛岄潬涓嬮潰鐨勮疆璇㈠厹搴?    window.addEventListener('resize', () => syncOverlay(true));

    // ============ 鐖卞鑹轰吉鍏ㄥ睆鐩戝惉 ============
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
        // 鐖卞鑹烘槸 SPA锛屾挱鏀惧櫒瀹瑰櫒鍙兘鏅氫簬鑴氭湰鍒濆鍖栨墠鍑虹幇锛岃ˉ缁戝嚑娆?        let retries = 0;
        const bindTimer = setInterval(() => {
            if (bindTargets() > 0 || ++retries > 30) clearInterval(bindTimer);
        }, 1000);
    }

    // ============ 璁剧疆闈㈡澘 ============
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

    // 鎵嬪姩璋冭繃浠讳綍涓€椤癸紝灏遍€€鍑衡€滈璁炬€佲€濓紝鎸夐挳涓嶅啀楂樹寒銆?    // 澶村儚鐩稿叧鎺т欢涓嶅睘浜庤鎰熼璁撅紝甯?data-nonpreset 鐨勬帶浠舵敼鍔ㄤ笉瑙﹀彂閫€鍑洪璁俱€?    function markCustomPreset(e) {
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
        createPanel();            // 閲嶅缓闈㈡澘锛岃鎵€鏈夋粦鏉?涓嬫媺鍚屾鍒版柊鍊?        panelEl.style.display = 'block';
    }

    // 闈㈡澘 HTML 鐢ㄦā鏉夸覆鎷艰锛岀敤鎴峰彲鎺х殑瀛楃涓诧紙澶村儚鍦板潃銆佽嚜瀹氫箟鏂囧瓧锛夊繀椤诲厛杞箟
    function escapeAttr(v) {
        return String(v == null ? '' : v)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // 闈㈡澘鏄鹃殣锛氬垵濮?display 鏉ヨ嚜鏍峰紡琛紙none锛夛紝鍙湅鍐呰仈 style 浼氬垽閿欙紝
    // 棣栨鐐瑰嚮澶村儚/蹇嵎閿椂缁熶竴鎸夎绠楁牱寮忓垽鏂紝閬垮厤鈥滅偣涓€涓嬫病鍙嶅簲銆佽鐐逛袱涓嬧€濄€?    function isPanelVisible() {
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
            mountOverlays(); // 鍏ㄥ睆鏃舵妸闈㈡澘涓€璧峰甫杩?top layer
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
                <span>馃摵 鏄剧ず璁剧疆</span>
                <span class="ets-close">鉁?/span>
            </div>
            <div class="ets-body">
                <div class="ets-divider">涓€閿璁?/div>
                <div class="ets-row">
                    <button id="ets-preset-pc" class="ets-half-btn">鐢佃剳</button>
                    <button id="ets-preset-mobile" class="ets-half-btn">鎵嬫満</button>
                    <button id="ets-preset-minimal" class="ets-half-btn">鏋佺畝</button>
                </div>
                <label><input type="checkbox" id="ets-enabled"> 鍚敤鏄剧ず</label>
                <label><input type="checkbox" id="ets-perSite"> 鎸夌綉绔欑嫭绔嬮厤缃?/label>

                <label>浣嶇疆</label>
                <select id="ets-position">
                    <option value="left">宸︿晶</option>
                    <option value="right">鍙充晶</option>
                </select>

                <label>鎺掑垪鏂瑰悜</label>
                <select id="ets-layout">
                    <option value="vertical">绔栨帓</option>
                    <option value="horizontal">妯帓</option>
                </select>

                <label>鏄剧ず鍐呭</label>
                <select id="ets-displayMode">
                    <option value="both">鍓у悕 + 闆嗘暟</option>
                    <option value="title">浠呭墽鍚?/option>
                    <option value="episode">浠呴泦鏁?/option>
                </select>
                <label><input type="checkbox" id="ets-compactEp"> 鍓у悕+闆嗘暟鍚堝苟鏄剧ず锛堢孩鏃?锛涢暱鍓у悕鑷姩鍒嗗垪锛?/label>

                <label>涓婚</label>
                <select id="ets-theme">
                    ${Object.entries(THEMES).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join('')}
                </select>

                <label>瀛椾綋澶у皬: <span id="ets-fontSize-val">${config.fontSize}</span>px</label>
                <input type="range" id="ets-fontSize" min="16" max="80" value="${config.fontSize}">

                <label>瀛椾綋绮楃粏</label>
                <select id="ets-fontWeight">
                    <option value="400">鏅€?/option>
                    <option value="700">绮椾綋</option>
                    <option value="900">鐗圭矖</option>
                </select>

                <label>鏂囧瓧棰滆壊</label>
                <input type="color" id="ets-color" value="${config.color}">

                <label>鑳屾櫙閫忔槑搴? <span id="ets-bgOpacity-val">${config.bgOpacity}</span></label>
                <input type="range" id="ets-bgOpacity" min="0" max="1" step="0.05" value="${config.bgOpacity}">

                <label>鍒楅棿璺? <span id="ets-colGap-val">${config.columnGap}</span>px</label>
                <input type="range" id="ets-colGap" min="0" max="40" step="2" value="${config.columnGap}">
                <label>闆嗘暟瀛楀彿: <span id="ets-epSize-val">${config.episodeFontSize || '鑷姩'}</span>${config.episodeFontSize ? 'px' : '锛?=鑷姩鈮堝墽鍚?0%锛?}</label>
                <input type="range" id="ets-epSize" min="0" max="60" step="2" value="${config.episodeFontSize}">
                <label>鍨傜洿浣嶇疆: <span id="ets-offsetY-val">${config.offsetY}</span>%</label>
                <input type="range" id="ets-offsetY" min="10" max="90" value="${config.offsetY}">

                <label>鑷畾涔夋枃瀛楋紙鐣欑┖鑷姩璇嗗埆锛?/label>
                <input type="text" id="ets-customText" placeholder="瑕嗙洊鑷姩璇嗗埆" value="${escapeAttr(config.customText)}">

                <label class="ets-divider">蹇嵎閿?/label>
                <label>鍒囨崲鏄剧ず: <span id="ets-hotkeyToggle" class="ets-kbd">${config.hotkeyToggle}</span> <button id="ets-setToggleKey" class="ets-mini-btn">淇敼</button></label>
                <label>鎵撳紑璁剧疆: <span id="ets-hotkeySettings" class="ets-kbd">${config.hotkeySettings}</span> <button id="ets-setSettingsKey" class="ets-mini-btn">淇敼</button></label>

                <label class="ets-divider">璁剧疆澶村儚</label>
                <label>澶村儚鍥剧墖鍦板潃锛堢暀绌?= 鍐呯疆澶村儚锛?/label>
                <img class="ets-avatar-preview" id="ets-avatarPreview" alt="">
                <input type="text" id="ets-avatarUrl" data-nonpreset placeholder="https://鈥?鍥剧墖鍦板潃" value="${escapeAttr(config.avatarUrl)}">
                <div class="ets-row">
                    <button id="ets-avatarUpload" class="ets-half-btn">涓婁紶鍥剧墖</button>
                    <button id="ets-avatarClear" class="ets-half-btn">娓呴櫎澶村儚</button>
                </div>
                <input type="file" id="ets-avatarFile" data-nonpreset accept="image/*" style="display:none">
                <label data-nonpreset><input type="checkbox" id="ets-avatarFsOnly"> 澶村儚浠呭湪鍏ㄥ睆鏄剧ず</label>
                <div class="ets-hint">澶村儚鎸夐挳鍗宠缃叆鍙ｏ紝鐐瑰畠鎵撳紑鏈潰鏉匡紱澶村儚琚殣钘忔椂鎸夊揩鎹烽敭 ${config.hotkeySettings} 鍙墦寮€鏈潰鏉裤€?/div>

                <label class="ets-divider">鍏朵粬</label>
                <label><input type="checkbox" id="ets-animation"> 鍚敤鍏ュ満鍔ㄧ敾</label>
                <label><input type="checkbox" id="ets-autoHideFullscreen"> 鍏ㄥ睆鏃堕殣钘忔爣棰橈紙榛樿鍏抽棴 = 鍏ㄥ睆涔熸樉绀猴級</label>
                <label><input type="checkbox" id="ets-fullscreenOnly"> 浠呭叏灞忔椂鏄剧ず鏍囬锛堢獥鍙ｆā寮忛殣钘忥級</label>
                <label><input type="checkbox" id="ets-touchMode"> 鍚敤瑙︽懜鎵嬪娍</label>
                <label><input type="checkbox" id="ets-uprightDigits"> 鏁板瓧绔栫珛鏄剧ず锛堜笉妯汉锛?/label>
                <label><input type="checkbox" id="ets-replayAnim"> 鍒囬泦鏃堕噸鎾叆鍦哄姩鐢?/label>
                <label><input type="checkbox" id="ets-adaptive"> 灏忓睆鑷姩缂╁皬瀛楀彿</label>
                <label>娌夋蹈娣″嚭: <span id="ets-immersiveFade-val">${config.immersiveFade}</span>s锛?=甯告樉锛?/label>
                <input type="range" id="ets-immersiveFade" min="0" max="60" step="5" value="${config.immersiveFade}">

                <label class="ets-divider">淇濆瓨</label>
                <button id="ets-save">淇濆瓨璁剧疆</button>
                <div class="ets-hint">璋冩暣鍚庣珛鍗崇敓鏁堬紱鐐光€滀繚瀛樿缃€濅細鍐欏叆娌圭尨瀛樺偍锛堝苟鍙屽啓 localStorage 鍏滃簳锛夈€?/div>

                <label class="ets-divider">瀵煎叆/瀵煎嚭</label>
                <div class="ets-row">
                    <button id="ets-export" class="ets-half-btn">瀵煎嚭閰嶇疆</button>
                    <button id="ets-import" class="ets-half-btn">瀵煎叆閰嶇疆</button>
                </div>
                <input type="file" id="ets-fileInput" accept=".json" style="display:none">

                <button id="ets-reset">閲嶇疆榛樿</button>
                <div id="ets-detectState" class="ets-site-info">璇嗗埆缁撴灉 鈫?鍓у悕锛氣€斻€€闆嗘暟锛氣€?/div>
                <div class="ets-site-info">褰撳墠绔欑偣: ${location.hostname}銆€瀛樺偍: ${gmStoreReady() ? '娌圭尨瀛樺偍' : 'localStorage'}</div>
            </div>
        `;

        // 绉婚櫎鏃ф牱寮?        const oldStyle = document.getElementById('episode-title-panel-style');
        if (oldStyle) oldStyle.remove();

        const panelStyle = document.createElement('style');
        panelStyle.id = 'episode-title-panel-style';
        panelStyle.textContent = buildPanelCSS();
        document.head.appendChild(panelStyle);
        document.body.appendChild(panelEl);

        bindPanelEvents();
        enablePanelDrag();
        applyPanelPos();      // 鎭㈠涓婃鎷栧姩浣嶇疆锛屽苟澶瑰洖褰撳墠瑙嗗彛鍐?        refreshPresetButtons();
        refreshDetectState(); // 闈㈡澘涓€鎵撳紑灏辨槸鏈€鏂拌瘑鍒姸鎬?    }

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
            mountOverlays(); // 閲嶅缓鍚庣殑闈㈡澘瑕佹惉鍥炲綋鍓嶅叏灞忓涓?            if (wasVisible) panelEl.style.display = 'block';
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
            epValEl.textContent = config.episodeFontSize || '鑷姩';
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

        // v6.6锛氫袱椤逛簰鏂?鈥斺€?閮藉紑灏辩瓑浜庣獥鍙ｅ拰鍏ㄥ睆閮戒笉鏄剧ず锛堟案涔呴殣韬級锛屽嬀涓€涓嚜鍔ㄥ叧鍙︿竴涓?        fsHideEl.onchange = () => {
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
        // 浠讳綍婊戞潌/寮€鍏?涓嬫媺琚墜鍔ㄦ敼鍔紝鍗宠涓鸿嚜瀹氫箟閰嶇疆
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

        // v6.0 淇濆瓨閫夐」锛氭樉寮忚惤鐩?+ 绔嬪嵆閲嶇粯 + 杞绘彁绀猴紝閬垮厤鐢ㄦ埛涓嶇‘瀹氭湁娌℃湁瀛樹笂
        panelEl.querySelector('#ets-save').onclick = () => {
            const ok = saveConfig();
            applyTitleStyle();
            applyAvatarStyle();
            updateTitle();
            showToast(ok ? '璁剧疆宸蹭繚瀛橈紙閲嶅惎娴忚鍣ㄥ悗渚濈劧鐢熸晥锛? : '淇濆瓨澶辫触锛氭祻瑙堝櫒鎴栨墿灞曟嫆缁濆啓鍏ュ瓨鍌?);
        };

        // v6.0 璁剧疆澶村儚
        const avUrlEl = panelEl.querySelector('#ets-avatarUrl');
        if (avUrlEl) {
            avUrlEl.onchange = () => {
                const v = sanitizeAvatarUrl(avUrlEl.value.trim());
                config.avatarUrl = v;
                avUrlEl.value = v;
                saveConfig();
                applyAvatarStyle();
                refreshAvatarPreview();
                showToast(v ? '澶村儚鍦板潃宸叉洿鏂? : '宸叉仮澶嶅唴缃ご鍍?);
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
                // dataURL 瑕佽繘 localStorage锛屽厛鍘嬫垚 128脳128 鍐嶅瓨锛岄伩鍏嶅ぇ鍥炬拺鐖嗛厤棰?                const reader = new FileReader();
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
                            config.avatarUrl = dataUrl; // canvas 涓嶅彲鐢ㄦ椂閫€鍥炲師鍥?dataURL
                        }
                        saveConfig();
                        applyAvatarStyle();
                        if (panelEl) {
                            const u = panelEl.querySelector('#ets-avatarUrl');
                            if (u) u.value = config.avatarUrl;
                        }
                        refreshAvatarPreview();
                        showToast('澶村儚宸叉洿鏂?);
                    };
                    img.onerror = () => showToast('鍥剧墖璇诲彇澶辫触');
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
                showToast('宸叉仮澶嶅唴缃ご鍍?);
            };
        }

        refreshAvatarPreview();

        panelEl.querySelector('#ets-setToggleKey').onclick = () => {
            waitingForKey = 'toggle';
            panelEl.querySelector('#ets-hotkeyToggle').textContent = '鎸変笅缁勫悎閿?..';
        };
        panelEl.querySelector('#ets-setSettingsKey').onclick = () => {
            waitingForKey = 'settings';
            panelEl.querySelector('#ets-hotkeySettings').textContent = '鎸変笅缁勫悎閿?..';
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
                    alert('閰嶇疆鏂囦欢鏃犳晥锛?);
                }
            };
            reader.readAsText(file);
        };

        panelEl.querySelector('#ets-reset').onclick = () => {
            if (confirm('纭閲嶇疆涓洪粯璁ら厤缃紵')) {
                config = Object.assign({}, DEFAULTS);
                saveConfig();
                location.reload();
            }
        };
    }

    // 闈㈡澘鎷栨嫿锛堥紶鏍?+ 瑙︽懜锛? 浣嶇疆璁板繂锛堝悓鏍疯蛋 GM 瀛樺偍锛岄伩鍏嶈娓呯悊绔欑偣鏁版嵁甯﹁蛋锛?    function savePanelPos(x, y) {
        rawSet(KV_PANEL_POS, JSON.stringify({ x: Math.round(x), y: Math.round(y) }));
    }

    // 绐楀彛鍙兘姣斾笂娆℃洿灏忥紝鎭㈠鏃跺す鍥炲彲瑙嗚寖鍥达紝閬垮厤闈㈡澘琚尓鍑哄睆澶栨壘涓嶅洖鏉?    function applyPanelPos() {
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

    // 蹇嵎閿崟鑾?    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (waitingForKey) { // Esc 鍙栨秷褰曞叆锛屾妸鏂囨杩樺師鎴愬師蹇嵎閿?                const which = waitingForKey;
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

    // ============ 璁剧疆澶村儚鎸夐挳锛坴6.0 鍙栦唬榻胯疆锛?============
    // 澶村儚鍥剧墖锛氱敤鎴峰～鐨?http(s) / data:image 鍦板潃浼樺厛锛岀暀绌烘垨闈炴硶鏃剁敤鍐呯疆 SVG 澶村儚銆?    const AVATAR_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
        '<circle cx="32" cy="32" r="32" fill="#1a1a1a"/>' +
        '<text x="32" y="42" text-anchor="middle" font-size="34" font-weight="700" ' +
        'fill="#f0f0f0" font-family="system-ui,-apple-system,sans-serif">鍓?/text>' +
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

    // 澶村儚鎸夐挳鐨勬樉闅愶細榛樿鍙窡鍏ㄥ睆锛涘叧鎺夆€滀粎鍏ㄥ睆鏄剧ず鈥濆悗甯搁┗
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
        btn.title = '鏄剧ず璁剧疆锛堢偣鍑绘墦寮€锛?;
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

    // ============ 鏍囬瑙︽懜鎵嬪娍 ============
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

            // 宸︿晶杈圭紭鍙虫粦锛氬垏鎹㈡樉绀?            if (startX < 40 && dx > 60 && Math.abs(dy) < 40 && dt < 400) {
                config.enabled = !config.enabled;
                saveConfig();
                applyTitleStyle();
            }
        }, { passive: true });

        // 鍙屽嚮鏍囬闅愯棌锛坧ointer-events 缁熶竴鐢?applyTitleStyle 璁＄畻锛岄伩鍏嶈 cssText 瑕嗙洊锛?        let lastTap = 0;
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

    // ============ 娌圭尨鑿滃崟锛堟墜鏈虹涓诲叆鍙ｏ級 ============
    // 鎵嬫満涓婂揩鎹烽敭涓嶅彲鐢ㄣ€佸ご鍍忛粯璁や粎鍏ㄥ睆鏄剧ず锛岀敤鎴峰父鎵句笉鍒拌缃叆鍙ｃ€?    // 閫氳繃 Tampermonkey / Violentmonkey 鐨勮剼鏈彍鍗曟毚闇插父鐢ㄦ搷浣溿€?    let menuIds = [];
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

        add('馃摵 鎵撳紑璁剧疆闈㈡澘', () => {
            if (!started) { try { start(); } catch (e) {} }
            if (!panelEl) createPanel();
            setPanelVisible(true);
            showToast('宸叉墦寮€璁剧疆');
        });

        add(config.enabled ? '鈴?鍏抽棴鍓ч泦鏄剧ず' : '鈻讹笍 寮€鍚墽闆嗘樉绀?, () => {
            config.enabled = !config.enabled;
            saveConfig();
            applyTitleStyle();
            showToast(config.enabled ? '宸插紑鍚樉绀? : '宸插叧闂樉绀?);
            refreshMenuCommands();
        });

        add('馃摫 搴旂敤鎵嬫満棰勮', () => {
            if (typeof applyPreset === 'function') {
                applyPreset('mobile');
            } else {
                // 鍏滃簳锛氱洿鎺ュ啓鍏ユ墜鏈洪璁惧弬鏁?                Object.assign(config, {
                    layout: 'vertical', offsetY: 44, fontSize: 26, fontWeight: 700,
                    bgOpacity: 0.35, adaptiveFontSize: true, immersiveFade: 10,
                    episodeFontSize: 0, columnGap: 4, preset: 'mobile',
                });
                saveConfig();
                applyTitleStyle();
                if (panelEl) createPanel();
            }
            showToast('宸插簲鐢ㄦ墜鏈洪璁?);
            refreshMenuCommands();
        });

        add(config.avatarFullscreenOnly !== false ? '馃憗 澶村儚鏀逛负甯搁┗鏄剧ず' : '馃憗 澶村儚浠呭叏灞忔樉绀?, () => {
            config.avatarFullscreenOnly = !(config.avatarFullscreenOnly !== false);
            saveConfig();
            applyAvatarStyle();
            showToast(config.avatarFullscreenOnly ? '澶村儚浠呭叏灞忔樉绀? : '澶村儚甯搁┗鏄剧ず');
            refreshMenuCommands();
        });

        add(config.touchMode ? '鉁?鍏抽棴瑙︽懜鎵嬪娍' : '鉁?寮€鍚Е鎽告墜鍔?, () => {
            config.touchMode = !config.touchMode;
            saveConfig();
            showToast(config.touchMode ? '瑙︽懜鎵嬪娍宸插紑' : '瑙︽懜鎵嬪娍宸插叧');
            refreshMenuCommands();
        });
    }

    // ============ 鍒濆鍖?============
    function init() {
        if (config._needsSave) saveConfig(); // 鍐欏叆涓€娆℃€ц縼绉荤粨鏋?
        createTitleElement();
        createPanel();
        createGearButton();
        bindTitleTouch();
        mountOverlays();
        refreshMenuCommands();

        if (isIqiyi()) watchIqiyiFullscreen();

        // 瑙傚療 head锛歋PA 鍙兘鏁翠綋鏇挎崲 <title>锛屽彧鐩棫鑺傜偣浼氭紡鏇存柊
        const observer = new MutationObserver(updateTitle);
        if (document.head) {
            observer.observe(document.head, { subtree: true, childList: true, characterData: true });
        }

        setInterval(updateTitle, 2000);
        // 鍏ㄥ睆 / 浼叏灞忓厹搴曟牎鍑嗭細浜嬩欢涓㈠け銆佹挱鏀惧櫒閲嶅缓瀹瑰櫒銆乮frame 鎶㈢劍鐐规椂閮借兘鑷剤
        setInterval(() => syncOverlay(false), 1000);
    }

    // ============ 鍚姩闂搁棬锛氬叏绔欐敞鍏ワ紝浣嗗彧鍦ㄧ湡鐨勬湁瑙嗛鐨勯〉闈㈠惎鐢?============
    // v6.0 鏀规垚 @match *://*/* 鍚庯紝缁濆ぇ澶氭暟椤甸潰娌℃湁浠讳綍鎾斁鍣ㄣ€?    // 鍏堢瓑 <video>锛堟垨宸茬煡绔欑偣鐨勬挱鏀惧櫒瀹瑰櫒锛夊嚭鐜帮紝鍐嶅垵濮嬪寲鏁村 DOM锛?    // 鏅€氱綉椤典笂涓嶆寕鎮诞鐞冦€佷笉璺戝畾鏃跺櫒锛岄伩鍏嶅奖鍝嶆棤鍏抽〉闈€?    let started = false;
    let gateObserver = null;
    let gateTimer = null;

    function pageHasVideo() {
        try {
            if (document.querySelector('video')) return true;
            // 宸茬煡绔欑偣鐨勬挱鏀惧櫒瀹瑰櫒锛?video> 鍙兘鏄偣鍑绘挱鏀惧悗鎵嶆敞鍏ョ殑
            if (isIqiyi() && document.querySelector('.iqp-player, .iqp-player-container, #flashbox, #player')) return true;
            if (/v\.qq\.com|youku\.com|bilibili\.com|mgtv\.com|youtube\.com|netflix\.com/.test(location.hostname) &&
                document.querySelector('.txp_player, .h5player, .bpx-player-container, #bilibili-player, .mgtv-player, #movie_player')) return true;
            // MacCMS / 娴疯灪 / 甯歌绗笁鏂规挱鏀鹃〉
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
        // 鎾斁鍣?iframe 閲屾病鏈夊墽鍚嶄俊鎭紝涓斾細閲嶅娉ㄥ叆锛岀洿鎺ヤ笉鍦ㄦ鏋跺唴宸ヤ綔
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

        // 鍏滃簳杞锛歋PA 鎹㈤〉銆佽棰戞櫄娉ㄥ叆銆乷bserver 婕忔姤鏃朵篃鑳界瓑鍒般€?        // 90 绉掕繕娌″嚭鐜拌棰戯紙澶氬崐鏄櫘閫氱綉椤碉級锛屽嵏鎺?observer銆佽疆璇㈤檷鍒?5 绉掞紝
        // 鍏ㄧ珯娉ㄥ叆涔熶笉鑷充簬缁欐棤鍏抽〉闈㈡寔缁鍔犺礋鎷呫€?        gateTimer = setInterval(() => {
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

    // 鑴氭湰涓€鍔犺浇灏辨寕娌圭尨鑿滃崟锛堜笉蹇呯瓑 video锛夛紝鏂逛究鎵嬫満绔殢鏃舵墦寮€璁剧疆
    try { refreshMenuCommands(); } catch (e) {}
})();
