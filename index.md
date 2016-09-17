---
layout: single
title: LZL
---

我的毕生事业：尽可能辅助更多的人发现、发展他们的兴趣。

我的微信公众号：[两个圆点一条直线](http://mp.weixin.qq.com/mp/homepage?__biz=MzIyODM0MzgyMA==&hid=1&sn=25cbcb99e58c52d3be818354b769934f#wechat_redirect)

<img src="/static/qrcode_for_gh_fd269898e981_258.jpg" style="width: 258px; height: 258px;" />

联系方式：<lizunlong@gmail.com>

{% for post in site.categories.note %}
<div class="card">
  <a href="{{ post.url }}"><p class="title">{{ post.title }}</p></a>
  <p>{{ post.summary }}</p>
</div>
{% endfor %}
