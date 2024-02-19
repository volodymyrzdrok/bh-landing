export  function updateContent() {
    $('[data-i18n]').each(function () {
      const key = $(this).data('i18n');
      $(this).html(i18next.t(key));
    });
  }