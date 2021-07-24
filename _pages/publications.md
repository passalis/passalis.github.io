---
layout: page
permalink: /publications/
title: publications
description: my journal and conference publications
years: [ 2021, 2020, 2019, 2018, 2017, 2016]
conference_years: [ 2021, 2020, 2019, 2018, 2017, 2016, 2015]
nav: true
---

# Journals

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f journals -q @*[year={{y}}]* %}
{% endfor %}

</div>

# Conferences

<div class="publications">

{% for y in page.conference_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f conferences -q @*[year={{y}}]* %}
{% endfor %}

</div>


