(function () {

  $(document).on("deviceready", function (e) {
    e.preventDefault();
    // Fuck jquery Mobile popups Initializations
    $("#deleteDialog").popup();
    if (localStorage.items) {
      var items = JSON.parse(localStorage.items);
    } else {
      var items = [];
    }

    for (i = 0; i < items.length; i++) {
      if (items[i]) {
        $("<li class='ui-li-has-thumb'>" +
          "<a href='edit_form.html?id="+ i +"' data-ajax='false' class='ui-btn waves-effect waves-button waves-effect waves-button'>" +
            "<img src='"+ items[i].photo +"' style='min-width:80px;min-height:80px;' class='ui-thumbnail ui-thumbnail-circular'>" +
            "<h2>"+ items[i].name + "</h2>" +
            "<p><b>Precio: </b>"+ items[i].price + "</p>" +
          "</a>"+
          '<p class="ui-li-aside">' +
            '<a class="delete-btn" ' +
                'data-id="' + i + '" > ' +
              '<button class="ui-btn-raised clr-warning ui-btn ui-btn-inline ui-mini waves-effect waves-button waves-effect waves-button"><i class="zmdi zmdi-close"></i></button>' +
            '</a>' +
          '</p>' +
          "</li>").appendTo("#items");
      }
    }

    $('.delete-btn').on('tap', function (e) {
      var id = $(this).data('id');
      $('#delete').attr('data-id', id);
      if (localStorage.items) {
        var items = JSON.parse(localStorage.items);
      } else {
        var items = [];
      }
      items.splice(id, 1);
      localStorage.items = JSON.stringify(items);
      document.location.href = "index.html";
    });
  })
})();