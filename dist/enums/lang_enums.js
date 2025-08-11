"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLang = exports.LangType = void 0;
var LangType;
(function (LangType) {
    LangType["en"] = "en";
    LangType["vi"] = "vi";
})(LangType || (exports.LangType = LangType = {}));
const _key = "lang";
class AppLang {
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
exports.AppLang = AppLang;
