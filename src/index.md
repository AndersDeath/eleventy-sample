---
title: Hello World
layout: 'base.njk'
---
 
Hello Everyone!

{% for post in collections.posts %}
- [{{ post.data.title }}](.{{ post.url  }})
{% endfor %}