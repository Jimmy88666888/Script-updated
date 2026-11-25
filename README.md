# Edge 用户脚本自更新仓库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Install page](https://img.shields.io/badge/install-page-2ea44f)](https://jimmy88666888.github.io/edge-userscripts/)

16 个用户脚本，每个脚本拆成 **电脑端 / 手机端两份独立文件**：`pc/` 走 jsDelivr 镜像，`mobile/` 走 raw 默认，共 32 个脚本文件。两份互不影响，各自按本平台通道检查更新。

## 快速安装

**方式一：在线安装页（推荐分享给他人）** → <https://jimmy88666888.github.io/edge-userscripts/>

每张卡片都有「电脑端安装」和「手机端安装」两个按钮，按设备点对应那个即可。

**方式二：直接用下面的安装链接**，Tampermonkey 会自动弹出安装页。

**方式三：从文件导入** —— 打开 `pc/` 或 `mobile/` 目录，点进 `.user.js` → 右上 **Raw** → 另存为 `.user.js`，再到 Tampermonkey 管理面板「实用工具 → 从文件导入」。

- 仓库地址：https://github.com/Jimmy88666888/edge-userscripts
- 电脑端镜像基址：`https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/<文件名>`
- 手机端 raw 基址：`https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/<文件名>`
- 机器可读清单：[`updates.json`](updates.json)（32 条记录，含平台、通道、原始来源）

## 脚本清单

| 脚本 | 版本 | 类型 | 电脑端安装 | 手机端安装 | 原始来源 |
| --- | --- | --- | --- | --- | --- |
| [AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列](pc/ac-baidu-search.user.js) | 27.20 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/ac-baidu-search.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/ac-baidu-search.user.js) | update.greasyfork.org/scripts/14178/AC-baidu-%E9%87%8D%E5%AE%9A%E5%90%91%E4%BC%98%E5%8C%96%E7%99%BE%E5%BA%A6%E6%90%9C%E7%8B%97%E8%B0%B7%E6%AD%8C%E5%BF%85%E5%BA%94%E6%90%9C%E7%B4%A2_favicon_%E5%8F%8C%E5%88%97.meta.js |
| [AdGuard Extra](pc/adguard-extra.user.js) | 1.1.41 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/adguard-extra.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/adguard-extra.user.js) | userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js |
| [EdgeDL](pc/edge-dl.user.js) | 2.3.3-local-float-toggle | 本地·本地化 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/edge-dl.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/edge-dl.user.js) | 本地维护 |
| [Github Enhancement - High Speed Download](pc/github-fast-download.user.js) | 2.6.41 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/github-fast-download.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/github-fast-download.user.js) | update.greasyfork.org/scripts/412245/Github%20%E5%A2%9E%E5%BC%BA%20-%20%E9%AB%98%E9%80%9F%E4%B8%8B%E8%BD%BD.meta.js |
| [GitHub 中文化插件](pc/github-chinese.user.js) | 1.9.2.4-2026-11-10 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/github-chinese.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/github-chinese.user.js) | update.greasyfork.org/scripts/435208/GitHub%20%E4%B8%AD%E6%96%87%E5%8C%96%E6%8F%92%E4%BB%B6.meta.js |
| [Google & baidu Switcher (ALL in One)](pc/google-baidu-switcher.user.js) | 2026.11.07.1 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/google-baidu-switcher.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/google-baidu-switcher.user.js) | update.greasyfork.org/scripts/12909/%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%8A%A9%E6%89%8B.meta.js |
| [HTML5手机版](pc/html5-video-mobile.user.js) | 72.09 | 本地·本地化 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/html5-video-mobile.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/html5-video-mobile.user.js) | 本地维护 |
| [HTML5视频播放工具（增强合并版）](pc/html5-video-player-merged.user.js) | 2.2.7-merged | 本地·本地化 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/html5-video-player-merged.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/html5-video-player-merged.user.js) | 本地维护 |
| [LinkSwift](pc/linkswift.user.js) | 1.1.4 | 本地 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/linkswift.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/linkswift.user.js) | 本地维护 |
| [Markdown](pc/universal-post-to-markdown.user.js) | 2.9.6 | 本地·本地化 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/universal-post-to-markdown.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/universal-post-to-markdown.user.js) | 本地维护 |
| [Pagetual](pc/pagetual.user.js) | 1.9.37.134 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/pagetual.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/pagetual.user.js) | update.greasyfork.org/scripts/438684/Pagetual.meta.js |
| [redirect 外链跳转](pc/redirect-external-link.user.js) | 1.67.0 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/redirect-external-link.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/redirect-external-link.user.js) | update.greasyfork.org/scripts/416338/redirect%20%E5%A4%96%E9%93%BE%E8%B7%B3%E8%BD%AC.meta.js |
| [Telegram Media Downloader](pc/telegram-media-downloader.user.js) | 2.01 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/telegram-media-downloader.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/telegram-media-downloader.user.js) | update.greasyfork.org/scripts/446342/Telegram%20Media%20Downloader.meta.js |
| [全网VIP视频免费破解去广告【最新3.2】](pc/vip-video-unlock.user.js) | 3.2.1 | 上游镜像 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/vip-video-unlock.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/vip-video-unlock.user.js) | update.greasyfork.org/scripts/537189/%E5%85%A8%E7%BD%91VIP%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A%E3%80%90%E6%9C%80%E6%96%B032%E3%80%91.meta.js |
| [视频全屏显示时间（全站通用增强版）](pc/video-fullscreen-clock.user.js) | 0.6.11 | 本地·本地化 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/video-fullscreen-clock.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/video-fullscreen-clock.user.js) | 本地维护 |
| [视频剧集信息显示](pc/video-episode-info.user.js) | 6.6.1 | 本地·本地化 | [电脑端](https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/video-episode-info.user.js) | [手机端](https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/video-episode-info.user.js) | 本地维护 |

## 目录结构

```
pc/       # 电脑端副本（@updateURL/@downloadURL -> jsDelivr 镜像）
mobile/   # 手机端副本（@updateURL/@downloadURL -> raw 默认）
archive/  # 被替换的历史版本，便于回滚
docs/     # GitHub Pages 安装页
tools/    # sync.mjs 上游同步工具
```

## 自更新机制

- **两份副本，两套通道**：`pc/<文件名>.user.js` 的更新地址指向
  `https://cdn.jsdelivr.net/gh/Jimmy88666888/edge-userscripts@main/pc/<文件名>`；`mobile/<文件名>.user.js` 指向
  `https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/mobile/<文件名>`。同一脚本的两份内容一致，只有这两行元数据不同。
- **上游脚本（9 个）**：仓库保留各自上游地址作为数据来源，由 GitHub Actions 每日比对上游 `@version` 同步；但**更新通道已改为本仓库**，这样在没有 raw / greasyfork 直连的网络里也能检查更新。如果想让某个脚本恢复作者直连，把它在 `pc/`、`mobile/` 两份里的 `@updateURL`/`@downloadURL` 改回原作者地址即可。
- **本地脚本（7 个，其中 6 个已本地化）**：`@namespace` 为 `local.edge-userscripts/<文件名>` 的只由本仓库驱动；发新版时把两份文件里的 `// @version` 一起改掉并推送。
- **自动同步**：`.github/workflows/sync.yml` 每日 03:17（UTC）运行 `node tools/sync.mjs`，一次更新某脚本的 pc 与 mobile 两份文件。
- **缓存**：jsDelivr 对 `@main` 分支引用有约 12 小时缓存，电脑端会略滞后；急用可把 `@main` 换成具体提交 SHA。

## 2026-11-25 电脑端 / 手机端拆分

- 16 个脚本全部拆成 `pc/` 与 `mobile/` 两份独立文件，共 32 个；原来集中在 `scripts/` 的单份文件已移除。
- `pc/` 副本的 `@updateURL`、`@downloadURL` 改为 jsDelivr 镜像；`mobile/` 副本保持 raw 默认。
- 9 个上游脚本的更新通道一并改为本仓库（上游地址保留在 `updates.json` 与 README 表格里），由 Actions 每日同步上游版本，避免镜像与上游脱节。
- 因文件路径变化，已安装的旧脚本需按新链接重装一次（旧路径的更新地址不再存在）。

## 2026-11-24 更新通道调整

- 5 个电脑端脚本各 +1 补丁版本：`2.2.6-merged → 2.2.7-merged`、`1.1.3 → 1.1.4`、`2.9.5 → 2.9.6`、`6.6 → 6.6.1`、`0.6.10 → 0.6.11`。
- 6 个脚本改为本地身份（`@namespace` 统一为 `local.edge-userscripts/<文件名>`）：HTML5 增强合并版、HTML5 手机版、EdgeDL、视频全屏显示时间、视频剧集信息显示、Markdown。
- 因 `@name + @namespace` 变化，这些脚本需删除旧副本后重装。

## 2026-11-24 合并记录

从 `tampermonkey_scripts.zip` 导出包并入：

- 新增 3 个：EdgeDL `2.3.3-local-float-toggle`、HTML5 手机版 `72.09`、全网VIP视频免费破解去广告 `3.2.1`。
- 升级 1 个：Universal Post → Markdown `2.9.4` → `Markdown 2.9.6`，旧版归档至 `archive/universal-post-to-markdown/2.9.4.user.js`。
- 3 个脚本在导出包中版本更旧，保留仓库现有版本：AdGuard Extra（1.1.41 > 1.1.38）、GitHub 中文化插件（2026-11-10 > 2026-10）、Google & baidu Switcher（2026.11.07.1 > 2026.10.03.1）。

## 本地维护

```bash
node tools/sync.mjs          # 对比上游并更新 pc/、mobile/ 两份文件
git diff                     # 检查变化
git commit -am "chore: sync upstream"
```

脚本需在可访问 `update.greasyfork.org` / `userscripts.adtidy.org` 的网络环境下同步（Node 18+ 自带 fetch）。

## 许可与版权

- 本仓库自身的工具、文档与安装页（`tools/`、`docs/`、`README.md`、`.github/`、`LICENSE`）以 **MIT** 授权，详见 [LICENSE](LICENSE)。
- 每个脚本的版权与许可**归原作者所有**，文件内的 `@author`、`@license`、`@copyright` 与原始头部均已原样保留；使用前请遵守对应许可。
- 仓库仅作镜像与本地自更新用途，MIT 许可不覆盖 `pc/`、`mobile/`、`archive/` 内的第三方脚本。
