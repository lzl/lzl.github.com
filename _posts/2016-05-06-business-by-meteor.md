---
layout: single
title: 有哪些使用 Meteor 实现的商业网站？
summary: 昨天说开源项目，今天说商业网站。
category: note
---

# 有哪些使用 Meteor 实现的商业网站？

昨天说[开源项目](/note/OSS-by-meteor.html)，今天说商业网站。

## 1. Meteor 官网

![Meteor](http://ww1.sinaimg.cn/mw690/a1480181jw1f3kk0vv6acj211y0lcwl7.jpg)

自家产的粮食自己得吃。按理说这种推广展示页面犯不着用 Meteor，但官网还是用了。只要访问者的线路不差，加载起来也挺快的，有一个额外好处就是切换页面时几乎是零延时——因为它接收的是数据而不是 HTML 页面。

## 2. Galaxy 云平台

![Galaxy](http://ww1.sinaimg.cn/mw690/a1480181jw1f3kk0tvg28j20xk0s0q73.jpg)

Meteor 自家的云平台，基于 Amazon EC2 Container 服务，专门部署、运行、分析、管理 Meteor 软件。这里用的就很正确了，因为里面涉及到大量的数据实时交换，通过 DDP 协议传输，这不恰好是 Meteor 的强项么。

## 3. Level Up Tutorials 贩卖教程

![Level Up Tutorials](http://ww3.sinaimg.cn/mw690/a1480181jw1f3kk0ta1exj211y0lc787.jpg)

其中的开发教程包括从 Meteor 到 React 再到 React Native，教人学习 Meteor 的自然能很好地理解其特性，其中包括成熟的帐号管理，从注册新用户到找回密码，还能扩展出相应的权限、支付系统。别小看帐号管理这件事，里面涉及到密码学和网络安全，想把这事完完全全弄对，绝非易事。Meteor 就能帮助我们办到，无压力。

## 4. Wrangler 时尚社交

![Wrangler](http://ww3.sinaimg.cn/mw690/a1480181jw1f3kk0sqwjlj21kw0vogws.jpg)

一家公司如果想有自己的社交网站，绝大多数情况都是借助第三方平台，比如 Facebook 或微博，我觉得这样做很对，初期用最小成本获取尽可能多的用户。但 Meteor 允许一种新的可能性：数据独立，为什么一家公司——即便是时尚领域的——不能拥有自己的社交网站呢，市场细分意味着精准打击和高忠诚度，用户和数据都要拿到手，这样就有能力去做定制化的服务了。

## 5. GameRaven 游戏社交

![GameRaven](http://ww2.sinaimg.cn/mw690/a1480181jw1f3kk0ptuapj21kw0weds3.jpg)

同上。

## 6. Pedlar 拍卖聚合

![Pedlar](http://ww1.sinaimg.cn/mw690/a1480181jw1f3kk0n4brkj21kw0we4ac.jpg)

我既不觉得这类网站有什么前景，也不觉得这类网站适合用 Meteor 实现，但一点也不妨碍它存在，因为单是 Meteor 的账户管理与整个流程下来的开发体验就让人省老大心了。

## 7. Classcraft 在线游戏 + 传统教育

![Classcraft](http://ww3.sinaimg.cn/mw690/a1480181jw1f3kk2b967lj20zk0lrn4i.jpg)

这个有点意思，将在线游戏的元素结合到传统教育过程中，把现实中的奖惩带入虚拟世界，以此激发学生的学习热情。我觉得要想完成这样的项目，仅仅会 Meteor 是不够的，它还要求有图形设计能力，除此之外，具体的实现逻辑和一般的 JavaScript 网站应该没什么区别。值得注意的是，它的移动应用是原生的——这意味着还得会 iOS 和 Android 开发，数据交换依旧走的是 DDP 协议。

## 8. CodeFights 游戏化的编程挑战赛

![CodeFights](http://ww1.sinaimg.cn/mw690/a1480181jw1f3kk2a8jceg20tk0k9wsc.gif)

这个也有意思，将游戏对抗和编程学习结合到一起，极大发挥出 Meteor 处理、传输实时数据的能力。

## 9. Dominus 多人社交战略游戏

![Dominus](http://ww4.sinaimg.cn/mw690/a1480181jw1f3kk29h05nj211y0lcanx.jpg)

又是一个游戏，只不过它更纯粹，就是一战略游戏，实现逻辑照样和一般的 JavaScript 游戏没什么区别，其特点依然是数据的实时处理与传输。发现规律了没有，就像我前天说的，只要是重视数据流动的应用，都能发挥出 Meteor 的优势。

## 10. Oculus Health 慢性病医疗管理平台

![Oculus Health](http://ww4.sinaimg.cn/mw690/a1480181jw1f3kk2718xpj21kw0xwdm2.jpg)

这个是完全商用的，没有哪家第三方平台会设计出这么一个市场细分的管理服务，有了 Meteor，一个小团队就能办到。

## 11. Thoughtly 机器学习 + 自然语言处理 + 自动分析、视觉化、提取文章大意

![Thoughtly](http://ww1.sinaimg.cn/mw690/a1480181jw1f3kk266q6cj20ub0gfwhi.jpg)

不明觉厉。我只想说，你过去的开发经验和独特专业绝对是可以迁移过来的。Meteor 只是一个拥有优秀的开发者体验的工具，在了解它的基础上，多用它去创造。

## 12. Mixmax 基于 Chrome 插件的 Gmail 效率工具

![Mixmax](http://ww3.sinaimg.cn/mw690/a1480181jw1f3kk25k3omj21kw1aktjv.jpg)

原来还能做成 Chrome 插件，我说不太清它真正用到了 Meteor 的什么特性，但我相信这个产品一定不只是用 Meteor 这一个工具就能做成的。

## 13. Talkus 整合 Slack 的即时沟通、帮助工具

![Talkus](http://ww4.sinaimg.cn/mw690/a1480181jw1f3kk24npchj21kw0we7at.jpg)

它和上面那个产品的诞生至少能说明两件事：一，Meteor 扩展能力很强；二，开发者有什么样的能力，就能做出什么样的产品。在初期，Meteor 会帮助你提升效率；等你能力强了，它也绝不会限制你去做更多的扩展。
