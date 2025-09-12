"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lang = void 0;
const react_i18next_1 = require("react-i18next");
const i18next_1 = __importDefault(require("i18next"));
const lang_enums_1 = require("../enums/lang_enums");
class Lang {
    static init({ en, vi, defaultLang }) {
        i18next_1.default.use(react_i18next_1.initReactI18next).init({
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
    static async changeLang(lang) {
        await i18next_1.default.changeLanguage(lang);
        this.currentLang = lang;
    }
    static localize(key, params) {
        if (!params) {
            return i18next_1.default.t(key);
        }
        return i18next_1.default.t(key, params);
    }
}
exports.Lang = Lang;
Lang.currentLang = lang_enums_1.LangType.en;
