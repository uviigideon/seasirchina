(function() {
    var BOOKING = window.BOOKING = {
        _agreementChecked:0,
        _agreementCount:0,
        checkAgreements : function () { /* {{{ */
            var me = this;
            me._agreementChecked = 0;
            me._agreementCount   = 0;
            $(".agreements").each(function(){
                var me = BOOKING;
                ++(me._agreementCount)
                if ($(this).is(":checked")) ++(me._agreementChecked);
            });
            if (me._agreementCount == me._agreementChecked) {
                $("input[type='submit']").prop('disabled',false);}
            else {
                $("input[type='submit']").prop('disabled',true);}
            
        }, /* }}} */
        init :  function() {
            $(".agreements").click(function(event){
                BOOKING.checkAgreements();
            });

            this.checkAgreements();
            $("#open-rest").click(function(){ /* {{{ */
                if(-1 === $("#email").val().indexOf("@")) return;
                else {
                    $("#rest").show();
                    $(this).remove();
                    $("#name").focus();
                }
                
            }); /* }}} */
            $("form").submit(function(){ /* {{{ */
                $(this).find(".disabled").remove();
                return true;
                
            }); /* }}} */
            $(".date-of-trip").datepicker({dateFormat:"d MM, yy", minDate:1});
        }
    }

    $("#email").keyup(function(e){
        if(e.keyCode == 13){
            $("#open-rest").click();
        }
    });

    var Guest = window.Guest = function(num, prefix){
      var _prefix = prefix + "-guest-" + num,
        _html = this.template.clone(),
        _title, 
        _titleDom,
        _tmp,
        _equips = {};
      _titleDom = _html.find(".guest-title")[0];
      _title = _titleDom.innerHTML = _titleDom.innerHTML+num;
      $(_titleDom).click(function(){$(this).next().toggleClass("hidden");});
      var _setTitle = function(name) { /* {{{ */
        if (undefined === name){
          _titleDom.innerHTML = _title;
        } else {
          _titleDom.innerHTML = _title + "&nbsp [" + name + "]";
        }
      } /* }}} */
      _html.find(".guest-name").blur(function(){ /* {{{ */
        if ("" == this.value) {
          _setTitle();
        } else {
          _setTitle(this.value);
        }
      }).each(function(){
        if( "room-1-guest-1" === _prefix) {
          try {
            _tmp = sessionStorage.getItem(_prefix + "-name");
            if (null !== _tmp) {
              this.value = _tmp;
              _setTitle(this.value);
            } else {
              _tmp = localStorage.getItem("name");
              if (null !== _tmp) { 
                this.value = _tmp;
                _setTitle(this.value);
              }
            }
          } catch(e){}
        }
      }); /* }}} */
      
      var nameAddPrefix = function(){
        if (this.name){
          this.name = _prefix + "-" + this.name;
        }
        if(undefined !== $(this).attr("for")) {
          $(this).attr("for",_prefix + "-" + $(this).attr("for"));
        };
      };
      _html.find(":input").each(nameAddPrefix);
      _html.find("label").each(nameAddPrefix);
      _html.find(".sessionStore").each(loadSession);

      var equipRentalStatus = function(){ /* {{{ */
          if ("yes" === this.value) {
            $(this).next().removeClass("disabled");
          } else {
            $(this).next().addClass("disabled");
          }
      }; /* }}} */
      _html.on("change",".equip-rental", equipRentalStatus)
           .find(".equip-rental").each(equipRentalStatus);

      var packageStatus = function(){ /* {{{ */
          if ("Non-Diver Package" === this.value) {
            $(this).next().addClass("disabled");
          } else {
            $(this).next().removeClass("disabled");
          }
      }; /* }}} */
      _html.on("change",".package", packageStatus)
           .find(".package").each(packageStatus);
      /* Save and Load Equips {{{ */
      try {
        var tmp = sessionStorage.getItem(_prefix + "-equips");
        if(null !== tmp) { 
          _equips = JSON.parse(tmp);
          _html.find("ul.equip li").each(function(){
            var $me = $(this);
            var key = $($me.find("input")[0]).attr("value");
            if (key in _equips) {
              $me.addClass("checked");
              $me.find("input").prop("checked", true);
            }
          });
        }
      } catch(e) {}
      _html.find("ul.equip li").click(function(){
        var $me = $(this);
        $me.toggleClass("checked");
        var _value = $($me.find("input")[0]).attr("value");
        if ($me.hasClass("checked")) {
          _equips[_value] = true;
          $me.find("input").prop("checked", true);
        } else {
          delete _equips[_value];
          $me.find("input").prop("checked", false);
        }
        try {
          sessionStorage.setItem(_prefix + "-equips" ,JSON.stringify(_equips));
        } catch(e){}
      });
      /* Save and Load Equips }}} */

      return {
        html: _html,
        remove: function(){
          _html.remove();
        }
      };
    }
    Guest.prototype.template = $($(".guest")[0]).remove().clone();

    var Room = window.Room = function(num){
      var _prefix = "room-" + num,
          _html = this.template.clone(),
          _guests = [],
          _me = this;
      function removeGuest(i) {
        while(i--){
          _guests.pop().remove();
        }
      }
      var suicide = function() { /* {{{ */
          $("#add-room").removeClass("hidden");
          removeGuest(_guests.length); 
          _html.remove();
          var i;
          for (i in rooms) {
            if (rooms[i].id = _prefix) {
              rooms.splice(i,1);
            }
          }
      } /* }}} */

      if (1 === num) {
        _html.find("#remove-room").remove();
      } else {
        _html.find("#remove-room").click(suicide);
      }
      _html.find("#room").attr("id",_prefix);
      _html.find("legend").html(_html.find("legend").html()+num);
      _html.find("select").each(function(){this.name = _prefix + "-" + this.name});
      _html.find(".room-type").change(function(){ /* {{{ */
        if ("" !== this.value) {
          var guestNum = _me.TYPE[this.value],
              i;
          if (guestNum > _guests.length) {
            for (i=_guests.length+1; i < guestNum + 1;++i) {
              _guests.push(new Guest(i, _prefix));
              _html.append(_guests[_guests.length - 1].html);
            } 
          } else {
            removeGuest(_guests.length - guestNum);
          }
        } else {
          removeGuest(_guests.length);
        }
      }); /* }}} */
      $("#add-room").before(_html);
      return {
        id: _prefix
      }
    };
    Room.prototype.template = $("#room").remove().clone();
    Room.prototype.TYPE = {"Single Use":1,"Twin Sharing":2,"Double Sharing":2,"Triple Sharing":3};
    var roomSerial = 1;
    rooms = window.rooms = [];
    rooms.push(new Room(roomSerial++));

    $("#add-room").click(function(){
      rooms.push(new Room(roomSerial++));
      $(this).addClass("hidden");
    });
})();

function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}  
loadSession = function(){
  try {
      var tmp = sessionStorage.getItem(this.name);
      if(null !== tmp) { 
        this.value = tmp;
        $(this).removeClass("forChoose");
        $(this).trigger("change");
      }
  } catch (e){}
}
