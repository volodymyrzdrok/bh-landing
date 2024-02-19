import { locations } from "./db/locations.js";
import { markupLocations } from "./markup/markup-locations.js";

$(document).ready(function () {
  const containerLocations = $(".location__list");
  if (containerLocations) {
    containerLocations.html(markupLocations(locations));
  }




//   $("#locationModal").on("show.bs.modal", function () {
//     $("body").addClass("modal-open-noscroll");
//   });

//   $("#locationModal").on("hidden.bs.modal", function () {
//     $("body").removeClass("modal-open-noscroll");
//   });





  //modal
  $("#locationModal").modal("show");

  $(".location__item").click(function (e) {
    const id = $(this).data("id");
    console.log("id", id);

    $("#locationModal").modal("show");
  });




  $(".locModal-name__item:first").addClass('active');
  $(".locModal-content__item:first").show();


  $(".locModal-name__item").hover(function(){
    var targetId = $(this).data("target");
    $(".locModal-content__item").hide();
    $(".locModal-content__item[data-id='" + targetId + "']").show();
    $(".locModal-name__item").removeClass("active");
    $(this).addClass("active");
  });
 
});
