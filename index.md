---
layout: single
title: LZL
---

我的毕生事业：尽可能辅助更多的人发现、发展他们的兴趣。

<ul class="articles">
  <li>对我来说很重要的文章：</li>
  {% for post in site.categories.article %}
    <li><span class="date">{{ post.date | date:"%Y.%m.%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<ul class="notes">
  <li>我的大脑想过这些事情：</li>
  {% for post in site.categories.note %}
    <li><span class="date">{{ post.date | date:"%Y.%m.%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

- 联系方式：<lizunlong@gmail.com>
