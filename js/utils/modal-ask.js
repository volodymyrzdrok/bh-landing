$(document).ready(function () {

  $("body").on("click", ".open-modal-ask", function () {
    var modalTitle = $(this).data("modaltitle");
    $(".ask-modal__title").text(i18next.t(modalTitle));
    $("#askModal").modal("show");
  });
  
});
