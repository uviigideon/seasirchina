---
layout: seasir-booking
css: seasir
lang: en
permalink: /seasir/naha/full/book/

---
<h1 style="margin-top:0;padding-top:10px">Marine House SEASIR NAHA Booking Form</h1>
<span class="hl-red">Please fill in the form in alphabet</span>
<form action="/postmail/" method="post" novalidate>
<input type="hidden" name="subject" value="Booking For NAHA">
<!-- ((( contact -->    
<fieldset name="contact">
  <legend>Guest Contact</legend>
  <label for="email">E-mail</label>
  <input id="email" size="50" type="email" required="required" autocomplete="on" name="Guest E-mail"><br>
  <span class="hl-red">Please fill right E-mail that we can contact with you</span><br>
  <input id="open-rest" type="button" value="Continue">
</fieldset>
<!-- ))) contact -->   
<div id="rest" style="display:none;">
<!-- ((( guest-information -->    
<fieldset id="guest-information" name="guest-information">
  <legend>Guest Information</legend>
  <label for="name" required="required" autocomplete="on" >Name</label>
  <input type="text" id="name" name="name">
  <span class="comment">(English name same as in PASSPORT)</span><br>
  <label for="nationality">Nationality</label>
  <input type="text" id="nationality" name="nationality"><br>
  <label for="mobile">Mobile Phone</label>
  <input type="text" id="mobile" name="mobile" value="(+)"><br>
  <label >Date of Trip</label>
  <input type="text" class="date-of-trip" name="Date of Trip-1">
  <input id="add-another-day" type="button" value="Add Another Day">
</fieldset>
<!-- ))) guest-information -->    
<!-- ((( intro and snorkeling -->    
<fieldset id="IDV-SNK" name="IDV-SNK">
  <legend>KERAMA ISLAND - Introductory Diving (IDV) & Snorkeling (SNK) Package Booking</legend>
  <table class="priceT">
<tr>
  <th>Fill in Name</th>
  <th>Age</th>
  <th>Check</th>
  <th colspan="3">For equipement rental</th>
</tr>
<tr id="addNewType1">
  <td colspan="6"><input type="button" value="Add A Line"></td>
</tr>
  </table>
</fieldset>
<!-- ))) intro and snorkeling -->    
<!-- ((( dive -->    
<fieldset id="FDV-RD" name="FDV-RD">
<legend>KERAMA ISLAND - Leisure Diving (FDV) & Refresher Diving Package (RD) Booking</legend>
<table class="priceT">
<tr>
  <th>Fill in Name</th>
  <th>Age</th>
  <th style="width:100px">Type of diving</th>
  <th style="white-space: nowrap;">Cert. level</th>
  <th style="white-space: nowrap;">Total dives</th>
  <th style="width:110px">Date last dive</th>
  <th colspan="3" style="width:310px">Equipment arrangement for Leisure diving package & Refresher diving Package only</th>
</tr>
<tr id="addNewType2">
  <td colspan="9"><input type="button" value="Add A Line"></td>
</tr>
</table>
</fieldset>
<!-- ))) dive -->    
<!-- ((( Transportation -->    
<fieldset name="transportation">
  <legend>Transportation / Hotel Transfer</legend>
  <label>Do you need Hotel Transfer? (NAHA city area only)</label>
  <label>Yes</label>
  <input type="radio" name="need-transfer" value="yes" checked>/
  <label>No</label>
  <input type="radio" name="need-transfer" value="no">
  <br><span class="hl-red">Dear Guest, whether you need Hotel Transfer or not. We may need to contact you for any reason related to weather, please provide us your Hotel or any accomodation information in Okinawa</span>
  <div id="transfer-detail">
    <label>Hotel Name</label>
    <input type="text" name="hotel-name"><br>
    <label>Hotel Telephone no.</label>
    <input type="text" name="hotel-tel"><br>
    <label>Name use to Check in Hotel</label>
    <input type="text" name="name-hotel-checkin"><br>
    <label>Hotel Pick-Up time</label>
    <span>Hotel pick up time message will send to guest room a day before around 18:00</span><br>
  </div>
  <h3>For own transportation</h3><p>Please key in this phone number for car NAVI system <strong>098 869 6329</strong> or this <strong>MAP CODE - 33246627*42</strong><br><span class="hl-red">Note * For own transport please be at our SEASIR NAHA before 08:00. We do provide FREE car parking space.</span></p>
</fieldset>
<!-- ))) Transportation -->    
<!-- ((( comment -->    
<fieldset name="comment">
  <legend>Comment</legend>
  <textarea name="comment" rows="6" cols="110"></textarea>
</fieldset>
<!-- ))) contact -->   
{% include seasir-booking-argument-en.html %}
</div>
<input type="hidden" id="rtnurl" name="rtnurl" value="{{site.baseurl}}/seasir/book/thx/" />
<input style="width:100px;" type="submit" disabled="true" >
</form>
<br />
{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/bookform.js"></script>
<script>
$(function() {
    var GUEST = window.GUEST;
    GUEST.height="Height";
    GUEST.weight="Weight";
    GUEST.foot="Foot size";
    GUEST.trans1='For own transportation';
    GUEST.trans2='Please key in this phone number for car NAVI system <strong>098 869 6329</strong> or this <strong>MAP CODE - 33246627*42</strong><br><span class="hl-red">Note * For own transport please be at our SEASIR NAHA before 08:00. We do provide FREE car parking space.</span>';
    GUEST.init();
});
</script>

