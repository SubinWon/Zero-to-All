import HomePage from "./components/HomePage.jsx";
import TextLabPage from "./components/TextLabPage.jsx";
import ProgressPage from "./components/ProgressPage.jsx";
import SiteNotice from "./components/SiteNotice.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { useRoute } from "./router/useRoute.js";

// 路由表：页面 key ↔ 地址栏路径 ↔ 页面组件。以后加页面，只动这一处。
const ROUTES = {
  home: { path: "/", Page: HomePage },
  textlab: { path: "/text-lab", Page: TextLabPage },
  progress: { path: "/progress", Page: ProgressPage },
};

// 地址栏 → 当前页面 key（沿用 startsWith，容许可带尾斜杠）
function pageFromPath(path) {
  if (path.startsWith("/text-lab")) return "textlab";
  if (path.startsWith("/progress")) return "progress";
  return "home";
}

export default function App() {
  // 4.3 里"现在在哪一页"记在内存（useState）里——一刷新就被打回首页。
  // 这一节换成 useRoute：把"在哪一页"读自 / 写入浏览器地址栏。
  const { path, navigate } = useRoute();

  // 看地址栏决定显示哪一页：/text-lab → 文字实验室；/progress → 开发进度；其它 → 个人主页
  const current = pageFromPath(path);
  const { Page } = ROUTES[current];

  // 点导航 → 改地址栏（而不再是改内存里的值）
  const onNavigate = (key) => navigate((ROUTES[key] ?? ROUTES.home).path);

  return (
    <div className="app-shell">
      <div className="page-shell">
        {/* 提示条和页脚属于全站骨架，所以放在这里——每个页面自动就有，不必各写一遍 */}
        <SiteNotice />
        <main className="page-content">
          <Page current={current} onNavigate={onNavigate} />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
