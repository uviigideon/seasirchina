---
layout: seasir-booking
css: seasir
lang: cn
permalink: /seasir/padi/book/

---
<h1 style="margin-top:0;padding-top:10px">PADI潜水课程 预约表</h1>
<span class="hl-red">请使用英文填写</span>
<form action="/postmail/" method="post" novalidate>
<input type="hidden" name="subject" value="Booking For PADI">
<!-- ((( contact -->    
<fieldset name="contact">
  <legend>代表者联络方式</legend>
  <label for="email">E-mail</label>
  <input id="email" size="50" type="email" required="required" autocomplete="on" name="Guest E-mail"><br>
  <span class="hl-red">为了可以与您联系, 请您输入正确的 E-mail</span><br>
  <input id="open-rest" type="button" value="Continue">
</fieldset>
<!-- ))) contact -->   
<div id="rest" style="display:nonee;">
<!-- ((( guest-information -->    
<fieldset id="guest-information" name="guest-information">
  <legend>基本资讯</legend>
  <label for="name" required="required" autocomplete="on" >姓名</label>
  <input type="text" id="name" name="name">
  <span class="comment">(护照上的英文姓名)</span><br>
  <label for="nationality">国家</label>
  <input type="text" id="nationality" name="nationality"><br>
  <label for="mobile">手机号码</label>
  <input type="text" id="mobile" name="mobile" value="(+)"><br>
</fieldset>
<!-- ))) guest-information -->    
<!-- ((( Diver Information -->    
<fieldset id="Diver-info" name="Diver-info">
  <legend>Diver Information</legend>
  <table class="priceT">
    <tr>
      <th rowspan="2" width="200">姓名 (英文)</th>
      <th rowspan="2" width="50">年龄</th>
      <th colspan="3" rowspan="2">器材租用准备</th>
      <th colspan="3">潜水课程</th>
    </tr>
    <tr>
      <th width="130">开放水域水肺潜水员<br>Open water Diver</th>
      <th width="120">进阶水肺潜水员<br>Advanced Diver</th>
      <th width="100">救援潜水员<br>Rescue Diver</th>
    </tr>
    <tr id="addNewType1">
      <td colspan="8"><input type="button" value="增加一行"></td>
    </tr>
  </table>
</fieldset>
<!-- ))) Diver Information -->    
<!-- ((( language -->    
<fieldset id="language" name="language">
  <legend>选择语言</legend>
  <table class="priceT">
    <tr>
      <td><label for="diving-manual-lang">潜水教材的语言</label></td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="English">英语</td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="Chinese">中文</td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="Japanese">日语</td>
      <td><input type="radio" name="diving-manual-lang" id="diving-manual-lang" value="Korean">韩文</td>
    </tr>
    <tr>
      <td><label for="training-lang">教学的语言</label></td>
      <td><input type="radio" name="training-lang" id="training-lang" value="English">英语</td>
      <td><input type="radio" name="training-lang" id="training-lang" value="Chinese">中文</td>
      <td><input type="radio" name="training-lang" id="training-lang" value="Japanese">日语</td>
      <td><input type="radio" name="training-lang" id="training-lang" value="Korean">韩文</td>
    </tr>
  </table>
</fieldset>
<!-- ))) language -->    
<!-- ((( date-of-course -->    
<fieldset id="date-of-course" name="language">
  <legend>课程日期</legend>
  <label>希望的课程日期 : </label>
  <input type="text" id="course-start-date" name="course-start-date" class="date-of-trip"><br>
  <h3 class="hl-red">备注</h3>
  <p class="hl-red">一次潜水活动后，需休息12小时以上，方可搭乘飞机；数次潜水活动后，需休息18小时以上，方可搭乘飞机。</p>
</fieldset>
<!-- ))) date-of-course -->    
<!-- ((( Transportation -->    
<fieldset name="transportation">
  <legend>酒店接送</legend>
  <label>是否需要酒店接送? (限那霸市区)</label>
  <label>是</label>
  <input type="radio" name="need-transfer" value="yes" checked>/
  <label>否</label>
  <input type="radio" name="need-transfer" value="no">
  <br><span class="hl-red">亲爱的客人，您好。无论您是否需要酒店接送服务，我们都希望您提供您在冲绳下榻的酒店或其他住宿地点的联络方式，以便因天气或其他意外状况发生时与您联络。</span>
  <div id="transfer-detail">
    <label>酒店名称</label>
    <input type="text" name="hotel-name"><br>
    <label>酒店电话</label>
    <input type="text" name="hotel-tel"><br>
    <label>酒店登记人姓名</label>
    <input type="text" name="name-hotel-checkin"><br>
    <label >入住时间</label>
    <input type="text" class="date-of-trip" name="Check in Date"><br>
    <label >退房时间</label>
    <input type="text" class="date-of-trip" name="Check out Date"><br>
    <label>酒店接送时间</label>
    <span>酒店接送时间请于活动前一日下午16:00后查阅邮件，或到酒店前台确认传真</span><br>
  </div>
</fieldset>
<!-- ))) Transportation -->    
<!-- ((( comment -->    
<fieldset name="comment">
  <legend>其它问题</legend>
  <textarea name="comment" rows="6" cols="110"></textarea>
</fieldset>
<!-- ))) contact -->   
{% include seasir-booking-argument-cn.html %}
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
    GUEST.height="身高";
    GUEST.weight="体重";
    GUEST.foot="鞋码（厘米）";
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

