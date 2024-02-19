
import { updateContent } from "./utils/updateLocalization.js";

$(function () {
  const $languageLink = $('.language-link');
  let language = localStorage.getItem('language') || 'ua';
  setLanguage(language);

  $languageLink.click(function (e) {
    const lng = $(this).text();
    localStorage.setItem('language', lng);
    setLanguage(lng);
  });

  async function setLanguage(lng) {
    i18next.init({
      lng: lng,
      resources: {
        [lng]: {
          translation: await loadTranslations(lng),
        },
      },
    });

    updateContent()
  }

  async function loadTranslations(lng) {
    const response = await fetch(`locales/${lng}/translations.json`);
    return await response.json()
  }

  
});
