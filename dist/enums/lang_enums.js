export var LangType;
(function (LangType) {
    LangType["en"] = "en";
    LangType["vi"] = "vi";
})(LangType || (LangType = {}));
const _key = "lang";
export class AppLang {
    static get currentLang() {
        var _a;
        if (typeof localStorage !== "undefined") {
            const lang = (_a = localStorage.getItem(_key)) !== null && _a !== void 0 ? _a : LangType.vi;
            return lang;
        }
        return LangType.vi;
    }
    static setDefaultLang() {
        const lang = this.currentLang;
        this.changeLang(lang);
        return lang;
    }
    static changeLang(lang) {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(_key, lang);
        }
    }
}
