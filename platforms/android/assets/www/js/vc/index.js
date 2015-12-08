(function () {

  $(document).on("deviceready", function (e) {
    e.preventDefault();

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
          "</a></li>").appendTo("#items");
      }
    }
  });
})();