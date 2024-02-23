export function clearForm(form) {
  $(form)
    .find("input, textarea, select")
    .each(function () {
      $(this).val("");

      if ($(this).is("select")) {
        $(this).val("").trigger("change");
        const key = $(this).data("i18n");
        $(this).attr("data-placeholder", i18next.t(key));

        $(this).select2({
          minimumResultsForSearch: -1,
        });

        $(this)
          .parents(".select__container")
          .find(".select2-selection__placeholder")
          .html(i18next.t(key));
      }
    });
}
