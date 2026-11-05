import SiteNotice from "../components/SiteNotice.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

// 全站样式：顺序与旧 main.jsx 完全一致，responsive.css 必须最后。
// App Router 里全局 CSS 只在根布局 import 一次。
import "../css/reset.css";
import "../css/variables.css";
import "../css/layout.css";
import "../css/hero.css";
import "../css/nav.css";
import "../css/cards.css";
import "../css/lab.css";
import "../css/progress.css";
import "../css/responsive.css";

export const metadata = {
  title: { default: "Zero to Tech", template: "%s | Zero to Tech" },
  description: "项目，创意，灵感，心得，我的作品",
};

// DOM 结构与旧 App.jsx 保持一致，现有 CSS 一行都不用改。
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="app-shell">
          <div className="page-shell">
            {/* 提示条和备案页脚属于全站骨架：放根布局，每个页面自动包含 */}
            <SiteNotice />
            <main className="page-content">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
