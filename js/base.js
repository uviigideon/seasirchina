$(function(){
  $(".fllink-li").find("a").not(":last").click(function(event){
      var tmp = $(this).attr("href").split("/");    
      var src = window.location.href.split("/");
      src[src.length - 2] = tmp[tmp.length - 2];
      window.location.href = src.join("/");
      event.preventDefault();
  }); 
  jQuery.browser={};(function(){jQuery.browser.msie=false; jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)./)){ jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
  $(".money").each(function(){
      this.innerHTML = new Intl.NumberFormat('ja-JP').format(Number(this.innerHTML));
  });
});
