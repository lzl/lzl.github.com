---
layout: single
title: LZL
---

我的毕生事业：**尽可能辅助更多的人发现、发展他们的兴趣。**

- 问：年纪不大就用『毕生』二字修饰『事业』，是否不妥？
- 答：我无法预知未来，但我认为只要做好这件事，此生无憾。

<ul>
    {% for post in site.posts %}
    <li>{{ post.date | date:"%Y.%m.%d" }} <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

- 邮箱：<lizunlong@gmail.com>
- 博客：[blog.lizunlong.com](http://blog.lizunlong.com/)
