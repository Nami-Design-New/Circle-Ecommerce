import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./src/locales/en.json";
import ar from "./src/locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    ar: {
      translation: ar
    }
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en", // في حال لم يتم العثور على الترجمة
  interpolation: {
    escapeValue: false // لا حاجة للهرب من الحروف الخاصة في React
  }
});

export default i18n;
