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




  $(".location-item:first").addClass('active');
  $(".location-content p:first").show();


  $(".location-item").hover(function(){
    var targetId = $(this).data("target");
    $(".location-content p").hide();
    $(".location-content p[data-id='" + targetId + "']").show();
    $(".location-item").removeClass("active");
    $(this).addClass("active");
  });
 
});
