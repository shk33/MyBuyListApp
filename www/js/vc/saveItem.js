(function () {

  $(document).on("deviceready", function (e) {
    e.preventDefault();

    $("#save").on("tap", function (e, data) {
      e.preventDefault();

      if (localStorage.items) {
        items = localStorage.items;
      } else {
        items = [];
      }

      item = {
        name:      $('#item-name').val(),
        photo:     $("#userimg").attr("src"),
        price:     $('price').val(),
        date:      $('item-date').val(),
        person:    $('for-person').val(),
        ubication: $('localization').val(),
        notes:     $('notes').val(),
      }

      alert(item);
      
  });
})();