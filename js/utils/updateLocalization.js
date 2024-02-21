export function updateContent() {
  $("[data-i18n]").each(function () {
    const key = $(this).data("i18n");
    const tagName = this.tagName.toLowerCase();

    if (tagName === "select") {
      $(this).attr("data-placeholder", i18next.t(key));

      $(this).select2({
        minimumResultsForSearch: -1,
      });

      $(this)
        .parents(".select__container")
        .find(".select2-selection__placeholder")
        .html(i18next.t(key));
    } else if (tagName === "option") {
      $(this).text(i18next.t(key));
    } else {
      $(this).html(i18next.t(key));
    }
  });
}
