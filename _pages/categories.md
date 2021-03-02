---
layout: page
permalink: /categories/
title: Categories
---

{% for category in site.categories %}
<section>
  {% capture category_name %}{{ category | first }}{% endcapture %}
  <a name="{{ category_name | slugize | replace: ",", "" }}"></a>
  <h2 class="text-left subtitle">{{ category_name | replace: ",", "" }}</h2>
  <ul class="mdc-list filters-content">
    {% for post in site.categories[category_name] %}
    <li class="mdc-list-item">
      <a href="{{ site.baseurl }}{{ post.url }}">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.description |strip_html}}{%endif%}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
