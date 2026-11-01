import { siteNotice } from "../data/site.js";

// 全站顶部提示条：两个页面都显示，所以在 App 里只写一次。
// 文案不写死在这里——改 site.js 里的 siteNotice.text 即可。
export default function SiteNotice() {
  return (
    <div className="site-notice" role="note">
      {siteNotice.text}
    </div>
  );
}
