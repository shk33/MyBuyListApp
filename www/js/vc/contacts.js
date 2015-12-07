(function () {
  var contactsManager = ContactsManager.getInstance();

  $(document).on("deviceready", function (e) {
    e.preventDefault();
    $.mobile.popup.prototype.options.history = false;

    $("#getContacts").on("tap", function (e, data) {
      e.preventDefault();
      $("#contactList").empty();
      var callback = {};

      callback.onSuccess = function (contacts) {
        updateContactsList(contacts);
      };
      callback.onError = function (error) {
        $("#contactList").empty();
        $("<li>Error  displaying contacts</li>").appendTo("#contactList");
      };
      contactsManager.getAllContacts(callback,  "");
    });

    // Workaround for fucking reloading popup
    $('#popupDialog').on('popupafteropen', function () {
      $(this).one('popupafterclose', function () {
          $(window).one('navigate.popup', function (e) {
              e.preventDefault();
          });
      });
    });

  });

  function updateContactsList(contacts) {
    $("#popupDialog").popup();
    $("#contactList").empty();
            
    if (jQuery.isEmptyObject(contacts)) {
      $("<li class='ui-li-static ui-body-inherit'>No hay contactos</li>").appendTo("#contactList");
    } else {
      var i;
      //Display the top 50 elements
      for (i = 0; i < contacts.length || i < 50; ++i) {
        if (contacts[i]) {
          $("<li class='ui-li-static ui-body-inherit contact'>" + 
              '<h4>'+ contacts[i].name.formatted + "</h4>"+
            "</li>").appendTo("#contactList");
        }
      }
    }
    
    $("#contactList").listview('refresh');        
    $(".contact").on('tap', function () { 
      name = $(this).find("h4").html(); 
      $("#for-person").val(name);
      $("#popupDialog").popup("close");
    });
    $("#popupDialog").popup("open");
  }
})();