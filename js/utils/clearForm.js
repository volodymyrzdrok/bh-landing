export function clearForm(form) {
  $(form)
    .find("input, textarea, select")
    .each(function () {
      $(this).val("");

      if ($(this).is("select")) {
        $(this).val($(this).find("option:first").val());
      }
    });
}
