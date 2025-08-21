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
}
exports.DateUtil = DateUtil;
