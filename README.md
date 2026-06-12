# 罗松涛 — 个人作品集

线上地址：**https://songtaoluo007-maker.github.io/**

## 怎么改网站内容（不需要懂代码）

全站所有文字都在 **`content.js`** 一个文件里，改它就行，**永远不需要碰 `index.html`**。

### 方法一：直接在 GitHub 网页上改（推荐，手机也行）

1. 打开 https://github.com/songtaoluo007-maker/songtaoluo007-maker.github.io/blob/main/content.js
2. 点右上角铅笔图标 ✏️（Edit this file）
3. 改文字，点绿色 **Commit changes** 提交
4. 等约 1 分钟，刷新网站即可看到更新

### 方法二：本地改

直接双击 `index.html` 就能本地预览（无需服务器）。改完 `content.js` 后：

```bash
git add . && git commit -m "更新内容" && git push
```

## content.js 字段对照表

| 字段 | 控制网页哪里 |
|------|------------|
| `site` | 网站标题、名字、SEO 描述 |
| `hero` | 首屏：宣言、副标题 |
| `stats` | 数据带的 4 个数字 |
| `cases` | 两个精选大案例（可增删，自动交错排版） |
| `works` | 「更多作品」卡片网格（可增删） |
| `about` | 关于我 + 平台能力列表 |
| `contact` | 邮箱、GitHub、滚动条带文字 |

## 常见操作

- **给案例加真实截图**：把图片放进 `images/` 文件夹（没有就新建一个），然后把案例的 `image: ""` 改成 `image: "images/你的图.png"`
- **加一个新项目**：在 `works` 数组里照格式复制一段；私有项目 `link` 留空 `""` 会自动显示 PRIVATE 标记
- **加第三个大案例**：在 `cases` 数组里照格式复制一段，`tone` 可选 `green / blue / amber / purple`（占位图配色）
- **换宣言**：改 `hero.tagline`

## 技术说明

纯原生 HTML/CSS/JS，零框架零构建，托管于 GitHub Pages。动态光场为 Canvas 实时渲染，自动适配移动端，并尊重系统的「减弱动态效果」设置。
