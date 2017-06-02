---
layout: seasir-booking
css: seasir
lang: cn
permalink: /seasir/naha/half/book/

---
<h1>Marine House SEASIR那霸店 半日行程 预约表</h1>
<span class="hl-red">请使用英文填写</span>
<form action="/postmail/" method="post" novalidate>
<input type="hidden" name="subject" value="Booking For CHIBISI">
<!-- ((( contact -->    
<fieldset name="contact">
  <legend>代表者联络方式</legend>
  <label for="email">E-mail</label>
  <input id="email" size="50" type="email" required="required" autocomplete="on" name="Guest E-mail"><br>
  <span class="hl-red">为了可以与您联系, 请您输入正确的 E-mail</span><br>
  <input id="open-rest" type="button" value="继 续">
</fieldset>
<!-- ))) contact -->   
<div id="rest" style="display:none;">
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
  <label >活动参加日</label>
  <input id="date-of-trip2" type="text" name="Date of Trip" readonly="readonly">
  <span class="hl-red">活动期间为2017年6月10日至2017年11月5日</span>
  <br>
  <label>参与行程</label>
  <input type="radio" id="session-am" name="Trip Session" value="am" checked="checked">
  <label for="session-am" style="width:160px;">上午出发 08:00</label>
  <input type="radio" id="session-pm" name="Trip Session" value="pm">
  <label for="session-pm" style="width:170px">下午出发 13:00</label><br>
</fieldset>
<!-- ))) guest-information -->    
<!-- ((( intro and snorkeling -->    
<fieldset id="IDV-SNK" name="IDV-SNK">
<legend>庆良间诸岛 - 体验潜水 (IDV) & 浮潜 (SNK)</legend>
<table class="priceT">
  <tr>
    <th>姓名 (英文)</th>
    <th>年龄</th>
    <th>参加项目</th>
    <th colspan="3">器材租用准备</th>
  </tr>
  <tr id="addNewType1">
    <td colspan="6"><input type="button" value="增加一行"></td>
  </tr>
</table>
</fieldset>
<!-- ))) intro and snorkeling -->    
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
    <label>酒店接送时间</label>
    <span>酒店接送时间请于活动前一日下午16:00后查阅邮件，或到酒店前台确认传真</span><br>
  </div>
  <h3>自行驾车</h3><p>请您使用电话号码：<strong>098 869 6329</strong> 或是输入 <strong>MAP CODE：33246627*42</strong>在汽车导航系统中查询那霸店。<br><span class="hl-red">注意：上午行程的集合时间为8：00；下午行程的集合时间为13：00。集合地点为SEASIR那霸店，可以提供免费停车场。</span></p>
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
    var GUEST = window.GUEST;
    GUEST.height="身高";
    GUEST.weight="体重";
    GUEST.foot="鞋码（厘米）";
    GUEST.trans1='自行驾车';
    GUEST.trans2='请您使用电话号码：<strong>098 869 6329</strong> 或是输入 <strong>MAP CODE：33246627*42</strong>在汽车导航系统中查询那霸店。<br><span class="hl-red">注意：上午行程的集合时间为8：00；下午行程的集合时间为13：00。集合地点为SEASIR那霸店，可以提供免费停车场。</span>';
    GUEST.genType1TR = function(){
            /* ((( */
            var num = "NUM";
            var strArr = [];
            strArr[strArr.length] = '<tr><td><input type="hidden" name="guest-NUM" value="--------------------------------------------------"><select size="1" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-gender"><option value="Male">MR.</option><option value="Female">MS.</option></select><input type="text" class="guest-name" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-name"></td><td><input size="1" class="width-1" type="text" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-age"></td><td><select size="1" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-Activity"><option value="SNK">Snorkeling</option><option value="SNK AGE 6-12">Snorkeling (age 6-12)</option><option value="IDV">Intro-Diving (min age 10)</option></select></td><td><label>';
            strArr[strArr.length] = this.height;
            strArr[strArr.length] = '</label><input class="width-1" size="1" type="text" id="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-height" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-height">cm</td><td><label>';
            strArr[strArr.length] = this.weight;
            strArr[strArr.length] = '</label><input class="width-1" size="1" type="text" id="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-weight" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-weight">kg</td><td><label>';
            strArr[strArr.length] = this.foot;
            strArr[strArr.length] = '</label><input size="1" class="width-1" type="text" id="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-foot-size" name="guest-';
            strArr[strArr.length] = num;
            strArr[strArr.length] = '-foot-size">cm</td></tr>';
            return strArr.join('');
            /* ))) */
    };
    GUEST.init();
    var dateStart = new Date('06/10/2017');
    var dateNow = new Date();
    if (dateNow > dateStart) dateStart = dateNow;
    var dateEnd = new Date('11/05/2017');
    $("#date-of-trip2").datepicker({
        dateFormat:"d MM, yy",       
        minDate:dateStart,
        maxDate:dateEnd
    });
});
-->
</script>

