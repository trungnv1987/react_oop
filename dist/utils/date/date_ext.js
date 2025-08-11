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
