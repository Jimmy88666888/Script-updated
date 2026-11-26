// ==UserScript==
// @name              LinkSwift 鎵嬫満鐗?// @namespace         github.com/Jimmy88666888/LinkSwift-Mobile
// @version           1.1.4-mobile
// @updateURL         https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/LinkSwift-Mobile/LinkSwift.user.js
// @downloadURL       https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/LinkSwift-Mobile/LinkSwift.user.js
// @author            Hmjz100銆佹补灏忕尨
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdvbGRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1OUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZCQzAyRDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNCwgLTIpIHNjYWxlKDAuOSkiPjxwYXRoIGQ9Ik0xMDMuNiAxMDcuNGMzLjUtMi4yIDguOS02LjEgMTMuOC0xMi41czcuMy0xMi41IDguNS0xNi41Yy41LTEuNyAyLjItNy41IDIuMi0xNC43IDAtMTAuMS0zLjMtMjUuMS0xNS40LTM2LjgtMTQuNS0xNC0zMi4xLTE0LjMtMzUuNy0xNC4zLTggMC0xNS43IDEuOS0yMi42IDUuMkM0NCAyMyAzNS43IDMxLjQgMzAuOCA0MS43Yy0xLjMgMi44LTQgNC43LTcuMSA1LTQgLjMtNy41IDQuNC04LjkgOS42LS41IDEuOS0xLjYgMy41LTMuMSA0LjdDNC40IDY2LjggMCA3NS43IDAgODVjMCA2LjggMi4zIDEzLjEgNi4xIDE4LjIgNS41IDcuNCAxNC4yIDEyLjIgMjQgMTIuMmg0Ny4xYzQuNCAwIDExLS41IDE4LjMtMy41IDMuMi0xLjQgNS45LTMgOC4xLTQuNXoiIGZpbGw9IiNBMDk5RjAiLz48cGF0aCBkPSJNMTE5LjggNjQuM2MuMS0xNy4xLTEwLjQtMjgtMTIuNS0zMC4xQzk1IDIyLjEgNzkuOSAyMS44IDc2LjkgMjEuOGMtMTcuNiAwLTMzLjMgMTAuNS0zOS45IDI2LjctLjYgMS4zLTEuOCAyLjMtMy40IDIuM2gtLjRjLTUuOCAwLTEwLjYgNC44LTEwLjYgMTAuN3YuNWMwIDEuNC0uOCAyLjYtMS45IDMuM0MxMy40IDY5IDguOCA3Ni44IDguOCA4NWMwIDEyLjIgOS45IDIyLjMgMjIuMiAyMi4zaDQ1LjJjMy42LS4xIDE3LjYtLjkgMjkuNi0xMiAyLjktMi44IDEzLjktMTMuNyAxNC0zMXoiIGZpbGw9IiM1NzRBQjgiLz48cGF0aCBkPSJNMTEwLjggNTcuNGwuMiAzLjNjMCAxLjMtMS4xIDIuNC0yLjMgMi40LTEuMyAwLTIuMy0xLjEtMi4zLTIuNGwtLjEtMi44di0uM2MwLTEuMi45LTIuMiAyLjEtMi4zaC4zYy43IDAgMS4zLjMgMS43LjctLjIuMS4zLjUuNCAxLjR6bS0zLjMtMTAuM2MwIDEuMi0xIDIuMy0yLjIgMi4zaC0uMWMtLjggMC0xLjYtLjUtMi0xLjItNC42LTguMy0xMy4zLTEzLjUtMjIuOC0xMy41LTEuMiAwLTIuMy0xLTIuMy0yLjJ2LS4xYzAtMS4yIDEtMi4zIDIuMi0yLjNoLjFhMzAuMzcgMzAuMzcgMCAwIDEgMTUuOCA0LjRjNC42IDIuOCA4LjQgNi44IDExLjEgMTEuNS4xLjMuMi43LjIgMS4xek04OC4zIDczLjhMNzMuNSA5My4yYy0xLjUgMS45LTMuNSAzLjEtNS43IDMuNWgtLjJjLS40LjEtLjguMS0xLjIuMS0uNiAwLTEuMS0uMS0xLjYtLjItMi4yLS40LTQuMi0xLjctNS42LTMuNUw0NC4zIDczLjljLTItMi42LTIuNS01LjQtMS40LTcuNy4xLS4xLjEtLjIuMi0uMiAxLjItMiAzLjUtMy4yIDYuNC0zLjJoNi42di01LjdjMC02LjggNC43LTEyIDEwLjktMTIgNC44IDAgOC41IDIuNiAxMC4zIDcuMi41IDEuMy0uMiAyLjctMS41IDMuMnMtMi44LS4xLTMuMy0xLjRjLTEuMS0yLjctMi45LTQtNS41LTQtMy41IDAtNiAzLTYgN3Y4LjFjMCAuNS0uMiAxLS42IDEuNC0uNi43LTEuNyAxLjEtMi42IDEuMWgtOC40Yy0xLjMgMC0yIC40LTIuMS43LS4yLjQgMCAxLjMuOSAyLjRMNjMuMSA5MGMuOSAxLjIgMi4xIDEuOCAzLjMgMS44czIuMy0uNiAzLjEtMS43bDE0LjgtMTkuM2MuOS0xLjEgMS4xLTIgLjktMi40LS4yLS4zLS45LS43LTIuMS0uN2gtNy42Yy0uOSAwLTEuNy0uNS0yLjEtMS4yLS4zLS40LS40LS44LS40LTEuMyAwLTEuNCAxLjEtMi41IDIuNS0yLjVoNy42YzMuMSAwIDUuNSAxLjMgNi42IDMuNWwuMy43Yy43IDIuMS4xIDQuNi0xLjcgNi45eiIgZmlsbD0iI2ZmZiIvPjwvZz48Zz48cGF0aCBkPSJNMCAxMDAgUTY0IDExNSAxMjggMTAwIEwxMjggMTI4IEwwIDEyOCBaIiBmaWxsPSIjRDMyRjJGIi8+PHBhdGggZD0iTTAgMTAwIFE2NCAxMTUgMTI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjY0IiB5PSIxMjEiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9InVybCgjZ29sZEdyYWRpZW50KSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9InRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7Ij7liIYg5LiNIOi1t+OAgOe6ryDpnaAg54ixPC90ZXh0PjwvZz48L3N2Zz4=
// @description       [鎵嬫満涓撶敤鐗圿 (锝?岽椻€?鉁с€婁篃璁稿悓绫诲瀷涓渶濂界敤锛熴€嬬郴鍒?- 涓€涓熀浜?JavaScript 鐨勭綉鐩樻枃浠朵笅杞藉湴鍧€鑾峰彇宸ュ叿鉁紝鍩轰簬銆愮綉鐩樼洿閾句笅杞藉姪鎵嬨€戜慨鏀?| 鏀寔 鐧惧害缃戠洏 / 闃块噷浜戠洏 / 涓浗绉诲姩浜戠洏 / 澶╃考浜戠洏 / 杩呴浄浜戠洏 / 澶稿厠缃戠洏 / UC缃戠洏 / 123浜戠洏 鍏ぇ缃戠洏 | 寮€婧愩兓鑷敤銉诲幓骞?| 鏀圭晫闈兓娣诲姛鑳姐兓淇瓸ug | 鏃㈣秴瓒婂師鐗堬紝浜︽槸鍚岀被涓渶濂界敤鐗堟湰锛侌煈?// @description:zh-CN [鎵嬫満涓撶敤鐗圿 (锝?岽椻€?鉁с€婁篃璁稿悓绫诲瀷涓渶濂界敤锛熴€嬬郴鍒?- 涓€涓熀浜?JavaScript 鐨勭綉鐩樻枃浠朵笅杞藉湴鍧€鑾峰彇宸ュ叿鉁紝鍩轰簬銆愮綉鐩樼洿閾句笅杞藉姪鎵嬨€戜慨鏀?| 鏀寔 鐧惧害缃戠洏 / 闃块噷浜戠洏 / 涓浗绉诲姩浜戠洏 / 澶╃考浜戠洏 / 杩呴浄浜戠洏 / 澶稿厠缃戠洏 / UC缃戠洏 / 123浜戠洏 鍏ぇ缃戠洏 | 寮€婧愩兓鑷敤銉诲幓骞?| 鏀圭晫闈兓娣诲姛鑳姐兓淇瓸ug | 鏃㈣秴瓒婂師鐗堬紝浜︽槸鍚岀被涓渶濂界敤鐗堟湰锛侌煈?// @description:zh-TW [鎵嬫満涓撶敤鐗圿 (锝?岽椻€?鉁с€婁篃瑷卞悓椤炲瀷涓渶濂界敤锛熴€嬬郴鍒?- 涓€鍊嬪熀鏂?JavaScript 鐨勭恫鐩ゆ獢妗堜笅杓夊湴鍧€鐛插彇宸ュ叿鉁紝鍩烘柤銆愮恫鐩ょ洿閺堜笅杓夊姪鎵嬨€戞敼绶?| 鏀彺 鐧惧害缍茬洡 / 闃块噷闆茬洡 / 涓湅绉诲嫊闆茬洡 / 澶╃考闆茬洡 / 杩呴浄闆茬洡 / 澶稿厠缍茬洡 / UC缍茬洡 / 123闆茬洡 鍏ぇ骞冲彴 | 闁嬫簮銉昏嚜鐢ㄣ兓闄ゅ唬 | 鏀逛粙闈兓鎿村姛鑳姐兓淇瓸ug | 鏃㈣秴瓒婂師鐗堬紝浜︽槸鍚岄涓渶濂界敤鐗堟湰锛侌煈?// @description:zh-HK [鎵嬫満涓撶敤鐗圿 (锝?岽椻€?鉁с€婁篃瑷卞悓椤炲瀷涓渶濂界敤锛熴€嬬郴鍒?- 涓€鍊嬪熀鏂?JavaScript 鐨勭恫鐩ゆ獢妗堜笅杓夊湴鍧€鐛插彇宸ュ叿鉁紝鍩烘柤銆愮恫鐩ょ洿閺堜笅杓夊姪鎵嬨€戞敼绶?| 鏀彺 鐧惧害缍茬洡 / 闃块噷闆茬洡 / 涓湅绉诲嫊闆茬洡 / 澶╃考闆茬洡 / 杩呴浄闆茬洡 / 澶稿厠缍茬洡 / UC缍茬洡 / 123闆茬洡 鍏ぇ骞冲彴 | 闁嬫簮銉昏嚜鐢ㄣ兓闄ゅ唬 | 鏀逛粙闈兓鎿村姛鑳姐兓淇瓸ug | 鏃㈣秴瓒婂師鐗堬紝浜︽槸鍚岄涓渶濂界敤鐗堟湰锛侌煈?// @copyright         漏 2022 hmjz100
// @license           AGPL-3.0-or-later
// @source            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @website            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @homepageURL            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @homepage            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @support           https://github.com/Jimmy88666888/Script-updated/issues
// @supportURL        https://github.com/Jimmy88666888/Script-updated/issues
// @require           https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// @require           https://unpkg.com/sweetalert2@11.4.8/dist/sweetalert2.min.js
// @resource SwalLigt https://unpkg.com/sweetalert2@11.4.8/dist/sweetalert2.min.css
// @resource SwalDark https://unpkg.com/@sweetalert2/theme-dark@5.0.26/dark.min.css
// @require           https://unpkg.com/js-md5@0.7.3/build/md5.min.js
// @require           https://unpkg.com/js-sha256@0.11.1/src/sha256.js
// @run-at            document-start
// @early-start
// @match             *://pan.baidu.com/disk/home*
// @match             *://yun.baidu.com/disk/home*
// @match             *://pan.baidu.com/disk/timeline*
// @match             *://yun.baidu.com/disk/timeline*
// @match             *://pan.baidu.com/disk/main*
// @match             *://yun.baidu.com/disk/main*
// @match             *://pan.baidu.com/youth/pan/main*
// @match             *://yun.baidu.com/youth/pan/main*
// @match             *://pan.baidu.com/disk/base*
// @match             *://yun.baidu.com/disk/base*
// @match             *://pan.baidu.com/disk/timeline*
// @match             *://yun.baidu.com/disk/timeline*
// @match             *://pan.baidu.com/pfile/*
// @match             *://yun.baidu.com/pfile/*
// @match             *://pan.baidu.com/s/*
// @match             *://pan.baidu.com/aipan/*
// @match             *://yun.baidu.com/s/*
// @match             *://yun.baidu.com/aipan/*
// @match             *://pan.baidu.com/share/*
// @match             *://yun.baidu.com/share/*
// @match             *://pan.baidu.com/embed/*
// @match             *://yun.baidu.com/embed/*
// @match             *://openapi.baidu.com/*
// @match             *://www.aliyundrive.com/s/*
// @match             *://www.aliyundrive.com/drive*
// @match             *://www.alipan.com/s/*
// @match             *://www.alipan.com/drive*
// @match             *://yun.139.com/*
// @match             *://caiyun.139.com/*
// @match             *://cloud.189.cn/web/*
// @match             *://pan.xunlei.com/*
// @match             *://pan.quark.cn/*
// @match             *://drive.uc.cn/*
// @match             *://*.123pan.com/*
// @match             *://*.123pan.cn/*
// @match             *://*.123684.com/*
// @match             *://*.123865.com/*
// @match             *://*.123952.com/*
// @match             *://*.123912.com/*
// @connect           *
// @connect           localhost
// @connect           baidu.com
// @connect           baidupcs.com
// @connect           aliyundrive.com
// @connect           aliyundrive.net
// @connect           alipan.com
// @connect           alicloudccp.com
// @connect           aliyundrive.cloud
// @connect           139.com
// @connect           cmecloud.cn
// @connect           189.cn
// @connect           xunlei.com
// @connect           quark.cn
// @connect           uc.cn
// @connect           123pan.com
// @connect           123pan.cn
// @connect           123684.com
// @connect           123865.com
// @connect           123952.com
// @connect           123912.com
// @connect           cjjd19.com
// @grant             unsafeWindow
// @grant             window.close
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_deleteValue
// @grant             GM_openInTab
// @grant             GM_registerMenuCommand
// @grant             GM_getResourceText
// @compatible	      Chrome
// @compatible	      Edge
// @compatible	      Firefox
// @compatible	      Safari
// @compatible	      Opera
// ==/UserScript==
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMTAzLjYgMTA3LjRjMy41LTIuMiA4LjktNi4xIDEzLjgtMTIuNXM3LjMtMTIuNSA4LjUtMTYuNWMuNS0xLjcgMi4yLTcuNSAyLjItMTQuNyAwLTEwLjEtMy4zLTI1LjEtMTUuNC0zNi44LTE0LjUtMTQtMzIuMS0xNC4zLTM1LjctMTQuMy04IDAtMTUuNyAxLjktMjIuNiA1LjJDNDQgMjMgMzUuNyAzMS40IDMwLjggNDEuN2MtMS4zIDIuOC00IDQuNy03LjEgNS00IC4zLTcuNSA0LjQtOC45IDkuNi0uNSAxLjktMS42IDMuNS0zLjEgNC43QzQuNCA2Ni44IDAgNzUuNyAwIDg1YzAgNi44IDIuMyAxMy4xIDYuMSAxOC4yIDUuNSA3LjQgMTQuMiAxMi4yIDI0IDEyLjJoNDcuMWM0LjQgMCAxMS0uNSAxOC4zLTMuNSAzLjItMS40IDUuOS0zIDguMS00LjV6IiBmaWxsPSIjQTA5OUYwIi8+PHBhdGggZD0iTTExOS44IDY0LjNjLjEtMTcuMS0xMC40LTI4LTEyLjUtMzAuMUM5NSAyMi4xIDc5LjkgMjEuOCA3Ni45IDIxLjhjLTE3LjYgMC0zMy4zIDEwLjUtMzkuOSAyNi43LS42IDEuMy0xLjggMi4zLTMuNCAyLjNoLS40Yy01LjggMC0xMC42IDQuOC0xMC42IDEwLjd2LjVjMCAxLjQtLjggMi42LTEuOSAzLjNDMTMuNCA2OSA4LjggNzYuOCA4LjggODVjMCAxMi4yIDkuOSAyMi4zIDIyLjIgMjIuM2g0NS4yYzMuNi0uMSAxNy42LS45IDI5LjYtMTIgMi45LTIuOCAxMy45LTEzLjcgMTQtMzF6IiBmaWxsPSIjNTc0QUI4Ii8+PHBhdGggZD0iTTExMC44IDU3LjRsLjIgMy4zYzAgMS4zLTEuMSAyLjQtMi4zIDIuNC0xLjMgMC0yLjMtMS4xLTIuMy0yLjRsLS4xLTIuOHYtLjNjMC0xLjIuOS0yLjIgMi4xLTIuM2guM2MuNyAwIDEuMy4zIDEuNy43LS4yLjEuMy41LjQgMS40em0tMy4zLTEwLjNjMCAxLjItMSAyLjMtMi4yIDIuM2gtLjFjLS44IDAtMS42LS41LTItMS4yLTQuNi04LjMtMTMuMy0xMy41LTIyLjgtMTMuNS0xLjIgMC0yLjMtMS0yLjMtMi4ydi0uMWMwLTEuMiAxLTIuMyAyLjItMi4zaC4xYTMwLjM3IDMwLjM3IDAgMCAxIDE1LjggNC40YzQuNiAyLjggOC40IDYuOCAxMS4xIDExLjUuMS4zLjIuNy4yIDEuMXpNODguMyA3My44TDczLjUgOTMuMmMtMS41IDEuOS0zLjUgMy4xLTUuNyAzLjVoLS4yYy0uNC4xLS44LjEtMS4yLjEtLjYgMC0xLjEtLjEtMS42LS4yLTIuMi0uNC00LjItMS43LTUuNi0zLjVMNDQuMyA3My45Yy0yLTIuNi0yLjUtNS40LTEuNC03LjcuMS0uMS4xLS4yLjItLjIgMS4yLTIgMy41LTMuMiA2LjQtMy4yaDYuNnYtNS43YzAtNi44IDQuNy0xMiAxMC45LTEyIDQuOCAwIDguNSAyLjYgMTAuMyA3LjIuNSAxLjMtLjIgMi43LTEuNSAzLjJzLTIuOC0uMS0zLjMtMS40Yy0xLjEtMi43LTIuOS00LTUuNS00LTMuNSAwLTYgMy02IDd2OC4xYzAgLjUtLjIgMS0uNiAxLjQtLjYuNy0xLjcgMS4xLTIuNiAxLjFoLTguNGMtMS4zIDAtMiAuNC0yLjEuNy0uMi40IDAgMS4zLjkgMi40TDYzLjEgOTBjLjkgMS4yIDIuMSAxLjggMy4zIDEuOHMyLjMtLjYgMy4xLTEuN2wxNC44LTE5LjNjLjktMS4xIDEuMS0yIC45LTIuNC0uMi0uMy0uOS0uNy0yLjEtLjdoLTcuNmMtLjkgMC0xLjctLjUtMi4xLTEuMi0uMy0uNC0uNC0uOC0uNC0xLjMgMC0xLjQgMS4xLTIuNSAyLjUtMi41aDcuNmMzLjEgMCA1LjUgMS4zIDYuNiAzLjVsLjMuN2MuNyAyLjEuMSA0LjYtMS43IDYuOXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=
/**
 * @name LinkSwift
 * @template 锛堟敼锛夌綉鐩樼洿閾句笅杞藉姪鎵? * @author 娌瑰皬鐚? * @author hmjz100
 * @namespace github.com/hmjz100
 * @description  涓€涓熀浜?JavaScript 鐩樼殑鏂囦欢涓嬭浇鍦板潃鑾峰彇宸ュ叿  鏀寔 鐧惧害缃戠洏/闃块噷浜戠洏/涓浗绉诲姩浜戠洏/澶╃考浜戠洏/杩呴浄浜戠洏/澶稿厠缃戠洏/UC缃戠洏/123浜戠洏 鍏ぇ缃戠洏  浠ｇ爜鏀硅嚜 鈥滅綉鐩樼洿閾句笅杞藉姪鎵嬧€濓紝浣滆€呮补灏忕尨
 * @version 1.1.3-mobile
 * @license AGPL-3.0-or-later
 * @see {@link https://github.com/hmjz100/LinkSwift/ Github 浠撳簱}
 */
(function linkSwift($) {
	// 涓ユ牸妯″紡锛岀‘淇濅唬鐮佸畨鍏ㄦ墽琛岋紝涓嶈秺鐣?	"use strict";
	// unsafeWindow 妫€娴嬶紝閫傜敤浜?Via 杩欑被鏃?unsafeWindow 鐨勬祻瑙堝櫒
	if (typeof (unsafeWindow) === "undefined") window.unsafeWindow = window;
	// 閲嶅鎵ц妫€娴嬶紝閫傜敤浜庨儴鍒嗘祻瑙堝櫒锛涘嚭鑷?鈥淰ia 杞绘彃浠垛€濓紝浣滆€呰胺鑺辨嘲
	let key = encodeURIComponent("LinkSwift:涓讳唬鐮?); if (window[key]) return; window[key] = true;

	// 鍏ㄥ眬鍙傛暟
	let mount = idontknow("LinkSwift");
	let info = {
		author: GM_info.script?.author,
		name: GM_info.script?.name,
		version: (GM_info.script?.version || "1.1.3-mobile"),
		icon: (GM_info.script?.icon || "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdvbGRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1OUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZCQzAyRDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNCwgLTIpIHNjYWxlKDAuOSkiPjxwYXRoIGQ9Ik0xMDMuNiAxMDcuNGMzLjUtMi4yIDguOS02LjEgMTMuOC0xMi41czcuMy0xMi41IDguNS0xNi41Yy41LTEuNyAyLjItNy41IDIuMi0xNC43IDAtMTAuMS0zLjMtMjUuMS0xNS40LTM2LjgtMTQuNS0xNC0zMi4xLTE0LjMtMzUuNy0xNC4zLTggMC0xNS43IDEuOS0yMi42IDUuMkM0NCAyMyAzNS43IDMxLjQgMzAuOCA0MS43Yy0xLjMgMi44LTQgNC43LTcuMSA1LTQgLjMtNy41IDQuNC04LjkgOS42LS41IDEuOS0xLjYgMy41LTMuMSA0LjdDNC40IDY2LjggMCA3NS43IDAgODVjMCA2LjggMi4zIDEzLjEgNi4xIDE4LjIgNS41IDcuNCAxNC4yIDEyLjIgMjQgMTIuMmg0Ny4xYzQuNCAwIDExLS41IDE4LjMtMy41IDMuMi0xLjQgNS45LTMgOC4xLTQuNXoiIGZpbGw9IiNBMDk5RjAiLz48cGF0aCBkPSJNMTE5LjggNjQuM2MuMS0xNy4xLTEwLjQtMjgtMTIuNS0zMC4xQzk1IDIyLjEgNzkuOSAyMS44IDc2LjkgMjEuOGMtMTcuNiAwLTMzLjMgMTAuNS0zOS45IDI2LjctLjYgMS4zLTEuOCAyLjMtMy40IDIuM2gtLjRjLTUuOCAwLTEwLjYgNC44LTEwLjYgMTAuN3YuNWMwIDEuNC0uOCAyLjYtMS45IDMuM0MxMy40IDY5IDguOCA3Ni44IDguOCA4NWMwIDEyLjIgOS45IDIyLjMgMjIuMiAyMi4zaDQ1LjJjMy42LS4xIDE3LjYtLjkgMjkuNi0xMiAyLjktMi44IDEzLjktMTMuNyAxNC0zMXoiIGZpbGw9IiM1NzRBQjgiLz48cGF0aCBkPSJNMTEwLjggNTcuNGwuMiAzLjNjMCAxLjMtMS4xIDIuNC0yLjMgMi40LTEuMyAwLTIuMy0xLjEtMi4zLTIuNGwtLjEtMi44di0uM2MwLTEuMi45LTIuMiAyLjEtMi4zaC4zYy43IDAgMS4zLjMgMS43LjctLjIuMS4zLjUuNCAxLjR6bS0zLjMtMTAuM2MwIDEuMi0xIDIuMy0yLjIgMi4zaC0uMWMtLjggMC0xLjYtLjUtMi0xLjItNC42LTguMy0xMy4zLTEzLjUtMjIuOC0xMy41LTEuMiAwLTIuMy0xLTIuMy0yLjJ2LS4xYzAtMS4yIDEtMi4zIDIuMi0yLjNoLjFhMzAuMzcgMzAuMzcgMCAwIDEgMTUuOCA0LjRjNC42IDIuOCA4LjQgNi44IDExLjEgMTEuNS4xLjMuMi43LjIgMS4xek04OC4zIDczLjhMNzMuNSA5My4yYy0xLjUgMS45LTMuNSAzLjEtNS43IDMuNWgtLjJjLS40LjEtLjguMS0xLjIuMS0uNiAwLTEuMS0uMS0xLjYtLjItMi4yLS40LTQuMi0xLjctNS42LTMuNUw0NC4zIDczLjljLTItMi42LTIuNS01LjQtMS40LTcuNy4xLS4xLjEtLjIuMi0uMiAxLjItMiAzLjUtMy4yIDYuNC0zLjJoNi42di01LjdjMC02LjggNC43LTEyIDEwLjktMTIgNC44IDAgOC41IDIuNiAxMC4zIDcuMi41IDEuMy0uMiAyLjctMS41IDMuMnMtMi44LS4xLTMuMy0xLjRjLTEuMS0yLjctMi45LTQtNS41LTQtMy41IDAtNiAzLTYgN3Y4LjFjMCAuNS0uMiAxLS42IDEuNC0uNi43LTEuNyAxLjEtMi42IDEuMWgtOC40Yy0xLjMgMC0yIC40LTIuMS43LS4yLjQgMCAxLjMuOSAyLjRMNjMuMSA5MGMuOSAxLjIgMi4xIDEuOCAzLjMgMS44czIuMy0uNiAzLjEtMS43bDE0LjgtMTkuM2MuOS0xLjEgMS4xLTIgLjktMi40LS4yLS4zLS45LS43LTIuMS0uN2gtNy42Yy0uOSAwLTEuNy0uNS0yLjEtMS4yLS4zLS40LS40LS44LS40LTEuMyAwLTEuNCAxLjEtMi41IDIuNS0yLjVoNy42YzMuMSAwIDUuNSAxLjMgNi42IDMuNWwuMy43Yy43IDIuMS4xIDQuNi0xLjcgNi45eiIgZmlsbD0iI2ZmZiIvPjwvZz48Zz48cGF0aCBkPSJNMCAxMDAgUTY0IDExNSAxMjggMTAwIEwxMjggMTI4IEwwIDEyOCBaIiBmaWxsPSIjRDMyRjJGIi8+PHBhdGggZD0iTTAgMTAwIFE2NCAxMTUgMTI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjY0IiB5PSIxMjEiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9InVybCgjZ29sZEdyYWRpZW50KSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9InRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7Ij7liIYg5LiNIOi1t+OAgOe6ryDpnaAg54ixPC90ZXh0PjwvZz48L3N2Zz4="),
		mhandler: GM_info.scriptHandler,
		mversion: GM_info.version,
	};
	let $doc = $(document);
	let temp = {
		mount: $(`.${mount}`),
		main: {},
		page: "",
		mode: [],
		links: [],
		glinks: [],
		color: "",
		request: {},
		colored: false,
		swalDefault: {
			position: "center",
			heightAuto: false,
			scrollbarPadding: false,
			confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 纭`,
			denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 鎷掔粷`,
			cancelButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 鍙栨秷`
		},
		terminalType: {
			wc: "Microsoft Windows 鍛戒护鎻愮ず绗?,
			wp: "Microsoft Windows PowerShell",
			lt: "Linux 缁堢",
			ls: "Linux Shell",
			mt: "Apple MacOS 缁堢"
		}
	};

	/**
	 * SweetAlert2 鐨?Toast 鎸囩ず妗嗗熀纭€閰嶇疆
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 * @description 鍒涘缓涓€涓叏灞€閫氱敤鐨?Toast 鎸囩ず妗嗗疄渚嬶紝鏀寔鑷姩鍏抽棴銆侀紶鏍囨偓鍋滄殏鍋溿€佸彸涓婅寮瑰嚭绛夌壒鎬с€?	 *
	 * @type{Sweetalert2.Toast}
	 */
	let toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3500,
		timerProgressBar: true,
		showCloseButton: true,
		didOpen: function (toast) {
			toast.addEventListener("mouseenter", () => {
				Swal.stopTimer();
			});
			toast.addEventListener("mouseleave", () => {
				Swal.resumeTimer();
			});
		}
	});

	/**
	 * 娑堟伅鎻愮ず宸ュ叿绫?	 * @author 娌瑰皬鐚?	 * @description 鎻愪緵缁熶竴鐨勬彁绀轰俊鎭睍绀烘柟娉曪紝鍩轰簬 SweetAlert2 鐨?Toast 瀹炵幇锛?	 * 鍖呭惈 success / error / warning / info / question 绛夌被鍨嬨€?	 */
	let message = {
		success: function (text) {
			toast.fire({ title: text, icon: "success" });
		},
		error: function (text) {
			toast.fire({ title: text, icon: "error" });
		},
		warning: function (text) {
			toast.fire({ title: text, icon: "warning" });
		},
		info: function (text) {
			toast.fire({ title: text, icon: "info" });
		},
		question: function (text) {
			toast.fire({ title: text, icon: "question" });
		}
	};

	/**
	 * 鍩虹閰嶇疆闆嗗悎
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let config = {
		base: {
			num: "865746",
			license: "AGPL3",
			service: {
				account: "https://pic.rmb.bdstatic.com/bjh/8b9e14345b3cdf96aedac2f3971adcb02681.png"
			},
			dom: {
				footer: `o(鈮р柦鈮?o 鍗佸垎鎰熻阿鎮ㄧ殑鏀寔锛併€愭墜鏈轰笓鐢ㄧ増銆戞潵缁欐椤圭洰涓€涓?<a href="https://github.com/hmjz100/LinkSwift" target="_blank" class="pl-a" data-no-instant="1"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>Star</a> 鍚`,
				button: {
					mobile: {
						title: "鎵嬫満涓嬭浇",
						footer: `<p>鎵嬫満涓撶敤锛氬鍒剁粰 <b>1DM+</b> / <b>ytdlnis</b> / <b>ADM</b>锛屾垨澶嶅埗鐩撮摼涓庡垎浜爜銆?/p>`
					},
					// 鍏煎鏃?mode 鍚嶏紝鍏ㄩ儴鏄犲皠鍒版墜鏈轰笅杞介潰鏉?					api: { title: "鎵嬫満涓嬭浇", footer: `<p>鎵嬫満涓撶敤鐗?/p>` },
					aria2: { title: "鎵嬫満涓嬭浇", footer: `<p>鎵嬫満涓撶敤鐗?/p>` },
					curl: { title: "鎵嬫満涓嬭浇", footer: `<p>鎵嬫満涓撶敤鐗?/p>` },
					bitcomet: { title: "鎵嬫満涓嬭浇", footer: `<p>鎵嬫満涓撶敤鐗?/p>` },
					abdm: { title: "鎵嬫満涓嬭浇", footer: `<p>鎵嬫満涓撶敤鐗?/p>` }
				},
				themes: [
					{ color: "#09AAFF", name: "搴︾洏|缁忓吀钃? },
					{ color: "#cc3235", name: "搴︾洏|骞冲畨绾? },
					{ color: "#518c17", name: "搴︾洏|鐩庣劧缁? },
					{ color: "#ed944b", name: "搴︾洏|鍛ㄥ勾姗? },
					{ color: "#f969a5", name: "搴︾洏|骞镐細绮? },
					{ color: "#bca280", name: "搴︾洏|鍗堝悗妫? },
					{ color: "#b673ab", name: "搴︾洏|鐗╄绱? },
					{ color: "#574AB8", name: "搴︾洏|鏄熺┖绱? },
					{ color: "#1d2327", name: "OpenAI|榛樿榛? },
					{ color: "#18a497", name: "OpenAI|榛樿闈? },
					{ color: "#637dff", name: "搴﹂噷鍙亅闇炲厜绱? },
					{ color: "#0d53ff", name: "澶稿厠|鏋佺畝钃? },
					{ color: "#3181f9", name: "绉诲姩|褰╀簯钃? },
					{ color: "#f8d800", name: "鏋滄牳|鏌犳榛? },
					{ color: "#0396ff", name: "鏋滄牳|榛樿钃? },
					{ color: "#32ccbc", name: "鏋滄牳|纰ф尝缁? },
					{ color: "#f6416c", name: "鏋滄牳|鐜懓绾? },
					{ color: "#2271b1", name: "鏂囨淳|榛樿钃? },
					{ color: "#59524c", name: "鏂囨淳|鍜栧暋鐏? },
					{ color: "#ff679a", name: "鍝斿摡|灏戝コ绮? },
					{ color: "#f44236", name: "鍝斿摡|楂樿兘绾? },
					{ color: "#fec107", name: "鍝斿摡|鍜歌泲榛? },
					{ color: "#8bc24a", name: "鍝斿摡|鏃╄嫍缁? },
					{ color: "#2594ed", name: "鍝斿摡|瀹濈煶钃? },
					{ color: "#9c28b1", name: "鍝斿摡|缃楀叞绱? }
				]
			}
		},
		$baidu: {
			api: {
				ua: {
					downloadLink: "pan.baidu.com"
				},
				getAccessToken: "https://openapi.baidu.com/oauth/2.0/authorize?response_type=token&scope=basic,netdisk&client_id=omiOnr2tYnN9vSyDErcVFWpPU2mZA7YO&redirect_uri=oob&confirm_login=0",
				getLink: "https://pan.baidu.com/rest/2.0/xpan/multimedia?method=filemetas&dlink=1",
				getFiles: "https://pan.baidu.com/rest/2.0/xpan/file?method=list&showempty=1",
				getShareLink: "https://pan.baidu.com/api/sharedownload?channel=chunlei&clienttype=0&web=1&app_id=250528",
				getShareSign: "https://pan.baidu.com/share/tplconfig?fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0&view_mode=1",
				getShareVerify: "https://pan.baidu.com/share/verify?channel=chunlei&clienttype=0&web=1&app_id=250528",
				getShareFiles: "https://pan.baidu.com/rest/2.0/xpan/share?method=list&showempty=1"
			},
			mount: {
				home: ".frame-main>div>div>div>div:has(.g-dropdown-button.g-new-create)",
				main: ".wp-s-agile-tool-bar__header",
				share: ".module-share-top-bar .x-button-box .g-dropdown-button.tools-more"
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忓彲浠ヨ嚜鍔ㄨ缃敤鎴蜂唬鐞?UA)锛岀劧鍚庝笅杞姐€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?b>鏃х増 IDM</b> 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮?b>鏃犳硶涓嬭浇瓒呰繃 50MB 鐨勬枃浠?/b>锛岃嫢瓒呰繃鐐瑰嚮浼氭棤鍙嶅簲锛堟湇鍔″櫒 403锛夈€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙,
				copy: `娉細姝ゆ湇鍔＄洿鎺ヨ闂秴杩?50MB 鏂囦欢鐨勭洿閾句細瀵艰嚧鏈嶅姟鍣ㄥ洖鎶?403 閿欒<br/>濡傞渶璁块棶锛?b>璇蜂慨鏀圭敤鎴蜂唬鐞?UA)涓?"pan.baidu.com"</b>`
			}
		},
		$aliyun: {
			api: {
				getLink: "https://api.aliyundrive.com/v2/file/get_download_url",
				getShareLink: "https://api.aliyundrive.com/v2/file/get_share_link_download_url"
			},
			mount: {
				home: `[class^="header--"]>[class^="actions--"]`,
				share: `[class^="banner--"]>[class^="right--"]`,
				list: `[class^="node-list-table-view--"]`,
				grid: `[class^="node-list-grid-view--"]`,
				switch: `[class^="switch-wrapper--"]`
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忓彲浠ヨ嚜鍔ㄨ缃?Referer锛岀劧鍚庝笅杞姐€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙,
				copy: `娉細姝ゆ湇鍔＄洿鎺ヨ闂洿閾句細瀵艰嚧鏈嶅姟鍣ㄥ洖鎶?403 閿欒<br/>濡傞渶璁块棶锛?b>璇蜂慨鏀?Referer 涓?"https://${location.host}/"</b>`,
				filename: `娉細姝ゆ湇鍔″湪涓嬭浇楂樺嘲鏈熸椂<b>鍙兘涓嶄細</b>鍚戝鎴风鍥炴姤鏂囦欢鍚嶏紝涓嬭浇鏃堕渶瑕佸鍒舵枃浠跺悕銆俙
			}
		},
		$mcloud: {
			api: {
				getLink: "https://personal-kd-njs.yun.139.com/hcy/file/getDownloadUrl"
			},
			mount: {
				home: ".top_button",
				share: ".top-btns"
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙
			}
		},
		$tcloud: {
			api: {
				getAccessToken: "https://api.cloud.189.cn/open/oauth2/ssoH5.action",
				getLink: "https://api.cloud.189.cn/open/file/getFileDownloadUrl.action"
			},
			mount: {
				home: "[class*=\"FileHead_file-head-left\"]",
				share: ".nav-opea"
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙
			}
		},
		$xunlei: {
			api: {
				mirror: [
					"vod0780-aliyun04-vip-lixian.xunlei.com", "vod0781-aliyun04-vip-lixian.xunlei.com", "vod3379-aliyun04-vip-lixian.xunlei.com", "vod3429-aliyun04-vip-lixian.xunlei.com", "vod3459-aliyun04-vip-lixian.xunlei.com", "vod3533-aliyun04-vip-lixian.xunlei.com", "vod4252-aliyun04-vip-lixian.xunlei.com", "vod4253-aliyun04-vip-lixian.xunlei.com", "vod4320-aliyun04-vip-lixian.xunlei.com", "vod4321-aliyun04-vip-lixian.xunlei.com", "vod0555-aliyun06-vip-lixian.xunlei.com", "vod0556-aliyun06-vip-lixian.xunlei.com", "vod1284-aliyun06-vip-lixian.xunlei.com", "vod1285-aliyun06-vip-lixian.xunlei.com", "vod1363-aliyun06-vip-lixian.xunlei.com", "vod1372-aliyun06-vip-lixian.xunlei.com", "vod1629-aliyun06-vip-lixian.xunlei.com", "vod1630-aliyun06-vip-lixian.xunlei.com", "vod1703-aliyun06-vip-lixian.xunlei.com", "vod1704-aliyun06-vip-lixian.xunlei.com", "vod1844-aliyun06-vip-lixian.xunlei.com", "vod0254-aliyun08-vip-lixian.xunlei.com", "vod0255-aliyun08-vip-lixian.xunlei.com", "vod0256-aliyun08-vip-lixian.xunlei.com", "vod0257-aliyun08-vip-lixian.xunlei.com", "vod0261-aliyun08-vip-lixian.xunlei.com", "vod0262-aliyun08-vip-lixian.xunlei.com", "vod0263-aliyun08-vip-lixian.xunlei.com", "vod0264-aliyun08-vip-lixian.xunlei.com", "vod0759-aliyun08-vip-lixian.xunlei.com", "vod0760-aliyun08-vip-lixian.xunlei.com", "vod9410-aliyun08-vip-lixian.xunlei.com", "vod9411-aliyun08-vip-lixian.xunlei.com", "vod9412-aliyun08-vip-lixian.xunlei.com", "vod0080-b02-vip-lixian.xunlei.com", "vod0432-b02-vip-lixian.xunlei.com", "vod0531-b02-vip-lixian.xunlei.com", "vod0532-b02-vip-lixian.xunlei.com", "vod0533-b02-vip-lixian.xunlei.com", "vod0534-b02-vip-lixian.xunlei.com", "vod0537-b02-vip-lixian.xunlei.com", "vod0563-b02-vip-lixian.xunlei.com", "vod0565-b02-vip-lixian.xunlei.com", "vod0566-b02-vip-lixian.xunlei.com", "vod0568-b02-vip-lixian.xunlei.com", "vod0571-b02-vip-lixian.xunlei.com", "vod0572-b02-vip-lixian.xunlei.com", "vod0573-b02-vip-lixian.xunlei.com", "vod0595-b02-vip-lixian.xunlei.com", "vod0596-b02-vip-lixian.xunlei.com", "vod0597-b02-vip-lixian.xunlei.com", "vod0598-b02-vip-lixian.xunlei.com", "vod0636-b02-vip-lixian.xunlei.com", "vod0637-b02-vip-lixian.xunlei.com", "vod0638-b02-vip-lixian.xunlei.com", "vod0639-b02-vip-lixian.xunlei.com", "vod0640-b02-vip-lixian.xunlei.com", "vod0641-b02-vip-lixian.xunlei.com", "vod0642-b02-vip-lixian.xunlei.com", "vod0643-b02-vip-lixian.xunlei.com", "vod0644-b02-vip-lixian.xunlei.com", "vod0645-b02-vip-lixian.xunlei.com", "vod0646-b02-vip-lixian.xunlei.com", "vod0647-b02-vip-lixian.xunlei.com", "vod0648-b02-vip-lixian.xunlei.com", "vod0649-b02-vip-lixian.xunlei.com", "vod0650-b02-vip-lixian.xunlei.com", "vod0651-b02-vip-lixian.xunlei.com", "vod0652-b02-vip-lixian.xunlei.com", "vod0653-b02-vip-lixian.xunlei.com", "vod0654-b02-vip-lixian.xunlei.com", "vod0725-b02-vip-lixian.xunlei.com", "vod0726-b02-vip-lixian.xunlei.com", "vod0727-b02-vip-lixian.xunlei.com", "vod0006-b05-vip-lixian.xunlei.com", "vod0009-b05-vip-lixian.xunlei.com", "vod0010-b05-vip-lixian.xunlei.com", "vod0011-b05-vip-lixian.xunlei.com", "vod0012-b05-vip-lixian.xunlei.com", "vod0013-b05-vip-lixian.xunlei.com", "vod0014-b05-vip-lixian.xunlei.com", "vod0043-b05-vip-lixian.xunlei.com", "vod0044-b05-vip-lixian.xunlei.com", "vod0045-b05-vip-lixian.xunlei.com", "vod0051-b05-vip-lixian.xunlei.com", "vod0053-b05-vip-lixian.xunlei.com", "vod0054-b05-vip-lixian.xunlei.com", "vod0055-b05-vip-lixian.xunlei.com", "vod0139-b05-vip-lixian.xunlei.com", "vod0140-b05-vip-lixian.xunlei.com", "vod0141-b05-vip-lixian.xunlei.com", "vod0142-b05-vip-lixian.xunlei.com", "vod0143-b05-vip-lixian.xunlei.com", "vod0349-b05-vip-lixian.xunlei.com", "vod0001-c01-vip-lixian.xunlei.com", "vod0002-c01-vip-lixian.xunlei.com", "vod0003-c01-vip-lixian.xunlei.com", "vod0004-c01-vip-lixian.xunlei.com", "vod0005-c01-vip-lixian.xunlei.com", "vod0070-h01-vip-lixian.xunlei.com", "vod0071-h01-vip-lixian.xunlei.com", "vod0074-h01-vip-lixian.xunlei.com", "vod0075-h01-vip-lixian.xunlei.com", "vod0131-h01-vip-lixian.xunlei.com", "vod0132-h01-vip-lixian.xunlei.com", "vod0153-h01-vip-lixian.xunlei.com", "vod0088-h04-vip-lixian.xunlei.com", "vod0089-h04-vip-lixian.xunlei.com", "vod0090-h04-vip-lixian.xunlei.com", "vod0091-h04-vip-lixian.xunlei.com", "vod0092-h04-vip-lixian.xunlei.com", "vod0093-h04-vip-lixian.xunlei.com", "vod0094-h04-vip-lixian.xunlei.com", "vod0097-h04-vip-lixian.xunlei.com", "vod0098-h04-vip-lixian.xunlei.com", "vod0099-h04-vip-lixian.xunlei.com", "vod0100-h04-vip-lixian.xunlei.com", "vod0101-h04-vip-lixian.xunlei.com", "vod0105-h04-vip-lixian.xunlei.com", "vod0128-h04-vip-lixian.xunlei.com", "vod0129-h04-vip-lixian.xunlei.com", "vod0143-h04-vip-lixian.xunlei.com", "vod0317-h04-vip-lixian.xunlei.com", "vod0318-h04-vip-lixian.xunlei.com", "vod0319-h04-vip-lixian.xunlei.com", "vod0320-h04-vip-lixian.xunlei.com", "vod0003-h05-vip-lixian.xunlei.com", "vod0004-h05-vip-lixian.xunlei.com", "vod0007-h05-vip-lixian.xunlei.com", "vod0008-h05-vip-lixian.xunlei.com", "vod0009-h05-vip-lixian.xunlei.com", "vod0010-h05-vip-lixian.xunlei.com", "vod0012-h05-vip-lixian.xunlei.com", "vod0013-h05-vip-lixian.xunlei.com", "vod0014-h05-vip-lixian.xunlei.com", "vod0017-h05-vip-lixian.xunlei.com", "vod0097-h05-vip-lixian.xunlei.com", "vod0098-h05-vip-lixian.xunlei.com", "vod0099-h05-vip-lixian.xunlei.com", "vod0116-h05-vip-lixian.xunlei.com", "vod0117-h05-vip-lixian.xunlei.com", "vod0121-h05-vip-lixian.xunlei.com", "vod0122-h05-vip-lixian.xunlei.com", "vod0131-h05-vip-lixian.xunlei.com", "vod0145-h05-vip-lixian.xunlei.com", "vod0146-h05-vip-lixian.xunlei.com", "vod0184-h05-vip-lixian.xunlei.com", "vod0185-h05-vip-lixian.xunlei.com", "vod0221-h05-vip-lixian.xunlei.com", "vod0222-h05-vip-lixian.xunlei.com", "vod0223-h05-vip-lixian.xunlei.com", "vod0224-h05-vip-lixian.xunlei.com", "vod0225-h05-vip-lixian.xunlei.com", "vod0227-h05-vip-lixian.xunlei.com", "vod0252-h05-vip-lixian.xunlei.com", "vod0253-h05-vip-lixian.xunlei.com", "vod0254-h05-vip-lixian.xunlei.com", "vod0001-m01-vip-lixian.xunlei.com", "vod0002-m01-vip-lixian.xunlei.com", "vod0003-m01-vip-lixian.xunlei.com", "vod0006-m01-vip-lixian.xunlei.com", "vod0007-m01-vip-lixian.xunlei.com", "vod0008-m01-vip-lixian.xunlei.com", "vod0010-m01-vip-lixian.xunlei.com", "vod0011-m01-vip-lixian.xunlei.com", "vod0012-m01-vip-lixian.xunlei.com", "vod0013-m01-vip-lixian.xunlei.com", "vod0014-m01-vip-lixian.xunlei.com", "vod0019-m01-vip-lixian.xunlei.com", "vod0020-m01-vip-lixian.xunlei.com", "vod0021-m01-vip-lixian.xunlei.com", "vod0022-m01-vip-lixian.xunlei.com", "vod0064-txyun08-vip-lixian.xunlei.com", "vod0065-txyun08-vip-lixian.xunlei.com", "vod0066-txyun08-vip-lixian.xunlei.com", "vod0067-txyun08-vip-lixian.xunlei.com", "vod0068-txyun08-vip-lixian.xunlei.com", "vod0069-txyun08-vip-lixian.xunlei.com", "vod0070-txyun08-vip-lixian.xunlei.com", "vod0340-txyun08-vip-lixian.xunlei.com", "vod0341-txyun08-vip-lixian.xunlei.com", "vod0032-z01-vip-lixian.xunlei.com", "vod0035-z01-vip-lixian.xunlei.com", "vod0036-z01-vip-lixian.xunlei.com", "vod0037-z01-vip-lixian.xunlei.com", "vod0038-z01-vip-lixian.xunlei.com", "vod0039-z01-vip-lixian.xunlei.com", "vod0040-z01-vip-lixian.xunlei.com", "vod0041-z01-vip-lixian.xunlei.com", "vod0042-z01-vip-lixian.xunlei.com", "vod0091-z01-vip-lixian.xunlei.com", "vod0093-z01-vip-lixian.xunlei.com", "vod0131-z01-vip-lixian.xunlei.com", "vod0135-z01-vip-lixian.xunlei.com", "vod0136-z01-vip-lixian.xunlei.com", "vod0146-z01-vip-lixian.xunlei.com", "vod0155-z01-vip-lixian.xunlei.com", "vod0156-z01-vip-lixian.xunlei.com", "vod0167-z01-vip-lixian.xunlei.com", "vod0195-z01-vip-lixian.xunlei.com", "vod0196-z01-vip-lixian.xunlei.com", "vod0281-z01-vip-lixian.xunlei.com"
				],
				getLink: "https://api-pan.xunlei.com/drive/v1/files/"
			},
			mount: {
				home: `[class^="FileMenu__menu--"]`,
				share: `[class^="Share__batchActionBox--"]`
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忓彲浠ヨ嚜鍔ㄨ缃枃浠跺悕锛岀劧鍚庝笅杞姐€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ湇鍔′笉浼氬悜瀹㈡埛绔洖鎶ユ枃浠跺悕锛岄€夌敤姝ゆ柟寮忎笅杞介渶鎵嬪姩閲嶅懡鍚嶆枃浠躲€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				filename: `娉細姝ゆ湇鍔′笉浼氬悜瀹㈡埛绔洖鎶ユ枃浠跺悕锛屼笅杞芥椂闇€瑕佸鍒舵枃浠跺悕銆俙
			}
		},
		$quark: {
			api: {
				ua: {
					downloadLink: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) quark-cloud-drive/3.20.0 Chrome/112.0.5615.165 Electron/24.1.3.8 Safari/537.36 Channel/pckk_other_ch"
				},
				getLink: "https://drive-pc.quark.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=ucpro"
			},
			mount: {
				home: ".btn-operate .btn-main",
				share: ".share-btns"
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忓彲浠ヨ嚜鍔ㄨ缃敤鎴蜂唬鐞?UA)锛岀劧鍚庝笅杞姐€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙
			}
		},
		$uc: {
			api: {
				ua: {
					downloadLink: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) uc-cloud-drive/2.5.20 Chrome/100.0.4896.160 Electron/18.3.5.4-b478491100 Safari/537.36 Channel/pckk_other_ch"
				},
				getLink: "https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser"
			},
			mount: {
				home: ".btn-operate .btn-main",
				share: ".file-info-share-buttom"
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忓彲浠ヨ嚜鍔ㄨ缃敤鎴蜂唬鐞?UA)锛岀劧鍚庝笅杞姐€?br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙
			}
		},
		$123pan: {
			api: {
				getLink: "https://www.123pan.com/api/file/download_info",
				getShareLink: "https://www.123pan.com/api/share/download/info"
			},
			mount: {
				home: ".home-operator .home-operator-button-group",
				share: ".conter .rightInfo",
				shareNew: ".content .content-header-container-wrap .rightInfo, .single-file-sharing-container-content-file-operate"
			},
			dom: {
				enhance: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>涓嶄細</b>琚?IDM 鎹曡幏銆俙,
				normal: `+<br/>姝ゆ柟寮忕殑涓嬭浇璇锋眰<b>鍙兘浼?/b>琚?IDM 鎹曡幏銆俙
			}
		}
	}

	/**
	 * 鍩虹宸ュ叿闆嗗悎
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let base = {
		/**
		 * 娉ㄥ唽 GreaseMonkey-Compatible-Manager 鎵╁睍鑿滃崟鍛戒护
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鍖呭惈 "璁剧疆"銆?缇庡寲"銆?鏇存柊" 鍜?"璋冭瘯" 鍥涗釜鍔熻兘鍏ュ彛
		 */
		registerMenuCommand() {
			GM_registerMenuCommand("鈿欙笍 璁剧疆", () => {
				base.showSetting();
			});
			GM_registerMenuCommand("馃崈锔?缇庡寲", () => {
				base.showBeautify();
			});
			GM_registerMenuCommand("馃搩 鏇存柊", () => {
				base.showUpdate();
			});
			GM_registerMenuCommand("馃洜锔?璋冭瘯", () => {
				base.showDebug();
			});
		},

		/**
		 * 鍒ゆ柇 JavaScript 瀵硅薄绫诲瀷
		 * @author 娌瑰皬鐚?		 * @description 閫氳繃 Object.prototype.toString 绮剧‘璇嗗埆瀵硅薄绫诲瀷
		 * @param {*} obj - 寰呮娴嬪璞?		 * @returns {String} 绫诲瀷鍚嶇О锛堝叏灏忓啓锛夛紝濡傦細array/number/null/date 绛?		 * @example
		 * isType([]) // => "array"
		 * isType(null) // => "null"
		 */
		isType(obj) {
			return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		},

		/**
		 * 鑾峰彇 GreaseMonkey-Compatible-Manager 瀛樺偍鐨勫€?		 * @author 娌瑰皬鐚?		 * @param {String} name - 瀛樺偍閿悕
		 * @returns {*} 瀛樺偍鐨勫€?		 */
		getValue(name) {
			return GM_getValue(name);
		},

		/**
		 * 璁剧疆 GreaseMonkey-Compatible-Manager 瀛樺偍鐨勫€?		 * @author 娌瑰皬鐚?		 * @param {String|Array} path - 瀛樺偍閿悕鎴栬矾寰勬暟缁?		 * @param {*} value - 瑕佸瓨鍌ㄧ殑鍊?		 */
		setValue(path, value) {
			if (base.isType(path) === "string") {
				GM_setValue(path, value);
				return;
			}
			let key = path[0];
			let obj = this.getValue(key) || {};
			let current = obj;
			for (let i = 1; i < path.length - 1; i++) {
				let keyPart = path[i];
				if (!current[keyPart]) current[keyPart] = "";
				current = current[keyPart];
			}
			current[path[path.length - 1]] = value;
			GM_setValue(key, obj);
		},

		/**
		 * 鍒犻櫎 GreaseMonkey-Compatible-Manager 瀛樺偍鐨勫€?		 * @author 娌瑰皬鐚?		 * @param {String|Array} key - 鍗曚釜閿悕
		 */
		delValue(key) {
			return GM_deleteValue(key);
		},

		/**
		 * 浠?localStorage 鑾峰彇瀛樺偍鍊?		 * @description 鑷姩瑙ｆ瀽 JSON 鏍煎紡鍐呭
		 * @author 娌瑰皬鐚?		 * @param {String} key - 瀛樺偍閿悕
		 * @returns {*} 瀛樺偍鐨勫師濮嬪€兼垨瑙ｆ瀽鍚庣殑瀵硅薄
		 */
		getStorage(key) {
			try {
				return JSON.parse(localStorage.getItem(key));
			} catch (e) {
				return localStorage.getItem(key);
			}
		},

		/**
		 * 璁剧疆 localStorage 瀛樺偍鍊?		 * @author 娌瑰皬鐚?		 * @description 鑷姩 `JSON.stringify` `瀵硅薄` `鏁扮粍` 绫诲瀷鐨勬暟鎹?		 * @param {String} key - 瀛樺偍閿悕
		 * @param {*} value - 瑕佸瓨鍌ㄧ殑鍊?		 */
		setStorage(key, value) {
			if (this.isType(value) === "object" || this.isType(value) === "array") {
				return localStorage.setItem(key, JSON.stringify(value));
			}
			return localStorage.setItem(key, value);
		},

		/**
		 * 鍒犻櫎 localStorage 瀛樺偍鍊?		 * @author 娌瑰皬鐚?		 * @description 娌′粈涔堢壒鍒殑
		 * @param {String} key - 瀛樺偍閿悕
		 */
		delStorage(key) {
			return localStorage.removeItem(key);
		},

		/**
		 * 鍓创鏉垮啓鍏?		 * @author 娌瑰皬鐚?		 * @param {String} text - 瑕佸鍒剁殑鏂囨湰鍐呭
		 */
		setClipboard(text) {
			GM_setClipboard(text, "text");
		},

		/**
		 * Base64-URI 缂栫爜澶勭悊
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鑷姩鎵ц URI 鍏煎鎬х紪鐮佽浆鎹?		 * @param {String} str - 寰呯紪鐮佺殑瀛楃涓?		 * @returns {String} Base64 缂栫爜缁撴灉瀛楃涓?		 */
		encodeBase(str) {
			try { str = btoa(str) } catch { }
			return str;
		},

		/**
		 * Base64-URI 瑙ｇ爜澶勭悊
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鑷姩鎵ц URI 鍏煎鎬цВ鐮佽浆鎹?		 * @param {String} str - Base64 缂栫爜瀛楃涓?		 * @returns {String} 瑙ｇ爜鍚庣殑鍘熷瀛楃涓?		 */
		decodeBase(str) {
			try { str = decodeURIComponent(str) } catch { }
			try { str = atob(str) } catch { }
			try { str = decodeURIComponent(str) } catch { }
			return str;
		},

		/**
		 * 鏁板瓧琛ラ浂鏍煎紡鍖?		 * @author hmjz100
		 * @description 瀵?1-9 鐨勬暟瀛楄嚜鍔ㄨˉ鍓嶅闆?		 * @param {Number} i - 寰呮牸寮忓寲鐨勬暟瀛?		 * @returns {String} 鏍煎紡鍖栧悗鐨勫瓧绗︿覆锛堝"05"锛?		 */
		timeFormat(i) {
			if (i >= 0 && i <= 9) {
				return "0" + i;
			} else {
				return i;
			}
		},

		/**
		 * 鑾峰彇鏂囦欢鎵╁睍鍚嶅苟杞负澶у啓
		 * @author 娌瑰皬鐚?		 * @param {String} name - 瀹屾暣鏂囦欢鍚?		 * @returns {String} 澶у啓鐨勬枃浠舵墿灞曞悕锛堝 `TXT`锛?		 */
		getExtension(name) {
			let reg = /(?!\.)\w+$/;
			if (reg.test(name)) {
				let match = name.match(reg);
				return match[0].toUpperCase();
			}
			return "";
		},

		/**
		 * 鏂囦欢澶у皬鏍煎紡鍖?		 * @author hmjz100
		 * @description 鑷姩杞崲鍗曚綅鍒版渶鍚堥€傜殑瀛樺偍鍗曚綅锛堝 `1.2MB`锛夛紝鏀寔 1000/1024 杩涘埗鍒囨崲
		 * @param {Number} value - 鏂囦欢瀛楄妭澶у皬
		 * @returns {String} 鍙鏍煎紡鐨勫ぇ灏忔弿杩?		 */
		sizeFormat(value = 0) {
			var sizeUnitBase = 1024
			try { value = Number(value) } catch { }
			if (typeof value === "number" && !isNaN(value) && value >= 0) {
				var units = sizeUnitBase === 1024
					? ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
					: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

				var unitNames = ["瀛楄妭", "鍗冨瓧鑺?, "鍏嗗瓧鑺?, "鍚夊瓧鑺?, "澶瓧鑺?, "鎷嶅瓧鑺?, "鑹惧瓧鑺?, "娉藉瓧鑺?, "灏у瓧鑺?];

				if (value === 0) return "0B(瀛楄妭)";

				// 璁＄畻鍗曚綅灞傜骇锛堝彇鏁存暟閮ㄥ垎锛?				var index = Math.min(
					Math.floor(Math.log(value) / Math.log(sizeUnitBase)),
					units.length - 1
				);

				var size = value / Math.pow(sizeUnitBase, index);
				var formattedSize = size % 1 === 0 ? size.toFixed(0) : size.toFixed(2);

				return `${formattedSize}${unitNames[index]}(${units[index]})`;
			}
			return "";
		},

		/**
		 * 灏嗗墿浣欐椂闂达紙绉掞級鏍煎紡鍖栦负鍙鐨勬椂闂村瓧绗︿覆
		 *
		 * @param {Number} remainingTimeSeconds 鍓╀綑鎬荤鏁帮紙鏀寔灏忔暟锛?		 * @returns {String} 鏍煎紡鍖栧悗鐨勬椂闂村瓧绗︿覆锛屽寘鍚互涓嬪彲鑳芥牸寮忥細
		 *   - "X澶?HH鏃?MM鍒?SS绉?锛堣秴杩?澶╋級
		 *   - "HH鏃?MM鍒?SS绉?锛堣秴杩?灏忔椂锛?		 *   - "MM鍒?SS绉?锛堣秴杩?鍒嗛挓锛?		 *   - "SS绉?锛?鍒嗛挓鍐咃級
		 *   - "璁＄畻涓?.."锛堟棤鏁堣緭鍏ユ椂锛?		 *
		 * @example
		 * formatRemainingTime(86400) // "1澶?00鏃?00鍒?00绉?
		 * formatRemainingTime(3661.5) // "01鏃?01鍒?01绉?
		 * formatRemainingTime(0) // "鍗冲皢瀹屾垚"
		 * formatRemainingTime(-5) // "璁＄畻涓?.."
		 * formatRemainingTime(NaN) // "璁＄畻涓?.."
		 */
		rtimeFormat(remainingTimeSeconds) {
			if (!Number.isFinite(remainingTimeSeconds) || remainingTimeSeconds < 0) {
				return "璁＄畻涓?..";
			}
			let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
			remainingTimeSeconds %= (60 * 60 * 24);
			let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
			remainingTimeSeconds %= (60 * 60);
			let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
			let remainingSeconds = Math.floor(remainingTimeSeconds % 60);
			if (remainingDays > 0) {
				return `${remainingDays}澶?${base.timeFormat(remainingHours)}鏃?${base.timeFormat(remainingMinutes)}鍒?${base.timeFormat(remainingSeconds)}绉抈;
			} else if (remainingHours > 0) {
				return `${base.timeFormat(remainingHours)}鏃?${base.timeFormat(remainingMinutes)}鍒?${base.timeFormat(remainingSeconds)}绉抈;
			} else if (remainingMinutes > 0) {
				return `${base.timeFormat(remainingMinutes)}鍒?${base.timeFormat(remainingSeconds)}绉抈;
			} else if (remainingSeconds > 0) {
				return `${remainingSeconds}绉抈;
			} else {
				return "0绉?;
			}
		},

		/**
		 * 鏂囦欢鍒楄〃鎺掑簭
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鎸変腑鏂囨嫾闊抽『搴忓鏂囦欢鏁扮粍杩涜鎺掑簭
		 * @param {Array} arr - 鍖呭惈鏂囦欢瀵硅薄鐨勬暟缁?		 * @param {String} arr[].filename - 鏂囦欢鍚嶅睘鎬э紙鍏煎 server_filename锛?		 */
		sortByName(arr) {
			arr.sort(() => {
				return (a, b) => {
					let p1 = a.filename ? a.filename : a.server_filename;
					let p2 = b.filename ? b.filename : b.server_filename;
					return p1.localeCompare(p2, "zh-CN");
				};
			});
		},

		/**
		 * 鏂囦欢鍚嶅畨鍏ㄥ鐞?		 * @author 娌瑰皬鐚?		 * @description 鏇挎崲闈炴硶瀛楃涓轰笅鍒掔嚎
		 * @param {String} name - 鍘熷鏂囦欢鍚?		 * @returns {String} 淇鍚庣殑瀹夊叏鏂囦欢鍚?		 */
		fixFilename(name) {
			let replace = /[!?&|`"'*\/:<>\\]/g
			return name.replace(replace, "_");
		},

		/**
		 * 澶存爣鍑嗗寲
		 * @author hmjz100
		 * @description 鏍囧噯鍖栬姹傚ご銆佸搷搴斿ご鐨勯敭锛屼娇鐢ㄩ┘宄板懡鍚?		 * @param {String|Object} headers - 璇锋眰澶淬€佸搷搴斿ご鐨勫瓧绗︿覆鎴栧璞?		 * @param {Boolean} addDeafult - 鏄惁涓嶆坊鍔犻粯璁ゅご
		 * @returns {Object} 鏍囧噯鍖栧悗鐨?Headers
		 */
		standHeaders(headers = {}, addDeafult = false) {
			if (!headers) return {};
			if (typeof headers === 'string') {
				const rawHeaders = {};
				headers.split(/[\r\n]+/).forEach(line => {
					if (!line.trim() || !line.includes(':')) return;
					const [key, ...valueParts] = line.split(':');
					rawHeaders[key.trim().toLowerCase()] = valueParts.join(':').trim();
				});
				headers = rawHeaders;
			}
			let newHeaders = {};
			for (let key in headers) {
				let value
				if (this.isType(headers[key]) === "object") value = JSON.stringify(headers[key]);
				else value = String(headers[key]);
				newHeaders[key.toLowerCase().split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")] = value;
			}
			if (addDeafult) return newHeaders;
			return {
				"Dnt": "", "Cache-Control": "no-cache", "Pragma": "no-cache", "Expires": "0",
				"User-Agent": navigator.userAgent,
				"Origin": location.origin,
				"Referer": `${location.origin}/`,
				...newHeaders
			};
		},

		/**
		 * 鐢熸垚 cURL 涓嬭浇鍛戒护
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鏍规嵁缁堢绫诲瀷鐢熸垚瀵瑰簲 curl 鍛戒护锛屾敮鎸佹柇鐐圭画浼狅紝鑷姩澶勭悊鏂囦欢鍚嶇壒娈婂瓧绗?		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {String} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {String} 缂栫爜鍚庣殑 curl 鍛戒护瀛楃涓?		 */
		convertLinkToCurl(link, filename, headers) {
			let terminal = base.getValue("setting_curl_terminal");
			filename = base.fixFilename(filename);
			return `${terminal !== "wp" ? "curl" : "curl.exe"} -L -C - "${link}" -o "${filename}"${headers ? (" " + headers) : ""}`;
		},

		/**
		 * 鐢熸垚 Aria2 涓嬭浇鍛戒护
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 灏嗛摼鎺ヨ浆鎹负 Aria2 鏍煎紡鍛戒护锛岃嚜鍔ㄥ鐞嗘枃浠跺悕鐗规畩瀛楃
		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {String} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {String} 缂栫爜鍚庣殑 aria2c 鍛戒护瀛楃涓?		 */
		convertLinkToAria2(link, filename, headers) {
			filename = base.fixFilename(filename);
			return `aria2c "${link}" --out "${filename}"${headers ? (" " + headers) : ""}`;
		},

		/**
		 * 鐢熸垚 1DM+ / 鎵嬫満涓嬭浇鍣ㄥ彲鐢ㄦ枃鏈?		 * @description 閾炬帴 + User-Agent / Referer锛屼究浜?1DM+ 浠庡壀璐存澘瀵煎叆骞跺甫璇锋眰澶?		 */
		convertLinkTo1DM(link, filename, headerObj = {}) {
			filename = base.fixFilename(filename || "download");
			let h = base.standHeaders(headerObj || {});
			let ua = h["User-Agent"] || navigator.userAgent;
			let referer = h["Referer"] || (location.origin + "/");
			// 1DM+ 鏀寔銆岄摼鎺ユ崲琛?+ Header: value銆嶆牸寮忎粠鍓创鏉胯瘑鍒?			return `${link}\nUser-Agent: ${ua}\nReferer: ${referer}\nFilename: ${filename}`;
		},

		/**
		 * 鐢熸垚 ytdlnis / yt-dlp 椋庢牸鏂囨湰
		 */
		convertLinkToYtdlnis(link, filename, headerObj = {}) {
			filename = base.fixFilename(filename || "download");
			let h = base.standHeaders(headerObj || {});
			let ua = h["User-Agent"] || navigator.userAgent;
			let referer = h["Referer"] || (location.origin + "/");
			return `${link}\n  --add-header "User-Agent:${ua}"\n  --add-header "Referer:${referer}"\n  -o "${filename}"`;
		},

		/**
		 * 缁勮銆岄摼鎺?+ 鎻愬彇鐮併€嶅垎浜枃妗堝苟澶嶅埗
		 */
		buildShareText(shareInfo) {
			if (!shareInfo) return "";
			let url = shareInfo.fullUrl || shareInfo.url || location.href.split("?")[0];
			if (shareInfo.url && !String(shareInfo.url).startsWith("http")) {
				// 鐧惧害鐭摼褰㈡€?				if (location.host.includes("baidu")) url = `https://pan.baidu.com/s/1${shareInfo.url}`;
				else url = location.href.split("?")[0];
			}
			let pwd = shareInfo.pwd || "";
			let lines = [`閾炬帴: ${url}`];
			if (pwd) lines.push(`鎻愬彇鐮? ${pwd}`);
			return lines.join("\n");
		},

		/**
		 * 灏濊瘯浠庡綋鍓嶉〉鏀堕泦鍒嗕韩淇℃伅
		 */
		collectShareInfo() {
			try {
				if (temp.shareInfo && (temp.shareInfo.pwd || temp.shareInfo.url || temp.shareInfo.fullUrl)) {
					return temp.shareInfo;
				}
				let url = new URL(location.href);
				let pwd = url.searchParams.get("pwd") || url.searchParams.get("password") || url.searchParams.get("passcode") || "";
				// 鐧惧害鍒嗕韩
				if (location.host.includes("baidu") && /\/s\//.test(url.pathname)) {
					let surl = url.pathname.split("/").pop().replace(/^1(.{22})$/, "$1");
					pwd = pwd || localStorage.getItem(`${surl}_pwd`) || "";
					return { url: surl, pwd, fullUrl: `https://pan.baidu.com/s/1${surl}` };
				}
				// 閫氱敤锛歎RL 涓婂甫 pwd
				if (pwd) return { fullUrl: location.href.split("?")[0], pwd };
				return { fullUrl: location.href.split("?")[0], pwd: "" };
			} catch (e) {
				return null;
			}
		},

		/**
		 * 鐢熸垚 BC 鍗忚涓嬭浇閾炬帴
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 灏嗛摼鎺ヨ浆鎹负 BC 鍗忚鏍煎紡锛岃嚜鍔ㄥ鐞?URL 缂栫爜
		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {String} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {String} 缂栫爜鍚庣殑 BC 鍗忚 URL
		 */
		convertLinkToBitComet(link, filename, headers) {
			filename = base.fixFilename(filename);
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}${headers ? ("&" + headers) : ""}ZZ`;
			return `bc://http/${base.encodeBase(bc)}`;
		},

		/**
		 * 鍙戦€侀摼鎺ュ埌 IDM 涓嬭浇鍣?		 * @author hmjz100
		 * @author Night-stars-1
		 * @description IDM 涓嬭浇蹇呭
		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {Array} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {Promise<"success"|"fail">} 鍙戦€佹€佺粨鏋?		 */
		async sendLinkToIDM(link, filename, filesize, headers = {}) {
			let rpc = base.getValue("setting_idm_rpc").find(i => i.default);
			if (!this.sendLinkToIDM.lock) this.sendLinkToIDM.lock = Promise.resolve();
			return this.sendLinkToIDM.lock = this.sendLinkToIDM.lock.then(async () => {
				headers = this.standHeaders(headers);

				if (!this.sendLinkToIDM.seq) this.sendLinkToIDM.seq = 1;
				let seq = this.sendLinkToIDM.seq;
				let time = Date.now();
				let url = `http://127.0.0.1:1001/client/${rpc.id}?seq=${seq}`;
				let ext = base.getExtension(filename);

				let headersText = Object.entries(headers).map(([key, value]) => `${key}: ${value}`).join("\n") + "\n"; // 鍧?锛欼DM 瀵?Header 鐨勮В鐮佹瘮杈冩鏉匡紝鏈€鍚庝笉鍔犳崲琛屼笉鑲В鏋?
				function format(key, val) {
					if (val === undefined || val === null) return "";
					var strVal = String(val);
					var len = new Blob([strVal]).size; // 鍧?锛氫娇鐢?blob.size锛岃€屼笉鏄?length
					return `${key}=${len}:${strVal}`;
				};

				let fields = [
					format(4, ext), // 4: 鏂囦欢绫诲瀷
					format(6, link), // 6: 閾炬帴
					format(7, location.origin), // 7: 鏉ユ簮椤甸潰锛堚€滆鏂囦欢鏉ヨ嚜缃戦〉鈥濓級
					format(11, headersText), // 11: 璇锋眰澶?					format(100, filename), // 100: 鏂囦欢鍚?					format(122, 4), // 122: 浠ｇ悊
				];

				// 鍧?锛氱绉樼殑璇锋眰鏍煎紡
				// MSG# {璇锋眰鎸囩ず} #13#1# {10241/20xx}(鏄?鍚?浣跨敤鎵╁睍鎻愪緵鐨勬枃浠朵俊鎭? : {?}(鍙兘鏄窛绂绘墿灞曞惎鍔ㄧ殑鏃堕棿?) :0: {褰撳墠鏃堕棿鎴硙 :0:1: {2/1}(鏄?鍚?浼樺厛寮圭獥锛屽啀鑾峰彇鏂囦欢淇℃伅) : {鏂囦欢澶у皬} :0,{琛ㄥ崟}(鏍煎紡濡備笂);
				let data = `MSG#${seq}#13#1#10241:${seq + 1000}:0:${time}:0:1:2:${filesize}:0,${fields.join(",")};`;

				let request = base.post(url, data, {}, "text").catch(() => false);
				let timeout = new Promise((_, reject) => {
					setTimeout(() => {
						if (request.abort) request.abort();
						reject(new Error("timeout"));
					}, 15 * 1000);
				})

				let res = await Promise.race([request, timeout]).catch(() => false);

				if (res && res.endsWith(`${seq}:3;`)) {
					this.sendLinkToIDM.seq++;
					return "success";
				};
				return "fail";
			});
		},

		/**
		 * 鍙戦€侀摼鎺ュ埌 Aria2 涓嬭浇鍣?		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description Aria2 涓嬭浇蹇呭
		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {Array} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {Promise<"success"|"fail">} 鍙戦€佹€佺粨鏋?		 */
		async sendLinkToAria2(link, filename, headers) {
			if (!this.sendLinkToAria2.lock) this.sendLinkToAria2.lock = Promise.resolve();
			return this.sendLinkToAria2.lock = this.sendLinkToAria2.lock.then(async () => {
				let list = base.getValue("setting_aria2_rpc");
				let selected = list.find(i => i.default);
				let rpc = {
					domain: selected.domain,
					port: selected.port,
					path: selected.path,
					dir: selected.dir,
					token: selected.token
				};
				let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
				let dir = (rpc.dir !== null && rpc.dir !== "") ? rpc.dir : undefined;
				let data = {
					id: new Date().getTime(),
					jsonrpc: "2.0",
					method: "aria2.addUri",
					params: [`token:${rpc.token}`, [link], {
						dir,
						out: filename,
						header: headers
					}]
				};
				try {
					let res = await base.post(url, data, {}, "");
					if (res.result) return "success";
					return "fail";
				} catch (e) {
					return "fail";
				}
			});
		},

		/**
		 * 鍙戦€侀摼鎺ュ埌姣旂壒褰楁槦涓嬭浇鍣?		 * @author hmjz100
		 * @description 姣旂壒褰楁槦涓嬭浇蹇呭
		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {Array} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {Promise<"success"|"fail">} 鍙戦€佹€佺粨鏋?		 */
		async sendLinkToBitcomet(link, filename, headers) {
			if (!this.sendLinkToBitcomet.lock) this.sendLinkToBitcomet.lock = Promise.resolve();
			return this.sendLinkToBitcomet.lock = this.sendLinkToBitcomet.lock.then(async () => {
				let list = base.getValue("setting_bitcomet_rpc");
				let selected = list.find(i => i.default);
				let rpc = {
					domain: selected.domain,
					port: selected.port,
					path: selected.path,
					dir: selected.dir,
					authName: selected.authName,
					authPass: selected.authPass,
				};
				let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
				let data = new URLSearchParams();
				data.append("url", link);
				if (rpc.dir !== null && rpc.dir !== "") data.append("save_path", rpc.dir);
				data.append("file_name", filename);
				data.append("connection", 200);
				if (headers && base.isType(headers) === "object") {
					for (var [key, value] of Object.entries(headers)) {
						data.append(key, value);
					}
				}
				try {
					let res = await base.post(url, data, {
						"Authorization": `Basic ${base.encodeBase(rpc.authName + ":" + rpc.authPass)}`,
						"Content-Type": "application/x-www-form-urlencoded",
						"Cache-Control": "max-age=0",
						"Origin": `${rpc.domain}:${rpc.port}`,
						"Referer": `${rpc.domain}:${rpc.port}/panel/task_add_httpftp`,
					}, "text");
					if (res && res.includes("Add task failed!")) {
						return "fail";
					} else {
						return "success";
					}
				} catch (e) {
					return "success";
				}
			});
		},

		/**
		 * 鍙戦€侀摼鎺ュ埌 AB Download Manager 涓嬭浇鍣?		 * @author hmjz100
		 * @description AB Download Manager 涓嬭浇蹇呭
		 * @param {String} link - 涓嬭浇閾炬帴
		 * @param {String} filename - 鏂囦欢鍚?		 * @param {Array} [headers] - 鑷畾涔夎姹傚ご鍙傛暟锛堝彲閫夛級
		 * @returns {Promise<"success"|"fail">} 鍙戦€佹€佺粨鏋?		 */
		async sendLinkToABDM(link, filename, headers) {
			if (!this.sendLinkToBitcomet.lock) this.sendLinkToBitcomet.lock = Promise.resolve();
			return this.sendLinkToBitcomet.lock = this.sendLinkToBitcomet.lock.then(async () => {
				let newHeaders = {};
				for (let key in headers) {
					newHeaders[key.toLowerCase().split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")] = headers[key];
				}
				headers = { "User-Agent": navigator.userAgent, "Origin": location.origin, "Referer": `${location.origin}/`, "DNT": "1", ...newHeaders };
				let list = base.getValue("setting_abdm_rpc");
				let selected = list.find(i => i.default);
				let rpc = {
					domain: selected.domain,
					port: selected.port,
					dir: selected.dir
				};
				let url = `${rpc.domain}:${rpc.port}/start-headless-download`;
				let data = {
					"downloadSource": {
						"name": filename,
						"description": "LinkSwift",
						"link": link,
						"headers": headers,
						"downloadPage": headers["Referer"]
					},
					"name": filename
				}
				if (rpc.dir) data.folder = rpc.dir;
				try {
					let res = await base.post(url, data, { "Content-Type": "text/plain;charset=UTF-8" }, "text");
					if (res === "OK") return "success";
					return "fail";
				} catch (e) {
					return "fail";
				}
			});
		},

		/**
		 * Blob 鏂囦欢涓嬭浇
		 * @author 娌瑰皬鐚?		 * @description 閫氳繃鍒涘缓涓存椂閾炬帴瀹炵幇鏂囦欢涓嬭浇
		 * @param {Blob} blob - 瑕佷笅杞界殑 Blob 瀵硅薄
		 * @param {String} filename - 涓嬭浇鏃舵彁绀轰繚瀛樼殑鏂囦欢鍚?		 */
		blobDownload(blob, filename) {
			if (blob instanceof Blob) {
				let url = URL.createObjectURL(blob);
				let a = document.createElement("a");
				a.href = url;
				a.download = filename;
				a.rel = "noopener"
				a.click();
				URL.revokeObjectURL(url);
			}
		},

		/**
		 * 鍙法鍩?xmlhttpRequest 璇锋眰
		 * @author hmjz100
		 * @description 灏佽 `GreaseMonkey-Compatible_xmlhttpRequest` 瀹炵幇鐨勮法鍩熻姹傦紝涓庡師濮嬪嚱鏁板弬鏁扮浉鍚岋紝鏀寔鍥炶皟鍜?await 涓ょ鐢ㄦ硶
		 * @param {Object} option - 璇锋眰閰嶇疆瀵硅薄
		 * @returns {XMLHttpRequest|Promise} 璇锋眰瀵硅薄瀹炰緥鎴?Promise
		 */
		xmlHttpRequest(option) {
			let xmlHttpRequest = (typeof GM_xmlhttpRequest === "function") ? GM_xmlhttpRequest : (typeof GM?.xmlHttpRequest === "function") ? GM.xmlHttpRequest : null;
			if (!xmlHttpRequest || base.isType(xmlHttpRequest) !== "function") throw new Error("GreaseMonkey 鍏煎 XMLHttpRequest 涓嶅彲鐢ㄣ€?);

			return xmlHttpRequest({ withCredentials: true, ...option });;
		},

		/**
		 * 鍙戦€?POST 璇锋眰
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 涓€鑸敤浜庤姹?API锛屾敮鎸佹櫤鑳芥牸寮忓寲鏁版嵁銆佹櫤鑳界紪鐮佽姹傛暟鎹?		 * @param {String} url - 璇锋眰鍦板潃
		 * @param {Object|String} data - 璇锋眰鏁版嵁
		 * @param {Object} headers - 璇锋眰澶撮厤缃?		 * @param {String} [type="json"] - 鍝嶅簲绫诲瀷锛堟敮鎸?`json`, `blob` 绛夛級
		 * @returns {Promise} 鍖呭惈鍝嶅簲鏁版嵁鐨?`Promise` 瀵硅薄
		 */
		async post(url, data, headers, type = "json") {
			let _data = data;
			if (this.isType(data) === "object" || this.isType(data) === "array") {
				data = JSON.stringify(data);
			} else if (this.isType(data) === "urlsearchparams") {
				_data = Object.fromEntries(data);
			}
			headers = this.standHeaders(headers);
			headers = { "Accept": "*/*,application/json;charset=utf-8", ...headers };
			let request
			let promise = new Promise((resolve, reject) => {
				request = base.xmlHttpRequest({
					url, headers, data,
					method: "POST", responseType: type,
					onloadstart: (res) => {
						base.console.log("銆怢inkSwift銆慞ost(start)\n璇锋眰鍦板潃锛? + url + "\n璇锋眰鏁版嵁锛?, _data, "\n璇锋眰澶撮儴锛?, headers);
					},
					onload: (res) => {
						const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
						res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);
						if (type === "blob") {
							base.console.log("銆怢inkSwift銆慞ost(load) Blob\n璇锋眰鍦板潃锛? + url + "\n璇锋眰鏁版嵁锛?, _data, "\n璇锋眰缁撴灉锛?, res);
							resolve(res);
							return;
						}

						// 灏濊瘯瑙ｆ瀽鍝嶅簲
						res.responseDecode = res.responseText;
						try { res.responseDecode = atob(res.responseDecode) } catch { }
						try { res.responseDecode = escape(res.responseDecode) } catch { }
						try { res.responseDecode = decodeURIComponent(res.responseDecode) } catch { }
						try { res.responseDecode = JSON.parse(res.responseDecode) } catch { }
						if (res.responseDecode === res.responseText) res.responseDecode = null;
						if (this.isType(res.response) === "object") res.responseDecode = res.response;

						base.console.log("銆怢inkSwift銆慞ost(load)\n璇锋眰鍦板潃锛? + url + "\n璇锋眰鏁版嵁锛?, _data, "\n璇锋眰澶撮儴锛?, headers, "\n璇锋眰缁撴灉锛?, res);
						resolve(res.responseDecode ?? res.response ?? res.responseText);
					},
					onerror: (error) => {
						let msg = "璇锋眰澶辫触";
						if (error && typeof error === "object") msg += ": " + JSON.stringify(error, null, 2);
						base.console.error("銆怢inkSwift銆慞ost(error)\n璇锋眰鍑虹幇閿欒锛屽彲鑳芥槸缃戠粶闂銆?, error);
						reject(new Error(msg));
					}
				});
			})
			if (request) {
				var methods = Object.getOwnPropertyNames(request).filter(key => typeof request[key] === 'function' && !promise.hasOwnProperty(key) && !['then', 'catch', 'finally'].includes(key)); // 鑷姩鏀堕泦 request 涓婄殑鍑芥暟灞炴€ц繘琛岀粦瀹氾紝骞惰兘鏅鸿兘鎺掗櫎 Promise 鍘熺敓鏂规硶
				methods.forEach(method => { promise[method] = (...args) => request[method](...args); }); // 鍔ㄦ€佺粦瀹氬埌 Promise
			}
			return promise;
		},

		/**
		 * 鍙戦€?GET 璇锋眰
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 涓€鑸敤浜庤姹?API锛屾敮鎸佹櫤鑳芥牸寮忓寲鏁版嵁
		 * @param {String} url - 璇锋眰鍦板潃
		 * @param {Object} headers - 璇锋眰澶撮厤缃?		 * @param {String} [type="json"] - 鍝嶅簲绫诲瀷
		 * @returns {Promise} 鍖呭惈鍝嶅簲鏁版嵁鐨?`Promise` 瀵硅薄
		 */
		async get(url, headers, type = "json") {
			headers = this.standHeaders(headers);
			let request
			let promise = new Promise((resolve, reject) => {
				request = base.xmlHttpRequest({
					url, headers,
					method: "GET", responseType: type,
					onloadstart: (res) => {
						base.console.log("銆怢inkSwift銆慓et(start)\n璇锋眰鍦板潃锛? + url + "\n璇锋眰澶撮儴锛?, headers);
					},
					onload: (res) => {
						const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
						res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);
						if (type === "blob") {
							base.console.log("銆怢inkSwift銆慓et(load) Blob\n璇锋眰鍦板潃锛? + url, "\n璇锋眰缁撴灉锛?, res);
							resolve(res);
							return;
						}
						// 灏濊瘯瑙ｆ瀽鍝嶅簲
						res.responseDecode = res.responseText;
						try { res.responseDecode = JSON.parse(res.responseDecode) } catch { }
						if (res.responseDecode === res.responseText) res.responseDecode = null;
						if (this.isType(res.response) === "object") res.responseDecode = res.response;

						base.console.log("銆怢inkSwift銆慓et(load)\n璇锋眰鍦板潃锛? + url + "\n璇锋眰澶撮儴锛?, headers, "\n璇锋眰缁撴灉锛?, res);
						resolve(res.responseDecode ?? res.response ?? res.responseText);
					},
					onerror: (error) => {
						let msg = "璇锋眰澶辫触";
						if (error && typeof error === "object") msg += ": " + JSON.stringify(error, null, 2);
						base.console.error("銆怢inkSwift銆慓et(error)\n璇锋眰鍑虹幇閿欒锛屽彲鑳芥槸缃戠粶闂銆?, error);
						reject(new Error(msg));
					}
				});
			})
			if (request) {
				var methods = Object.getOwnPropertyNames(request).filter(key => typeof request[key] === 'function' && !promise.hasOwnProperty(key) && !['then', 'catch', 'finally'].includes(key)); // 鑷姩鏀堕泦 request 涓婄殑鍑芥暟灞炴€ц繘琛岀粦瀹氾紝骞惰兘鏅鸿兘鎺掗櫎 Promise 鍘熺敓鏂规硶
				methods.forEach(method => { promise[method] = (...args) => request[method](...args); }); // 鍔ㄦ€佺粦瀹氬埌 Promise
			}
			return promise;
		},
		/**
		 * 鍙戦€?HEAD 璇锋眰
		 * @author hmjz100
		 * @description 鐢ㄤ簬鑾峰彇璇锋眰鍦板潃杩斿洖鐨勮姹傚ご锛屾敮鎸佹櫤鑳介檷绾т负杞婚噺 GET (`Range: bytes=0-0`)锛岃繑鍥炵粨鏋勫寲鍝嶅簲澶?		 * @param {String} url - 璇锋眰鍦板潃
		 * @param {Object} headers - 璇锋眰澶撮厤缃?		 * @param {Boolean} usingGET - 鏄惁浣跨敤 GET
		 * @returns {Promise} 鍖呭惈鍝嶅簲鏁版嵁鐨?`Promise` 瀵硅薄
		 */
		async head(url, headers, usingGET) {
			headers = this.standHeaders(headers);
			return new Promise((resolve, reject) => {
				var method = usingGET ? "Get" : "Head";
				let _aborted = false;
				let request = base.xmlHttpRequest({
					method: method.toUpperCase(),
					url,
					headers,
					onloadstart: () => {
						base.console.log(`銆怢inkSwift銆慔ead${usingGET ? " Get" : ""}(start)\n璇锋眰鍦板潃锛?{url}\n璇锋眰澶撮儴锛歚, headers);
					},
					onload: function (res) {
						if (!_aborted) {
							const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
							res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);

							base.console.log(`銆怢inkSwift銆慔ead${usingGET ? " Get" : ""}(load)\n璇锋眰鍦板潃锛?{res.finalUrl}\n鍝嶅簲鐘舵€侊細${res.status}\n鍝嶅簲鍐呭锛歚, res);

							if (!usingGET && !res.responseHeaders.hasOwnProperty("Range") && !(res?.status >= 200 && res?.status < 400)) {
								base.head(res.finalUrl, { ...headers, Range: "bytes=0-0" }, true).then(resolve).catch(reject);
								return;
							}

							resolve(res);
						}
					},
					onreadystatechange: function (res) {
						if (res.readyState === 2) { // HEADERS_RECEIVED
							_aborted = true;
							if (request && request.abort) request.abort();

							const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
							res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);

							base.console.log(`銆怢inkSwift銆慔ead${usingGET ? " Get" : ""}(load) RS2\n璇锋眰鍦板潃锛?{res.finalUrl}\n鍝嶅簲鐘舵€侊細${res.status}\n鍝嶅簲鍐呭锛歚, res);

							if (!usingGET && !res.responseHeaders.hasOwnProperty("Range") && !(res?.status >= 200 && res?.status < 400)) {
								base.head(res.finalUrl, { ...headers, Range: "bytes=0-0" }, true).then(resolve).catch(reject);
								return;
							}

							resolve(res);
						}
					},
					onerror: function (err) {
						if (!_aborted) {
							base.console.error(`銆怢inkSwift銆慔ead${usingGET ? " Get" : ""}(error)\n璇锋眰鍑虹幇閿欒锛屽彲鑳芥槸缃戠粶闂銆俙, err);
							reject(err);
						}
					}
				});
			});
		},

		/**
		 * 鑾峰彇鏈€缁堥噸瀹氬悜
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 浣跨敤 GET銆丠ead锛屾櫤鑳借拷韪?HTTP 30x 閲嶅畾鍚戯紝杩斿洖鏈€缁堣闂湴鍧€
		 * @param {String} url - 鍒濆璇锋眰鍦板潃
		 * @param {Object} headers - 璇锋眰澶撮厤缃?		 * @param {Boolean} usingGET - 鏄惁浣跨敤 GET
		 * @param {Boolean} returnURL - 鏄惁鍙繑鍥為摼鎺ヨ€屼笉鏄?res
		 * @returns {Promise<String>} 鏈€缁?URL 鍦板潃
		 */
		getFinal(url, headers = {}, usingGET = false, returnURL = true) {
			return new Promise(async (resolve, reject) => {
				var res = await this.head(url, headers, usingGET).catch(reject);
				if (!res?.finalUrl) return reject(res);
				if (res?.status == 204 && res?.statusText === "IDM") return reject(res);
				if (res?.status >= 300 && res?.status < 400) {
					base.getFinal(res.finalUrl, headers, usingGET, returnURL).then(resolve).catch(reject);
					return;
				}
				if (returnURL) return resolve(res.finalUrl);
				else return resolve(res);
			});
		},

		/**
		 * 涓嬭浇鏂囦欢
		 * @author hmjz100
		 * @description 鍙戦€?GET 璇锋眰锛屼竴鑸敤浜庢枃浠朵笅杞斤紝鏀寔杩涘害鐩戞帶銆佽嚜鍔ㄩ噸璇曘€佹柇鐐圭画浼犮€侀潪鏂洖閫€
		 * @param {String} url - 璇锋眰鍦板潃
		 * @param {Object} headers - 璇锋眰澶撮厤缃?		 * @param {Number} [size=0] - 鍝嶅簲绫诲瀷
		 * @param {Object} [extra] - 闄勫姞鍙傛暟锛堝繀椤?`name`銆乣index`銆乣size` 灞炴€э紱鍙€?`thread`銆乣retry` 灞炴€э級
		 * @returns {Promise} 鍖呭惈鍝嶅簲鏁版嵁鐨?`Promise` 瀵硅薄
		 */
		async download(url, headers, extra) {
			headers = this.standHeaders(headers);
			// 鍒濆鍖栧叏灞€鍏变韩鐘舵€?			this.download.active = this.download.active || 0; // 鍏ㄥ眬娲昏穬绾跨▼鏁?			this.download.taskCount = this.download.taskCount || 0; // 褰撳墠姝ｅ湪杩愯鐨?download 浠诲姟鏁?			var global_maxThreads = 8; // 鏁翠釜鍏佽鐨勬渶澶у苟鍙戞暟

			if (extra) base.console.log(`銆怢inkSwift銆慏ownload\n鏀跺埌鏁版嵁锛歚, extra);
			if (!extra || !extra.index || !extra.name || !extra.size) throw new Error("extra 缂哄皯鍐呭銆?);

			let status = {
				aborted: false,
				requests: new Set(),
				results: [],
				active: 0,
				maxSpeed: 0
			};

			let promise = new Promise(async (resolve, reject) => {
				this.download.taskCount++; // 浠诲姟杩涘叆

				try {
					var finalHead = await base.getFinal(url, headers, false, false).catch(reject);
					if (!finalHead) return;
					url = finalHead.finalUrl;

					var responseHeaders = finalHead.responseHeaders;
					let size = parseInt(extra.size || responseHeaders?.["Content-Length"] || 0, 10);
					if (responseHeaders?.["Content-Range"]) {
						size = parseInt((responseHeaders["Content-Range"]?.match(/\/(\d+)$/)?.[1] || size), 10);
					}

					if (!status.aborted && typeof extra?.onProgress === "function") extra.onProgress(0, 0, size);
					if (!(finalHead.status >= 200 && finalHead.status < 400)) return reject(finalHead);
					if (finalHead.status == 204 && finalHead.statusText === "IDM") return reject(finalHead);

					var supportRange = finalHead.status == 206 && (responseHeaders?.["Accept-Ranges"]?.includes("bytes") || responseHeaders?.["Content-Range"]?.includes("bytes"));

					if (!!supportRange || size > 0) {
						base.console.log(`銆怢inkSwift銆慏ownload(Start)\n鏂囦欢鍚嶇О锛?{extra.name}\n鏂偣缁紶锛氭敮鎸乣);

						var maxRetry = extra.retry || 10;
						let index = 0;
						let offset = 0;
						let totalLoaded = 0;

						var worker = async () => {
							var minChunk = extra.minChunk || 50 * 1024; // 鏈€灏?50KB
							var maxChunk = extra.maxChunk || 1 * 1024 * 1024; // 鏈€澶?1MB
							let chunk = Math.floor(minChunk + (maxChunk - minChunk) * 0.37);

							while (offset < size && !status.aborted) {
								// 濡傛灉鍏ㄥ眬绾跨▼婊′簡锛屼笖褰撳墠浠诲姟宸茬粡鎶㈠埌浜?1 鏉′互涓婄殑绾跨▼锛屽垯 鈥滆璺€?缁欏悗鏉ョ殑浠诲姟
								let fairShare = Math.max(1, Math.floor(global_maxThreads / this.download.taskCount));
								while (!status.aborted && this.download.active >= global_maxThreads && status.active >= fairShare) {
									await new Promise(r => setTimeout(r, 200)); // 绛夊緟锛岀洿鍒板叾浠栦换鍔￠噴鏀炬垨鏈夌┖浣?								}

								if (status.aborted || offset >= size) break;

								var _index = index++;
								var start = offset;
								var end = Math.min(start + chunk - 1, size - 1);
								var _size = end - start + 1;
								offset += _size;

								let attempt = 0;
								while (attempt <= maxRetry && !status.aborted) {
									// 鍗犵敤绾跨▼璁℃暟
									status.active++;
									this.download.active++;

									try {
										var startTime = Date.now();
										let lastLoaded = 0;

										var res = await new Promise((s, j) => {
											var xhr = base.xmlHttpRequest({
												url, method: "GET", responseType: "arraybuffer",
												headers: { ...headers, "Range": `bytes=${start}-${end}` },
												onloadstart() {
													startTime = Date.now();
												},
												onprogress: (progress) => {
													totalLoaded += (progress.loaded - lastLoaded);
													lastLoaded = progress.loaded;
													let prog = (totalLoaded * 100 / size);
													if (!status.aborted && typeof extra?.onProgress === "function") extra.onProgress(prog, totalLoaded, size);
												},
												onload: (load) => {
													status.requests.delete(xhr);
													if (load.status == 204 && load.statusText === "IDM") return j(load);
													if (load.status >= 200 && load.status < 300) s(load.response);
													else j(load);
												},
												onerror: (error) => {
													status.requests.delete(xhr);
													j(error);
												}
											});
											status.requests.add(xhr);
										});

										// 鏅鸿兘鍒嗗潡璋冩暣
										var _duration = extra.duration || 1.5; // 鐩爣
										var duration = (Date.now() - startTime) / 1000 || 0.1;
										var speed = _size / duration;

										let nextChunk;
										if (speed > status.maxSpeed * 0.9) {
											// 濡傛灉閫熷害鍦ㄦ彁鍗囨垨缁存寔楂樹綅锛岃鏄庡ぇ鍧楁槸鏈夋晥鐨勶紝鍗充究瓒呮椂涔熻澶ц儐澧炲姞
											// 鐩爣鏄壘鍒拌兘璁?speed 鏈€澶у寲鐨?chunk 澶у皬
											nextChunk = chunk * 1.5;
											status.maxSpeed = Math.max(status.maxSpeed, speed);
										} else if (duration < _duration * 0.5) {
											// 璺戝緱澶揩浜嗭紝鍙互灏濊瘯鍐嶅姞涓€鐐?											nextChunk = chunk * 1.2;
										} else if (duration > _duration * 2) {
											// 鍙湁褰撹€楁椂涓ラ噸瓒呰繃鐩爣锛堟瘮濡傝秴杩?2 鍊嶏級涓旈€熷害涓嬮檷鏃讹紝鎵嶆敹缂?											nextChunk = chunk * 0.8;
										} else {
											// 绋冲畾鏈?											nextChunk = chunk;
										}

										chunk = Math.max(minChunk, Math.min(maxChunk, chunk * 0.7 + nextChunk * 0.3));
										chunk = Math.floor(chunk);

										status.results.push({ index: _index, data: res });
										res = null;
										break;
									} catch (e) {
										await new Promise(r => setTimeout(r, 1000 * attempt));
										attempt++;
										if (attempt > maxRetry) throw e;
									} finally {
										// 閲婃斁绾跨▼璁℃暟
										status.active--;
										this.download.active--;
									}
								}
							}
						};

						// 鍚姩褰撳墠浠诲姟鐨勫苟鍙戠嚎绋嬶紝鍗曚换鍔℃渶楂?3 涓?						var maxThreads = Math.min(extra.thread || 3, 3);
						await Promise.all(Array(maxThreads).fill(0).map(worker));

						if (status.aborted) return;
						if (!status.aborted && typeof extra?.onProgress === "function") extra.onProgress(100, size, size);

						await new Promise(resolve => setTimeout(resolve, 0));
						status.results.sort((a, b) => a.index - b.index);

						// 鍒嗘鎻愬彇鏁版嵁
						async function getBlobData(results) {
							var dataList = [];
							var batchSize = 100; // 姣忓鐞?100 涓垎鍧楅噴鏀句竴娆′富绾跨▼
							for (let i = 0; i < results.length; i++) {
								dataList.push(results[i].data);
								if (i % batchSize === 0) {
									await new Promise(resolve => setTimeout(resolve, 0));
								}
							}
							return dataList;
						};

						var finalData = await getBlobData(status.results);
						status.results = null; // 閲婃斁鍐呭瓨寮曠敤

						resolve({
							status: 200,
							statusText: "Ok!",
							readyState: 4,
							response: new Blob(finalData),
							finalUrl: url
						});
					} else {
						// 涓嶆敮鎸?Range锛屽洖閫€
						var xhr = base.xmlHttpRequest({
							url: url, headers, method: "GET", responseType: "blob",
							onprogress: (progress) => {
								if (!status.aborted && typeof extra?.onProgress === "function") extra.onProgress((progress.loaded * 100 / progress.total), progress.loaded, progress.total);
							},
							onload: (load) => resolve(load),
							onerror: (error) => reject(error)
						});
						status.requests.add(xhr);
					}
				} catch (e) {
					status.aborted = true;
					reject(e);
				} finally {
					this.download.taskCount--; // 鏃犺鎴愬姛澶辫触锛屼换鍔￠€€鍑?				}
			});

			promise.abort = () => {
				status.aborted = true;
				status.requests.forEach(xhr => xhr?.abort?.());
				status.requests.clear();
				status.results = null;
			};

			if (extra.index) temp.request[extra.index] = promise;
			return promise;
		},

		/**
		 * Aria2 RPC 鏈嶅姟娴嬭瘯
		 * @author hmjz100
		 * @description 楠岃瘉 `JSON-RPC` 鎺ュ彛鍙敤鎬?		 * @param {String} domain - 鏈嶅姟鍩熷悕
		 * @param {String} port - 鏈嶅姟绔彛
		 * @param {String} path - RPC 璺緞
		 * @param {String} token - 璁よ瘉浠ょ墝
		 * @returns {Promise<"success"|"fail">} 杩炴帴鐘舵€佺粨鏋?		 */
		async testConnectToAria2(domain, port, path, token) {
			return new Promise((resolve, reject) => {
				let rpc = { domain, port, path, token };
				let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
				let rpcData = {
					id: new Date().getTime(),
					jsonrpc: "2.0",
					method: "aria2.getVersion",
					params: [`token:${rpc.token}`]
				};
				base.xmlHttpRequest({
					method: "POST", url, headers: {}, data: JSON.stringify(rpcData),
					responseType: "json",
					onloadstart() {
						base.console.log("銆怢inkSwift銆慞ost(start) Aria2Test\n璇锋眰鍦板潃锛? + url + "\n璇锋眰鍐呭锛?, rpcData);
					},
					onload: function (res) {
						base.console.log("銆怢inkSwift銆慞ost(load) Aria2Test\n璇锋眰鍦板潃锛? + url + "\n璇锋眰缁撴灉锛?, res);
						if (!res.response) return resolve("fail");
						if (res.response?.error) {
							resolve("fail");
						} else {
							resolve("success");
						}
					},
					onerror: function (err) {
						base.console.error("銆怢inkSwift銆慞ost(error) Aria2Test\n璇锋眰澶辫触", err);
						resolve("fail");
					},
				});
			});
		},

		/**
		 * AB Download Manager RPC 鏈嶅姟娴嬭瘯
		 * @author hmjz100
		 * @description 楠岃瘉 `JSON-RPC` 鎺ュ彛鍙敤鎬?		 * @param {String} domain - 鏈嶅姟鍩熷悕
		 * @param {String} port - 鏈嶅姟绔彛
		 * @returns {Promise<"success"|"fail">} 杩炴帴鐘舵€佺粨鏋?		 */
		async testConnectToABDM(domain, port) {
			return new Promise((resolve, reject) => {
				let rpc = { domain, port };
				let url = `${rpc.domain}:${rpc.port}/ping`;
				base.xmlHttpRequest({
					method: "POST", url, headers: {}, data: new Date().getTime(),
					responseType: "text",
					onloadstart() {
						base.console.log("銆怢inkSwift銆慞ost(start) ABDMTest\n璇锋眰鍦板潃锛? + url + "\n璇锋眰鍐呭锛?, new Date().getTime());
					},
					onload: function (res) {
						base.console.log("銆怢inkSwift銆慞ost(load) ABDMTest\n璇锋眰鍦板潃锛? + url + "\n璇锋眰缁撴灉锛?, res);
						if (!res.response || res.response !== "pong") return resolve("fail");
						resolve("success");
					},
					onerror: function (err) {
						base.console.error("銆怢inkSwift銆慞ost(error) ABDMTest\n璇锋眰澶辫触", err);
						resolve("fail");
					},
				});
			});
		},

		/**
		 * 閲嶇疆璇锋眰鐩稿叧鏁版嵁
		 * @author 娌瑰皬鐚?		 * @description 涓鎵€鏈夎繘琛屼腑鐨勮姹傦紝娓呴櫎杩涘害璁板綍鍜屽畾鏃跺櫒
		 */
		_resetAllData() {
			temp.links = [];
			$.each(temp.request, function (key) {
				(temp.request[key]).abort();
			});
			temp.request = {};
		},

		/**
		 * 閲嶇疆璇锋眰鐩稿叧鏁版嵁
		 * @author 娌瑰皬鐚?		 * @description 涓鎸囧畾鐨勮繘琛屼腑鐨勮姹傦紝娓呴櫎杩涘害璁板綍鍜屽畾鏃跺櫒
		 */
		_resetData(i) {
			temp.request[i] && temp.request[i].abort();
		},

		/**
		 * 灏嗗璞¤浆鎹负 URL 缂栫爜瀛楃涓?		 * @author 娌瑰皬鐚?		 * @description 閫掑綊澶勭悊宓屽鏁扮粍锛岃嚜鍔ㄨ繘琛?URI 缂栫爜
		 * @param {Object} obj - 寰呰浆鎹㈢殑閿€煎瀵硅薄
		 * @returns {String} URL 缂栫爜鏍煎紡瀛楃涓诧紙濡俙key1=value1&key2=value2`锛?		 */
		stringify(obj) {
			let str = "";
			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					let value = obj[key];
					if (Array.isArray(value)) {
						for (let i = 0; i < value.length; i++) {
							str += encodeURIComponent(key) + "=" + encodeURIComponent(value[i]) + "&";
						}
					} else {
						str += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
					}
				}
			}
			return str.slice(0, -1); // 鍘绘帀鏈熬鐨?"&"
		},

		/**
		 * 鍔ㄦ€佹敞鍏ユ牱寮忚〃
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鏀寔 `鏍峰紡鏍囩` `澶栭摼CSS` 娉ㄥ叆锛屾彁渚涚簿鍑嗙殑 DOM 瀹氫綅鍜屾彃鍏ヤ綅缃帶鍒?		 * @param {String} id - 鏍峰紡鍏冪礌 ID
		 * @param {"style"|"link"} tag - 鏍囩绫诲瀷锛坄style` 鎴?`link`锛?		 * @param {String} css - CSS 鍐呭鎴栧閾?URL
		 * @param {String} [element=".{mount}"] - 瀹氫綅鍩哄噯鍏冪礌閫夋嫨鍣?		 * @param {"before"|"after"|"prepend"|"append"} [position="append"] - 鎻掑叆浣嶇疆
		 */
		addStyle(id, tag = "style", css, element = `.${mount}`, position = "append") {
			base.waitForKeyElements(element, (element) => {
				let $styleDom = $(`[${mount}="${id}"], #${id}`);
				let $style = $(`<${tag}>`, {
					rel: "stylesheet",
					id: id,
					[mount]: id
				});
				tag === "style" ? $style.html(css.trim().replace(/\t/g, "").replace(/\r\n|\n\r|\n|\r/g, "\n").replace(/\n+/g, "\n")) : $style.attr("href", css);
				if ($styleDom.length) {
					$styleDom.replaceWith($style);
					base.console.log($style[0])
					return true;
				}
				if (position === "before") {
					element.before($style);
				} else if (position === "after") {
					element.after($style);
				} else if (position === "prepend") {
					element.prepend($style);
				} else {
					element.append($style);
				}
				// return true;
			}, true);
		},

		/**
		 * 鍗佸叚杩涘埗棰滆壊杞?RGBA
		 * @author hmjz100
		 * @description 鏀寔 4 浣嶅拰 8 浣嶅崄鍏繘鍒舵牸寮忥紝鑷姩瑙ｆ瀽閫忔槑搴﹂€氶亾
		 * @param {String} hex - 鍗佸叚杩涘埗棰滆壊鍊硷紙濡?`#09f` 鎴?`#0099ffaa` 锛?		 * @returns {String} RGBA 鏍煎紡瀛楃涓诧紙濡?`15, 170, 255, 0.67`锛?		 */
		hexToRgba(hex) {
			// 鍘绘帀 # 鍙?			hex = hex.replace(/^#/, "");
			// 濡傛灉鏄洓浣嶅崄鍏繘鍒堕鑹插€硷紝杞崲涓哄叓浣?			if (hex.length === 4) {
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
			}
			// 瑙ｆ瀽 RGB 鍒嗛噺
			let r = parseInt(hex.substring(0, 2), 16);
			let g = parseInt(hex.substring(2, 4), 16);
			let b = parseInt(hex.substring(4, 6), 16);
			let a = "";
			// 濡傛灉鏄叓浣嶅崄鍏繘鍒堕鑹插€硷紝瑙ｆ瀽 alpha 閫氶亾
			if (hex.length === 8) {
				a = parseInt(hex.substring(6, 8), 16) / 255; // 灏?alpha 鍊艰浆鎹负 0 鍒?1 涔嬮棿鐨勫皬鏁?				a = "," + a
			}
			// 杩斿洖 rgba 鏍煎紡瀛楃涓?			return r + ", " + g + ", " + b + a;
		},

		/**
		 * RGBA 棰滆壊杞崄鍏繘鍒?		 * @author hmjz100
		 * @description 鏀寔閫忔槑搴﹁浆鎹紝鑷姩琛ュ叏缂╁啓鏍煎紡
		 * @param {String} rgba - RGBA 鏍煎紡棰滆壊鍊硷紙濡?`rgba(15,170,255,0.67)`锛?		 * @returns {String} 鍗佸叚杩涘埗棰滆壊鍊硷紙濡?`#09aaffaa`锛?		 */
		rgbaToHex(rgba) {
			// 鍘绘帀鍓嶇紑 "rgba" 鎴?"rgb" 骞剁Щ闄ょ┖鏍?			rgba = rgba.replace(/^(rgba?|RGBA?)\(/, "").replace(/\s+/g, "").replace(")", "");
			// 灏嗛鑹插€煎垎鍓蹭负鏁扮粍
			let [r, g, b, a] = rgba.split(",");
			// 灏?RGB 杞崲涓哄崄鍏繘鍒?			r = parseInt(r).toString(16).padStart(2, "0");
			g = parseInt(g).toString(16).padStart(2, "0");
			b = parseInt(b).toString(16).padStart(2, "0");
			// 濡傛灉瀛樺湪 alpha 閫氶亾锛屽鐞嗛€忔槑搴﹀€?			if (a !== undefined) {
				// 灏?alpha 杞崲涓?0 鍒?255 鐨勫崄鍏繘鍒?				a = Math.round(parseFloat(a) * 255).toString(16).padStart(2, "0");
				return `#${r}${g}${b}${a}`;
			}
			// 濡傛灉娌℃湁 alpha 閫氶亾锛岃繑鍥炴爣鍑嗗叚浣嶇殑鍗佸叚杩涘埗棰滆壊
			return `#${r}${g}${b}`;
		},

		/**
		 * 鑷€傚簲鏍峰紡棰滆壊鏇挎崲鍣?		 * @author hmjz100
		 * @description 鏀寔鍏ㄥ眬鏍峰紡鏇挎崲鍜岃祫婧愯矾寰勪慨姝ｏ紝澶勭悊棰滆壊娓愬彉杩囨浮鏁堟灉绛?		 * @param {String} cssText - 鍘熷 CSS 鍐呭
		 * @param {String} baseURI - 璧勬簮鍩虹璺緞
		 * @param {"default"|"other"} type - 鏇挎崲妯″紡锛堥粯璁ゆā寮忓寘鍚繃娓℃晥鏋滐級
		 * @param {Array<[String, String]>} colorMap - 棰滆壊鏄犲皠琛紙鏃ч鑹?鈫?鏂伴鑹诧級
		 * @returns {String} 澶勭悊鍚庣殑 CSS 鍐呭
		 */
		adaptiveStyleOverride(cssText, baseURI, type, colorMap) {
			if (!cssText) return "";
			if (baseURI) {
				// 鏇挎崲鐩稿璺緞璧勬簮涓虹粷瀵硅矾寰?				cssText = cssText.replace(/url\s*\(\s*(['"]?)(.*?)\1\s*\)/g, (match, quote, url) => {
					if (url && !/^(data:|https?:|\/\/)/i.test(url)) {
						try {
							let absoluteURL = new URL(url, baseURI).href;
							return `url(${absoluteURL})`;
						} catch (e) {
							return match;
						}
					}
					return match;
				});
			}
			// 澶勭悊榛樿棰滆壊鍒楄〃
			config.base.dom.themes.forEach(item => {
				let oldColor = item.color;
				cssText = cssText.replace(new RegExp(base.hexToRgba(oldColor), "ig"), base.hexToRgba(temp.color));
				cssText = cssText.replace(new RegExp(oldColor, "ig"), temp.color);
			});
			// 澶勭悊 colorMap
			if (type === "other") {
				colorMap.forEach(function (colorPair) {
					let oldColor = colorPair[0];
					let newColor = colorPair[1];
					// 鐢熸垚鏃ч鑹茬殑涓夌褰㈠紡锛氬師鏍枫€佸叏澶у啓銆佸叏灏忓啓
					var variants = [
						oldColor,
						oldColor.toUpperCase(),
						oldColor.toLowerCase()
					];
					// 浣跨敤 Set 鍘婚噸
					var uniqueVariants = [...new Set(variants)];
					uniqueVariants.forEach(variant => {
						var regex = new RegExp(variant, "g");
						cssText = cssText.replace(regex, newColor);
					});
				});
				return cssText;
			}
			if (colorMap) {
				colorMap.forEach(function (colorPair) {
					let oldColor = colorPair[0];
					let newColor = colorPair[1];
					// 鐢熸垚涓夌褰㈠紡
					var variants = [
						oldColor,
						oldColor.toUpperCase(),
						oldColor.toLowerCase()
					];
					var uniqueVariants = [...new Set(variants)];
					if (oldColor.includes("#")) {
						// 鏇挎崲甯﹀睘鎬у潡鐨勬儏鍐碉紙娣诲姞 transition锛?						uniqueVariants.forEach(variant => {
							var regexWithBlock = new RegExp(variant + "(.*?)}", "gi");
							cssText = cssText.replace(regexWithBlock, newColor + "$1; transition:all.2s}");
						});
						// 鏈€鍚庡啀缁熶竴鏇挎崲鍓╀笅鐨?						uniqueVariants.forEach(variant => {
							cssText = cssText.replace(new RegExp(variant, "gi"), newColor);
						});
					} else {
						// 鏅€氬瓧绗︿覆鏇挎崲
						uniqueVariants.forEach(variant => {
							cssText = cssText.replace(new RegExp(variant, "gi"), newColor);
						});
					}
				});
			}
			return cssText;
		},

		/**
		 * 鑷€傚簲鍏ㄥ眬涓婚棰滆壊淇敼鍣?		 * @author hmjz100
		 * @description 鑷姩閬嶅巻骞舵浛鎹?`椤甸潰鎵€鏈夋牱寮忚〃` `SVG 鍏冪礌` 鐨勯鑹插€?		 * @param {Array<[String, String]>} colorMap - 棰滆壊鏄犲皠琛?		 * @param {"default"|"other"} type - 鏇挎崲妯″紡
		 */
		adaptiveThemeOverride(colorMap, type) {
			base.waitForKeyElements(`[${mount}^="${mount}-ColorUI-"], [id^="${mount}-ColorUI-"]`, function (tag) {
				if (tag.html() === base.adaptiveStyleOverride(tag.text(), "", type, colorMap)) return;
				let cssText = base.adaptiveStyleOverride(tag.text(), "", type, colorMap);
				base.addStyle(tag.attr(mount), "style", cssText, tag[0]);
				return true;
			}, true)
			base.waitForKeyElements(`[data-pl-colored]`, function (tag) {
				if (tag.attr("data-pl-colored") === temp.color) return;
				let originalStyle = tag.attr("style");
				if (!originalStyle) return;
				let newStyle = base.adaptiveStyleOverride(originalStyle, "", type, colorMap);
				if (newStyle !== originalStyle) {
					tag.attr("style", newStyle);
				}
				return true;
			}, true);
			let count = 0;
			if (!temp.colored) {
				base.waitForKeyElements(`link[rel="stylesheet"]`, function (tag) {
					if (!tag.parent().length || !tag.attr("href")) return;
					let href = tag.attr("href");
					try {
						href = new URL(href, location.href).href;
					} catch (e) {
						return;
					}
					fetch(href)
						.then(response => response.text())
						.then(responseText => {
							let id = `${mount}-ColorUI-` + href.replace(/[^\w]/g, "_");
							let cssText = base.adaptiveStyleOverride(responseText, href, type, colorMap);
							if (responseText === base.adaptiveStyleOverride(responseText, href, type, colorMap)) return;
							base.addStyle(id, "style", cssText, tag[0], "after");
						})
				}, true);
				base.waitForKeyElements(`style:not([${mount}^="${mount}-"],[id^="swal-pub"],[class^="darkreader"])`, function (tag) {
					let id = tag.attr(mount);
					let text = tag.html()
					if (tag.data("styles") === text) return;
					tag.data("styles", text);
					// 鏇挎崲棰滆壊骞舵坊鍔犳牱寮?					let cssText = base.adaptiveStyleOverride(text, "", type, colorMap);
					if (text === cssText) return;
					id = id ? id : `${mount}-ColorUI-${count++}`
					base.addStyle(id, "style", cssText, tag[0], "after");
				}, true)
				base.waitForKeyElements("svg", function (element) {
					element.find("*").each((index, element) => {
						let fill = $(element).attr("fill");
						let stroke = $(element).attr("stroke");
						if (fill) {
							let newFill = base.adaptiveStyleOverride(fill, "", type, colorMap);
							if (newFill !== fill) {
								$(element).attr("fill", newFill);
							}
						}
						if (stroke) {
							let newStroke = base.adaptiveStyleOverride(stroke, "", type, colorMap);
							if (newStroke !== stroke) {
								$(element).attr("stroke", newStroke);
							}
						}
					});
				}, true);
				base.waitForKeyElements(`[style]:not([${mount}^="${mount}-"],[class*="listener-"])`, function (element) {
					if (element.parent(`[class*="pl-"]`).length) return;
					if (element.attr("data-pl-colored") === temp.color) return;
					let originalStyle = element.attr("style");
					if (!originalStyle) return;
					let newStyle = base.adaptiveStyleOverride(originalStyle, "", type, colorMap);
					if (newStyle !== originalStyle) {
						element.attr("style", newStyle);
						element.attr("data-pl-colored", temp.color);
					}
				}, true);
				temp.colored = true;
			}
		},

		/**
		 * 寤舵椂鎵ц
		 * @author 娌瑰皬鐚?		 * @description 浠呭彲浜?`async` 鍑芥暟涓墽琛岋紝鍚﹀垯鏃犳硶鍊掕鏃躲€?		 * @param {Number} time - 绛夊緟鏃堕棿锛堟绉掞級
		 * @returns {Promise<void>} 寤舵椂瀹屾垚鐨?`Promise`
		 */
		sleep(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		},

		/**
		 * 鍒ゆ柇鐗堟湰鍙锋柊鏃?		 * @author hmjz100
		 * @description 璇ュ嚱鏁板皢鐗堟湰鍙锋寜 `.` 鍒嗗壊涓烘暟瀛楁暟缁勶紝閫愭姣旇緝澶у皬銆?		 * 鑻ユ煇娈?a 鐨勬暟瀛楀ぇ浜?b锛屽垯 a 鏇存柊锛?		 * 鑻ユ墍鏈夋鍧囩浉绛夛紝鍒欑増鏈浉绛夛紙杩斿洖 false锛夈€?		 * @param {String} a - 寰呮瘮杈冪殑鐗堟湰鍙?		 * @param {String} b - 鍩哄噯鐗堟湰鍙凤紙濡?"1.0.9.7"锛?		 * @returns {Boolean} - 鑻?a 姣?b 鏇存柊锛岃繑鍥?true锛涘惁鍒欒繑鍥?false
		 */
		isNewerVersion(a, b) {
			let partsA = a.split(".").map(Number);
			let partsB = b.split(".").map(Number);
			let maxLength = Math.max(partsA.length, partsB.length);
			for (let i = 0; i < maxLength; i++) {
				let numA = partsA[i] || 0;
				let numB = partsB[i] || 0;
				if (numA > numB) return true;
				if (numA < numB) return false;
			}
			return false;
		},

		/**
		 * 鎻愬彇鐗堟湰鍙蜂富鐗堟湰
		 * @author 娌瑰皬鐚?		 * @param {String} version - 瀹屾暣鐗堟湰鍙凤紙濡?`1.2.3`锛?		 * @returns {String|null} 涓荤増鏈彿锛堝 `1`锛夋垨 `null`锛堟牸寮忛敊璇椂锛?		 */
		getMajorVersion(version) {
			let [major] = (version || "").split(".");
			return /^\d+$/.test(major) ? major : null;
		},

		/**
		 * 鏌ユ壘 React 缁勪欢瀹炰緥
		 * @author 娌瑰皬鐚?		 * @description 鏀寔 Fiber 鏋舵瀯閬嶅巻锛屽彲鎸囧畾鍚戜笂鏌ユ壘灞傜骇
		 * @param {HTMLElement} dom - 璧峰 DOM 鍏冪礌
		 * @param {Number} [traverseUp=0] - 鍚戜笂閬嶅巻灞傜骇
		 * @returns {Object|null} React 缁勪欢瀹炰緥鎴?`null`
		 */
		findReact(dom, traverseUp = 0) {
			let key = Object.keys(dom).find(key => {
				return key.startsWith("__reactFiber$")
					|| key.startsWith("__reactInternalInstance$");
			});
			let domFiber = dom[key];
			if (domFiber == null) return null;
			if (domFiber._currentElement) {
				let compFiber = domFiber._currentElement._owner;
				for (let i = 0; i < traverseUp; i++) {
					compFiber = compFiber._currentElement._owner;
				}
				return compFiber._instance;
			}
			let GetCompFiber = fiber => {
				let parentFiber = fiber.return;
				while (base.isType(parentFiber.type) == "string") {
					parentFiber = parentFiber.return;
				}
				return parentFiber;
			};
			let compFiber = GetCompFiber(domFiber);
			for (let i = 0; i < traverseUp; i++) {
				compFiber = GetCompFiber(compFiber);
			}
			return compFiber.stateNode || compFiber;
		},

		/**
		 * 娣辨嫹璐?		 * @author hmjz100
		 * @description 瀹屽叏澶嶅埗鏌愪釜涓滆タ
		 */
		clone(value) {
			if (this.isType(structuredClone) === "function") return structuredClone(value);
			if (value === null || value === undefined) return value;
			if (typeof value !== 'object') return value;
			if (value instanceof Date) return new Date(value);
			if (value instanceof RegExp) return new RegExp(value);
			if (Array.isArray(value)) return value.map(item => base.clone(item));
			const result = {};
			for (const key in value) {
				if (Object.prototype.hasOwnProperty.call(value, key)) result[key] = base.clone(value[key]);
			}
			return result;
		},

		/**
		 * 杩佺Щ鏃х増鏈厤缃?		 * @author hmjz100
		 * @description 灏嗘棫鐗堥厤缃」鐩縼绉诲埌鏂扮増閰嶇疆
		 */
		initConfigMigration(latest) {
			try {
				if (latest === 1) {
					let mapping = {
						"setting_rpc_domain": ["setting_aria2_rpc", 0, "domain"],
						"setting_rpc_port": ["setting_aria2_rpc", 0, "port"],
						"setting_rpc_path": ["setting_aria2_rpc", 0, "path"],
						"setting_rpc_token": ["setting_aria2_rpc", 0, "token"],
						"setting_rpc_dir": ["setting_aria2_rpc", 0, "dir"],
						"setting_terminal_type": ["setting_curl_terminal"],
						"setting_init_code": ["setting_init", "code"],
						"setting_init_license": ["setting_init", "license"],
						"setting_init_version": ["setting_init", "version"],
						"setting_theme_color": ["setting_ui_theme", "color"],
						"setting_theme_baidu": ["setting_ui_theme", "custom", "$baidu"],
						"setting_theme_ali": ["setting_ui_theme", "custom", "$aliyun"],
						"setting_theme_mcloud": ["setting_ui_theme", "custom", "$mcloud"],
						"setting_theme_tcloud": ["setting_ui_theme", "custom", "$tcloud"],
						"setting_theme_xunlei": ["setting_ui_theme", "custom", "$xunlei"],
						"setting_theme_quark": ["setting_ui_theme", "custom", "$quark"],
						"setting_theme_uc": ["setting_ui_theme", "custom", "$uc"],
						"setting_theme_123": ["setting_ui_theme", "custom", "$123pan"]
					};
					// 鏃х増閰嶇疆鎵ц杩佺Щ
					for (let oldKey in mapping) {
						let val = base.getValue(oldKey);
						if (val === undefined || val === null) continue;
						val = (val === "no" ? false : val === "yes" ? true : val);
						let path = mapping[oldKey];
						if (path.length === 1) {
							base.setValue(path[0], val);
						} else {
							let [root, ...keys] = path;
							let obj = base.getValue(root);
							if (obj === undefined || obj === null) {
								let firstKeyType = typeof keys[0];
								let isIndex = firstKeyType === "number" || (firstKeyType === "string" && /^\d+$/.test(keys[0]));
								obj = isIndex ? [] : {};
							}
							let ref = obj;
							for (let i = 0; i < keys.length - 1; i++) {
								let key = keys[i];
								if (!ref[key]) {
									let nextKey = keys[i + 1];
									let hasNextIndex = nextKey !== undefined && (base.isType(nextKey === "number" || (typeof nextKey) === "string" && /^\d+$/.test(nextKey)));
									ref[key] = hasNextIndex ? [] : {};
								}
								ref = ref[key];
							}
							ref[keys.slice(-1)[0]] = val;
							base.setValue(root, obj);
						}
						base.delValue(oldKey);
					}
				}
			} catch (e) {
				base.console.error("銆怢inkSwift銆戣縼绉绘棫鐗堟湰閰嶇疆鍒版柊閰嶇疆鏃跺嚭閿?, e);
			}
		},

		/**
		 * 鍒濆鍖栭粯璁ら厤缃?		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鍒涘缓鍩虹閰嶇疆銆佷富棰樿缃瓑瀛樺偍椤癸紙浠呭綋涓嶅瓨鍦ㄦ椂锛?		 */
		initDefaultConfig() {
			if (base.getValue("setting_config_version") !== "1") base.initConfigMigration(1);
			// 璁剧疆鏂扮粨鏋勭殑榛樿鍊硷紙浠呭綋鏈缃椂锛?			let defaults = [
				{
					name: "setting_idm_rpc",
					value: [
						{
							id: "1",
							default: true
						}
					]
				},
				{
					name: "setting_aria2_rpc",
					value: [
						{
							domain: "http://localhost",
							port: "16800",
							path: "/jsonrpc",
							token: "",
							dir: "",
							default: true
						}
					]
				},
				{
					name: "setting_bitcomet_rpc",
					value: [
						{
							domain: "http://localhost",
							port: "8080",
							path: "/panel/task_add_httpftp_result",
							authName: "",
							authPass: "",
							dir: "",
							default: true
						}
					]
				},
				{
					name: "setting_abdm_rpc",
					value: [
						{
							domain: "http://localhost",
							port: "15151",
							dir: "",
							default: true
						}
					]
				},
				{
					name: "setting_curl_terminal",
					value: "wc"
				},
				{
					name: "setting_init",
					value: {
						code: "",
						license: "",
						version: ""
					}
				},
				{
					name: "setting_ui_theme",
					value: {
						color: "#574AB8",
						custom: {
							$baidu: false,
							$aliyun: false,
							$mcloud: false,
							$tcloud: false,
							$xunlei: false,
							$quark: false,
							$uc: false,
							$123pan: false
						}
					}
				},
				{
					name: "setting_config_version",
					value: "1"
				}
			];
			function cloneDeep(item) {
				return JSON.parse(JSON.stringify(item));
			}
			function fillMissingFields(target, source) {
				// 濡傛灉 target 涓嶅瓨鍦紝鐩存帴杩斿洖 source 鐨勬繁鎷疯礉
				if (target === null || target === undefined) {
					return cloneDeep(source);
				}
				// 濡傛灉绫诲瀷涓嶅悓锛岀洿鎺ユ浛鎹负 source
				if (typeof source !== typeof target) {
					return cloneDeep(source);
				}
				// 濡傛灉 source 鏄璞?				if (base.isType(source) === "object" && !Array.isArray(source)) {
					if (typeof target !== "object" || Array.isArray(target)) {
						return cloneDeep(source);
					}
					let result = { ...target };
					for (let key in source) {
						if (!source.hasOwnProperty(key)) continue;
						// 璺宠繃 default 鐨勮嚜鍔ㄥ悎骞?						if (key === "default") continue;
						if (key === "dir" && target[key] !== undefined) continue;
						if (key === "token" && target[key] !== undefined) continue;
						if (key === "authName" && target[key] !== undefined) continue;
						if (key === "authPass" && target[key] !== undefined) continue;
						result[key] = fillMissingFields(target[key], source[key]);
					}
					return result;
				}
				// 濡傛灉 source 鏄暟缁?				if (Array.isArray(source)) {
					if (!Array.isArray(target)) {
						return cloneDeep(source);
					}
					let result = [...target];
					if (source.length > 0 && base.isType(source[0]) === "object" && source[0] !== null) {
						let template = source[0];
						// 濉厖瀛楁
						for (let i = 0; i < result.length; i++) {
							if (base.isType(result[i]) === "object" && result[i] !== null) {
								result[i] = fillMissingFields(result[i], template);
							} else {
								result[i] = cloneDeep(template);
							}
						}
						// 鑷姩琛ュ厖 default: true
						if (
							template.default === true &&
							!result.some(item => item && item.default === true) &&
							result.length > 0
						) {
							result[0].default = true;
						}
					}
					return result;
				}
				// 鍩烘湰绫诲瀷锛屼繚鐣欏師濮嬪€?				return target;
			}
			defaults.forEach(({ name, value }) => {
				let current = base.getValue(name);
				if (
					current === null ||
					current === undefined ||
					(Array.isArray(current) && current.length === 0)
				) {
					base.setValue(name, cloneDeep(value));
				} else {
					base.setValue(name, fillMissingFields(current, value));
				}
			});
		},

		/**
		 * 鏄剧ず璁剧疆鐣岄潰
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鏋勫缓鍖呭惈 RPC 閰嶇疆銆佺粓绔被鍨嬬瓑璁剧疆椤圭殑浜や簰鐣岄潰
		 * @see {@link https://www.youxiaohou.com/zh-cn/motrix.html#浣跨敤鎸囧崡 RPC 閰嶇疆璇存槑}銆?{@link https://www.youxiaohou.com/zh-cn/curl.html cURL 浣跨敤鏁欑▼}
		 */
		showSetting(event) {
			let setting = $(`<div>
				<div style="text-align:center;">甯︽槦鍙风殑璁剧疆椤圭洰灏嗗湪缃戦〉鍒锋柊鍚庣敓鏁?/div>
				<label class="pl-setting-item listener-tip aria2" data-title="鏈夊叧 IDM 鏈嶅姟鐨勯厤缃?>
					<div>IDM 鏈嶅姟鍣?/div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-idm-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>閰嶇疆</span></button>
				</label>
				<label class="pl-setting-item listener-tip aria2" data-title="鏈夊叧 Aria2 杩滅▼鏈嶅姟鐨勯厤缃?>
					<div>Aria2 鏈嶅姟鍣?/div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-aria2-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>閰嶇疆</span></button>
				</label>
				<label class="pl-setting-item listener-tip bitcomet" data-title="鏈夊叧姣旂壒褰楁槦杩滅▼鏈嶅姟鐨勯厤缃?>
					<div>姣旂壒褰楁槦鏈嶅姟鍣?/div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-bitcomet-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>閰嶇疆</span></button>
				</label>
				<label class="pl-setting-item listener-tip abdm" data-title="鏈夊叧 AB Download Manager 杩滅▼鏈嶅姟鐨勯厤缃?>
					<div>AB Download Manager 鏈嶅姟鍣?/div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-abdm-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>閰嶇疆</span></button>
				</label>
				<label class="pl-setting-item curl">
					<div>缁堢绫诲瀷</div>
					<select class="swal2-select pl-input listener-terminal">
					${Object.keys(temp.terminalType).map(i => `<option value="${i}" ${base.getValue("setting_curl_terminal") === i ? "selected" : ""}>${temp.terminalType[i]}</option>`).join("")}
					</select>
				</label>
				<div class="curl" style="display:flex;justify-content:flex-end;"><a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" class="pl-a" data-no-instant="1"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-link"></use></svg> cURL浣跨敤鏁欑▼</a>锛岄€傜敤浜?cURL 涓嬭浇馃憜</div>
				<div class="other" style="display:flex;justify-content:center;margin-top:20px"><button type="button" class="pl-button-mini swal2-deny swal2-styled listener-unregister listener-tip" data-title="浠呬細娓呴櫎宸插瓨鍌ㄧ殑鐧惧害浠ょ墝锛屽叾浣欒缃」鐩棤褰卞搷锛屼粛浼氫繚鐣?><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>鐔勭伃宸茬粡鐐逛寒鐨勬寜閽?</span></button></div>
			</div>`);
			Swal.fire({
				...temp.swalDefault,
				title: "(锝♀€⑨礂鈥健) 鍔╂墜璁剧疆",
				html: setting.html(),
				icon: "info",
				iconHtml: "鈿欙笌",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "杩斿洖涓婇〉").css({ "left": "0", "right": "auto" }).text("鈼?);
					if (event && $(event.currentTarget).data("back-to-downloads")) element.find(".aria2, .bitcomet, .abdm, .other").hide();
				},
				willClose: () => {
					if (event && $(event.currentTarget).data("back-to-downloads")) base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				},
			});
		},

		/**
		 * 鏄剧ず IDM 鏈嶅姟璁剧疆鐣岄潰
		 * @author hmjz100
		 * @description 鍖呭惈 RPC 閰嶇疆鐨勪氦浜掔晫闈?		 */
		showIDMSetting(event) {
			let IDMList = base.getValue("setting_idm_rpc");
			let IDMOptions = IDMList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.id ? item.id : "0"}</option>`;
			}).join("");
			let IDMSelected = IDMList.find(i => i.default);
			let IDMSetting = `<div style="text-align:center;">閫傜敤浜?IDM 鎺ㄩ€佷笅杞?/div>
				<label class="pl-setting-item">
					<div>榛樿閰嶇疆</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="idm" style="max-width:50%;min-width:auto">
							${IDMOptions}<option value="new">+ 鍒涘缓鏂伴」鐩?/option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="idm"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>鍒犻櫎</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>瀹㈡埛鏍囪瘑</div>
					<input type="number" autocomplete="off" placeholder="鐢ㄤ簬鏍囪瘑 IDM 瀹㈡埛绔墿灞曠殑鏍囪瘑" class="swal2-input pl-input listener-rpc-input" data-type="idm.id" value="">
				</label>
				<div style="text-align:start;margin-top:1em">
					<div>鏍囪瘑璇蜂娇鐢ㄤ互涓嬫柟娉曡幏鍙栵細</div>
					<div>01. 纭繚宸插畨瑁呭ソ IDM 浠ュ強 IDM 娴忚鍣ㄦ墿灞曪紱</div>
					<div>02. 鍙抽敭 IDM 鎵╁睍鍥炬爣锛岃繘鍏?鈥滅鐞嗘墿灞曗€濓紱</div>
					<div>03. 鍦ㄦ墦寮€鐨勬祻瑙堝櫒鐨勭鐞嗛〉闈紝婊氬姩鍒颁笅鏂癸紱</div>
					<div>04. 閫夋嫨 鈥滄鏌ヨ鍥锯€?鍙充晶鐨勪换鎰忎竴涓€夐」杩涘叆锛?/div>
					<div>05. 鍦ㄦ墦寮€鐨?鈥淒evTools鈥?绐楀彛涓紝鐐瑰嚮 鈥滃簲鐢ㄧ▼搴忥紙Application锛夆€?鏍囩锛?/div>
					<div>06. 鍦ㄥ乏渚ф爮涓壘鍒?鈥滄墿灞曞瓨鍌紙Extension Storage锛夆€濓紝灞曞紑锛?/div>
					<div>07. 鍦ㄥ睍寮€鐨勫瓙椤逛腑閫夋嫨 鈥滄湰鍦帮紙Local锛夆€濓紱</div>
					<div>08. 鍦ㄥ彸渚т富瑙嗗浘涓樉绀虹殑琛ㄦ牸涓壘鍒?鈥渃lient鈥?瀵瑰簲鏁板瓧鍊硷紱</div>
					<div>09. 澶嶅埗鏁板瓧鍊硷紝绮樿创鍒颁笂鏂圭殑 鈥滃鎴锋爣璇嗏€?閲岋紱</div>
					<div>10. 鍘昏瘯鐫€鑾峰彇閾炬帴锛岄€夋嫨鍙戦€佸埌 IDM 鐪嬬湅鍚э紒</div>
				</div>`;
			Swal.fire({
				...temp.swalDefault,
				title: "IDM 鏈嶅姟璁剧疆",
				html: IDMSetting,
				icon: "info",
				iconHtml: "鈿欙笌",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "杩斿洖涓婇〉").css({ "left": "0", "right": "auto" }).text("鈼?);
					if (IDMSelected) {
						element.find(".listener-rpc-input").each(function () {
							let type = $(this).data("type").split(".")[1];
							$(this).val(IDMSelected[type] || "");
						});
					} else {
						IDMList[0].default = true;
						base.setValue("setting_idm_rpc", IDMList);
						IDMSelected = IDMList[0];
					}
				},
				willClose: () => {
					if (event && $(event.currentTarget).data("back-to-setting")) base.showSetting();
					if (event && $(event.currentTarget).data("back-to-downloads")) base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				},
			});
		},

		/**
		 * 鏄剧ず Aria2 鏈嶅姟璁剧疆鐣岄潰
		 * @author hmjz100
		 * @description 鍖呭惈 RPC 閰嶇疆鐨勪氦浜掔晫闈?		 * @see {@link https://www.youxiaohou.com/zh-cn/motrix.html#浣跨敤鎸囧崡 RPC 閰嶇疆璇存槑}
		 */
		showAria2Setting(event) {
			let AriaList = base.getValue("setting_aria2_rpc");
			let AriaOptions = AriaList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
			}).join("");
			let AriaSelected = AriaList.find(i => i.default);
			let Aria2Setting = `<div style="text-align:center;"><a href="https://www.youxiaohou.com/zh-cn/motrix.html#浣跨敤鎸囧崡" target="_blank" class="pl-a" data-no-instant="1"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-link"></use></svg> RPC閰嶇疆璇存槑</a>锛岄€傜敤浜?Aria2 鎺ㄩ€佷笅杞?/div>
				<label class="pl-setting-item">
					<div>榛樿閰嶇疆</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="aria2" style="max-width:50%;min-width:auto">
							${AriaOptions}<option value="new">+ 鍒涘缓鏂伴」鐩?/option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="aria2"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>鍒犻櫎</span></button>
						<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test" data-type="aria2" style="margin-left:0"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>娴嬭瘯</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟涓绘満</div>
					<input type="text" autocomplete="off" placeholder="涓绘満鍚嶏紝浠呮敮鎸佷互鍙婇渶甯︿笂 http(s)://锛屼笉鏀寔 ws" class="swal2-input pl-input listener-rpc-input" data-type="aria2.domain" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟绔彛</div>
					<input type="text" autocomplete="off" placeholder="绔彛鍙凤紝渚嬪 Motrix 涓?16800锛孉ria2 涓?6800" class="swal2-input pl-input listener-rpc-input" data-type="aria2.port" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟璺緞</div>
					<input type="text" autocomplete="off" placeholder="璁块棶璺緞锛屼竴鑸槸 /jsonrpc" class="swal2-input pl-input listener-rpc-input" data-type="aria2.path" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟瀵嗛挜</div>
					<input type="text" autocomplete="off" placeholder="鏃犲瘑閽ユ棤闇€濉啓" class="swal2-input pl-input listener-rpc-input" data-type="aria2.token" value="">
				</label>
				<label class="pl-setting-item">
					<div>瀛樺偍璺緞</div>
					<input type="text" autocomplete="off" placeholder="鏂囦欢涓嬭浇鍚庝繚瀛樿矾寰勶紝渚嬪 D:\\Downloads\\锛岀暀绌哄垯榛樿" class="swal2-input pl-input listener-rpc-input" data-type="aria2.dir" value="">
				</label>`;
			Swal.fire({
				...temp.swalDefault,
				title: "Aria2 鏈嶅姟璁剧疆",
				html: Aria2Setting,
				icon: "info",
				iconHtml: "鈿欙笌",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "杩斿洖涓婇〉").css({ "left": "0", "right": "auto" }).text("鈼?);
					if (AriaSelected) {
						element.find(".listener-rpc-input").each(function () {
							let type = $(this).data("type").split(".")[1];
							$(this).val(AriaSelected[type] || "");
						});
					} else {
						AriaList[0].default = true;
						base.setValue("setting_aria2_rpc", AriaList);
						AriaSelected = AriaList[0];
					}
				},
				willClose: () => {
					if (event && $(event.currentTarget).data("back-to-setting")) base.showSetting();
					if (event && $(event.currentTarget).data("back-to-downloads")) base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				},
			});
		},

		/**
		 * 鏄剧ず姣旂壒褰楁槦鏈嶅姟璁剧疆鐣岄潰
		 * @author hmjz100
		 * @description 鍖呭惈 RPC 閰嶇疆鐨勪氦浜掔晫闈?		 */
		showBitcometSetting(event) {
			let BCList = base.getValue("setting_bitcomet_rpc");
			let BCOptions = BCList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
			}).join("");
			let BCSelected = BCList.find(i => i.default);
			let BitcometSetting = `<div style="text-align:center;">閫傜敤浜庢瘮鐗瑰綏鏄熸帹閫佷笅杞?/div>
				<label class="pl-setting-item">
					<div>榛樿閰嶇疆</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="bitcomet" style="max-width:75%;min-width:auto">
							${BCOptions}<option value="new">+ 鍒涘缓鏂伴」鐩?/option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="bitcomet"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>鍒犻櫎</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟涓绘満</div>
					<input type="text" autocomplete="off" placeholder="涓绘満鍦板潃锛岄渶甯︿笂 http(s)://锛屼絾涓嶉渶瑕佸啓绔彛涓庤矾寰? class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.domain" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟绔彛</div>
					<input type="text" autocomplete="off" placeholder="鏈嶅姟鍣ㄧ鍙ｅ彿锛屼竴鑸负 8080" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.port" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟璺緞</div>
					<input type="text" autocomplete="off" placeholder="涓€鑸槸 /panel/task_add_httpftp_result" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.path" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟璐﹀彿</div>
					<input type="text" autocomplete="off" placeholder="鏈湴鏈嶅姟鍣ㄨ处鍙凤紝鏃犺处鍙锋棤闇€濉啓" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.authName" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟瀵嗙爜</div>
					<input type="text" autocomplete="off" placeholder="鏈湴鏈嶅姟鍣ㄥ瘑鐮侊紝鏃犲瘑鐮佹棤闇€濉啓" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.authPass" value="">
				</label>
				<label class="pl-setting-item">
					<div>瀛樺偍璺緞</div>
					<input type="text" autocomplete="off" placeholder="鏂囦欢涓嬭浇鍚庝繚瀛樿矾寰勶紝渚嬪 D:\\Downloads\\锛岀暀绌哄垯榛樿" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.dir" value="">
				</label>`;
			Swal.fire({
				...temp.swalDefault,
				title: "姣旂壒褰楁槦鏈嶅姟璁剧疆",
				html: BitcometSetting,
				icon: "info",
				iconHtml: "鈿欙笌",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "杩斿洖涓婇〉").css({ "left": "0", "right": "auto" }).text("鈼?);
					if (BCSelected) {
						element.find(".listener-rpc-input").each(function () {
							let type = $(this).data("type").split(".")[1];
							$(this).val(BCSelected[type] || "");
						});
					} else {
						BCSelected[0].default = true;
						base.setValue("setting_bitcomet_rpc", BCSelected);
						BCSelected = BCList[0];
					}
				},
				willClose: () => {
					if (event && $(event.currentTarget).data("back-to-setting")) base.showSetting();
					if (event && $(event.currentTarget).data("back-to-downloads")) base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				},
			});
		},

		/**
		 * 鏄剧ず AB Download Manager 鏈嶅姟璁剧疆鐣岄潰
		 * @author hmjz100
		 * @description 鍖呭惈 RPC 閰嶇疆鐨勪氦浜掔晫闈?		 */
		showABDMSetting(event) {
			let ABList = base.getValue("setting_abdm_rpc");
			let ABOptions = ABList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain}:${item.port}</option>`;
			}).join("");
			let ABSelected = ABList.find(i => i.default);
			let ABSetting = `<div style="text-align:center;">閫傜敤浜?AB Download Manager 鎺ㄩ€佷笅杞?/div>
				<label class="pl-setting-item">
					<div>榛樿閰嶇疆</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="abdm" style="max-width:50%;min-width:auto">
							${ABOptions}<option value="new">+ 鍒涘缓鏂伴」鐩?/option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="abdm"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>鍒犻櫎</span></button>
						<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test" data-type="abdm" style="margin-left:0"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>娴嬭瘯</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟涓绘満</div>
					<input type="text" autocomplete="off" placeholder="涓绘満鍦板潃锛岄渶甯︿笂 http(s)://锛屼絾涓嶉渶瑕佸啓绔彛涓庤矾寰? class="swal2-input pl-input listener-rpc-input" data-type="abdm.domain" value="">
				</label>
				<label class="pl-setting-item">
					<div>鏈嶅姟绔彛</div>
					<input type="text" autocomplete="off" placeholder="鏈嶅姟鍣ㄧ鍙ｅ彿锛屼竴鑸负 15151" class="swal2-input pl-input listener-rpc-input" data-type="abdm.port" value="">
				</label>
				<label class="pl-setting-item">
					<div>瀛樺偍璺緞</div>
					<input type="text" autocomplete="off" placeholder="鏂囦欢涓嬭浇鍚庝繚瀛樿矾寰勶紝渚嬪 D:\\Downloads\\锛岀暀绌哄垯榛樿" class="swal2-input pl-input listener-rpc-input" data-type="abdm.dir" value="">
				</label>`;
			Swal.fire({
				...temp.swalDefault,
				title: "ABDM 鏈嶅姟璁剧疆",
				html: ABSetting,
				icon: "info",
				iconHtml: "鈿欙笌",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "杩斿洖涓婇〉").css({ "left": "0", "right": "auto" }).text("鈼?);
					if (ABSelected) {
						element.find(".listener-rpc-input").each(function () {
							let type = $(this).data("type").split(".")[1];
							$(this).val(ABSelected[type] || "");
						});
					} else {
						ABSelected[0].default = true;
						base.setValue("setting_abdm_rpc", ABSelected);
						ABSelected = BCList[0];
					}
				},
				willClose: () => {
					if (event && $(event.currentTarget).data("back-to-setting")) base.showSetting();
					if (event && $(event.currentTarget).data("back-to-downloads")) base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				},
			});
		},

		/**
		 * 鏄剧ず缇庡寲璁剧疆鐣岄潰
		 * @author hmjz100
		 * @description 鎻愪緵涓婚棰滆壊閫夋嫨鍣ㄥ拰鍚勭綉鐩樼晫闈㈢編鍖栭厤缃?		 * @fires .listener-color - 涓婚鑹查€夋嫨浜嬩欢
		 * @fires .listener-theme - 缃戠洏涓婚閰嶇疆鍙樻洿浜嬩欢
		 */
		showBeautify() {
			function changeColor() {
				temp.color = base.getValue("setting_ui_theme").color;
				return config.base.dom.themes.map(item => {
					return `<div style="--color:${item.color}" class="listener-color" data-color="${item.color}">
						<div class="mask">
							${item.name.split("|").map(part => `<div>${part}</div>`).join("")}
							${item.color === temp.color ? `<div class="this"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"></use></svg></div>` : ""}
						</div>
					</div>`;
				}).join("")
			}
			function changeTheme() {
				let themeList = [
					{ name: "鐧惧害缃戠洏", key: "$baidu" },
					{ name: "闃块噷浜戠洏", key: "$aliyun" },
					{ name: "绉诲姩浜戠洏", key: "$mcloud" },
					{ name: "澶╃考浜戠洏", key: "$tcloud" },
					{ name: "杩呴浄浜戠洏", key: "$xunlei" },
					{ name: "澶稿厠缃戠洏", key: "$quark" },
					{ name: "UC 缃戠洏", key: "$uc" },
					{ name: "123 浜戠洏", key: "$123pan" }
				];
				return themeList.map(item => {
					return `<label class="pl-setting-item">
						<div>${item.name}</div>
						<input type="checkbox" class="swal2-checkbox pl-input listener-theme" data-type="${item.key}" ${base.getValue("setting_ui_theme").custom[item.key] === true ? "checked" : ""}>
					</label>`;
				}).join("");
			}
			let beautify = $(`<div>
				<div style="text-align:center;">甯︽槦鍙风殑缇庡寲椤圭洰灏嗗湪缃戦〉鍒锋柊鍚庣敓鏁?/div>
				<label class="pl-setting-item" style="justify-content:center"><div class="pl-color">${changeColor()}</div></label>
				<div class="pl-setting-item"><div>鏇挎崲鐣岄潰閰嶈壊涓轰富棰橀鑹?</div><div class="pl-checkboxies">${changeTheme()}</div></div>
				<style>
					.pl-color{display:grid!important;grid-template-columns:repeat(5, var(--pl-color-width));gap:10px;--pl-color-width:55px}
					.pl-color > div{background-color:var(--color);width:var(--pl-color-width);height:var(--pl-color-width);box-sizing:border-box;cursor:pointer}
					.pl-color .mask{width:calc(var(--pl-color-width) - 2px);height:calc(var(--pl-color-width) - 2px);opacity:0;transition:opacity.2s;color:#fff;font-size:13px;display:flex;align-items:center;justify-content:center;flex-direction:column}
					.pl-color > div:hover .mask{opacity:1}
					.pl-checkboxies{display:grid!important;grid-template-columns:repeat(2, 98px);gap:10px}
					.pl-input[type=checkbox]{height:20px;width:20px;padding:0!important;background-image:none!important}
				</style>
			</div>`)
			Swal.fire({
				...temp.swalDefault,
				title: "(鉁酷礂鈥酷礂) 鍔╂墜缇庡寲",
				html: beautify.html(),
				icon: "success",
				iconHtml: "馃崈锔?,
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
			});
		},

		/**
		 * 鏄剧ず璋冭瘯淇℃伅闈㈡澘
		 * @description 灞曠ず鑴氭湰杩愯鏃剁幆澧冦€佺増鏈俊鎭強渚濊禆鐘舵€?		 * @author hmjz100
		 * @property{String} manageHandler - 澶栭儴绠＄悊鍣ㄥ悕绉?		 * @property{String} manageVersion - 澶栭儴绠＄悊鍣ㄧ増鏈?		 */
		showDebug() {
			let debugInfo = "";
			debugInfo += `<span>浠ヤ笅鍐呭鍧囦负鑴氭湰鑷淇℃伅<br/>鏈〉闈粎浣滀负璋冭瘯浣跨敤<span>`;
			debugInfo += `<label class="pl-setting-item"><div>[澶朷 绠＄悊鍣ㄥ悕绉?/div>${info.mhandler ? info.mhandler : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[澶朷 绠＄悊鍣ㄧ増鏈?/div>${info.mversion ? info.mversion : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[鍐匽 鑴氭湰鎸傝浇鐐?/div>${mount ? `${mount.toLowerCase()}.${mount}` : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[澶朷 鑴氭湰鍚嶇О</div>${info.name ? info.name : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[澶朷 鑴氭湰浣滆€?/div>${info.author ? info.author : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[澶?鍐匽 鑴氭湰鐗堟湰</div>${info.version ? info.version : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[澶?鍐匽 鑴氭湰鍥炬爣</div>${info.icon ? `<img style="max-width:30%" src="${info.icon}"></img>` : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[鍐匽 鍏紬鍙蜂簩缁寸爜</div>${config.base?.service?.account ? `<img style="max-width:30%" src="${config.base.service.account}"></img>` : "鏃犳硶鑾峰彇"}</label>`;
			debugInfo = "<div>" + debugInfo + "</div>";
			Swal.fire({
				...temp.swalDefault,
				icon: "info",
				title: "璋冭瘯淇℃伅",
				html: debugInfo,
				allowOutsideClick: false,
				showCloseButton: true,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
			});
		},

		/**
		 * 鏄剧ず鐗堟湰鏇存柊鏃ュ織
		 * @author hmjz100
		 * @description 鎸夋椂闂村€掑簭灞曠ず鎵€鏈夊巻鍙茬増鏈洿鏂板唴瀹?		 */
		async showUpdate() {
			await Swal.fire({
				...temp.swalDefault,
				icon: "info",
				title: "鏇存柊鏃ュ織",
				html: `<div class="version-log">
				<div class="block">
					<blockquote>
						<div>椋庨洦閫佹槬褰掞紝椋為洩杩庢槬鍒般€傚凡鏄偓宕栫櫨涓堝啺锛岀姽鏈夎姳鏋濅繌銆?/div>
						<div>淇忎篃涓嶄簤鏄ワ紝鍙妸鏄ユ潵鎶ャ€傚緟鍒板北鑺辩儌婕椂锛屽ス鍦ㄤ笡涓瑧銆?/div>
					</blockquote>
				</div>
				<div class="block">(锞夆棔銉棔)锞?閬囧埌 Bug 瑕佽寰楀幓 <a class="pl-a" href="https://github.com/hmjz100/LinkSwift/issues" target="_blank">Github 璁</a> 鍚戞垜鎶ュ憡鍝</div>
				<div class="block">(o銈溾柦銈?o鈽?瑙夊緱濂界敤锛熸潵涓€鍚屽畬鍠勬湰椤圭洰鍚 娆㈣繋鎻愪氦<a class="pl-a" href="https://github.com/hmjz100/LinkSwift/pulls" target="_blank">鎷夊彇璇锋眰</a>涓烘湰椤圭洰鍋氳础鐚畘</div>
				<div class="block">
					<name>V1.1.3</name>
					<div>
					<div>LinkSwift 寮€鍙戣€呭湪姝ょ鎮ㄦ柊鏄ュ揩涔愶紒</div>
					<div>鐖嗙澹颁腑涓€宀侀櫎锛屾槬椋庨€佹殩鍏ュ睜鑻忋€侺inkSwift 杩庢潵鍔熻兘鏇存柊锛?/div>
					<div>1銆佹柊澧?- IDM 瀹㈡埛绔缃紱</div>
					<div>2銆佷紭鍖?- 閾炬帴缂撳瓨銆佹诞鍔ㄦ彁绀烘锛?/div>
					<div>3銆侀€傞厤 - 鐧惧害缃戠洏鍒嗕韩椤点€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.2.1</name>
					<div>
					<div>1銆佹柊澧?- API 涓嬭浇鐨勬帹閫佸埌 IDM 鍔熻兘锛?/div>
					<div style="margin-left:10px">锛堟劅璋?<a href="https://github.com/Night-stars-1" target="_blank">Night Stars</a> 鐨勫府鍔╋級</div>
					<div>2銆佷慨澶?- 澶嶅埗 Aria2銆乧URL 鍛戒护琛岄敊璇€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.2</name>
					<div>
					<div>1銆侀€傞厤 - 123 浜戠洏鏂扮瓥鐣ワ紱</div>
					<div>2銆侀€傞厤 - 澶稿厠銆乁C 缃戠洏鍒嗕韩椤碉紱</div>
					<div>3銆佹柊澧?- 澧炲己涓嬭浇鐨勫鍧楀绾跨▼鏀寔锛?/div>
					<div>4銆佷紭鍖?- 椤甸潰缁垮寲鐨勯儴鍒嗗尮閰嶈鍒欙紱</div>
					<div>5銆佷紭鍖?- 澧炲己涓嬭浇杩涘害鏉℃牱寮忋€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.9</name>
					<div>
					<div>1銆佷慨澶?- 123 浜戠洏涓嬭浇瑙嗛鍙樹负缂╃暐鍥俱€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.8</name>
					<div>
					<div>1銆佷慨澶?- 閫傞厤鏂扮増 123 浜戠洏鍒嗕韩椤点€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.7</name>
					<div>
					<div>1銆佷慨澶?- 缂哄け澹版槑 @connect 瀵艰嚧鐨勯棶棰樸€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.6</name>
					<div>
					<div>1銆?span style="color:#fff;background:${temp.color}">搴熷純 - 鐧惧害缃戠洏 BDUSS Cookie 鐩稿叧浠ｇ爜锛岃浆鍚戜娇鐢ㄦ洿瀹夊叏鐨?AccessToken</span>锛?/div>
					<div>2銆佸簾寮?- 鐧惧害缃戠洏鍒嗕韩椤甸潰涓嬭浇鐩稿叧浠ｇ爜锛?/div>
					<div>3銆佷紭鍖?- 涓嬭浇绐楀彛鍙湪璁剧疆鏀瑰彉鍚庡姩鎬佷慨鏀圭晫闈€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.5</name>
					<div>
					<div>1銆佹柊澧?- AB Download Manager 涓嬭浇鏂瑰紡锛?/div>
					<div>2銆佷紭鍖?- 鏀寔浠庤缃〉闈竴閿繑鍥炰笅杞界獥鍙ｏ紝鏃犻渶閲嶅鑾峰彇閾炬帴銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.4</name>
					<div>
					<div>1銆侀€傞厤 123 浜戠洏鏂扮増椤甸潰銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.3</name>
					<div>
					<div>1銆佷慨澶嶅じ鍏嬬綉鐩樻棤娉曡幏鍙栦笅杞介摼鎺ョ殑 Bug锛?/div>
					<div>2銆佷慨澶?API 涓嬭浇鏃犳硶澶嶅埗鍏ㄩ儴閾炬帴銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.2</name>
					<div>
					<div>1銆佷慨澶嶆棤娉曞垹闄ょ涓€椤硅繙绋嬮厤缃殑 Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.1</name>
					<div>
					<div>1銆佷慨澶嶆帹閫佽嚦 Aria2 鏃舵帹閫佹垚鍔熶絾鎶ラ敊鐨?Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1</name>
					<div>
					<div>1銆侀厤缃枃浠舵牸寮忔洿鏂帮紝<span style="color:#fff;background:${temp.color}">鏀寔娣诲姞銆佸垹闄ゃ€佸垏鎹㈠涓湇鍔￠厤缃?/span>锛?/div>
					<div>2銆佹敮鎸佹瘮鐗瑰綏鏄熸帹閫佷笅杞斤紝<span style="color:#fff;background:${temp.color}">鍘?RPC 宸插苟鍏?Aria2 涓嬭浇</span>锛?/div>
					<div>3銆佺晫闈?span style="color:#fff;background:${temp.color}">澧炲姞 Font Awesome 鍥炬爣锛?/span>鏇村ソ鐪嬪暒锛?/div>
					<div>4銆佷紭鍖栬剼鏈唬鐮併€佺晫闈紝杩愯鏇磋交蹇紱</div>
					<div>5銆佷慨澶嶄笂涓増鏈仐瀛樼殑闂銆?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.1.0.1</name>
					<div>
					<div>1銆佷慨澶嶆煡鐪?RPC 涓嬭浇浠诲姟鐨?Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.0</name>
					<div>
					<div>1銆佹敮鎸?UC 缃戠洏銆?23 浜戠洏锛?/div>
					<div>2銆佹敼杩涗簡缃戠洏涓婚鐨勬敞鍏ユ柟寮忥紱</div>
					<div>3銆佽仛鍚堝苟閲嶆瀯浜嗛儴鍒嗛噸澶嶅嚱鏁帮紝瀵规暣浣撹剼鏈€昏緫杩涜浜嗘⒊鐞嗗拰绮剧畝锛?/div>
					<div>4銆佸皢鑴氭湰鎵ц闃舵浠?document-body 閫傞厤涓?document-start銆?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.9.7</name>
					<div>
					<div>1銆佷慨澶嶇Щ鍔ㄤ簯鐩樹笅杞介敊璇紱</div>
					<div>2銆佷紭鍖栦唬鐮侊紝鏇村ソ鐨勯敊璇瘑鍒紱</div>
					<div>3銆佸幓闄や簡娌瑰皬鐚翠簯鏈嶅姟銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.6</name>
					<div>
					<div>1銆佹敮鎸佸湪鐧惧害缃戠洏涓€夋嫨鏂囦欢澶逛笅杞斤紱</div>
					<div>2銆佷紭鍖栭儴鍒嗘彁绀恒€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.5</name>
					<div>
					<div>1銆佷慨澶嶅洜浠ｇ爜閫昏緫閿欒鑰屾棤娉曡幏鍙栭摼鎺ョ殑 Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.4</name>
					<div>
					<div>1銆佷慨澶嶅洜鐧惧害缃戠洏 AccessToken 杩囨湡瀵艰嚧鏃犳硶鑾峰彇閾炬帴鐨?Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.3</name>
					<div>
					<div>1銆佽嫢缃戠洏涓嶆敮鎸佸湪鍒嗕韩涓笅杞斤紝灏嗕粎鏄剧ず淇濆瓨缃戠洏鎸夐挳锛?/div>
					<div>2銆佷紭鍖栦笅杞界晫闈紝鏀寔閫夋嫨 Iframe 鎴?Blob 鐨勬柟寮忔潵涓嬭浇鏂囦欢锛屽鍔犳寜閽殑鎻愮ず鏂囨湰锛?/div>
					<div>3銆佷紭鍖?CSS 鏍峰紡锛岀粺涓€浜?SweetAlert2 鎸夐挳鏍峰紡锛屽悓鏃堕€傞厤浜?Dark Reader 鎻掍欢锛岀晫闈㈡洿鍗忚皟锛?/div>
					<div>4銆佹敮鎸佷慨鏀规补灏忕尨缃戠珯涓婚鑹诧紱</div>
					<div>5銆佸師鏈変富棰樼浉鍏宠缃幇宸茬Щ鍔ㄨ嚦鍔╂墜缇庡寲椤甸潰涓€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.2</name>
					<div>
					<div>1銆佷慨澶嶄娇鐢ˋPI 涓嬭浇鏃舵湁鍙兘浼氬鑷碔DM鏃犻檺寮圭獥鐨凚ug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.1</name>
					<div>
					<div>1銆佷慨澶嶅湪鐧惧害缃戠洏鏃х増涓嬭剼鏈棤娉曞垹闄ゅ厓绱犵殑Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9</name>
					<div>
					<div>1銆佽窡杩涘畼鏂筕6.2.7锛屼慨澶嶅洜鏃犳硶杩涜鐧惧害鎺堟潈鑰屽鑷磋幏鍙栫洿閾炬姤閿?9019 鐨?Bug銆?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.8.9</name>
					<div>
					<div>1銆佽窡杩涘畼鏂筕6.2.3锛屼紭鍖栦繚瀛樺埌缃戠洏鎻愮ず锛屼慨澶嶉樋閲屼簯鐩樸€佺Щ鍔ㄤ簯鐩樺け鏁堢殑闂锛?/div>
					<div>2銆佷紭鍖栦慨鏀圭綉鐩樹富棰樼殑浠ｇ爜锛屽噺灏戝椤甸潰鐨勭牬鍧忋€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.8</name>
					<div>
					<div>1銆佷慨澶嶄笅杞借彍鍗曞瓧浣撹繃灏忕殑Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.7</name>
					<div>
					<div>1銆佷慨澶嶅湪闃块噷浜戠洏鍒嗕韩椤甸潰涓嬬偣鍑烩€滄湭鐐逛寒鈥濇寜閽椂娌℃湁浠讳綍鍙嶅簲鐨凚ug锛?/div>
					<div>2銆佹洿鏂板苟浼樺寲缃戠洏鐣岄潰绮剧畝瑙勫垯锛?/div>
					<div>3銆佹敮鎸佹洿鎹?鐧惧害缃戠洏銆侀樋閲屼簯鐩樸€佽繀闆蜂簯鐩樸€佸じ鍏嬬綉鐩樸€佺Щ鍔ㄤ簯鐩?鐣岄潰鐨勪富棰橀鑹层€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.6</name>
					<div>
					<div>1銆佹柊澧炵Щ鍔ㄤ簯鐩樹細鍛樹腑蹇冮〉闈紝鍙湪缃戠洏涓偣鍑烩€滀細鍛樹腑蹇冣€濇寜閽煡鐪?浣嗘棤娉曚娇鐢ㄧ涓夋柟鏀粯)銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.5</name>
					<div>
					<div>1銆佽窡杩涘畼鏂筕6.1.6锛屼慨澶嶈繀闆风綉鐩樺垎浜〉闈㈡棤娉曢€変腑鏂囦欢锛屼慨澶嶇Щ鍔ㄤ簯鐩樻棤娉曞垽鏂〉闈€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.4</name>
					<div>
					<div>1銆佷慨澶嶅洜閲嶅缁戝畾鎸夐挳鑰屽鑷村懡浠ら噸澶嶆墽琛岀殑Bug锛?/div>
					<div>2銆佷紭鍖栬皟璇曚俊鎭晫闈㈡帓鐗堬紱</div>
					<div>3銆佺Щ闄ゅ鐧惧害缃戠洏鎵嬫満缃戦〉鐗堢殑鏀寔銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.3</name>
					<div>
					<div>1銆侀€傞厤闃块噷浜戠洏鏂板煙鍚峚lipan.com銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.2</name>
					<div>
					<div>1銆佹洿鎹㈡柊鍥炬爣銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.1</name>
					<div>
					<div>1銆佷慨澶嶅洜閲嶅缁戝畾鎸夐挳鑰屽鑷?RPC 涓嬭浇浼氬彂閫佸鏉′笅杞借姹傜殑Bug锛?/div>
					<div>2銆侀€夋嫨涓嶄娇鐢ㄦ补灏忕尨鏈嶅姟鍣ㄦ椂锛屸€滅敤ghproxy杩炴帴Github浠撳簱鈥濇洿鎹负鈥滅敤jsdelivr杩炴帴Github浠撳簱鈥濓紱</div>
					<div>3銆佽窡杩涘畼鏂筕6.1.4鐗堟湰锛屼慨澶嶇Щ鍔ㄧ綉鐩樻棤娉曡幏鍙栭摼鎺ワ紝鏀寔闃块噷浜戠洏鏂板煙鍚峚lipan.com銆?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.8</name>
					<div>
					<div>1銆佷慨澶嶈繀闆风綉鐩樻棤娉曞嬀閫夋枃浠躲€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.9</name>
					<div>
					<div>1銆佹洿鏂扮簿绠€缃戠洏鍏冪礌鍖归厤瑙勫垯锛岄槻姝㈠洜閫氱煡妯潯鑰屽鑷翠笉鑳界偣鍒扳€淎PI 涓嬭浇鈥濅互涓嬬殑鎸夐挳銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.8</name>
					<div>
					<div>1銆佽窡杩涘畼鏂筕6.1.2锛屽姞鍏2鎺ュ彛銆?/div>
					<div>2銆佷慨澶嶇櫨搴︾綉鐩樹笅杞芥椂鍥犱负鑾峰彇涓嶅埌accessToken鑰屼竴鐩磋浆鍦堛€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.7</name>
					<div>
					<div>1銆佷慨澶嶇櫨搴︾綉鐩樼殑鎸夐挳浼氬洜涓轰富棰樹笉鍚岃€岃鏀瑰彉棰滆壊鐨凚ug锛?/div>
					<div>2銆佹洿鏂板じ鍏嬬綉鐩樻寜閽笌鐣岄潰銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.6</name>
					<div>
					<div>1銆佷慨澶嶁€滄敞鍏モ€濆姛鑳斤紱</div>
					<div>2銆侀粦鏆楁ā寮忔敮鎸侀殢璁剧疆鐑垏鎹€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.5</name>
					<div>
					<div>1銆佷慨澶嶉樋閲屼簯鐩樹笅杞介€昏緫锛?/div>
					<div>2銆佺簿绠€浠ｇ爜锛?/div>
					<div>3銆佹敮鎸佹繁鑹叉ā寮忥紱</div>
					<div>4銆佷慨鏀归儴鍒嗘彁绀烘枃鏈紱</div>
					<div>5銆佷慨鏀归儴鍒咰SS锛?/div>
					<div>6銆佽缃彲娴嬭瘯RPC杩炴帴銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.4</name>
					<div>
					<div>1銆佷紭鍖栦笅杞介€昏緫锛?/div>
					<div>2銆佷慨澶嶉樋閲屼簯鐩樻棤娉曚娇鐢ˋPI 涓嬭浇銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.3</name>
					<div>
					<div>1銆佸鏋滃嚭鐜扮綉缁滆姹傞敊璇椂鏀寔鑷姩閲嶆柊璇锋眰锛?/div>
					<div>2銆佸彲閫夋嫨鏄惁浣跨敤娌瑰皬鐚存湇鍔″櫒銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.2</name>
					<div>
					<div>1銆佷慨澶嶄娇鐢?RPC 涓嬭浇鏃朵細閲嶅鍙戦€侀摼鎺ョ殑Bug銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.1</name>
					<div>
					<div>[瀹為獙鍔熻兘锛屼笉褰卞搷姝ｅ父浣跨敤]鏀寔鐧惧害缃戠洏鎵嬫満缃戦〉鐗堬紝鍕鹃€夋枃浠跺悗鍙湪椤舵爮鎵惧埌鈥滀笅杞藉姪鎵嬧€濇寜閽€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7</name>
					<div>
					<div>1銆侀噸鏋勫じ鍏嬬綉鐩樸€侀樋閲屼簯鐩樻寜閽€?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.6.9</name>
					<div>
					<div>1銆佷笅杞界獥鍙ｅ姞鍏ュ叧闂寜閽€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.8</name>
					<div>
					<div>1銆佷慨澶嶅じ鍏嬬綉鐩樻寜閽敊浣嶃€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.7</name>
					<div>
					<div>1銆佸皢鐧惧害缃戠洏鐣岄潰淇敼涓轰富棰樿壊锛屽彲鍦ㄨ缃€夋嫨鏄惁淇敼锛?/div>
					<div>2銆佸鍔犱富棰樿壊鍚嶇О锛屾洿鏀归儴鍒嗗唴瀹归鑹诧紱</div>
					<div>3銆佺Щ鍔ㄤ簯鐩楢PI 涓嬭浇鏀寔鎵归噺澶嶅埗锛?/div>
					<div>4銆佷紭鍖栨帶鍒跺彴杈撳嚭缁撴灉锛?/div>
					<div>5銆佺櫨搴︾綉鐩楢PI 涓嬭浇涓嶄娇鐢↖DM鏃跺彲浠ユ樉绀哄墿浣欐椂闂达紱</div>
					<div>6銆佲€滃彇娑堢偣浜寜閽€濇寜閽殑浣嶇疆鐜板凡绉诲姩鍒拌缃〉闈€?/div>
					<div>7銆乭omo鐗规湁鐨勫僵铔嬪張鍥炴潵鍔?鍠?銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.6</name>
					<div>
					<div>1銆佷慨澶嶆殫鍙烽敊璇€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.5</name>
					<div>
					<div>1銆佷慨澶嶅嵆浣胯緭鍏ユ纭殫鍙蜂篃涓嶈兘鎴愬姛鐐逛寒鎸夐挳鐨勬湇鍔″櫒閿欒銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.4</name>
					<div>
					<div>1銆佽窡杩涘畼鏂筕6.1.1鐗堟湰锛屼慨澶嶉樋閲屼簯鐩樿幏鍙栦笅杞介摼鎺ユ椂鐨勯棶棰樸€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.3</name>
					<div>
					<div>1銆佺収椤惧皬灞忓箷鐢ㄦ埛锛屽皢濮嬬粓鏄剧ず澶嶅埗鍏ㄩ儴閾炬帴鐨勬寜閽紱</div>
					<div>2銆佸鍔犲彇娑堜笅杞芥椂鐨勫姩鐢汇€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.2</name>
					<div>
					<div>1銆佷慨澶嶉儴鍒嗙晫闈㈤敊浣嶏紝瀹炵幇CSS鍐呯疆锛?/div>
					<div>2銆佺櫨搴︾綉鐩樼晫闈㈠皢鍙樺緱鏇村姞绠€娲併€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.1</name>
					<div>
					<div>1銆佹柊澧炵櫨搴︿簯鐩楢PI 涓嬭浇鏀寔澶嶅埗閾炬帴锛?/div>
					<div>2銆佷负浜嗙収椤炬墜鏈烘祻瑙堝櫒鐢ㄦ埛锛屽澶ч」鐩箣闂撮棿闅欙紝鏂板闅愯棌IDM鎻愮ず閫夐」锛屽彲鍦ㄥ姪鎵嬭缃腑鍚敤锛?/div>
					<div>3銆佷慨鏀笴SS锛岀晫闈細鍑虹幇鏇村鐨勪富棰樿壊锛?/div>
					<div>4銆佹敮鎸佸湪娌瑰皬鐚村畼缃戞煡鐪嬫殫鍙凤紱</div>
					<div>5銆佷慨澶嶉儴鍒嗚娉曢敊璇€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6</name>
					<div>
					<div>1銆佷慨澶嶄簡鎵撳紑闃块噷浜戠洏鍒嗕韩杩炴帴鏃跺洜涓嬭浇绉诲姩绔箍鍛婂鑷村彧鑳界偣鍑?API 涓嬭浇锛?/div>
					<div>2銆佽窡杩涘畼鏂?.0.4鐗堟湰锛屼慨澶嶅じ鍏嬬綉鐩樿幏鍙栦笅杞介摼鎺ュけ鏁堛€佹敮鎸佺Щ鍔ㄤ簯鐩樸€?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.5.5</name>
					<div>
					<div>1銆佹劅璋?a href="https://github.com/Night-stars-1" target="_blank">Night Stars</a>鐨勫府鍔╋紝淇鍥犱负鍘熶綔鑰呮湇鍔″櫒瀵艰嚧鐨勫垵濮嬪寲鏆楀彿璇嗗埆閿欒锛?/div>
					<div>2銆佷慨鏀逛竴浜涙枃鏈互鍙婃彁渚涚粰鏈嶅姟鍣ㄧ殑淇℃伅銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.4</name>
					<div>
					<div>1銆佸皬淇皬鏀筩ss锛岃涓婚鑹插嚭鐜板湪鏇村鍦版柟锛?/div>
					<div>2銆佷慨鏀逛笅杞介摼鎺ヨ幏鍙栧け璐ョ殑鎻愮ず锛?/div>
					<div>3銆佸鍔犳洿澶氱殑涓婚鑹诧紝鍙湪鍔╂墜璁剧疆鏌ョ湅锛?/div>
					<div>4銆乭omo褰╄泲琚垹鍘诲姏锛堟偛锛夈€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.3</name>
					<div>
					<div>1銆佷慨鍟︿慨鍟︼紝闃块噷浜戠洏鍙互鎽稿埌涓嬭浇鑿滃崟浜嗐€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.2</name>
					<div>
					<div>1銆佸鍔犺剼鏈俊鎭彍鍗曪紙娌℃湁鐢級锛?/div>
					<div>2銆佷紭鍖栭樋閲屼簯鐩樻樉绀簊vg鍥剧墖锛?/div>
					<div>3銆佷慨鏀瑰脊绐楁寜閽鑹层€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.1</name>
					<div>
					<div>1銆佷慨澶嶅湪鍒囨崲鎸夐挳涓婚鍚庡じ鍏嬬綉鐩樹笉鑳芥甯告樉绀烘寜閽€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5</name>
					<div>
					<div>1銆佽窡杩涘畼鏂筕5.0.4鐗堟湰锛?/div>
					<div>2銆佸皬鏀瑰姩锛岀収鐫€瀹樻柟鐗堟湰鏇存鏂囦欢鍚嶇О妫€娴嬶紱</div>
					<div>3銆佷繚鐣欏僵铔嬶紝浣嗗繀椤昏垗寮冨畼鏂规殫鍙枫€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.4</name>
					<div>
					<div>澶ф敼锛?/div>
					<div>1銆佷慨澶嶄簡鍘熶綔鑰呯暀涓嬬殑澶稿厠缃戠洏鍒囨崲鏂囦欢澶瑰氨澶氫竴涓€滀笅杞藉姪鎵嬧€濇寜閽殑澶UG锛?/div>
					<div>2銆佺粓浜庢潵浜嗭紝鍦ㄤ笅杞借彍鍗曞鍔犫€滃姪鎵嬭缃€濃€滄洿鏂版棩蹇椻€濇寜閽紱</div>
					<div>銆愬啀涔熶笉鐢ㄧ偣杩涙补鐚寸鐞嗗啀杩涜缃簡(淇濈暀娌圭尨绠＄悊鍐呰缃?銆?/div>
					<div>3銆佷慨鏀归樋閲屼簯鐩樺拰澶稿厠缃戠洏涓嬭浇鍔╂墜鎸夐挳鏍峰紡锛?/div>
					<div>4銆佸鍔犫€滃彇娑堢偣浜寜閽€濇补鐚磋彍鍗曪紱</div>
					<div>5銆佷慨鏀归儴鍒哻ss锛屼娇鍏朵笌閫夋嫨鐨勪富棰樻洿璐村垏銆?/div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.3</name>
					<div>
					<div>1銆佸鍔犱竴涓皬褰╄泲锛?鎻愮ず锛?/div>
					<div>homo锛堥渶鍦ㄦ湭鐐逛寒鎸夐挳鐘舵€佽Е鍙戯級</div>
					<div>銆愰渶瑕侀噸鏂版仮澶嶆寜閽负鏈偣浜姸鎬佽杩涘叆 宸插畨瑁呰剼鏈?>缂栬緫->寮€鍙戣€?>閲嶇疆鍒板嚭鍘?>纭畾銆?/div>
					<div>2銆佷慨鏀?澧炲姞榛樿涓婚鑹层€?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.2</name>
					<div>
					<div>1銆佷慨鏀瑰苟鍔犲鐣岄潰锛岃皟鏁撮儴鍒哻ss锛屼娇Sweetalert2鐣岄潰鏇寸編瑙傦紝鏇翠笌鍘熺増鐩歌繎锛?/div>
					<div>2銆佷慨鏀归儴鍒嗘彁绀烘枃瀛楋紝浣挎枃瀛楁洿瀹规槗澶嶅埗銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.1</name>
					<div>
					<div>1銆佸幓闄ゆ洿鏂版彁绀猴紱</div>
					<div>2銆佹洿鏂癝weetalert2鑷?1鐗堟湰锛?/div>
					<div>3銆侀儴鍒咰DN鑺傜偣鏇存崲涓簀sdelivr銆?/div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.0</name>
					<div>
					<div>1銆佸鍔犫€滄敞鍏モ€濆姛鑳斤紙bushi锛夛紱</div>
					<div>2銆佸幓闄ゅ箍鍛娿€?/div>
				</div>
				</div>
				</div>
				<style>
				div:where(.swal2-container) div:where(.swal2-popup){
					width:36em!important;
				}
				.version-log{
					text-align:left;
				}
				.version-log > .block,
				.version-log > hr{
					margin-bottom:20px;
				}
				.version-log > hr{
					border-style:inset;
					border-width:1px;
				}
				.version-log .block name{
					display:block;
					margin-bottom:10px;
					font-size:1.2em;
				}
				.version-log .block div{
					margin-bottom:5px;
				}
				.version-log .block blockquote{
					padding:0.7em;
					border-left:5px solid #bdbdbd;
					background-color:#f9f9f9;
					margin:0;
				}
				@media (prefers-color-scheme:dark){
					.version-log .block blockquote{
						border-left:5px solid #7A7C84;
						background-color:#464851;
					}
				}
				</style>`,
				allowOutsideClick: false,
				showCloseButton: true,
				confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 鎴戝凡闃卄,
			});
		},

		/**
		 * 鍒涘缓娴姩鎸囩ず妗?		 * @description 涓€涓┒鏋佸ソ鐢ㄧ殑鎸囩ず妗嗭紝鏀寔鐩戝惉鍏冪礌鎮仠浜嬩欢鍔ㄦ€佹敼鍙樹綅缃紝浜﹁兘鏄剧ず鏂囦欢鍚嶄笌澶у皬
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @fires .listener-tip - 榧犳爣绉诲姩浜嬩欢瑙﹀彂鎸囩ず妗嗗畾浣?		 * @see {@link temp.color} 浣跨敤鍏ㄥ眬涓婚鑹叉覆鏌撴枃浠跺ぇ灏忎俊鎭?		 */
		createTip() {
			let tooltip = document.querySelector(".pl-tooltip");
			let ticking = false; // 鐢ㄤ簬 rAF 鑺傛祦
			let currentTarget = null;

			// 鏇存柊浣嶇疆
			var updatePosition = (x, y) => {
				if (!tooltip) return;
				let X = x + 10;
				let Y = y + 20;
				let clientWidth = document.documentElement.clientWidth;
				let clientHeight = document.documentElement.clientHeight;
				let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (X + tooltip.offsetWidth > clientWidth + scrollLeft) {
					X = clientWidth + scrollLeft - tooltip.offsetWidth;
				}
				if (X < scrollLeft) {
					X = scrollLeft;
				}
				if (Y + tooltip.offsetHeight > clientHeight + scrollTop) {
					Y = clientHeight + scrollTop - tooltip.offsetHeight;
				}
				if (Y < scrollTop) {
					Y = scrollTop;
				}
				// 浣跨敤 translate3d 鐨勬€ц兘杩滈珮浜?top/left锛屽畠涓嶈Е鍙戝竷灞€璁＄畻锛岃繕鎷ユ湁 GPU 鍔犻€?				tooltip.style.transform = `translate3d(${X}px, ${Y}px, 0)`;
			};

			// 鍐呭娓叉煋
			var renderContent = (target) => {
				var { title, size } = target.dataset;
				let html = "";

				if (title) {
					html = `<span>${title}</span>`;
				} else {
					var nameEl = target.querySelector(".name");
					var sizeEl = target.querySelector(".size");
					var name = nameEl ? nameEl.textContent : "";
					var sizeText = sizeEl ? sizeEl.textContent : "";

					html = `<span>${name}</span>`;
					if (sizeText) {
						html += `<span style="background-color:${temp.color}">${sizeText}</span>`;
					}
				}

				if (!tooltip) {
					tooltip = document.createElement("div");
					tooltip.className = "pl-tooltip";
					tooltip.style.position = "absolute";
					tooltip.style.willChange = "transform"; // 鍛婄煡娴忚鍣ㄦ彁鍓嶅噯澶囧眰鍚堟垚
					tooltip.style.pointerEvents = "none"; // 闃叉鎸囩ず妗嗘尅浣忛紶鏍囧鑷存姈鍔?					temp.mount[0].appendChild(tooltip);
				}

				tooltip.innerHTML = html;
				tooltip.style.display = "flex";
			};

			// 浜嬩欢澶勭悊
			var handleMove = (e) => {
				if (!currentTarget) return;

				// 鑾峰彇鍧愭爣锛孭ointerEvent 缁熶竴浜?clientX/Y
				var x = e.pageX;
				var y = e.pageY;

				if (!ticking) {
					// 浣跨敤 requestAnimationFrame 鑺傛祦锛岀‘淇濇瘡甯у彧鏇存柊涓€娆′綅缃?					requestAnimationFrame(() => {
						updatePosition(x, y);
						ticking = false;
					});
					ticking = true;
				}
			};

			var handleOver = (e) => {
				var target = e.target.closest(".listener-tip");
				if (!target) return;

				currentTarget = target;
				renderContent(target);
				updatePosition(e.pageX, e.pageY);
			};

			var handleOut = (e) => {
				// 鍙湁绂诲紑鍒伴潪 tooltip/listener-tip 鍖哄煙鎵嶉殣钘?				var related = e.relatedTarget;
				if (!related || !related.closest(".listener-tip, .pl-tooltip")) {
					currentTarget = null;
					if (tooltip) tooltip.style.display = "none";
				}
			};

			// 浜嬩欢鐩戝惉
			document.addEventListener("pointerover", handleOver);
			document.addEventListener("pointermove", handleMove, { passive: true }); // 浣跨敤 passive: true 鎻愬崌婊氬姩鎬ц兘
			document.addEventListener("pointerout", handleOut);
		},

		/**
		 * 鍒涘缓鍔犺浇鐘舵€佸脊绐?		 * @author 娌瑰皬鐚?		 * @description 鐢熸垚鍖呭惈鏃嬭浆鍔ㄧ敾鐨勫姞杞藉鍣?		 */
		createLoading() {
			return $(`<div class="pl-loading"><div class="pl-loading-box"><div><div></div><div></div></div></div></div>`);
		},

		/**
		 * 鍒涘缓鐢ㄤ簬涓嬭浇鐨勯殣钘?iframe
		 * @author 娌瑰皬鐚?		 * @description 璇ユ柟娉曚細鍒涘缓涓€涓殣钘忕殑 iframe 鍏冪礌锛屽苟灏嗗叾鎻掑叆鍒版寚瀹氱殑鎸傝浇鐐逛腑锛岀敤浜庡悗缁殑涓嬭浇鎿嶄綔銆?		 * iframe 鐨?src 璁剧疆涓?"javascript:;" 浠ラ伩鍏嶅姞杞介澶栬祫婧愶紝鎻愬崌鎬ц兘銆?		 */
		createIframe() {
			let iframe = $(`<iframe style="padding:0;margin:0;display:block;display:none" src="javascript:;" id="downloadIframe"></iframe>`);
			temp.mount.append(iframe);
		},

		/**
		 * 鍒涘缓鐢ㄤ簬涓嬭浇椤甸潰鐨?HTML
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @param {Array} configs - 鐢ㄤ簬閰嶇疆鐢熸垚 HTML 鐨勫弬鏁?		 * @returns {String} 鐢熸垚鐨?HTML 鍐呭
		 * @description 璇﹁浠ｇ爜
		 */
		generateDom(configs) {
			if (base.isType(configs) !== "array" && configs.length !== 2) return message.error("鎻愮ず锛?br/>閰嶇疆瑙ｆ瀽澶辫触~");
			let list = (Array.isArray(configs[0]) ? configs[0] : []);
			if (!list.length) return message.error("鎻愮ず锛?br/>鑾峰彇涓嬭浇閾炬帴澶辫触锛屽埛鏂扮綉椤靛悗鍐嶈瘯璇曞惂~");
			let {
				isFolder,
				getFileName,
				getFileSize,
				getFileLink,
				getFileMirror,
				convert = {},
				tooltip = {}
			} = (base.isType(configs[1]) === "object" ? configs[1] : {});
			let content = $(`<div><div class="pl-main"></div><div class="pl-extra"></div></div>`);
			let allLink = [];
			list.forEach((v, i) => {
				i = i + 1;
				if (isFolder(v)) return;
				let filename = getFileName(v);
				let size = getFileSize(v);
				let dlink = getFileLink(v);
				let mirror = base.isType(getFileMirror) !== "undefined" ? getFileMirror(getFileLink(v)) : undefined;
				if (!dlink || !dlink.includes("http")) {
					content.find(".pl-main").append(`<div class="pl-item">
						<div class="pl-item-name listener-tip" data-size="${size}"><div class="name">${filename}</div><div class="size">${base.sizeFormat(size)}</div></div>
						<div class="pl-item-message">${dlink ? dlink : "鑾峰彇涓嬭浇閾炬帴澶辫触锛屽埛鏂扮綉椤靛悗鍐嶈瘯璇曞惂~"}</div>
					</div>`)
				} else {
					// 鎵嬫満涓撶敤鐗堬細缁熶竴灞曠ず澶嶅埗绫绘搷浣?					temp.mode = "mobile";
					let headerObj = {};
					if (convert?.aria2) {
						let m = String(convert.aria2).match(/User-Agent:([^"']+)/i);
						if (m) headerObj["User-Agent"] = m[1].trim();
					}
					let text1dm = base.convertLinkTo1DM(dlink, filename, headerObj);
					let textYtdl = base.convertLinkToYtdlnis(dlink, filename, headerObj);
					allLink.push(text1dm);
					let esc1 = encodeURIComponent(text1dm);
					let escY = encodeURIComponent(textYtdl);
					let escLink = encodeURIComponent(dlink);
					let escName = encodeURIComponent(filename);
					content.find(".pl-main").append(`<div class="pl-item">
						<div class="pl-item-name listener-tip" data-size="${size}"><div class="name">${filename}</div><div class="size">${base.sizeFormat(size)}</div></div>
						<button class="pl-item-copy pl-btn-primary pl-btn-default listener-copy listener-tip" data-copy-encoded="1" data-copy='${esc1}' data-title="澶嶅埗鍚庢墦寮€ 1DM+ 鈫?浠庡壀璐存澘娣诲姞"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>1DM+</button>
						<button class="pl-item-copy pl-btn-primary pl-btn-info listener-copy listener-tip" data-copy-encoded="1" data-copy='${escY}' data-title="澶嶅埗鍚庢墦寮€ ytdlnis 瀵煎叆"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>ytdlnis</button>
						<button class="pl-item-copy pl-btn-primary pl-btn-warning listener-copy listener-tip" data-copy-encoded="1" data-copy='${escLink}' data-title="浠呭鍒剁洿閾?><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鐩撮摼</button>
						<button class="pl-item-copy pl-btn-primary pl-btn-success listener-copy listener-tip" data-copy-encoded="1" data-copy='${escName}' data-title="澶嶅埗鏂囦欢鍚?><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鏂囦欢鍚?/button>
					</div>`);

				}
			});
			allLink = (allLink ? allLink.join("\r\n") : "");
			// 鎵嬫満鐗堝簳閮ㄦ搷浣?			if (list.length >= 2 && allLink) {
				content.find(".pl-extra").append(`<button class="pl-btn-primary pl-btn-default mobile listener-copy listener-tip" data-copy-encoded="1" data-copy='${encodeURIComponent(allLink)}' data-title="澶嶅埗鍏ㄩ儴鏂囦欢鐨?1DM+ 鏍煎紡鏂囨湰"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>澶嶅埗鍏ㄩ儴缁?1DM+</button>`);
			}
			// 鍒嗕韩椤碉細鑷姩闄勫姞銆岄摼鎺?鎻愬彇鐮併€嶆寜閽紝骞跺湪棣栨灞曠ず鏃惰嚜鍔ㄥ鍒朵竴娆?			(function () {
				let info = base.collectShareInfo();
				if (!info) return;
				let shareText = base.buildShareText(info);
				if (!shareText || (!info.pwd && !info.url && !info.fullUrl)) return;
				content.find(".pl-extra").append(`<button class="pl-btn-primary pl-btn-success listener-copy listener-tip" data-copy-encoded="1" data-copy='${encodeURIComponent(shareText)}' data-title="澶嶅埗鍒嗕韩閾炬帴涓庢彁鍙栫爜锛屽彲鐩存帴鍙戠粰浠栦汉"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>澶嶅埗鍒嗕韩閾炬帴+鎻愬彇鐮?/button>`);
				if (!temp._shareAutoCopied && info.pwd) {
					temp._shareAutoCopied = true;
					try { base.setClipboard(shareText); message.success("宸茶嚜鍔ㄥ鍒跺垎浜摼鎺?鎻愬彇鐮?); } catch (e) {}
				}
			})();
			function updateTooltip($element, value) {
				if (!value) return;
				$element.addClass("listener-tip");
				if (value.startsWith("+")) {
					// 杩藉姞妯″紡锛氬幓鎺夊紑澶寸殑 "+"锛岀劧鍚庢嫾鎺ュ埌鐜版湁 data-title
					var newValue = value.substring(1);
					var existingTitle = $element.attr("data-title") || "";
					$element.attr("data-title", existingTitle + newValue);
				} else {
					// 鏇挎崲妯″紡
					$element.attr("data-title", value);
				}
			}
			if (tooltip?.enhance) updateTooltip(content.find(".enhance"), tooltip.enhance);
			if (tooltip?.normal) updateTooltip(content.find(".normal"), tooltip.normal);
			if (tooltip?.copy) updateTooltip(content.find(".copy"), tooltip.copy);
			if (tooltip?.filename) updateTooltip(content.find(".filename"), tooltip.filename);
			let html = content.html();
			content.remove();
			return html;
		},

		/**
		 * 鑾峰彇闀滃儚鍒楄〃
		 * @author 娌瑰皬鐚?		 * @description 鏍规嵁鍘熷閾炬帴鍜岄暅鍍忓煙鍚嶅垪琛ㄧ敓鎴愬涓暅鍍忛摼鎺ワ紝鏀寔澶氱嚎绋嬩笅杞姐€?		 * 姣忎釜闀滃儚鍦板潃浼氭牴鎹?thread 鍙傛暟鐢熸垚澶氫釜閲嶅閾炬帴锛堥€氳繃娣诲姞 `&` 绗﹀彿鍖哄垎锛夈€?		 * @param {String} link - 鍘熷涓嬭浇閾炬帴
		 * @param {Array<String>} mirror - 闀滃儚鍩熷悕鏁扮粍
		 * @param {Number} [thread=2] - 姣忎釜闀滃儚鐢熸垚鐨勭嚎绋嬫暟锛堥摼鎺ラ噸澶嶆鏁帮級锛岄粯璁や负 2
		 * @returns {String} 鎵€鏈夐暅鍍忛摼鎺ョ粍鎴愮殑瀛楃涓诧紝姣忚涓€涓摼鎺?		 *
		 * @example
		 * getMirrorList("https://example.com/file.zip", ["mirror1.com", "mirror2.com"], 2)
		 * // 杩斿洖:
		 * // https://mirror1.com/file.zip
		 * // https://mirror1.com/file.zip&
		 * // https://mirror2.com/file.zip
		 * // https://mirror2.com/file.zip&
		 */
		getMirrorList(link, mirror, thread = 2) {
			try {
				let host = new URL(link).host;
				let mirrors = [];
				for (let i = 0; i < mirror.length; i++) {
					for (let j = 0; j < thread; j++) {
						let item = link.replace(host, mirror[i]) + "&".repeat(j);
						mirrors.push(item);
					}
				}
				return mirrors.join("\n");
			} catch {
				return undefined
			}
		},

		/**
		 * 娣诲姞椤甸潰鍏冪礌鐩戝惉
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 璇﹁浠ｇ爜
		 */
		addPageListener() {
			$doc.on("click", ".listener-open-setting", (e) => {
				base.showSetting(e);
			});
			$doc.on("click", ".listener-open-idm-setting", (e) => {
				base.showIDMSetting(e);
			});
			$doc.on("click", ".listener-open-aria2-setting", (e) => {
				base.showAria2Setting(e);
			});
			$doc.on("click", ".listener-open-bitcomet-setting", (e) => {
				base.showBitcometSetting(e);
			});
			$doc.on("click", ".listener-open-abdm-setting", (e) => {
				base.showABDMSetting(e);
			});
			$doc.on("click", ".listener-open-updatelog", () => {
				base.showUpdate();
			});
			$doc.on("click", ".listener-open-beautify", () => {
				base.showBeautify();
			});
			$doc.on("click", ".listener-unregister", async function (e) {
				message.warning("姝ｅ湪鈥滄敞鍏モ€濊缃」鐩?..");
				let list = base.getValue("setting_init");
				list.code = "";
				list.license = "";
				base.setValue("setting_init", list);
				base.delValue("baidu_access_token");
				location.reload();
			});
			$doc.on("change", ".listener-terminal", async function (e) {
				base.setValue("setting_curl_terminal", e.currentTarget.value);
			});
			$doc.on("click", ".listener-color", async function (e) {
				let element = $(e.currentTarget).closest(".listener-color").length > 0 ? $(e.currentTarget).closest(".listener-color") : $(e.currentTarget);
				let parent = element.closest(".pl-color");
				let mask = element.find(".mask");
				let color = element.data("color");
				if (color && parent.length > 0 && mask.length > 0) {
					parent.find(".this").remove();
					mask.append(`<div class="this"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"></use></svg></div>`);
					let list = base.getValue("setting_ui_theme")
					list.color = color;
					base.setValue("setting_ui_theme", list);
					base.addPanLinkerStyle();
				}
			});
			$doc.on("change", ".listener-theme", async function (e) {
				let list = base.getValue("setting_ui_theme");
				list.custom[e.currentTarget.dataset.type] = e.currentTarget.checked;
				base.setValue("setting_ui_theme", list);
			});
			$doc.on("click", ".listener-api-download.normal", async function (e) {
				e.preventDefault();
				let dataset = e.currentTarget.dataset;
				let link = new URL(dataset.link);
				$("#downloadIframe").attr("src", link.href);
			});
			$doc.on("click", ".pl-item-downing .stop", async function (e) {
				var status = base._EventFactory(e);
				let index = status.item.data("index");
				if (temp.request[index]) {
					temp.request[index].abort();
					status.down_enhance_downing.find(".pl-progress .text").text("姝ｅ湪鍙栨秷...");
					status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
					await base.sleep(1050);
					status.down_enhance_downing.find(".back").click();
				}
			});
			$doc.on("click", ".pl-item-downing .back", async function (e) {
				var status = base._EventFactory(e);
				status.down_enhance_downing.find(".pl-progress .text").text("姝ｅ湪鍔犺浇...");
				status.down_enhance_downing.find(".pl-progress .text").css("white-space", "");
				status.down_enhance_downing.find(".pl-progress .head").css("background", "");
				status.down_enhance.show();
				status.down_enhance_downing.hide();
				status.down_enhance_downing.find(".stop").hide();
				status.down_enhance_downing.find(".back").hide();
				status.down_normal.show();
				status.down_idm.show();
				status.link_copy.show();
				status.link_message.hide();
			});
			$doc.on("click", ".listener-download-all", async function (e) {
				let target = $(e.currentTarget);
				let originalHtml = target.html();
				$(".pl-item-link.enhance").each((index, element) => {
					if ($(element).css("display") !== "none") {
						$(element).click();
					}
				});
				target.text("涓嬭浇寮€濮嬶紝杩涘害瑙佷笂鏂规寜閽摝~").animate({ opacity: "0.5" }, "slow");
				await base.sleep(2000);
				target.css("opacity", "");
				target.html(originalHtml);
			});
			$doc.on("click", ".listener-send-rpc", async function (e) {
				let target = $(e.currentTarget);
				let originalHtml = target.html();
				$(`.listener-${target.data("type")}-download`).each((index, element) => {
					if ($(element).attr("data-processing") !== "true") {
						$(element).click();
					}
				});
				target.text("鍙戦€佸畬鎴愶紝缁撴灉瑙佷笂鏂规寜閽摝~").animate({ opacity: "0.5" }, "slow");
				await base.sleep(2000);
				target.css("opacity", "");
				target.html(originalHtml);
			});
			$doc.on("click", ".listener-copy", async function (e) {
				e.preventDefault();
				let target = $(e.currentTarget);
				let originalHtml = target.html();
				let copy = target.attr("data-copy") || target.data("copy");
				if (copy) {
					if (target.attr("data-copy-encoded") === "1") {
						try { copy = decodeURIComponent(copy); } catch (err) {}
					}
					base.setClipboard(copy)
					target.html(`<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg>澶嶅埗鎴愬姛`).animate({ opacity: "0.5" }, "slow");
					await base.sleep(2000);
					target.css("opacity", "");
					target.html(originalHtml);
				}
			});
			$doc.on("click", ".listener-rpc-task.youxiaohou", function () {
				let rpc = base.getValue("setting_aria2_rpc").find(i => i.default);
				let isHttps = rpc.domain.startsWith("https://");
				let url = `${isHttps ? "https" : "http"}://d.youxiaohou.com/?rpc=${base.encodeBase(JSON.stringify({ domain: rpc.domain, port: rpc.port }))}#${rpc.token}`;
				GM_openInTab(url, { active: true, insert: true, setParent: true });
			});
			$doc.on("click", ".listener-rpc-task.ariang", function () {
				let rpc = base.getValue("setting_aria2_rpc").find(i => i.default);
				let isHttps = rpc.domain.startsWith("https://");
				let url = `${isHttps ? "https" : "http"}://ariang.mayswind.net/latest/#!/settings/rpc/set?protocol=${isHttps ? "wss" : "ws"}&host=${rpc.domain.replace(/^(https?:\/\/)/, "")}&port=${rpc.port}&interface=${rpc.path.replace(/^\//, "")}&secret=${rpc.token}`;
				GM_openInTab(url, { active: true, insert: true, setParent: true });
			});
			$doc.on("change", ".listener-rpc-select", async function (e) {
				let element = $(this);
				let selectedIndex = element.val();
				let type = element.data("type");
				let list = base.getValue(`setting_${type}_rpc`);
				if (selectedIndex === "new") {
					return $(".listener-rpc-input").val("");
				} else if (list[selectedIndex]) {
					list.forEach((item, index) => {
						if (item.default) {
							delete item.default;
						}
					});
					list[selectedIndex].default = true;
					base.setValue(`setting_${type}_rpc`, list);
					$(".listener-rpc-input").each((index, element) => {
						let type = $(element).data("type").split(".")[1];
						$(element).val(list[selectedIndex][type] || "");
					});
				}
			});
			$doc.on("input", ".listener-rpc-input", async function (e) {
				let type = $(this).data("type");
				if (!type) return;
				type = type.split(".")
				let list = base.getValue(`setting_${type[0]}_rpc`);
				let value = $(this).val();
				let selectedIndex = $(".listener-rpc-select option:selected").val();
				if (selectedIndex === "new") {
					list.forEach((item, index) => {
						if (item.default) {
							delete item.default;
						}
					});
					list.push({
						domain: "",
						port: "",
						path: "",
						default: true
					});
					base.setValue(`setting_${type[0]}_rpc`, list);
					selectedIndex = list.length - 1
				}
				list[selectedIndex][type[1]] = value;
				base.setValue(`setting_${type[0]}_rpc`, list)
				let select = $(".listener-rpc-select");
				let options = "";
				if (type[0] === "idm") {
					options = list.map((item, index) => {
						return `<option value="${index}"${item.default ? " selected" : ""}>${item.id ? item.id : "0"}</option>`;
					}).join("")
				} else {
					options = list.map((item, index) => {
						return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
					}).join("")
				};
				select.html(`${options}<option value="new">+ 鍒涘缓鏂伴」鐩?/option>`);
			});
			$doc.on("click", ".listener-rpc-delete", async function (e) {
				let type = $(this).data("type");
				let list = base.getValue(`setting_${type}_rpc`);
				let selectedIndex = parseInt($(".listener-rpc-select option:selected").val(), 10);
				if (selectedIndex === "new" || !confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ら」鐩悧锛?)) return;
				list = list.filter((_, i) => i !== selectedIndex);
				if (list.length === 0) return alert("鑷冲皯淇濈暀涓€涓厤缃?);
				let newDefaultIndex = selectedIndex === 0 ? 0 : selectedIndex - 1;
				list[newDefaultIndex].default = true;
				base.setValue(`setting_${type}_rpc`, list);
				let select = $(".listener-rpc-select");
				let options = list.map((item, index) => {
					return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
				}).join("");
				select.html(`${options}<option value="new">+ 鍒涘缓鏂伴」鐩?/option>`);
				$(".listener-rpc-input").each(function () {
					let key = $(this).data("type").split(".")[1];
					$(this).val(list[newDefaultIndex][key] || "");
				});
			});
			$doc.on("click", ".listener-rpc-test", async function (e) {
				let element = $(this);
				let type = element.data("type");
				let selectedIndex = $(".listener-rpc-select option:selected").val();
				let list = base.getValue(`setting_${type}_rpc`);
				let text = element.find("span");
				let originalHtml = text.html();
				if (selectedIndex === "new" || element.data("testing") === "true") return;
				if (list[selectedIndex]) {
					element.data("testing", "true");
					text.html("绛夊緟");
					element.css({ "opacity": "0.9" });
					let selected = list.find(i => i.default);
					let result = "fail"
					if (type === "aria2") {
						let domain = selected.domain,
							port = selected.port,
							path = selected.path,
							token = selected.token;
						result = await base.testConnectToAria2(domain, port, path, token);
					} else if (type === "abdm") {
						let domain = selected.domain,
							port = selected.port;
						result = await base.testConnectToABDM(domain, port);
					}
					if (result === "success") {
						text.html("鎴愬姛");
						element.css({ "background-color": "#52c41a" });
					} else {
						text.html("澶辫触");
						element.css({ "background-color": "#cb1616" });
					}
					element.css({ "opacity": "" });
					await base.sleep(3000);
					element.data("testing", "false");
					text.html(originalHtml);
					element.css({ "background-color": "" });
				}
			});
			$doc.on("click", ".pl-button-mode", async function (e) {
				// 鎵嬫満涓撶敤鐗堬細鎵€鏈変笅杞藉叆鍙ｇ粺涓€璧?mobile
				let rawMode = e.currentTarget.dataset.mode;
				if (rawMode && ["api","curl","aria2","bitcomet","abdm","mobile"].includes(rawMode)) {
					temp.mode = "mobile";
				} else {
					temp.mode = rawMode;
				}
				console.log(e, temp, base.isType(temp.main?.getLink));
				if (!temp.mode) return;
				if (!base.isType(temp.main?.getLink).includes("function")) return;
				Swal.fire({
					...temp.swalDefault,
					showConfirmButton: false,
					allowOutsideClick: false,
					allowEscapeKey: false,
					allowEnterKey: false,
					title: "鑾峰彇涓?,
					html: `...`,
					footer: "濡傛灉閫夌殑鏂囦欢杈冨锛岃鑰愬績绛夊緟鑾峰彇瀹屾垚鍝︼紒",
					customClass: {
						popup: "loading-popup",
						header: "loading-header",
						title: "loading-title",
						content: "loading-content",
						input: "loading-input",
						footer: "loading-footer"
					},
					willOpen: async () => {
						Swal.showLoading();
						await temp.main.getLink();
					},
				});
			});
		},

		/**
		 * 鍒涘缓鍩虹鏍峰紡
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 涓虹粍浠舵坊鍔犻粯璁ょ殑鍏叡鏍峰紡锛屽寘鎷祬鑹插拰娣辫壊妯″紡閫傞厤鏍峰紡銆?		 */
		addPanLinkerStyle() {
			temp.color = base.getValue("setting_ui_theme").color;
			if ("beautifyPage" in temp.main) temp.main.beautifyPage();
			base.addStyle("swal-pub-style", "style", `@media (prefers-color-scheme:light){${GM_getResourceText("SwalLigt")}}`);
			base.addStyle("swal-pub-dark-style", "style", `@media (prefers-color-scheme:dark){${GM_getResourceText("SwalDark").replace(/#19191a/, "#222226")}}`);
			base.addStyle("swal-pub-custom-style", "style", `
.swal2-container *{vertical-align:baseline}
.swal2-styled{transition:all.2s}
.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:${temp.color} transparent }
.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}
.swal2-timer-progress-bar{width:100%;height:.25em;background:${temp.color}33 }
.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:${temp.color};color:#fff;line-height:2em;text-align:center}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:${temp.color} }
.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:${temp.color}}
.swal2-html-container{padding:1em 1.6em 0.3em;margin:0}
.swal2-close,div:where(.swal2-container) button:where(.swal2-close){position:absolute;border-radius:10px;top:0;right:0;transition:all.2s}
.swal2-close:hover,div:where(.swal2-container) button:where(.swal2-close):hover{color:${temp.color};background-color:${temp.color}30;font-size:60px}
.swal2-styled{display:flex;justify-content:center;align-items:center;gap:5px}
.swal2-styled.swal2-confirm,div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){background-color:${temp.color};color:#fff}
.swal2-styled.swal2-confirm:focus,div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus{box-shadow:0 0 0 3px ${temp.color}80}
.swal2-styled.swal2-deny:focus,.swal2-close:focus,div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus{box-shadow:0 0 0 3px #dc374180}
.swal2-styled.swal2-cancel:focus,div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus{box-shadow:0 0 0 3px #6e788180}
.swal2-styled.swal2-confirm,
.swal2-styled.swal2-deny,
.swal2-styled.swal2-cancel,
div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm),
div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny),
div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel)
{border-radius:50px}
div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{opacity:0.7}
.swal2-backdrop-show,.swal2-noanimation,div:where(.swal2-container).swal2-backdrop-show, div:where(.swal2-container).swal2-noanimation{background:rgba(25,25,26,.75);transition:backdrop-filter.2s;backdrop-filter:blur(1px)}
body.swal2-toast-shown .swal2-container{backdrop-filter:none}
.swal2-popup,div:where(.swal2-container) div:where(.swal2-popup){padding-bottom:1em;border-radius:10px}
.swal2-title,div:where(.swal2-container) h2:where(.swal2-title){height:auto}
.swal2-html-container,div:where(.swal2-container) div:where(.swal2-html-container){padding:1.3em 1.3em 0.3em;margin:0}
.swal2-footer,div:where(.swal2-container) div:where(.swal2-footer){flex-direction:column;justify-content:center;align-items:center}
.swal2-footer p,div:where(.swal2-container) div:where(.swal2-footer) p{margin:0;padding:0}
.swal2-icon-content,div:where(.swal2-icon) .swal2-icon-content{font-family:sans-serif}
.swal2-input, .swal2-file, swal2-select, .swal2-textarea,
div:where(.swal2-container) input:where(.swal2-input),
div:where(.swal2-container) input:where(.swal2-file),
div:where(.swal2-container) input:where(.swal2-select),
div:where(.swal2-container) textarea:where(.swal2-textarea)
{box-shadow:none}
.swal2-input:focus, .swal2-file:focus, .swal2-select:focus, .swal2-textarea:focus,
.swal2-input:focus-visible, .swal2-file:focus-visible, .swal2-select:focus-visible, .swal2-textarea:focus-visible,
div:where(.swal2-container) input:where(.swal2-input):focus,
div:where(.swal2-container) input:where(.swal2-input):focus-visible,
div:where(.swal2-container) input:where(.swal2-file):focus,
div:where(.swal2-container) input:where(.swal2-file):focus-visible,
div:where(.swal2-container) input:where(.swal2-select):focus,
div:where(.swal2-container) input:where(.swal2-select):focus-visible,
div:where(.swal2-container) textarea:where(.swal2-textarea):focus,
div:where(.swal2-container) textarea:where(.swal2-textarea):focus-visible
{outline:0;border:1px solid ${temp.color};box-shadow:0 0 0 3px ${temp.color}80}
.swal2-checkbox, .swal2-file, .swal2-input, .swal2-radio, .swal2-select, .swal2-textarea,
div:where(.swal2-container) input:where(.swal2-input), div:where(.swal2-container) input:where(.swal2-file), div:where(.swal2-container) textarea:where(.swal2-textarea), div:where(.swal2-container) select:where(.swal2-select), div:where(.swal2-container) div:where(.swal2-radio), div:where(.swal2-container) label:where(.swal2-checkbox)
{margin:1em 2em}`);
			base.addStyle(`${mount}-main-style`, "style", `
body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar{width:.6em;height:.6em}
body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar-track{border-radius:10px;background:#fff}
body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar-thumb{border-radius:10px!important}
body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar-thumb{background-color:${temp.color}90!important;transition:background-color.2s;will-change:background-color}
body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar-thumb:hover{background-color:${temp.color}D0!important}
body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar-track{background:#fff!important}
@media (prefers-color-scheme:dark){ body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) ::-webkit-scrollbar-track{background:#606266!important} }
.pl-popup{font-size:12px;min-width:70%;max-width:95%}
.pl-header{padding:0;align-items:flex-start;border-bottom:1px solid #eee;margin:0 0 10px;padding:0 0 5px}
.pl-title{font-size:18px;white-space:nowrap;text-overflow:ellipsis}
.pl-content{padding:0;font-size:12px}
.pl-footer{font-size:15px;text-align:center;display:block}
.pl-icon{width:15px;height:15px;vertical-align:-0.15em;fill:currentColor;overflow:hidden;font-size:18px}
.pl-main{background:${temp.color}15;border-radius:10px;display:flex;flex-direction:column;gap:8px;max-height:calc(${document.documentElement.clientHeight}px - 300px);overflow:auto;padding:8px 6px}
.pl-a{position:relative;vertical-align:baseline;color:${temp.color};border-bottom:2px solid ${temp.color};text-decoration:none!important;transition:color.3s,opacity.3s;will-change:color,opacity;overflow:hidden}
.pl-a::before{content:"";position:absolute;left:0;bottom:0;width:100%;height:100%;background-color:${temp.color};transform:scaleY(0);transform-origin:bottom center;transition:transform.15s,opacity.3s;will-change:transform;z-index:-1}
.pl-a:hover,.pl-a:focus{color:#fff}
.pl-a:hover::before,.pl-a:focus::before{transform:scaleY(1)}
.pl-a:active{color:#fff;opacity:0.8}
.pl-a .pl-icon{vertical-align:-0.06em}
.pl-item{display:flex;align-items:center;background:${temp.color}30;border-radius:8px;padding:5px;gap:10px}
.pl-item-name{width:15%;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:default}
.pl-item-name>*{text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.pl-item-link{flex:1;cursor:pointer}
a.pl-item-link{color:${temp.color};text-align:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transition:color.15s;will-change:color}
a.pl-item-link:hover{color:#fff}
.pl-item-message{display:flex;justify-content:space-between;flex:1}
.pl-item-downing{flex:1;display:flex;align-items:center;gap:10px}
.pl-progress{position:relative; display:flex; flex:1; height:33px; overflow:hidden; border-radius:50px; background-color:#ebebeb}
.pl-progress .progress{display:flex; align-items:center; justify-content:space-around; position:absolute; left:0; top:0; height:100%; width:var(--width,0); transition:width .4s linear; will-change:width}
.pl-progress .progress.head{z-index:2; border-radius:50px; color:#fff; background-color:${temp.color}; overflow:hidden}
.pl-progress .progress.foot{z-index:1; color:#333}
.pl-progress .progress .text{line-height:1; font-size:12px; font-weight:500; white-space:nowrap; padding:0 13px}
.pl-ext{display:inline-block;width:44px;background:#999;color:#fff;height:16px;line-height:16px;font-size:12px;border-radius:3px}
.pl-retry{padding:3px 10px;background:#cc3235;color:#fff;border-radius:3px;cursor:pointer}
.pl-extra{display:flex;justify-content:center;background-color:${temp.color}15;border-radius:10px;gap:10px}
.pl-extra:has(>*){margin-top:1.25em;padding:8px 6px}
.pl-extra>.api.listener-download-all,.pl-extra>.curl.listener-copy,.pl-extra>.aria2.listener-send-rpc,.pl-extra>.bitcomet.listener-copy,.pl-extra>.abdm,.pl-extra>.mobile{flex:1}
.pl-extra:not(:has(>.api.listener-download-all,>.curl.listener-copy,>.aria2.listener-send-rpc,>.bitcomet.listener-copy,>.abdm,>.mobile))>*{flex:1}
.pl-btn-primary{color:#ffffff!important;background:${temp.color};border:0;border-radius:50px;cursor:pointer;font-size:12px;outline:none;word-break:keep-all;display:flex;align-items:center;justify-content:center;gap:5px;padding:0.625em 1.1em;transition:opacity.2s,box-shadow.2s;will-change:opacity,box-shadow}
.pl-btn-primary:hover{opacity:0.8!important}
.pl-btn-primary:focus{box-shadow:0 0 0 3px ${temp.color}80}
.pl-btn-success{background:#55af28}
.pl-btn-success:focus{box-shadow:0 0 0 3px #55af2880}
.pl-btn-info{background:#606266}
.pl-btn-info:focus{box-shadow:0 0 0 3px #60626680}
.pl-btn-warning{background:#da9328}
.pl-btn-warning:focus{box-shadow:0 0 0 3px #da932880}
.pl-btn-danger{background:#cc3235}
.pl-btn-danger:focus{box-shadow:0 0 0 3px #cc323580}
.pl-btn-opacity{animation:easeOpacity 1.2s 2;animation-fill-mode:forwards;will-change:opacity}
@keyframes easeOpacity{ from{opacity:1} 50%{opacity:0.35} to{opacity:1} }
.pl-button-mini{padding:5px 10px}

/* 鎵嬫満涓撶敤鐗堬細闅愯棌妗岄潰绔?RPC / 缁堢閰嶇疆 */
.pl-setting-item.aria2,
.pl-setting-item.bitcomet,
.pl-setting-item.abdm,
.pl-setting-item.curl,
label.pl-setting-item.listener-tip.aria2,
label.pl-setting-item.listener-tip.bitcomet,
label.pl-setting-item.listener-tip.abdm,
div.curl { display: none !important; }

.pl-button,.pl-dropdown-menu{transition:all.2s}
.pl-button{position:relative}
.pl-button .pl-dropdown-menu{opacity:0;pointer-events:none;will-change:opacity}
.pl-button:hover .pl-dropdown-menu{opacity:1;pointer-events:auto}
.pl-button-init{opacity:0.5;animation:easeInitOpacity 1.2s 5;animation-fill-mode:forwards}
@keyframes easeInitOpacity{ from{opacity:0.5} 50%{opacity:1} to{opacity:0.5} }
.pl-dropdown-menu{position:absolute;padding:5px 0;color:${temp.color};background:#fff;z-index:999;min-width:110px;border-radius:5px;box-shadow:0 1px 6px ${temp.color}33;-webkit-box-shadow:0 1px 6px ${temp.color}33;text-align:center;border:none}
@media (prefers-color-scheme:dark){ .pl-dropdown-menu{color:#fff;background:#222226} }
.pl-button-mode{color:${temp.color}!important;height:30px;padding:0 10px!important;display:flex;align-items:center;justify-content:center;gap:5px;cursor:pointer;white-space:nowrap;transition:background-color.2s;will-change:background-color}
@media (prefers-color-scheme:dark){ .pl-dropdown-menu .pl-button-mode{color:#fff!important} }
.pl-button-mode:hover{background-color:${temp.color}33!important}
@media (prefers-color-scheme:dark){ .pl-button-mode:hover{color:#fff!important;background:${temp.color}!important} }
header[style="display:none;"]~.pl-button{display:inline-block;position:fixed;top:0.6em;left:65%;z-index:99999}
.color-button{background:${temp.color}!important;border-color:${temp.color}!important;border:1px solid ${temp.color}!important;display:inline-flex;transition:background.2s,border-color.2s;will-change:background,border-color}
.color-button:hover{background:${temp.color}b0!important;border-color:${temp.color}!important}
.ali-button{background:${temp.color};border:0 solid transparent;font-size:14px;margin-left:20px;padding:8px 16px;position:relative;height:32px;border-radius:100px;display:flex;align-items:center;justify-content:center;color:var(--basic_white);cursor:pointer;transition:background.2s;will-change:background}
.ali-button:hover{background:${temp.color}D0}
.ali-btn-icon{vertical-align:-0.2em}
.mcloud-button{float:left;position:relative;margin:20px 24px 20px 0;width:110px;height:36px;background:${temp.color};border-radius:2px;font-size:14px;color:#fff;line-height:39px;text-align:center;cursor:pointer;will-change:background}
.mcloud-button:hover{background:${temp.color}b0}
.mcloud-share-button{display:inline-block;position:relative;font-size:14px;line-height:36px;height:36px;text-align:center;color:#fff;border:1px solid ${temp.color};border-radius:2px;padding:0 24px;background:${temp.color};will-change:background}
.mcloud-share-button:hover{background:${temp.color}b0}
.mcloud-btn{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGNQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mkUNoAAAACF0Uk5TAAbHPP9AMRtr9PwrV8zqXfmNgDODHTLD4iJxhGJJ8Z269m0aDgAAAMZJREFUeJzd0ssOgyAQBVDUK74rWq0PFP3/ryxqTMdGqJtuvGHD5CTDTGDs3nFc17kEPcC7BH3At/Tjvk5AYbBU+NcrwghL4uQDk3gtRSF1KWCCQEpghkd+3jp/ICNQoDANU0AQCJQmWAJ3h8+q3mFdvSywQdttsGvRWGAPLReoHXrbG6WWAzBoJ+3DaCnWI39NLbcvszvLeuTB2fYoqbNBNo7sGjzk31BhMsEJitxmiKk8zSQwE8gFjBGcNuCzOmdqPrib5A2JRQ7qK9g+hQAAAABJRU5ErkJggg==");height:20px;line-height:20px;display:inline-block;background-repeat:no-repeat;background-size:20px 20px;text-indent:25px}
.tcloud-button{color:#fff;border:1px solid ${temp.color};background:${temp.color};position:relative;height:30px;padding:0 12px;margin-right:12px;font-size:12px;line-height:28px;cursor:pointer;will-change:background,border-color}
.tcloud-button:hover{border-color:${temp.color}b0;background:${temp.color}b0}
.xunlei-button{display:inline-flex;align-items:center;justify-content:center;border:0 solid transparent;border-radius:5px;box-shadow:0 0 0 0 transparent;width:fit-content;white-space:nowrap;flex-shrink:0;font-size:14px;line-height:1.5;outline:0;touch-action:manipulation;transition:background.2s,color.2s,border.2s,box-shadow.2s;color:#fff;background:${temp.color};margin-left:12px;padding:0px 12px;position:relative;cursor:pointer;height:36px;will-change:background}
.xunlei-button:hover{background:${temp.color}b0}
.quark-button,.uc-button{padding:0 14px;background:${temp.color}!important;background-color:${temp.color}!important;will-change:background,background-color}
.uc-btn-icon{width:20px;height:20px;vertical-align:-0.3em}
.uc-button{padding:10px 20px!important}
.pl-setting-item{display:flex;align-items:center;justify-content:space-between;margin-top:1em}
.pl-setting-item > *:nth-child(2){max-width:80%;display:flex;justify-content:space-between;align-items:center}
.pl-setting-item .pl-setting-item{margin:0;gap:5px}
.pl-input{padding:8px 10px!important;border:1px solid #c2c2c2;border-radius:5px;font-size:14px!important;margin:0;appearance:auto!important}
.pl-setting-item > .pl-input:not([type="checkbox"]){width:80%}
.center-input{text-align:center;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;font-weight:300}
.pl-tooltip{position:absolute;z-index:110000;display:none;align-items:center;color:#ffffff;background:#333;font-size:12px;line-height:1.3;max-width:600px;border-radius:5px;word-break:break-all;will-change:display,top,left}
.pl-tooltip>*{padding:5px 10px}
.pl-tooltip>*:first-child{border:1px solid;border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-color:#333;border-bottom-color:#333;border-left-color:#333;border-right-color:transparent}
.pl-tooltip>*:last-child{border:1px solid;border-top-right-radius:5px;border-bottom-right-radius:5px;border-top-color:#333;border-bottom-color:#333;border-left-color:transparent;border-right-color:#333}
.pl-loading-box>div>div{position:absolute;border-radius:50%}
.pl-loading-box>div>div:nth-child(1){top:9px;left:9px;width:82px;height:82px;background:#ffffff}
@keyframes load{ 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
.pl-loading-box>div>div:nth-child(2){top:14px;left:38px;width:25px;height:25px;background:${temp.color};animation:load 1s linear infinite;transform-origin:12px 36px}
.pl-loading{width:16px;height:16px;display:inline-block;overflow:hidden;background:none}
.pl-loading-box{width:100%;height:100%;position:relative;transform:translateZ(0) scale(0.16);backface-visibility:hidden;transform-origin:0 0}
.pl-loading-box div{box-sizing:content-box}
.pl-button-save{background-color:${temp.color}!important;color:#fff!important}
.pl-button-save:hover{background-color:${temp.color}D0!important;color:#fff!important}
.swal2-container{z-index:100000}
body.swal2-height-auto{height:inherit}
[class^="swal2-"],[class*="pl-btn"]{transition:all.2s}
/* 閫傞厤锛堟敼锛夌櫨搴︾綉鐩樹細鍛橀潚鏄ョ増 */
a.downloadSubtitle, button.downloadSubtitle{transition:all.2s;background-color:${temp.color}}
a.downloadSubtitle:hover, button.downloadSubtitle:hover{background-color:${temp.color}D0}
a.downloadSubtitle:disabled, button.downloadSubtitle:disabled{background-color:${temp.color}D0}
/* 鍝噷閮芥病鐢ㄥ埌鐨?RGB! */
@keyframes RGB{ 0%{filter:hue-rotate()} to{filter:hue-rotate(-360deg)} }
/* Webkit, Opera, IE9, Chrome*/
::selection, ::-webkit-selection, ::-moz-selection, ::-ms-selection{background-color:${temp.color}!important;background:${temp.color}!important;color:white!important}
`);
		},

		/**
		 * 鍒濆鍖栧紩瀵煎脊绐?		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鏄剧ず鍒濆鍖栧璇濇锛屽紩瀵肩敤鎴疯繘琛岄厤缃垨璺宠繃娴佺▼銆?		 * 鏀寔杈撳叆鐗瑰畾鏁板瓧瑙﹀彂褰╄泲锛屽苟鑷姩娉ㄥ叆榛樿璁剧疆鐐逛寒鍔熻兘銆?		 * @returns {Promise<void>} 寮圭獥鍏抽棴鍚庤繑鍥炵┖鍊硷紝鍙兘瑙﹀彂椤甸潰鍒锋柊
		 */
		async showInitDialog() {
			var dialog = await Swal.fire({
				...temp.swalDefault,
				title: `(鈼嶁€⑨礂鈥⑩棈)/ 浣犲ソ鍛€`,
				html: `<div class="pl-init-content">
					<p>
						鎴戝氨鐩磋浜嗗惂鈥?br/>浣犲彲浠ユ寜涓嬩笅鏂圭殑 <span style="color:red">绾㈣壊鎸夐挳</span> 璺宠繃杩欎竴鏈夎叮鐨勬祦绋?br/>
						鎴栬€呯户缁緭鍏ヤ竴浜涚绉樼殑 <span class="listener-tip" data-title="涔欑儻涓€鍏嬶紝涓€鍏嬩竴鍏嬩竴鍏嬧€︹€﹂敃锛?br/>銆€銆€銆€銆€銆€銆€鈻冣杻鈻嗏枅鈻団杽鈻?br/>銆€銆€銆€銆€鈻熲棨鈻栥€€銆€銆€銆€鈼モ枅鈻?br/>銆€銆€鈼⑩棨銆€銆€鈻愩€€銆€銆€銆€銆€鈻愨枆<br/>銆€鈻椻棨銆€銆€鈻傘€€銆€鈻椻枛銆€銆€銆€鈻曗枅鈻?br/>銆€鈼ゃ€€鈻椻枀鈻栤棩鈻勩€€鈻€鈼ｃ€€銆€銆€銆€鈻堚枈<br/>鈻愩€€鈻曗枎鈼モ枛鈼ｂ棨銆€銆€銆€銆€銆€鈼⑩枅鈻?br/>鈻堚棧銆€鈼モ枀鈻堚杸銆€銆€銆€銆€銆€鈻愨枅鈻堚棨<br/>鈻愨枅鈻欌杺銆€銆€銆€銆€銆€銆€鈼⑩枅鈻堚棨<br/>銆€鈼モ枅鈻堚棧銆€銆€銆€銆€鈼⑩杽鈼?br/>銆€銆€銆€鈻€鈻堚枅鈻呪枃鈻€" style="font-style:italic;color:#412300;background-color:#d0b164">鈥滄伓鑷暟瀛椻€?/span><br/>瑙ｉ攣闅愯棌锛堝ぇ鍢橈級褰╄泲
					</p>
					<p>
						濡傛灉鎮ㄥ枩娆㈣繖涓剼鏈殑璇?br/>
						璇锋敮鎸佸師鐗堜綔鑰?<a class="listener-tip pl-a" target="_blank" href="https://www.youxiaohou.com" data-title='${config.base.service.account ? `鐨勫井淇″叕浼楀彿鈥︹€?br/><img style="width:250px" src="${config.base.service.account}">` : ""}'><svg class="pl-icon"><use xlink:href="#pl-icon-si-tampermonkey"></use></svg> 娌瑰皬鐚?/a><br/>
						骞剁粰姝ゆ敼鐗堢偣涓?<a class="listener-tip pl-a" target="_blank" href="https://github.com/hmjz100/LinkSwift/" data-title="鏉ョ湅鐪嬫椤圭洰鐨?Github 椤甸潰鍚"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg> Star</a>锛?					</p>
					<p>鑴氭湰涓嶄粎鑳界簿绠€缃戠洏鐣岄潰<br/>鐐逛寒鍚庤繕鑳戒慨鏀瑰涓綉鐩樼殑涓婚鑹插摝锛?/p>
				</div><style>.pl-init-content p{margin:10px 0!important}</style>`,
				input: "text",
				inputAttributes: {
					autocapitalize: "off",
					placeholder: "杈撳叆鍐呭..."
				},
				customClass: {
					input: "center-input"
				},
				showLoaderOnConfirm: true,
				preConfirm: async (code = "") => {
					try {
						if (!code?.trim?.()) return Swal.showValidationMessage("閿欒锛氭彁鍙栫爜涓嶈兘涓虹┖");
						code = code.trim();
						if (["114514", "1919810", "1145141919810"].includes(code)) return "homo";
						return Swal.showValidationMessage(`閿欒锛氶敊璇殑绁炵鏁板瓧`);
					} catch (error) {
						return Swal.showValidationMessage(`閿欒锛?{error}`);
					}
				},
				showCloseButton: true,
				showDenyButton: true,
				denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-unlock-keyhole"></use></svg> 鎳掑緱杈撳叆...鎴戣鐩存帴鐐逛寒锛乣,
				allowOutsideClick: false,
			});
			if (dialog.isDenied) {
				message.warning("姝ｅ湪鈥滄敞鍏モ€濊缃」鐩?..");
				await base.sleep(2500);
				let list = base.getValue("setting_init");
				list.code = config.base.num;
				list.license = config.base.license;
				base.setValue("setting_init", list);
				message.success("鈥滄敞鍏モ€濇垚鍔熷暒!");
				await base.sleep(1500);
				location.reload();
			};
			if (dialog.isConfirmed && dialog.value === "homo") {
				// https://pic1.zhimg.com/v2-1b97a088e156c015108dec663bba8b04.avis
				await Swal.fire({
					...temp.swalDefault,
					icon: "error",
					title: "1145141919810",
					html: "<span>homo鐗规湁鐨勬暟瀛楀綋鐒朵笉琛屽暒<br/>鍝煎摷鍝煎晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩</span>",
					timer: 4000,
					imageUrl: "data:image/png;base64,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",
					allowOutsideClick: false,
					timerProgressBar: true,
					showConfirmButton: false,
					showDenyButton: true,
					denyButtonText: "鍝煎摷鍝煎晩鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍟?,
				});
				message.info("鎴愬氨锛氫綘瑙﹀彂浜嗕竴涓猦omo鐗规湁鐨勫僵铔嬶紒");
				await base.sleep(4000)
				// https://lh1.hetaousercontent.com/img/7d4c1c0b4adb0e95.jpg
				Swal.fire({
					...temp.swalDefault,
					title: "1145141919810",
					text: "homo鐗规湁鐨勬暟瀛楀綋鐒朵笉琛屽暒...鍚楋紵",
					icon: "question",
					imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gJASUNDX1BST0ZJTEUAAQEAAAIwAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAAFRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAOAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAQoBkAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQAGBwj/xAAxEAACAgEEAgEEAgEDBAMBAAAAAQIRAwQSITEFQVEGEyJhMnGBFFKhFSNCkTOxwdH/xAAZAQEBAQEBAQAAAAAAAAAAAAABAgADBAX/xAAdEQEBAQEAAwEBAQAAAAAAAAAAARECEiExQVED/9oADAMBAAIRAxEAPwD6pKV8A8fIFtkHys/r1SjuN9E7kLs43o6apqgVPkA4Rpt2cv5IUnTCTJsplWLVHcC4ug7Bv1z5VNWmZ3kvFYdXhd403Xs048hSVoqVsfIfqP6W248kseBvjikfMtd4zUaaTvG4pfo/UWfTQywcZRTT/R43zf0njyQnKONOyp0HwHHN4+y/gzJrlmx5z6YzabJNrG6v4PObJ4J7Zeiq2NSLT6GXwUcORtF3FjnNXTom1c5Sm2HGI+Gjk1yizHROqp2aV0nCrDHaLGONehy0rguglCvQ6qcDxwXwhssUWqFJtIdHLa6NqpyzNbpaTa9nn8sds2j12eO/n1Rg67Tfk2l/gmus5UdPleOaN3S5PyRgKP5rj2bOndR/ZNM5x6DFO4r+ixF2rKGmfCT9l2D/AAModnWccYCi/wBB0RFUibIXE1XsiyHyQJwdkS6BBf7KlFQ3wInFSbY1ugJOypbUYzdTpnKLSoxNTpGn0z0842Us+C7aLcuuXkc+GrKbjtN/V6fl0uzH1GNplRzsIXyXNDqFiklIpO0duaYuN5fSfC58M8Kt8ntPFxwNKmn/AIPj/itdPFX5f2e58L5tJK5Imtj6ZhhBqoxVFj7UUukZPivILUQVcmwnuRmp6TZD4ZCZ12cbWnKKZMVyccidPin2dRFsgfJzwRxCJLl1hxlYViv6GR/ZNhhkGMcuBK74G/2SrB98kPbJbZJNHXwS0lQymR5nzvgMeqi5bLv0j5f5z6Vx4ZTlGNH27VZoRg1J+jwX1DmxTc4prnorVzh8mh454p2ma2DTtRVIsZ9OlkbRawYvxXAa6zlOLAtquPJYWGKXQWOHosRgxldJypzwquitPBfRqyhwV5wSVsbVzhlyxST9kwhJF1wTfJKxx+GaN4qbhL4ZR1WncndG79mIrJhigtVjyOXSuMui3p8cvg2Mmmg/QMcMYLhAMThVbf0W4tIRHgl5klXsGWVKwrKL1HIUdTdWzNjRi7VkeystQqrcF95P/wAgww9ugW7QH3EyHO+hkOpk2uiFL5BbB30UBTkA5KuAJTS77Bc7KkGjk+BU1aJsl00XiOmdqsVpvaYerxcP8fZ6jJHgxtbjuTFzrzeRNPoTKzR1GGl0UZxq0Mrn1BYcrxvvg09Dr8kZrbL2Yl0WtFJ/fiNjjX2L6T1mTJsj+j6Hh/8AjPmn0fxKHHo+l4f4UTWw5EkIk8q58ccccZkp0CSTQyDEJhcfDOpHGvpOJ4QSYBKNKcMi/Qa75FwfLDcebMrmDXFsranWRwJttE586xY37Z4zzfmEoyV1/kXTxT5j6icFkhFW0eJ1XkMmpyXLr0rK+s1cs2Z1J0Bp1vkZfPK1ixPI7Zehp0ld2RgxosJejO0gI469D1GlRydITkzqKaoF4XqM32XVGZl1qlLtCfJa9pTpq1wedlrsjl2LPWY9RGf/APSzBLg8xpNZJtW+Df0+qhKCTfItVyivmlzV8jfvY67RRyzubMyJT5FuaFzlbAbBtwcstFaWVt8BSViWuRntKfuOyHld9Ai5umxxj1qXFcsmOrr2Z022B+f+5m8WrZjrUvZZjqYyV2efi2/bLOHK+mwG1tLJfsneUcOR/I95OOi5jaZJ2da9sQ52dZgfuXyduvkSmFboqJ6HNpxM/VYrTd0WxeVXHkUMDVY3TRl5o/kz0Gpx9mPnx/kKazZRaYzS5Pt5ot/IWWFciHw1X9ly64WPrv0brMcvtptXXo+q6dJ4U0fnn6X8n9jJjuVU/R958Hr4arRw/JN0RQ0LXySdSZ1UeVbjjjjM44muCDM4lMi17I3L5MBnAb18hRkr5Mxken/Z0sihG2wZzpcMy/Ja1Ysb/LoVz0q+Y8zDDjkk+ej5v5byb1GSS9F3zflJTlKKdnmpSlklz22C4OEZTlSNLS4knYrT4NkLfbLKaj0ysduV7G1FdhfdUfVlN54xjViZaqK6kzOi5k1CS4bKObUXF8uwJZ4v2IyST6GFla+8u79mOsU02ejyYtz4Ff6BPmkOMysEpR4oux1bxU7HvQqPSKGrxyx3XQM0cfkNz7LUc29WjyqzbH2zY0mpTik7NjNFuyAN4UXfLDE2Gxxbl0DLBRZw/wAQpQsqMoPEuhE8X6NGWOhMo2bGZr09slaWTL32v2FGCQtYpLR/KCWl2vhWacI3/QTxxZIxn7HD0dvZbyYqKs4UVPQC8jsOM7Qj2EpCVhPgJMQm/knc17KTad7AnymD9x2DOfApsVs0LjZnZsXN0aslaKepjQufTDzw4ZRmuas1c8bb/szskPzZXLl0ZotQ8GVO6Pqv0n9RqOyEp+j5DzZr+J8hPSZ4tP2axD9P70dusVZO48npWmOSSBWT9IW3yRYE15OegHJti5N2C5SocGmuT+CN7foSnJ3bGqKozYNchpNICERjaRsMheScY422+jx31BrtqklLg3vJ6tYsMuT5v5XWPNlkk+GzOkjN1WWWfI36ZGHDzbOqxl7UaLizu2xS+Cvlz7Y8CMmofVsq5ZuXCbKxco5612Klq2+f/wBFPFOXXJD0uZrhNDIvTI6zkfDVqXoorS5vf/0RU4OmmVja1YZFJliPRj48ziy/iz7kvkW1ZkuDM1WPcn8l5z3Pkr5adkYzz+XA1NlnDaqi9PHGS5Qj7W30KliGSl2WMWTdKmjPRb097rMzX0/MRso8C9P/ABGvo1rYVITNcllxFSVsNbCKfwck7HbUdRpS5Oug7A4s5yEOm2VM/C/yWXJclbNzFDjVVlwCmw5K2Ak7KRTIyCtCuidzMDQW+QXOwZTKTaneVs8rsZJ17EZGvkzl1VHMlVmfmS3M0NR6M/M+SpHOq0lyQpOLTXoN9C32VEfH6r3E7gDjx4dHuR25AHJWbG1MuWRVjFHg5LsxwMYjYoja6CSoDg+kVdXnjixNttP1Q/JNRg2/R5fzfkXCDUZ8CqMfzvlW1OClbZ5Gc3Obb9j9bqJZ8zbb7EJWxzXRMXQvPNRx9juI9+jO12dKPDHxJM8/L5Ojmt8szcuod8MS9U06bKwvT6fLiumbODDgyUqPBQ18ocmhpPqDJDIuOPkW17r/AKbjcKjH/gztV4a+VELxn1BHOlGR6TDlxajHca6MXz3V6B4VaXTEYsm2VM9r5bQxlje1I8dq9PLHl4RsMp8clkSjbbE4k65LC6YVcKceAXC+BxMI8grFZYXfQ/T4Zbr+CzGPqixjx/CoNJmBPaOcbQePE6Qz7PHYWqkVqoBxVlmWOUQHGjNhG1fBDig5KmC1aMMKYEuA2gJliwt8ipvhjJcIVPoyaVJANWHIEU/gTujn2DJ8UKaGU6Ac7VATkV5ZWXI52mykJnOkxUsnPYvJktFudoMj3clTLy7HSnapCMnSHHOlZPQAcl+PPYBNQ/VBxxx5VuDh0AMSoK0iSF2STQRSUScLzZFjhy6FUUfKapYsUluVngPM+QeRuPJsef8AKKMpqL/R4zNleabbfBlwBN0Lc1FUD9xFwpyzdNmBr8sm3TaN2VzXTM/U+OnkVpf8Fl5yU5KXLBcrfZfz+KzKT/HgoTwSxOmVMFqbdEqbXsU5NAbh8Qv4NbkwStSPUeI+o5KUYuT/AGeIcv2Hg1TwT3R7N4HX2rTauGrwq2na7MfyelhcqR5bxH1DOMEpSS/ybr8nHUQtPcyLMVFFYnFhUMlb5BaafRK51kBSCirYLtehmNJshcp8I8ouYoCcUOi5ijQVcWMcaQyv0QuiRWGUU0V5x7LVisiXowqlNcCn1RYkhMo8mFIl/JgSQ2S9i5couJtKnXoRkHTFT54FJD7BDlwwOxRa59WLfKsZLjhi30xiLVTLKrKkpJljNwmUZP8AZ0jlalzS/sVLK7fBE3SEylfspFE5ASdnbl8gNh9crXS9AUF2cGJfqU4448rqOK4CBXYSaJUKNUd7IOXZWMIwvNeQjixuuujT1upjgxS5V0eA895Lfk2uQLYvk9U8ueTu7M3dT4JyTuTYm5N/oZFRE52RGVisjaffsW57ZcFqxrabvn4NbS4seRVJLk8zh1LUjW0urqueSoqRtS8PizwbjFc+zzvl/pxKLccbv9I9P4/yMWqkajhDNHpUzDHxHWePy6eTTTr9ozp2vR9c854iM8dxgn+6PnflPFSwydLj0dOevwXlguRO79kzxSg2mhdHf1XG6djyyi+Gzf8AD66blGEpPs87GLtGz4jH/wByLXyc+5HTnXsYLcrvkJprsjFGsaVhuzzY65S5K0FjjyjtrY7Dje4mrizhjwi3FUBjhTQxkuvPwbyAObfYEnT7FudezK03ciHONPkR9xX7BlNP2IN3J+xcq5oXvSZ33DSppcnVi74GP5FS6LiaXIXIOUk0KlxY4Cp9gXXLDm7oBq0Mcugy5ZDXAW1kTdRsqOes/U9Mzsj5bsu6nJbM6ck+DrIihnLgU3TCk7Fvljjj1RVfNkNBUcDmW+OCLoKfoW6saNfqkJKiF2EeF6I4JIigkr6MoSXJzSSt9HFfW6lYsVexZ5/zus+3jm1I+d67UfdzO3bNv6g8g3LJBP2eUWTdK3y2EVIclbO2h41asZssVyKWTG3dIp5ISTtm59qNdFfUYFL0VKpjfccZD8Wpa5Cnp36QlwceGitXI19Lrdird2bGDy8owUVJM8grXXA6GSfzwY49h/1NZF+Ub/yZHkIYc0JfgqZmRz5E/wCTGfenPhvgLRjA13jalLbVejJnocilW09lLEp9i/8AQRkyuf8ASxF4eWw6KcppbT0vi9Btp7KL2Dx0YyUnRpY8KjVcGvdqpARxNfoL7dj1D5J2E66YVHEWMcEjoxGpJEWmQSaS/YMpeiHKhblTJi46UlEVKV8nSdti5PhiyN3JDnXJHoBy+A0aLdbJb4F2znO+C+YNc5A3wcDJuzpIKiSSQmV8jQZ1SHE0ia4BX8Q51QpvikaOVS5JIq5cn4sbKVLkp5pJRs6Rz6Uc0m22VJeyxlk/8FZvstxtLbZCjzR3sJdjHK0RBDlydus2I1MlaEtWMbdMVzQUbtfqkMFLkI8L1QZMeCCYiYk8753Vxxwl+XpnoZOoP+jwf1Vq9kci9roFPnvmtdLLqJXLi/koabUOU0k/Zn67UPLqZN32Hopf9xNF+PppXp8UltLMaa7M7Tz3F2DSa5IdFiMU42c4qSqgVKhsCuVwiWCNVQjJo03yjR2kpc8opcY0tDT6FPBKN0jflCN9Cp4E/wAkqMYxI45Xyh2PDzyaLwpL0A8a+ApJjhT7HQxL0goxodCLJ046GNIfFUB0Hj7DRgnHgjaxtWclRtXiEuDm64OboVKbvh8AyW6FSfwc22yBIZOhTlYyfIv5DRqBd0E2DI30X25yIOIs6QV27k4i0mdZ0iUeyJfBLBb/ABbZSeqTPorylQ+b4KeedIZHG0nNkcbrko5c0mnaGZ8q/wBxSnktv4Lkc+ukTlYmTadBN7mKFx6qEhnoFLkJ8IY5Wlvs6yX8gfI/PqM34MA62jibTI/VAz4F8oOMtx4seyDOOJQyAGe/syf6Pmv1ZN1kPpOqyKOGV/B8s+q81rJyOK18w1DrNL+xuky07roq6md5n/YeB/kjrnoS+3odPmfDNKE75MTDKsaL+DNSpsix1la0JWqH4yjjy/ssY8vPLCTFxatEroWpJ+w1JNcE2ribVhJWgCVKgtMC0C0HV8kSVBq4GlXQaYAUeWTplMQ2HQpLgZB06FjDm65IfQDlwMh1zk7YpugnJJCnyZOpbBv4OOFtBJrlexa4QUv5Mh9E/QF9gydMGTdgvk0bUt8g+zn0Lt38HSAzo618gXZBXwaO+QcsltpES6FTkXPbn0VkmZ2pm+f+CzlmUs7s6RxtU8snX7K7bfY+YhlOdqN1At3yC+3ZKGRyqbXAT6BD9CjCpMFkvsgjRiKC9EPo7elaNGx+qFyEuAFwwrs8+PUZYP3EiEU9Tn2Rf5Uv0Yq3mNe8WFpVVez5R9Ua1Tk0pW2em895at0dz/8AZ858pq/v5JJf+zHGFkt5XJjsS4QM43yMx8UdLfQaGCVwotYslMzoTceh+PKyC1Y5l8j8edejHjmtljHmTdbjYudNiGWyxDL7RkQytc3wWIZ/2iLFzpqRytvkYpJoz8edN06LMJppBi50sWvR3Ypy2+zlK3wFmOk6MolcMhMkMjGJ8BLhil0E5/BiY5poCUkBZFmGufLIfR24FyFk2DKR24F8hotDdsiV1wEgJNJgNKYL4CbAl8iNS5JIVLoJ8oD1yXE6FMm3RDVHXwXAm2JnJWxknSESfZUFVcv8ipm9FuasU4J9nRxrOmmIkuTQyYl8cFWeOrFzqq+v8kkzVA9IqOdSH6FoJyS9jU6B9gkt2dZCXUDtQRBmfqd8HWc+Tq4OD1+KJ5FCFtnmPLa9YoyuRq+Q1ahjcV67Pm/nPKNyn+XFgzB815Fz1EvfJgZHut/I3UZXlyykIVjIS4oIJpI5JFSDE9IKM6YBNDIo1ZHfPQxZGVeg74NgXIZuVZZjmXwZkGrGKbXROGNfHmVlqGokq5MTFmrt8luGfgMXrYhn/wB3IyOaL/Rkwzc8D45vgmzVy41IzGb0UIZX7HxyNr9EY6TpZUuOGSmhCZKlQHTrQLdPgWpNHNtmb0PdxyAwdy9s7cvkMOpv9HcsjcvZDml0XOYK5ycXQDtnObb5oi18msiahgT6RMpO+AG7NJ7Go9AhHdiLAsB9hkNCmAkrQiSZY/QDhZUaqsoNnLHz0WtjGKBc6TeVF6e48JFXPp3GNm19qxGowXBui5XO8vM5sbTYh9dGpqMdN2uChOBWuXXJDlS6Bc79BTXAFUGueOs6yYxtHNJPvkwxFncXdnPogBj9T7kVdTn+3G//ANGZJqEW36R5jyvkUt35s4PoYo+a8ltUkpd/s+eeQ1TyZXFP+zT8prt+WlK+DByR3Nv2aRzsU3/JkUP+1zyc4NIrxGK0o2D1wPkhTjydOcFD0TuJ2IiqKDt1hWDZ12FmnRxY2hKfAxcojD5GLgfCdFeLSDUuQp1aUvZZxzXyUFNDceRL2RVc1pxyfsdHNtSVozFlGrJYYvWjHLz2MU1XZnQyUMWRv2zYrV1ZEn2E58cFLc77CU77JsbVrf8ApHOf6RW3r5IeT4YYbf4fKdMFzfpiHkfyR9x/J0xtOts6xW9nbmTgMs58itxG6vZtYzo7ehW4lMdbdHuRK5ACj0ODEuNs5RDoJIIcCocEqC+AtpMVT5KlGJUbOeNNExlTO3ey5RZ6Zur0l3UeDJz6Nrmj0s+SjnhubZUcrHmMuPivgr9cG1qtOqtL2ZWaCg2bXLqFWBK7CtAurGOdiFYyEXKSSVkwxSyPg2tF4tva6s2pfY9d5eP2pfkrr5PCeW8hPJKSjL+wM+unO+eDOyNzts876Ninke+TB+3b4G/a3S5tf0OWBJcMqI8FN4nfyRLC0i+saXwRLGnRWt4sieNxVsRKPNmxmxJxaozs+PYMGKtg7uQpPkXJvqjonqIc+QlIWTZOJw3cHF0VkxkZ/LCth6lyHvRXU+SbYUrMZWG5JdMqxlXAYKi1HIx0MropKQ2Mmhz0pdjMYshSjkGKVMgyrm/9k72/ZW32dvMVred9z9FdNsm2ZtP+4vigXJsVb+QoyvsW0duwrfyASnSJrCv9g7iHyzic9kW47c0gG6OsWNjL2Pi7K0XwWMfETRR0eWhnApXREsm2P7YtDpUlYp5oorTzOuF+hSk+LZlfi6syfSOUm2IxlnFC1bKiXPory5TLUl8FXJSsvUXln6mP4mLqVTNrUO4mPqU5cINcuoz+d1UWMOCeWSSQ3T6WWXIqXs9HofGVzSSob05WK2g8XdcW1+j1Gj8ftguCx4/x6UVwbWHTRaXyuCU2PCO26YO0c1bsjavZzfQwqMKfQ3bwHGNuhqxo0pKUKXRDx7ixsOlFUU2KOTHUSjqMO+LNWa4/RWyY003Qyp8WHLFXoVLFxdGrkwfBXngr0zpOk+LLcHYLTXo0vsW+mRLSXy1wGi8s6iekXnpYpdC5aZejanxVUuRqaQT08kyPtSRtbxdfwHCXoD7U/YaxtewGDUvgLcLpoJIzGKTT/Q2E7QjkON+gbKenyMfdiI3fI5O0DZRWzk3fLIOqwMNshWcojEkZSY20FT+A4RrkKjGQrbwR0PoFrgDCGwd3IU1TEyTu0CpFiErLmCKknZn45UzQwSVcCVjZ+PHRXnibRejzFHbV8ElmSwPaCsDNR44v0LcK6Myviw0l8j0qOUWGmkuS+QW/ZVyLllmT5YifPBvorOywbVUVo6L7kuUzUeLc+C3pdG5yUuxjj0RovFqL4PQ6Tx8Y+vQ/SaKlFbUjXw6TbX/BnLCdNptkFwX8OJfA7HgpLkfDGohqXyzk4ZMX6I17tHFVyNhy+QF0g49hKrDUBLo6XZD6Ll0kTVp8CmvlD2Kn/IQW430DLC76Q1fyQxhoxTeCV+gXib4L0UqBaV9G0VRWna9Hf6a//Et+ySo3ip/6Vf7CP9Gn/wCBdJibBeVJ6JV/ED/SL/ajRl/ECPQosZ09KqfFCHga9Wa7SpiJJfBtGM9YHfIX2a6LOT0dH+LJJChyM28UcuxgtIHYSoEhRMcjkhkYUR7GxBolJ/AUYt/oOIQHC/tv5OlFUMIl6NWirOAmaLWTtlfJ2gVCkXMEqXZUH4fRi1sck4pDErK+Hr/A+HsS4j9kzBfRoAuasVKcV2zp9MqyH4xsskWTFKTKj/kXtN/OIRPRuPS7pLhmvodNGPSFYEvuR4NrSpbZcIXCm6fBJNN9GjCPsXj/AIx/osIEGRjSTCOX8UcuzJr/2Q==",
					showConfirmButton: false,
					allowOutsideClick: false,
				});
				await base.sleep(3000)
				let list = base.getValue("setting_init");
				list.code = config.base.num;
				list.license = config.base.license;
				base.setValue("setting_init", list);
				message.success("鎴愬氨锛氬摷鍝煎摷鍟婂晩鍟婂晩鍟婂晩鍟婂晩鍦版敞鍏ユ垚鍔?鍠?");
				await base.sleep(1500)
				location.reload();
			}
		},

		/**
		 * 鏄剧ず涓诲璇濇
		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 浣跨敤 SweetAlert2 鏄剧ず涓€涓嚜瀹氫箟鏍峰紡鐨勫璇濇锛岀敤浜庡睍绀轰俊鎭垨鎿嶄綔鎻愮ず銆?		 * @param {String} title - 瀵硅瘽妗嗘爣棰?		 * @param {String} html - 瀵硅瘽妗嗗唴瀹圭殑 HTML 瀛楃涓?		 * @param {String} footer - 瀵硅瘽妗嗗簳閮ㄨ鏄庢枃瀛?		 */
		showMainDialog(title, html, footer) {
			Swal.fire({
				...temp.swalDefault,
				title,
				html,
				footer: `${footer}<p>${config.base.dom.footer}</p>`,
				customClass: {
					popup: "pl-popup",
					header: "pl-header",
					title: "pl-title",
					closeButton: "pl-close",
					content: "pl-content",
					input: "pl-input",
					footer: "pl-footer"
				},
				confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 鍏抽棴`,
				showCloseButton: true,
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				willClose: () => {
					base._resetAllData();
				},
			});
		},

		/**
		 * 绛夊緟鎸囧畾鍏冪礌鍔犺浇瀹屾垚骞舵墽琛屽洖璋?		 * @author hmjz100
		 * @description 鐩戝惉 DOM 鍏冪礌鏄惁鍑虹幇锛岃嫢鏈嚭鐜板垯姣忛殧涓€娈垫椂闂撮噸璇曪紝鐩村埌鎵惧埌涓烘銆?		 * 鏀寔鍦?iframe 鍐呴儴鏌ユ壘鍏冪礌锛岄€傜敤浜庡紓姝ュ姞杞藉満鏅€?		 * @param {String} selectorElem - 瑕佺瓑寰呯殑鐩爣鍏冪礌閫夋嫨鍣?		 * @param {Function} actionFunction - 鎵惧埌鍏冪礌鍚庢墽琛岀殑鍥炶皟鍑芥暟锛屾帴鏀?jQuery 鍏冪礌浣滀负鍙傛暟锛岃繑鍥?true 鍙互涓嶅啀缁х画瀵绘壘
		 * @param {Boolean} [bWaitOnce=false] - 鏄惁鍙墽琛屼竴娆″洖璋冿紝榛樿涓?false锛屽鏋滀笉璁剧疆涓?true 鐨勮瘽闇€瑕佽嚜琛屽垽鏂槸鍚﹀鍏冪礌杩涜鎿嶄綔
		 * @param {String} [iframeSelector] - 鑻ョ洰鏍囧厓绱犱綅浜?iframe 涓紝浼犲叆 iframe 鐨勯€夋嫨鍣?		 * @param {String} [controlKey] - 鎺у埗鍞竴鎬х殑閿悕锛岀敤浜庨伩鍏嶉噸澶嶅鐞?		 */
		waitForKeyElements(selectorElem, actionFunction, bWaitOnce, iframeSelector, controlKey) {
			// 鍒濆鍖栫鐞嗗櫒
			var manager = this.waitForKeyElements.manager || (
				this.waitForKeyElements.manager = {
					observers: new WeakMap(),
					tasks: new Map(),
					instanceCounter: 0
				}
			);
			var targetDoc = iframeSelector
				? $(iframeSelector).get(0)?.contentDocument
				: document;
			if (!targetDoc) return; // 鏃犳晥鏂囨。鐩存帴杩斿洖
			// 鐢熸垚鍞竴鎺у埗閿?			controlKey = controlKey || `wkfe_${manager.instanceCounter++}`;
			// 娓呯悊閲嶅浠诲姟
			var existingTask = manager.tasks.get(controlKey);
			if (existingTask) {
				existingTask.observer.disconnect();
				manager.tasks.delete(controlKey);
			}
			// 鍒涘缓MutationObserver鍥炶皟
			var processElements = () => {
				var elements = $(selectorElem, targetDoc);
				let foundActive = false;
				elements.each((i, el) => {
					var jEl = $(el);
					var isProcessed = jEl.data(controlKey);
					if (isProcessed) return true; // 璺宠繃宸插鐞嗗厓绱?					var cancelAction = actionFunction(jEl);
					if (cancelAction) {
						foundActive = true;
					} else if (bWaitOnce) {
						jEl.data(controlKey, true); // 鏍囪宸插鐞?					}
				});
				// 涓€娆℃€т换鍔′笖鎵惧埌鏈夋晥鍏冪礌鏃舵竻鐞?				if (bWaitOnce && foundActive) {
					observer.disconnect();
					manager.tasks.delete(controlKey);
				}
			};
			// 鍒涘缓Observer瀹炰緥
			var observer = new MutationObserver(processElements);
			// 閰嶇疆骞跺惎鍔ㄨ瀵?			observer.observe(targetDoc.documentElement, {
				childList: true,
				subtree: true,
				attributes: true,
				characterData: true
			});
			// 娉ㄥ唽浠诲姟
			manager.tasks.set(controlKey, {
				observer,
				targetDoc
			});
			// 绔嬪嵆鎵ц鍒濆妫€鏌?			processElements();
		},

		/**
		 * 鐘舵€佸伐鍘?		 * @author 娌瑰皬鐚?		 * @author hmjz100
		 * @description 鎺ュ彈琚洃鍚殑 DOM 鍏冪礌鐨勭姸鎬侊紝鏍规嵁鐘舵€佺‘瀹氬厓绱犳槸璋?		 * @param {Event} event - 鍏冪礌鐘舵€?		 */
		_EventFactory(event) {
			let target = $(event.target);
			let item = target.parents(".pl-item");
			return {
				target, item,
				down_normal: item.find(".pl-item-link.normal"),
				down_enhance: item.find(".pl-item-link.enhance"),
				down_enhance_downing: item.find(".pl-item-downing"),
				down_idm: item.find(".listener-idm-download"),
				link_message: item.find(".pl-item-message"),
				link_copy: item.find(".pl-item-copy"),
			};
		}
	};

	/**
	 * 鐧惧害缃戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $baidu = {
		async getToken() {
			try {
				$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鎺堟潈鐘舵€亊</div>`);
				// 鑾峰彇鎺堟潈鐘舵€?				let authorize = await base.getFinal(config.$baidu.api.getAccessToken, { Origin: "", Referer: "" }, true);
				let accessToken = "";
				// 鍒ゆ柇鎺堟潈鎯呭喌
				if (authorize.includes("authorize")) {
					$doc.find(".loading-popup .loading-title").html(`鎺堟潈鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鎺堟潈椤甸潰~</div>`);
					// 娌℃巿鏉冿紝鍏堣幏鍙栨巿鏉冪殑椤甸潰
					let html = await base.get(config.$baidu.api.getAccessToken, { Origin: "", Referer: "" }, "text");
					// 鎻愬彇椤甸潰鐨勫彂閫佺‘璁ゆ巿鏉冪殑鍙傛暟
					let bdstoken = html.match(/name="bdstoken"\s+value="([^"]+)"/)?.[1];
					let client_id = html.match(/name="client_id"\s+value="([^"]+)"/)?.[1];
					let data = {
						grant_permissions_arr: "netdisk",
						bdstoken: bdstoken,
						client_id: client_id,
						response_type: "token",
						display: "page",
						grant_permissions: "basic,netdisk"
					};
					$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑷姩纭鎺堟潈~</div>`);
					// 鍙戦€佽姹傝揪鍒拌嚜鍔ㄨ繘琛屾巿鏉?					await base.post(config.$baidu.api.getAccessToken, base.stringify(data), { Origin: "", Referer: "", "Content-Type": "application/x-www-form-urlencoded" });
					// 鍐嶆鑾峰彇鎺堟潈鐘舵€?					let res2 = await base.getFinal(config.$baidu.api.getAccessToken, { Origin: "", Referer: "" }, true);
					accessToken = res2.match(/access_token=([^&]+)/)?.[1];
				} else if (authorize.includes("access_token=")) {
					accessToken = authorize.match(/access_token=([^&]+)/)?.[1];
				}
				// 缁熶竴澶勭悊浠ょ墝缁撴灉
				$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
				if (!!accessToken) {
					$doc.find(".loading-popup .swal2-html-container").html(`<div>鎺堟潈鎴愬姛锛屼护鐗屽凡缂撳瓨~</div>`);
					base.setValue("baidu_access_token", accessToken);
					return accessToken;
				} else return "";
			} catch (error) {
				return "";
			}
		},
		async getShareData() {
			// 鍓嶇疆
			let url = new URL(location.href);
			let locals = unsafeWindow?.locals?.dump?.();

			// 鍙傛暟浠?			let surl = url.pathname.split('/').pop().replace(/^1(.{22})$/, '$1');
			let pwd = localStorage.getItem(`${surl}_pwd`) || url.searchParams.get('pwd');
			let baidu_id = document?.cookie?.split?.('BAIDUID=')?.[1]?.split?.(';')?.[0];
			let share_uk = locals?.share_uk?.value;
			let share_id = locals?.shareid?.value;
			let bds_token = locals?.bdstoken?.value;
			let js_token = unsafeWindow?.jsToken;
			let se_key = unsafeWindow?.currentSekey || unsafeWindow?.cache?.list?.config?.params?.sekey;

			return {
				share: {
					id: share_id,
					url: surl,
					pwd: pwd,
					uk: share_uk,
				},
				baidu: {
					id: baidu_id,
					token: bds_token
				},
				jsToken: js_token,
				sekey: se_key
			}
		},
		addPageListener() {
			$doc.on("mouseenter mouseleave click", ".pl-button.g-dropdown-button", function (e) {
				if (e.type === "mouseleave") {
					$(e.currentTarget).removeClass("button-open");
				} else {
					$(e.currentTarget).addClass("button-open");
					$(e.currentTarget).find(".pl-dropdown-menu").show();
				}
			});
			$doc.on("mouseleave", ".pl-button.g-dropdown-button .pl-dropdown-menu", function (e) {
				$(e.currentTarget).hide();
			});
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("鎻愮ず锛?br/>璇峰嬀閫夎淇濆瓨鍒扮綉鐩樼殑鏂囦欢鍝");
				}
				message.info("鎻愮ず锛?br/>鍥犵綉鐩橀檺鍒讹紝璇蜂繚瀛樺埌鑷繁缃戠洏鍚庡啀鍘讳笅杞藉摝~");
				await base.sleep(500);
				document.querySelector(".tools-share-save-hb").click();
			});
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, { "User-Agent": config.$baidu.api.ua.downloadLink, "Origin": "", "Referer": "" }, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"), { "User-Agent": config.$baidu.api.ua.downloadLink });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"), [`User-Agent:${config.$baidu.api.ua.downloadLink}`]);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"), { "user_agent": config.$baidu.api.ua.downloadLink });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), { "User-Agent": config.$baidu.api.ua.downloadLink });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			temp.page = temp.main.detectPage();
			base.waitForKeyElements(".wp-s-header-user__vip-center", function (tag) {
				tag.remove();
			}, true);
			base.waitForKeyElements(".wp-s-header-user__create-team-content", function (tag) {
				tag.remove();
			}, true);
			base.waitForKeyElements(".app-user-vip-center-box.vip-center-type-2", function (tag) {
				tag.remove();
			}, true);
			base.waitForKeyElements(".wp-s-header__vip-btn-tip", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".app-user-vip-center-tip", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements("#web-header-text-s-45", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-s-header__vip-btn", function (tag) {
				tag.text("浼氬憳涓績")
			}, true);
			base.waitForKeyElements(".KQcHyA", function (tag) {
				tag.text("浼氬憳涓績")
			}, true);
			base.waitForKeyElements(".gOIbzPb", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-s-header-user__create-team-title", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".web-header-ad-item", function (tag) {
				tag.fadeOut();
			});
			base.waitForKeyElements(".wp-s-header__game-entry", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".bd-aside-ad", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".btn-img-tips", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".nd-operate-guidance", function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".module-operation-content", function (tag) {
				tag.fadeOut();
				document.querySelector(".operate-guide-close").click();
				document.querySelector(".module-canvas").click();
			}, true)
			base.waitForKeyElements(`[class*="module-"][class*="-box"]:not(.module-box), [class*="module-"][class*="-mask"]`, function (tag) {
				tag.fadeOut();
				tag.find(".close-mask").click();
			}, true)
			base.waitForKeyElements(".newIcon", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".u-badge__content.is-dot", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-side-options.g-clearfix", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".wp-s-header-user__drop-channel", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".app-download", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`.g-button[title*="鎵嬫満"]`, function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".yike-entrance", function (tag) {
				tag.remove();
			}, true)
			base.waitForKeyElements("div.dialog-gray:has(.dialog-close):has(.tip-body):has(~ .module-canvas)", function (tag) {
				tag.find(".dialog-close").click();
				$(".module-canvas").click();
			}, true)

			// back pc motivate 鍥炵婵€鍔?			base.waitForKeyElements(".wp-s-header ~ div:not([class]):has(.nd-custom-btn)", function (tag) {
				if (!tag.text().includes("瀹㈡埛绔?)) return;
				tag.remove();
			}, true)
			base.waitForKeyElements(".pc-client-fullscreen-modal", function (tag) {
				tag.hide();
				tag.find(".pc-client-modal-close").click();
			}, true)
			base.waitForKeyElements(".nd-bottom-right-popover:has(.nd-custom-popover-close)", function (tag) {
				tag.hide();
				tag.find(".nd-custom-popover-close").click();
			}, true)
			base.waitForKeyElements(".wp-s-aside-nav__sub-bottom > a.wp-aside-nav__pc-client-button", function (tag) {
				tag.remove();
			}, true)

			base.waitForKeyElements("a.tools__item", function (tag) {
				if (tag.attr("linked")) return;
				if (tag.attr("href")) {
					try {
						let url = new URL(tag.closest("a").attr("href"));
						url.search = "";
						url.hash = url.hash.replace(/\?(.*?)(#|$)/, "$2")
						tag.attr("href", url.href)
					} catch (e) { }
				}
				tag.attr("linked", true)
			}, true);
			base.waitForKeyElements("p.wp-s-aside-nav__main-item-text", function (tag) {
				if (tag.attr("linked")) return;
				if (tag.closest("a").attr("href")) {
					try {
						let url = new URL(tag.closest("a").attr("href"));
						url.search = "";
						url.hash = url.hash.replace(/\?(.*?)(#|$)/, "$2")
						tag.closest("a").attr("href", url.href)
					} catch (e) { }
				}
				if (tag.is(`:contains("鎻掍欢"), :contains("鐩稿唽"), :contains("绗旇")`) && tag.closest("a").attr("target") !== "_blank") {
					tag.closest("a").fadeOut();
				} else {
					tag.text(tag.text().replace("鐧惧害", ""));
				}
				tag.attr("linked", true)
			}, true);
			base.waitForKeyElements(`dd[node-type="header-link"]`, function (tag) {
				tag.children().each((index, element) => {
					let tag = $(element);
					if (!tag.attr("node-type")) return;
					let type = tag.attr("node-type");
					if (
						type !== "disk-home" &&
						type !== "mbox-homepage" &&
						type !== "find-apps"
					) {
						tag.fadeOut();
					}
				});
			}, true);
			base.waitForKeyElements(".__yunguanjia", function (tag) {
				tag.html(`<div class="yunguanjia-list __yunguanjia row g-clearfix _item sel">
					<span type="radio" class="radio-box _radioInput __yunguanjiaRadio">
						<span class="device-name">娣诲姞鎴戠殑鐢佃剳</span>
					</span>
					<div class="__yunguanjiaTips radio-tips" style="display:block;">
						鐢ㄧ數鑴戜笅杞藉苟鐧诲綍鏈€鏂扮櫨搴︾綉鐩樺鎴风锛屽嵆鑷姩瀹屾垚娣诲姞銆?						<a href="//pan.baidu.com/download" target="_blank">涓嬭浇鐧惧害缃戠洏瀹㈡埛绔?/a>
						<br/>鐢?<a href="https://github.com/hmjz100/LinkSwift/" target="_blank">LinkSwift</a> 淇璇ラ€夐」
					</div>
				</div>`);
			}, true)
			// 缇庡寲鍒嗕韩椤甸潰
			if (temp.page === "share") {
				base.waitForKeyElements(`iframe[src^="/buy/ad"]`, function (tag) {
					tag.fadeOut();
				}, true)
				base.addStyle(`${mount}-baiduShare`, "style", `
					body, .theme-white.init-new, #layoutApp{
						background-color:#DCEFFE!important;
						background:#DCEFFE url(https://nd-static.bdstatic.com/m-static/disk-share/widget/pageModule/init-new/image/init-bg_1708266.png) no-repeat center center;
					}
					#bd-main .bd-left{
						background:#ffffffC0;
						border-radius:10px;
					}
					iframe[src="/buy/ad/home"]{
						display:none!important;
					}
				`, `.${mount}`);
				base.waitForKeyElements(`.KPDwCE`, function (tag) {
					tag.css("background", "transparent");
				}, true);
				base.waitForKeyElements(".share-list .KPDwCE .AuPKyz", function (tag) {
					tag.css("background", "transparent");
				}, true);
				base.waitForKeyElements(`#layoutMain`, function (tag) {
					tag.css({ "border-radius": "24px" });
				}, true)
				base.waitForKeyElements(".frame-content", function (tag) {
					tag.css({ "margin": "auto" });
				}, true)
			}
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$baidu !== true) return;
			if (temp.main.detectPage() !== "home") {
				base.adaptiveThemeOverride([
					["#717fff", temp.color],
					["#717FFF", temp.color],
					["#06a8ff", temp.color],
					["#06A8FF", temp.color],
					["#06a7ff", temp.color],
					["#06A7FF", temp.color],
					["#dcdfe6", temp.color],
					["#DCDFE6", temp.color],
					["#0095ff", temp.color],
					["#0095FF", temp.color],
					["#09aaff", temp.color],
					["#09AAFF", temp.color],
					["#0ca6ff", temp.color],
					["#0CA6FF", temp.color],
					["#5040ff", temp.color],
					["#5040FF", temp.color],
					["#454d5a", temp.color],
					["#454D5A", temp.color],
					["#a2abbd", temp.color],
					["#A2ABBD", temp.color],
					["#030b1a", temp.color],
					["#030B1A", temp.color],
					["#afb3bf", temp.color],
					["#AFB3BF", temp.color],
					["#ff436a", temp.color],
					["#FF436A", temp.color],
					["#03081a", temp.color],
					["#03081A", temp.color],
					["#2974b6", temp.color],
					["#2974B6", temp.color],
					["#0596e6", temp.color],
					["#0596E6", temp.color],
					["#C3EAFF", temp.color],
					["#c0d9fe", `${temp.color}50`],
					["#0098EA", `${temp.color}D0`],
					["#38b9ff", `${temp.color}D0`],
					["#38B9FF", `${temp.color}D0`],
					["#42d8ff", `${temp.color}D0`],
					["#42D8FF", `${temp.color}D0`],
					["#a48dff", `${temp.color}D0`],
					["#A48DFF", `${temp.color}D0`],
					["#6b79f2", `${temp.color}D0`],
					["#6B79F2", `${temp.color}D0`],
					["#9c86f2", `${temp.color}90`],
					["#9C86F2", `${temp.color}90`],
					["#83d3ff", `${temp.color}90`],
					["#83D3FF", `${temp.color}90`],
					["#C4D8F4", `${temp.color}90`],
					["#fafafc", `${temp.color}20`],
					["#FAFAFC", `${temp.color}20`],
					["#f5fbff", `${temp.color}20`],
					["#F5FBFF", `${temp.color}20`],
					["#b4e5ff", `${temp.color}20`],
					["#B4E5FF", `${temp.color}20`],
					["#f0faff", `${temp.color}20`],
					["#F0FAFF", `${temp.color}20`],
					["#c4d8f4", `${temp.color}20`],
					["#f1f3f8", `${temp.color}15`],
					["#F1F3F8", `${temp.color}15`],
					["#f2faff", `${temp.color}10`],
					["#F2FAFF", `${temp.color}10`],
					["#eef9fe", `${temp.color}10`],
					["#EEF9FE", `${temp.color}10`],
					["#f7f9fc", `${temp.color}10`],
					["#F7F9FC", `${temp.color}10`],
					["#f5f6fa", `${temp.color}10`],
					["#F5F6FA", `${temp.color}10`],
					["#b4e5ff", `${temp.color}10`],
					["#B4E5FF", `${temp.color}10`],
					["#e6f6ff", `${temp.color}10`],
					["#E6F6FF", `${temp.color}10`],
					["0,149,255", base.hexToRgba(temp.color)],
					["30, 175, 255", base.hexToRgba(temp.color)],
					["6, 167, 255, 0.1", base.hexToRgba(`${temp.color}1a`)],
					["6,167,255,.1", base.hexToRgba(`${temp.color}1a`)],
					["6,167,255,.23", base.hexToRgba(`${temp.color}3b`)],
					["164,141,255,.2", base.hexToRgba(`${temp.color}30`)],
					["196,182,255,.2", base.hexToRgba(`${temp.color}20`)],
					["113,127,255,.2", base.hexToRgba(`${temp.color}40`)],
					["3,8,26,.6", base.hexToRgba(`${temp.color}D0`)],
					["255,32,102,.4", base.hexToRgba(`${temp.color}66`)],
					["72,166,248,.7", base.hexToRgba(`${temp.color}66`)],
				]);
			};
			base.addStyle(`${mount}-baidu`, "style", `
				#layoutMain,.DxdbeCb{border-radius:10px;border-bottom-left-radius:0;border-bottom-right-radius:0;background:#ffffffA0!important}
				.KPDwCE,
				.DxdbeCb .OFaPaO .tanwePYr,
				.xGLMIab .fufHyA:hover,
				.module-search-timeline .form-box
				{background:#ffffffA0!important}
				.KPDwCE .JDeHdxb,
				.NHcGw .AuPKyz,
				.xGLMIab .tvPMvPb,
				.xGLMIab .FcQMwt,
				.cazEfA .yfHIsP,
				.hscjZ4QL .bbxnZ0Bq .ehnyLxWZ span,
				.module-topToolBar,
				.module-timeline-view .timeline-title-curday
				{background:transparent!important;border-bottom:0}
				.MdLxwM{background :#fff!important}
				.aside-absolute-container{position:absolute!important}
				.aside-absolute-container .QGOvsxb .remainingSpaceUi_span{background:#8af248!important;border-radius:10px 0 0 10px;border-right:#fff 1px solid;border-bottom:#fff 1px solid}
				.xtJbHcb .CDaavKb .KQcHyA{background:rgb(244,207,0)!important;padding:8px 15px}
				.xtJbHcb .web-header-nav-new-version-inner{background:${temp.color}!important;padding:8px 15px;line-height:15px;width:auto;height:auto}
				a{transition:all.2s!important}
				#bd-main .bd-left{margin:auto!important}
				.verify-input input{padding-left:0!important;text-align:center!important}
				.verify-input input:focus{border:2px solid ${temp.color}!important}
				[data-theme=light] .vp-video-page-card .vp-video-page-card__video-detail{color:#030b1a}
				dt.level-1{background:#fd6d65!important}
				dt.level-2{background:#f3a723!important}
				dt.level-1 i.desc-arrow{border-bottom:10px solid #dd6966!important}
				dt.level-2 i.desc-arrow{border-bottom:10px solid #d29633!important}
				`, `.${mount}`);
			base.adaptiveThemeOverride([
				["#717fff", temp.color],
				["#717FFF", temp.color],
				["#06a8ff", temp.color],
				["#06A8FF", temp.color],
				["#06a7ff", temp.color],
				["#06A7FF", temp.color],
				["#dcdfe6", temp.color],
				["#DCDFE6", temp.color],
				["#0095ff", temp.color],
				["#0095FF", temp.color],
				["#09aaff", temp.color],
				["#09AAFF", temp.color],
				["#0ca6ff", temp.color],
				["#0CA6FF", temp.color],
				["#5040ff", temp.color],
				["#5040FF", temp.color],
				["#454d5a", temp.color],
				["#454D5A", temp.color],
				["#a2abbd", temp.color],
				["#A2ABBD", temp.color],
				["#030b1a", temp.color],
				["#030B1A", temp.color],
				["#afb3bf", temp.color],
				["#AFB3BF", temp.color],
				["#ff436a", temp.color],
				["#FF436A", temp.color],
				["#03081a", temp.color],
				["#03081A", temp.color],
				["#2974b6", temp.color],
				["#2974B6", temp.color],
				["#0596e6", temp.color],
				["#0596E6", temp.color],
				["#C3EAFF", temp.color],
				["#c0d9fe", `${temp.color}50`],
				["#0098EA", `${temp.color}D0`],
				["#38b9ff", `${temp.color}D0`],
				["#38B9FF", `${temp.color}D0`],
				["#42d8ff", `${temp.color}D0`],
				["#42D8FF", `${temp.color}D0`],
				["#a48dff", `${temp.color}D0`],
				["#A48DFF", `${temp.color}D0`],
				["#6b79f2", `${temp.color}D0`],
				["#6B79F2", `${temp.color}D0`],
				["#9c86f2", `${temp.color}90`],
				["#9C86F2", `${temp.color}90`],
				["#83d3ff", `${temp.color}90`],
				["#83D3FF", `${temp.color}90`],
				["#C4D8F4", `${temp.color}90`],
				["#fafafc", `${temp.color}20`],
				["#FAFAFC", `${temp.color}20`],
				["#f5fbff", `${temp.color}20`],
				["#F5FBFF", `${temp.color}20`],
				["#b4e5ff", `${temp.color}20`],
				["#B4E5FF", `${temp.color}20`],
				["#f0faff", `${temp.color}20`],
				["#F0FAFF", `${temp.color}20`],
				["#c4d8f4", `${temp.color}20`],
				["#f1f3f8", `${temp.color}15`],
				["#F1F3F8", `${temp.color}15`],
				["#f2faff", `${temp.color}10`],
				["#F2FAFF", `${temp.color}10`],
				["#eef9fe", `${temp.color}10`],
				["#EEF9FE", `${temp.color}10`],
				["#f7f9fc", `${temp.color}10`],
				["#F7F9FC", `${temp.color}10`],
				["#f5f6fa", `${temp.color}10`],
				["#F5F6FA", `${temp.color}10`],
				["#b4e5ff", `${temp.color}10`],
				["#B4E5FF", `${temp.color}10`],
				["#e6f6ff", `${temp.color}10`],
				["#E6F6FF", `${temp.color}10`],
				["0,149,255", base.hexToRgba(temp.color)],
				["30, 175, 255", base.hexToRgba(temp.color)],
				["6, 167, 255, 0.1", base.hexToRgba(`${temp.color}1a`)],
				["6,167,255,.1", base.hexToRgba(`${temp.color}1a`)],
				["6,167,255,.23", base.hexToRgba(`${temp.color}3b`)],
				["164,141,255,.2", base.hexToRgba(`${temp.color}30`)],
				["196,182,255,.2", base.hexToRgba(`${temp.color}20`)],
				["113,127,255,.2", base.hexToRgba(`${temp.color}40`)],
				["3,8,26,.6", base.hexToRgba(`${temp.color}D0`)],
				["255,32,102,.4", base.hexToRgba(`${temp.color}66`)],
				["72,166,248,.7", base.hexToRgba(`${temp.color}66`)],
			], "other");
		},
		addButton() {
			base.waitForKeyElements(config.$baidu.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="g-dropdown-button pl-button">
					<div class="g-button g-button-blue color-button"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width:60px;">涓嬭浇鍔╂墜</span></span></div>
					<div class="menu" style="color:${temp.color};border-color:${temp.color};width:auto;z-index:41;">
						<div class="g-button-menu pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg> 鑾峰彇涓嬭浇閾炬帴</div>
						<div class="g-button-menu pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg> 鍔╂墜璁剧疆</div>
						<div class="g-button-menu pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg> 鍔╂墜缇庡寲</div>
						<div class="g-button-menu pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg> 鏇存柊鏃ュ織</div>
					</div>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$baidu.mount.main, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "main") return;
				let $button = $(`<div class="wp-s-agile-tool-bar__h-group pl-button">
					<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-main color-button">
						<button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon pl-button color-button">
							<i class="u-icon u-icon-download"></i>
							<span>涓嬭浇鍔╂墜</span>
						</button>
						<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu">
							<li class="sub cursor-p pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="sub cursor-p pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
							<li class="sub cursor-p pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
							<li class="sub cursor-p pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
						</ul>
					</div>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$baidu.mount.main, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "youth") return;
				let $button = $(`<div class="wp-s-agile-tool-bar__h-group pl-button">
					<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-main color-button">
						<button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon pl-button color-button" style="font-size:14px;font-weight:700">
							<i class="u-icon u-icon-more"></i>
							<span>缃戠洏鍔╂墜</span>
						</button>
						<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu">
						<li class="sub cursor-p pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
							<li class="sub cursor-p pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
							<li class="sub cursor-p pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
							<li class="sub cursor-p pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
						</ul>
					</div>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$baidu.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<a class="g-button tools-share-V20-btn save_btn pl-button color-button" style="padding:0;">
					<span class="g-button-right" style="padding-left:10px">
						<em class="icon icon-download" style="color:#fff;line-height:27px"></em>
						<span class="text" style="width:auto;">涓嬭浇鍔╂墜</span>
					</span>
					<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu" style="top:37px">
						<!--li class="sub cursor-p pl-button-mode pl-button-save"><em class="icon noicon-zhuancun_bai"></em>淇濆瓨鍚庝笅杞?/li-->
						<li class="sub cursor-p pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="sub cursor-p pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="sub cursor-p pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="sub cursor-p pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</a>`)
				element.after($button);
			})
		},
		addInitButton() {
			base.waitForKeyElements(config.$baidu.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="g-dropdown-button pl-button-init" style="opacity:0.5"><div style="color:#fff;" class="g-button g-button-blue color-button"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width:60px;">鐐规垜鐐逛寒</span></span></div></div>`);
				$button.click(base.showInitDialog);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$baidu.mount.main, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || (temp.page !== "main" && temp.page !== "youth")) return;
				let $button = $(`<div class="wp-s-agile-tool-bar__h-group pl-button-init">
					<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-main color-button">
						<button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon pl-button color-button" style="font-size:14px;font-weight:700">
							<i class="u-icon u-icon-download"></i>
							<span>鐐规垜鐐逛寒</span>
						</button>
					</div>
				</div>`);
				$button.click(base.showInitDialog);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$baidu.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<a class="g-button tools-share-V20-btn save_btn pl-button-init color-button" href="javascript:;">
					<span class="g-button-right">
						<em class="icon icon-download" style="color:#fff;line-height:27px"></em>
						<span class="text" style="width:auto;">鐐规垜鐐逛寒</span>
					</span>
				</a>`)
				$button.click(base.showInitDialog);
				element.after($button);
			})
		},
		async getFilesUrl(items, accessToken) {
			if (base.isType(items) !== "array") return [];
			let size = 50;
			let processed = 0;
			let now = Date.now();
			let outdate = [];

			items.forEach(item => {
				let cacheIndex = temp.glinks.findIndex(c => c.id == item.fs_id);
				if (cacheIndex !== -1) {
					let cached = temp.glinks[cacheIndex];
					if (cached.expires > now) {
						Object.assign(item, cached.data);
						processed++;
						return;
					} else {
						temp.glinks.splice(cacheIndex, 1);
					}
				}
				outdate.push(item);
			});

			for (let i = 0; i < outdate.length; i += size) {
				let url = `${config.$baidu.api.getLink}&fsids=${encodeURIComponent(JSON.stringify(outdate.map(i => i.fs_id).slice(i, i + size)))}&access_token=${accessToken}`;
				let res = await base.get(url, { "User-Agent": config.$baidu.api.ua.downloadLink });

				if (res.list && res.list.length !== 0 && res.errno === 0) {
					outdate.slice(i, i + size).forEach(item => {
						let infos = res.list.find(i => i.fs_id == item.fs_id);
						if (infos) {
							Object.assign(item, infos);
							temp.glinks.push({ "id": item.fs_id, "expires": (Date.now() + 4 * 60 * 60 * 1000), "data": infos });
						};
					})
					processed += res.list.length;
					$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${items.length} 涓摼鎺</div>`);

				} else {
					if (res.errno) {
						if (res.errno === 112) return message.error("鎻愮ず锛?br/>椤甸潰杩囨湡浜嗭紝鍒锋柊閲嶈瘯涓嬪惂~<br/>浠ｇ爜锛? + res.errno);
						if (res.errno === 9019) {
							base.delValue("baidu_access_token");
							return message.error("鎻愮ず锛?br/>璁块棶浠ょ墝宸茶繃鏈燂紝鍒锋柊缃戦〉鍚庡啀鑾峰彇涓€娆″惂~<br/>浠ｇ爜锛? + res.errno);
						}

						items.slice(i, i + size).forEach(i => {
							i.dlink = `鑾峰彇涓嬭浇鍦板潃澶辫触锛?{(res.errno || res.errmsg) ? "鏈嶅姟鍣ㄨ锛? + (res.errno && res.errmsg ? res.errno + " - " + res.errmsg : (res.errmsg || res.errno)) + "銆? : "鍒锋柊鍚庡啀璇曡瘯鍚"}`
						})
					}
					return message.error("鎻愮ず锛?br/>鑾峰彇涓嬭浇閾炬帴澶辫触锛屽埛鏂扮綉椤靛悗鍐嶈瘯璇曞惂~");
				}
				await base.sleep(1000);
			}
			return items;
		},
		async getShareFileUrl(items, data) {
			if (base.isType(items) !== "array") return [];
			let processed = 0;
			let now = Date.now();

			for (const item of items) {
				let cacheIndex = temp.glinks.findIndex(c => c.id == item.fs_id);
				if (cacheIndex !== -1) {
					let cached = temp.glinks[cacheIndex];
					if (cached.expires > now) {
						Object.assign(item, cached.data);
						processed++;
						$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${items.length} 涓摼鎺</div>`);
						continue;
					} else {
						temp.glinks.splice(cacheIndex, 1); // 鍒犻櫎杩囨湡
					}
				}

				let url = new URL(config.$baidu.api.getShareLink);
				url.searchParams.set("sign", data?.sign);
				url.searchParams.set("timestamp", data?.timestamp);
				url.searchParams.set("bdstoken", data.baidu.token);
				url.searchParams.set("logid", base.encodeBase(data.baidu.id));
				url.searchParams.set("jsToken", data.jsToken);
				let _data = new URLSearchParams({ "encrypt": 0, "product": "share", "uk": data.share.uk, "primaryid": data.share.id, "fid_list": JSON.stringify([item.fs_id]) });
				if (data.sekey) _data.set("extra", JSON.stringify({ "sekey": data.sekey }));

				let res = await base.post(url, _data, { "User-Agent": "netdisk;" });
				processed++
				$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${items.length} 涓摼鎺</div>`);

				if (res.list && base.isType(res.list) === "array" && res.list.length !== 0 && res.errno === 0) {
					Object.assign(item, res.list[0]);
					temp.glinks.push({ "id": item.fs_id, "expires": (Date.now() + 4 * 60 * 60 * 1000), "data": res.list[0] });

				} else {
					if (res.errno === 0 && base.isType(res.list) === "string") {
						item.dlink = `<span>鑾峰彇涓嬭浇鍦板潃澶辫触锛屾湇鍔″櫒璇达細姝ゆ枃浠惰繃澶э紝闇€瑕?b>淇濆瓨鍒扮綉鐩?/b>鍚庝簬缃戠洏涓笅杞姐€?/span>`
						temp.glinks.push({ "id": item.fs_id, "expires": (Date.now() + 4 * 60 * 60 * 1000), "data": item });
						continue;

					} else if (res.errno) {
						if (res.errno === 112) return message.error("鎻愮ず锛?br/>椤甸潰杩囨湡浜嗭紝鍒锋柊閲嶈瘯涓嬪惂~<br/>浠ｇ爜锛? + res.errno);
						if (res.errno === 9019) {
							// base.delValue("baidu_access_token");
							return message.error("鎻愮ず锛?br/>璁块棶浠ょ墝宸茶繃鏈燂紝鍒锋柊缃戦〉鍚庡啀鑾峰彇涓€娆″惂~<br/>浠ｇ爜锛? + res.errno);
						}
						item.dlink = `鑾峰彇涓嬭浇鍦板潃澶辫触锛?{(res.errno || res.errmsg) ? "鏈嶅姟鍣ㄨ锛? + (res.errno && res.errmsg ? res.errno + " - " + res.errmsg : (res.errmsg || res.errno)) + "銆? : "鍒锋柊鍚庡啀璇曡瘯鍚"}`
						continue;
					}
					return message.error("鎻愮ず锛?br/>鑾峰彇涓嬭浇閾炬帴澶辫触锛屽埛鏂扮綉椤靛悗鍐嶈瘯璇曞惂~");
				}
				await base.sleep(100);
			}
			return items;
		},
		async getFilesList(dirs, accessToken, processed = 0) {
			let cnt = 0;
			const fetch = async (targets) => {
				let files = [];
				for (let dir of targets) {
					$doc.find(".loading-popup .loading-title").html(`鏂囦欢鑾峰彇涓璥);
					let url = `${config.$baidu.api.getFiles}&dir=${encodeURIComponent(dir.path)}&access_token=${accessToken}`;
					let res = await base.get(url, { "User-Agent": config.$baidu.api.ua.downloadLink });
					cnt++;
					if (res?.list?.length && (res.errno === 0 || res.errmsg === "succ")) {
						let subFiles = res.list.filter(f => !f.isdir);
						processed += subFiles.length;
						$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} 涓枃浠秪</div><div>${dir.path}</div>`);
						files = files.concat(subFiles);
						let subDirs = res.list.filter(f => f.isdir);
						if (subDirs.length > 0) {
							files = files.concat(await fetch(subDirs));
						}
					}
					if (cnt >= 50) {
						$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} 涓枃浠秪</div><div>浼戞伅 3 绉?..</div>`);
						await base.sleep(3000);
						cnt = 0;
					}
				}
				return files;
			};
			return await fetch(dirs);
		},
		async getLink() {
			// 鑾峰彇閫夋嫨鐨勬枃浠跺垪琛?			let selectList = this.getSelectedList();
			let accessToken = (base.getValue("baidu_access_token") || await temp.main.getToken());

			// 鍥為€€鎺堟潈
			if (!accessToken) {
				message.info("鎻愮ず锛?br/>绋嶅悗璇峰湪鏂版爣绛鹃〉涓巿鏉冨姪鎵嬪摝~");
				base.delValue("baidu_access_token");
				await base.sleep(3300);
				GM_openInTab(config.$baidu.api.getAccessToken, { active: true, insert: true, setParent: true })
				let attempts = 0;
				let interval = setInterval(() => {
					if (!!base.getValue("baidu_access_token")) {
						clearInterval(interval);
						accessToken = base.getValue("baidu_access_token")
					}
					attempts++;
					if (attempts > 120) {
						clearInterval(interval);
						return message.error("鎻愮ず锛?br/>鏃堕棿澶暱锛屾垜鍏堟挙涓嬪暒~");
					}
				}, 1000);
				return;
			}

			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");

			if (temp.page === "home" || temp.page === "main") {
				let files = selectList.filter(f => !f.isdir);
				let dirs = selectList.filter(f => f.isdir);
				if (dirs.length > 0) files = files.concat(await this.getFilesList(dirs, accessToken, files.length));
				if (!files.length) return message.error("鎻愮ず锛?br/>鏂囦欢澶规槸绌虹殑鍝");
				$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);

				files = await this.getFilesUrl(files, accessToken);

				if (base.isType(files) === "array" && files.length) {
					temp.links = [files, {
						isFolder: v => v.isdir === 1,
						getFileName: v => (v.server_filename || v.filename),
						getFileSize: v => v.size,
						getFileLink: v => {
							if (!v.dlink || !v.dlink.startsWith("http")) return v.dlink;
							let url = new URL(v.dlink);
							url.searchParams.set("access_token", accessToken);
							return url.href;
						},
						convert: {
							aria2: `--header "User-Agent:${config.$baidu.api.ua.downloadLink}"`,
							curl: `-A "${config.$baidu.api.ua.downloadLink}"`,
							bitcomet: `user_agent=${encodeURIComponent(config.$baidu.api.ua.downloadLink)}`
						},
						tooltip: config.$baidu.dom
					}];
					base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				} else {
					return message.error("鎻愮ず锛?br/>鑾峰彇涓嬭浇閾炬帴澶辫触锛屽埛鏂扮綉椤靛悗鍐嶈瘯璇曞惂~");
				}
			} else if (temp.page === "share") {
				let files = selectList.filter(f => !f.isdir);
				let data = await this.getShareData();
				temp.shareInfo = {
					url: data?.share?.url,
					pwd: data?.share?.pwd || "",
					fullUrl: data?.share?.url ? `https://pan.baidu.com/s/1${data.share.url}` : location.href.split("?")[0]
				};
				temp._shareAutoCopied = false;

				//if (data.share.url) {
				//	let res = await base.post(`${config.$baidu.api.getShareVerify}&surl=${data.share.url}&t=${Date.now()}$bdstoken=${data.baidu.token}&logid=${base.encodeBase(data.baidu.id)}`, new URLSearchParams({ "pwd": data?.share?.pwd ? data.share.pwd : "" }));
				//	data.sekey = res?.randsk;
				//}

				let sign = await base.get(`${config.$baidu.api.getShareSign}&surl=1${data.share.url}$bdstoken=${data.baidu.token}&logid=${base.encodeBase(data.baidu.id)}`);
				if (sign?.data?.sign && sign?.data?.timestamp) {
					data.sign = sign.data.sign;
					data.timestamp = sign.data.timestamp;
				}

				files = await this.getShareFileUrl(files, data, accessToken);

				if (base.isType(files) === "array" && files.length) {
					temp.links = [files, {
						isFolder: v => v.isdir === 1,
						getFileName: v => (v.server_filename || v.filename),
						getFileSize: v => v.size,
						getFileLink: v => {
							if (!v.dlink || !v.dlink.startsWith("http")) return v.dlink;
							let url = new URL(v.dlink);
							url.searchParams.set("access_token", accessToken);
							return url.href;
						},
						convert: {
							aria2: `--header "User-Agent:${config.$baidu.api.ua.downloadLink}"`,
							curl: `-A "${config.$baidu.api.ua.downloadLink}"`,
							bitcomet: `user_agent=${encodeURIComponent(config.$baidu.api.ua.downloadLink)}`
						},
						tooltip: config.$baidu.dom
					}];
					base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				} else {
					return message.error("鎻愮ず锛?br/>鑾峰彇涓嬭浇閾炬帴澶辫触锛屽埛鏂扮綉椤靛悗鍐嶈瘯璇曞惂~");
				}
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
		},
		getSelectedList() {
			try {
				let list = [];
				// 3
				let fileList = unsafeWindow.document.querySelector(".file-list");
				if (fileList?.__vue__?.allFileList?.[0]) list = fileList.__vue__.allFileList.filter(function (item) { return !!item.selected; });

				// 2
				let wpCore = unsafeWindow.document.querySelector(".wp-s-core-pan");
				if (wpCore?.__vue__?.selectedList?.[0]) list = wpCore.__vue__.selectedList;

				// 1
				let context = unsafeWindow.require?.("system-core:context/context.js");
				if (context?.instanceForSystem?.list?.getSelected?.()?.[0]) list = context.instanceForSystem.list.getSelected();

				return base.clone(list);
			} catch (e) {
				console.error(e);
				return [];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/disk\/home/.test(path)) return "home";
			if (/^\/disk\/main/.test(path)) return "main";
			if (/^\/youth\/pan\/main/.test(path)) return "youth";
			if (/^\/(s|share)\//.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};
	let $baiduAuthorize = {
		async initPanLinker() {
			base.registerMenuCommand();
			Swal.fire({
				...temp.swalDefault,
				showConfirmButton: false,
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				html: `璇风◢鍚巂,
				willOpen: () => {
					Swal.showLoading();
				},
			});
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				let url = new URL(location);
				let auth = new URL(config.$baidu.api.getAccessToken);
				let allowedClientIds = [
					auth.searchParams.get("client_id"),
					"L6g70tBRRIXLsY0Z3HwKqlRE", // pcstest_oauth
					"NqOMXF6XGhGRIGemsQ9nG0Na", // ES 鏂囦欢绠＄悊鍣紝Secret锛歋VT6xpMdLcx6v4aCR4wT8BBOTbzFO8LM
					"fSds3K4w43rw37tOqlQmTa2kDwaczK4U", // 灏忓害鏅鸿兘璇嶅吀绗斾笓涓氱増
					"TFwtw8uwHxpdkvVqVKdIlx1XqXUnr1zG", // 鍗拌薄绗旇
					"9dgBV9yesuBVOXaxls7aVHbLBLqU8yyg", // WPS鏂囨。
					"l9DdBOG4RYroMscmzK5OChdaGelgd92M", // 灏忕尨浜戝嵃PC鐗?					"Kyr013gHQBf2immy3fQt1jZ3nZVpiGAm", // 绠€鍗曟墦鍗?					"iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v", // Alist
					"omiOnr2tYnN9vSyDErcVFWpPU2mZA7YO", // OpenList
					"QHOuRXiepJBMjtk0esLhrPoNlQyYd0mF", // mcp_server
					"IlLqBbU3GjQ0t46TRwFateTprHWl39zF",  // 鐧惧害鎵嬫満鍔╂墜
					"iG6ghsi9r0RR0jTFCrlvTjX9",  // 鐧惧害浜戠殑灏忔祴璇?https://github.com/scusjs/baiduyun/blob/43785cd7eaab6741fe2a7de7cd3391920b94c9c7/bdy/config.ini
					"YgMAXXnP0Lziw0LPVbc6E4zm",  // 鎴戠殑鐩殑鍦?https://github.com/ymgd/weixinopen/blob/2e1f9e3d32616c3623547a8f25d330598337ba04/wechat-weapp-union/zndg/app.js#L64
				];
				if (
					/openapi.baidu.com\/oauth\/2.0\/authorize/.test(location.href) &&
					url.searchParams.get("response_type").includes("token") &&
					url.searchParams.get("scope").includes("netdisk") &&
					allowedClientIds.includes(url.searchParams.get("client_id"))
				) {
					var dialog = await Swal.fire({
						...temp.swalDefault,
						icon: "info",
						title: `鎻愮ず`,
						html: `<p>(鈼嶁€⑨礂鈥⑩棈) 浣犲ソ鍛€锛屼负浜嗚幏鍙栫櫨搴︾綉鐩樻枃浠剁殑涓嬭浇鐩撮摼<br/>鈥滀笅杞藉姪鎵嬧€?闇€瑕佷綘鐨勬巿鏉冿紝浠ヨ幏鍙栫綉鐩樻枃浠剁殑璁块棶浠ょ墝</p><br/>
						<p>鐢变簬鍦ㄧ櫨搴?OAuth 椤甸潰浣跨敤浜嗗叾浠栧簲鐢ㄧ殑 Client ID<br/>鎵€浠ユ樉绀虹殑搴旂敤鍚嶇О鍙兘浼氭湁鎵€涓嶅悓锛屾暚璇风悊瑙?/p><br/>
						<p>鑾峰彇鍒扮殑浠ょ墝浠呯敤浜庤皟鐢ㄧ櫨搴︾綉鐩?API 鐢熸垚鐩撮摼<br/>涓嶄細鐢ㄤ簬鍏朵粬鐢ㄩ€旓紝璇锋斁蹇冩巿鏉?/p>`,
						showConfirmButton: true,
						showDenyButton: true,
						allowOutsideClick: false,
						allowEscapeKey: false,
						allowEnterKey: false,
						confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 鎺堟潈`,
						denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 鍐嶆兂鎯砢,
						position: "center"
					});
					if (dialog.isConfirmed) {
						base.waitForKeyElements("button#auth-allow", function (element) {
							element[0].click();
						}, true)
						return;
					}
					if (dialog.isDenied) {
						return await Swal.fire({
							...temp.swalDefault,
							icon: "question",
							title: `濂藉惂(*锟?锟?鈺璥,
							html: "閭ｅ氨鍐嶆兂涓€鎯?br/>鎯冲ソ浜嗗氨鎸変笅 鈥滄巿鏉冣€?鎸夐挳鍚",
							timer: 180000,
							toast: true,
							timerProgressBar: true,
							showConfirmButton: false,
							showDenyButton: false,
							position: "bottom-end",
						})
					}
				} else if (/openapi.baidu.com\/oauth\/2.0\/login_success/.test(location.href)) {
					let int = setInterval(async () => {
						if (location.href.includes("access_token") && (location.href.includes("basic+netdisk") || location.href.includes("basic,netdisk"))) {
							clearInterval(int)
							let token = location.href.match(/access_token=(.*?)&/)[1];
							base.setValue("baidu_access_token", token);
							await Swal.fire({
								...temp.swalDefault,
								icon: "success",
								title: `鎴愬姛鍟,
								html: `<p>(鈼嶁€⑨礂鈥⑩棈) 鎮ㄥ凡<b>鎴愬姛鎺堟潈/鎺堟潈杩?/b>鑴氭湰鑾峰彇缃戠洏璁块棶浠ょ墝~</p><p>鑾峰彇鍒扮殑浠ょ墝<b>浠呯敤浜庤皟鐢ㄧ櫨搴︾綉鐩?API 鐢熸垚鐩撮摼</b><br/>涓嶄細鐢ㄤ簬鍏朵粬鐢ㄩ€?/p><p>绛夊緟 <span id="second">/</span> 绉掍箣鍚庡皢鍏抽棴姝ら〉闈?/p>`,
								timer: 5000,
								timerProgressBar: true,
								showConfirmButton: true,
								showDenyButton: false,
								allowOutsideClick: false,
								allowEscapeKey: false,
								allowEnterKey: false,
								confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 鍏抽棴`,
								willOpen: () => {
									let secondSpan = document.getElementById("second");
									let interval = setInterval(() => {
										if (Swal.isVisible()) {
											let timeLeft = Swal.getTimerLeft();
											if (timeLeft !== null && timeLeft > 0) {
												secondSpan.textContent = (timeLeft / 1000).toFixed(2);
											}
										} else {
											clearInterval(interval);
										}
									}, 10);
								},
								didOpen: function (toast) {
									toast.addEventListener("mouseenter", () => {
										Swal.stopTimer();
									});
									toast.addEventListener("mouseleave", () => {
										Swal.resumeTimer();
									});
								},
								willClose: () => window.close()
							});
							return window.close();
						} else {
							clearInterval(int)
							Swal.close()
						}
					}, 1)
				} else {
					Swal.close()
				}
			} else {
				Swal.close()
			}
		}
	}

	/**
	 * 闃块噷浜戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $aliyun = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let reactDomGrid = document.querySelector(config.$aliyun.mount.grid);
				if (reactDomGrid) {
					var dialog = await Swal.fire({
						...temp.swalDefault,
						title: "鎻愮ず",
						html: `<div style="display:flex;align-items:center;justify-content:center;">璇峰厛鍒囨崲鍒?nbsp;&nbsp;<svg class="icon" class="icon--D3kMk " viewBox="0 0 1024 1024" width="20" height="20" fill="currentColor"><use xlink:href="#PDSDrag"></use></svg>&nbsp;<b>鍒楄〃瑙嗗浘</b>&nbsp;&nbsp;鍚庡啀鑾峰彇涓嬭浇閾炬帴鍝?/div>`,
						icon: "info",
						showCloseButton: true,
						showDenyButton: true,
						confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 鍒囨崲`,
						denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 涓嶈`,
					});
					if (dialog.isConfirmed) {
						document.querySelector(config.$aliyun.mount.switch).click();
						return message.success("鎻愮ず锛?br/>鍒囨崲涓哄垪琛ㄨ鍥炬垚鍔?br/>璇峰啀鑾峰彇涓€娆′笅杞介摼鎺ュ惂~");
					}
					return false;
				}
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("鎻愮ず锛?br/>璇峰嬀閫夎淇濆瓨鍒扮綉鐩樼殑鏂囦欢鍝");
				}
				message.info("鎻愮ず锛?br/>鍥犵綉鐩橀檺鍒讹紝璇蜂繚瀛樺埌鑷繁缃戠洏鍚庡啀鍘讳笅杞藉摝~");
				await base.sleep(500);
				document.querySelector(`[class*="btn-save--"]`).click();
			});
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"), { "Referer": `https://${location.host}/` });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"), [`Referer:https://${location.host}/`]);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"), { "referrer": `https://${location.host}/` });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), undefined);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			base.waitForKeyElements(`[class*="share-list-banner"]`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`[class*="to-app"]`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`[class*="btn-mobile-save"]`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`[class*="SplashScreenImg--close"]`, function (tag) {
				tag[0].click();
			}, true);
			base.waitForKeyElements(`[class*="container"]`, function (tag) {
				tag.find(`[class^="icon-close"]`).click();
			}, true);
			base.waitForKeyElements(`[class*="popup_main_close"]`, function (tag) {
				tag[0].click();
			}, true);
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$aliyun !== true) return;
			base.adaptiveThemeOverride([
				["#3763ff", temp.color],
				["#8664ff", `${temp.color}D0`],
				["99, 125, 255", base.hexToRgba(temp.color)],
				["132, 133, 141", base.hexToRgba(temp.color)],
				["112, 136, 255", base.hexToRgba(temp.color)],
				["97, 122, 250", base.hexToRgba(temp.color)],
				["68, 109, 255", base.hexToRgba(temp.color)],
				["82, 110, 250", base.hexToRgba(`${temp.color}20`)],
				["122, 144, 255", base.hexToRgba(`${temp.color}D0`)],
				["138, 157, 255", base.hexToRgba(`${temp.color}D0`)],
			]);
		},
		svg: `<svg class="ali-btn-icon" style="margin-right:3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>`,
		addButton() {
			base.waitForKeyElements(config.$aliyun.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="ali-button pl-button">
					<span data-role="icon" data-render-as="svg" class="icon">${temp.main.svg}涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:30px; right:0;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				element.append($button);
			})
			base.waitForKeyElements(config.$aliyun.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="ali-button pl-button">
					<span data-role="icon" data-render-as="svg" class="icon">${temp.main.svg}涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:30px; right:16px;">
						<li class="pl-button-mode pl-button-save"><use xlink:href="#pl-icon-fa-save"/></svg>淇濆瓨鍚庝笅杞?/li>
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				$button.css({ "margin-right": "10px", "height": "36px", "width": "auto", "padding": "1px 30px" });
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="ali-button pl-button-init"><span data-role="icon" data-render-as="svg" class="icon">${temp.main.svg}鐐规垜鐐逛寒</span></div>`);
			$button.click(base.showInitDialog);
			base.waitForKeyElements(config.$aliyun.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				$button.css({ "width": "auto" });
				element.append($button);
			})
			base.waitForKeyElements(config.$aliyun.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				$button.css({ "margin-right": "10px", "height": "36px", "padding": "1px 30px", "width": "auto" });
				element.prepend($button);
			})
		},
		async getLink() {
			let reactDomGrid = document.querySelector(config.$aliyun.mount.grid);
			if (reactDomGrid) {
				var dialog = await Swal.fire({
					...temp.swalDefault,
					title: "鎻愮ず",
					html: `<div style="display:flex;align-items:center;justify-content:center;">璇峰厛鍒囨崲鍒?nbsp;&nbsp;<svg class="icon" class="icon--D3kMk " viewBox="0 0 1024 1024" width="20" height="20" fill="currentColor"><use xlink:href="#PDSDrag"></use></svg>&nbsp;<b>鍒楄〃瑙嗗浘</b>&nbsp;&nbsp;鍚庡啀鑾峰彇涓嬭浇閾炬帴鍝?/div>`,
					icon: "info",
					showCloseButton: true,
					showDenyButton: true,
					confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 鍒囨崲`,
					denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 涓嶈`,
				});
				if (dialog.isConfirmed) {
					document.querySelector(config.$aliyun.mount.switch).click();
					return message.success("鎻愮ず锛?br/>鍒囨崲涓哄垪琛ㄨ鍥炬垚鍔?br/>璇峰啀鑾峰彇涓€娆′笅杞介摼鎺ュ惂~");
				}
				return false;
			}

			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => item.type !== "file")) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			if (temp.page === "home") {
				selectList = selectList.filter(item => item.type === "file")
				let batchSize = 15;
				let processed = 0;
				$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 褰撳墠鎵规鏂囦欢
					let batch = selectList.slice(i, i + batchSize);
					// 杩囨护鎺夊凡鏈?URL 鐨勬枃浠?					let noUrlSelectList = batch.filter(v => !Boolean(v.url));
					let hasUrlSelectList = batch.filter(v => Boolean(v.url));
					let queue = [];
					// 涓烘病鏈?URL 鐨勬枃浠剁敓鎴愯姹傞槦鍒?					noUrlSelectList.forEach((item) => {
						queue.push(this.getFileUrl(item.driveId, item.fileId)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
								return val;
							}));
					});
					hasUrlSelectList.forEach((item) => {
						processed++;
						$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
					});
					// 绛夊緟鏈壒娆＄殑璇锋眰缁撴灉
					let res = await Promise.all(queue);
					res.forEach((val, index) => {
						noUrlSelectList[index].url = val;
					});
					// 姣忔澶勭悊瀹屼竴涓壒娆″悗锛岀瓑寰?1 绉?					await base.sleep(1000);
				}
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
			temp.links = [selectList, {
				isFolder: v => v.type === "folder",
				getFileName: v => v.name,
				getFileSize: v => v.size,
				getFileLink: v => (v.downloadUrl || v.url),
				convert: {
					aria2: `--header "Referer:https://${location.host}/"`,
					curl: `-e "https://${location.host}/"`,
					bitcomet: `&refer=${encodeURIComponent(`https://${location.host}/`)}`
				},
				tooltip: config.$aliyun.dom
			}];
			base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
		},
		async getFileUrl(d, f) {
			let res = await base.post(config.$aliyun.api.getLink, { drive_id: d, file_id: f }, { "Content-Type": "application/json", "Authorization": `${base.getStorage("token").token_type} ${base.getStorage("token").access_token}`, "X-Canary": "client=windows,app=adrive,version=v6.0.0" });
			if (res.code == "AccessTokenInvalid") {
				return message.error("鎻愮ず锛?br/>璁块棶浠ょ墝杩囨湡浜嗭紝璇峰埛鏂扮綉椤靛悗鍐嶈瘯");
			}
			if (res.url) {
				return res.url;
			}
			return "";
		},
		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.querySelector(config.$aliyun.mount.list);
				let reactObj = base.findReact(reactDom, 1);
				let props = reactObj.pendingProps;
				if (props) {
					let fileList = props.dataSource || [];
					let selectedKeys = props.selectedKeys.split(",");
					fileList.forEach(function (val) {
						if (selectedKeys.includes(val.fileId)) {
							selectedList.push(val);
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/(drive)/.test(path)) return "home";
			if (/^\/(s|share)\//.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};

	/**
	 * 涓浗绉诲姩浜戠洏 / 鍜屽僵浜?	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $mcloud = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
				if (selections.every(item => !item.contentID && !item.contentName)) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
				message.info("鎻愮ず锛?br/>鍥犵綉鐩橀檺鍒讹紝鍙兘澶熼€氳繃椤甸潰鐩存帴涓嬭浇鍝");
				await base.sleep(500);
				document.querySelector(".btn-top.btn-top_dl").click();
			});
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), undefined);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			base.waitForKeyElements(".adv_swiper_menu", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".client-bubble", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".avs-box", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".top-adv-swiper", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".client_download_icon", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".document_top_memberCenter", function (tag) {
				$(tag[0]).click(function () {
					Swal.fire({
						...temp.swalDefault,
						html: `<iframe style="height:700px; width:440px; border:0;" src="https://vip.yun.139.com/vip/"></iframe>`,
						didOpen: function (toast) {
							const iframe = toast.querySelector('iframe');
							const updateHeight = () => {
								iframe.style.height = (window.innerHeight - 100) + 'px';
							};
							updateHeight();
							window.addEventListener('resize', updateHeight);
							toast._resizeHandler = updateHeight;
						},
						willClose: function (toast) {
							// 娓呯悊浜嬩欢鐩戝惉鍣?							window.removeEventListener('resize', toast._resizeHandler);
						},
						allowOutsideClick: false,
						showCloseButton: true,
						showConfirmButton: false,
					});
				});
			}, true);
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$mcloud !== true) return;
			base.adaptiveThemeOverride([
				["#3181f9", temp.color],
				["#5a9afa", temp.color],
				["#98c0fc", `${temp.color}D0`],
				["#2d76e5", `${temp.color}D0`],
				["49,129,249,.08", base.hexToRgba(`${temp.color}20`)],
			]);
		},
		addButton() {
			base.waitForKeyElements(config.$mcloud.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="pl-button mcloud-button btn-top">
					<span class="mcloud-btn">涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:36px; left:0; letter-spacing:normal;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$mcloud.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="pl-button mcloud-share-button">
					<span class="mcloud-btn">涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:36px; left:0; letter-spacing:normal;">
						<li class="pl-button-mode pl-button-save"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-downward"/></svg>鐩存帴涓嬭浇</li>
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="pl-button-init"><span class="mcloud-btn">鐐规垜鐐逛寒</span></div>`);
			$button.click(base.showInitDialog);
			base.waitForKeyElements(config.$mcloud.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				$button.addClass("mcloud-button");
				element.prepend($button);
			})
			base.waitForKeyElements(config.$mcloud.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				$button.addClass("mcloud-share-button").css({ "cursor": "pointer" });
				element.prepend($button);
			})
		},
		getRandomString(len) {
			len = len || 16;
			let $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
			let maxPos = $chars.length;
			let pwd = "";
			for (let i = 0; i < len; i++) {
				pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		},
		utob(str) {
			let u = String.fromCharCode;
			return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, function (t) {
				if (t.length < 2) {
					let e = t.charCodeAt(0);
					return e < 128 ? t : e < 2048 ? u(192 | e >>> 6) + u(128 | 63 & e) : u(224 | e >>> 12 & 15) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
				}
				e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
				return u(240 | e >>> 18 & 7) + u(128 | e >>> 12 & 63) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
			});
		},
		getSign(e, t, a, n) {
			let r = "",
				i = "";
			if (t) {
				let s = Object.assign({}, t);
				i = JSON.stringify(s),
					i = i.replace(/\s*/g, ""),
					i = encodeURIComponent(i);
				let c = i.split(""),
					u = c.sort();
				i = u.join("");
			}
			let A = md5(base.encodeBase(this.utob(i)));
			let l = md5(a + ":" + n);
			return md5(A + l).toUpperCase();
		},
		async getFileUrl(item, index) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};
				if (this.detectPage() === "home") {
					let body = {
						fileId: item.contentID
					}
					let time = new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace("T", " ");
					let key = this.getRandomString(16);
					let sign = this.getSign(undefined, body, time, key);
					let getCookie = (name) => {
						let cname = name + "=";
						let ca = document.cookie.split(";");
						for (let i = 0; i < ca.length; i++) {
							let c = ca[i].trim();
							if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
						}
						return "";
					}
					let res = await base.post(config.$mcloud.api.getLink, body, {
						"Authorization": getCookie("authorization"),
						"Caller": "web",
						"Content-Type": "application/json;charset=UTF-8",
						"CMS-DEVICE": "default",
						"Mcloud-Channel": "1000101",
						"Mcloud-Client": "10701",
						"Mcloud-Sign": time + "," + key + "," + sign,
						"Mcloud-Version": "7.14.2",
						"X-DeviceInfo": "||9|7.17.0|edge||||windows 10||zh-CN|||",
						"X-Huawei-ChannelSrc": "10000034",
						"X-Inner-Ntwk": "2",
						"X-M4C-Caller": "PC",
						"X-M4C-Src": "10002",
						"X-SvcType": "1",
						"X-Yun-Api-Version": "v1",
						"X-Yun-App-Channel": "10000034",
						"X-Yun-Channel-Source": "10000034",
						"X-Yun-Client-Info": "||9|7.17.0|edge||||windows 10||zh-CN|||||",
						"X-Yun-Module-Type": "100",
						"X-Yun-Svc-Type": "1",
						"X-Yun-Url-Type": "3"
					});
					if (res.success) {
						return {
							index,
							downloadUrl: res.data.url
						};
					} else {
						return {
							index,
							downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屽埛鏂板悗鍐嶈瘯璇曞惂~"
						};
					}
				}
				if (this.detectPage() === "share") {
					let vueDom = document.querySelector(".main_file_list").__vue__;
					let res = await base.post(config.$mcloud.api.getShareLink, `linkId=${vueDom.linkID}&contentIds=${item.path}&catalogIds=`, { "Content-Type": "application/x-www-form-urlencoded" });
					if (res.code == 0) {
						return {
							index,
							downloadUrl: res.data.redrUrl
						};
					} else {
						return {
							index,
							downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屽埛鏂板悗鍐嶈瘯璇曞惂~"
						};
					}
				}
			} catch (e) {
				return {
					index,
					downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屽埛鏂板悗鍐嶈瘯璇曞惂~"
				};
			}
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => !item.contentID && !item.contentName)) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			if (temp.page === "home") {
				selectList = selectList.filter(item => item.contentID && item.contentName && item.contentSuffix);
				let batchSize = 15;
				let processed = 0;
				$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
								return val;
							}));
					});
					let res = await Promise.all(queue);
					res.forEach(val => {
						selectList[val.index].downloadUrl = val.downloadUrl;
					});
					await base.sleep(1000);
				}
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
			temp.links = [selectList, {
				isFolder: v => (v.dirEtag || v.caName),
				getFileName: v => (v.contentName || v.coName),
				getFileSize: v => (v.contentSize || v.coSize),
				getFileLink: v => v.downloadUrl,
				tooltip: config.$mcloud.dom
			}];
			base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
		},
		getSelectedList() {
			try {
				return document.querySelector(".main_file_list").__vue__.selectList.map(val => val.item);
			} catch (e) {
				let vueDom = document.querySelector(".home-page").__vue__;
				let fileList = vueDom._computedWatchers.fileList.value;
				let dirList = vueDom._computedWatchers.dirList.value;
				let selectedFileIndex = vueDom.selectedFile;
				let selectedDirIndex = vueDom.selectedDir;
				let selectFileList = fileList.filter((v, i) => {
					return selectedFileIndex.includes(i);
				});
				let selectDirList = dirList.filter((v, i) => {
					return selectedDirIndex.includes(i);
				});
				return [...selectFileList, ...selectDirList];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/w/.test(path)) return "home";
			if (/^\/link|shareweb/.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};

	/**
	 * 澶╃考浜戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $tcloud = {
		addPageListener() {
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), undefined);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			base.waitForKeyElements(".advertising-mask", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements("a.client-download.nav-block", function (tag) {
				tag.fadeOut();
			}, true);
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$tcloud !== true) return;
			base.adaptiveThemeOverride([
				["#2b89ea", temp.color],
				["#1874d3", `${temp.color}F0`],
				["#1890ff", temp.color],
				["#388fc9", temp.color],
				["#0087ff", temp.color],
				["#255697", temp.color],
				["#3ea6ff", `${temp.color}80`],
				["#1d52f2", temp.color],
				["#3699ff", `${temp.color}D0`],
				["#f4f9fe", `${temp.color}10`],
				["#eaf5ff", `${temp.color}20`],
			], "other");
		},
		addButton() {
			let $button = $(`<div class="pl-button tcloud-button">
				涓嬭浇鍔╂墜&nbsp;
				<i aria-label="icon:caret-down" class="anticon anticon-caret-down">
					<svg viewBox="0 0 1024 1024" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
						<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
					</svg>
				</i>
				<ul class="pl-dropdown-menu">
					<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
					<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
					<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
				</ul>
			</div>`);
			$button.find(".pl-dropdown-menu").css({ "position": "absolute", "left": "-1px" })
			base.waitForKeyElements(config.$tcloud.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				$button.find(".pl-dropdown-menu").css({ "top": "28px" })
				element.prepend($button);
			})
			base.waitForKeyElements(config.$tcloud.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				$button.css({ "height": "28px", "border-radius": "15px" })
				$button.find(".pl-dropdown-menu").css({ "top": "25px" })
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="tcloud-button pl-button-init">鐐规垜鐐逛寒</div>`);
			$button.click(base.showInitDialog);
			base.waitForKeyElements(config.$tcloud.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				element.prepend($button);
			})
			base.waitForKeyElements(config.$tcloud.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				$button.css({ "height": "28px", "border-radius": "15px" })
				element.prepend($button);
			})
		},
		async getToken() {
			$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鐘舵€亊</div>`);
			let res = await base.getFinal(config.$tcloud.api.getAccessToken, undefined, true);
			let accessToken = res.match(/accessToken=(\w+)/)?.[1];
			accessToken && base.setStorage("accessToken", accessToken);
			$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>鑾峰彇鎴愬姛锛屼护鐗屽凡缂撳瓨~</div>`);
			return accessToken;
		},
		async getFileUrl(item, index, token) {
			try {
				if (item.downloadUrl) {
					return {
						index,
						downloadUrl: item.downloadUrl
					}
				};
				let time = Date.now();
				let url = `${config.$tcloud.api.getLink}?fileId=${item.fileId}`;
				let _sign = `AccessToken=${token}&Timestamp=${time}`;
				if (item.shareId) {
					url += `&dt=1&shareId=${item.shareId}`;
					_sign += `&dt=1`;
				}
				_sign += `&fileId=${item.fileId}`;
				if (item.shareId) {
					_sign += `&shareId=${item.shareId}`;
				}
				let res = await base.get(url, { "Accept": "application/json;charset=UTF-8", "Sign-Type": 1, "Accesstoken": token, "Timestamp": time, "Signature": md5(_sign).toString() });
				if (res.res_code == 0) {
					return {
						index,
						downloadUrl: res.fileDownloadUrl
					};
				} else if (res.errorcode == "InvalidSessionKey") {
					return {
						index,
						downloadUrl: "鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏~"
					};
				} else if (res.res_code == "ShareNotFoundFlatDir") {
					return {
						index,
						downloadUrl: "鎻愮ず锛?br/>璇穂杞瓨]鏂囦欢锛屼箣鍚庡啀馃憠鍓嶅線[鎴戠殑缃戠洏]涓笅杞藉摝~"
					};
				} else {
					return {
						index,
						downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屽埛鏂板悗鍐嶈瘯璇曞惂~" + (res.res_code ? res.res_code : "")
					};
				}
			} catch (e) {
				return {
					index,
					downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屽埛鏂板悗鍐嶈瘯璇曞惂~"
				};
			}
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => item.isFolder)) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			selectList = selectList.filter(item => !item.isFolder)
			$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鐘舵€亊</div>`);
			let token = base.getStorage("accessToken") || await this.getToken();
			if (!token) {
				return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏~");
			}
			$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>鑾峰彇缂撳瓨鎴愬姛~</div>`);
			let batchSize = 15;
			let processed = 0;
			$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);
			for (let i = 0; i < selectList.length; i += batchSize) {
				let batch = selectList.slice(i, i + batchSize);
				let queue = [];
				batch.forEach((item, localIndex) => {
					let globalIndex = i + localIndex;
					queue.push(this.getFileUrl(item, globalIndex, token)
						.then(val => {
							processed++;
							$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
							return val;
						}));
				});
				let res = await Promise.all(queue);
				res.forEach(val => {
					selectList[val.index].downloadUrl = val.downloadUrl;
				});
				await base.sleep(1000);
			}
			temp.links = [selectList, {
				isFolder: v => v.isFolder,
				getFileName: v => v.fileName,
				getFileSize: v => v.size,
				getFileLink: v => v.downloadUrl,
				tooltip: config.$mcloud.dom
			}];
			base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
		},
		getSelectedList() {
			try {
				return document.querySelector(".c-file-list").__vue__.selectedList;
			} catch (e) {
				return [document.querySelector(".info-detail").__vue__.fileDetail];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/web\/main/.test(path)) return "home";
			if (/^\/web\/share/.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
			this.getToken();
		},
	};

	/**
	 * 杩呴浄浜戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $xunlei = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("鎻愮ず锛?br/>璇峰嬀閫夎淇濆瓨鍒扮綉鐩樼殑鏂囦欢鍝");
				}
				message.info("鎻愮ず锛?br/>鍥犵綉鐩橀檺鍒讹紝璇蜂繚瀛樺埌鑷繁缃戠洏鍚庡啀鍘讳笅杞藉摝~");
				await base.sleep(500);
				document.querySelector(".saveToCloud").click();
			});
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"), { "mirror_url_list": base.getMirrorList(target.data("link"), config.$xunlei.api.mirror), "checkboxCustomHeadersForMirrors": "on" });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), undefined);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$xunlei !== true) return;
			base.adaptiveThemeOverride([
				["#3f85ff", temp.color],
				["63,133,255,.1", base.hexToRgba(`${temp.color}20`)],
				["#2670ea", `${temp.color}D0`],
				["#619bff", `${temp.color}D0`],
				["#ecf3ff", `${temp.color}10`],
				["#f6faff", `${temp.color}10`],
				["#1a2845", `${temp.color}20`],
				["#0f2035", `${temp.color}20`],
				["#308bfd", `${temp.color}20`],
				["#eee", `${temp.color}20`],
			], "other");
			base.addStyle(`${mount}-xunlei`, "style", `.web-header{background:linear-gradient(0deg,${temp.color}D0,${temp.color})}`);
		},
		addButton() {
			base.waitForKeyElements(config.$xunlei.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="xunlei-button pl-button"><i class="xlpfont xlp-download"></i><span style="font-size:13px;margin-left:6px;">涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:34px;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$xunlei.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="xunlei-button pl-button">
					<i class="xlpfont xlp-download"></i><span style="font-size:13px;margin-left:6px;">涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:34px;">
						<li class="pl-button-mode pl-button-save"><i class="xlpfont xlp-file-upload"></i><span style="margin-left:3px;">杞瓨鍚庝笅杞?/span></li>
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				$button.css({ "margin-right": "10px" });
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="xunlei-button pl-button-init"><i class="xlpfont xlp-download"></i><span style="font-size:13px;margin-left:6px;">鐐规垜鐐逛寒</span></div>`);
			$button.click(base.showInitDialog);
			base.waitForKeyElements(config.$xunlei.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				element.prepend($button);
			})
			base.waitForKeyElements(config.$xunlei.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				$button.css({ "margin-right": "10px" });
				element.prepend($button);
			})
		},
		getToken() {
			$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鐘舵€亊</div>`);
			let credentials = {}, captcha = {};
			for (let i = 0; i < localStorage.length; i++) {
				if (/^credentials_/.test(localStorage.key(i))) {
					credentials = base.getStorage(localStorage.key(i));
					base.setStorage("");
				}
				if (/^captcha_[\w]{16}/.test(localStorage.key(i))) {
					captcha = base.getStorage(localStorage.key(i));
				}
			}
			let deviceid = /(\w{32})/.exec(base.getStorage("deviceid").split(","))[0];
			let token = {
				credentials,
				captcha,
				deviceid
			};
			return token;
		},
		async getFileUrl(item, index, token) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};
				let res = await base.get(config.$xunlei.api.getLink + item.id, { "Authorization": `${token.credentials.token_type} ${token.credentials.access_token}`, "Content-Type": "application/json", "X-Captcha-Token": token.captcha.token, "X-Device-Id": token.deviceid });
				if (res.web_content_link) {
					return {
						index,
						downloadUrl: res.web_content_link
					};
				} else if (res?.error_code == 9) {
					return {
						index,
						downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屾湇鍔″櫒璇达細椤甸潰楠岃瘉杩囨湡浜嗭紝鍒锋柊鍚庡啀鑾峰彇鍚"
					};
				} else {
					return {
						index,
						downloadUrl: `鑾峰彇涓嬭浇鍦板潃澶辫触锛?{res?.error_description ? "鏈嶅姟鍣ㄨ锛? + res.error_description + "銆? : "鍒锋柊鍚庡啀璇曡瘯鍚"}`
					};
				}
			} catch (e) {
				return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏鍚庡啀鍒锋柊椤甸潰鍛");
			}
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => item.kind !== "drive#file")) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			if (temp.page === "home") {
				let token = this.getToken();
				let batchSize = 15;
				let processed = 0;
				$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex, token)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
								return val;
							}));
					});
					let res = await Promise.all(queue);
					res.forEach(val => {
						selectList[val.index].downloadUrl = val.downloadUrl;
					});
					await base.sleep(1000);
				}
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
			temp.links = [selectList, {
				isFolder: v => v.kind === "drive#folder",
				getFileName: v => v.name,
				getFileSize: v => v.size,
				getFileLink: v => v.downloadUrl,
				getFileMirror: v => base.getMirrorList(v, config.$xunlei.api.mirror),
				tooltip: config.$xunlei.dom
			}];
			base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
		},
		getSelectedList() {
			try {
				let doms = document.querySelectorAll(`[class*="SourceListItem__item--"]`), list = [];
				if (doms.length) for (let dom of doms) {
					let domVue = dom.__vue__;
					if (domVue?.selected?.includes?.(domVue.info.id)) list.push(domVue.info);
				}
				return base.clone(list);
			} catch (e) {
				return [];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/$/.test(path)) return "home";
			if (/^\/(s|share)\//.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};

	/**
	 * 澶稿厠缃戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $quark = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("鎻愮ず锛?br/>璇峰嬀閫夎淇濆瓨鍒扮綉鐩樼殑鏂囦欢鍝");
				}
				message.info("鎻愮ず锛?br/>鍥犵綉鐩橀檺鍒讹紝璇蜂繚瀛樺埌鑷繁缃戠洏鍚庡啀鍘讳笅杞藉摝~");
				await base.sleep(500);
				document.querySelector(".share-path").click();
				base.waitForKeyElements(".btn-file.btn-file-primary.confirm-btn", (element) => {
					element.one("click", async () => {
						await base.sleep(1000);
						document.querySelector(".share-save").click();
					})
					return true;
				}, true)
			});
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, { "User-Agent": config.$quark.api.ua.downloadLink }, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						if (error?.status == 412) estatus += ` 鏈嶅姟鍣ㄨ锛氶渶瑕佺櫥褰曟墠鑳戒笅杞絶`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"), { "User-Agent": config.$quark.api.ua.downloadLink, "Referer": `https://${location.host}/`, "Cookie": document.cookie });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"), [`User-Agent:${config.$quark.api.ua.downloadLink}`, `Referer:https://${location.host}/`, `Cookie:${document.cookie}`]);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"), { "user_agent": config.$quark.api.ua.downloadLink, "referrer": `https://${location.host}/`, "cookie": document.cookie });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), { "User-Agent": config.$quark.api.ua.downloadLink, "Cookie": document.cookie });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			base.waitForKeyElements(`[class*="Activity--video-toolbar-activity"]`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`span[class*="SectionHeaderController--icon-download"]`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`div[class*="SectionHeaderController--download-popover"]`, function (tag) {
				tag.find(".ant-popover-arrow").css({ "left": "75%" });
			}, true);
			base.waitForKeyElements(`div[class*="DetailLayout--client-download"]`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".next-box.share-right-side-content", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(`[class*="DetailLayout--container"] .feature-screen`, function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".ant-modal-content .ant-modal-body .right-wrap", function (tag) {
				if (tag.find(".hint").text().includes("瀹㈡埛绔?)) tag.fadeOut();
			}, true);
			base.waitForKeyElements(".pc-member-entrance span.button-text", function (tag) {
				tag.text("浼氬憳涓績");
				let observer = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						if (tag.text() === "浼氬憳涓績") return
						tag.text("浼氬憳涓績");
					});
				});
				let config = { subtree: true, characterData: true, childList: true };
				observer.observe(tag[0], config);
			}, true);
			base.waitForKeyElements(".pc-member-entrance .tips", function (tag) {
				tag.fadeOut();
			}, true);
			base.waitForKeyElements(".modal .modal-content .halo-animated-background .halo-content .pay-modal .close", function (tag) {
				tag[0].click();
			}, true);
			base.waitForKeyElements(".modal .modal-content .halo-animated-background .halo-content .red-envelope .close", function (tag) {
				tag[0].click();
			}, true);
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$quark !== true) return;
			base.adaptiveThemeOverride([
				["#0d53ff", temp.color],
				["#e6f1ff", `${temp.color}20`],
				["#f0faff", `${temp.color}20`],
				["#7da3ff", `${temp.color}D0`],
				["#ddd", `${temp.color}D0`],
				["17,17,17,.9", base.hexToRgba(`${temp.color}D0`)],
				["40,40,255,.04", base.hexToRgba(`${temp.color}20`)],
				["#f7f7ff", "transparent"],
				["238,247,255,0", base.hexToRgba(`${temp.color}00`)],
			]);
			base.addStyle(`${mount}-quark`, "style", `.file-list .hover-oper .hover-transparent-bg{background:transparent!important} .ant-checkbox-wrapper .ant-checkbox-checked .ant-checkbox-inner,.ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner:after{background-color:${temp.color}!important}`);
		},
		svg: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNiA5bDIgMiAyLTJ6Ii8+PHBhdGggZD0iTTExIDVoMS41NTNjLjg1IDAgMS4xNi4wOTMgMS40Ny4yNjcuMzExLjE3NC41NTYuNDMuNzIyLjc1Ni4xNjYuMzI2LjI1NS42NS4yNTUgMS41NHY0Ljg3M2MwIC44OTItLjA4OSAxLjIxNS0uMjU1IDEuNTQtLjE2Ni4zMjctLjQxLjU4My0uNzIyLjc1Ny0uMzEuMTc0LS42Mi4yNjctMS40Ny4yNjdIMy40NDdjLS44NSAwLTEuMTYtLjA5My0xLjQ3LS4yNjdhMS43NzggMS43NzggMCAwMS0uNzIyLS43NTZjLS4xNjYtLjMyNi0uMjU1LS42NS0uMjU1LTEuNTRWNy41NjNjMC0uODkyLjA4OS0xLjIxNS4yNTUtMS41NC4xNjYtLjMyNy40MS0uNTgzLjcyMi0uNzU3LjMxLS4xNzQuNjItLjI2NyAxLjQ3LS4yNjdIOCIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTggMXY5Ii8+PC9nPjwvc3ZnPg==",
		addButton() {
			base.waitForKeyElements(config.$quark.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="ant-dropdown-trigger pl-button" style="display: inline-block;">
					<div class="ant-upload ant-upload-select ant-upload-select-text">
						<ul class="pl-dropdown-menu" style="top:35px">
							<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
							<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
							<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
						</ul>
						<button type="button" class="ant-btn ant-btn-primary quark-button">
							<img class="btn-icon" src="${temp.main.svg}">
							<span>涓嬭浇鍔╂墜</span>
						</button>
					</div>
				</div>`);
				$button.css({ "margin-right": "16px" });
				element.prepend($button);
			})
			base.waitForKeyElements(config.$quark.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<button type="button" class="ant-btn btn-file ant-btn-primary pl-button quark-button">
					<img class="btn-icon" src="${temp.main.svg}"><span>涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="bottom:22px;left:0">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</button>`);
				$button.css({ "height": "36px", "margin-left": "16px", "border-radius": "6px", "display": "inline-block" });
				element.append($button);
			})
		},
		addInitButton() {
			base.waitForKeyElements(config.$quark.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<button type="button" class="ant-btn ant-btn-primary quark-button pl-button-init"><img class="btn-icon" src="${temp.main.svg}"><span>鐐规垜鐐逛寒</span></button>`);
				$button.css({ "margin-right": "16px", "display": "inline-block" });
				$button.click(base.showInitDialog);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$quark.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<button type="button" class="ant-btn btn-file ant-btn-primary pl-button-init quark-button"><img class="btn-icon" src="${temp.main.svg}"><span>鐐规垜鐐逛寒</span></button>`);
				$button.css({ "height": "36px", "margin-left": "16px", "border-radius": "6px", "display": "inline-block" });
				$button.click(base.showInitDialog);
				element.append($button);
			})
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => !item.file)) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			if (temp.page === "home") {
				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 鑾峰彇褰撳墠鎵规鏂囦欢
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					// 鍙戣捣璇锋眰鑾峰彇閾炬帴
					let res = await base.post(config.$quark.api.getLink, { "fids": fids }, { "Content-Type": "application/json", "User-Agent": config.$quark.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏~<br/>浠ｇ爜锛? + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`鎻愮ず锛?br/>瓒呭嚭娓稿鍙幏鍙栧ぇ灏忛檺鍒?br/>璇风櫥褰曞悗鑾峰彇鍝${item?.file_name ? `<br/>鏂囦欢锛?{item.file_name}` : ""}`);
					}
					if (res?.code !== 0) {
						return message.error("鎻愮ず锛?br/>鑾峰彇閾炬帴澶辫触浜唦<br/>浠ｇ爜锛? + res.code);
					}
					// 鍚堝苟鍝嶅簲鏁版嵁
					if (res?.data) {
						data.push(...res.data);
					}
					// 鏇存柊澶勭悊杩涘害
					processed += batch.length;
					// 鏇存柊UI鏄剧ず
					$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
					// 璇锋眰闂撮殧鑺傛祦
					await base.sleep(1000);
				}
				temp.links = [data, {
					isFolder: v => v.file === false,
					getFileName: v => v.file_name,
					getFileSize: v => v.size,
					getFileLink: v => v.download_url,
					convert: {
						aria2: `--header "User-Agent:${config.$quark.api.ua.downloadLink}" --header "Referer:https://${location.host}/" --header "Cookie:${document.cookie}"`,
						curl: `-A "${config.$quark.api.ua.downloadLink}" -e "https://${location.host}/" -b "${document.cookie}"`,
						bitcomet: `user_agent=${encodeURIComponent(config.$quark.api.ua.downloadLink)}&refer=${encodeURIComponent(`https://${location.host}/`)}&cookie=${encodeURIComponent(document.cookie)}`
					},
					tooltip: config.$quark.dom
				}];
				base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
			} else if (temp.page === "share") {
				let pwd_id = unsafeWindow.factStat?.ut?.baseParams?.pwd_id || // fast
					unsafeWindow.factStat?.wa?.customStatParams?.pwd_id || // drive
					location.pathname.match(/^\/(?:s|share)\/([a-zA-Z0-9]+)/)?.[1]; // 鍏滃簳
				if (!pwd_id) return message.error("閿欒锛?br/>鏃犳硶鎻愬彇鍒嗕韩 ID~");

				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 鑾峰彇褰撳墠鎵规鏂囦欢
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					let fids_token = batch.map(item => item.share_fid_token);
					// 鍙戣捣璇锋眰鑾峰彇閾炬帴
					let res = await base.post(config.$quark.api.getLink, { "fids": fids, "fids_token": fids_token, pwd_id, "stoken": batch[0].stoken }, { "Content-Type": "application/json", "User-Agent": config.$quark.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏~<br/>浠ｇ爜锛? + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`鎻愮ず锛?br/>瓒呭嚭娓稿鍙幏鍙栧ぇ灏忛檺鍒?br/>璇风櫥褰曞悗鑾峰彇鍝${item?.file_name ? `<br/>鏂囦欢锛?{item.file_name}` : ""}`);
					}
					if (res?.code !== 0) return message.error("鎻愮ず锛?br/>鑾峰彇閾炬帴澶辫触浜唦<br/>浠ｇ爜锛? + res.code);
					// 鍚堝苟鍝嶅簲鏁版嵁
					if (res?.data) {
						data.push(...res.data);
					}
					// 鏇存柊澶勭悊杩涘害
					processed += batch.length;
					// 鏇存柊UI鏄剧ず
					$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
					// 璇锋眰闂撮殧鑺傛祦
					await base.sleep(1000);
				}
				temp.links = [data, {
					isFolder: v => v.file === false,
					getFileName: v => v.file_name,
					getFileSize: v => v.size,
					getFileLink: v => v.download_url,
					convert: {
						aria2: `--header "User-Agent:${config.$quark.api.ua.downloadLink}" --header "Referer:https://${location.host}/" --header "Cookie:${document.cookie}"`,
						curl: `-A "${config.$quark.api.ua.downloadLink}" -e "https://${location.host}/" -b "${document.cookie}"`,
						bitcomet: `user_agent=${encodeURIComponent(config.$quark.api.ua.downloadLink)}&refer=${encodeURIComponent(`https://${location.host}/`)}&cookie=${encodeURIComponent(document.cookie)}`
					},
					tooltip: config.$quark.dom
				}];
				base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
		},
		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.getElementsByClassName("file-list")[0];
				let reactObj = base.findReact(reactDom);
				let props = reactObj.props;
				if (props) {
					let stoken = props.stoken || "";
					let fileList = props.list || [];
					let selectedKeys = props.selectedRowKeys || [];
					fileList.forEach(function (val) {
						if (selectedKeys.includes(val.fid)) {
							selectedList.push({ ...val, stoken });
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/(list)/.test(path)) return "home";
			if (/^\/(s|share)\//.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};

	/**
	 * UC缃戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $uc = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("鎻愮ず锛?br/>璇峰嬀閫夎淇濆瓨鍒扮綉鐩樼殑鏂囦欢鍝");
				}
				message.info("鎻愮ず锛?br/>鍥犵綉鐩橀檺鍒讹紝璇蜂繚瀛樺埌鑷繁缃戠洏鍚庡啀鍘讳笅杞藉摝~");
				await base.sleep(500);
				document.querySelector(".file-info_r").click();
			});
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, { "User-Agent": config.$uc.api.ua.downloadLink }, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						if (error?.responseText?.includes?.("require login")) estatus += ` 鏈嶅姟鍣ㄨ锛氶渶瑕佺櫥褰曟墠鑳戒笅杞絶`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"), { "User-Agent": config.$uc.api.ua.downloadLink, "Referer": `https://${location.host}/`, "Cookie": document.cookie });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"), [`User-Agent:${config.$uc.api.ua.downloadLink}`, `Referer:https://${location.host}/`, `Cookie:${document.cookie}`]);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"), { "user_agent": config.$uc.api.ua.downloadLink, "referrer": `https://${location.host}/`, "cookie": document.cookie });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), { "User-Agent": config.$uc.api.ua.downloadLink, "Cookie": document.cookie });
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			base.waitForKeyElements(`[class*="VideoDetail--content-footer"]`, function (tag) {
				tag.children().each(function () {
					let $child = $(this);
					if ($child.text().includes("鎵嬫満瀹㈡埛绔?)) {
						$child.hide();
					}
				});
			}, true);
			base.waitForKeyElements(`[class*="PCLandingBanner--ad-block"]`, function (tag) {
				tag.hide();
			}, true);
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$uc !== true) return;
			base.adaptiveThemeOverride([
				["#12161a", temp.color],
				["#e6f1ff", `${temp.color}20`],
				["#f0faff", `${temp.color}20`],
				["#7da3ff", `${temp.color}D0`],
				["#ddd", `${temp.color}D0`],
				["17,17,17,.9", base.hexToRgba(`${temp.color}D0`)],
				["40,40,255,.04", base.hexToRgba(`${temp.color}20`)],
				["#f7f7ff", "transparent"],
				["238,247,255,0", base.hexToRgba(`${temp.color}00`)],
			]);
			base.addStyle(`${mount}-uc`, "style", `.file-list .hover-oper .hover-transparent-bg{background:transparent!important}`);
		},
		svg: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+",
		addButton() {
			base.waitForKeyElements(config.$uc.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="ant-dropdown-trigger pl-button">
					<button type="button" class="uc-button ant-btn btn-file ant-btn-primary">
						<img class="uc-btn-icon" src="${temp.main.svg}"><span>涓嬭浇鍔╂墜</span>
					</button>
					<ul class="pl-dropdown-menu" style="top:39px;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				$button.css({ "margin-right": "10px", "display": "inline-block" });
				element.prepend($button);
			})
			base.waitForKeyElements(config.$uc.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="ant-dropdown-trigger pl-button">
					<button type="button" class="uc-button ant-btn btn-file ant-btn-primary" style="height:40px;">
						<img class="uc-btn-icon" src="${temp.main.svg}"><span>涓嬭浇鍔╂墜</span>
					</button>
					<ul class="pl-dropdown-menu">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				$button.css({ "margin-left": "10px", "display": "inline-block" });
				element.append($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="ant-dropdown-trigger pl-button-init"><button type="button" class="uc-button ant-btn btn-file ant-btn-primary" style="height:40px;"><img class="uc-btn-icon" src="${temp.main.svg}"><span>鐐规垜鐐逛寒</span></button></div>`);
			$button.click(base.showInitDialog);
			base.waitForKeyElements(config.$uc.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				$button.css({ "margin-right": "10px", "display": "inline-block" });
				element.prepend($button);
			})
			base.waitForKeyElements(config.$uc.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				$button.css({ "margin-left": "10px", "display": "inline-block" });
				element.append($button);
			})
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => !item.file)) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			if (temp.page === "home") {
				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 鑾峰彇褰撳墠鎵规鏂囦欢
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					// 鍙戣捣璇锋眰鑾峰彇閾炬帴
					let res = await base.post(config.$uc.api.getLink, { "fids": fids }, { "Content-Type": "application/json", "User-Agent": config.$uc.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏~<br/>浠ｇ爜锛? + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`鎻愮ず锛?br/>瓒呭嚭娓稿鍙幏鍙栧ぇ灏忛檺鍒?br/>璇风櫥褰曞悗鑾峰彇鍝${item?.file_name ? `<br/>鏂囦欢锛?{item.file_name}` : ""}`);
					}
					if (res?.code !== 0) {
						return message.error(`鎻愮ず锛?br/>鑾峰彇閾炬帴澶辫触浜唦<br/>${res.code ? res.code : ""} ${res.message ? res.message : ""}`);
					}
					// 鍚堝苟鍝嶅簲鏁版嵁
					if (res?.data) {
						data.push(...res.data);
					}
					// 鏇存柊澶勭悊杩涘害
					processed += batch.length;
					// 鏇存柊UI鏄剧ず
					$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
					// 璇锋眰闂撮殧鑺傛祦
					await base.sleep(1000);
				}
				temp.links = [data, {
					isFolder: v => v.file === false,
					getFileName: v => v.file_name,
					getFileSize: v => v.size,
					getFileLink: v => v.download_url,
					convert: {
						aria2: `--header "User-Agent:${config.$uc.api.ua.downloadLink}" --header "Referer:https://${location.host}/" --header "Cookie:${document.cookie}"`,
						curl: `-A "${config.$uc.api.ua.downloadLink}" -e "https://${location.host}/" -b "${document.cookie}"`,
						bitcomet: `user_agent=${encodeURIComponent(config.$uc.api.ua.downloadLink)}&refer=${encodeURIComponent(`https://${location.host}/`)}&cookie=${encodeURIComponent(document.cookie)}`
					},
					tooltip: config.$uc.dom
				}];
				base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
			} else if (temp.page === "share") {
				let pwd_id = unsafeWindow.factStat?.ut?.baseParams?.pwd_id || // fast
					unsafeWindow.factStat?.wa?.customStatParams?.pwd_id || // drive
					location.pathname.match(/^\/(?:s|share)\/([a-zA-Z0-9]+)/)?.[1]; // 鍏滃簳
				if (!pwd_id) return message.error("閿欒锛?br/>鏃犳硶鎻愬彇鍒嗕韩 ID~");

				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 鑾峰彇褰撳墠鎵规鏂囦欢
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					let fids_token = batch.map(item => item.share_fid_token);
					// 鍙戣捣璇锋眰鑾峰彇閾炬帴
					let res = await base.post(config.$uc.api.getLink, { "fids": fids, "fids_token": fids_token, pwd_id, "stoken": batch[0].stoken }, { "Content-Type": "application/json", "User-Agent": config.$uc.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏~<br/>浠ｇ爜锛? + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`鎻愮ず锛?br/>瓒呭嚭娓稿鍙幏鍙栧ぇ灏忛檺鍒?br/>璇风櫥褰曞悗鑾峰彇鍝${item?.file_name ? `<br/>鏂囦欢锛?{item.file_name}` : ""}`);
					}
					if (res?.code !== 0) return message.error("鎻愮ず锛?br/>鑾峰彇閾炬帴澶辫触浜唦<br/>浠ｇ爜锛? + res.code);
					// 鍚堝苟鍝嶅簲鏁版嵁
					if (res?.data) {
						data.push(...res.data);
					}
					// 鏇存柊澶勭悊杩涘害
					processed += batch.length;
					// 鏇存柊UI鏄剧ず
					$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
					// 璇锋眰闂撮殧鑺傛祦
					await base.sleep(1000);
				}
				temp.links = [data, {
					isFolder: v => v.file === false,
					getFileName: v => v.file_name,
					getFileSize: v => v.size,
					getFileLink: v => v.download_url,
					convert: {
						aria2: `--header "User-Agent:${config.$uc.api.ua.downloadLink}" --header "Referer:https://${location.host}/" --header "Cookie:${document.cookie}"`,
						curl: `-A "${config.$uc.api.ua.downloadLink}" -e "https://${location.host}/" -b "${document.cookie}"`,
						bitcomet: `user_agent=${encodeURIComponent(config.$uc.api.ua.downloadLink)}&refer=${encodeURIComponent(`https://${location.host}/`)}&cookie=${encodeURIComponent(document.cookie)}`
					},
					tooltip: config.$uc.dom
				}];
				base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
		},
		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.getElementsByClassName("file-list")[0];
				let reactObj = base.findReact(reactDom);
				let props = reactObj.props;
				if (props) {
					let stoken = props.stoken || "";
					let fileList = props.list || [];
					let selectedKeys = props.selectedRowKeys || [];
					fileList.forEach(function (val) {
						if (selectedKeys.includes(val.fid)) {
							selectedList.push({ ...val, stoken });
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/(list)/.test(path)) return "home";
			if (/^\/(s|share)\//.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};

	/**
	 * 123浜戠洏
	 * @author 娌瑰皬鐚?	 * @author hmjz100
	 */
	let $123pan = {
		addPageListener() {
			$doc.on("click", ".listener-api-download.enhance", async function (e) {
				e.preventDefault();
				var status = base._EventFactory(e);
				var file = {
					index: status.item.data("index"),
					link: status.item.data("link"),
					name: status.item.data("name"),
					size: status.item.data("size") || 0,
				}
				base._resetData(file.index);

				// UI 鍒濆鍖?				status.down_normal.hide();
				status.down_enhance.hide();
				status.down_idm.hide();
				status.link_message.hide();
				status.link_copy.hide();

				status.down_enhance_downing.find(".stop").show();
				status.down_enhance_downing.show();

				let startTime = Date.now();
				let lastTime = startTime;
				let lastLoaded = 0;

				let emaSpeed = 0;
				var tau = 2; // 鏃堕棿甯告暟锛堢锛夛紝鏁板€艰秺澶ч€熷害鏄剧ず瓒婂钩绋筹紝瓒婂皬瓒婄伒鏁忋€傚缓璁?1.5 - 3 涔嬮棿銆?
				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 鐬椂鑰楁椂锛堢锛?						var insSpeed = (loaded - lastLoaded) / insDiff; // 鐬椂閫熷害锛圔/s锛?						var avgDiff = (time - startTime) / 1000 || 0.1; // 鎬昏€楁椂锛堢锛?						var avgSpeed = loaded / avgDiff; // 鍏ㄥ眬骞冲潎閫熷害锛圔/s锛?
						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 绗竴娆￠噰鏍凤紝鐩存帴璧嬪€?						} else {
							// EMA 鍏紡锛氬綋鍓嶅钩婊戝€?= (1 - alpha) * 鏃у€?+ alpha * 褰撳墠鐬椂鍊?							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 鍏滃簳 - 濡傛灉 EMA 閫熷害寮傚父锛屽垯鍙傝€冨叏灞€骞冲潎閫熷害
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/鍧?| ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`涓嬭浇瀹屾垚~ 娴忚鍣ㄤ笅杞芥搴旇寮瑰嚭鏉ヤ簡鍝`);
					})
					.catch(async (error) => {
						base.console.error("銆怢inkSwift銆慏ownload(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 涓嬭浇鍑洪敊~`;
						if (!error?.status) estatus += ` 鏈嶅姟鍣ㄦ湭杩斿洖鐘舵€侊紝鑻ユ槸涓嬭浇涓€娈垫椂闂村悗涓柇锛屽彲鑳芥槸鏈嶅姟鍣ㄨ繑鍥炴枃浠堕暱搴︿笉鍖归厤锛岃閲嶈瘯锛涜嫢鏄洿鎺ヤ腑鏂紝璇锋鏌ユ偍鐨勭綉缁溿€佽剼鏈鐞嗗櫒鎵╁睍鎴栨祻瑙堝櫒~`;
						if (error?.status == 403) estatus += ` 鏈嶅姟鍣ㄨ锛氶摼鎺ュ凡杩囨湡锛屽叧闂獥鍙ｉ噸鏂拌幏鍙栬瘯璇曞惂~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 鏈嶅姟璇达細閾炬帴宸茶 IDM 鎹曡幏~`;
						status.down_enhance_downing.find(".pl-progress .text").html(estatus);
						status.down_enhance_downing.find(".pl-progress .text").css("white-space", "break-spaces");
					})
			});
			$doc.on("click", ".listener-idm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToIDM(target.data("link"), target.data("filename"), target.data("filesize"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐?").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-aria2-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToAria2(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-bitcomet-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToBitcomet(target.data("link"), target.data("filename"));
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
			$doc.on("click", ".listener-abdm-download", async function (e) {
				let target = $(e.currentTarget);
				if (target.attr("data-processing") === "true") return;
				target.attr("data-processing", "true");
				let originalHtml = target.html();
				target.find(".pl-icon").remove();
				target.find(".pl-loading").remove();
				target.prepend(base.createLoading());
				let res = await base.sendLinkToABDM(target.data("link"), target.data("filename"), undefined);
				if (res === "success") {
					target.removeClass("pl-btn-danger").html("鍙戦€佹垚鍔熷暒!蹇幓鐪嬬湅鍚").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("鍙戦€佸け璐ワ紝妫€鏌ヤ竴涓嬫偍鐨勯厤缃俊鎭摝!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			// 鏃х増 鍒嗕韩 鐧诲綍鎸夐挳
			base.waitForKeyElements(".cent > .cent-not-login > .ant-btn", (tag) => {
				if (tag.hasClass("reg") || tag.hasClass("log")) return;
				tag.addClass("reg");
				tag.removeClass("loginRight");
				tag.find("span").text("娉ㄥ唽");
				if (tag.next().hasClass("log")) return;
				let button = $(`<button type="button" class="ant-btn ant-btn-default ant-btn-two-chinese-chars log loginRight" style="width:auto!important;height:auto!important;margin-left:10px!important"><span>鐧诲綍</span></button>`);
				button.on("click", () => {
					let login = new URL(`https://login.123pan.com/centerlogin`);
					login.searchParams.set("redirect_url", location.href);
					location.href = login;
				});
				tag.after(button);
			});
			// 鏃х増 鍒嗕韩 鎸夐挳鍘婚櫎鏂囨湰
			base.waitForKeyElements(`.rightInfo .register:not(.pl-button, .pl-button-init),
				.homeClass > div > .ant-dropdown-trigger:not(.pl-button, .pl-button-init),
				.homeClass > div > .sysbut`, function (tag) {
				let hasTextNode = false;
				tag.contents().each(function () {
					if (this.nodeType === 3 && $.trim(this.textContent)) {
						hasTextNode = true;
						return;
					}
				});
				if (!hasTextNode) return;
				tag.css({ "width": "38px" });
				tag.contents().each(function () {
					if (this.nodeType === 3) {
						$(this).remove();
					}
				});
				tag.find("svg").css({ "margin-right": "0" });
			});
			// 鏂扮増 鍒嗕韩 鐧诲綍鎸夐挳
			base.waitForKeyElements(".share-header_center > .share-header_center-not-login > .ant-btn", (tag) => {
				if (tag.hasClass("reg") || tag.hasClass("log")) return;
				tag.removeClass("ant-btn-variant-solid").addClass("ant-btn-variant-outlined");
				tag.addClass("ant-btn-two-chinese-chars").addClass("reg");
				tag.find("span").text("娉ㄥ唽");
				if (tag.next().hasClass("log")) return;
				let button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid loginRight mfy-button ant-btn-two-chinese-chars log" style="margin-left:10px!important"><span>鐧诲綍</span></button>`);
				// 鍔犱釜璺宠浆鍒板師椤甸潰涔熶笉闅惧惂锛?				button.on("click", () => {
					let login = new URL(`https://login.123pan.com/centerlogin`);
					login.searchParams.set("redirect_url", location.href);
					location.href = login;
				});
				tag.after(button);
				try {
					let container = tag.closest(".share-header_center-not-login");
					if (container.length && !container.data("logObserverAttached")) {
						container.data("logObserverAttached", true);
						let observer = new MutationObserver((mutations) => {
							for (let m of mutations) {
								if (!m.removedNodes) continue;
								for (let n of m.removedNodes) {
									if (!(n instanceof HTMLElement)) continue;
									// 濡傛灉琚Щ闄ょ殑鑺傜偣鏄敞鍐屾寜閽垨鍏跺寘鍚敞鍐屾寜閽殑瀹瑰櫒锛屽垯娓呯悊鐧诲綍鎸夐挳
									if (n.classList && (n.classList.contains("reg") || n.querySelector && n.querySelector(".reg"))) {
										try { container.find(".log").remove(); } catch (e) { }
									}
								}
							}
						});
						observer.observe(container[0], { childList: true, subtree: true });
						container.data("logObserver", observer);
					}
				} catch (e) { }
			});
			// 鏂扮増 鍒嗕韩 瓒呴檺鐧诲綍
			base.waitForKeyElements(".login-footer-240828", (tag) => {
				if (tag.find(".replaced").length) return;
				tag.children().each(function () {
					let $child = $(this);
					if ($child.hasClass("pointer-text")) {
						let button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid loginRight mfy-button replaced"><span>${$child.text()}</span></button>`);
						button.on("click", () => {
							if ($child.text().includes("鐧诲綍")) {
								let login = new URL(`https://login.123pan.com/centerlogin`);
								login.searchParams.set("redirect_url", location.href);
								location.href = login;
							} else {
								return $child.click();
							}
						});
						$child.after(button);
						$child.hide();
					}
				});
			}, true);
			// 鏃х増 涓婚〉 鎾斁鍣ㄤ細鍛樺箍鍛?			base.waitForKeyElements(".new-menu-item-image, .special-menu-item-container-migration--label, .sider-member-btn, .video-new-user-tips", (tag) => {
				if (tag.is(":hidden")) return;
				tag.hide();
			}, true);
			// 鏂扮増 涓婚〉 椤舵爮浼氬憳骞垮憡
			base.waitForKeyElements(`.frontend-layout-header-right > span > [alt^="buttonMall"]`, (tag) => {
				if (tag.parent().is(":hidden")) return;
				tag.parent().hide();
				let button = $(`<div class="frontend-layout-header-right-button-invite-new">浼氬憳涓績</div>`);
				button.on("click", () => { tag.click() });
				tag.parent().after(button);
			}, true);
			// 鍒嗕韩 鎵嬫満浜岀淮鐮?			base.waitForKeyElements(".rightInfo .qrcode_btn", function (tag) {
				tag.hide();
			}, true);
			base.waitForKeyElements(`#iqiyi-ad-overlay`, function (tag) {
				tag.remove();
				base.setStorage("iqiyi_ad_closed", {
					date: '2099-12-31T23:59:59.999Z',
					timestamp: Date.now()
				});
			}, true);
			// 涓洪〉闈富鍔ㄦ坊鍔?notoken 鍙傛暟锛坱oken 澶暱褰卞搷瑙傛劅锛屾晠涓嶆坊鍔狅級锛屼互閬垮厤琚柊鐗堥〉闈㈠睅灞变唬鐮佹悶寰椾簩娆″埛鏂?			setInterval(() => {
				let url = new URL(location);
				if (!url.searchParams.has("notoken") && !url.searchParams.has("token")) {
					url.searchParams.delete("token");
					url.searchParams.set("notoken", "1");
					history.replaceState({}, "", url);
				}
			}, 500)
		},
		beautifyPage() {
			if (base.getValue("setting_ui_theme").custom.$123pan !== true) return;
			base.adaptiveThemeOverride([
				["#597dfc", temp.color],
				["#5a7cfc", temp.color],
				["#2A82E4", temp.color],
				["#51a1f0", temp.color],
				["#597DFC", temp.color],
				["#40a9ff", temp.color],
				["#3c80ff", temp.color],
				["#3C80FF", temp.color],
				["#1677ff", temp.color],
				["#1890ff", temp.color],
				["#0958d9", temp.color],
				["#F0F8FF", `${temp.color}10`],
				["#f0f9ff", `${temp.color}20`],
				["#F2F5FF", `${temp.color}20`],
				["#C5E1FF", `${temp.color}20`],
				["#2961D9", `${temp.color}20`],
				["#b8d8ff", `${temp.color}20`],
				["#325cf0", `${temp.color}D0`],
				["#66A1FF", `${temp.color}D0`],
				["#69b1ff", `${temp.color}D0`],
				["60, 128, 255", base.hexToRgba(temp.color)],
				["42, 130, 228", base.hexToRgba(temp.color)],
				["89, 125, 252", base.hexToRgba(temp.color)],
			]);
		},
		getToken() {
			$doc.find(".loading-popup .loading-title").html(`浠ょ墝鑾峰彇涓璥);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇浠ょ墝~</div>`);
			let token = base.getStorage("authorToken");
			return token;
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("鎻愮ず锛?br/>璇峰嬀閫夎涓嬭浇鐨勬枃浠跺摝~");
			if (selectList.every(item => item.Type !== 0)) return message.error("鎻愮ず锛?br/>璇锋墦寮€鏂囦欢澶瑰悗鍐嶅嬀閫夋枃浠秪");
			if (temp.page === "home") {
				let token = this.getToken();
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.Type === 0);
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex, token)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
								return val;
							}));
					});
					let res = await Promise.all(queue);
					res.forEach(val => {
						selectList[val.index].DownloadUrl = val.downloadUrl;
					});
					await base.sleep(1000);
				}
				temp.links = [selectList, {
					isFolder: v => v.Type !== 0,
					getFileName: v => v.FileName,
					getFileSize: v => v.Size,
					getFileLink: v => v.DownloadUrl || v.DownloadURL,
					tooltip: config.$123pan.dom
				}]
				base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
			} else if (temp.page === "share") {
				let token = this.getToken();
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.Type === 0);
				let pathSplit = location.pathname.split("/").filter(Boolean);
				let ShareKey = pathSplit[1];
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					$doc.find(".loading-popup .loading-title").html(`閾炬帴鑾峰彇涓璥);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>姝ｅ湪鑾峰彇鏂囦欢瀵瑰簲鐨勪笅杞介摼鎺</div>`);
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex, token, ShareKey)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>宸茶幏鍙?${processed} / ${selectList.length} 涓摼鎺</div>`);
								return val;
							}));
					});
					let res = await Promise.all(queue);
					res.forEach(val => {
						selectList[val.index].DownloadUrl = val.downloadUrl;
					});
					await base.sleep(1000);
				}
				temp.links = [selectList, {
					isFolder: v => v.Type !== 0,
					getFileName: v => v.FileName,
					getFileSize: v => v.Size,
					getFileLink: v => v.DownloadUrl || v.DownloadURL,
					tooltip: config.$123pan.dom
				}]
				base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
			} else {
				return message.error("鎻愮ず锛?br/>椤甸潰閿欒~");
			}
		},
		async getFileUrl(item, index, token, ShareKey) {
			let res = null;
			if (ShareKey) {
				res = await base.post(config.$123pan.api.getShareLink, { "ShareKey": ShareKey, "FileID": item.FileId, "S3keyFlag": item.S3KeyFlag, "Size": item.Size, "Etag": item.Etag }, { "Content-Type": "application/json", "Authorization": `Bearer ${token}`, "Platform": "ios" });
			} else {
				res = await base.post(config.$123pan.api.getLink, { "driveId": 0, "etag": item.Etag, "fileId": item.FileId, "s3keyFlag": item.S3KeyFlag, "type": item.Type, "fileName": item.FileName, "size": item.Size }, { "Content-Type": "application/json", "Authorization": `Bearer ${token}`, "Platform": "ios" });
			}
			if (res.data?.DownloadUrl || res.data?.DownloadURL) {
				let url = res.data.DownloadUrl ? res.data.DownloadUrl : res.data?.DownloadURL;
				let surl = new URL(url).searchParams.get("params");
				if (surl) url = base.decodeBase(surl);
				// url = await base.getFinalUrl(url);
				return {
					index,
					downloadUrl: url
				};
			} else if (res?.code == 5112) {
				return message.error("鎻愮ず锛?br/>璇峰厛鐧诲綍缃戠洏鍚庡啀鑾峰彇閾炬帴鍛");
			} else if (res?.code == 5113) {
				return {
					index,
					downloadUrl: "鑾峰彇涓嬭浇鍦板潃澶辫触锛屾湇鍔″櫒璇达細鏈湀鍏嶈垂娴侀噺涓嶈冻锛岃寮€閫氱綉鐩樹細鍛榽"
				};
			} else {
				return {
					index,
					downloadUrl: `鑾峰彇涓嬭浇鍦板潃澶辫触锛?{res?.message ? "鏈嶅姟鍣ㄨ锛? + res.message + "銆? : "鍒锋柊鍚庡啀璇曡瘯鍚"}`
				};
			}
		},
		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = $(".ant-table-wrapper, .tiled-list, .file-list, .single-file-sharing-container-content")[0];
				let reactObj = base.findReact(reactDom);
				let props = reactObj.pendingProps;
				if (props) {
					let fileList = props?.dataSource || props?.loadedFileList || props?.files || [];
					let selectedKey = props?.rowSelection?.selectedRowKeys || [];
					fileList.forEach(function (val) {
						if (val?.checked === true) {
							selectedList.push(val);
						} else if (selectedKey.includes(val.FileId)) {
							selectedList.push(val);
						}
					});
					if (props?.file?.S3KeyFlag) selectedList.push(props.file);
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},
		addButton() {
			base.waitForKeyElements(config.$123pan.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-dropdown-trigger mfy-button upload-button pl-button color-button" style="user-select: text !important;">
					<svg class="icon home-operator-icon-upload" aria-hidden="true"><use xlink:href="#general_download_16_1"></use></svg>
					<span>涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:23px">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</button>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$123pan.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="register pl-button color-button">
					<svg class="icon" aria-hidden="true" style="color:rgb(255, 255, 255);margin-right:5px;"><use xlink:href="#top_btn_download2"></use></svg>涓嬭浇鍔╂墜
					<ul class="pl-dropdown-menu" style="top:37px">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</div>`);
				$button.css({ "width": "100px" });
				element.append($button);
			})
			base.waitForKeyElements(config.$123pan.mount.shareNew, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid mfy-button pl-button color-button" style="user-select: text !important;">
					<svg class="icon" aria-hidden="true" style="color: rgb(255, 255, 255);"><use xlink:href="#general_download_16_1"></use></svg>
					<span>涓嬭浇鍔╂墜</span>
					<ul class="pl-dropdown-menu" style="top:20px">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>鑾峰彇涓嬭浇閾炬帴</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>鍔╂墜璁剧疆</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>鍔╂墜缇庡寲</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>鏇存柊鏃ュ織</li>
					</ul>
				</button>`);
				$(".single-file-sharing-container-content").css({ "width": "415px" });
				element.append($button);
			})
		},
		addInitButton() {
			base.waitForKeyElements(config.$123pan.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-dropdown-trigger mfy-button upload-button pl-button-init color-button" style="user-select: text !important;">
					<svg class="icon home-operator-icon-upload" aria-hidden="true"><use xlink:href="#general_download_16_1"></use></svg>
					<span>鐐规垜鐐逛寒</span>
				</button>`);
				$button.click(base.showInitDialog);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$123pan.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="register pl-button-init color-button">
					<svg class="icon" aria-hidden="true" style="color:rgb(255, 255, 255);margin-right:5px;"><use xlink:href="#top_btn_download2"></use></svg>鐐规垜鐐逛寒
				</div>`);
				$button.click(base.showInitDialog);
				$button.css({ "width": "100px" });
				element.append($button);
			})
			base.waitForKeyElements(config.$123pan.mount.shareNew, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid mfy-button pl-button-init color-button" style="user-select: text !important;">
					<svg class="icon" aria-hidden="true" style="color: rgb(255, 255, 255);"><use xlink:href="#general_download_16_1"></use></svg>
					<span>鐐规垜鐐逛寒</span>
				</button>`);
				$button.click(base.showInitDialog);
				element.append($button);
			})
		},
		detectPage() {
			let path = location.pathname;
			if (/^\/$/.test(path)) return "home";
			if (/^\/s\//.test(path)) return "share";
			return "";
		},
		async initPanLinker() {
			base.registerMenuCommand();
			if (config.base.num === base.getValue("setting_init").code || config.base.license === base.getValue("setting_init").license) {
				this.addButton();
			} else {
				this.addInitButton();
			}
			this.addPageListener();
		},
	};

	// 涓讳唬鐮?	let main = {
		async init() {
			/**
			 * 鎺у埗鍙拌緭鍑?			 * @author 娌瑰皬鐚?			 * @author hmjz100
			 * @description 鏉ヨ嚜銆愮綉鐩樻櫤鑳借瘑鍒姪鎵嬨€戯紝鏈夋敼鍔?			 */
			base.console.log(`%c %c LinkSwift\n涓€涓熀浜?JavaScript 鐨勭綉鐩樻枃浠朵笅杞藉湴鍧€鑾峰彇宸ュ叿\n浠撳簱锛歨ttps://github.com/hmjz100/LinkSwift\n鐗堟湰锛?{info.version}\n棰嗗煙锛?{(window.self !== window.top ? "[iframe] " : "") + (document.title ? (document.title + " (" + location.origin + location.pathname + ")") : location.href)}`, `background:url(${info.icon}) center center no-repeat;background-size:12px;padding:3px`, `padding:2px`);
			// 鍒涘缓鎸傝浇鐐?			let mountElem = $(`<${mount} class="${mount}" />`);
			temp.mount = mountElem;

			base.waitForKeyElements(`html:not(:has(> .${mount})) head`, (element) => {
				if ($(`.${mount}`).length > 0) return;
				element.after(temp.mount);
			})

			// 鍒ゆ柇椤甸潰鍦板潃锛屽畾涔変富鎵ц
			if (/(pan|yun).baidu.com/.test(location.host)) temp.main = $baidu;
			else if (/openapi.baidu.com\/oauth/.test(location.href)) temp.main = $baiduAuthorize;
			else if (/www.(aliyundrive|alipan).com/.test(location.host)) temp.main = $aliyun;
			else if (/(yun|caiyun).139.com/.test(location.host)) temp.main = $mcloud;
			else if (/cloud.189.cn/.test(location.host)) temp.main = $tcloud;
			else if (/pan.xunlei.com/.test(location.host)) temp.main = $xunlei;
			else if (/pan.quark.cn/.test(location.host)) temp.main = $quark;
			else if (/drive.uc.cn/.test(location.host)) temp.main = $uc;
			else if (/(www|login).(123(pan|684|865|952|912).com|123pan.cn)/.test(location.host)) temp.main = $123pan;

			// 鏅鸿兘榛樿璁剧疆
			base.initDefaultConfig();
			// 鍒涘缓缇庡寲鏍峰紡
			base.addPanLinkerStyle();
			// 鍒涘缓鎸夐挳浜嬩欢
			base.addPageListener();
			// 鍒涘缓鎻愮ず淇℃伅鐢ㄧ殑闅愯棌 tip
			base.createTip();
			// 鍒涘缓涓嬭浇鐢ㄧ殑闅愯棌 iframe
			base.createIframe();

			// 杩愯涓荤▼搴?			if ("initPanLinker" in temp.main) temp.main.initPanLinker();
			// 杩愯缁垮寲绋嬪簭
			if ("greenerPage" in temp.main) temp.main.greenerPage();

			// 鑴氭湰鏇存柊鍚庢彁绀烘秷鎭?			let storedVersion = base.getValue("setting_init").version;
			if (!storedVersion || base.isNewerVersion(info.version, storedVersion)) {
				base.waitForKeyElements("body:not(.swal2-shown)", async () => {
					await base.showUpdate();
					let list = base.getValue("setting_init");
					list.version = info.version;
					base.setValue("setting_init", list);
					return true;
				}, true);
			}
			// 鍒涘缓鍥炬爣
			temp.mount.append(`<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
				<symbol id="pl-icon-fa-downward" viewBox="0 0 512 512">
					<path d="M425.199,223.957c-13.303-13.303-34.961-13.303-48.205-0.06l-86.861,85.086V34.133C290.133,15.309,274.824,0,256,0 s-34.133,15.309-34.133,34.133v274.867l-86.801-85.052c-13.312-13.312-34.961-13.312-48.273,0 c-13.312,13.312-13.303,34.97,0,48.273c0.017,0.017,0.034,0.026,0.043,0.043l148.361,146.5c5.726,5.658,13.227,8.482,20.727,8.482 c7.543,0,15.078-2.859,20.787-8.568L425.199,272.23c6.451-6.443,10.001-15.019,10.001-24.132S431.65,230.409,425.199,223.957z"></path>
					<path d="M401.067,443.733H110.933c-18.825,0-34.133,15.309-34.133,34.133S92.109,512,110.933,512h290.133 c18.825,0,34.133-15.309,34.133-34.133S419.883,443.733,401.067,443.733z"></path>
				</symbol>
				<symbol id="pl-icon-fa-plug" viewBox="0 0 384 512">
					<path d="M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"></path>
				</symbol>
				<symbol id="pl-icon-fa-cloud-arrow-down" viewBox="0 0 640 512">
					<path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path>
				</symbol>
				<symbol id="pl-icon-fa-gear" viewBox="0 0 512 512">
					<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path>
				</symbol>
				<symbol id="pl-icon-fa-palette" viewBox="0 0 512 512">
					<path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
				</symbol>
				<symbol id="pl-icon-fa-newspaper" viewBox="0 0 512 512">
					<path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"></path>
				</symbol>
				<symbol id="pl-icon-fa-cloud-arrow-up" viewBox="0 0 640 512">
					<path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
				</symbol>
				<symbol id="pl-icon-fa-copy" viewBox="0 0 448 512">
					<path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"></path>
				</symbol>
				<symbol id="pl-icon-fa-check" viewBox="0 0 448 512">
					<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
				</symbol>
				<symbol id="pl-icon-fa-list-check" viewBox="0 0 512 512">
					<path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
				</symbol>
				<symbol id="pl-icon-fa-x-mark" viewBox="0 0 384 512">
					<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
				</symbol>
				<symbol id="pl-icon-fa-unlock-keyhole" viewBox="0 0 448 512">
					<path d="M224 64c-44.2 0-80 35.8-80 80l0 48 240 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0 0-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0z"></path>
				</symbol>
				<symbol id="pl-icon-fa-star" viewBox="0 0 576 512">
					<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
				</symbol>
				<symbol id="pl-icon-fa-link" viewBox="0 0 640 512">
					<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
				</symbol>
				<symbol id="pl-icon-si-tampermonkey" viewBox="0 0 24 24">
					<path d="M5.955.002C3-.071.275 2.386.043 5.335c-.069 3.32-.011 6.646-.03 9.969.06 1.87-.276 3.873.715 5.573 1.083 2.076 3.456 3.288 5.77 3.105 4.003-.011 8.008.022 12.011-.017 2.953-.156 5.478-2.815 5.482-5.772-.007-4.235.023-8.473-.015-12.708C23.82 2.533 21.16.007 18.205.003c-4.083-.005-8.167 0-12.25-.002zm.447 12.683c2.333-.046 4.506 1.805 4.83 4.116.412 2.287-1.056 4.716-3.274 5.411-2.187.783-4.825-.268-5.874-2.341-1.137-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.948-.99zm11.245 0c2.333-.046 4.505 1.805 4.829 4.116.413 2.287-1.056 4.716-3.273 5.411-2.188.783-4.825-.268-5.875-2.341-1.136-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.949-.99z"/>
				</symbol>
			</svg>`);
		}
	};

	base.console = Object.fromEntries(Object.entries(console).filter(([key, value]) => typeof value === "function").map(([key, value]) => [key, value.bind(console)]));
	main.init();

	// 杩欐槸鍟ワ紵鎴戜笉鍒板晩
	function idontknow(input) {
		let charArray = input.split("");
		// 杩欐槸 Fisher-Yates 娲楃墝绠楁硶鐨勫疄鐜?		for (let i = charArray.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}
		return charArray.join("");
	}
})($ ?? jQuery);
