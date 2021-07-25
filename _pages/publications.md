---
layout: page
permalink: /publications/
title: publications
description: journal and conference publications
years: [ 2021, 2020, 2019, 2018, 2017, 2016]
conference_years: [ 2021, 2020, 2019, 2018, 2017, 2016, 2015]
nav: true
---

<p align="justify">
I have published more than 100 papers in international conferences (CVPR, ICCV, ECCV, ICPR, ISCAS, ...) and international journals (TNNLS, TKDE, PR, ...). You can find a list of my publications, along with links to the paper/publisher site and code (when available) below. If you find any broken link or missing paper, please let me know and I will be happy to share our work with you.
</p>

## Journals

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f journals -q @*[year={{y}}]* %}
{% endfor %}

</div>

## Conferences

<div class="publications">

{% for y in page.conference_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f conferences -q @*[year={{y}}]* %}
{% endfor %}

</div>


