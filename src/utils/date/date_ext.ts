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
    addDays(days: number): Date;
    addHours(hours: number): Date;
    addMinutes(minutes: number): Date;
    addSeconds(seconds: number): Date;
    addMilliseconds(milliseconds: number): Date;
    addMonths(months: number): Date;
    addYears(years: number): Date;
    subtractDays(days: number): Date;
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

Date.prototype.addDays = function (days: number): Date {
  return new Date(this.getTime() + days * 24 * 60 * 60 * 1000);
};

Date.prototype.addHours = function (hours: number): Date {
  return new Date(this.getTime() + hours * 60 * 60 * 1000);
};

Date.prototype.addMinutes = function (minutes: number): Date {
  return new Date(this.getTime() + minutes * 60 * 1000);
};

Date.prototype.addSeconds = function (seconds: number): Date {
  return new Date(this.getTime() + seconds * 1000);
};

Date.prototype.addMilliseconds = function (milliseconds: number): Date {
  return new Date(this.getTime() + milliseconds);
};

Date.prototype.addMonths = function (months: number): Date {
  return new Date(this.getTime() + months * 30 * 24 * 60 * 60 * 1000);
};

Date.prototype.addYears = function (years: number): Date {
  return new Date(this.getTime() + years * 365 * 24 * 60 * 60 * 1000);
};

Date.prototype.subtractDays = function (days: number): Date {
  return new Date(this.getTime() - days * 24 * 60 * 60 * 1000);
};