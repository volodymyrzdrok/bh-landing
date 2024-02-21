$(document).ready(function () {

  $("body").on("click", ".open-modal-ask", function () {
    console.log("first");
    var modalTitle = $(this).data("modaltitle");
    $(".ask-modal__title").text(i18next.t(modalTitle));
    $("#askModal").modal("show");
  });
  
});
