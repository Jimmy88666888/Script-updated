# Edge 用户脚本自更新仓库

汇总本机 Edge（Tampermonkey）中在用的用户脚本，共 **13 个**，全部为从浏览器中提取的当前安装版本。仓库承担两件事：

1. 为**原本没有更新通道**的本地脚本提供 `@updateURL` / `@downloadURL`，让 Tampermonkey 能从这个仓库自动检查并安装新版本。
2. 为**上游托管**的脚本提供镜像存档，并由 GitHub Actions 每日对比上游 `@version`，有更新时自动提交，保持仓库始终是最新可安装版本。

## 安装 / 更新

在 Tampermonkey 中打开下面任一 `raw` 链接即可安装；已安装的脚本由 Tampermonkey 按 `@version` 自动提示更新。

- 安装入口：`https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/<文件名>`
- 全部脚本的机器可读清单：[`updates.json`](updates.json)

## 脚本清单

| 脚本 | 版本 | 更新通道 | 原始来源 |
| --- | --- | --- | --- |
| [AC-baidu 重定向优化](scripts/ac-baidu-search.user.js) | 27.20 | 上游（GreasyFork） | update.greasyfork.org/scripts/14178 |
| [AdGuard Extra](scripts/adguard-extra.user.js) | 1.1.41 | 上游（AdGuard） | userscripts.adtidy.org/release/adguard-extra |
| [GitHub 中文化插件](scripts/github-chinese.user.js) | 1.9.2.4-2026-11-10 | 上游（GreasyFork） | update.greasyfork.org/scripts/435208 |
| [GitHub 增强 - 高速下载](scripts/github-fast-download.user.js) | 2.6.41 | 上游（GreasyFork） | update.greasyfork.org/scripts/412245 |
| [Google & baidu Switcher](scripts/google-baidu-switcher.user.js) | 2026.11.07.1 | 上游（GreasyFork） | update.greasyfork.org/scripts/12909 |
| [HTML5 视频播放工具（增强合并版）](scripts/html5-video-player-merged.user.js) | 2.2.6-merged | 本仓库 | 本地维护 |
| [LinkSwift 网盘直链下载](scripts/linkswift.user.js) | 1.1.3 | 本仓库 | github.com/hmjz100/LinkSwift |
| [Pagetual 自动翻页](scripts/pagetual.user.js) | 1.9.37.134 | 上游（GreasyFork） | update.greasyfork.org/scripts/438684 |
| [redirect 外链跳转](scripts/redirect-external-link.user.js) | 1.67.0 | 上游（GreasyFork） | update.greasyfork.org/scripts/416338 |
| [Telegram Media Downloader](scripts/telegram-media-downloader.user.js) | 2.01 | 上游（GreasyFork） | update.greasyfork.org/scripts/446342 |
| [Universal Post → Markdown](scripts/universal-post-to-markdown.user.js) | 2.9.4 | 本仓库 | 本地维护 |
| [视频全屏显示时间（全站通用增强版）](scripts/video-fullscreen-clock.user.js) | 0.6.10 | 本仓库 | 本地维护 |
| [视频剧集信息显示](scripts/video-episode-info.user.js) | 6.6 | 本仓库 | 本地维护 |

## 自更新机制

- **本仓库托管更新（5 个）**：脚本头部新增两行
  ```js
  // @updateURL    https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/<文件名>
  // @downloadURL  https://raw.githubusercontent.com/Jimmy88666888/edge-userscripts/main/scripts/<文件名>
  ```
  发布新版时只需改动脚本内的 `// @version`，Tampermonkey 下次检查即拉取；其余内容未改动。
- **上游托管（8 个）**：保留原作者自己的 `@updateURL`，不抢更新通道；仓库只做镜像，避免让这些脚本失去上游真实更新。
- **自动同步**：`.github/workflows/sync.yml` 每日 03:17（UTC）运行 `node tools/sync.mjs`，抓取上游 meta 比对 `@version`，发现新版就替换文件、更新 `updates.json` 并提交。也可在 Actions 页面手动 `workflow_dispatch`。

## 本地维护

```bash
node tools/sync.mjs          # 对比上游并更新文件
git diff                     # 检查变化
git commit -am "chore: sync upstream"
```

脚本需在可访问 `update.greasyfork.org` / `userscripts.adtidy.org` 的网络环境下同步（Node 18+ 自带 fetch）。

## 许可与版权

- 每个脚本的版权与许可归原作者所有，文件内的 `@author`、`@license`、`@copyright` 与原始头部均已原样保留；使用前请遵守对应许可（GPL-3.0、AGPL-3.0、MPL-2.0、MIT 等）。
- 本仓库自身的工具与文档（`tools/`、`README.md`、`.github/`）以 MIT 授权。
- 仓库仅作镜像与本地自更新用途，不代表对第三方脚本的再授权。