// ==UserScript==
// @name         视频全屏显示时间（全站通用增强版）
// @namespace    local.edge-userscripts/video-fullscreen-clock
// @version      0.6.12
// @description  0.6.10 手机端取消窄屏精简格式，与桌面端统一使用完整通用样式（日期/星期/农历等由设置开关控制）
// @description  0.6.9 更换时钟风格脚本图标；设置菜单新增「显示日期 / 显示星期 / 显示农历 / 隐藏时区名称」开关，可按需精简多时区显示内容（隐藏城市名后只保留时间、日期等实际内容）
// @description  0.6.8 手机浏览器适配：设置面板改为手机全宽浮层、控件加大（输入框 16px 起，避免 iOS 聚焦放大整页）、标题栏可直接手指拖动并限制在屏内；新增半透明悬浮按钮作为手机端设置入口；底部多时区条避开安全区；网页时钟避开刘海并限制宽度；时间条字号在手机上封顶；识别 iOS 原生视频全屏
// @description  0.6.7 新增脚本图标；修复设置面板重复打开、Trusted Types 策略重复创建导致的报错；计时改为整秒对齐（不再跳秒），状态未变时不做重复重排；合并重复的多时区文本逻辑、移除闲置轮询与死代码
// @description  全站通用版：在任意网站的视频画面上叠加显示「日期 + 星期 + 时间」，全屏看视频也能随时知道几点几分；支持多时区并排显示（每个时区都带年份、周几和该城市实时天气；北京时间额外显示农历；页面底部还有一条常驻多时区时间条），无视频的网页上也能显示悬浮时钟。字体放大、黄字 + 白色发光虚影、整体半透明；位置/字号/颜色/透明度/时区均可在菜单「设置」里调整。
// @description  因为大多数视频全屏后就看不到时间了，要看时间还得退出全屏，看到有的播放器全屏播放时可以在右上角显示一个系统当前时间，这种方式很不错，所以决定给视频网站也做一个这样的增强。这个脚本的作用只有一个，就是在视频左上角显示一个系统时间，方便全屏看视频期间随时了解时间。
// @description  0.2.1 增加搜狐视频 0.2.2 增加mkv、mp4结尾的链接匹配，时间标签层级从3改为11 0.2.3增加YouTube支持
// @description  0.2.4 增加avi,mov,rmvb,webm,flv格式视频支持;修复带参数的视频链接播放时不显示时间；修复某些页面时间位置不在画面上的问题；
// @description  0.2.5 本次更新为时间标签添加了自由拖动功能,以解决某些视频网站视频右上角水印对时间显示产生干扰；0.2.6 紧急修复一个时间标签拖动的问题，影响0.2.5版，正在使用0.2.5版的尽快升级；0.2.7 修复拖动导致的一些问题 0.2.8 修复一些体验问题 0.2.9 修复拖动时间标签导致视频暂停的问题：
// @description  0.3.0 修复拖动的一些问题；添加 左上角/顶部中间/右上角 三个固定位置循环切换；添加恢复位置功能；0.3.1 修复标签位置调整的一些问题 0.3.2 小样式修复
// @description  0.3.3 移除拖动功能，拖动导致较多问题 0.3.4 修复一些显示问题 0.3.5 增加更多级别字体大小
// @description  0.3.6 增加设置弹框；增加顶部间距设置；增加字体大小设置；优化计时器字体宽度；0.3.7 修复设置界面样式，修改字体样式,添加www.bdys03.com支持;0.3.8 修正上一版为兼容MacOS字体导致Windows字体丑的问题 0.3.9 增加欧乐影院\AcFun\虎牙\斗鱼(标签位置有问题，请通过偏移处理)\YY(首页有遮盖问题，请调节位置解决)\抖音\快手\企鹅体育\芒果TV；增加了左右偏移设置；扩大了偏移范围
// @description  0.4.0 增加仅全屏显示计时器选项；百度网盘使用canvas播放视频，不支持（除非有办法替换成video标签播放）；0.4.1 设置窗口允许自由拖动；设置窗口标题栏增加关闭按钮；适配秒懂百科; 0.4.2 修复B站首页Banner显示计时器问题 0.4.3 增加颜色和透明度自定义；增加时钟偏移；增加 hxzxer.com 网站支持; 0.4.4 修复时间格式支持 0.4.5 修复时区问题 0.4.6 修复设置窗口位置问题
// @description  0.4.7 增加隐藏时间条功能，修复潜在的问题；0.4.8 增加显示秒功能，修复一些问题；0.4.9 修复哔哩哔哩直播不显示时间标签；0.4.10 修复TrustedHTML问题 0.4.11 修复上一个版本引入TrustedHTML导致的浏览器兼容性问题 0.4.12 增加www.mxdm.xyz网站支持 0.4.13 增加描边支持 0.4.14 修改描边样式，使用内置 霞鹜文楷等宽 TC 字体 0.4.15 增加字体修改功能，修复字体描边无法保存问题
// @description  0.6.6 字体大扩充（共 60+ 款）：内置 / 影视字幕·中文 / 影视字幕·大片标题 / 科技数码 / 系统字体 分组可选；
// @description        带「☁」的字体按需联网加载（只下载当前选中那一款，失败自动回退系统字体），可切换字体源、可填自定义字体名与自定义字体CSS
// @description  0.6.5 北京时间（Asia/Shanghai）那一项追加农历日期，如「农历十月廿六」
// @description  0.6.4 多时区每一项都显示「年-月-日 周几 时:分:秒」+ 该城市实时天气；新增「显示实时天气」开关
// @description  0.6.3 多时区解析更宽松（显示名与时区ID顺序随意、支持纯城市名与 UTC+N、单行逗号并列）；
// @description        新增「填入常用三时区」按钮；设置窗口打开时底部条不再隐藏，可实时预览
// @description  0.6.2 新增页面底部多时区时间条（可开关）；修复与全屏类脚本共存时全屏后时间不显示的问题
// @description  0.4.16 修复脚本在 YouTube 失效问题 0.4.17 修改设置中的颜色和透明度设置方法，更加便捷 0.4.18 修复全局透明度失效问题；样式微调，兼容深色模式；0.4.19 修复哔哩哔哩直播在特殊情况下不生效;解决颜色布局错乱问题
// @author       Jackson Smith
// @match        *://*/*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMxYTFhMmUiIHN0cm9rZT0iI2ZmZTEwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMjYiIGZpbGw9IiMxNjIxM2UiLz4KICA8ZyBzdHJva2U9IiNmZmUxMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgPGxpbmUgeDE9IjMyIiB5MT0iMTAiIHgyPSIzMiIgeTI9IjE0Ii8+CiAgICA8bGluZSB4MT0iMzIiIHkxPSI1MCIgeDI9IjMyIiB5Mj0iNTQiLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjMyIiB4Mj0iMTQiIHkyPSIzMiIvPgogICAgPGxpbmUgeDE9IjUwIiB5MT0iMzIiIHgyPSI1NCIgeTI9IjMyIi8+CiAgPC9nPgogIDxsaW5lIHgxPSIzMiIgeTE9IjMyIiB4Mj0iMzIiIHkyPSIxOCIgc3Ryb2tlPSIjZmZlMTAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIHgxPSIzMiIgeTE9IjMyIiB4Mj0iNDQiIHkyPSIzMiIgc3Ryb2tlPSIjZmZjYzAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMyIgZmlsbD0iI2ZmZTEwMCIvPgo8L3N2Zz4=
// @icon64       data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMxYTFhMmUiIHN0cm9rZT0iI2ZmZTEwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMjYiIGZpbGw9IiMxNjIxM2UiLz4KICA8ZyBzdHJva2U9IiNmZmUxMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgPGxpbmUgeDE9IjMyIiB5MT0iMTAiIHgyPSIzMiIgeTI9IjE0Ii8+CiAgICA8bGluZSB4MT0iMzIiIHkxPSI1MCIgeDI9IjMyIiB5Mj0iNTQiLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjMyIiB4Mj0iMTQiIHkyPSIzMiIvPgogICAgPGxpbmUgeDE9IjUwIiB5MT0iMzIiIHgyPSI1NCIgeTI9IjMyIi8+CiAgPC9nPgogIDxsaW5lIHgxPSIzMiIgeTE9IjMyIiB4Mj0iMzIiIHkyPSIxOCIgc3Ryb2tlPSIjZmZlMTAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIHgxPSIzMiIgeTE9IjMyIiB4Mj0iNDQiIHkyPSIzMiIgc3Ryb2tlPSIjZmZjYzAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMyIgZmlsbD0iI2ZmZTEwMCIvPgo8L3N2Zz4=
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.open-meteo.com
// @run-at       document-end
// @license      GPLv3
// @updateURL    https://gcore.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/video-fullscreen-clock/video-fullscreen-clock.user.js
// @downloadURL  https://gcore.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/video-fullscreen-clock/video-fullscreen-clock.user.js
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

(function() {
    'use strict';

    // ---- 设备判断：手机/平板（iPadOS 伪装成 Mac，只能靠触点数 + 窄屏识别）----
    var IS_MOBILE = (function () {
        var ua = navigator.userAgent || "";
        if (/Android|iPhone|iPad|iPod|HarmonyOS|Mobile|Windows Phone/i.test(ua)) return true;
        var touch = (navigator.maxTouchPoints || 0) > 1;
        // iPadOS 13+ 的 UA 与桌面 Mac 相同，靠触点数识别
        if (touch && /Macintosh/i.test(ua)) return true;
        return touch && Math.min(window.innerWidth || 9999, screen.width || 9999) <= 820;
    })();
    var SAFE_TOP = "env(safe-area-inset-top, 0px)";
    var SAFE_RIGHT = "env(safe-area-inset-right, 0px)";
    var SAFE_BOTTOM = "env(safe-area-inset-bottom, 0px)";
    var SAFE_LEFT = "env(safe-area-inset-left, 0px)";

    // 初始化字体
    var css = `
      @font-face {
        font-family: "LXGW WenKai Mono TC";
        src: url(data:font/woff2;base64,d09GMgABAAAAAAmwAAoAAAAAE0AAAAlmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgkIKkGSNSQsaAAE2AiQDHAQgBY8bBzob1RAjEXaLkyKT/dWBbcx9qBuoTb2FZmijw9Kk7fELGV5MqGogc1qt838j24iNcMmD7SMkmT3ATbtYIcQpYlVjPKxUzSYu/kTfn7j3308omUDAwlCzSqmAUahGSvICYFL3v+TjyQTXNqhJDbNh43Zyf0uOrX2i31wi2LKz4fO5aV5H5pr8EfGKTRGRFTnELuAhZpxoYPiXSKIz2F9rr/Zv8CaO6c1EJsZFqEyU3LzLcYBpA8xChscTOGCL3FbIToWtEVW+1tTIqhvj9zJNEIkySo5cOr6ePwerp9b1G4QLAD6skAlAAPSD5gJAQoZBXmCMp2E6CPJzAeAhjOYBAAfZAAvEibkxORAKBv7V+v8IwG74WCpD5t+/DpAfuh0AbIkBYIHaOggAgEClIVFTnK05Dq/h3w1g6GZ/MXwVWUFcd4l/Mft3AD4TGqfSWAnQP8C+ffXxEgIGSXpGITDoC19OSWaxgiS9vP18fWxYa3uWc1bQdE1hGMG6oCWRzPZ27pnckKxRQ21rg5KKKBnUcl50tbV1fchAqpnjkvsuWMROB0bZ2FNbQZqFNGNFlqlfm9ZH/LmlJAqpli0OK7KOW63c07mHtLZCWoKYOFvUhFjFZitRgVgAxM14GkgBEnPdCeF/bj31/0k3S3lmOWAsqdgaodlMG0cVx0QssEmHTq+z5bC7lJLSSX36cSDWdtIo0i0Vycrm6pjDnlesV5B6FGou1h/gmgS2yOZaQ+r63e7rBsRsARxWAyk+xc/oJVNGGWIVkBIvmizFvB1Iga4DWsmrAdTi5WNeo1GiPY3QhTA7VjwnIN3Q6HXy1gsyW7Fzxx/GdiP2ZNFODnUjsUwt5ma1ZKCD/hZaYbB+UQlp0gWkJJLoyL7cqQaE+MhaYCEUOwNCqclK8idfmJfHgbUxQ9gezWQo5s3gYXv2oFHxA9JApHRC8gxFTh00oWzRkXwXn9AixJn2LCVdJThMSWWTEyVJrrhYNlb2a3sxR2+jkv64AjGvl2XlRytl72SbLZoPC/HnaCkOy0GCgz/9mBl1ppTXifmz7iJH0x7AXmGbUgLp+AF1PxRbP/061SIUMUshpg/o/8ggJX+SSUKqBEri1D19tRklUVy8LwT38+fG2Cuub9RuiRIYbCUmzpdEY1+zgSh3OuX+4bPMf4m/HUtWbNrwLy5Fhv8q2vzuVOlt1DXPnRenj6xu/rL925of6Nql/y8N9vEjn+9X5+ZW3x85aaefNhL/B9z7vOvkKccb+R6RtF1ZaU22epggu9TSf4NUncNb8KL6Q5bLbzJM96oFFTd6r7e3qrr5v3B84G0dSeapQypsjfWerLzXx+/BR3n67y4ZVjDwp1rZVR4an5pgF8k+o8lnCw47YPWXeykJ7Lii3WTSMvHerVJpX7NS5pA3O7xb1/DZm0Jot26sbGJdt/9A8hzCLGwz3rtMnisW575IOJUpeLvprKQ/vt4fyFYudNKnpMnsUuCnkCCPvKcvm9nfvsKmUMvEMP6xW1JKLk37r8ncUhtsCE7XTcgp5KMvr+WCe15ef8jspU8y5U5og1KCl7FSrtV8ASk6cvXEZQmbTFMdA+LCD7JiRsXSEcobuGcdtHIWrMA45ZSEIRCHSVM5Uf81Zr+WGeO71ZXrY7zrbUtHqShhKCHZNijZpd0ns6gwruvEwUO6B7VdaWyABWxnTiqQ6Y7xE9rbrsIjtCak5dCCAyPKPh7laQxK0Nsn64MTYv3sevA8LTBt9Nx1rpXVGaEpYxlMe5hiZiTltycXp8f26OGV5Zlu7hxsrK8Lh0YJF0JbJ92mLRExv1eQHFXmnavRFbjI0n8w+OKfTQ3nmjdflFwmdTI5H0IjXVdcsF/IESxPSx4q/b38JfBY2pBQlENLnViJi7koFzNH6h0yOnV2jFriYHrx0SRi+lhiMxz+WjOO7k+kEzlLhh8gaxE3kba3GhIbUN/y8ZEhXk3lUfCdjyj2M5X6hSsi7VvGvBFU3a2I8gCKHFk9zLvr9tXJzUFV8wNCPZtLIuMCo+MrUzLfH3YxRusdU02R8ZmwQ6LX2JR+X1/wH/xHtdl2VQpJih5KbBUTnOiHe9n785OH2UeIbOEVH5JvNOSY2ibVLvSNMeTmmLcHpNmtUhAwghF4yjkqOS+6PNUxvSK5oGtDXXBMekSYkQn3cg41RGeY7HdtcembG5IQYURwbpxLXKJveIiX8xfw3XQKUtUJNzuolAOyzUaPSA/XNN+qsIyYzEKPOd8dQigbXv7A7pIAg6UTEuOwJiUgLtqmX4PYBTUSdOJ4f3friPLhUb7r4cfpdalKq0CtslWjumfb7tMgpyLxJ33bjGi0m1HCBX4VY9gLAHD771oAgCddl20CrtPrCpYCABZQDQa7/+fAuYKDrK5ABFW077nzhYcQ9nTUXNgzsGVjV8CddgmWcRCBFE2C+5GJ+gggLE0ElMgSwNhZDTitM0DQeQ4WVMFATB6tQg5DA1CUiSK0YSEwJiIdh7O0AwcMMkkA5EJtfIBwrjBAsVUDmHCsK+DMtR0IvvUWLBimE4i5zyxCGvYHin6uJLThdWBiTxCzWOZ1Z5fdRzzOUqXzLbhTOArsPz2Xc/3CK819YyZq3FqZXT95JElo+Lsux+g2VrHzCKYR+cE44WWi7ZvCPXp+j1aV6uG5oqRxjg85kmRq+JjThGLXfQ1ne32D/s7CxWryZ2lvYBD0WkPU/5cWpWtfIrhiKEADQ1R6SVjJCgYEF8Y4seQeHfGmjqT54x9UFk8rBvv3b7Y4tonfjmdv+eFHFL7w34IHhQpDol4v/PSYzghtr+/k4g9jgscN6NUCHI93O9r7kq0uPV8y3/UK6KquS/X9PjE7DY9gAUqxweZ/igLin9YrTdmisRI1bh0MZ7/TI0lCw991OQZbUUnZTYQUTCPiZ1cZDaBZsIR2ibtcNMuJsQ5NCqBWSZhL3Sm5gtaDYy1Q158mYA5MoOChbGhjuGVkZPCCvwOhrPn9ykKTP3l3hXYfwOyoLfYfk9LQSLTkS8S0FSOtcMQIRgYmcZtfwUDGjYRxYsmgLpyjuhKo7DDTz9HpS7bEUWs2KIgwtCDyLQm858RGqdmiarCPsLzteIaE5dnfymrvmTYR250mWOTn7vYxRSIJRjUlUPIEM+obVPPEIYiZ0F436Uz+2hQliJIT5+w2MDR5KgyHq/Grr6Cb9eNhjLLn9c0tdrp/eHx6fgE=) format("woff2");
      }
      @font-face {
        font-family: "HarmonyOS Sans SC Medium";
        src: url(data:font/woff2;base64,d09GMgABAAAAAAVsAAoAAAAAC8wAAAUhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgkIKiACGPgsaAAE2AiQDMAQgBYh3BzobOgpRlExOl+zHQbmdzCKSDIkMCywwTRfv8LP4/q6/fzf7cyG1hKpnFajQEMRs2mCtY21XzPSJ6d8aT3wX+zN770iSICkui+Mo5gNMJU4ubRPQ68SoNdUBcpERZoPGRPkYc0FWwFji8WUNqEAyup/KOlEhK3WtquqCnoWVauYlfwCwurNLktr5fQJw2XegFzo1AFgrYJFkvtaZ5asLAID90ehAgKIcDbO/g+zNDoMAANp7ESAhAGzMXBYSAKiZUbgRQwLAKpQr5wcAlOn+8Aw7pACAVlB0qy7dU8z+DgDhcTwCRQCyAboB9MZZWIgF8SrfyDZvYF2Ew0kpqcnsWZiVUpaRhZDgDX+9xOe/RtM+Iha8gq9foeGP0LTX8q0voT1EYHiSP5QOHNT8UQrtuZcKflSo6hVMfen/CVeV9ARDx6q4HtwgHThyx4HdaI8RgAOOOKiLiBOIKDeCpG3jPfnI8Dh4vD/YnA4c/547uareOjHUTPjX5uXtIT55cgIzHgd95+FRjj0i2lE6dOMDfmJdrvOmrt1y+eu7B3kWqn6Bph2+j3/RjYbjdv/8u0e5do/4bTAaw3hoQ2HhzsqWjzohdz396nKmXREPvAQu4p/6NxQsm3x59KjJV86dn3x11Gi7/MLohdp5JpP+9y9arJ1vMurmLYE1H09kvhgUuTwAnql17V9ZfmTpLHX1AsVXQtplLg5Qhcz0ZkYboeUdRr12mC8Ej9z6FrNZHx0kNDKzG4p8AaooqBT13ljE1QQ04fK2PmabQUTdoURWTZGfKqqf4Gf0UUocVspoRgKPP+pu6d7cf7PBSfw/ot/eut4fBpzoVCv6Wxy6wYNVJvcIR4EtKPxHfxbwdpXr+dxSw57q+hqHrZdwUWcrXnzDVVYBE/aC2/sZzLqBQ9RmK/pPaAbZpH3b6tz7cses+ONGv8N3e+WN3P6eV/V+e9ztH/j899sCaWvrSxO+bnTKFHhVr4sadKrYIJndOVimjukMuui6j2ivSCINx2mDIUKLQlIR5T2z4T2+paJuH02vF1RswXv0kR3Gufzfjhz5R97weWmXuRC9PVitHWSTctvq3HtbnmnsMRd3dOvZjGVcnszLu6ZtOU/3KVhapvFLO8uSpSVrQoH+rlIAAACkf+joH791tGdef6ls9s8AfF22YL1N8RYGveeLynoHSMECAIAAe/t/B3DL9MqghVGVGmHdCXRaO42mVdN608w0iVWW9yP8pIEJAsChxAYAwIIhdag1VJCMYEAPGCCV9GBJ0Q62ap3AVFqGJISjSFbqAlIRXiNNb98gS1GSHs+WnHJsaEkDgKnogADRZgdYMvIN2IL5AqOtBUkKOgPJpF2HVAV9gjT2fpCFGrUbsnFG62ZJtftmqj2Iq7OPioxJ9LtJPsltFNSQ7pFxwYmhBGYb8VcbtJegLPMxJBMZnNbPmEibkRYJ6Tff1l6abzIA7VH6tQgFkmLjEiqCEBpCQ5Bkwpj6PYnAAkb0yWKyL5k/oc5piE+CyRBDjTNcP126jUSiUWhCtS5VGslulIgxEvohmSWM1k9MAlndI1CDSrqNFCcYbjDQQKSGJs0jQucljJAw3GgJEBW7iOEGGWKwcXwYJEbEYCPw801INkY0EWFPmD2Vcv2MMqgpYxduGtjAdDZDQrQgwXwj9Kt8FElCApIGp4TSUSpqFDWaUlVQQXP9kKzV1m+kERNlB6S+yCamdBBHU24WRcGHjS4EHBxvy5UnX4FCRYqVKFWmHAA=)) format("woff2");
      }
    `;
    var style = document.createElement('style');
    // style 元素用 textContent 塞 CSS 即可，既避开 TrustedHTML，也不需要 innerHTML
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);

    // Your code here...
    // let timerInterval = 0;
    let fullShow = GM_getValue("fullShow");
    let hideTimeBar = GM_getValue("hideTimeBar");
    let showSecond = GM_getValue("showSecond");
    let pos = GM_getValue("pos");//左(0)、中(1)、右(2)
    let pos_top_space = GM_getValue("pos_top");//标签和顶部的距离
    let pos_transverse_space = GM_getValue("pos_transverse");//标签左右偏移
    let fontSize_min = GM_getValue("min_font");//最小
    let fontSize_small = GM_getValue("small_font");//小
    let fontSize_medium = GM_getValue("medium_font");//中等
    let fontSize_large = GM_getValue("large_font");//大
    let fontSize_max = GM_getValue("max_font");//最大
    let fontStyle = GM_getValue("font_style");//字体样式
    let fontColor = GM_getValue("font_color");//字体颜色
    let bgColor = GM_getValue("bg_color");//背景颜色
    let barOpacity = GM_getValue("bar_opacity");//时间标签整体透明度
    let timeOffset = GM_getValue("time_offset");//时间偏移
    let showStroke = GM_getValue("show_stroke");//启用字体描边，和背景色互斥
    let strokeColor = GM_getValue("stroke_color");//描边颜色
    let multiZone = GM_getValue("multi_zone");//多时区列表，每行：时区ID 显示名
    let webClock = GM_getValue("web_clock");//网页上也显示悬浮时钟
    let bottomBarOn = GM_getValue("bottom_bar");//页面底部多时区时间条
    let weatherShow = GM_getValue("show_weather");//显示实时天气
    let showDate = GM_getValue("show_date");//显示日期（年-月-日）
    let showWeekday = GM_getValue("show_weekday");//显示星期
    let showLunar = GM_getValue("show_lunar");//显示农历（北京时间）
    let hideZoneName = GM_getValue("hide_zone_name");//多时区隐藏城市/时区名称，只保留时间日期等
    let onlineFont = GM_getValue("online_font");//允许联网加载在线字体
    let fontCssSource = GM_getValue("font_css_source");//在线字体CSS源
    let fontCustom = GM_getValue("font_custom");//自定义字体名（本机已装字体，排在字族最前）
    let fontCustomCss = GM_getValue("font_custom_css");//自定义字体CSS地址
//     if(pos == undefined){
//         GM_setValue("pos",2);
//         pos = 2;
//     }
//     if(pos_top_space == undefined){
//         GM_setValue("pos_top",10);
//         pos_top_space = 10;
//     }
    // ---- 本版默认样式：黄字 + 白色发光虚影 + 半透明 + 大字号 ----
    const DEFAULT_FONT_COLOR   = "#ffe100ff"; // 黄色字
    const DEFAULT_STROKE_COLOR = "#ffffffff"; // 白色虚影
    const DEFAULT_BG_COLOR     = "#00000000"; // 默认不要底色，只留虚影
    const DEFAULT_OPACITY      = 0.85;        // 整体半透明
    const DEFAULT_FONT_SIZES   = {min: 18, small: 24, medium: 34, large: 44, max: 54};
    // ============ 字体库（0.6.6 扩充：影视字幕类 / 科技数码类 / 系统字体） ============
    // 选项文字里的「☁」= 这款需要联网从字体源加载；只加载当前选中的那一款，拉不到就自动回退系统字体
    const DEFAULT_FONT_CSS_SOURCE = "https://fonts.loli.net/css2";
    const FONT_CSS_SOURCES = [
        ["https://fonts.loli.net/css2", "loli 镜像（国内较快）"],
        ["https://fonts.googleapis.com/css2", "Google 官方源"],
        ["https://fonts.font.im/css2", "font.im 备用镜像"],
    ];
    // 在线字体没有的中文字形（如「周几」「农历十月廿六」）靠这条兜底链补齐
    const FONT_FALLBACK = '"Microsoft YaHei", "PingFang SC", Arial, sans-serif';
    const FONT_GROUPS = [
        { name: "内置字体（离线可用）", online: false, items: [
            ["LXGW WenKai Mono TC", "霞鹜文楷等宽（默认）"],
            ["HarmonyOS Sans SC Medium", "HarmonyOS Sans"],
        ]},
        { name: "影视字幕 · 中文 ☁", online: true, items: [
            ["ZCOOL QingKe HuangYou", "站酷庆科黄油体·短视频大字幕"],
            ["ZCOOL KuaiLe", "站酷快乐体·综艺花字"],
            ["ZCOOL XiaoWei", "站酷小薇·文艺片标题"],
            ["Noto Serif SC", "思源宋体·片头片尾字幕"],
            ["Noto Sans SC", "思源黑体·新闻字幕条"],
            ["Ma Shan Zheng", "马善政毛笔楷书·古装片名"],
            ["Long Cang", "龙藏体·手写片名"],
            ["Zhi Mang Xing", "行书手写·武侠片名"],
            ["Liu Jian Mao Cao", "草书手写·书法片名"],
        ]},
        { name: "影视字幕 · 大片标题 ☁", online: true, items: [
            ["Anton", "Anton·预告片大字"],
            ["Bebas Neue", "Bebas Neue·片头时间码"],
            ["Oswald", "Oswald·下横条字幕"],
            ["Archivo Black", "Archivo Black·体育比分割幕"],
            ["Staatliches", "Staatliches·海报标题"],
            ["Six Caps", "Six Caps·极窄片头"],
            ["Rubik Mono One", "Rubik Mono One·综艺大标题"],
            ["Alfa Slab One", "Alfa Slab One·复古slab"],
            ["Bungee", "Bungee·霓虹招牌片头"],
            ["Cinzel", "Cinzel·史诗奇幻片名"],
            ["Playfair Display", "Playfair Display·文艺片婚礼"],
            ["Bodoni Moda", "Bodoni Moda·时尚纪录片"],
            ["Marcellus", "Marcellus·古典片名"],
            ["Rye", "Rye·西部片"],
            ["Black Ops One", "Black Ops One·动作片"],
        ]},
        { name: "科技数码（很适合显示时间）☁", online: true, items: [
            ["Orbitron", "Orbitron·科幻HUD"],
            ["Rajdhani", "Rajdhani·科技字幕条"],
            ["Teko", "Teko·运动倒计时"],
            ["Share Tech Mono", "Share Tech Mono·数码仪表"],
            ["VT323", "VT323·CRT荧光屏"],
            ["Press Start 2P", "Press Start 2P·像素游戏"],
            ["Audiowide", "Audiowide·赛车HUD"],
            ["Michroma", "Michroma·太空片头"],
            ["Electrolize", "Electrolize·电子仪表"],
            ["Russo One", "Russo One·机械军事"],
            ["Play", "Play·通用科技体"],
        ]},
        { name: "系统字体 · 中文（本机装了才生效）", online: false, items: [
            ["Microsoft YaHei", "微软雅黑"],
            ["SimHei", "黑体"],
            ["SimSun", "宋体"],
            ["KaiTi", "楷体"],
            ["FangSong", "仿宋"],
            ["LiSu", "隶书"],
            ["YouYuan", "幼圆"],
            ["STXihei", "华文细黑"],
            ["STHeiti", "华文黑体"],
            ["STHupo", "华文琥珀"],
            ["STXingkai", "华文行楷"],
            ["STXinwei", "华文新魏"],
            ["STZhongsong", "华文中宋"],
            ["Source Han Sans SC", "思源黑体（本机版）"],
            ["Source Han Serif SC", "思源宋体（本机版）"],
            ["PingFang SC", "苹方（Mac）"],
            ["Hiragino Sans GB", "冬青黑体（Mac）"],
        ]},
        { name: "系统字体 · 英文（本机装了才生效）", online: false, items: [
            ["Impact", "Impact·经典大字幕"],
            ["Arial Black", "Arial Black·粗黑"],
            ["Bahnschrift SemiBold Condensed", "Bahnschrift·DIN窄体"],
            ["Segoe UI Black", "Segoe UI Black"],
            ["Franklin Gothic Medium", "Franklin Gothic"],
            ["Trebuchet MS", "Trebuchet MS"],
            ["Verdana", "Verdana"],
            ["Courier New", "Courier New·等宽"],
            ["Menlo", "Menlo·等宽(Mac)"],
            ["Arial", "系统默认(Arial)"],
        ]},
    ];

    // 按 id 查字体信息（family = 实际用于 CSS 的字族名）
    function fontMeta(id) {
        for (const g of FONT_GROUPS) {
            for (const it of g.items) {
                if (it[0] === id) return { id: it[0], family: it[2] || it[0], online: g.online };
            }
        }
        return null;
    }
    // 拼出完整的 font-family 串：自定义字体名 > 选中的字体 > 中文兜底链
    function fontStack(id) {
        let stack;
        if (!id || id === "Arial") {
            stack = "Arial";
        } else {
            const m = fontMeta(id);
            stack = '"' + (m ? m.family : id) + '", ' + FONT_FALLBACK;
        }
        const custom = (fontCustom || "").trim().replace(/["\\]/g, "");
        if (custom) stack = '"' + custom + '", ' + stack;
        return stack;
    }
    // 当前选中的是在线字体时，生成对应的 @import（只拉这一款）
    function onlineFontCssText() {
        if (onlineFont === false) return "";
        const urls = [];
        const m = fontMeta(fontStyle);
        if (m && m.online) {
            let src = DEFAULT_FONT_CSS_SOURCE;
            for (const s of FONT_CSS_SOURCES) {
                if (s[0] === fontCssSource) src = fontCssSource;
            }
            urls.push(src + "?family=" + encodeURIComponent(m.family).replace(/%20/g, "+") + "&display=swap");
        }
        const extra = (fontCustomCss || "").trim();
        if (/^https?:\/\//i.test(extra)) urls.push(extra);
        let css = "";
        for (const u of urls) css += '@import url("' + u.replace(/["\\]/g, "") + '");\n';
        return css;
    }
    function applyOnlineFontStyle() {
        CreateStyleElement("vts-online-font", onlineFontCssText(), true);
    }
    // 设置界面里的「字体源」下拉
    function buildFontSourceOptions() {
        let html = "";
        for (const s of FONT_CSS_SOURCES) {
            html += '<option value="' + s[0] + '">' + s[1] + '</option>';
        }
        return html;
    }
    // 设置界面里的字体下拉
    function buildFontOptions() {
        let html = "";
        for (const g of FONT_GROUPS) {
            html += '<optgroup label="' + g.name + '">';
            for (const it of g.items) html += '<option value="' + it[0] + '">' + it[1] + '</option>';
            html += '</optgroup>';
        }
        return html;
    }

    // 默认时区：第一行是主时区（带完整日期和星期），其余每行一个附加时区
    const DEFAULT_ZONE_LIST    = "Asia/Shanghai 北京\nAmerica/New_York 纽约\nEurope/London 伦敦";

    // 初始化值
    fullShow = (fullShow == undefined)?false:fullShow;
    hideTimeBar = (hideTimeBar == undefined)?false:hideTimeBar;
    showSecond = (showSecond == undefined)?true:showSecond;
    pos = (pos == undefined)?2:pos;
    pos_top_space = (pos_top_space == undefined)?14:pos_top_space;
    pos_transverse_space = (pos_transverse_space == undefined)?0:pos_transverse_space;

    fontSize_min = (fontSize_min == undefined)?DEFAULT_FONT_SIZES.min:fontSize_min;
    fontSize_small = (fontSize_small == undefined)?DEFAULT_FONT_SIZES.small:fontSize_small;
    fontSize_medium = (fontSize_medium == undefined)?DEFAULT_FONT_SIZES.medium:fontSize_medium;
    fontSize_large = (fontSize_large == undefined)?DEFAULT_FONT_SIZES.large:fontSize_large;
    fontSize_max = (fontSize_max == undefined)?DEFAULT_FONT_SIZES.max:fontSize_max;

    fontColor = (fontColor == undefined)?DEFAULT_FONT_COLOR:fontColor;
    fontStyle = (fontStyle == undefined)?"LXGW WenKai Mono TC":fontStyle;
    bgColor = (bgColor == undefined)?DEFAULT_BG_COLOR:bgColor;
    barOpacity = (barOpacity == undefined)?DEFAULT_OPACITY:barOpacity;
    timeOffset = (timeOffset == undefined)?8:timeOffset;
    showStroke = (showStroke == undefined)?true:showStroke;
    strokeColor = (strokeColor == undefined)?DEFAULT_STROKE_COLOR:strokeColor;
    multiZone = (multiZone == undefined || multiZone === "")?DEFAULT_ZONE_LIST:multiZone;
    webClock = (webClock == undefined)?true:webClock;
    bottomBarOn = (bottomBarOn == undefined)?true:bottomBarOn;
    weatherShow = (weatherShow == undefined)?true:weatherShow;
    showDate = (showDate == undefined)?true:showDate;
    showWeekday = (showWeekday == undefined)?true:showWeekday;
    showLunar = (showLunar == undefined)?true:showLunar;
    hideZoneName = (hideZoneName == undefined)?false:hideZoneName;
    onlineFont = (onlineFont == undefined)?true:onlineFont;
    fontCssSource = (fontCssSource == undefined || fontCssSource === "")?DEFAULT_FONT_CSS_SOURCE:fontCssSource;
    fontCustom = (fontCustom == undefined)?"":fontCustom;
    fontCustomCss = (fontCustomCss == undefined)?"":fontCustomCss;

    // 首次运行本版时，强制套用一次新的视觉方案（黄字/白虚影/大字号/半透明），之后仍可在设置里自由修改
    const STYLE_VERSION_TAG = "style_v050_applied";
    if (GM_getValue(STYLE_VERSION_TAG) != true) {
        fontColor = DEFAULT_FONT_COLOR;
        strokeColor = DEFAULT_STROKE_COLOR;
        bgColor = DEFAULT_BG_COLOR;
        barOpacity = DEFAULT_OPACITY;
        showStroke = true;
        fontSize_min = DEFAULT_FONT_SIZES.min;
        fontSize_small = DEFAULT_FONT_SIZES.small;
        fontSize_medium = DEFAULT_FONT_SIZES.medium;
        fontSize_large = DEFAULT_FONT_SIZES.large;
        fontSize_max = DEFAULT_FONT_SIZES.max;
        GM_setValue("font_color", fontColor);
        GM_setValue("stroke_color", strokeColor);
        GM_setValue("bg_color", bgColor);
        GM_setValue("bar_opacity", barOpacity);
        GM_setValue("show_stroke", showStroke);
        GM_setValue("min_font", fontSize_min);
        GM_setValue("small_font", fontSize_small);
        GM_setValue("medium_font", fontSize_medium);
        GM_setValue("large_font", fontSize_large);
        GM_setValue("max_font", fontSize_max);
        GM_setValue(STYLE_VERSION_TAG, true);
    }

    // 颜色统一成 #rrggbbaa：老版本可能存过命名色/"rgb()"这类写法，
    // 直接对字符串做 substring 裁剪会把取色器和透明度解析弄坏
    function normalizeColor(color, fallback) {
        if (typeof color !== "string") return fallback;
        const c = color.trim();
        if (/^#[0-9a-f]{6}$/i.test(c)) return c.toLowerCase() + "ff";
        if (/^#[0-9a-f]{8}$/i.test(c)) return c.toLowerCase();
        if (/^#[0-9a-f]{3}$/i.test(c)) {
            return "#" + c.slice(1).split("").map(function (x) { return x + x; }).join("") + "ff";
        }
        try {
            const ctx = document.createElement("canvas").getContext("2d");
            ctx.fillStyle = "#010203"; // 哨兵值：赋值失败时仍是它
            ctx.fillStyle = c;
            const v = String(ctx.fillStyle);
            if (v === "#010203") return fallback;
            if (/^#[0-9a-f]{6}$/i.test(v)) return v + "ff";
            const m = v.match(/^rgba?\(([^)]+)\)$/i);
            if (m) {
                const p = m[1].split(",").map(function (x) { return parseFloat(x); });
                const hex = function (n) {
                    const h = Math.round(n).toString(16);
                    return h.length === 1 ? "0" + h : h;
                };
                const a = p.length > 3 ? Math.round(p[3] * 255) : 255;
                return "#" + hex(p[0]) + hex(p[1]) + hex(p[2]) + hex(a);
            }
        } catch (e) {}
        return fallback;
    }
    fontColor = normalizeColor(fontColor, DEFAULT_FONT_COLOR);
    bgColor = normalizeColor(bgColor, DEFAULT_BG_COLOR);
    strokeColor = normalizeColor(strokeColor, DEFAULT_STROKE_COLOR);

    applyOnlineFontStyle();// 按当前选中的字体挂载在线字体
    let menu1 = GM_registerMenuCommand ("设置", openSetting, "");

    // 手机端入口：Tampermonkey 菜单在手机上不好点（iOS 还得先进扩展弹窗），
    // 给一个半透明的悬浮小按钮，点一下直接开设置面板；桌面端不出现。
    function createMobileEntry() {
        if (!IS_MOBILE || !document.body) return;
        var btn = document.createElement("div");
        btn.id = "vt-mobile-entry";
        btn.textContent = "⏱";
        btn.style.cssText = [
            "position: fixed",
            "right: calc(8px + " + SAFE_RIGHT + ")",
            "bottom: calc(56px + " + SAFE_BOTTOM + ")",
            "width: 40px",
            "height: 40px",
            "display: flex",
            "align-items: center",
            "justify-content: center",
            "font-size: 20px",
            "color: #fff",
            "background: rgba(0,0,0,0.45)",
            "border-radius: 50%",
            "opacity: 0.55",
            "z-index: 99990", /* 低于设置面板(100000)，面板打开时自然被盖住 */
            "cursor: pointer",
            "-webkit-tap-highlight-color: transparent",
            "-webkit-user-select: none",
            "user-select: none",
            "touch-action: manipulation"
        ].join(";") + ";";
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            openSetting();
        });
        document.body.appendChild(btn);
    }
    createMobileEntry();
    // // 计时器位置
    // var pos = 2;
    // // 计时器字体大小
    // var fontSize = 32;
    // // 计时器字体
    // var fontStyle = "微软雅黑";

    let rootBox;
    var settingBox;
    let isBrowserDark = false;
    function openSetting() {
        // 面板本体在 shadow DOM 里，document.querySelector("#vt-setting") 永远查不到，
        // 之前每次点菜单都会叠一层新面板，这里改用宿主节点判断
        if (document.getElementById("vt-setting-shadow")) return;
        settingBox = null;
        var settingStyle = document.createElement("style");
        settingStyle.type="text/css";
        settingStyle.id="vt-classs";
        var settingStyleInner = `
        div#vt-setting {
            ${IS_MOBILE
                ? `top: calc(8px + ${SAFE_TOP});
            left: calc(8px + ${SAFE_LEFT});
            width: calc(100vw - 16px - ${SAFE_LEFT} - ${SAFE_RIGHT});
            max-height: 76vh;`
                : `top: 40px;
            left: calc(100vw - 300px);
            width: 250px;
            max-height: 82vh;`}
            border: 1px solid gray;
            position: fixed;
            display: block;
            z-index: 100000;
            margin: 0;
            padding: 0;
            border-radius: 6px;
            font-size: ${IS_MOBILE ? "14px" : "small"};
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            color-scheme: light dark;
        }
        #vt-setting.light {
            color: black;
            background-color: white;
            color-scheme: light;
        }
        #vt-setting.dark {
            color: black;
            background-color: #4a4a4a;
            color-scheme: dark;
        }
        #vts-title {
            background-color:gray;
            display: inline-table;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            padding: ${IS_MOBILE ? "8px 0px" : "3px 0px"};
            text-align: center;
            color: white;
            cursor: move;
            height: ${IS_MOBILE ? "24px" : "17px"};
            line-height: ${IS_MOBILE ? "24px" : "17px"};
            user-select:none;
            -webkit-user-select:none;
            touch-action: none; /* 手机上拖标题时不触发页面滚动 */
        }
        #vts-close-btn {
            right: 0px;top:
            0px;font-size: 17px;
            position: absolute;
            background-color: #d77c84;
            width: 44px;
            height: 22px;
            line-height: 24px;
            border-top-right-radius: 5px;
            user-select:none;
        }
        #vts-close-btn:hover {
            background-color: #e81123;
            cursor: default;
        }
        div#vts-general {
            margin-top: 5px;
        }
        #vts-pos input,#vts-general input {
            margin-right: 5px;
        }
        #vts-pos input:is(:nth-child(4),:nth-child(6)) {
            margin-left: 35px;
        }
        .vts-fieldset {
            border: 1px solid #c7c7c7;
            padding: 5px;
            margin: auto 5px 2px;
        }
        .vts-fieldset>legend {
            font-size: small;
            color: gray;
            width: auto;
            padding: 0px 5px;
        }
        #vts-font input,#vts-pos-top,#vts-pos-transverse,#vts-font-style-name,#vts-color input {
            width: 110px;
            font-size: revert;
            outline: revert;
            border: revert;
            appearance: revert;
        }
        #vts-color input.vts-opacity-input-number {
            width: 42px;
        }
        #vts-color input.vts-input {
            width: 52px;
            height: 22px;
            padding: 0 2px;
        }
        .vts-input-number,.vts-input,.vts-select {
            line-height: revert;
            appearance: auto !important;
            width: 110px;
            font-size: revert;
            outline: revert;
            border: revert;
            margin-top: 1px;
        }
        .vts-select {
            margin-top: 2px;
        }
        #vts-font select {
            width: 176px;
            max-width: 100%;
        }
        #vts-font input[type=checkbox] {
            width: auto;
            margin-right: 5px;
        }
        #vts-font .vts-hint {
            margin: 2px 0 3px;
        }
        #vts-font input[type=text] {
            width: 176px;
            max-width: 100%;
            box-sizing: border-box;
        }
        #vts-submit {
            margin-top: 10px;
            text-align: center;
        }
        #vts-submit>input {
            margin: 0;
            padding: 0 10px;
            appearance: auto;
            border: revert;
            border-radius: revert;
            background: revert;
            font-size: revert;
        }
        #vts-submit>input:not(:first-child) {
            margin-left: 20px;
        }
        #vts-save.disable {
            cursor: not-allowed;
            pointer-events: none;
            background-color: #c0c0c0;
            border-color: #8a8a8a;
            border-width: 1px;
            border-radius: 3px;
            color: azure;
            padding: 1px 10px;
        }
        #vts-tips {
            font-size: 13px;
            color: green;
            margin: 10px auto 5px 10px;
        }
        .vts-textarea {
            width: 100%;
            box-sizing: border-box;
            margin-top: 3px;
            font-size: 12px;
            font-family: Consolas, Menlo, monospace;
            line-height: 1.45;
            padding: 3px 4px;
            resize: vertical;
            color: inherit;
            background: rgba(255,255,255,.9);
            color: #222;
            border: 1px solid #c7c7c7;
            border-radius: 4px;
        }
        .vts-hint {
            font-size: 11px;
            color: #888;
            margin-top: 4px;
            line-height: 1.4;
        }
        ${IS_MOBILE ? `
        /* 手机上：控件给足点击高度，输入框 16px 起（iOS 小于 16px 聚焦会放大整页） */
        #vts-close-btn {
            width: 44px;
            height: 32px;
            line-height: 32px;
            font-size: 18px;
        }
        #vts-title { height: 32px; line-height: 32px; }
        #vt-setting input, #vt-setting select, #vt-setting textarea,
        .vts-input-number, .vts-input, .vts-select {
            font-size: 16px !important;
            min-height: 32px;
        }
        #vt-setting input[type=checkbox], #vt-setting input[type=radio] {
            width: 20px;
            height: 20px;
            min-height: 0;
            vertical-align: middle;
        }
        #vt-setting .vts-fieldset>legend { font-size: 13px; }
        #vt-setting label, #vt-setting span { -webkit-user-select: none; user-select: none; }
        .vts-textarea { font-size: 13px !important; }
        #vts-submit>input {
            min-width: 88px;
            min-height: 36px;
            font-size: 15px !important;
            padding: 0 14px;
        }
        #vts-pos input:is(:nth-child(4),:nth-child(6)) { margin-left: 12px; }
        .vts-input-number, .vts-input, .vts-select { width: 92px; }
        #vt-setting { -webkit-tap-highlight-color: transparent; }
        ` : ''}`;
        settingStyle.textContent = settingStyleInner;
        // document.querySelector("head").appendChild(settingStyle);
        // CreateStyleElement("vt-classs", settingStyleInner, false)

        settingBox = document.createElement("div");
        settingBox.id = "vt-setting";
        var innerHtml = `<span id="vts-title">设置
        <span id="vts-close-btn">╳</span>
    </span>
    <div id="vts-general">
        <fieldset class="vts-fieldset">
            <legend>通用设置</legend>
            <input type="checkbox" name="show-full-screen" id="vts-general-check0">
            <label for="left">仅全屏时显示</label>
            <input type="checkbox" name="hide-time-bar" id="vts-general-check1">
            <label for="left">隐藏时间条</label><br>
            <input type="checkbox" name="show-second" id="vts-general-check2">
            <label for="left">显示秒</label>
            <input type="checkbox" name="show-stroke" id="vts-general-check3">
            <label title="显示描边/虚影的时候会“隐藏”背景颜色" >显示虚影💬</label><br>
            <input type="checkbox" name="web-clock" id="vts-general-check4">
            <label for="left" title="没有视频（或视频时间条不显示）时，在网页角落显示一个悬浮时钟">网页也显示时钟💬</label><br>
            <input type="checkbox" name="show-weather" id="vts-general-check6">
            <label for="left" title="每个时区后面追加该城市的实时天气（Open-Meteo，需联网；取不到就自动不显示）">显示实时天气💬</label><br>
            <input type="checkbox" name="bottom-bar" id="vts-general-check5">
            <label for="left" title="在页面最下方固定显示一条包含全部时区的时间（全屏时隐藏）">底部多时区条💬</label><br>
            <input type="checkbox" name="show-date" id="vts-general-check7">
            <label for="left" title="是否显示年-月-日">显示日期💬</label>
            <input type="checkbox" name="show-weekday" id="vts-general-check8">
            <label for="left" title="是否显示周几">显示星期💬</label><br>
            <input type="checkbox" name="show-lunar" id="vts-general-check9">
            <label for="left" title="北京时间额外显示农历日期">显示农历💬</label>
            <input type="checkbox" name="hide-zone-name" id="vts-general-check10">
            <label for="left" title="多时区时隐藏城市/时区名称，只保留时间、日期等实际内容">隐藏时区名称💬</label><br>
        </fieldset>
    </div>
    <div id="vts-zone">
        <fieldset class="vts-fieldset">
            <legend>多时区</legend>
            <label title="每行一个时区；第一行为主时区（显示完整日期和星期）。写「时区ID 显示名」，也认「显示名 时区ID」、纯城市名、UTC+8 这类写法">时区列表💬：</label>
            <textarea id="vts-zone-list" class="vts-textarea" rows="4" spellcheck="false"></textarea>
            <div style="margin-top:4px;display:flex;gap:6px;align-items:center;">
                <input id="vts-zone-default" type="button" value="填入常用三时区">
                <span class="vts-hint" style="margin-top:0;">北京 / 纽约 / 伦敦</span>
            </div>
            <div class="vts-hint">每行一个，例：<br>Asia/Shanghai 北京<br>America/New_York 纽约<br>Europe/London 伦敦<br>也可只写：纽约<br>多行不生效时，看浏览器控制台的黄色警告</div>
        </fieldset>
    </div>
    <div id="vts-pos">
        <fieldset class="vts-fieldset">
            <legend>计时器位置</legend>
            <input type="radio" name="timer-position" id="vts-pos-radio0"><label for="left">左</label>
            <input type="radio" name="timer-position" id="vts-pos-radio1"><label for="left">中</label>
            <input type="radio" name="timer-position" id="vts-pos-radio2"><label for="left">右</label>
            <br><label for="fontSize">顶部距离：</label><input type="number" name="fontSize" id="vts-pos-top"
                class="vts-input-number" min="-1000" max="1000" value="10">
            <br><label for="fontSize">左右偏移：</label><input type="number" name="fontSize" id="vts-pos-transverse"
                class="vts-input-number" min="-2000" max="2000" value="10">
        </fieldset>
    </div>
    <div id="vts-font">
        <fieldset class="vts-fieldset">
            <legend>计时器字体</legend>
            <label title="视频画幅很小时，显示最小字体">最小💬：</label><input type="number" name="fontSize" id="vts-font-size-min"
                class="vts-input-number" min="9" max="99" value="18"><br>
            <label title="视频画幅小时，显示较小字体">较小💬：</label><input type="number" name="fontSize" id="vts-font-size-small"
                class="vts-input-number" min="9" max="99" value="24"><br>
            <label title="视频画幅一般大小时，显示一般大小字体">一般💬：</label><input type="number" name="fontSize"
                id="vts-font-size-medium" class="vts-input-number" min="9" max="99" value="34"><br>
            <label title="视频画幅大时，显示较大字体">较大💬：</label><input type="number" name="fontSize" id="vts-font-size-large"
                class="vts-input-number" min="9" max="99" value="44"><br>
            <label title="视频画幅很大时，显示最大字体">最大💬：</label><input type="number" name="fontSize" id="vts-font-size-max"
                class="vts-input-number" min="9" max="99" value="54"><br />
            <br style="display:none;" />
            <label title="带 ☁ 的要联网加载（只下载当前选中这一款），拉不到自动回退系统字体" for="fontStyle">字体☁💬：</label>
            <select name="fontStyle" class="vts-select" id="vts-font-style-name">${buildFontOptions()}</select>
            <input type="checkbox" id="vts-online-font">
            <label title="关掉后完全不联网加载字体，只用内置字体和系统字体" for="left">在线字体☁💬</label><br>
            <label title="在线字体的CSS来源；前面不行就换下一个" for="left">字体源💬：</label>
            <select id="vts-font-css-source" class="vts-select">${buildFontSourceOptions()}</select><br>
            <label title="填本机已装字体名（如 方正兰亭黑），排在所选字体之前；留空表示不用">自定义字体名💬：</label><input type="text" id="vts-font-custom" maxlength="60" placeholder="留空不使用"><br>
            <label title="自己托管的字体CSS地址（http/https），填了会一起加载">自定义字体CSS💬：</label><input type="text" id="vts-font-custom-css" maxlength="300" placeholder="https://…/font.css">
            <div class="vts-hint">影视字幕类（黄油体/思源宋体/毛笔字/预告片大字等）都在带 ☁ 的分组里；首次选用要联网下载一次，之后走浏览器缓存。加载失败会退回系统字体，不影响看时间。</div>
        </fieldset>
    </div>
    <div id="vts-color">
        <fieldset class="vts-fieldset">
            <legend>颜色/透明度</legend>
            <label title="文字颜色: CSS支持的所有颜色格式(命名(如:Red、Green、Blue等),hex,rgb,hsl,lch)">前景色💬：</label><input type="color" name="font-color" id="vts-font-color"
                class="vts-input" size="9" maxlength="30" value="#ffe100"><label title="文字透明度0~255"> 透明度：</label><input type="number" name="font-opacity" id="vts-font-opacity"
                class="vts-opacity-input-number" step="1" min="0" max="255" value="255"><br>
            <label title="背景颜色: CSS支持的所有颜色格式(命名(如:Red、Green、Blue等),hex,rgb,hsl,lch)">背景色💬：</label><input type="color" name="bg-color" id="vts-bg-color"
                class="vts-input" size="9" maxlength="30" value="#000000"><label title="背景透明度0~255"> 透明度：</label><input type="number" name="bg-opacity" id="vts-bg-opacity"
                class="vts-opacity-input-number" step="1" min="0" max="255" value="0"><br>
            <label title="虚影颜色: CSS支持的所有颜色格式(命名(如:Red、Green、Blue等),hex,rgb,hsl,lch)">虚影色💬：</label><input type="color" name="stroke-color" id="vts-stroke-color"
                class="vts-input" size="9" maxlength="30" value="#ffffff"><label title="虚影透明度0~255"> 透明度：</label><input type="number" name="stroke-opacity" id="vts-stroke-opacity"
                class="vts-opacity-input-number" step="1" min="0" max="255" value="255"><br>
            <label title="整体透明度(范围0-1,可以为小数)">全局透明度💬：</label><input type="number" name="opacity" id="vts-opacity"
                class="vts-input-number" step="0.05" min="0" max="1" value="0.85"><br>
        </fieldset>
    </div>
    <div id="vts-submit">
        <input id="vts-save" type="button" value="保存">
        <input id="vts-close" type="button" value="关闭">
        <input id="vts-reset" type="button" value="重置">
    </div>
    <div id="vts-tips">Tips：点击保存记住设置</div>`;

        rootBox = document.createElement('div');
        rootBox.id = "vt-setting-shadow";

        const shadowRoot = rootBox.attachShadow({mode: 'open'});
        createEscapeHtmlElement(settingBox, innerHtml);

        // 判断系统主题
        if (window.matchMedia) {
            isBrowserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        if (isBrowserDark) {
            settingBox.classList.add('dark');
        } else {
            settingBox.classList.add('light');
        }

        shadowRoot.appendChild(settingStyle);
        shadowRoot.appendChild(settingBox);
        //const escapeHTMLPolicy = getEscapeHTMLPolicy();
        //if (escapeHTMLPolicy != undefined ) {
        //    var escaped  = getEscapeHTMLPolicy().createHTML(innerHtml);
        //    settingBox.innerHTML = escaped;
        //} else {
        //    settingBox.innerHTML = innerHtml;
        //}
        document.body.appendChild(rootBox);
        // 添加事件
        settingBox.querySelector("#vts-general-check0").addEventListener("change",function(){radioChange(this.checked,'check')});
        settingBox.querySelector("#vts-general-check1").addEventListener("change",function(){radioChange(this.checked,'hidetimebar')});
        settingBox.querySelector("#vts-general-check2").addEventListener("change",function(){radioChange(this.checked,'showSecond')});
        settingBox.querySelector("#vts-general-check3").addEventListener("change",function(){radioChange(this.checked,'show-stroke')});
        settingBox.querySelector("#vts-pos-radio0").addEventListener("change",function(){radioChange(0,'radio')});
        settingBox.querySelector("#vts-pos-radio1").addEventListener("change",function(){radioChange(1,'radio')});
        settingBox.querySelector("#vts-pos-radio2").addEventListener("change",function(){radioChange(2,'radio')});
        settingBox.querySelector("#vts-pos-top").addEventListener("input",function(){radioChange(this.value,'top')});
        settingBox.querySelector("#vts-pos-transverse").addEventListener("input",function(){radioChange(this.value,'transverse')});
        settingBox.querySelector("#vts-font-size-min").addEventListener("input",function(){radioChange(this.value,'fontsize-min')});
        settingBox.querySelector("#vts-font-size-small").addEventListener("input",function(){radioChange(this.value,'fontsize-small')});
        settingBox.querySelector("#vts-font-size-medium").addEventListener("input",function(){radioChange(this.value,'fontsize-medium')});
        settingBox.querySelector("#vts-font-size-large").addEventListener("input",function(){radioChange(this.value,'fontsize-large')});
        settingBox.querySelector("#vts-font-size-max").addEventListener("input",function(){radioChange(this.value,'fontsize-max')});

        settingBox.querySelector("#vts-font-color").addEventListener("input",function(){radioChange(this.value,'font-color')});
        settingBox.querySelector("#vts-font-opacity").addEventListener("input",function(){radioChange(this.value,'font-opacity')});
        settingBox.querySelector("#vts-font-style-name").addEventListener("input",function(){radioChange(this.value,'font-style')});
        settingBox.querySelector("#vts-online-font").addEventListener("change",function(){radioChange(this.checked,'onlinefont')});
        settingBox.querySelector("#vts-font-css-source").addEventListener("change",function(){radioChange(this.value,'fontcsssource')});
        settingBox.querySelector("#vts-font-custom").addEventListener("input",function(){radioChange(this.value,'fontcustom')});
        settingBox.querySelector("#vts-font-custom-css").addEventListener("input",function(){radioChange(this.value,'fontcustomcss')});
        settingBox.querySelector("#vts-bg-color").addEventListener("input",function(){radioChange(this.value,'bg-color')});
        settingBox.querySelector("#vts-bg-opacity").addEventListener("input",function(){radioChange(this.value,'bg-opacity')});
        settingBox.querySelector("#vts-stroke-color").addEventListener("input",function(){radioChange(this.value,'stroke-color')});
        settingBox.querySelector("#vts-stroke-opacity").addEventListener("input",function(){radioChange(this.value,'stroke-opacity')});
        settingBox.querySelector("#vts-opacity").addEventListener("input",function(){radioChange(this.value,'opacity')});

        settingBox.querySelector("#vts-general-check4").addEventListener("change",function(){radioChange(this.checked,'webclock')});
        settingBox.querySelector("#vts-general-check5").addEventListener("change",function(){radioChange(this.checked,'bottombar')});
        settingBox.querySelector("#vts-general-check6").addEventListener("change",function(){radioChange(this.checked,'weather')});
        settingBox.querySelector("#vts-general-check7").addEventListener("change",function(){radioChange(this.checked,'showdate')});
        settingBox.querySelector("#vts-general-check8").addEventListener("change",function(){radioChange(this.checked,'showweekday')});
        settingBox.querySelector("#vts-general-check9").addEventListener("change",function(){radioChange(this.checked,'showlunar')});
        settingBox.querySelector("#vts-general-check10").addEventListener("change",function(){radioChange(this.checked,'hidezonename')});
        settingBox.querySelector("#vts-zone-list").addEventListener("input",function(){radioChange(this.value,'zonelist')});
        settingBox.querySelector("#vts-zone-default").addEventListener("click",function(){
            var ta = settingBox.querySelector("#vts-zone-list");
            ta.value = DEFAULT_ZONE_LIST;
            radioChange(ta.value,'zonelist');
        });

        settingBox.querySelector("#vts-save").addEventListener("click",vtsSaveSetting);
        settingBox.querySelector("#vts-close").addEventListener("click",vtsClose);
        settingBox.querySelector("#vts-close-btn").addEventListener("click",vtsClose);
        settingBox.querySelector("#vts-reset").addEventListener("click",vtsResetSetting);
        initSetting();
        // 使设置窗口可拖动:
        // dragElement(document.getElementById("vt-setting"));
        dragElement(settingBox);
    }

    // 转换为可信元素
    // 注意：同名策略只能创建一次，重复 createPolicy 会直接抛错，所以这里必须缓存
    let escapeHTMLPolicy;
    let escapePolicyReady = false;
    function getEscapeHTMLPolicy() {
        if (escapePolicyReady) return escapeHTMLPolicy;
        escapePolicyReady = true;
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            const names = ["myEscapePolicy", "vtsEscapePolicy", "vts-escape-" + Date.now()];
            for (const name of names) {
                try {
                    escapeHTMLPolicy = window.trustedTypes.createPolicy(name, {
                        createHTML: (string) => string,
                    });
                    break;
                } catch (e) { /* 名字被占用就换下一个 */ }
            }
        }
        return escapeHTMLPolicy;
    }

    // 创建可信元素
    function createEscapeHtmlElement(boxElement, htmlText) {
        const policy = getEscapeHTMLPolicy();
        try {
            boxElement.innerHTML = policy ? policy.createHTML(htmlText) : htmlText;
        } catch (e) {
            // 页面强制 Trusted Types 且策略不可用时，退回纯文本，至少不让脚本崩掉
            boxElement.textContent = htmlText;
        }
        return boxElement;
    }

    // 初始化设置界面
    function initSetting() {
        settingBox.querySelector("#vts-general-check0").checked = fullShow;
        settingBox.querySelector("#vts-general-check1").checked = hideTimeBar;
        settingBox.querySelector("#vts-general-check2").checked = showSecond;
        settingBox.querySelector("#vts-general-check3").checked = showStroke;
        settingBox.querySelector("#vts-general-check4").checked = webClock;
        settingBox.querySelector("#vts-general-check5").checked = bottomBarOn;
        settingBox.querySelector("#vts-general-check6").checked = weatherShow;
        settingBox.querySelector("#vts-general-check7").checked = showDate;
        settingBox.querySelector("#vts-general-check8").checked = showWeekday;
        settingBox.querySelector("#vts-general-check9").checked = showLunar;
        settingBox.querySelector("#vts-general-check10").checked = hideZoneName;
        settingBox.querySelector("#vts-zone-list").value = multiZone;
        switch (pos) {
            case 0:
                settingBox.querySelector("#vts-pos-radio0").checked = true;
                break;
            case 1:
                settingBox.querySelector("#vts-pos-radio1").checked = true;
                break;
            case 2:
                settingBox.querySelector("#vts-pos-radio2").checked = true;
        }
        settingBox.querySelector("#vts-pos-top").value = pos_top_space;
        settingBox.querySelector("#vts-pos-transverse").value = pos_transverse_space;
        settingBox.querySelector("#vts-font-size-min").value = fontSize_min;
        settingBox.querySelector("#vts-font-size-small").value = fontSize_small;
        settingBox.querySelector("#vts-font-size-medium").value = fontSize_medium;
        settingBox.querySelector("#vts-font-size-large").value = fontSize_large;
        settingBox.querySelector("#vts-font-size-max").value = fontSize_max;
        //document.querySelector("#vts-font-size-number").value = fontSize;
        // 字体下拉：老版本存的字体名或手写自定义值不在列表里时，补一项出来，避免回落到默认
        var fontSelect = settingBox.querySelector("#vts-font-style-name");
        var fontInList = false;
        for (var fi = 0; fi < fontSelect.options.length; fi++) {
            if (fontSelect.options[fi].value === fontStyle) fontInList = true;
        }
        if (!fontInList && fontStyle) {
            var fontOption = document.createElement("option");
            fontOption.value = fontStyle;
            fontOption.textContent = "（旧设置）" + fontStyle;
            fontSelect.appendChild(fontOption);
        }
        fontSelect.value = fontStyle;
        settingBox.querySelector("#vts-online-font").checked = onlineFont;
        settingBox.querySelector("#vts-font-css-source").value = fontCssSource;
        settingBox.querySelector("#vts-font-custom").value = fontCustom;
        settingBox.querySelector("#vts-font-custom-css").value = fontCustomCss;
        settingBox.querySelector("#vts-font-color").value = fontColor.substring(0,7);
        settingBox.querySelector("#vts-font-opacity").value = parseInt(fontColor.substring(7),16);
        settingBox.querySelector("#vts-bg-color").value = bgColor.substring(0,7);
        settingBox.querySelector("#vts-bg-opacity").value = parseInt(bgColor.substring(7),16);
        settingBox.querySelector("#vts-opacity").value = barOpacity;
        settingBox.querySelector("#vts-stroke-color").value = strokeColor.substring(0,7);
        settingBox.querySelector("#vts-stroke-opacity").value = parseInt(strokeColor.substring(7),16);
    }

    function radioChange(params,type) {
        if(type=="check") {
            fullShow = params;
        }
        if(type=="hidetimebar") {
            hideTimeBar = params;
        }
        if(type=="showSecond") {
            showSecond = params;
        }
        if(type=="show-stroke"){
            showStroke = params;
        }
        if(type=="webclock"){
            webClock = params;
        }
        if(type=="bottombar"){
            bottomBarOn = params;
            settingBox.querySelector("#vts-save").classList.remove("disable");
        }
        if(type=="weather"){
            weatherShow = params;
            settingBox.querySelector("#vts-save").classList.remove("disable");
            weatherLastCheck = 0;
            refreshWeather(true);
        }
        if(type=="showdate"){
            showDate = params;
            settingBox.querySelector("#vts-save").classList.remove("disable");
        }
        if(type=="showweekday"){
            showWeekday = params;
            settingBox.querySelector("#vts-save").classList.remove("disable");
        }
        if(type=="showlunar"){
            showLunar = params;
            settingBox.querySelector("#vts-save").classList.remove("disable");
        }
        if(type=="hidezonename"){
            hideZoneName = params;
            settingBox.querySelector("#vts-save").classList.remove("disable");
        }
        if(type=="zonelist"){
            multiZone = params;
            zoneCache.raw = null; // 重新解析时区
            settingBox.querySelector("#vts-save").classList.remove("disable");
        }
        if(type=="radio") {
            pos = params;
        }
        if(type=="font-style") {
            fontStyle = params;
            applyOnlineFontStyle();// 换字体就按需挂载/换掉在线字体
        }
        if(type=="onlinefont") {
            onlineFont = params;
            applyOnlineFontStyle();
        }
        if(type=="fontcsssource") {
            fontCssSource = params;
            applyOnlineFontStyle();
        }
        if(type=="fontcustom") {
            fontCustom = params;
        }
        if(type=="fontcustomcss") {
            fontCustomCss = params;
            applyOnlineFontStyle();
        }
        if (type=="top") {
            if ((params < -1000 || params > 1000)) {
                settingBox.querySelector("#vts-save").classList.add("disable");
            } else {
                pos_top_space = Number(params);
                settingBox.querySelector("#vts-save").classList.remove("disable");
            }
        }
        if (type=="transverse") {
            if ((params < -2000 || params > 2000)) {
                settingBox.querySelector("#vts-save").classList.add("disable");
            } else {
                pos_transverse_space = Number(params);
                settingBox.querySelector("#vts-save").classList.remove("disable");
            }
        }
        if (type=="number") {
            if ((params < 9 || params > 99)) {
                settingBox.querySelector("#vts-save").classList.add("disable");
            } else {
                settingBox.querySelector("#vts-save").classList.remove("disable");
            }
        }
        if (type.indexOf("fontsize")==0) {
            if ((params < 9 || params > 99)) {
                settingBox.querySelector("#vts-save").classList.add("disable");
            } else {
                switch (type) {
                    case "fontsize-min":
                        fontSize_min = params;
                        break;
                    case "fontsize-small":
                        fontSize_small = params;
                        break;
                    case "fontsize-medium":
                        fontSize_medium = params;
                        break;
                    case "fontsize-large":
                        fontSize_large = params;
                        break;
                    case "fontsize-max":
                        fontSize_max = params;
                }
                settingBox.querySelector("#vts-save").classList.remove("disable");
            }
        }
        if (type.indexOf("color")>0) {
            if ( isColor(params) ) {
                switch (type) {
                    case "font-color":
                        fontColor = params + fontColor.substring(7);
                        break;
                    case "bg-color":
                        bgColor = params + bgColor.substring(7);
                        break;
                    case "stroke-color":
                        strokeColor = params + strokeColor.substring(7);
                        break;
                }
                settingBox.querySelector("#vts-save").classList.remove("disable");
            } else {
                settingBox.querySelector("#vts-save").classList.add("disable");
            }
        }
        if (type.indexOf("opacity")>=0) {
            if (params < 0) {
                settingBox.querySelector("#vts-save").classList.add("disable");
                params = 0;
            } else if (params > 255) {
                settingBox.querySelector("#vts-save").classList.add("disable");
                params = 255;
            }
            switch (type) {
                case "opacity":
                    if (params < 0 || params > 1 ) {
                        if (params > 1) {
                            settingBox.querySelector("#vts-save").classList.add("disable");
                            barOpacity = 1;
                        }
                    } else {
                        barOpacity = params;
                        settingBox.querySelector("#vts-save").classList.remove("disable");
                    }
                    break;
                case "font-opacity":
                    fontColor = fontColor.substring(0,7) + (parseInt(params)<16 ? "0" + parseInt(params).toString(16) : parseInt(params).toString(16));
                    break;
                case "bg-opacity":
                    bgColor = bgColor.substring(0,7) + (parseInt(params)<16 ? "0" + parseInt(params).toString(16) : parseInt(params).toString(16));
                    break;
                case "stroke-opacity":
                    strokeColor = strokeColor.substring(0,7) + (parseInt(params)<16 ? "0" + parseInt(params).toString(16) : parseInt(params).toString(16));
                    break;
            }
        }
        if (type == "timeoffset") {
            if (params < -12 || params > 14 || params % 1 != 0 ) {
                settingBox.querySelector("#vts-save").classList.add("disable");
            } else {
                timeOffset = params;
                settingBox.querySelector("#vts-save").classList.remove("disable");
            }
        }
    }

    // 保存按钮
    function vtsSaveSetting() {
        GM_setValue("fullShow",fullShow);
        GM_setValue("hideTimeBar",hideTimeBar);
        GM_setValue("showSecond",showSecond);
        GM_setValue("show_stroke",showStroke);
        GM_setValue("web_clock",webClock);
        GM_setValue("bottom_bar",bottomBarOn);
        GM_setValue("show_weather",weatherShow);
        GM_setValue("show_date",showDate);
        GM_setValue("show_weekday",showWeekday);
        GM_setValue("show_lunar",showLunar);
        GM_setValue("hide_zone_name",hideZoneName);
        GM_setValue("multi_zone",multiZone);
        GM_setValue("pos",pos);
        GM_setValue("pos_top",pos_top_space);
        GM_setValue("pos_transverse",pos_transverse_space);
        GM_setValue("min_font",fontSize_min);
        GM_setValue("small_font",fontSize_small);
        GM_setValue("medium_font",fontSize_medium);
        GM_setValue("large_font",fontSize_large);
        GM_setValue("max_font",fontSize_max);

        GM_setValue("font_color",fontColor);
        GM_setValue("font_style",fontStyle);
        GM_setValue("online_font",onlineFont);
        GM_setValue("font_css_source",fontCssSource);
        GM_setValue("font_custom",fontCustom);
        GM_setValue("font_custom_css",fontCustomCss);
        GM_setValue("bg_color",bgColor);
        GM_setValue("bar_opacity",barOpacity);

        GM_setValue("time_offset",timeOffset);
        GM_setValue("stroke_color",strokeColor);

        //fontSize = document.querySelector("#vts-font-size-number").value;
        // fontStyle = document.querySelector("#vts-font-style-name").value;

        let textTips1 = "Tips：保存成功！";
        let textTips2 = "Tips：再次保存成功！";
        let currentText = settingBox.querySelector("#vts-tips").innerText;
        if(currentText == textTips1) {
            settingBox.querySelector("#vts-tips").innerText = textTips2;
        } else {
            settingBox.querySelector("#vts-tips").innerText = textTips1;
        }
    }
    // 取消按钮
    function vtsClose() {
        // 样式和面板都在 shadowRoot 内，随宿主节点一起移除即可
        if (rootBox && rootBox.parentNode) rootBox.remove();
        settingBox = null;
    }
    // 重置按钮
    function vtsResetSetting() {
        fullShow = false;
        hideTimeBar = false;
        showSecond = true;
        showStroke = true;
        pos = 2;
        pos_top_space = 14;
        pos_transverse_space = 0;
        fontSize_min = DEFAULT_FONT_SIZES.min;//最小
        fontSize_small = DEFAULT_FONT_SIZES.small;//小
        fontSize_medium = DEFAULT_FONT_SIZES.medium;//中等
        fontSize_large = DEFAULT_FONT_SIZES.large;//大
        fontSize_max = DEFAULT_FONT_SIZES.max;//最大
        //fontSize = 32;
        fontStyle = "LXGW WenKai Mono TC";
        onlineFont = true;
        fontCssSource = DEFAULT_FONT_CSS_SOURCE;
        fontCustom = "";
        fontCustomCss = "";
        applyOnlineFontStyle();
        fontColor = DEFAULT_FONT_COLOR;//黄字
        bgColor = DEFAULT_BG_COLOR;
        barOpacity = DEFAULT_OPACITY;//半透明
        timeOffset = 8;
        showStroke = true;//虚影开关也要复位，否则重置后可能还是关着的
        strokeColor = DEFAULT_STROKE_COLOR;//白色虚影
        webClock = true;
        bottomBarOn = true;
        weatherShow = true;
        showDate = true;
        showWeekday = true;
        showLunar = true;
        hideZoneName = false;
        multiZone = DEFAULT_ZONE_LIST;
        zoneCache.raw = null;

        initSetting();
        settingBox.querySelector("#vts-tips").innerText = "已重置为默认,点击“保存”记住设置！";
        //vtsClose();
    }
     /**
     * [isFullscreen 判断浏览器是否全屏]
     * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
     */
    function isFullscreen(){
        if (document.fullscreenElement    ||
            document.msFullscreenElement  ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement) return true;
        // iOS Safari 的播放器全屏不走标准 Fullscreen API
        if (document.webkitDisplayingFullscreen) return true;
        if (IS_MOBILE) {
            var vids = document.getElementsByTagName("video");
            for (var i = 0; i < vids.length; i++) {
                if (vids[i].webkitDisplayingFullscreen) return true;
            }
        }
        return false;
    }

    // ---- 颜色工具：把 #rrggbbaa 转成 rgba()，并生成一圈柔和的白色虚影 ----
    function parseColor(color) {
        if (typeof color !== "string" || !/^#/.test(color)) {
            return { r: 255, g: 255, b: 255, a: 1 };
        }
        let h = color.slice(1);
        if (h.length === 3) { h = h.split("").map(c => c + c).join(""); }
        return {
            r: parseInt(h.substr(0, 2), 16) || 0,
            g: parseInt(h.substr(2, 2), 16) || 0,
            b: parseInt(h.substr(4, 2), 16) || 0,
            a: h.length >= 8 ? (parseInt(h.substr(6, 2), 16) / 255) : 1
        };
    }

    // 生成“白色虚影”：多层无偏移的模糊阴影，越靠内越实、越靠外越淡
    function buildGlow(color) {
        const c = parseColor(color);
        const rgba = (alpha) => `rgba(${c.r},${c.g},${c.b},${(c.a * alpha).toFixed(2)})`;
        return [
            `0 0 2px ${rgba(1)}`,
            `0 0 5px ${rgba(0.95)}`,
            `0 0 10px ${rgba(0.9)}`,
            `0 0 18px ${rgba(0.75)}`,
            `0 0 30px ${rgba(0.55)}`,
            `1px 2px 8px ${rgba(0.6)}`
        ].join(",");
    }

    // 按视频宽度决定字号
    function fontSizeFor(width) {
        if (width >= 1700) return fontSize_max;
        if (width >= 1200) return fontSize_large;
        if (width >= 720) return fontSize_medium;
        if (width <= 200) return fontSize_min;
        return fontSize_small;
    }

    // 创建时间标签
    function createTag(element) {
        let timeBar = document.createElement("div");
        // 别用「timer」这种站内常见类名：站点的 .timer 样式（比如 display:none）会误伤时间条
        timeBar.className = "vt-timer";
        timeBar.title = "点击隐藏本视频的时间条（10 分钟后自动恢复）";
        timeBar.style.cssText = [
            "z-index: 101",
            "margin: 0",
            "padding: 2px 8px",
            "border-radius: 4px",
            "line-height: 1.15em",
            "user-select: none",
            "white-space: pre-wrap",
            "height: min-content",
            "letter-spacing: 0.5px",
            "position: absolute",
            "pointer-events: auto",
            "-webkit-tap-highlight-color: transparent",
            "-webkit-user-select: none",
            "touch-action: manipulation"
        ].join(";") + ";";
        return timeBar;
    }

    // 取视频相对“时间条定位基准”的位置：父容器是定位元素时用 offset，否则用实际渲染坐标换算
    function getPlacement(video, timeBar) {
        if (video.offsetParent === video.parentElement) {
            return {
                width: video.offsetWidth,
                height: video.offsetHeight,
                left: video.offsetLeft || 0,
                top: video.offsetTop || 0
            };
        }
        const cb = timeBar.offsetParent;
        if (!cb) {
            return {
                width: video.offsetWidth,
                height: video.offsetHeight,
                left: video.offsetLeft || 0,
                top: video.offsetTop || 0
            };
        }
        const vRect = video.getBoundingClientRect();
        // body/html 为 static 时，绝对定位的基准是“初始包含块”（等同文档坐标）
        const isRootStatic = (cb === document.body || cb === document.documentElement)
            && window.getComputedStyle(cb).position === "static";
        if (isRootStatic) {
            return {
                width: vRect.width || video.offsetWidth,
                height: vRect.height || video.offsetHeight,
                left: vRect.left + (window.pageXOffset || 0),
                top: vRect.top + (window.pageYOffset || 0)
            };
        }
        const cRect = cb.getBoundingClientRect();
        return {
            width: vRect.width || video.offsetWidth,
            height: vRect.height || video.offsetHeight,
            left: vRect.left - cRect.left + (cb.scrollLeft || 0),
            top: vRect.top - cRect.top + (cb.scrollTop || 0)
        };
    }

    // 统一计算并套用时间条的样式和位置
    function applyTagStyle(video, timeBar) {
        if (!video || !timeBar) return;
        const box = getPlacement(video, timeBar);
        const width = box.width;
        const space = width <= 200 ? 6 : 10;

        // 手机上封顶 22px：窄屏按宽度算出来的字号常常偏大，多时区多行会盖住半个画面
        var tagFontSize = fontSizeFor(width);
        if (IS_MOBILE) tagFontSize = Math.min(tagFontSize, 22);
        timeBar.style.fontSize = tagFontSize + "px";
        timeBar.style.color = fontColor;
        timeBar.style.opacity = barOpacity;
        timeBar.style.fontFamily = fontStack(fontStyle);
        timeBar.style.textAlign = (pos === 2 ? "right" : (pos === 1 ? "center" : "left"));
        if (showStroke) {
            timeBar.style.textShadow = buildGlow(strokeColor);
            timeBar.style.backgroundColor = "transparent";
            timeBar.style.fontWeight = "500";
        } else {
            timeBar.style.textShadow = "none";
            timeBar.style.backgroundColor = bgColor;
            timeBar.style.fontWeight = "400";
        }
        if (width > 0) {
            timeBar.style.maxWidth = Math.max(0, width - space * 2) + "px";
        }

        timeBar.style.top = (box.top + pos_top_space) + "px";

        const tagWidth = timeBar.offsetWidth || 0;
        let leftPos;
        switch (pos) {
            case 0: // 左
                leftPos = box.left + pos_transverse_space + space;
                break;
            case 1: // 中
                leftPos = box.left + pos_transverse_space + (width - tagWidth) / 2;
                break;
            default: // 右
                leftPos = box.left + pos_transverse_space + width - space - tagWidth;
        }
        if (width > tagWidth) {
            leftPos = Math.max(box.left + 2, Math.min(leftPos, box.left + width - tagWidth - 2));
        }
        timeBar.style.right = "auto";
        timeBar.style.left = Math.round(leftPos) + "px";
    }

    // 改变时间标签样式
    function changeTag(element) {
        // 只用 video 自己的时间条：同一容器里有多个 video（预览小窗、列表页）时，
        // 原来退回 querySelector(".timer") 会拿到别人的时间条，位置就错位了
        const timeBar = element.__vtTimer;
        if (!timeBar) return;

        // 用户点过时间条：10 分钟内保持隐藏（到点自动恢复）
        if (timeBar.__vtHideUntil && Date.now() < timeBar.__vtHideUntil) {
            if (timeBar.style.display !== "none") timeBar.style.display = "none";
            return;
        }

        // 太小的视频（缩略图、预览窗等）不显示，避免全站匹配后满屏小字
        if (element.offsetWidth < 160 || element.offsetHeight < 90) {
            if (timeBar.style.display !== "none") timeBar.style.display = "none";
            return;
        }
        const fs = !!isFullscreen();
        const shouldHide = (fs === false && fullShow === true) || hideTimeBar === true;
        if (shouldHide) {
            if (timeBar.style.display !== "none") timeBar.style.display = "none";
        } else if (timeBar.style.display !== "block") {
            timeBar.style.display = "block";
        }

        // 状态没变就不重算位置/字号：1 秒一次的循环里再重复写十几个样式属性会很浪费
        const sig = [element.offsetWidth, element.offsetHeight, element.offsetLeft, element.offsetTop, fs ? 1 : 0,
            pos, pos_top_space, pos_transverse_space,
            fontStyle, fontCustom, onlineFont ? 1 : 0,
            fontColor, bgColor, barOpacity, showStroke ? 1 : 0, strokeColor,
            fontSize_min, fontSize_small, fontSize_medium, fontSize_large, fontSize_max].join("|");
        if (element.__vtSig === sig) return;
        element.__vtSig = sig;
        applyTagStyle(element, timeBar);
    }

    // 时间条是绝对定位的兄弟节点，必须有确定的定位基准：
    // 视频父容器若为 static，offsetParent 会跑到 body 上，页面滚动/全屏时坐标就会算错。
    // 这里只把 static 容器改成 relative（不改变它的实际位置），保证坐标始终一致。
    function ensurePlacementBase(parent) {
        if (!parent || parent === document.body || parent === document.documentElement) return;
        try {
            if (window.getComputedStyle(parent).position === "static") {
                parent.style.position = "relative";
            }
        } catch (e) {}
    }

    // 为单个 video 准备好时间条（懒加载、父节点被换掉时自动补上）
    function ensureTimer(video) {
        if (!video || !video.parentElement) return null;
        ensurePlacementBase(video.parentElement);
        let timeBar = video.__vtTimer;
        if (!timeBar || !timeBar.parentNode || !document.contains(timeBar) || timeBar.parentNode !== video.parentElement) {
            if (timeBar && timeBar.parentNode) {
                timeBar.parentNode.removeChild(timeBar);
            }
            timeBar = createTag(video);
            addElementEvent(timeBar);
            video.parentElement.insertBefore(timeBar, video);
            video.__vtTimer = timeBar;
        }
        return timeBar;
    }

    // 给元素添加事件
    function addElementEvent(element){
        element.onmouseover = function(even) {
            even.stopPropagation();
        }
        element.onmousemove = function(even) {
            even.stopPropagation();
        }
        element.onmouseenter = function(even) {
            even.stopPropagation();
        }
        // 点击时临时隐藏：只影响这一个视频的时间条，10 分钟后自动恢复，
        // 不再像以前那样打开全局 hideTimeBar、连带隐藏底部条和网页时钟
        element.onclick = function(even) {
            even.stopPropagation();
            element.__vtHideUntil = Date.now() + 10 * 60 * 1000;
            element.style.display = "none";
        }
    }

    // 时间文本：2026-11-11 周三 22:11:05
    // ---- 多时区 ----
    let zoneCache = {raw: null, list: []};

    // 常见城市名 → IANA 时区（只写“纽约”“东京”这种城市名也能识别）
    const CITY_ZONES = {
        "北京": "Asia/Shanghai", "上海": "Asia/Shanghai", "中国": "Asia/Shanghai", "广州": "Asia/Shanghai", "深圳": "Asia/Shanghai",
        "香港": "Asia/Hong_Kong", "台北": "Asia/Taipei", "东京": "Asia/Tokyo", "大阪": "Asia/Tokyo",
        "首尔": "Asia/Seoul", "新加坡": "Asia/Singapore", "曼谷": "Asia/Bangkok", "吉隆坡": "Asia/Kuala_Lumpur",
        "雅加达": "Asia/Jakarta", "马尼拉": "Asia/Manila", "河内": "Asia/Ho_Chi_Minh", "孟买": "Asia/Kolkata", "新德里": "Asia/Kolkata",
        "迪拜": "Asia/Dubai", "悉尼": "Australia/Sydney", "墨尔本": "Australia/Melbourne", "奥克兰": "Pacific/Auckland",
        "纽约": "America/New_York", "洛杉矶": "America/Los_Angeles", "旧金山": "America/Los_Angeles", "西雅图": "America/Los_Angeles",
        "芝加哥": "America/Chicago", "多伦多": "America/Toronto", "温哥华": "America/Vancouver", "圣保罗": "America/Sao_Paulo",
        "伦敦": "Europe/London", "巴黎": "Europe/Paris", "柏林": "Europe/Berlin", "罗马": "Europe/Rome", "莫斯科": "Europe/Moscow",
        "基辅": "Europe/Kyiv", "伊斯坦布尔": "Europe/Istanbul",
        "美国": "America/New_York", "英国": "Europe/London", "法国": "Europe/Paris", "德国": "Europe/Berlin",
        "日本": "Asia/Tokyo", "韩国": "Asia/Seoul", "俄罗斯": "Europe/Moscow", "澳大利亚": "Australia/Sydney",
        "加拿大": "America/Toronto", "印度": "Asia/Kolkata", "巴西": "America/Sao_Paulo", "阿联酋": "Asia/Dubai",
        "新西兰": "Pacific/Auckland",
        "utc": "UTC", "gmt": "Etc/GMT",
        "beijing": "Asia/Shanghai", "shanghai": "Asia/Shanghai", "hongkong": "Asia/Hong_Kong", "tokyo": "Asia/Tokyo",
        "seoul": "Asia/Seoul", "singapore": "Asia/Singapore", "sydney": "Australia/Sydney", "mumbai": "Asia/Kolkata",
        "newyork": "America/New_York", "losangeles": "America/Los_Angeles", "chicago": "America/Chicago",
        "toronto": "America/Toronto", "london": "Europe/London", "paris": "Europe/Paris", "berlin": "Europe/Berlin",
        "moscow": "Europe/Moscow", "dubai": "Asia/Dubai", "auckland": "Pacific/Auckland"
    };

    function makeZoneFmt(tz) {
        return new Intl.DateTimeFormat("zh-CN", {
            timeZone: tz,
            hourCycle: "h23",
            year: "numeric", month: "2-digit", day: "2-digit",
            hour: "2-digit", minute: "2-digit", second: "2-digit",
            weekday: "short"
        });
    }

    function zoneKey(text) {
        return String(text || "").replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g, "").toLowerCase();
    }

    // 把一段文字解析成 IANA 时区名：支持 IANA 名、中英文城市名、UTC±N/GMT±N
    function resolveZone(text) {
        const t = String(text || "").trim();
        if (!t) return "";
        const off = t.match(/^(?:utc|gmt)?\s*([+-])(\d{1,2})(?::?(\d{2}))?$/i);
        if (off) {
            const h = parseInt(off[2], 10);
            const m = off[3] ? parseInt(off[3], 10) : 0;
            if (m === 0 && h <= 14) {
                // IANA 的 Etc/GMT 符号是反的：UTC+8 → Etc/GMT-8
                return "Etc/GMT" + (off[1] === "+" ? "-" : "+") + h;
            }
            return ""; // 半小时类偏移暂不支持
        }
        const key = zoneKey(t);
        if (CITY_ZONES[key]) return CITY_ZONES[key];
        try {
            const f = makeZoneFmt(t);
            f.format(new Date()); // 非法时区在这里会抛错
            return t;
        } catch (e) {
            return "";
        }
    }

    // 解析“时区列表”：默认每行 “时区ID 显示名”，也兼容“显示名 时区ID”、城市名、UTC±N
    function getZones() {
        if (zoneCache.raw === multiZone) return zoneCache.list;

        let segs = String(multiZone || "").split(/[\n\r;；|｜]+/).filter(function (x) { return x.trim(); });
        // 整段写成一行、用逗号或顿号并列时，再拆一层
        if (segs.length === 1 && /[,，、]/.test(segs[0])) {
            const more = segs[0].split(/[,，、]+/).filter(function (x) { return x.trim(); });
            if (more.length > 1) segs = more;
        }

        const list = [];
        const failed = [];
        segs.forEach(function (raw) {
            const line = raw.trim().replace(/^[-*·\s]+/, "").trim();
            if (!line) return;
            const tokens = line.replace(/[,，、]/g, " ").split(/\s+/).filter(Boolean);
            let tz = "";
            let nameParts = [];
            if (tokens.length === 1) {
                tz = resolveZone(tokens[0]);
            } else {
                // 先挑“看起来就是时区”的词：含 / 的 IANA 名，或 UTC+8 / GMT-5
                let idx = -1;
                for (let i = 0; i < tokens.length && idx < 0; i++) {
                    if (tokens[i].indexOf("/") > -1 && resolveZone(tokens[i])) idx = i;
                }
                if (idx < 0) {
                    for (let i = 0; i < tokens.length && idx < 0; i++) {
                        if (/^(?:utc|gmt)?\s*[+-]\d/i.test(tokens[i]) && resolveZone(tokens[i])) idx = i;
                    }
                }
                // 都没有时，退回“第一个能识别的词”（城市名/国家名）
                if (idx < 0) {
                    for (let i = 0; i < tokens.length && idx < 0; i++) {
                        if (resolveZone(tokens[i])) idx = i;
                    }
                }
                if (idx >= 0) {
                    tz = resolveZone(tokens[idx]);
                    nameParts = tokens.filter(function (x, i) { return i !== idx; });
                }
            }
            if (!tz) { failed.push(line); return; }

            let name = nameParts.join(" ").trim();
            if (!name) {
                // 只写了一个词时：城市名就沿用原文，IANA 名取最后一段
                const key = zoneKey(tokens[0]);
                name = (CITY_ZONES[key] && CITY_ZONES[key] === tz)
                    ? tokens[0]
                    : tz.split("/").pop().replace(/_/g, " ");
            }
            list.push({ tz: tz, name: name, fmt: makeZoneFmt(tz), primary: list.length === 0 });
        });

        if (!list.length) {
            // 一条都没解析出来时，退回北京时间，避免整个时间条消失
            list.push({ tz: "Asia/Shanghai", name: "北京", fmt: makeZoneFmt("Asia/Shanghai"), primary: true });
        }
        if (failed.length) {
            console.warn("[视频全屏显示时间] 以下时区无法识别，已跳过：\n" + failed.join("\n") +
                "\n正确格式：每行「时区ID 显示名」，如 Asia/Shanghai 北京");
        } else if (segs.length > 1 && list.length === 1) {
            console.warn("[视频全屏显示时间] 列表有多行但只解析出 1 个时区，请检查格式");
        }
        zoneCache = { raw: multiZone, list: list };
        return list;
    }

    // ---- 实时天气（Open-Meteo：免密钥、允许跨域）----
    const WEATHER_TTL = 10 * 60 * 1000; // 10 分钟刷新一次
    // WMO 天气代码 → 中文
    const WCODE = {
        0: "晴", 1: "少云", 2: "多云", 3: "阴",
        45: "雾", 48: "雾凇",
        51: "毛毛雨", 53: "毛毛雨", 55: "毛毛雨", 56: "冻雨", 57: "冻雨",
        61: "小雨", 63: "中雨", 65: "大雨", 66: "冻雨", 67: "冻雨",
        71: "小雪", 73: "中雪", 75: "大雪", 77: "雪粒",
        80: "阵雨", 81: "强阵雨", 82: "暴雨", 85: "阵雪", 86: "强阵雪",
        95: "雷阵雨", 96: "雷阵雨", 99: "雷阵雨"
    };
    // 时区 → [纬度, 经度]；没列到的（如 UTC+8）不显示天气
    const GEO = {
        "asia/shanghai": [31.23, 121.47], "asia/hong_kong": [22.32, 114.17], "asia/macau": [22.20, 113.54],
        "asia/taipei": [25.03, 121.57], "asia/tokyo": [35.68, 139.69], "asia/seoul": [37.57, 126.98],
        "asia/singapore": [1.35, 103.82], "asia/bangkok": [13.75, 100.50], "asia/kuala_lumpur": [3.14, 101.69],
        "asia/jakarta": [-6.21, 106.85], "asia/manila": [14.60, 120.98], "asia/ho_chi_minh": [10.82, 106.63],
        "asia/kolkata": [19.08, 72.88], "asia/calcutta": [19.08, 72.88], "asia/dhaka": [23.81, 90.41],
        "asia/karachi": [24.86, 67.01], "asia/kabul": [34.53, 69.17], "asia/colombo": [6.93, 79.86],
        "asia/kathmandu": [27.72, 85.32], "asia/yangon": [16.87, 96.20], "asia/phnom_penh": [11.56, 104.92],
        "asia/vientiane": [17.97, 102.63], "asia/ulaanbaatar": [47.89, 106.91], "asia/almaty": [43.24, 76.89],
        "asia/tashkent": [41.30, 69.24], "asia/baku": [40.41, 49.87], "asia/tbilisi": [41.72, 44.79],
        "asia/yerevan": [40.18, 44.51], "asia/jerusalem": [31.77, 35.21], "asia/beirut": [33.89, 35.50],
        "asia/amman": [31.95, 35.93], "asia/baghdad": [33.31, 44.36], "asia/kuwait": [29.37, 47.98],
        "asia/qatar": [25.29, 51.53], "asia/muscat": [23.59, 58.41], "asia/dubai": [25.20, 55.27],
        "asia/riyadh": [24.71, 46.68], "asia/tehran": [35.69, 51.39], "asia/novosibirsk": [55.01, 82.93],
        "asia/krasnoyarsk": [56.01, 92.87], "asia/irkutsk": [52.29, 104.30], "asia/yekaterinburg": [56.84, 60.61],
        "asia/vladivostok": [43.12, 131.89], "asia/makassar": [-5.14, 119.42], "asia/nairobi": [-1.29, 36.82],
        "asia/addis_ababa": [9.03, 38.74], "asia/khartoum": [15.50, 32.56],
        "australia/sydney": [-33.87, 151.21], "australia/melbourne": [-37.81, 144.96],
        "australia/brisbane": [-27.47, 153.03], "australia/perth": [-31.95, 115.86],
        "australia/adelaide": [-34.93, 138.60], "australia/darwin": [-12.46, 130.84],
        "australia/hobart": [-42.88, 147.33], "pacific/auckland": [-36.85, 174.76],
        "pacific/honolulu": [21.31, -157.86], "pacific/fiji": [-18.14, 178.44],
        "america/new_york": [40.71, -74.01], "america/los_angeles": [34.05, -118.24],
        "america/chicago": [41.88, -87.63], "america/toronto": [43.65, -79.38],
        "america/vancouver": [49.28, -123.12], "america/denver": [39.74, -104.99],
        "america/phoenix": [33.45, -112.07], "america/mexico_city": [19.43, -99.13],
        "america/sao_paulo": [-23.55, -46.63], "america/argentina/buenos_aires": [-34.60, -58.38],
        "america/santiago": [-33.45, -70.67], "america/lima": [-12.05, -77.04],
        "america/bogota": [4.71, -74.07], "america/caracas": [10.48, -66.90],
        "america/havana": [23.11, -82.37], "america/panama": [8.98, -79.52],
        "america/edmonton": [53.55, -113.49], "america/winnipeg": [49.90, -97.14],
        "america/st_johns": [47.56, -52.71], "america/anchorage": [61.22, -149.90],
        "europe/london": [51.51, -0.13], "europe/paris": [48.86, 2.35], "europe/berlin": [52.52, 13.40],
        "europe/rome": [41.90, 12.50], "europe/madrid": [40.42, -3.70], "europe/barcelona": [41.39, 2.17],
        "europe/amsterdam": [52.37, 4.90], "europe/brussels": [50.85, 4.35], "europe/zurich": [47.38, 8.54],
        "europe/vienna": [48.21, 16.37], "europe/prague": [50.08, 14.44], "europe/warsaw": [52.23, 21.01],
        "europe/budapest": [47.50, 19.04], "europe/athens": [37.98, 23.73], "europe/stockholm": [59.33, 18.07],
        "europe/oslo": [59.91, 10.75], "europe/copenhagen": [55.68, 12.57], "europe/helsinki": [60.17, 24.94],
        "europe/moscow": [55.76, 37.62], "europe/kyiv": [50.45, 30.52], "europe/kiev": [50.45, 30.52],
        "europe/istanbul": [41.01, 28.98], "europe/lisbon": [38.72, -9.14], "europe/dublin": [53.35, -6.26],
        "europe/edinburgh": [55.95, -3.19], "europe/belgrade": [44.79, 20.45], "europe/bucharest": [44.43, 26.10],
        "europe/sofia": [42.70, 23.32], "europe/riga": [56.95, 24.11],
        "africa/cairo": [30.04, 31.24], "africa/lagos": [6.52, 3.38], "africa/johannesburg": [-26.20, 28.05],
        "africa/cape_town": [-33.92, 18.42], "africa/casablanca": [33.57, -7.59], "africa/accra": [5.60, -0.19],
        "africa/kinshasa": [-4.44, 15.27], "atlantic/canary": [28.10, -15.41]
    };

    // ---- 农历（只给北京时间那一项加）----
    const LUNAR_DAY = ["", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
        "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
        "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
    let lunarFmt = null;
    try {
        // 用浏览器内置的中国历法（ICU），不引外部库
        lunarFmt = new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
            timeZone: "Asia/Shanghai",
            year: "numeric", month: "long", day: "numeric"
        });
    } catch (e) { lunarFmt = null; }
    const lunarCache = { key: "", text: "" };

    function isChinaZone(zone) {
        if (/^Asia\/(Shanghai|Chongqing|Harbin)$/i.test(String(zone.tz || ""))) return true;
        return /北京|中国|上海/.test(String(zone.name || ""));
    }

    // 返回“农历十月廿六”；环境不支持中国历法时返回空，绝不显示错的日期
    function lunarText(date) {
        if (!lunarFmt) return "";
        // 按分钟缓存：农历一天一变，但避免跨时区半小时偏移时同一小时取到过期结果
        const key = Math.floor(date.getTime() / 60000);
        if (lunarCache.key === key) return lunarCache.text;
        let text = "";
        try {
            const parts = lunarFmt.formatToParts(date);
            let month = "", day = "", hasYearName = false;
            for (let i = 0; i < parts.length; i++) {
                if (parts[i].type === "month") month = parts[i].value;
                else if (parts[i].type === "day") day = parts[i].value;
                else if (parts[i].type === "yearName") hasYearName = true;
            }
            // 没有干支年份说明这个浏览器根本没应用中国历法，宁可空着
            if (month && day && hasYearName) {
                const n = parseInt(day, 10);
                text = "农历" + month + (LUNAR_DAY[n] || (n + "日"));
            }
        } catch (e) { text = ""; }
        lunarCache.key = key;
        lunarCache.text = text;
        return text;
    }

    function lunarOf(zone, date) {
        return isChinaZone(zone) ? lunarText(date) : "";
    }

    const weatherState = {}; // tz -> {text, ts, pending}

    function coordOf(tz) {
        return GEO[String(tz || "").toLowerCase()] || null;
    }

    // 取城市坐标：先按 IANA 时区查表；查不到（如 UTC+8 这种只有偏移的）再按显示名反查城市
    function coordOfZone(zone) {
        const byTz = coordOf(zone.tz);
        if (byTz) return byTz;
        const tz2 = CITY_ZONES[zoneKey(zone.name)];
        if (tz2 && coordOf(tz2)) return coordOf(tz2);
        return null;
    }

    function weatherOf(zone) {
        if (!weatherShow) return "";
        const w = weatherState[zone.tz];
        return (w && w.text) ? w.text : "";
    }

    // 拉取天气：每个时区一条请求，失败就保持空白，不打扰
    let weatherLastCheck = 0;
    const WEATHER_CHECK_GAP = 30 * 1000; // 每 30 秒才检查一次，不必每秒遍历时区
    function refreshWeather(force) {
        if (!weatherShow || typeof fetch !== "function" || !document.body) return;
        if (document.hidden) return;
        const now = Date.now();
        if (!force && weatherLastCheck && (now - weatherLastCheck) < WEATHER_CHECK_GAP) return;
        weatherLastCheck = now;
        getZones().forEach(function (zone) {
            const st = weatherState[zone.tz] || (weatherState[zone.tz] = {});
            if (st.pending) return;
            if (st.ts && (now - st.ts) < WEATHER_TTL) return;
            const coord = coordOfZone(zone);
            if (!coord) return; // 完全查不到城市的时区，不取天气
            st.pending = true;
            const url = "https://api.open-meteo.com/v1/forecast?latitude=" + coord[0] +
                "&longitude=" + coord[1] + "&current=temperature_2m,weather_code&timezone=auto";
            fetch(url, { credentials: "omit" })
                .then(function (r) { return r.json(); })
                .then(function (j) {
                    const c = j && j.current;
                    if (c && typeof c.temperature_2m === "number") {
                        st.text = (WCODE[c.weather_code] || "天气") + " " + Math.round(c.temperature_2m) + "°";
                    }
                    st.ts = Date.now();
                })
                .catch(function () {
                    st.ts = Date.now(); // 失败也记时间，避免每秒重试
                })
                .then(function () { st.pending = false; });
        });
    }

    function zoneParts(zone, date) {
        const o = {};
        const parts = zone.fmt.formatToParts(date);
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].type !== "literal") o[parts[i].type] = parts[i].value;
        }
        return o;
    }

    // 多时区时间文本：每一行都是「名称 年-月-日 周几 时:分:秒 天气」
    // 单行文本由 zoneLineText 统一生成，视频标签 / 网页时钟 / 底部条共用同一套格式
    function formatClock(date) {
        return getZones().map(function (zone) { return zoneLineText(zone, date); }).join("\n");
    }

    // ---- 网页悬浮时钟（没有视频时也能看时间）----
    let pageClock = null;
    function getPageClock() {
        if (pageClock && document.contains(pageClock)) return pageClock;
        if (!document.body) return null;
        pageClock = document.createElement("div");
        pageClock.id = "vt-page-clock";
        pageClock.style.cssText = [
            "position: fixed",
            "z-index: 2147483000",
            "pointer-events: none",
            "padding: 4px 10px",
            "border-radius: 4px",
            "line-height: 1.2em",
            "letter-spacing: 0.5px",
            "user-select: none",
            "white-space: pre"
        ].join(";") + ";";
        document.body.appendChild(pageClock);
        return pageClock;
    }

    function updatePageClock(text, videoVisible) {
        if (!document.body) return;
        // 关闭该功能、视频上已有时间条、处于全屏、用户已手动隐藏时间条、或设置窗口打开时，都不显示网页时钟
        if (!webClock || videoVisible || isFullscreen() || hideTimeBar || document.getElementById("vt-setting-shadow")) {
            if (pageClock) pageClock.style.display = "none";
            return;
        }
        const clock = getPageClock();
        if (!clock) return;
        if (clock.textContent !== text) clock.textContent = text;
        if (clock.style.display !== "block") clock.style.display = "block";
        const sig = [fontColor, bgColor, barOpacity, fontStyle, fontCustom, onlineFont ? 1 : 0,
            showStroke ? 1 : 0, strokeColor, pos, fontSize_small].join("|");
        if (clock.__vtSig === sig) return;
        clock.__vtSig = sig;
        clock.style.fontSize = Math.min(fontSize_small, IS_MOBILE ? 18 : 26) + "px";
        // 窄屏上长文本（含农历/天气）会顶到屏幕外，限制宽度并允许换行
        clock.style.maxWidth = IS_MOBILE ? "calc(100vw - 24px)" : "80vw";
        clock.style.whiteSpace = IS_MOBILE ? "normal" : "pre";
        clock.style.boxSizing = "border-box";
        clock.style.color = fontColor;
        clock.style.opacity = barOpacity;
        clock.style.fontFamily = fontStack(fontStyle);
        clock.style.textShadow = showStroke ? buildGlow(strokeColor) : "none";
        // 网页上底色亮的情况很常见，给一层淡黑底保证可读（自己在设置里改过背景色则用你的）
        clock.style.backgroundColor = parseColor(bgColor).a > 0 ? bgColor : "rgba(0,0,0,0.65)";
        clock.style.top = IS_MOBILE ? "calc(10px + " + SAFE_TOP + ")" : "12px";
        if (pos === 0) {
            clock.style.left = IS_MOBILE ? "calc(12px + " + SAFE_LEFT + ")" : "16px";
            clock.style.right = "auto"; clock.style.transform = "none"; clock.style.textAlign = "left";
        } else if (pos === 1) {
            clock.style.left = "50%"; clock.style.right = "auto"; clock.style.transform = "translateX(-50%)"; clock.style.textAlign = "center";
        } else {
            clock.style.left = "auto";
            clock.style.right = IS_MOBILE ? "calc(12px + " + SAFE_RIGHT + ")" : "16px";
            clock.style.transform = "none"; clock.style.textAlign = "right";
        }
    }

    // ---- 页面底部多时区时间条 ----
    let bottomBarEl = null;
    function getBottomBarEl() {
        if (bottomBarEl && document.contains(bottomBarEl)) return bottomBarEl;
        if (!document.body) return null;
        bottomBarEl = document.createElement("div");
        bottomBarEl.id = "vt-bottom-zones";
        bottomBarEl.style.cssText = [
            "position: fixed",
            "left: 0",
            "right: 0",
            "bottom: 0",
            "z-index: 2147483000",
            "pointer-events: none",
            "box-sizing: border-box",
            IS_MOBILE ? "padding: 2px 10px calc(4px + " + SAFE_BOTTOM + ")" : "padding: 2px 14px 3px",
            "display: flex",
            "flex-wrap: wrap",
            "justify-content: center",
            "align-items: baseline",
            IS_MOBILE ? "column-gap: 8px" : "column-gap: 14px",
            "line-height: 1.3em",
            "letter-spacing: 0.5px",
            "user-select: none",
            "text-align: center"
        ].join(";") + ";";
        document.body.appendChild(bottomBarEl);
        return bottomBarEl;
    }

    // 底部条里一段 = 一个时区：「名称 年-月-日 周几 时:分:秒 天气」
    // 手机端与桌面端统一使用完整通用样式；可通过设置关闭日期/星期/农历/时区名称
    function zoneLineText(zone, date) {
        const o = zoneParts(zone, date);
        const clock = o.hour + ":" + o.minute + (showSecond ? ":" + o.second : "");
        const w = weatherShow ? weatherOf(zone) : "";
        const lu = (showLunar ? lunarOf(zone, date) : "");
        const namePart = hideZoneName ? "" : (zone.name || "");
        let parts = [];
        if (namePart) parts.push(namePart);
        if (showDate) parts.push(o.year + "-" + o.month + "-" + o.day);
        if (showWeekday) parts.push(o.weekday);
        if (lu) parts.push(lu);
        parts.push(clock);
        if (w) parts.push(w);
        return parts.join(" ").replace(/\s+/g, " ").trim();
    }

    function updateBottomBar(date) {
        if (!document.body) return;
        // 关闭功能、隐藏时间条、原生全屏、设置窗口打开时不显示
        // 注意：不因设置窗口打开而隐藏，否则编辑时区时看不到实时效果
        const hidden = !bottomBarOn || hideTimeBar || isFullscreen();
        if (hidden) {
            if (bottomBarEl) bottomBarEl.style.display = "none";
            return;
        }
        const bar = getBottomBarEl();
        if (!bar) return;
        const zones = getZones();
        while (bar.childNodes.length > zones.length) bar.removeChild(bar.lastChild);
        zones.forEach((zone, i) => {
            let span = bar.childNodes[i];
            if (!span) {
                span = document.createElement("span");
                bar.appendChild(span);
            }
            const text = zoneLineText(zone, date);
            if (span.textContent !== text) span.textContent = text;
        });
        if (bar.style.display !== "flex") bar.style.display = "flex";
        const sig = [fontColor, bgColor, barOpacity, fontStyle, fontCustom, onlineFont ? 1 : 0,
            showStroke ? 1 : 0, strokeColor, fontSize_small].join("|");
        if (bar.__vtSig === sig) return;
        bar.__vtSig = sig;
        bar.style.fontSize = Math.min(fontSize_small, IS_MOBILE ? 15 : 20) + "px";
        bar.style.fontFamily = fontStack(fontStyle);
        bar.style.color = fontColor;
        bar.style.opacity = barOpacity;
        if (showStroke) {
            bar.style.textShadow = buildGlow(strokeColor);
            bar.style.backgroundColor = "rgba(0,0,0,0.55)";
        } else {
            bar.style.textShadow = "none";
            bar.style.backgroundColor = parseColor(bgColor).a > 0 ? bgColor : "rgba(0,0,0,0.55)";
        }
    }

    // 设置计时器
    var vtTick = null;
    function setTimer(){
        function tick(){
            if (!document.hidden) {
                var text = formatClock(new Date());
                var anyVisible = false;
                var videoList = document.getElementsByTagName('video');
                for (var i = 0; i < videoList.length; i++) {
                    var video = videoList[i];
                    var timeBar = ensureTimer(video);
                    if (!timeBar) continue;
                    if (timeBar.textContent !== text) {
                        timeBar.textContent = text;
                    }
                    changeTag(video);
                    if (timeBar.style.display !== "none") anyVisible = true;
                }
                updatePageClock(text, anyVisible);
                updateBottomBar(new Date());
                refreshWeather();
            }
            // 对齐到下一个整秒再跑：setInterval(1000) 会累积漂移，秒数会偶发跳一下
            vtTick = setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
        }
        tick();
    }

    // 切回前台时立刻补一次，别停留在切走前的旧秒数
    document.addEventListener("visibilitychange", function () {
        if (document.hidden || vtTick === null) return;
        // 不打断原有定时器，只补一次立即刷新
        var text = formatClock(new Date());
        var videoList = document.getElementsByTagName('video');
        for (var i = 0; i < videoList.length; i++) {
            var video = videoList[i];
            if (!video.__vtTimer) continue;
            video.__vtTimer.textContent = text;
            changeTag(video);
        }
        updateBottomBar(new Date());
    });

    // 窗口尺寸/全屏状态变化时，重新计算位置和字号
    function refreshAll(){
        var videoList = document.getElementsByTagName('video');
        for (var i = 0; i < videoList.length; i++) {
            changeTag(videoList[i]);
        }
    }
    window.addEventListener("resize", refreshAll);
    document.addEventListener("fullscreenchange", refreshAll);
    document.addEventListener("webkitfullscreenchange", refreshAll);
    document.addEventListener("mozfullscreenchange", refreshAll);
    document.addEventListener("MSFullscreenChange", refreshAll);

    // 启动计时器
    setTimer();

    // 移动设置窗口
    // 拖动面板：Pointer Events 同时覆盖鼠标 / 触屏，配合 title 上的 touch-action:none，
    // 手机上拖标题栏不会带着页面一起滚；位置会被限制在可视区内，不会拖出屏幕找不回来
    function dragElement(elmnt) {
        var dragging = false, pointerId = null;
        var startX = 0, startY = 0, origLeft = 0, origTop = 0;
        var titleBar = elmnt.querySelector("#vts-title");
        var handle = titleBar || elmnt;
        // 防止子元素（关闭按钮）上的拖动被当成标题拖动
        if (titleBar) {
            Array.from(titleBar.children).forEach(function (child) {
                child.addEventListener("pointerdown", function (e) { e.stopPropagation(); });
            });
        }

        handle.addEventListener("pointerdown", onDown);
        handle.addEventListener("pointermove", onMove);
        handle.addEventListener("pointerup", onUp);
        handle.addEventListener("pointercancel", onUp);

        function onDown(e) {
            if (e.target && e.target.id === "vts-close-btn") return;
            if (e.button !== undefined && e.button > 0) return;
            var rect = elmnt.getBoundingClientRect();
            // 先把 calc() 定位固化成 px，拖动时才有稳定的基准
            elmnt.style.left = rect.left + "px";
            elmnt.style.top = rect.top + "px";
            elmnt.style.right = "auto";
            origLeft = rect.left;
            origTop = rect.top;
            startX = e.clientX;
            startY = e.clientY;
            dragging = true;
            pointerId = e.pointerId;
            try { handle.setPointerCapture(e.pointerId); } catch (err) {}
            e.preventDefault();
        }

        function onMove(e) {
            if (!dragging || e.pointerId !== pointerId) return;
            e.preventDefault();
            var w = window.innerWidth, h = window.innerHeight;
            var pw = elmnt.offsetWidth, ph = elmnt.offsetHeight;
            // 至少留 60px 在屏内，避免拖丢
            var left = Math.min(Math.max(origLeft + (e.clientX - startX), 60 - pw), w - 60);
            var top = Math.min(Math.max(origTop + (e.clientY - startY), 0), Math.max(0, h - 40));
            elmnt.style.left = left + "px";
            elmnt.style.top = top + "px";
        }

        function onUp(e) {
            if (!dragging) return;
            dragging = false;
            try { handle.releasePointerCapture(pointerId); } catch (err) {}
            pointerId = null;
        }
    }

    function CreateStyleElement(id, cssText, isUpdate){
        var styleElement = document.getElementById(id);
        if (!styleElement) {
            // 创建一个新的 <style> 元素
            styleElement = document.createElement("style");
            styleElement.id = id;

            // 创建包含 CSS 规则的文本
            // var cssText = ".highlight { background-color: yellow; }"
            var cssTextNode = document.createTextNode(cssText);

            // 将文本添加到 <style> 元素中
            styleElement.appendChild(cssTextNode);

            // 将 <style> 元素添加到网页的 <head> 元素中
            document.head.appendChild(styleElement);
        } else {
            if (isUpdate) {
                styleElement.innerText = cssText;
            }
        }
    }

    function isColor(strColor) {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }
})();
//（注：内容由AI生成）
