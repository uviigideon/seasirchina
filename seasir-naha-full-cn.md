---
layout: page
css: seasir
lang: cn
permalink: /seasir/naha/full/

---
<h1>SEASIR 那霸 一日往返庆良间诸岛潜水和浮潜之旅</h1>
<!-- ((( kerama intro -->
{% include seasir-head-img.html imgs=site.data.seasir.naha.kerama %}
<h2>在庆良间诸岛的潜水和浮潜</h2>
<p>庆良间诸岛是冲绳著名的潜水和浮潜胜地。在庆良间诸岛周围有超过 50个潜水地点, 围绕着珊瑚礁鱼群和独特的海景。在正常的海况条件下，庆良间诸岛的能见度可达20-50米。从七月到九月期间，几乎所有的潜水地点都充满着丰富的海洋生物，如石斑、狮子鱼、unicorn surgeon fish以及多种海兔。以下是推荐的潜水地点: TWIN ROCK, KAMIGUSUKU, NAKA CHINSHI, TAKA CHINSHI, NOZAKI, UGAN, JITSURU SENTAN, UNSE, UNCHIZAN, TONAKI (blue Corner), TONAKI (Blue Hole), KUBA MINAMI, SAND TRIANGLE, KUBA NISHI, BURI JIMA, SIMOZONE and KITA HIDAJI。</p>
<!-- ))) kerama intro -->
<br />
<!-- ((( naha team intro -->
{% include seasir-head-img.html imgs=site.data.seasir.naha.team %}
<h2>SEASIR 那霸团队与设备</h2>
<p>
Marine House SEASIR 那霸店成立于1993年，是PADI五星级潜水中心及五星级教练发展中心。一共有50位全职潜水指导员及四艘专门针对潜水而设计的潜水船<span class="hl-red">LOVE、LUCKY、LINE</span>和<span class="hl-red">LAGOON</span>。每艘船不但可容纳40位装备齐全的潜水员，而且船速为冲绳潜水船中之最。船上设有卫生间、淋浴间及更衣间，更备有冷热茶饮及干净的毛巾供潜水员使用。Marine House SEASIR 那霸店为满足外国客人需求，提供英语、汉语及粤语服务。
</p>
<!-- ))) naha team intro -->
<!-- ((( package Leisure Diving -->
<a id="leisure"></a>
<div class="packages">
<h2>休闲潜水之旅</h2>
<h3 class="h3-p">休闲潜水之旅是专门为由潜水执照的潜水员准备的海洋探索之旅。费用包含完整的装备和两个气瓶，每日前往庆良间诸岛的三个不同潜点，您可选择在其中两个潜点下潜，也可选择一天三潜。具体行程和淡旺季价格请参考详细咨询中的价目表。</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.leisure.imgs %}

<h3 class="hl-red">备注</h3>
<ol>
  <li class="hl-red">如果您超过12个月未参加潜水并且潜水总次数少于30次，请您参加复习潜水。</li>
  <li class="hl-red">活动结束后需休息18小时以上，方可搭乘飞机。</li>
</ol>
<div class="detail-on-demand">
<div class="pkg-inc">
  <h3>价格包含</h3>
  <ul class="pkg-inc-ul">
<li>全套潜水装备</li>
<li>日式便当</li>
<li>冷热茶饮及味噌汤</li>
<li>毛巾</li>
<li>保险</li>
<li>酒店接送 (那霸市內来回)</li>
  </ul>
</div>
<div class="pkg-schedule">
  <h3>每日庆良间诸岛往返行程</h3>
  <ul class="pkg-inc-ul">
<li>07:30	--	酒店接送 (限那霸市內)</li>			 
<li>08:30	--  确认装备，乘船登记，寄放贵重物品</li>	 
<li>09:00	--	出发前往庆良间诸岛</li>				
<li>10:00	--	第一潜, 第二潜 (或浮潜)</li>			
<li>13:00	--	午餐</li>				
<li>14:00	--	第三潜 (或浮潜)</li>				
<li>16:00	--	返航回那霸</li>			
<li>17:00	--	酒店接送 (限那霸市內)</li>	
  </ul>
</div>
<h3>休闲潜水淡旺季价目表</h3>
<table class="priceT">
  <tr><th></th><th>淡季</th><th>平时</th><th>旺季</th></tr>
<tr><th>2 潜</th>
{% assign leisure = site.data.seasir.naha.leisure %}
<td>JPY <span class="money">{{ leisure.price.two.low }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak }}</span></td>
</tr>
<tr><th>3 潜</th>
<td>JPY <span class="money">{{ leisure.price.two.low | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak | plus: leisure.price.plus }}</span></td>
</tr>
</table>
<h3>休闲潜水自备装备淡旺季价目表</h3>
<table class="priceT">
<tr><th></th><th>淡季</th><th>平时</th><th>旺季</th></tr>
<tr><th>2 潜</th>
{% assign equip = site.data.seasir.naha.equip %}
<td>JPY <span class="money">{{ leisure.price.two.low | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak | minus: equip.full }}</span></td>
</tr>
<tr><th>3 潜</th>
<td>JPY <span class="money">{{ leisure.price.two.low | minus: equip.full | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal | minus: equip.full | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak | minus: equip.full | plus: leisure.price.plus }}</span></td>
</tr>
</table>
<div>※ 一日最少潜水次数为两次，您可以在船上直接与潜导要求进行第三次潜水。</div>
<!-- scuba equipt rental ((( -->
<h3>潜水器材租用</h3>
<table class="priceT">
  <tr><th style="width:180px">器材租用</th><th style="width:110px">价格/每日</th><th>详细资讯</th></tr>
  <tr><td>全套器材</td><td>JPY <span class="money">{{ equip.full }}</span></td><td>BCD, Regulator, 湿式潜水衣, 潜水电脑表, 面镜, 呼叫管, 套鞋, 蛙鞋 (Open Heel)</td></tr>
  <tr><td>重器材 (每样)</td><td>JPY <span class="money">{{ equip.scuba }}</span></td><td>BCD, Regulator, 湿式潜水衣, 潜水电脑表</td></tr>
  <tr><td>轻器材 (每样)</td><td>JPY <span class="money">{{ equip.snorkeling }}</span></td><td>面镜, 呼吸管, 套鞋, 蛙鞋 (Open Heel)</td></tr>
  <tr><td>潜水电脑表</td><td>JPY <span class="money">{{ equip.dive-com }}</span></td><td></td></tr>
  <tr><td>防水相机</td><td>JPY <span class="money">{{ equip.camera }}</span></td><td>相机丶含防水壳</td></tr>
  <tr><td>SD记忆卡</td><td>JPY <span class="money">{{ equip.sd }}</span></td><td>2G</td></tr>
  <tr><td>高氧气瓶 (每瓶)</td><td>JPY <span class="money">{{ equip.nitrox }}</span></td><td></td></tr>
</table>
<!-- scuba equipt rental ))) -->

{% include seasir-cal.html low="淡季" normal="平时" peak="旺季" %}

<br />
{% include seasir-naha-to-make-booking-cn.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#leisure" class="see-more-detail">详细资讯</a>
</div>
<!-- ))) package Leisure Diving -->
<!-- ((( package Introductory -->
<a id="intro"></a>
<div class="packages">
<h2>体验潜水之旅</h2>
<h3 class="h3-p">未持有潜水执照的客人能够通过参加体验潜水来感受庆良间诸岛的海底魅力。该套餐只包含一次潜水，增加潜水次数需增加费用，请和教练商量。一天之内您最多可以体验三次潜水，休闲时分可免费浮潜，感受被海洋、热带鱼群和珊瑚礁围绕的奇妙体验。</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.intro.imgs %}

<h3 class="hl-red">备注</h3>
<p class="hl-red">活动结束后需休息18小时以上，方可搭乘飞机。</p>
<div class="detail-on-demand">
<div class="pkg-inc">
<h3>价格包含</h3>
<ul class="pkg-inc-ul">
<li>全套潜水装备</li>
<li>日式便当</li>
<li>冷热茶饮及味噌汤</li>
<li>毛巾</li>
<li>保险</li>
<li>酒店接送 (那霸市內来回)</li>
</ul>
</div>
<div class="pkg-schedule">
<h3>每日庆良间诸岛往返行程</h3>
<ul class="pkg-inc-ul">
<li>07:30	--	酒店接送 (限那霸市內)</li>			 
<li>08:30	--  确认装备，乘船登记，寄放贵重物品</li>	 
<li>09:00	--	出发前往庆良间诸岛</li>				
<li>10:00	--	浮潜</li>			
<li>11:00	--	体验潜水</li>			
<li>13:00	--	午餐</li>				
<li>14:00	--	浮潜或选择第二次体验潜水 (需额外收费) </li>				
<li>16:00	--	返航回那霸</li>			
<li>17:00	--	酒店接送 (限那霸市內)</li>	
</ul>
</div>
<h3>体验潜水淡旺季价目表</h3>
<table class="priceT">
  <tr><th></th><th>10月 - 6月</th><th>7月 - 9月</th></tr>
{% assign intro = site.data.seasir.naha.intro %}
  <tr><th>体验潜水 - 1 潜</th>
    <td>JPY <span class="money">{{ intro.price.one }}</span></td>
    <td>JPY <span class="money">{{ intro.price.one | plus: intro.price.peak-plus }}</span></td>
  </tr>
  <tr><th>体验潜水 - 2 潜</th>
    <td>JPY <span class="money">{{ intro.price.two }}</span></td>
    <td>JPY <span class="money">{{ intro.price.two | plus: intro.price.peak-plus }}</span></td>
  </tr>
  <tr><th>体验潜水 - 3 潜</th>
    <td>JPY <span class="money">{{ intro.price.three }}</span></td>
    <td>JPY <span class="money">{{ intro.price.three | plus: intro.price.peak-plus }}</span></td>
  </tr>
</table>
<div>※ 一日最少潜水次数为一次，您可以在船上直接与潜导要求进行第二次、第三次潜水。</div>

<br />
{% include seasir-naha-to-make-booking-cn.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#intro" class="see-more-detail">详细资讯</a>
</div>
<!-- ))) package Intro Diving -->
<!-- ((( Snorkeling -->
<a id="snorkeling"></a>
<div class="packages">
<h2>浮潜之旅</h2>
<h3 class="h3-p">浮潜是最常见的水上活动。浮潜于庆良间诸岛，您将有机会看到各种各样美丽的珊瑚礁、海龟和多种热带鱼。我们会为所有客人提供教学，指导客人正确使用面镜、呼吸管和蛙鞋。</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.snorkeling.imgs %}

<div class="detail-on-demand">
<div class="pkg-inc">
<h3>价格包含</h3>
<ul class="pkg-inc-ul">
<li>浮潜装备</li>
<li>日式便当</li>
<li>冷热茶饮及味噌汤</li>
<li>毛巾</li>
<li>保险</li>
<li>酒店接送 (那霸市內来回)</li>
  </ul>
</div>
<div class="pkg-schedule">
  <h3>每日庆良间诸岛往返行程</h3>
  <ul class="pkg-inc-ul">
<li>07:30	--	酒店接送 (限那霸市內)</li>			 
<li>08:30	--  确认装备，乘船登记，寄放贵重物品</li>	 
<li>09:00	--	出发前往庆良间诸岛</li>				
<li>10:00	--	浮潜</li>			
<li>13:00	--	午餐</li>				
<li>14:00	--	浮潜</li>			
<li>16:00	--	返航回那霸</li>			
<li>17:00	--	酒店接送 (限那霸市內)</li>	
  </ul>
</div>
<h3>价格</h3>
<table class="priceT">
  <tr><th></th><th>10月 - 6月</th><th>7月 - 9月</th></tr>
  <tr><th>浮潜 - 成人</th>
{% assign snorkeling = site.data.seasir.naha.snorkeling %}
    <td>JPY <span class="money">{{ snorkeling.price.adult }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.adult | plus: intro.price.peak-plus }}</span></td>
  </tr>
  <tr><th>浮潜 - 小孩 (6~12 岁) </th>
    <td>JPY <span class="money">{{ snorkeling.price.child }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.child | plus: intro.price.peak-plus }}</span></td>
</tr>
</table>

<br />
{% include seasir-naha-to-make-booking-cn.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#snorkeling" class="see-more-detail">详细资讯</a>
</div>
<!-- ))) package Intro Diving -->
<!-- ((( package Refresher-->
<a id="refresher"></a>
<div class="packages">
<h2>复习潜水课程</h2>
<h3 class="h3-p">专为持有潜水证但已超过12个月并且潜水总次数少于30次的潜水员所设计的课程。参加此课程可以让您复习之前学习过的潜水知识和潜水技能。</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.leisure.imgs %}

<h3 class="hl-red">备注</h3>
<p class="hl-red">活动结束后需休息18小时以上，方可搭乘飞机。</p>
<div class="detail-on-demand">
<div class="pkg-inc">
  <h3>价格包含</h3>
  <ul class="pkg-inc-ul">
<li>全套潜水装备</li>
<li>日式便当</li>
<li>冷热茶饮及味噌汤</li>
<li>毛巾</li>
<li>保险</li>
<li>酒店接送 (那霸市內来回)</li>
  </ul>
</div>
<div class="pkg-schedule">
<h3>每日庆良间诸岛往返行程</h3>
  <ul class="pkg-inc-ul">
<li>07:30	--	酒店接送 (限那霸市內)</li>			 
<li>08:30	--  确认装备，乘船登记，寄放贵重物品</li>	 
<li>09:00	--	出发前往庆良间诸岛</li>				
<li>10:00	--	知识复习及复习潜水第一潜</li>			
<li>13:00	--	午餐</li>				
<li>14:00	--	复习潜水第二潜</li>				
<li>16:00	--	返航回那霸</li>			
<li>17:00	--	酒店接送 (限那霸市內)</li>	
  </ul>
</div>
<h3>价格</h3>
<table class="priceT">
  <tr><th></th><th>淡季</th><th>平时</th><th>旺季</th></tr>
  <tr><th>2 潜 (含全套租借器材)</th>
{% assign refresh = site.data.seasir.naha.refresh %}
<td>JPY <span class="money">{{ refresh.price.two.low }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.normal }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.peak }}</span></td>
  </tr>
  <tr><th>2 潜 (不含租借器材)</th>
<td>JPY <span class="money">{{ refresh.price.two.low | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.normal | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.peak | minus: equip.full }}</span></td>
  </tr>
</table>
<div>※ 如希望进行第三次潜水，需额外支付4,320日元。只需在船上与潜导进行预约，不得提前预约。</div>
<!-- scuba equipt rental ((( -->
<h3>潜水器材租用</h3>
<table class="priceT">
  <tr><th style="width:180px">器材租用</th><th style="width:110px">价格/每日</th><th>详细资讯</th></tr>
  <tr><td>全套器材</td><td>JPY <span class="money">{{ equip.full }}</span></td><td>BCD, Regulator, 湿式潜水衣, 潜水电脑表, 面镜, 呼叫管, 套鞋, 蛙鞋 (Open Heel)</td></tr>
  <tr><td>重器材 (每样)</td><td>JPY <span class="money">{{ equip.scuba }}</span></td><td>BCD, Regulator, 湿式潜水衣, 潜水电脑表</td></tr>
  <tr><td>轻器材 (每样)</td><td>JPY <span class="money">{{ equip.snorkeling }}</span></td><td>面镜, 呼吸管, 套鞋, 蛙鞋 (Open Heel)</td></tr>
  <tr><td>潜水电脑表</td><td>JPY <span class="money">{{ equip.dive-com }}</span></td><td></td></tr>
  <tr><td>防水相机</td><td>JPY <span class="money">{{ equip.camera }}</span></td><td>相机丶含防水壳</td></tr>
  <tr><td>SD记忆卡</td><td>JPY <span class="money">{{ equip.sd }}</span></td><td>2G</td></tr>
  <tr><td>高氧气瓶 (每瓶)</td><td>JPY <span class="money">{{ equip.nitrox }}</span></td><td></td></tr>
</table>
<!-- scuba equipt rental ))) -->

{% include seasir-cal.html low="Low Season" normal="Normal Season" peak="Peak Season" %}

<br />
{% include seasir-naha-to-make-booking-cn.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#refresher" class="see-more-detail">详细资讯</a>
</div>
<!-- ))) package Refresher Diving -->

{% include seasir-naha-location-cn.html %}

{% include seasir-contact-cn.html %}

{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/cal.js"></script>
<script>
    $(".detail-on-demand").hide();
    $(".see-more-detail").click(function(){
        $(this).parent().find(".detail-on-demand").toggle("blind");
        if ($(this).data("toggleText") === undefined) 
            $(this).data("toggleText", "关闭详细资讯");
        var tmp = $(this).html();
        $(this).html($(this).data("toggleText"));
        $(this).data("toggleText", tmp);
    });
    window.calFactory.gen3MonthCal(".cal");
    window.calFactory.genCalLink(".cal-link","看全年淡旺季月历", "{% if site.active_lang == site.default_lang %}{{site.baseurl}}{% else %}{{ site.baseurl }}/{{ site.active_lang }}{% endif %}/seasir/naha/cal/");
</script>

