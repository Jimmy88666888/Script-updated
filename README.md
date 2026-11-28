# Edge 用户脚本自更新仓库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Install page](https://img.shields.io/badge/install-page-2ea44f)](https://jimmy88666888.github.io/Script-updated/)

共 **21** 个用户脚本，顶层按作者归属分两层：`Local/` 收自建与本地改写，`Author/` 收第三方脚本。
每个脚本一个**同名子目录**，目录内放电脑版 `<脚本名>.user.js` 与手机版 `<脚本名>-mobile.user.js`（该脚本没有手机版时就只放一份）。

## 快速安装

**方式一：在线安装页（推荐分享给他人）** → <https://jimmy88666888.github.io/Script-updated/>

按 Local / Author 分组列出全部脚本，每张卡片按可用平台给「电脑端安装」「手机端安装」按钮。

**方式二：直接用安装链接**，Tampermonkey 会自动弹出安装页。

**方式三：从文件导入** —— 进入 `Local/<脚本名>/` 或 `Author/<脚本名>/`，点 `.user.js` → 右上 **Raw** → 另存为 `.user.js`，再到 Tampermonkey 管理面板「实用工具 → 从文件导入」。

## 目录结构

```
Local/                     # 自建与本地改写
  CloudLink-Desktop/CloudLink-Desktop.user.js
  CloudLink-Mobile/CloudLink-Mobile.user.js
  LinkSwift-Mobile/LinkSwift.user.js
  edge-dl-pc/edge-dl-pc.user.js
  edge-dl-pc/archive/1.0.0-pc.user.js
  edge-dl/edge-dl.user.js + edge-dl-mobile.user.js
  video-episode-info/…       universal-post-to-markdown/…
  视频竖排剧集名-全站通用版/…
Author/                    # 第三方脚本收录（10 个，多数为电脑版 + 手机版两份）
  pagetual/pagetual.user.js + pagetual-mobile.user.js
  …
docs/index.html            # GitHub Pages 安装页
tools/sync.mjs             # 上游同步器
updates.json               # 机器可读清单（35 条：21 个脚本 × 电脑/手机）
.github/workflows/sync.yml # 每日上游同步（03:17 UTC）
auto-push.ps1              # 本地变动自动提交推送（含旧版归档与收件箱摄取）
LICENSE
```

## 命名与更新通道

- **目录名 = 脚本文件名主干**（如 `Author/pagetual/` 放 `pagetual.user.js`）。
- **电脑版**走 jsDelivr 镜像：
  `https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/<Local|Author>/<脚本名>/<脚本名>.user.js`
- **手机版**走 raw 默认：
  `https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/<Local|Author>/<脚本名>/<脚本名>-mobile.user.js`
- **旧版本归档**统一放脚本目录下的 `archive/<版本号>.user.js`。

## 脚本清单

### Local（11 个，自建与本地改写）

| 脚本 | 版本 | 安装 | 位置 |
| --- | --- | --- | --- |
| [CloudLink Desktop](Local/CloudLink-Desktop/CloudLink-Desktop.user.js) | 1.0.3 | [安装]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/CloudLink-Desktop/CloudLink-Desktop.user.js ) | `Local/CloudLink-Desktop/` |
| [CloudLink Mobile](Local/CloudLink-Mobile/CloudLink-Mobile.user.js) | 1.0.2 | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/CloudLink-Mobile/CloudLink-Mobile.user.js ) | `Local/CloudLink-Mobile/` |
| [EdgeDL 手机版](Local/edge-dl-mobile/edge-dl-mobile.user.js) | 2.3.4-local-float-toggle | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/edge-dl-mobile/edge-dl-mobile.user.js ) | `Local/edge-dl-mobile/` |
| [EdgeDL-PC（电脑版下载接管 + 媒体嗅探）](Local/edge-dl-pc/edge-dl-pc.user.js) | 1.1.1-pc | [安装]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/edge-dl-pc/edge-dl-pc.user.js ) | `Local/edge-dl-pc/` |
| [HTML5手机版](Local/html5-video-mobile/html5-video-mobile-mobile.user.js) | 72.10 | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/html5-video-mobile/html5-video-mobile-mobile.user.js ) | `Local/html5-video-mobile/` |
| [HTML5视频播放工具（增强合并版）](Local/html5-video-player-merged/html5-video-player-merged.user.js) | 2.2.8-merged | [安装]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/html5-video-player-merged/html5-video-player-merged.user.js ) | `Local/html5-video-player-merged/` |
| [LinkSwift 手机版](Local/LinkSwift-Mobile/LinkSwift-Mobile.user.js) | 1.1.4-mobile | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/LinkSwift-Mobile/LinkSwift-Mobile.user.js ) | `Local/LinkSwift-Mobile/` |
| [Markdown](Local/universal-post-to-markdown/universal-post-to-markdown.user.js) | 3.0.5 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/universal-post-to-markdown/universal-post-to-markdown.user.js ) · [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/universal-post-to-markdown/universal-post-to-markdown-mobile.user.js ) | `Local/universal-post-to-markdown/` |
| [视频剧集信息显示](Local/video-episode-info/video-episode-info.user.js) | 6.7.5 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/video-episode-info/video-episode-info.user.js ) · [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/video-episode-info/video-episode-info-mobile.user.js ) | `Local/video-episode-info/` |
| [视频全屏显示时间（全站通用增强版）](Local/video-fullscreen-clock/video-fullscreen-clock.user.js) | 0.6.12 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/video-fullscreen-clock/video-fullscreen-clock.user.js ) · [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/video-fullscreen-clock/video-fullscreen-clock-mobile.user.js ) | `Local/video-fullscreen-clock/` |
| [视频播放页竖排剧集名 - 电脑版](Local/%E8%A7%86%E9%A2%91%E7%AB%96%E6%8E%92%E5%89%A7%E9%9B%86%E5%90%8D-%E5%85%A8%E7%AB%99%E9%80%9A%E7%94%A8%E7%89%88/%E8%A7%86%E9%A2%91%E7%AB%96%E6%8E%92%E5%89%A7%E9%9B%86%E5%90%8D-%E5%85%A8%E7%AB%99%E9%80%9A%E7%94%A8%E7%89%88.user.js) | 6.2 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Local/视频竖排剧集名-全站通用版/视频竖排剧集名-全站通用版.user.js ) · [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/视频竖排剧集名-全站通用版/视频竖排剧集名-全站通用版-mobile.user.js ) | `Local/视频竖排剧集名-全站通用版/` |

### Author（10 个，第三方收录）

| 脚本 | 版本 | 电脑端 | 手机端 | 原始来源 |
| --- | --- | --- | --- | --- |
| [AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列](Author/ac-baidu-search/ac-baidu-search.user.js) | 27.20 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/ac-baidu-search/ac-baidu-search.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/ac-baidu-search/ac-baidu-search-mobile.user.js ) | update.greasyfork.org/scripts/14178/AC-baidu-%E9%87%8D%E5%AE%9A%… |
| [AdGuard Extra](Author/adguard-extra/adguard-extra.user.js) | 1.1.41 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/adguard-extra/adguard-extra.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/adguard-extra/adguard-extra-mobile.user.js ) | userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.u… |
| [GitHub 中文化插件](Author/github-chinese/github-chinese.user.js) | 1.9.2.4-2026-11-10 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/github-chinese/github-chinese.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/github-chinese/github-chinese-mobile.user.js ) | update.greasyfork.org/scripts/435208/GitHub%20%E4%B8%AD%E6%96%87… |
| [Github Enhancement - High Speed Download](Author/github-fast-download/github-fast-download.user.js) | 2.6.41 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/github-fast-download/github-fast-download.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/github-fast-download/github-fast-download-mobile.user.js ) | update.greasyfork.org/scripts/412245/Github%20%E5%A2%9E%E5%BC%BA… |
| [Google & baidu Switcher (ALL in One)](Author/google-baidu-switcher/google-baidu-switcher.user.js) | 2026.11.07.1 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/google-baidu-switcher/google-baidu-switcher.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/google-baidu-switcher/google-baidu-switcher-mobile.user.js ) | update.greasyfork.org/scripts/12909/%E4%BC%98%E9%9B%85%E7%9A%84%… |
| [LinkSwift](Author/linkswift/linkswift.user.js) | 1.1.4 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/linkswift/linkswift.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/linkswift/linkswift-mobile.user.js ) | 第三方收录 |
| [Pagetual](Author/pagetual/pagetual.user.js) | 1.9.37.134 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/pagetual/pagetual.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/pagetual/pagetual-mobile.user.js ) | update.greasyfork.org/scripts/438684/Pagetual.user.js |
| [redirect 外链跳转](Author/redirect-external-link/redirect-external-link.user.js) | 1.67.1 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/redirect-external-link/redirect-external-link.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/redirect-external-link/redirect-external-link-mobile.user.js ) | update.greasyfork.org/scripts/416338/redirect%20%E5%A4%96%E9%93%… |
| [Telegram Media Downloader](Author/telegram-media-downloader/telegram-media-downloader.user.js) | 2.01 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/telegram-media-downloader/telegram-media-downloader.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/telegram-media-downloader/telegram-media-downloader-mobile.user.js ) | update.greasyfork.org/scripts/446342/Telegram%20Media%20Download… |
| [全网VIP视频免费破解去广告【最新3.2】](Author/vip-video-unlock/vip-video-unlock.user.js) | 3.2.10 | [电脑端]( https://fastly.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/vip-video-unlock/vip-video-unlock.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/vip-video-unlock/vip-video-unlock-mobile.user.js ) | update.greasyfork.org/scripts/537189/%E5%85%A8%E7%BD%91VIP%E8%A7… |

## 自更新机制

- **更新通道是本仓库**：所有脚本的 `@updateURL` / `@downloadURL` 都指向上面的路径，装一次之后即可自动检查更新。
- **上游脚本**：`updates.json` 里保留各自上游地址作为数据来源，GitHub Actions 每日 03:17（UTC）比对上游 `@version`，命中新版就同步电脑版与手机版两份文件并重写更新地址。同步器只处理 `upstream` 非空的记录。
- **本地脚本**：`@namespace` 为 `local.*` 或没有上游地址的，只由本仓库驱动；发新版时改掉文件里的 `// @version` 并推送即可。
- **缓存**：jsDelivr 对 `@main` 引用约有 12 小时缓存，电脑端会略滞后；急用可把 `@main` 换成具体提交 SHA。

## 变更记录

### 2026-11-26 目录重构为 Local / Author

- 顶层由 `edge-userscripts/` 下的 `pc/` + `mobile/` 平台分层，改为 `Local/` + `Author/` 作者分层；每个脚本一个同名子目录，电脑版与手机版同目录共存。
- 全部 21 个脚本的 `@updateURL` / `@downloadURL` 改到新路径；安装页、`updates.json`、`tools/sync.mjs`、CI 一并适配，同步器改为按 `rec.file`（仓库内相对路径）生成地址。
- 旧版归档位置统一为 `<脚本目录>/archive/<版本>.user.js`；`auto-push.ps1` 的归档、收件箱摄取、远端核验逻辑同步改为新落位规则（新脚本默认进 `Local/<脚本名>/`，已存在则原地替换）。
- 因路径变化，**已安装的脚本需按新链接重装一次**，之后恢复自动更新。

### 2026-11-25 电脑端 / 手机端拆分（其平台分层已被 2026-11-26 结构调整取代）

- 每个脚本拆成电脑端 / 手机端两份独立文件，电脑端走 jsDelivr、手机端走 raw；上游同步按两份分别重写更新地址。

### 2026-11-24 更新通道调整

- 6 个脚本改为本地身份（`@namespace` 统一为 `local.*`）：HTML5 增强合并版、HTML5 手机版、EdgeDL、视频全屏显示时间、视频剧集信息显示、Markdown。

### 2026-11-24 合并记录

- 从导出包并入：EdgeDL `2.3.3-local-float-toggle`、HTML5 手机版 `72.09`、全网VIP视频 `3.2.1`；Universal Post → Markdown 归档 `2.9.4`。

## 本地维护

```bash
node tools/sync.mjs --dry-run   # 只看上游有没有新版
node tools/sync.mjs             # 对比上游并更新电脑版 / 手机版两份
git diff
git commit -am "chore: sync upstream"
```

同步需能访问 `update.greasyfork.org` / `userscripts.adtidy.org`（Node 18+ 自带 fetch）。

## 许可与版权

- 本仓库自身的工具、文档与安装页（`tools/`、`docs/`、`README.md`、`.github/`、`LICENSE`）以 **MIT** 授权。
- 每个脚本的版权与许可**归原作者所有**，文件内的 `@author`、`@license`、`@copyright` 与原始头部均原样保留；`Local/`、`Author/` 内的第三方脚本不在本仓库 MIT 授权范围内。
