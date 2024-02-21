$(function () {
    $.ajax({
      url: "html/footer.html",
      method: "GET",
      dataType: "html",
      success: function (data) {
        $("footer").html(data);
      },
    });
  
  
  
  
   
  });
  