// 网站要显示的"内容"，全都集中在这里。
// 想改标题、改文案、加作品？只动这个文件，组件代码一个字都不用碰。
// 这就是"数据与界面分离"：组件只管"怎么显示"，site.js 只管"显示什么"。
//
// 埋了一颗模块 5 的种子：现在这些值写死在文件里；等后端登场，
// 它们可以改成从网络接口实时取——而组件那边照样一个字都不用动。

export const home = {
  heroTitle: "关于我",
  heroSubtitle: "项目，创意，灵感，心得，我的作品",
  featuredWork: {
    kicker: "作品",
    title: "文字实验室",
    copy: "拼音和情绪，挖掘中文里的细节",
    linkLabel: "打开作品",
  },
  identity: {
    motto: "已识乾坤大，尤怜草木青",
    learning: "零到全栈",
  },
};

export const textLab = {
  heroTitle: "文字实验室",
  heroSubtitle: "拼音和情绪，挖掘中文里的细节",
};

// 全站每一页都有的内容：顶部开发提示、页脚备案信息。
// 它们不属于 home 或 textLab，所以单独导出，所有页面共用一份。
export const siteNotice = {
  text: "网站正在开发建设，非最终样式！",
};

export const siteFooter = {
  ariaLabel: "备案信息",
  links: [
    {
      label: "皖公网安备34082402000563号",
      href: "https://beian.mps.gov.cn/#/query/webSearch?code=34082402000563",
    },
    {
      label: "皖ICP备2026036679号-1",
      href: "https://beian.miit.gov.cn/",
    },
  ],
};

// 开发进度页的内容：一条记录 = 日期 + 标题 + 若干条改动。
// 日期用 "YYYY-MM-DD" 字符串，从新到旧手写排序（不做 Date 解析，避免时区问题）。
export const progress = {
  heroTitle: "开发进度",
  heroSubtitle: "记录这个网站的开发进度",
  entries: [
    {
      date: "2026-11-05",
      title: "迁移到 Next.js",
      changes: [
        "改用 Next.js App Router，路由由 app/ 文件夹决定",
        "导航改用 next/link，去掉手写 useRoute",
        "配置静态导出，构建产物输出到 out/",
      ],
    },
    {
      date: "2026-11-01",
      title: "新增开发进度页面",
      changes: [
        "新增 /progress 路由，导航加入「开发进度」入口",
        "用纵向时间线展示开发记录，按日期从新到旧排列",
      ],
    },
    {
      date: "2026-11-01",
      title: "全站开发提示与备案页脚",
      changes: [
        "顶部新增浅红底开发提示条",
        "底部新增公安备案与 ICP 备案链接",
        "两处共用文案统一收进 site.js",
      ],
    },
    {
      date: "2026-11-01",
      title: "数据驱动界面",
      changes: [
        "页面文案集中到 site.js",
        "新增 useRoute，用地址栏决定显示哪一页",
      ],
    },
    {
      date: "2026-10-31",
      title: "迁移到 React",
      changes: ["页面拆分为 React 组件", "Nav 与 PageHeading 两页共用"],
    },
    {
      date: "2026-10-31",
      title: "接入 Vite 与 anime.js",
      changes: ["接入 Vite 构建与开发服务器", "统一用 anime.js 做卡片入场动画"],
    },
    {
      date: "2026-10-25",
      title: "完善备案信息",
      changes: ["新增皖ICP备案链接", "备案图标固定为 20×20"],
    },
    {
      date: "2026-10-24",
      title: "开发提示与备案页脚",
      changes: ["顶部提示条与底部备案区初版"],
    },
    {
      date: "2026-10-21",
      title: "本地化 anime.js",
      changes: ["改用本地 ESM 版本，不再依赖 CDN"],
    },
    {
      date: "2026-10-20",
      title: "模块化改造",
      changes: ["CSS 拆分为多个文件", "JS 拆分为模块，去掉脚本加载顺序依赖"],
    },
    {
      date: "2026-10-15",
      title: "项目起步",
      changes: ["初始文件：静态 HTML + 8 个 CSS 文件"],
    },
  ],
};
