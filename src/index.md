---
title: Holy Theory
layout: 'base.njk'
---
 
<!-- Hello Everyone! -->

<!-- {% for post in collections.posts %}
- [{{ post.data.title }}](.{{ post.url  }})
{% endfor %}

{% for post in collections.system-design %}
- [{{ post.data.title }}](.{{ post.url  }})
{% endfor %} -->


{% for algorithm in collections.algorithms %}
{{ algorithm.content }}
{% endfor %}