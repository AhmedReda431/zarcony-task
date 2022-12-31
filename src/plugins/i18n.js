import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../locales/en";
import ar from "../locales/ar";


Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  localeDir: "locales",
  messages: {
    en: en,
    ar: ar,
  },
});

export default i18n;
