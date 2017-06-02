---
layout: clean
css: seasir
lang: cn
permalink: /seasir/naha/cal/

---

<style>
#calTitle {
    color:red;
    font-size:20px;
    margin:0 0 30px 0;
    padding:0;
    text-decoration:underline;
    visibility:hidden;
    text-align:center;
}
#logo {margin:30px 0 10px 0;padding:0}
.cal-index {margin:10px 0}
</style>

<h1 id="calTitle">SEASIR Group <span id="year"></span> 淡旺季月历</h1>
<p class="hl-red">注：<b><i>该淡旺季月历适用于Marine House SEASIR那霸店的所有活动，以及Marine House SEASIR那霸店和Marine Club BERRY店的所以PADI训练课程。</i></b></p>
<div id="cal"></div>
<div class="cal-index">
  <div class="cal-white-box cal-box"></div><span>淡季</span>
  <div class="cal-yellow-box cal-box"></div><span>平时</span>
  <div class="cal-red-box cal-box"></div><span>旺季</span>
</div>
<div class="cal-link"></div>

{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/cal.js"></script>
<script>
<!--
    var year = window.location.hash.substr(1);
    if(year === '')
        year = (new Date()).getFullYear();
    else
        year = year ^ 0;
    if (window.peak[year] !== undefined)
        window.calFactory.genAllYear("#cal",year);
    $("#year").html(year);
    $("#calTitle").css({"visibility":"visible"});
    window.calFactory.genCalLink(".cal-link","看全年淡旺季月历", "{% if site.active_lang == site.default_lang %}{{site.baseurl}}{% else %}{{ site.baseurl }}/{{ site.active_lang }}{% endif %}/seasir/naha/cal/");
-->
</script>

