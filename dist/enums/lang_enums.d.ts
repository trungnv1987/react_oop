export declare enum LangType {
    en = "en",
    vi = "vi"
}
export declare class AppLang {
    static get currentLang(): LangType;
    static setDefaultLang(): LangType;
    static changeLang(lang: LangType): void;
}
//# sourceMappingURL=lang_enums.d.ts.map