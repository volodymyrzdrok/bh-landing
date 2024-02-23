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

    $(".locModal-name__item").on("mouseenter touchstart", function () {
      var targetId = $(this).data("target");
      $(".locModal-content__item").hide();
      $(".locModal-content__item[data-id='" + targetId + "']").show();
      $(".locModal-name__item").removeClass("active");
      $(this).addClass("active");
    });

    $(".locModal-name__item").on("click", function (e) {
      e.preventDefault();
      var href = $(this).attr("data-href");
      window.open(href, "_blank");
    });

    $(".locModal-name__item").on("touchstart", function (e) {
      var href = $(this).attr("data-href");
      window.open(href, "_blank");
    });

    updateContent();
    $("#locationModal").modal("show");
  });
});
