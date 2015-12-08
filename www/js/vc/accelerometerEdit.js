(function () {
  var accelerometerManager = AccelerometerManager.getInstance();
  var watchID;

  $(document).on("deviceready", function (e) {
    e.preventDefault();

    $("#startWatchAcceleration").on("tap", function (e) {
      e.preventDefault();
      steps = 0;
      enabled = false;
      enableStartWatchAccelerationButton(enabled);
      var callback = {};

      callback.onSuccess = onSuccess;
      callback.onError   = onError;

      watchID = accelerometerManager.startWatchAcceleration(callback);
    });

  });

  function onSuccess(acceleration) {
    stepForce = calculateStepForce(acceleration);
    if (stepForce >= 2.00) {
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
      }
      // Add Item to array
      items.push(item);
      // Save Modified in localStorage
      localStorage.items = JSON.stringify(items);
      document.location.href = "index.html";
    }
  }
    
  function onError() {
    $("#acceleration").html("An error occurs during watching acceleration.");
  }  

  function calculateStepForce(acceleration) {
    stepForce = ((acceleration.x * acceleration.x) + (acceleration.y * acceleration.y) + 
                (acceleration.z * acceleration.z)) / (9.78 * 9.78);
    return stepForce;
  }

})();