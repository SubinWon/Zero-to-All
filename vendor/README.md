# 本地第三方依赖

## anime.js

- 包名：`animejs`
- 版本：**4.5.0**
- 许可证：MIT（版权声明保留在文件头部）
- 下载日期：2026-10-20 / 2026-10-21

| 文件 | 构建 | 用法 |
|---|---|---|
| `anime.esm.min.js` | ESM（118 KB） | `import { animate, stagger } from "../vendor/anime.esm.min.js"` |
| `anime.umd.min.js` | UMD（118 KB） | 传统 `<script src>` 加载，挂到 `window.anime` |

原始路径均为 `dist/bundles/`，下载自：

- <https://unpkg.com/animejs@4.5.0/dist/bundles/anime.esm.min.js>
- <https://unpkg.com/animejs@4.5.0/dist/bundles/anime.umd.min.js>

当前项目已经模块化，`js/cards.js` 和 `js/score.js` 使用的是 **ESM 版本**；
`anime.umd.min.js` 保留给"传统 script 标签"的对照实验用。

> ⚠️ 不要把 UMD 文件当 ES 模块 import：它没有 `export` 语句，
> `import { animate } from "./anime.umd.min.js"` 会报
> `does not provide an export named 'animate'`。反过来，ESM 文件也不能用普通
> `<script src>` 直接加载。

> 注：anime.js 从 **4.2.0** 起调整了包内目录结构，旧的
> `animejs@4/lib/anime.iife.min.js` 路径已经不存在（`@4` 现在解析到 4.5.0）。
> 这里固定使用 4.5.0 的构建，避免 CDN 路径变化导致脚本 404。
