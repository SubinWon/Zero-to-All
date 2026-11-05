import Image from "next/image";
import iconUrl from "../img/icon.png";
import { siteFooter } from "../data/site.js";

// 页脚备案信息：图标 + 两条备案链接。
// 文字和网址来自 site.js；这里只负责"怎么摆、怎么点开"。
// Next 的静态图片 import 返回 { src, width, height }，交给 next/image 处理。
export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label={siteFooter.ariaLabel}>
      <Image className="site-footer-icon" src={iconUrl} alt="" />
      {siteFooter.links.map((link) => (
        <a key={link.href} href={link.href} rel="noreferrer" target="_blank">
          {link.label}
        </a>
      ))}
    </footer>
  );
}
