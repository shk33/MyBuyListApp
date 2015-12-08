(function() {

    //Handle back buttons decently for Android and Windows Phone 8 ...
    function onDeviceReady() {
        document.addEventListener("backbutton", function(e){
          navigator.app.exitApp();
        }, false);
    }

    $(document).ready(function() {
      document.addEventListener("deviceready", onDeviceReady, false);
    });
})();