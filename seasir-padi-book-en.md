---
layout: seasir-booking
css: seasir
lang: en
permalink: /seasir/padi/book/

---
<h1 style="margin-top:0;padding-top:10px">PADI Scuba Diving Course Booking Form</h1>
<span class="hl-red">Please fill in the form in alphabet</span>
<form action="/postmail/" method="post" novalidate>
<input type="hidden" name="subject" value="Booking For PADI">
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
</fieldset>
<!-- ))) guest-information -->    
<!-- ((( Diver Information -->    
<fieldset id="Diver-info" name="Diver-info">
  <legend>Diver Information</legend>
  <table class="priceT">
    <tr>
      <th rowspan="2" width="200">Fill in Name</th>
      <th rowspan="2" width="50">Age</th>
      <th colspan="3" rowspan="2">For equipement rental</th>
      <th colspan="3">Diving Courses</th>
    </tr>
    <tr>
      <th width="130">Open water Diver</th>
      <th width="120">Advanced Diver</th>
      <th width="100">Rescue Diver</th>
    </tr>
    <tr id="addNewType1">
      <td colspan="8"><input type="button" value="Add A Line"></td>
    </tr>
  </table>
</fieldset>
<!-- ))) Diver Information -->    
<!-- ((( language -->    
<fieldset id="language" name="language">
  <legend>Choose your language</legend>
  <table class="priceT">
    <tr>
      <td><label for="diving-manual-lang">Which language diving manual/books do you prefer</label></td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="English">English</td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="Chinese">Chinese</td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="Japanese">Japanese</td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="Korean">Korean</td>
    </tr>
    <tr>
      <td><label for="training-lang">Which language do you prefer to conduct in your training</label></td>
      <td><input type="radio" name="training-lang" id="training-lang" value="English">English</td>
      <td><input type="radio" name="training-lang" id="training-lang" value="Chinese">Chinese</td>
      <td><input type="radio" name="training-lang" id="training-lang" value="Japanese">Japanese</td>
      <td><input type="radio" name="training-lang" id="training-lang" value="Korean">Korean</td>
    </tr>
  </table>
</fieldset>
<!-- ))) language -->    
<!-- ((( date-of-course -->    
<fieldset id="date-of-course" name="language">
  <legend>Date of Course</legend>
  <label>I would like my diving courses start on : </label>
  <input type="text" id="course-start-date" name="course-start-date" class="date-of-trip"><br>
  <h3 class="hl-red">Note</h3>
  <p class="hl-red">After scuba diving, current PADI Flying After Diving guidelines say that you should not go to altitude (fly) within 12 hours of completing a single dive or 18 hours when doing multiple dives (where possible wait 24 hours)</p>
</fieldset>
<!-- ))) date-of-course -->    
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
    <label >Check in Date</label>
    <input type="text" class="date-of-trip" name="Check in Date"><br>
    <label >Check out Date</label>
    <input type="text" class="date-of-trip" name="Check out Date"><br>
    <label>Hotel Pick-Up time</label>
    <span>Hotel pick up time message will send to guest room a day before around 18:00</span><br>
  </div>
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
<!--
$(function() {
    var GUEST = window.GUEST;
    GUEST.height="Height";
    GUEST.weight="Weight";
    GUEST.foot="Foot size";
    GUEST.genType1TR = function(){
            /* ((( */
            return '<tr><td><input type="hidden" name="guest-NUM" value="--------------------------------------------------"><select size="1" name="guest-NUM-gender"><option value="Male">MR.</option><option value="Female">MS.</option></select><input type="text" class="guest-name" name="guest-NUM-name"></td><td><input size="1" type="text" name="guest-NUM-age"></td><td><label>' + this.height + '</label><br><input class="width-1" size="1" type="text" id="guest-NUM-height" name="guest-NUM-height">cm</td><td><label>'+this.weight+'</label><br><input class="width-1" size="1" type="text" id="guest-NUM-weight" name="guest-NUM-weight">kg</td><td><label>'+this.foot+'</label><br><input size="1" class="width-1" type="text" id="guest-NUM-foot-size" name="guest-NUM-foot-size">cm</td><td><input type="checkbox" id="guest-NUM-diving-courses" name="guest-NUM-diving-courses" value="Open water Diver">3 full days</td><td><input type="checkbox" id="guest-NUM-diving-courses" name="guest-NUM-diving-courses" value="Advanced Diver">2 full days</td><td><input type="checkbox" id="guest-NUM-diving-courses" name="guest-NUM-diving-courses" value="Rescue Diver">2 full days</td></tr>'
;
            /* ))) */

    };
    GUEST.init();
});
-->
</script>

