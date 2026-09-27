# Academic homepage

一页式学术主页，左侧为个人资料，右侧为 Introduction、Publications 和 Education。所有内容均为待填写的占位信息。

## 填写内容

编辑 `app/content.ts` 即可修改姓名、职位、简介、研究方向、论文及教育经历。页面标题自动使用这里的姓名。

- 照片：放到 `public/images/portrait.jpg`，把 `profile.photo` 改为 `/images/portrait.jpg`。
- 教育经历标志：图片放在 `public/images/`，在对应 `education` 条目填写 `badge: '/images/uiuc.png'` 和 `badgeAlt` 图片描述。每条可单独设置；`badge` 留空显示通用教育图标。
- 论文配图：放到 `public/images/`，填写对应论文的 `image` 路径和 `imageAlt` 图片说明。
- 配图默认自动贴合原图宽高比：保持 `imageRatio: ''` 即可，电脑和手机都生效，无需逐篇测量。也可填写 `imageRatio: '16 / 9'` 手动指定外框比例，图片完整显示、不拉伸，比例不一致时可能留白。未添加图片时仍显示默认比例的占位框。
- 邮箱：直接填写邮箱地址，无需 `mailto:`。
- 侧栏联系方式：填写 `email`、`github`、`linkedin`、`x`、`scholar`，对应 Email、GitHub、LinkedIn、X 和 Google Scholar 图标。邮箱直接填写地址，其他字段填写个人主页的完整 URL。留空时图标不可点击；悬停显示名称。
- 论文链接：填写完整 URL。留空保持不可点击的占位文字。
- 论文显示顺序：标题 → 作者 → 会议/期刊与年份 → Paper | Code | Project。`summary` 字段保留在内容文件中，但不显示在页面上。
- 添加论文：复制 `publications` 中的一条，给它不同的 `id`。
- `authors` 直接填写一整行文字，例如 `authors: 'Haofei Yu, **Yining Zhao**, Lenore Blum, Manuel Blum, Paul Pu Liang'`。`**姓名**` 加粗，姓名后加 `*` 表示共同贡献（加粗且带星号写成 `**Yining Zhao***`）。加粗且带链接可写成 `**[Yining Zhao](https://example.com)**`。
- 删除条目：从相应数组中移除整条记录。

作者标记也支持 `†`、`‡`，紧跟加粗姓名时一起加粗：`**Yining Zhao***`、`**Yining Zhao**†`、`**Yining Zhao**‡`。也可以把符号放在加粗范围内，如 `**Yining Zhao†**`。推荐直接复制符号；若使用 LaTeX 写法，在 TypeScript 字符串中需转义反斜杠，例如 `authors: '**Yining Zhao**$\\dagger$'` 或 `authors: '**Yining Zhao**$\\ddagger$'`，页面会显示为 † 或 ‡（仅支持这两个命令，不是完整的 LaTeX 渲染）。

方括号是填写提示，可直接替换。照片未添加时显示 `profile.initials` 字母占位。

## 在文字中添加链接

简介、职位、院系、学校、论文标题/作者，以及教育经历的学校/学位/补充说明支持 `[显示文字](网址)`：

```ts
detail: 'Advised by [Jiaxuan You](https://jiaxuan.web.illinois.edu/)',
```

网页只显示 “Advised by Jiaxuan You”，姓名可以点击，网址不会显示在正文中。支持一段话中多个链接，网页链接在新标签页打开；支持 `https://`、`http://` 和 `mailto:`。普通占位文字如 `[University name]` 不受影响。无需再添加 `detailLink` 或修改页面代码。

## 本地运行

```sh
npm install
npm run dev
```

打开终端显示的本地地址。正式构建使用 `npm run build`。

## GitHub Pages 部署

仓库：`https://github.com/robotMonkeyButler/robotMonkeyButler.github.io`。

1. 在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。
2. 将源代码提交并推送到 `main`，`.github/workflows/deploy-pages.yml` 会自动构建并发布。
3. 在仓库 **Actions** 中查看部署状态；成功后访问 `https://robotmonkeybutler.github.io/`。

本地验证静态发布版本：`npm run build:pages`，输出目录为 `dist/client/`。不要上传 `dist/server/`、`node_modules/` 或 `.env`。所有站内图片必须放在 `public/images/`，内容中的路径写成 `/images/文件名`。以后修改 `app/content.ts`、样式或图片后，提交并推送即可更新线上主页；本地保存只更新 localhost。

GitHub Pages 构建使用静态导出，不需要 Cloudflare 凭据。原来的 `npm run dev` 和 `npm run build` 保持不变。

## 调整外观

`app/globals.css` 中的 `--primary` 控制深蓝强调色，`--font-title` 控制姓名和标题字体（Source Serif 4），`--font-body` 控制正文、导航和链接字体（Inter）。字体文件随网站本地托管，中文使用系统中文字体回退。字体来源：[Source Serif 4](https://github.com/adobe-fonts/source-serif) 和 [Inter](https://rsms.me/inter/)，对应许可文件保留在 `public/fonts/`。页面适配桌面和手机，支持键盘导航与减少动态效果的系统偏好。

信息结构参考 [Jon Barron](https://jonbarron.info/) 与 [Phillip Isola](https://web.mit.edu/phillipi/) 的学术主页。视觉样式与代码为本项目编写。
