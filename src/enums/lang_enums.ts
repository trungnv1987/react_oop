export enum LangType {
  en = "en",
  vi = "vi",
}

const _key = "lang";

export class AppLang {
  static get currentLang(): LangType {
    if (typeof localStorage !== "undefined") {
      const lang =
        (localStorage.getItem(_key) as LangType | undefined) ?? LangType.vi;
      return lang;
    }
    return LangType.vi;
  }

  static setDefaultLang() {
    const lang = this.currentLang;
    this.changeLang(lang);
    return lang;
  }

  static changeLang(lang: LangType) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(_key, lang);
    }
  }
}
