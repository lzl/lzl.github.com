---
layout: single
title: Meteor 团队的产品线及战略转变
summary: Meteor 团队把整件事看得很透，它先以技术创新打开小白开发者市场，再以兼容生态的方式吸收专业开发者市场，当他们对 Meteor 产生了依赖，就能从 Galaxy 和 Support 上持续收钱了。
category: note
hidden: true
---

本周一，Meteor 团队释出上个月底 Customer Day 的新视频，题为 [Product Roadmap and Strategy](https://www.youtube.com/watch?v=tPAma8RKnMc)，由联合创始人 Matt DeBergalis 演讲。

我写过一篇名为《[Meteor 的开放之路](/note/meteor-open-road.html)》的文章，基本把重点说清楚了，今天我再根据幻灯片，一个一个地串一遍。

![](http://ww3.sinaimg.cn/mw690/a1480181gw1f4ff7a8dvuj20zk0k0mxx.jpg)

Meteor 团队将他们的产品线分三大块。第一个是框架 (Framework)，指 Meteor 自身，提供优秀的开发者体验；第二个是数据 (Data)，指正在开发中的 Apollo，为了兼容现有的传统架构；第三个是运行环境 (Runtime)，指负责托管 Meteor 应用的 Galaxy 云平台，它是 Meteor 团队的盈利服务之一。

![](http://ww3.sinaimg.cn/mw690/a1480181gw1f4ff7azl8bj20zk0k0dhc.jpg)

![](http://ww2.sinaimg.cn/mw690/a1480181gw1f4ff7bv0dej20zk0k0q4v.jpg)

首先说的是框架。Meteor 1.3 版本带来的战略转变是为进化而分化，为生存而融合。把项目拆分出来，方便开发者社区提供有针对性的代码贡献；融合 ES2015 / React / Angular / NPM，以吸引专业开发者的注意力。模块化的代码结构既能够精准调节载入顺序，也方便了编写测试规则。总之，Meteor 1.3 之前，它专注于为小白开发者服务；Meteor 1.3 之后，它开始扩大范围，向专业开发者抛出绣球。

![](http://ww4.sinaimg.cn/mw690/a1480181gw1f4ff7cnnw1j20zk0k0q61.jpg)

Meteor 有很多种玩法，Meteor Guide 是官方提供的一条路，它是这些年团队和社区积累出来的 best practice，我推荐大家通读一遍，留个印象，避免走弯路。

Meteor Guide 之所以存在的更重要意义在于为开发者建立知识库，它会随着每次大版本升级进行相应的更新，帮助我们渡过升级阶段，也正因此，它大大提升了开发者长期依赖 Meteor 的信心。

![](http://ww2.sinaimg.cn/mw690/a1480181gw1f4ff7dhyjej20zk0k0myc.jpg)

同样是一个转略转变。Meteor 1.3 之前 —— 即便在 1.0 时代之前 —— 的每一次版本升级都是大更新，开发周期太长。Meteor 1.3 之后，他们会提升发布新版本的速度 —— 将由一个个小版本组成，同时循序渐进地拆分自己，为再次提速创造条件。

![](http://ww2.sinaimg.cn/mw690/a1480181gw1f4ff7ei6z0j20zk0k0jth.jpg)

近期 Meteor 框架的发展路径将围绕重构核心代码，既是为了全面向 NPM 转移，也是为了适配 MongoDB 和 Node.js 的新版本。实在任重道远。

![](http://ww4.sinaimg.cn/mw690/a1480181gw1f4ff7fqntpj20zk0k00u1.jpg)

然后说的是数据。Apollo 是 Meteor 团队的最新项目，它专注于在数据层优化开发者体验，与 Facebook 的 GraphQL 团队有着密切合作。在我看来，Apollo 的实现将会带来 Meteor 的第二春，因为它有能力解决 Meteor 的最大诟病 —— 对传统架构的兼容性太差。

![](http://ww2.sinaimg.cn/mw690/a1480181gw1f4ff7gnauvj20zk0k0q4w.jpg)

Apollo 在数据层上支持各个数据源，支持 MongoDB 是当然的，重点是支持其他数据库，比如主流的 SQL，而且能用 REST 调取数据。最关键的是，作为开发者，只需要学会 GraphQL 就够了，它在调取所有数据源上的语法是通用的，这实在是太杀手级了。

![](http://ww2.sinaimg.cn/mw690/a1480181gw1f4ff7i12xwj20zk0k0q3u.jpg)

Apollo 和 DDP 的关系是可以共存的，这再一次说明兼容的重要性。我的理解是，DDP 是 Meteor 现在使用的数据传输协议，Apollo 则代表着未来，Apollo 早晚会替代 DDP，但这个过程是可以循序渐进的，正如同从 Blaze 转向 React 的过程一样。

![](http://ww4.sinaimg.cn/mw690/a1480181gw1f4ff7sfe53j20zk0k0q45.jpg)

最后说的是运行环境。Galaxy 是一种神奇的存在，它允许 Meteor 开发者专注于编写软件本身，像编译、托管、运行、维护、监测等所有和 DevOps 相关的琐事 —— 对开发者来说那些确实可以称为琐事 —— 全部帮你搞定。我很期待它能进入中国，但对此并不抱以什么希望。

核心就这三部分，开发框架、数据层、运行环境。Meteor 团队把整件事看得很透，它先以技术创新打开小白开发者市场，再以兼容生态的方式吸收专业开发者市场，当他们对 Meteor 产生了依赖，就能从 Galaxy 和 Support 上持续收钱了。
