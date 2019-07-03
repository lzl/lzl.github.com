---
layout: single
title: LZL
---

我的毕生事业：尽可能辅助更多的人发现、发展他们的兴趣。

联系方式：<lizunlong@gmail.com>

<hr />

{% for post in site.categories.note %}
{% unless post.hidden %}
<div class="card">
  <a href="{{ post.url }}"><p class="title">{{ post.title }}</p></a>
  <p>{{ post.summary }}</p>
</div>
{% endunless %}
{% endfor %}

<small>完</small>
