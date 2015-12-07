(function () {
  var geolocationManager = GeolocationManager.getInstance();

  $(document).on("deviceready", function (e) {
    e.preventDefault();

    $("#getCurrentPosition").on("tap", function (e) {
      alert("putos");
      var callback = {};

      callback.onSuccess = onSuccess;
      callback.onError = onError;

      geolocationManager.getCurrentPosition(callback);
    });
  });

  function onSuccess(position) {
    console.log("position is retrieved successfully");
    
    $("#localization").val(position.coords.latitude + "," + position.coords.longitude);    
  }
    
  function onError(error) {
    console.log("Error code: " + error.code + ", message: " + error.message);
    $("#localization").html("Error code: " + error.code + ", message: " + error.message);
  }

})();