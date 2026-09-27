# Academic homepage

一页式学术主页，左侧为个人资料，右侧为 Introduction、Publications 和 Education。所有内容均为待填写的占位信息。

## 填写内容

编辑 `app/content.ts` 即可修改姓名、职位、简介、研究方向、论文及教育经历。页面标题自动使用这里的姓名。

- 照片：放到 `public/images/portrait.jpg`，把 `profile.photo` 改为 `/images/portrait.jpg`。
- 论文配图：放到 `public/images/`，填写对应论文的 `image` 路径和 `imageAlt` 图片说明。
- 邮箱：直接填写邮箱地址，无需 `mailto:`。
- Scholar、GitHub 和论文链接：填写完整 URL。留空保持不可点击的占位文字。
- 简历：放到 `public/cv.pdf`，将 `profile.cv` 改为 `/cv.pdf`。
- 添加论文：复制 `publications` 中的一条，给它不同的 `id`。
- 作者的 `self: true` 表示你自己，会有特别的文字标记。
- 删除条目：从相应数组中移除整条记录；论文数量自动更新。

方括号是填写提示，可直接替换。照片未添加时显示 `profile.initials` 字母占位。

## 本地运行

```sh
npm install
npm run dev
```

打开终端显示的本地地址。正式构建使用 `npm run build`。

## 调整外观

`app/globals.css` 中的 `--primary` 控制深蓝强调色，`--serif` 控制标题字体。页面适配桌面和手机，支持键盘导航与减少动态效果的系统偏好。

信息结构参考 [Jon Barron](https://jonbarron.info/) 与 [Phillip Isola](https://web.mit.edu/phillipi/) 的学术主页。视觉样式与代码为本项目编写。
