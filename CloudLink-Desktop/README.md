# CloudLink Desktop

国际网盘 **电脑端** 直链助手（油猴脚本）

## 支持网盘

- Google Drive
- OneDrive / SharePoint
- Dropbox

## 下载方式

| 按钮 | 作用 |
|------|------|
| 复制全部直链 | 纯 URL，一行一个 |
| **导出 IDM/MDM (.ef2)** | 生成 `cloudlink-idm.ef2`。IDM 与 **Mister Download Manager** 均可导入 |
| **复制给 MDM (Ctrl+B)** | 复制 URL 列表后，在 MDM 按 **Ctrl+B**（任务 → 从剪贴板批量添加下载） |
| **导出 MDM 文本** | 一行一个 URL（另含 Markdown / `<>` 格式），任务 → 导入 → 从文本文件 |
| **推送 Aria2** | JSON-RPC（默认 `http://127.0.0.1:6800/jsonrpc`） |
| 复制 aria2c / curl | 命令行 |

### Mister Download Manager 推荐用法

1. **带 Referer（推荐）**：点「导出 IDM/MDM (.ef2)」→ MDM 中 **任务 → 导入 → 从 IDM 导出文件**
2. **最快批量**：点「复制给 MDM」→ MDM 中 **Ctrl+B**
3. MDM 与 IDM 命令行开关兼容（`/d /p /f /a /n /s`）

## 安装

https://raw.githubusercontent.com/Jimmy88666888/CloudLink-Desktop/main/CloudLink-Desktop.user.js

## 相关

- 手机版：[CloudLink-Mobile](https://github.com/Jimmy88666888/CloudLink-Mobile)
- 国内网盘手机版：[LinkSwift-Mobile](https://github.com/Jimmy88666888/LinkSwift-Mobile)
- MDM 官网：https://misterdownloadmanager.com/
