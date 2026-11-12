# 光子智能课题组网站：GitHub Pages 部署与更新教程

适用版本：2026-11-12。网站已制作完成；本教程帮助你把源码部署到自己的 GitHub 账号或课题组组织账号。源码包本身不代表已经上线，也没有为你创建 GitHub 仓库。

## 1. 你拿到的是什么

这是一个 HTML + CSS + JavaScript 静态网站，不需要 Node.js、npm、数据库、Jekyll 或付费服务器。首页介绍“光子智能课题组”的“空间光计算与感知”研究方向，Resources 是独立的资料链接页。

- 首页：课题组标识、方向简介、三条研究方向、研究成果、资料共享入口。
- Resources：标题/关键词搜索、按类别筛选、外部文档链接、新窗口阅读。
- 适配电脑与手机，带折叠菜单、键盘焦点、跳过导航入口。
- 默认不填写成员、单位、邮箱和真实论文；这些内容应由你补充。
- 默认资料是 Meep、NumPy、PyTorch、OpenCV 的公开参考文档，均标明来源，不是课题组原创成果。
- 光学示意图是概念表达，不对应某一套真实实验装置。左上角图形是可替换的临时品牌图标，不是已有官方标志。

## 2. 先在电脑上查看

1. 下载并完整解压源码 ZIP，不要直接在压缩包内双击网页。
2. 进入解压后的文件夹，找到 index.html，双击用 Chrome 或 Edge 打开。
3. 点击“资料共享”，确认能进入 Resources 页；输入 FFT 可以试用搜索。
4. 双击 START_HERE.html 可在浏览器中阅读这份教程；DEPLOY_GUIDE.md 是同内容的 Markdown 版本。
5. 本地即可查看布局、搜索、筛选与页面跳转；外部文档链接仍需联网。

所有字体和图形均使用系统字体或本地资源，不依赖外部字体服务。相对路径同时支持根域名主页和带仓库子路径的网站。

## 3. 认识文件：以后主要编辑哪一个

| 文件 | 用途 | 何时修改 |
| --- | --- | --- |
| index.html | 首页结构和部分固定文字 | 修改栏目、主视觉或固定文案 |
| resources.html | 资料页结构和说明 | 修改资料页标题、说明、无脚本备用链接 |
| assets/site-data.js | 简介、研究方向、论文和资料列表 | 最常修改，建议日常只编辑此文件 |
| assets/styles.css | 色彩、字号、布局和手机适配 | 修改视觉样式 |
| assets/app.js | 数据渲染、筛选、搜索、导航逻辑 | 通常不需要修改 |
| assets/optical-field.svg | 首页光学概念图 | 替换主视觉 |
| assets/favicon.svg | 顶部图标与浏览器标签图标 | 替换课题组标志 |
| .nojekyll | 告诉 GitHub 直接发布静态文件 | 保留即可 |
| README.md | 仓库说明 | 可补充维护信息 |
| DEPLOY_GUIDE.md / START_HERE.html | 部署与更新教程 | 不影响网页运行 |

## 4. 第一次部署：全程使用 GitHub 网页即可

### 4.1 选择仓库名称

推荐先创建项目仓库 spatial-optical-computing。这样不会占用账号唯一的主站仓库，便于以后扩充其他研究方向。

| 方案 | 仓库名称 | 上线后的网址格式 |
| --- | --- | --- |
| 项目站点，推荐 | spatial-optical-computing | https://你的用户名.github.io/spatial-optical-computing/ |
| 账号或组织主站 | 你的用户名.github.io | https://你的用户名.github.io/ |

上表中的“你的用户名”应替换为实际的 GitHub 用户名；若仓库归组织所有，则替换为组织名。网址只是格式示例，不是已为你创建的网站。

账号主站仓库名称必须和账号匹配。如果你的账号已存在 username.github.io，不要覆盖它，使用项目站点即可。课题组长期维护可将仓库放在课题组的 GitHub Organization 下；组织账号不是必需的。

### 4.2 新建仓库

1. 登录 https://github.com/，在右上角“+”菜单选择 New repository。
2. Owner 选择你的账号或你有权限使用的课题组组织。
3. Repository name 填 spatial-optical-computing。
4. Description 可填：光子智能课题组 · 空间光计算与感知。
5. 使用 GitHub Free 时，本教程采用 Public 仓库。勾选 Add README，便于直接进入文件界面。
6. 点击 Create repository。首次使用 GitHub，请先完成账号及邮箱验证。

### 4.3 上传网站文件

1. 进入新仓库的 Code 页面，点击 Add file → Upload files。
2. 在电脑上打开解压后的文件夹，选中其中的 index.html、resources.html、assets 文件夹以及说明文件，拖入上传区域。
3. 保持 assets 文件夹结构。请上传“文件夹里面的内容”，不要把最外层文件夹整个包进去，也不要只上传 ZIP。
4. 在 Commit changes 区域写一条说明，例如 Initial website，然后提交到 main 分支。
5. 上传完成后，仓库 Code 页应能直接看到 index.html、resources.html 和 assets，不需要再点一层文件夹。
6. 检查 .nojekyll 是否存在。若拖放时漏掉，可通过 Add file → Create new file 创建，文件名精确输入 .nojekyll，内容留空或加一行文字后提交。它不应叫 .nojekyll.txt。

这一包文件很小，适合直接网页上传。若上传 README.md 时 GitHub 提示同名覆盖，这是你刚建仓库的默认说明文件，可用包中的版本替换。

### 4.4 开启 GitHub Pages

1. 在仓库顶部点击 Settings，不是你的个人账号 Settings。
2. 左侧找到 Pages。
3. 在 Build and deployment 下，将 Source 设为 Deploy from a branch。
4. Branch 选择 main，目录选择 /(root)。
5. 点击 Save。此网站不需要选择 GitHub Actions 作为自定义发布源，也不需要填写构建命令。
6. 等待发布任务结束；Actions 页可查看 pages build and deployment 一类工作流是否成功。
7. 回到 Settings → Pages，打开页面给出的 Visit site 链接，以 GitHub 实际显示的网址为准。

首次发布或内容更新可能需要等待几分钟。成功后仍显示旧页面时，试试 Ctrl + F5 强制刷新。若持续失败，查看教程第 10 节。

### 4.5 上线验收

- 首页顶部名称、简介和主视觉显示正常。
- 从首页可打开 Resources，再从 Resources 返回首页。
- 搜索 FFT 只出现相关条目；清除筛选后恢复所有条目。
- 点击“光学仿真”分类可以看到 Meep。
- 用手机打开，菜单可展开，卡片不会超出屏幕。
- 用组员账号测试你自己补充的文档链接，确认权限正确。

## 5. 最常见更新：新增一份技术文档

### 5.1 先取得文档链接

可使用飞书文档、语雀、Notion、已发布的网页、GitHub 中可阅读的 Markdown 文档等。先在原平台准备好文档，再复制正常阅读或分享用的网址，随后粘贴到本网站配置。

本站只保存文档的标题、介绍、类别和链接，不复制文档正文，也没有网页上传后台。在原平台更新正文而网址不变时，本站无需再次修改。若文档网址变更，再更新 url 字段。

如果是组内限定资料，请在原平台设置“指定成员”或“组织内成员可阅读”，用组员账号测试。这个公开网站不能替原平台验证身份，隐藏菜单或分类也不构成访问控制。不要把需要保密的标题、摘要、密码、带令牌链接放进公开仓库；网站上显示的资源元数据也是公开的。

### 5.2 在 GitHub 上修改配置

1. 打开仓库 Code → assets → site-data.js。
2. 点击铅笔图标 Edit this file。
3. 找到 resources: [，下方每一组大括号就是一份资料。
4. 复制一条现有记录，改成自己的标题、简介和实际链接。条目之间用英文逗号分隔。
5. 点击 Commit changes，写说明，例如 Add FDTD tutorial，提交到发布分支 main。
6. 等待 Pages 更新，打开 Resources 搜索新标题，点击链接验证。

下面是单条记录格式。url 中的示例地址必须替换成你的真实网页地址：

```javascript
{
  title: "FDTD 超表面仿真入门",
  category: "仿真教程",
  description: "从单元建模、边界条件到透射相位提取的学习笔记。",
  url: "https://example.com/replace-with-your-document",
  source: "课题组技术笔记",
  type: "在线文档",
  tags: ["FDTD", "超表面", "入门"]
}
```

| 字段 | 填什么 |
| --- | --- |
| title | 卡片标题，建议简短明确 |
| category | 分类名；新分类会自动生成筛选按钮，无需编辑 HTML |
| description | 一两句话概述内容 |
| url | 完整的 https:// 或 http:// 网页地址；无效或空链接不会显示 |
| source | 作者、课题组或平台来源 |
| type | 在线文档、实验记录、教程、论文笔记等展示标签 |
| tags | 搜索关键词，以英文逗号分隔 |

新增一条时，注意前后逗号。例如：

```javascript
resources: [
  {
    title: "第一份文档",
    category: "实验方法",
    description: "这里填写简短介绍。",
    url: "https://example.com/replace-first",
    source: "课题组",
    type: "在线文档",
    tags: ["光路", "标定"]
  },
  {
    title: "第二份文档",
    category: "仿真教程",
    description: "这里填写另一份资料的介绍。",
    url: "https://example.com/replace-second",
    source: "课题组",
    type: "教程",
    tags: ["FDTD"]
  }
]
```

以上是结构示例，不要把 example.com 当作可用技术资料发布。保留 site-data.js 其他部分和文件末尾的 };。若替换 resources 后面还添加其他顶层字段，应在 resources 的 ] 后保留分隔逗号。

### 5.3 修改、删除与排序

- 修改链接：只改相应记录的 url，然后提交。
- 修改正文：在文档原平台编辑；若网址没变，本站不用动。
- 删除资料：删除完整的大括号记录，注意保留相邻条目之间的一个逗号。
- 调整顺序：移动整条记录，页面按配置中的顺序显示，类别按首次出现顺序生成。
- 清空资料：将 resources 改为 []，页面显示空结果提示。
- 统一分类名：“仿真教程”和“仿真学习”是两个不同类别，建议组内约定一致。
- 换成组内资料后，记得修改 resources.html 中“当前收录外部公开参考文档”这句说明。
- resources.html 的 noscript 区域是禁用 JavaScript 时的备用链接；如果删除默认参考文档，建议同时更新该区域。

## 6. 修改简介、研究方向与联系方式

site-data.js 中 site 区块控制大部分介绍：

```javascript
site: {
  name: "光子智能课题组",
  englishName: "PHOTONIC INTELLIGENCE GROUP",
  direction: "空间光计算与感知",
  headline: "空间光计算\n与感知",
  tagline: "以光计算，感知世界。",
  intro: "这里填写首页简短介绍。",
  about: "这里填写稍详细的方向简介。",
  email: "",
  affiliation: "",
  github: ""
}
```

- headline 中的 \n 表示换行；direction 是页面标题所使用的完整名称。
- email 填真实公开联系邮箱后，页脚自动显示“联系课题组”；空字符串则隐藏。
- affiliation 可填写单位/学院，空则隐藏。
- github 可填写课题组 GitHub 完整网址，空则隐藏。
- research 数组是三条研究方向，可改标题、英文名、介绍和 tags，也可增减条目。
- 两个 HTML 文件的 title、meta description、页脚方向文字与首页少量固定标语是静态备用内容。若整体改名或更换方向，也请搜索并同步修改它们，便于搜索引擎和禁用脚本的访客看到一致内容。

## 7. 添加真实论文

把 publications: [] 换成记录数组，例如下面的结构。所有标题、作者和链接均须替换成真实信息；没有链接就保留空字符串。

```javascript
publications: [
  {
    year: "2026",
    title: "这里填写论文真实标题",
    authors: "这里填写作者",
    venue: "这里填写期刊或会议",
    paper: "",
    code: "",
    project: ""
  }
]
```

添加后，“研究成果将陆续更新”的占位说明会自动消失。论文按数组顺序显示，建议最新的放在最前面。链接只接受完整 http/https 地址；不提供的 Paper、Code、Project 不显示按钮。

## 8. 修改图片与颜色

- 配色集中在 assets/styles.css 开头的 :root：--ink 为深蓝，--teal 为绿色强调色，--paper 为页面背景。
- 用课题组 Logo 替换 assets/favicon.svg 时，保持相同文件名即可。若用 PNG，需在两个 HTML 中同步改顶部 img src 和标签页图标 link href/type。
- 替换首页主图：把新图放进 assets，例如 lab-system.jpg，再修改 index.html 中 hero-art 内的 img src 为 assets/lab-system.jpg。
- 同时更新图片 alt 和下方说明，真实照片不应继续标注“概念示意”。建议使用横图，比例接近 700:540。
- 使用 VS Code 或其他纯文本编辑器，编码选 UTF-8。不要用 Word 编辑源码，也不要把 .js 保存为 .js.txt。

## 9. 多人维护与撤回误改

单人维护时，网页编辑后直接提交 main 即可。多人维护建议让成员新建分支并发起 Pull Request，由负责人检查后合并 main。只有发布分支的更新才会上线；其他成员的电脑本地修改不会自动同步。

一次提交尽量只做一类改动，并写清楚提交说明。改错时，可进入该文件的 History，找到正确的旧版本，复制其内容，通过一次新的编辑提交恢复；这样不会删除其他人的历史。不要为了恢复网页而清空整个仓库。

首次成功部署后，建议留存一份确认可用的源码备份。GitHub 仓库保留维护历史；网页中的 Resources 只负责阅读跳转，不提供在线编辑仓库或审批功能。

## 10. 常见问题排查

| 现象 | 优先检查 |
| --- | --- |
| GitHub 上只有 ZIP，网站打不开 | GitHub 不会自动解压源码包；上传解压后的文件 |
| 首页 404 | Settings → Pages 是否 main + /(root)；根目录是否有小写 index.html |
| 上传后多了一层文件夹 | 把该层内的 index.html、resources.html 和 assets 移到发布根目录 |
| Pages 的分支列表没有 main | 仓库是否至少提交过一次文件；实际默认分支叫什么 |
| 只有文字没有样式 | assets 是否完整上传，路径大小写是否一致；不要在路径开头随意加 / |
| 图片无法显示 | 文件名、扩展名、大小写和 HTML 中的 src 是否完全一致 |
| 资料卡片全不见了 | site-data.js 是否少逗号/引号，或 url 不完整；查看 F12 Console 错误 |
| 某个分类下搜不到资料 | 搜索和分类会同时生效，点击清除筛选后再试 |
| 链接只能自己打开 | 原平台文档权限仍是仅作者可见；请在原平台授权组员 |
| 修改后没变化 | 是否已 Commit 到 main；Actions 是否成功；等待后 Ctrl + F5 |
| 官网能打开，但项目站点链接失效 | 保持包内相对路径，避免写成 /assets/... 或 /resources.html |
| 找不到 Settings 或 Pages | 是否为仓库管理员/维护者；组织策略是否限制 Pages |
| 手机没看到导航 | 点击顶部“菜单”按钮 |

网址结构、Pages 页面入口、功能可用性以后可能调整，遇到差异以 GitHub 官方文档和你账号中的界面为准。

## 11. 源码与引用说明

本包重新编写了 HTML、CSS、JavaScript 和 SVG，没有复制参考网站的人物信息、论文、图片或模板源码。参考网站仅用于理解学术主页的信息组织方式。源代码中不包含第三方 JavaScript 包或外部字体依赖。

你可以自行修改这份交付源码并部署。公开仓库不自动等于授予他人任意使用权；是否给网站代码添加开源许可证，由课题组自行决定。引用的外部资料仍由原作者/机构拥有相应权利。

部署说明核对来源（2026-11-12）：

- GitHub Pages 快速入门：https://docs.github.com/en/pages/quickstart
- 发布分支与目录设置：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- 上传仓库文件：https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- 静态站点与 .nojekyll：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

维护流程：在文档平台写资料 → 取得可访问的链接 → 编辑 assets/site-data.js → Commit 到 main → 等待 Pages 发布 → 打开网页验收。
