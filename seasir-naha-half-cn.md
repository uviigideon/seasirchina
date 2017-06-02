---
layout: page
css: seasir
lang: cn
permalink: /seasir/naha/half/

---
<h1>SEASIR那霸 半日往返庆伊濑岛（庆良间诸岛）体验潜水和浮潜之旅</h1>
<!-- ((( kerama intro -->
{% include seasir-head-img-3.html imgs=site.data.seasir.naha-half.chibishi %}
<br />

庆良间诸岛是日本的国立公园，因澄澈湛蓝的海水以及五彩斑斓的珊瑚鱼群而闻名于世，半天娱乐休闲行程的必去之处。在冲绳，绝不应该错过半天的庆良间诸岛纯美体验之旅。

在冲绳最好的潜水季节，SEASIR为您提供半天往返庆良间诸岛的体验潜水和浮潜套餐活动。从SEASIR那霸店附近的港口出发约30分钟可到达潜点。那霸市内酒店免费接送，方便快捷，让您轻松享受庆良间诸岛的魅力。详情如下。

<!-- ))) kerama intro -->
<br />
<h2>行程安排</h2>
<table class="priceT">
  <tr><th>上午行程</th><th>下午行程</th><th class="c">详细资讯</th></tr>
  <tr><td>08:00</td><td>13:00</td><td>那霸市内酒店接送</td></tr>
  <tr><td>08:30</td><td>13:30</td><td>信息登记和器材确认准备</td></tr>
  <tr><td>09:00</td><td>14:00</td><td>出发去庆良间诸岛</td></tr>
  <tr><td>09:30</td><td>14:30</td><td>在庆良间诸岛享受体验潜水或浮潜</td></tr>
  <tr><td>11:30</td><td>16:30</td><td>返航回到那霸</td></tr>
  <tr><td>12:00</td><td>17:00</td><td>送回至那霸市内酒店</td></tr>
</table>

<h2>套餐价格和详情</h2>
<table class="priceT">
  <tr><th width="190"></th><th>10月 - 6月</th><th>7月 - 9月</th><th class="c">价格包含</th></tr>
  <tr><td>浮潜 – 成人</td>
{% assign snorkeling = site.data.seasir.naha-half.snorkeling %}
    <td>JPY <span class="money">{{ snorkeling.price.adult }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.adult | plus: snorkeling.price.peak-plus }}</span></td>
<td rowspan="2">浮潜器材, 冷热饮品, 保险, 1条浴巾, 那霸市酒店接送</td></tr>
  <tr><td>浮潜 – 小孩 (6~12 岁)<br>(age 6 to 12)</td>
    <td>JPY <span class="money">{{ snorkeling.price.child }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.child | plus: snorkeling.price.peak-plus }}</span></td>
</tr>
  <tr><td>体验潜水 (10 岁以上)</td>
{% assign intro = site.data.seasir.naha-half.intro %}
    <td>JPY <span class="money">{{ intro.price.normal }}</span></td>
    <td>JPY <span class="money">{{ intro.price.normal | plus: intro.price.peak-plus }}</span></td>
<td>体验潜水1次（时长约20分钟），附加浮潜</td></tr>
</table>
<h3 class="hl-red">备注</h3>
<p class="hl-red">活动结束后需休息18小时以上，方可搭乘飞机。</p>

{% include seasir-naha-to-make-booking-cn.html link="/naha/half/book" deposit="3000"%}

{% include seasir-naha-location-cn.html %}

{% include seasir-contact-cn.html %}

{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/cal.js"></script>

