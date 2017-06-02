---
layout: seasir-booking
css: seasir
lang: en
permalink: /seasir/aka/book/

---
<h1>SEASIR AKA Island Booking Form</h1>
<p><b>Dear Guest,</b><br> 
            Each booking form is for 1 room purpose, please fill in detail of the guest which are in the same room only and the activity date, we need all this information for arrangement before your arrival. <span class="hl-red">Use a different form if you need to book more than a room</span>.</p>
<span class="hl-red">Please fill in the form in alphabet</span><br>
<form action="/postmail/" method="post" novalidate>
<input type="hidden" name="subject" value="Booking For AKA">
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
  <label >Check in date</label>
  <input type="text" class="date-of-trip" name="check in date">
  <label class="margin-left">Check out date</label>
  <input type="text" class="date-of-trip" name="check out date"><br>
  <label >Ferry arrival date</label>
  <input type="text" class="date-of-trip" name="ferry arrival date">
  <label class="margin-left" for="ferry-arrival-time">time</label>
  <input type="text" id="ferry-arrival-time" name="ferry arrival time" value="00:00"><br>
  <label >Ferry departure date</label>
  <input type="text" class="date-of-trip" name="ferry departure date">
  <label class="margin-left" for="ferry-departure-time">time</label>
  <input type="text" id="ferry-departure-time" name="ferry departure time" value="00:00"><br>
  <label for="type-of-room">Type of room</label>
  <select id="type-of-room" name="type of room">
<option value="1F">1F Tatami Room(sharing bathroom & Toilet)</option>
<option value="2F tatami">2F Tatami Room</option>
<option value="2F western">2F Western Bed Room</option>
<option value="3F tatami">3F Tatami Room</option>
<option value="3F western">3F Western Bed Room</option>
  </select><br>
  <label for="num-of-person-stay" style="width:200px">Number of person stay</label>
  <select size="1" id="num-of-person-stay" name="num of person stay">
<option value="1">1</option>
<option value="2" selected="selected">2</option>
<option value="3">3</option>
  </select>
</fieldset>
<!-- ))) guest-information -->    
<!-- ((( activity -->    
<fieldset id="activity" name="activity">
  <legend>Marine Activity Booking</legend>
  <table class="priceT">
<tr id="addNewType1" style="display:none">
  <td colspan="6"><input type="button" value="Add A Line"></td>
</tr>
  </table>
</fieldset>
<!-- ))) activity -->    
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
    GUEST.genType1TR = function(){
        /* ((( */
        return '<tr><td><table style="border-collapse:collapse;margin:10px 0;"><tr class="leap-3"><td width="250"><input type="hidden" name="guest-NUM" value="--------------------------------------------------">Guest Name:<select size="1" name="guest-NUM-gender"><option value="Male">MR.</option><option value="Female">MS.</option></select><input type="text" class="guest-name" name="guest-NUM-name"></td><td colspan="2" width="620">Age:<input size="1" type="text" name="guest-NUM-age"></td></tr><tr><td>Type of Activity: <select size="1" name="guest-NUM-activity"><option value="Snorkeling">Snorkeling</option><option value="intro div">Introductory Diving</option><option value="leisure-div">Leisure Diving</option><option value="ref div">Refresh Diving</option></select></td><td colspan="2">Activity date:<input type="text" class="date-of-trip" name="guest-NUM-activity-date-1"><input class="add-another-day" type="button" value="Add Another Day"></td></tr><tr><td>Diver Cert: <select size="1" name="guest-NUM-cert"><option value="None">None</option><option value="OWD">Open Water Diver</option><option value="AD">Advance Diver</option><option value="RD">Rescue Diver</option><option value="DM">Dive Master</option><option value="INS">Instructor</option></select></td><td>Date of last Dive: <input type="text" class="date-of-trip" name="guest-NUM-last-dive"></td><td>Total dives record: <input type="text" name="guest-NUM-total-dive"></td></tr><tr><td rowspan="2">Equipment Rental arrangement use</td><td colspan="2"> No Rental<input type="checkbox" name="guest-NUM-rental" value="no rental"> BCD<input type="checkbox" name="guest-NUM-rental" value="BCD"> REG<input type="checkbox" name="guest-NUM-rental" value="REG"> Wetsuite<input type="checkbox" name="guest-NUM-rental" value="Wetsuite"> Dive Com<input type="checkbox" name="guest-NUM-rental" value="Dive Com"> Mask<input type="checkbox" name="guest-NUM-rental" value="Mask"> Fins<input type="checkbox" name="guest-NUM-rental" value="Fins"> Boots<input type="checkbox" name="guest-NUM-rental" value="Boots"> Vest<input type="checkbox" name="guest-NUM-rental" value="Vest"></td></tr><tr><td colspan="2"> Height<input type="text" class="width-1" size="1" name="guest-NUM-height">cm &nbsp;&nbsp;&nbsp; Weight<input type="text" class="width-1" size="1" name="guest-NUM-weight">kg &nbsp;&nbsp;&nbsp; Foot size<input type="text" class="width-1" size="1" name="guest-NUM-foot-size">cm</td></tr></table></td></tr>';
        /* ))) */
    };
    GUEST._numInit = 3;
    GUEST.init();
});
</script>

