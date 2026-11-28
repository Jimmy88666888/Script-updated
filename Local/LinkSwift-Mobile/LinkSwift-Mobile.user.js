// ==UserScript==
// @name              LinkSwift 手机版
// @namespace         github.com/Jimmy88666888/LinkSwift-Mobile
// @version           1.1.4-mobile
// @updateURL         https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/LinkSwift-Mobile/LinkSwift-Mobile.user.js
// @downloadURL       https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/LinkSwift-Mobile/LinkSwift-Mobile.user.js
// @author       Jackson Smith
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdvbGRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1OUQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDcwMDtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZCQzAyRDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNCwgLTIpIHNjYWxlKDAuOSkiPjxwYXRoIGQ9Ik0xMDMuNiAxMDcuNGMzLjUtMi4yIDguOS02LjEgMTMuOC0xMi41czcuMy0xMi41IDguNS0xNi41Yy41LTEuNyAyLjItNy41IDIuMi0xNC43IDAtMTAuMS0zLjMtMjUuMS0xNS40LTM2LjgtMTQuNS0xNC0zMi4xLTE0LjMtMzUuNy0xNC4zLTggMC0xNS43IDEuOS0yMi42IDUuMkM0NCAyMyAzNS43IDMxLjQgMzAuOCA0MS43Yy0xLjMgMi44LTQgNC43LTcuMSA1LTQgLjMtNy41IDQuNC04LjkgOS42LS41IDEuOS0xLjYgMy41LTMuMSA0LjdDNC40IDY2LjggMCA3NS43IDAgODVjMCA2LjggMi4zIDEzLjEgNi4xIDE4LjIgNS41IDcuNCAxNC4yIDEyLjIgMjQgMTIuMmg0Ny4xYzQuNCAwIDExLS41IDE4LjMtMy41IDMuMi0xLjQgNS45LTMgOC4xLTQuNXoiIGZpbGw9IiNBMDk5RjAiLz48cGF0aCBkPSJNMTE5LjggNjQuM2MuMS0xNy4xLTEwLjQtMjgtMTIuNS0zMC4xQzk1IDIyLjEgNzkuOSAyMS44IDc2LjkgMjEuOGMtMTcuNiAwLTMzLjMgMTAuNS0zOS45IDI2LjctLjYgMS4zLTEuOCAyLjMtMy40IDIuM2gtLjRjLTUuOCAwLTEwLjYgNC44LTEwLjYgMTAuN3YuNWMwIDEuNC0uOCAyLjYtMS45IDMuM0MxMy40IDY5IDguOCA3Ni44IDguOCA4NWMwIDEyLjIgOS45IDIyLjMgMjIuMiAyMi4zaDQ1LjJjMy42LS4xIDE3LjYtLjkgMjkuNi0xMiAyLjktMi44IDEzLjktMTMuNyAxNC0zMXoiIGZpbGw9IiM1NzRBQjgiLz48cGF0aCBkPSJNMTEwLjggNTcuNGwuMiAzLjNjMCAxLjMtMS4xIDIuNC0yLjMgMi40LTEuMyAwLTIuMy0xLjEtMi4zLTIuNGwtLjEtMi44di0uM2MwLTEuMi45LTIuMiAyLjEtMi4zaC4zYy43IDAgMS4zLjMgMS43LjctLjIuMS4zLjUuNCAxLjR6bS0zLjMtMTAuM2MwIDEuMi0xIDIuMy0yLjIgMi4zaC0uMWMtLjggMC0xLjYtLjUtMi0xLjItNC42LTguMy0xMy4zLTEzLjUtMjIuOC0xMy41LTEuMiAwLTIuMy0xLTIuMy0yLjJ2LS4xYzAtMS4yIDEtMi4zIDIuMi0yLjNoLjFhMzAuMzcgMzAuMzcgMCAwIDEgMTUuOCA0LjRjNC42IDIuOCA4LjQgNi44IDExLjEgMTEuNS4xLjMuMi43LjIgMS4xek04OC4zIDczLjhMNzMuNSA5My4yYy0xLjUgMS45LTMuNSAzLjEtNS43IDMuNWgtLjJjLS40LjEtLjguMS0xLjIuMS0uNiAwLTEuMS0uMS0xLjYtLjItMi4yLS40LTQuMi0xLjctNS42LTMuNUw0NC4zIDczLjljLTItMi42LTIuNS01LjQtMS40LTcuNy4xLS4xLjEtLjIuMi0uMiAxLjItMiAzLjUtMy4yIDYuNC0zLjJoNi42di01LjdjMC02LjggNC43LTEyIDEwLjktMTIgNC44IDAgOC41IDIuNiAxMC4zIDcuMi41IDEuMy0uMiAyLjctMS41IDMuMnMtMi44LS4xLTMuMy0xLjRjLTEuMS0yLjctMi45LTQtNS41LTQtMy41IDAtNiAzLTYgN3Y4LjFjMCAuNS0uMiAxLS42IDEuNC0uNi43LTEuNyAxLjEtMi42IDEuMWgtOC40Yy0xLjMgMC0yIC40LTIuMS43LS4yLjQgMCAxLjMuOSAyLjRMNjMuMSA5MGMuOSAxLjIgMi4xIDEuOCAzLjMgMS44czIuMy0uNiAzLjEtMS43bDE0LjgtMTkuM2MuOS0xLjEgMS4xLTIgLjktMi40LS4yLS4zLS45LS43LTIuMS0uN2gtNy42Yy0uOSAwLTEuNy0uNS0yLjEtMS4yLS4zLS40LS40LS44LS40LTEuMyAwLTEuNCAxLjEtMi41IDIuNS0yLjVoNy42YzMuMSAwIDUuNSAxLjMgNi42IDMuNWwuMy43Yy43IDIuMS4xIDQuNi0xLjcgNi45eiIgZmlsbD0iI2ZmZiIvPjwvZz48Zz48cGF0aCBkPSJNMCAxMDAgUTY0IDExNSAxMjggMTAwIEwxMjggMTI4IEwwIDEyOCBaIiBmaWxsPSIjRDMyRjJGIi8+PHBhdGggZD0iTTAgMTAwIFE2NCAxMTUgMTI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjY0IiB5PSIxMjEiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9InVybCgjZ29sZEdyYWRpZW50KSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9InRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7Ij7liIYg5LiNIOi1t+OAgOe6ryDpnaAg54ixPC90ZXh0PjwvZz48L3N2Zz4=
// @description       [手机专用版] (｡>ᴗ•)✧《也许同类型中最好用？》系列 - 一个基于 JavaScript 的网盘文件下载地址获取工具✨，基于【网盘直链下载助手】修改 | 支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘 | 开源・自用・去广 | 改界面・添功能・修Bug | 既超越原版，亦是同类中最好用版本！👋
// @description:zh-CN [手机专用版] (｡>ᴗ•)✧《也许同类型中最好用？》系列 - 一个基于 JavaScript 的网盘文件下载地址获取工具✨，基于【网盘直链下载助手】修改 | 支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘 | 开源・自用・去广 | 改界面・添功能・修Bug | 既超越原版，亦是同类中最好用版本！👋
// @description:zh-TW [手机专用版] (｡>ᴗ•)✧《也許同類型中最好用？》系列 - 一個基於 JavaScript 的網盤檔案下載地址獲取工具✨，基於【網盤直鏈下載助手】改編 | 支援 百度網盤 / 阿里雲盤 / 中國移動雲盤 / 天翼雲盤 / 迅雷雲盤 / 夸克網盤 / UC網盤 / 123雲盤 八大平台 | 開源・自用・除廣 | 改介面・擴功能・修Bug | 既超越原版，亦是同類中最好用版本！👋
// @description:zh-HK [手机专用版] (｡>ᴗ•)✧《也許同類型中最好用？》系列 - 一個基於 JavaScript 的網盤檔案下載地址獲取工具✨，基於【網盤直鏈下載助手】改編 | 支援 百度網盤 / 阿里雲盤 / 中國移動雲盤 / 天翼雲盤 / 迅雷雲盤 / 夸克網盤 / UC網盤 / 123雲盤 八大平台 | 開源・自用・除廣 | 改介面・擴功能・修Bug | 既超越原版，亦是同類中最好用版本！👋
// @copyright         © 2022 hmjz100
// @license           AGPL-3.0-or-later
// @source            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @website            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @homepageURL            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @homepage            https://github.com/Jimmy88666888/Script-updated/tree/main/LinkSwift-Mobile/
// @support           https://github.com/Jimmy88666888/Script-updated/issues
// @supportURL        https://github.com/Jimmy88666888/Script-updated/issues
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
// @compatible	      Chrome
// @compatible	      Edge
// @compatible	      Firefox
// @compatible	      Safari
// @compatible	      Opera
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

/* ==== 本地化内嵌依赖（开始） ==== */
/* 依赖内嵌：jQuery 3.6.0 / SweetAlert2 11.4.8 / js-md5 0.7.3 / js-sha256 0.11.1（均为 MIT 许可） */
/* 原来由 @require / @resource 从 unpkg 拉取，现全部内嵌，脚本不再请求第三方地址 */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Sweetalert2=t()}(this,function(){"use strict";const q="SweetAlert2:",H=e=>e.charAt(0).toUpperCase()+e.slice(1),i=e=>Array.prototype.slice.call(e),a=e=>{console.warn("".concat(q," ").concat("object"==typeof e?e.join(" "):e))},l=e=>{console.error("".concat(q," ").concat(e))},V=[],N=(e,t)=>{e='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),V.includes(e)||(V.push(e),a(e))},R=e=>"function"==typeof e?e():e,F=e=>e&&"function"==typeof e.toPromise,u=e=>F(e)?e.toPromise():Promise.resolve(e),U=e=>e&&Promise.resolve(e)===e,r={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},W=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],z={},_=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],K=e=>Object.prototype.hasOwnProperty.call(r,e),Y=e=>-1!==W.indexOf(e),Z=e=>z[e],J=e=>{!e.backdrop&&e.allowOutsideClick&&a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)t=n,K(t)||a('Unknown parameter "'.concat(t,'"')),e.toast&&(t=n,_.includes(t)&&a('The parameter "'.concat(t,'" is incompatible with toasts'))),t=n,Z(t)&&N(t,Z(t));var t};var e=e=>{const t={};for(const n in e)t[e[n]]="swal2-"+e[n];return t};const p=e(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),o=e(["success","warning","info","question","error"]),m=()=>document.body.querySelector(".".concat(p.container)),t=e=>{const t=m();return t?t.querySelector(e):null},n=e=>t(".".concat(e)),g=()=>n(p.popup),s=()=>n(p.icon),X=()=>n(p.title),$=()=>n(p["html-container"]),G=()=>n(p.image),Q=()=>n(p["progress-steps"]),ee=()=>n(p["validation-message"]),h=()=>t(".".concat(p.actions," .").concat(p.confirm)),f=()=>t(".".concat(p.actions," .").concat(p.deny));const d=()=>t(".".concat(p.loader)),b=()=>t(".".concat(p.actions," .").concat(p.cancel)),v=()=>n(p.actions),te=()=>n(p.footer),ne=()=>n(p["timer-progress-bar"]),oe=()=>n(p.close),ie=()=>{const e=i(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>{e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex"));return t<e?1:e<t?-1:0});var t=i(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1"!==e.getAttribute("tabindex"));return(t=>{const n=[];for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n})(e.concat(t)).filter(e=>E(e))},ae=()=>w(document.body,p.shown)&&!w(document.body,p["toast-shown"])&&!w(document.body,p["no-backdrop"]),re=()=>g()&&w(g(),p.toast);function se(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];const n=ne();E(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))}const c={previousBodyPadding:null},y=(t,e)=>{if(t.textContent="",e){const n=new DOMParser,o=n.parseFromString(e,"text/html");i(o.querySelector("head").childNodes).forEach(e=>{t.appendChild(e)}),i(o.querySelector("body").childNodes).forEach(e=>{t.appendChild(e)})}},w=(t,e)=>{if(!e)return!1;var n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},ce=(t,n)=>{i(t.classList).forEach(e=>{Object.values(p).includes(e)||Object.values(o).includes(e)||Object.values(n.showClass).includes(e)||t.classList.remove(e)})},C=(e,t,n)=>{if(ce(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return a("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));A(e,t.customClass[n])}},le=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(p.popup," > .").concat(p[t]));case"checkbox":return e.querySelector(".".concat(p.popup," > .").concat(p.checkbox," input"));case"radio":return e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:checked"))||e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:first-child"));case"range":return e.querySelector(".".concat(p.popup," > .").concat(p.range," input"));default:return e.querySelector(".".concat(p.popup," > .").concat(p.input))}},ue=e=>{var t;e.focus(),"file"!==e.type&&(t=e.value,e.value="",e.value=t)},de=(e,t,n)=>{e&&t&&(t="string"==typeof t?t.split(/\s+/).filter(Boolean):t).forEach(t=>{Array.isArray(e)?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)})},A=(e,t)=>{de(e,t,!0)},k=(e,t)=>{de(e,t,!1)},P=(e,t)=>{var n=i(e.childNodes);for(let e=0;e<n.length;e++)if(w(n[e],t))return n[e]},pe=(e,t,n)=>{(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},B=function(e){e.style.display=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex"},x=e=>{e.style.display="none"},me=(e,t,n,o)=>{const i=e.querySelector(t);i&&(i.style[n]=o)},ge=(e,t,n)=>{t?B(e,n):x(e)},E=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),he=()=>!E(h())&&!E(f())&&!E(b()),fe=e=>!!(e.scrollHeight>e.clientHeight),be=e=>{const t=window.getComputedStyle(e);var e=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return 0<e||0<n},ve=()=>"undefined"==typeof window||"undefined"==typeof document,ye=100,T={},we=()=>{T.previousActiveElement&&T.previousActiveElement.focus?(T.previousActiveElement.focus(),T.previousActiveElement=null):document.body&&document.body.focus()},Ce=o=>new Promise(e=>{if(!o)return e();var t=window.scrollX,n=window.scrollY;T.restoreFocusTimeout=setTimeout(()=>{we(),e()},ye),window.scrollTo(t,n)}),Ae='\n <div aria-labelledby="'.concat(p.title,'" aria-describedby="').concat(p["html-container"],'" class="').concat(p.popup,'" tabindex="-1">\n   <button type="button" class="').concat(p.close,'"></button>\n   <ul class="').concat(p["progress-steps"],'"></ul>\n   <div class="').concat(p.icon,'"></div>\n   <img class="').concat(p.image,'" />\n   <h2 class="').concat(p.title,'" id="').concat(p.title,'"></h2>\n   <div class="').concat(p["html-container"],'" id="').concat(p["html-container"],'"></div>\n   <input class="').concat(p.input,'" />\n   <input type="file" class="').concat(p.file,'" />\n   <div class="').concat(p.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select,'"></select>\n   <div class="').concat(p.radio,'"></div>\n   <label for="').concat(p.checkbox,'" class="').concat(p.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(p.label,'"></span>\n   </label>\n   <textarea class="').concat(p.textarea,'"></textarea>\n   <div class="').concat(p["validation-message"],'" id="').concat(p["validation-message"],'"></div>\n   <div class="').concat(p.actions,'">\n     <div class="').concat(p.loader,'"></div>\n     <button type="button" class="').concat(p.confirm,'"></button>\n     <button type="button" class="').concat(p.deny,'"></button>\n     <button type="button" class="').concat(p.cancel,'"></button>\n   </div>\n   <div class="').concat(p.footer,'"></div>\n   <div class="').concat(p["timer-progress-bar-container"],'">\n     <div class="').concat(p["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ke=()=>{const e=m();return!!e&&(e.remove(),k([document.documentElement,document.body],[p["no-backdrop"],p["toast-shown"],p["has-column"]]),!0)},S=()=>{T.currentInstance.resetValidationMessage()},Pe=()=>{const e=g(),t=P(e,p.input),n=P(e,p.file),o=e.querySelector(".".concat(p.range," input")),i=e.querySelector(".".concat(p.range," output")),a=P(e,p.select),r=e.querySelector(".".concat(p.checkbox," input")),s=P(e,p.textarea);t.oninput=S,n.onchange=S,a.onchange=S,r.onchange=S,s.oninput=S,o.oninput=()=>{S(),i.value=o.value},o.onchange=()=>{S(),o.nextSibling.value=o.value}},Be=e=>"string"==typeof e?document.querySelector(e):e,xe=e=>{const t=g();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Ee=e=>{"rtl"===window.getComputedStyle(e).direction&&A(m(),p.rtl)},Te=(e,t)=>{if(e instanceof HTMLElement)t.appendChild(e);else if("object"==typeof e){var n=e,o=t;if(n.jquery)Se(o,n);else y(o,n.toString())}else e&&y(t,e)},Se=(t,n)=>{if(t.textContent="",0 in n)for(let e=0;e in n;e++)t.appendChild(n[e].cloneNode(!0));else t.appendChild(n.cloneNode(!0))},Le=(()=>{if(ve())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),Oe=(e,t)=>{var n,o,i,a,r,s=v(),c=d();(t.showConfirmButton||t.showDenyButton||t.showCancelButton?B:x)(s),C(s,t,"actions"),s=s,n=c,o=t,i=h(),a=f(),r=b(),je(i,"confirm",o),je(a,"deny",o),je(r,"cancel",o),function(e,t,n,o){if(!o.buttonsStyling)return k([e,t,n],p.styled);A([e,t,n],p.styled),o.confirmButtonColor&&(e.style.backgroundColor=o.confirmButtonColor,A(e,p["default-outline"]));o.denyButtonColor&&(t.style.backgroundColor=o.denyButtonColor,A(t,p["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,A(n,p["default-outline"]))}(i,a,r,o),o.reverseButtons&&(o.toast?(s.insertBefore(r,i),s.insertBefore(a,i)):(s.insertBefore(r,n),s.insertBefore(a,n),s.insertBefore(i,n))),y(c,t.loaderHtml),C(c,t,"loader")};function je(e,t,n){ge(e,n["show".concat(H(t),"Button")],"inline-block"),y(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=p[t],C(e,n,"".concat(t,"Button")),A(e,n["".concat(t,"ButtonClass")])}const Me=(e,t)=>{var n,o,i=m();i&&(o=i,"string"==typeof(n=t.backdrop)?o.style.background=n:n||A([document.documentElement,document.body],p["no-backdrop"]),o=i,(n=t.position)in p?A(o,p[n]):(a('The "position" parameter is not valid, defaulting to "center"'),A(o,p.center)),n=i,(o=t.grow)&&"string"==typeof o&&(o="grow-".concat(o))in p&&A(n,p[o]),C(i,t,"container"))};var L={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const De=["input","file","range","select","radio","checkbox","textarea"],Ie=(e,r)=>{const s=g();var t,e=L.innerParams.get(e);const c=!e||r.input!==e.input;De.forEach(e=>{var t=p[e];const n=P(s,t);{var o=r.inputAttributes;const i=le(g(),e);if(i){qe(i);for(const a in o)i.setAttribute(a,o[a])}}n.className=t,c&&x(n)}),r.input&&(c&&(e=>{if(!O[e.input])return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=Ne(e.input),n=O[e.input](t,e);B(n),setTimeout(()=>{ue(n)})})(r),e=r,t=Ne(e.input),e.customClass&&A(t,e.customClass.input))},qe=t=>{for(let e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},He=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Ve=(e,t,n)=>{if(n.inputLabel){e.id=p.input;const i=document.createElement("label");var o=p["input-label"];i.setAttribute("for",e.id),i.className=o,A(i,n.customClass.inputLabel),i.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",i)}},Ne=e=>{e=p[e]||p.input;return P(g(),e)},O={},Re=(O.text=O.email=O.password=O.number=O.tel=O.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:U(t.inputValue)||a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),Ve(e,e,t),He(e,t),e.type=t.input,e),O.file=(e,t)=>(Ve(e,e,t),He(e,t),e),O.range=(e,t)=>{const n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,Ve(n,e,t),e},O.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");y(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return Ve(e,e,t),e},O.radio=e=>(e.textContent="",e),O.checkbox=(e,t)=>{const n=le(g(),"checkbox");n.value="1",n.id=p.checkbox,n.checked=Boolean(t.inputValue);var o=e.querySelector("span");return y(o,t.inputPlaceholder),e},O.textarea=(n,e)=>{n.value=e.inputValue,He(n,e),Ve(n,n,e);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(g()).width);new MutationObserver(()=>{var e=n.offsetWidth+(e=n,parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight));e>t?g().style.width="".concat(e,"px"):g().style.width=null}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n},(e,t)=>{const n=$();C(n,t,"htmlContainer"),t.html?(Te(t.html,n),B(n,"block")):t.text?(n.textContent=t.text,B(n,"block")):x(n),Ie(e,t)}),Fe=(e,t)=>{var n=te();ge(n,t.footer),t.footer&&Te(t.footer,n),C(n,t,"footer")},Ue=(e,t)=>{const n=oe();y(n,t.closeButtonHtml),C(n,t,"closeButton"),ge(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},We=(e,t)=>{var e=L.innerParams.get(e),n=s();return e&&t.icon===e.icon?(Ze(n,t),void ze(n,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(o).indexOf(t.icon)?(l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),x(n)):(B(n),Ze(n,t),ze(n,t),void A(n,t.showClass.icon)):x(n)},ze=(e,t)=>{for(const n in o)t.icon!==n&&k(e,o[n]);A(e,o[t.icon]),Je(e,t),_e(),C(e,t,"icon")},_e=()=>{const e=g();var t=window.getComputedStyle(e).getPropertyValue("background-color");const n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Ke='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',Ye='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',Ze=(e,t)=>{var n;e.textContent="",t.iconHtml?y(e,Xe(t.iconHtml)):"success"===t.icon?y(e,Ke):"error"===t.icon?y(e,Ye):(n={question:"?",warning:"!",info:"i"},y(e,Xe(n[t.icon])))},Je=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])me(e,n,"backgroundColor",t.iconColor);me(e,".swal2-success-ring","borderColor",t.iconColor)}},Xe=e=>'<div class="'.concat(p["icon-content"],'">').concat(e,"</div>"),$e=(e,t)=>{const n=G();if(!t.imageUrl)return x(n);B(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),pe(n,"width",t.imageWidth),pe(n,"height",t.imageHeight),n.className=p.image,C(n,t,"image")},Ge=(e,o)=>{const i=Q();if(!o.progressSteps||0===o.progressSteps.length)return x(i);B(i),i.textContent="",o.currentProgressStep>=o.progressSteps.length&&a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.progressSteps.forEach((e,t)=>{e=e,n=document.createElement("li"),A(n,p["progress-step"]),y(n,e);var n,e=n;i.appendChild(e),t===o.currentProgressStep&&A(e,p["active-progress-step"]),t!==o.progressSteps.length-1&&(n=(e=>{const t=document.createElement("li");return A(t,p["progress-step-line"]),e.progressStepsDistance&&(t.style.width=e.progressStepsDistance),t})(o),i.appendChild(n))})},Qe=(e,t)=>{const n=X();ge(n,t.title||t.titleText,"block"),t.title&&Te(t.title,n),t.titleText&&(n.innerText=t.titleText),C(n,t,"title")},et=(e,t)=>{var n=m();const o=g();t.toast?(pe(n,"width",t.width),o.style.width="100%",o.insertBefore(d(),s())):pe(o,"width",t.width),pe(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),x(ee());n=o;(n.className="".concat(p.popup," ").concat(E(n)?t.showClass.popup:""),t.toast)?(A([document.documentElement,document.body],p["toast-shown"]),A(n,p.toast)):A(n,p.modal);C(n,t,"popup"),"string"==typeof t.customClass&&A(n,t.customClass);t.icon&&A(n,p["icon-".concat(t.icon)])},tt=(e,t)=>{et(e,t),Me(e,t),Ge(e,t),We(e,t),$e(e,t),Qe(e,t),Ue(e,t),Re(e,t),Oe(e,t),Fe(e,t),"function"==typeof t.didRender&&t.didRender(g())},j=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),nt=()=>{const e=i(document.body.children);e.forEach(e=>{e===m()||e.contains(m())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},ot=()=>{const e=i(document.body.children);e.forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},it=["swal-title","swal-html","swal-footer"],at=e=>{const n={};return i(e.querySelectorAll("swal-param")).forEach(e=>{M(e,["name","value"]);var t=e.getAttribute("name"),e=e.getAttribute("value");"boolean"==typeof r[t]&&"false"===e&&(n[t]=!1),"object"==typeof r[t]&&(n[t]=JSON.parse(e))}),n},rt=e=>{const n={};return i(e.querySelectorAll("swal-button")).forEach(e=>{M(e,["type","color","aria-label"]);var t=e.getAttribute("type");n["".concat(t,"ButtonText")]=e.innerHTML,n["show".concat(H(t),"Button")]=!0,e.hasAttribute("color")&&(n["".concat(t,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(n["".concat(t,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),n},st=e=>{const t={},n=e.querySelector("swal-image");return n&&(M(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},ct=e=>{const t={},n=e.querySelector("swal-icon");return n&&(M(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},lt=e=>{const n={},t=e.querySelector("swal-input");t&&(M(t,["type","label","placeholder","value"]),n.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(n.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(n.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(n.inputValue=t.getAttribute("value")));e=e.querySelectorAll("swal-input-option");return e.length&&(n.inputOptions={},i(e).forEach(e=>{M(e,["value"]);var t=e.getAttribute("value"),e=e.innerHTML;n.inputOptions[t]=e})),n},ut=(e,t)=>{const n={};for(const o in t){const i=t[o],a=e.querySelector(i);a&&(M(a,[]),n[i.replace(/^swal-/,"")]=a.innerHTML.trim())}return n},dt=e=>{const t=it.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);i(e.children).forEach(e=>{e=e.tagName.toLowerCase();-1===t.indexOf(e)&&a("Unrecognized element <".concat(e,">"))})},M=(t,n)=>{i(t.attributes).forEach(e=>{-1===n.indexOf(e.name)&&a(['Unrecognized attribute "'.concat(e.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(n.length?"Allowed attributes are: ".concat(n.join(", ")):"To set the value, use HTML within the element.")])})};var pt={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function mt(e){(t=e).inputValidator||Object.keys(pt).forEach(e=>{t.input===e&&(t.inputValidator=pt[e])}),e.showLoaderOnConfirm&&!e.preConfirm&&a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),(n=e).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(a('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />"));var t,n=e,e=ke();if(ve())l("SweetAlert2 requires document to initialize");else{const o=document.createElement("div"),i=(o.className=p.container,e&&A(o,p["no-transition"]),y(o,Ae),Be(n.target));i.appendChild(o),xe(n),Ee(i),Pe()}}class gt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){var t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ht=()=>{null===c.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(c.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(c.previousBodyPadding+(()=>{const e=document.createElement("div");e.className=p["scrollbar-measure"],document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t})(),"px"))},ft=()=>{null!==c.previousBodyPadding&&(document.body.style.paddingRight="".concat(c.previousBodyPadding,"px"),c.previousBodyPadding=null)},bt=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!w(document.body,p.iosfix)){var e,t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),A(document.body,p.iosfix);{const n=m();let t;n.ontouchstart=e=>{t=vt(e)},n.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}}{const o=navigator.userAgent,i=!!o.match(/iPad/i)||!!o.match(/iPhone/i),a=!!o.match(/WebKit/i),r=i&&a&&!o.match(/CriOS/i);r&&(e=44,g().scrollHeight>window.innerHeight-44&&(m().style.paddingBottom="".concat(44,"px")))}}},vt=e=>{var t,n=e.target,o=m();return!((t=e).touches&&t.touches.length&&"stylus"===t.touches[0].touchType||(t=e).touches&&1<t.touches.length)&&(n===o||!(fe(o)||"INPUT"===n.tagName||"TEXTAREA"===n.tagName||fe($())&&$().contains(n)))},yt=()=>{var e;w(document.body,p.iosfix)&&(e=parseInt(document.body.style.top,10),k(document.body,p.iosfix),document.body.style.top="",document.body.scrollTop=-1*e)},wt=10,Ct=e=>{const t=g();if(e.target===t){const n=m();t.removeEventListener(Le,Ct),n.style.overflowY="auto"}},At=(e,t)=>{Le&&be(t)?(e.style.overflowY="hidden",t.addEventListener(Le,Ct)):e.style.overflowY="auto"},kt=(e,t,n)=>{bt(),t&&"hidden"!==n&&ht(),setTimeout(()=>{e.scrollTop=0})},Pt=(e,t,n)=>{A(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),B(t,"grid"),setTimeout(()=>{A(t,n.showClass.popup),t.style.removeProperty("opacity")},wt),A([document.documentElement,document.body],p.shown),n.heightAuto&&n.backdrop&&!n.toast&&A([document.documentElement,document.body],p["height-auto"])},D=e=>{let t=g();t||new wn,t=g();var n=d();if(re())x(s());else{var o=t;const i=v(),a=d();!e&&E(h())&&(e=h());B(i),e&&(x(e),a.setAttribute("data-button-to-replace",e.className));a.parentNode.insertBefore(a,e),A([o,i],p.loading)}B(n),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},Bt=(t,n)=>{const o=g(),i=e=>Et[n.input](o,Tt(e),n);F(n.inputOptions)||U(n.inputOptions)?(D(h()),u(n.inputOptions).then(e=>{t.hideLoading(),i(e)})):"object"==typeof n.inputOptions?i(n.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))},xt=(t,n)=>{const o=t.getInput();x(o),u(n.inputValue).then(e=>{o.value="number"===n.input?parseFloat(e)||0:"".concat(e),B(o),o.focus(),t.hideLoading()}).catch(e=>{l("Error in inputValue promise: ".concat(e)),o.value="",B(o),o.focus(),t.hideLoading()})},Et={select:(e,t,i)=>{const a=P(e,p.select),r=(e,t,n)=>{const o=document.createElement("option");o.value=n,y(o,t),o.selected=St(n,i.inputValue),e.appendChild(o)};t.forEach(e=>{var t=e[0];const n=e[1];if(Array.isArray(n)){const o=document.createElement("optgroup");o.label=t,o.disabled=!1,a.appendChild(o),n.forEach(e=>r(o,e[1],e[0]))}else r(a,n,t)}),a.focus()},radio:(e,t,a)=>{const r=P(e,p.radio),n=(t.forEach(e=>{var t=e[0],e=e[1];const n=document.createElement("input"),o=document.createElement("label"),i=(n.type="radio",n.name=p.radio,n.value=t,St(t,a.inputValue)&&(n.checked=!0),document.createElement("span"));y(i,e),i.className=p.label,o.appendChild(n),o.appendChild(i),r.appendChild(o)}),r.querySelectorAll("input"));n.length&&n[0].focus()}},Tt=n=>{const o=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach((e,t)=>{let n=e;"object"==typeof n&&(n=Tt(n)),o.push([t,n])}):Object.keys(n).forEach(e=>{let t=n[e];"object"==typeof t&&(t=Tt(t)),o.push([e,t])}),o},St=(e,t)=>t&&t.toString()===e.toString();function Lt(){var e,t=L.innerParams.get(this);if(t){const n=L.domCache.get(this);x(n.loader),re()?t.icon&&B(s()):(t=n,(e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length?B(e[0],"inline-block"):he()&&x(t.actions)),k([n.popup,n.actions],p.loading),n.popup.removeAttribute("aria-busy"),n.popup.removeAttribute("data-loading"),n.confirmButton.disabled=!1,n.denyButton.disabled=!1,n.cancelButton.disabled=!1}}var Ot={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const jt=()=>h()&&h().click();const Mt=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Dt=(e,t,n)=>{const o=ie();if(o.length)return(t+=n)===o.length?t=0:-1===t&&(t=o.length-1),o[t].focus();g().focus()},It=["ArrowRight","ArrowDown"],qt=["ArrowLeft","ArrowUp"],Ht=(e,n,t)=>{var o=L.innerParams.get(e);if(o&&(!n.isComposing&&229!==n.keyCode))if(o.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key)e=e,s=n,i=o,R(i.allowEnterKey)&&s.target&&e.getInput()&&s.target.outerHTML===e.getInput().outerHTML&&(["textarea","file"].includes(i.input)||(jt(),s.preventDefault()));else if("Tab"===n.key){e=n;var i=o;var a=e.target,r=ie();let t=-1;for(let e=0;e<r.length;e++)if(a===r[e]){t=e;break}e.shiftKey?Dt(i,t,-1):Dt(i,t,1);e.stopPropagation(),e.preventDefault()}else if([...It,...qt].includes(n.key)){var s=n.key;const l=h(),u=f(),d=b();if([l,u,d].includes(document.activeElement)){var c=It.includes(s)?"nextElementSibling":"previousElementSibling";let t=document.activeElement;for(let e=0;e<v().children.length;e++){if(!(t=t[c]))return;if(E(t)&&t instanceof HTMLButtonElement)break}t instanceof HTMLButtonElement&&t.focus()}}else if("Escape"===n.key){e=n,n=o,o=t;if(R(n.allowEscapeKey)){e.preventDefault();o(j.esc)}}};function Vt(e,t,n,o){re()?Ut(e,o):(Ce(n).then(()=>Ut(e,o)),Mt(T)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),ae()&&(ft(),yt(),ot()),k([document.documentElement,document.body],[p.shown,p["height-auto"],p["no-backdrop"],p["toast-shown"]])}function Nt(e){e=void 0!==(n=e)?Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n):{isConfirmed:!1,isDenied:!1,isDismissed:!0};const t=Ot.swalPromiseResolve.get(this);var n=(e=>{const t=g();if(!t)return false;const n=L.innerParams.get(e);if(!n||w(t,n.hideClass.popup))return false;k(t,n.showClass.popup),A(t,n.hideClass.popup);const o=m();return k(o,n.showClass.backdrop),A(o,n.hideClass.backdrop),Ft(e,t,n),true})(this);this.isAwaitingPromise()?e.isDismissed||(Rt(this),t(e)):n&&t(e)}const Rt=e=>{e.isAwaitingPromise()&&(L.awaitingPromise.delete(e),L.innerParams.get(e)||e._destroy())},Ft=(e,t,n)=>{var o,i,a,r=m(),s=Le&&be(t);"function"==typeof n.willClose&&n.willClose(t),s?(s=e,o=t,t=r,i=n.returnFocus,a=n.didClose,T.swalCloseEventFinishedCallback=Vt.bind(null,s,t,i,a),o.addEventListener(Le,function(e){e.target===o&&(T.swalCloseEventFinishedCallback(),delete T.swalCloseEventFinishedCallback)})):Vt(e,r,n.returnFocus,n.didClose)},Ut=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})};function Wt(e,t,n){const o=L.domCache.get(e);t.forEach(e=>{o[e].disabled=n})}function zt(e,t){if(!e)return!1;if("radio"===e.type){const n=e.parentNode.parentNode,o=n.querySelectorAll("input");for(let e=0;e<o.length;e++)o[e].disabled=t}else e.disabled=t}const _t=e=>{e.isAwaitingPromise()?(Kt(L,e),L.awaitingPromise.set(e,!0)):(Kt(Ot,e),Kt(L,e))},Kt=(e,t)=>{for(const n in e)e[n].delete(t)};e=Object.freeze({hideLoading:Lt,disableLoading:Lt,getInput:function(e){var t=L.innerParams.get(e||this);return(e=L.domCache.get(e||this))?le(e.popup,t.input):null},close:Nt,isAwaitingPromise:function(){return!!L.awaitingPromise.get(this)},rejectPromise:function(e){const t=Ot.swalPromiseReject.get(this);Rt(this),t&&t(e)},handleAwaitingPromise:Rt,closePopup:Nt,closeModal:Nt,closeToast:Nt,enableButtons:function(){Wt(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){Wt(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return zt(this.getInput(),!1)},disableInput:function(){return zt(this.getInput(),!0)},showValidationMessage:function(e){const t=L.domCache.get(this);var n=L.innerParams.get(this);y(t.validationMessage,e),t.validationMessage.className=p["validation-message"],n.customClass&&n.customClass.validationMessage&&A(t.validationMessage,n.customClass.validationMessage),B(t.validationMessage);const o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedby",p["validation-message"]),ue(o),A(o,p.inputerror))},resetValidationMessage:function(){var e=L.domCache.get(this);e.validationMessage&&x(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),k(t,p.inputerror))},getProgressSteps:function(){return L.domCache.get(this).progressSteps},update:function(e){var t=g(),n=L.innerParams.get(this);if(!t||w(t,n.hideClass.popup))return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");t=(t=>{const n={};return Object.keys(t).forEach(e=>{if(Y(e))n[e]=t[e];else a('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}),n})(e),n=Object.assign({},n,t),tt(this,n),L.innerParams.set(this,n),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var e=L.domCache.get(this);const t=L.innerParams.get(this);t?(e.popup&&T.swalCloseEventFinishedCallback&&(T.swalCloseEventFinishedCallback(),delete T.swalCloseEventFinishedCallback),T.deferDisposalTimer&&(clearTimeout(T.deferDisposalTimer),delete T.deferDisposalTimer),"function"==typeof t.didDestroy&&t.didDestroy(),e=this,_t(e),delete e.params,delete T.keydownHandler,delete T.keydownTarget,delete T.currentInstance):_t(this)}});const Yt=(e,t)=>{var n=L.innerParams.get(e);if(!n.input)return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(H(t)));var o=((e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return n.checked?1:0;case"radio":return(o=n).checked?o.value:null;case"file":return(o=n).files.length?null!==o.getAttribute("multiple")?o.files:o.files[0]:null;default:return t.inputAutoTrim?n.value.trim():n.value}var o})(e,n);if(n.inputValidator){var i=e;var a=o;var r=t;const s=L.innerParams.get(i),c=(i.disableInput(),Promise.resolve().then(()=>u(s.inputValidator(a,s.validationMessage))));c.then(e=>{i.enableButtons(),i.enableInput(),e?i.showValidationMessage(e):("deny"===r?Zt:$t)(i,a)})}else e.getInput().checkValidity()?("deny"===t?Zt:$t)(e,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Zt=(t,n)=>{const e=L.innerParams.get(t||void 0);if(e.showLoaderOnDeny&&D(f()),e.preDeny){L.awaitingPromise.set(t||void 0,!0);const o=Promise.resolve().then(()=>u(e.preDeny(n,e.validationMessage)));o.then(e=>{!1===e?(t.hideLoading(),Rt(t)):t.closePopup({isDenied:!0,value:void 0===e?n:e})}).catch(e=>Xt(t||void 0,e))}else t.closePopup({isDenied:!0,value:n})},Jt=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},Xt=(e,t)=>{e.rejectPromise(t)},$t=(t,n)=>{const e=L.innerParams.get(t||void 0);if(e.showLoaderOnConfirm&&D(),e.preConfirm){t.resetValidationMessage(),L.awaitingPromise.set(t||void 0,!0);const o=Promise.resolve().then(()=>u(e.preConfirm(n,e.validationMessage)));o.then(e=>{E(ee())||!1===e?(t.hideLoading(),Rt(t)):Jt(t,void 0===e?n:e)}).catch(e=>Xt(t||void 0,e))}else Jt(t,n)},Gt=(n,e,o)=>{e.popup.onclick=()=>{var e,t=L.innerParams.get(n);t&&((e=t).showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton||t.timer||t.input)||o(j.close)}};let Qt=!1;const en=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Qt=!0)}}},tn=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,e.target!==t.popup&&!t.popup.contains(e.target)||(Qt=!0)}}},nn=(n,o,i)=>{o.container.onclick=e=>{var t=L.innerParams.get(n);Qt?Qt=!1:e.target===o.container&&R(t.allowOutsideClick)&&i(j.backdrop)}},on=e=>"object"==typeof e&&e.jquery,an=e=>e instanceof Element||on(e);const rn=()=>{if(T.timeout){{const n=ne();var e=parseInt(window.getComputedStyle(n).width),t=(n.style.removeProperty("transition"),n.style.width="100%",parseInt(window.getComputedStyle(n).width)),e=e/t*100;n.style.removeProperty("transition"),n.style.width="".concat(e,"%")}return T.timeout.stop()}},sn=()=>{var e;if(T.timeout)return e=T.timeout.start(),se(e),e};let cn=!1;const ln={};const un=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in ln){var n=e.getAttribute(o);if(n)return void ln[o].fire({template:n})}};var dn=Object.freeze({isValidParameter:K,isUpdatableParameter:Y,isDeprecatedParameter:Z,argsToParams:n=>{const o={};return"object"!=typeof n[0]||an(n[0])?["title","html","icon"].forEach((e,t)=>{t=n[t];"string"==typeof t||an(t)?o[e]=t:void 0!==t&&l("Unexpected type of ".concat(e,'! Expected "string" or "Element", got ').concat(typeof t))}):Object.assign(o,n[0]),o},isVisible:()=>E(g()),clickConfirm:jt,clickDeny:()=>f()&&f().click(),clickCancel:()=>b()&&b().click(),getContainer:m,getPopup:g,getTitle:X,getHtmlContainer:$,getImage:G,getIcon:s,getInputLabel:()=>n(p["input-label"]),getCloseButton:oe,getActions:v,getConfirmButton:h,getDenyButton:f,getCancelButton:b,getLoader:d,getFooter:te,getTimerProgressBar:ne,getFocusableElements:ie,getValidationMessage:ee,isLoading:()=>g().hasAttribute("data-loading"),fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new this(...t)},mixin:function(n){class e extends this{_main(e,t){return super._main(e,Object.assign({},n,t))}}return e},showLoading:D,enableLoading:D,getTimerLeft:()=>T.timeout&&T.timeout.getTimerLeft(),stopTimer:rn,resumeTimer:sn,toggleTimer:()=>{var e=T.timeout;return e&&(e.running?rn:sn)()},increaseTimer:e=>{if(T.timeout)return e=T.timeout.increase(e),se(e,!0),e},isTimerRunning:()=>T.timeout&&T.timeout.isRunning(),bindClickHandler:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"data-swal-template";ln[e]=this,cn||(document.body.addEventListener("click",un),cn=!0)}});let pn;class I{constructor(){if("undefined"!=typeof window){pn=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t)),o=(Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}}),this._main(this.params));L.promise.set(this,o)}}_main(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=(J(Object.assign({},t,e)),T.currentInstance&&(T.currentInstance._destroy(),ae()&&ot()),T.currentInstance=this,gn(e,t)),t=(mt(e),Object.freeze(e),T.timeout&&(T.timeout.stop(),delete T.timeout),clearTimeout(T.restoreFocusTimeout),hn(this));return tt(this,e),L.innerParams.set(this,e),mn(this,t,e)}then(e){const t=L.promise.get(this);return t.then(e)}finally(e){const t=L.promise.get(this);return t.finally(e)}}const mn=(l,u,d)=>new Promise((e,t)=>{const n=e=>{l.closePopup({isDismissed:!0,dismiss:e})};var o,i,a;Ot.swalPromiseResolve.set(l,e),Ot.swalPromiseReject.set(l,t),u.confirmButton.onclick=()=>{var e=l,t=L.innerParams.get(e);e.disableButtons(),t.input?Yt(e,"confirm"):$t(e,!0)},u.denyButton.onclick=()=>{var e=l,t=L.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Yt(e,"deny"):Zt(e,!1)},u.cancelButton.onclick=()=>{var e=l,t=n;e.disableButtons(),t(j.cancel)},u.closeButton.onclick=()=>n(j.close),e=l,t=u,a=n,L.innerParams.get(e).toast?Gt(e,t,a):(en(t),tn(t),nn(e,t,a)),o=l,e=T,t=d,i=n,Mt(e),t.toast||(e.keydownHandler=e=>Ht(o,e,i),e.keydownTarget=t.keydownListenerCapture?window:g(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0),a=l,"select"===(t=d).input||"radio"===t.input?Bt(a,t):["text","email","number","tel","textarea"].includes(t.input)&&(F(t.inputValue)||U(t.inputValue))&&(D(h()),xt(a,t));{var r=d;const s=m(),c=g();"function"==typeof r.willOpen&&r.willOpen(c),e=window.getComputedStyle(document.body).overflowY,Pt(s,c,r),setTimeout(()=>{At(s,c)},wt),ae()&&(kt(s,r.scrollbarPadding,e),nt()),re()||T.previousActiveElement||(T.previousActiveElement=document.activeElement),"function"==typeof r.didOpen&&setTimeout(()=>r.didOpen(c)),k(s,p["no-transition"])}fn(T,d,n),bn(u,d),setTimeout(()=>{u.container.scrollTop=0})}),gn=(e,t)=>{var n=(e=>{e="string"==typeof e.template?document.querySelector(e.template):e.template;if(!e)return{};e=e.content,dt(e),e=Object.assign(at(e),rt(e),st(e),ct(e),lt(e),ut(e,it));return e})(e);const o=Object.assign({},r,t,n,e);return o.showClass=Object.assign({},r.showClass,o.showClass),o.hideClass=Object.assign({},r.hideClass,o.hideClass),o},hn=e=>{var t={popup:g(),container:m(),actions:v(),confirmButton:h(),denyButton:f(),cancelButton:b(),loader:d(),closeButton:oe(),validationMessage:ee(),progressSteps:Q()};return L.domCache.set(e,t),t},fn=(e,t,n)=>{var o=ne();x(o),t.timer&&(e.timeout=new gt(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(B(o),C(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&se(t.timer)})))},bn=(e,t)=>{if(!t.toast)return R(t.allowEnterKey)?void(vn(e,t)||Dt(t,-1,1)):yn()},vn=(e,t)=>t.focusDeny&&E(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&E(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!E(e.confirmButton))&&(e.confirmButton.focus(),!0),yn=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()},wn=(Object.assign(I.prototype,e),Object.assign(I,dn),Object.keys(e).forEach(e=>{I[e]=function(){if(pn)return pn[e](...arguments)}}),I.DismissReason=j,I.version="11.4.8",I);return wn.default=wn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r),this.blocks=new Uint32Array(r)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof define&&define.amd,a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(r){return function(e){return new t(!0).update(e)[r]()}},v=function(){var r=b("hex");h&&(r=w(r)),r.create=function(){return new t},r.update=function(t){return r.create().update(t)};for(var e=0;e<c.length;++e){var i=c[e];r[i]=b(i)}return r},w=function(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(s){if("string"==typeof s)return e.createHash("md5").update(s,"utf8").digest("hex");if(null===s||void 0===s)throw r;return s.constructor===ArrayBuffer&&(s=new Uint8Array(s)),Array.isArray(s)||ArrayBuffer.isView(s)||s.constructor===i?e.createHash("md5").update(new i(s)).digest("hex"):t(s)};return s};t.prototype.update=function(t){if(!this.finalized){var e,i=typeof t;if("string"!==i){if("object"!==i)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var s,h,f=0,o=t.length,n=this.blocks,u=this.buffer8;f<o;){if(this.hashed&&(this.hashed=!1,n[0]=n[16],n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),e)if(a)for(h=this.start;f<o&&h<64;++f)u[h++]=t[f];else for(h=this.start;f<o&&h<64;++f)n[h>>2]|=t[f]<<y[3&h++];else if(a)for(h=this.start;f<o&&h<64;++f)(s=t.charCodeAt(f))<128?u[h++]=s:s<2048?(u[h++]=192|s>>6,u[h++]=128|63&s):s<55296||s>=57344?(u[h++]=224|s>>12,u[h++]=128|s>>6&63,u[h++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++f)),u[h++]=240|s>>18,u[h++]=128|s>>12&63,u[h++]=128|s>>6&63,u[h++]=128|63&s);else for(h=this.start;f<o&&h<64;++f)(s=t.charCodeAt(f))<128?n[h>>2]|=s<<y[3&h++]:s<2048?(n[h>>2]|=(192|s>>6)<<y[3&h++],n[h>>2]|=(128|63&s)<<y[3&h++]):s<55296||s>=57344?(n[h>>2]|=(224|s>>12)<<y[3&h++],n[h>>2]|=(128|s>>6&63)<<y[3&h++],n[h>>2]|=(128|63&s)<<y[3&h++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++f)),n[h>>2]|=(240|s>>18)<<y[3&h++],n[h>>2]|=(128|s>>12&63)<<y[3&h++],n[h>>2]|=(128|s>>6&63)<<y[3&h++],n[h>>2]|=(128|63&s)<<y[3&h++]);this.lastByteIndex=h,this.bytes+=h-this.start,h>=64?(this.start=h-64,this.hash(),this.hashed=!0):this.start=h}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[r>>2]|=u[3&r],r>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,r,e,i,s,h,f=this.blocks;this.first?r=((r=((t=((t=f[0]-680876937)<<7|t>>>25)-271733879<<0)^(e=((e=(-271733879^(i=((i=(-1732584194^2004318071&t)+f[1]-117830708)<<12|i>>>20)+t<<0)&(-271733879^t))+f[2]-1126478375)<<17|e>>>15)+i<<0)&(i^t))+f[3]-1316259209)<<22|r>>>10)+e<<0:(t=this.h0,r=this.h1,e=this.h2,r=((r+=((t=((t+=((i=this.h3)^r&(e^i))+f[0]-680876936)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[1]-389564586)<<12|i>>>20)+t<<0)&(t^r))+f[2]+606105819)<<17|e>>>15)+i<<0)&(i^t))+f[3]-1044525330)<<22|r>>>10)+e<<0),r=((r+=((t=((t+=(i^r&(e^i))+f[4]-176418897)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[5]+1200080426)<<12|i>>>20)+t<<0)&(t^r))+f[6]-1473231341)<<17|e>>>15)+i<<0)&(i^t))+f[7]-45705983)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(i^r&(e^i))+f[8]+1770035416)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[9]-1958414417)<<12|i>>>20)+t<<0)&(t^r))+f[10]-42063)<<17|e>>>15)+i<<0)&(i^t))+f[11]-1990404162)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(i^r&(e^i))+f[12]+1804603682)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+f[13]-40341101)<<12|i>>>20)+t<<0)&(t^r))+f[14]-1502002290)<<17|e>>>15)+i<<0)&(i^t))+f[15]+1236535329)<<22|r>>>10)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[1]-165796510)<<5|t>>>27)+r<<0)^r))+f[6]-1069501632)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[11]+643717713)<<14|e>>>18)+i<<0)^i))+f[0]-373897302)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[5]-701558691)<<5|t>>>27)+r<<0)^r))+f[10]+38016083)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[15]-660478335)<<14|e>>>18)+i<<0)^i))+f[4]-405537848)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[9]+568446438)<<5|t>>>27)+r<<0)^r))+f[14]-1019803690)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[3]-187363961)<<14|e>>>18)+i<<0)^i))+f[8]+1163531501)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+f[13]-1444681467)<<5|t>>>27)+r<<0)^r))+f[2]-51403784)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+f[7]+1735328473)<<14|e>>>18)+i<<0)^i))+f[12]-1926607734)<<20|r>>>12)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[5]-378558)<<4|t>>>28)+r<<0))+f[8]-2022574463)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[11]+1839030562)<<16|e>>>16)+i<<0))+f[14]-35309556)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[1]-1530992060)<<4|t>>>28)+r<<0))+f[4]+1272893353)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[7]-155497632)<<16|e>>>16)+i<<0))+f[10]-1094730640)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[13]+681279174)<<4|t>>>28)+r<<0))+f[0]-358537222)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[3]-722521979)<<16|e>>>16)+i<<0))+f[6]+76029189)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+f[9]-640364487)<<4|t>>>28)+r<<0))+f[12]-421815835)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+f[15]+530742520)<<16|e>>>16)+i<<0))+f[2]-995338651)<<23|r>>>9)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[0]-198630844)<<6|t>>>26)+r<<0)|~e))+f[7]+1126891415)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[14]-1416354905)<<15|e>>>17)+i<<0)|~t))+f[5]-57434055)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[12]+1700485571)<<6|t>>>26)+r<<0)|~e))+f[3]-1894986606)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[10]-1051523)<<15|e>>>17)+i<<0)|~t))+f[1]-2054922799)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[8]+1873313359)<<6|t>>>26)+r<<0)|~e))+f[15]-30611744)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[6]-1560198380)<<15|e>>>17)+i<<0)|~t))+f[13]+1309151649)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+f[4]-145523070)<<6|t>>>26)+r<<0)|~e))+f[11]-1120210379)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+f[2]+718787259)<<15|e>>>17)+i<<0)|~t))+f[9]-343485551)<<21|r>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=r-271733879<<0,this.h2=e-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+r<<0,this.h2=this.h2+e<<0,this.h3=this.h3+i<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),r=new Uint32Array(t);return r[0]=this.h0,r[1]=this.h1,r[2]=this.h2,r[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,r,e,i="",s=this.array(),h=0;h<15;)t=s[h++],r=s[h++],e=s[h++],i+=p[t>>>2]+p[63&(t<<4|r>>>4)]+p[63&(r<<2|e>>>6)]+p[63&e];return t=s[h],i+=p[t>>>2]+p[t<<4&63]+"=="};var _=v();f?module.exports=_:(i.md5=_,o&&define(function(){return _}))}();
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node && process.type != 'renderer';
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = require('crypto')
    var Buffer = require('buffer').Buffer;
    var algorithm = is224 ? 'sha224' : 'sha256';
    var bufferFrom;
    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
      bufferFrom = Buffer.from;
    } else {
      bufferFrom = function (message) {
        return new Buffer(message);
      };
    }
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >>> 2] |= (0xc0 | (code >>> 6)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >>> 2] |= (0xe0 | (code >>> 12)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >>> 2] |= (0xf0 | (code >>> 18)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >>> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
      this.chromeBugWorkAround = true;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >>> 28) & 0x0F] + HEX_CHARS[(h0 >>> 24) & 0x0F] +
      HEX_CHARS[(h0 >>> 20) & 0x0F] + HEX_CHARS[(h0 >>> 16) & 0x0F] +
      HEX_CHARS[(h0 >>> 12) & 0x0F] + HEX_CHARS[(h0 >>> 8) & 0x0F] +
      HEX_CHARS[(h0 >>> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >>> 28) & 0x0F] + HEX_CHARS[(h1 >>> 24) & 0x0F] +
      HEX_CHARS[(h1 >>> 20) & 0x0F] + HEX_CHARS[(h1 >>> 16) & 0x0F] +
      HEX_CHARS[(h1 >>> 12) & 0x0F] + HEX_CHARS[(h1 >>> 8) & 0x0F] +
      HEX_CHARS[(h1 >>> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >>> 28) & 0x0F] + HEX_CHARS[(h2 >>> 24) & 0x0F] +
      HEX_CHARS[(h2 >>> 20) & 0x0F] + HEX_CHARS[(h2 >>> 16) & 0x0F] +
      HEX_CHARS[(h2 >>> 12) & 0x0F] + HEX_CHARS[(h2 >>> 8) & 0x0F] +
      HEX_CHARS[(h2 >>> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >>> 28) & 0x0F] + HEX_CHARS[(h3 >>> 24) & 0x0F] +
      HEX_CHARS[(h3 >>> 20) & 0x0F] + HEX_CHARS[(h3 >>> 16) & 0x0F] +
      HEX_CHARS[(h3 >>> 12) & 0x0F] + HEX_CHARS[(h3 >>> 8) & 0x0F] +
      HEX_CHARS[(h3 >>> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >>> 28) & 0x0F] + HEX_CHARS[(h4 >>> 24) & 0x0F] +
      HEX_CHARS[(h4 >>> 20) & 0x0F] + HEX_CHARS[(h4 >>> 16) & 0x0F] +
      HEX_CHARS[(h4 >>> 12) & 0x0F] + HEX_CHARS[(h4 >>> 8) & 0x0F] +
      HEX_CHARS[(h4 >>> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >>> 28) & 0x0F] + HEX_CHARS[(h5 >>> 24) & 0x0F] +
      HEX_CHARS[(h5 >>> 20) & 0x0F] + HEX_CHARS[(h5 >>> 16) & 0x0F] +
      HEX_CHARS[(h5 >>> 12) & 0x0F] + HEX_CHARS[(h5 >>> 8) & 0x0F] +
      HEX_CHARS[(h5 >>> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >>> 28) & 0x0F] + HEX_CHARS[(h6 >>> 24) & 0x0F] +
      HEX_CHARS[(h6 >>> 20) & 0x0F] + HEX_CHARS[(h6 >>> 16) & 0x0F] +
      HEX_CHARS[(h6 >>> 12) & 0x0F] + HEX_CHARS[(h6 >>> 8) & 0x0F] +
      HEX_CHARS[(h6 >>> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >>> 28) & 0x0F] + HEX_CHARS[(h7 >>> 24) & 0x0F] +
        HEX_CHARS[(h7 >>> 20) & 0x0F] + HEX_CHARS[(h7 >>> 16) & 0x0F] +
        HEX_CHARS[(h7 >>> 12) & 0x0F] + HEX_CHARS[(h7 >>> 8) & 0x0F] +
        HEX_CHARS[(h7 >>> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >>> 24) & 0xFF, (h0 >>> 16) & 0xFF, (h0 >>> 8) & 0xFF, h0 & 0xFF,
      (h1 >>> 24) & 0xFF, (h1 >>> 16) & 0xFF, (h1 >>> 8) & 0xFF, h1 & 0xFF,
      (h2 >>> 24) & 0xFF, (h2 >>> 16) & 0xFF, (h2 >>> 8) & 0xFF, h2 & 0xFF,
      (h3 >>> 24) & 0xFF, (h3 >>> 16) & 0xFF, (h3 >>> 8) & 0xFF, h3 & 0xFF,
      (h4 >>> 24) & 0xFF, (h4 >>> 16) & 0xFF, (h4 >>> 8) & 0xFF, h4 & 0xFF,
      (h5 >>> 24) & 0xFF, (h5 >>> 16) & 0xFF, (h5 >>> 8) & 0xFF, h5 & 0xFF,
      (h6 >>> 24) & 0xFF, (h6 >>> 16) & 0xFF, (h6 >>> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >>> 24) & 0xFF, (h7 >>> 16) & 0xFF, (h7 >>> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >>> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >>> 12));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >>> 18));
          bytes[index++] = (0x80 | ((code >>> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

/* 主题样式：原 @resource SwalLigt / SwalDark 的内嵌常量（UTF-8 安全解码） */
var __b64utf8 = function (b) {
    return decodeURIComponent(atob(b).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};
var __SWAL_LIGHT_CSS = __b64utf8("LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLWNvbHVtbjoxLzQhaW1wb3J0YW50O2dyaWQtcm93OjEvNCFpbXBvcnRhbnQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA5OWZyIDFmcjtwYWRkaW5nOjFlbTtvdmVyZmxvdy15OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7Ym94LXNoYWRvdzowIDAgMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjA3NSksMXB4IDJweCA0cHggcmdiYSgwLDAsMCwuMDc1KSwxcHggM3B4IDhweCByZ2JhKDAsMCwwLC4wNzUpLDJweCA0cHggMTZweCByZ2JhKDAsMCwwLC4wNzUpO3BvaW50ZXItZXZlbnRzOmFsbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Q+KntncmlkLWNvbHVtbjoyfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGV7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmd7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWlucHV0e2hlaWdodDoyZW07bWFyZ2luOi41ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVye21hcmdpbjouNWVtIDAgMDtwYWRkaW5nOi41ZW0gMCAwO2ZvbnQtc2l6ZTouOGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2V7Z3JpZC1jb2x1bW46My8zO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTttYXJnaW46MDtmb250LXNpemU6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXJ7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVyOmVtcHR5e3BhZGRpbmc6MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRlcntncmlkLWNvbHVtbjoxO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6MmVtO2hlaWdodDoyZW07bWFyZ2luOi4yNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbntncmlkLWNvbHVtbjoxO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6MmVtO21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46MCAuNWVtIDAgMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxLjhlbTtmb250LXdlaWdodDo3MDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2hlaWdodDphdXRvO21hcmdpbjowO21hcmdpbi10b3A6LjVlbTtwYWRkaW5nOjAgLjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46LjI1ZW0gLjVlbTtwYWRkaW5nOi40ZW0gLjZlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuNmVtO2hlaWdodDozZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uOGVtO2xlZnQ6LS41ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS4yNWVtO2xlZnQ6LjkzNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41czthbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpncmlkO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA2MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC10ZW1wbGF0ZS1hcmVhczoidG9wLXN0YXJ0ICAgICB0b3AgICAgICAgICAgICB0b3AtZW5kIiAiY2VudGVyLXN0YXJ0ICBjZW50ZXIgICAgICAgICBjZW50ZXItZW5kIiAiYm90dG9tLXN0YXJ0ICBib3R0b20tY2VudGVyICBib3R0b20tZW5kIjtncmlkLXRlbXBsYXRlLXJvd3M6bWlubWF4KC13ZWJraXQtbWluLWNvbnRlbnQsYXV0bykgbWlubWF4KC13ZWJraXQtbWluLWNvbnRlbnQsYXV0bykgbWlubWF4KC13ZWJraXQtbWluLWNvbnRlbnQsYXV0byk7Z3JpZC10ZW1wbGF0ZS1yb3dzOm1pbm1heChtaW4tY29udGVudCxhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsYXV0bykgbWlubWF4KG1pbi1jb250ZW50LGF1dG8pO2hlaWdodDoxMDAlO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93LXg6aGlkZGVuO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXM7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1iYWNrZHJvcC1zaG93LC5zd2FsMi1jb250YWluZXIuc3dhbDItbm9hbmltYXRpb257YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC40KX0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLWhpZGV7YmFja2dyb3VuZDowIDAhaW1wb3J0YW50fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwxZnIpIGF1dG8gYXV0b30uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciwuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBtaW5tYXgoMCwxZnIpIGF1dG99LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gYXV0byBtaW5tYXgoMCwxZnIpfS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0Pi5zd2FsMi1wb3B1cHthbGlnbi1zZWxmOnN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2FsaWduLXNlbGY6c3RhcnQ7anVzdGlmeS1zZWxmOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQ+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2FsaWduLXNlbGY6c3RhcnQ7anVzdGlmeS1zZWxmOmVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0Pi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydD4uc3dhbDItcG9wdXB7Z3JpZC1yb3c6MjthbGlnbi1zZWxmOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlcj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtncmlkLXJvdzoyO2FsaWduLXNlbGY6Y2VudGVyO2p1c3RpZnktc2VsZjpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kPi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzoyO2FsaWduLXNlbGY6Y2VudGVyO2p1c3RpZnktc2VsZjplbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdD4uc3dhbDItcG9wdXAsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MzthbGlnbi1zZWxmOmVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbT4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtncmlkLXJvdzozO2p1c3RpZnktc2VsZjpjZW50ZXI7YWxpZ24tc2VsZjplbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kPi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzozO2FsaWduLXNlbGY6ZW5kO2p1c3RpZnktc2VsZjplbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjEvNDt3aWR0aDoxMDAlfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1wb3B1cHtncmlkLXJvdzoxLzQ7YWxpZ24tc2VsZjpzdHJldGNofS5zd2FsMi1jb250YWluZXIuc3dhbDItbm8tdHJhbnNpdGlvbnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5zd2FsMi1wb3B1cHtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwxMDAlKTt3aWR0aDozMmVtO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDEuMjVlbTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzU0NTQ1NDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtfS5zd2FsMi1wb3B1cDpmb2N1c3tvdXRsaW5lOjB9LnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLXRpdGxle3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6LjhlbSAxZW0gMDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1hY3Rpb25ze2Rpc3BsYXk6ZmxleDt6LWluZGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOmF1dG87bWFyZ2luOjEuMjVlbSBhdXRvIDA7cGFkZGluZzowfS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF17b3BhY2l0eTouNH0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMSkscmdiYSgwLDAsMCwuMSkpfS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwuMikpfS5zd2FsMi1sb2FkZXJ7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjIuMmVtO2hlaWdodDoyLjJlbTttYXJnaW46MCAxLjg3NWVtOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2JvcmRlci13aWR0aDouMjVlbTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojMjc3OGM0IHRyYW5zcGFyZW50ICMyNzc4YzQgdHJhbnNwYXJlbnR9LnN3YWwyLXN0eWxlZHttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAxLjFlbTt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjFzO2JveC1zaGFkb3c6MCAwIDAgM3B4IHRyYW5zcGFyZW50O2ZvbnQtd2VpZ2h0OjUwMH0uc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojNzA2NmUwO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX0uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm06Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMTIsMTAyLDIyNCwuNSl9LnN3YWwyLXN0eWxlZC5zd2FsMi1kZW55e2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6I2RjMzc0MTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXN0eWxlZC5zd2FsMi1kZW55OmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMjIwLDU1LDY1LC41KX0uc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiM2ZTc4ODE7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfS5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTEwLDEyMCwxMjksLjUpfS5zd2FsMi1zdHlsZWQuc3dhbDItZGVmYXVsdC1vdXRsaW5lOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfS5zd2FsMi1zdHlsZWQ6Zm9jdXN7b3V0bGluZTowfS5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLWZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gMCAwO3BhZGRpbmc6MWVtIDFlbSAwO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MWVtfS5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2dyaWQtY29sdW1uOmF1dG8haW1wb3J0YW50O292ZXJmbG93OmhpZGRlbjtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHh9LnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhcnt3aWR0aDoxMDAlO2hlaWdodDouMjVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIpfS5zd2FsMi1pbWFnZXttYXgtd2lkdGg6MTAwJTttYXJnaW46MmVtIGF1dG8gMWVtfS5zd2FsMi1jbG9zZXt6LWluZGV4OjI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MS4yZW07aGVpZ2h0OjEuMmVtO21hcmdpbi10b3A6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOi0xLjJlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246Y29sb3IgLjFzLGJveC1zaGFkb3cgLjFzO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6MCAwO2NvbG9yOiNjY2M7Zm9udC1mYW1pbHk6c2VyaWY7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO2ZvbnQtc2l6ZToyLjVlbTtjdXJzb3I6cG9pbnRlcjtqdXN0aWZ5LXNlbGY6ZW5kfS5zd2FsMi1jbG9zZTpob3Zlcnt0cmFuc2Zvcm06bm9uZTtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojZjI3NDc0fS5zd2FsMi1jbG9zZTpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9LnN3YWwyLWNsb3NlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1odG1sLWNvbnRhaW5lcnt6LWluZGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIDEuNmVtIC4zZW07cGFkZGluZzowO292ZXJmbG93OmF1dG87Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uc3dhbDItY2hlY2tib3gsLnN3YWwyLWZpbGUsLnN3YWwyLWlucHV0LC5zd2FsMi1yYWRpbywuc3dhbDItc2VsZWN0LC5zd2FsMi10ZXh0YXJlYXttYXJnaW46MWVtIDJlbSAzcHh9LnN3YWwyLWZpbGUsLnN3YWwyLWlucHV0LC5zd2FsMi10ZXh0YXJlYXtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6YXV0bzt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMXMsYm94LXNoYWRvdyAuMXM7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JvcmRlci1yYWRpdXM6LjE4NzVlbTtiYWNrZ3JvdW5kOmluaGVyaXQ7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCB0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLXRleHRhcmVhLnN3YWwyLWlucHV0ZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQhaW1wb3J0YW50O2JveC1zaGFkb3c6MCAwIDJweCAjZjI3NDc0IWltcG9ydGFudH0uc3dhbDItZmlsZTpmb2N1cywuc3dhbDItaW5wdXQ6Zm9jdXMsLnN3YWwyLXRleHRhcmVhOmZvY3Vze2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtvdXRsaW5lOjA7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX0uc3dhbDItZmlsZTo6LW1vei1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1maWxlOjpwbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcmFuZ2V7bWFyZ2luOjFlbSAyZW0gM3B4O2JhY2tncm91bmQ6I2ZmZn0uc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6ODAlfS5zd2FsMi1yYW5nZSBvdXRwdXR7d2lkdGg6MjAlO2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1yYW5nZSBpbnB1dCwuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfS5zd2FsMi1pbnB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjAgLjc1ZW19LnN3YWwyLWZpbGV7d2lkdGg6NzUlO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi1sZWZ0OmF1dG87YmFja2dyb3VuZDppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6Ni43NWVtO3BhZGRpbmc6Ljc1ZW19LnN3YWwyLXNlbGVjdHttaW4td2lkdGg6NTAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6LjM3NWVtIC42MjVlbTtiYWNrZ3JvdW5kOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItY2hlY2tib3gsLnN3YWwyLXJhZGlve2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjppbmhlcml0fS5zd2FsMi1jaGVja2JveCBsYWJlbCwuc3dhbDItcmFkaW8gbGFiZWx7bWFyZ2luOjAgLjZlbTtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItY2hlY2tib3ggaW5wdXQsLnN3YWwyLXJhZGlvIGlucHV0e2ZsZXgtc2hyaW5rOjA7bWFyZ2luOjAgLjRlbX0uc3dhbDItaW5wdXQtbGFiZWx7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSBhdXRvIDB9LnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIDAgMDtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9LnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3Jle2NvbnRlbnQ6IiEiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjIuNWVtIGF1dG8gLjZlbTtib3JkZXI6LjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLWNvbG9yOiMwMDA7Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6My43NWVtfS5zd2FsMi1pY29uLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0O2NvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LWdyb3c6MX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyLjMxMjVlbTt3aWR0aDoyLjkzNzVlbTtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6MS4wNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDoxZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvdyAuc3dhbDIteC1tYXJrey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzfS5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmYWNlYTg7Y29sb3I6I2Y4YmI4Nn0uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nLnN3YWwyLWljb24tc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfS5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmcuc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1pLW1hcmsgLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuNXN9LnN3YWwyLWljb24uc3dhbDItaW5mb3tib3JkZXItY29sb3I6IzlkZTBmNjtjb2xvcjojM2ZjM2VlfS5zd2FsMi1pY29uLnN3YWwyLWluZm8uc3dhbDItaWNvbi1zaG93ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9LnN3YWwyLWljb24uc3dhbDItaW5mby5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuOHM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtaS1tYXJrIC44c30uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbntib3JkZXItY29sb3I6I2M5ZGFlMTtjb2xvcjojODdhZGJkfS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9uLnN3YWwyLWljb24tc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9uLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFyayAuOHM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFyayAuOHN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Njtjb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uNjg3NWVtO2xlZnQ6MS44NzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDotLjI1ZW07bGVmdDotLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO21heC13aWR0aDoxMDAlO21hcmdpbjoxLjI1ZW0gYXV0bztwYWRkaW5nOjA7YmFja2dyb3VuZDppbmhlcml0O2ZvbnQtd2VpZ2h0OjYwMH0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwe3otaW5kZXg6MjA7ZmxleC1zaHJpbms6MDt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjJlbTtiYWNrZ3JvdW5kOiMyNzc4YzQ7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6IzI3NzhjNH0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojYWRkOGU2O2NvbG9yOiNmZmZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7YmFja2dyb3VuZDojYWRkOGU2fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le3otaW5kZXg6MTA7ZmxleC1zaHJpbms6MDt3aWR0aDoyLjVlbTtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O2JhY2tncm91bmQ6IzI3NzhjNH1bY2xhc3NePXN3YWwyXXstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9LnN3YWwyLXNob3d7LXdlYmtpdC1hbmltYXRpb246c3dhbDItc2hvdyAuM3M7YW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzfS5zd2FsMi1oaWRley13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkczthbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzfS5zd2FsMi1ub2FuaW1hdGlvbnt0cmFuc2l0aW9uOm5vbmV9LnN3YWwyLXNjcm9sbGJhci1tZWFzdXJle3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6c2Nyb2xsfS5zd2FsMi1ydGwgLnN3YWwyLWNsb3Nle21hcmdpbi1yaWdodDppbml0aWFsO21hcmdpbi1sZWZ0OjB9LnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFye3JpZ2h0OjA7bGVmdDphdXRvfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGV7MTAwJXt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAle3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItc2hvd3swJXt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAle3RyYW5zZm9ybTpzY2FsZSguOTUpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0uMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6LjgxMjVlbTt3aWR0aDoxLjU2MjVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LS4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0uMzc1ZW07dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZ3swJXt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXF1ZXN0aW9uLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVkoLTM2MGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlWSgwKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXF1ZXN0aW9uLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVkoLTM2MGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlWSgwKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtaS1tYXJrezAle3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKTtvcGFjaXR5OjB9MjUle3RyYW5zZm9ybTpyb3RhdGVaKC0yNWRlZyk7b3BhY2l0eTouNH01MCV7dHJhbnNmb3JtOnJvdGF0ZVooMTVkZWcpO29wYWNpdHk6Ljh9NzUle3RyYW5zZm9ybTpyb3RhdGVaKC01ZGVnKTtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1pLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpO29wYWNpdHk6MH0yNSV7dHJhbnNmb3JtOnJvdGF0ZVooLTI1ZGVnKTtvcGFjaXR5Oi40fTUwJXt0cmFuc2Zvcm06cm90YXRlWigxNWRlZyk7b3BhY2l0eTouOH03NSV7dHJhbnNmb3JtOnJvdGF0ZVooLTVkZWcpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdzpoaWRkZW59Ym9keS5zd2FsMi1oZWlnaHQtYXV0b3toZWlnaHQ6YXV0byFpbXBvcnRhbnR9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1wb3B1cHtwb2ludGVyLWV2ZW50czphbGx9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfUBtZWRpYSBwcmludHtib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93LXk6c2Nyb2xsIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOnN0YXRpYyFpbXBvcnRhbnR9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MzYwcHg7bWF4LXdpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwb2ludGVyLWV2ZW50czpub25lfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e3RvcDowO3JpZ2h0OjA7Ym90dG9tOmF1dG87bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e3RvcDowO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDowfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlcnt0b3A6NTAlO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowO2JvdHRvbTphdXRvO2xlZnQ6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHt0b3A6YXV0bztyaWdodDowO2JvdHRvbTowO2xlZnQ6YXV0b30=");
var __SWAL_DARK_CSS = __b64utf8("Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wLC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8gIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLXBvcHVwe3BvaW50ZXItZXZlbnRzOmFsbH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgyNSwyNSwyNiwuNzUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MzYwcHg7bWF4LXdpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO3BvaW50ZXItZXZlbnRzOm5vbmV9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHtpbnNldDowIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHtpbnNldDowIDAgYXV0byBhdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0e2luc2V0OjAgYXV0byBhdXRvIDB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnR7aW5zZXQ6NTAlIGF1dG8gYXV0byAwO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7aW5zZXQ6NTAlIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e2luc2V0OjUwJSAwIGF1dG8gYXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdHtpbnNldDphdXRvIGF1dG8gMCAwfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217aW5zZXQ6YXV0byBhdXRvIDAgNTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7aW5zZXQ6YXV0byAwIDAgYXV0b31AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wLC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3cteTpzY3JvbGwgIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3AsLnN3YWwyLXRvYXN0LXNob3duKT5bYXJpYS1oaWRkZW49dHJ1ZV17ZGlzcGxheTpub25lfWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCwuc3dhbDItdG9hc3Qtc2hvd24pIC5zd2FsMi1jb250YWluZXJ7cG9zaXRpb246c3RhdGljICFpbXBvcnRhbnR9fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKXtkaXNwbGF5OmdyaWQ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDYwO2luc2V0OjA7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtYXJlYXM6InRvcC1zdGFydCAgICAgdG9wICAgICAgICAgICAgdG9wLWVuZCIgImNlbnRlci1zdGFydCAgY2VudGVyICAgICAgICAgY2VudGVyLWVuZCIgImJvdHRvbS1zdGFydCAgYm90dG9tLWNlbnRlciAgYm90dG9tLWVuZCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOm1pbm1heChtaW4tY29udGVudCwgYXV0bykgbWlubWF4KG1pbi1jb250ZW50LCBhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pO2hlaWdodDoxMDAlO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93LXg6aGlkZGVuO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXM7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJhY2tkcm9wLXNob3csZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLW5vYW5pbWF0aW9ue2JhY2tncm91bmQ6cmdiYSgyNSwyNSwyNiwuNzUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1iYWNrZHJvcC1oaWRle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3Atc3RhcnQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1zdGFydCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0e2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMWZyKSBhdXRvIGF1dG99ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b217Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gbWlubWF4KDAsIDFmcikgYXV0b31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWVuZCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWVuZHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvIG1pbm1heCgwLCAxZnIpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3Atc3RhcnQ+LnN3YWwyLXBvcHVwe2FsaWduLXNlbGY6c3RhcnR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtwbGFjZS1zZWxmOnN0YXJ0IGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztwbGFjZS1zZWxmOnN0YXJ0IGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlcj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtncmlkLXJvdzoyO3BsYWNlLXNlbGY6Y2VudGVyIGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzoyO3BsYWNlLXNlbGY6Y2VudGVyIGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MzthbGlnbi1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjM7cGxhY2Utc2VsZjplbmQgY2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b20tZW5kPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2dyaWQtcm93OjM7cGxhY2Utc2VsZjplbmQgZW5kfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ncm93LXJvdz4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MS80O3dpZHRoOjEwMCV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctY29sdW1uPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1wb3B1cHtncmlkLXJvdzoxLzQ7YWxpZ24tc2VsZjpzdHJldGNofWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1uby10cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZSAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKXtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMTAwJSk7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAxLjI1ZW07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojMTkxOTFhO2NvbG9yOmhzbCgwLDAlLDMzJSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXJlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1wb3B1cCk6Zm9jdXN7b3V0bGluZTpub25lfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKS5zd2FsMi1sb2FkaW5ne292ZXJmbG93LXk6aGlkZGVufWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKS5zd2FsMi1kcmFnZ2FibGV7Y3Vyc29yOmdyYWJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApLnN3YWwyLWRyYWdnYWJsZSBkaXY6d2hlcmUoLnN3YWwyLWljb24pe2N1cnNvcjpncmFifWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKS5zd2FsMi1kcmFnZ2luZ3tjdXJzb3I6Z3JhYmJpbmd9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApLnN3YWwyLWRyYWdnaW5nIGRpdjp3aGVyZSguc3dhbDItaWNvbil7Y3Vyc29yOmdyYWJiaW5nfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBoMjp3aGVyZSguc3dhbDItdGl0bGUpe3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6LjhlbSAxZW0gMDtjb2xvcjojZTFlMWUxO2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkO2N1cnNvcjppbml0aWFsfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpe2Rpc3BsYXk6ZmxleDt6LWluZGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOmF1dG87bWFyZ2luOjEuMjVlbSBhdXRvIDA7cGFkZGluZzowfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF17b3BhY2l0eTouNH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKTpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWxvYWRlcil7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjIuMmVtO2hlaWdodDoyLjJlbTttYXJnaW46MCAxLjg3NWVtO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyLXdpZHRoOi4yNWVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiMyNzc4YzQgcmdiYSgwLDAsMCwwKSAjMjc3OGM0IHJnYmEoMCwwLDAsMCl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKXttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAxLjFlbTt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjFzO2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMCwwLDAsMCk7Zm9udC13ZWlnaHQ6NTAwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWNvbmZpcm0pe2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzcwNjZlMDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTp3aGVyZSguc3dhbDItY29uZmlybSk6Zm9jdXMtdmlzaWJsZXtib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDExMiwxMDIsMjI0LC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOndoZXJlKC5zd2FsMi1kZW55KXtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiNkYzM3NDE7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWRlbnkpOmZvY3VzLXZpc2libGV7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgyMjAsNTUsNjUsLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6d2hlcmUoLnN3YWwyLWNhbmNlbCl7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojNmU3ODgxO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOndoZXJlKC5zd2FsMi1jYW5jZWwpOmZvY3VzLXZpc2libGV7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMTAsMTIwLDEyOSwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1kZWZhdWx0LW91dGxpbmU6Zm9jdXMtdmlzaWJsZXtib3gtc2hhZG93OjAgMCAwIDFweCAjMTkxOTFhLDAgMCAwIDNweCBoc2xhKDIxMCw0Ny42MTkwNDc2MTklLDY4LjgyMzUyOTQxMTglLC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOmZvY3VzLXZpc2libGV7b3V0bGluZTpub25lfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItZm9vdGVyKXttYXJnaW46MWVtIDAgMDtwYWRkaW5nOjFlbSAxZW0gMDtib3JkZXItdG9wOjFweCBzb2xpZCAjNTU1O2NvbG9yOmhzbCgwLDAlLDczLjIzNTI5NDExNzYlKTtmb250LXNpemU6MWVtO3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjppbml0aWFsfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtncmlkLWNvbHVtbjphdXRvICFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIpe3dpZHRoOjEwMCU7aGVpZ2h0Oi4yNWVtO2JhY2tncm91bmQ6cmdiYSgyMjUsMjI1LDIyNSwuNil9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGltZzp3aGVyZSguc3dhbDItaW1hZ2Upe21heC13aWR0aDoxMDAlO21hcmdpbjoyZW0gYXV0byAxZW07Y3Vyc29yOmluaXRpYWx9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2Upe3otaW5kZXg6MjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxLjJlbTtoZWlnaHQ6MS4yZW07bWFyZ2luLXRvcDowO21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206LTEuMmVtO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpjb2xvciAuMXMsYm94LXNoYWRvdyAuMXM7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2NvbG9yOiNjY2M7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO2ZvbnQtc2l6ZToyLjVlbTtjdXJzb3I6cG9pbnRlcjtqdXN0aWZ5LXNlbGY6ZW5kfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKTpob3Zlcnt0cmFuc2Zvcm06bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Y29sb3I6I2YyNzQ3NH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSk6Zm9jdXMtdmlzaWJsZXtvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAzcHggaHNsYSgyMTAsNDcuNjE5MDQ3NjE5JSw2OC44MjM1Mjk0MTE4JSwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2UpOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWh0bWwtY29udGFpbmVyKXt6LWluZGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtwYWRkaW5nOjFlbSAxLjZlbSAuM2VtO292ZXJmbG93OmF1dG87Y29sb3I6I2UxZTFlMTtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDpub3JtYWw7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZDtjdXJzb3I6aW5pdGlhbH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBzZWxlY3Q6d2hlcmUoLnN3YWwyLXNlbGVjdCksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcmFkaW8pLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBsYWJlbDp3aGVyZSguc3dhbDItY2hlY2tib3gpe21hcmdpbjoxZW0gMmVtIDNweH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpe2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDphdXRvO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4xcyxib3gtc2hhZG93IC4xcztib3JkZXI6MXB4IHNvbGlkIGhzbCgwLDAlLDg1JSk7Ym9yZGVyLXJhZGl1czouMTg3NWVtO2JhY2tncm91bmQ6IzMyMzIzNDtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNiksMCAwIDAgM3B4IHJnYmEoMCwwLDAsMCk7Y29sb3I6I2UxZTFlMTtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KS5zd2FsMi1pbnB1dGVycm9yLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSkuc3dhbDItaW5wdXRlcnJvcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0ICFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KTpmb2N1cyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpOmZvY3VzLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpOmZvY3Vze2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCBoc2xhKDIxMCw0Ny42MTkwNDc2MTklLDY4LjgyMzUyOTQxMTglLC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KTo6cGxhY2Vob2xkZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKTo6cGxhY2Vob2xkZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSk6OnBsYWNlaG9sZGVye2NvbG9yOiNjY2N9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZXttYXJnaW46MWVtIDJlbSAzcHg7YmFja2dyb3VuZDojMTkxOTFhfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6ODAlfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2Ugb3V0cHV0e3dpZHRoOjIwJTtjb2xvcjojZTFlMWUxO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIGlucHV0LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItaW5wdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowIC43NWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItZmlsZXt3aWR0aDo3NSU7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0bztiYWNrZ3JvdW5kOiMzMjMyMzQ7Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6Ni43NWVtO3BhZGRpbmc6Ljc1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDojMzIzMjM0O2NvbG9yOiNlMWUxZTE7Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYWRpbyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWNoZWNrYm94e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6IzE5MTkxYTtjb2xvcjojZTFlMWUxfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFkaW8gbGFiZWwsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1jaGVja2JveCBsYWJlbHttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxLjEyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFkaW8gaW5wdXQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1jaGVja2JveCBpbnB1dHtmbGV4LXNocmluazowO21hcmdpbjowIC40ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGxhYmVsOndoZXJlKC5zd2FsMi1pbnB1dC1sYWJlbCl7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSBhdXRvIDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlKXthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIDAgMDtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojMzIzMjM0O2NvbG9yOiNlMWUxZTE7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlKTo6YmVmb3Jle2NvbnRlbnQ6IiEiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBze2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjttYXgtd2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG87cGFkZGluZzowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtmb250LXdlaWdodDo2MDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwe3otaW5kZXg6MjA7ZmxleC1zaHJpbms6MDt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjJlbTtiYWNrZ3JvdW5kOiMyNzc4YzQ7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiMyNzc4YzR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOnJnYig4Ny41LDg3LjUsOTEpO2NvbG9yOiNmZmZ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le2JhY2tncm91bmQ6cmdiKDg3LjUsODcuNSw5MSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le3otaW5kZXg6MTA7ZmxleC1zaHJpbms6MDt3aWR0aDoyLjVlbTtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O2JhY2tncm91bmQ6IzI3NzhjNH1kaXY6d2hlcmUoLnN3YWwyLWljb24pe3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo1ZW07aGVpZ2h0OjVlbTttYXJnaW46Mi41ZW0gYXV0byAuNmVtO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDAsMCwwLDApO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1jb2xvcjojMDAwO2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6NWVtO2N1cnNvcjpkZWZhdWx0O3VzZXItc2VsZWN0Om5vbmV9ZGl2OndoZXJlKC5zd2FsMi1pY29uKSAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjMuNzVlbX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0O2NvbG9yOiNmMjc0NzR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtZ3JvdzoxfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6MS4wNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0OjFlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFya3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItd2FybmluZ3tib3JkZXItY29sb3I6cmdiKDI0OS45NTIzNDM3NSwyMDUuOTY1NjI1LDE2Ny43NDc2NTYyNSk7Y29sb3I6I2Y4YmI4Nn1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXdhcm5pbmcuc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItd2FybmluZy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1pLW1hcmsgLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItaW5mb3tib3JkZXItY29sb3I6cmdiKDE1Ni43MDMzNDkyODIzLDIyNC4yODIyOTY2NTA3LDI0Ni4yOTY2NTA3MTc3KTtjb2xvcjojM2ZjM2VlfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItaW5mby5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1pbmZvLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuOHN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1xdWVzdGlvbntib3JkZXItY29sb3I6cmdiKDIwMC44MDY0NTE2MTI5LDIxNy45Njc3NDE5MzU1LDIyNS4xOTM1NDgzODcxKTtjb2xvcjojODdhZGJkfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFyayAuOHN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2O2NvbG9yOiNhNWRjODZ9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozLjc1ZW07aGVpZ2h0OjcuNWVtO2JvcmRlci1yYWRpdXM6NTAlfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotMC40Mzc1ZW07bGVmdDotMi4wNjM1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTtib3JkZXItcmFkaXVzOjcuNWVtIDAgMCA3LjVlbX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0wLjY4NzVlbTtsZWZ0OjEuODc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07Ym9yZGVyLXJhZGl1czowIDcuNWVtIDcuNWVtIDB9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDotMC4yNWVtO2xlZnQ6LTAuMjVlbTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOi4yNWVtIHNvbGlkIHJnYmEoMTY1LDIyMCwxMzQsLjMpO2JvcmRlci1yYWRpdXM6NTAlfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXh7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDouNWVtO2xlZnQ6MS42MjVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDo1LjYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoyLjg3NWVtO2xlZnQ6LjgxMjVlbTt3aWR0aDoxLjU2MjVlbTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHthbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWlufVtjbGFzc149c3dhbDJdey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfS5zd2FsMi1zaG93e2FuaW1hdGlvbjpzd2FsMi1zaG93IC4zc30uc3dhbDItaGlkZXthbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzfS5zd2FsMi1ub2FuaW1hdGlvbnt0cmFuc2l0aW9uOm5vbmV9LnN3YWwyLXNjcm9sbGJhci1tZWFzdXJle3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6c2Nyb2xsfS5zd2FsMi1ydGwgLnN3YWwyLWNsb3Nle21hcmdpbi1yaWdodDppbml0aWFsO21hcmdpbi1sZWZ0OjB9LnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFye3JpZ2h0OjA7bGVmdDphdXRvfS5zd2FsMi10b2FzdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC1jb2x1bW46MS80ICFpbXBvcnRhbnQ7Z3JpZC1yb3c6MS80ICFpbXBvcnRhbnQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbi1jb250ZW50IGF1dG8gbWluLWNvbnRlbnQ7cGFkZGluZzoxZW07b3ZlcmZsb3cteTpoaWRkZW47YmFja2dyb3VuZDojMTkxOTFhO2JveC1zaGFkb3c6MCAwIDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNzUpLDFweCAycHggNHB4IHJnYmEoMCwwLDAsLjA3NSksMXB4IDNweCA4cHggcmdiYSgwLDAsMCwuMDc1KSwycHggNHB4IDE2cHggcmdiYSgwLDAsMCwuMDc1KTtwb2ludGVyLWV2ZW50czphbGx9LnN3YWwyLXRvYXN0Pip7Z3JpZC1jb2x1bW46Mn0uc3dhbDItdG9hc3QgaDI6d2hlcmUoLnN3YWwyLXRpdGxlKXttYXJnaW46LjVlbSAxZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjppbml0aWFsfS5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi10b2FzdCBpbnB1dDp3aGVyZSguc3dhbDItaW5wdXQpe2hlaWdodDoyZW07bWFyZ2luOi41ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtmb250LXNpemU6MWVtfS5zd2FsMi10b2FzdCBkaXY6d2hlcmUoLnN3YWwyLWZvb3Rlcil7bWFyZ2luOi41ZW0gMCAwO3BhZGRpbmc6LjVlbSAwIDA7Zm9udC1zaXplOi44ZW19LnN3YWwyLXRvYXN0IGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2Upe2dyaWQtY29sdW1uOjMvMztncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOi44ZW07aGVpZ2h0Oi44ZW07bWFyZ2luOjA7Zm9udC1zaXplOjJlbX0uc3dhbDItdG9hc3QgZGl2OndoZXJlKC5zd2FsMi1odG1sLWNvbnRhaW5lcil7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtvdmVyZmxvdzppbml0aWFsO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjppbml0aWFsfS5zd2FsMi10b2FzdCBkaXY6d2hlcmUoLnN3YWwyLWh0bWwtY29udGFpbmVyKTplbXB0eXtwYWRkaW5nOjB9LnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkZXJ7Z3JpZC1jb2x1bW46MTtncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjouMjVlbX0uc3dhbDItdG9hc3QgLnN3YWwyLWljb257Z3JpZC1jb2x1bW46MTtncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOjJlbTttaW4td2lkdGg6MmVtO2hlaWdodDoyZW07bWFyZ2luOjAgLjVlbSAwIDB9LnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MS44ZW07Zm9udC13ZWlnaHQ6Ym9sZH0uc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3dpZHRoOjJlbTtoZWlnaHQ6MmVtfS5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXt0b3A6Ljg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0Oi4zMTI1ZW19LnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6LjMxMjVlbX0uc3dhbDItdG9hc3QgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtoZWlnaHQ6YXV0bzttYXJnaW46MDttYXJnaW4tdG9wOi41ZW07cGFkZGluZzowIC41ZW19LnN3YWwyLXRvYXN0IGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKXttYXJnaW46LjI1ZW0gLjVlbTtwYWRkaW5nOi40ZW0gLjZlbTtmb250LXNpemU6MWVtfS5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuNmVtO2hlaWdodDozZW07Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0wLjhlbTtsZWZ0Oi0wLjVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO2JvcmRlci1yYWRpdXM6NGVtIDAgMCA0ZW19LnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotMC4yNWVtO2xlZnQ6LjkzNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfS5zd2FsMi10b2FzdC5zd2FsMi1zaG93e2FuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41c30uc3dhbDItdG9hc3Quc3dhbDItaGlkZXthbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHN9QGtleWZyYW1lcyBzd2FsMi1zaG93ezAle3RyYW5zZm9ybTpzY2FsZSgwLjcpfTQ1JXt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAle3RyYW5zZm9ybTpzY2FsZSgwLjk1KX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzd2FsMi1oaWRlezAle3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMC41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0wLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSgwLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSgwLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotMC4zNzVlbTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXF1ZXN0aW9uLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVkoLTM2MGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlWSgwKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWktbWFya3swJXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7b3BhY2l0eTowfTI1JXt0cmFuc2Zvcm06cm90YXRlWigtMjVkZWcpO29wYWNpdHk6LjR9NTAle3RyYW5zZm9ybTpyb3RhdGVaKDE1ZGVnKTtvcGFjaXR5Oi44fTc1JXt0cmFuc2Zvcm06cm90YXRlWigtNWRlZyk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3d7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAle3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOi41NjI1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDouMTI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOi42MjVlbTtsZWZ0Oi0wLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDoxLjYyNWVtO3JpZ2h0OjEuMzc1ZW07d2lkdGg6MH02NSV7dG9wOjEuMjVlbTtyaWdodDouOTM3NWVtO3dpZHRoOjB9ODQle3RvcDouOTM3NWVtO3JpZ2h0OjA7d2lkdGg6MS4xMjVlbX0xMDAle3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX19Cg==");
/* ==== 本地化内嵌依赖（结束） ==== */
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMTAzLjYgMTA3LjRjMy41LTIuMiA4LjktNi4xIDEzLjgtMTIuNXM3LjMtMTIuNSA4LjUtMTYuNWMuNS0xLjcgMi4yLTcuNSAyLjItMTQuNyAwLTEwLjEtMy4zLTI1LjEtMTUuNC0zNi44LTE0LjUtMTQtMzIuMS0xNC4zLTM1LjctMTQuMy04IDAtMTUuNyAxLjktMjIuNiA1LjJDNDQgMjMgMzUuNyAzMS40IDMwLjggNDEuN2MtMS4zIDIuOC00IDQuNy03LjEgNS00IC4zLTcuNSA0LjQtOC45IDkuNi0uNSAxLjktMS42IDMuNS0zLjEgNC43QzQuNCA2Ni44IDAgNzUuNyAwIDg1YzAgNi44IDIuMyAxMy4xIDYuMSAxOC4yIDUuNSA3LjQgMTQuMiAxMi4yIDI0IDEyLjJoNDcuMWM0LjQgMCAxMS0uNSAxOC4zLTMuNSAzLjItMS40IDUuOS0zIDguMS00LjV6IiBmaWxsPSIjQTA5OUYwIi8+PHBhdGggZD0iTTExOS44IDY0LjNjLjEtMTcuMS0xMC40LTI4LTEyLjUtMzAuMUM5NSAyMi4xIDc5LjkgMjEuOCA3Ni45IDIxLjhjLTE3LjYgMC0zMy4zIDEwLjUtMzkuOSAyNi43LS42IDEuMy0xLjggMi4zLTMuNCAyLjNoLS40Yy01LjggMC0xMC42IDQuOC0xMC42IDEwLjd2LjVjMCAxLjQtLjggMi42LTEuOSAzLjNDMTMuNCA2OSA4LjggNzYuOCA4LjggODVjMCAxMi4yIDkuOSAyMi4zIDIyLjIgMjIuM2g0NS4yYzMuNi0uMSAxNy42LS45IDI5LjYtMTIgMi45LTIuOCAxMy45LTEzLjcgMTQtMzF6IiBmaWxsPSIjNTc0QUI4Ii8+PHBhdGggZD0iTTExMC44IDU3LjRsLjIgMy4zYzAgMS4zLTEuMSAyLjQtMi4zIDIuNC0xLjMgMC0yLjMtMS4xLTIuMy0yLjRsLS4xLTIuOHYtLjNjMC0xLjIuOS0yLjIgMi4xLTIuM2guM2MuNyAwIDEuMy4zIDEuNy43LS4yLjEuMy41LjQgMS40em0tMy4zLTEwLjNjMCAxLjItMSAyLjMtMi4yIDIuM2gtLjFjLS44IDAtMS42LS41LTItMS4yLTQuNi04LjMtMTMuMy0xMy41LTIyLjgtMTMuNS0xLjIgMC0yLjMtMS0yLjMtMi4ydi0uMWMwLTEuMiAxLTIuMyAyLjItMi4zaC4xYTMwLjM3IDMwLjM3IDAgMCAxIDE1LjggNC40YzQuNiAyLjggOC40IDYuOCAxMS4xIDExLjUuMS4zLjIuNy4yIDEuMXpNODguMyA3My44TDczLjUgOTMuMmMtMS41IDEuOS0zLjUgMy4xLTUuNyAzLjVoLS4yYy0uNC4xLS44LjEtMS4yLjEtLjYgMC0xLjEtLjEtMS42LS4yLTIuMi0uNC00LjItMS43LTUuNi0zLjVMNDQuMyA3My45Yy0yLTIuNi0yLjUtNS40LTEuNC03LjcuMS0uMS4xLS4yLjItLjIgMS4yLTIgMy41LTMuMiA2LjQtMy4yaDYuNnYtNS43YzAtNi44IDQuNy0xMiAxMC45LTEyIDQuOCAwIDguNSAyLjYgMTAuMyA3LjIuNSAxLjMtLjIgMi43LTEuNSAzLjJzLTIuOC0uMS0zLjMtMS40Yy0xLjEtMi43LTIuOS00LTUuNS00LTMuNSAwLTYgMy02IDd2OC4xYzAgLjUtLjIgMS0uNiAxLjQtLjYuNy0xLjcgMS4xLTIuNiAxLjFoLTguNGMtMS4zIDAtMiAuNC0yLjEuNy0uMi40IDAgMS4zLjkgMi40TDYzLjEgOTBjLjkgMS4yIDIuMSAxLjggMy4zIDEuOHMyLjMtLjYgMy4xLTEuN2wxNC44LTE5LjNjLjktMS4xIDEuMS0yIC45LTIuNC0uMi0uMy0uOS0uNy0yLjEtLjdoLTcuNmMtLjkgMC0xLjctLjUtMi4xLTEuMi0uMy0uNC0uNC0uOC0uNC0xLjMgMC0xLjQgMS4xLTIuNSAyLjUtMi41aDcuNmMzLjEgMCA1LjUgMS4zIDYuNiAzLjVsLjMuN2MuNyAyLjEuMSA0LjYtMS43IDYuOXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=
/**
 * @name LinkSwift
 * @template （改）网盘直链下载助手
 * @author 油小猴
 * @author hmjz100
 * @namespace github.com/hmjz100
 * @description  一个基于 JavaScript 盘的文件下载地址获取工具  支持 百度网盘/阿里云盘/中国移动云盘/天翼云盘/迅雷云盘/夸克网盘/UC网盘/123云盘 八大网盘  代码改自 “网盘直链下载助手”，作者油小猴
 * @version 1.1.3-mobile
 * @license AGPL-3.0-or-later
 * @see {@link https://github.com/hmjz100/LinkSwift/ Github 仓库}
 */
(function linkSwift($) {
	// 严格模式，确保代码安全执行，不越界
	"use strict";
	// unsafeWindow 检测，适用于 Via 这类无 unsafeWindow 的浏览器
	if (typeof (unsafeWindow) === "undefined") window.unsafeWindow = window;
	// 重复执行检测，适用于部分浏览器；出自 “Via 轻插件”，作者谷花泰
	let key = encodeURIComponent("LinkSwift:主代码"); if (window[key]) return; window[key] = true;

	// 全局参数
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
			confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 确认`,
			denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 拒绝`,
			cancelButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 取消`
		},
		terminalType: {
			wc: "Microsoft Windows 命令提示符",
			wp: "Microsoft Windows PowerShell",
			lt: "Linux 终端",
			ls: "Linux Shell",
			mt: "Apple MacOS 终端"
		}
	};

	/**
	 * SweetAlert2 的 Toast 指示框基础配置
	 * @author 油小猴
	 * @author hmjz100
	 * @description 创建一个全局通用的 Toast 指示框实例，支持自动关闭、鼠标悬停暂停、右上角弹出等特性。
	 *
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
	 * 消息提示工具类
	 * @author 油小猴
	 * @description 提供统一的提示信息展示方法，基于 SweetAlert2 的 Toast 实现；
	 * 包含 success / error / warning / info / question 等类型。
	 */
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
	 * 基础配置集合
	 * @author 油小猴
	 * @author hmjz100
	 */
	let config = {
		base: {
			num: "865746",
			license: "AGPL3",
			service: {
				account: "https://pic.rmb.bdstatic.com/bjh/8b9e14345b3cdf96aedac2f3971adcb02681.png"
			},
			dom: {
				footer: `o(≧▽≦)o 十分感谢您的支持！【手机专用版】来给此项目一个 <a href="https://github.com/hmjz100/LinkSwift" target="_blank" class="pl-a" data-no-instant="1"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>Star</a> 吧~`,
				button: {
					mobile: {
						title: "手机下载",
						footer: `<p>手机专用：复制给 <b>1DM+</b> / <b>ytdlnis</b> / <b>ADM</b>，或复制直链与分享码。</p>`
					},
					// 兼容旧 mode 名，全部映射到手机下载面板
					api: { title: "手机下载", footer: `<p>手机专用版</p>` },
					aria2: { title: "手机下载", footer: `<p>手机专用版</p>` },
					curl: { title: "手机下载", footer: `<p>手机专用版</p>` },
					bitcomet: { title: "手机下载", footer: `<p>手机专用版</p>` },
					abdm: { title: "手机下载", footer: `<p>手机专用版</p>` }
				},
				themes: [
					{ color: "#09AAFF", name: "度盘|经典蓝" },
					{ color: "#cc3235", name: "度盘|平安红" },
					{ color: "#518c17", name: "度盘|盎然绿" },
					{ color: "#ed944b", name: "度盘|周年橙" },
					{ color: "#f969a5", name: "度盘|幸会粉" },
					{ color: "#bca280", name: "度盘|午后棕" },
					{ color: "#b673ab", name: "度盘|物语紫" },
					{ color: "#574AB8", name: "度盘|星空紫" },
					{ color: "#1d2327", name: "OpenAI|默认黑" },
					{ color: "#18a497", name: "OpenAI|默认青" },
					{ color: "#637dff", name: "度里叁|霞光紫" },
					{ color: "#0d53ff", name: "夸克|极简蓝" },
					{ color: "#3181f9", name: "移动|彩云蓝" },
					{ color: "#f8d800", name: "果核|柠檬黄" },
					{ color: "#0396ff", name: "果核|默认蓝" },
					{ color: "#32ccbc", name: "果核|碧波绿" },
					{ color: "#f6416c", name: "果核|玫瑰红" },
					{ color: "#2271b1", name: "文派|默认蓝" },
					{ color: "#59524c", name: "文派|咖啡灰" },
					{ color: "#ff679a", name: "哔哩|少女粉" },
					{ color: "#f44236", name: "哔哩|高能红" },
					{ color: "#fec107", name: "哔哩|咸蛋黄" },
					{ color: "#8bc24a", name: "哔哩|早苗绿" },
					{ color: "#2594ed", name: "哔哩|宝石蓝" },
					{ color: "#9c28b1", name: "哔哩|罗兰紫" }
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
				enhance: `+<br/>此方式可以自动设置用户代理(UA)，然后下载。<br/>此方式的下载请求<b>可能会</b>被<b>旧版 IDM</b> 捕获。`,
				normal: `+<br/>此方式<b>无法下载超过 50MB 的文件</b>，若超过点击会无反应（服务器 403）。<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`,
				copy: `注：此服务直接访问超过 50MB 文件的直链会导致服务器回报 403 错误<br/>如需访问，<b>请修改用户代理(UA)为 "pan.baidu.com"</b>`
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
				enhance: `+<br/>此方式可以自动设置 Referer，然后下载。<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`,
				copy: `注：此服务直接访问直链会导致服务器回报 403 错误<br/>如需访问，<b>请修改 Referer 为 "https://${location.host}/"</b>`,
				filename: `注：此服务在下载高峰期时<b>可能不会</b>向客户端回报文件名，下载时需要复制文件名。`
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
				enhance: `+<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`
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
				enhance: `+<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`
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
				enhance: `+<br/>此方式可以自动设置文件名，然后下载。<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此服务不会向客户端回报文件名，选用此方式下载需手动重命名文件。<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				filename: `注：此服务不会向客户端回报文件名，下载时需要复制文件名。`
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
				enhance: `+<br/>此方式可以自动设置用户代理(UA)，然后下载。<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`
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
				enhance: `+<br/>此方式可以自动设置用户代理(UA)，然后下载。<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`
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
				enhance: `+<br/>此方式的下载请求<b>不会</b>被 IDM 捕获。`,
				normal: `+<br/>此方式的下载请求<b>可能会</b>被 IDM 捕获。`
			}
		}
	}

	/**
	 * 基础工具集合
	 * @author 油小猴
	 * @author hmjz100
	 */
	let base = {
		/**
		 * 注册 GreaseMonkey-Compatible-Manager 扩展菜单命令
		 * @author 油小猴
		 * @author hmjz100
		 * @description 包含 "设置"、"美化"、"更新" 和 "调试" 四个功能入口
		 */
		registerMenuCommand() {
			GM_registerMenuCommand("⚙️ 设置", () => {
				base.showSetting();
			});
			GM_registerMenuCommand("🍃️ 美化", () => {
				base.showBeautify();
			});
			GM_registerMenuCommand("📃 更新", () => {
				base.showUpdate();
			});
			GM_registerMenuCommand("🛠️ 调试", () => {
				base.showDebug();
			});
		},

		/**
		 * 判断 JavaScript 对象类型
		 * @author 油小猴
		 * @description 通过 Object.prototype.toString 精确识别对象类型
		 * @param {*} obj - 待检测对象
		 * @returns {String} 类型名称（全小写），如：array/number/null/date 等
		 * @example
		 * isType([]) // => "array"
		 * isType(null) // => "null"
		 */
		isType(obj) {
			return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		},

		/**
		 * 获取 GreaseMonkey-Compatible-Manager 存储的值
		 * @author 油小猴
		 * @param {String} name - 存储键名
		 * @returns {*} 存储的值
		 */
		getValue(name) {
			return GM_getValue(name);
		},

		/**
		 * 设置 GreaseMonkey-Compatible-Manager 存储的值
		 * @author 油小猴
		 * @param {String|Array} path - 存储键名或路径数组
		 * @param {*} value - 要存储的值
		 */
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
		 * 删除 GreaseMonkey-Compatible-Manager 存储的值
		 * @author 油小猴
		 * @param {String|Array} key - 单个键名
		 */
		delValue(key) {
			return GM_deleteValue(key);
		},

		/**
		 * 从 localStorage 获取存储值
		 * @description 自动解析 JSON 格式内容
		 * @author 油小猴
		 * @param {String} key - 存储键名
		 * @returns {*} 存储的原始值或解析后的对象
		 */
		getStorage(key) {
			try {
				return JSON.parse(localStorage.getItem(key));
			} catch (e) {
				return localStorage.getItem(key);
			}
		},

		/**
		 * 设置 localStorage 存储值
		 * @author 油小猴
		 * @description 自动 `JSON.stringify` `对象` `数组` 类型的数据
		 * @param {String} key - 存储键名
		 * @param {*} value - 要存储的值
		 */
		setStorage(key, value) {
			if (this.isType(value) === "object" || this.isType(value) === "array") {
				return localStorage.setItem(key, JSON.stringify(value));
			}
			return localStorage.setItem(key, value);
		},

		/**
		 * 删除 localStorage 存储值
		 * @author 油小猴
		 * @description 没什么特别的
		 * @param {String} key - 存储键名
		 */
		delStorage(key) {
			return localStorage.removeItem(key);
		},

		/**
		 * 剪贴板写入
		 * @author 油小猴
		 * @param {String} text - 要复制的文本内容
		 */
		setClipboard(text) {
			GM_setClipboard(text, "text");
		},

		/**
		 * Base64-URI 编码处理
		 * @author 油小猴
		 * @author hmjz100
		 * @description 自动执行 URI 兼容性编码转换
		 * @param {String} str - 待编码的字符串
		 * @returns {String} Base64 编码结果字符串
		 */
		encodeBase(str) {
			try { str = btoa(str) } catch { }
			return str;
		},

		/**
		 * Base64-URI 解码处理
		 * @author 油小猴
		 * @author hmjz100
		 * @description 自动执行 URI 兼容性解码转换
		 * @param {String} str - Base64 编码字符串
		 * @returns {String} 解码后的原始字符串
		 */
		decodeBase(str) {
			try { str = decodeURIComponent(str) } catch { }
			try { str = atob(str) } catch { }
			try { str = decodeURIComponent(str) } catch { }
			return str;
		},

		/**
		 * 数字补零格式化
		 * @author hmjz100
		 * @description 对 1-9 的数字自动补前导零
		 * @param {Number} i - 待格式化的数字
		 * @returns {String} 格式化后的字符串（如"05"）
		 */
		timeFormat(i) {
			if (i >= 0 && i <= 9) {
				return "0" + i;
			} else {
				return i;
			}
		},

		/**
		 * 获取文件扩展名并转为大写
		 * @author 油小猴
		 * @param {String} name - 完整文件名
		 * @returns {String} 大写的文件扩展名（如 `TXT`）
		 */
		getExtension(name) {
			let reg = /(?!\.)\w+$/;
			if (reg.test(name)) {
				let match = name.match(reg);
				return match[0].toUpperCase();
			}
			return "";
		},

		/**
		 * 文件大小格式化
		 * @author hmjz100
		 * @description 自动转换单位到最合适的存储单位（如 `1.2MB`），支持 1000/1024 进制切换
		 * @param {Number} value - 文件字节大小
		 * @returns {String} 可读格式的大小描述
		 */
		sizeFormat(value = 0) {
			var sizeUnitBase = 1024
			try { value = Number(value) } catch { }
			if (typeof value === "number" && !isNaN(value) && value >= 0) {
				var units = sizeUnitBase === 1024
					? ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
					: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

				var unitNames = ["字节", "千字节", "兆字节", "吉字节", "太字节", "拍字节", "艾字节", "泽字节", "尧字节"];

				if (value === 0) return "0B(字节)";

				// 计算单位层级（取整数部分）
				var index = Math.min(
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
		 * 将剩余时间（秒）格式化为可读的时间字符串
		 *
		 * @param {Number} remainingTimeSeconds 剩余总秒数（支持小数）
		 * @returns {String} 格式化后的时间字符串，包含以下可能格式：
		 *   - "X天 HH时:MM分:SS秒"（超过1天）
		 *   - "HH时:MM分:SS秒"（超过1小时）
		 *   - "MM分:SS秒"（超过1分钟）
		 *   - "SS秒"（1分钟内）
		 *   - "计算中..."（无效输入时）
		 *
		 * @example
		 * formatRemainingTime(86400) // "1天 00时:00分:00秒"
		 * formatRemainingTime(3661.5) // "01时:01分:01秒"
		 * formatRemainingTime(0) // "即将完成"
		 * formatRemainingTime(-5) // "计算中..."
		 * formatRemainingTime(NaN) // "计算中..."
		 */
		rtimeFormat(remainingTimeSeconds) {
			if (!Number.isFinite(remainingTimeSeconds) || remainingTimeSeconds < 0) {
				return "计算中...";
			}
			let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
			remainingTimeSeconds %= (60 * 60 * 24);
			let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
			remainingTimeSeconds %= (60 * 60);
			let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
			let remainingSeconds = Math.floor(remainingTimeSeconds % 60);
			if (remainingDays > 0) {
				return `${remainingDays}天 ${base.timeFormat(remainingHours)}时:${base.timeFormat(remainingMinutes)}分:${base.timeFormat(remainingSeconds)}秒`;
			} else if (remainingHours > 0) {
				return `${base.timeFormat(remainingHours)}时:${base.timeFormat(remainingMinutes)}分:${base.timeFormat(remainingSeconds)}秒`;
			} else if (remainingMinutes > 0) {
				return `${base.timeFormat(remainingMinutes)}分:${base.timeFormat(remainingSeconds)}秒`;
			} else if (remainingSeconds > 0) {
				return `${remainingSeconds}秒`;
			} else {
				return "0秒";
			}
		},

		/**
		 * 文件列表排序
		 * @author 油小猴
		 * @author hmjz100
		 * @description 按中文拼音顺序对文件数组进行排序
		 * @param {Array} arr - 包含文件对象的数组
		 * @param {String} arr[].filename - 文件名属性（兼容 server_filename）
		 */
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
		 * 文件名安全处理
		 * @author 油小猴
		 * @description 替换非法字符为下划线
		 * @param {String} name - 原始文件名
		 * @returns {String} 修正后的安全文件名
		 */
		fixFilename(name) {
			let replace = /[!?&|`"'*\/:<>\\]/g
			return name.replace(replace, "_");
		},

		/**
		 * 头标准化
		 * @author hmjz100
		 * @description 标准化请求头、响应头的键，使用驼峰命名
		 * @param {String|Object} headers - 请求头、响应头的字符串或对象
		 * @param {Boolean} addDeafult - 是否不添加默认头
		 * @returns {Object} 标准化后的 Headers
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
		 * 生成 cURL 下载命令
		 * @author 油小猴
		 * @author hmjz100
		 * @description 根据终端类型生成对应 curl 命令，支持断点续传，自动处理文件名特殊字符
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {String} [headers] - 自定义请求头参数（可选）
		 * @returns {String} 编码后的 curl 命令字符串
		 */
		convertLinkToCurl(link, filename, headers) {
			let terminal = base.getValue("setting_curl_terminal");
			filename = base.fixFilename(filename);
			return `${terminal !== "wp" ? "curl" : "curl.exe"} -L -C - "${link}" -o "${filename}"${headers ? (" " + headers) : ""}`;
		},

		/**
		 * 生成 Aria2 下载命令
		 * @author 油小猴
		 * @author hmjz100
		 * @description 将链接转换为 Aria2 格式命令，自动处理文件名特殊字符
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {String} [headers] - 自定义请求头参数（可选）
		 * @returns {String} 编码后的 aria2c 命令字符串
		 */
		convertLinkToAria2(link, filename, headers) {
			filename = base.fixFilename(filename);
			return `aria2c "${link}" --out "${filename}"${headers ? (" " + headers) : ""}`;
		},

		/**
		 * 生成 1DM+ / 手机下载器可用文本
		 * @description 链接 + User-Agent / Referer，便于 1DM+ 从剪贴板导入并带请求头
		 */
		convertLinkTo1DM(link, filename, headerObj = {}) {
			filename = base.fixFilename(filename || "download");
			let h = base.standHeaders(headerObj || {});
			let ua = h["User-Agent"] || navigator.userAgent;
			let referer = h["Referer"] || (location.origin + "/");
			// 1DM+ 支持「链接换行 + Header: value」格式从剪贴板识别
			return `${link}\nUser-Agent: ${ua}\nReferer: ${referer}\nFilename: ${filename}`;
		},

		/**
		 * 生成 ytdlnis / yt-dlp 风格文本
		 */
		convertLinkToYtdlnis(link, filename, headerObj = {}) {
			filename = base.fixFilename(filename || "download");
			let h = base.standHeaders(headerObj || {});
			let ua = h["User-Agent"] || navigator.userAgent;
			let referer = h["Referer"] || (location.origin + "/");
			return `${link}\n  --add-header "User-Agent:${ua}"\n  --add-header "Referer:${referer}"\n  -o "${filename}"`;
		},

		/**
		 * 组装「链接 + 提取码」分享文案并复制
		 */
		buildShareText(shareInfo) {
			if (!shareInfo) return "";
			let url = shareInfo.fullUrl || shareInfo.url || location.href.split("?")[0];
			if (shareInfo.url && !String(shareInfo.url).startsWith("http")) {
				// 百度短链形态
				if (location.host.includes("baidu")) url = `https://pan.baidu.com/s/1${shareInfo.url}`;
				else url = location.href.split("?")[0];
			}
			let pwd = shareInfo.pwd || "";
			let lines = [`链接: ${url}`];
			if (pwd) lines.push(`提取码: ${pwd}`);
			return lines.join("\n");
		},

		/**
		 * 尝试从当前页收集分享信息
		 */
		collectShareInfo() {
			try {
				if (temp.shareInfo && (temp.shareInfo.pwd || temp.shareInfo.url || temp.shareInfo.fullUrl)) {
					return temp.shareInfo;
				}
				let url = new URL(location.href);
				let pwd = url.searchParams.get("pwd") || url.searchParams.get("password") || url.searchParams.get("passcode") || "";
				// 百度分享
				if (location.host.includes("baidu") && /\/s\//.test(url.pathname)) {
					let surl = url.pathname.split("/").pop().replace(/^1(.{22})$/, "$1");
					pwd = pwd || localStorage.getItem(`${surl}_pwd`) || "";
					return { url: surl, pwd, fullUrl: `https://pan.baidu.com/s/1${surl}` };
				}
				// 通用：URL 上带 pwd
				if (pwd) return { fullUrl: location.href.split("?")[0], pwd };
				return { fullUrl: location.href.split("?")[0], pwd: "" };
			} catch (e) {
				return null;
			}
		},

		/**
		 * 生成 BC 协议下载链接
		 * @author 油小猴
		 * @author hmjz100
		 * @description 将链接转换为 BC 协议格式，自动处理 URL 编码
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {String} [headers] - 自定义请求头参数（可选）
		 * @returns {String} 编码后的 BC 协议 URL
		 */
		convertLinkToBitComet(link, filename, headers) {
			filename = base.fixFilename(filename);
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}${headers ? ("&" + headers) : ""}ZZ`;
			return `bc://http/${base.encodeBase(bc)}`;
		},

		/**
		 * 发送链接到 IDM 下载器
		 * @author hmjz100
		 * @author Night-stars-1
		 * @description IDM 下载必备
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {Array} [headers] - 自定义请求头参数（可选）
		 * @returns {Promise<"success"|"fail">} 发送态结果
		 */
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

				let headersText = Object.entries(headers).map(([key, value]) => `${key}: ${value}`).join("\n") + "\n"; // 坑1：IDM 对 Header 的解码比较死板，最后不加换行不肯解析

				function format(key, val) {
					if (val === undefined || val === null) return "";
					var strVal = String(val);
					var len = new Blob([strVal]).size; // 坑2：使用 blob.size，而不是 length
					return `${key}=${len}:${strVal}`;
				};

				let fields = [
					format(4, ext), // 4: 文件类型
					format(6, link), // 6: 链接
					format(7, location.origin), // 7: 来源页面（“该文件来自网页”）
					format(11, headersText), // 11: 请求头
					format(100, filename), // 100: 文件名
					format(122, 4), // 122: 代理
				];

				// 坑3：神秘的请求格式
				// MSG# {请求指示} #13#1# {10241/20xx}(是/否 使用扩展提供的文件信息) : {?}(可能是距离扩展启动的时间?) :0: {当前时间戳} :0:1: {2/1}(是/否 优先弹窗，再获取文件信息) : {文件大小} :0,{表单}(格式如上);
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
		 * 发送链接到 Aria2 下载器
		 * @author 油小猴
		 * @author hmjz100
		 * @description Aria2 下载必备
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {Array} [headers] - 自定义请求头参数（可选）
		 * @returns {Promise<"success"|"fail">} 发送态结果
		 */
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
		 * 发送链接到比特彗星下载器
		 * @author hmjz100
		 * @description 比特彗星下载必备
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {Array} [headers] - 自定义请求头参数（可选）
		 * @returns {Promise<"success"|"fail">} 发送态结果
		 */
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
		 * 发送链接到 AB Download Manager 下载器
		 * @author hmjz100
		 * @description AB Download Manager 下载必备
		 * @param {String} link - 下载链接
		 * @param {String} filename - 文件名
		 * @param {Array} [headers] - 自定义请求头参数（可选）
		 * @returns {Promise<"success"|"fail">} 发送态结果
		 */
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
		 * Blob 文件下载
		 * @author 油小猴
		 * @description 通过创建临时链接实现文件下载
		 * @param {Blob} blob - 要下载的 Blob 对象
		 * @param {String} filename - 下载时提示保存的文件名
		 */
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
		 * 可跨域 xmlhttpRequest 请求
		 * @author hmjz100
		 * @description 封装 `GreaseMonkey-Compatible_xmlhttpRequest` 实现的跨域请求，与原始函数参数相同，支持回调和 await 两种用法
		 * @param {Object} option - 请求配置对象
		 * @returns {XMLHttpRequest|Promise} 请求对象实例或 Promise
		 */
		xmlHttpRequest(option) {
			let xmlHttpRequest = (typeof GM_xmlhttpRequest === "function") ? GM_xmlhttpRequest : (typeof GM?.xmlHttpRequest === "function") ? GM.xmlHttpRequest : null;
			if (!xmlHttpRequest || base.isType(xmlHttpRequest) !== "function") throw new Error("GreaseMonkey 兼容 XMLHttpRequest 不可用。");

			return xmlHttpRequest({ withCredentials: true, ...option });;
		},

		/**
		 * 发送 POST 请求
		 * @author 油小猴
		 * @author hmjz100
		 * @description 一般用于请求 API，支持智能格式化数据、智能编码请求数据
		 * @param {String} url - 请求地址
		 * @param {Object|String} data - 请求数据
		 * @param {Object} headers - 请求头配置
		 * @param {String} [type="json"] - 响应类型（支持 `json`, `blob` 等）
		 * @returns {Promise} 包含响应数据的 `Promise` 对象
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
						base.console.log("【LinkSwift】Post(start)\n请求地址：" + url + "\n请求数据：", _data, "\n请求头部：", headers);
					},
					onload: (res) => {
						const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
						res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);
						if (type === "blob") {
							base.console.log("【LinkSwift】Post(load) Blob\n请求地址：" + url + "\n请求数据：", _data, "\n请求结果：", res);
							resolve(res);
							return;
						}

						// 尝试解析响应
						res.responseDecode = res.responseText;
						try { res.responseDecode = atob(res.responseDecode) } catch { }
						try { res.responseDecode = escape(res.responseDecode) } catch { }
						try { res.responseDecode = decodeURIComponent(res.responseDecode) } catch { }
						try { res.responseDecode = JSON.parse(res.responseDecode) } catch { }
						if (res.responseDecode === res.responseText) res.responseDecode = null;
						if (this.isType(res.response) === "object") res.responseDecode = res.response;

						base.console.log("【LinkSwift】Post(load)\n请求地址：" + url + "\n请求数据：", _data, "\n请求头部：", headers, "\n请求结果：", res);
						resolve(res.responseDecode ?? res.response ?? res.responseText);
					},
					onerror: (error) => {
						let msg = "请求失败";
						if (error && typeof error === "object") msg += ": " + JSON.stringify(error, null, 2);
						base.console.error("【LinkSwift】Post(error)\n请求出现错误，可能是网络问题。", error);
						reject(new Error(msg));
					}
				});
			})
			if (request) {
				var methods = Object.getOwnPropertyNames(request).filter(key => typeof request[key] === 'function' && !promise.hasOwnProperty(key) && !['then', 'catch', 'finally'].includes(key)); // 自动收集 request 上的函数属性进行绑定，并能智能排除 Promise 原生方法
				methods.forEach(method => { promise[method] = (...args) => request[method](...args); }); // 动态绑定到 Promise
			}
			return promise;
		},

		/**
		 * 发送 GET 请求
		 * @author 油小猴
		 * @author hmjz100
		 * @description 一般用于请求 API，支持智能格式化数据
		 * @param {String} url - 请求地址
		 * @param {Object} headers - 请求头配置
		 * @param {String} [type="json"] - 响应类型
		 * @returns {Promise} 包含响应数据的 `Promise` 对象
		 */
		async get(url, headers, type = "json") {
			headers = this.standHeaders(headers);
			let request
			let promise = new Promise((resolve, reject) => {
				request = base.xmlHttpRequest({
					url, headers,
					method: "GET", responseType: type,
					onloadstart: (res) => {
						base.console.log("【LinkSwift】Get(start)\n请求地址：" + url + "\n请求头部：", headers);
					},
					onload: (res) => {
						const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
						res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);
						if (type === "blob") {
							base.console.log("【LinkSwift】Get(load) Blob\n请求地址：" + url, "\n请求结果：", res);
							resolve(res);
							return;
						}
						// 尝试解析响应
						res.responseDecode = res.responseText;
						try { res.responseDecode = JSON.parse(res.responseDecode) } catch { }
						if (res.responseDecode === res.responseText) res.responseDecode = null;
						if (this.isType(res.response) === "object") res.responseDecode = res.response;

						base.console.log("【LinkSwift】Get(load)\n请求地址：" + url + "\n请求头部：", headers, "\n请求结果：", res);
						resolve(res.responseDecode ?? res.response ?? res.responseText);
					},
					onerror: (error) => {
						let msg = "请求失败";
						if (error && typeof error === "object") msg += ": " + JSON.stringify(error, null, 2);
						base.console.error("【LinkSwift】Get(error)\n请求出现错误，可能是网络问题。", error);
						reject(new Error(msg));
					}
				});
			})
			if (request) {
				var methods = Object.getOwnPropertyNames(request).filter(key => typeof request[key] === 'function' && !promise.hasOwnProperty(key) && !['then', 'catch', 'finally'].includes(key)); // 自动收集 request 上的函数属性进行绑定，并能智能排除 Promise 原生方法
				methods.forEach(method => { promise[method] = (...args) => request[method](...args); }); // 动态绑定到 Promise
			}
			return promise;
		},
		/**
		 * 发送 HEAD 请求
		 * @author hmjz100
		 * @description 用于获取请求地址返回的请求头，支持智能降级为轻量 GET (`Range: bytes=0-0`)，返回结构化响应头
		 * @param {String} url - 请求地址
		 * @param {Object} headers - 请求头配置
		 * @param {Boolean} usingGET - 是否使用 GET
		 * @returns {Promise} 包含响应数据的 `Promise` 对象
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
						base.console.log(`【LinkSwift】Head${usingGET ? " Get" : ""}(start)\n请求地址：${url}\n请求头部：`, headers);
					},
					onload: function (res) {
						if (!_aborted) {
							const rawHeaders = res.responseHeaders || (request?.getAllResponseHeaders?.() || "") || "";
							res.responseHeaders = base.standHeaders(typeof rawHeaders === 'string' ? rawHeaders.trim() : "", true);

							base.console.log(`【LinkSwift】Head${usingGET ? " Get" : ""}(load)\n请求地址：${res.finalUrl}\n响应状态：${res.status}\n响应内容：`, res);

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

							base.console.log(`【LinkSwift】Head${usingGET ? " Get" : ""}(load) RS2\n请求地址：${res.finalUrl}\n响应状态：${res.status}\n响应内容：`, res);

							if (!usingGET && !res.responseHeaders.hasOwnProperty("Range") && !(res?.status >= 200 && res?.status < 400)) {
								base.head(res.finalUrl, { ...headers, Range: "bytes=0-0" }, true).then(resolve).catch(reject);
								return;
							}

							resolve(res);
						}
					},
					onerror: function (err) {
						if (!_aborted) {
							base.console.error(`【LinkSwift】Head${usingGET ? " Get" : ""}(error)\n请求出现错误，可能是网络问题。`, err);
							reject(err);
						}
					}
				});
			});
		},

		/**
		 * 获取最终重定向
		 * @author 油小猴
		 * @author hmjz100
		 * @description 使用 GET、Head，智能追踪 HTTP 30x 重定向，返回最终访问地址
		 * @param {String} url - 初始请求地址
		 * @param {Object} headers - 请求头配置
		 * @param {Boolean} usingGET - 是否使用 GET
		 * @param {Boolean} returnURL - 是否只返回链接而不是 res
		 * @returns {Promise<String>} 最终 URL 地址
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
		 * 下载文件
		 * @author hmjz100
		 * @description 发送 GET 请求，一般用于文件下载，支持进度监控、自动重试、断点续传、非断回退
		 * @param {String} url - 请求地址
		 * @param {Object} headers - 请求头配置
		 * @param {Number} [size=0] - 响应类型
		 * @param {Object} [extra] - 附加参数（必须 `name`、`index`、`size` 属性；可选 `thread`、`retry` 属性）
		 * @returns {Promise} 包含响应数据的 `Promise` 对象
		 */
		async download(url, headers, extra) {
			headers = this.standHeaders(headers);
			// 初始化全局共享状态
			this.download.active = this.download.active || 0; // 全局活跃线程数
			this.download.taskCount = this.download.taskCount || 0; // 当前正在运行的 download 任务数
			var global_maxThreads = 8; // 整个允许的最大并发数

			if (extra) base.console.log(`【LinkSwift】Download\n收到数据：`, extra);
			if (!extra || !extra.index || !extra.name || !extra.size) throw new Error("extra 缺少内容。");

			let status = {
				aborted: false,
				requests: new Set(),
				results: [],
				active: 0,
				maxSpeed: 0
			};

			let promise = new Promise(async (resolve, reject) => {
				this.download.taskCount++; // 任务进入

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
						base.console.log(`【LinkSwift】Download(Start)\n文件名称：${extra.name}\n断点续传：支持`);

						var maxRetry = extra.retry || 10;
						let index = 0;
						let offset = 0;
						let totalLoaded = 0;

						var worker = async () => {
							var minChunk = extra.minChunk || 50 * 1024; // 最小 50KB
							var maxChunk = extra.maxChunk || 1 * 1024 * 1024; // 最大 1MB
							let chunk = Math.floor(minChunk + (maxChunk - minChunk) * 0.37);

							while (offset < size && !status.aborted) {
								// 如果全局线程满了，且当前任务已经抢到了 1 条以上的线程，则 “让路” 给后来的任务
								let fairShare = Math.max(1, Math.floor(global_maxThreads / this.download.taskCount));
								while (!status.aborted && this.download.active >= global_maxThreads && status.active >= fairShare) {
									await new Promise(r => setTimeout(r, 200)); // 等待，直到其他任务释放或有空位
								}

								if (status.aborted || offset >= size) break;

								var _index = index++;
								var start = offset;
								var end = Math.min(start + chunk - 1, size - 1);
								var _size = end - start + 1;
								offset += _size;

								let attempt = 0;
								while (attempt <= maxRetry && !status.aborted) {
									// 占用线程计数
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

										// 智能分块调整
										var _duration = extra.duration || 1.5; // 目标
										var duration = (Date.now() - startTime) / 1000 || 0.1;
										var speed = _size / duration;

										let nextChunk;
										if (speed > status.maxSpeed * 0.9) {
											// 如果速度在提升或维持高位，说明大块是有效的，即便超时也要大胆增加
											// 目标是找到能让 speed 最大化的 chunk 大小
											nextChunk = chunk * 1.5;
											status.maxSpeed = Math.max(status.maxSpeed, speed);
										} else if (duration < _duration * 0.5) {
											// 跑得太快了，可以尝试再加一点
											nextChunk = chunk * 1.2;
										} else if (duration > _duration * 2) {
											// 只有当耗时严重超过目标（比如超过 2 倍）且速度下降时，才收缩
											nextChunk = chunk * 0.8;
										} else {
											// 稳定期
											nextChunk = chunk;
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
										// 释放线程计数
										status.active--;
										this.download.active--;
									}
								}
							}
						};

						// 启动当前任务的并发线程，单任务最高 3 个
						var maxThreads = Math.min(extra.thread || 3, 3);
						await Promise.all(Array(maxThreads).fill(0).map(worker));

						if (status.aborted) return;
						if (!status.aborted && typeof extra?.onProgress === "function") extra.onProgress(100, size, size);

						await new Promise(resolve => setTimeout(resolve, 0));
						status.results.sort((a, b) => a.index - b.index);

						// 分段提取数据
						async function getBlobData(results) {
							var dataList = [];
							var batchSize = 100; // 每处理 100 个分块释放一次主线程
							for (let i = 0; i < results.length; i++) {
								dataList.push(results[i].data);
								if (i % batchSize === 0) {
									await new Promise(resolve => setTimeout(resolve, 0));
								}
							}
							return dataList;
						};

						var finalData = await getBlobData(status.results);
						status.results = null; // 释放内存引用

						resolve({
							status: 200,
							statusText: "Ok!",
							readyState: 4,
							response: new Blob(finalData),
							finalUrl: url
						});
					} else {
						// 不支持 Range，回退
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
					this.download.taskCount--; // 无论成功失败，任务退出
				}
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
		 * Aria2 RPC 服务测试
		 * @author hmjz100
		 * @description 验证 `JSON-RPC` 接口可用性
		 * @param {String} domain - 服务域名
		 * @param {String} port - 服务端口
		 * @param {String} path - RPC 路径
		 * @param {String} token - 认证令牌
		 * @returns {Promise<"success"|"fail">} 连接状态结果
		 */
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
						base.console.log("【LinkSwift】Post(start) Aria2Test\n请求地址：" + url + "\n请求内容：", rpcData);
					},
					onload: function (res) {
						base.console.log("【LinkSwift】Post(load) Aria2Test\n请求地址：" + url + "\n请求结果：", res);
						if (!res.response) return resolve("fail");
						if (res.response?.error) {
							resolve("fail");
						} else {
							resolve("success");
						}
					},
					onerror: function (err) {
						base.console.error("【LinkSwift】Post(error) Aria2Test\n请求失败", err);
						resolve("fail");
					},
				});
			});
		},

		/**
		 * AB Download Manager RPC 服务测试
		 * @author hmjz100
		 * @description 验证 `JSON-RPC` 接口可用性
		 * @param {String} domain - 服务域名
		 * @param {String} port - 服务端口
		 * @returns {Promise<"success"|"fail">} 连接状态结果
		 */
		async testConnectToABDM(domain, port) {
			return new Promise((resolve, reject) => {
				let rpc = { domain, port };
				let url = `${rpc.domain}:${rpc.port}/ping`;
				base.xmlHttpRequest({
					method: "POST", url, headers: {}, data: new Date().getTime(),
					responseType: "text",
					onloadstart() {
						base.console.log("【LinkSwift】Post(start) ABDMTest\n请求地址：" + url + "\n请求内容：", new Date().getTime());
					},
					onload: function (res) {
						base.console.log("【LinkSwift】Post(load) ABDMTest\n请求地址：" + url + "\n请求结果：", res);
						if (!res.response || res.response !== "pong") return resolve("fail");
						resolve("success");
					},
					onerror: function (err) {
						base.console.error("【LinkSwift】Post(error) ABDMTest\n请求失败", err);
						resolve("fail");
					},
				});
			});
		},

		/**
		 * 重置请求相关数据
		 * @author 油小猴
		 * @description 中止所有进行中的请求，清除进度记录和定时器
		 */
		_resetAllData() {
			temp.links = [];
			$.each(temp.request, function (key) {
				(temp.request[key]).abort();
			});
			temp.request = {};
		},

		/**
		 * 重置请求相关数据
		 * @author 油小猴
		 * @description 中止指定的进行中的请求，清除进度记录和定时器
		 */
		_resetData(i) {
			temp.request[i] && temp.request[i].abort();
		},

		/**
		 * 将对象转换为 URL 编码字符串
		 * @author 油小猴
		 * @description 递归处理嵌套数组，自动进行 URI 编码
		 * @param {Object} obj - 待转换的键值对对象
		 * @returns {String} URL 编码格式字符串（如`key1=value1&key2=value2`）
		 */
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
			return str.slice(0, -1); // 去掉末尾的 "&"
		},

		/**
		 * 动态注入样式表
		 * @author 油小猴
		 * @author hmjz100
		 * @description 支持 `样式标签` `外链CSS` 注入，提供精准的 DOM 定位和插入位置控制
		 * @param {String} id - 样式元素 ID
		 * @param {"style"|"link"} tag - 标签类型（`style` 或 `link`）
		 * @param {String} css - CSS 内容或外链 URL
		 * @param {String} [element=".{mount}"] - 定位基准元素选择器
		 * @param {"before"|"after"|"prepend"|"append"} [position="append"] - 插入位置
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
		 * 十六进制颜色转 RGBA
		 * @author hmjz100
		 * @description 支持 4 位和 8 位十六进制格式，自动解析透明度通道
		 * @param {String} hex - 十六进制颜色值（如 `#09f` 或 `#0099ffaa` ）
		 * @returns {String} RGBA 格式字符串（如 `15, 170, 255, 0.67`）
		 */
		hexToRgba(hex) {
			// 去掉 # 号
			hex = hex.replace(/^#/, "");
			// 如果是四位十六进制颜色值，转换为八位
			if (hex.length === 4) {
				hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
			}
			// 解析 RGB 分量
			let r = parseInt(hex.substring(0, 2), 16);
			let g = parseInt(hex.substring(2, 4), 16);
			let b = parseInt(hex.substring(4, 6), 16);
			let a = "";
			// 如果是八位十六进制颜色值，解析 alpha 通道
			if (hex.length === 8) {
				a = parseInt(hex.substring(6, 8), 16) / 255; // 将 alpha 值转换为 0 到 1 之间的小数
				a = "," + a
			}
			// 返回 rgba 格式字符串
			return r + ", " + g + ", " + b + a;
		},

		/**
		 * RGBA 颜色转十六进制
		 * @author hmjz100
		 * @description 支持透明度转换，自动补全缩写格式
		 * @param {String} rgba - RGBA 格式颜色值（如 `rgba(15,170,255,0.67)`）
		 * @returns {String} 十六进制颜色值（如 `#09aaffaa`）
		 */
		rgbaToHex(rgba) {
			// 去掉前缀 "rgba" 或 "rgb" 并移除空格
			rgba = rgba.replace(/^(rgba?|RGBA?)\(/, "").replace(/\s+/g, "").replace(")", "");
			// 将颜色值分割为数组
			let [r, g, b, a] = rgba.split(",");
			// 将 RGB 转换为十六进制
			r = parseInt(r).toString(16).padStart(2, "0");
			g = parseInt(g).toString(16).padStart(2, "0");
			b = parseInt(b).toString(16).padStart(2, "0");
			// 如果存在 alpha 通道，处理透明度值
			if (a !== undefined) {
				// 将 alpha 转换为 0 到 255 的十六进制
				a = Math.round(parseFloat(a) * 255).toString(16).padStart(2, "0");
				return `#${r}${g}${b}${a}`;
			}
			// 如果没有 alpha 通道，返回标准六位的十六进制颜色
			return `#${r}${g}${b}`;
		},

		/**
		 * 自适应样式颜色替换器
		 * @author hmjz100
		 * @description 支持全局样式替换和资源路径修正，处理颜色渐变过渡效果等
		 * @param {String} cssText - 原始 CSS 内容
		 * @param {String} baseURI - 资源基础路径
		 * @param {"default"|"other"} type - 替换模式（默认模式包含过渡效果）
		 * @param {Array<[String, String]>} colorMap - 颜色映射表（旧颜色 → 新颜色）
		 * @returns {String} 处理后的 CSS 内容
		 */
		adaptiveStyleOverride(cssText, baseURI, type, colorMap) {
			if (!cssText) return "";
			if (baseURI) {
				// 替换相对路径资源为绝对路径
				cssText = cssText.replace(/url\s*\(\s*(['"]?)(.*?)\1\s*\)/g, (match, quote, url) => {
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
			// 处理默认颜色列表
			config.base.dom.themes.forEach(item => {
				let oldColor = item.color;
				cssText = cssText.replace(new RegExp(base.hexToRgba(oldColor), "ig"), base.hexToRgba(temp.color));
				cssText = cssText.replace(new RegExp(oldColor, "ig"), temp.color);
			});
			// 处理 colorMap
			if (type === "other") {
				colorMap.forEach(function (colorPair) {
					let oldColor = colorPair[0];
					let newColor = colorPair[1];
					// 生成旧颜色的三种形式：原样、全大写、全小写
					var variants = [
						oldColor,
						oldColor.toUpperCase(),
						oldColor.toLowerCase()
					];
					// 使用 Set 去重
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
					// 生成三种形式
					var variants = [
						oldColor,
						oldColor.toUpperCase(),
						oldColor.toLowerCase()
					];
					var uniqueVariants = [...new Set(variants)];
					if (oldColor.includes("#")) {
						// 替换带属性块的情况（添加 transition）
						uniqueVariants.forEach(variant => {
							var regexWithBlock = new RegExp(variant + "(.*?)}", "gi");
							cssText = cssText.replace(regexWithBlock, newColor + "$1; transition:all.2s}");
						});
						// 最后再统一替换剩下的
						uniqueVariants.forEach(variant => {
							cssText = cssText.replace(new RegExp(variant, "gi"), newColor);
						});
					} else {
						// 普通字符串替换
						uniqueVariants.forEach(variant => {
							cssText = cssText.replace(new RegExp(variant, "gi"), newColor);
						});
					}
				});
			}
			return cssText;
		},

		/**
		 * 自适应全局主题颜色修改器
		 * @author hmjz100
		 * @description 自动遍历并替换 `页面所有样式表` `SVG 元素` 的颜色值
		 * @param {Array<[String, String]>} colorMap - 颜色映射表
		 * @param {"default"|"other"} type - 替换模式
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
					// 替换颜色并添加样式
					let cssText = base.adaptiveStyleOverride(text, "", type, colorMap);
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
		 * 延时执行
		 * @author 油小猴
		 * @description 仅可于 `async` 函数中执行，否则无法倒计时。
		 * @param {Number} time - 等待时间（毫秒）
		 * @returns {Promise<void>} 延时完成的 `Promise`
		 */
		sleep(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		},

		/**
		 * 判断版本号新旧
		 * @author hmjz100
		 * @description 该函数将版本号按 `.` 分割为数字数组，逐段比较大小。
		 * 若某段 a 的数字大于 b，则 a 更新；
		 * 若所有段均相等，则版本相等（返回 false）。
		 * @param {String} a - 待比较的版本号
		 * @param {String} b - 基准版本号（如 "1.0.9.7"）
		 * @returns {Boolean} - 若 a 比 b 更新，返回 true；否则返回 false
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
		 * 提取版本号主版本
		 * @author 油小猴
		 * @param {String} version - 完整版本号（如 `1.2.3`）
		 * @returns {String|null} 主版本号（如 `1`）或 `null`（格式错误时）
		 */
		getMajorVersion(version) {
			let [major] = (version || "").split(".");
			return /^\d+$/.test(major) ? major : null;
		},

		/**
		 * 查找 React 组件实例
		 * @author 油小猴
		 * @description 支持 Fiber 架构遍历，可指定向上查找层级
		 * @param {HTMLElement} dom - 起始 DOM 元素
		 * @param {Number} [traverseUp=0] - 向上遍历层级
		 * @returns {Object|null} React 组件实例或 `null`
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
		 * 深拷贝
		 * @author hmjz100
		 * @description 完全复制某个东西
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
		 * 迁移旧版本配置
		 * @author hmjz100
		 * @description 将旧版配置项目迁移到新版配置
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
					// 旧版配置执行迁移
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
				base.console.error("【LinkSwift】迁移旧版本配置到新配置时出错", e);
			}
		},

		/**
		 * 初始化默认配置
		 * @author 油小猴
		 * @author hmjz100
		 * @description 创建基础配置、主题设置等存储项（仅当不存在时）
		 */
		initDefaultConfig() {
			if (base.getValue("setting_config_version") !== "1") base.initConfigMigration(1);
			// 设置新结构的默认值（仅当未设置时）
			let defaults = [
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
				// 如果 target 不存在，直接返回 source 的深拷贝
				if (target === null || target === undefined) {
					return cloneDeep(source);
				}
				// 如果类型不同，直接替换为 source
				if (typeof source !== typeof target) {
					return cloneDeep(source);
				}
				// 如果 source 是对象
				if (base.isType(source) === "object" && !Array.isArray(source)) {
					if (typeof target !== "object" || Array.isArray(target)) {
						return cloneDeep(source);
					}
					let result = { ...target };
					for (let key in source) {
						if (!source.hasOwnProperty(key)) continue;
						// 跳过 default 的自动合并
						if (key === "default") continue;
						if (key === "dir" && target[key] !== undefined) continue;
						if (key === "token" && target[key] !== undefined) continue;
						if (key === "authName" && target[key] !== undefined) continue;
						if (key === "authPass" && target[key] !== undefined) continue;
						result[key] = fillMissingFields(target[key], source[key]);
					}
					return result;
				}
				// 如果 source 是数组
				if (Array.isArray(source)) {
					if (!Array.isArray(target)) {
						return cloneDeep(source);
					}
					let result = [...target];
					if (source.length > 0 && base.isType(source[0]) === "object" && source[0] !== null) {
						let template = source[0];
						// 填充字段
						for (let i = 0; i < result.length; i++) {
							if (base.isType(result[i]) === "object" && result[i] !== null) {
								result[i] = fillMissingFields(result[i], template);
							} else {
								result[i] = cloneDeep(template);
							}
						}
						// 自动补充 default: true
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
				// 基本类型，保留原始值
				return target;
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
		 * 显示设置界面
		 * @author 油小猴
		 * @author hmjz100
		 * @description 构建包含 RPC 配置、终端类型等设置项的交互界面
		 * @see {@link https://www.youxiaohou.com/zh-cn/motrix.html#使用指南 RPC 配置说明}、 {@link https://www.youxiaohou.com/zh-cn/curl.html cURL 使用教程}
		 */
		showSetting(event) {
			let setting = $(`<div>
				<div style="text-align:center;">带星号的设置项目将在网页刷新后生效</div>
				<label class="pl-setting-item listener-tip aria2" data-title="有关 IDM 服务的配置">
					<div>IDM 服务器</div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-idm-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>配置</span></button>
				</label>
				<label class="pl-setting-item listener-tip aria2" data-title="有关 Aria2 远程服务的配置">
					<div>Aria2 服务器</div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-aria2-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>配置</span></button>
				</label>
				<label class="pl-setting-item listener-tip bitcomet" data-title="有关比特彗星远程服务的配置">
					<div>比特彗星服务器</div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-bitcomet-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>配置</span></button>
				</label>
				<label class="pl-setting-item listener-tip abdm" data-title="有关 AB Download Manager 远程服务的配置">
					<div>AB Download Manager 服务器</div>
					<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-open-abdm-setting" data-back-to-setting="true"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>配置</span></button>
				</label>
				<label class="pl-setting-item curl">
					<div>终端类型</div>
					<select class="swal2-select pl-input listener-terminal">
					${Object.keys(temp.terminalType).map(i => `<option value="${i}" ${base.getValue("setting_curl_terminal") === i ? "selected" : ""}>${temp.terminalType[i]}</option>`).join("")}
					</select>
				</label>
				<div class="curl" style="display:flex;justify-content:flex-end;"><a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" class="pl-a" data-no-instant="1"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-link"></use></svg> cURL使用教程</a>，适用于 cURL 下载👆</div>
				<div class="other" style="display:flex;justify-content:center;margin-top:20px"><button type="button" class="pl-button-mini swal2-deny swal2-styled listener-unregister listener-tip" data-title="仅会清除已存储的百度令牌，其余设置项目无影响，仍会保留"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>熄灭已经点亮的按钮*</span></button></div>
			</div>`);
			Swal.fire({
				...temp.swalDefault,
				title: "(｡•ᴗ•｡) 助手设置",
				html: setting.html(),
				icon: "info",
				iconHtml: "⚙︎",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "返回上页").css({ "left": "0", "right": "auto" }).text("◃");
					if (event && $(event.currentTarget).data("back-to-downloads")) element.find(".aria2, .bitcomet, .abdm, .other").hide();
				},
				willClose: () => {
					if (event && $(event.currentTarget).data("back-to-downloads")) base.showMainDialog(config.base.dom.button[temp.mode].title, base.generateDom(temp.links), config.base.dom.button[temp.mode].footer);
				},
			});
		},

		/**
		 * 显示 IDM 服务设置界面
		 * @author hmjz100
		 * @description 包含 RPC 配置的交互界面
		 */
		showIDMSetting(event) {
			let IDMList = base.getValue("setting_idm_rpc");
			let IDMOptions = IDMList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.id ? item.id : "0"}</option>`;
			}).join("");
			let IDMSelected = IDMList.find(i => i.default);
			let IDMSetting = `<div style="text-align:center;">适用于 IDM 推送下载</div>
				<label class="pl-setting-item">
					<div>默认配置</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="idm" style="max-width:50%;min-width:auto">
							${IDMOptions}<option value="new">+ 创建新项目</option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="idm"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>删除</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>客户标识</div>
					<input type="number" autocomplete="off" placeholder="用于标识 IDM 客户端扩展的标识" class="swal2-input pl-input listener-rpc-input" data-type="idm.id" value="">
				</label>
				<div style="text-align:start;margin-top:1em">
					<div>标识请使用以下方法获取：</div>
					<div>01. 确保已安装好 IDM 以及 IDM 浏览器扩展；</div>
					<div>02. 右键 IDM 扩展图标，进入 “管理扩展”；</div>
					<div>03. 在打开的浏览器的管理页面，滚动到下方；</div>
					<div>04. 选择 “检查视图” 右侧的任意一个选项进入；</div>
					<div>05. 在打开的 “DevTools” 窗口中，点击 “应用程序（Application）” 标签；</div>
					<div>06. 在左侧栏中找到 “扩展存储（Extension Storage）”，展开；</div>
					<div>07. 在展开的子项中选择 “本地（Local）”；</div>
					<div>08. 在右侧主视图中显示的表格中找到 “client” 对应数字值；</div>
					<div>09. 复制数字值，粘贴到上方的 “客户标识” 里；</div>
					<div>10. 去试着获取链接，选择发送到 IDM 看看吧！</div>
				</div>`;
			Swal.fire({
				...temp.swalDefault,
				title: "IDM 服务设置",
				html: IDMSetting,
				icon: "info",
				iconHtml: "⚙︎",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "返回上页").css({ "left": "0", "right": "auto" }).text("◃");
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
		 * 显示 Aria2 服务设置界面
		 * @author hmjz100
		 * @description 包含 RPC 配置的交互界面
		 * @see {@link https://www.youxiaohou.com/zh-cn/motrix.html#使用指南 RPC 配置说明}
		 */
		showAria2Setting(event) {
			let AriaList = base.getValue("setting_aria2_rpc");
			let AriaOptions = AriaList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
			}).join("");
			let AriaSelected = AriaList.find(i => i.default);
			let Aria2Setting = `<div style="text-align:center;"><a href="https://www.youxiaohou.com/zh-cn/motrix.html#使用指南" target="_blank" class="pl-a" data-no-instant="1"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-link"></use></svg> RPC配置说明</a>，适用于 Aria2 推送下载</div>
				<label class="pl-setting-item">
					<div>默认配置</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="aria2" style="max-width:50%;min-width:auto">
							${AriaOptions}<option value="new">+ 创建新项目</option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="aria2"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>删除</span></button>
						<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test" data-type="aria2" style="margin-left:0"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>测试</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>服务主机</div>
					<input type="text" autocomplete="off" placeholder="主机名，仅支持以及需带上 http(s)://，不支持 ws" class="swal2-input pl-input listener-rpc-input" data-type="aria2.domain" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务端口</div>
					<input type="text" autocomplete="off" placeholder="端口号，例如 Motrix 为 16800，Aria2 为 6800" class="swal2-input pl-input listener-rpc-input" data-type="aria2.port" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务路径</div>
					<input type="text" autocomplete="off" placeholder="访问路径，一般是 /jsonrpc" class="swal2-input pl-input listener-rpc-input" data-type="aria2.path" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务密钥</div>
					<input type="text" autocomplete="off" placeholder="无密钥无需填写" class="swal2-input pl-input listener-rpc-input" data-type="aria2.token" value="">
				</label>
				<label class="pl-setting-item">
					<div>存储路径</div>
					<input type="text" autocomplete="off" placeholder="文件下载后保存路径，例如 D:\\Downloads\\，留空则默认" class="swal2-input pl-input listener-rpc-input" data-type="aria2.dir" value="">
				</label>`;
			Swal.fire({
				...temp.swalDefault,
				title: "Aria2 服务设置",
				html: Aria2Setting,
				icon: "info",
				iconHtml: "⚙︎",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "返回上页").css({ "left": "0", "right": "auto" }).text("◃");
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
		 * 显示比特彗星服务设置界面
		 * @author hmjz100
		 * @description 包含 RPC 配置的交互界面
		 */
		showBitcometSetting(event) {
			let BCList = base.getValue("setting_bitcomet_rpc");
			let BCOptions = BCList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
			}).join("");
			let BCSelected = BCList.find(i => i.default);
			let BitcometSetting = `<div style="text-align:center;">适用于比特彗星推送下载</div>
				<label class="pl-setting-item">
					<div>默认配置</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="bitcomet" style="max-width:75%;min-width:auto">
							${BCOptions}<option value="new">+ 创建新项目</option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="bitcomet"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>删除</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>服务主机</div>
					<input type="text" autocomplete="off" placeholder="主机地址，需带上 http(s)://，但不需要写端口与路径" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.domain" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务端口</div>
					<input type="text" autocomplete="off" placeholder="服务器端口号，一般为 8080" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.port" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务路径</div>
					<input type="text" autocomplete="off" placeholder="一般是 /panel/task_add_httpftp_result" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.path" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务账号</div>
					<input type="text" autocomplete="off" placeholder="本地服务器账号，无账号无需填写" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.authName" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务密码</div>
					<input type="text" autocomplete="off" placeholder="本地服务器密码，无密码无需填写" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.authPass" value="">
				</label>
				<label class="pl-setting-item">
					<div>存储路径</div>
					<input type="text" autocomplete="off" placeholder="文件下载后保存路径，例如 D:\\Downloads\\，留空则默认" class="swal2-input pl-input listener-rpc-input" data-type="bitcomet.dir" value="">
				</label>`;
			Swal.fire({
				...temp.swalDefault,
				title: "比特彗星服务设置",
				html: BitcometSetting,
				icon: "info",
				iconHtml: "⚙︎",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "返回上页").css({ "left": "0", "right": "auto" }).text("◃");
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
		 * 显示 AB Download Manager 服务设置界面
		 * @author hmjz100
		 * @description 包含 RPC 配置的交互界面
		 */
		showABDMSetting(event) {
			let ABList = base.getValue("setting_abdm_rpc");
			let ABOptions = ABList.map((item, index) => {
				return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain}:${item.port}</option>`;
			}).join("");
			let ABSelected = ABList.find(i => i.default);
			let ABSetting = `<div style="text-align:center;">适用于 AB Download Manager 推送下载</div>
				<label class="pl-setting-item">
					<div>默认配置</div>
					<div>
						<select class="swal2-select pl-input listener-rpc-select" data-type="abdm" style="max-width:50%;min-width:auto">
							${ABOptions}<option value="new">+ 创建新项目</option>
						</select>
						<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-rpc-delete" data-type="abdm"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg><span>删除</span></button>
						<button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test" data-type="abdm" style="margin-left:0"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-plug"/></svg><span>测试</span></button>
					</div>
				</label>
				<label class="pl-setting-item">
					<div>服务主机</div>
					<input type="text" autocomplete="off" placeholder="主机地址，需带上 http(s)://，但不需要写端口与路径" class="swal2-input pl-input listener-rpc-input" data-type="abdm.domain" value="">
				</label>
				<label class="pl-setting-item">
					<div>服务端口</div>
					<input type="text" autocomplete="off" placeholder="服务器端口号，一般为 15151" class="swal2-input pl-input listener-rpc-input" data-type="abdm.port" value="">
				</label>
				<label class="pl-setting-item">
					<div>存储路径</div>
					<input type="text" autocomplete="off" placeholder="文件下载后保存路径，例如 D:\\Downloads\\，留空则默认" class="swal2-input pl-input listener-rpc-input" data-type="abdm.dir" value="">
				</label>`;
			Swal.fire({
				...temp.swalDefault,
				title: "ABDM 服务设置",
				html: ABSetting,
				icon: "info",
				iconHtml: "⚙︎",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
				didOpen: (toast) => {
					let element = $(toast);
					if (event && Object.keys($(event.currentTarget).data()).some(key => key.startsWith("backTo"))) element.find(".swal2-close").addClass("listener-tip").attr("data-title", "返回上页").css({ "left": "0", "right": "auto" }).text("◃");
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
		 * 显示美化设置界面
		 * @author hmjz100
		 * @description 提供主题颜色选择器和各网盘界面美化配置
		 * @fires .listener-color - 主题色选择事件
		 * @fires .listener-theme - 网盘主题配置变更事件
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
					{ name: "百度网盘", key: "$baidu" },
					{ name: "阿里云盘", key: "$aliyun" },
					{ name: "移动云盘", key: "$mcloud" },
					{ name: "天翼云盘", key: "$tcloud" },
					{ name: "迅雷云盘", key: "$xunlei" },
					{ name: "夸克网盘", key: "$quark" },
					{ name: "UC 网盘", key: "$uc" },
					{ name: "123 云盘", key: "$123pan" }
				];
				return themeList.map(item => {
					return `<label class="pl-setting-item">
						<div>${item.name}</div>
						<input type="checkbox" class="swal2-checkbox pl-input listener-theme" data-type="${item.key}" ${base.getValue("setting_ui_theme").custom[item.key] === true ? "checked" : ""}>
					</label>`;
				}).join("");
			}
			let beautify = $(`<div>
				<div style="text-align:center;">带星号的美化项目将在网页刷新后生效</div>
				<label class="pl-setting-item" style="justify-content:center"><div class="pl-color">${changeColor()}</div></label>
				<div class="pl-setting-item"><div>替换界面配色为主题颜色*</div><div class="pl-checkboxies">${changeTheme()}</div></div>
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
				title: "(✿ᴗ‿ᴗ) 助手美化",
				html: beautify.html(),
				icon: "success",
				iconHtml: "🍃︎",
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
			});
		},

		/**
		 * 显示调试信息面板
		 * @description 展示脚本运行时环境、版本信息及依赖状态
		 * @author hmjz100
		 * @property{String} manageHandler - 外部管理器名称
		 * @property{String} manageVersion - 外部管理器版本
		 */
		showDebug() {
			let debugInfo = "";
			debugInfo += `<span>以下内容均为脚本自检信息<br/>本页面仅作为调试使用<span>`;
			debugInfo += `<label class="pl-setting-item"><div>[外] 管理器名称</div>${info.mhandler ? info.mhandler : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[外] 管理器版本</div>${info.mversion ? info.mversion : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[内] 脚本挂载点</div>${mount ? `${mount.toLowerCase()}.${mount}` : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[外] 脚本名称</div>${info.name ? info.name : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[外] 脚本作者</div>${info.author ? info.author : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[外/内] 脚本版本</div>${info.version ? info.version : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[外/内] 脚本图标</div>${info.icon ? `<img style="max-width:30%" src="${info.icon}"></img>` : "无法获取"}</label>`;
			debugInfo += `<label class="pl-setting-item"><div>[内] 公众号二维码</div>${config.base?.service?.account ? `<img style="max-width:30%" src="${config.base.service.account}"></img>` : "无法获取"}</label>`;
			debugInfo = "<div>" + debugInfo + "</div>";
			Swal.fire({
				...temp.swalDefault,
				icon: "info",
				title: "调试信息",
				html: debugInfo,
				allowOutsideClick: false,
				showCloseButton: true,
				footer: `<p><a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;&#47;&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;" target="_blank" class="pl-a"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg>&#76;&#105;&#110;&#107;&#83;&#119;&#105;&#102;&#116;</a>&#32;&#30001;&#32;<a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#103;&#105;&#116;&#104;&#117;&#98;&#46;&#99;&#111;&#109;&#47;&#104;&#109;&#106;&#122;&#49;&#48;&#48;" target="_blank" class="pl-a">&#104;&#109;&#106;&#122;&#49;&#48;&#48;</a>&#32;&#21046;&#20316;</p><p>${config.base.dom.footer}</p>`,
			});
		},

		/**
		 * 显示版本更新日志
		 * @author hmjz100
		 * @description 按时间倒序展示所有历史版本更新内容
		 */
		async showUpdate() {
			await Swal.fire({
				...temp.swalDefault,
				icon: "info",
				title: "更新日志",
				html: `<div class="version-log">
				<div class="block">
					<blockquote>
						<div>风雨送春归，飞雪迎春到。已是悬崖百丈冰，犹有花枝俏。</div>
						<div>俏也不争春，只把春来报。待到山花烂漫时，她在丛中笑。</div>
					</blockquote>
				</div>
				<div class="block">(ﾉ◕ヮ◕)ﾉ 遇到 Bug 要记得去 <a class="pl-a" href="https://github.com/hmjz100/LinkSwift/issues" target="_blank">Github 议题</a> 向我报告哦~</div>
				<div class="block">(o゜▽゜)o☆ 觉得好用？来一同完善本项目吧~ 欢迎提交<a class="pl-a" href="https://github.com/hmjz100/LinkSwift/pulls" target="_blank">拉取请求</a>为本项目做贡献~</div>
				<div class="block">
					<name>V1.1.3</name>
					<div>
					<div>LinkSwift 开发者在此祝您新春快乐！</div>
					<div>爆竹声中一岁除，春风送暖入屠苏。LinkSwift 迎来功能更新：</div>
					<div>1、新增 - IDM 客户端设置；</div>
					<div>2、优化 - 链接缓存、浮动提示框；</div>
					<div>3、适配 - 百度网盘分享页。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.2.1</name>
					<div>
					<div>1、新增 - API 下载的推送到 IDM 功能；</div>
					<div style="margin-left:10px">（感谢 <a href="https://github.com/Night-stars-1" target="_blank">Night Stars</a> 的帮助）</div>
					<div>2、修复 - 复制 Aria2、cURL 命令行错误。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.2</name>
					<div>
					<div>1、适配 - 123 云盘新策略；</div>
					<div>2、适配 - 夸克、UC 网盘分享页；</div>
					<div>3、新增 - 增强下载的多块多线程支持；</div>
					<div>4、优化 - 页面绿化的部分匹配规则；</div>
					<div>5、优化 - 增强下载进度条样式。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.9</name>
					<div>
					<div>1、修复 - 123 云盘下载视频变为缩略图。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.8</name>
					<div>
					<div>1、修复 - 适配新版 123 云盘分享页。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.7</name>
					<div>
					<div>1、修复 - 缺失声明 @connect 导致的问题。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.6</name>
					<div>
					<div>1、<span style="color:#fff;background:${temp.color}">废弃 - 百度网盘 BDUSS Cookie 相关代码，转向使用更安全的 AccessToken</span>；</div>
					<div>2、废弃 - 百度网盘分享页面下载相关代码；</div>
					<div>3、优化 - 下载窗口可在设置改变后动态修改界面。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.5</name>
					<div>
					<div>1、新增 - AB Download Manager 下载方式；</div>
					<div>2、优化 - 支持从设置页面一键返回下载窗口，无需重复获取链接。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.4</name>
					<div>
					<div>1、适配 123 云盘新版页面。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.3</name>
					<div>
					<div>1、修复夸克网盘无法获取下载链接的 Bug；</div>
					<div>2、修复 API 下载无法复制全部链接。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.2</name>
					<div>
					<div>1、修复无法删除第一项远程配置的 Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1.1</name>
					<div>
					<div>1、修复推送至 Aria2 时推送成功但报错的 Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.1</name>
					<div>
					<div>1、配置文件格式更新，<span style="color:#fff;background:${temp.color}">支持添加、删除、切换多个服务配置</span>；</div>
					<div>2、支持比特彗星推送下载，<span style="color:#fff;background:${temp.color}">原 RPC 已并入 Aria2 下载</span>；</div>
					<div>3、界面<span style="color:#fff;background:${temp.color}">增加 Font Awesome 图标！</span>更好看啦；</div>
					<div>4、优化脚本代码、界面，运行更轻快；</div>
					<div>5、修复上个版本遗存的问题。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.1.0.1</name>
					<div>
					<div>1、修复查看 RPC 下载任务的 Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.1.0</name>
					<div>
					<div>1、支持 UC 网盘、123 云盘；</div>
					<div>2、改进了网盘主题的注入方式；</div>
					<div>3、聚合并重构了部分重复函数，对整体脚本逻辑进行了梳理和精简；</div>
					<div>4、将脚本执行阶段从 document-body 适配为 document-start。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.9.7</name>
					<div>
					<div>1、修复移动云盘下载错误；</div>
					<div>2、优化代码，更好的错误识别；</div>
					<div>3、去除了油小猴云服务。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.6</name>
					<div>
					<div>1、支持在百度网盘中选择文件夹下载；</div>
					<div>2、优化部分提示。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.5</name>
					<div>
					<div>1、修复因代码逻辑错误而无法获取链接的 Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.4</name>
					<div>
					<div>1、修复因百度网盘 AccessToken 过期导致无法获取链接的 Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.3</name>
					<div>
					<div>1、若网盘不支持在分享中下载，将仅显示保存网盘按钮；</div>
					<div>2、优化下载界面，支持选择 Iframe 或 Blob 的方式来下载文件，增加按钮的提示文本；</div>
					<div>3、优化 CSS 样式，统一了 SweetAlert2 按钮样式，同时适配了 Dark Reader 插件，界面更协调；</div>
					<div>4、支持修改油小猴网站主题色；</div>
					<div>5、原有主题相关设置现已移动至助手美化页面中。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.2</name>
					<div>
					<div>1、修复使用API 下载时有可能会导致IDM无限弹窗的Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9.1</name>
					<div>
					<div>1、修复在百度网盘旧版下脚本无法删除元素的Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.9</name>
					<div>
					<div>1、跟进官方V6.2.7，修复因无法进行百度授权而导致获取直链报错 9019 的 Bug。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.8.9</name>
					<div>
					<div>1、跟进官方V6.2.3，优化保存到网盘提示，修复阿里云盘、移动云盘失效的问题；</div>
					<div>2、优化修改网盘主题的代码，减少对页面的破坏。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.8</name>
					<div>
					<div>1、修复下载菜单字体过小的Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.7</name>
					<div>
					<div>1、修复在阿里云盘分享页面下点击“未点亮”按钮时没有任何反应的Bug；</div>
					<div>2、更新并优化网盘界面精简规则；</div>
					<div>3、支持更换 百度网盘、阿里云盘、迅雷云盘、夸克网盘、移动云盘 界面的主题颜色。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.6</name>
					<div>
					<div>1、新增移动云盘会员中心页面，可在网盘中点击“会员中心”按钮查看(但无法使用第三方支付)。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.5</name>
					<div>
					<div>1、跟进官方V6.1.6，修复迅雷网盘分享页面无法选中文件，修复移动云盘无法判断页面。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.4</name>
					<div>
					<div>1、修复因重复绑定按钮而导致命令重复执行的Bug；</div>
					<div>2、优化调试信息界面排版；</div>
					<div>3、移除对百度网盘手机网页版的支持。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.3</name>
					<div>
					<div>1、适配阿里云盘新域名alipan.com。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.2</name>
					<div>
					<div>1、更换新图标。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.8.1</name>
					<div>
					<div>1、修复因重复绑定按钮而导致 RPC 下载会发送多条下载请求的Bug；</div>
					<div>2、选择不使用油小猴服务器时，“用ghproxy连接Github仓库”更换为“用jsdelivr连接Github仓库”；</div>
					<div>3、跟进官方V6.1.4版本，修复移动网盘无法获取链接，支持阿里云盘新域名alipan.com。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.8</name>
					<div>
					<div>1、修复迅雷网盘无法勾选文件。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.9</name>
					<div>
					<div>1、更新精简网盘元素匹配规则，防止因通知横条而导致不能点到“API 下载”以下的按钮。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.8</name>
					<div>
					<div>1、跟进官方V6.1.2，加入V2接口。</div>
					<div>2、修复百度网盘下载时因为获取不到accessToken而一直转圈。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.7</name>
					<div>
					<div>1、修复百度网盘的按钮会因为主题不同而被改变颜色的Bug；</div>
					<div>2、更新夸克网盘按钮与界面。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.6</name>
					<div>
					<div>1、修复“注入”功能；</div>
					<div>2、黑暗模式支持随设置热切换。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.5</name>
					<div>
					<div>1、修复阿里云盘下载逻辑；</div>
					<div>2、精简代码；</div>
					<div>3、支持深色模式；</div>
					<div>4、修改部分提示文本；</div>
					<div>5、修改部分CSS；</div>
					<div>6、设置可测试RPC连接。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.4</name>
					<div>
					<div>1、优化下载逻辑；</div>
					<div>2、修复阿里云盘无法使用API 下载。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.3</name>
					<div>
					<div>1、如果出现网络请求错误时支持自动重新请求；</div>
					<div>2、可选择是否使用油小猴服务器。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.2</name>
					<div>
					<div>1、修复使用 RPC 下载时会重复发送链接的Bug。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7.1</name>
					<div>
					<div>[实验功能，不影响正常使用]支持百度网盘手机网页版，勾选文件后可在顶栏找到“下载助手”按钮。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.7</name>
					<div>
					<div>1、重构夸克网盘、阿里云盘按钮。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.6.9</name>
					<div>
					<div>1、下载窗口加入关闭按钮。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.8</name>
					<div>
					<div>1、修复夸克网盘按钮错位。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.7</name>
					<div>
					<div>1、将百度网盘界面修改为主题色，可在设置选择是否修改；</div>
					<div>2、增加主题色名称，更改部分内容颜色；</div>
					<div>3、移动云盘API 下载支持批量复制；</div>
					<div>4、优化控制台输出结果；</div>
					<div>5、百度网盘API 下载不使用IDM时可以显示剩余时间；</div>
					<div>6、“取消点亮按钮”按钮的位置现已移动到设置页面。</div>
					<div>7、homo特有的彩蛋又回来力(喜)。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.6</name>
					<div>
					<div>1、修复暗号错误。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.5</name>
					<div>
					<div>1、修复即使输入正确暗号也不能成功点亮按钮的服务器错误。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.4</name>
					<div>
					<div>1、跟进官方V6.1.1版本，修复阿里云盘获取下载链接时的问题。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.3</name>
					<div>
					<div>1、照顾小屏幕用户，将始终显示复制全部链接的按钮；</div>
					<div>2、增加取消下载时的动画。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.2</name>
					<div>
					<div>1、修复部分界面错位，实现CSS内置；</div>
					<div>2、百度网盘界面将变得更加简洁。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6.1</name>
					<div>
					<div>1、新增百度云盘API 下载支持复制链接；</div>
					<div>2、为了照顾手机浏览器用户，增大项目之间间隙，新增隐藏IDM提示选项，可在助手设置中启用；</div>
					<div>3、修改CSS，界面会出现更多的主题色；</div>
					<div>4、支持在油小猴官网查看暗号；</div>
					<div>5、修复部分语法错误。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.6</name>
					<div>
					<div>1、修复了打开阿里云盘分享连接时因下载移动端广告导致只能点击 API 下载；</div>
					<div>2、跟进官方6.0.4版本，修复夸克网盘获取下载链接失效、支持移动云盘。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.5.5</name>
					<div>
					<div>1、感谢<a href="https://github.com/Night-stars-1" target="_blank">Night Stars</a>的帮助，修复因为原作者服务器导致的初始化暗号识别错误；</div>
					<div>2、修改一些文本以及提供给服务器的信息。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.4</name>
					<div>
					<div>1、小修小改css，让主题色出现在更多地方；</div>
					<div>2、修改下载链接获取失败的提示；</div>
					<div>3、增加更多的主题色，可在助手设置查看；</div>
					<div>4、homo彩蛋被删去力（悲）。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.3</name>
					<div>
					<div>1、修啦修啦，阿里云盘可以摸到下载菜单了。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.2</name>
					<div>
					<div>1、增加脚本信息菜单（没有用）；</div>
					<div>2、优化阿里云盘显示svg图片；</div>
					<div>3、修改弹窗按钮颜色。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5.1</name>
					<div>
					<div>1、修复在切换按钮主题后夸克网盘不能正常显示按钮。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.5</name>
					<div>
					<div>1、跟进官方V5.0.4版本；</div>
					<div>2、小改动，照着官方版本更正文件名称检测；</div>
					<div>3、保留彩蛋，但必须舍弃官方暗号。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.4</name>
					<div>
					<div>大改！</div>
					<div>1、修复了原作者留下的夸克网盘切换文件夹就多一个“下载助手”按钮的大BUG；</div>
					<div>2、终于来了，在下载菜单增加“助手设置”“更新日志”按钮；</div>
					<div>【再也不用点进油猴管理再进设置了(保留油猴管理内设置)】</div>
					<div>3、修改阿里云盘和夸克网盘下载助手按钮样式；</div>
					<div>4、增加“取消点亮按钮”油猴菜单；</div>
					<div>5、修改部分css，使其与选择的主题更贴切。</div>
					</div>
				</div>
				<hr/>
				<div class="block">
					<name>V1.0.3</name>
					<div>
					<div>1、增加一个小彩蛋； 提示：</div>
					<div>homo（需在未点亮按钮状态触发）</div>
					<div>【需要重新恢复按钮为未点亮状态请进入 已安装脚本->编辑->开发者->重置到出厂->确定】</div>
					<div>2、修改/增加默认主题色。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.2</name>
					<div>
					<div>1、修改并加宽界面，调整部分css，使Sweetalert2界面更美观，更与原版相近；</div>
					<div>2、修改部分提示文字，使文字更容易复制。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.1</name>
					<div>
					<div>1、去除更新提示；</div>
					<div>2、更新Sweetalert2至11版本；</div>
					<div>3、部分CDN节点更换为jsdelivr。</div>
					</div>
				</div>
				<div class="block">
					<name>V1.0.0</name>
					<div>
					<div>1、增加“注入”功能（bushi）；</div>
					<div>2、去除广告。</div>
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
				confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 我已阅`,
			});
		},

		/**
		 * 创建浮动指示框
		 * @description 一个究极好用的指示框，支持监听元素悬停事件动态改变位置，亦能显示文件名与大小
		 * @author 油小猴
		 * @author hmjz100
		 * @fires .listener-tip - 鼠标移动事件触发指示框定位
		 * @see {@link temp.color} 使用全局主题色渲染文件大小信息
		 */
		createTip() {
			let tooltip = document.querySelector(".pl-tooltip");
			let ticking = false; // 用于 rAF 节流
			let currentTarget = null;

			// 更新位置
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
				// 使用 translate3d 的性能远高于 top/left，它不触发布局计算，还拥有 GPU 加速
				tooltip.style.transform = `translate3d(${X}px, ${Y}px, 0)`;
			};

			// 内容渲染
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
					tooltip.style.willChange = "transform"; // 告知浏览器提前准备层合成
					tooltip.style.pointerEvents = "none"; // 防止指示框挡住鼠标导致抖动
					temp.mount[0].appendChild(tooltip);
				}

				tooltip.innerHTML = html;
				tooltip.style.display = "flex";
			};

			// 事件处理
			var handleMove = (e) => {
				if (!currentTarget) return;

				// 获取坐标，PointerEvent 统一了 clientX/Y
				var x = e.pageX;
				var y = e.pageY;

				if (!ticking) {
					// 使用 requestAnimationFrame 节流，确保每帧只更新一次位置
					requestAnimationFrame(() => {
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
				// 只有离开到非 tooltip/listener-tip 区域才隐藏
				var related = e.relatedTarget;
				if (!related || !related.closest(".listener-tip, .pl-tooltip")) {
					currentTarget = null;
					if (tooltip) tooltip.style.display = "none";
				}
			};

			// 事件监听
			document.addEventListener("pointerover", handleOver);
			document.addEventListener("pointermove", handleMove, { passive: true }); // 使用 passive: true 提升滚动性能
			document.addEventListener("pointerout", handleOut);
		},

		/**
		 * 创建加载状态弹窗
		 * @author 油小猴
		 * @description 生成包含旋转动画的加载容器
		 */
		createLoading() {
			return $(`<div class="pl-loading"><div class="pl-loading-box"><div><div></div><div></div></div></div></div>`);
		},

		/**
		 * 创建用于下载的隐藏 iframe
		 * @author 油小猴
		 * @description 该方法会创建一个隐藏的 iframe 元素，并将其插入到指定的挂载点中，用于后续的下载操作。
		 * iframe 的 src 设置为 "javascript:;" 以避免加载额外资源，提升性能。
		 */
		createIframe() {
			let iframe = $(`<iframe style="padding:0;margin:0;display:block;display:none" src="javascript:;" id="downloadIframe"></iframe>`);
			temp.mount.append(iframe);
		},

		/**
		 * 创建用于下载页面的 HTML
		 * @author 油小猴
		 * @author hmjz100
		 * @param {Array} configs - 用于配置生成 HTML 的参数
		 * @returns {String} 生成的 HTML 内容
		 * @description 详见代码
		 */
		generateDom(configs) {
			if (base.isType(configs) !== "array" && configs.length !== 2) return message.error("提示：<br/>配置解析失败~");
			let list = (Array.isArray(configs[0]) ? configs[0] : []);
			if (!list.length) return message.error("提示：<br/>获取下载链接失败，刷新网页后再试试吧~");
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
						<div class="pl-item-message">${dlink ? dlink : "获取下载链接失败，刷新网页后再试试吧~"}</div>
					</div>`)
				} else {
					// 手机专用版：统一展示复制类操作
					temp.mode = "mobile";
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
						<button class="pl-item-copy pl-btn-primary pl-btn-default listener-copy listener-tip" data-copy-encoded="1" data-copy='${esc1}' data-title="复制后打开 1DM+ → 从剪贴板添加"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>1DM+</button>
						<button class="pl-item-copy pl-btn-primary pl-btn-info listener-copy listener-tip" data-copy-encoded="1" data-copy='${escY}' data-title="复制后打开 ytdlnis 导入"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>ytdlnis</button>
						<button class="pl-item-copy pl-btn-primary pl-btn-warning listener-copy listener-tip" data-copy-encoded="1" data-copy='${escLink}' data-title="仅复制直链"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>直链</button>
						<button class="pl-item-copy pl-btn-primary pl-btn-success listener-copy listener-tip" data-copy-encoded="1" data-copy='${escName}' data-title="复制文件名"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>文件名</button>
					</div>`);

				}
			});
			allLink = (allLink ? allLink.join("\r\n") : "");
			// 手机版底部操作
			if (list.length >= 2 && allLink) {
				content.find(".pl-extra").append(`<button class="pl-btn-primary pl-btn-default mobile listener-copy listener-tip" data-copy-encoded="1" data-copy='${encodeURIComponent(allLink)}' data-title="复制全部文件的 1DM+ 格式文本"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>复制全部给 1DM+</button>`);
			}
			// 分享页：自动附加「链接+提取码」按钮，并在首次展示时自动复制一次
			(function () {
				let info = base.collectShareInfo();
				if (!info) return;
				let shareText = base.buildShareText(info);
				if (!shareText || (!info.pwd && !info.url && !info.fullUrl)) return;
				content.find(".pl-extra").append(`<button class="pl-btn-primary pl-btn-success listener-copy listener-tip" data-copy-encoded="1" data-copy='${encodeURIComponent(shareText)}' data-title="复制分享链接与提取码，可直接发给他人"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>复制分享链接+提取码</button>`);
				if (!temp._shareAutoCopied && info.pwd) {
					temp._shareAutoCopied = true;
					try { base.setClipboard(shareText); message.success("已自动复制分享链接+提取码"); } catch (e) {}
				}
			})();
			function updateTooltip($element, value) {
				if (!value) return;
				$element.addClass("listener-tip");
				if (value.startsWith("+")) {
					// 追加模式：去掉开头的 "+"，然后拼接到现有 data-title
					var newValue = value.substring(1);
					var existingTitle = $element.attr("data-title") || "";
					$element.attr("data-title", existingTitle + newValue);
				} else {
					// 替换模式
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
		 * 获取镜像列表
		 * @author 油小猴
		 * @description 根据原始链接和镜像域名列表生成多个镜像链接，支持多线程下载。
		 * 每个镜像地址会根据 thread 参数生成多个重复链接（通过添加 `&` 符号区分）。
		 * @param {String} link - 原始下载链接
		 * @param {Array<String>} mirror - 镜像域名数组
		 * @param {Number} [thread=2] - 每个镜像生成的线程数（链接重复次数），默认为 2
		 * @returns {String} 所有镜像链接组成的字符串，每行一个链接
		 *
		 * @example
		 * getMirrorList("https://example.com/file.zip", ["mirror1.com", "mirror2.com"], 2)
		 * // 返回:
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
		 * 添加页面元素监听
		 * @author 油小猴
		 * @author hmjz100
		 * @description 详见代码
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
				message.warning("正在“注入”设置项目...");
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
					status.down_enhance_downing.find(".pl-progress .text").text("正在取消...");
					status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
					await base.sleep(1050);
					status.down_enhance_downing.find(".back").click();
				}
			});
			$doc.on("click", ".pl-item-downing .back", async function (e) {
				var status = base._EventFactory(e);
				status.down_enhance_downing.find(".pl-progress .text").text("正在加载...");
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
				target.text("下载开始，进度见上方按钮哦~").animate({ opacity: "0.5" }, "slow");
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
				target.text("发送完成，结果见上方按钮哦~").animate({ opacity: "0.5" }, "slow");
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
					target.html(`<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg>复制成功`).animate({ opacity: "0.5" }, "slow");
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
				select.html(`${options}<option value="new">+ 创建新项目</option>`);
			});
			$doc.on("click", ".listener-rpc-delete", async function (e) {
				let type = $(this).data("type");
				let list = base.getValue(`setting_${type}_rpc`);
				let selectedIndex = parseInt($(".listener-rpc-select option:selected").val(), 10);
				if (selectedIndex === "new" || !confirm("您确定要删除此项目吗？")) return;
				list = list.filter((_, i) => i !== selectedIndex);
				if (list.length === 0) return alert("至少保留一个配置");
				let newDefaultIndex = selectedIndex === 0 ? 0 : selectedIndex - 1;
				list[newDefaultIndex].default = true;
				base.setValue(`setting_${type}_rpc`, list);
				let select = $(".listener-rpc-select");
				let options = list.map((item, index) => {
					return `<option value="${index}"${item.default ? " selected" : ""}>${item.domain ? item.domain : ""}:${item.port ? item.port : ""}${item.path ? item.path : ""}</option>`;
				}).join("");
				select.html(`${options}<option value="new">+ 创建新项目</option>`);
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
					text.html("等待");
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
						text.html("成功");
						element.css({ "background-color": "#52c41a" });
					} else {
						text.html("失败");
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
				// 手机专用版：所有下载入口统一走 mobile
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
					title: "获取中",
					html: `...`,
					footer: "如果选的文件较多，请耐心等待获取完成哦！",
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
		 * 创建基础样式
		 * @author 油小猴
		 * @author hmjz100
		 * @description 为组件添加默认的公共样式，包括浅色和深色模式适配样式。
		 */
		addPanLinkerStyle() {
			temp.color = base.getValue("setting_ui_theme").color;
			if ("beautifyPage" in temp.main) temp.main.beautifyPage();
			base.addStyle("swal-pub-style", "style", `@media (prefers-color-scheme:light){${__SWAL_LIGHT_CSS}}`);
			base.addStyle("swal-pub-dark-style", "style", `@media (prefers-color-scheme:dark){${__SWAL_DARK_CSS.replace(/#19191a/, "#222226")}}`);
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

/* 手机专用版：隐藏桌面端 RPC / 终端配置 */
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
/* 适配（改）百度网盘会员青春版 */
a.downloadSubtitle, button.downloadSubtitle{transition:all.2s;background-color:${temp.color}}
a.downloadSubtitle:hover, button.downloadSubtitle:hover{background-color:${temp.color}D0}
a.downloadSubtitle:disabled, button.downloadSubtitle:disabled{background-color:${temp.color}D0}
/* 哪里都没用到的 RGB! */
@keyframes RGB{ 0%{filter:hue-rotate()} to{filter:hue-rotate(-360deg)} }
/* Webkit, Opera, IE9, Chrome*/
::selection, ::-webkit-selection, ::-moz-selection, ::-ms-selection{background-color:${temp.color}!important;background:${temp.color}!important;color:white!important}
`);
		},

		/**
		 * 初始化引导弹窗
		 * @author 油小猴
		 * @author hmjz100
		 * @description 显示初始化对话框，引导用户进行配置或跳过流程。
		 * 支持输入特定数字触发彩蛋，并自动注入默认设置点亮功能。
		 * @returns {Promise<void>} 弹窗关闭后返回空值，可能触发页面刷新
		 */
		async showInitDialog() {
			var dialog = await Swal.fire({
				...temp.swalDefault,
				title: `(◍•ᴗ•◍)/ 你好呀`,
				html: `<div class="pl-init-content">
					<p>
						我就直说了吧…<br/>你可以按下下方的 <span style="color:red">红色按钮</span> 跳过这一有趣的流程<br/>
						或者继续输入一些神秘的 <span class="listener-tip" data-title="乙烯一克，一克一克一克……锕！<br/>　　　　　　▃▃▆█▇▄▖<br/>　　　　▟◤▖　　　　◥█▎<br/>　　◢◤　　▐　　　　　▐▉<br/>　▗◤　　▂　　▗▖　　　▕█▎<br/>　◤　▗▅▖◥▄　▀◣　　　　█▊<br/>▐　▕▎◥▖◣◤　　　　　◢██<br/>█◣　◥▅█▀　　　　　▐██◤<br/>▐█▙▂　　　　　　◢██◤<br/>　◥██◣　　　　◢▄◤<br/>　　　▀██▅▇▀" style="font-style:italic;color:#412300;background-color:#d0b164">“恶臭数字”</span><br/>解锁隐藏（大嘘）彩蛋
					</p>
					<p>
						如果您喜欢这个脚本的话<br/>
						请支持原版作者 <a class="listener-tip pl-a" target="_blank" href="https://www.youxiaohou.com" data-title='${config.base.service.account ? `的微信公众号……<br/><img style="width:250px" src="${config.base.service.account}">` : ""}'><svg class="pl-icon"><use xlink:href="#pl-icon-si-tampermonkey"></use></svg> 油小猴</a><br/>
						并给此改版点个 <a class="listener-tip pl-a" target="_blank" href="https://github.com/hmjz100/LinkSwift/" data-title="来看看此项目的 Github 页面吧~"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-star"></use></svg> Star</a>？
					</p>
					<p>脚本不仅能精简网盘界面<br/>点亮后还能修改多个网盘的主题色哦！</p>
				</div><style>.pl-init-content p{margin:10px 0!important}</style>`,
				input: "text",
				inputAttributes: {
					autocapitalize: "off",
					placeholder: "输入内容..."
				},
				customClass: {
					input: "center-input"
				},
				showLoaderOnConfirm: true,
				preConfirm: async (code = "") => {
					try {
						if (!code?.trim?.()) return Swal.showValidationMessage("错误：提取码不能为空");
						code = code.trim();
						if (["114514", "1919810", "1145141919810"].includes(code)) return "homo";
						return Swal.showValidationMessage(`错误：错误的神秘数字`);
					} catch (error) {
						return Swal.showValidationMessage(`错误：${error}`);
					}
				},
				showCloseButton: true,
				showDenyButton: true,
				denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-unlock-keyhole"></use></svg> 懒得输入...我要直接点亮！`,
				allowOutsideClick: false,
			});
			if (dialog.isDenied) {
				message.warning("正在“注入”设置项目...");
				await base.sleep(2500);
				let list = base.getValue("setting_init");
				list.code = config.base.num;
				list.license = config.base.license;
				base.setValue("setting_init", list);
				message.success("“注入”成功啦!");
				await base.sleep(1500);
				location.reload();
			};
			if (dialog.isConfirmed && dialog.value === "homo") {
				// https://pic1.zhimg.com/v2-1b97a088e156c015108dec663bba8b04.avis
				await Swal.fire({
					...temp.swalDefault,
					icon: "error",
					title: "1145141919810",
					html: "<span>homo特有的数字当然不行啦<br/>哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>",
					timer: 4000,
					imageUrl: "data:image/png;base64,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",
					allowOutsideClick: false,
					timerProgressBar: true,
					showConfirmButton: false,
					showDenyButton: true,
					denyButtonText: "哼哼哼啊啊啊啊啊啊啊啊啊啊",
				});
				message.info("成就：你触发了一个homo特有的彩蛋！");
				await base.sleep(4000)
				// https://lh1.hetaousercontent.com/img/7d4c1c0b4adb0e95.jpg
				Swal.fire({
					...temp.swalDefault,
					title: "1145141919810",
					text: "homo特有的数字当然不行啦...吗？",
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
				message.success("成就：哼哼哼啊啊啊啊啊啊啊啊地注入成功(喜)");
				await base.sleep(1500)
				location.reload();
			}
		},

		/**
		 * 显示主对话框
		 * @author 油小猴
		 * @author hmjz100
		 * @description 使用 SweetAlert2 显示一个自定义样式的对话框，用于展示信息或操作提示。
		 * @param {String} title - 对话框标题
		 * @param {String} html - 对话框内容的 HTML 字符串
		 * @param {String} footer - 对话框底部说明文字
		 */
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
				confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 关闭`,
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
		 * 等待指定元素加载完成并执行回调
		 * @author hmjz100
		 * @description 监听 DOM 元素是否出现，若未出现则每隔一段时间重试，直到找到为止。
		 * 支持在 iframe 内部查找元素，适用于异步加载场景。
		 * @param {String} selectorElem - 要等待的目标元素选择器
		 * @param {Function} actionFunction - 找到元素后执行的回调函数，接收 jQuery 元素作为参数，返回 true 可以不再继续寻找
		 * @param {Boolean} [bWaitOnce=false] - 是否只执行一次回调，默认为 false，如果不设置为 true 的话需要自行判断是否对元素进行操作
		 * @param {String} [iframeSelector] - 若目标元素位于 iframe 中，传入 iframe 的选择器
		 * @param {String} [controlKey] - 控制唯一性的键名，用于避免重复处理
		 */
		waitForKeyElements(selectorElem, actionFunction, bWaitOnce, iframeSelector, controlKey) {
			// 初始化管理器
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
			if (!targetDoc) return; // 无效文档直接返回
			// 生成唯一控制键
			controlKey = controlKey || `wkfe_${manager.instanceCounter++}`;
			// 清理重复任务
			var existingTask = manager.tasks.get(controlKey);
			if (existingTask) {
				existingTask.observer.disconnect();
				manager.tasks.delete(controlKey);
			}
			// 创建MutationObserver回调
			var processElements = () => {
				var elements = $(selectorElem, targetDoc);
				let foundActive = false;
				elements.each((i, el) => {
					var jEl = $(el);
					var isProcessed = jEl.data(controlKey);
					if (isProcessed) return true; // 跳过已处理元素
					var cancelAction = actionFunction(jEl);
					if (cancelAction) {
						foundActive = true;
					} else if (bWaitOnce) {
						jEl.data(controlKey, true); // 标记已处理
					}
				});
				// 一次性任务且找到有效元素时清理
				if (bWaitOnce && foundActive) {
					observer.disconnect();
					manager.tasks.delete(controlKey);
				}
			};
			// 创建Observer实例
			var observer = new MutationObserver(processElements);
			// 配置并启动观察
			observer.observe(targetDoc.documentElement, {
				childList: true,
				subtree: true,
				attributes: true,
				characterData: true
			});
			// 注册任务
			manager.tasks.set(controlKey, {
				observer,
				targetDoc
			});
			// 立即执行初始检查
			processElements();
		},

		/**
		 * 状态工厂
		 * @author 油小猴
		 * @author hmjz100
		 * @description 接受被监听的 DOM 元素的状态，根据状态确定元素是谁
		 * @param {Event} event - 元素状态
		 */
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
	 * 百度网盘
	 * @author 油小猴
	 * @author hmjz100
	 */
	let $baidu = {
		async getToken() {
			try {
				$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取授权状态~</div>`);
				// 获取授权状态
				let authorize = await base.getFinal(config.$baidu.api.getAccessToken, { Origin: "", Referer: "" }, true);
				let accessToken = "";
				// 判断授权情况
				if (authorize.includes("authorize")) {
					$doc.find(".loading-popup .loading-title").html(`授权获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取授权页面~</div>`);
					// 没授权，先获取授权的页面
					let html = await base.get(config.$baidu.api.getAccessToken, { Origin: "", Referer: "" }, "text");
					// 提取页面的发送确认授权的参数
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
					$doc.find(".loading-popup .swal2-html-container").html(`<div>正在自动确认授权~</div>`);
					// 发送请求达到自动进行授权
					await base.post(config.$baidu.api.getAccessToken, base.stringify(data), { Origin: "", Referer: "", "Content-Type": "application/x-www-form-urlencoded" });
					// 再次获取授权状态
					let res2 = await base.getFinal(config.$baidu.api.getAccessToken, { Origin: "", Referer: "" }, true);
					accessToken = res2.match(/access_token=([^&]+)/)?.[1];
				} else if (authorize.includes("access_token=")) {
					accessToken = authorize.match(/access_token=([^&]+)/)?.[1];
				}
				// 统一处理令牌结果
				$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
				if (!!accessToken) {
					$doc.find(".loading-popup .swal2-html-container").html(`<div>授权成功，令牌已缓存~</div>`);
					base.setValue("baidu_access_token", accessToken);
					return accessToken;
				} else return "";
			} catch (error) {
				return "";
			}
		},
		async getShareData() {
			// 前置
			let url = new URL(location.href);
			let locals = unsafeWindow?.locals?.dump?.();

			// 参数们
			let surl = url.pathname.split('/').pop().replace(/^1(.{22})$/, '$1');
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
					return message.error("提示：<br/>请勾选要保存到网盘的文件哦~");
				}
				message.info("提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~");
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, { "User-Agent": config.$baidu.api.ua.downloadLink, "Origin": "", "Referer": "" }, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
				tag.text("会员中心")
			}, true);
			base.waitForKeyElements(".KQcHyA", function (tag) {
				tag.text("会员中心")
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
			base.waitForKeyElements(`.g-button[title*="手机"]`, function (tag) {
				tag.fadeOut();
			}, true)
			base.waitForKeyElements(".yike-entrance", function (tag) {
				tag.remove();
			}, true)
			base.waitForKeyElements("div.dialog-gray:has(.dialog-close):has(.tip-body):has(~ .module-canvas)", function (tag) {
				tag.find(".dialog-close").click();
				$(".module-canvas").click();
			}, true)

			// back pc motivate 回端激励
			base.waitForKeyElements(".wp-s-header ~ div:not([class]):has(.nd-custom-btn)", function (tag) {
				if (!tag.text().includes("客户端")) return;
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
				if (tag.is(`:contains("插件"), :contains("相册"), :contains("笔记")`) && tag.closest("a").attr("target") !== "_blank") {
					tag.closest("a").fadeOut();
				} else {
					tag.text(tag.text().replace("百度", ""));
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
						<span class="device-name">添加我的电脑</span>
					</span>
					<div class="__yunguanjiaTips radio-tips" style="display:block;">
						用电脑下载并登录最新百度网盘客户端，即自动完成添加。
						<a href="//pan.baidu.com/download" target="_blank">下载百度网盘客户端</a>
						<br/>由 <a href="https://github.com/hmjz100/LinkSwift/" target="_blank">LinkSwift</a> 修复该选项
					</div>
				</div>`);
			}, true)
			// 美化分享页面
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
					<div class="g-button g-button-blue color-button"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width:60px;">下载助手</span></span></div>
					<div class="menu" style="color:${temp.color};border-color:${temp.color};width:auto;z-index:41;">
						<div class="g-button-menu pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg> 获取下载链接</div>
						<div class="g-button-menu pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg> 助手设置</div>
						<div class="g-button-menu pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg> 助手美化</div>
						<div class="g-button-menu pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg> 更新日志</div>
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
							<span>下载助手</span>
						</button>
						<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu">
							<li class="sub cursor-p pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="sub cursor-p pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
							<li class="sub cursor-p pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
							<li class="sub cursor-p pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
							<span>网盘助手</span>
						</button>
						<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu">
						<li class="sub cursor-p pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
							<li class="sub cursor-p pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
							<li class="sub cursor-p pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
							<li class="sub cursor-p pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
						<span class="text" style="width:auto;">下载助手</span>
					</span>
					<ul class="dropdown-list nd-common-float-menu pl-dropdown-menu" style="top:37px">
						<!--li class="sub cursor-p pl-button-mode pl-button-save"><em class="icon noicon-zhuancun_bai"></em>保存后下载</li-->
						<li class="sub cursor-p pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="sub cursor-p pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="sub cursor-p pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="sub cursor-p pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</a>`)
				element.after($button);
			})
		},
		addInitButton() {
			base.waitForKeyElements(config.$baidu.mount.home, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "home") return;
				let $button = $(`<div class="g-dropdown-button pl-button-init" style="opacity:0.5"><div style="color:#fff;" class="g-button g-button-blue color-button"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width:60px;">点我点亮</span></span></div></div>`);
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
							<span>点我点亮</span>
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
						<span class="text" style="width:auto;">点我点亮</span>
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
					$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${items.length} 个链接~</div>`);

				} else {
					if (res.errno) {
						if (res.errno === 112) return message.error("提示：<br/>页面过期了，刷新重试下吧~<br/>代码：" + res.errno);
						if (res.errno === 9019) {
							base.delValue("baidu_access_token");
							return message.error("提示：<br/>访问令牌已过期，刷新网页后再获取一次吧~<br/>代码：" + res.errno);
						}

						items.slice(i, i + size).forEach(i => {
							i.dlink = `获取下载地址失败，${(res.errno || res.errmsg) ? "服务器说：" + (res.errno && res.errmsg ? res.errno + " - " + res.errmsg : (res.errmsg || res.errno)) + "。" : "刷新后再试试吧~"}`
						})
					}
					return message.error("提示：<br/>获取下载链接失败，刷新网页后再试试吧~");
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
						$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${items.length} 个链接~</div>`);
						continue;
					} else {
						temp.glinks.splice(cacheIndex, 1); // 删除过期
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
				$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${items.length} 个链接~</div>`);

				if (res.list && base.isType(res.list) === "array" && res.list.length !== 0 && res.errno === 0) {
					Object.assign(item, res.list[0]);
					temp.glinks.push({ "id": item.fs_id, "expires": (Date.now() + 4 * 60 * 60 * 1000), "data": res.list[0] });

				} else {
					if (res.errno === 0 && base.isType(res.list) === "string") {
						item.dlink = `<span>获取下载地址失败，服务器说：此文件过大，需要<b>保存到网盘</b>后于网盘中下载。</span>`
						temp.glinks.push({ "id": item.fs_id, "expires": (Date.now() + 4 * 60 * 60 * 1000), "data": item });
						continue;

					} else if (res.errno) {
						if (res.errno === 112) return message.error("提示：<br/>页面过期了，刷新重试下吧~<br/>代码：" + res.errno);
						if (res.errno === 9019) {
							// base.delValue("baidu_access_token");
							return message.error("提示：<br/>访问令牌已过期，刷新网页后再获取一次吧~<br/>代码：" + res.errno);
						}
						item.dlink = `获取下载地址失败，${(res.errno || res.errmsg) ? "服务器说：" + (res.errno && res.errmsg ? res.errno + " - " + res.errmsg : (res.errmsg || res.errno)) + "。" : "刷新后再试试吧~"}`
						continue;
					}
					return message.error("提示：<br/>获取下载链接失败，刷新网页后再试试吧~");
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
					$doc.find(".loading-popup .loading-title").html(`文件获取中`);
					let url = `${config.$baidu.api.getFiles}&dir=${encodeURIComponent(dir.path)}&access_token=${accessToken}`;
					let res = await base.get(url, { "User-Agent": config.$baidu.api.ua.downloadLink });
					cnt++;
					if (res?.list?.length && (res.errno === 0 || res.errmsg === "succ")) {
						let subFiles = res.list.filter(f => !f.isdir);
						processed += subFiles.length;
						$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} 个文件~</div><div>${dir.path}</div>`);
						files = files.concat(subFiles);
						let subDirs = res.list.filter(f => f.isdir);
						if (subDirs.length > 0) {
							files = files.concat(await fetch(subDirs));
						}
					}
					if (cnt >= 50) {
						$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} 个文件~</div><div>休息 3 秒...</div>`);
						await base.sleep(3000);
						cnt = 0;
					}
				}
				return files;
			};
			return await fetch(dirs);
		},
		async getLink() {
			// 获取选择的文件列表
			let selectList = this.getSelectedList();
			let accessToken = (base.getValue("baidu_access_token") || await temp.main.getToken());

			// 回退授权
			if (!accessToken) {
				message.info("提示：<br/>稍后请在新标签页中授权助手哦~");
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
						return message.error("提示：<br/>时间太长，我先撤下啦~");
					}
				}, 1000);
				return;
			}

			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");

			if (temp.page === "home" || temp.page === "main") {
				let files = selectList.filter(f => !f.isdir);
				let dirs = selectList.filter(f => f.isdir);
				if (dirs.length > 0) files = files.concat(await this.getFilesList(dirs, accessToken, files.length));
				if (!files.length) return message.error("提示：<br/>文件夹是空的哦~");
				$doc.find(".loading-popup .loading-title").html(`链接获取中`);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);

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
					return message.error("提示：<br/>获取下载链接失败，刷新网页后再试试吧~");
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
					return message.error("提示：<br/>获取下载链接失败，刷新网页后再试试吧~");
				}
			} else {
				return message.error("提示：<br/>页面错误~");
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
				html: `请稍后`,
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
					"NqOMXF6XGhGRIGemsQ9nG0Na", // ES 文件管理器，Secret：SVT6xpMdLcx6v4aCR4wT8BBOTbzFO8LM
					"fSds3K4w43rw37tOqlQmTa2kDwaczK4U", // 小度智能词典笔专业版
					"TFwtw8uwHxpdkvVqVKdIlx1XqXUnr1zG", // 印象笔记
					"9dgBV9yesuBVOXaxls7aVHbLBLqU8yyg", // WPS文档
					"l9DdBOG4RYroMscmzK5OChdaGelgd92M", // 小猴云印PC版
					"Kyr013gHQBf2immy3fQt1jZ3nZVpiGAm", // 简单打印
					"iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v", // Alist
					"omiOnr2tYnN9vSyDErcVFWpPU2mZA7YO", // OpenList
					"QHOuRXiepJBMjtk0esLhrPoNlQyYd0mF", // mcp_server
					"IlLqBbU3GjQ0t46TRwFateTprHWl39zF",  // 百度手机助手
					"iG6ghsi9r0RR0jTFCrlvTjX9",  // 百度云的小测试 https://github.com/scusjs/baiduyun/blob/43785cd7eaab6741fe2a7de7cd3391920b94c9c7/bdy/config.ini
					"YgMAXXnP0Lziw0LPVbc6E4zm",  // 我的目的地 https://github.com/ymgd/weixinopen/blob/2e1f9e3d32616c3623547a8f25d330598337ba04/wechat-weapp-union/zndg/app.js#L64
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
						title: `提示`,
						html: `<p>(◍•ᴗ•◍) 你好呀，为了获取百度网盘文件的下载直链<br/>“下载助手” 需要你的授权，以获取网盘文件的访问令牌</p><br/>
						<p>由于在百度 OAuth 页面使用了其他应用的 Client ID<br/>所以显示的应用名称可能会有所不同，敬请理解</p><br/>
						<p>获取到的令牌仅用于调用百度网盘 API 生成直链<br/>不会用于其他用途，请放心授权</p>`,
						showConfirmButton: true,
						showDenyButton: true,
						allowOutsideClick: false,
						allowEscapeKey: false,
						allowEnterKey: false,
						confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 授权`,
						denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 再想想`,
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
							title: `好吧(*￣3￣)╭`,
							html: "那就再想一想<br/>想好了就按下 “授权” 按钮吧~",
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
								title: `成功啦`,
								html: `<p>(◍•ᴗ•◍) 您已<b>成功授权/授权过</b>脚本获取网盘访问令牌~</p><p>获取到的令牌<b>仅用于调用百度网盘 API 生成直链</b><br/>不会用于其他用途</p><p>等待 <span id="second">/</span> 秒之后将关闭此页面</p>`,
								timer: 5000,
								timerProgressBar: true,
								showConfirmButton: true,
								showDenyButton: false,
								allowOutsideClick: false,
								allowEscapeKey: false,
								allowEnterKey: false,
								confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 关闭`,
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
	 * 阿里云盘
	 * @author 油小猴
	 * @author hmjz100
	 */
	let $aliyun = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let reactDomGrid = document.querySelector(config.$aliyun.mount.grid);
				if (reactDomGrid) {
					var dialog = await Swal.fire({
						...temp.swalDefault,
						title: "提示",
						html: `<div style="display:flex;align-items:center;justify-content:center;">请先切换到&nbsp;&nbsp;<svg class="icon" class="icon--D3kMk " viewBox="0 0 1024 1024" width="20" height="20" fill="currentColor"><use xlink:href="#PDSDrag"></use></svg>&nbsp;<b>列表视图</b>&nbsp;&nbsp;后再获取下载链接哦</div>`,
						icon: "info",
						showCloseButton: true,
						showDenyButton: true,
						confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 切换`,
						denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 不要`,
					});
					if (dialog.isConfirmed) {
						document.querySelector(config.$aliyun.mount.switch).click();
						return message.success("提示：<br/>切换为列表视图成功<br/>请再获取一次下载链接吧~");
					}
					return false;
				}
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("提示：<br/>请勾选要保存到网盘的文件哦~");
				}
				message.info("提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~");
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					<span data-role="icon" data-render-as="svg" class="icon">${temp.main.svg}下载助手</span>
					<ul class="pl-dropdown-menu" style="top:30px; right:0;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				element.append($button);
			})
			base.waitForKeyElements(config.$aliyun.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="ali-button pl-button">
					<span data-role="icon" data-render-as="svg" class="icon">${temp.main.svg}下载助手</span>
					<ul class="pl-dropdown-menu" style="top:30px; right:16px;">
						<li class="pl-button-mode pl-button-save"><use xlink:href="#pl-icon-fa-save"/></svg>保存后下载</li>
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				$button.css({ "margin-right": "10px", "height": "36px", "width": "auto", "padding": "1px 30px" });
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="ali-button pl-button-init"><span data-role="icon" data-render-as="svg" class="icon">${temp.main.svg}点我点亮</span></div>`);
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
					title: "提示",
					html: `<div style="display:flex;align-items:center;justify-content:center;">请先切换到&nbsp;&nbsp;<svg class="icon" class="icon--D3kMk " viewBox="0 0 1024 1024" width="20" height="20" fill="currentColor"><use xlink:href="#PDSDrag"></use></svg>&nbsp;<b>列表视图</b>&nbsp;&nbsp;后再获取下载链接哦</div>`,
					icon: "info",
					showCloseButton: true,
					showDenyButton: true,
					confirmButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-check"/></svg> 切换`,
					denyButtonText: `<svg class="pl-icon"><use xlink:href="#pl-icon-fa-x-mark"/></svg> 不要`,
				});
				if (dialog.isConfirmed) {
					document.querySelector(config.$aliyun.mount.switch).click();
					return message.success("提示：<br/>切换为列表视图成功<br/>请再获取一次下载链接吧~");
				}
				return false;
			}

			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => item.type !== "file")) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			if (temp.page === "home") {
				selectList = selectList.filter(item => item.type === "file")
				let batchSize = 15;
				let processed = 0;
				$doc.find(".loading-popup .loading-title").html(`链接获取中`);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 当前批次文件
					let batch = selectList.slice(i, i + batchSize);
					// 过滤掉已有 URL 的文件
					let noUrlSelectList = batch.filter(v => !Boolean(v.url));
					let hasUrlSelectList = batch.filter(v => Boolean(v.url));
					let queue = [];
					// 为没有 URL 的文件生成请求队列
					noUrlSelectList.forEach((item) => {
						queue.push(this.getFileUrl(item.driveId, item.fileId)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
								return val;
							}));
					});
					hasUrlSelectList.forEach((item) => {
						processed++;
						$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
					});
					// 等待本批次的请求结果
					let res = await Promise.all(queue);
					res.forEach((val, index) => {
						noUrlSelectList[index].url = val;
					});
					// 每次处理完一个批次后，等待 1 秒
					await base.sleep(1000);
				}
			} else {
				return message.error("提示：<br/>页面错误~");
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
				return message.error("提示：<br/>访问令牌过期了，请刷新网页后再试");
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
	 * 中国移动云盘 / 和彩云
	 * @author 油小猴
	 * @author hmjz100
	 */
	let $mcloud = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
				if (selections.every(item => !item.contentID && !item.contentName)) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
				message.info("提示：<br/>因网盘限制，只能够通过页面直接下载哦~");
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
							// 清理事件监听器
							window.removeEventListener('resize', toast._resizeHandler);
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
					<span class="mcloud-btn">下载助手</span>
					<ul class="pl-dropdown-menu" style="top:36px; left:0; letter-spacing:normal;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$mcloud.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="pl-button mcloud-share-button">
					<span class="mcloud-btn">下载助手</span>
					<ul class="pl-dropdown-menu" style="top:36px; left:0; letter-spacing:normal;">
						<li class="pl-button-mode pl-button-save"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-downward"/></svg>直接下载</li>
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="pl-button-init"><span class="mcloud-btn">点我点亮</span></div>`);
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
							downloadUrl: "获取下载地址失败，刷新后再试试吧~"
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
							downloadUrl: "获取下载地址失败，刷新后再试试吧~"
						};
					}
				}
			} catch (e) {
				return {
					index,
					downloadUrl: "获取下载地址失败，刷新后再试试吧~"
				};
			}
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => !item.contentID && !item.contentName)) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			if (temp.page === "home") {
				selectList = selectList.filter(item => item.contentID && item.contentName && item.contentSuffix);
				let batchSize = 15;
				let processed = 0;
				$doc.find(".loading-popup .loading-title").html(`链接获取中`);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
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
				return message.error("提示：<br/>页面错误~");
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
	 * 天翼云盘
	 * @author 油小猴
	 * @author hmjz100
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
				下载助手&nbsp;
				<i aria-label="icon:caret-down" class="anticon anticon-caret-down">
					<svg viewBox="0 0 1024 1024" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
						<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
					</svg>
				</i>
				<ul class="pl-dropdown-menu">
					<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
					<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
					<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
			let $button = $(`<div class="tcloud-button pl-button-init">点我点亮</div>`);
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
			$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取状态~</div>`);
			let res = await base.getFinal(config.$tcloud.api.getAccessToken, undefined, true);
			let accessToken = res.match(/accessToken=(\w+)/)?.[1];
			accessToken && base.setStorage("accessToken", accessToken);
			$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>获取成功，令牌已缓存~</div>`);
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
						downloadUrl: "提示：<br/>请先登录网盘~"
					};
				} else if (res.res_code == "ShareNotFoundFlatDir") {
					return {
						index,
						downloadUrl: "提示：<br/>请[转存]文件，之后再👉前往[我的网盘]中下载哦~"
					};
				} else {
					return {
						index,
						downloadUrl: "获取下载地址失败，刷新后再试试吧~" + (res.res_code ? res.res_code : "")
					};
				}
			} catch (e) {
				return {
					index,
					downloadUrl: "获取下载地址失败，刷新后再试试吧~"
				};
			}
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => item.isFolder)) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			selectList = selectList.filter(item => !item.isFolder)
			$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取状态~</div>`);
			let token = base.getStorage("accessToken") || await this.getToken();
			if (!token) {
				return message.error("提示：<br/>请先登录网盘~");
			}
			$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>获取缓存成功~</div>`);
			let batchSize = 15;
			let processed = 0;
			$doc.find(".loading-popup .loading-title").html(`链接获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);
			for (let i = 0; i < selectList.length; i += batchSize) {
				let batch = selectList.slice(i, i + batchSize);
				let queue = [];
				batch.forEach((item, localIndex) => {
					let globalIndex = i + localIndex;
					queue.push(this.getFileUrl(item, globalIndex, token)
						.then(val => {
							processed++;
							$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
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
	 * 迅雷云盘
	 * @author 油小猴
	 * @author hmjz100
	 */
	let $xunlei = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("提示：<br/>请勾选要保存到网盘的文件哦~");
				}
				message.info("提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~");
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
				let $button = $(`<div class="xunlei-button pl-button"><i class="xlpfont xlp-download"></i><span style="font-size:13px;margin-left:6px;">下载助手</span>
					<ul class="pl-dropdown-menu" style="top:34px;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$xunlei.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="xunlei-button pl-button">
					<i class="xlpfont xlp-download"></i><span style="font-size:13px;margin-left:6px;">下载助手</span>
					<ul class="pl-dropdown-menu" style="top:34px;">
						<li class="pl-button-mode pl-button-save"><i class="xlpfont xlp-file-upload"></i><span style="margin-left:3px;">转存后下载</span></li>
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				$button.css({ "margin-right": "10px" });
				element.prepend($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="xunlei-button pl-button-init"><i class="xlpfont xlp-download"></i><span style="font-size:13px;margin-left:6px;">点我点亮</span></div>`);
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
			$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取状态~</div>`);
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
						downloadUrl: "获取下载地址失败，服务器说：页面验证过期了，刷新后再获取吧~"
					};
				} else {
					return {
						index,
						downloadUrl: `获取下载地址失败，${res?.error_description ? "服务器说：" + res.error_description + "。" : "刷新后再试试吧~"}`
					};
				}
			} catch (e) {
				return message.error("提示：<br/>请先登录网盘后再刷新页面呢~");
			}
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => item.kind !== "drive#file")) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			if (temp.page === "home") {
				let token = this.getToken();
				let batchSize = 15;
				let processed = 0;
				$doc.find(".loading-popup .loading-title").html(`链接获取中`);
				$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex, token)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
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
				return message.error("提示：<br/>页面错误~");
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
	 * 夸克网盘
	 * @author 油小猴
	 * @author hmjz100
	 */
	let $quark = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("提示：<br/>请勾选要保存到网盘的文件哦~");
				}
				message.info("提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~");
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, { "User-Agent": config.$quark.api.ua.downloadLink }, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
						if (error?.status == 412) estatus += ` 服务器说：需要登录才能下载~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
				if (tag.find(".hint").text().includes("客户端")) tag.fadeOut();
			}, true);
			base.waitForKeyElements(".pc-member-entrance span.button-text", function (tag) {
				tag.text("会员中心");
				let observer = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						if (tag.text() === "会员中心") return
						tag.text("会员中心");
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
							<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
							<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
							<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
						</ul>
						<button type="button" class="ant-btn ant-btn-primary quark-button">
							<img class="btn-icon" src="${temp.main.svg}">
							<span>下载助手</span>
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
					<img class="btn-icon" src="${temp.main.svg}"><span>下载助手</span>
					<ul class="pl-dropdown-menu" style="bottom:22px;left:0">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
				let $button = $(`<button type="button" class="ant-btn ant-btn-primary quark-button pl-button-init"><img class="btn-icon" src="${temp.main.svg}"><span>点我点亮</span></button>`);
				$button.css({ "margin-right": "16px", "display": "inline-block" });
				$button.click(base.showInitDialog);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$quark.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<button type="button" class="ant-btn btn-file ant-btn-primary pl-button-init quark-button"><img class="btn-icon" src="${temp.main.svg}"><span>点我点亮</span></button>`);
				$button.css({ "height": "36px", "margin-left": "16px", "border-radius": "6px", "display": "inline-block" });
				$button.click(base.showInitDialog);
				element.append($button);
			})
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => !item.file)) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			if (temp.page === "home") {
				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 获取当前批次文件
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					// 发起请求获取链接
					let res = await base.post(config.$quark.api.getLink, { "fids": fids }, { "Content-Type": "application/json", "User-Agent": config.$quark.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("提示：<br/>请先登录网盘~<br/>代码：" + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`提示：<br/>超出游客可获取大小限制<br/>请登录后获取哦~${item?.file_name ? `<br/>文件：${item.file_name}` : ""}`);
					}
					if (res?.code !== 0) {
						return message.error("提示：<br/>获取链接失败了~<br/>代码：" + res.code);
					}
					// 合并响应数据
					if (res?.data) {
						data.push(...res.data);
					}
					// 更新处理进度
					processed += batch.length;
					// 更新UI显示
					$doc.find(".loading-popup .loading-title").html(`链接获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
					// 请求间隔节流
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
					location.pathname.match(/^\/(?:s|share)\/([a-zA-Z0-9]+)/)?.[1]; // 兜底
				if (!pwd_id) return message.error("错误：<br/>无法提取分享 ID~");

				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 获取当前批次文件
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					let fids_token = batch.map(item => item.share_fid_token);
					// 发起请求获取链接
					let res = await base.post(config.$quark.api.getLink, { "fids": fids, "fids_token": fids_token, pwd_id, "stoken": batch[0].stoken }, { "Content-Type": "application/json", "User-Agent": config.$quark.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("提示：<br/>请先登录网盘~<br/>代码：" + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`提示：<br/>超出游客可获取大小限制<br/>请登录后获取哦~${item?.file_name ? `<br/>文件：${item.file_name}` : ""}`);
					}
					if (res?.code !== 0) return message.error("提示：<br/>获取链接失败了~<br/>代码：" + res.code);
					// 合并响应数据
					if (res?.data) {
						data.push(...res.data);
					}
					// 更新处理进度
					processed += batch.length;
					// 更新UI显示
					$doc.find(".loading-popup .loading-title").html(`链接获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
					// 请求间隔节流
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
				return message.error("提示：<br/>页面错误~");
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
	 * UC网盘
	 * @author 油小猴
	 * @author hmjz100
	 */
	let $uc = {
		addPageListener() {
			$doc.on("click", ".pl-button-save", async function (e) {
				e.preventDefault();
				let selections = temp.main.getSelectedList();
				if (selections.length === 0) {
					return message.error("提示：<br/>请勾选要保存到网盘的文件哦~");
				}
				message.info("提示：<br/>因网盘限制，请保存到自己网盘后再去下载哦~");
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, { "User-Agent": config.$uc.api.ua.downloadLink }, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
						if (error?.responseText?.includes?.("require login")) estatus += ` 服务器说：需要登录才能下载~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			base.waitForKeyElements(`[class*="VideoDetail--content-footer"]`, function (tag) {
				tag.children().each(function () {
					let $child = $(this);
					if ($child.text().includes("手机客户端")) {
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
						<img class="uc-btn-icon" src="${temp.main.svg}"><span>下载助手</span>
					</button>
					<ul class="pl-dropdown-menu" style="top:39px;">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
						<img class="uc-btn-icon" src="${temp.main.svg}"><span>下载助手</span>
					</button>
					<ul class="pl-dropdown-menu">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</div>`);
				$button.css({ "margin-left": "10px", "display": "inline-block" });
				element.append($button);
			})
		},
		addInitButton() {
			let $button = $(`<div class="ant-dropdown-trigger pl-button-init"><button type="button" class="uc-button ant-btn btn-file ant-btn-primary" style="height:40px;"><img class="uc-btn-icon" src="${temp.main.svg}"><span>点我点亮</span></button></div>`);
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
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => !item.file)) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			if (temp.page === "home") {
				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 获取当前批次文件
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					// 发起请求获取链接
					let res = await base.post(config.$uc.api.getLink, { "fids": fids }, { "Content-Type": "application/json", "User-Agent": config.$uc.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("提示：<br/>请先登录网盘~<br/>代码：" + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`提示：<br/>超出游客可获取大小限制<br/>请登录后获取哦~${item?.file_name ? `<br/>文件：${item.file_name}` : ""}`);
					}
					if (res?.code !== 0) {
						return message.error(`提示：<br/>获取链接失败了~<br/>${res.code ? res.code : ""} ${res.message ? res.message : ""}`);
					}
					// 合并响应数据
					if (res?.data) {
						data.push(...res.data);
					}
					// 更新处理进度
					processed += batch.length;
					// 更新UI显示
					$doc.find(".loading-popup .loading-title").html(`链接获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
					// 请求间隔节流
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
					location.pathname.match(/^\/(?:s|share)\/([a-zA-Z0-9]+)/)?.[1]; // 兜底
				if (!pwd_id) return message.error("错误：<br/>无法提取分享 ID~");

				let data = [];
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.file === true)
				for (let i = 0; i < selectList.length; i += batchSize) {
					// 获取当前批次文件
					let batch = selectList.slice(i, i + batchSize);
					let fids = batch.map(item => item.fid);
					let fids_token = batch.map(item => item.share_fid_token);
					// 发起请求获取链接
					let res = await base.post(config.$uc.api.getLink, { "fids": fids, "fids_token": fids_token, pwd_id, "stoken": batch[0].stoken }, { "Content-Type": "application/json", "User-Agent": config.$uc.api.ua.downloadLink });
					if (res?.code == 31001) {
						return message.error("提示：<br/>请先登录网盘~<br/>代码：" + res.code);
					} else if (res?.code == 23018) {
						let fid = res?.message?.match(/\[([a-f0-9]{32})\]/)?.[1];
						let item = batch.find(item => item.fid === fid);
						return message.error(`提示：<br/>超出游客可获取大小限制<br/>请登录后获取哦~${item?.file_name ? `<br/>文件：${item.file_name}` : ""}`);
					}
					if (res?.code !== 0) return message.error("提示：<br/>获取链接失败了~<br/>代码：" + res.code);
					// 合并响应数据
					if (res?.data) {
						data.push(...res.data);
					}
					// 更新处理进度
					processed += batch.length;
					// 更新UI显示
					$doc.find(".loading-popup .loading-title").html(`链接获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
					// 请求间隔节流
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
				return message.error("提示：<br/>页面错误~");
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
	 * 123云盘
	 * @author 油小猴
	 * @author hmjz100
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

				// UI 初始化
				status.down_normal.hide();
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
				var tau = 2; // 时间常数（秒），数值越大速度显示越平稳，越小越灵敏。建议 1.5 - 3 之间。

				base.download(file.link, undefined, {
					...file,
					onProgress: (prog, loaded, total) => {
						var time = Date.now();
						var insDiff = (time - lastTime) / 1000 || 0.001; // 瞬时耗时（秒）
						var insSpeed = (loaded - lastLoaded) / insDiff; // 瞬时速度（B/s）
						var avgDiff = (time - startTime) / 1000 || 0.1; // 总耗时（秒）
						var avgSpeed = loaded / avgDiff; // 全局平均速度（B/s）

						var alpha = 1 - Math.exp(-insDiff / tau);
						if (emaSpeed === 0) {
							emaSpeed = insSpeed; // 第一次采样，直接赋值
						} else {
							// EMA 公式：当前平滑值 = (1 - alpha) * 旧值 + alpha * 当前瞬时值
							emaSpeed = (1 - alpha) * emaSpeed + alpha * insSpeed;
						}

						var rSize = total - loaded;

						var predictionSpeed = (emaSpeed > 1024) ? emaSpeed : avgSpeed; // 兜底 - 如果 EMA 速度异常，则参考全局平均速度
						var rTime = predictionSpeed > 0 ? rSize / predictionSpeed : 0;

						lastLoaded = loaded;
						lastTime = time;
						var dprog = Math.min(prog, 100);
						status.down_enhance_downing.find(".pl-progress").css("--width", `${dprog}%`);
						status.down_enhance_downing.find(".pl-progress .text").text(`${dprog.toFixed(2)}% - ${base.sizeFormat(loaded)} | ${base.sizeFormat(emaSpeed)}/块 | ${base.rtimeFormat(rTime)}`);
					}
				})
					.then(async (res) => {
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#55af28");
						base.blobDownload(res.response, file.name);
						await base.sleep(1000);

						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress .text").html(`下载完成~ 浏览器下载框应该弹出来了哦~`);
					})
					.catch(async (error) => {
						base.console.error("【LinkSwift】Download(load)", error);
						status.down_enhance_downing.find(".stop").hide();
						status.down_enhance_downing.find(".back").show();
						status.down_enhance_downing.find(".pl-progress").css("--width", "100%");
						status.down_enhance_downing.find(".pl-progress .head").css("background", "#cc3235");
						let estatus = `QAQ 下载出错~`;
						if (!error?.status) estatus += ` 服务器未返回状态，若是下载一段时间后中断，可能是服务器返回文件长度不匹配，请重试；若是直接中断，请检查您的网络、脚本管理器扩展或浏览器~`;
						if (error?.status == 403) estatus += ` 服务器说：链接已过期，关闭窗口重新获取试试吧~`;
						if (error?.status == 204 || error?.statusText === "IDM") estatus += ` 服务说：链接已被 IDM 捕获~`;
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
					target.removeClass("pl-btn-danger").html("发送成功啦~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
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
					target.removeClass("pl-btn-danger").html("发送成功啦!快去看看吧~").animate({ opacity: "0.5" }, "slow");
				} else {
					target.addClass("pl-btn-danger").text("发送失败，检查一下您的配置信息哦!").animate({ opacity: "0.5" }, "slow");
				}
				await base.sleep(3000);
				target.removeClass("pl-btn-danger").removeAttr("data-processing").html(originalHtml).css("opacity", "");
			});
		},
		greenerPage() {
			// 旧版 分享 登录按钮
			base.waitForKeyElements(".cent > .cent-not-login > .ant-btn", (tag) => {
				if (tag.hasClass("reg") || tag.hasClass("log")) return;
				tag.addClass("reg");
				tag.removeClass("loginRight");
				tag.find("span").text("注册");
				if (tag.next().hasClass("log")) return;
				let button = $(`<button type="button" class="ant-btn ant-btn-default ant-btn-two-chinese-chars log loginRight" style="width:auto!important;height:auto!important;margin-left:10px!important"><span>登录</span></button>`);
				button.on("click", () => {
					let login = new URL(`https://login.123pan.com/centerlogin`);
					login.searchParams.set("redirect_url", location.href);
					location.href = login;
				});
				tag.after(button);
			});
			// 旧版 分享 按钮去除文本
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
			// 新版 分享 登录按钮
			base.waitForKeyElements(".share-header_center > .share-header_center-not-login > .ant-btn", (tag) => {
				if (tag.hasClass("reg") || tag.hasClass("log")) return;
				tag.removeClass("ant-btn-variant-solid").addClass("ant-btn-variant-outlined");
				tag.addClass("ant-btn-two-chinese-chars").addClass("reg");
				tag.find("span").text("注册");
				if (tag.next().hasClass("log")) return;
				let button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid loginRight mfy-button ant-btn-two-chinese-chars log" style="margin-left:10px!important"><span>登录</span></button>`);
				// 加个跳转到原页面也不难吧？
				button.on("click", () => {
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
									// 如果被移除的节点是注册按钮或其包含注册按钮的容器，则清理登录按钮
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
			// 新版 分享 超限登录
			base.waitForKeyElements(".login-footer-240828", (tag) => {
				if (tag.find(".replaced").length) return;
				tag.children().each(function () {
					let $child = $(this);
					if ($child.hasClass("pointer-text")) {
						let button = $(`<button type="button" class="ant-btn ${[...document.querySelector(`[class*="ant-btn css-"]`).classList].find(c => /^css-[a-z0-9]+$/.test(c))} ant-btn-primary ant-btn-color-primary ant-btn-variant-solid loginRight mfy-button replaced"><span>${$child.text()}</span></button>`);
						button.on("click", () => {
							if ($child.text().includes("登录")) {
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
			// 旧版 主页 播放器会员广告
			base.waitForKeyElements(".new-menu-item-image, .special-menu-item-container-migration--label, .sider-member-btn, .video-new-user-tips", (tag) => {
				if (tag.is(":hidden")) return;
				tag.hide();
			}, true);
			// 新版 主页 顶栏会员广告
			base.waitForKeyElements(`.frontend-layout-header-right > span > [alt^="buttonMall"]`, (tag) => {
				if (tag.parent().is(":hidden")) return;
				tag.parent().hide();
				let button = $(`<div class="frontend-layout-header-right-button-invite-new">会员中心</div>`);
				button.on("click", () => { tag.click() });
				tag.parent().after(button);
			}, true);
			// 分享 手机二维码
			base.waitForKeyElements(".rightInfo .qrcode_btn", function (tag) {
				tag.hide();
			}, true);
			base.waitForKeyElements(`#iqiyi-ad-overlay`, function (tag) {
				tag.remove();
				base.setStorage("iqiyi_ad_closed", {
					date: '2099-12-31T23:59:59.999Z',
					timestamp: Date.now()
				});
			}, true);
			// 为页面主动添加 notoken 参数（token 太长影响观感，故不添加），以避免被新版页面屎山代码搞得二次刷新
			setInterval(() => {
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
			$doc.find(".loading-popup .loading-title").html(`令牌获取中`);
			$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取令牌~</div>`);
			let token = base.getStorage("authorToken");
			return token;
		},
		async getLink() {
			let selectList = this.getSelectedList();
			if (selectList.length === 0) return message.error("提示：<br/>请勾选要下载的文件哦~");
			if (selectList.every(item => item.Type !== 0)) return message.error("提示：<br/>请打开文件夹后再勾选文件~");
			if (temp.page === "home") {
				let token = this.getToken();
				let batchSize = 15;
				let processed = 0;
				selectList = selectList.filter(item => item.Type === 0);
				for (let i = 0; i < selectList.length; i += batchSize) {
					let batch = selectList.slice(i, i + batchSize);
					let queue = [];
					$doc.find(".loading-popup .loading-title").html(`链接获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex, token)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
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
					$doc.find(".loading-popup .loading-title").html(`链接获取中`);
					$doc.find(".loading-popup .swal2-html-container").html(`<div>正在获取文件对应的下载链接~</div>`);
					batch.forEach((item, localIndex) => {
						let globalIndex = i + localIndex;
						queue.push(this.getFileUrl(item, globalIndex, token, ShareKey)
							.then(val => {
								processed++;
								$doc.find(".loading-popup .swal2-html-container").html(`<div>已获取 ${processed} / ${selectList.length} 个链接~</div>`);
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
				return message.error("提示：<br/>页面错误~");
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
				return message.error("提示：<br/>请先登录网盘后再获取链接呢~");
			} else if (res?.code == 5113) {
				return {
					index,
					downloadUrl: "获取下载地址失败，服务器说：本月免费流量不足，请开通网盘会员~"
				};
			} else {
				return {
					index,
					downloadUrl: `获取下载地址失败，${res?.message ? "服务器说：" + res.message + "。" : "刷新后再试试吧~"}`
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
					<span>下载助手</span>
					<ul class="pl-dropdown-menu" style="top:23px">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
					</ul>
				</button>`);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$123pan.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="register pl-button color-button">
					<svg class="icon" aria-hidden="true" style="color:rgb(255, 255, 255);margin-right:5px;"><use xlink:href="#top_btn_download2"></use></svg>下载助手
					<ul class="pl-dropdown-menu" style="top:37px">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
					<span>下载助手</span>
					<ul class="pl-dropdown-menu" style="top:20px">
						<li class="pl-button-mode" data-mode="mobile"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-copy"/></svg>获取下载链接</li>
						<li class="pl-button-mode listener-open-setting"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-gear"/></svg>助手设置</li>
						<li class="pl-button-mode listener-open-beautify"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-palette"/></svg>助手美化</li>
						<li class="pl-button-mode listener-open-updatelog"><svg class="pl-icon"><use xlink:href="#pl-icon-fa-newspaper"/></svg>更新日志</li>
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
					<span>点我点亮</span>
				</button>`);
				$button.click(base.showInitDialog);
				element.prepend($button);
			})
			base.waitForKeyElements(config.$123pan.mount.share, (element) => {
				temp.page = temp.main.detectPage();
				if ($(".pl-button-init").length > 0 || !temp.page || temp.page !== "share") return;
				let $button = $(`<div class="register pl-button-init color-button">
					<svg class="icon" aria-hidden="true" style="color:rgb(255, 255, 255);margin-right:5px;"><use xlink:href="#top_btn_download2"></use></svg>点我点亮
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
					<span>点我点亮</span>
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

	// 主代码
	let main = {
		async init() {
			/**
			 * 控制台输出
			 * @author 油小猴
			 * @author hmjz100
			 * @description 来自【网盘智能识别助手】，有改动
			 */
			base.console.log(`%c %c LinkSwift\n一个基于 JavaScript 的网盘文件下载地址获取工具\n仓库：https://github.com/hmjz100/LinkSwift\n版本：${info.version}\n领域：${(window.self !== window.top ? "[iframe] " : "") + (document.title ? (document.title + " (" + location.origin + location.pathname + ")") : location.href)}`, `background:url(${info.icon}) center center no-repeat;background-size:12px;padding:3px`, `padding:2px`);
			// 创建挂载点
			let mountElem = $(`<${mount} class="${mount}" />`);
			temp.mount = mountElem;

			base.waitForKeyElements(`html:not(:has(> .${mount})) head`, (element) => {
				if ($(`.${mount}`).length > 0) return;
				element.after(temp.mount);
			})

			// 判断页面地址，定义主执行
			if (/(pan|yun).baidu.com/.test(location.host)) temp.main = $baidu;
			else if (/openapi.baidu.com\/oauth/.test(location.href)) temp.main = $baiduAuthorize;
			else if (/www.(aliyundrive|alipan).com/.test(location.host)) temp.main = $aliyun;
			else if (/(yun|caiyun).139.com/.test(location.host)) temp.main = $mcloud;
			else if (/cloud.189.cn/.test(location.host)) temp.main = $tcloud;
			else if (/pan.xunlei.com/.test(location.host)) temp.main = $xunlei;
			else if (/pan.quark.cn/.test(location.host)) temp.main = $quark;
			else if (/drive.uc.cn/.test(location.host)) temp.main = $uc;
			else if (/(www|login).(123(pan|684|865|952|912).com|123pan.cn)/.test(location.host)) temp.main = $123pan;

			// 智能默认设置
			base.initDefaultConfig();
			// 创建美化样式
			base.addPanLinkerStyle();
			// 创建按钮事件
			base.addPageListener();
			// 创建提示信息用的隐藏 tip
			base.createTip();
			// 创建下载用的隐藏 iframe
			base.createIframe();

			// 运行主程序
			if ("initPanLinker" in temp.main) temp.main.initPanLinker();
			// 运行绿化程序
			if ("greenerPage" in temp.main) temp.main.greenerPage();

			// 脚本更新后提示消息
			let storedVersion = base.getValue("setting_init").version;
			if (!storedVersion || base.isNewerVersion(info.version, storedVersion)) {
				base.waitForKeyElements("body:not(.swal2-shown)", async () => {
					await base.showUpdate();
					let list = base.getValue("setting_init");
					list.version = info.version;
					base.setValue("setting_init", list);
					return true;
				}, true);
			}
			// 创建图标
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

	// 这是啥？我不到啊
	function idontknow(input) {
		let charArray = input.split("");
		// 这是 Fisher-Yates 洗牌算法的实现
		for (let i = charArray.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}
		return charArray.join("");
	}
})($ ?? jQuery);
