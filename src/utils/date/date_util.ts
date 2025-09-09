import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/vi";
import "dayjs/locale/en";
import "./date_ext";
import { LANG_DATE_FORMATS } from "../../enums/date_enums";
import { AppLang } from "../../enums/lang_enums";
dayjs.extend(utc); // Enable UTC support
dayjs.extend(timezone);

export interface DateParserProps {
  string?: string;
  toUtcTime: boolean;
  formatter?: string;
}

export class DateUtil {
  static formatQuizDate(): string {
    const date = new Date();
    return date.formatDateOnly();
  }
  static get localId(): number {
    const time = Date.now();
    const random = Math.floor(Math.random() * 1000);
    time * 1000 + random;
    return time;
  }
  static get currentEpochTime(): number {
    const time = Date.now();
    return time;
  }

  static parseServerDate(value: DateParserProps): Date | undefined {
    const { string, toUtcTime, formatter } = value;
    if (!string) return undefined;
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

  static parseGeneric(value: DateParserProps): Date | undefined {
    const formatter = value.formatter;
    const string = value.string;
    if (!formatter || !string) return undefined;
    const date = dayjs(string, formatter).toDate();
    return date;
  }

  static parseISODate(value: DateParserProps): Date | undefined {
    const string = value.string;
    if (!string) return undefined;
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
  
  static toUtcTime(date: Date): Date {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  }

  static formatApi(date: Date): string {
    const result = dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
    return result;
  }

  static formatDateOnly(date: Date): string {
    const result = dayjs(date).format(
      LANG_DATE_FORMATS[AppLang.currentLang].input
    );
    return result;
  }

  static addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  static addHours(date: Date, hours: number): Date {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
  }

  static addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60 * 1000);
  }

  static addSeconds(date: Date, seconds: number): Date {
    return new Date(date.getTime() + seconds * 1000);
  }

  static addMilliseconds(date: Date, milliseconds: number): Date {
    return new Date(date.getTime() + milliseconds);
  }

  static addMonths(date: Date, months: number): Date {
    return new Date(date.getTime() + months * 30 * 24 * 60 * 60 * 1000);
  }

  static addYears(date: Date, years: number): Date {
    return new Date(date.getTime() + years * 365 * 24 * 60 * 60 * 1000);
  }

  static subtractDays(date: Date, days: number): Date {
    return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  }
}
