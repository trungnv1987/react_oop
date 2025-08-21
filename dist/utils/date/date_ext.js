"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
require("dayjs/locale/vi");
require("dayjs/locale/en");
const date_enums_1 = require("../../enums/date_enums");
const lang_enums_1 = require("../../enums/lang_enums");
dayjs_1.default.extend(utc_1.default); // Enable UTC support
dayjs_1.default.extend(timezone_1.default);
Date.prototype.toUtcTime = function () {
    return new Date(this.getTime() + this.getTimezoneOffset() * 60000);
};
Date.prototype.formatApi = function () {
    const result = (0, dayjs_1.default)(this).format("YYYY-MM-DDTHH:mm:ss.SSS");
    return result;
};
Date.prototype.formatDateOnly = function () {
    const result = (0, dayjs_1.default)(this).format(date_enums_1.LANG_DATE_FORMATS[lang_enums_1.AppLang.currentLang].input);
    return result;
};
Date.prototype.addDays = function (days) {
    return new Date(this.getTime() + days * 24 * 60 * 60 * 1000);
};
Date.prototype.addHours = function (hours) {
    return new Date(this.getTime() + hours * 60 * 60 * 1000);
};
Date.prototype.addMinutes = function (minutes) {
    return new Date(this.getTime() + minutes * 60 * 1000);
};
Date.prototype.addSeconds = function (seconds) {
    return new Date(this.getTime() + seconds * 1000);
};
Date.prototype.addMilliseconds = function (milliseconds) {
    return new Date(this.getTime() + milliseconds);
};
Date.prototype.addMonths = function (months) {
    return new Date(this.getTime() + months * 30 * 24 * 60 * 60 * 1000);
};
Date.prototype.addYears = function (years) {
    return new Date(this.getTime() + years * 365 * 24 * 60 * 60 * 1000);
};
Date.prototype.subtractDays = function (days) {
    return new Date(this.getTime() - days * 24 * 60 * 60 * 1000);
};
