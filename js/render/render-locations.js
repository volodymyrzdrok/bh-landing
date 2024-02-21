import { locations } from "../db/locations.js";
import { markupLocations } from "../markup/markup-locations.js";
import { markupModalLocations } from "../markup/markup-modal-locations.js";
import { updateContent } from "../utils/updateLocalization.js";

$(document).ready(function () {
  const containerLocations = $(".location__list");
  if (containerLocations) {
    containerLocations.html(markupLocations(locations));
  }

  //modal

  $(".location__item").click(function (e) {
    const id = $(this).data("id");

    const address = locations.find((el) => el.id == id);

    $("#locations-modal__container").html(markupModalLocations(address));

    $(".locModal-name__item:first").addClass("active");
    $(".locModal-content__item:first").show();

    $(".locModal-name__item").hover(function () {
      var targetId = $(this).data("target");
      $(".locModal-content__item").hide();
      $(".locModal-content__item[data-id='" + targetId + "']").show();
      $(".locModal-name__item").removeClass("active");
      $(this).addClass("active");
    });

  
    updateContent()
    $("#locationModal").modal("show");
  });



 
});
