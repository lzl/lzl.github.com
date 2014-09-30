---
layout: single
title: LZL
---

我的毕生事业：**尽可能辅助更多的人发现、发展他们的兴趣。**

- 问：年纪不大就用『毕生』二字修饰『事业』，是否不妥？
- 答：我无法预知未来，但我认为只要做好这件事，此生无憾。

<ul class="articles">
  <li>对我来说很重要的文章：</li>
  {% for post in site.categories.article %}
  <li><span class="date">{{ post.date | date:"%Y.%m.%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<ul class="notes">
  <li>我的大脑想过这些事情：</li>
  {% for post in site.categories.note %}
  <li>{{ post.date | date:"%Y.%m.%d" }} <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

- 联系方式：<lizunlong@gmail.com>
