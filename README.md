# Q1anwaterwave Blog

一个不依赖框架的静态博客首页，可直接用于 GitHub Pages。仓库根目录的 `index.html` 就是入口文件。

## 添加文章

1. 在 `posts/` 下建立文章 HTML 页面，例如 `posts/first-post.html`。
2. 在 `posts.js` 的 `window.BLOG_POSTS` 数组中添加对应记录：

```js
window.BLOG_POSTS = [
  {
    title: "我的第一篇文章",
    date: "2026-09-16",
    description: "这篇文章讲了什么",
    tags: ["随笔"],
    url: "./posts/first-post.html"
  }
];
```

首页会按日期倒序显示文章。不添加记录时，会显示明确的空状态，不会展示虚构文章。

## 发布

把这些文件推送到你的 `<用户名>.github.io` 仓库，在 GitHub Pages 设置中选择从仓库根目录发布即可。所有本地资源链接都使用相对路径，项目站点也可以正常引用。
