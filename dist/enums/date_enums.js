"use strict";
// https://day.js.org/docs/en/display/format#list-of-localized-formats
Object.defineProperty(exports, "__esModule", { value: true });
exports.LANG_DATE_FORMATS = void 0;
const lang_enums_1 = require("./lang_enums");
exports.LANG_DATE_FORMATS = {
    [lang_enums_1.LangType.en]: {
        fullDate: "YYYY/MM/DD",
        input: "YYYY-MM-DD",
        placeholder: "yyyy-MM-DD",
        fullDateTime: "YYYY/MM/DD - HH:mm:ss",
        bookingTime: "HH:mm:ss DD/MM/YYYY",
        eventCard: "HH:mm MMM DD YYYY",
        api: "YYYY-MM-DDTHH:mm:ss",
        hourMinute: "HH:mm",
        fullTime: "HH:mm:ss",
    },
    [lang_enums_1.LangType.vi]: {
        fullDate: "YYYY/MM/DD",
        input: "YYYY-MM-DD",
        placeholder: "yyyy-MM-DD",
        fullDateTime: "YYYY/MM/DD - HH:mm:ss",
        bookingTime: "HH:mm:ss DD/MM/YYYY",
        eventCard: "HH:mm DD MMMM YYYY",
        api: "YYYY-MM-DDTHH:mm:ss",
        hourMinute: "HH:mm",
        fullTime: "HH:mm:ss",
    },
};
