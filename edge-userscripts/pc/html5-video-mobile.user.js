// ==UserScript==
// @name         HTML5手机版
// @name:zh-CN   HTML5手机版
// @name:zh-TW   HTML5影片手勢
// @name:en      HTML5 Video Gestures
// @name:ja      HTML5ビデオジェスチャー
// @name:ko      HTML5 비디오 제스처
// @namespace    local.edge-userscripts/html5-video-mobile
// @version      72.09
// @description  集多家之长的手机浏览器触摸手势插件（已合并画中画增强，收紧敏感页嗅探）
// @description:zh-CN 集多家之长的手机浏览器触摸手势插件（已合并画中画增强，收紧敏感页嗅探）
// @description:zh-TW 集多家之長的手機瀏覽器觸摸手勢插件（已合併畫中畫增強）
// @description:en    A mobile browser touch gesture plugin that combines the strengths of many. (PiP enhanced, sensitive pages restricted)
// @description:ja    多くの強みを組み合わせたモバイルブラウザのタッチジェスチャープラグイン。
// @description:ko    많은 장점을 결합한 모바일 브라우저 터치 제스처 플러그인입니다。
// @author       Gemini & 仙
// @license      MIT
// @icon         data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6699'/%3E%3Cstop offset='100%25' stop-color='%23FF3366'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='14' fill='url(%23g)'/%3E%3Ccircle cx='32' cy='32' r='18' fill='none' stroke='white' stroke-width='3' opacity='0.9'/%3E%3Cpolygon points='28,22 28,42 44,32' fill='white'/%3E%3Cpath d='M14 50 Q20 44 28 48' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' opacity='0.85'/%3E%3C/svg%3E
// @match        http://*/*
// @match        https://*/*
// @exclude      devtools://*
// @exclude      chrome-extension://*
// @exclude      *://*.alipay.com/*
// @exclude      *://*.alipay.net/*
// @exclude      *://*.tenpay.com/*
// @exclude      *://pay.weixin.qq.com/*
// @exclude      *://*.paypal.com/*
// @exclude      *://*.stripe.com/*
// @exclude      *://checkout.stripe.com/*
// @exclude      *://*.unionpay.com/*
// @exclude      *://*.icbc.com.cn/*
// @exclude      *://*.ccb.com/*
// @exclude      *://*.boc.cn/*
// @exclude      *://*.abchina.com/*
// @exclude      *://*.cmbchina.com/*
// @exclude      *://accounts.google.com/*
// @exclude      *://login.microsoftonline.com/*
// @exclude      *://login.live.com/*
// @exclude      *://id.apple.com/*
// @exclude      *://*.taobao.com/*/login*
// @exclude      *://login.taobao.com/*
// @exclude      *://*.tmall.com/*/login*
// @exclude      *://passport.jd.com/*
// @exclude      *://*.amazon.com/ap/signin*
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// @updateURL    https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/html5-video-mobile.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/html5-video-mobile.user.js
// ==/UserScript==

(function() {
    'use strict';

    const currentProto = window.location.protocol;
    if (currentProto === 'devtools:' || currentProto === 'chrome-extension:' || currentProto === 'chrome:') {
        return;
    }

    const TT = (() => {
        let p;
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            try { p = window.trustedTypes.createPolicy('gt-ui-policy', { createHTML: s => s }); } catch (e) {}
        }
        return (html) => p ? p.createHTML(html) : html;
    })();

    const CFG = { 
        minDist: 10, longPress: 500, rateBase: 2.0, senseX: 0.25, senseY: 1.0, 
        progressBarColor: '#FF6699', uiTimeout: 2500, maxScale: 8.0, senseRate: 0.015 
    };

    const getComplementaryColor = (hex) => {
        if (!hex || hex.length < 7) return '#00FFCC';
        let r = parseInt(hex.slice(1,3), 16) / 255, g = parseInt(hex.slice(3,5), 16) / 255, b = parseInt(hex.slice(5,7), 16) / 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) h = s = 0; else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        h = (h + 0.5) % 1; 
        l = Math.max(0.6, l); 
        s = Math.max(0.8, s); 
        const hue2rgb = (p, q, t) => {
            if(t < 0) t += 1; if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        let rr = Math.round(hue2rgb(p, q, h + 1/3) * 255).toString(16).padStart(2,'0');
        let gg = Math.round(hue2rgb(p, q, h) * 255).toString(16).padStart(2,'0');
        let bb = Math.round(hue2rgb(p, q, h - 1/3) * 255).toString(16).padStart(2,'0');
        return `#${rr}${gg}${bb}`;
    };

    let isAmbientEnabled = false; 

    const i18n = (() => {
        const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        const dicts = {
            'zh-cn': {
                switchSec: '切换为: 按秒', switchFrame: '切换为: 按帧', step: '步进', fps: '帧率',
                jumpTitle: '跳转到时间', jumpPrompt: '输入时间 (如 1:23 或 +0:30 或 -1:00)', jumpOk: '已跳转至 ', jumpFail: '时间格式无效', jumpOut: '超出视频范围',
                skipIntro: '已跳过片头 → ', skipOutro: '已跳过片尾',
                menuSetIntro: '📌 记录片头结束点', menuSetOutro: '📌 记录片尾开始点', menuClearSkip: '🗑️ 清除本剧跳过设置',
                setIntroOk: '已记录片头结束: ', setOutroOk: '已记录片尾开始: ', clearSkipOk: '已清除本剧跳过设置', noSeries: '无法识别剧名',
                fitCover: '画面: 铺满裁切', fitFill: '画面: 暴力拉伸', fitContain: '画面: 原始比例',
                shotSaved: '截图已保存', shotFailed: '截图失败: 跨域限制', pipFailed: '小窗启动失败',
                twoFingerSpeed: '双指: 变速', twoFingerPan: '双指: 缩平移', resetSpeed: '恢复原速', resetZoom: '恢复大小',
                copySniffed: '已复制嗅探流媒体直链', noVideo: '未找到视频元素', copyVid: '已复制视频直链', copyWeb: '已复制网页源地址',
                resumedTo: '已恢复至', menuCopy: '🔗 拷贝视频源(直链/页面)', frameUnit: '帧', boostFailed: '音量增强失败: 设备或跨域限制', bufMsg: '缓冲区设为: ', 
                abA: '起点 A 已设定: ', abB: 'A-B 循环已开启', abClear: 'A-B 循环已关闭', abErr: '终点 B 必须大于 A', abPause: 'A-B 循环已暂停 (保留断点)', abResume: 'A-B 循环已恢复',
                xModeFSToggleOn: '全屏沉浸滑动: 已开启', xModeFSToggleOff: '全屏沉浸滑动: 已关闭',
                menuSettings: '⚙️ 综合控制面板', groupGlobal: '🌍 全局通用设置', groupSite: '🏠 当前网站独立设置',
                lblResume: '历史位置恢复', lblAdblock: '拦截暂停广告', lblBoost: '音量增强许可', lblBuf: '默认缓冲大小', lblAmbient: '视频沉浸氛围灯', lblXMode: '沉浸滑动 (X兼容)', lblMargin: '侧边图标边距', btnClose: '完成保存',
                lblPbSettings: '🎨 迷你进度条设置', lblPbWindowed: '半屏显示', lblPbFullscreen: '全屏显示', lblPbColor: '主题颜色', lblPbOpacity: '不透明度', btnBack: '返回', lblPbHistory: '历史记录与预设', lblPbSiteOnly: '仅生效当前网站',
                xOpt0: '关闭', xOpt1: '仅半屏', xOpt2: '仅全屏', xOpt3: '双屏均开启',
                lblGesSettings: '✋ 手势控制设置', lblGesDblSeek: '双击边缘: 快进/快退', lblGesDblFs: '双击中心: 切换全屏', lblGesLong: '长按画面: 变速播放', lblGesSwpSeek: '横向滑动: 调节进度', lblGesSwpVol: '右侧竖滑: 调节音量', lblGesSwpBri: '左侧竖滑: 调节亮度', lblGesPinch: '双指捏合: 缩放/调速',
                lblColL: '左侧按钮收纳', lblColR: '右侧按钮收纳', colOpt0: '不收缩 (展开)', colOpt1: '经典 (...)', colOpt2: '极简图标', colOpt3: '实时倍速', colOpt4: '剩余时间', colOpt5: '播放进度', colOpt6: '系统时间',
                lblFloatSettings: '🪟 半屏外置悬浮窗', lblFloatSiteOnly: '仅生效当前网站', lblFloatItems: '悬浮功能 (最多4项)',
                fOpt_shot: '截图', fOpt_fit: '比例', fOpt_pip: '画中画', fOpt_lock: '锁定', fOpt_mode: '手势', fOpt_copy: '复制链接'
            },
            'zh-tw': {
                switchSec: '切換為: 按秒', switchFrame: '切換為: 按幀', step: '步進', fps: '幀率',
                jumpTitle: '跳轉到時間', jumpPrompt: '輸入時間 (如 1:23 或 +0:30 或 -1:00)', jumpOk: '已跳轉至 ', jumpFail: '時間格式無效', jumpOut: '超出影片範圍',
                skipIntro: '已跳過片頭 → ', skipOutro: '已跳過片尾',
                menuSetIntro: '📌 記錄片頭結束點', menuSetOutro: '📌 記錄片尾開始點', menuClearSkip: '🗑️ 清除本劇跳過設置',
                setIntroOk: '已記錄片頭結束: ', setOutroOk: '已記錄片尾開始: ', clearSkipOk: '已清除本劇跳過設置', noSeries: '無法識別劇名',
                fitCover: '畫面: 鋪滿裁切', fitFill: '畫面: 暴力拉伸', fitContain: '畫面: 原始比例',
                shotSaved: '截圖已保存', shotFailed: '截圖失敗: 跨域限制', pipFailed: '小窗啟動失敗',
                twoFingerSpeed: '雙指: 變速', twoFingerPan: '雙指: 縮平移', resetSpeed: '恢復原速', resetZoom: '恢復大小',
                copySniffed: '已複製嗅探流媒體直鏈', noVideo: '未找到視頻元素', copyVid: '已複製視頻直鏈', copyWeb: '已複製網頁源地址',
                resumedTo: '已恢復至', menuCopy: '🔗 拷貝視頻源(直鏈/頁面)', frameUnit: '幀', boostFailed: '音量增強失敗: 設備或跨域限制', bufMsg: '緩衝區設為: ', 
                abA: '起點 A 已設定: ', abB: 'A-B 循環已開啟', abClear: 'A-B 循環已關閉', abErr: '終點 B 必須大於 A', abPause: 'A-B 循環已暫停 (保留斷點)', abResume: 'A-B 循環已恢復',
                xModeFSToggleOn: '全屏沉浸滑動: 已開啟', xModeFSToggleOff: '全屏沉浸滑動: 已關閉',
                menuSettings: '⚙️ 綜合控制面板', groupGlobal: '🌍 全局通用設置', groupSite: '🏠 當前網站獨立設置',
                lblResume: '歷史位置恢復', lblAdblock: '攔截暫停廣告', lblBoost: '音量增強許可', lblBuf: '默認緩衝大小', lblAmbient: '視頻沉浸氛圍燈', lblXMode: '沉浸滑動 (X兼容)', lblMargin: '側邊圖標邊距', btnClose: '完成保存',
                lblPbSettings: '🎨 迷你進度條設置', lblPbWindowed: '半屏顯示', lblPbFullscreen: '全屏顯示', lblPbColor: '主題顏色', lblPbOpacity: '不透明度', btnBack: '返回', lblPbHistory: '歷史記錄與預設', lblPbSiteOnly: '僅生效當前網站',
                xOpt0: '關閉', xOpt1: '僅半屏', xOpt2: '僅全屏', xOpt3: '雙屏均開啟',
                lblGesSettings: '✋ 手勢控制設定', lblGesDblSeek: '雙擊邊緣: 快進/退', lblGesDblFs: '雙擊中心: 全螢幕', lblGesLong: '長按畫面: 變速', lblGesSwpSeek: '橫向滑動: 進度', lblGesSwpVol: '右側豎滑: 音量', lblGesSwpBri: '左側豎滑: 亮度', lblGesPinch: '雙指捏合: 縮放/調速',
                lblColL: '左側按鈕收納', lblColR: '右側按鈕收納', colOpt0: '不收縮 (展開)', colOpt1: '經典 (...)', colOpt2: '極簡圖標', colOpt3: '實時倍速', colOpt4: '剩餘時間', colOpt5: '播放進度', colOpt6: '系統時間',
                lblFloatSettings: '🪟 半屏外置懸浮窗', lblFloatSiteOnly: '僅生效當前網站', lblFloatItems: '懸浮功能 (最多4項)',
                fOpt_shot: '截圖', fOpt_fit: '比例', fOpt_pip: '畫中畫', fOpt_lock: '鎖定', fOpt_mode: '手勢', fOpt_copy: '複製鏈接'
            },
            'ja': {
                switchSec: '切り替え: 秒単位', switchFrame: '切り替え: フレーム単位', step: 'ステップ', fps: 'フレームレート',
                jumpTitle: '時間へジャンプ', jumpPrompt: '時間を入力 (例 1:23 / +0:30 / -1:00)', jumpOk: 'ジャンプ先: ', jumpFail: '無効な形式', jumpOut: '範囲外',
                fitCover: '画面: クロップ再生', fitFill: '画面: ストレッチ再生', fitContain: '画面: オリジナル比率',
                shotSaved: 'スクリーンショットを保存しました', shotFailed: '保存失敗', pipFailed: 'PIP起動失敗',
                twoFingerSpeed: '二本指: 変速', twoFingerPan: '二本指: ズーム/移動', resetSpeed: '元の速度に戻す', resetZoom: '元のサイズに戻す',
                copySniffed: 'スニッフィングしたリンクをコピー', noVideo: 'ビデオが見つかりません', copyVid: '直リンクをコピーしました', copyWeb: 'URLをコピーしました',
                resumedTo: 'から再開しました', menuCopy: '🔗 ビデオソースをコピー', frameUnit: 'f', boostFailed: '音量ブースト失敗', bufMsg: 'バッファサイズ: ', 
                abA: '始点Aを設定: ', abB: 'A-Bループ有効', abClear: 'A-Bループ無効', abErr: '終点BはAより后', abPause: 'A-B ループ一時停止', abResume: 'A-B ループ再開',
                xModeFSToggleOn: '全画面X互換: オン', xModeFSToggleOff: '全画面X互換: オフ',
                menuSettings: '⚙️ コントロールパネル', groupGlobal: '🌍 グローバル設定', groupSite: '🏠 サイト別設定',
                lblResume: '前回位置から再開', lblAdblock: '広告ブロック', lblBoost: '音量ブースト', lblBuf: 'バッファサイズ', lblAmbient: 'アンビエントライト', lblXMode: 'X互換モード', lblMargin: 'UIマージン', btnClose: '完了',
                lblPbSettings: '🎨 プログレスバー設定', lblPbWindowed: '通常表示', lblPbFullscreen: '全画面表示', lblPbColor: 'テーマカラー', lblPbOpacity: '不透明度', btnBack: '戻る', lblPbHistory: '履歴とプリセット', lblPbSiteOnly: '現在のサイトのみ',
                xOpt0: 'オフ', xOpt1: '通常表示のみ', xOpt2: '全画面のみ', xOpt3: '常にオン',
                lblGesSettings: '✋ ジェスチャー設定', lblGesDblSeek: 'ダブルタップ: シーク', lblGesDblFs: 'ダブルタップ: 全画面', lblGesLong: '長押し: 倍速', lblGesSwpSeek: '横スワイプ: シーク', lblGesSwpVol: '右縦スワイプ: 音量', lblGesSwpBri: '左縦スワイプ: 明るさ', lblGesPinch: 'ピンチ: ズーム/倍速',
                lblColL: '左ボタン収納', lblColR: '右ボタン収納', colOpt0: '収納しない', colOpt1: 'クラシック (...)', colOpt2: 'シンプル', colOpt3: '再生速度', colOpt4: '残り時間', colOpt5: '再生進捗', colOpt6: 'システム時刻',
                lblFloatSettings: '🪟 フローティングパネル', lblFloatSiteOnly: '現在のサイトのみ', lblFloatItems: '機能 (最大4つ)',
                fOpt_shot: 'スクショ', fOpt_fit: '比率', fOpt_pip: 'PIP', fOpt_lock: 'ロック', fOpt_mode: 'ジェスチャー', fOpt_copy: 'URLコピー'
            },
            'ko': {
                switchSec: '전환: 초 단위', switchFrame: '전환: 프레임 단위', step: '이동 간격', fps: '프레임 레이트',
                jumpTitle: '시간으로 이동', jumpPrompt: '시간 입력 (예 1:23 / +0:30 / -1:00)', jumpOk: '이동: ', jumpFail: '형식 오류', jumpOut: '범위 초과',
                fitCover: '화면: 크롭 채우기', fitFill: '화면: 강제 채우기', fitContain: '화면: 원본 비율',
                shotSaved: '스크린샷 저장됨', shotFailed: '스크린샷 실패: CORS 제한', pipFailed: 'PIP 팝업창 실행 실패',
                twoFingerSpeed: '두 손가락: 배속 변경', twoFingerPan: '두 손가락: 확대/이동', resetSpeed: '기본 속도로 복원', resetZoom: '기본 크기로 복원',
                copySniffed: '감지된 스트리밍 직링크 복사됨', noVideo: '비디오 요소를 찾을 수 없습니다', copyVid: '비디오 직링크 복사됨', copyWeb: '웹페이지 주소 복사됨',
                resumedTo: '위치로 이동 완료:', menuCopy: '🔗 비디오 소스 복사', frameUnit: '프레임', boostFailed: '음량 증폭 실패', bufMsg: '버퍼 크기: ', 
                abA: '시작점 A 설정: ', abB: 'A-B 구간 반복 켜짐', abClear: 'A-B 구간 반복 꺼짐', abErr: '종점 B는 A보다 커야 합니다', abPause: 'A-B 일시정지', abResume: 'A-B 재개',
                xModeFSToggleOn: '전체화면 X모드: 켜짐', xModeFSToggleOff: '전체화면 X모드: 꺼짐',
                menuSettings: '⚙️ 제어판', groupGlobal: '🌍 전역 설정', groupSite: '🏠 사이트별 설정',
                lblResume: '이전 위치 복원', lblAdblock: '일시정지 광고 차단', lblBoost: '음량 증폭', lblBuf: '버퍼 크기', lblAmbient: '앰비언트 라이트', lblXMode: 'X 호환 모드', lblMargin: 'UI 여백', btnClose: '완료',
                lblPbSettings: '🎨 미니 진행률 표시줄', lblPbWindowed: '기본 화면 표시', lblPbFullscreen: '전체 화면 표시', lblPbColor: '테마 색상', lblPbOpacity: '불투명도', btnBack: '뒤로', lblPbHistory: '기록 및 사전 설정', lblPbSiteOnly: '현재 사이트에만 적용',
                xOpt0: '꺼짐', xOpt1: '기본 화면만', xOpt2: '전체 화면만', xOpt3: '항상 켜짐',
                lblGesSettings: '✋ 제스처 설정', lblGesDblSeek: '더블 탭: 탐색', lblGesDblFs: '더블 탭: 전체화면', lblGesLong: '길게 누르기: 배속', lblGesSwpSeek: '가로 스와이프: 탐색', lblGesSwpVol: '우측 세로 스와이프: 음량', lblGesSwpBri: '좌측 세로 스와이프: 밝기', lblGesPinch: '핀치: 줌/배속',
                lblColL: '좌측 버튼 숨기기', lblColR: '우측 버튼 숨기기', colOpt0: '숨기지 않음', colOpt1: '클래식 (...)', colOpt2: '미니멀', colOpt3: '현재 배속', colOpt4: '남은 시간', colOpt5: '재생 진행률', colOpt6: '시스템 시간',
                lblFloatSettings: '🪟 플로팅 패널', lblFloatSiteOnly: '현재 사이트에만 적용', lblFloatItems: '기능 (최대 4개)',
                fOpt_shot: '스크린샷', fOpt_fit: '비율', fOpt_pip: 'PIP', fOpt_lock: '잠금', fOpt_mode: '제스처', fOpt_copy: '링크 복사'
            },
            'en': {
                switchSec: 'Mode: Sec', switchFrame: 'Mode: Frame', step: 'Step', fps: 'FPS',
                jumpTitle: 'Jump to Time', jumpPrompt: 'Enter time (e.g. 1:23 / +0:30 / -1:00)', jumpOk: 'Jumped to ', jumpFail: 'Invalid format', jumpOut: 'Out of range',
                skipIntro: 'Skipped intro → ', skipOutro: 'Skipped outro',
                menuSetIntro: '📌 Set Intro End', menuSetOutro: '📌 Set Outro Start', menuClearSkip: '🗑️ Clear Series Skip',
                setIntroOk: 'Intro end saved: ', setOutroOk: 'Outro start saved: ', clearSkipOk: 'Series skip cleared', noSeries: 'Cannot detect series name',
                fitCover: 'Fit: Cover', fitFill: 'Fit: Fill', fitContain: 'Fit: Contain',
                shotSaved: 'Screenshot Saved', shotFailed: 'Screenshot Failed (CORS)', pipFailed: 'PiP Failed',
                twoFingerSpeed: '2-Finger: Speed', twoFingerPan: '2-Finger: Pan/Zoom', resetSpeed: 'Speed Reset', resetZoom: 'Zoom Reset',
                copySniffed: 'Copied media link', noVideo: 'Video element not found', copyVid: 'Copied video link', copyWeb: 'Copied page URL',
                resumedTo: 'Resumed to', menuCopy: '🔗 Copy Video Source', frameUnit: 'f', boostFailed: 'Volume boost failed', bufMsg: 'Buffer size set to: ', 
                abA: 'Point A set: ', abB: 'A-B Loop enabled', abClear: 'A-B Loop disabled', abErr: 'Point B must be > A', abPause: 'A-B Loop Paused', abResume: 'A-B Loop Resumed',
                xModeFSToggleOn: 'FS X-Mode: ON', xModeFSToggleOff: 'FS X-Mode: OFF',
                menuSettings: '⚙️ Control Panel', groupGlobal: '🌍 Global Settings', groupSite: '🏠 Site Settings',
                lblResume: 'Resume Playback', lblAdblock: 'Block Pause Ads', lblBoost: 'Volume Boost', lblBuf: 'Buffer Size', lblAmbient: 'Ambient Light', lblXMode: 'X-Mode', lblMargin: 'UI Margin', btnClose: 'Done',
                lblPbSettings: '🎨 Mini Progress Bar Settings', lblPbWindowed: 'Show Windowed', lblPbFullscreen: 'Show Fullscreen', lblPbColor: 'Theme Color', lblPbOpacity: 'Opacity', btnBack: 'Back', lblPbHistory: 'History & Presets', lblPbSiteOnly: 'Apply only to current site',
                xOpt0: 'OFF', xOpt1: 'Windowed Only', xOpt2: 'Fullscreen Only', xOpt3: 'Always ON',
                lblGesSettings: '✋ Gesture Settings', lblGesDblSeek: 'Double Tap: Seek', lblGesDblFs: 'Double Tap: Fullscreen', lblGesLong: 'Long Press: Speed', lblGesSwpSeek: 'Swipe X: Seek', lblGesSwpVol: 'Swipe Y (Right): Volume', lblGesSwpBri: 'Swipe Y (Left): Brightness', lblGesPinch: 'Pinch: Zoom/Speed',
                lblColL: 'Left Buttons Collapse', lblColR: 'Right Buttons Collapse', colOpt0: 'None (Expand)', colOpt1: 'Classic (...)', colOpt2: 'Minimal Icon', colOpt3: 'Real-time Speed', colOpt4: 'Time Remaining', colOpt5: 'Progress', colOpt6: 'System Clock',
                lblFloatSettings: '🪟 Floating Panel', lblFloatSiteOnly: 'Current site only', lblFloatItems: 'Functions (Max 4)',
                fOpt_shot: 'Screenshot', fOpt_fit: 'Fit', fOpt_pip: 'PiP', fOpt_lock: 'Lock', fOpt_mode: 'Gesture', fOpt_copy: 'Copy URL'
            }
        };
        if (lang === 'zh-tw' || lang === 'zh-hk' || lang === 'zh-mo') return dicts['zh-tw'];
        if (lang.includes('zh')) return dicts['zh-cn'];
        if (lang.includes('ja')) return dicts['ja'];
        if (lang.includes('ko')) return dicts['ko'];
        return dicts['en'];
    })();

    const formatTime = (t) => {
        if (!t || isNaN(t)) return '00:00';
        let h = Math.floor(t / 3600).toString().padStart(2, '0');
        let m = Math.floor((t % 3600) / 60).toString().padStart(2, '0');
        let s = Math.floor(t % 60).toString().padStart(2, '0');
        return h !== '00' ? `${h}:${m}:${s}` : `${m}:${s}`;
    };

    // 解析时间输入：支持 1:23 / 01:23 / 1:23:45 / 83 / +1:30 / -0:45 / +30
    const parseTimeInput = (str) => {
        if (!str || typeof str !== 'string') return null;
        str = str.trim().replace(/：/g, ':').replace(/．/g, '.');
        let relative = 0; // 0=绝对, 1=相对+, -1=相对-
        if (str.startsWith('+')) { relative = 1; str = str.slice(1).trim(); }
        else if (str.startsWith('-')) { relative = -1; str = str.slice(1).trim(); }
        if (!str) return null;
        // 纯数字视为秒
        if (/^\d+(\.\d+)?$/.test(str)) {
            const sec = parseFloat(str);
            if (isNaN(sec)) return null;
            return { relative, seconds: sec };
        }
        const parts = str.split(':').map(p => p.trim());
        if (parts.some(p => p === '' || isNaN(parseFloat(p)))) return null;
        let seconds = 0;
        if (parts.length === 2) { // m:s
            seconds = parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
        } else if (parts.length === 3) { // h:m:s
            seconds = parseFloat(parts[0]) * 3600 + parseFloat(parts[1]) * 60 + parseFloat(parts[2]);
        } else {
            return null;
        }
        if (isNaN(seconds) || seconds < 0) return null;
        return { relative, seconds };
    };

    const VIP_SELECTORS = '.mgp_container, .playerFlvContainer, .video-js, .vjs-custom-skin, .player-container, .art-video-player, .xgplayer, .tcplayer, .prism-player, .mui-player, [data-testid="videoComponent"], [data-testid="video-container"], [data-testid="player-root"], .player-wrapper, .one-video-player_display-w, .one-video-player, vk-video-player, [aria-label="Видео плеер"], [aria-label="Video Player"], .plyr, #html5video, #movie_player, .html5-video-player, .bpx-player-container, .dplayer, .artplayer-app, .MacPlayer, .ckplayer, #playleft, iframe';
    const FS_BTN_SELECTORS = '.art-icon-fullscreenOn, .art-control-fullscreen, .dplayer-full-icon, .plyr__control[data-plyr="fullscreen"], .vjs-fullscreen-control, .xgplayer-fullscreen, .tcplayer-fullscreen-btn, .prism-fullscreen-btn, [aria-label*="全屏"], [title*="全屏"], .fullscreen-btn, .bilibili-player-video-btn-fullscreen, [data-testid="btn-fullscreen"], [aria-label="На весь экран"], .fullscreen_toggle_button, [data-testid="fullscreen-toggle-button"], .mgp_fullscreen, .mgp_expand, .ytp-fullscreen-button, .mVideoPlay-fullscreen';
    
    const IGNORE_TOUCH_SELECTORS = '#gt-settings-overlay, .gt-panel, .gt-scroll-area, .gt-btn-base, .gt-float-bar, .ytp-chrome-bottom, .ytp-chrome-top, .ytp-button, .dplayer-controller, .dplayer-bar-wrap, .vjs-control-bar, .art-bottom, .art-controls, .bpx-player-control-wrap, .plyr__controls, .xgplayer-controls, .tcplayer-controls, .prism-controlbar, .mui-player-controls, .wrapper-bottom, [data-testid="player_controls"], [data-testid="progress_bar"], [data-testid="volume-slider"], input[type="range"], .buttons-bar, .progress-bar-container, .controls_layer_1, .layout_top, .layout_bottom, .mgp_controls, .mgp_controlBar';

    let seekSec = GM_getValue('gt_seek_sec', 10);
    let seekMode = GM_getValue('gt_seek_mode', 'sec');
    let fpsMode = GM_getValue('gt_fps', 30);
    
    let startX, startY, initVol, initTime, initRate, initBri = 1.0, targetV, targetP, isTouch = false, action = null, lpTimer = null, lastTapTime = 0, tapCount = 0;
    let activeSeekSide = null, seekAccumulator = 0, seekSessionTimer = null, wasPlayingBeforeSequence = false;
    let initPinchDist = 0, initScale = 1.0, initPanX = 0, initPanY = 0, initSpeed = 1.0, initCenterX = 0, initCenterY = 0, originDx = 0, originDy = 0;
    let blockGestureUntil = 0; let enforceStateUntil = 0; let enforceTarget = null; let isSimulatingFS = false;
    let virtualTime = null; let lastThrottledTime = 0;

    const getVideoKey = (v, isStrict = true) => {
        let searchParams = window.location.search.replace(/&?(t|time|start)=[^&]+/ig, ''); if (searchParams === '?') searchParams = ''; 
        let hashParams = window.location.hash.replace(/&?(t|time|start)=[^&]+/ig, ''); if (hashParams === '#') hashParams = '';
        let route = window.location.host + window.location.pathname + searchParams + hashParams;
        let fp = ''; let dataStr = '';
        for (let key in v.dataset) { if (typeof v.dataset[key] === 'string' && !key.startsWith('gt')) dataStr += v.dataset[key]; }
        if (dataStr.length > 5) fp += dataStr;
        if (!fp) { let posterAttr = v.getAttribute('poster'); if (posterAttr && posterAttr.length > 2) fp += posterAttr; }
        if (!fp) { let srcAttr = v.getAttribute('src') || ''; if (srcAttr && !srcAttr.startsWith('blob:')) fp += srcAttr.replace(/(token|auth|sign|expires|timestamp|ts|key|mac)=[^&]+/ig, ''); }
        if (!fp) fp = 'stream_media'; 
        fp = fp.replace(/[^a-zA-Z0-9]/g, '').slice(-30);
        let key = route + '_' + fp;
        if (isStrict && v.duration && !isNaN(v.duration) && v.duration !== Infinity) key += '_' + Math.floor(v.duration);
        return key;
    };

    const saveProgress = (v) => {
        if (!v || isNaN(v.duration) || v.duration <= 5 || v.currentTime < 2) return;
        if (v.dataset.gtIsPreview === 'true') return; 
        const key = getVideoKey(v, true);
        let history = GM_getValue('gt_video_history', {});
        history[key] = { t: Math.floor(v.currentTime), ts: Date.now() };
        const keys = Object.keys(history);
        if (keys.length > 1000) { keys.sort((a, b) => history[b].ts - history[a].ts); let newHistory = {}; for (let i = 0; i < 1000; i++) newHistory[keys[i]] = history[keys[i]]; history = newHistory; }
        GM_setValue('gt_video_history', history);
    };

    // ========== 同名剧集自动跳过片头/片尾 ==========
    // 从页面标题提取剧集名（去掉集数、季数等）
    const getSeriesKey = () => {
        try {
            let title = (document.title || '').trim();
            if (!title) return null;
            // 去掉常见站点后缀
            title = title.replace(/\s*[-_|｜]\s*.+$/, '').trim();
            // 去掉集数/季数标记
            title = title
                .replace(/第\s*\d+\s*[集话回部季]/g, '')
                .replace(/(?:EP|Ep|ep|Episode|episode|E)\s*\.?\s*\d+/gi, '')
                .replace(/S\d{1,2}\s*E\d{1,3}/gi, '')
                .replace(/[Ss]eason\s*\d+/gi, '')
                .replace(/全\d+集/g, '')
                .replace(/\d{1,3}\s*[集话回]/g, '')
                .replace(/[\(（]\s*\d+\s*[\)）]/g, '')
                .replace(/\s+/g, ' ')
                .trim();
            if (title.length < 2) return null;
            const host = (location.hostname || '').replace(/^www\./, '');
            return host + '|' + title.slice(0, 80);
        } catch (e) { return null; }
    };

    const getSeriesSkip = () => {
        const key = getSeriesKey();
        if (!key) return null;
        const all = GM_getValue('gt_series_skip', {});
        return all[key] || null;
    };

    const setSeriesSkip = (field, seconds) => {
        const key = getSeriesKey();
        if (!key) return false;
        let all = GM_getValue('gt_series_skip', {});
        if (!all[key]) all[key] = { intro: 0, outro: 0, ts: Date.now() };
        all[key][field] = Math.max(0, Math.floor(seconds));
        all[key].ts = Date.now();
        // 限制最多保存 200 部剧
        const keys = Object.keys(all);
        if (keys.length > 200) {
            keys.sort((a, b) => (all[b].ts || 0) - (all[a].ts || 0));
            const trimmed = {};
            for (let i = 0; i < 200; i++) trimmed[keys[i]] = all[keys[i]];
            all = trimmed;
        }
        GM_setValue('gt_series_skip', all);
        return true;
    };

    const clearSeriesSkip = () => {
        const key = getSeriesKey();
        if (!key) return false;
        const all = GM_getValue('gt_series_skip', {});
        if (all[key]) {
            delete all[key];
            GM_setValue('gt_series_skip', all);
            return true;
        }
        return false;
    };

    // 自动跳过逻辑（片头：开播附近跳过；片尾：到点跳到结尾）
    const tryAutoSkip = (video) => {
        if (!video || video.dataset.gtIsPreview === 'true') return;
        const conf = getSeriesSkip();
        if (!conf) return;
        const dur = video.duration;
        if (!dur || isNaN(dur) || dur < 60) return;
        const t = video.currentTime;

        // 片头：仅在开播前 20 秒内且尚未跳过时生效
        if (conf.intro > 5 && t < 20 && t < conf.intro - 1 && !video.dataset.gtIntroSkipped) {
            video.currentTime = conf.intro;
            video.dataset.gtIntroSkipped = '1';
            showMsg((i18n.skipIntro || '已跳过片头 → ') + formatTime(conf.intro), video);
            return;
        }
        // 片尾：到达片尾起点后跳到接近结束
        if (conf.outro > 30 && conf.outro < dur - 5 && t >= conf.outro && t < dur - 3 && !video.dataset.gtOutroSkipped) {
            video.currentTime = Math.max(conf.outro, dur - 1.5);
            video.dataset.gtOutroSkipped = '1';
            showMsg(i18n.skipOutro || '已跳过片尾', video);
        }
    };

    let sniffedUrl = ''; const mediaReg = /\.(m3u8|mpd|mp4|webm|flv)(\?|$)/i;
    // 敏感域名/路径：不挂钩 fetch/XHR，避免在登录/支付/银行页做网络嗅探
    const SENSITIVE_HOST_RE = /alipay\.|tenpay\.|paypal\.|stripe\.|unionpay\.|icbc\.|ccb\.com|boc\.cn|abchina\.|cmbchina\.|bankcomm\.|spdb\.|accounts\.google|login\.microsoftonline|login\.live\.com|id\.apple\.com|passport\.|signin\.|checkout\.|pay\.weixin|wx\.tenpay/i;
    const SENSITIVE_PATH_RE = /\/(login|log-in|signin|sign-in|signup|register|auth|oauth|sso|passport|account|checkout|cart|payment|pay|billing|wallet|password|2fa|mfa|otp)(?:\/|$|\?|#)/i;
    const isSensitivePage = () => {
        try {
            const host = (location.hostname || '').toLowerCase();
            const path = (location.pathname || '') + (location.search || '');
            if (SENSITIVE_HOST_RE.test(host)) return true;
            if (SENSITIVE_PATH_RE.test(path)) return true;
            return false;
        } catch (e) { return false; }
    };
    const sniff = (url) => { try { if (url && typeof url === 'string' && mediaReg.test(url) && url.startsWith('http')) sniffedUrl = url; } catch(e){} };
    
    const isSafeEnv = window.location.protocol.startsWith('http') && !isSensitivePage();
    let oFetch; try { oFetch = window.fetch; } catch(e) {}
    if (oFetch && isSafeEnv) { try { window.fetch = function(...args) { try { let u = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url ? args[0].url : ''); sniff(u); } catch(e){} return oFetch.apply(window, args); }; } catch(e) {} }
    let oOpen; try { oOpen = XMLHttpRequest.prototype.open; } catch(e) {}
    if (oOpen && isSafeEnv) { try { XMLHttpRequest.prototype.open = function(method, url, ...rest) { try { sniff(url); } catch(e){} return oOpen.call(this, method, url, ...rest); }; } catch(e) {} }

    const broadcastMsg = (msg) => { try { window.top.postMessage(msg, '*'); } catch(e){} try { document.querySelectorAll('iframe').forEach(f => { try { f.contentWindow.postMessage(msg, '*'); } catch(e){} }); } catch(e){} };

    let _cachedTopHost = null;
    const getTopHost = () => {
        if (_cachedTopHost) return _cachedTopHost;
        try {
            if (window.top === window) return _cachedTopHost = window.location.host;
            if (window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0) return _cachedTopHost = new URL(window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1]).host;
            return _cachedTopHost = window.location.host; 
        } catch(e) { return _cachedTopHost = window.location.host; }
    };

    const getSiteMargin = () => { const margins = GM_getValue('gt_ui_margins', {}); return margins[getTopHost()] || 0; };
    const setSiteMargin = (val) => { const margins = GM_getValue('gt_ui_margins', {}); const host = getTopHost(); if (val === 0) delete margins[host]; else margins[host] = val; GM_setValue('gt_ui_margins', margins); };
    const getSiteXMode = () => { const modes = GM_getValue('gt_x_mode_sites', {}); const val = modes[getTopHost()]; if (val === true) return 1; if (val === false || val === undefined) return 0; return parseInt(val) || 0; };
    const setSiteXMode = (val) => { const modes = GM_getValue('gt_x_mode_sites', {}); const host = getTopHost(); if (val === 0) delete modes[host]; else modes[host] = val; GM_setValue('gt_x_mode_sites', modes); };
    const getSiteAmbient = () => { const modes = GM_getValue('gt_ambient_sites', {}); return !!modes[getTopHost()]; };
    const setSiteAmbient = (val) => { const modes = GM_getValue('gt_ambient_sites', {}); const host = getTopHost(); if (val) modes[host] = true; else delete modes[host]; GM_setValue('gt_ambient_sites', modes); };
    const getActiveGestures = () => { const sMap = GM_getValue('gt_gestures_sites', {}); if (sMap[getTopHost()]) return sMap[getTopHost()]; return GM_getValue('gt_gestures_global', { dblSeek: true, dblFs: true, long: true, swpSeek: true, swpVol: true, swpBri: true, pinch: true }); };
    
    // --- 悬浮窗控制钩子 ---
    const getActiveFloatIcons = () => { const sMap = GM_getValue('gt_float_sites', {}); if (sMap[getTopHost()]) return sMap[getTopHost()]; return GM_getValue('gt_float_global', []); };
    const floatMap = { 'shot': 'gt-shot-btn', 'fit': 'gt-fit-btn', 'pip': 'gt-pip-btn', 'lock': 'gt-lock-btn', 'mode': 'gt-mode-btn', 'copy': 'gt-copy-btn' };

    const applyXModeCss = () => {
        const mode = getSiteXMode(); const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement || document.querySelector('.gt-fullscreen-active'));
        const allow = (mode === 3) || (mode === 1 && !isFS) || (mode === 2 && isFS);
        document.documentElement.style.setProperty('--gt-touch-action', allow ? 'pan-y' : 'none', 'important');
    };

    if (document.documentElement) {
        document.documentElement.style.setProperty('--gt-margin-x', getSiteMargin() + 'px', 'important'); applyXModeCss();
        const host = getTopHost(); const pbSites = GM_getValue('gt_pb_sites', {}); const isPbSpec = !!pbSites[host];
        const initPbColor = isPbSpec ? pbSites[host].color : GM_getValue('gt_pb_color', CFG.progressBarColor);
        const initPbOpacity = isPbSpec ? pbSites[host].opacity : GM_getValue('gt_pb_opacity', 0.9);
        document.documentElement.style.setProperty('--gt-pb-color', initPbColor, 'important'); document.documentElement.style.setProperty('--gt-ab-color', getComplementaryColor(initPbColor), 'important'); 
        document.documentElement.style.setProperty('--gt-pb-opacity', initPbOpacity, 'important'); document.documentElement.style.setProperty('--gt-pb-display-w', GM_getValue('gt_pb_windowed', true) ? 'block' : 'none', 'important'); document.documentElement.style.setProperty('--gt-pb-display-f', GM_getValue('gt_pb_fullscreen', true) ? 'block' : 'none', 'important');
    }

    function applyBufferSetting() { const val = GM_getValue('gt_buffer_sec', 0); if (val === 0) return; try { if (window.Hls && window.Hls.DefaultConfig) { window.Hls.DefaultConfig.maxBufferLength = val; window.Hls.DefaultConfig.maxMaxBufferLength = val * 2; } } catch(e){} }
    applyBufferSetting();

    const checkNativeMediaPage = () => {
        if (!document.body) return null; const vids = document.querySelectorAll('video');
        if (vids.length === 1 && vids[0].parentNode === document.body) {
            let validSiblings = 0;
            for (let el of document.body.children) {
                const tag = el.tagName.toUpperCase();
                if (tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META') { if (el.classList && el.classList.contains('gt-ui-layer')) continue; validSiblings++; }
            }
            if (validSiblings <= 3 || vids[0].getAttribute('name') === 'media') return vids[0];
        } return null;
    };
    let nativeVideoEl = checkNativeMediaPage();

    const isPreviewVideo = (v) => {
        if (!v) return false;
        if (!v.hasAttribute('controls') && (v.loop || v.hasAttribute('loop')) && (v.muted || v.hasAttribute('muted'))) return true;
        if (typeof v.className === 'string' && /(preview|thumb|related|videopv|hover-?play)/i.test(v.className)) return true;
        if (v.closest && v.closest('.singleVideo, [data-label="related_video_container"], .related_video, .videopv, .phimage, .videoThumb, .js-videoPreview, .webm-previewEl')) return true;
        const rect = v.getBoundingClientRect(); if (rect.width > 0 && rect.width < 350) return true;
        let p = v.parentNode, depth = 0;
        while (p && p !== document.body && depth < 10) {
            if (p.tagName === 'A') return true; 
            if (typeof p.className === 'string' && /(hover-?play|preview-?vid|phimage|thumb|card-?video|videopv|singlevideo|related_video)/.test(p.className.toLowerCase())) return true;
            p = p.parentNode; depth++;
        }
        const isSilentAuto = !v.hasAttribute('controls') && (v.muted || v.hasAttribute('muted')) && (v.autoplay || v.hasAttribute('autoplay'));
        if (isSilentAuto && rect.width > 0 && rect.width < 640) return true; return false;
    };

    const getDeviceScale = (containerH, isPreview, isNativeFull = false) => {
        if (isPreview) return 0.5; let logicalW = GM_getValue('gt_logical_w', 0); let innerW = window.innerWidth, screenW = Math.min(window.screen.width, window.screen.height);
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) { if (logicalW === 0 || Math.abs(logicalW - screenW) > 50) { if (screenW < 600) { logicalW = screenW; GM_setValue('gt_logical_w', logicalW); } else if (logicalW === 0) logicalW = 400; } }
        let scale = 1.0; const isMobileHW = logicalW > 0 && logicalW < 600;
        if (isMobileHW && innerW >= 800) { let fullScale = innerW / logicalW; if (containerH > 0 && !isNativeFull) { let maxAllowedScale = (containerH - 40) / 180; scale = Math.min(fullScale, Math.max(1.0, maxAllowedScale)); } else scale = fullScale; }
        return scale;
    };

    const applyFixedScale = (root, video, uiLayer, forceFixed = false) => {
        if (!uiLayer || !uiLayer.id) return;
        const containerH = (root ? root.clientHeight : 0) || video.clientHeight || window.innerHeight;
        const S = getDeviceScale(containerH, video.dataset.gtIsPreview === 'true', nativeVideoEl === video);
        let styleEl = uiLayer.querySelector('style');
        if (styleEl) {
            let newCss = getUICss(S, uiLayer.id, nativeVideoEl === video);
            if (forceFixed) newCss = newCss.replace('position: absolute !important; top: 0; left: 0; width: 100%; height: 100%;', 'position: fixed !important; top: 0; left: 0; width: 100vw; height: 100dvh;');
            styleEl.textContent = newCss;
        }
    };

    window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'gt_lock_orientation') { if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e.data.dir).catch(()=>{}); } 
        else if (e.data && e.data.type === 'gt_unlock_orientation') { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } 
        else if (e.data && e.data.type === 'gt_margin_update') { if (e.data.save) setSiteMargin(e.data.val); document.documentElement.style.setProperty('--gt-margin-x', e.data.val + 'px', 'important'); } 
        else if (e.data && e.data.type === 'gt_xmode_update') {
            const mode = e.data.val, isFS = !!(document.fullscreenElement || document.webkitFullscreenElement || document.querySelector('.gt-fullscreen-active')), allow = (mode === 3) || (mode === 1 && !isFS) || (mode === 2 && isFS);
            document.documentElement.style.setProperty('--gt-touch-action', allow ? 'pan-y' : 'none', 'important');
            document.querySelectorAll('.gt-xmode-btn').forEach(btn => { const isFsXModeOn = (mode === 2 || mode === 3); btn.style.color = isFsXModeOn ? 'var(--gt-pb-color, #FF6699)' : '#ffffff'; });
        } 
        else if (e.data && e.data.type === 'gt_pb_update') {
            document.documentElement.style.setProperty('--gt-pb-color', e.data.color, 'important'); document.documentElement.style.setProperty('--gt-ab-color', getComplementaryColor(e.data.color), 'important');
            document.documentElement.style.setProperty('--gt-pb-opacity', e.data.opacity, 'important'); document.documentElement.style.setProperty('--gt-pb-display-w', e.data.win ? 'block' : 'none', 'important'); document.documentElement.style.setProperty('--gt-pb-display-f', e.data.fs ? 'block' : 'none', 'important');
        } 
        else if (e.data && e.data.type === 'gt_ambient_update') { document.querySelectorAll('video').forEach(v => { if (!v.paused && v.gtAmbientLoop == null && v.dispatchEvent) v.dispatchEvent(new Event('play')); }); } 
        else if (e.data && e.data.type === 'gt_col_update') { document.querySelectorAll('video').forEach(v => { if (v.gtUI && v.gtRoot) updateUIState(v.gtRoot, v); }); }
        else if (e.data && e.data.type === 'gt_force_show_ui') {
            if (e.data.show) {
                let maxArea = 0, targetEl = null;
                document.querySelectorAll('video').forEach(v => { if (v.offsetWidth > 0 && v.offsetHeight > 0) { const area = v.offsetWidth * v.offsetHeight; if (area > maxArea) { maxArea = area; targetEl = v.gtUI; } } });
                document.querySelectorAll('.gt-ui-layer').forEach(el => { if (el === targetEl) el.classList.add('gt-force-show'); else el.classList.remove('gt-force-show'); });
            } else document.querySelectorAll('.gt-ui-layer').forEach(el => el.classList.remove('gt-force-show'));
        }
    });

    const findUp = (el, selector) => { while (el && el !== document.body && el !== document.documentElement) { if (el.matches && el.matches(selector)) return el; el = el.parentNode || el.host; } return null; };
    const isExcludedZone = (e) => { const path = (typeof e.composedPath === 'function') ? e.composedPath() : []; if (path.length > 0) { for (let el of path) { if (el.matches && el.matches(IGNORE_TOUCH_SELECTORS)) return true; } return false; } return !!findUp(e.target, IGNORE_TOUCH_SELECTORS); };

    const getValidPlayerRoot = (video) => {
        let current = video.parentNode || (video.getRootNode && video.getRootNode().host) || video;
        let bestMatch = null, fallbackMatch = null, depth = 0;
        while (current && current !== document.body && current !== document.documentElement && depth < 15) {
            if (current.getBoundingClientRect) {
                const rect = current.getBoundingClientRect();
                if (rect.width > 50 && rect.height > 50) {
                    if (!fallbackMatch) fallbackMatch = current;
                    if (current.matches && current.matches(VIP_SELECTORS)) bestMatch = current; 
                    if (!bestMatch && current.querySelector && current.querySelector('.buttons-bar, .vjs-control-bar, .plyr__controls, .dplayer-controller, .art-controls, .bpx-player-control-wrap, .xgplayer-controls, .controls_vod')) bestMatch = current;
                }
            }
            current = current.parentNode || current.host; depth++;
        }
        const root = bestMatch || fallbackMatch || video.parentNode || video;
        const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (fsEl && fsEl !== document.body && fsEl !== document.documentElement) { if (fsEl.contains(video) || fsEl === video) return fsEl; }
        return root;
    };

    const isNakedForumVideo = (video) => {
        if (findUp(video, VIP_SELECTORS.replace(', iframe', ''))) return false;
        let p = video.parentNode; if (!p || p === document.body || p === document.documentElement) return true;
        const className = (p.className || '').toLowerCase(); if (/(bbs|thread|post|article|content|message|text)/.test(className)) return true;
        const pRect = p.getBoundingClientRect(), vRect = video.getBoundingClientRect();
        if (pRect.height - vRect.height > 50 || pRect.width - vRect.width > 50) return true; return false;
    };

    const findDeepVid = (root) => {
        if (!root) return null; let v = root.querySelector ? root.querySelector('video') : null; if (v) return v;
        let els = root.querySelectorAll ? root.querySelectorAll('*') : [];
        for (let el of els) { if (el.shadowRoot) { v = findDeepVid(el.shadowRoot); if (v) return v; } } return null;
    };

    const hijackFullscreenAPI = () => {
        const fsMethods = ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'];
        fsMethods.forEach(method => {
            if (Element.prototype[method]) {
                const originalMethod = Element.prototype[method];
                Element.prototype[method] = function(...args) {
                    let target = this, v = target.tagName === 'VIDEO' ? target : findDeepVid(target); if (!v) v = findDeepVid(document);
                    if (target.tagName === 'VIDEO' && target.parentNode && target.parentNode.classList && target.parentNode.classList.contains('gt-video-wrapper')) { target = target.parentNode; } 
                    else if (target.tagName === 'VIDEO' && v && v.gtRoot && target !== v.gtRoot) { target = v.gtRoot; } 
                    if (target.classList && (target.classList.contains('gt-video-wrapper') || target.tagName !== 'VIDEO')) { target.classList.add('gt-fullscreen-active'); }
                    if (v && v.gtRoot && target.tagName !== 'VIDEO' && v.gtUI) { if (v.gtUI.parentNode !== target) { target.appendChild(v.gtUI); v.gtRoot = target; } }
                    const promise = originalMethod.apply(target, args);
                    if (v && screen.orientation && screen.orientation.lock) {
                        const dir = (v.videoWidth === 0 || v.videoWidth >= v.videoHeight) ? 'landscape' : 'portrait';
                        screen.orientation.lock(dir).catch(()=>{ try { window.top.postMessage({ type: 'gt_lock_orientation', dir: dir }, '*'); } catch(err){} });
                    }
                    return promise;
                };
            }
        });
    };
    hijackFullscreenAPI();

    // 引擎：悬浮窗动态排版与节点跨界回收
    const updateFloatBarPos = (video) => {
        if (!video || !video.gtFloatBar) return;
        const bar = video.gtFloatBar;
        const activeFloatKeys = getActiveFloatIcons();
        const isFS = !!getFS() || (video.gtRoot && video.gtRoot.classList.contains('gt-fullscreen-active'));
        
        if (isFS || activeFloatKeys.length === 0) {
            bar.style.display = 'none';
            return;
        }

        // 【修复2b】：参照物改为视频外部包裹容器，防止视频 transform 形变时导致胶囊错位乱跑
        const baseEl = (video.gtRoot && video.gtRoot !== document.body && video.gtRoot !== document.documentElement) ? video.gtRoot : video.parentNode || video;
        const rect = baseEl.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
            bar.style.display = 'none'; return;
        }

        bar.style.display = 'flex';
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const barHeight = 34; // 优化胶囊高度占位计算
        const gap = 10; // 与视频的呼吸距
        
        let top = 0;
        if (spaceBelow >= (barHeight + gap)) {
            top = rect.bottom + gap; 
        } else if (spaceAbove >= (barHeight + gap)) {
            top = rect.top - barHeight - gap; 
        } else {
            top = rect.bottom - barHeight - gap; 
        }

        let rightEdge = Math.min(rect.right, window.innerWidth);
        let rightDist = window.innerWidth - rightEdge;
        rightDist = Math.max(0, rightDist) + gap;

        bar.style.top = `${top}px`;
        bar.style.right = `${rightDist}px`;
    };

    let isTrackingLayout = false;
    const syncAllFloatBars = () => {
        if (isTrackingLayout) return;
        isTrackingLayout = true;
        requestAnimationFrame(() => {
            document.querySelectorAll('video').forEach(v => {
                if (v.gtFloatBar && v.gtUI && v.gtUI.classList.contains('gt-ui-visible')) {
                    updateFloatBarPos(v);
                }
            });
            isTrackingLayout = false;
        });
    };
    window.addEventListener('scroll', syncAllFloatBars, { passive: true });
    window.addEventListener('resize', syncAllFloatBars, { passive: true });

    const forceSyncFullscreenUI = () => {
        const sync = () => {
            const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (!fsEl) { document.querySelectorAll('.gt-fullscreen-active').forEach(el => el.classList.remove('gt-fullscreen-active')); } else { fsEl.classList.add('gt-fullscreen-active'); }
            document.querySelectorAll('video').forEach(v => {
                if (v.gtUI && v.gtRoot) {
                    const trueRoot = getValidPlayerRoot(v);
                    if (v.gtUI.parentNode !== trueRoot) { trueRoot.appendChild(v.gtUI); v.gtRoot = trueRoot; }
                    if (typeof applyFixedScale === 'function') applyFixedScale(trueRoot, v, v.gtUI, nativeVideoEl === v);
                    updateUIState(trueRoot, v); 
                }
            });
            applyXModeCss();
            syncAllFloatBars();
        };
        setTimeout(sync, 150);
        setTimeout(sync, 600); 
    };
    
    document.addEventListener('fullscreenchange', forceSyncFullscreenUI); document.addEventListener('webkitfullscreenchange', forceSyncFullscreenUI); document.addEventListener('mozfullscreenchange', forceSyncFullscreenUI); document.addEventListener('MSFullscreenChange', forceSyncFullscreenUI); window.addEventListener('orientationchange', forceSyncFullscreenUI);

    // 离开页面 / 切后台时强制保存所有视频进度
    const flushAllProgress = () => {
        document.querySelectorAll('video').forEach(v => {
            if (v && v.currentTime > 2 && !v.ended && v.dataset.gtIsPreview !== 'true') {
                try { saveProgress(v); } catch (e) {}
            }
        });
    };
    window.addEventListener('pagehide', flushAllProgress);
    window.addEventListener('beforeunload', flushAllProgress);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') flushAllProgress();
    });

    const toggleNativeFullscreen = (container, video) => {
        const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement) || container.classList.contains('gt-fullscreen-active');
        const fsBtn = container.querySelector(FS_BTN_SELECTORS);
        isSimulatingFS = true;
        if (isFS) {
            if (fsBtn) { try { fsBtn.click(); } catch(e){} }
            if (document.exitFullscreen) document.exitFullscreen().catch(()=>{}); else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            container.classList.remove('gt-fullscreen-active');
            if (screen.orientation?.unlock) { screen.orientation.unlock(); try { window.top.postMessage({ type: 'gt_unlock_orientation' }, '*'); } catch(e){} }
        } else {
            const forceLockLandscape = () => {
                let dir = 'landscape'; if (video && video.videoWidth > 0 && video.videoHeight > 0) dir = (video.videoWidth < video.videoHeight) ? 'portrait' : 'landscape';
                if (screen.orientation?.lock) { screen.orientation.lock(dir).catch(()=>{ try { window.top.postMessage({ type: 'gt_lock_orientation', dir: dir }, '*'); } catch(err){} }); } 
                else { try { window.top.postMessage({ type: 'gt_lock_orientation', dir: dir }, '*'); } catch(err){} }
            };
            container.classList.add('gt-fullscreen-active');
            if (fsBtn) { try { fsBtn.click(); } catch(e){} }
            const reqFs = container.requestFullscreen || container.webkitRequestFullscreen || container.mozRequestFullScreen;
            if (reqFs) { const p = reqFs.call(container); if (p && p.then) { p.then(() => setTimeout(forceLockLandscape, 150)).catch(()=>{ if (video.webkitEnterFullscreen) video.webkitEnterFullscreen(); setTimeout(forceLockLandscape, 150); }); } else { setTimeout(forceLockLandscape, 150); } } 
            else if (video.webkitEnterFullscreen) { video.webkitEnterFullscreen(); setTimeout(forceLockLandscape, 150); }
        }
        setTimeout(() => { isSimulatingFS = false; }, 100);
    };

    const showMsg = (txt, video = null, duration = 800) => {
        let uiLayer = (video && video.gtUI) ? video.gtUI : (targetV ? targetV.gtUI : null); let t;
        if (uiLayer) {
            t = uiLayer.querySelector('.gt-toast');
            if (!t) { t = document.createElement('div'); t.className = 'gt-toast'; uiLayer.appendChild(t); } t.style.position = 'absolute';
        } else {
            t = document.getElementById('gt-toast-global');
            if (!t) { t = document.createElement('div'); t.id = 'gt-toast-global'; t.className = 'gt-toast'; document.body.appendChild(t); }
            t.style.position = 'fixed'; t.style.zIndex = '2147483647';
            const isFS = !!getFS() || (targetP && targetP.classList.contains('gt-fullscreen-active'));
            const baseS = getDeviceScale(window.innerHeight, false), TS = baseS > 1.0 ? baseS * 0.75 : baseS, FS = baseS > 1.0 ? baseS * 0.5 : 1.0; 
            const activeS = isFS ? FS : TS;
            t.style.padding = `${4 * activeS}px ${10 * activeS}px`; t.style.borderRadius = `${4 * activeS}px`; t.style.fontSize = `${14 * activeS}px`; t.style.textShadow = `0 0 ${2 * activeS}px #000`;
        }
        t.innerText = txt; t.classList.add('show');
        if (t.gtTimer) clearTimeout(t.gtTimer); t.gtTimer = setTimeout(() => t.classList.remove('show'), duration);
    };

    const applyTogglePos = (btn, side, cw, ch) => {
        const host = getTopHost();
        const posMap = GM_getValue('gt_btn_pos_sites', {});
        const sPos = posMap[host] && posMap[host][side];
        
        let pXorR = side === 'l' ? 0.01 : 0.01; 
        let py = 0.2;
        if (sPos) { 
            pXorR = sPos[0]; 
            if (side === 'r' && pXorR > 0.5) pXorR = 1.0 - pXorR; 
            py = sPos[1]; 
        }
        
        const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement || document.querySelector('.gt-fullscreen-active'));
        const S = getDeviceScale(ch, false, false);
        const bHeight = isFS ? 38 * (S > 1.0 ? S * 0.5 : 1.0) : 26 * (S > 1.0 ? S * 0.75 : S);
        const tglWidth = Math.max(bHeight, btn.getBoundingClientRect().width); 
        
        const edgeGapX = isFS ? 35 : 4;
        const edgeGapY = isFS ? 5 : 4;
        
        pXorR = Math.max(0, Math.min(pXorR, (cw - tglWidth - edgeGapX) / cw));
        py = Math.max(0, Math.min(py, (ch - bHeight - edgeGapY) / ch));
        
        let currentY = py * ch;
        const minY = edgeGapY;
        const maxY = ch - bHeight - edgeGapY;
        currentY = Math.max(minY, Math.min(maxY, currentY));

        let currentX = 0;
        let currentRight = 0;
        
        if (side === 'l') {
            currentX = pXorR * cw;
            const minX = edgeGapX;
            const maxX = cw / 2 - tglWidth;
            currentX = Math.max(minX, Math.min(maxX, currentX));
            btn.style.setProperty('left', `${currentX}px`, 'important');
            btn.style.setProperty('right', 'auto', 'important');
        } else {
            currentRight = pXorR * cw;
            const minR = edgeGapX;
            const maxR = cw / 2 - tglWidth;
            currentRight = Math.max(minR, Math.min(maxR, currentRight));
            btn.style.setProperty('right', `${currentRight}px`, 'important');
            btn.style.setProperty('left', 'auto', 'important');
        }
        
        btn.style.setProperty('top', `${currentY}px`, 'important');
        btn.style.setProperty('margin', '0', 'important');
    };

    const updateToggleText = (v) => {
        if (!v || !v.gtUI) return;
        const colL = GM_getValue('gt_col_l', 0);
        const colR = GM_getValue('gt_col_r', 0);
        
        const setHtml = (btn, style, side) => {
            if (!btn) return;
            btn.className = `gt-btn-base gt-toggle-btn gt-toggle-${side}`; 
            if (style >= 3) btn.classList.add('gt-info-mode'); else btn.classList.add('gt-classic-mode');
            
            if (style === 1) btn.innerHTML = TT(`<span>...</span>`);
            else if (style === 2) btn.innerHTML = TT(side === 'l' ? `<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke-width="2" stroke="currentColor"></path></svg>` : `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="5" r="2" fill="currentColor"/><circle cx="12" cy="19" r="2" fill="currentColor"/></svg>`);
            else if (style === 3) btn.innerHTML = TT(`<span>${v.playbackRate.toFixed(1)}x</span>`);
            else if (style === 4) btn.innerHTML = TT(`<span>-${formatTime(Math.max(0, v.duration - v.currentTime))}</span>`);
            else if (style === 5) btn.innerHTML = TT(`<span>${formatTime(v.currentTime)} / ${formatTime(v.duration)}</span>`);
            else if (style === 6) { const d = new Date(); btn.innerHTML = TT(`<span>${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}</span>`); }
        };
        if (colL > 0) setHtml(v.gtUI.querySelector('.gt-toggle-l'), colL, 'l');
        if (colR > 0) setHtml(v.gtUI.querySelector('.gt-toggle-r'), colR, 'r');
    };

    setInterval(() => {
        document.querySelectorAll('video').forEach(v => {
            if (v.gtUI && v.gtRoot) {
                const l = GM_getValue('gt_col_l', 0), r = GM_getValue('gt_col_r', 0);
                if (l >= 4 || r >= 4) updateToggleText(v);
            }
        });
    }, 1000);

    const makeToggleDraggable = (btn, side) => {
        let isDragging = false, dragHasMoved = false, startX, startY, initLeft, initTop;
        btn.addEventListener('touchstart', e => {
            e.stopPropagation(); e.stopImmediatePropagation();
            isDragging = false; dragHasMoved = false; startX = e.touches[0].clientX; startY = e.touches[0].clientY;
            initLeft = btn.offsetLeft; initTop = btn.offsetTop;
        }, {passive: false, capture: true});
        btn.addEventListener('touchmove', e => {
            e.stopPropagation(); e.stopImmediatePropagation();
            if (e.touches.length > 1) return;
            const dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) { isDragging = true; dragHasMoved = true; }
            if (isDragging) { e.preventDefault(); btn.style.transform = `translate3d(${dx}px, ${dy}px, 0)`; }
        }, {passive: false, capture: true});
        btn.addEventListener('touchend', e => {
            e.stopPropagation(); e.stopImmediatePropagation();
            if (isDragging && dragHasMoved) {
                e.preventDefault(); 
                const dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY;
                const uiRect = btn.parentNode.getBoundingClientRect(), bRect = btn.getBoundingClientRect();
                
                const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement || document.querySelector('.gt-fullscreen-active'));
                const edgeGapX = isFS ? 35 : 4;
                const edgeGapY = isFS ? 5 : 4;
                
                let finalX = initLeft + dx, finalY = initTop + dy;
                const minX = side === 'l' ? edgeGapX : uiRect.width / 2;
                const maxX = side === 'l' ? uiRect.width / 2 - bRect.width : uiRect.width - bRect.width - edgeGapX;
                const minY = edgeGapY, maxY = uiRect.height - bRect.height - edgeGapY;
                
                finalX = Math.max(minX, Math.min(maxX, finalX)); finalY = Math.max(minY, Math.min(maxY, finalY));
                
                let posMap = GM_getValue('gt_btn_pos_sites', {}); if (!posMap[getTopHost()]) posMap[getTopHost()] = {};
                let pVal = side === 'l' ? (finalX / uiRect.width) : ((uiRect.width - finalX - bRect.width) / uiRect.width);
                posMap[getTopHost()][side] = [pVal, finalY / uiRect.height];
                GM_setValue('gt_btn_pos_sites', posMap);
                
                btn.style.transform = 'none'; 
                applyTogglePos(btn, side, uiRect.width, uiRect.height);
                setTimeout(() => { isDragging = false; dragHasMoved = false; }, 50);
            } else {
                e.preventDefault(); 
                const v = targetV || findDeepVid(document);
                if (v && v.gtState) {
                    v.gtState['exp' + side.toUpperCase()] = !v.gtState['exp' + side.toUpperCase()];
                    const icon = btn.querySelector('svg') || btn.querySelector('span');
                    if (icon) { icon.classList.remove('gt-pop-anim'); void icon.offsetWidth; icon.classList.add('gt-pop-anim'); }
                    updateUIState(v.gtRoot, v); wakeUpUI(v.gtRoot, v);
                }
                isDragging = false; dragHasMoved = false;
            }
        }, {passive: false, capture: true});

        ['mousedown', 'mouseup', 'pointerdown', 'pointerup', 'contextmenu', 'dblclick'].forEach(evt => {
            btn.addEventListener(evt, e => { e.stopPropagation(); e.stopImmediatePropagation(); }, { capture: true, passive: false });
        });

        btn.addEventListener('click', e => {
            e.stopPropagation(); e.stopImmediatePropagation();
            if (isDragging || dragHasMoved) { e.preventDefault(); return; }
            e.preventDefault(); 
            const v = targetV || findDeepVid(document);
            if (v && v.gtState) {
                v.gtState['exp' + side.toUpperCase()] = !v.gtState['exp' + side.toUpperCase()];
                const icon = btn.querySelector('svg') || btn.querySelector('span');
                if (icon) { icon.classList.remove('gt-pop-anim'); void icon.offsetWidth; icon.classList.add('gt-pop-anim'); }
                updateUIState(v.gtRoot, v); wakeUpUI(v.gtRoot, v);
            }
        }, {capture: true});
    };

    GM_registerMenuCommand(i18n.menuCopy, () => {
        const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.querySelector('.gt-fullscreen-active');
        if (window.top !== window && !fsEl) return;
        if (window.top === window && fsEl && fsEl.tagName === 'IFRAME') return;

        if (sniffedUrl) { GM_setClipboard(sniffedUrl); showMsg(i18n.copySniffed); return; }
        let v = targetV || findDeepVid(document);
        if (!v) { showMsg(i18n.noVideo); return; }
        let src = v.src; if (!src || src.startsWith('blob:')) { const s = v.querySelector('source'); if (s && s.src) src = s.src; }
        if (src && !src.startsWith('blob:')) { GM_setClipboard(src); showMsg(i18n.copyVid); } else { GM_setClipboard(window.location.href); showMsg(i18n.copyWeb); }
    });

    const toggleAdBlockStyles = (enable) => {
        let styleEl = document.getElementById('gt-adblock-style');
        if (enable) {
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'gt-adblock-style';
                styleEl.textContent = `
                    /* 第一梯队：具有极高特异性的专用播放器广告类名（全局安全） */
                    .hl-player-notice, .MacPlayer-notice, 
                    .myui-player__box .tips, .tips.close-box,
                    .dplayer-pause-ad, .dplayer-notice, .dplayer-ad, 
                    .artplayer-plugin-ads, .art-ad, .art-notice, 
                    .xgplayer-prompt, .xgplayer-tips, .xgplayer-error,
                    .mui-player-notice, .prism-notice { 
                        opacity: 0 !important; pointer-events: none !important; position: absolute !important; z-index: -2147483648 !important; 
                    }
                    /* 第二梯队：泛用型易误杀的广告属性，严格限制在视频容器作用域内 */
                    .gt-player-root .play-ad, .gt-player-root .pause-ad, .gt-player-root .player-ad, .gt-player-root .ad-box, .gt-player-root .ad-mask, 
                    .gt-player-root .pause-html, .gt-player-root #pause-html, 
                    .gt-player-root [class*="pause-html"], .gt-player-root [id*="pause-html"], 
                    .gt-player-root [class*="pause-ad"], .gt-player-root [id*="pause-ad"], 
                    .gt-player-root [class*="play-ad"], .gt-player-root [id*="play-ad"], 
                    .gt-player-root [class*="ad_box"], .gt-player-root [id*="ad_box"], 
                    .gt-player-root [class*="ad-wrap"], .gt-player-root [id*="ad-wrap"], 
                    .gt-player-root [class*="player_ad"], .gt-player-root [id*="player_ad"], 
                    .gt-player-root [class*="player-notice"], .gt-player-root [id*="player-notice"],
                    .gt-player-root [class*="player_notice"], .gt-player-root [id*="player_notice"],
                    .gt-player-root [class*="video-notice"], .gt-player-root [class*="video_notice"],
                    .gt-player-root [class*="video-tips"], .gt-player-root [class*="player-tips"],
                    .gt-player-root [id*="player_pause"], .gt-player-root [class*="player_pause"], 
                    .gt-player-root [title*="关闭广告"], .gt-player-root [title*="广告"], 
                    .gt-player-root a[href*="mms0.baidu.com"], .gt-player-root img[src*="mms0.baidu.com"] { 
                        opacity: 0 !important; pointer-events: none !important; position: absolute !important; z-index: -2147483648 !important; 
                    }
                `;
                const injectSafe = () => {
                    if (document.head) document.head.appendChild(styleEl);
                    else if (document.documentElement) document.documentElement.appendChild(styleEl);
                    else setTimeout(injectSafe, 10);
                };
                injectSafe();
            }
        } else {
            if (styleEl) styleEl.remove();
        }
    };
    let hasInjectedAdblock = false;

    const openSettingsPanel = () => {
        if (document.getElementById('gt-settings-overlay')) return;

        const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.querySelector('.gt-fullscreen-active');
        if (window.top !== window && !fsEl) return; 
        if (window.top === window && fsEl && fsEl.tagName === 'IFRAME') return; 

        const host = getTopHost();
        const pbSites = GM_getValue('gt_pb_sites', {});
        const isPbSpec = !!pbSites[host];
        let pbHistory = GM_getValue('gt_pb_history', []);
        
        const defaultGes = { dblSeek: true, dblFs: true, long: true, swpSeek: true, swpVol: true, swpBri: true, pinch: true };
        const gGes = GM_getValue('gt_gestures_global', defaultGes);
        const sGesMap = GM_getValue('gt_gestures_sites', {});
        const isGesSpec = !!sGesMap[host];
        const activeGes = isGesSpec ? sGesMap[host] : gGes;

        const originalState = {
            resume: GM_getValue('gt_resume_playback', true),
            adblock: GM_getValue('gt_block_ads', true),
            boost: GM_getValue('gt_vol_boost', false),
            ambient: getSiteAmbient(),
            buf: GM_getValue('gt_buffer_sec', 0),
            xmode: getSiteXMode(), 
            margin: getSiteMargin(),
            pbWin: GM_getValue('gt_pb_windowed', true),
            pbFs: GM_getValue('gt_pb_fullscreen', true),
            pbColor: isPbSpec ? pbSites[host].color : GM_getValue('gt_pb_color', CFG.progressBarColor),
            pbOpacity: isPbSpec ? pbSites[host].opacity : GM_getValue('gt_pb_opacity', 0.9),
            pbSiteOnly: isPbSpec,
            gesSiteOnly: isGesSpec,
            ges: { ...activeGes },
            colL: GM_getValue('gt_col_l', 0),
            colR: GM_getValue('gt_col_r', 0)
        };
        
        const sFloatMap = GM_getValue('gt_float_sites', {});
        const isFloatSpec = !!sFloatMap[host];
        originalState.floatSiteOnly = isFloatSpec;
        originalState.floatIcons = [...getActiveFloatIcons()];

        let draftState = { ...originalState };
        draftState.ges = { ...originalState.ges };
        draftState.floatIcons = [...originalState.floatIcons];

        const overlay = document.createElement('div');
        overlay.id = 'gt-settings-overlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2147483647;background:rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;';

        const style = document.createElement('style');
        style.textContent = `
            .gt-panel { background: rgba(20,20,20,0.25); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); color: #fff; width: 90%; max-width: 360px; border-radius: 16px; font-family: system-ui, sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.15); display: flex; flex-direction: column; overflow: hidden; height: 78vh; max-height: 550px; min-height: 350px; }
            .gt-view-container { display: flex; width: 400%; transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); flex: 1; min-height: 0; }
            .gt-view { width: 25%; flex-shrink: 0; display: flex; flex-direction: column; height: 100%; min-height: 0; }
            .gt-panel.show-pb .gt-view-container { transform: translateX(-25%); }
            .gt-panel.show-ges .gt-view-container { transform: translateX(-50%); }
            .gt-panel.show-float .gt-view-container { transform: translateX(-75%); }

            .gt-view-header { padding: 20px 20px 10px; flex-shrink: 0; }
            .gt-panel-title { font-size: 18px; font-weight: 700; text-align: center; letter-spacing: 0.5px; margin: 0; }
            .gt-scroll-area { flex: 1; overflow-y: auto; padding: 0 20px; overscroll-behavior: contain; min-height: 0; }
            .gt-scroll-area::-webkit-scrollbar { width: 4px; }
            .gt-scroll-area::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
            .gt-footer { padding: 15px 20px; flex-shrink: 0; background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.05); }

            .gt-group { background: rgba(0,0,0,0.25); border-radius: 12px; padding: 10px 15px; margin-bottom: 16px; }
            .gt-group-lbl { font-size: 13px; color: var(--gt-pb-color, ${CFG.progressBarColor}); font-weight: 600; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px; transition: color 0.2s; }
            .gt-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; font-size: 15px; }
            .gt-row:last-child { margin-bottom: 0; }
            
            .gt-toggle { position: relative; display: inline-block; width: 44px; height: 24px; }
            .gt-toggle input { opacity: 0; width: 0; height: 0; }
            .gt-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.2); transition: .3s; border-radius: 24px; }
            .gt-slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 2px; bottom: 2px; background-color: white; transition: .3s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
            .gt-toggle input:checked + .gt-slider { background-color: var(--gt-pb-color, ${CFG.progressBarColor}); }
            .gt-toggle input:checked + .gt-slider:before { transform: translateX(20px); }
            .gt-toggle input:disabled + .gt-slider { opacity: 0.4; cursor: not-allowed; }

            .gt-select { background: rgba(255,255,255,0.1); color: #fff; border: none; padding: 4px 8px; border-radius: 6px; font-size: 14px; outline: none; }
            .gt-select option { background: #333; color: #fff; }

            .gt-range { -webkit-appearance: none; width: 100px; background: transparent; }
            .gt-range::-webkit-slider-runnable-track { width: 100%; height: 4px; background: rgba(255,255,255,0.2); border-radius: 4px; }
            .gt-range::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--gt-pb-color, ${CFG.progressBarColor}); margin-top: -6px; }

            .gt-btn { width: 100%; padding: 12px; border-radius: 10px; color: #fff; text-align: center; font-size: 16px; font-weight: 600; cursor: pointer; transition: opacity 0.2s; user-select: none; touch-action: manipulation; }
            .gt-btn-primary { background: linear-gradient(135deg, var(--gt-pb-color, ${CFG.progressBarColor}), #ff4081); box-shadow: 0 4px 15px rgba(255,102,153,0.3); }
            .gt-btn-nav { background: rgba(255,255,255,0.1); margin-bottom: 12px; display: flex; justify-content: space-between; padding: 12px 15px; }
            .gt-btn-secondary { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.1); }
            .gt-btn:active { opacity: 0.8; }

            .gt-color-picker { -webkit-appearance: none; border: none; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; padding: 0; background: transparent; overflow: hidden; }
            .gt-color-picker::-webkit-color-swatch-wrapper { padding: 0; }
            .gt-color-picker::-webkit-color-swatch { border: 2px solid rgba(255,255,255,0.6); border-radius: 50%; }

            .gt-swatch-container { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
            .gt-swatch { width: 26px; height: 26px; border-radius: 50%; cursor: pointer; transition: transform 0.2s; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
            .gt-swatch:active { transform: scale(0.85); }
            .gt-swatch.active::after { content: ""; position: absolute; top: -3px; left: -3px; right: -3px; bottom: -3px; border: 2px solid #fff; border-radius: 50%; }
        `;

        const bufOptions = [0, 30, 60, 180, 300, 600, 900, 1800];
        const bufSelectHTML = bufOptions.map(v => `<option value="${v}" ${v === draftState.buf ? 'selected' : ''}>${v === 0 ? 'Default' : v + 's'}</option>`).join('');

        const xModeOptions = [0, 1, 2, 3];
        const xModeSelectHTML = xModeOptions.map(v => `<option value="${v}" ${v === draftState.xmode ? 'selected' : ''}>${i18n['xOpt' + v]}</option>`).join('');

        const colOptions = [0, 1, 2, 3, 4, 5, 6];
        const getColHTML = (val) => colOptions.map(v => `<option value="${v}" ${v === val ? 'selected' : ''}>${i18n['colOpt'+v]}</option>`).join('');

        const renderSwatches = () => {
            const defaultPreset = { c: CFG.progressBarColor.toUpperCase(), o: 0.9 };
            const allSwatches = [defaultPreset, ...pbHistory];
            
            return allSwatches.map((h) => {
                const isActive = (h.c.toUpperCase() === draftState.pbColor.toUpperCase() && h.o === draftState.pbOpacity);
                return `<div class="gt-swatch ${isActive ? 'active' : ''}" data-color="${h.c}" data-opacity="${h.o}" style="background:${h.c}; opacity:${h.o};"></div>`;
            }).join('');
        };

        const dialog = document.createElement('div');
        dialog.className = 'gt-panel';
        
        dialog.innerHTML = TT(`
            <div class="gt-view-container">
                <div class="gt-view" id="view-main">
                    <div class="gt-view-header"><div class="gt-panel-title">${i18n.menuSettings}</div></div>
                    <div class="gt-scroll-area">
                        <div class="gt-btn gt-btn-nav" id="btn-goto-ges">
                            <span style="pointer-events:none;">${i18n.lblGesSettings}</span><span style="opacity:0.6; pointer-events:none;">›</span>
                        </div>
                        <div class="gt-btn gt-btn-nav" id="btn-goto-pb">
                            <span style="pointer-events:none;">${i18n.lblPbSettings}</span><span style="opacity:0.6; pointer-events:none;">›</span>
                        </div>
                        <div class="gt-btn gt-btn-nav" id="btn-goto-float">
                            <span style="pointer-events:none;">${i18n.lblFloatSettings}</span><span style="opacity:0.6; pointer-events:none;">›</span>
                        </div>
                        <div class="gt-group" style="margin-bottom: 10px;">
                            <div class="gt-group-lbl">${i18n.groupGlobal}</div>
                            <div class="gt-row"><span>${i18n.lblColL}</span><select class="gt-select" id="ui-col-l">${getColHTML(draftState.colL)}</select></div>
                            <div class="gt-row"><span>${i18n.lblColR}</span><select class="gt-select" id="ui-col-r">${getColHTML(draftState.colR)}</select></div>
                            <div class="gt-row"><span>${i18n.lblResume}</span><label class="gt-toggle"><input type="checkbox" id="ui-resume" ${draftState.resume ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblAdblock}</span><label class="gt-toggle"><input type="checkbox" id="ui-adblock" ${draftState.adblock ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblBoost}</span><label class="gt-toggle"><input type="checkbox" id="ui-boost" ${draftState.boost ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblBuf}</span><select class="gt-select" id="ui-buf">${bufSelectHTML}</select></div>
                        </div>
                        <div class="gt-group" style="margin-bottom: 20px;">
                            <div class="gt-group-lbl">${i18n.groupSite}</div>
                            <div class="gt-row"><span>${i18n.lblAmbient}</span><label class="gt-toggle"><input type="checkbox" id="ui-ambient" ${draftState.ambient ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblXMode}</span><select class="gt-select" id="ui-xmode">${xModeSelectHTML}</select></div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblMargin} (<span id="ui-margin-val">${draftState.margin}</span>px)</span><input type="range" class="gt-range" id="ui-margin" min="0" max="45" value="${draftState.margin}"></div>
                        </div>
                    </div>
                    <div class="gt-footer"><div class="gt-btn gt-btn-primary ui-close-btn">${i18n.btnClose}</div></div>
                </div>

                <div class="gt-view" id="view-pb">
                    <div class="gt-view-header"><div class="gt-panel-title">${i18n.lblPbSettings.replace('🎨 ', '')}</div></div>
                    <div class="gt-scroll-area">
                        <div class="gt-group" style="margin-bottom: 10px;">
                            <div class="gt-group-lbl">${i18n.groupGlobal}</div>
                            <div class="gt-row"><span>${i18n.lblPbWindowed}</span><label class="gt-toggle"><input type="checkbox" id="ui-pb-win" ${draftState.pbWin ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblPbFullscreen}</span><label class="gt-toggle"><input type="checkbox" id="ui-pb-fs" ${draftState.pbFs ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                        </div>

                        <div class="gt-group" style="margin-bottom: 10px;">
                            <div class="gt-row"><span>${i18n.lblPbColor}</span><input type="color" class="gt-color-picker" id="ui-pb-color" value="${draftState.pbColor}"></div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblPbOpacity} (<span id="ui-pb-opa-val">${Math.round(draftState.pbOpacity * 100)}</span>%)</span><input type="range" class="gt-range" id="ui-pb-opacity" min="0.1" max="1.0" step="0.05" value="${draftState.pbOpacity}"></div>
                            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:12px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:10px;">${i18n.lblPbHistory}</div>
                            <div class="gt-swatch-container" id="ui-pb-swatches">${renderSwatches()}</div>
                        </div>

                        <div class="gt-group" style="margin-bottom: 20px;">
                            <div class="gt-group-lbl">${i18n.groupSite}</div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblPbSiteOnly}</span><label class="gt-toggle"><input type="checkbox" id="ui-pb-site" ${draftState.pbSiteOnly ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                        </div>
                    </div>
                    <div class="gt-footer">
                        <div style="display:flex; gap:12px;">
                            <div class="gt-btn gt-btn-secondary btn-back-main" style="flex:1;">‹ ${i18n.btnBack}</div>
                            <div class="gt-btn gt-btn-primary ui-close-btn" style="flex:1.5;">${i18n.btnClose}</div>
                        </div>
                    </div>
                </div>

                <div class="gt-view" id="view-ges">
                    <div class="gt-view-header"><div class="gt-panel-title">${i18n.lblGesSettings.replace('✋ ', '')}</div></div>
                    <div class="gt-scroll-area">
                        <div class="gt-group" style="margin-bottom: 10px;">
                            <div class="gt-group-lbl">${i18n.groupSite}</div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblPbSiteOnly}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-site" ${draftState.gesSiteOnly ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                        </div>
                        <div class="gt-group" style="margin-bottom: 20px;">
                            <div class="gt-row"><span>${i18n.lblGesDblSeek}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-dblSeek" ${draftState.ges.dblSeek ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblGesDblFs}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-dblFs" ${draftState.ges.dblFs ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblGesLong}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-long" ${draftState.ges.long ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblGesSwpSeek}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-swpSeek" ${draftState.ges.swpSeek ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblGesSwpVol}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-swpVol" ${draftState.ges.swpVol ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row"><span>${i18n.lblGesSwpBri}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-swpBri" ${draftState.ges.swpBri ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblGesPinch}</span><label class="gt-toggle"><input type="checkbox" id="ui-ges-pinch" ${draftState.ges.pinch ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                        </div>
                    </div>
                    <div class="gt-footer">
                        <div style="display:flex; gap:12px;">
                            <div class="gt-btn gt-btn-secondary btn-back-main" style="flex:1;">‹ ${i18n.btnBack}</div>
                            <div class="gt-btn gt-btn-primary ui-close-btn" style="flex:1.5;">${i18n.btnClose}</div>
                        </div>
                    </div>
                </div>

                <div class="gt-view" id="view-float">
                    <div class="gt-view-header"><div class="gt-panel-title">${i18n.lblFloatSettings.replace('🪟 ', '')}</div></div>
                    <div class="gt-scroll-area">
                        <div class="gt-group" style="margin-bottom: 10px;">
                            <div class="gt-group-lbl">${i18n.groupSite}</div>
                            <div class="gt-row" style="margin-bottom: 0;"><span>${i18n.lblFloatSiteOnly}</span><label class="gt-toggle"><input type="checkbox" id="ui-float-site" ${draftState.floatSiteOnly ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                        </div>
                        <div class="gt-group" style="margin-bottom: 20px;">
                            <div class="gt-group-lbl">${i18n.lblFloatItems}</div>
                            ${['shot', 'fit', 'pip', 'lock', 'mode', 'copy'].map(k => `
                                <div class="gt-row"><span>${i18n['fOpt_'+k]}</span><label class="gt-toggle"><input type="checkbox" class="gt-float-cb" value="${k}" ${draftState.floatIcons.includes(k) ? 'checked' : ''}><span class="gt-slider"></span></label></div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="gt-footer">
                        <div style="display:flex; gap:12px;">
                            <div class="gt-btn gt-btn-secondary btn-back-main" style="flex:1;">‹ ${i18n.btnBack}</div>
                            <div class="gt-btn gt-btn-primary ui-close-btn" style="flex:1.5;">${i18n.btnClose}</div>
                        </div>
                    </div>
                </div>

            </div>
        `);

        overlay.style.cssText = 'position:fixed !important; top:0 !important; left:0 !important; width:100vw !important; height:100vh !important; z-index:2147483647 !important; background:rgba(0,0,0,0.4) !important; display:flex !important; align-items:center !important; justify-content:center !important; margin:0 !important; padding:0 !important;';
        
        overlay.appendChild(style);
        overlay.appendChild(dialog);
        
        const topEl = document.fullscreenElement || document.webkitFullscreenElement || document.querySelector('.gt-fullscreen-active') || document.documentElement || document.body;
        topEl.appendChild(overlay);

        broadcastMsg({ type: 'gt_force_show_ui', show: true });

        const btnPb = dialog.querySelector('#btn-goto-pb');
        const btnGes = dialog.querySelector('#btn-goto-ges');
        const btnFloat = dialog.querySelector('#btn-goto-float');
        
        if (btnPb) {
            const handler = (e) => { e.preventDefault(); e.stopPropagation(); dialog.classList.add('show-pb'); dialog.classList.remove('show-ges', 'show-float'); };
            btnPb.addEventListener('click', handler);
            btnPb.addEventListener('touchend', handler);
        }
        if (btnGes) {
            const handler = (e) => { e.preventDefault(); e.stopPropagation(); dialog.classList.add('show-ges'); dialog.classList.remove('show-pb', 'show-float'); };
            btnGes.addEventListener('click', handler);
            btnGes.addEventListener('touchend', handler);
        }
        if (btnFloat) {
            const handler = (e) => { e.preventDefault(); e.stopPropagation(); dialog.classList.add('show-float'); dialog.classList.remove('show-pb', 'show-ges'); };
            btnFloat.addEventListener('click', handler);
            btnFloat.addEventListener('touchend', handler);
        }
        dialog.querySelectorAll('.btn-back-main').forEach(btn => {
            const handler = (e) => { e.preventDefault(); e.stopPropagation(); dialog.classList.remove('show-pb', 'show-ges', 'show-float'); };
            btn.addEventListener('click', handler);
            btn.addEventListener('touchend', handler);
        });

        const floatCbs = dialog.querySelectorAll('.gt-float-cb');
        const updateFloatCbState = () => {
            let checkedCount = Array.from(floatCbs).filter(c => c.checked).length;
            floatCbs.forEach(c => { if (!c.checked) c.disabled = (checkedCount >= 4); });
            draftState.floatIcons = Array.from(floatCbs).filter(c => c.checked).map(c => c.value);
        };
        floatCbs.forEach(cb => cb.addEventListener('change', updateFloatCbState));
        updateFloatCbState();
        dialog.querySelector('#ui-float-site').addEventListener('change', e => { draftState.floatSiteOnly = e.target.checked; });


        const pushPbState = () => {
            dialog.style.setProperty('--gt-pb-color', draftState.pbColor);
            dialog.querySelector('#ui-pb-swatches').innerHTML = TT(renderSwatches());
            bindSwatchEvents(); 
            broadcastMsg({ type: 'gt_pb_update', win: draftState.pbWin, fs: draftState.pbFs, color: draftState.pbColor, opacity: draftState.pbOpacity });
        };

        dialog.querySelector('#ui-col-l').addEventListener('change', (e) => { draftState.colL = parseInt(e.target.value); updateToggleText(targetV); broadcastMsg({ type: 'gt_col_update' }); });
        dialog.querySelector('#ui-col-r').addEventListener('change', (e) => { draftState.colR = parseInt(e.target.value); updateToggleText(targetV); broadcastMsg({ type: 'gt_col_update' }); });
        dialog.querySelector('#ui-pb-win').addEventListener('change', (e) => { draftState.pbWin = e.target.checked; pushPbState(); });
        dialog.querySelector('#ui-pb-fs').addEventListener('change', (e) => { draftState.pbFs = e.target.checked; pushPbState(); });
        dialog.querySelector('#ui-pb-site').addEventListener('change', (e) => { draftState.pbSiteOnly = e.target.checked; });
        
        const pbColorInput = dialog.querySelector('#ui-pb-color');
        pbColorInput.addEventListener('input', (e) => { draftState.pbColor = e.target.value; pushPbState(); });

        const pbOpaInput = dialog.querySelector('#ui-pb-opacity');
        const pbOpaVal = dialog.querySelector('#ui-pb-opa-val');
        pbOpaInput.addEventListener('input', (e) => {
            draftState.pbOpacity = parseFloat(e.target.value);
            pbOpaVal.innerText = Math.round(draftState.pbOpacity * 100);
            pushPbState();
        });

        const bindSwatchEvents = () => {
            dialog.querySelectorAll('.gt-swatch').forEach(sw => {
                sw.addEventListener('click', (e) => {
                    draftState.pbColor = e.target.dataset.color;
                    draftState.pbOpacity = parseFloat(e.target.dataset.opacity);
                    pbColorInput.value = draftState.pbColor;
                    pbOpaInput.value = draftState.pbOpacity;
                    pbOpaVal.innerText = Math.round(draftState.pbOpacity * 100);
                    pushPbState();
                });
            });
        };
        bindSwatchEvents();

        dialog.querySelector('#ui-resume').addEventListener('change', (e) => { draftState.resume = e.target.checked; });
        dialog.querySelector('#ui-adblock').addEventListener('change', (e) => { draftState.adblock = e.target.checked; toggleAdBlockStyles(draftState.adblock); });
        dialog.querySelector('#ui-boost').addEventListener('change', (e) => { draftState.boost = e.target.checked; });
        dialog.querySelector('#ui-ambient').addEventListener('change', (e) => { draftState.ambient = e.target.checked; broadcastMsg({ type: 'gt_ambient_update', val: draftState.ambient }); });
        dialog.querySelector('#ui-buf').addEventListener('change', (e) => { draftState.buf = parseInt(e.target.value); });
        dialog.querySelector('#ui-xmode').addEventListener('change', (e) => { 
            draftState.xmode = parseInt(e.target.value); 
            broadcastMsg({ type: 'gt_xmode_update', val: draftState.xmode }); 
        });

        const marginSlider = dialog.querySelector('#ui-margin');
        const marginVal = dialog.querySelector('#ui-margin-val');
        marginSlider.addEventListener('input', (e) => {
            draftState.margin = parseInt(e.target.value);
            marginVal.innerText = draftState.margin;
            document.documentElement.style.setProperty('--gt-margin-x', draftState.margin + 'px', 'important');
            broadcastMsg({ type: 'gt_margin_update', val: draftState.margin, save: false });
        });

        ['dblSeek', 'dblFs', 'long', 'swpSeek', 'swpVol', 'swpBri', 'pinch'].forEach(k => {
            dialog.querySelector(`#ui-ges-${k}`).addEventListener('change', e => { draftState.ges[k] = e.target.checked; });
        });
        dialog.querySelector('#ui-ges-site').addEventListener('change', e => { draftState.gesSiteOnly = e.target.checked; });

        const closeAndRevert = () => {
            toggleAdBlockStyles(originalState.adblock);
            broadcastMsg({ type: 'gt_xmode_update', val: originalState.xmode });
            document.documentElement.style.setProperty('--gt-margin-x', originalState.margin + 'px', 'important');
            broadcastMsg({ type: 'gt_margin_update', val: originalState.margin, save: false });
            broadcastMsg({ type: 'gt_ambient_update', val: originalState.ambient });
            
            broadcastMsg({ type: 'gt_pb_update', win: originalState.pbWin, fs: originalState.pbFs, color: originalState.pbColor, opacity: originalState.pbOpacity });
            GM_setValue('gt_col_l', originalState.colL);
            GM_setValue('gt_col_r', originalState.colR);
            broadcastMsg({ type: 'gt_col_update' });
            
            broadcastMsg({ type: 'gt_force_show_ui', show: false });
            overlay.remove();
        };

        const saveAndClose = () => {
            GM_setValue('gt_resume_playback', draftState.resume);
            GM_setValue('gt_block_ads', draftState.adblock);
            GM_setValue('gt_vol_boost', draftState.boost);
            GM_setValue('gt_buffer_sec', draftState.buf);
            setSiteAmbient(draftState.ambient);
            setSiteXMode(draftState.xmode);
            setSiteMargin(draftState.margin);
            
            GM_setValue('gt_pb_windowed', draftState.pbWin);
            GM_setValue('gt_pb_fullscreen', draftState.pbFs);
            GM_setValue('gt_col_l', draftState.colL);
            GM_setValue('gt_col_r', draftState.colR);

            if (draftState.pbSiteOnly) {
                pbSites[host] = { color: draftState.pbColor, opacity: draftState.pbOpacity };
                GM_setValue('gt_pb_sites', pbSites);
            } else {
                delete pbSites[host];
                GM_setValue('gt_pb_sites', pbSites);
                GM_setValue('gt_pb_color', draftState.pbColor);
                GM_setValue('gt_pb_opacity', draftState.pbOpacity);
            }

            if (draftState.gesSiteOnly) {
                sGesMap[host] = draftState.ges;
                GM_setValue('gt_gestures_sites', sGesMap);
            } else {
                delete sGesMap[host];
                GM_setValue('gt_gestures_sites', sGesMap);
                GM_setValue('gt_gestures_global', draftState.ges);
            }

            if (draftState.floatSiteOnly) {
                sFloatMap[host] = draftState.floatIcons;
                GM_setValue('gt_float_sites', sFloatMap);
            } else {
                delete sFloatMap[host];
                GM_setValue('gt_float_sites', sFloatMap);
                GM_setValue('gt_float_global', draftState.floatIcons);
            }

            const defaultPreset = { c: CFG.progressBarColor.toUpperCase(), o: 0.9 };
            let newHist = { c: draftState.pbColor.toUpperCase(), o: draftState.pbOpacity };
            
            if (!(newHist.c === defaultPreset.c && newHist.o === defaultPreset.o)) {
                pbHistory = pbHistory.filter(h => !(h.c === newHist.c && h.o === newHist.o));
                pbHistory.unshift(newHist);
                if (pbHistory.length > 7) pbHistory.pop(); 
            }
            GM_setValue('gt_pb_history', pbHistory);

            applyBufferSetting();
            isAmbientEnabled = draftState.ambient;
            applyXModeCss(); 
            broadcastMsg({ type: 'gt_margin_update', val: draftState.margin, save: true });
            
            broadcastMsg({ type: 'gt_force_show_ui', show: false });
            overlay.remove();
            
            syncAllFloatBars();
            document.querySelectorAll('video').forEach(v => { if (v.gtUI && v.gtRoot) updateUIState(v.gtRoot, v); });
            
            showMsg(i18n.btnClose, targetV);
        };

        dialog.querySelectorAll('.ui-close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); saveAndClose(); });
            btn.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); saveAndClose(); });
        });
        
        ['touchstart', 'touchmove', 'touchend', 'click', 'dblclick', 'mousedown', 'mouseup'].forEach(evt => { dialog.addEventListener(evt, (e) => { e.stopPropagation(); }); });
        ['touchend', 'mouseup', 'click'].forEach(evt => {
            overlay.addEventListener(evt, (e) => {
                if (e.target === overlay) { e.preventDefault(); e.stopPropagation(); closeAndRevert(); }
            }, { capture: true, passive: false });
        });
    };

    GM_registerMenuCommand(i18n.menuSettings || '⚙️ 综合控制面板', openSettingsPanel);

    // 剧集片头/片尾菜单
    const getActiveVideoForMenu = () => {
        if (targetV && document.contains(targetV)) return targetV;
        let best = null, maxA = 0;
        document.querySelectorAll('video').forEach(v => {
            if (v.offsetWidth > 0 && v.offsetHeight > 0) {
                const a = v.offsetWidth * v.offsetHeight;
                if (a > maxA) { maxA = a; best = v; }
            }
        });
        return best;
    };
    GM_registerMenuCommand(i18n.menuSetIntro || '📌 记录片头结束点', () => {
        const v = getActiveVideoForMenu();
        if (!v) { alert(i18n.noVideo || '未找到视频'); return; }
        if (!getSeriesKey()) { showMsg(i18n.noSeries || '无法识别剧名', v); return; }
        if (setSeriesSkip('intro', v.currentTime)) {
            showMsg((i18n.setIntroOk || '已记录片头结束: ') + formatTime(v.currentTime), v);
        }
    });
    GM_registerMenuCommand(i18n.menuSetOutro || '📌 记录片尾开始点', () => {
        const v = getActiveVideoForMenu();
        if (!v) { alert(i18n.noVideo || '未找到视频'); return; }
        if (!getSeriesKey()) { showMsg(i18n.noSeries || '无法识别剧名', v); return; }
        if (setSeriesSkip('outro', v.currentTime)) {
            showMsg((i18n.setOutroOk || '已记录片尾开始: ') + formatTime(v.currentTime), v);
        }
    });
    GM_registerMenuCommand(i18n.menuClearSkip || '🗑️ 清除本剧跳过设置', () => {
        const v = getActiveVideoForMenu();
        if (clearSeriesSkip()) {
            showMsg(i18n.clearSkipOk || '已清除本剧跳过设置', v);
        } else {
            showMsg(i18n.noSeries || '无法识别剧名', v);
        }
    });

    const toggleOrientation = () => { 
        if (!screen.orientation) { showMsg('Rotation not supported', targetV); return; }
        const dir = screen.orientation.type.startsWith('landscape') ? 'portrait' : 'landscape';
        if (screen.orientation.lock) {
            screen.orientation.lock(dir).then(() => { showMsg('Rotated', targetV); }).catch(()=>{
                try { window.top.postMessage({ type: 'gt_lock_orientation', dir: dir }, '*'); showMsg('Rotate request sent', targetV); } catch(e){}
            });
        } else {
            showMsg('Lock API missing', targetV);
        }
    };

    const getUICss = (S, uid, isNativeFull = false) => {
        const TS = S > 1.0 ? S * 0.75 : S;  
        const FS = S > 1.0 ? S * 0.5 : 1.0; 
        const nativeProgStyle = isNativeFull ? `height: 4px !important; bottom: env(safe-area-inset-bottom, 2px) !important;` : ``;

        const offX = `calc(${10 * S}px + var(--gt-margin-x, 0px))`;
        const fsOffX = `calc(20px + var(--gt-margin-x, 0px))`;

        return `
        #${uid} { position: absolute !important; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none !important; z-index: 2147483647 !important; }
        #${uid} .gt-mini-progress { position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: rgba(255,255,255,0.15); z-index: 2147483640; pointer-events: none; overflow: hidden; transition: height 0.2s, opacity 0.3s; box-shadow: 0 -1px 1px rgba(0,0,0,0.2); ${nativeProgStyle} opacity: var(--gt-pb-opacity, 0.9) !important; display: var(--gt-pb-display-w, block) !important; }
        #${uid} .gt-mini-progress .gt-ab-marker-a, #${uid} .gt-mini-progress .gt-ab-marker-b { position: absolute; top: -1px; width: 3px; height: calc(100% + 2px); background: var(--gt-ab-color, #00FFCC) !important; border-radius: 2px; z-index: 30; pointer-events: none; box-shadow: 0 0 6px var(--gt-ab-color, #00FFCC) !important; transition: left 0.1s; }
        
        #${uid} .gt-mini-progress .gt-buffer { position: absolute; height: 100%; left: 0; top: 0; width: 0%; transition: width 0.2s linear; z-index: 15; background: rgba(255,255,255,0.4) !important; border-right: 1px solid rgba(255,255,255,0.9); box-shadow: 1px 0 3px rgba(0,0,0,0.5); pointer-events: none; }
        #${uid} .gt-mini-progress .gt-fill { position: relative; height: 100%; width: 0%; transition: width 0.1s linear; z-index: 20; background: var(--gt-pb-color, ${CFG.progressBarColor}) !important; box-shadow: 0 0 4px var(--gt-pb-color, ${CFG.progressBarColor}) !important; }
        #${uid} .gt-mini-progress .gt-seek-marker { position: absolute; top: -1px; width: 2px; height: calc(100% + 2px); background: #fff !important; z-index: 25; pointer-events: none; box-shadow: 0 0 6px #fff !important; transition: left 0.1s, opacity 0.2s; }

        :fullscreen #${uid} .gt-mini-progress, .gt-fullscreen-active #${uid} .gt-mini-progress { height: 3px !important; display: var(--gt-pb-display-f, block) !important; }
        
        #${uid} .gt-lock-shield { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483645; background: rgba(0,0,0,0); touch-action: none; display: none; pointer-events: auto; }
        :fullscreen #${uid} .gt-lock-shield, .gt-fullscreen-active #${uid} .gt-lock-shield { position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; }
        
        #${uid} .gt-btn-base { position: absolute; width: ${26 * S}px; height: ${26 * S}px; display: flex; align-items: center; justify-content: center; z-index: 2147483647; opacity: 0; pointer-events: none; transition: opacity 0.3s ease, transform 0.15s ease; border: none; background: transparent; color: rgba(255, 255, 255, 0.95); filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.8)); }
        #${uid} .gt-btn-base * { pointer-events: none !important; }
        #${uid} .gt-btn-base svg { width: ${15 * S}px; height: ${15 * S}px; transition: all 0.2s ease; transform-origin: center center; fill: none !important; stroke: currentColor !important; stroke-width: 2 !important; stroke-linecap: round !important; stroke-linejoin: round !important; }
        #${uid} .gt-btn-base svg * { fill: none !important; stroke: currentColor !important; stroke-width: 2 !important; stroke-linecap: round !important; stroke-linejoin: round !important; }
        
        #${uid} .gt-btn-base span { white-space: nowrap !important; display: inline-block; padding: 0 2px; min-width: max-content; font-size: ${11 * S}px; font-weight: 800; font-family: system-ui; letter-spacing: 0.5px; transform-origin: center center; }
        
        #${uid}.gt-ui-visible .gt-btn-base { opacity: 0.65 !important; pointer-events: auto !important; }
        #${uid}.gt-ui-visible .gt-btn-base.hidden-by-state { display: none !important; pointer-events: none !important; }
        
        #${uid}:not(.gt-ui-visible) .gt-info-mode { opacity: 0.3 !important; pointer-events: auto !important; }
        #${uid} .gt-btn-base:active { opacity: 0.9 !important; color: #fff; }
        #${uid}.gt-force-show .gt-btn-base { opacity: 0.8 !important; pointer-events: none !important; }
        
        #${uid} .gt-toggle-btn { position: absolute; width: auto !important; height: ${26 * S}px; min-width: ${26 * S}px; padding: 0 ${8 * S}px; border-radius: 99px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; z-index: 2147483648; touch-action: none; color: #fff; pointer-events: auto !important; box-sizing: border-box; transition: opacity 0.3s; }
        #${uid} .gt-toggle-btn svg { width: ${15 * S}px; height: ${15 * S}px; }
        #${uid} .gt-toggle-btn span { font-size: ${11 * S}px; font-weight: 800; font-family: system-ui; font-variant-numeric: tabular-nums; line-height: 1; white-space: nowrap !important; padding: 0 !important; }
        #${uid} .gt-info-mode { background: transparent !important; color: #fff !important; text-shadow: 0 1px 2px rgba(0,0,0,0.8); border: none !important; }
        #${uid} .gt-classic-mode { background: transparent !important; color: #fff !important; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.8)); border: none !important; }
        
        #${uid}:not(.gt-ui-visible) .gt-classic-mode { opacity: 0 !important; pointer-events: none !important; }
        
        #${uid} .gt-rotate-btn { top: ${10 * S}px; left: ${offX}; }
        #${uid} .gt-seek-mode-btn { top: ${10 * S}px; left: ${offX}; }
        #${uid} .gt-seek-val-btn { top: ${(10 + 28) * S}px; left: ${offX}; }
        #${uid} .gt-jump-btn { top: ${(10 + 56) * S}px; left: ${offX}; }
        #${uid} .gt-fit-btn { top: ${(10 + 84) * S}px; left: ${offX}; }
        #${uid} .gt-shot-btn { top: ${(10 + 112) * S}px; left: ${offX}; }
        
        #${uid} .gt-reset-speed-btn { top: ${(10 + 140) * S}px; left: ${offX}; width: auto !important; padding: 0 ${4 * S}px; }
        #${uid} .gt-ab-btn { top: ${10 * S}px; left: calc(${offX} + ${36 * S}px); width: ${36 * S}px !important; padding: 0 !important; }
        #${uid} .gt-abc-btn { top: ${10 * S}px; left: calc(${offX} + ${(36 + 40) * S}px); width: ${28 * S}px !important; padding: 0 !important; }

        #${uid} .gt-xmode-btn { display: none; }
        #${uid} .gt-pip-btn { top: ${10 * S}px; right: ${offX}; }
        #${uid} .gt-lock-btn { top: calc(50% - ${32 * S}px); right: ${offX}; transform: translateY(-50%); }
        #${uid} .gt-mode-btn { top: calc(50% + ${32 * S}px); right: ${offX}; transform: translateY(-50%); }
        #${uid} .gt-reset-zoom-btn { top: calc(50% + ${62 * S}px); right: ${offX}; transform: translateY(-50%); }
        
        :fullscreen #${uid} .gt-btn-base, .gt-fullscreen-active #${uid} .gt-btn-base { width: ${38 * FS}px !important; height: ${38 * FS}px !important; }
        :fullscreen #${uid}.gt-ui-visible .gt-btn-base, .gt-fullscreen-active #${uid}.gt-ui-visible .gt-btn-base { opacity: 0.5 !important; }
        :fullscreen #${uid}:not(.gt-ui-visible) .gt-info-mode, .gt-fullscreen-active #${uid}:not(.gt-ui-visible) .gt-info-mode { opacity: 0.3 !important; }
        :fullscreen #${uid} .gt-btn-base svg, .gt-fullscreen-active #${uid} .gt-btn-base svg { width: ${22 * FS}px !important; height: ${22 * FS}px !important; }
        :fullscreen #${uid} .gt-btn-base span, .gt-fullscreen-active #${uid} .gt-btn-base span { font-size: ${14 * FS}px !important; }
        :fullscreen #${uid} .gt-toggle-btn, .gt-fullscreen-active #${uid} .gt-toggle-btn { min-width: ${38 * FS}px !important; padding: 0 ${12 * FS}px !important; }
        
        :fullscreen #${uid} .gt-rotate-btn, .gt-fullscreen-active #${uid} .gt-rotate-btn { top: 20px !important; left: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-seek-mode-btn, .gt-fullscreen-active #${uid} .gt-seek-mode-btn { top: calc(20px + ${48 * FS}px) !important; left: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-seek-val-btn, .gt-fullscreen-active #${uid} .gt-seek-val-btn { top: calc(20px + ${96 * FS}px) !important; left: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-jump-btn, .gt-fullscreen-active #${uid} .gt-jump-btn { top: calc(20px + ${144 * FS}px) !important; left: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-fit-btn, .gt-fullscreen-active #${uid} .gt-fit-btn { top: calc(20px + ${192 * FS}px) !important; left: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-shot-btn, .gt-fullscreen-active #${uid} .gt-shot-btn { top: calc(20px + ${240 * FS}px) !important; left: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-copy-btn, .gt-fullscreen-active #${uid} .gt-copy-btn { top: calc(20px + ${288 * FS}px) !important; left: ${fsOffX} !important; }
        
        :fullscreen #${uid} .gt-reset-speed-btn, .gt-fullscreen-active #${uid} .gt-reset-speed-btn { top: calc(20px + ${336 * FS}px) !important; left: ${fsOffX} !important; padding: 0 8px !important; }
        :fullscreen #${uid} .gt-ab-btn, .gt-fullscreen-active #${uid} .gt-ab-btn { top: 20px !important; left: calc(${fsOffX} + ${48 * FS}px) !important; width: ${48 * FS}px !important; padding: 0 !important; }
        :fullscreen #${uid} .gt-abc-btn, .gt-fullscreen-active #${uid} .gt-abc-btn { top: 20px !important; left: calc(${fsOffX} + ${(48 + 54) * FS}px) !important; width: ${36 * FS}px !important; padding: 0 !important; }

        :fullscreen #${uid} .gt-xmode-btn, .gt-fullscreen-active #${uid} .gt-xmode-btn { display: flex !important; top: calc(20px + ${48 * FS}px) !important; right: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-pip-btn, .gt-fullscreen-active #${uid} .gt-pip-btn { top: 20px !important; right: ${fsOffX} !important; }
        :fullscreen #${uid} .gt-lock-btn, .gt-fullscreen-active #${uid} .gt-lock-btn { top: calc(50% - ${35 * FS}px) !important; right: ${fsOffX} !important; transform: translateY(-50%) !important; }
        :fullscreen #${uid} .gt-mode-btn, .gt-fullscreen-active #${uid} .gt-mode-btn { top: calc(50% + ${35 * FS}px) !important; right: ${fsOffX} !important; transform: translateY(-50%) !important; }
        :fullscreen #${uid} .gt-reset-zoom-btn, .gt-fullscreen-active #${uid} .gt-reset-zoom-btn { top: calc(50% + ${75 * FS}px) !important; right: ${fsOffX} !important; transform: translateY(-50%) !important; }
        
        #${uid} .gt-seek-msg { 
            position: absolute !important; top: 45% !important; 
            color: rgba(255, 255, 255, 0.95) !important; 
            z-index: 2147483647 !important; 
            pointer-events: none !important; opacity: 0; 
            transition: opacity 0.15s ease-out; 
            display: flex !important; 
            flex-direction: row !important; 
            align-items: center !important; 
            justify-content: center !important; 
            gap: ${6 * TS}px !important; 
            font-family: system-ui, -apple-system, sans-serif !important; 
            white-space: nowrap !important;
            text-shadow: 0 0 ${10 * TS}px rgba(0,0,0,0.8) !important;
        }
        #${uid} .gt-seek-msg.left { left: 15%; transform: translateY(-50%); }
        #${uid} .gt-seek-msg.right { right: 15%; transform: translateY(-50%); }
        #${uid} .gt-seek-msg.show { opacity: 1; }
        #${uid} .gt-seek-text { 
            display: inline-block !important; 
            font-size: ${15 * TS}px !important; 
            font-weight: 500 !important; 
            line-height: 1 !important; 
            vertical-align: middle !important;
        }
        #${uid} .gt-arrows { 
            display: flex !important; 
            align-items: center !important; 
            font-size: ${26 * TS}px !important; 
            font-weight: 400 !important; 
            line-height: ${15 * TS}px !important; 
            height: ${15 * TS}px !important;
            margin-top: ${-4 * TS}px !important; 
        }
        #${uid} .gt-arrows span { 
            display: block !important; 
            line-height: ${15 * TS}px !important; 
            height: ${15 * TS}px !important;
            vertical-align: middle !important;
        }
        #${uid} .gt-toast { position: absolute; top: 10%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.15); color: #fff; padding: ${4 * TS}px ${10 * TS}px; border-radius: ${4 * TS}px; font: 700 ${14 * TS}px system-ui; z-index: 2147483647; pointer-events: none; opacity: 0; transition: opacity 0.2s; text-shadow: 0 0 ${2 * TS}px #000; border: 1px solid rgba(255,255,255,0.05); }
        #${uid} .gt-toast.show { opacity: 1; }
        
        :fullscreen #${uid} .gt-seek-msg, .gt-fullscreen-active #${uid} .gt-seek-msg { 
            top: 45% !important; 
            gap: ${8 * FS}px !important; 
            text-shadow: 0 0 ${10 * FS}px rgba(0,0,0,0.8), 0 0 ${4 * FS}px rgba(0,0,0,0.6), 0 ${2 * FS}px ${4 * FS}px rgba(0,0,0,0.5) !important; 
        }
        
        :fullscreen #${uid} .gt-seek-text, .gt-fullscreen-active #${uid} .gt-seek-text { 
            font-size: ${20 * FS}px !important; 
            line-height: ${20 * FS}px !important;
            vertical-align: middle !important;
        }
        :fullscreen #${uid} .gt-arrows, .gt-fullscreen-active #${uid} .gt-arrows { 
            font-size: ${30 * FS}px !important; 
            line-height: ${20 * FS}px !important; 
            height: ${20 * FS}px !important;
            margin-top: ${-5 * FS}px !important; 
        }
        :fullscreen #${uid} .gt-toast, .gt-fullscreen-active #${uid} .gt-toast { 
            padding: ${4 * FS}px ${10 * FS}px !important; 
            border-radius: ${4 * FS}px !important; 
            font-size: ${14 * FS}px !important; 
            text-shadow: 0 0 ${2 * FS}px #000 !important; 
        }
        
        #${uid} .gt-col-hidden, :fullscreen #${uid} .gt-col-hidden, .gt-fullscreen-active #${uid} .gt-col-hidden { display: none !important; opacity: 0 !important; pointer-events: none !important; transform: scale(0) !important; z-index: -999 !important; }
        `;
    };

    GM_addStyle(`
        :fullscreen { background-color: #000 !important; --gt-touch-action: none !important; }
        .gt-fullscreen-active { --gt-touch-action: none !important; }
        .gt-pop-anim { animation: gt-pop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes gt-pop { 0% { transform: scale(1); } 40% { transform: scale(1.35); } 100% { transform: scale(1); } }
        .gt-arrow-slide-r { animation: gt-slide-r 0.6s infinite; }
        @keyframes gt-slide-r { 0% { transform: translateX(-4px); opacity: 0; } 40% { opacity: 1; } 100% { transform: translateX(4px); opacity: 0; } }
        .gt-arrow-slide-l { animation: gt-slide-l 0.6s infinite; }
        @keyframes gt-slide-l { 0% { transform: translateX(4px); opacity: 0; } 40% { opacity: 1; } 100% { transform: translateX(-4px); opacity: 0; } }
        #gt-toast-global { position: fixed; top: 10%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.15); color: #fff; padding: 4px 10px; border-radius: 4px; font: 700 14px system-ui; z-index: 2147483647; pointer-events: none; opacity: 0; transition: opacity 0.2s; text-shadow: 0 0 2px #000; border: 1px solid rgba(255,255,255,0.05); }
        #gt-toast-global.show { opacity: 1; }
        
        .gt-float-bar {
            position: fixed !important;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px !important;             /* 【缩小图标间距】减小宽度 */
            padding: 6px 14px !important;     /* 【缩小上下左右内边距】减小高度和宽度 */
            background: rgba(30, 30, 30, 0.15) !important;  /* 【增加透明度】使颜色更浅 */
            backdrop-filter: blur(5px);      /* 【增强毛玻璃效果】更接近真实玻璃质感 */
            -webkit-backdrop-filter: blur(5px);
            border-radius: 999px !important;
            z-index: 2147483647 !important;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease, top 0.2s ease, right 0.2s ease;
            box-sizing: border-box !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.15) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
        }
        .gt-float-bar.gt-ui-visible {
            opacity: 1 !important;
        }
        .gt-float-bar .gt-btn-base {
            position: relative !important;
            top: auto !important; left: auto !important; right: auto !important; bottom: auto !important;
            margin: 2px 0 0 0 !important;     /* 【图标往下掉一点】通过 top margin 微调中心偏上问题 */
            width: 22px !important;
            height: 22px !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            pointer-events: auto !important;
            opacity: 0.9 !important;
            display: flex !important;
            transform: none !important;
            color: rgba(255, 255, 255, 0.95) !important;
            filter: drop-shadow(0px 1px 3px rgba(0,0,0,0.6)) !important;
        }
        .gt-float-bar .gt-btn-base * { pointer-events: none !important; }
        .gt-float-bar .gt-btn-base svg {
            width: 18px !important;
            height: 18px !important;
            fill: none !important;
            stroke: currentColor !important;
            stroke-width: 2 !important;
            stroke-linecap: round !important;
            stroke-linejoin: round !important;
            transition: all 0.2s ease;
        }
        .gt-float-bar .gt-btn-base svg * {
            fill: none !important;
            stroke: currentColor !important;
            stroke-width: 2 !important;
            stroke-linecap: round !important;
            stroke-linejoin: round !important;
        }
        .gt-float-bar .gt-btn-base span {
            color: #fff !important;
            font-size: 11px !important;
            font-weight: 800 !important;
            font-family: system-ui !important;
        }
        .gt-float-bar .gt-btn-base:active {
            opacity: 1 !important;
            transform: scale(0.85) !important;
        }
    `);

    const SVG_LOCK = `<svg viewBox="0 0 24 24" width="100%" height="100%"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    const SVG_UNLOCK = `<svg viewBox="0 0 24 24" width="100%" height="100%"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`;
    const SVG_SPEED = `<svg viewBox="0 0 24 24" width="100%" height="100%"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
    const SVG_ZOOM = `<svg viewBox="0 0 24 24" width="100%" height="100%"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
    const SVG_RESET_ZOOM = `<svg viewBox="0 0 24 24" width="100%" height="100%"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-dasharray="4 2"></rect></svg>`;
    const SVG_SEC = `<svg viewBox="0 0 24 24" width="100%" height="100%"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    const SVG_FRAME = `<svg viewBox="0 0 24 24" width="100%" height="100%"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`;
    const SVG_FIT = `<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4"></path></svg>`;
    const SVG_SHOT = `<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
    const SVG_PIP = `<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></svg>`;
    const SVG_XMODE = `<svg viewBox="0 0 24 24" width="100%" height="100%"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    const SVG_COPY = `<svg viewBox="0 0 24 24" width="100%" height="100%"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    const SVG_JUMP = `<svg viewBox="0 0 24 24" width="100%" height="100%"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline><path d="M16 2l4 4-4 4"></path></svg>`;

    const getFS = () => document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

    const identify = (e) => {
        let targetVideo = null;
        let rootContainer = null;
        
        let cx = e.clientX, cy = e.clientY;
        if (e.touches && e.touches.length > 0) { cx = e.touches[0].clientX; cy = e.touches[0].clientY; }
        else if (e.changedTouches && e.changedTouches.length > 0) { cx = e.changedTouches[0].clientX; cy = e.changedTouches[0].clientY; }
        
        const path = (e.composedPath && typeof e.composedPath === 'function') ? e.composedPath() : [];
        for (let el of path) {
            if (el.tagName === 'VIDEO') { targetVideo = el; break; }
        }

        if (!targetVideo && cx !== undefined && cy !== undefined) {
            const elements = document.elementsFromPoint(cx, cy) || [];
            for (let el of elements) {
                if (el.tagName === 'VIDEO') { targetVideo = el; break; }
                if (el.shadowRoot) {
                    const shadowEls = el.shadowRoot.elementsFromPoint(cx, cy) || [];
                    for (let sel of shadowEls) { if (sel.tagName === 'VIDEO') { targetVideo = sel; break; } }
                }
            }
            if (!targetVideo) {
                const vids = document.getElementsByTagName('video');
                for (let i = 0; i < vids.length; i++) {
                    const r = vids[i].getBoundingClientRect();
                    if (r.width > 50 && cx >= r.left - 10 && cx <= r.right + 10 && cy >= r.top - 10 && cy <= r.bottom + 10) {
                        targetVideo = vids[i]; break;
                    }
                }
            }
        }
        
        if (!targetVideo) return null;

        if (targetVideo.gtRoot && document.contains(targetVideo.gtRoot)) {
            rootContainer = targetVideo.gtRoot;
        } else {
            rootContainer = getValidPlayerRoot(targetVideo);
            if (rootContainer && rootContainer !== document.body && rootContainer !== document.documentElement) {
                targetVideo.gtRoot = rootContainer;
            }
        }

        if (!rootContainer || rootContainer === document.body || rootContainer === document.documentElement) return null;

        return { root: rootContainer, video: targetVideo };
    };

    const updateUIState = (root, video) => {
        if(!video || !video.gtUI) return;
        let uiLayer = video.gtUI;

        // 【修复2a】：扩充按钮查找范围，跨视频层和悬浮层双向寻址
        const getBtn = (cls) => uiLayer.querySelector(cls) || (video.gtFloatBar ? video.gtFloatBar.querySelector(cls) : null);
        const btnLock = getBtn('.gt-lock-btn'), btnMode = getBtn('.gt-mode-btn'), btnRot = getBtn('.gt-rotate-btn'), btnRst = getBtn('.gt-reset-speed-btn'), btnZoomRst = getBtn('.gt-reset-zoom-btn'), btnSeekMode = getBtn('.gt-seek-mode-btn'), btnSeekVal = getBtn('.gt-seek-val-btn'), btnJump = getBtn('.gt-jump-btn'), btnFit = getBtn('.gt-fit-btn'), btnShot = getBtn('.gt-shot-btn'), btnCopy = getBtn('.gt-copy-btn'), btnPip = getBtn('.gt-pip-btn');
        const shield = uiLayer.querySelector('.gt-lock-shield');
        const btnAb = uiLayer.querySelector('.gt-ab-btn');
        const btnAbc = uiLayer.querySelector('.gt-abc-btn');
        const btnXMode = uiLayer.querySelector('.gt-xmode-btn'); 
        const isFS = !!getFS() || root.classList.contains('gt-fullscreen-active');
        
        const vState = video.gtState;

        if(btnLock) btnLock.innerHTML = TT(vState.isScreenLocked ? SVG_LOCK : SVG_UNLOCK);
        if(btnMode) btnMode.innerHTML = TT(vState.pinchMode === 'speed' ? SVG_SPEED : SVG_ZOOM);
        if(btnSeekMode) btnSeekMode.innerHTML = TT(seekMode === 'sec' ? SVG_SEC : SVG_FRAME);
        if(btnSeekVal) btnSeekVal.innerHTML = TT(`<span>${seekMode === 'sec' ? seekSec + 's' : fpsMode + i18n.frameUnit}</span>`);
        if(btnJump) btnJump.innerHTML = TT(SVG_JUMP);
        if(btnFit) btnFit.innerHTML = TT(SVG_FIT);
        if(btnShot) btnShot.innerHTML = TT(SVG_SHOT);
        if(btnCopy) btnCopy.innerHTML = TT(SVG_COPY);
        if(btnPip) btnPip.innerHTML = TT(SVG_PIP);
        
        if (btnAb && vState && vState.abLoop) {
            if (vState.abLoop.state === 0) {
                btnAb.innerHTML = TT(`<span>A·B</span>`);
            } else if (vState.abLoop.state === 1) {
                btnAb.innerHTML = TT(`<span style="color:var(--gt-pb-color, #FF6699);">A·</span>`);
            } else {
                btnAb.innerHTML = TT(`<span style="color:var(--gt-pb-color, #FF6699);">A↔B</span>`);
            }
        }
        
        if (btnAbc && vState && vState.abLoop) {
            if (vState.abLoop.state === 2 || vState.abLoop.state === 3) {
                btnAbc.classList.remove('hidden-by-state');
                const mainColor = 'var(--gt-pb-color, #FF6699)';
                const compColor = 'var(--gt-ab-color, #00FFCC)';
                if (vState.abLoop.state === 2) {
                    btnAbc.innerHTML = TT(`<span style="color:${mainColor}; font-weight:900; text-shadow: 0 0 2px rgba(0,0,0,0.5);">‖ C</span>`);
                } else {
                    btnAbc.innerHTML = TT(`<span style="color:${compColor}; font-weight:900; text-shadow: 0 0 2px rgba(0,0,0,0.5);">▶ C</span>`);
                }
            } else {
                btnAbc.classList.add('hidden-by-state');
            }
        }

        if (btnXMode) {
            const xMode = getSiteXMode();
            const isFsXModeOn = (xMode === 2 || xMode === 3);
            btnXMode.style.color = isFsXModeOn ? 'var(--gt-pb-color, #FF6699)' : '#ffffff';
            btnXMode.innerHTML = TT(SVG_XMODE);
        }
        
        if (vState && vState.isScreenLocked) {
            if(shield) shield.style.display = 'block';
            [btnMode, btnRot, btnRst, btnZoomRst, btnSeekMode, btnSeekVal, btnFit, btnShot, btnCopy, btnPip, btnAb, btnXMode].forEach(b => b?.classList.add('hidden-by-state'));
        } else {
            if(shield) shield.style.display = 'none';
            [btnMode, btnSeekMode, btnSeekVal, btnFit, btnShot, btnCopy, btnPip, btnAb, btnXMode].forEach(b => b?.classList.remove('hidden-by-state'));
            if(btnRot) { if(isFS) btnRot.classList.remove('hidden-by-state'); else btnRot.classList.add('hidden-by-state'); }
            if(btnRst) { if(video && Math.abs((video.playbackRate || 1.0) - 1.0) > 0.05) btnRst.classList.remove('hidden-by-state'); else btnRst.classList.add('hidden-by-state'); }
            if(btnZoomRst) { if(vState && vState.scale > 1.0) btnZoomRst.classList.remove('hidden-by-state'); else btnZoomRst.classList.add('hidden-by-state'); }
        }

        const activeFloats = getActiveFloatIcons();
        
        // 【动画闪烁修复】：精准判定是否需要转移节点，避免反复插拔 DOM 导致动画重置
        Object.keys(floatMap).forEach(key => {
            const cls = floatMap[key];
            const btn = uiLayer.querySelector('.'+cls) || (video.gtFloatBar ? video.gtFloatBar.querySelector('.'+cls) : null);
            if (!btn) return;
            
            const shouldFloat = (!isFS && activeFloats.includes(key));
            
            if (shouldFloat && video.gtFloatBar) {
                // 如果应该在悬浮窗且当前不在，才发生 DOM 转移
                if (btn.parentNode !== video.gtFloatBar) {
                    video.gtFloatBar.appendChild(btn);
                    btn.style.position = 'relative'; 
                    btn.style.display = 'flex'; 
                    btn.classList.remove('gt-col-hidden', 'hidden-by-state');
                }
            } else {
                // 如果不该悬浮且当前还在悬浮窗内，则回收至原生图层
                if (btn.parentNode !== uiLayer) {
                    uiLayer.appendChild(btn);
                    btn.style.position = 'absolute'; 
                    btn.style.display = ''; 
                }
                // 原生层专属逻辑：隐藏独立版拷贝按钮
                if (cls === 'gt-copy-btn' && btn.parentNode === uiLayer) {
                    btn.classList.add('gt-col-hidden');
                    btn.style.display = 'none'; 
                }
            }
        });

        if (!isFS && activeFloats.length > 0 && video.gtFloatBar) {
            updateFloatBarPos(video);
        }

        const colL = GM_getValue('gt_col_l', 0);
        const colR = GM_getValue('gt_col_r', 0);
        const tglL = uiLayer.querySelector('.gt-toggle-l');
        const tglR = uiLayer.querySelector('.gt-toggle-r');
        if (vState.expL === undefined) vState.expL = false;
        if (vState.expR === undefined) vState.expR = false;

        const applyColLayout = (side, tgl, colType, expState, btnList) => {
            if (!tgl) return;
            const isFloated = (clsName) => (!isFS && activeFloats.some(key => floatMap[key] === clsName));

            if (colType === 0) {
                tgl.style.display = 'none';
                btnList.forEach(cls => { 
                    if (isFloated(cls)) return;
                    const b = uiLayer.querySelector('.'+cls); 
                    if (b) { b.classList.remove('gt-col-hidden'); b.style.removeProperty('top'); b.style.removeProperty('left'); b.style.removeProperty('right'); b.style.removeProperty('margin'); b.style.removeProperty('transform'); } 
                });
                if (side === 'l') { ['gt-ab-btn', 'gt-abc-btn'].forEach(cls => { const b = uiLayer.querySelector('.'+cls); if (b) { b.classList.remove('gt-col-hidden'); b.style.removeProperty('top'); b.style.removeProperty('left'); b.style.removeProperty('right'); b.style.removeProperty('margin'); } }); }
                return;
            }
            
            tgl.style.display = 'flex';
            updateToggleText(video); 

            const uiRect = uiLayer.getBoundingClientRect(); 
            const cw = uiRect.width || window.innerWidth;
            const ch = uiRect.height || window.innerHeight;
            
            const host = getTopHost(); 
            const posMap = GM_getValue('gt_btn_pos_sites', {}); 
            const sPos = posMap[host] && posMap[host][side];
            
            let pXorR = side === 'l' ? 0.01 : 0.01; 
            let py = 0.2;
            if (sPos) { 
                pXorR = sPos[0]; 
                if (side === 'r' && pXorR > 0.5) pXorR = 1.0 - pXorR; 
                py = sPos[1]; 
            }
            
            const S = getDeviceScale(ch, video.dataset.gtIsPreview === 'true', nativeVideoEl === video);
            const FS = S > 1.0 ? S * 0.5 : 1.0;
            const bHeight = isFS ? 38 * FS : 26 * S; 
            const tglWidth = Math.max(bHeight, tgl.getBoundingClientRect().width); 
            
            const edgeGapX = isFS ? 35 : 4;
            const edgeGapY = isFS ? 5 : 4;
            
            pXorR = Math.max(0, Math.min(pXorR, (cw - tglWidth - edgeGapX) / cw));
            py = Math.max(0, Math.min(py, (ch - bHeight - edgeGapY) / ch));
            
            let currentY = py * ch;
            const minY = edgeGapY;
            const maxY = ch - bHeight - edgeGapY;
            currentY = Math.max(minY, Math.min(maxY, currentY));

            let currentX = 0;
            let currentRight = 0;
            
            if (side === 'l') {
                currentX = pXorR * cw;
                const minX = edgeGapX;
                const maxX = cw / 2 - tglWidth;
                currentX = Math.max(minX, Math.min(maxX, currentX));
                tgl.style.setProperty('left', `${currentX}px`, 'important');
                tgl.style.setProperty('right', 'auto', 'important');
            } else {
                currentRight = pXorR * cw;
                const minR = edgeGapX;
                const maxR = cw / 2 - tglWidth;
                currentRight = Math.max(minR, Math.min(maxR, currentRight));
                tgl.style.setProperty('right', `${currentRight}px`, 'important');
                tgl.style.setProperty('left', 'auto', 'important');
            }
            
            tgl.style.setProperty('top', `${currentY}px`, 'important');

            if (expState) {
                const margin = 10;
                let top = currentY + bHeight + margin;
                
                let visCount = 0;
                btnList.forEach(cls => { 
                    if (isFloated(cls)) return;
                    const b = uiLayer.querySelector('.'+cls); 
                    if(b && !b.classList.contains('hidden-by-state')) visCount++; 
                });
                const listH = visCount * (bHeight + 5);
                
                if (top + listH > ch - margin) {
                    top = currentY - margin - listH;
                }
                top = Math.max(margin, top); 
                
                let renderIndex = 0;
                let firstVisibleTop = null; 
                btnList.forEach((cls) => {
                    const b = uiLayer.querySelector('.'+cls); 
                    if (!b) return; 
                    if (isFloated(cls)) return; 
                    
                    b.classList.remove('gt-col-hidden');
                    
                    if (!b.classList.contains('hidden-by-state')) {
                        const currentTop = top + renderIndex * (bHeight + 5);
                        if (firstVisibleTop === null) firstVisibleTop = currentTop;

                        b.style.setProperty('top', `${currentTop}px`, 'important'); 
                        if (side === 'l') {
                            b.style.setProperty('left', `${currentX}px`, 'important'); 
                            b.style.setProperty('right', `auto`, 'important');
                        } else {
                            b.style.setProperty('right', `${currentRight}px`, 'important'); 
                            b.style.setProperty('left', `auto`, 'important');
                        }
                        
                        b.style.setProperty('transform', 'none', 'important');
                        renderIndex++;
                    }
                });

                if (side === 'l' && firstVisibleTop !== null) {
                    const abBtn = uiLayer.querySelector('.gt-ab-btn'), abcBtn = uiLayer.querySelector('.gt-abc-btn');
                    const offset1 = isFS ? 48*FS : 36*S;
                    const offset2 = isFS ? 102*FS : 76*S;
                    if (abBtn) { abBtn.classList.remove('gt-col-hidden'); abBtn.style.setProperty('top', `${firstVisibleTop}px`, 'important'); abBtn.style.setProperty('left', `${currentX + offset1}px`, 'important'); abBtn.style.setProperty('right', `auto`, 'important'); abBtn.style.setProperty('transform', 'none', 'important'); }
                    if (abcBtn) { abcBtn.classList.remove('gt-col-hidden'); abcBtn.style.setProperty('top', `${firstVisibleTop}px`, 'important'); abcBtn.style.setProperty('left', `${currentX + offset2}px`, 'important'); abcBtn.style.setProperty('right', `auto`, 'important'); abcBtn.style.setProperty('transform', 'none', 'important'); }
                }

            } else {
                btnList.forEach(cls => { 
                    if (isFloated(cls)) return;
                    const b = uiLayer.querySelector('.'+cls); 
                    if (b) { b.classList.add('gt-col-hidden'); b.style.removeProperty('transform'); } 
                });
                if (side === 'l') { ['gt-ab-btn', 'gt-abc-btn'].forEach(cls => { const b = uiLayer.querySelector('.'+cls); if (b) b.classList.add('gt-col-hidden'); }); }
            }
        };

        if (tglL && tglR) {
            if (!vState.isScreenLocked) {
                applyColLayout('l', tglL, colL, vState.expL, ['gt-rotate-btn', 'gt-seek-mode-btn', 'gt-seek-val-btn', 'gt-jump-btn', 'gt-fit-btn', 'gt-shot-btn', 'gt-reset-speed-btn']);
                applyColLayout('r', tglR, colR, vState.expR, ['gt-pip-btn', 'gt-lock-btn', 'gt-mode-btn', 'gt-reset-zoom-btn', 'gt-xmode-btn']);
            } else {
                tglL.style.display = 'none'; tglR.style.display = 'none';
            }
        }
    };

    const wakeUpUI = (root, video) => {
        if (!video || !video.gtUI) return; 
        const uiLayer = video.gtUI;

        uiLayer.classList.add('gt-ui-visible');
        if (video.gtFloatBar) {
            video.gtFloatBar.classList.add('gt-ui-visible');
            updateFloatBarPos(video);
        }

        updateUIState(root, video);
        
        if (video.gtUITimer) clearTimeout(video.gtUITimer); 
        video.gtUITimer = setTimeout(() => { 
            uiLayer.classList.remove('gt-ui-visible'); 
            if (video.gtFloatBar) video.gtFloatBar.classList.remove('gt-ui-visible');
            if (video.gtState) { video.gtState.expL = false; video.gtState.expR = false; }
            updateUIState(root, video);
        }, CFG.uiTimeout);
    };
    
    const hideUI = (video) => { 
        if (video && video.gtUI) {
            video.gtUI.classList.remove('gt-ui-visible'); 
            if (video.gtFloatBar) video.gtFloatBar.classList.remove('gt-ui-visible');
            if (video.gtState) { video.gtState.expL = false; video.gtState.expR = false; updateUIState(video.gtRoot, video); }
            if (video.gtUITimer) clearTimeout(video.gtUITimer); 
        }
    };

    const applyTransform = (video) => {
        if(!video || !video.gtState) return;
        const vState = video.gtState;
        if (vState.scale <= 1.05) { 
            vState.scale = 1.0; vState.panX = 0; vState.panY = 0; 
        } else {
            const mX = (video.clientWidth * vState.scale - video.clientWidth) / 2, mY = (video.clientHeight * vState.scale - video.clientHeight) / 2;
            vState.panX = Math.max(-mX, Math.min(mX, vState.panX)); vState.panY = Math.max(-mY, Math.min(mY, vState.panY));
        }
        video.style.setProperty('transition', 'none', 'important');
        video.style.setProperty('will-change', 'transform', 'important');
        video.style.transform = `translate(${vState.panX}px, ${vState.panY}px) scale(${vState.scale})`;
    };

    let pendingRate = null; let lastRateUpdateTime = 0;
    const setRateThrottled = (v, rate) => { pendingRate = rate; const now = Date.now(); if (now - lastRateUpdateTime > 150) { v.playbackRate = pendingRate; lastRateUpdateTime = now; pendingRate = null; } };

    const bindTap = (btn, handler) => {
        let lastExec = 0;
        const wrap = (e) => {
            e.stopPropagation(); e.stopImmediatePropagation(); if (e.type === 'touchend' && e.cancelable) e.preventDefault();
            const now = Date.now(); if (now - lastExec < 300) return; lastExec = now; handler(e); 
            const icon = btn.querySelector('svg') || btn.querySelector('span');
            if (icon) { icon.classList.remove('gt-pop-anim'); void icon.offsetWidth; icon.classList.add('gt-pop-anim'); }
        };
        btn.addEventListener('touchend', wrap, {passive: false, capture: true}); btn.addEventListener('click', wrap, {capture: true});
        ['touchstart', 'mousedown', 'pointerdown', 'mouseup', 'pointerup', 'contextmenu', 'dblclick'].forEach(evt => { btn.addEventListener(evt, (e)=>{e.stopPropagation(); e.stopImmediatePropagation();}, { capture: true, passive: false }); });
    };

    const buildUI = (root, video) => {
        const uid = 'gt-ui-' + Math.random().toString(36).substr(2, 9);
        let uiLayer = document.createElement('div');
        uiLayer.id = uid;
        uiLayer.className = 'gt-ui-layer';
        
        const isPreview = video.dataset.gtIsPreview === 'true';
        const containerH = root.clientHeight || video.clientHeight || window.innerHeight;
        const isNativeFull = nativeVideoEl === video;
        const S = getDeviceScale(containerH, isPreview, isNativeFull);
        
        const styleEl = document.createElement('style');
        
        let initialCss = getUICss(S, uid, isNativeFull);
        if (isNativeFull) {
            initialCss = initialCss.replace('position: absolute !important; top: 0; left: 0; width: 100%; height: 100%;', 'position: fixed !important; top: 0; left: 0; width: 100vw; height: 100dvh;');
        }
        styleEl.textContent = initialCss;
        
        uiLayer.appendChild(styleEl);

        const bar = document.createElement('div'); bar.className = 'gt-mini-progress'; 
        bar.innerHTML = TT('<div class="gt-ab-marker-a" style="display:none;"></div><div class="gt-ab-marker-b" style="display:none;"></div><div class="gt-buffer"></div><div class="gt-fill"></div><div class="gt-seek-marker" style="opacity:0;"></div>');
        uiLayer.appendChild(bar); 
        
        const shield = document.createElement('div'); shield.className = 'gt-lock-shield';
        const blk = (e) => { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); wakeUpUI(root, video); };
        ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'dblclick', 'touchstart', 'touchend'].forEach(evt => shield.addEventListener(evt, blk, {capture:true, passive:false}));
        uiLayer.appendChild(shield);

        const rBtn = document.createElement('div'); rBtn.className = 'gt-btn-base gt-rotate-btn'; rBtn.innerHTML = TT(`<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>`);
        bindTap(rBtn, () => { toggleOrientation(); wakeUpUI(root, video); }); uiLayer.appendChild(rBtn);
        const smBtn = document.createElement('div'); smBtn.className = 'gt-btn-base gt-seek-mode-btn';
        bindTap(smBtn, () => { seekMode = seekMode === 'sec' ? 'frame' : 'sec'; GM_setValue('gt_seek_mode', seekMode); updateUIState(root, video); showMsg(seekMode==='sec'?i18n.switchSec:i18n.switchFrame, video); wakeUpUI(root, video); }); uiLayer.appendChild(smBtn);
        const svBtn = document.createElement('div'); svBtn.className = 'gt-btn-base gt-seek-val-btn';
        bindTap(svBtn, () => { if(seekMode==='sec'){ const a=[10,15,30,1,5]; seekSec=a[(a.indexOf(seekSec)+1)%a.length]; GM_setValue('gt_seek_sec', seekSec); showMsg(`${i18n.step}: ${seekSec}s`, video);} else { fpsMode=fpsMode===30?60:30; GM_setValue('gt_fps', fpsMode); showMsg(`${i18n.fps}: ${fpsMode}`, video); } updateUIState(root, video); wakeUpUI(root, video); }); uiLayer.appendChild(svBtn);

        // 跳转到指定时间（支持绝对 / 相对）
        const jumpBtn = document.createElement('div'); jumpBtn.className = 'gt-btn-base gt-jump-btn'; jumpBtn.innerHTML = TT(SVG_JUMP);
        bindTap(jumpBtn, () => {
            const input = prompt(i18n.jumpPrompt, '');
            if (input === null) return; // 用户取消
            const parsed = parseTimeInput(input);
            if (!parsed) {
                showMsg(i18n.jumpFail, video);
                wakeUpUI(root, video);
                return;
            }
            let target = parsed.seconds;
            if (parsed.relative === 1) target = video.currentTime + parsed.seconds;
            else if (parsed.relative === -1) target = video.currentTime - parsed.seconds;
            if (isNaN(video.duration) || video.duration <= 0) {
                showMsg(i18n.jumpFail, video);
                wakeUpUI(root, video);
                return;
            }
            target = Math.max(0, Math.min(video.duration - 0.1, target));
            if (Math.abs(target - video.currentTime) < 0.05) {
                showMsg(i18n.jumpOut, video);
            } else {
                video.currentTime = target;
                showMsg(i18n.jumpOk + formatTime(target), video);
            }
            wakeUpUI(root, video);
        });
        uiLayer.appendChild(jumpBtn);
        
        const fitBtn = document.createElement('div'); fitBtn.className = 'gt-btn-base gt-fit-btn'; fitBtn.innerHTML = TT(SVG_FIT);
        bindTap(fitBtn, () => {
            const fits = ['contain', 'cover', 'fill'];
            const current = video.style.objectFit || 'contain';
            const next = fits[(fits.indexOf(current) + 1) % fits.length];
            video.style.objectFit = next;
            showMsg(next === 'cover' ? i18n.fitCover : (next === 'fill' ? i18n.fitFill : i18n.fitContain), video);
            wakeUpUI(root, video);
        });
        uiLayer.appendChild(fitBtn);

        const shotBtn = document.createElement('div'); shotBtn.className = 'gt-btn-base gt-shot-btn'; shotBtn.innerHTML = TT(SVG_SHOT);
        bindTap(shotBtn, () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = dataURL;
                a.download = `Screenshot_${Math.floor(Date.now()/1000)}.png`;
                a.click();
                showMsg(i18n.shotSaved, video);
            } catch (e) {
                showMsg(i18n.shotFailed, video);
            }
            wakeUpUI(root, video);
        });
        uiLayer.appendChild(shotBtn);

        const copyBtn = document.createElement('div'); copyBtn.className = 'gt-btn-base gt-copy-btn gt-col-hidden'; copyBtn.style.display = 'none'; copyBtn.innerHTML = TT(SVG_COPY);
        bindTap(copyBtn, () => {
            let src = video.src; if (!src || src.startsWith('blob:')) { const s = video.querySelector('source'); if (s && s.src) src = s.src; }
            if (src && !src.startsWith('blob:')) { GM_setClipboard(src); showMsg(i18n.copyVid, video); } else { GM_setClipboard(window.location.href); showMsg(i18n.copyWeb, video); }
            wakeUpUI(root, video);
        });
        uiLayer.appendChild(copyBtn);

        const abBtn = document.createElement('div'); abBtn.className = 'gt-btn-base gt-ab-btn';
        bindTap(abBtn, () => {
            if (!video.gtState || !video.gtState.abLoop) return;
            const s = video.gtState.abLoop;
            if (s.state === 0) {
                s.a = video.currentTime; s.state = 1;
                showMsg(i18n.abA + formatTime(s.a), video);
            } else if (s.state === 1) {
                s.b = video.currentTime;
                if (s.b <= s.a + 1.0) {
                    showMsg(i18n.abErr, video);
                    s.state = 0; s.a = -1; s.b = -1;
                } else {
                    s.state = 2;
                    showMsg(i18n.abB, video);
                }
            } else {
                s.state = 0; s.a = -1; s.b = -1;
                showMsg(i18n.abClear, video);
            }
            updateUIState(root, video); wakeUpUI(root, video);
        });
        uiLayer.appendChild(abBtn);

        const abcBtn = document.createElement('div'); abcBtn.className = 'gt-btn-base gt-abc-btn hidden-by-state';
        bindTap(abcBtn, () => {
            if (!video.gtState || !video.gtState.abLoop) return;
            const s = video.gtState.abLoop;
            if (s.state === 2) {
                s.state = 3; 
                showMsg(i18n.abPause, video);
            } else if (s.state === 3) {
                s.state = 2; 
                showMsg(i18n.abResume, video);
            }
            updateUIState(root, video); wakeUpUI(root, video);
        });
        uiLayer.appendChild(abcBtn);

        const xBtn = document.createElement('div'); xBtn.className = 'gt-btn-base gt-xmode-btn';
        xBtn.innerHTML = TT(SVG_XMODE); 
        bindTap(xBtn, () => {
            const currentMode = getSiteXMode();
            const nextMode = currentMode ^ 2; 
            setSiteXMode(nextMode);
            applyXModeCss();
            broadcastMsg({ type: 'gt_xmode_update', val: nextMode });
            
            const isNowOn = (nextMode === 2 || nextMode === 3);
            showMsg(isNowOn ? i18n.xModeFSToggleOn : i18n.xModeFSToggleOff, targetV);
            
            updateUIState(root, video); 
            wakeUpUI(root, video);
        });
        uiLayer.appendChild(xBtn);

        if (document.pictureInPictureEnabled) {
            const pipBtn = document.createElement('div'); pipBtn.className = 'gt-btn-base gt-pip-btn'; pipBtn.innerHTML = TT(SVG_PIP);
            // 合并自「手机浏览器触摸手势」：去掉 disablePictureInPicture 限制，退出时恢复播放状态
            bindTap(pipBtn, () => {
                try {
                    if (document.pictureInPictureElement) {
                        const playState = document.pictureInPictureElement.paused;
                        document.exitPictureInPicture().then(() => {
                            if (!playState && video && !video.paused) { /* already playing */ }
                            else if (!playState && video) video.play().catch(() => {});
                        }).catch(() => {});
                    } else if (video) {
                        video.removeAttribute('disablePictureInPicture');
                        video.requestPictureInPicture().then(() => {
                            video.play().catch(() => {});
                        }).catch(() => showMsg(i18n.pipFailed, video));
                    }
                } catch (e) {
                    showMsg(i18n.pipFailed, video);
                }
                wakeUpUI(root, video);
            });
            uiLayer.appendChild(pipBtn);
        }

        const lBtn = document.createElement('div'); lBtn.className = 'gt-btn-base gt-lock-btn';
        bindTap(lBtn, () => { if(!video.gtState)return; video.gtState.isScreenLocked = !video.gtState.isScreenLocked; if(video.gtState.isScreenLocked){ const r=video.getBoundingClientRect(); const clk=new MouseEvent('click', {bubbles:true, cancelable:true, clientX:r.left+r.width/2, clientY:r.top+r.height/2}); video.dispatchEvent(clk); } wakeUpUI(root, video); }); uiLayer.appendChild(lBtn);
        const mBtn = document.createElement('div'); mBtn.className = 'gt-btn-base gt-mode-btn';
        bindTap(mBtn, () => { if(!video.gtState)return; video.gtState.pinchMode = video.gtState.pinchMode==='speed'?'zoom':'speed'; wakeUpUI(root, video); showMsg(video.gtState.pinchMode==='speed'? i18n.twoFingerSpeed : i18n.twoFingerPan, video); }); uiLayer.appendChild(mBtn);
        const rstBtn = document.createElement('div'); rstBtn.className = 'gt-btn-base gt-reset-speed-btn'; rstBtn.innerHTML = TT(`<span>1.0x</span>`);
        bindTap(rstBtn, () => { video.playbackRate = 1.0; showMsg(i18n.resetSpeed, video); wakeUpUI(root, video); }); uiLayer.appendChild(rstBtn);
        const zoomRstBtn = document.createElement('div'); zoomRstBtn.className = 'gt-btn-base gt-reset-zoom-btn'; zoomRstBtn.innerHTML = TT(SVG_RESET_ZOOM);
        bindTap(zoomRstBtn, () => { if(!video.gtState)return; video.gtState.scale = 1.0; video.gtState.panX = 0; video.gtState.panY = 0; if (video.parentNode && video.parentNode.dataset.gtOverflow) { video.parentNode.style.overflow = video.parentNode.dataset.gtOverflow; } if (video) video.style.transform = `translate(0px, 0px) scale(1)`; showMsg(i18n.resetZoom, video); wakeUpUI(root, video); }); uiLayer.appendChild(zoomRstBtn);
        
        const tglL = document.createElement('div'); tglL.className = 'gt-btn-base gt-toggle-btn gt-toggle-l hidden-by-state'; makeToggleDraggable(tglL, 'l'); uiLayer.appendChild(tglL);
        const tglR = document.createElement('div'); tglR.className = 'gt-btn-base gt-toggle-btn gt-toggle-r hidden-by-state'; makeToggleDraggable(tglR, 'r'); uiLayer.appendChild(tglR);

        if (root.shadowRoot) {
            root.shadowRoot.appendChild(uiLayer);
        } else {
            const style = window.getComputedStyle(root);
            if (style.position === 'static' && nativeVideoEl !== video) root.style.position = 'relative';
            root.appendChild(uiLayer);
        }
        return uiLayer;
    };

    const checkAndBuildUI = (root, video) => {
        if (!video.gtState) {
            video.gtState = { isScreenLocked: false, pinchMode: 'speed', scale: 1.0, panX: 0, panY: 0, looseKey: null, abLoop: { state: 0, a: -1, b: -1 }, expL: false, expR: false };
        }
        if (!video.gtState.abLoop) {
            video.gtState.abLoop = { state: 0, a: -1, b: -1 };
        }
        if (root && root.classList) root.classList.add('gt-player-root');

        const container = root.shadowRoot || root;
        
        Array.from(container.children).forEach(child => {
            if (child.classList && child.classList.contains('gt-ui-layer') && child !== video.gtUI) {
                child.remove();
            }
        });

        if (video.gtUI) {
            if (video.gtUI.parentNode !== container) {
                container.appendChild(video.gtUI);
                if (typeof applyFixedScale === 'function') {
                    applyFixedScale(root, video, video.gtUI, nativeVideoEl === video);
                }
            }
        } else {
            video.gtUI = buildUI(root, video);
        }
        
        return video.gtUI;
    };

    const initAmbient = (v) => {
        if (isPreviewVideo(v) || v.dataset.gtIsPreview === 'true') return;

        const isYouTube = v.parentNode && v.parentNode.classList && v.parentNode.classList.contains('html5-video-container');
        const phWrapper = v.closest ? v.closest('.mgp_videoWrapper') : null;
        const isPH = !!phWrapper;
        const targetParent = isYouTube ? v.gtRoot : (isPH ? phWrapper : v.parentNode);
        
        if (v.gtAmbient) {
            if (targetParent && v.gtAmbient.parentNode !== targetParent) {
                if (isYouTube || isPH) {
                    targetParent.insertBefore(v.gtAmbient, targetParent.firstChild);
                } else {
                    targetParent.insertBefore(v.gtAmbient, v);
                }
            }
            return;
        }
        
        const CFG_AMB = { blur: 26, opacity: 0.60, saturate: 1.2, brightness: 0.9, spread: 1.02 };
        
        if (!document.getElementById('gt-ambient-structural-css')) {
            const style = document.createElement('style');
            style.id = 'gt-ambient-structural-css';
            style.textContent = `
                html.gt-ambient-active video, 
                html.gt-ambient-active #movie_player,
                html.gt-ambient-active .html5-video-player,
                html.gt-ambient-active .html5-video-container,
                html.gt-ambient-active .plyr__video-wrapper, 
                html.gt-ambient-active .plyr__poster,
                html.gt-ambient-active .video-bg-pic,
                html.gt-ambient-active .dplayer-video-wrap,
                html.gt-ambient-active .vjs-tech,
                html.gt-ambient-active .xgplayer-video-wrap,
                html.gt-ambient-active .mgp_videoWrapper,
                html.gt-ambient-active .mgp_videoElement {
                    background: transparent !important;
                    background-color: transparent !important;
                }
                html.gt-ambient-active .mgp_videoWrapper {
                    overflow: visible !important;
                }
                .mgp_screenshot { display: none !important; opacity: 0 !important; pointer-events: none !important; }
            `;
            document.documentElement.appendChild(style);
        }

        if (!targetParent) return;

        const cvs = document.createElement('canvas');
        cvs.className = 'gt-ambient-canvas';
        
        const zIndexVal = (isYouTube || isPH) ? '0' : '-1';
        cvs.style.cssText = `position:absolute !important; top:0 !important; left:0 !important; width:100% !important; height:100% !important; pointer-events:none !important; filter:blur(${CFG_AMB.blur}px) saturate(${CFG_AMB.saturate}) brightness(${CFG_AMB.brightness}) !important; opacity:0; transition:opacity 0.5s; z-index:${zIndexVal} !important; margin:0 !important; padding:0 !important; border:none !important; max-width:none !important; max-height:none !important; box-sizing:border-box !important;`;
        
        if (isYouTube || isPH) {
            targetParent.insertBefore(cvs, targetParent.firstChild);
        } else {
            const pStyle = window.getComputedStyle(targetParent);
            if (pStyle.position === 'static') {
                targetParent.style.setProperty('position', 'relative', 'important');
            }
            targetParent.insertBefore(cvs, v);
        }
        
        v.gtAmbient = cvs;
        v.gtAmbientCtx = cvs.getContext('2d', { alpha: false, willReadFrequently: false });
        
        let lastDrawTime = 0;
        const draw = (now) => {
            if (isPreviewVideo(v)) {
                cvs.remove();
                v.gtAmbientLoop = null;
                return;
            }

            if (!document.contains(v) || !getSiteAmbient() || v.paused || v.ended || !v.videoWidth || !v.videoHeight) {
                cvs.style.opacity = '0';
                document.documentElement.classList.remove('gt-ambient-active');
                v.gtAmbientLoop = null;
                return;
            }
            
            document.documentElement.classList.add('gt-ambient-active');
            v.gtAmbientLoop = requestAnimationFrame(draw);
            
            if (now - lastDrawTime < 33) return;
            lastDrawTime = now;
            
            if (v.style.transform) {
                cvs.style.transform = v.style.transform;
            } else {
                cvs.style.transform = 'none';
            }

            const vRect = v.getBoundingClientRect();
            if (vRect.width === 0 || vRect.height === 0) return;

            cvs.style.opacity = CFG_AMB.opacity.toString();
            
            const S = 4;
            cvs.width = Math.max(1, vRect.width / S);
            cvs.height = Math.max(1, vRect.height / S);

            const ctx = v.gtAmbientCtx;
            try { 
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, cvs.width, cvs.height);
                
                const spread = CFG_AMB.spread;
                const drawW = cvs.width * spread;
                const drawH = cvs.height * spread;
                const drawX = (cvs.width - drawW) / 2;
                const drawY = (cvs.height - drawH) / 2;

                ctx.drawImage(v, drawX, drawY, drawW, drawH); 
            } catch(e) {}
        };
        
        v.addEventListener('play', () => { if(getSiteAmbient() && !v.gtAmbientLoop) requestAnimationFrame(draw); });
        v.addEventListener('pause', () => { cvs.style.opacity = '0'; });
        v.addEventListener('seeked', () => { if(!v.paused && getSiteAmbient() && !v.gtAmbientLoop) requestAnimationFrame(draw); });
    };

    const initVideoCore = (video) => {
        if (video.clientWidth === 0 && video.clientHeight === 0 && video.videoWidth === 0) return;
        
        if (!video || video.dataset.gtCoreInit) return;
        video.dataset.gtCoreInit = 'true';

        // 【按需加载】捕获到播放器组件后，才激活去广告模块
        if (!hasInjectedAdblock) {
            hasInjectedAdblock = true;
            toggleAdBlockStyles(GM_getValue('gt_block_ads', true));
        }

        if (!video.gtState) video.gtState = { isScreenLocked: false, pinchMode: 'speed', scale: 1.0, panX: 0, panY: 0, looseKey: null, abLoop: { state: 0, a: -1, b: -1 }, expL: false, expR: false };
        if (!video.gtState.abLoop) video.gtState.abLoop = { state: 0, a: -1, b: -1 };
        
        if (!video.gtFloatBar) {
            const fBar = document.createElement('div');
            fBar.className = 'gt-float-bar';
            document.body.appendChild(fBar);
            video.gtFloatBar = fBar;
        }

        if (nativeVideoEl === video) {
            video.dataset.gtIsPreview = 'false';
        } else {
            video.dataset.gtIsPreview = isPreviewVideo(video) ? 'true' : 'false';
            const root = getValidPlayerRoot(video);
            if (root) {
                video.gtRoot = root;
                checkAndBuildUI(root, video); 
            }
        }
        
        setTimeout(() => initAmbient(video), 100);

        if (video.dataset.gtIsPreview !== 'true') {
            let savedVol = GM_getValue('gt_volume', null);
            let savedMuted = GM_getValue('gt_is_muted', null);
            if (savedVol !== null && !isNaN(savedVol)) video.volume = savedVol;
            if (savedMuted === false && video.muted) video.muted = false;

            const checkAndRestore = () => {
                if (video.currentTime >= 2) return;
                
                const exactKey = getVideoKey(video, true);
                const looseKey = getVideoKey(video, false);
                const history = GM_getValue('gt_video_history', {});
                let targetT = 0;

                if (history[exactKey] && history[exactKey].t > 3) {
                    targetT = history[exactKey].t;
                } else {
                    let newestTs = 0;
                    for (let k in history) {
                        if (k.startsWith(looseKey) && history[k].ts > newestTs) {
                            newestTs = history[k].ts;
                            targetT = history[k].t;
                        }
                    }
                }

                if (targetT > 3) {
                    let hasToasted = false;
                    const formatTime = (t) => {
                        let h = Math.floor(t / 3600).toString().padStart(2, '0');
                        let m = Math.floor((t % 3600) / 60).toString().padStart(2, '0');
                        let s = Math.floor(t % 60).toString().padStart(2, '0');
                        return h !== '00' ? `${h}:${m}:${s}` : `${m}:${s}`;
                    };

                    const doRestore = () => {
                        applyFixedScale(video.gtRoot, video, video.gtUI, nativeVideoEl === video);
                        if (Math.abs(video.currentTime - targetT) > 2) {
                            video.currentTime = targetT;
                        }
                        if (!hasToasted) {
                            hasToasted = true;
                            showMsg(`${i18n.resumedTo} ${formatTime(targetT)}`, video);
                        }
                    };

                    if (video.currentTime < 2) doRestore();
                    
                    let defenseTicks = 0;
                    const defenseInterval = setInterval(() => {
                        if (video.currentTime < 2) doRestore();
                        defenseTicks++;
                        if (defenseTicks > 20) clearInterval(defenseInterval); 
                    }, 250);

                    const clearDefense = () => {
                        if (video.currentTime > 2 && video.currentTime >= targetT - 2) {
                            video.removeEventListener('timeupdate', clearDefense);
                        }
                    };
                    video.addEventListener('timeupdate', clearDefense);
                }
            };

            if (GM_getValue('gt_resume_playback', true)) {
                if (video.readyState >= 1) checkAndRestore();
                video.addEventListener('loadedmetadata', () => {
                    if (video.gtState) video.gtState.looseKey = null; 
                    applyFixedScale(video.gtRoot, video, video.gtUI, nativeVideoEl === video);
                    checkAndRestore();
                });
            }

            video.addEventListener('emptied', () => {
                if (video.currentTime > 2) saveProgress(video);
                if (video.gtState) video.gtState.looseKey = null; 
            });

            // 暂停时立即保存进度
            video.addEventListener('pause', () => {
                if (video.currentTime > 2 && !video.ended) saveProgress(video);
            });
            // 即将播完时也存一次（方便标记已看完）
            video.addEventListener('ended', () => {
                if (video.duration > 10) {
                    const key = getVideoKey(video, true);
                    let history = GM_getValue('gt_video_history', {});
                    // 看完后清除断点，下次从头（或由片头跳过接管）
                    if (history[key]) {
                        delete history[key];
                        GM_setValue('gt_video_history', history);
                    }
                }
            });

            const restoreVol = () => {
                let savedVol = GM_getValue('gt_volume', null);
                let savedMuted = GM_getValue('gt_is_muted', null);
                if (savedVol !== null && !isNaN(savedVol)) video.volume = savedVol;
                if (savedMuted === false && video.muted) video.muted = false;
                video.removeEventListener('play', restoreVol);
                video.removeEventListener('touchstart', restoreVol, {capture: true});
            };
            video.addEventListener('play', restoreVol);
            video.addEventListener('touchstart', restoreVol, {capture: true, passive: true});
        }

        const updateBufferVisual = () => {
            if (video.gtUI && video.duration > 0 && video.buffered && video.buffered.length > 0) {
                const bufBar = video.gtUI.querySelector('.gt-mini-progress .gt-buffer');
                if (bufBar) {
                    let maxBuf = 0;
                    for (let i = 0; i < video.buffered.length; i++) {
                        if (video.buffered.start(i) <= video.currentTime && video.buffered.end(i) > maxBuf) {
                            maxBuf = video.buffered.end(i);
                        }
                    }
                    if (maxBuf === 0) maxBuf = video.buffered.end(video.buffered.length - 1);
                    bufBar.style.width = `${(maxBuf / video.duration) * 100}%`;
                }
            }
        };

        video.addEventListener('progress', updateBufferVisual);

        let lastSaveTime = 0;
        video.addEventListener('timeupdate', () => {
            if (video.gtState && video.gtState.abLoop && video.gtState.abLoop.state === 2) {
                if (video.currentTime >= video.gtState.abLoop.b || video.currentTime < video.gtState.abLoop.a) {
                    video.currentTime = video.gtState.abLoop.a;
                }
            }

            // 同名剧集自动跳过片头/片尾
            tryAutoSkip(video);

            if (video.dataset.gtIsPreview !== 'true' && Math.abs(video.currentTime - lastSaveTime) > 5) {
                saveProgress(video);
                lastSaveTime = video.currentTime;
            }
            if (video.gtUI && video.duration) {
                const fill = video.gtUI.querySelector('.gt-mini-progress .gt-fill');
                if (fill) fill.style.width = `${(video.currentTime / video.duration) * 100}%`;

                const markerA = video.gtUI.querySelector('.gt-mini-progress .gt-ab-marker-a');
                const markerB = video.gtUI.querySelector('.gt-mini-progress .gt-ab-marker-b');
                if (markerA && markerB && video.gtState && video.gtState.abLoop) {
                    const s = video.gtState.abLoop;
                    if (s.state === 1) {
                        markerA.style.display = 'block';
                        markerA.style.left = `${(s.a / video.duration) * 100}%`;
                        markerB.style.display = 'none';
                    } else if (s.state === 2 || s.state === 3) { 
                        markerA.style.display = 'block';
                        markerA.style.left = `${(s.a / video.duration) * 100}%`;
                        markerB.style.display = 'block';
                        markerB.style.left = `${(s.b / video.duration) * 100}%`;
                    } else {
                        markerA.style.display = 'none';
                        markerB.style.display = 'none';
                    }
                }
            }

            updateBufferVisual();

            const cL = GM_getValue('gt_col_l', 0);
            const cR = GM_getValue('gt_col_r', 0);
            if (cL >= 4 || cR >= 4) {
                updateToggleText(video);
            }
        });

        video.addEventListener('pause', () => { if (Date.now() < enforceStateUntil && enforceTarget === 'playing') video.play().catch(()=>{}); });
        video.addEventListener('play', () => {
            if (Date.now() < enforceStateUntil && enforceTarget === 'paused') video.pause();
            // 开播时尝试跳过片头
            setTimeout(() => tryAutoSkip(video), 400);
        });
        // 换集后重置跳过标记
        video.addEventListener('loadedmetadata', () => {
            delete video.dataset.gtIntroSkipped;
            delete video.dataset.gtOutroSkipped;
            setTimeout(() => tryAutoSkip(video), 600);
        });
    };

    if (nativeVideoEl) {
        nativeVideoEl.dataset.gtIsNaked = 'false';
        nativeVideoEl.gtRoot = document.body;
        document.body.style.setProperty('touch-action', 'var(--gt-touch-action, none)', 'important');
        nativeVideoEl.style.setProperty('touch-action', 'var(--gt-touch-action, none)', 'important');
        nativeVideoEl.style.setProperty('overscroll-behavior', 'none', 'important');

        let uiLayer = buildUI(document.body, nativeVideoEl);
        nativeVideoEl.gtUI = uiLayer;
        initVideoCore(nativeVideoEl);
    } else {
        const scanAndInitCore = () => {
            const vids = document.getElementsByTagName('video');
            if (vids.length > 0) {
                let needsInit = false;
                for (let i = 0; i < vids.length; i++) {
                    if (!vids[i].dataset.gtCoreInit) {
                        needsInit = true;
                        break; 
                    }
                }
                if (needsInit) {
                    Array.from(vids).forEach(initVideoCore);
                }
            }
        };
        
        setInterval(scanAndInitCore, 1500);
        
        ['play', 'loadedmetadata'].forEach(evt => {
            document.addEventListener(evt, (e) => {
                if (e.target && e.target.tagName === 'VIDEO') initVideoCore(e.target);
            }, { capture: true, passive: true });
        });
        
        scanAndInitCore();
    }

    const setupPlayer = (video) => {
        if (!video) return false;

        if (isPreviewVideo(video)) {
            video.dataset.gtIsPreview = 'true';
            video.dataset.gtSetupDone = 'true';
            return false;
        }
        video.dataset.gtIsPreview = 'false';

        let root = getValidPlayerRoot(video);
        if (!root || root === document.body || root === document.documentElement) return false; 
        
        video.style.setProperty('touch-action', 'var(--gt-touch-action, none)', 'important');
        video.style.setProperty('overscroll-behavior', 'none', 'important');
        video.style.setProperty('transition', 'none', 'important');
        video.style.setProperty('will-change', 'transform', 'important');
        
        const isNaked = isNakedForumVideo(video);
        video.dataset.gtIsNaked = isNaked ? 'true' : 'false';

        if (isNaked && video.parentNode && !video.parentNode.classList.contains('gt-video-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'gt-video-wrapper';
            
            const cStyle = window.getComputedStyle(video);
            wrapper.style.position = 'relative';
            wrapper.style.display = (cStyle.display === 'inline' || cStyle.display === 'inline-block') ? 'inline-block' : 'block';
            
            let w = video.style.width || video.getAttribute('width') || cStyle.width;
            let h = video.style.height || video.getAttribute('height') || cStyle.height;
            wrapper.style.width = (!w || w === 'auto' || w === '0px') ? '100%' : w;
            wrapper.style.height = (!h || h === 'auto' || h === '0px') ? '100%' : h;
            wrapper.style.margin = cStyle.margin;
            
            wrapper.style.setProperty('touch-action', 'var(--gt-touch-action, none)', 'important');
            wrapper.style.setProperty('overscroll-behavior', 'none', 'important');
            wrapper.style.background = '#000';
            
            video.parentNode.insertBefore(wrapper, video);
            wrapper.appendChild(video);
            
            video.style.margin = '0';
            video.style.width = '100%';
            video.style.height = '100%';
            if (!video.style.objectFit) video.style.objectFit = 'contain';
            
            root = wrapper;
            video.setAttribute('controlslist', 'nofullscreen');
        }

        if (!isNaked) {
            root.style.setProperty('touch-action', 'var(--gt-touch-action, none)', 'important');
            root.style.setProperty('overscroll-behavior', 'none', 'important');
        }

        if (!video.dataset.gtSetupDone || video.gtRoot !== root) {
            video.dataset.gtSetupDone = 'true';
            video.gtRoot = root; 
            initVideoCore(video); 
        }

        checkAndBuildUI(root, video);
        return true;
    };

    const handleAccumulatedSeek = (dir, uiLayer, video) => {
        activeSeekSide = dir; const stepVal = seekMode === 'sec' ? seekSec : (1 / fpsMode); seekAccumulator += stepVal;
        
        if (video) {
            video.currentTime = dir === 'left' ? Math.max(0, video.currentTime - stepVal) : Math.min(video.duration || 0, video.currentTime + stepVal);
        }
        
        let t = uiLayer.querySelector('.gt-seek-msg');
        if (!t) { 
            t = document.createElement('div'); uiLayer.appendChild(t); 
        }
        t.className = `gt-seek-msg ${dir}`;
        
        let textNode = t.querySelector('.gt-seek-text'); 
        
        if (!textNode || t.dataset.dir !== dir) {
            t.dataset.dir = dir;
            t.innerHTML = TT(dir === 'left' 
                ? `<div class="gt-arrows"><span>‹</span><span class="gt-arrow-slide-l">‹</span></div><span class="gt-seek-text gt-pop-anim">-${seekMode==='sec'?seekAccumulator:Math.round(seekAccumulator*fpsMode)}${seekMode==='sec'?'':i18n.frameUnit}</span>` 
                : `<span class="gt-seek-text gt-pop-anim">+${seekMode==='sec'?seekAccumulator:Math.round(seekAccumulator*fpsMode)}${seekMode==='sec'?'':i18n.frameUnit}</span><div class="gt-arrows"><span class="gt-arrow-slide-r">›</span><span>›</span></div>`);
            textNode = t.querySelector('.gt-seek-text');
        } else {
            textNode.classList.remove('gt-pop-anim');
            void textNode.offsetWidth; 
            textNode.classList.add('gt-pop-anim');
            textNode.innerText = (dir === 'left' ? '-' : '+') + (seekMode === 'sec' ? seekAccumulator : Math.round(seekAccumulator * fpsMode)) + (seekMode === 'sec' ? '' : i18n.frameUnit);
        }

        t.classList.add('show'); clearTimeout(seekSessionTimer);
        
        seekSessionTimer = setTimeout(() => { 
            t.classList.remove('show'); 
            activeSeekSide = null; 
            seekAccumulator = 0; 
            setTimeout(() => { if (t && t.parentNode && !t.classList.contains('show')) t.innerHTML = ''; }, 200); 
        }, 800); 
    };

    const getPinchData = (touches) => {
        const dx = touches[0].clientX - touches[1].clientX, dy = touches[0].clientY - touches[1].clientY;
        return { dist: Math.hypot(dx, dy), cx: (touches[0].clientX + touches[1].clientX) / 2, cy: (touches[0].clientY + touches[1].clientY) / 2 };
    };

    const onStart = (e) => {
        const isEx = isExcludedZone(e);
        // 【修复1】：如果触摸点在悬浮窗等排除区域内(!isEx)，才允许清空 UI 显示状态
        if (!getFS() && !isEx) { document.querySelectorAll('.plyr--fullscreen-active, .jw-flag-fullscreen, .gt-fullscreen-active, .gt-ui-visible').forEach(el => { el.classList.remove('plyr--fullscreen-active', 'jw-flag-fullscreen', 'gt-fullscreen-active', 'gt-ui-visible'); el.style.cssText = ''; }); }
        
        const isFS = !!getFS() || (targetP && targetP.classList.contains('gt-fullscreen-active'));

        if (isFS && !isEx && e.touches && e.touches.length > 0) {
            const ty = e.touches[0].clientY;
            if (ty < 50 || ty > window.innerHeight - 50) return;
        }
        
        if (nativeVideoEl) {
            targetV = nativeVideoEl;
            targetP = document.body;
        } else {
            let hit = identify(e); if (!hit || !hit.video) return;
            targetV = hit.video;
            if (targetV.gtState && targetV.gtState.isScreenLocked && !isEx) {
                if (isFS || (targetP && (e.composedPath().includes(targetP) || targetP.contains(e.target)))) {
                    if (e.cancelable) e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                    if (targetP && targetV) wakeUpUI(targetP, targetV); lastTapTime = Date.now(); return;
                }
            }
            if (isEx) { clearTimeout(lpTimer); return; }
            setupPlayer(targetV);
            targetP = targetV.gtRoot; 
        }

        if (!targetV || !targetP) return;
        if (!targetV.gtState) targetV.gtState = { isScreenLocked: false, pinchMode: 'speed', scale: 1.0, panX: 0, panY: 0, looseKey: null, abLoop: { state: 0, a: -1, b: -1 }, expL: false, expR: false };

        if (targetV.gtState.isScreenLocked && !isEx) {
            if (isFS || (targetP && (e.composedPath().includes(targetP) || targetP.contains(e.target)))) {
                if (e.cancelable) e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                if (targetP && targetV) wakeUpUI(targetP, targetV); lastTapTime = Date.now(); return;
            }
        }
        
        let uiLayer = targetV.gtUI || (targetP.shadowRoot ? targetP.shadowRoot.querySelector('.gt-ui-layer') : targetP.querySelector('.gt-ui-layer'));
        if (!uiLayer) return;

        clearTimeout(lpTimer); 
        const now = Date.now();
        const actGes = getActiveGestures();

        const isRapid = (now - lastTapTime < 350);
        if (!isRapid) {
            tapCount = 1;
            wasPlayingBeforeSequence = targetV ? !targetV.paused : false;
            wakeUpUI(targetP, targetV);
        } else {
            tapCount++;
        }
        lastTapTime = now;

        if (e.touches && e.touches.length > 1) {
            if (e.cancelable) e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
            tapCount = 0;
            enforceTarget = wasPlayingBeforeSequence ? 'playing' : 'paused'; enforceStateUntil = now + 800;
            if (enforceTarget === 'playing' && targetV.paused) targetV.play().catch(()=>{});
            else if (enforceTarget === 'paused' && !targetV.paused) targetV.pause();
        }

        if (tapCount >= 2) {
            blockGestureUntil = now + 500; 
            if (e.cancelable) e.preventDefault(); 
            e.stopPropagation(); e.stopImmediatePropagation();
            
            const rRect = targetP.getBoundingClientRect();
            const rClientX = (e.touches ? e.touches[0].clientX : e.clientX);
            const rWidth = rRect.width || window.innerWidth;
            const rLeft = rRect.width ? rRect.left : 0;
            const r = (rClientX - rLeft) / rWidth;
            
            if (r < 0.3) { if(actGes.dblSeek) handleAccumulatedSeek('left', uiLayer, targetV); }
            else if (r > 0.7) { if(actGes.dblSeek) handleAccumulatedSeek('right', uiLayer, targetV); }
            else if (tapCount === 2 && targetV.dataset.gtIsPreview !== 'true') {
                if(actGes.dblFs) toggleNativeFullscreen(targetP, targetV);
            }

            if (r < 0.3 || r > 0.7) {
                enforceTarget = wasPlayingBeforeSequence ? 'playing' : 'paused'; enforceStateUntil = now + 800;
                if (enforceTarget === 'playing' && targetV.paused) targetV.play().catch(()=>{});
                else if (enforceTarget === 'paused' && !targetV.paused) targetV.pause();
            } else {
                const expectedState = wasPlayingBeforeSequence;
                const safeRestore = () => {
                    if (targetV) {
                        if (expectedState && targetV.paused) targetV.play().catch(()=>{});
                        else if (!expectedState && !targetV.paused) targetV.pause();
                    }
                }
                setTimeout(safeRestore, 150);
                setTimeout(safeRestore, 400);
            }

            isTouch = false;
            if (getFS()) hideUI(targetV); 
            return; 
        }

        isTouch = true; action = null; startX = e.touches[0].clientX; startY = e.touches[0].clientY;
        
        initVol = targetV.muted ? 0 : targetV.volume;
        if (GM_getValue('gt_vol_boost', false) && targetV.gtGainNode && targetV.gtGainNode.gain.value > 1.0) {
            initVol = targetV.gtGainNode.gain.value;
        }
        
        initTime = targetV.currentTime; initRate = targetV.playbackRate;
        virtualTime = null;

        const bMatch = targetV.style.filter ? targetV.style.filter.match(/brightness\(([\d.]+)\)/) : null;
        initBri = bMatch ? parseFloat(bMatch[1]) : 1.0;

        if (e.touches.length === 2) {
            if (actGes.pinch) {
                const p = getPinchData(e.touches); initPinchDist = p.dist; initCenterX = p.cx; initCenterY = p.cy;
                initScale = targetV.gtState.scale; initPanX = targetV.gtState.panX; initPanY = targetV.gtState.panY; initSpeed = targetV.playbackRate;
                const rect = targetV.getBoundingClientRect(); originDx = initCenterX - (rect.left + rect.width/2 - initPanX); originDy = initCenterY - (rect.top + rect.height/2 - initPanY);
                action = 'pinch'; if (getFS()) hideUI(targetV);
            }
        } else if (e.touches.length === 1 && targetV.gtState.scale === 1.0) {
            if (actGes.long) {
                lpTimer = setTimeout(() => { 
                    if (isTouch && targetV && (!action || action === 'rate')) { 
                        action = 'rate'; targetV.playbackRate = Math.max(0.1, initRate + CFG.rateBase - 1.0); 
                        showMsg(`${targetV.playbackRate.toFixed(1)}x`, targetV); if (getFS()) hideUI(targetV); 
                    } 
                }, CFG.longPress);
            }
        }
    };

    const onMove = (e) => {
        if (!targetV || !targetV.gtState) return;
        const vState = targetV.gtState;

        if (vState.isScreenLocked) {
            if (!isExcludedZone(e) && (!!getFS() || (targetP && (e.composedPath().includes(targetP) || targetP.contains(e.target))))) {
                if (e.cancelable) e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
            } return;
        }

        if (!isTouch) return;

        if (e.touches && e.touches.length > 1) clearTimeout(lpTimer);
        
        if (action === 'pinch' || action === 'rate' || action === 'seek' || action === 'vol' || action === 'bri') {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation(); e.stopImmediatePropagation();
        }

        if (action === 'pinch' && e.touches.length === 2) {
            const p = getPinchData(e.touches);
            if (vState.pinchMode === 'zoom') {
                vState.scale = Math.max(1.0, Math.min(CFG.maxScale, initScale * (p.dist/initPinchDist)));
                if (vState.scale > 1.0) { const ds = vState.scale/initScale; vState.panX = (p.cx-initCenterX)+initPanX*ds+originDx*(1-ds); vState.panY = (p.cy-initCenterY)+initPanY*ds+originDy*(1-ds); }
                else { vState.panX = 0; vState.panY = 0; } applyTransform(targetV);
            } else {
                let s = initSpeed + ((p.dist-initPinchDist) * 0.005);
                let finalSpeed = s;
                if (finalSpeed > 0.95 && finalSpeed < 1.05) finalSpeed = 1.0;
                finalSpeed = Math.max(0.1, Math.min(5.0, finalSpeed));
                setRateThrottled(targetV, finalSpeed); 
                showMsg(finalSpeed === 1.0 ? '1.0x' : `${finalSpeed.toFixed(2)}x`, targetV);
            } return;
        }

        if (action === 'pinch' || action === 'pinch_wait') return; 

        const dx = e.touches[0].clientX - startX, dy = startY - e.touches[0].clientY;

        if (action === 'rate') { targetV.playbackRate = Math.max(0.1, Math.min(initRate + 5.0, initRate + (CFG.rateBase + dx * CFG.senseRate) - 1.0)); showMsg(`${targetV.playbackRate.toFixed(1)}x`, targetV); return; }
        
        const actGes = getActiveGestures();

        if (!action) { 
            if (Math.abs(dx) > CFG.minDist || Math.abs(dy) > CFG.minDist) { 
                clearTimeout(lpTimer); 
                
                const isVert = Math.abs(dy) > Math.abs(dx);
                const isFS = !!getFS() || (targetP && targetP.classList.contains('gt-fullscreen-active'));
                
                const xMode = getSiteXMode();
                const allowX = (xMode === 3) || (xMode === 1 && !isFS) || (xMode === 2 && isFS);
                
                if (isVert && allowX) {
                    action = 'scroll';
                } else {
                    let detAct = 'seek';
                    if (isVert) detAct = (startX < innerWidth/2) ? 'bri' : 'vol';
                    
                    if (detAct === 'seek' && !actGes.swpSeek) return;
                    if (detAct === 'vol' && !actGes.swpVol) return;
                    if (detAct === 'bri' && !actGes.swpBri) return;

                    action = detAct; 
                    enforceTarget = wasPlayingBeforeSequence ? 'playing' : 'paused'; 
                    enforceStateUntil = Date.now() + 800;
                    if (enforceTarget === 'playing' && targetV.paused) targetV.play().catch(()=>{});
                    else if (enforceTarget === 'paused' && !targetV.paused) targetV.pause();
                    
                    if (isFS) hideUI(targetV);
                }
            } else {
                if (e.cancelable && targetV.dataset.gtIsNaked === 'true') {
                    e.preventDefault();
                }
                return; 
            }
        }

        const now = Date.now();
        const canUpdateVisual = (now - lastThrottledTime > 32);

        if (action === 'seek') { 
            virtualTime = Math.max(0, Math.min(targetV.duration||0, initTime + dx * CFG.senseX)); 
            if (canUpdateVisual) {
                const formatTime = (t) => { let h = Math.floor(t / 3600).toString().padStart(2, '0'); let m = Math.floor((t % 3600) / 60).toString().padStart(2, '0'); let s = Math.floor(t % 60).toString().padStart(2, '0'); return h !== '00' ? `${h}:${m}:${s}` : `${m}:${s}`; };
                showMsg(`${formatTime(virtualTime)}`, targetV); 
                
                if (targetV.gtUI && targetV.duration > 0) {
                    const sm = targetV.gtUI.querySelector('.gt-seek-marker');
                    if (sm) { sm.style.opacity = '1'; sm.style.left = `${(virtualTime / targetV.duration) * 100}%`; }
                }
                
                lastThrottledTime = now;
            }
        }
        else if (action === 'vol') { 
            if (canUpdateVisual) {
                let boostActive = GM_getValue('gt_vol_boost', false);
                let sense = boostActive ? CFG.senseY * 0.5 : CFG.senseY; 
                let totalVol = initVol + dy/innerHeight * 2 * sense;
                
                const safeZero = 0.001;
                
                if (boostActive) {
                    totalVol = Math.max(safeZero, Math.min(2.0, totalVol));
                    if (totalVol > safeZero && targetV.muted) targetV.muted = false;

                    if (totalVol <= 1.0) {
                        targetV.volume = totalVol;
                        if (targetV.gtGainNode) targetV.gtGainNode.gain.value = 1.0;
                    } else {
                        targetV.volume = 1.0;
                        try {
                            if (!targetV.gtAudioInit) {
                                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                                if (AudioContextClass) {
                                    let audioCtx = new AudioContextClass();
                                    let source = audioCtx.createMediaElementSource(targetV);
                                    let gainNode = audioCtx.createGain();
                                    source.connect(gainNode);
                                    gainNode.connect(audioCtx.destination);
                                    targetV.gtAudioCtx = audioCtx;
                                    targetV.gtGainNode = gainNode;
                                    targetV.gtAudioInit = true;
                                }
                            }
                            if (targetV.gtGainNode) {
                                targetV.gtGainNode.gain.value = totalVol;
                            }
                        } catch (err) {
                            totalVol = 1.0;
                            targetV.volume = 1.0;
                            showMsg(i18n.boostFailed, targetV);
                        }
                    }
                    showMsg(`Vol: ${totalVol === safeZero ? 0 : Math.round(totalVol*100)}%`, targetV); 
                } else {
                    targetV.volume = Math.max(safeZero, Math.min(1, totalVol)); 
                    if (targetV.volume > safeZero && targetV.muted) targetV.muted = false;
                    showMsg(`Vol: ${targetV.volume === safeZero ? 0 : Math.round(targetV.volume*100)}%`, targetV); 
                }
                lastThrottledTime = now;
            }
        }
        else if (action === 'bri') { 
            if (canUpdateVisual) {
                let b = Math.max(0.1, Math.min(1.3, initBri + dy/innerHeight * 2 * CFG.senseY)); 
                
                if (b <= 1.0) {
                    targetV.style.filter = `brightness(${b})`;
                } else {
                    let c = 1.0 - ((b - 1.0) * 0.3); 
                    targetV.style.filter = `brightness(${b}) contrast(${c})`;
                }
                
                showMsg(`Bri: ${Math.round(b*100)}%`, targetV); 
                lastThrottledTime = now;
            }
        }
    };

    const onEnd = (e) => {
        const now = Date.now();
        const isEx = isExcludedZone(e);
        
        if (now < blockGestureUntil && !isEx) {
            e.stopPropagation(); e.stopImmediatePropagation();
            if (e.cancelable) e.preventDefault();
            isTouch = false;
            return;
        }

        if (targetV && targetV.gtState && targetV.gtState.isScreenLocked) {
            if (!isEx && (!!getFS() || (targetP && (e.composedPath().includes(targetP) || targetP.contains(e.target))))) { e.stopPropagation(); e.stopImmediatePropagation(); }
            isTouch = false; return;
        }
        if (!isTouch) return;
        if (e.touches.length > 0) { if (action === 'pinch') action = 'pinch_wait'; return; }
        
        if (pendingRate !== null && targetV) { targetV.playbackRate = pendingRate; pendingRate = null; }

        if (action === 'seek' && virtualTime !== null && targetV) {
            targetV.currentTime = virtualTime;
            virtualTime = null;
            if (targetV.gtUI) {
                const sm = targetV.gtUI.querySelector('.gt-seek-marker');
                if (sm) sm.style.opacity = '0';
            }
        }

        clearTimeout(lpTimer); 
        if (action === 'rate' && targetV) { targetV.playbackRate = initRate; showMsg('', targetV); wakeUpUI(targetP, targetV); }
        if ((action === 'pinch' || action === 'pinch_wait' || action === 'pan') && targetV) { wakeUpUI(targetP, targetV); }
        
        if (!action) { 
            if (!activeSeekSide) wakeUpUI(targetP, targetV); 
            if (tapCount >= 2) blockGestureUntil = now + 500;
        } else if (action === 'scroll') {
        } else { 
            blockGestureUntil = now + 500; 
        }

        isTouch = false; targetV = null; action = null;
    };

    const pOpt = { passive: false, capture: true }; 
    document.addEventListener('touchstart', onStart, pOpt); document.addEventListener('touchmove', onMove, pOpt); document.addEventListener('touchend', onEnd, pOpt); document.addEventListener('touchcancel', onEnd, pOpt);
    
    ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'click', 'dblclick'].forEach(evt => {
        document.addEventListener(evt, (e) => {
            const isEx = isExcludedZone(e);

            if (evt === 'pointermove' && isTouch && action) {
                if (action !== 'scroll') {
                    if (e.cancelable) e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
                return;
            }

            if (evt === 'dblclick' && !isEx && (nativeVideoEl || identify(e))) {
                e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                return;
            }

            if (Date.now() < blockGestureUntil) {
                if (!isEx) { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); }
            } else if (evt === 'click') {
                const isL = targetV && targetV.gtState && targetV.gtState.isScreenLocked && !isEx && ((!!getFS()) || (targetP && (e.composedPath().includes(targetP) || targetP.contains(e.target))));
                if (activeSeekSide || isL) { e.stopPropagation(); e.stopImmediatePropagation(); e.preventDefault(); if (isL && targetP && targetV) wakeUpUI(targetP, targetV); }
            }
        }, { capture: true, passive: false });
    });

})();
