// 本地临时预览服务器。
// ES Module 不能通过 file:// 加载，必须走 HTTP；这个脚本只做静态文件服务，
// 并确保 .js 返回 text/javascript（Windows 上 Python http.server 可能返回 text/plain）。
//
// 用法：node tools/serve.mjs [端口]，默认 8080

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.argv[2]) || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Bad Request");
  }

  let filePath = path.join(root, pathname);
  const rel = path.relative(root, filePath);
  if (rel.startsWith("..") || path.isAbsolute(rel)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Forbidden");
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not Found");
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

server.on("error", (err) => {
  console.error(`启动失败：${err.message}`);
  process.exit(1);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`本地预览：http://127.0.0.1:${port}/`);
});
