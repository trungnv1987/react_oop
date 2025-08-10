export {}; // Mark file as module

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/vi";
import "dayjs/locale/en";
import { LANG_DATE_FORMATS } from "../../enums/date_enums";
import { AppLang } from "../../enums/lang_enums";
dayjs.extend(utc); // Enable UTC support
dayjs.extend(timezone);

declare global {
  interface Date {
    toUtcTime(): Date;
    formatApi(): string;
    formatDateOnly(): string;
  }
}

Date.prototype.toUtcTime = function (): Date {
  return new Date(this.getTime() + this.getTimezoneOffset() * 60000);
};

Date.prototype.formatApi = function (): string {
  const result = dayjs(this).format("YYYY-MM-DDTHH:mm:ss.SSS");
  return result;
};

Date.prototype.formatDateOnly = function (): string {
  const result = dayjs(this).format(
    LANG_DATE_FORMATS[AppLang.currentLang].input
  );
  return result;
};
