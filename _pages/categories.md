---
layout: page
permalink: /categories/
title: Categories
---


<div id="archives">
{% for category in site.categories %}
  <div>
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>

    <h2 class="category-head">{{ category_name }}</h2>
    <a name="{{ category_name | slugize }}"></a>
    <ul class="mdc-list">
    {% for post in site.categories[category_name] %}
    <li class="mdc-list-item">
      <a href="{{ site.baseurl }}{{ post.url }}">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</span>
      </a>
    </li>
    {% endfor %}
    </ul>
  </div>
{% endfor %}
</div>
