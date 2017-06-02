---
layout: page
css: seasir
lang: en
permalink: /seasir/naha/half/

---
<h1>SEASIR Naha Half Day Diving and Snorkeling trip to CHIBISHI (Kerama Islands)</h1>
<!-- ((( kerama intro -->
{% include seasir-head-img-3.html imgs=site.data.seasir.naha-half.chibishi %}
  <p>Kerama islands the famous diving and snorkeling destination in Okinawa. In Kerama islands surrounding by more than 50 diving site with full of coral fish and unique seascape. Average sea condition in Kerama islands you able to see around 20 – 50 meters distance (visibility). From July to September almost every dive sites is full of Chromis Viridis & Arrow Cardinal, other than this common marine life such as grouper, butterfly fish, unicorn surgeon fish, lion fish and variety of Nudibranch. Here are the recommended dive sites TWIN ROCK, KAMIGUSUKU, NAKA CHINSHI, TAKA CHINSHI, NOZAKI, UGAN, JITSURU SENTAN, UNSE, UNCHIZAN, TONAKI (blue Corner), TONAKI (Blue Hole), KUBA MINAMI, SAND TRIANGLE, KUBA NISHI, BURI JIMA, SIMOZONE and KITA HIDAJI.</p>
<!-- ))) kerama intro -->
<br />
<h2>Schedule</h2>
<table class="priceT">
  <tr><th>AM TRIP</th><th>PM TRIP</th><th class="c">Detail</th></tr>
  <tr><td>08:00</td><td>13:00</td><td>Hotel Transfer</td></tr>
  <tr><td>08:30</td><td>13:30</td><td>Registration and Equipment Preparation</td></tr>
  <tr><td>09:00</td><td>14:00</td><td>Depart to Kerama</td></tr>
  <tr><td>09:30</td><td>14:30</td><td>Snorkeling and Introductory Diving Activity</td></tr>
  <tr><td>11:30</td><td>16:30</td><td>Depart back to Naha</td></tr>
  <tr><td>12:00</td><td>17:00</td><td>Hotel Transfer Back</td></tr>
</table>
<h2>Package Price and Detail</h2>
<table class="priceT">
  <tr><th width="190"></th><th>October - June</th><th>July - September</th><th class="c">Package includes</th></tr>
  <tr><td>Snorkeling Package Adult</td>
{% assign snorkeling = site.data.seasir.naha-half.snorkeling %}
    <td>JPY <span class="money">{{ snorkeling.price.adult }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.adult | plus: snorkeling.price.peak-plus }}</span></td>
<td rowspan="2">Snorkeling equipment, drinking water, Insurance, Towel and Hotel Transfer(Naha City only)</td></tr>
  <tr><td>Snorkeling Package Child<br>(age 6 to 12)</td>
    <td>JPY <span class="money">{{ snorkeling.price.child }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.child | plus: snorkeling.price.peak-plus }}</span></td>
</tr>
  <tr><td>Introductory Diving - 1 dive<br>(age 10 and above)</td>
{% assign intro = site.data.seasir.naha-half.intro %}
    <td>JPY <span class="money">{{ intro.price.normal }}</span></td>
    <td>JPY <span class="money">{{ intro.price.normal | plus: intro.price.peak-plus }}</span></td>
<td>Same as Snorkeling Package + 1 scuba dive (20 minutes)</td></tr>
</table>
<h3 class="hl-red">Note</h3>
<p class="hl-red">Please make sure you have more than 18 hours resting hour before your flight. </p>

{% include seasir-naha-to-make-booking-en.html link="/naha/half/book" deposit="3000"%}

{% include seasir-naha-location-en.html %}

{% include seasir-contact-en.html %}

{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/cal.js"></script>

