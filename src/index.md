---
title: Holy Theory
layout: 'base.njk'
---
 
<!-- Hello Everyone! -->

<!-- {% for post in collections.posts %}
- [{{ post.data.title }}](.{{ post.url  }})
{% endfor %}
 -->
 <ol type="1">

{% for post in collections.algorithms %}
<!-- - [{{ post.data.title }}](.{{ post.url  }}) -->
<li><a href="#{{post.url}}">{{ post.data.title }}</a></li>

{% endfor %}
{% for post in collections.javascript %}
<!-- - [{{ post.data.title }}](.{{ post.url  }}) -->
<li><a href="#{{post.url}}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>


{% for algorithm in collections.algorithms %}
{{ algorithm.content }}
<a name="{{algorithm.url}}"></a>

{% endfor %}

{% for js in collections.javascript %}
{{ js.content }}
<a name="{{js.url}}"></a>

{% endfor %}