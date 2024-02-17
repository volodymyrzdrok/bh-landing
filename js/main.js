import "./swiper.js";
import "./chart.js";
import "./localization.js";

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
