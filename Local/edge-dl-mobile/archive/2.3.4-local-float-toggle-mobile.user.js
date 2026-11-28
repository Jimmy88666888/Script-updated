// ==UserScript==
// @name         EdgeDL
// @namespace    local.edge-userscripts/edge-dl
// @version      2.3.4-local-float-toggle
// @description  璁?Android Edge 鏀寔璋冪敤澶栭儴涓嬭浇鍣ㄦ帴绠′笅杞戒换鍔★紙鏍囬/鍥剧墖/VLC/YTDLnis + 鏁忔劅椤垫帓闄?+ 澶嶅埗閾炬帴锛? 鍥剧墖鎮诞涓嬭浇銆傛湰鍦颁慨澶嶇増锛氬彲寮€鍏虫偓娴寜閽紝閬垮厤鍖呰９鎼滅储缁撴灉/favicon绛夊皬鍥炬爣
// @icon         https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/edge-dl-mobile/icon.svg
// @author       Jackson Smith
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @license      Apache-2.0
// @run-at       document-start
// @supportURL   https://github.com/Jimmy88666888/Script-updated/issues
// @early-start
// @updateURL    https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/edge-dl-mobile/edge-dl-mobile.user.js
// @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/edge-dl-mobile/edge-dl-mobile.user.js
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

/* ==== 鏈湴鍖栧唴宓屼緷璧栵紙寮€濮嬶級 ==== */
/* 涓嬭浇鍣ㄥ浘鏍囷細鍘?@resource 鎸囧悜鍘熶綔鑰呬粨搴擄紝鐜版敼涓哄唴宓?data URI锛岄浂澶栭儴璇锋眰 */
const INLINE_ICONS = {
    icon_idm: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDUuOSA4OC4yYzAgMS4yLS43IDIuMS0xLjkgMi4zLTEzLjIgMi45LTIyLjUgMTQuOC0yMiAyOCAuMyA3LjQgMy44IDE0LjQgOS4zIDE5LjQgNS44IDUuMiAxMi44IDcgMjAuNCA2LjkgMTAtLjEgMjAuMiAwIDMwLjQgMGg1OC4zYzguNyAwIDE2LjEtMi4zIDIyLjEtOC44IDUuNC01LjggOC40LTE0IDcuMy0yMS45LTEuNC0xMC41LTkuNS0xOS42LTIwLjQtMjIuNi0xLjItLjMtMS45LTEuNS0xLjctMi41LjYtNC41IDEuMi0xNC4yLTQuNS0yMy45LTguMy0xNC0yMi43LTE2LjktMjUtMTcuMy0xMi45LTIuMy0yMi42IDMtMjUgNC4zLTkuNCA1LjUtMTMuOCAxMy41LTE1LjcgMTgtLjUgMS40LTIuMSAxLjktMy40IDEuMi01LjQtMy4zLTEyLjEtMy43LTE3LjctMS4yLTYuNiAzLTEwLjggMTAuMy0xMC41IDE4LjF6bTU1LjgtNy43djI5LjNMMTE0IDk3LjVsLTEyLjMgMTIuMy0xMi4zLTEyLjNtLTUuMiAyNy43aDM1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48L3N2Zz4=',
    icon_idm_plus: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIgMTkyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDQuNyAxMDAuM2MwIDEuMS0uNyAyLTEuOCAyLjItMTIuNSAyLjctMjEuNCAxNC4xLTIwLjkgMjYuNi4zIDcgMy42IDEzLjcgOC44IDE4LjQgNS41IDQuOSAxMi4xIDYuNiAxOS40IDYuNSA5LjUtLjEgMTkuMiAwIDI4LjggMGg1NS4zYzguMiAwIDE1LjMtMi4yIDIxLTguMyA1LjEtNS41IDcuOS0xMy4zIDYuOS0yMC44LTEuMy05LjktOS0xOC42LTE5LjQtMjEuNS0xLjEtLjMtMS44LTEuNC0xLjYtMi40LjYtNC4zIDEuMS0xMy41LTQuMy0yMi43LTcuOC0xMy4zLTIxLjYtMTYuMS0yMy43LTE2LjUtMTIuMi0yLjEtMjEuNCAyLjktMjMuNiA0LjItOC45IDUuMi0xMy4xIDEyLjgtMTQuOSAxNy4xLS41IDEuMy0yIDEuOC0zLjIgMS4xLTUuMS0zLjEtMTEuNC0zLjUtMTYuOC0xLjEtNi4zIDMtMTAuMyA5LjktMTAgMTcuMnpNMTU0LjkgMzh2MzAuMW0tMTUtMTVIMTcwTTk3LjYgOTN2MjcuOWwxMS44LTExLjctMTEuOCAxMS43TDg2IDEwOS4ybS00LjQgMjYuM2gzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwIi8+PC9zdmc+',
    icon_adm: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjxwb2x5bGluZSBjbGFzcz0iYSIgcG9pbnRzPSIyOS4zNCAzMy4wNCAzNC41OSAzOS43NSA0My41IDI4LjM3IDM4LjI2IDI4LjM3IDM4LjI2IDE3LjIxIDMwLjkyIDE3LjIxIDMwLjkyIDIzLjg0Ii8+PHBvbHlsaW5lIGNsYXNzPSJhIiBwb2ludHM9IjE4Ljk1IDIxLjU1IDE3LjA4IDIxLjU1IDE3LjA4IDEwLjM5IDkuNzQgMTAuMzkgOS43NCAyMS41NSA0LjUgMjEuNTUgMTMuNDEgMzIuOTMgMTYuMDggMjkuNTIiLz48cG9seWdvbiBjbGFzcz0iYSIgcG9pbnRzPSIyOS4yMiAyMy44NCAyOS4yMiA4LjI1IDE4Ljk1IDguMjUgMTguOTUgMjMuODQgMTEuNjMgMjMuODQgMjQuMDkgMzkuNzUgMzYuNTQgMjMuODQgMjkuMjIgMjMuODQiLz48L3N2Zz4=',
    icon_abdm: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAyMjggMjI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjcuNzI4IDQuMjM3MDRDMTI3LjcyOCAxLjg5Njk5IDEyNS45MiAwIDEyMy42OSAwSDEwNC4zMUMxMDIuMDggMCAxMDAuMjcyIDEuODk2OTkgMTAwLjI3MiA0LjIzNzA0Vjg0Ljc0MDhDMTAwLjI3MiA4Ny4wODA4IDk4LjQ2NDMgODguOTc3OCA5Ni4yMzQ0IDg4Ljk3NzhIODkuNTQ0OEM4Ni4yNjA3IDg4Ljk3NzggODQuMzUwMyA5Mi44NzMyIDg2LjI1OTIgOTUuNjc3NkwxMTAuNzE0IDEzMS42MDZDMTEyLjMyNSAxMzMuOTcxIDExNS42NzUgMTMzLjk3MSAxMTcuMjg2IDEzMS42MDZMMTQxLjc0MSA5NS42Nzc2QzE0My42NSA5Mi44NzMyIDE0MS43MzkgODguOTc3OCAxMzguNDU1IDg4Ljk3NzhIMTMxLjc2NkMxMjkuNTM2IDg4Ljk3NzggMTI3LjcyOCA4Ny4wODA4IDEyNy43MjggODQuNzQwOFY0LjIzNzA0Wk04LjY3NzY5IDE1Ny42MjZDMi45NDg2OSAxNDMuNzk1IDAgMTI4Ljk3MSAwIDExNEgzNC4yMDYzQzQ2LjU2ODQgMTE0IDU2LjE5OCAxMjQuMzkyIDYwLjkyODcgMTM1LjgxM0M2My43OTMyIDE0Mi43MjggNjcuOTkxOSAxNDkuMDEyIDczLjI4NDcgMTU0LjMwNUM3OC41Nzc4IDE1OS41OTggODQuODYxNSAxNjMuNzk3IDkxLjc3NyAxNjYuNjYxQzk4LjY5MjYgMTY5LjUyNiAxMDYuMTA1IDE3MSAxMTMuNTkgMTcxQzEyMS4wNzUgMTcxIDEyOC40ODcgMTY5LjUyNiAxMzUuNDAzIDE2Ni42NjFDMTQyLjMxOCAxNjMuNzk3IDE0OC42MDIgMTU5LjU5OCAxNTMuODk1IDE1NC4zMDVDMTU5LjE4OCAxNDkuMDEyIDE2My4zODcgMTQyLjcyOCAxNjYuMjUxIDEzNS44MTNDMTcwLjk4MiAxMjQuMzkyIDE4MC42MTEgMTE0IDE5Mi45NzQgMTE0SDIyOEMyMjggMTI4Ljk3MSAyMjUuMDUxIDE0My43OTUgMjE5LjMyMiAxNTcuNjI2QzIxMy41OTMgMTcxLjQ1NyAyMDUuMTk2IDE4NC4wMjQgMTk0LjYxIDE5NC42MUMxODQuMDI0IDIwNS4xOTYgMTcxLjQ1NyAyMTMuNTkzIDE1Ny42MjYgMjE5LjMyMkMxNDMuNzk1IDIyNS4wNTEgMTI4Ljk3MSAyMjggMTE0IDIyOEM5OS4wMjk0IDIyOCA4NC4yMDUzIDIyNS4wNTEgNzAuMzc0MiAyMTkuMzIyQzU2LjU0MzEgMjEzLjU5MyA0My45NzU2IDIwNS4xOTYgMzMuMzg5OCAxOTQuNjFDMjIuODA0IDE4NC4wMjQgMTQuNDA2OCAxNzEuNDU3IDguNjc3NjkgMTU3LjYyNlpNNTUuOTE2MSAyNC43NTM3QzUyLjg0OTkgMjcuMjIyNSA1Mi4zMjU5IDMxLjc1OTkgNTQuNzQ1OSAzNC44ODgyQzU3LjE2NTggMzguMDE2NSA2MS42MTMzIDM4LjU1MSA2NC42Nzk2IDM2LjA4MjJMNzUuMDg5NSAyNy43MDAzQzc4LjE1NTggMjUuMjMxNCA3OC42Nzk3IDIwLjY5NCA3Ni4yNTk4IDE3LjU2NThDNzMuODM5OCAxNC40Mzc1IDY5LjM5MjQgMTMuOTAyOSA2Ni4zMjYxIDE2LjM3MThMNTUuOTE2MSAyNC43NTM3Wk0xNzMuMjI0IDI0Ljc1MzdDMTc2LjI5IDI3LjIyMjUgMTc2LjgxNCAzMS43NTk5IDE3NC4zOTQgMzQuODg4MkMxNzEuOTc0IDM4LjAxNjUgMTY3LjUyNyAzOC41NTEgMTY0LjQ2IDM2LjA4MjJMMTU0LjA1IDI3LjcwMDNDMTUwLjk4NCAyNS4yMzE0IDE1MC40NiAyMC42OTQgMTUyLjg4IDE3LjU2NThDMTU1LjMgMTQuNDM3NSAxNTkuNzQ4IDEzLjkwMjkgMTYyLjgxNCAxNi4zNzE4TDE3My4yMjQgMjQuNzUzN1pNMjEuNTgwMSA4My44NTVDMTcuOTQ2MyA4Mi4zOTMxIDE2LjE2MiA3OC4yMDI2IDE3LjU5NSA3NC40OTUzTDIyLjQ1OTcgNjEuOTA4OUMyMy44OTI2IDU4LjIwMTYgMjguMDAwMSA1Ni4zODEzIDMxLjYzMzkgNTcuODQzMkMzNS4yNjc4IDU5LjMwNTEgMzcuMDUyIDYzLjQ5NTYgMzUuNjE5MSA2Ny4yMDI5TDMwLjc1NDMgNzkuNzg5M0MyOS4zMjE0IDgzLjQ5NjYgMjUuMjE0IDg1LjMxNjkgMjEuNTgwMSA4My44NTVaTTIxMS41NDUgNzQuNDk1M0MyMTIuOTc4IDc4LjIwMjYgMjExLjE5NCA4Mi4zOTMxIDIwNy41NiA4My44NTVDMjAzLjkyNiA4NS4zMTY5IDE5OS44MTkgODMuNDk2NiAxOTguMzg2IDc5Ljc4OTNMMTkzLjUyMSA2Ny4yMDI5QzE5Mi4wODggNjMuNDk1NiAxOTMuODcyIDU5LjMwNTEgMTk3LjUwNiA1Ny44NDMyQzIwMS4xNCA1Ni4zODEzIDIwNS4yNDcgNTguMjAxNiAyMDYuNjggNjEuOTA4OUwyMTEuNTQ1IDc0LjQ5NTNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOV84OCkiLz4KICAgIDxwYXRoIGQ9Ik0xOTQuNjEgMTk0LjYxQzE3My4yMzEgMjE1Ljk4OSAxNDQuMjM0IDIyOCAxMTQgMjI4QzgzLjc2NTEgMjI4IDU0Ljc2ODggMjE1Ljk4OSAzMy4zODk2IDE5NC42MUM0NS40MDI1IDE4Mi41OTcgNjQuODMzNiAxODMuMjgzIDgwLjM3NDYgMTkwLjE0NUM5MC44NjggMTk0Ljc3OSAxMDIuMzA3IDE5Ny4yMzkgMTE0IDE5Ny4yMzlDMTI1LjY5MyAxOTcuMjM5IDEzNy4xMzIgMTk0Ljc3OSAxNDcuNjI1IDE5MC4xNDVDMTYzLjE2NiAxODMuMjgzIDE4Mi41OTcgMTgyLjU5NyAxOTQuNjEgMTk0LjYxWiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4yNSIvPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzlfODgiIHgxPSIyMzcuNzkyIiB5MT0iMTA5LjMxNSIgeDI9Ii03Ljk4NjA2IiB5Mj0iMTA5LjMxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQzYzMUZGIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzREQzRGRSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=',
    icon_fdm: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjIxOCAxOTIgMTEwMSAxMTU1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iSWNvbiI+CiAgPHBhdGggZD0iTSA4ODYgMjQwIEwgODQ4IDIyNCBMIDgxOCAyMTcgTCA4MDIgMjE2IEwgMjQyIDIxNyBMIDI0MiA4MDYgTCAyNDYgODQwIEwgMjUzIDg2MyBMIDI2NiA4OTIgTCAyOTcgOTQwIEwgMzQ1IDk5NCBMIDQxNSAxMDYxIEwgNDE4IDEwNjEgTCA0MTggMTA1OSBMIDQwMCAxMDMzIEwgMzg2IDEwMDMgTCAzNzQgOTU5IEwgMzc0IDM1NSBMIDM3NiAzNTMgTCA5MzkgMzU0IEwgOTY4IDM2MSBMIDEwMDMgMzc3IEwgMTAzOCAzOTkgTCAxMDc4IDQzMSBMIDEwNjggNDE3IEwgMTAwMSAzNDEgTCA5NTMgMjkxIEwgOTE1IDI1OSBaIiBmaWxsPSIjMDk0NTU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBkPSJNIDM3OCAzNTkgTCAzNzggOTUwIEwgMzgyIDk4MSBMIDM4NSA5ODQgTCAzOTIgMTAwNyBMIDQwMSAxMDIxIEwgNDAxIDEwMjUgTCA0MDQgMTAyNyBMIDQwNSAxMDMyIEwgNDE3IDEwNTEgTCA0MjAgMTA1MiBMIDQyNCAxMDYxIEwgNDMwIDEwNjcgTCA0MzAgMTA3MCBMIDQzNiAxMDc3IEwgNDM2IDEwODIgTCA0NDggMTA5NyBMIDUwMSAxMTUxIEwgNTc2IDEyMjAgTCA1ODAgMTIyMSBMIDU4MCAxMjE4IEwgNTY3IDExOTcgTCA1NjcgMTE5MiBMIDU2NCAxMTkwIEwgNTU4IDExNzUgTCA1NTggMTE2OSBMIDU1NSAxMTY3IEwgNTUxIDExNDUgTCA1NDggMTE0MCBMIDU0OCAxMTI2IEwgNTQ1IDExMTkgTCA1NDUgOTg5IEwgNTQ5IDk4NCBMIDgzMCA5ODMgTCA4MzMgOTg2IEwgODMzIDExMDggTCA4MzYgMTEwOCBMIDkwNiAxMDY1IEwgOTQ1IDEwNDQgTCA5NjcgMTAyOCBMIDEwMjUgOTk2IEwgMTAzOCA5ODYgTCAxMDQxIDk4NiBMIDEwNDUgOTgxIEwgMTA1MCA5ODEgTCAxMDUyIDk3OCBMIDEwOTYgOTUyIEwgMTEwMSA5NTEgTCAxMTA3IDk0NSBMIDExMTAgOTQ1IEwgMTExMiA5NDIgTCAxMTk1IDg5NCBMIDExOTUgODkxIEwgMTE4OSA4ODkgTCAxMTc1IDg3OCBMIDExNjMgODcxIEwgMTE1NyA4NzEgTCAxMTU2IDg2NiBMIDExMzUgODU1IEwgMTA5NSA4MjcgTCAxMDkxIDgyNyBMIDEwNzQgODE0IEwgMTA1NyA4MDYgTCAxMDUzIDgwMSBMIDEwMTUgNzc5IEwgMTAwOSA3NzMgTCAxMDA0IDc3MiBMIDk2NyA3NDcgTCA5NTkgNzQ0IEwgOTU4IDc0MSBMIDk1MyA3NDAgTCA5MzMgNzI1IEwgODc2IDY5MSBMIDgzNiA2NjQgTCA4MzMgNjY0IEwgODMzIDc5NyBMIDgzMSA3OTkgTCA1NTIgODAwIEwgNTQ2IDc5NyBMIDU0NSA1NDEgTCA1NTAgNTM1IEwgMTEwOSA1MzYgTCAxMTU3IDU0OCBMIDExNTkgNTUxIEwgMTE3OSA1NTggTCAxMjE1IDU4MSBMIDExOTEgNTUwIEwgMTEyOSA0ODAgTCAxMTA2IDQ1OSBMIDExMDEgNDU5IEwgMTA5NiA0NTUgTCAxMDk1IDQ1MiBMIDEwNTEgNDE0IEwgMTA0OCA0MTQgTCAxMDE1IDM4OSBMIDk5OCAzNzkgTCA5ODYgMzc2IEwgOTgyIDM3MiBMIDk3MCAzNjkgTCA5NjcgMzY2IEwgOTQ5IDM2MyBMIDk0NSAzNjAgWiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZD0iTSA1NTEgNTQwIEwgNTUxIDc5NCBMIDgyNiA3OTUgTCA4MjkgNzkzIEwgODI5IDY2MiBMIDgzMSA2NTkgTCA4MzUgNjU5IEwgOTIzIDcxNiBMIDk1OCA3MzYgTCAxMDAzIDc2NyBMIDEwMTYgNzczIEwgMTIwMiA4OTEgTCAxMTk4IDg5NyBMIDExMDUgOTUxIEwgMTA0MSA5OTEgTCAxMDA5IDEwMDggTCA5ODQgMTAyNSBMIDkxMiAxMDY2IEwgOTA1IDEwNzIgTCA4NTYgMTEwMSBMIDg0OCAxMTA0IEwgODM0IDExMTQgTCA4MjkgMTExMCBMIDgyOSA5OTAgTCA4MjcgOTg4IEwgNTUxIDk4OCBMIDU1MCAxMTE3IEwgNTUzIDExMjYgTCA1NTMgMTEzOSBMIDU3MCAxMTk1IEwgNTc5IDEyMTEgTCA2MDQgMTI0NiBMIDYwNSAxMjUxIEwgNjMyIDEyNzcgTCA2NjMgMTI5OCBMIDY4OCAxMzA5IEwgNzA2IDEzMTUgTCA3MTIgMTMxNSBMIDcxNyAxMzE4IEwgNzI3IDEzMTggTCA3MzIgMTMyMSBMIDc1MSAxMzIxIEwgNzU3IDEzMjMgTCAxMjk0IDEzMjIgTCAxMjk1IDc1NSBMIDEyOTIgNzQyIEwgMTI5MiA3MjYgTCAxMjg5IDcyMSBMIDEyODkgNzEyIEwgMTI4NSA3MDUgTCAxMjgyIDY4OSBMIDEyNzAgNjU5IEwgMTI0NyA2MTYgTCAxMjI4IDU5OCBMIDExOTIgNTcwIEwgMTE1NiA1NTMgTCAxMTQyIDU1MCBMIDExMzcgNTQ3IEwgMTEzMSA1NDcgTCAxMTI2IDU0NCBMIDExMTYgNTQ0IEwgMTExMCA1NDEgTCAxMDkxIDU0MSBMIDEwODIgNTM5IFoiIGZpbGw9IiMwRkNDRTciIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=',
    icon_edge: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCAyNzYwMCAyNzYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZWFyR3JhZGllbnQgaWQ9IkEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+PGxpbmVhckdyYWRpZW50IGlkPSJCIiB4MT0iNjg3MCIgeDI9IjI0NzA0IiB5MT0iMTg3MDUiIHkyPSIxODcwNSIgaHJlZj0iI0EiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzBjNTlhNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzExNGE4YiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJDIiB4MT0iMTYyNzIiIHgyPSI1MTMzIiB5MT0iMTA5NjgiIHkyPSIyMzEwMiIgaHJlZj0iI0EiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFiOWRlMiIvPjxzdG9wIG9mZnNldD0iLjE2IiBzdG9wLWNvbG9yPSIjMTU5NWRmIi8+PHN0b3Agb2Zmc2V0PSIuNjciIHN0b3AtY29sb3I9IiMwNjgwZDciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDc4ZDQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iRCIgY3g9IjE2NzIwIiBjeT0iMTg3NDciIHI9Ijk1MzgiIGhyZWY9IiNBIj48c3RvcCBvZmZzZXQ9Ii43MiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIuOTUiIHN0b3Atb3BhY2l0eT0iLjUzIi8+PHN0b3Agb2Zmc2V0PSIxIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9IkUiIGN4PSI3MTMwIiBjeT0iMTk4NjYiIHI9IjE0MzI0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4xNDg0MyAtLjk4ODkyIC43OTY4OCAuMTE5NiAtODc1OSAyNTU0MikiIGhyZWY9IiNBIj48c3RvcCBvZmZzZXQ9Ii43NiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIuOTUiIHN0b3Atb3BhY2l0eT0iLjUiLz48c3RvcCBvZmZzZXQ9IjEiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iRiIgY3g9IjI1MjMiIGN5PSI0NjgwIiByPSIyMDI0MyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtLjAzNzE1IC45OTkzMSAtMi4xMjgzNiAtLjA3OTEzIDEzNTc5IDM1MzApIiBocmVmPSIjQSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzVjMWYxIi8+PHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiMzNGMxZWQiLz48c3RvcCBvZmZzZXQ9Ii4yMyIgc3RvcC1jb2xvcj0iIzJmYzJkZiIvPjxzdG9wIG9mZnNldD0iLjMxIiBzdG9wLWNvbG9yPSIjMmJjM2QyIi8+PHN0b3Agb2Zmc2V0PSIuNjciIHN0b3AtY29sb3I9IiMzNmM3NTIiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iRyIgY3g9IjI0MjQ3IiBjeT0iNzc1OCIgcj0iOTczNCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMjgxMDkgLjk1OTY4IC0uNzgzNTMgLjIyOTQ5IDI0NTEwIC0xNjI5MikiIGhyZWY9IiNBIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2NmViNmUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NmViNmUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggaWQ9IkgiIGQ9Ik0yNDEwNSAyMDA1M2E5MzQ1IDkzNDUgMCAwMS0xMDUzIDQ3MiAxMDIwMiAxMDIwMiAwIDAxLTM1OTAgNjQ2Yy00NzMyIDAtODg1NS0zMjU1LTg4NTUtNzQzMiAwLTExNzUgNjgwLTIxOTMgMTY0My0yNzI5LTQyODAgMTgwLTUzODAgNDY0MC01MzgwIDcyNTMgMCA3Mzg3IDY4MTAgODEzNyA4Mjc2IDgxMzcgNzkxIDAgMTk4NC0yMzAgMjcwNC00NTZsMTMwLTQ0YTEyODM0IDEyODM0IDAgMDA2NjYwLTUyODJjMjIwLTM1MC0xNjgtNzU3LTUzNS01NjV6Ii8+PHBhdGggaWQ9IkkiIGQ9Ik0xMTU3MSAyNTE0MWE3OTEzIDc5MTMgMCAwMS0yMjczLTIxMzcgODE0NSA4MTQ1IDAgMDEtMTUxNC00NzQwIDgwOTMgODA5MyAwIDAxMzA5My02Mzk1IDgwODIgODA4MiAwIDAxMTM3My04NTljMzEyLTE0OCA4NDYtNDE0IDE1NTQtNDA0YTMyMzYgMzIzNiAwIDAxMjU2OSAxMjk3IDMxODQgMzE4NCAwIDAxNjM2IDE4NjZjMC0yMSAyNDQ2LTc5NjAtODAwNS03OTYwLTQzOTAgMC04MDA0IDQxNjYtODAwNCA3ODIwIDAgMjMxOSA1MzggNDE3MCAxMjEyIDU2MDRhMTI4MzMgMTI4MzMgMCAwMDc2ODQgNjc1NyAxMjc5NSAxMjc5NSAwIDAwMzkwOCA2MTBjMTQxNCAwIDI3NzQtMjMzIDQwNDUtNjU2YTc1NzUgNzU3NSAwIDAxLTYyNzgtODAzeiIvPjxwYXRoIGlkPSJKIiBkPSJNMTYyMzEgMTU4ODZjLTgwIDEwNS0zMzAgMjUwLTMzMCA1NjYgMCAyNjAgMTcwIDUxMiA0NzIgNzIzIDE0MzggMTAwMyA0MTQ5IDg2OCA0MTU2IDg2OGE1OTU0IDU5NTQgMCAwMDMwMjctODM5IDYxNDcgNjE0NyAwIDAwMTEzMy04NTAgNjE4MCA2MTgwIDAgMDAxOTEwLTQ0MzdjMjYtMjI0Mi03OTYtMzczMi0xMTMzLTQzOTItMjEyMC00MTQxLTY2OTQtNjUyNS0xMTY2OC02NTI1LTcwMTEgMC0xMjcwMyA1NjM1LTEyNzk4IDEyNjIwIDQ3LTM2NTQgMzY3OS02NjA1IDc5OTYtNjYwNSAzNTAgMCAyMzQ2IDM0IDQyMDAgMTAwNyAxNjM0IDg1OCAyNDkwIDE4OTQgMzA4NiAyOTIxIDYxOCAxMDY3IDcyOCAyNDE1IDcyOCAyOTUycy0yNzEgMTMzMy03ODAgMTk5MHoiLz48dXNlIGZpbGw9InVybCgjQikiIGhyZWY9IiNIIi8+PHVzZSBmaWxsPSJ1cmwoI0QpIiBvcGFjaXR5PSIuMzUiIGhyZWY9IiNIIi8+PHVzZSBmaWxsPSJ1cmwoI0MpIiBocmVmPSIjSSIvPjx1c2UgZmlsbD0idXJsKCNFKSIgb3BhY2l0eT0iLjQiIGhyZWY9IiNJIi8+PHVzZSBmaWxsPSJ1cmwoI0YpIiBocmVmPSIjSiIvPjx1c2UgZmlsbD0idXJsKCNHKSIgaHJlZj0iI0oiLz48L3N2Zz4=',
};
/* ==== 鏈湴鍖栧唴宓屼緷璧栵紙缁撴潫锛?==== */



(function () {
    'use strict';

    const DOWNLOADERS={IDM: 'idm.internet.download.manager',IDM_PLUS: 'idm.internet.download.manager.plus',ADM: 'com.dv.adm',ABDM: 'com.abdownloadmanager',FDM: 'org.freedownloadmanager.fdm',YTDLNIS: 'com.deniscerri.ytdl',};
    // 榛樿涓嬭浇鍣?    const DEFAULT_DOWNLOADER_KEY = 'edgedl-default-downloader';
    // 鎮诞涓嬭浇鎸夐挳寮€鍏筹紙榛樿寮€鍚級
    const FLOAT_BUTTONS_KEY = 'edgedl-float-buttons-enabled';

    // ---------- 鏍囬 / 鏂囦欢鍚嶆彁鍙栵紙瑙ｅ喅 FB / IG / TikTok / X 绛夊梾鎺㈡爣棰樹贡鐮侊級 ----------
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
        // 鍘绘帀甯歌骞冲彴鍚庣紑
        t = t
            .replace(/\s*[|/路鈥\s*(X|Twitter|Facebook|Instagram|TikTok|鎶栭煶|蹇墜|鍝斿摡鍝斿摡|Bilibili|YouTube).*$/i, '')
            .replace(/\s*on\s+(X|Twitter|Facebook|Instagram|TikTok).*$/i, '')
            .replace(/\s*[-鈥撯€擼\s*(X|Twitter|Facebook|Instagram|TikTok).*$/i, '')
            .trim();
        return t;
    }

    function extractMediaTitle() {
        const host = (location.hostname || '').toLowerCase();

        // X / Twitter
        if (host.includes('x.com') || host.includes('twitter.com')) {
            // 鎺ㄦ枃姝ｆ枃浼樺厛
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

        // TikTok / 鎶栭煶
        if (host.includes('tiktok.com') || host.includes('douyin.com')) {
            const og = getMetaContent(['meta[property="og:title"]', 'meta[property="og:description"]', 'meta[name="description"]']);
            if (og) return cleanTitle(og);
            const desc = document.querySelector('[data-e2e="browse-video-desc"]')?.textContent?.trim()
                || document.querySelector('h1')?.textContent?.trim();
            if (desc) return cleanTitle(desc.slice(0, 120));
        }

        // 閫氱敤锛歰g:title > twitter:title > document.title
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
            // 瑙嗛 / 闊抽
            let m = path.match(/\.(m3u8|mp4|webm|mkv|mov|flv|m4v|ts|m4s|mp3|m4a|aac)(?:$|\?)/i);
            if (m) {
                return m[1].toLowerCase() === 'm3u8' ? 'mp4' : m[1].toLowerCase();
            }
            // 鍥剧墖
            m = path.match(/\.(jpe?g|png|gif|webp|bmp|tiff?|heic|avif|svg)(?:$|\?)/i);
            if (m) {
                const e = m[1].toLowerCase();
                return e === 'jpeg' ? 'jpg' : e;
            }
            // 浠?query 閲岀寽锛堝緢澶?CDN 鐢?format=jpg / fm=webp锛?            const u = new URL(url);
            const fmt = (u.searchParams.get('format') || u.searchParams.get('fm') || '').toLowerCase();
            if (/^(jpe?g|png|webp|gif)$/.test(fmt)) return fmt === 'jpeg' ? 'jpg' : fmt;
        } catch {}
        // 榛樿锛歎RL 鐗瑰緛鍋忓悜鍥剧墖鍒欒繑鍥?jpg
        if (/image|photo|pic|img|cdninstagram|twimg|fbcdn|tiktokcdn|pbs\.twimg/i.test(url)) return 'jpg';
        return 'mp4';
    }

    function sanitizeFilename(title, url) {
        let name = (title || '').trim();
        if (!name) {
            // 浠?URL 璺緞鍙栨渶鍚庝竴娈靛綋鍏滃簳
            try {
                const path = new URL(url).pathname;
                const base = path.split('/').filter(Boolean).pop() || '';
                name = decodeURIComponent(base).replace(/\.[a-z0-9]{2,5}$/i, '') || 'media';
            } catch {
                name = 'media';
            }
        }
        // 闈炴硶鏂囦欢鍚嶅瓧绗?        name = name
            .replace(/[\\/:*?"<>|\u0000-\u001F]/g, '_')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 80); // 閬垮厤杩囬暱
        if (!name) name = 'media';
        const ext = guessExtension(url);
        // 宸叉湁鎵╁睍鍚嶅垯涓嶉噸澶嶆坊鍔?        if (!new RegExp('\\.' + ext + '$', 'i').test(name)) {
            name += '.' + ext;
        }
        return name;
    }
    // ---------- 鏍囬鎻愬彇缁撴潫 ----------

    // 鐗堟湰淇℃伅
    function getEdgeDLVersion() {
        return (typeof GM_info !== 'undefined' && GM_info.script?.version)
            ? GM_info.script.version
            : 'dev';
    }

    const FALLBACK_ICON_BASE = '';
    function getIconUrl(name, fallback) {
        return INLINE_ICONS[name] || fallback || '';
    }
    const downloaderIcons = {
        IDM: getIconUrl('icon_idm', `${FALLBACK_ICON_BASE}/idm.svg`),
        IDM_PLUS: getIconUrl('icon_idm_plus', `${FALLBACK_ICON_BASE}/idm-plus.svg`),
        ADM: getIconUrl('icon_adm', `${FALLBACK_ICON_BASE}/adm.svg`),
        ABDM: getIconUrl('icon_abdm', `${FALLBACK_ICON_BASE}/abdm.svg`),
        FDM: getIconUrl('icon_fdm', `${FALLBACK_ICON_BASE}/fdm.svg`),
        // YTDLnis 鏃犲畼鏂硅祫婧愬浘鏍囷紝浣跨敤鍐呭祵 SVG锛堜笅杞界澶?+ 鎾斁鎰燂級
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
        shadow.innerHTML = `<div class="edgedl-bg"></div><div class="edgedl-card"><h3>閫夋嫨涓嬭浇鍣?/h3><div class="edgedl-version-tag">EdgeDL v${getEdgeDLVersion()}</div><div class="edgedl-options"><button data-pkg="${DOWNLOADERS.IDM}"><img src="${downloaderIcons.IDM}" />1DM </button><button data-pkg="${DOWNLOADERS.IDM_PLUS}"><img src="${downloaderIcons.IDM_PLUS}" />1DM+ </button><button data-pkg="${DOWNLOADERS.ADM}"><img src="${downloaderIcons.ADM}" />ADM </button><button data-pkg="${DOWNLOADERS.ABDM}"><img src="${downloaderIcons.ABDM}" />ABDM </button><button data-pkg="${DOWNLOADERS.FDM}"><img src="${downloaderIcons.FDM}" />FDM </button><button data-pkg="${DOWNLOADERS.YTDLNIS}"><img src="${downloaderIcons.YTDLNIS}" />YTDLnis </button><button data-pkg="edge"><img src="${downloaderIcons.EDGE}" />Edge </button></div><label style="margin-top:12px;display:flex;align-items:center;gap:6px;font-size:13px;"><input type="checkbox" id="edgedl-set-default" />璁句负榛樿涓嬭浇鍣?</label></div>`;
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
        // 璇诲彇榛樿涓嬭浇鍣?        const defaultDownloader = await GM_getValue(DEFAULT_DOWNLOADER_KEY, null);
        const defaultCheckbox = shadow.querySelector('#edgedl-set-default');
        if (defaultCheckbox)
            defaultCheckbox.checked = !!defaultDownloader;
        if (defaultDownloader) {
            // 楂樹寒榛樿涓嬭浇鍣ㄦ寜閽?            const defaultBtn = shadow.querySelector(`button[data-pkg="${defaultDownloader}"]`);
            if (defaultBtn)
                defaultBtn.classList.add('selected');
        }
        // 鍙栨秷鍕鹃€夋椂娓呴櫎榛樿涓嬭浇鍣?        defaultCheckbox.addEventListener('change', async () => {
            if (!defaultCheckbox.checked) {
                await GM_deleteValue(DEFAULT_DOWNLOADER_KEY);
                shadow.querySelector('button.selected')?.classList.remove('selected');
            }
        });
        // 鐐瑰嚮鍞よ捣
        shadow.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', async () => {
                const pkg = btn.dataset.pkg || '';
                // 鎸夊綋鍓嶉€夋嫨鏇存柊榛樿涓嬭浇鍣?                if (pkg === 'edge') {
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
        // 鎶婂共鍑€鏂囦欢鍚嶉€氳繃 extra 浼犵粰涓嬭浇鍣紝閬垮厤涓枃鏍囬涔辩爜
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
            // ABDM / FDM 绛変篃灏濊瘯閫氱敤 key
            else {
                intent += `;S.android.intent.extra.TITLE=${encoded}`;
                intent += `;S.filename=${encoded}`;
            }
        }
        // YTDLnis锛氱敤 video/* + BROWSABLE 鍖归厤鍏?Manifest锛汼END 鍦?Edge 涓婂父璇烦 Play 鍟嗗簵
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
        // 娌℃湁澶栭儴浼犲叆鏂囦欢鍚嶆椂锛岀幇鍦哄啀鎻愬彇涓€娆?        const finalName = filename || sanitizeFilename(extractMediaTitle(), url);
        const intentUrl = buildIntentUrl(url, packageName, finalName);
        console.log('[EdgeDL] 鍞よ捣涓嬭浇鍣?, type, '鏂囦欢鍚?', finalName);
        window.location.href = intentUrl;
    }

    // 鐢?VLC 鎵撳紑濯掍綋閾炬帴鎾斁锛堟敮鎸?m3u8 / mp4 绛夋祦锛?    function openInVLC(url) {
        if (!url || typeof url !== 'string') {
            showToast('鏃犳晥鐨勫獟浣撻摼鎺?, { type: 'error' });
            return;
        }
        // VLC Android 瀹樻柟鍖呭悕
        const VLC_PACKAGE = 'org.videolan.vlc';
        try {
            const scheme = url.startsWith('https') ? 'https' : 'http';
            const path = url.replace(/^https?:\/\//, '');
            // 鏂瑰紡1锛氭爣鍑?VIEW Intent锛屾寚瀹?VLC 鍖?            // 鏂瑰紡2锛氶儴鍒嗘満鍨嬪 vlc:// 鍗忚鏀寔鏇村ソ
            const intentUrl =
                `intent://${path}#Intent;` +
                `scheme=${scheme};` +
                `package=${VLC_PACKAGE};` +
                `type=video/*;` +
                `action=android.intent.action.VIEW;` +
                `category=android.intent.category.BROWSABLE;` +
                `S.title=${encodeURIComponent(extractMediaTitle() || 'EdgeDL Stream')};` +
                `end`;
            console.log('[EdgeDL] 鍞よ捣 VLC 鎾斁', url);
            showToast('姝ｅ湪鐢?VLC 鎵撳紑鈥?);
            window.location.href = intentUrl;
        } catch (err) {
            console.warn('[EdgeDL] 鎵撳紑 VLC 澶辫触', err);
            showToast('鎵撳紑 VLC 澶辫触锛岃纭宸插畨瑁?VLC', { type: 'error', duration: 2500 });
        }
    }

    let styleInjected = false;
    let activeToast = null;
    // 娉ㄥ叆鍏ㄥ眬鏍峰紡
    function injectStyle() {
        if (styleInjected)
            return;
        styleInjected = true;
        const style = document.createElement('style');
        style.textContent = `.edgedl-toast{position:fixed;top:64px;right:12px;left:auto;bottom:auto;transform:translateX(20px);z-index:999999;pointer-events:none;font-size:13px;font-weight:500;line-height:1.4;padding:7px 14px;border-radius:10px;white-space:nowrap;opacity:0;transition:opacity .22s ease,transform .22s ease;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}.edgedl-toast[data-theme="light"]{background:#333333;color:#fff;box-shadow:0 4px 10px rgba(0,0,0,.25);}.edgedl-toast[data-theme="dark"]{background:#383838;color:#f5f5f5;border:1px solid rgba(255,255,255,.08);box-shadow:0 6px 16px rgba(0,0,0,.6);}.edgedl-toast.show{opacity:1;transform:translateX(0);}.edgedl-toast[data-type="error"]::before{content:"鈿?;margin-right:6px;color:#f87171;}.edgedl-toast[data-type="info"]::before{content:"鈸?;margin-right:6px;opacity:.8;}`;
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
            console.warn('Toast 鍒涘缓澶辫触', err);
        }
    }

    async function openDownload(url, downloader, filename) {
        const launcherKey = Object.keys(DOWNLOADERS)
            .find((key) => DOWNLOADERS[key] === downloader);
        if (launcherKey) {
            const name = filename || sanitizeFilename(extractMediaTitle(), url);
            showToast(`${launcherKey} 姝ｅ湪鍞よ捣`);
            openDownloader(url, launcherKey, name);
            return;
        }
        showToast('Edge 鍐呯疆涓嬭浇');
        setTimeout(() => {
            window.location.href = url;
        }, 0);
    }

    async function requestDownload(url, filename) {
        if (!url)
            return;
        // 缁熶竴鐢熸垚涓€娆″共鍑€鏂囦欢鍚嶏紝鍚庣画澶嶇敤
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

    // 涓嬭浇鏂囦欢鍚庣紑鍖归厤
    const EXTENSIONS = [
        // 瑙嗛鏍煎紡
        '.mp4', '.mkv', '.avi', '.mov', '.flv', '.wmv', '.webm',
        '.m4v', '.3gp', '.ts', '.mpg', '.mpeg', '.vob', '.mts', '.m2ts',
        '.m3u8',
        // 鍥剧墖鏍煎紡
        '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff',
        '.tif', '.ico', '.heic', '.heif', '.avif', '.jfif', '.raw', '.psd',
        '.eps',
        // 鏂囨湰鏍煎紡
        '.txt', '.log', '.md', '.markdown', '.json', '.xml', '.csv', '.tsv',
        '.rtf', '.yaml', '.yml', '.toml', '.ini', '.conf', '.tex', '.srt',
        '.vtt', '.sub',
        // 缃戦〉璧勬簮鏍煎紡锛堟敞锛?html/.htm 鏄綉椤甸〉闈㈣€岄潪涓嬭浇鏂囦欢锛屼笉鍙備笌鎷︽埅锛屽惁鍒欎細瀵艰嚧鏅€氶摼鎺ユ棤娉曡烦杞級
        '.css', '.scss', '.less', '.sass',
        '.js', '.mjs', '.cjs', '.ts', '.jsx', '.tsx', '.vue',
        '.woff', '.woff2', '.ttf', '.otf', '.eot', '.map',
        // 闊抽鏍煎紡
        '.mp3', '.flac', '.wav', '.ogg', '.m4a', '.aac', '.wma', '.ape',
        '.opus', '.aiff', '.aif', '.au', '.ac3', '.wv', '.mpc', '.amr',
        '.mid', '.midi', '.mka', '.3ga', '.caf',
        // 闊抽鎾斁鍒楄〃/姝岃瘝
        '.m3u', '.pls', '.cue', '.lrc', '.krc',
        // 鏂囨。鏍煎紡
        '.pdf', '.epub', '.mobi', '.azw3', '.djvu',
        '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
        // 鍘嬬缉鍖呮牸寮?        '.zip', '.rar', '.7z', '.tar', '.gz', '.tgz', '.bz2', '.xz',
        '.iso', '.cab', '.jar', '.z',
        // 瀹夎鍖呮牸寮?        '.apk', '.apks', '.xapk', '.apkm', '.ipa', '.obb', '.aab',
        // 鍙墽琛屾枃浠舵牸寮?        '.exe', '.msi', '.bin', '.dat', '.dmg', '.bat', '.sh', '.img',
        // 绉嶅瓙鏂囦欢
        '.torrent',
    ];
    // 涓嬭浇閾炬帴鐗瑰緛鍖归厤
    const KEYWORDS=['/down/', '/download/', '/downloads/', '/dl/', '/fetch/','/files/', '/file/', '/attach/', '/attachment/','/repo/', '/backup/', '/upload/','/releases/download/', '/binary/', '/pkg/',
    // 杞欢鍟嗗簵/瀹㈡埛绔父鐢ㄤ笅杞借矾寰勶紙浠呮敹褰曚笅杞戒笓灞炪€佹櫘閫氬鑸〉鏋佸皯鍑虹幇鐨勭墖娈碉級
    '/setup/', '/installer/', '/patch/', '/getfile', '/apk/',
    // 涓嬭浇瑙﹀彂鍙傛暟
    '?file=', '&file=', '?filename=', '&filename=','download?', '&download=', '?download=',
    '?act=download', '&act=download', '?action=download', '?mode=download', '?down=', '&down=',
    'force_download', 'response-content-disposition=', 'content-disposition=attachment'];
    // 闈炰笅杞介〉闈㈡帓闄よ鍒?    const EXCLUDE_PATHS = /\/(login|reg(ister)?|sign(in|up|out)|logout|account|user|blob|src|tree)(?:[\/?#]|$)/i;

    // ---------- 鏁忔劅椤甸潰鎺掗櫎锛堢櫥褰?/ 鏀粯 / 璐墿 / 閾惰绛夛紝绂佹濯掍綋鍡呮帰锛?----------
    const SENSITIVE_HOST_RE = new RegExp([
        // 鏀粯 / 閲戣瀺
        'paypal\\.com', 'stripe\\.com', 'alipay\\.com', 'alipay\\.net', 'tenpay\\.com',
        'weixin\\.qq\\.com', 'wx\\.tenpay\\.com', 'pay\\.weixin', 'checkout\\.stripe',
        'pay\\.google\\.com', 'payments\\.google', 'apple\\.com/.*pay',
        'unionpay\\.com', 'chinapay\\.com', 'yeepay\\.com', '99bill\\.com',
        // 閾惰
        'icbc\\.com', 'ccb\\.com', 'boc\\.cn', 'abchina\\.com', 'bankcomm\\.com',
        'cmbchina\\.com', 'spdb\\.com', 'citibank', 'hsbc\\.', 'chase\\.com',
        'bankofamerica\\.com', 'wellsfargo\\.com',
        // 鐢靛晢 / 璐墿缁撹处
        'taobao\\.com', 'tmall\\.com', 'jd\\.com', 'amazon\\.(com|cn|co\\.jp|co\\.uk)',
        'tmall\\.hk', 'aliexpress\\.com', 'ebay\\.(com|cn)', 'pinduoduo\\.com',
        'suning\\.com', 'vip\\.com', 'gome\\.com', 'kaola\\.com',
        'shopify\\.com', 'checkout\\.',
        // 璐﹀彿 / 璁よ瘉鐩稿叧澶х珯
        'accounts\\.google\\.com', 'login\\.microsoftonline\\.com', 'login\\.live\\.com',
        'id\\.apple\\.com', 'auth0\\.com', 'okta\\.com', 'sso\\.',
        'passport\\.', 'account\\.', 'signin\\.', 'signup\\.',
        // 鏀垮簻 / 韬唤
        'gov\\.cn', 'irs\\.gov', 'ssa\\.gov',
    ].join('|'), 'i');

    const SENSITIVE_PATH_RE = /\/(login|log-in|signin|sign-in|signup|sign-up|register|regist|logout|signout|auth|oauth|sso|passport|account|accounts|checkout|cart|payment|pay|billing|wallet|secure|verify|password|passwd|reset-password|forgot|2fa|mfa|otp)(?:\/|$|\?|#)/i;

    function isSensitivePage() {
        try {
            const host = (location.hostname || '').toLowerCase();
            const path = (location.pathname || '') + (location.search || '');
            if (SENSITIVE_HOST_RE.test(host)) return true;
            if (SENSITIVE_PATH_RE.test(path)) return true;
            // 鏍囬閲屾槑鏄炬槸鐧诲綍/鏀粯椤?            const title = (document.title || '').toLowerCase();
            if (/鐧诲綍|鐧婚檰|娉ㄥ唽|鏀粯|浠樻|缁撹处|鏀堕摱鍙皘checkout|sign\s*in|log\s*in|payment|password/i.test(title)) {
                // 閬垮厤璇激鍐呭绔欙紝瑕佹眰璺緞涔熸湁鐩稿叧鐗瑰緛鎴?host 杈冪煭
                if (SENSITIVE_PATH_RE.test(path) || path.length < 3) return true;
            }
            return false;
        } catch {
            return false;
        }
    }
    // ---------- 鏁忔劅椤甸潰鎺掗櫎缁撴潫 ----------
    // 涓嬭浇璺宠浆椤靛尮閰?    const REDIRECT_DOWNLOAD_PAGES = [
        // 鑵捐娓告垙
        /\/zlkdatasys\/mct\/(?:d\/[^/?#]+|proj_\d+\/download)\.shtml(?:[?#].*)?$/i,
        // 澶氬杞欢绔欑瓑锛?downm/<id> 褰㈠紡鐨勪笅杞借烦杞摼鎺ワ紙鏈嶅姟绔?302 鍒扮湡瀹炴枃浠讹級
        /\/downm\/\d+(?:[?#].*)?$/i,
        // 璞岃眴鑽氾細/apps/<id>/binding 涓嬭浇缁戝畾椤碉紙鏈嶅姟绔?302 鍒扮湡瀹?apk锛?        /\/apps\/\d+\/binding(?:[?#].*)?$/i,
    ];
    // 涓嬭浇閾炬帴妫€娴?    function isDownloadLink(url) {
        if (url?.includes('sourceforge.net/projects/') && url.includes('/files/'))
            return false;
        if (!url || !url.startsWith('http'))
            return false;
        const lowerUrl = url.toLowerCase();
        // 鎺掗櫎闈炰笅杞介〉闈?& 鏁忔劅璺緞
        if (EXCLUDE_PATHS.test(lowerUrl) || SENSITIVE_PATH_RE.test(lowerUrl))
            return false;
        // 鏁忔劅鍩熷悕涓婄殑閾炬帴涓€寰嬩笉鎺ョ锛堟敮浠?閾惰/鐧诲綍澶х珯锛?        try {
            if (SENSITIVE_HOST_RE.test(new URL(url).hostname))
                return false;
        } catch {}
        // 鎺掗櫎娴佸獟浣撳垎鐗囷紙.m4s/.ts 绛夛級锛岄伩鍏嶈棰戠珯鎾斁鍣ㄨ鎷︽埅
        if (/\.(m4s|ts|m4v)(?:$|[?#])/i.test(lowerUrl) || /[?&](?:byterange|range|segment|sq)=/i.test(lowerUrl))
            return false;
        // 鎺掗櫎绫?Unix 鐩綍璺緞
        if (/\/data\/data\/[^?#]*$/i.test(lowerUrl))
            return false;
        // 涓嬭浇璺宠浆椤靛尮閰?        if (REDIRECT_DOWNLOAD_PAGES.some(pattern => pattern.test(lowerUrl)))
            return true;
        // 鍚庣紑鍖归厤
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
        // 鍏抽敭瀛楀尮閰?        return KEYWORDS.some(kw => lowerUrl.includes(kw));
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
    // 鑾峰彇鎺ョ绔欑偣鍒楄〃
    async function getInterceptSites() {
        const list = await GM_getValue(KEY, []);
        return Array.isArray(list) ? list : [];
    }
    // 淇濆瓨鎺ョ绔欑偣鍒楄〃
    async function setInterceptSites(list) {
        const normalized = list.map((i) => typeof i === 'string' ? i.toLowerCase() : String(i).toLowerCase());
        await GM_setValue(KEY, normalized);
        interceptEnabled = !normalized.includes(getControlledHostname());
        interceptStateReady = true;
        return normalized;
    }
    // 鍒ゆ柇褰撳墠绔欑偣鏄惁宸茶烦杩囨帴绠?    async function isSiteIntercepted() {
        const host = getControlledHostname();
        const list = await getInterceptSites();
        if (list.length === 0)
            return false;
        return list.some(item => item.toLowerCase() === host);
    }
    // 鍒囨崲褰撳墠绔欑偣鎺ョ鐘舵€?    async function toggleSiteIntercept() {
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
    // 鎸傝浇鐐瑰嚮鎷︽埅鍣?    function attachClickInterceptor() {
        document.addEventListener('click', handleClick, true);
    }
    function handleClick(e) {
        lastUserGestureAt = Date.now();
        // @ts-expect-error: 鑷畾涔夊睘鎬ф嫤鎴?        if (e._edgedl_handled)
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
        // 鍛戒腑鎺ョ鎺掗櫎绛栫暐锛氳烦杩?EdgeDL 鎺ョ骞舵彁绀猴紝浜よ繕娴忚鍣ㄩ粯璁よ涓?        if (!interceptEnabled) {
            showToast('宸茶烦杩囨帴绠?, { type: 'info', duration: 1500 });
            return;
        }
        // 闃绘娴忚鍣ㄥ師鐢熶笅杞戒笌椤甸潰璺宠浆
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        void requestDownload(url);
    }
    // 鎺ョ椤甸潰鑴氭湰瑙﹀彂鐨勪笅杞借烦杞?    function attachPageBridgeInterceptor() {
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
        // 鎷︽埅 location.href = xxx 鐩存帴璧嬪€艰Е鍙戠殑涓嬭浇锛堝璞岃眴鑽氱瓑绔欑偣鐢?JS 璧?location.href 璺充笅杞介摼鎺ワ級
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
        // 鎷︽埅閫氳繃闅愯棌 <iframe> 鍔ㄦ€佸敜璧风殑涓嬭浇琛屼负
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

    // ---- 妫€娴嬫湰椤靛唴宓岄煶瑙嗛 + 楂樻竻鍥剧墖 骞惰浆澶栭儴涓嬭浇鍣?----
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
        // 澶勭悊 JS 婧愮爜閲?\/ 杞箟
        let u = raw.replace(/\\\//g, '/');
        if (u.startsWith('//'))
            u = 'https:' + u;
        const normalized = normalizeUrl(u);
        return normalized && isMediaUrl(normalized) ? normalized : '';
    }

    // 鎶婂父瑙?CDN 缂╃暐鍥惧崌绾у埌鍘熷浘 / 澶у浘
    function upgradeImageUrl(url) {
        if (!url) return url;
        try {
            const u = new URL(url);
            const host = u.hostname.toLowerCase();

            // X / Twitter : pbs.twimg.com 鈫?name=orig
            if (host.includes('pbs.twimg.com') || host.includes('twimg.com')) {
                u.searchParams.set('name', 'orig');
                // 鍘绘帀 size 闄愬埗
                u.searchParams.delete('format');
                if (!u.searchParams.has('format')) u.searchParams.set('format', 'jpg');
                return u.href;
            }

            // Instagram CDN
            if (host.includes('cdninstagram.com') || host.includes('fbcdn.net') || host.includes('instagram.')) {
                // 鍘绘帀灏哄闄愬埗鍙傛暟锛屽敖閲忔嬁鍘熷浘
                ['stp', 'se', 'oh', 'oe', 'ig_cache_key'].forEach(k => u.searchParams.delete(k));
                // 甯歌缂╃暐鍥捐矾寰勬浛鎹?                let path = u.pathname
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
                // 灏介噺鍘绘帀灏哄鍚庣紑
                u.pathname = u.pathname.replace(/~\w+\.(jpe?g|png|webp)$/i, '.$1');
                return u.href;
            }

            // Google / 鍏朵粬甯歌
            if (host.includes('googleusercontent.com') || host.includes('ggpht.com')) {
                // 鍘绘帀 =sxxx 灏哄闄愬埗
                u.pathname = u.pathname.replace(/=s\d+(-[a-z]+)?$/i, '=s0');
                return u.href;
            }

            // 閫氱敤锛氬幓鎺夊父瑙佺缉鐣ュ浘鍙傛暟
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

    // 浠庡繀搴斿浘鐗囪鎯呴〉(detailV2)鍦板潃鏍?mediaurl 鍙傛暟瑙ｇ爜鍑哄師濮嬪浘鐗囧湴鍧€
    function extractBingImageUrl() {
        if (!/bing\.com\/images\/search/i.test(location.href))
            return null;
        try {
            const u = new URL(location.href);
            const mediaurl = u.searchParams.get('mediaurl');
            if (!mediaurl)
                return null;
            let decoded = decodeURIComponent(mediaurl);
            // 蹇呭簲鐨?mediaurl 鏄唬鐞嗙缉鐣ュ浘锛岀湡瀹炲師鍥惧父钘忓湪鍏朵腑鐨?riu 鍙傛暟閲岋紙闇€浜屾瑙ｇ爜锛?            try {
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

    // 浠庨〉闈?img / picture / 鑳屾櫙 / meta 鏀堕泦楂樻竻鍥剧墖
    function collectPageImages() {
        const candidates = new Map(); // url -> score

        const scoreAndAdd = (raw, score = 1) => {
            let n = normalizeMediaUrl(raw) || normalizeUrl(String(raw || ''));
            if (!n || !/^https?:/i.test(n)) return;
            // 杩囨护鏄庢樉灏忓浘 / 鍥炬爣 / 琛ㄦ儏
            if (/favicon|emoji|sprite|icon[_-]?|logo[_-]?|avatar.*s\d{2,3}|\/\d+x\d+\//i.test(n) && score < 5) return;
            if (n.length < 20) return;

            n = upgradeImageUrl(n);
            const prev = candidates.get(n) || 0;
            candidates.set(n, Math.max(prev, score));
        };

        try {
            // 0. 蹇呭簲
            const bing = extractBingImageUrl();
            if (bing) scoreAndAdd(bing, 100);

            // 1. og:image / twitter:image锛堥€氬父鏄珮璐ㄩ噺灏侀潰锛?            document.querySelectorAll('meta[property="og:image"], meta[property="og:image:url"], meta[name="twitter:image"], meta[name="twitter:image:src"]').forEach(m => {
                scoreAndAdd(m.getAttribute('content'), 80);
            });

            // 2. <img> 鍙?srcset / data-* 
            document.querySelectorAll('img').forEach((img) => {
                const w = img.naturalWidth || img.width || 0;
                const h = img.naturalHeight || img.height || 0;
                const area = w * h;
                let score = 1;
                if (area > 800 * 800) score = 60;
                else if (area > 400 * 400) score = 30;
                else if (area > 200 * 200) score = 10;

                // 褰撳墠鏄剧ず鐨勫浘
                scoreAndAdd(img.currentSrc || img.src, score);

                // data-src / data-original / data-full 绛夋噿鍔犺浇鍘熷浘
                ['data-src', 'data-original', 'data-full', 'data-fullsize', 'data-lazy-src', 'data-url', 'data-large', 'data-hires'].forEach(attr => {
                    const v = img.getAttribute(attr);
                    if (v) scoreAndAdd(v, score + 20);
                });

                // srcset 鍙栨渶澶х殑
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

            // 4. 骞冲彴鐗规畩閫夋嫨鍣?            const host = location.hostname.toLowerCase();

            // Instagram 涓诲浘
            if (host.includes('instagram.com')) {
                document.querySelectorAll('article img, [role="dialog"] img, img[src*="cdninstagram"]').forEach(img => {
                    scoreAndAdd(img.currentSrc || img.src, 70);
                });
            }

            // X / Twitter 濯掍綋
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

            // 5. performance 閲屽凡缁忓姞杞借繃鐨勫ぇ鍥?            try {
                performance.getEntriesByType('resource').forEach((e) => {
                    if (isImageUrl(e.name) && (e.transferSize || 0) > 30000) {
                        scoreAndAdd(e.name, 25);
                    }
                });
            } catch {}

            // 6. 鑴氭湰閲屽嚭鐜扮殑鍥剧墖 URL
            document.querySelectorAll('script').forEach((s) => {
                const txt = (s.textContent || '').replace(/\\\//g, '/');
                if (txt.length > 1_500_000) return;
                const matches = txt.match(IMAGE_URL_RE) || [];
                matches.forEach(m => scoreAndAdd(m, 15));
            });

        } catch (err) {
            console.warn('[EdgeDL] 鏀堕泦鍥剧墖澶辫触', err);
        }

        // 鎸夊垎鏁版帓搴忥紝杩斿洖楂樿川閲忎紭鍏?        return [...candidates.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([url]) => url);
    }

    // 鎵弿椤甸潰锛屾敹闆嗗彲鎺ョ鐨勮棰?+ 楂樻竻鍥剧墖锛堝幓閲嶏紝瑙嗛浼樺厛锛?    function detectPageMedia() {
        // 鏁忔劅椤甸潰鐩存帴杩斿洖绌猴紝閬垮厤璇梾鎺?        if (isSensitivePage()) {
            console.log('[EdgeDL] 鏁忔劅椤甸潰锛岃烦杩囧獟浣撳梾鎺?);
            return [];
        }
        const urls = new Set();
        const add = (raw) => {
            const n = normalizeMediaUrl(raw);
            if (n) urls.add(n);
        };
        try {
            // 瑙嗛閮ㄥ垎锛堜繚鎸佸師閫昏緫锛?            document.querySelectorAll('video, video source, audio, audio source').forEach((el) => {
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

            // 鍥剧墖閮ㄥ垎锛堟柊澧炲己锛?            const images = collectPageImages();
            images.forEach(u => urls.add(u));
        }
        catch (err) {
            console.warn('[EdgeDL] 妫€娴嬮〉闈㈠獟浣撳け璐?, err);
        }
        return [...urls];
    }

    function registerMenu() {
        if (menuRegistered)
            return;
        if (typeof GM_registerMenuCommand !== 'function')
            return;
        // 鏇存敼榛樿涓嬭浇鍣?        GM_registerMenuCommand('鏇存敼榛樿涓嬭浇鍣?, () => {
            showDownloadPicker(() => { });
        });
        // 鍒囨崲绔欑偣鎺ョ鐘舵€?        GM_registerMenuCommand('鍒囨崲鏈珯鎺ョ鐘舵€?, async () => {
            const added = await toggleSiteIntercept();
            showToast(added ? '宸茬姝㈡帴绠℃湰绔? : '宸插厑璁告帴绠℃湰绔?, { type: 'info', duration: 1500 });
        });
        // 妫€娴嬫湰椤靛獟浣擄紙瑙嗛 + 鍥剧墖锛夊苟鎺ョ涓嬭浇
        GM_registerMenuCommand('妫€娴嬫湰椤靛獟浣撳苟鎺ョ', () => {
            if (isSensitivePage()) {
                showToast('褰撳墠涓烘晱鎰熼〉闈紙鐧诲綍/鏀粯/璐墿绛夛級锛屽凡绂佹濯掍綋鍡呮帰', { type: 'info', duration: 2500 });
                return;
            }
            const found = detectPageMedia();
            if (!found.length) {
                showToast('鏈娴嬪埌鍙帴绠＄殑濯掍綋閾炬帴', { type: 'info', duration: 1500 });
                return;
            }
            // 浼樺厛绾э細m3u8 > mp4 绛夎棰?> 楂樺垎鍥剧墖
            const target = found.find((u) => /\.m3u8/i.test(u))
                || found.find((u) => isVideoUrl(u))
                || found[0];
            const title = extractMediaTitle();
            const filename = sanitizeFilename(title, target);
            const isImg = isImageUrl(target) && !isVideoUrl(target);
            showToast(`妫€娴嬪埌 ${found.length} 涓獟浣撴簮锛屾鍦ㄦ帴绠?{isImg ? '鍥剧墖' : '瑙嗛'}${title ? '锛? + title.slice(0, 18) : ''}`, { type: 'info', duration: 1800 });
            void requestDownload(target, filename);
        });
        // 妫€娴嬫湰椤靛獟浣撳苟鐢?VLC 鎾斁锛堜紭鍏堣棰戞祦锛?        GM_registerMenuCommand('妫€娴嬫湰椤靛獟浣撳苟鐢?VLC 鎾斁', () => {
            if (isSensitivePage()) {
                showToast('褰撳墠涓烘晱鎰熼〉闈紙鐧诲綍/鏀粯/璐墿绛夛級锛屽凡绂佹濯掍綋鍡呮帰', { type: 'info', duration: 2500 });
                return;
            }
            const found = detectPageMedia();
            // 鍙彇瑙嗛绫婚摼鎺ワ紝鍥剧墖浜ょ粰涓嬭浇鍣ㄦ洿鍚堥€?            const videos = found.filter(u => isVideoUrl(u) || /\.m3u8/i.test(u));
            if (!videos.length) {
                // 娌℃湁瑙嗛鏃讹紝鑻ュ彧鏈夊浘鐗囦篃鎻愮ず
                if (found.length) {
                    showToast('鏈〉鍙湁鍥剧墖锛岃鐢ㄣ€屾娴嬫湰椤靛獟浣撳苟鎺ョ銆嶄笅杞?, { type: 'info', duration: 2200 });
                } else {
                    showToast('鏈娴嬪埌鍙挱鏀剧殑瑙嗛閾炬帴', { type: 'info', duration: 1500 });
                }
                return;
            }
            // 浼樺厛 m3u8锛堟祦濯掍綋锛夛紝鍚﹀垯绗竴涓棰?            const target = videos.find(u => /\.m3u8/i.test(u)) || videos[0];
            const title = extractMediaTitle();
            showToast(`姝ｅ湪鐢?VLC 鎾斁${title ? '锛? + title.slice(0, 18) : ''}`, { type: 'info', duration: 1800 });
            openInVLC(target);
        });
        // 鎻愬彇鏈〉閾炬帴骞剁敤 YTDLnis 涓嬭浇锛堥€傚悎 YouTube / Bilibili / TikTok 绛夐〉闈㈢骇閾炬帴锛?        GM_registerMenuCommand('鎻愬彇鏈〉閾炬帴骞剁敤 YTDLnis 涓嬭浇', () => {
            openInYTDLnis(location.href);
        });
        // 澶嶅埗鏈〉 / 妫€娴嬪埌鐨勮棰戦摼鎺ュ埌鍓创鏉?        GM_registerMenuCommand('澶嶅埗瑙嗛閾炬帴', () => {
            copyVideoLink();
        });
        // 鎮诞涓嬭浇鎸夐挳寮€鍏?        GM_registerMenuCommand('鍒囨崲鎮诞涓嬭浇鎸夐挳', async () => {
            const cur = await GM_getValue(FLOAT_BUTTONS_KEY, true);
            const next = !cur;
            await GM_setValue(FLOAT_BUTTONS_KEY, next);
            if (!next) {
                // 绔嬪嵆绉婚櫎椤甸潰涓婂凡瀛樺湪鐨勬偓娴寜閽苟杩樺師琚寘瑁圭殑鍥剧墖
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
                    // 娓呮帀鏍囪锛屾柟渚垮啀娆″紑鍚悗閲嶆柊鎵弿
                    document.querySelectorAll('img[data-edgedl-btn], video[data-edgedl-btn]').forEach(el => {
                        el.dataset.edgedlBtn = '';
                    });
                } catch (e) {
                    console.warn('[EdgeDL] 绉婚櫎鎮诞鎸夐挳澶辫触', e);
                }
                showToast('宸插叧闂偓娴笅杞芥寜閽?, { type: 'info', duration: 1800 });
            } else {
                showToast('宸插紑鍚偓娴笅杞芥寜閽紝璇峰埛鏂伴〉闈㈢敓鏁?, { type: 'info', duration: 2200 });
            }
        });
        menuRegistered = true;
    }

    /**
     * 鍞よ捣 YTDLnis銆?     * 鍖呭悕 com.deniscerri.ytdl 姝ｇ‘锛屼絾 App 涓嶅湪 Play 鍟嗗簵锛?     * 鑻?Intent 鍖归厤澶辫触锛孍dge 浼氳璺冲晢搴椼€傚洜姝わ細
     * - 涓嶅啀鑷姩闈欓粯璺?Intent锛堥伩鍏嶈杩涘晢搴楋級
     * - 浼樺厛绯荤粺鍒嗕韩 / 鍙偣闈㈡澘
     * - Intent 浣跨敤 type=video/* 浠ュ尮閰?YTDLnis 鐨?BROWSABLE VIEW 杩囨护鍣?     */
    function openInYTDLnis(pageUrl) {
        if (!pageUrl || !/^https?:\/\//i.test(pageUrl)) {
            showToast('褰撳墠椤甸潰娌℃湁鏈夋晥閾炬帴', { type: 'error', duration: 1500 });
            return;
        }
        const title = extractMediaTitle() || document.title || '瑙嗛';
        const intents = buildYTDLnisIntents(pageUrl);
        // 涓嶈嚜鍔?launch锛岀洿鎺ュ嚭闈㈡澘锛岄伩鍏嶈璺?Play 鍟嗗簵
        showYTDLnisLaunchPanel(pageUrl, title, intents);
    }

    /** 鐢熸垚灏介噺鑳藉懡涓?ShareActivity 鐨?Intent 鍒楄〃锛堝甫 BROWSABLE + mime锛?*/
    function buildYTDLnisIntents(pageUrl) {
        const PKG = 'com.deniscerri.ytdl';
        const COMP = 'com.deniscerri.ytdl/com.deniscerri.ytdl.receiver.ShareActivity';
        const encoded = encodeURIComponent(pageUrl);
        const scheme = pageUrl.startsWith('https') ? 'https' : 'http';
        const path = pageUrl.replace(/^https?:\/\//, '');
        // YTDLnis Manifest锛歨ttp(s) + video/*|audio/* 甯?BROWSABLE锛屾瘮绾?SEND 鏇村鏄撹娴忚鍣ㄦ斁琛?        return [
            // 鍏抽敭锛歏IEW + video/* + package锛堝尮閰?BROWSABLE 杩囨护鍣紝鍑忓皯璇烦鍟嗗簵锛?            `intent://${path}#Intent;scheme=${scheme};type=video/*;package=${PKG};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;category=android.intent.category.DEFAULT;end`,
            // VIEW + video/* + 鏄惧紡 component
            `intent://${path}#Intent;scheme=${scheme};type=video/*;package=${PKG};component=${COMP};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;category=android.intent.category.DEFAULT;end`,
            // 宸茬煡鍩熷悕锛圷ouTube 绛夛級绾?VIEW
            `intent://${path}#Intent;scheme=${scheme};package=${PKG};action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`,
            // SEND锛堝畼鏂?Tasker 鏂瑰紡锛涢儴鍒嗘祻瑙堝櫒鍙兘鎷掓敹锛?            `intent:#Intent;action=android.intent.action.SEND;type=text/plain;package=${PKG};component=${COMP};S.android.intent.extra.TEXT=${encoded};end`,
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

    /** 椤甸潰涓ぎ闈㈡澘锛氱郴缁熷垎浜紭鍏堬紝Intent 涓哄彲閫夐」锛堥伩鍏嶈嚜鍔ㄨ烦鍟嗗簵锛?*/
    function showYTDLnisLaunchPanel(pageUrl, title, intents) {
        document.getElementById('edgedl-ytdlnis-panel')?.remove();

        const host = document.createElement('div');
        host.id = 'edgedl-ytdlnis-panel';
        host.style.cssText = 'position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.45);font-family:system-ui,sans-serif;';
        const safeTitle = String(title || '').slice(0, 60).replace(/[<>&]/g, '');
        host.innerHTML = `
            <div style="background:#1e1e1e;color:#fff;border-radius:16px;padding:20px 18px;width:min(320px,90vw);box-shadow:0 12px 40px rgba(0,0,0,.5);">
                <div style="font-size:16px;font-weight:600;margin-bottom:6px;">鍙戦€佸埌 YTDLnis</div>
                <div style="font-size:12px;opacity:.75;margin-bottom:14px;word-break:break-all;line-height:1.4;">${safeTitle}${title && title.length > 60 ? '鈥? : ''}</div>
                <div style="font-size:11px;color:#f0c14b;margin-bottom:12px;line-height:1.45;">鎻愮ず锛歒TDLnis 涓嶅湪 Play 鍟嗗簵銆傝嫢鐐广€屽皾璇曟墦寮€銆嶈烦鍒板晢搴楋紝璇锋敼鐢ㄤ笅闈€岀郴缁熷垎浜€嶆垨銆屽鍒堕摼鎺ャ€嶃€?/div>
                <button id="edgedl-ytdlnis-share" type="button" style="display:block;width:100%;background:#1a73e8;color:#fff;border:none;padding:12px;border-radius:10px;font-size:15px;font-weight:600;margin-bottom:10px;">绯荤粺鍒嗕韩 鈫?閫?YTDLnis</button>
                <a id="edgedl-ytdlnis-open" href="${intents[0] || '#'}" style="display:block;text-align:center;background:#333;color:#fff;text-decoration:none;padding:11px;border-radius:10px;font-size:14px;margin-bottom:8px;">灏濊瘯鐩存帴鎵撳紑</a>
                <button id="edgedl-ytdlnis-copy" type="button" style="display:block;width:100%;background:transparent;color:#9ecbff;border:1px solid #444;padding:10px;border-radius:10px;font-size:13px;margin-bottom:8px;">澶嶅埗閾炬帴锛屾墦寮€ App 绮樿创</button>
                <button id="edgedl-ytdlnis-close" type="button" style="display:block;width:100%;background:transparent;color:#aaa;border:none;padding:8px;font-size:13px;">鍙栨秷</button>
            </div>`;
        document.body.appendChild(host);

        const close = () => host.remove();
        host.addEventListener('click', (e) => { if (e.target === host) close(); });
        host.querySelector('#edgedl-ytdlnis-close')?.addEventListener('click', close);

        // 涓绘寜閽細绯荤粺鍒嗕韩锛堟渶绋筹紝涓嶄細杩涘晢搴楋級
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
                    showToast('宸插彇娑堝垎浜?, { type: 'info', duration: 1200 });
                }
            } else {
                const ok = setClipboardText(pageUrl);
                close();
                showToast(ok ? '宸插鍒堕摼鎺ワ紝璇锋墦寮€ YTDLnis 绮樿创' : '澶嶅埗澶辫触', { type: ok ? 'info' : 'error', duration: 2500 });
            }
        });

        // 娆℃寜閽細鐢ㄦ埛涓诲姩鐐瑰啀璇?Intent锛堜粛鍙兘琚?Edge 閫佸幓鍟嗗簵锛?        host.querySelector('#edgedl-ytdlnis-open')?.addEventListener('click', () => {
            showToast('姝ｅ湪灏濊瘯鎵撳紑鈥﹁嫢璺冲埌鍟嗗簵璇锋敼鐢ㄧ郴缁熷垎浜?, { type: 'info', duration: 2800 });
            (intents || []).slice(1).forEach((u, i) => {
                setTimeout(() => launchIntentUrl(u), 350 * (i + 1));
            });
            setTimeout(close, 600);
        });

        host.querySelector('#edgedl-ytdlnis-copy')?.addEventListener('click', () => {
            const ok = setClipboardText(pageUrl);
            close();
            showToast(ok ? '宸插鍒讹紝鎵撳紑 YTDLnis 绮樿创鍗冲彲' : '澶嶅埗澶辫触', { type: ok ? 'info' : 'error', duration: 2500 });
        });
    }

    /** 澶嶅埗褰撳墠椤垫垨妫€娴嬪埌鐨勬渶浣冲獟浣撻摼鎺ュ埌鍓创鏉?*/
    function copyVideoLink() {
        try {
            let link = location.href;
            let label = '鏈〉閾炬帴';
            if (!isSensitivePage()) {
                const found = detectPageMedia();
                const videos = found.filter(u => isVideoUrl(u) || /\.m3u8/i.test(u));
                if (videos.length) {
                    link = videos.find(u => /\.m3u8/i.test(u)) || videos[0];
                    label = '瑙嗛閾炬帴';
                } else if (found.length && isImageUrl(found[0])) {
                    // 浠呭浘鐗囨椂浠嶅鍒舵湰椤?URL 鏇村疄鐢紙YTDLnis 绛夋寜椤甸潰瑙ｆ瀽锛?                    link = location.href;
                    label = '鏈〉閾炬帴';
                }
            }
            if (!link || !/^https?:\/\//i.test(link)) {
                showToast('娌℃湁鍙鍒剁殑鏈夋晥閾炬帴', { type: 'error', duration: 1500 });
                return;
            }
            const ok = setClipboardText(link);
            if (ok) {
                const short = link.length > 42 ? link.slice(0, 40) + '鈥? : link;
                showToast(`宸插鍒?{label}锛?{short}`, { type: 'info', duration: 2200 });
            } else {
                showToast('澶嶅埗澶辫触锛岃鎵嬪姩閫夋嫨鍦板潃鏍忓鍒?, { type: 'error', duration: 2500 });
            }
        } catch (err) {
            console.warn('[EdgeDL] 澶嶅埗閾炬帴澶辫触', err);
            showToast('澶嶅埗澶辫触', { type: 'error', duration: 2000 });
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
            if (target?.closest?.('div')?.textContent?.includes('涓嬭浇 APK 鏂囦欢'))
                takeover(e);
        }, true);
    }

    // =====================================================================
    //  鎮诞涓嬭浇鎸夐挳锛堝浘鐗?+ 鐭棰戯級鈥斺€?鏈湴淇鐗?    //  淇锛氫笉鍐嶅灏忓浘鏍?/ favicon / 鎼滅储缁撴灉鍥炬爣鍋?DOM 鍖呰９锛岄伩鍏嶉〉闈㈠浘鏍囧紓甯?    // =====================================================================
    async function initFloatingMediaButtons() {
        // 鐢ㄦ埛鍏抽棴浜嗘偓娴寜閽?        try {
            const enabled = await GM_getValue(FLOAT_BUTTONS_KEY, true);
            if (!enabled) {
                console.log('[EdgeDL] 鎮诞涓嬭浇鎸夐挳宸插湪璁剧疆涓叧闂?);
                return;
            }
        } catch (_) {}

        // 鏁忔劅椤典笉娉ㄥ叆
        try {
            if (typeof isSensitivePage === 'function' && isSensitivePage()) {
                console.log('[EdgeDL] 鏁忔劅椤甸潰锛岃烦杩囨偓娴笅杞芥寜閽?);
                return;
            }
        } catch (_) {}

        const host = (location.hostname || '').toLowerCase().replace(/^www\./, '');

        // 鎼滅储寮曟搸缁撴灉椤碉細瀹屽叏涓嶆敞鍏ユ偓娴寜閽紙favicon / 缁撴灉鍥炬爣鏈€瀹规槗琚牬鍧忥級
        const SEARCH_HOST_RE = /(^|\.)(bing\.com|google\.[a-z.]+|baidu\.com|sogou\.com|so\.com|yahoo\.com|duckduckgo\.com|yandex\.[a-z.]+|search\.brave\.com|ecosia\.org)/i;
        if (SEARCH_HOST_RE.test(host)) {
            console.log('[EdgeDL] 鎼滅储寮曟搸椤甸潰锛岃烦杩囨偓娴笅杞芥寜閽紙淇濇姢缃戠珯鍥炬爣锛?);
            return;
        }

        // 涓绘祦闀胯棰?/ 娴佸獟浣撶珯锛氱姝㈢粰 <video> 鎸傛偓娴寜閽紙浼氱牬鍧忔挱鏀惧櫒 DOM / 鎶㈣Е鎽镐簨浠讹級
        const VIDEO_PLAYER_HOST_RE = /(^|\.)(youtube\.com|youtu\.be|bilibili\.com|b23\.tv|iqiyi\.com|youku\.com|v\.qq\.com|qq\.com|mgtv\.com|sohu\.com|le\.com|pptv\.com|acfun\.cn|netflix\.com|hulu\.com|disneyplus\.com|primevideo\.com|twitch\.tv|vimeo\.com|dailymotion\.com|dai\.ly|niconico\.jp|nicovideo\.jp|ixigua\.com|douyin\.com|kuaishou\.com|haokan\.baidu\.com|y\.qq\.com|music\.163\.com|open\.spotify\.com|pornhub\.com|xvideos\.com|xnxx\.com|missav\.|javbus\.|javdb\.)/i;

        // 鐭棰?/ 绀句氦鍥炬枃绔欙細鍏佽瑙嗛鎮诞鎸夐挳锛堜粛涓嶆敼 video DOM 缁撴瀯锛?        const SHORT_VIDEO_HOST_RE = /(^|\.)(tiktok\.com|instagram\.com|facebook\.com|fb\.com|fb\.watch|threads\.(net|com)|x\.com|twitter\.com|reddit\.com|pinterest\.com|pin\.it|t\.me|telegram\.me)/i;

        const allowVideoFloat = SHORT_VIDEO_HOST_RE.test(host) && !VIDEO_PLAYER_HOST_RE.test(host);
        // 闀胯棰戠珯瀹屽叏涓嶆寕 video 鎸夐挳锛涘叾瀹冪珯鐐归粯璁や篃涓嶆寕 video 鎸夐挳锛屼粎鍥剧墖锛堥伩鍏嶆湭鐭ユ挱鏀惧櫒鍐茬獊锛?        const enableVideoFloat = allowVideoFloat;

        const isMobile = (() => {
            const ua = navigator.userAgent || '';
            const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const small = Math.min(screen.width, screen.height) < 820;
            return /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(ua) || (touch && small);
        })();

        // 鎻愰珮鏈€灏忓昂瀵搁槇鍊硷紝鍑忓皯瀵瑰皬鍥?鍥炬爣鐨勮浼?        const CFG = {
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

        // ===== 鏍稿績淇锛氬垽鏂槸鍚︿负鍥炬爣 / UI 灏忓浘锛屽潥鍐充笉鍖呰９ =====
        function isLikelyIconOrUI(img) {
            if (!img || img.tagName !== 'IMG') return true;

            const src = (img.currentSrc || img.src || img.getAttribute('data-src') || img.getAttribute('data-original') || '').toLowerCase();
            const cls = (img.className && typeof img.className === 'string' ? img.className : '').toLowerCase();
            const id = (img.id || '').toLowerCase();
            const alt = (img.alt || '').toLowerCase();
            const title = (img.title || '').toLowerCase();

            // 1. URL / 鏂囦欢鍚嶇壒寰?            if (/favicon|icon[_-]?|logo[_-]?|sprite|emoji|emoticon|avatar.*(?:s\d{2,3}|_\d{2,3})|\/\d{1,3}x\d{1,3}[\/._]|[-_](16|24|32|48|64)x\1|apple-touch-icon|site-icon|brand[_-]?logo/i.test(src)) {
                return true;
            }

            // 2. class / id / alt / title
            if (/icon|logo|favicon|sprite|emoji|avatar|thumb|badge|button|nav|menu|toolbar|ui[_-]/i.test(cls + ' ' + id + ' ' + alt + ' ' + title)) {
                return true;
            }

            // 3. 灏哄锛堝凡鍔犺浇鐨勪紭鍏堢敤 natural锛屽叾娆?client锛?            const nw = img.naturalWidth || 0;
            const nh = img.naturalHeight || 0;
            const cw = img.clientWidth || img.width || 0;
            const ch = img.clientHeight || img.height || 0;

            // 鑷劧灏哄鏄庣‘寰堝皬 鈫?鍥炬爣
            if (nw > 0 && nh > 0 && (nw < 72 || nh < 72)) return true;
            // 鏄剧ず灏哄寰堝皬
            if (cw > 0 && ch > 0 && (cw < CFG.minW || ch < CFG.minH)) return true;

            // 4. 鐖剁骇缁撴瀯锛堟悳绱㈢粨鏋溿€佸鑸€佸伐鍏锋爮绛夛級
            try {
                if (img.closest('button, nav, header, footer, [role="toolbar"], [role="menubar"], [role="navigation"], [role="banner"], cite, .b_attribution, .tptt, [class*="favicon"], [class*="site-icon"], [class*="result-icon"], [class*="serp"], [data-testid*="icon"]')) {
                    return true;
                }
                // 鐖剁骇鏈韩寰堝皬
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
            // 涓嶅鐞?blob/mediasource锛堟挱鏀惧櫒鍐呴儴娴侊紝澶栭摼涓嬭浇鍣ㄦ棤娉曠洿鎺ョ敤锛?            const src = video.currentSrc || video.src || '';
            if (src.startsWith('blob:') || src.startsWith('mediasource:')) return true;
            // 宸叉湁鍙笅杞藉閾炬墠鎸傛寜閽?            if (!getBestVideoUrl(video)) return true;
            // 璺宠繃杩囧皬鎴栨槑鏄炬槸骞垮憡/棰勮鐨勬瀬灏忓厓绱?            const w = video.clientWidth || video.videoWidth || 0;
            const h = video.clientHeight || video.videoHeight || 0;
            if (w > 0 && h > 0 && (w < CFG.minW || h < CFG.minH)) return true;
            // 璺宠繃鍏ㄥ睆涓绘挱鏀惧櫒鍊惧悜锛氬崰灞忓箷澶ч儴鍒嗕笖鏈?controls 鐨勯暱瑙嗛
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
                    showToast('鏈壘鍒板彲涓嬭浇鍦板潃', { type: 'error', duration: 1800 });
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
                // 鍏抽敭锛氱粷涓嶅寘瑁?<video>锛岄伩鍏嶇牬鍧忔挱鏀惧櫒甯冨眬 / 鍏ㄥ睆 / 鎵嬪娍
                target.dataset.edgedlBtn = '1';
                let hostEl = target.parentElement;
                if (!hostEl) return;
                try {
                    const cs = window.getComputedStyle(hostEl);
                    if (cs.position === 'static') {
                        // 浠呭湪鐖剁骇鏈畾浣嶆椂缁欑埗绾у姞 relative锛屼笉绉诲姩 video 鑺傜偣
                        hostEl.style.setProperty('position', 'relative', 'important');
                    }
                } catch (_) {}

                const btn = document.createElement('div');
                btn.className = 'edgedl-float-btn edgedl-float-video';
                btn.title = '涓嬭浇瑙嗛锛圗dgeDL锛?;
                const svgSize = isMobile ? 18 : 15;
                btn.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
                styleBtn(btn, true);
                bindBtnEvents(btn, target, true);
                hostEl.appendChild(btn);
                return;
            }

            // ===== 鍥剧墖锛氬厛鍒ゆ柇鏄惁鍥炬爣 / 澶皬锛屽啀鍐冲畾鏄惁鍖呰９ =====
            // 宸茬粡鏄浘鏍囨垨 UI 鍏冪礌 鈫?鐩存帴璺宠繃锛屾案涓嶅寘瑁?            if (isLikelyIconOrUI(target)) {
                target.dataset.edgedlBtn = 'skip-icon';
                return;
            }

            // 鍥剧墖灏氭湭鍔犺浇瀹屾垚锛坣atural 灏哄涓?0锛夋椂锛岀瓑 load 鍚庡啀鍐冲畾锛岄伩鍏嶈浼?            const nw = target.naturalWidth || 0;
            const nh = target.naturalHeight || 0;
            if (nw === 0 && nh === 0 && !target.complete) {
                target.dataset.edgedlBtn = 'pending';
                const onLoad = () => {
                    // load 鍚庨噸鏂拌蛋涓€閬嶉€昏緫
                    target.dataset.edgedlBtn = '';
                    createBtn(target, false);
                };
                target.addEventListener('load', onLoad, { once: true });
                // 瓒呮椂鍏滃簳锛? 绉掑悗濡傛灉杩樻槸 0 灏辨斁寮?                setTimeout(() => {
                    if (target.dataset.edgedlBtn === 'pending') {
                        target.dataset.edgedlBtn = 'skip-timeout';
                    }
                }, 3000);
                return;
            }

            // 鍐嶆鐢ㄥ昂瀵歌繃婊わ紙闃叉 isLikelyIconOrUI 婕忓垽锛?            if ((nw > 0 && nh > 0 && (nw < CFG.minW || nh < CFG.minH)) ||
                ((target.clientWidth || 0) > 0 && (target.clientHeight || 0) > 0 &&
                 (target.clientWidth < CFG.minW || target.clientHeight < CFG.minH))) {
                target.dataset.edgedlBtn = 'skip-small';
                return;
            }

            // 鐪熸闇€瑕佹偓娴寜閽殑澶у浘鎵嶅寘瑁?            target.dataset.edgedlBtn = '1';
            const wrap = document.createElement('div');
            wrap.className = 'edgedl-media-wrap';
            // 灏介噺涓嶇牬鍧忓師鏈夊竷灞€锛氬彧鐢?relative + inline-block锛屽幓鎺?line-height:0
            wrap.style.cssText = 'position:relative!important;display:inline-block!important;max-width:100%!important;vertical-align:middle!important;';
            const parent = target.parentNode;
            if (!parent) return;
            parent.insertBefore(wrap, target);
            wrap.appendChild(target);

            const btn = document.createElement('div');
            btn.className = 'edgedl-float-btn';
            btn.title = '涓嬭浇鍥剧墖锛圗dgeDL锛?;
            const svgSize = isMobile ? 18 : 15;
            btn.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
            styleBtn(btn, false);
            bindBtnEvents(btn, target, false);
            wrap.appendChild(btn);

            // 浜屾灏哄妫€鏌ワ紙涓囦竴甯冨眬鍙樺寲瀵艰嚧瀹為檯寰堝皬锛?            const checkSize = () => {
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
                // 鎻愬墠璺宠繃鏄庢樉 UI 鍖哄煙
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

        console.log(`[EdgeDL] 鎮诞涓嬭浇鎸夐挳宸插惎鐢?(${isMobile ? '鎵嬫満' : '妗岄潰'}; videoFloat=${enableVideoFloat}; host=${host}) [local-icon-fix]`);
    }

    // 鍒濆鍖栦笅杞芥帴绠?    function init() {
        attachPageBridgeInterceptor();
        registerMenu();
        initDeepSeekHandler();
        // 鎮诞鎸夐挳绋嶆櫄鍚姩锛岄伩鍏嶅拰 document-start 鎷︽埅閫昏緫鎶㈡椂鏈?        setTimeout(() => {
            try {
                const p = initFloatingMediaButtons();
                if (p && typeof p.catch === 'function') p.catch(e => console.warn('[EdgeDL] 鎮诞鎸夐挳鍒濆鍖栧け璐?, e));
            } catch (e) {
                console.warn('[EdgeDL] 鎮诞鎸夐挳鍒濆鍖栧け璐?, e);
            }
        }, 600);
    }
    init();

})();
