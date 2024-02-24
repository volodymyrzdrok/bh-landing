import { locations } from "../db/locations.js";
import { markupLocations } from "../markup/markup-locations.js";
import { markupModalLocations } from "../markup/markup-modal-locations.js";
import { updateContent } from "../utils/updateLocalization.js";

$(document).ready(function () {
  const containerLocations = $(".location__list");

  containerLocations.html(markupLocations(locations));

  $(".location__item").click(function (e) {
    const id = $(this).data("id");
    const address = locations.find((el) => el.id == id);
    $("#locations-modal__container").html(markupModalLocations(address));

    $(".locModal-name__item:first").addClass("active");
    $(".locModal-content__item:first img").addClass("active-img");

    $(".locModal-name__item").on("mouseenter touchstart", function () {
      const targetId = $(this).data("target");
      $(".locModal-content__item").hide();
      $(`.locModal-content__item[data-id="${targetId}"]`).show();
      $(".locModal-content__item img").removeClass("active-img");
      $(`.locModal-content__item[data-id="${targetId}"] img`).addClass("active-img");
      $(".locModal-name__item").removeClass("active");
      $(this).addClass("active");
    });

    $(".locModal-name__item").on("click touchstart", function (e) {
      e.preventDefault();
      const href = $(this).attr("data-href");
      window.open(href, "_blank");
    });

    updateContent();
    $("#locationModal").modal("show");

  });




  $("#locationModal").on("shown.bs.modal", function () {
    const textsHeight = $(".locModal-content__item:first").height();
    $(".locModal-content__item").css("height", textsHeight);
  });
});

