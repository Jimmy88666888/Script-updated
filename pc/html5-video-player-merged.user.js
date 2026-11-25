/* globals jQuery, $, Vue */
// ==UserScript==
// @name       HTML5视频播放工具（增强合并版）
// @name:en    HTML5 Video Playing Tools (Merged+)
// @name:it    Strumenti di riproduzione video HTML5 (Merged+)
// @description 视频截图；切换画中画；缓存视频；万能网页全屏；自动跳过同名剧集片头片尾；常用快捷键（空格/K 播放暂停、J/L 快退快进10秒、方向键、音量、数字键跳转进度、D/F 帧步进、C/X/Z 变速、R 重置速度、Q 静音、P 截图、I 画中画、M 缓存、N 下一集、回车/Shift+回车/W 全屏、H 快捷键面板）。全站通用，站点增强支持油管、B站、优酷、爱奇艺、腾讯、芒果、斗鱼、虎牙等。
// @description:en Screenshot, PiP, cache, any-page fullscreen, auto-skip intro/outro for same-named series, and hotkeys (Space/K play, J/L ±10s, arrows, digits to seek, D/F frame step, C/X/Z speed, R reset, Q mute, P shot, I PiP, M cache, N next, Enter/Shift+Enter/W fullscreen, H shortcut panel).
// @description:it Screenshot, PiP, cache, schermo intero, salto automatico di sigla iniziale/finale per serie omonime, tasti rapidi (Spazio/K riproduci, J/L ±10 s, frecce, cifre per saltare, D/F fotogramma, C/X/Z velocità, R reset, Q audio, P screenshot, I PiP, M cache, N successivo, Invio/Shift+Invio/W schermo intero, H pannello).
// @homepage https://bbs.kafan.cn/thread-2093014-1-1.html
// @icon       data:image/png;base64,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
// @icon64     data:image/png;base64,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
// @version    2.2.7-merged
// @namespace  local.edge-userscripts/html5-video-player-merged
// @license    MIT
// @match      *://*/*
// @inject-into content
// @run-at     document-start
// @require    https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.min.js
// @require    https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js
// @grant      GM_addStyle
// @grant      GM_info
// @grant      window.onurlchange
// @grant      unsafeWindow
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @grant      GM_getValue
// @updateURL    https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/html5-video-player-merged.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/html5-video-player-merged.user.js
// ==/UserScript==

'use strict';

// jQuery 兜底（@require 失败时避免整页脚本崩溃）
if (typeof jQuery === 'undefined' && typeof $ === 'undefined') {
	console.warn('[HTML5视频播放工具] jQuery 未加载，部分功能降级');
	const noop = function(){ return noop; };
	noop.one = noop.keydown = noop.unbind = noop.ready = noop;
	window.jQuery = window.$ = function(){ return noop; };
}
if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') window.$ = jQuery;

const curLang = navigator.language.slice(0, 2);
//感谢 Dario Costa 提供的英语和意大利语翻译
const i18n = {
	'zh': {
		'console': '%c脚本[%s] 反馈：%s\n%s',
		'cacheStoringError': '直接媒体类型（如MP4格式）缓存无效果！',
		'cacheStoringConfirm': '缓冲模式二选一，确认则全部缓冲，取消则按默认缓冲区大小进行缓冲。视频缓存的有效性检测，再看已观看视频片段不产生网络流量则可缓存。缓冲时再按M键则取消缓冲！',
		'cantOpenPIP': '无法进入画中画模式!错误:\n',
		'cantExitPIP': '无法退出画中画模式!错误：\n',
		'rememberRateMenuOption': '记忆播放速度',
		'speedRate': '播放速度 ',
		'ready': '准备就绪！ 待命中.',
		'mainPageOnly': '只处理主页面',
		'download': '下载: ',
		'videoLag': '视频卡顿',
		'fullScreen': '全屏',
		'helpMenuOption': '脚本功能快捷键表',
		'helpTitle': '快捷键一览',
		'helpClose': '按 H 或 Esc 关闭',
		'helpBadge': 'H / Esc',
		'helpPanelOption': '快捷键面板',
		'helpSecond': '秒',
		'toStart': '回到开头',
		'toEnd': '跳到结尾',
		'fullPage': '网页全屏',
		'muted': '已静音',
		'unmuted': '已恢复声音',
		'speedReset': '速度已重置为 1.0',
	},
	'en': {
		'console': '%cScript[%s] Feedback：%s\n%s',
		'cacheStoringError': 'Trying to cache direct media types (such as MP4 format) has no effect!',
		'cacheStoringConfirm': 'Do you want all segments of the video to be cached? The detection method used is as follows: when the page is refreshed, the watched video clips will be cached so that no additional network traffic is generated. If you want all segments of the videos to be cached, select OK; or select Cancel to buffer a portion of the video based on the default buffer size (which is the default browser behavior). When buffering, press M key again to cancel buffering.',
		'cantOpenPIP': 'Unable to access picture-in-picture mode! Error：\n',
		'cantExitPIP': 'Unable to exit picture-in-picture mode! Error：\n',
		'rememberRateMenuOption': 'Remember video playback speed',
		'speedRate': 'Speed rate ',
		'ready': ' ready！ Waiting for you commands.',
		'mainPageOnly': 'Process the main page only',
		'download': 'Download: ',
		'videoLag': 'Video lag',
		'fullScreen': 'Full screen',
		'helpMenuOption': 'Hotkeys list:',
		'helpTitle': 'Keyboard shortcuts',
		'helpClose': 'Press H or Esc to close',
		'helpBadge': 'H / Esc',
		'helpPanelOption': 'Shortcut panel',
		'helpSecond': ' s',
		'toStart': 'Back to start',
		'toEnd': 'Jump to end',
		'fullPage': 'Web fullscreen',
		'muted': 'Muted',
		'unmuted': 'Sound on',
		'speedReset': 'Speed reset to 1.0',
	},
	'it': {
		'console': '%cScript[%s] Feedback：%s\n%s',
		'cacheStoringError': 'Cercare di memorizzazione nella cache tipi di media diretti (come ad esempio il formato MP4) non ha alcuna efficacia!',
		'cacheStoringConfirm': 'Vuoi che tutti i segmenti del video siano memorizzati nella cache? Il metodo di rilevamento utilizzato è il seguente: all\'aggiornamento della pagina, i video clip guardati saranno memorizzati nella cache in modo da non generare ulteriore traffico di rete. Se vuoi che tutti i segmenti dei video siano memorizzati nella cache, seleziona OK; seleziona invece Annulla per bufferizzare una parte del video in base alla dimensione predefinita del buffer (come da comportamento predefinito del browser).Durante il buffering, premere nuovamente il tasto M per annullare il buffering.',
		'cantOpenPIP': 'Impossibile accedere alla modalità picture-in-picture! Errore：\n',
		'cantExitPIP': 'Impossibile uscire dalla modalità picture-in-picture! Errore：\n',
		'rememberRateMenuOption': 'Memorizza la velocità di riproduzione dei video',
		'speedRate': 'Velocità di riproduzione ',
		'ready': "Pronto！ In attesa dei comandi dell'utente.",
		'mainPageOnly': 'Elaborazione della sola pagina principale',
		'download': 'Scarica: ',
		'videoLag': 'Ritardo del video',
		'fullScreen': 'Schermo intero',
		'helpMenuOption': 'Elenco dei tasti di scelta rapida',
		'helpTitle': 'Scorciatoie da tastiera',
		'helpClose': 'Premi H o Esc per chiudere',
		'helpBadge': 'H / Esc',
		'helpPanelOption': 'Pannello scorciatoie',
		'helpSecond': ' s',
		'toStart': "Torna all'inizio",
		'toEnd': 'Vai alla fine',
		'fullPage': 'Schermo intero web',
		'fullPageShort': 'Pagina intera',
		'muted': 'Audio disattivato',
		'unmuted': 'Audio attivato',
		'speedReset': 'Velocità reimpostata a 1.0',
	}
};
// ========== 快捷键说明数据（菜单与页面内面板共用） ==========
const hotkeyGroups = [
	{
		zh: '播放与进度', en: 'Playback & seeking', it: 'Riproduzione e avanzamento',
		rows: [
			{keys: {zh: '空格 / K', en: 'Space / K', it: 'Spazio / K'}, zh: '播放 / 暂停', en: 'Play / Pause', it: 'Riproduci / Pausa'},
			{keys: 'J / L', zh: '快退 / 快进 10 秒', en: 'Rewind / forward 10 s', it: 'Indietro / avanti 10 s'},
			{keys: '← / →', zh: '快退 / 快进 5 秒（Shift：20 秒）', en: 'Rewind / forward 5 s (Shift: 20 s)', it: 'Indietro / avanti 5 s (Shift: 20 s)'},
			{keys: '↑ / ↓', zh: '音量 +10% / -10%', en: 'Volume +10% / -10%', it: 'Volume +10% / -10%'},
			{keys: '1–9 / 0', zh: '跳到 10%–90% / 回到开头', en: 'Jump to 10%–90% / back to start', it: "Salta al 10%–90% / torna all'inizio"},
			{keys: {zh: 'D / F 或 , / .', en: 'D / F or , / .', it: 'D / F o , / .'}, zh: '上一帧 / 下一帧', en: 'Previous / next frame', it: 'Fotogramma precedente / successivo'}
		]
	},
	{
		zh: '画面与工具', en: 'Picture & tools', it: 'Immagine e strumenti',
		rows: [
			{keys: 'P', zh: '截图（下载 PNG）', en: 'Screenshot (download PNG)', it: 'Screenshot (scarica PNG)'},
			{keys: 'I', zh: '画中画', en: 'Picture-in-picture', it: 'Picture-in-picture'},
			{keys: 'M', zh: '缓存视频（再按一次取消）', en: 'Cache video (press again to cancel)', it: 'Memorizza il video (premi di nuovo per annullare)'},
			{keys: 'H', zh: '打开 / 关闭快捷键面板', en: 'Open / close this panel', it: 'Apri / chiudi questo pannello'}
		]
	},
	{
		zh: '速度与声音', en: 'Speed & sound', it: 'Velocità e audio',
		rows: [
			{keys: 'C / X', zh: '加速 / 减速 0.1 倍（抖音：V / S）', en: 'Speed up / down by 0.1 (Douyin: V / S)', it: 'Velocizza / rallenta di 0,1 (Douyin: V / S)'},
			{keys: 'Z', zh: '切换加速状态（抖音：A）', en: 'Toggle speed state (Douyin: A)', it: 'Attiva/disattiva velocità (Douyin: A)'},
			{keys: 'R', zh: '播放速度重置为 1.0', en: 'Reset playback speed to 1.0', it: 'Reimposta la velocità a 1.0'},
			{keys: 'Q', zh: '静音 / 取消静音', en: 'Mute / unmute', it: 'Attiva/disattiva audio'}
		]
	},
	{
		zh: '屏幕与剧集', en: 'Screen & series', it: 'Schermo e serie',
		rows: [
			{keys: {zh: '回车', en: 'Enter', it: 'Invio'}, zh: '视频全屏', en: 'Video fullscreen', it: 'Schermo intero video'},
			{keys: {zh: 'Shift + 回车 / W', en: 'Shift + Enter / W', it: 'Shift + Invio / W'}, zh: '网页全屏', en: 'Web (page) fullscreen', it: 'Schermo intero web'},
			{keys: 'Esc', zh: '退出全屏 / 关闭面板', en: 'Exit fullscreen / close panel', it: 'Esci da schermo intero / chiudi pannello'},
			{keys: 'N', zh: '下一集', en: 'Next episode', it: 'Video successivo'},
			{keys: {zh: '双击控制栏', en: 'Double-click bar', it: 'Doppio clic barra'}, zh: '网页全屏（鼠标中键：快进 5 秒）', en: 'Web fullscreen (middle click: +5 s)', it: 'Schermo intero web (tasto centrale: +5 s)'}
		]
	}
];

const helpNotes = {
	zh: 'Chrome 启动参数 --media-cache-size=880008000 可扩大媒体缓存；片头片尾标记在油猴菜单「片头片尾」中操作。',
	en: 'Chrome startup flag --media-cache-size=880008000 enlarges the media cache; intro/outro markers live in the 「Intro/Outro」 menu.',
	it: 'Il flag di avvio di Chrome --media-cache-size=880008000 amplia la cache multimediale; i marker di sigla sono nel menu 「Intro/Outro」.'
};

const LK = ['zh', 'en', 'it'].indexOf(curLang) > -1 ? curLang : 'en';
const hkT = o => o[LK] || o.en;
const hkKey = k => typeof k === 'string' ? k : hkT(k);
const MSG = i18n[curLang] || i18n.en;

MSG.helpBody = hotkeyGroups.map(g =>
	'【' + hkT(g) + '】\n' + g.rows.map(r => hkKey(r.keys) + (LK === 'zh' ? '：' : ': ') + hkT(r)).join('\n')
).join('\n\n') + '\n\n' + hkT(helpNotes);

// ========== 页面内快捷键面板 ==========
const helpPanel = {
	el: null,
	styled: false,
	injectStyle() {
		if (this.styled) return;
		this.styled = true;
		GM_addStyle(`
			#gm-hk-mask{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:2147483647!important;display:flex!important;align-items:center!important;justify-content:center!important;background:rgba(8,8,12,.6)!important;}
			#gm-hk-card{box-sizing:border-box!important;width:min(560px,94vw)!important;max-width:94vw!important;max-height:90vh!important;overflow:auto!important;background:#1c1c26!important;color:#ecebf3!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:15px!important;padding:14px 18px 10px!important;box-shadow:0 22px 60px rgba(0,0,0,.6)!important;font:13px/1.5 -apple-system,"Segoe UI",system-ui,sans-serif!important;text-align:left!important;}
			#gm-hk-card .gm-hk-head{display:flex!important;align-items:baseline!important;justify-content:space-between!important;gap:10px!important;margin-bottom:8px!important;}
			#gm-hk-card .gm-hk-title{font-size:15px!important;font-weight:700!important;letter-spacing:.02em!important;color:#fff!important;line-height:1.25!important;}
			#gm-hk-card .gm-hk-sub{font-size:10.5px!important;color:#8f8ea3!important;white-space:nowrap!important;}
			#gm-hk-card .gm-hk-group{margin-top:9px!important;}
			#gm-hk-card .gm-hk-gtitle{font-size:11.5px!important;font-weight:600!important;color:#a78bfa!important;margin:0 0 2px!important;letter-spacing:.04em!important;}
			#gm-hk-card .gm-hk-row{display:flex!important;align-items:center!important;gap:8px!important;padding:1px 0!important;border-bottom:1px dashed rgba(255,255,255,.07)!important;}
			#gm-hk-card .gm-hk-row:last-child{border-bottom:0!important;}
			#gm-hk-card .gm-hk-key{flex:0 0 auto!important;min-width:118px!important;padding:1px 8px!important;border-radius:6px!important;background:rgba(139,92,246,.16)!important;border:1px solid rgba(139,92,246,.32)!important;color:#ddd6fe!important;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace!important;font-size:11px!important;line-height:1.6!important;text-align:center!important;white-space:nowrap!important;}
			#gm-hk-card .gm-hk-desc{flex:1 1 auto!important;min-width:0!important;color:#d7d6e4!important;font-size:12px!important;line-height:1.45!important;}
			#gm-hk-card .gm-hk-note{margin-top:10px!important;padding-top:8px!important;border-top:1px solid rgba(255,255,255,.1)!important;font-size:11.5px!important;color:#9695a8!important;font-size:11px!important;}
		`);
	},
	open() {
		if (this.el) return;
		this.injectStyle();
		const mask = d.createElement('div');
		mask.id = 'gm-hk-mask';
		const card = d.createElement('div');
		card.id = 'gm-hk-card';

		const head = d.createElement('div');
		head.className = 'gm-hk-head';
		const title = d.createElement('div');
		title.className = 'gm-hk-title';
		title.textContent = MSG.helpTitle;
		const sub = d.createElement('span');
		sub.className = 'gm-hk-sub';
		sub.textContent = MSG.helpBadge;
		head.appendChild(title);
		head.appendChild(sub);
		card.appendChild(head);

		hotkeyGroups.forEach(g => {
			const group = d.createElement('div');
			group.className = 'gm-hk-group';
			const gt = d.createElement('div');
			gt.className = 'gm-hk-gtitle';
			gt.textContent = hkT(g);
			group.appendChild(gt);
			g.rows.forEach(r => {
				const row = d.createElement('div');
				row.className = 'gm-hk-row';
				const k = d.createElement('span');
				k.className = 'gm-hk-key';
				k.textContent = hkKey(r.keys);
				const desc = d.createElement('span');
				desc.className = 'gm-hk-desc';
				desc.textContent = hkT(r);
				row.appendChild(k);
				row.appendChild(desc);
				group.appendChild(row);
			});
			card.appendChild(group);
		});

		const note = d.createElement('div');
		note.className = 'gm-hk-note';
		note.textContent = hkT(helpNotes);
		card.appendChild(note);

		mask.appendChild(card);
		mask.addEventListener('mousedown', ev => {
			if (ev.target === mask) this.close();
		});
		(d.body || d.documentElement).appendChild(mask);
		this.el = mask;
	},
	close() {
		if (!this.el) return;
		this.el.remove();
		this.el = null;
	},
	toggle() {
		this.el ? this.close() : this.open();
	}
};


const w = unsafeWindow || window;
const { host, pathname: path } = location;
const d = document, find = [].find;
let $msg, v, _fp, _fs, by; // document.body
const observeOpt = {childList : true, subtree : true};
const noopFn = function(){};
const validEl = e => e && e.offsetWidth > 1;
const q = (css, p = d) => p.querySelector(css);
const r1 = (regp, s) => regp.test(s) && RegExp.$1;
const gmInfo = (typeof GM_info !== 'undefined' && GM_info && GM_info.script) || {};
const log = console.log.bind(
	console,
	MSG.console,
	'color:#c3c;font-size:1.2em',
	gmInfo.name || 'HTML5视频播放工具',
	gmInfo.homepage || ''
);
const gmFuncOfCheckMenu = (title, saveName, defaultVal = true) => {
	const r = GM_getValue(saveName, defaultVal);
	if (r) title = '√  '+ title;
	GM_registerMenuCommand(title, () => {
		GM_setValue(saveName, !r);
		location.reload();
	});
	return r;
};
const sleep = ms => new Promise(resolve => { setTimeout(resolve, ms) });
/* 画中画
<svg viewBox="0 0 22 22"><g fill="#E6E6E6" fill-rule="evenodd"><path d="M17 4a2 2 0 012 2v6h-2V6.8a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.794.7L4 6.8v8.4a.8.8 0 00.7.794l.1.006H11v2H4a2 2 0 01-2-2V6a2 2 0 012-2h13z"></path><rect x="13" y="14" width="8" height="6" rx="1"></rect></g></svg>
设置
<svg viewBox="0 0 22 22">
<circle cx="11" cy="11" r="2"></circle>
<path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 00-1.186-2.099l.574-1.533a1 1 0 00-.436-1.217l-1.997-1.153a1.001 1.001 0 00-1.272.23l-1.008 1.225a7.04 7.04 0 00-2.55.001L8.716 2.829a1 1 0 00-1.272-.23L5.447 3.751a1 1 0 00-.436 1.217l.574 1.533A6.997 6.997 0 004.4 8.6l-1.564.261A.999.999 0 002 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 001.228 2.075l-.558 1.487a1 1 0 00.436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 002.272 0l1.04 1.263a1 1 0 001.272.23l1.997-1.153a1 1 0 00.436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 00.835-.986V9.847a.999.999 0 00-.836-.986zM11 15a4 4 0 110-8 4 4 0 010 8z"></path>
</svg>
next
<svg viewBox="0 0 22 22"><path d="M16 5a1 1 0 00-1 1v4.615a1.431 1.431 0 00-.615-.829L7.21 5.23A1.439 1.439 0 005 6.445v9.11a1.44 1.44 0 002.21 1.215l7.175-4.555a1.436 1.436 0 00.616-.828V16a1 1 0 002 0V6C17 5.448 16.552 5 16 5z"></path></svg>
截图
<svg version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>
const cookie = new Proxy(noopFn, {
	apply(target, ctx, args) { //清理cookie
		const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		if (keys) {
			const val = '=; expires=' + new Date(0).toUTCString() +'; domain=.; path=/';
			for (const k of keys) document.cookie = k + val;
		}
		// return Reflect.apply(target, ctx, args);
	},
	get(target, name) { // 读取cookie
		const r = r1(new RegExp(name +'=([^;]*)'), document.cookie);
		if (r) return decodeURIComponent(r);
	},
	set(target, name, value, receiver) { // 写入cookie
		let s, v, expires,
		oneParam = typeof value == 'string';
		if (oneParam) {
			expires = 6;
			v = value;
		} else {
			v = value.val;
			expires = value.expires || 6;
			delete value.expires;
		}
		s = name + '=' + encodeURIComponent(v);

		if (expires && (typeof expires == 'number' || expires.toUTCString)) {
			let date;
			if (typeof expires == 'number') {
				date = new Date();
				date.setTime(expires * 24 * 3600000 + date.getTime());
			} else {
				date = expires;
			}
			s += '; expires=' + date.toUTCString();
		}
		if (!oneParam) for (const k in value) s += '; ' + k + '=' + value[k];
		document.cookie = s;
		return true;
	},
	deleteProperty(target, name, descriptor) {// 删除cookie
		document.cookie = name + '=; path=/; expires='+ new Date(0).toUTCString();
		return true;
	}
});
const onceEvent = (ctx, eName) => new Promise(resolve => ctx.addEventListener(eName, resolve, {once: true}));
const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
    args.push(resolve);
	fn.apply(this, args);
}); */
const hookAttachShadow = (cb) => {
	try {
		const _attachShadow = Element.prototype.attachShadow;
		Element.prototype.attachShadow = function(opt) {
			opt = opt || {}; // 个别站点不传参数，避免 opt.mode 抛错
			opt.mode = 'open';
			const shadowRoot = _attachShadow.call(this, opt);
			cb(shadowRoot);
			return shadowRoot;
		};
	} catch (e) {
		console.error('Hack attachShadow error', e);
	}
};
const getStyle = (o, s) => {
	if (o.style[s]) return o.style[s];
	if (getComputedStyle) {
		const x = getComputedStyle(o, '');
		s = s.replace(/([A-Z])/g,'-$1').toLowerCase();
		return x && x.getPropertyValue(s);
	}
};
const doClick = e => {
	if (typeof e === 'string') e = q(e);
	if (e) { e.click ? e.click() : e.dispatchEvent(new MouseEvent('click')) };
};
const clickDualButton = btn => { // 2合1 按钮 Element.previousElementSibling
	!btn.nextElementSibling || getStyle(btn, 'display') !== 'none' ? doClick(btn) : doClick(btn.nextElementSibling);
};
const polling = (cb, condition, stop = true) => {
	const fn = typeof condition === 'string' ? q.bind(null, condition) : condition;
	const t = setInterval(() => {
		if (fn()) {
			stop && clearInterval(t);
			cb();
		}
	}, 300);
	return t;
};
const goNextMV = () => {
	const s = location.pathname;
	const m = s.match(/(\d+)(\D*)$/);
	if (!m) return; // 网址末尾没有数字时直接返回，避免取 m[1] 抛 TypeError
	const num = +m[1] + 1;
	location.assign(s.slice(0, m.index) + num + m[2]);
};
const firefoxVer = r1(/Firefox\/(\d+)/, navigator.userAgent);
const isEdge = / Edge?\//.test(navigator.userAgent);
const fakeUA = ua => Object.defineProperty(navigator, 'userAgent', {
	value: ua,
	writable: false,
	configurable: false,
	enumerable: true
});
const getMainDomain = host => {
	const a = host.split('.');
	let i = a.length - 2;
	if (/^(com?|cc|tv|net|org|gov|edu)$/.test(a[i])) i--;
	return a[i];
};
const inRange = (n, min, max) => Math.max(min, n) == Math.min(n, max);
const adjustRate = n => {
	n += v.playbackRate;
	if (n < 0.1) v.playbackRate = .1;
	else if (n > 16) v.playbackRate = 16;
	else v.playbackRate = +n.toFixed(2);
};
const adjustVolume = n => {
	n += v.volume;
	if (inRange(n, 0, 1)) v.volume = +n.toFixed(2);
};
const tip = (msg) => {
	if (!msg || !msg.length) return;
	try {
		if (!$msg?.get(0)?.offsetHeight) $msg = $('<div style="max-width:455px;min-width:333px;background:#EEE;color:#111;height:22px;top:-30px;left:50%;transform:translate(-50%, 0); border-radius:8px;border:1px solid orange;text-align:center;font-size:15px;position:fixed;z-index:2147483647"></div>').appendTo(by);
		const len = msg.length * 15;
		$msg.stop(true, true).text(msg)
			.css({width:`${len}px`})
			.animate({top:'190px'})
			.animate({top:'+=9px'},1900)
			.animate({top:'-30px'});
	} catch (e) {} // jQuery 降级时不弹提示，也不影响其它功能
};
const u = getMainDomain(host);
const cfg = {
	isLive: !1,
	disableDBLClick: !1,
	isClickOnVideo: !1,
	multipleV: !1, //多视频页面
	isNumURL: !1 //网址数字分集
};
let bus;
try {
	bus = new Vue();
} catch (e) {
	console.error('[HTML5视频播放工具] Vue 未加载，快捷键等高级功能可能不可用。请检查 @require 网络。', e);
	// 简易事件总线兜底，避免后续 bus.$on 直接崩溃
	bus = {
		_ev: {},
		$on(ev, fn) { (this._ev[ev] = this._ev[ev] || []).push(fn); },
		$once(ev, fn) {
			const w = (...a) => { fn(...a); this.$off && this.$off(ev, w); };
			this.$on(ev, w);
		},
		$emit(ev, ...a) { (this._ev[ev] || []).forEach(f => { try { f(...a); } catch(e){} }); },
		$off(ev, fn) {
			if (!this._ev[ev]) return;
			this._ev[ev] = fn ? this._ev[ev].filter(x => x !== fn) : [];
		}
	};
}

// ========== 自动跳过同名剧集片头片尾 ==========
const skipIntroOutro = {
	storageKey: 'gm_h5_skip_map',
	enabledKey: 'gm_h5_skip_enabled',
	enabled: true,
	map: {}, // { seriesKey: { introEnd: number, outroStart: number } }
	lastSeries: '',
	skipping: false,
	threshold: 1.5, // 容差秒数

	init() {
		try {
			this.map = JSON.parse(GM_getValue(this.storageKey, '{}') || '{}');
		} catch (e) {
			this.map = {};
		}
		this.enabled = GM_getValue(this.enabledKey, true) !== false;
		GM_registerMenuCommand('【片头片尾】标记片头结束 (当前时间)', () => this.markIntroEnd());
		GM_registerMenuCommand('【片头片尾】标记片尾开始 (当前时间)', () => this.markOutroStart());
		GM_registerMenuCommand('【片头片尾】清除当前剧集跳过记录', () => this.clearCurrent());
		GM_registerMenuCommand('【片头片尾】开关自动跳过 (当前:' + (this.enabled ? '开' : '关') + ')', () => this.toggle());
		GM_registerMenuCommand('【片头片尾】查看/管理跳过记录', () => this.showManage());
	},

	// 从页面标题提取剧集名（去掉集数、网站名等噪音）
	getSeriesKey() {
		let title = (d.title || '').trim();
		if (!title) return '';
		// 去掉常见后缀
		title = title
			.replace(/\s*[-_|｜]\s*.*(哔哩哔哩|bilibili|优酷|爱奇艺|腾讯视频|芒果TV|搜狐|YouTube|网易|抖音).*$/i, '')
			.replace(/\s*[-_|｜]\s*.*$/, '') // 去掉后面网站名
			.replace(/第\s*\d+\s*[集话期章回]/g, '')
			.replace(/EP?\s*\d+/gi, '')
			.replace(/S\d+E\d+/gi, '')
			.replace(/\d+\s*[集话期]/g, '')
			.replace(/[\[\(（].*?[\]\)）]/g, '')
			.replace(/\s+/g, ' ')
			.trim();
		// 若太短则用原始标题前半部分
		if (title.length < 2) {
			title = (d.title || '').split(/[-_|｜]/)[0].trim();
		}
		return title.slice(0, 80);
	},

	getRecord() {
		const key = this.getSeriesKey();
		if (!key) return null;
		return this.map[key] || null;
	},

	save() {
		GM_setValue(this.storageKey, JSON.stringify(this.map));
	},

	markIntroEnd() {
		const vid = (typeof v !== 'undefined' && v) || document.querySelector('video');
		if (!vid || !isFinite(vid.currentTime)) {
			alert('未检测到正在播放的视频');
			return;
		}
		const key = this.getSeriesKey();
		if (!key) {
			alert('无法识别剧集名称（页面标题为空）');
			return;
		}
		if (!this.map[key]) this.map[key] = {};
		this.map[key].introEnd = Math.round(vid.currentTime * 10) / 10;
		this.save();
		alert('已为「' + key + '」标记片头结束：' + this.map[key].introEnd + ' 秒\n播放同名剧集时将自动跳过片头。');
	},

	markOutroStart() {
		const vid = (typeof v !== 'undefined' && v) || document.querySelector('video');
		if (!vid || !isFinite(vid.currentTime)) {
			alert('未检测到正在播放的视频');
			return;
		}
		const key = this.getSeriesKey();
		if (!key) {
			alert('无法识别剧集名称（页面标题为空）');
			return;
		}
		if (!this.map[key]) this.map[key] = {};
		this.map[key].outroStart = Math.round(vid.currentTime * 10) / 10;
		this.save();
		alert('已为「' + key + '」标记片尾开始：' + this.map[key].outroStart + ' 秒\n播放同名剧集接近片尾时将自动跳过。');
	},

	clearCurrent() {
		const key = this.getSeriesKey();
		if (!key || !this.map[key]) {
			alert('当前剧集没有跳过记录');
			return;
		}
		delete this.map[key];
		this.save();
		alert(`已清除「${key}」的跳过记录`);
	},

	toggle() {
		this.enabled = !this.enabled;
		GM_setValue(this.enabledKey, this.enabled);
		alert('自动跳过片头片尾已' + (this.enabled ? '开启' : '关闭'));
		// 刷新菜单文字较难，提示用户重新打开菜单即可
	},

	showManage() {
		const keys = Object.keys(this.map);
		if (!keys.length) {
			alert('暂无任何剧集跳过记录\n\n使用方法：\n1. 播放到片头结束位置，点菜单「标记片头结束」\n2. 播放到片尾开始位置，点菜单「标记片尾开始」\n3. 之后播放同名剧集会自动跳过');
			return;
		}
		let msg = '已保存的跳过记录：\n\n';
		keys.forEach(k => {
			const r = this.map[k];
			msg += `【${k}】\n  片头结束: ${r.introEnd != null ? r.introEnd : '未设置'} 秒\n  片尾开始: ${r.outroStart != null ? r.outroStart : '未设置'} 秒\n\n`;
		});
		msg += '（清除请用「清除当前剧集跳过记录」）';
		alert(msg);
	},

	// 在视频 timeupdate 时调用
	onTimeUpdate() {
		const vid = (typeof v !== 'undefined' && v) || null;
		if (!this.enabled || !vid || this.skipping) return;
		if (typeof cfg !== 'undefined' && cfg.isLive) return;
		const rec = this.getRecord();
		if (!rec) return;

		const t = vid.currentTime;
		const dur = vid.duration;

		// 跳过片头
		if (typeof rec.introEnd === 'number' && rec.introEnd > 3 && t > 0.3 && t < rec.introEnd - this.threshold) {
			this.skipping = true;
			try { vid.currentTime = rec.introEnd; } catch (e) {}
			setTimeout(() => { this.skipping = false; }, 800);
			return;
		}

		// 跳过片尾
		if (typeof rec.outroStart === 'number' && isFinite(dur) && dur > 60 &&
			t >= rec.outroStart && t < dur - 2) {
			this.skipping = true;
			try {
				if (typeof cfg !== 'undefined' && cfg.btnNext && typeof doClick === 'function') {
					doClick(cfg.btnNext);
				} else if (typeof cfg !== 'undefined' && cfg.isNumURL && typeof goNextMV === 'function') {
					goNextMV();
				} else {
					vid.currentTime = dur - 0.5;
				}
			} catch (e) {}
			setTimeout(() => { this.skipping = false; }, 1500);
		}
	},

	bind(video) {
		if (!video || video._gmSkipBound) return;
		video._gmSkipBound = true;
		video.addEventListener('timeupdate', () => this.onTimeUpdate());
		// 切换视频后重新检查
		video.addEventListener('loadedmetadata', () => {
			this.skipping = false;
			// 若已有记录且当前位置在片头内，立即跳
			setTimeout(() => this.onTimeUpdate(), 300);
		});
	}
};


if (window.onurlchange === void 0) {
	history.pushState = ( f => function pushState(){
		const ret = f.apply(this, arguments);
		window.dispatchEvent(new Event('pushstate'));
		window.dispatchEvent(new Event('urlchange'));
		return ret;
	})(history.pushState);

	history.replaceState = ( f => function replaceState(){
		const ret = f.apply(this, arguments);
		window.dispatchEvent(new Event('replacestate'));
		window.dispatchEvent(new Event('urlchange'));
		return ret;
	})(history.replaceState);

	window.addEventListener('popstate',()=>{
		window.dispatchEvent(new Event('urlchange'))
	});
};

// 原生全屏只会渲染「全屏元素及其子节点」，页面其余部分全部隐藏。
// 因此如果直接对 <video> 请求全屏，挂在视频旁边的叠加层（时间条、字幕等兄弟节点）
// 会被一起裁掉——表现为「回车全屏后时间不显示」。
// 这里在与「视频 + 叠加层」同属一个容器的场景下，改为对该父容器全屏，让叠加层继续可见。
const getFSHost = video => {
	const parent = video && video.parentElement;
	if (!parent || parent === d.body || parent === d.documentElement) return video;
	// 只有容器里确实挂着需要保留的叠加层时才扩大全屏范围，
	// 否则维持原来的“只对 video 全屏”，避免把站点自身的页面装饰一起放大。
	if (parent.querySelector && parent.querySelector('.timer')) return parent;
	return video;
};

class FullScreen {
	constructor(e) {
		let fn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullscreen || noopFn;
		this.exit = fn.bind(d);
		fn = e.requestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullScreen || noopFn;
		this.enter = fn.bind(e);
	}
	static isFull() {
		return !!(d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||
		d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement);
	}
	toggle() {
		FullScreen.isFull() ? this.exit() : this.enter();
	}
}

//万能网页全屏, 参考了：https://github.com/gooyie/ykh5p
class FullPage {
	constructor(container) {
		this._isFull = !1;
		this.container = container || FullPage.getPlayerContainer(v);
		GM_addStyle(
			`.gm-fp-body .gm-fp-zTop {
				position: relative !important;
				z-index: 2147483646 !important;
			}
			.gm-fp-wrapper, .gm-fp-body{ overflow:hidden !important; }
			.gm-fp-wrapper .gm-fp-innerBox {
				width: 100% !important;
				height: 100% !important;
			}
			.gm-fp-wrapper {
				display: block !important;
				position: fixed !important;
				width: 100% !important;
				height: 100% !important;
				padding: 0 !important;
				margin: 0 !important;
				top: 0 !important;
				left: 0 !important;
				background: #000 !important;
				z-index: 2147483646 !important;
			}`
		);
	}
	static getPlayerContainer(video) {
		let e = video, p = e.parentNode;
		const { clientWidth: wid, clientHeight: h } = e;
		do {
			e = p;
			p = e.parentNode;
		} while (p && p !== by && p.clientWidth-wid < 5 && p.clientHeight-h < 5);
		//e 为返回值，在此之后不能变了
		// while (p !== by) p = p.parentNode || p.host;
		return e;
	}
	static isFull(e) {
		return w.innerWidth - e.clientWidth < 5 && w.innerHeight - e.clientHeight < 5;
	}
	toggle() {
		// assert(this.container);
		if (!this.container.contains(v)) this.container = FullPage.getPlayerContainer(v);
		bus.$emit('switchFP', !this._isFull);
		by.classList.toggle('gm-fp-body');
		let e = v;
		while (e && e != this.container) {
			e.classList.toggle('gm-fp-innerBox');
			e = e.parentNode;
		}
		if (!e) e = this.container;
		e.classList.toggle('gm-fp-wrapper');
		e = e.parentNode;
		while (e && e.nodeType === 1 && e != by) { // 容器就是 body 时 e 会走到 html/document，需判空并只处理元素节点
			e.classList.toggle('gm-fp-zTop');
			e = e.parentNode;
		}
		this._isFull = !this._isFull;
	}
}

const cacheMV = {
	check() {
		const buf = v.buffered;
		const i = buf.length - 1;
		if (i < 0) { this.iEnd = 0; return false; } // 缓冲区间为空时避免 buf.end(-1) 抛错
		this.iEnd = buf.end(i);
		return this.mode ? this.iEnd > v.duration -55 : buf.start(0) >= this.playPos || this.iEnd > v.duration -55;
	},
	finish() {
		v.removeEventListener('canplaythrough', this.onChache);
		v.currentTime = this.playPos;
		this.cached = !1;
		setTimeout(_ => v.pause(), 33);
		HTMLMediaElement.prototype.play = this.rawPlay;
	},
	onChache() {
		if (!this.cached) return;
		if (this.check()) this.finish();
		else {
			v.currentTime = this.iEnd;
			v.pause();
		}
	},
	exec() {
		if (cfg.isLive || !v) return;
		this.mode = confirm(MSG.cacheStoringConfirm);
		//开始缓存
		this.cached = true;
		v.pause();
		this.rawPlay = HTMLMediaElement.prototype.play;
		HTMLMediaElement.prototype.play = () => new Promise(noopFn);
		this.playPos = v.currentTime;
		v.addEventListener('canplaythrough', this.onChache);
		this.check();
		v.currentTime = this.iEnd;
	}
};
cacheMV.onChache = cacheMV.onChache.bind(cacheMV);

const actList = new Map();
actList.set(90, _ => { //按键Z: 切换加速状态
	if (v.playbackRate == 1 || v.playbackRate == 0) {
		v.playbackRate = +localStorage.mvPlayRate || 1.3;
	} else {
		// localStorage.mvPlayRate = v.playbackRate;
		v.playbackRate = 1;
	}
})
.set(88, adjustRate.bind(null, -0.1)) //按键X
.set(67, adjustRate.bind(null, 0.1)) //按键C
.set(40, adjustVolume.bind(null, -0.1)) //↓　降音量
.set(38, adjustVolume.bind(null, 0.1)) //↑　加音量
.set(37, _ => {v.currentTime -= 5}) //按键←
.set(37+1024, _ => {v.currentTime -= 20}) //按键shift+←
.set(39, _ => {v.currentTime += 5}) //按键→
.set(39+1024, _ => {v.currentTime += 20}) //按键shift+→
.set(68, _ => {v.currentTime -= 0.03;v.pause()}) //按键D：上一帧
.set(70, _ => {v.currentTime += 0.03;v.pause()}) //按键F：下一帧
.set(32, _ => togglePlay()) //按键space
.set(13, _ => {	//回车键。 全屏
	_fs ? _fs.toggle() : clickDualButton(cfg.btnFS);
})
.set(13+1024, _ => {//web全屏
	self != top ? top.postMessage({id: 'gm-h5-toggle-iframeWebFull'}, '*')
	: _fp ? _fp.toggle() : clickDualButton(cfg.btnFP);
})
.set(27+1024, noopFn)	//忽略按键shift + esc
.set(27, ev => {	//按键esc
	if (FullScreen.isFull()) {
		_fs ? _fs.exit() : clickDualButton(cfg.btnFS);
	} else if (self != top) {
		top.postMessage({id: 'gm-h5-is-iframeWebFull'}, '*');
	} else if (FullPage.isFull(v)) {
		_fp ? _fp.toggle() : clickDualButton(cfg.btnFP);
	}
})
.set(73, _ => { //按键I：画中画模式
	if (!d.pictureInPictureElement) {
		v.requestPictureInPicture().catch(err => {
			alert(MSG.cantOpenPIP + err)
		});
	} else {
		d.exitPictureInPicture().catch(err => {
			alert(MSG.cantExitPIP + err)
		});
	}
})
.set(80, _ => { //按键P：截图
	const canvas = d.createElement('canvas');
	canvas.width = v.videoWidth;
	canvas.height = v.videoHeight;
	canvas.getContext('2d').drawImage(v, 0, 0, canvas.width, canvas.height);

	canvas.toBlob(async(blob) => {
		const dataURL = URL.createObjectURL(blob);
		const link = d.createElement('a');
		link.onclick = ev => {ev.stopPropagation()};
		link.href = dataURL;
		link.download = Date.now().toString(36) +'.png';
		link.style.display = 'none';
		d.body.appendChild(link);
		link.click();
		link.remove();
		await sleep(500);
		URL.revokeObjectURL(dataURL);
	});
})
.set(77, _ => {// M 缓存视频
	cacheMV.cached ? cacheMV.finish() : cacheMV.exec();
})
.set(78, _ => {// N 下一集
	if (self != top) top.postMessage({id: 'gm-h5-play-next'}, '*');
	else if (cfg.btnNext) doClick(cfg.btnNext);
	else if (cfg.isNumURL) goNextMV();
});

// ========== 常用快捷键扩展 ==========
const togglePlay = () => {
	if (cfg.btnPlay) clickDualButton(cfg.btnPlay);
	else v.paused ? v.play() : v.pause();
};
actList.set(75, togglePlay); // K：播放 / 暂停
actList.set(74, () => { // J：快退 10 秒
	if (cfg.isLive || !isFinite(v.duration)) return;
	v.currentTime = Math.max(0, v.currentTime - 10);
	tip('-10' + MSG.helpSecond);
});
actList.set(76, () => { // L：快进 10 秒
	if (cfg.isLive || !isFinite(v.duration)) return;
	v.currentTime = Math.min(v.duration, v.currentTime + 10);
	tip('+10' + MSG.helpSecond);
});
actList.set(87, () => actList.get(1037)()); // W：网页全屏
actList.set(82, () => { // R：速度重置为 1.0
	v.playbackRate = 1;
	try { localStorage.mvPlayRate = 1; } catch (e) {}
	tip(MSG.speedReset);
});
actList.set(81, () => { // Q：静音切换
	v.muted = !v.muted;
	tip(v.muted ? MSG.muted : MSG.unmuted);
});
actList.set(72, () => helpPanel.toggle()); // H：快捷键面板
actList.set(188, () => { v.currentTime -= 0.03; v.pause(); }); // ,：上一帧
actList.set(190, () => { v.currentTime += 0.03; v.pause(); }); // .：下一帧
for (let i = 0; i < 10; i++) { // 1–9 跳到 10%–90%，0 回到开头
	const jump = () => {
		if (cfg.isLive || !isFinite(v.duration)) return;
		v.currentTime = i === 0 ? 0 : v.duration * i / 10;
		tip(i === 0 ? MSG.toStart : i * 10 + '%');
	};
	actList.set(48 + i, jump);
	actList.set(96 + i, jump);
}

const app = {
	rawProps: new Map(),
	shellEvent() {
		const fn = ev => {
			if (ev.target.closest('svg,img,button')) return;
			ev.stopPropagation(); // preventDefault
			ev.stopImmediatePropagation();
			this.checkUI();
			actList.get(1037)(); //web全屏
		};
		const e = cfg.isClickOnVideo ? v : cfg.mvShell;
		e.addEventListener('mousedown', ev => {
			if (1 == ev.button) {
				ev.preventDefault();
				ev.stopPropagation();
				ev.stopImmediatePropagation();
				if (!cfg.isLive) {
					actList.has(39) ? actList.get(39)() : v.currentTime += 5;
				}
			}
		});
		!cfg.disableDBLClick && e.addEventListener('dblclick', fn);
	},
	setShell() {
		const e = this.getDPlayer() || this.getArtplayer() || this.getVjsPlayer() ||
			(cfg.shellCSS && q(cfg.shellCSS)) ||
			(top != self ? by : FullPage.getPlayerContainer(v));
		if (e && cfg.mvShell !== e) {
			cfg.mvShell = e;
			this.shellEvent();
		}
	},
	checkMV() {
		if (this.vList) {
			const e = this.findMV();
			if (e && e != v) {
				v = e;
				skipIntroOutro.bind(v);
				cfg.btnPlay = cfg.btnNext = cfg.btnFP = cfg.btnFS = _fs = _fp = null;
				if (!cfg.isLive && GM_getValue('remberRate', true)) {
					v.playbackRate = +localStorage.mvPlayRate || 1;
					v.addEventListener('ratechange', ev => {
						if (v.playbackRate && v.playbackRate != 1) localStorage.mvPlayRate = v.playbackRate;
					});
				}
				this.setShell();
			}
		}
		if (!validEl(cfg.mvShell)) {
			cfg.mvShell = null;
			this.setShell();
		}
		this.checkUI();
		return v;
	},
	getArtplayer() {
		const e = v.parentNode;
		if (!v.matches('.art-video') || !e.matches('.art-video-player')) return !1;
		cfg.btnFP = q('.art-control-fullscreenWeb', e);
		cfg.btnFS = q('.art-control-fullscreen', e);
		e.closest('body > *')?.classList.add('gm-dp-zTop');
		return e;
	},
	getDPlayer() {
		if (!v.matches('.dplayer-video')) return !1;
		const e = v.closest('.dplayer');
		if (e) {
			cfg.btnFP = q('.dplayer-full-in-icon > span', e);
			cfg.btnFS = q('.dplayer-full-icon', e);
			e.closest('body > *').classList.add('gm-dp-zTop');
		}
		return e;
	},
	getVjsPlayer() {
		const e = v.closest('.video-js');
		if (e) {
			cfg.btnFS = q('.vjs-control-bar > button.vjs-button:nth-last-of-type(1)');
			cfg.webfullCSS = '.vjs-control-bar > button.vjs-button[title$="全屏"]:nth-last-of-type(2)';
		}
		return e;
	},
	hotKey(e) {
		const t = e.target;
		if (helpPanel.el && e.keyCode === 27) {
			e.preventDefault();
			e.stopPropagation();
			helpPanel.close();
			return;
		}
		if (e.ctrlKey || e.metaKey || e.altKey || t.contentEditable=='true' || // e.isComposing
			/INPUT|TEXTAREA|SELECT/.test(t.nodeName)) return;
		if (e.shiftKey && ![13,37,39].includes(e.keyCode)) return;
		if (e.shiftKey && e.keyCode == 27) return;
		if (!this.checkMV()) return;
		if (!e.shiftKey && cfg.mvShell && cfg.mvShell.contains(t) && [32,37,39].includes(e.keyCode)) return;
		const key = e.shiftKey ? e.keyCode + 1024 : e.keyCode;
		if (actList.has(key)) {
			e.stopImmediatePropagation();
			e.stopPropagation();
			e.preventDefault();
			actList.get(key)(e);
			if ([67,88,90].includes(e.keyCode)) tip(MSG.speedRate + v.playbackRate);
		}
	},
	checkUI() {
		if (cfg.webfullCSS && !validEl(cfg.btnFP)) cfg.btnFP = q(cfg.webfullCSS);
		if (cfg.btnFP) _fp = null;
		else if (!_fp && self == top) _fp = new FullPage(cfg.mvShell);

		if (cfg.fullCSS && !validEl(cfg.btnFS)) cfg.btnFS = q(cfg.fullCSS);
		if (cfg.btnFS) _fs = null;
		else if (!_fs) _fs = new FullScreen(getFSHost(v));

		if (cfg.nextCSS && (!validEl(cfg.btnNext) || !cfg.btnNext.matches(cfg.nextCSS))) cfg.btnNext = q(cfg.nextCSS);
		if (cfg.playCSS && !validEl(cfg.btnPlay)) cfg.btnPlay = q(cfg.playCSS);
	},
	onGrowVList() {
		if (this.vList.length == this.vCount) return;
		if (this.viewObserver) {
			for (let e of this.vList) {
				if (!this.vSet.has(e)) this.viewObserver.observe(e);
			}
		} else {
			const config = {
				rootMargin: '0px',
				threshold: 0.9
			};
			this.viewObserver = new IntersectionObserver(this.onIntersection.bind(this), config);
			for (let e of this.vList) this.viewObserver.observe(e);
		}
		this.vSet = new Set(this.vList);
		this.vCount = this.vList.length;
	},
	onIntersection(entries) {
		if (this.vList.length < 2) return;
		const entry = find.call(entries, k => k.isIntersecting);
		if (!entry || v == entry.target) return;
		v = entry.target;
		_fs = new FullScreen(getFSHost(v));
		_fp = new FullPage(v);
		skipIntroOutro.bind(v);
		bus.$on('switchFP', async (toFull) => {
			// const c = toFull ? this.vSet : this.vList;
			// for (const e of c) this.viewObserver.unobserve(e);
			sleep(200);
			if (!toFull) v.scrollIntoView();
		});
		bus.$emit('switchMV');
	},
	bindEvent() {
		hidePlugins(); // 仅在成功识别到视频后才隐藏 navigator.plugins（不影响无视频页面）
		clearInterval(this.timer);
		for (const [i,k] of this.rawProps) Reflect.defineProperty(HTMLVideoElement.prototype, i, k);
		this.rawProps.clear();
		this.rawProps = void 0;
		by = d.body;
		v = v || this.findMV();
		skipIntroOutro.bind(v);
		log('bind event\n', v);
		bus.$emit('foundMV');
		const bRate = gmFuncOfCheckMenu(MSG.rememberRateMenuOption,'remberRate');
		window.addEventListener('urlchange', async (info) => { //TM event: info.url
			await sleep(990);
			this.checkMV();
			if (bRate) v.playbackRate = +localStorage.mvPlayRate || 1;
			bus.$emit('urlchange');
		});
		if (top != self) {
			top.postMessage({id: 'gm-h5-init-MVframe'}, '*');
			window.addEventListener("message", ev => {
				if (!ev.source || !ev.data || !ev.data.id) return;
				switch (ev.data.id) {
				case 'gm-h5-toggle-fullScreen':
					_fs ? _fs.toggle() : clickDualButton(cfg.btnFS);
					break;
				}
			}, false);
		}
		$(v).one('canplay', ev => {
			cfg.isLive = cfg.isLive || v.duration == Infinity;
			if (cfg.isLive) for(const k of [37,1061,39,1063,67,77,78,88,90]) actList.delete(k);
			else {
				if (bRate) v.playbackRate = +localStorage.mvPlayRate || 1;
				v.addEventListener('ratechange', ev => {
					if (bRate && v.playbackRate && v.playbackRate != 1) localStorage.mvPlayRate = v.playbackRate;
				});
			}

			this.checkMV();
			bus.$emit('canplay');
		});
		$(by).keydown(this.hotKey.bind(this));

		cfg.mvShell ? this.shellEvent() : this.setShell();
		this.checkUI();
		if (cfg.multipleV) {
			new MutationObserver(this.onGrowVList.bind(this)).observe(by, observeOpt);
			this.vCount = 0;
			this.onGrowVList();
		}
		// tip((GM_info.script.name_i18n?.[curLang] || GM_info.script.name) + MSG.ready);
	},
	init() {
		const rawAel = EventTarget.prototype.addEventListener;
		EventTarget.prototype.addEventListener = function(...args) {
			try {
				const inMV = this instanceof HTMLMediaElement;
				const fnStr = typeof args[1] === 'function' ? args[1].toString() : '';
				const block = inMV && (args[0] == 'dblclick' && !fnStr.includes('actList.get(1037)'))
					|| (args[0] == 'ratechange' && 'baidu'== u && !fnStr.includes('localStorage.mvPlayRate'));
				if (block) return;
			} catch (e) {
				// 判断过程出错时不影响页面原有监听注册
			}
			return rawAel.apply(this, args);
		};
		for (const i of this.rawProps.keys()) this.rawProps.set(i,
			Reflect.getOwnPropertyDescriptor(HTMLMediaElement.prototype, i));
		this.vList = d.getElementsByTagName('video');
		const fn = e => cfg.cssMV ? e.matches(cfg.cssMV) : e.offsetWidth > 9;
		this.findMV = find.bind(this.vList, fn);
		this.timer = polling(e => {
			v = e;
			this.bindEvent();
		}, this.findMV);

		hookAttachShadow(async shadowRoot => {
			bus.$emit('addShadowRoot', shadowRoot);
			await sleep(600);
			if (v) return;
			if (v = q('video', shadowRoot)) { // v.getRootNode() == shadowRoot
				log('Found MV in ShadowRoot\n', v, shadowRoot);
				if (!cfg.shellCSS) cfg.mvShell = shadowRoot.host;
				this.bindEvent();

				this.vList = shadowRoot.getElementsByTagName('video');
				this.findMV = find.bind(this.vList, fn);
			}
		});
	}
};

const router = {
	ted() {
		cfg.fullCSS = 'button[title=Fullscreen]';
	},
	youtube() {
		GM_addStyle(
			`.gm-fp-body #player-container-inner{padding-top:0!important}
			.gm-fp-body #player-container-outer{
				max-width:100%!important;
				margin:0!important;
			}`
		);
		cfg.shellCSS = '#player';
		cfg.playCSS = 'button.ytp-play-button';
		cfg.nextCSS = 'a.ytp-next-button';
		cfg.fullCSS = 'button.ytp-fullscreen-button';
		cfg.isClickOnVideo = true;
		actList.delete(32);
		actList.set(69, actList.get(70)).delete(70); //F键 >> E键
		actList.set(86, actList.get(67)).delete(67); //C键 >> V键
	},
	douyin() {
		cfg.isLive = host.startsWith('live.');
		cfg.fullCSS = '.xgplayer-fullscreen';
		// cfg.webfullCSS = cfg.isLive ? '.xgplayer-fullscreen + xg-icon' : '.xgplayer-page-full-screen';
		if (!cfg.isLive) {
			GM_addStyle('.xgplayer-progress-cache{background-color:green!important}');
			actList.set(65, actList.get(90)).delete(90); //Z键 >> A键
			actList.set(83, actList.get(88)).delete(88); //X键 >> S键
			actList.set(86, actList.get(67)).delete(67); //C键 >> V键
		}
	},
	qq() {
		if (self != top &&(host == 'v.qq.com' || host == 'video.qq.com') ) throw MSG.mainPageOnly;
		actList.delete(32);
		cfg.shellCSS = '#player';
		cfg.nextCSS = '.txp_btn_next_u';
		cfg.webfullCSS = '.txp_btn_fake';
		cfg.fullCSS = '.txp_btn_fullscreen';
		// w.__PLAYER__ || w.PLAYER
		app.rawProps.set('playbackRate', 1);
		for(let i = 37; i<=40; i++) actList.delete(i); //已有方向键
	},
	youku() {
		actList.delete(37);
		actList.delete(39);
		if (host.startsWith('vku.')) {
			bus.$on('canplay', () => {
				cfg.isLive = !q('.spv_progress');
			});
			cfg.fullCSS = '.live_icon_full';
		} else {
			bus.$on('foundMV',() => { $(document).unbind('keyup') });
			cfg.shellCSS = '#ykPlayer';
			cfg.webfullCSS = '.kui-webfullscreen-icon-0';
			cfg.fullCSS = '.kui-fullscreen-icon-0';
			cfg.nextCSS = '.kui-next-icon-0';
		}
	},
	bilibili() {
		cfg.isLive = host.startsWith('live.');
		if (cfg.isLive) return;
		actList.delete(32);

		bus.$on('addShadowRoot', r => {
			if (r.host.nodeName === 'BWP-VIDEO') {
				app.vList = d.getElementsByTagName('bwp-video');
				app.findMV = find.bind(app.vList, e => e.offsetWidth > 9);
				v = r.host;
				app.bindEvent();
			}
		});
		cfg.shellCSS = '#bilibili-player';
		cfg.nextCSS = '.bpx-player-ctrl-next';
		cfg.webfullCSS = '.bpx-player-ctrl-web';
		cfg.fullCSS = '.bpx-player-ctrl-full';
		/*
		const seek = function(step) {
			const p = this.player;
			p.seek(p.getCurrentTime()+ step, p.getState() === "PAUSED");
		};
		actList.set(38, _ => w.player.volume(w.player.volume()+0.1)) //加音量
		.set(40, _ => w.player.volume(w.player.volume()-0.1))
		.set(37, seek.bind(w, -5))
		.set(37+1024, seek.bind(w, -20)) //shift+left  快退20秒
		.set(39, seek.bind(w, 5))
		.set(39+1024, seek.bind(w, 20)) //shift+→  快进20秒
		.set(70, seek.bind(w, 0.03)) //按键F：下一帧
		.set(68, seek.bind(w, -0.03)); //按键D：上一帧
		*/
	},
	iqiyi() {
		cfg.fullCSS = '.iqp-btn-fullscreen:not(.fake__click)';
		cfg.nextCSS = '.iqp-btn-next';
	},
	pptv() {
		cfg.fullCSS = '.w-zoom-container > div';
		cfg.webfullCSS = '.w-expand-container > div';
		cfg.nextCSS = '.w-next';
	},
	mgtv() {
		cfg.fullCSS = 'mango-screen';
		cfg.webfullCSS = 'mango-webscreen > a';
		cfg.nextCSS = 'mango-control-playnext-btn';
	},
	ixigua() {
		cfg.fullCSS = 'div[aria-label="全屏"]';
		cfg.nextCSS = '.xgplayer-control-item.control_playnext';
		GM_addStyle('.gm-fp-body .xgplayer{padding-top:0!important} .gm-fp-wrapper #player_default{max-height: 100%!important} h1.title~a, .videoTitle h1~a{ padding-left:12px; color:blue; }');
	},
	miguvideo() {
		cfg.nextCSS = '.next-btn';
		cfg.fullCSS = '.zoom-btn';
		cfg.shellCSS = '.mod-player';
	},
	baidu() {
		app.rawProps.set('playbackRate', 1);
	},
	weibo() {
		cfg.multipleV = path.startsWith('/u/');
	},
	acfun() {
		cfg.nextCSS = '.btn-next-part .control-btn';
		cfg.webfullCSS = '.fullscreen-web';
		cfg.fullCSS = '.fullscreen-screen';
	},
	['163']() {
		cfg.multipleV = host.startsWith('news.');
		GM_addStyle('div.video,video{max-height: 100% !important;}');
		return host.split('.').length > 3;
	},
	sohu() {
		cfg.nextCSS = 'li.on[data-vid]+li a';
		cfg.fullCSS = '.x-fullscreen-btn';
		cfg.webfullCSS = '.x-pagefs-btn';
	},
	fun() {
		cfg.nextCSS = '.btn-item.btn-next';
	},
	le() {
		GM_addStyle('.gm-fp-body .le_head{display:none!important}');
		cfg.cssMV = '#video video';
		cfg.shellCSS = '#video';
		cfg.nextCSS = '.hv_ico_next';
		const delHiddenProp = _ => {
			if (!v.offsetWidth) Object.values(v.attributes).reverse().some(k => {
				if (v.getAttribute(k.name) == '') {
					v.removeAttribute(k.name);
					return true;
				}
			});
		};
		bus.$on('urlchange',delHiddenProp);
		bus.$once('canplay',delHiddenProp);
	},
	nnyy() {
		GM_registerMenuCommand(MSG.videoLag, () => {
			'use strict';
			v.pause();
			const pos = v.currentTime;
			const buf = v.buffered;
			v.currentTime = buf.end(buf.length - 1) + 1;
			$(v).one('progress', ev => {
				v.currentTime = pos;
				v.play();
			});
		});
		cfg.nextCSS = '.playlist .on + li a';
	},
	douban() {
		cfg.nextCSS = 'a.next-series';
	},
	douyu() {
		cfg.isLive = !host.startsWith('v.');
		if (cfg.isLive) {
			cfg.cssMV = '.layout-Player video';
			cfg.shellCSS = '#js-player-video';
			cfg.webfullCSS = '.wfs-2a8e83';
			cfg.fullCSS = '.fs-781153';
			cfg.playCSS = 'div[class|=play]';
			path != '/' && $(ev => {
				q('.u-specialStateInput').checked = true;
			});
		} else bus.$on('addShadowRoot', async function(r) {
			if (r.host.matches('#demandcontroller-bar')) {
				await sleep(600);
				cfg.shellCSS = 'div[fullscreen].video';
				cfg.btnFP = q('.ControllerBar-PageFull', r);
				cfg.btnFS = q('.ControllerBar-WindowFull', r);
			}
		});
	},
	yy() {
		cfg.isLive = !path.startsWith('/x/');
		if (cfg.isLive) {
			cfg.fullCSS = '.yc__fullscreen-btn';
			cfg.webfullCSS = '.yc__cinema-mode-btn';
			cfg.playCSS = '.yc__play-btn';
		}
	},
	huya() {
		if (firefoxVer && firefoxVer < 57) return true;
		cfg.disableDBLClick = !0;
		cfg.webfullCSS = '.player-fullpage-btn';
		cfg.fullCSS = '.player-fullscreen-btn';
		cfg.playCSS = '#player-btn';
		polling(doClick, '.login-tips-close');
		localStorage['sidebar/ads'] = '{}';
		localStorage['sidebar/state'] = 0;
		// localStorage.TT_ROOM_SHIELD_CFG_0_ = '{"10000":1,"20001":1,"20002":1,"20003":1,"30000":1}';
	},
	twitch() {
		cfg.isLive = !path.startsWith('/videos/');
		cfg.fullCSS = 'button[data-a-target=player-fullscreen-button]';
		cfg.webfullCSS = '.player-controls__right-control-group > div:nth-child(4) > button';
		cfg.playCSS = 'button[data-a-target=player-play-pause-button]';
	},
	longzhu() {
		cfg.fullCSS = 'a.ya-screen-btn';
	},
	deno() {
		cfg.webfullCSS = '.i-mdi-fit-to-screen';
		cfg.fullCSS = '.i-ri-fullscreen-fill';
	},
	zhanqi() {
		localStorage.lastPlayer = 'h5';
		cfg.fullCSS = '.video-fullscreen';
	}
};
if (host.startsWith('lemonlive') && !router[u]) router[u] = router.deno;

function hidePlugins() { // 延迟到发现视频后执行；document-start 阶段不再改动 navigator.plugins
	if (hidePlugins.done) return;
	hidePlugins.done = true;
	try {
		Reflect.defineProperty(navigator, 'plugins', {
			get() { return { length: 0 } }
		});
	} catch (e) {
		console.error('Hack navigator.plugins error', e);
	}
}
try {
	GM_registerMenuCommand(MSG.helpMenuOption, () => {
		try { helpPanel.toggle(); } catch (err) { alert(MSG.helpBody); }
	});
} catch (e) { console.error(e); }

try {
	skipIntroOutro.init();
} catch (e) { console.error('[片头片尾] init failed', e); }

try {
	if (!router[u] || !router[u]()) app.init();
} catch (e) {
	console.error('[HTML5视频播放工具] app.init 失败（快捷键可能不可用）', e);
}
if (!router[u] && !cfg.isNumURL) cfg.isNumURL = /[_\W]\d+(\/|\.[a-z]{3,8})?$/.test(path);

console.log('%c[HTML5视频播放工具 增强合并版] 已加载', 'color:#c3c;font-weight:bold');
