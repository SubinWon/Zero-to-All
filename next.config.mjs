/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 构建产物：out/（纯静态）
  trailingSlash: true, // /text-lab → out/text-lab/index.html
  images: { unoptimized: true },
  agentRules: false, // 不自动生成 AGENTS.md
};

export default nextConfig;
