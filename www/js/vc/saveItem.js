(function () {

  $(document).on("deviceready", function (e) {
    e.preventDefault();

    $("#save").on("tap", function (e, data) {
      e.preventDefault();

      if (localStorage.items) {
        var items = JSON.parse(localStorage.items);
      } else {
        var items = [];
      }

      // Create Item
      item = {
        name:      $('#item-name').val(),
        photo:     $("#userimg").attr("src"),
        price:     $('#price').val(),
        date:      $('#item-date').val(),
        person:    $('#for-person').val(),
        ubication: $('#localization').val(),
        notes:     $('#notes').val(),
      }
      // Add Item to array
      items.push(item);
      // Save Item in localStorage
      localStorage.items = JSON.stringify(items);
      console.log(item);
      document.location.href = "index.html";
    });
  });
})();