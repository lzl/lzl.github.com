---
layout: cover
title: 为文章设定精确的发布时间
summary: 按格式 YYYY-MM-DD HH:MM:SS +/-TTTT 加一行设定即可。
date: 2018-09-04 14:41:00 +0800
category: note
---

我发现过去的文章都是统一于格林尼治标准时间零点发布的。这是因为 Jekyll 根据文件名判定发布日期，根据服务器来判定时区，而文件名没有精确的时间，服务器则在 GitHub 上按照格林尼治标准时间处理。

[查阅 Jekyll 文档得知](https://jekyllrb.com/docs/front-matter/#predefined-variables-for-posts)，用户可以更改预设好的变量，比如 `date`，根据 `YYYY-MM-DD HH:MM:SS +/-TTTT` 格式进行设定。

以本文为例，其变量为：

```
---
layout: cover
title: 为文章设定精确的发布时间
summary: 按格式 YYYY-MM-DD HH:MM:SS +/-TTTT 加一行设定即可。
date: 2018-09-04 14:41:00 +0800
category: note
---
```

`layout` 指布局样式，可以理解为博客主题，这里的 [`cover`](https://github.com/lzl/lzl.github.com/blob/master/_layouts/cover.html) 对应我自己写的样式。

`title` 文章标题。

`summary` 文章摘要，在首页会用到。

`date` 它便是本文新增的变量，精确设定发布时间。

`category` 文章分类，在我这里，一般就都是 `note`. 目前为止，只有两篇 `article`，分别是《[论教育](/article/on-education.html)》和《[瑟谷传奇](/article/sudbury-valley-school.html)》。
