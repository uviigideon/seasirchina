---
layout: seasir-booking
css: seasir
lang: cn
permalink: /cocotinos/book/

---
<style>
@media screen and (max-width: 600px){
  .page-content > .wrapper, .wrapper {padding:5px;margin: 10px 0}
  .page-content {padding:0;margin:5px 0}
  .site-footer {padding:0}
}
  #contact-information > label {
    width: 180px;
  }
  textarea {width:100%}
  #email {width:100%;max-width:320px}
  fieldset {min-width: 0;margin:5px 0;width: auto}
  .forChoose {background:#ffc}
  .guest {margin:4px 0;border: dotted 1px #aaa;padding:2px}
  .guest label {padding-left:2px; min-width:100px}
  .guest-title {width:100%;background: #ccc}
  .hidden,.disabled {display:none}
  .error {color:#f66;font-weight:800}
  .equip {padding:0;margin:0}
  .equip li {
    list-style-type:none;display:inline-block;background:#eee;
    border:1px solid #aaa;border-radius: 5px;padding:2px;margin:4px 0;
    min-width: 120px;color:#bbb;
  }
  .equip li.checked {
    color:#333;
    background:#fff;
    border:1px solid #000;
  }
  input, select, textarea {background:#fff}
  input {border: 1px solid #aaa}
  input[type="button"], input[type="submit"] {border-radius: 5px; background: #eee}
</style>
{% include h1-underline.html img="/cocotinos/logo.png" h1="美娜多预定表"%}

亲爱的客人， \\
请您务必输入正确的邮箱地址和联系方式以便出现紧急情况时可以及时与您取得联系。在您到来之前，也需要通过邮件与您确认预约的具体信息。


<span class="hl-red">请使用英文填写</span>
<form action="/postmail/" method="post" novalidate>
<!-- form action="https://www.seasirchina.com/postmail/debug.php" method="post" novalidate -->
<input type="hidden" name="subject" value="Booking For Manado">
<!-- ((( contact -->    
<fieldset name="contact">
  <legend>代表者联络方式</legend>
  <label for="email" style="display:inline-block">E-mail</label>
  <input id="email" type="email" required="required" autocomplete="on" name="Guest E-mail" style="display:inline-block" class="localStore" placeholder="请您输入正确的 E-mail"><br>
  <span class="hl-red">为了可以与您联系, 请您输入正确的 E-mail</span><br>
  <input id="open-rest" type="button" value="继 续">
</fieldset>
<!-- ))) contact -->   
<div id="rest" style="display:nonee;">
<!-- ((( guest-information -->    
<fieldset id="contact-information" name="contact-information">
  <legend>基本资讯</legend>
  <label for="name" required="required" autocomplete="on" >姓名</label>
  <input type="text" id="name" name="name" class="ascii localStore" required="required">
  <span class="comment" style="display:inline-block">(护照上的英文姓名)</span><br>
  <label for="nationality">国家</label>
  <input type="text" id="nationality" name="nationality" class="localStore"><br>
  <label for="mobile">移动電話</label>
  <input type="text" id="mobile" name="mobile" value="(+)" class="localStore"><br>
  <label >入住日期</label>
  <input type="text" class="date-of-trip sessionStore" name="check-in-date"><br />
  <label >退房日期</label>
  <input type="text" class="date-of-trip sessionStore" name="check-out-date"><br />
  <label for="arrival-filght-detail">到达航班信息</label>
  <input type="text" id="arrival-filght-detail" name="arrival-filght-detail" class="sessionStore"><br />
  <label for="departure-filght-detail">离开航班信息</label>
  <input type="text" id="departure-filght-detail" name="departure-filght-detail" class="sessionStore">
</fieldset>
<!-- ))) guest-information -->    
<h3>客房套餐（包括潜水员或非潜水员服务）</h3>
<input type="button" id="add-room" value="是否需要额外房间" />
<!-- ((( comment -->    
<fieldset name="comment">
  <legend>其它问题</legend>
  <textarea name="comment" rows="6" class="sessionStore"></textarea>
</fieldset>
<!-- ))) contact -->   
{% include seasir-booking-argument-cn.html %}
</div>
<input type="hidden" id="rtnurl" name="rtnurl" value="{{site.baseurl}}/seasir/book/thx/" />
<input style="width:100px;" type="submit" disabled="true" >
</form>
{% include cocotinos-booking-template-cn.html %}
{% include base-js.html %}
<script src="{{site.baseurl}}{{site.js.url}}/bookform-v2.js"></script>
<script>
$(function() {
  window.alertASCII = "请使用英文填写";

  BOOKING.init();

  $(".ascii").blur(function(e){
      if(!isASCII(this.value)) {
          alert(window.alertASCII);
          this.value = this.value.replace(/[^\x00-\x7f]/g,"");
          $(this.labels).addClass("error");
      } else {
          $(this.labels).removeClass("error");
      }
  });

  $("form").on("change",".choose",function(e){
    if ("" === this.value) {
      $(this).addClass("forChoose");
    } else {
      $(this).removeClass("forChoose");
    }
  }).on("change",".localStore",function(e){
    if ("" !== this.value) {
      try {
        localStorage.setItem(this.name,this.value);
      } catch (e){}
    }
  }).find(".localStore").each(function(){
    try {
        var tmp = localStorage.getItem(this.name);
        if(null !== tmp) this.value = tmp;
    } catch (e){this.value="";}
  });

  $("form").on("change",".sessionStore",function(e){
    if ("" !== this.value) {
      try {
        sessionStorage.setItem(this.name,this.value);
        // console.info(this.name + " " + this.value);
      } catch (e){}
    }
  }).find(".sessionStore").each(loadSession);
});
</script>
