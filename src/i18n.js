import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "./locales/en/en.json";
import tFr from "./locales/fr/fr.json";
import tDe from "./locales/de/de.json";
import tIt from "./locales/it/it.json";

const resources = {
  en: {
    translation: tEn,
  },
  fr: {
    translation: tFr,
  },
  de: {
    translation: tDe,
  },
  it: {
    translation: tIt,
  },
};

i18n
  .use(initReactI18next)
  // https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en",
    // debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
