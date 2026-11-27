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
  LinkSwift-Mobile/LinkSwift-Mobile.user.js
  edge-dl-pc/edge-dl-pc.user.js
  edge-dl-pc/archive/1.0.0-pc.user.js
  edge-dl-mobile/edge-dl-mobile.user.js
  video-episode-info/…       universal-post-to-markdown/…
  html5-video-mobile/…       html5-video-player-merged/…
  video-fullscreen-clock/…
  视频竖排剧集名-全站通用版/…
Author/                    # 第三方脚本收录（10 个，多数为电脑版 + 手机版两份）
  pagetual/pagetual.user.js + pagetual-mobile.user.js
  …
docs/index.html            # GitHub Pages 安装页
tools/sync.mjs             # 上游同步器
tools/gen-docs.mjs         # 说明文件生成器（清单 / README 清单表 / 安装页卡片）
updates.json               # 机器可读清单（34 条：21 个脚本 × 电脑/手机）
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
- **头部更新地址**：每个 `.user.js` 里的 `@updateURL` / `@downloadURL` 由 `tools/gen-docs.mjs` 统一改写为该文件**当前路径**对应的地址（电脑版 jsDelivr、手机版 raw）。目录搬迁或改名后跑一次生成器即同步，不会残留旧路径。

## 脚本清单

### Local（11 个，自建与本地改写）

| 脚本 | 版本 | 安装 | 位置 |
| --- | --- | --- | --- |
| [CloudLink Desktop](Local/CloudLink-Desktop/CloudLink-Desktop.user.js) | 1.0.2 | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/CloudLink-Desktop/CloudLink-Desktop.user.js ) | `Local/CloudLink-Desktop/` |
| [CloudLink Mobile](Local/CloudLink-Mobile/CloudLink-Mobile.user.js) | 1.0.1 | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/CloudLink-Mobile/CloudLink-Mobile.user.js ) | `Local/CloudLink-Mobile/` |
| [EdgeDL 手机版](Local/edge-dl-mobile/edge-dl-mobile.user.js) | 2.3.3-local-float-toggle | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/edge-dl-mobile/edge-dl-mobile.user.js ) | `Local/edge-dl-mobile/` |
| [EdgeDL-PC（电脑版下载接管 + 媒体嗅探）](Local/edge-dl-pc/edge-dl-pc.user.js) | 1.1.0-pc | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/edge-dl-pc/edge-dl-pc.user.js ) | `Local/edge-dl-pc/` |
| [HTML5手机版](Local/html5-video-mobile/html5-video-mobile-mobile.user.js) | 72.09 | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/html5-video-mobile/html5-video-mobile-mobile.user.js ) | `Local/html5-video-mobile/` |
| [HTML5视频播放工具（增强合并版）](Local/html5-video-player-merged/html5-video-player-merged.user.js) | 2.2.7-merged | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/html5-video-player-merged/html5-video-player-merged.user.js ) | `Local/html5-video-player-merged/` |
| [LinkSwift 手机版](Local/LinkSwift-Mobile/LinkSwift-Mobile.user.js) | 1.1.3-mobile | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/LinkSwift-Mobile/LinkSwift-Mobile.user.js ) | `Local/LinkSwift-Mobile/` |
| [Markdown](Local/universal-post-to-markdown/universal-post-to-markdown.user.js) | 3.0.3 | [默认安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/universal-post-to-markdown/universal-post-to-markdown.user.js )（通用） | `Local/universal-post-to-markdown/` |
| [视频剧集信息显示](Local/video-episode-info/video-episode-info.user.js) | 6.6.1 | [默认安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/video-episode-info/video-episode-info.user.js )（通用） | `Local/video-episode-info/` |
| [视频全屏显示时间（全站通用增强版）](Local/video-fullscreen-clock/video-fullscreen-clock.user.js) | 0.6.11 | [默认安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/video-fullscreen-clock/video-fullscreen-clock.user.js )（通用） | `Local/video-fullscreen-clock/` |
| [视频播放页竖排剧集名 - 终极版](Local/%E8%A7%86%E9%A2%91%E7%AB%96%E6%8E%92%E5%89%A7%E9%9B%86%E5%90%8D-%E5%85%A8%E7%AB%99%E9%80%9A%E7%94%A8%E7%89%88/%E8%A7%86%E9%A2%91%E7%AB%96%E6%8E%92%E5%89%A7%E9%9B%86%E5%90%8D-%E5%85%A8%E7%AB%99%E9%80%9A%E7%94%A8%E7%89%88.user.js) | 6.0 | [安装]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Local/视频竖排剧集名-全站通用版/视频竖排剧集名-全站通用版.user.js ) | `Local/视频竖排剧集名-全站通用版/` |

### Author（10 个，第三方收录）

| 脚本 | 版本 | 电脑端 | 手机端 | 原始来源 |
| --- | --- | --- | --- | --- |
| [AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列](Author/ac-baidu-search/ac-baidu-search.user.js) | 27.20 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/ac-baidu-search/ac-baidu-search.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/ac-baidu-search/ac-baidu-search-mobile.user.js ) | update.greasyfork.org/scripts/14178/AC-baidu-%E9%87%8D%E5%AE%9A%… |
| [AdGuard Extra](Author/adguard-extra/adguard-extra.user.js) | 1.1.41 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/adguard-extra/adguard-extra.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/adguard-extra/adguard-extra-mobile.user.js ) | userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.u… |
| [GitHub 中文化插件](Author/github-chinese/github-chinese.user.js) | 1.9.2.4-2026-11-10 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/github-chinese/github-chinese.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/github-chinese/github-chinese-mobile.user.js ) | update.greasyfork.org/scripts/435208/GitHub%20%E4%B8%AD%E6%96%87… |
| [Github Enhancement - High Speed Download](Author/github-fast-download/github-fast-download.user.js) | 2.6.41 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/github-fast-download/github-fast-download.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/github-fast-download/github-fast-download-mobile.user.js ) | update.greasyfork.org/scripts/412245/Github%20%E5%A2%9E%E5%BC%BA… |
| [Google & baidu Switcher (ALL in One)](Author/google-baidu-switcher/google-baidu-switcher.user.js) | 2026.11.07.1 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/google-baidu-switcher/google-baidu-switcher.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/google-baidu-switcher/google-baidu-switcher-mobile.user.js ) | update.greasyfork.org/scripts/12909/%E4%BC%98%E9%9B%85%E7%9A%84%… |
| [LinkSwift](Author/linkswift/linkswift.user.js) | 1.1.4 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/linkswift/linkswift.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/linkswift/linkswift-mobile.user.js ) | 第三方收录 |
| [Pagetual](Author/pagetual/pagetual.user.js) | 1.9.37.134 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/pagetual/pagetual.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/pagetual/pagetual-mobile.user.js ) | update.greasyfork.org/scripts/438684/Pagetual.user.js |
| [redirect 外链跳转](Author/redirect-external-link/redirect-external-link.user.js) | 1.67.1 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/redirect-external-link/redirect-external-link.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/redirect-external-link/redirect-external-link-mobile.user.js ) | update.greasyfork.org/scripts/416338/redirect%20%E5%A4%96%E9%93%… |
| [Telegram Media Downloader](Author/telegram-media-downloader/telegram-media-downloader.user.js) | 2.01 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/telegram-media-downloader/telegram-media-downloader.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/telegram-media-downloader/telegram-media-downloader-mobile.user.js ) | update.greasyfork.org/scripts/446342/Telegram%20Media%20Download… |
| [全网VIP视频免费破解去广告【最新3.2】](Author/vip-video-unlock/vip-video-unlock.user.js) | 3.2.10 | [电脑端]( https://cdn.jsdelivr.net/gh/Jimmy88666888/Script-updated@main/Author/vip-video-unlock/vip-video-unlock.user.js ) | [手机端]( https://raw.githubusercontent.com/Jimmy88666888/Script-updated/main/Author/vip-video-unlock/vip-video-unlock-mobile.user.js ) | update.greasyfork.org/scripts/537189/%E5%85%A8%E7%BD%91VIP%E8%A7… |

## 自更新机制

- **更新通道是本仓库**：所有脚本的 `@updateURL` / `@downloadURL` 都指向上面的路径，装一次之后即可自动检查更新。
- **上游脚本**：`updates.json` 里保留各自上游地址作为数据来源，GitHub Actions 每日 03:17（UTC）比对上游 `@version`，命中新版就同步电脑版与手机版两份文件并重写更新地址。同步器只处理 `upstream` 非空的记录。
- **本地脚本**：`@namespace` 为 `local.*` 或没有上游地址的，只由本仓库驱动；发新版时改掉文件里的 `// @version` 并推送即可。
- **缓存**：jsDelivr 对 `@main` 引用约有 12 小时缓存，电脑端会略滞后；急用可把 `@main` 换成具体提交 SHA。

## 变更记录

### 2026-11-27 Markdown 升到 3.0.3

- 用新版脚本（3773 行 / 178 KB）替换原 3.0.2 后，把 `@version` 提升到 **3.0.3**，电脑版与手机版同步升号，让已装用户通过自动更新拿到这一版。
- 更新地址不变（通用脚本走 raw 默认），此前装的是 3.0.2 的副本，下一次检查更新时会自动拉取，无需重装。

### 2026-11-27 精简平台入口：EdgeDL 转手机版、HTML5 拆分单平台、三个脚本改通用

- `edge-dl` 更名为 `edge-dl-mobile`、显示名「EdgeDL 手机版」，并删除电脑版文件 `edge-dl.user.js`；目录更名会改变安装与更新地址，已装旧版需按新链接重装一次。
- HTML5 手机版只保留手机版文件（删除电脑版 `html5-video-mobile.user.js`）；HTML5 视频播放工具（增强合并版）只保留电脑版文件（删除手机版 `-mobile.user.js`）。两者的安装列由「电脑端 · 手机端」变成单一「安装」。
- Markdown、视频剧集信息显示、视频全屏显示时间三份脚本的电脑版与手机版内容完全一致，改标「通用」：安装页只给一个「默认安装」按钮（指向电脑版 jsDelivr 链接，手机同样可装），README 安装列写作「默认安装（通用）」。生成器新增 `universal` 字段支持，`gen-docs.mjs --check` 可校验。
- 清单由 37 条减至 34 条，脚本仍 21 个；安装页卡片数不变，README 目录结构的示例路径同步更正。

### 2026-11-27 修正脚本头部更新地址

- 三个脚本从 `Author/` 迁到 `Local/` 时只移动了目录，文件里的 `@updateURL` / `@downloadURL` 仍指向 `Author/...` 旧路径，装上新版后自动更新会打到 404。本次把 11 个文件的头部地址统一改写为当前路径：电脑版走 jsDelivr、手机版走 raw。
- 另外 5 个单平台本地脚本（CloudLink Desktop、CloudLink Mobile、LinkSwift 手机版、EdgeDL-PC、视频竖排剧集名）的**电脑版**头部地址此前写成 raw，一并改为 jsDelivr 镜像，与其他电脑版保持一致。
- 该改写已并入 `tools/gen-docs.mjs`：生成器现在同时校验并修正头部地址（`--check` 会把它算作不同步），此后目录搬迁、改名、收件箱新脚本都不会再出现地址滞后。

### 2026-11-27 说明文件改为自动生成

- 新增 `tools/gen-docs.mjs`：以「目录 + 脚本头部元数据 + `updates.json` 里的人工说明」为唯一数据源，幂等重建 `updates.json`、README 的两张清单表与 `docs/index.html` 的卡片和全部计数。排序固定为 Local 在前、组内按目录名升序，同一脚本电脑版在前，连跑多次不产生 diff。
- 新脚本丢进 `Local/<脚本名>/` 或 `Author/<脚本名>/` 后跑一次生成器就自动出现在清单和安装页上，不再需要手改三处；人工写好的 `name` / `author` / `description` / `upstream` 会被保留，`--check` 可用于 CI 与提交前校验。
- 接入两处自动化：`auto-push.ps1` 在摄取收件箱、归档旧版之后、`git add` 之前调用（找不到 node 或生成失败只记日志、不阻断提交）；`.github/workflows/sync.yml` 在上游同步之后加一步生成，随当天提交一起推送。
- 顺带归一化说明：补上此前只在安装页出现、清单里缺失的 5 个脚本记录（CloudLink Desktop / CloudLink Mobile / LinkSwift 手机版 / EdgeDL-PC / 视频竖排剧集名），`updates.json` 由 32 条增至 37 条、覆盖 21 个脚本；Markdown 的说明合并为「X/Threads/… + 微博/小红书/CSDN/知乎 导出 MD + 图片/视频（每条旁悬浮按钮）；FB 视频帖 MD 强化（Edge 安卓）」，清单与页面共用同一份。

### 2026-11-27 HTML5 与视频全屏脚本迁入 Local

- 三个脚本（`html5-video-mobile`、`html5-video-player-merged`、`video-fullscreen-clock`）的 `@namespace` 早已是 `local.*` 本地身份，这次把目录整体从 `Author/` 移到 `Local/`，目录名与文件名不变：Local 由 8 个增至 11 个，Author 由 13 个减至 10 个。
- `updates.json` 六条记录（三脚本 × 电脑/手机）的 `file` / `group` / `raw` / `update_url` 一并改到 `Local/`；`docs/index.html` 安装页与 README 清单同步换组。
- **新增文件落位规则**写入 `auto-push.ps1`：新增脚本先找同名目录，命中就放进去；文件名带版本号（如 `link1.0`、`link1.1`）按主干名归入 `link/`；没有可用目录就自动新建同名目录再放入。
- 因更新地址变化，这三份脚本需按新链接重装一次，之后恢复自动更新。

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
node tools/gen-docs.mjs         # 重建 updates.json / README 清单表 / 安装页卡片
node tools/gen-docs.mjs --check # 只校验三者是否与目录现状同步（不同步时退出码 1）
git diff
git commit -am "chore: sync upstream"
```

同步需能访问 `update.greasyfork.org` / `userscripts.adtidy.org`（Node 18+ 自带 fetch）。

**说明文件生成器**（`tools/gen-docs.mjs`）：把脚本丢进 `Local/<脚本名>/` 或 `Author/<脚本名>/` 后跑一次，`updates.json` 会自动补记录（平台、路径、版本、更新地址），README 的两张清单表、安装页卡片与各处计数一起重建，省掉手改三处。清单里已有的 `name` / `author` / `description` / `upstream` 视为人工整理结果会被保留——要改文案直接改 `updates.json` 再跑生成器即可；`auto-push.ps1` 每次提交前、CI 每日同步后都会自动执行一次。

## 许可与版权

- 本仓库自身的工具、文档与安装页（`tools/`、`docs/`、`README.md`、`.github/`、`LICENSE`）以 **MIT** 授权。
- 每个脚本的版权与许可**归原作者所有**，文件内的 `@author`、`@license`、`@copyright` 与原始头部均原样保留；`Local/`、`Author/` 内的第三方脚本不在本仓库 MIT 授权范围内。
