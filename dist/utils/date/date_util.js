"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
require("dayjs/locale/vi");
require("dayjs/locale/en");
require("./date_ext");
const date_enums_1 = require("../../enums/date_enums");
const lang_enums_1 = require("../../enums/lang_enums");
dayjs_1.default.extend(utc_1.default); // Enable UTC support
dayjs_1.default.extend(timezone_1.default);
class DateUtil {
    static formatQuizDate() {
        const date = new Date();
        return date.formatDateOnly();
    }
    static get localId() {
        const time = Date.now();
        const random = Math.floor(Math.random() * 1000);
        time * 1000 + random;
        return time;
    }
    static get currentEpochTime() {
        const time = Date.now();
        return time;
    }
    static parseServerDate(value) {
        const { string, toUtcTime, formatter } = value;
        if (!string)
            return undefined;
        let date = new Date(string.slice(0, 23) + "Z");
        // Check if the date is valid
        if (isNaN(date.getTime())) {
            return undefined;
        }
        if (toUtcTime) {
            date = date.toUtcTime();
        }
        return date;
    }
    static parseGeneric(value) {
        const formatter = value.formatter;
        const string = value.string;
        if (!formatter || !string)
            return undefined;
        const date = (0, dayjs_1.default)(string, formatter).toDate();
        return date;
    }
    static parseISODate(value) {
        const string = value.string;
        if (!string)
            return undefined;
        let date = new Date(string);
        // Check if the date is valid
        if (isNaN(date.getTime())) {
            return undefined;
        }
        if (value.toUtcTime) {
            date = date.toUtcTime();
        }
        return date;
    }
    // Date manipulation and formatting methods corresponding to date_ext.ts prototype extensions
    static toUtcTime(date) {
        return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }
    static formatApi(date) {
        const result = (0, dayjs_1.default)(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
        return result;
    }
    static formatDateOnly(date) {
        const result = (0, dayjs_1.default)(date).format(date_enums_1.LANG_DATE_FORMATS[lang_enums_1.AppLang.currentLang].input);
        return result;
    }
    static addDays(date, days) {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
    static addHours(date, hours) {
        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }
    static addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60 * 1000);
    }
    static addSeconds(date, seconds) {
        return new Date(date.getTime() + seconds * 1000);
    }
    static addMilliseconds(date, milliseconds) {
        return new Date(date.getTime() + milliseconds);
    }
    static addMonths(date, months) {
        return new Date(date.getTime() + months * 30 * 24 * 60 * 60 * 1000);
    }
    static addYears(date, years) {
        return new Date(date.getTime() + years * 365 * 24 * 60 * 60 * 1000);
    }
    static subtractDays(date, days) {
        return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    }
}
exports.DateUtil = DateUtil;
