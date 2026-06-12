/* ============================================================
   网站内容配置 — 改这个文件就能更新网站全部文字内容
   改完保存提交，1 分钟后网站自动更新（详见 README.md）
   ============================================================ */

window.CONTENT = {

  /* ---------- 全站信息 ---------- */
  site: {
    nameZh: "罗松涛",
    nameEn: "SONGTAO LUO",
    title: "罗松涛 — 把想法造成产品",
    description: "跨平台独立开发者作品集：Android / HarmonyOS / Web / AI，5 个独立产品的案例与故事。"
  },

  /* ---------- 开场首屏 ---------- */
  hero: {
    kicker: "PORTFOLIO — 2026",
    tagline: "把想法造成产品。",
    subtitle: "跨平台独立开发者 — Android · HarmonyOS · Web · AI",
    scrollHint: "滚动探索"
  },

  /* ---------- 数据带（数字会滚动入场） ---------- */
  stats: [
    { value: 5, label: "个独立产品" },
    { value: 4, label: "个目标平台" },
    { value: 3, label: "个 AI 驱动应用" },
    { value: 2, label: "款游戏作品" }
  ],

  /* ---------- 精选案例（整屏大案例，左右交错排布） ----------
     video 字段：填演示视频路径（如 "images/shiyi.mp4"）自动循环播放，优先于截图
     image 字段：填截图路径（如 "images/shiyi.png"）则显示截图；有 video 时作为封面
     两者都留空 "" 则显示同风格的抽象界面占位图
     demo  字段：填在线试用地址，会显示「在线试用 ↗」按钮；留空不显示
     tone  字段：占位图配色，可选 "green" / "blue" / "amber" / "purple"
  ------------------------------------------------------------ */
  cases: [
    {
      tag: "WEB · AI 叙事游戏 — 腾讯云黑客松作品",
      title: "拾忆",
      titleEn: "Memory Healer",
      positioning: "进入一位阿尔茨海默症老人的记忆，把他遗失的人生一片片拼回来。",
      challenge: "传统叙事游戏的对话是写死的，玩家无法真正参与故事——而失忆题材恰恰最需要自由对话带来的真实感。",
      solution: "每个 NPC 都由大模型驱动，任意输入都能动态回应；记忆碎片收集 + 剧情分支 + 三种结局；Vue 3 + FastAPI 全栈，部署于腾讯云。",
      outcome: "AI 对话与叙事游戏的完整闭环：自由对话、碎片系统、分支结局、SVG 动画场景、五位存档一应俱全。",
      stack: ["Vue 3", "TypeScript", "FastAPI", "DeepSeek", "腾讯云"],
      link: "https://github.com/songtaoluo007-maker/memory-healer",
      linkLabel: "查看仓库",
      video: "images/shiyi-demo.mp4",
      image: "images/shiyi-poster.jpg",
      demo: "",
      tone: "green"
    },
    {
      tag: "WINDOWS 桌面 · 全栈 + AI",
      title: "基金智能分析",
      titleEn: "Fund Intelligence",
      positioning: "让 DeepSeek 盯盘，你只看结论。",
      challenge: "持仓、行情、资金流向、新闻散落在各个 App 里，人工盯盘费时，还容易被情绪带着走。",
      solution: "FastAPI + Vue 3 全栈；持仓截图 OCR 一键导入；行情与北向资金自动采集；每天定点生成 AI 投资建议；一键打包成免环境安装的 Windows 桌面应用。",
      outcome: "从截图导入到 AI 报告的一站式闭环，所有数据本地存储，双击即用。",
      stack: ["FastAPI", "Vue 3", "SQLite", "DeepSeek", "OCR", "PyInstaller"],
      link: "https://github.com/songtaoluo007-maker/songtaosimi",
      linkLabel: "查看仓库",
      video: "",
      image: "",
      demo: "",
      tone: "blue"
    }
  ],

  /* ---------- 更多作品（紧凑卡片网格） ----------
     link 留空 "" 表示私有项目，卡片会显示 PRIVATE 标记
  ------------------------------------------------------------ */
  works: [
    {
      title: "三问高效学习机",
      desc: "面向 AI 时代大学生的认知闭环工具——提出一个问题，自动生成课程空间，按「心智模型 → 学术争议 → 深度测评」三问法完成学习闭环。",
      stack: "ArkTS · FastAPI · ChromaDB",
      platform: "HarmonyOS",
      link: ""
    },
    {
      title: "小乖记账",
      desc: "原生 Android 记账应用——收支记录、分类统计、数据本地化，从需求到交付的一次完整移动端实践。",
      stack: "Java · Android",
      platform: "Android",
      link: "https://github.com/songtaoluo007-maker/xiaoguai-accounting"
    },
    {
      title: "BattleCity 坦克大战",
      desc: "经典「坦克大战」的 HarmonyOS 移植——ArkTS 实现游戏循环、碰撞检测与关卡逻辑。",
      stack: "ArkTS · DevEco",
      platform: "HarmonyOS",
      link: ""
    }
  ],

  /* ---------- 关于 ---------- */
  about: {
    heading: "一个人，从想法到上线",
    text: "我是罗松涛，一名跨平台独立开发者。从 Android 到 HarmonyOS，从 Web 到 Windows 桌面，从课程作业到黑客松——我习惯一个人把产品从想法推到可用：需求、架构、前后端、AI 集成、打包发布，全栈到端。",
    platforms: [
      { name: "Android", detail: "Java" },
      { name: "HarmonyOS", detail: "ArkTS · ArkUI" },
      { name: "Web", detail: "Vue 3 · FastAPI" },
      { name: "AI 应用", detail: "DeepSeek · Agents · OCR" }
    ]
  },

  /* ---------- 联系 ---------- */
  contact: {
    headline: "找我聊聊",
    sub: "项目合作 · 技术交流 · 或者只是打个招呼",
    email: "songtaoluo007@gmail.com",
    github: "https://github.com/songtaoluo007-maker",
    marquee: "OPEN FOR COLLABORATION — 把想法造成产品 — "
  }
};
