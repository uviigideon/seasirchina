---
layout: clean
css: seasir
lang: en
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

<h1 id="calTitle"> <span id="year"></span> Season Calender</h1>
<p class="hl-red">Note; <b><i>This season calendar applies to SEASIR NAHA activity, all PADI Training Course held by SEASIR NAHA and Marine Club BERRY only</i></b></p>
<div id="cal"></div>
<div class="cal-index">
    <div class="cal-white-box cal-box"></div><span>Low Season</span>
    <div class="cal-yellow-box cal-box"></div><span>Normal Season</span>
    <div class="cal-red-box cal-box"></div><span>Peak Season</span>
</div>
<div class="cal-link"></div>

{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/cal.js"></script>
<script>
    var year = window.location.hash.substr(1);
    if(year === '')
        year = (new Date()).getFullYear();
    else
        year = year ^ 0;
    if (window.peak[year] !== undefined)
        window.calFactory.genAllYear("#cal",year);
    $("#year").html(year);
    $("#calTitle").css({"visibility":"visible"});
    window.calFactory.genCalLink(".cal-link","Check All Year Calendar", "{{ site.baseurl }}/seasir/naha/cal/");
</script>

