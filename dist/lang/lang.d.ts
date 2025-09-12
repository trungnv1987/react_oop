import { LangType } from "../enums/lang_enums";
export declare class Lang {
    static currentLang: LangType;
    static init({ en, vi, defaultLang }: {
        en: any;
        vi: any;
        defaultLang: LangType;
    }): void;
    static changeLang(lang: LangType): Promise<void>;
    static localize(key: string, params?: Record<string, string>): string;
}
//# sourceMappingURL=lang.d.ts.map