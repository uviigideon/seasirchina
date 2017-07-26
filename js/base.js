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
  /**
   *  Code for response table from https://sitesforprofit.com/responsive-tables-in-wordpress
   */
  (function () {
  var resTables = document.querySelectorAll(".resTable");
  for(var r = 0; r < resTables.length; ++r){
    var resTable = resTables[r];
    var headertext = [];
    var headers = resTable.getElementsByTagName("thead");
    var tablebody = resTable.getElementsByTagName("tbody");
    
    for(var i = 0; i < headers.length; i++) {
      headertext[i]=[];
      for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
        var current = headrow;
        headertext[i].push(current.textContent.replace(/\r?\n|\r/,""));
      }
    } 
    
    if (headers.length > 0) {
      for (var h = 0, tbody; tbody = tablebody[h]; h++) {
        for (var i = 0, row; row = tbody.rows[i]; i++) {
          for (var j = 0, col; col = row.cells[j]; j++) {
            col.setAttribute("data-th", headertext[h][j]);
          } 
        }
      }
    }
  }
} ());
});
