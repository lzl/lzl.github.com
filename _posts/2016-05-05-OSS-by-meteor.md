---
layout: single
title: 使用 Meteor 实现的开源项目有哪些？
summary: 今天说开源项目，明天说商业网站。
category: note
---

# 使用 Meteor 实现的开源项目有哪些？

今天说开源项目，明天说[商业网站](/note/business-by-meteor.html)。

## 1. Telescope

![Telescope](http://ww2.sinaimg.cn/mw690/a1480181jw1f3kk0yw0alj21kw0we441.jpg)

[Telescope](http://www.telescopeapp.org/) 是第一个也是最出名的基于 Meteor 的开源项目，由网站设计圈内较有名气的 Sacha Greif 创建并维护，它可以帮助我们快速搭建出类似于 Product Hunt, Hacker News 和 reddit 这样的论坛型网站。该项目目前正处于大改版的收尾阶段，主要变化是直接拥抱 React；其代码组织架构使用的是 packages 方式，易于扩展，适用于大型项目。我个人觉得如果非要使用这种强迫症式的代码组织方式，不如索性将项目拆开，用 npm 分发，Meteor 自身正朝着这个方向发展。

## 2. Wekan

![Wekan](http://ww3.sinaimg.cn/mw690/a1480181jw1f3kk0xsdk9j21kw0uggqm.jpg)

[Wekan](https://wekan.io/) 是第一个比较有争议的基于 Meteor 的开源项目，它原名 LibreBoard，以开源、自托管的高仿 Trello 出名。后来 GitHub 接到 Trello 的要求，以 DMCA 名义将 LibreBoard 下架。再后来经过改名并重新设计用户界面，以 Wekan 之名回归。Trello 和 Wekan 都是卡片式项目管理与协作软件，我非常喜欢前者的理念并深深崇拜其软件品质。Wekan 这一开源项目的出现，一方面将 Meteor 实时同步数据的能力展现出来，另一方面也能感受到资深开发者们如何玩转 Meteor。Meteor 不再局限于演示酷炫原型的玩具，只要开发者的态度是认真的，那么在了解 Meteor 的特点后，完全可以把以往的开发经验迁移过来。

## 3. Rocket.Chat

![Rocket.Chat](http://ww1.sinaimg.cn/mw690/a1480181jw1f3kk0wn0t7j21kw0wetfo.jpg)

[Rocket.Chat](https://rocket.chat/) 是当前最火热的基于 Meteor 的开源项目，从项目初始到现在不过一年时间，已经实现 Web, iOS, Android, OS X, Windows & Linux 全平台覆盖，大大小小的代码贡献者接近 150 人。它为什么这么火，因为 Slack 最近特别燃，而 Rocket.Chat 正是开源、自托管的 Slack 替代品。Slack 和 Rocket.Chat 都是多人在线聊天软件。Rocket.Chat 和 Wekan 一样，充分发挥出 Meteor 实时同步数据的能力，此外还有跨平台快速开发的能力。我没有深入使用过 Rocket.Chat，因此不清楚其软件品质到底如何。不过有一点我始终相信，能够快速跨平台开发出来的产品不会有太出色的用户体验。我还想再更进一步，有的时候，先快速出品（攒名气，吸资源），再细致打磨（有资源了再开发原生应用），也不失为一种策略。
