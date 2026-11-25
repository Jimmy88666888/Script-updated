# Edge 用户脚本自更新仓库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Install page](https://img.shields.io/badge/install-page-2ea44f)](https://jimmy88666888.github.io/edge-userscripts/)

汇总本机 Edge（Tampermonkey）中在用的用户脚本，共 **16 个**，均为从浏览器导出或提取的实际安装版本。仓库承担两件事：

1. 为**原本没有更新通道**的本地脚本提供 `@updateURL` / `@downloadURL`，让 Tampermonkey 能从这个仓库自动检查并安装新版本。
2. 为**上游托管**的脚本提供镜像存档，并由 GitHub Actions 每日对比上游 `@version`，有更新时自动提交，保持仓库始终是最新可安装版本。

## 快速安装

**方式一：在线安装页（推荐分享给他人）** → <https://jimmy88666888.github.io/edge-userscripts/>

打开页面，逐个点「安装」即可，页面会按镜像/raw 通道给出正确地址。

**方式二：直接点下面表格里的「一键安装」列**，Tampermonkey 会自动弹出安装页。

**方式三：从文件导入** —— 打开 `scripts/` 目录，点进某个 `.user.js` → 右上 **Raw** → 另存为 `.user.js`，再到 Tampermonkey 管理面板「实用工具 → 从文件导入」。

- 仓库地址：https://github.com/Jimmy88666888/edge-userscripts
- 电脑端镜像基址（jsDelivr）：`https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/<文件名>`
- 手机端 raw 基址：`https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/<文件名>`
- 机器可读清单：[`updates.json`](updates.json)

## 脚本清单

| 脚本 | 版本 | 更新通道 | 安装 | 原始来源 |
| --- | --- | --- | --- | --- |
| [AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列](scripts/ac-baidu-search.user.js) | 27.20 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/ac-baidu-search.user.js) | update.greasyfork.org/scripts/14178/AC-baidu-%E9%87%8D%E5%AE%9A%E5%90%91%E4%BC%98%E5%8C%96%E7%99%BE%E5%BA%A6%E6%90%9C%E7%8B%97%E8%B0%B7%E6%AD%8C%E5%BF%85%E5%BA%94%E6%90%9C%E7%B4%A2_favicon_%E5%8F%8C%E5%88%97.meta.js |
| [AdGuard Extra](scripts/adguard-extra.user.js) | 1.1.41 | 上游（userscripts.adtidy.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/adguard-extra.user.js) | userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js |
| [EdgeDL](scripts/edge-dl.user.js) | 2.3.3-local-float-toggle | 本仓库·raw | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/edge-dl.user.js) | 本地维护 |
| [GitHub 中文化插件](scripts/github-chinese.user.js) | 1.9.2.4-2026-11-10 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/github-chinese.user.js) | update.greasyfork.org/scripts/435208/GitHub%20%E4%B8%AD%E6%96%87%E5%8C%96%E6%8F%92%E4%BB%B6.meta.js |
| [Github Enhancement - High Speed Download](scripts/github-fast-download.user.js) | 2.6.41 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/github-fast-download.user.js) | update.greasyfork.org/scripts/412245/Github%20%E5%A2%9E%E5%BC%BA%20-%20%E9%AB%98%E9%80%9F%E4%B8%8B%E8%BD%BD.meta.js |
| [Google & baidu Switcher (ALL in One)](scripts/google-baidu-switcher.user.js) | 2026.11.07.1 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/google-baidu-switcher.user.js) | update.greasyfork.org/scripts/12909/%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%8A%A9%E6%89%8B.meta.js |
| [HTML5手机版](scripts/html5-video-mobile.user.js) | 72.09 | 本仓库·raw | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/html5-video-mobile.user.js) | 本地维护 |
| [HTML5视频播放工具（增强合并版）](scripts/html5-video-player-merged.user.js) | 2.2.7-merged | 本仓库·镜像 | [一键安装](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/html5-video-player-merged.user.js) | 本地维护 |
| [LinkSwift](scripts/linkswift.user.js) | 1.1.4 | 本仓库·镜像 | [一键安装](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/linkswift.user.js) | 本地维护 |
| [Pagetual](scripts/pagetual.user.js) | 1.9.37.134 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/pagetual.user.js) | update.greasyfork.org/scripts/438684/Pagetual.meta.js |
| [redirect 外链跳转](scripts/redirect-external-link.user.js) | 1.67.0 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/redirect-external-link.user.js) | update.greasyfork.org/scripts/416338/redirect%20%E5%A4%96%E9%93%BE%E8%B7%B3%E8%BD%AC.meta.js |
| [Telegram Media Downloader](scripts/telegram-media-downloader.user.js) | 2.01 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/telegram-media-downloader.user.js) | update.greasyfork.org/scripts/446342/Telegram%20Media%20Downloader.meta.js |
| [Markdown](scripts/universal-post-to-markdown.user.js) | 2.9.6 | 本仓库·镜像 | [一键安装](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/universal-post-to-markdown.user.js) | 本地维护 |
| [视频剧集信息显示](scripts/video-episode-info.user.js) | 6.6.1 | 本仓库·镜像 | [一键安装](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/video-episode-info.user.js) | 本地维护 |
| [视频全屏显示时间（全站通用增强版）](scripts/video-fullscreen-clock.user.js) | 0.6.11 | 本仓库·镜像 | [一键安装](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/video-fullscreen-clock.user.js) | 本地维护 |
| [全网VIP视频免费破解去广告【最新3.2】](scripts/vip-video-unlock.user.js) | 3.2.1 | 上游（greasyfork.org） | [一键安装](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/vip-video-unlock.user.js) | update.greasyfork.org/scripts/537189/%E5%85%A8%E7%BD%91VIP%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A%E3%80%90%E6%9C%80%E6%96%B032%E3%80%91.meta.js |

## 自更新机制

- **电脑端脚本（5 个）走镜像**：`@updateURL` / `@downloadURL` 指向 jsDelivr
  ```js
  // @updateURL    https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/<文件名>
  // @downloadURL  https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/scripts/<文件名>
  ```
- **手机端脚本（2 个）保持默认 raw**：
  ```js
  // @updateURL    https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/<文件名>
  // @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/<文件名>
  ```
- 两类脚本发布新版时都只需改动脚本内的 `// @version`，Tampermonkey 下次检查即拉取；其余内容未改动。jsDelivr 对 `@main` 分支引用有缓存（约 12 小时），镜像更新会滞后于仓库。
- **上游托管（9 个）**：保留原作者自己的 `@updateURL`，不抢更新通道；仓库只做镜像，避免让这些脚本失去上游真实更新。
- **自动同步**：`.github/workflows/sync.yml` 每日 03:17（UTC）运行 `node tools/sync.mjs`，抓取上游 meta 比对 `@version`，发现新版就替换文件、更新 `updates.json` 并提交。也可在 Actions 页面手动 `workflow_dispatch`。
- **旧版本归档**：被替换的历史版本放在 `archive/<脚本名>/<版本>.user.js`，便于回滚。

## 2026-11-24 更新通道调整

- 5 个电脑端脚本各 +1 补丁版本，便于已安装副本收到新通道：`2.2.6-merged → 2.2.7-merged`、`1.1.3 → 1.1.4`、`2.9.5 → 2.9.6`、`6.6 → 6.6.1`、`0.6.10 → 0.6.11`。
- 电脑端 5 个脚本（HTML5 增强合并版 / LinkSwift / Markdown / 视频剧集信息显示 / 视频全屏显示时间）的 `@updateURL`、`@downloadURL` 改为 jsDelivr 镜像，避开 raw 域名在部分网络不可达的问题。
- 后加入的手机端 2 个脚本（EdgeDL / HTML5 手机版）保持 raw 默认通道，未改动。
- 电脑端 HTML5 增强合并版改为**本地脚本身份**：`@namespace` 由 `https://greasyfork.org/users/7036` 换成 `local.edge-userscripts/html5-video-player-merged`，与该脚本在作者侧的更新身份彻底断开；`@homepage` 保留作为来源说明。因 `@name + @namespace` 变化，Tampermonkey 会把它当成新脚本，需重新安装一次。

## 2026-11-24 合并记录

从 `tampermonkey_scripts.zip` 导出包并入：

- 新增 3 个：EdgeDL `2.3.3-local-float-toggle`、HTML5 手机版 `72.09`、全网VIP视频免费破解去广告 `3.2.1`。
- 升级 1 个：Universal Post → Markdown `2.9.4` → `Markdown 2.9.6`，旧版归档至 `archive/universal-post-to-markdown/2.9.4.user.js`。
- 3 个脚本在导出包中版本更旧，保留仓库现有版本：AdGuard Extra（1.1.41 > 1.1.38）、GitHub 中文化插件（2026-11-10 > 2026-10）、Google & baidu Switcher（2026.11.07.1 > 2026.10.03.1）。
- 其余 8 个脚本版本与内容一致，未改动。

## 本地维护

```bash
node tools/sync.mjs          # 对比上游并更新文件
git diff                     # 检查变化
git commit -am "chore: sync upstream"
```

脚本需在可访问 `update.greasyfork.org` / `userscripts.adtidy.org` 的网络环境下同步（Node 18+ 自带 fetch）。

## 许可与版权

- 本仓库自身的工具、文档与安装页（`tools/`、`docs/`、`README.md`、`.github/`、`LICENSE`）以 **MIT** 授权，详见 [LICENSE](LICENSE)。
- 每个脚本的版权与许可**归原作者所有**，文件内的 `@author`、`@license`、`@copyright` 与原始头部均已原样保留（GPL-3.0、AGPL-3.0、MPL-2.0、MIT 等）；使用前请遵守对应许可。
- 仓库仅作镜像与本地自更新用途，MIT 许可不覆盖 `scripts/`、`archive/` 内的第三方脚本，也不代表对第三方脚本的再授权。
