(function () {

  $(document).on("deviceready", function (e) {
    e.preventDefault();
    var itemID = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')[0].split('=')[1];
    var items = JSON.parse(localStorage.items);
    var item = items[itemID];

    $('#item-name').val(item.name);
    $("#userimg").attr("src",item.photo);
    $('#price').val(item.price);
    $('#item-date').val(item.date);
    $('#for-person').val(item.person);
    $('#localization').val(item.ubication);
    $('#notes').val(item.notes),

    $("#save").on("tap", function (e, data) {
      e.preventDefault();
      
      if ($('#item-name').val() == "" || $('#price').val() == "" ) {
        alert("El precio y el nombre son campos obligatorios");
        return;
      }

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

      if (itemID > -1) {
        items.splice(itemID, 1);
        //After remove
        console.log("After removes")
        console.log(items)
      }
      // Add Item to array
      items.push(item);
      console.log("After push item")
      console.log(items)
      // Save Modified in localStorage
      localStorage.items = JSON.stringify(items);
      console.log(item);
      document.location.href = "index.html";
    });
  });
})();