import { siteNotice } from "../data/site.js";

// 全站顶部提示条：所有页面都显示，所以在根布局里只写一次。
// 文案不写死在这里——改 site.js 里的 siteNotice.text 即可。
export default function SiteNotice() {
  return (
    <div className="site-notice" role="note">
      {siteNotice.text}
    </div>
  );
}
