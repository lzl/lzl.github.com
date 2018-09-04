---
layout: single
title: 在新机器上配置 Jekyll 并发布至 GitHub Page
summary: 又是时隔两年，我再次想起我还有一个个人网站(博客)。
category: note
---

又是时隔两年，我再次想起我还有一个个人网站(博客)。

然而我已忘记如何在新机器上配置、发布文章了，需要重新学习，顺便在此记录备忘，以备下一个两年 :D

大致上，依此操作：[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

最后只要保证 `bundle exec github-pages versions` 和 [Dependency versions](https://pages.github.com/versions/) 所列版本一致即可。

执行 `bundle exec jekyll serve` 运行本地预览。预览无误便可 push 上去，GitHub 会自动构建。

P.S. 为什么突然想起这里来了？因为 [NetNewsWire](http://inessential.com/2018/08/31/netnewswire_comes_home) 回归本体。我还顺便加上了 [JSON Feed](/feed.json)，推荐订阅。
