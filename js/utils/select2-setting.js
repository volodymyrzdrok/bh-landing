$(document).ready(function () {
    $(".select2").select2({
      minimumResultsForSearch: -1,
    });
  
  
    $(window).on('orientationchange', function () {
      $(".select2").select2({
          minimumResultsForSearch: -1,
        });
    });
    
  });
  
  