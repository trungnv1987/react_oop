import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { AppLang, LangType } from "../enums/lang_enums";


export class Lang {
  static currentLang: LangType = LangType.en;

  static init({en, vi, defaultLang}: {en: any, vi: any, defaultLang: LangType}) {
    i18n.use(initReactI18next).init({
      resources: {
        en: { translation: en }, //TODO: change to en
        vi: { translation: vi },
      },
      lng: defaultLang,
      fallbackLng: defaultLang,
      interpolation: { escapeValue: false },
    });
    this.currentLang = defaultLang;
  }

  static async changeLang(lang: LangType) {
    await i18n.changeLanguage(lang);
    this.currentLang = lang;
  }
  static localize(key: string, params?: Record<string, string>) {
    if (!params) {
      return i18n.t(key);
    }
    return i18n.t(key, params);
  }
}
