/* ============================================================
   网站内容配置 — 改这个文件就能更新网站全部文字内容
   改完保存提交，1 分钟后网站自动更新（详见 README.md）
   规则：留空 "" 的链接/字段会自动隐藏，不会渲染成死按钮。
   ============================================================ */

window.CONTENT = {

  /* ---------- 全站信息 ---------- */
  site: {
    nameZh: "罗松涛",
    nameEn: "SONGTAO LUO",
    title: "罗松涛 — AI 应用开发工程师 / 全栈开发者",
    description: "罗松涛的个人作品集：AI 应用开发与全栈工程师，用 Python、Vue、HarmonyOS 和大模型把想法落地为可用产品。深圳 · 2026 届。",
    url: "https://songtaoluo007-maker.github.io/",
    // 简历文件：把你的简历命名为 resume.pdf 放到仓库根目录即可替换占位文件
    resumeUrl: "resume.pdf"
  },

  /* ---------- 顶部导航（按顺序渲染；href 以 # 开头为页内锚点） ---------- */
  nav: [
    { label: "首页", href: "#top" },
    { label: "项目", href: "#works" },
    { label: "能力", href: "#skills" },
    { label: "关于", href: "#about" },
    { label: "简历", href: "resume.pdf", download: true },
    { label: "联系", href: "#contact" }
  ],

  /* ---------- 开场首屏 ---------- */
  hero: {
    kicker: "PORTFOLIO — 2026",
    role: "AI 应用开发工程师 / 全栈开发者",
    intro: "使用 Python、Vue、HarmonyOS 和大模型，把 AI 能力落地为可以实际使用的完整产品。",
    tagline: "把想法造成产品。",
    status: "深圳 ｜ 2026 届 ｜ 寻求 AI 应用开发 / 全栈开发岗位",
    scrollHint: "滚动探索",
    // 首屏按钮：type 决定样式（primary 实心 / ghost 描边 / link 文字链）
    ctas: [
      { label: "查看代表项目", href: "#works", type: "primary" },
      { label: "下载简历", href: "resume.pdf", type: "ghost", download: true },
      { label: "GitHub", href: "https://github.com/songtaoluo007-maker", type: "ghost", external: true }
    ]
  },

  /* ---------- 数据带（数字会滚动入场） ---------- */
  stats: [
    { value: 5, label: "个独立产品" },
    { value: 4, label: "个目标平台" },
    { value: 3, label: "个 AI 驱动应用" },
    { value: 2, label: "款游戏作品" }
  ],

  /* ---------- 核心能力（不用进度条，用「能力 + 项目佐证」表达） ----------
     items：该方向掌握的具体技术；proof：可填一句项目佐证（留空则不显示）
  ------------------------------------------------------------ */
  skills: [
    {
      group: "AI 应用开发",
      items: ["大模型 API 集成", "Prompt 与 Agent 工作流", "OCR", "RAG / 向量数据库", "AI 功能产品化"],
      proof: "拾忆的 NPC 对话、基金项目的每日 AI 报告与持仓 OCR"
    },
    {
      group: "Web 全栈",
      items: ["Vue 3", "TypeScript", "FastAPI", "REST API", "SQLite", "前后端联调"],
      proof: "拾忆、基金智能分析两个 Vue 3 + FastAPI 全栈项目"
    },
    {
      group: "移动端开发",
      items: ["HarmonyOS", "ArkTS", "ArkUI", "Android", "Java"],
      proof: "BattleCity 坦克大战、三问学习机、小乖记账"
    },
    {
      group: "工程与交付",
      items: ["Git / GitHub", "PyInstaller 打包", "云部署", "日志与异常处理", "数据持久化", "项目文档"],
      proof: "基金项目打包为免环境 Windows 桌面应用；拾忆部署于腾讯云"
    }
  ],

  /* ---------- 精选案例（整屏大案例，左右交错排布） ----------
     video 字段：填演示视频路径（如 "images/shiyi.mp4"）自动循环播放，优先于截图
     image 字段：填截图路径（如 "images/shiyi.png"）则显示截图；有 video 时作为封面
     两者都留空 "" 则显示同风格的抽象界面占位图
     demo  字段：填在线试用地址，会显示「在线试用 ↗」按钮；留空不显示
     portrait 字段：竖屏视频（手机录屏）设为 true，会以手机样机框居中展示
     tone  字段：占位图配色，可选 "green" / "blue" / "amber" / "purple"
     caseStudy 字段：填详情页路径（如 "projects/memory-healer.html"）会显示「查看案例」按钮
  ------------------------------------------------------------ */
  cases: [
    {
      tag: "WEB · AI 叙事游戏 — 腾讯云黑客松作品",
      id: "memory-healer",
      title: "拾忆",
      titleEn: "Memory Healer",
      positioning: "进入一位阿尔茨海默症老人的记忆，把他遗失的人生一片片拼回来。",
      challenge: "传统叙事游戏的对话是写死的，玩家无法真正参与故事——而失忆题材恰恰最需要自由对话带来的真实感。",
      solution: "每个 NPC 都由大模型驱动，任意输入都能动态回应；记忆碎片收集 + 剧情分支 + 三种结局；Vue 3 + FastAPI 全栈，部署于腾讯云。",
      outcome: "AI 对话与叙事游戏的完整闭环：自由对话、记忆碎片系统、剧情分支、三种结局、SVG 动画场景与五位玩家存档。",
      stack: ["Vue 3", "TypeScript", "FastAPI", "DeepSeek", "腾讯云"],
      link: "https://github.com/songtaoluo007-maker/memory-healer",
      linkLabel: "查看仓库",
      caseStudy: "projects/memory-healer.html",
      video: "images/shiyi-demo.mp4",
      image: "images/shiyi-poster.jpg",
      demo: "",
      tone: "green",
      download: "",
      // 案例详情页字段：留空 "" 的不会显示在页面上，填好即出现（详见 README）
      detail: {
        background: "",        // 项目背景：契机 / 黑客松背景 / 为什么做
        role: "",              // 我的角色：如「个人独立完成」
        team: "",              // 团队人数
        duration: "",          // 开发周期：如「2025.05，约 2 周」
        architecture: "",      // 系统架构：Vue 3 前端 + FastAPI 后端 + DeepSeek
        architectureImage: "", // 可选：架构图 images/xxx.png
        flow: [],              // 核心功能流程，每项一步
        // 建议补：NPC 人设与提示词管理 / 上下文记忆 / 剧情状态机 / 记忆碎片系统 /
        //        大模型输出约束 / API 超时与降级 / 多结局逻辑 / 前后端通信结构
        challenges: "",        // 最困难的技术问题
        tradeoffs: "",         // 解决方案与技术取舍：为什么这样设计
        shortcomings: "",      // 项目不足
        future: ""             // 后续优化方向
      }
    },
    {
      tag: "WINDOWS 桌面 · 全栈 + AI",
      id: "fund-intelligence",
      title: "基金智能分析",
      titleEn: "Fund Intelligence",
      positioning: "让 DeepSeek 盯盘，你只看结论。",
      challenge: "持仓、行情、资金流向、新闻散落在各个 App 里，人工盯盘费时，还容易被情绪带着走。",
      solution: "FastAPI + Vue 3 全栈；持仓截图 OCR 一键导入；行情与北向资金自动采集；每天定点生成 AI 投资建议；一键打包成免环境安装的 Windows 桌面应用。",
      outcome: "从截图导入到 AI 报告的一站式闭环，所有数据本地存储，双击即用。",
      stack: ["FastAPI", "Vue 3", "SQLite", "DeepSeek", "OCR", "PyInstaller"],
      link: "https://github.com/songtaoluo007-maker/songtaosimi",
      linkLabel: "查看仓库",
      caseStudy: "projects/fund-intelligence.html",
      video: "images/fund-demo.mp4",
      image: "images/fund-poster.jpg",
      demo: "",
      tone: "blue",
      download: "",
      // 案例详情页字段：留空 "" 的不会显示在页面上，填好即出现
      detail: {
        background: "",        // 项目背景
        role: "",              // 我的角色
        team: "",              // 团队人数
        duration: "",          // 开发周期
        architecture: "",      // 系统架构：FastAPI 后端 + Vue 3 前端 + SQLite + DeepSeek
        architectureImage: "", // 可选：架构图
        flow: [],              // 核心功能流程，每项一步
        // 建议补：前后端架构 / 数据采集流程 / OCR 识别与人工校正 / SQLite 存储 /
        //        定时任务 / AI 报告生成流程 / 异常处理 / Windows 打包流程 /
        //        本地隐私设计 / 模型输出风险与免责声明
        challenges: "",        // 最困难的技术问题
        tradeoffs: "",         // 解决方案与技术取舍
        shortcomings: "",      // 项目不足
        future: ""             // 后续优化方向
      }
    },
    {
      tag: "HARMONYOS · ARKTS 游戏开发",
      id: "battle-city",
      title: "BattleCity 坦克大战",
      titleEn: "Armored Frontline",
      positioning: "经典坦克大战，被重制成一场有指挥系统的二战战役。",
      challenge: "复刻坦克大战不难，难的是让它在今天还值得一玩——纯复古复刻缺乏深度，也撑不起重复游玩的动力。",
      solution: "ArkTS 从零实现游戏循环与碰撞检测；在经典玩法之上加入战役编年体（莫斯科到库尔斯克四大战役）、攻防双阵营、载具采购（T-34/76 到 SU-152）和消耗指挥点的八种战术指令——集火、空袭、烟幕、维修各有用途。",
      outcome: "战役、车库、成就、玩家档案与数据持久化均已落地，军事风 UI 逐帧手绘——一份课程作业长成了完整游戏。",
      stack: ["ArkTS", "ArkUI", "HarmonyOS", "Canvas", "游戏设计"],
      link: "",
      linkLabel: "",
      caseStudy: "projects/battle-city.html",
      video: "images/tank-demo.mp4",
      image: "images/tank-poster.jpg",
      portrait: true,
      demo: "",
      tone: "amber",
      download: "",
      // 案例详情页字段：留空 "" 的不会显示在页面上，填好即出现
      detail: {
        background: "",        // 项目背景：课程作业 / 为什么做成战役版
        role: "",              // 我的角色
        team: "",              // 团队人数
        duration: "",          // 开发周期
        architecture: "",      // 系统架构：ArkTS + ArkUI + Canvas 渲染
        architectureImage: "", // 可选：架构图
        flow: [],              // 核心功能流程，每项一步
        // 建议补：ArkTS 游戏循环 / 碰撞检测 / 状态管理 / 数据持久化 / 战役系统 /
        //        指挥点系统 / 载具系统 / 音频与资源管理 / HarmonyOS 适配
        challenges: "",        // 最困难的技术问题
        tradeoffs: "",         // 解决方案与技术取舍
        shortcomings: "",      // 项目不足
        future: ""             // 后续优化方向
      }
    }
  ],

  /* ---------- 更多作品（紧凑卡片网格） ----------
     link 留空 "" 表示私有项目，卡片会显示「代码暂未公开」而非死路
     caseStudy 可选：填详情页路径会显示「查看案例」入口
  ------------------------------------------------------------ */
  works: [
    {
      title: "三问高效学习机",
      desc: "面向 AI 时代大学生的认知闭环工具——提出一个问题，自动生成课程空间，按「心智模型 → 学术争议 → 深度测评」三问法完成学习闭环。",
      stack: "ArkTS · FastAPI · ChromaDB",
      platform: "HarmonyOS",
      link: "",
      caseStudy: ""
    },
    {
      title: "小乖记账",
      desc: "原生 Android 记账应用——收支记录、分类统计、数据本地化，从需求到交付的一次完整移动端实践。",
      stack: "Java · Android",
      platform: "Android",
      link: "https://github.com/songtaoluo007-maker/xiaoguai-accounting",
      caseStudy: ""
    }
  ],

  /* ---------- 关于 ---------- */
  about: {
    heading: "一个人，从想法到上线",
    text: "我是罗松涛，一名跨平台独立开发者，目前在深圳，2026 届，正在寻求 AI 应用开发 / 全栈开发岗位。从 Android 到 HarmonyOS，从 Web 到 Windows 桌面，从课程作业到黑客松——我习惯一个人把产品从想法推到可用：需求、架构、前后端、AI 集成、打包发布，全栈到端。",
    meta: [
      { k: "所在城市", v: "深圳" },
      { k: "求职方向", v: "AI 应用开发 / 全栈开发" },
      { k: "状态", v: "2026 届" }
    ],
    platforms: [
      { name: "Android", detail: "Java" },
      { name: "HarmonyOS", detail: "ArkTS · ArkUI" },
      { name: "Web", detail: "Vue 3 · FastAPI" },
      { name: "AI 应用", detail: "DeepSeek · Agents · OCR" }
    ]
  },

  /* ---------- 证书（显示在「关于」区） ----------
     占位项设了 hidden:true 不会显示在页面上。
     填好证书的准确全称后，把对应项的 hidden 改成 false（或删掉该字段）即可展示。
     不要使用不确定的名称。
  ------------------------------------------------------------ */
  certificates: [
    { name: "TODO：华为 HCIP-昇腾 AI 相关认证（请填准确全称）", issuer: "华为 Huawei", focus: "昇腾 AI / 大模型", hidden: true },
    { name: "TODO：HarmonyOS 高级开发者认证（请填准确全称）", issuer: "华为 Huawei", focus: "HarmonyOS 应用开发", hidden: true }
  ],

  /* ---------- 联系 ---------- */
  contact: {
    headline: "找我聊聊",
    sub: "项目合作 · 技术交流 · 或者只是打个招呼",
    email: "songtaoluo007@gmail.com",
    github: "https://github.com/songtaoluo007-maker",
    marquee: "OPEN FOR COLLABORATION — 把想法造成产品 — "
  },

  /* ---------- SEO / 社交分享（阶段 7 使用） ---------- */
  seo: {
    ogImage: "images/og-cover.jpg",
    themeColor: "#070709",
    author: "罗松涛 Songtao Luo",
    twitterCard: "summary_large_image"
  }
};
