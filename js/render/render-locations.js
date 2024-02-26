import { locations } from "../db/locations.js";
import { markupLocations } from "../markup/markup-locations.js";
import { markupModalLocations } from "../markup/markup-modal-locations.js";
import { updateContent } from "../utils/updateLocalization.js";

$(document).ready(function () {
  const containerLocations = $(".location__list");

  containerLocations.html(markupLocations(locations));

  // Modal

  $(".location__item").click(function (e) {
    const id = $(this).data("id");

    const address = locations.find((el) => el.id == id);

    $("#locations-modal__container").html(markupModalLocations(address));

    $(".locModal-name__item:first").addClass("active");
    $(".locModal-content__item:first img").addClass("active-img");

    $(".locModal-name__item").on("mouseenter touchstart", function () {
      var targetId = $(this).data("target");
      $(".locModal-content__item").hide();
      $(".locModal-content__item img").removeClass("active-img");

      $(".locModal-content__item[data-id='" + targetId + "'] img").addClass(
        "active-img"
      );
      $(".locModal-content__item[data-id='" + targetId + "']").show();
      $(".locModal-name__item").removeClass("active");
      $(this).addClass("active");
    });

    let clickedOnce = false;
    $(".locModal-name__item").on("click touchend", function (e) {
      const isTouchDevice =
        "ontouchstart" in window || navigator.msMaxTouchPoints;

      if (isTouchDevice) {
        if (!clickedOnce) {
          clickedOnce = true;
          setTimeout(() => {
            clickedOnce = false;
          }, 500);
        } else {
          const href = $(this).attr("data-href");
          window.open(href, "_blank");
          clickedOnce = false;
        }
      } else {
        const href = $(this).attr("data-href");
        window.open(href, "_blank");
      }
    });

    updateContent();
    $("#locationModal").modal("show");
  });

  $("#locationModal").on("shown.bs.modal", function () {
 
  });
});
