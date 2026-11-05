# Zero to Tech

个人站点：项目、创意、灵感、心得与作品。

## 技术栈

- **Next.js 16**（App Router，静态导出）
- **React 19**
- **anime.js 4**：卡片入场动画、结果区数字滚动
- **原生 CSS**：9 个全局样式文件，无 CSS 框架

## 开发

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。

## 构建与部署

```bash
npm run build
```

`next.config.mjs` 里启用了 `output: "export"`，构建产物是纯静态站点，位于 `out/`。把整个 `out/` 目录上传到静态服务器（如 Nginx）即可，不需要 Node 运行环境。

本地预览构建产物：

```bash
npm run preview   # http://localhost:4173
```

Nginx 参考配置：

```nginx
root /var/www/zero-to-all/out;
index index.html;

location /_next/static/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
  try_files $uri =404;
}

location / {
  try_files $uri $uri/ $uri.html /404.html;
}
```

每次部署请整体替换 `out/`，避免残留旧的哈希资源。

## 目录结构

```text
app/                 页面与路由（文件夹即路由）
  layout.jsx         全站骨架：开发提示 + 备案页脚 + 全局样式
  page.jsx           /
  text-lab/page.jsx  /text-lab/
  progress/page.jsx  /progress/
components/          可复用组件
css/                 全局样式（responsive.css 必须最后导入）
data/site.js         所有页面文案、备案信息、开发进度
img/                 静态图片
next.config.mjs      静态导出配置
```

## 页面

| 路径 | 说明 |
| --- | --- |
| `/` | 个人主页 |
| `/text-lab/` | 文字实验室 |
| `/progress/` | 开发进度时间线 |

开启 `trailingSlash` 后，子页面地址统一带结尾斜杠。

## 内容维护

网站上的文案、作品信息、备案链接和开发进度都集中在 `data/site.js`：

- `home`：首页内容
- `textLab`：文字实验室标题
- `siteNotice`：顶部开发提示
- `siteFooter`：备案图标文案与链接
- `progress`：开发进度记录（最新在上）

改内容只需要动这一个文件，组件代码不用碰。
