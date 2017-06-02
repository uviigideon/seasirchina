---
layout: page
css: seasir
lang: en
permalink: /seasir/naha/full/

---
<h1>SEASIR Naha Full Day Diving and Snorkeling trip to Kerama</h1>
<!-- ((( kerama intro -->
{% include seasir-head-img.html imgs=site.data.seasir.naha.kerama %}
<h2>Diving and Snorkeling at Kerama islands</h2>
  <p>Kerama islands the famous diving and snorkeling destination in Okinawa. In Kerama islands surrounding by more than 50 diving site with full of coral fish and unique seascape. Average sea condition in Kerama islands you able to see around 20 – 50 meters distance (visibility). From July to September almost every dive sites is full of Chromis Viridis & Arrow Cardinal, other than this common marine life such as grouper, butterfly fish, unicorn surgeon fish, lion fish and variety of Nudibranch. Here are the recommended dive sites TWIN ROCK, KAMIGUSUKU, NAKA CHINSHI, TAKA CHINSHI, NOZAKI, UGAN, JITSURU SENTAN, UNSE, UNCHIZAN, TONAKI (blue Corner), TONAKI (Blue Hole), KUBA MINAMI, SAND TRIANGLE, KUBA NISHI, BURI JIMA, SIMOZONE and KITA HIDAJI.</p>
<!-- ))) kerama intro -->
<br />
<!-- ((( naha team intro -->
{% include seasir-head-img.html imgs=site.data.seasir.naha.team %}
<h2>SEASIR NAHA Dive Team and Facility</h2>
<p>
Marine House SEASIR NAHA is a PADI 5 STAR INSTRUCTOR DEVELOPMENT RESORT, been operating since 1993. Total of 50 full time Instructors running the daily operation with 4 diving boats <span class="hl-red">LOVE, LUCKY, LINE</span> and <span class="hl-red">LAGOON</span> that special designed for 40 fully equipped divers in each boat and is the fastest dive boat in Okinawa, with toilet, fresh water and shower facilities. Marine House SEASIR NAHA provides English, Mandarin and Cantonese speaking instructor for foreigner guest. 
</p>
<!-- ))) naha team intro -->
<!-- ((( package Leisure Diving -->
<a id="leisure"></a>
<div class="packages">
<h2>Leisure Diving Package</h2>
<h3 class="h3-p">This leisure diving package is for certified diver, package come with full equipment and 2 tank dives. Our daily trip to Kerama islands we do stop at 3 different sites, diver can choose to dive at any of the 2 dive site unless you are planning 3 dives on the day. For 3 dives package and season price please refer to package price table at below.</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.leisure.imgs %}

<h3 class="hl-red">Note</h3>
<ol>
  <li class="hl-red">Divers who have not been diving for more than 12 months and less than 30 logged dive is required to take Refresher Dive Course Package. </li>
  <li class="hl-red">Please make sure you have more than 18 hours resting hour before your flight. </li>
</ol>
<div class="detail-on-demand">
<div class="pkg-inc">
  <h3>Package includes</h3>
  <ul class="pkg-inc-ul">
<li>Full scuba equipment</li>
<li>Japanese Lunch Box</li>
<li>Drinking water &amp; Japanese miso soup</li>
<li>Towel</li>
<li>Insurance</li>
<li>Hotel transfer (round-trip Naha area only)</li>
  </ul>
</div>
<div class="pkg-schedule">
  <h3>Kerama Daily Trip Schedule</h3>
  <ul class="pkg-inc-ul">
<li>07:30	--	Hotel transfer (Naha area only)</li>			 
<li>08:30	--	Guest registration and equipment check</li>	 
<li>09:00	--	Depart to KERAMA Islands</li>				
<li>10:00	--	1st dive and 2nd dive (or snorkeling)</li>			
<li>13:00	--	Lunch</li>				
<li>14:00	--	3rd dive (or snorkeling)</li>				
<li>16:00	--	Depart back to NAHA	</li>			
<li>17:00	--	Transfer back to Hotel (Naha area only)</li>	
  </ul>
</div>
<h3>Season Price for leisure Diving Package</h3>
<table class="priceT">
  <tr><th></th><th>Low Season</th><th>Normal Season</th><th>Peak Season</th></tr>
<tr><th>2 Dives</th>
{% assign leisure = site.data.seasir.naha.leisure %}
<td>JPY <span class="money">{{ leisure.price.two.low }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak }}</span></td>
</tr>
<tr><th>3 Dives</th>
<td>JPY <span class="money">{{ leisure.price.two.low | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak | plus: leisure.price.plus }}</span></td>
</tr>
</table>
<h3>Season Price for leisure Diving With Own Diving Equipments</h3>
<table class="priceT">
  <tr><th></th><th>Low Season</th><th>Normal Season</th><th>Peak Season</th></tr>
  <tr><th>2 Dives</th>
{% assign equip = site.data.seasir.naha.equip %}
<td>JPY <span class="money">{{ leisure.price.two.low | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak | minus: equip.full }}</span></td>
</tr>
  <tr><th>3 Dives</th>
<td>JPY <span class="money">{{ leisure.price.two.low | minus: equip.full | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.normal | minus: equip.full | plus: leisure.price.plus }}</span></td>
<td>JPY <span class="money">{{ leisure.price.two.peak | minus: equip.full | plus: leisure.price.plus }}</span></td>
</tr>
</table>
<div>※ Up from 2 dives. The 3rd dive request on boat is available.</div>
<!-- scuba equipt rental ((( -->
<h3>Scuba Equipment Rental</h3>
<table class="priceT">
  <tr><th style="width:230px">Equipment Rental</th><th style="width:85px">Price/Daily</th><th>Detail</th></tr>
  <tr><td>Full Scuba Equipment</td><td>JPY <span class="money">{{ equip.full }}</span></td><td>BCD, Regulator, Wetsuit, Dive Computer, Mask, Snorkel Tube, Bootie, Fins (Open Heel)</td></tr>
  <tr><td>Scuba Equipment (Each Item)</td><td>JPY <span class="money">{{ equip.scuba }}</span></td><td>BCD, Regulator, Wetsuit, Dive Computer</td></tr>
  <tr><td>Snorkeling Equipment (Each Item)</td><td>JPY <span class="money">{{ equip.snorkeling }}</span></td><td>Mask, Snorkel Tube, Bootie, Fins (Open Heel)</td></tr>
  <tr><td>Dive Computer</td><td>JPY <span class="money">{{ equip.dive-com }}</span></td><td></td></tr>
  <tr><td>Underwater Camera</td><td>JPY <span class="money">{{ equip.camera }}</span></td><td>Camera with waterproof case</td></tr>
  <tr><td>SD Card</td><td>JPY <span class="money">{{ equip.sd }}</span></td><td>2G</td></tr>
  <tr><td>Nitrox Tank (Each Tank)</td><td>JPY <span class="money">{{ equip.nitrox }}</span></td><td></td></tr>
</table>
<!-- scuba equipt rental ))) -->

{% include seasir-cal.html low="Low Season" normal="Normal Season" peak="Peak Season" %}

<br />
{% include seasir-naha-to-make-booking-en.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#leisure" class="see-more-detail">See More Detail and Make Booking</a>
</div>
<!-- ))) package Leisure Diving -->
<!-- ((( package Introductory -->
<a id="intro"></a>
<div class="packages">
  <h2>Introductory Diving Package</h2>
  <h3 class="h3-p">For non-certified, first time diver are able to experience Kerama Islands underwater scenery by participating Discover scuba or commonly known as Introductory Dive. This Package come with 1 dives and you can enjoy snorkeling around during you free time, Snorkeling gear is included in the package.</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.intro.imgs %}

<h3 class="hl-red">Note</h3>
<p class="hl-red">Please make sure you have more than 18 hours resting hour before your flight. </p>
<div class="detail-on-demand">
<div class="pkg-inc">
<h3>Package includes</h3>
<ul class="pkg-inc-ul">
  <li>Full scuba equipment</li>
  <li>Japanese Lunch Box</li>
  <li>Drinking water &amp; Japanese miso soup</li>
  <li>Towel</li>
  <li>Insurance</li>
  <li>Hotel transfer (round-trip Naha area only)</li>
</ul>
</div>
<div class="pkg-schedule">
<h3>Kerama Daily Trip Schedule</h3>
<ul class="pkg-inc-ul">
  <li>07:30	--	Hotel transfer (Naha area only)</li>			 
  <li>08:30	--	Guest registration and equipment check</li>	 
  <li>09:00	--	Depart to KERAMA Islands</li>				
  <li>10:00	--	snorkeling</li>			
  <li>11:00	--	Intro diving</li>			
  <li>13:00	--	Lunch</li>				
  <li>14:00	--	snorkeling or optional 2nd dive</li>				
  <li>16:00	--	Depart back to NAHA	</li>			
  <li>17:00	--	Transfer back to Hotel (Naha area only)</li>	
</ul>
</div>
<h3>Introductory Diving Package Price</h3>
<table class="priceT">
  <tr><th></th><th>October - June</th><th>July - September</th></tr>
{% assign intro = site.data.seasir.naha.intro %}
  <tr><th>Intro Diving - 1 Dives</th>
    <td>JPY <span class="money">{{ intro.price.one }}</span></td>
    <td>JPY <span class="money">{{ intro.price.one | plus: intro.price.peak-plus }}</span></td>
  </tr>
  <tr><th>Intro Diving - 2 Dives</th>
    <td>JPY <span class="money">{{ intro.price.two }}</span></td>
    <td>JPY <span class="money">{{ intro.price.two | plus: intro.price.peak-plus }}</span></td>
  </tr>
  <tr><th>Intro Diving - 3 Dives</th>
    <td>JPY <span class="money">{{ intro.price.three }}</span></td>
    <td>JPY <span class="money">{{ intro.price.three | plus: intro.price.peak-plus }}</span></td>
  </tr>
</table>
<div>※ Up from 1 dive, the 2ed and 3rd dive request on boat is available.</div>

<br />
{% include seasir-naha-to-make-booking-en.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#intro" class="see-more-detail">See More Detail and Make Booking</a>
</div>
<!-- ))) package Intro Diving -->
<!-- ((( Snorkeling -->
<a id="snorkeling"></a>
<div class="packages">
<h2>Snorkeling Package</h2>
<h3 class="h3-p">One of the most common water activity, opportunity to snorkeling around Kerama islands where you get the chance to see beautiful coral form, sea turtle and coral fish. We provide 10 mins lesson for all guests how to use mask, snorkel tube and Fins in the proper way.</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.snorkeling.imgs %}

<div class="detail-on-demand">
<div class="pkg-inc">
<h3>Package includes</h3>
<ul class="pkg-inc-ul">
<li>Snorkeling Set</li>
<li>Japanese Lunch Box</li>
<li>Drinking water &amp; Japanese miso soup</li>
<li>Towel</li>
<li>Insurance</li>
<li>Hotel transfer (round-trip Naha area only)</li>
  </ul>
</div>
<div class="pkg-schedule">
  <h3>Kerama Daily Trip Schedule</h3>
  <ul class="pkg-inc-ul">
<li>07:30	--	Hotel transfer (Naha area only)</li>			 
<li>08:30	--	Guest registration and equipment check</li>	 
<li>09:00	--	Depart to KERAMA Islands</li>				
<li>10:00	--	snorkeling</li>			
<li>13:00	--	Lunch</li>				
<li>14:00	--	snorkeling</li>				
<li>16:00	--	Depart back to NAHA	</li>			
<li>17:00	--	Transfer back to Hotel (Naha area only)</li>	
  </ul>
</div>
<h3>Prices</h3>
<table class="priceT">
  <tr><th></th><th>October - June</th><th>July - September</th></tr>
  <tr><th>Snorkeling - Adult</th>
{% assign snorkeling = site.data.seasir.naha.snorkeling %}
    <td>JPY <span class="money">{{ snorkeling.price.adult }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.adult | plus: intro.price.peak-plus }}</span></td>
  </tr>
  <tr><th>Snorkeling - Child (age 6 to 12)</th>
    <td>JPY <span class="money">{{ snorkeling.price.child }}</span></td>
    <td>JPY <span class="money">{{ snorkeling.price.child | plus: intro.price.peak-plus }}</span></td>
</tr>
</table>

<br />
{% include seasir-naha-to-make-booking-en.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#snorkeling" class="see-more-detail">See More Detail and Make Booking</a>
</div>
<!-- ))) package Intro Diving -->
<!-- ((( package Refresher-->
<a id="refresher"></a>
<div class="packages">
<h2>Refresher Course Dive</h2>
<h3 class="h3-p">(Theory review and underwater basic skill review by Instructor)<br>For certified diver who not been diving for past 12 months and less than 30 logged dive experience, here are the refresher course that you are recommended to participate to refresh you diving knowledge and underwater skill.</h3>

{% include seasir-program-img.html imgs=site.data.seasir.naha.leisure.imgs %}

<h3 class="hl-red">Note</h3>
<p class="hl-red">Please make sure you have more than 18 hours resting hour before your flight. </p>
<div class="detail-on-demand">
<div class="pkg-inc">
  <h3>Package includes</h3>
  <ul class="pkg-inc-ul">
<li>Full scuba equipment</li>
<li>Japanese Lunch Box</li>
<li>Drinking water &amp; Japanese miso soup</li>
<li>Towel</li>
<li>Insurance</li>
<li>Hotel transfer (round-trip Naha area only)</li>
  </ul>
</div>
<div class="pkg-schedule">
<h3>Kerama Daily Trip Schedule</h3>
  <ul class="pkg-inc-ul">
<li>07:30	--	Hotel transfer (Naha area only)</li>			 
<li>08:30	--	Guest registration and equipment check</li>	 
<li>09:00	--	Depart to KERAMA Islands</li>				
<li>10:00	--	Knowledge review and refresh dive 1</li>			
<li>13:00	--	Lunch</li>				
<li>14:00	--	refresh dive 2</li>				
<li>16:00	--	Depart back to NAHA	</li>			
<li>17:00	--	Transfer back to Hotel (Naha area only)</li>	
  </ul>
</div>
<h3>Prices</h3>
<table class="priceT">
  <tr><th></th><th>Low Season</th><th>Normal Season</th><th>Peak Season</th></tr>
  <tr><th>2 dives Package</th>
{% assign refresh = site.data.seasir.naha.refresh %}
<td>JPY <span class="money">{{ refresh.price.two.low }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.normal }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.peak }}</span></td>
  </tr>
  <tr><th>2 dives Package<br>(with own equipment)</th>
<td>JPY <span class="money">{{ refresh.price.two.low | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.normal | minus: equip.full }}</span></td>
<td>JPY <span class="money">{{ refresh.price.two.peak | minus: equip.full }}</span></td>
  </tr>
</table>
<div>※ Option 3rd dive is extra JPY4,320. Request on boat only.</div>
<!-- scuba equipt rental ((( -->
<h3>Scuba Equipment Rental</h3>
<table class="priceT">
  <tr><th style="width:230px">Equipment Rental</th><th style="width:85px">Price/Daily</th><th>Detail</th></tr>
  <tr><td>Full Scuba Equipment</td><td>JPY <span class="money">{{ equip.full }}</span></td><td>BCD, Regulator, Wetsuit, Dive Computer, Mask, Snorkel Tube, Bootie, Fins (Open Heel)</td></tr>
  <tr><td>Scuba Equipment (Each Item)</td><td>JPY <span class="money">{{ equip.scuba }}</span></td><td>BCD, Regulator, Wetsuit, Dive Computer</td></tr>
  <tr><td>Snorkeling Equipment (Each Item)</td><td>JPY <span class="money">{{ equip.snorkeling }}</span></td><td>Mask, Snorkel Tube, Bootie, Fins (Open Heel)</td></tr>
  <tr><td>Dive Computer</td><td>JPY <span class="money">{{ equip.dive-com }}</span></td><td></td></tr>
  <tr><td>Underwater Camera</td><td>JPY <span class="money">{{ equip.camera }}</span></td><td>Camera with waterproof case</td></tr>
  <tr><td>SD Card</td><td>JPY <span class="money">{{ equip.sd }}</span></td><td>2G</td></tr>
  <tr><td>Nitrox Tank (Each Tank)</td><td>JPY <span class="money">{{ equip.nitrox }}</span></td><td></td></tr>
</table>
<!-- scuba equipt rental ))) -->

{% include seasir-cal.html low="Low Season" normal="Normal Season" peak="Peak Season" %}

<br />
{% include seasir-naha-to-make-booking-en.html link="/naha/full/book" deposit="5000"%}
</div> <!--detailOnDemand-->
<a href="#refresher" class="see-more-detail">See More Detail and Make Booking</a>
</div>
<!-- ))) package Refresher Diving -->

{% include seasir-naha-location-en.html %}

{% include seasir-contact-en.html %}

{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/cal.js"></script>
<script>
    $(".detail-on-demand").hide();
    $(".see-more-detail").click(function(){
        $(this).parent().find(".detail-on-demand").toggle("blind");
        if ($(this).data("toggleText") === undefined) 
            $(this).data("toggleText", "Close Detail");
        var tmp = $(this).html();
        $(this).html($(this).data("toggleText"));
        $(this).data("toggleText", tmp);
    });
    window.calFactory.gen3MonthCal(".cal");
    window.calFactory.genCalLink(".cal-link","Check All Year Calendar", "{{ site.baseurl }}/seasir/naha/cal/");
</script>

