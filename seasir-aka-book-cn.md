---
layout: seasir-booking
css: seasir
lang: cn
permalink: /seasir/aka/book/

---
<h1>SEASIR 阿嘉岛店预约表</h1>
<p><b>亲爱的顾客,</b><br> 
            每一份预约表只能填写一个房间的信息，请在此表填写同一个房间里的住客的信息和活动详情。我们需要以下所有信息以便提前为您准备。<span class="hl-red">如果您需要预定2间房或以上,请另外填写表格</span>。</p>
<span class="hl-red">请使用英文填写</span><br>
<form action="/postmail/" method="post" novalidate>
<input type="hidden" name="subject" value="Booking For AKA">
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
  <label for="name" required="required" autocomplete="on">姓名</label>
  <input type="text" id="name" name="name">
  <span class="comment">(护照上的英文姓名)</span><br>
  <label for="nationality">国家</label>
  <input type="text" id="nationality" name="nationality"><br>
  <label for="mobile">移动電話</label>
  <input type="text" id="mobile" name="mobile" value="(+)"><br>
  <label>入住日期</label>
  <input type="text" class="date-of-trip hasDatepicker" name="check in date" id="dp1493034199314">
  <label class="margin-left">退房日期</label>
  <input type="text" class="date-of-trip hasDatepicker" name="check out date" id="dp1493034199315"><br>
  <label>船到达阿嘉岛日期</label>
  <input type="text" class="date-of-trip hasDatepicker" name="ferry arrival date" id="dp1493034199316">
  <label class="margin-left" for="ferry-arrival-time">时间点</label>
  <input type="text" id="ferry-arrival-time" name="ferry arrival time" value="00:00"><br>
  <label>船离开阿嘉岛日期</label>
  <input type="text" class="date-of-trip hasDatepicker" name="ferry departure date" id="dp1493034199317">
  <label class="margin-left" for="ferry-departure-time">时间点</label>
  <input type="text" id="ferry-departure-time" name="ferry departure time" value="00:00"><br>
  <label for="type-of-room">房间类型</label>
  <select id="type-of-room" name="type of room">
<option value="1F">1楼 和式房(共用卫生间,浴室)</option>
<option value="2F tatami">2楼 和式房 带有卫生间浴室</option>
<option value="2F western">2楼 西式房 带有卫生间浴室</option>
<option value="3F tatami">3楼 和式房 带有卫生间浴室</option>
<option value="3F western">3楼 西式房 带有卫生间浴室</option>
  </select><br>
  <label for="num-of-person-stay" style="width:200px">本间房入住人数</label>
  <select size="1" id="num-of-person-stay" name="num of person stay">
<option value="1">1</option>
<option value="2" selected="selected">2</option>
<option value="3">3</option>
  </select>
</fieldset>
<!-- ))) guest-information -->    
<!-- ((( activity -->    
<fieldset id="activity" name="activity">
  <legend>潜水等活动预约</legend>
  <table class="priceT">
<tr id="addNewType1" style="display:none">
  <td colspan="6"><input type="button" value="Add A Line"></td>
</tr>
  </table>
</fieldset>
<!-- ))) activity -->    
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
$(function() {
    var GUEST = window.GUEST;
    GUEST.height="身高";
    GUEST.weight="体重";
    GUEST.foot="脚的尺寸（厘米）";
    GUEST.genType1TR = function(){
        /* ((( */
        return '<tr><td><table style="border-collapse:collapse;margin:10px 0;"><tr class="leap-3"><td width="250"><input type="hidden" name="guest-NUM" value="--------------------------------------------------">顾客姓名:<select size="1" name="guest-NUM-gender"><option value="Male">MR.</option><option value="Female">MS.</option></select><input type="text" class="guest-name" name="guest-NUM-name"></td><td colspan="2" width="620">年龄:<input size="1" type="text" name="guest-NUM-age"></td></tr><tr><td>活动类型: <select size="1" name="guest-NUM-activity"><option value="Snorkeling">浮潜</option><option value="intro div">体验潜水</option><option value="leisure-div">休闲潜水</option><option value="ref div">复习潜水</option></select></td><td colspan="2">活动日期:<input type="text" class="date-of-trip" name="guest-NUM-activity-date-1"><input class="add-another-day" type="button" value="新增一天"></td></tr><tr><td>潜水员等级: <select size="1" name="guest-NUM-cert"><option value="None">无潜水证</option><option value="OWD">Open Water Diver</option><option value="AD">Advance Diver</option><option value="RD">Rescue Diver</option><option value="DM">Dive Master</option><option value="INS">Instructor</option></select></td><td>上次潜水时间: <input type="text" class="date-of-trip" name="guest-NUM-last-dive"></td><td>总共潜水次数: <input type="text" name="guest-NUM-total-dive"></td></tr><tr><td rowspan="2">器材租借情况</td><td colspan="2"> 不租借<input type="checkbox" name="guest-NUM-rental" value="no rental"> 浮力控制器(BCD)<input type="checkbox" name="guest-NUM-rental" value="BCD"> 呼吸器(REG)<input type="checkbox" name="guest-NUM-rental" value="REG"> 湿衣(Wetsuite)<input type="checkbox" name="guest-NUM-rental" value="Wetsuite"> 电脑表(Dive Com)<input type="checkbox" name="guest-NUM-rental" value="Dive Com"> 面镜(Mask)<input type="checkbox" name="guest-NUM-rental" value="Mask"> 蛙鞋(Fins)<input type="checkbox" name="guest-NUM-rental" value="Fins"> 套靴(Boots)<input type="checkbox" name="guest-NUM-rental" value="Boots"> 背心(Vest)<input type="checkbox" name="guest-NUM-rental" value="Vest"></td></tr><tr><td colspan="2"> 身高<input type="text" class="width-1" size="1" name="guest-NUM-height">cm &nbsp;&nbsp;&nbsp; 体重<input type="text" class="width-1" size="1" name="guest-NUM-weight">kg &nbsp;&nbsp;&nbsp; 脚长<input type="text" class="width-1" size="1" name="guest-NUM-foot-size">cm</td></tr></table></td></tr>';
        /* ))) */
    };
    GUEST._numInit = 3;
    GUEST.init();
});
</script>

