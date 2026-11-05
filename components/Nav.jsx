"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 全站唯一的顶部导航。next/link 管站内跳转，usePathname 管当前页高亮。
const items = [
  { href: "/", label: "个人主页" },
  { href: "/text-lab/", label: "文字实验室" },
  { href: "/progress/", label: "开发进度" },
];

// trailingSlash: true 时地址栏是 /text-lab/；统一去掉尾斜杠再比较。
function normalize(pathname) {
  const clean = pathname.replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

export default function Nav() {
  const pathname = normalize(usePathname() ?? "/");

  return (
    <div className="hero-topline">
      <p className="brand-eyebrow">zero to tech</p>
      <nav className="inline-links hero-nav">
        {items.map((item) => {
          const active = normalize(item.href) === pathname;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={"nav-link" + (active ? " active" : "")}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
