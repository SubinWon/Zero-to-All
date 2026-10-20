# 本地第三方依赖

## anime.js

- 包名：`animejs`
- 版本：**4.5.0**
- 文件：`anime.umd.min.js`
- 原始路径：`dist/bundles/anime.umd.min.js`
- 下载地址：<https://unpkg.com/animejs@4.5.0/dist/bundles/anime.umd.min.js>
- 许可证：MIT（版权声明保留在文件头部）
- 下载日期：2026-10-20

该文件是 UMD 构建，在浏览器里会把导出挂到 `window.anime`，所以 `cards.js` /
`score.js` 里可以直接用 `anime.animate`、`anime.stagger`，效果与原来的 IIFE 版一致。

> 注：anime.js 从 **4.2.0** 起调整了包内目录结构，旧的
> `animejs@4/lib/anime.iife.min.js` 路径已经不存在（`@4` 现在解析到 4.5.0）。
> 这里固定使用 4.5.0 的 UMD 构建，避免 CDN 路径变化导致页面脚本 404。
