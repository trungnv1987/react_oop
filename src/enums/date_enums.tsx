// https://day.js.org/docs/en/display/format#list-of-localized-formats

import { LangType } from "./lang_enums";

export interface DateFormatType {
  fullDate: string; //YYYY/MM/DD
  fullDateTime: string; //YYYY/MM/DD - HH:mm:ss
  input: string; //YYYY-MM-DD
  bookingTime: string; //HH:mm:ss DD/MM/YYYY
  placeholder: string;
  eventCard: string; //HH:mm DD/MM/YYYY
  api: string; //YYYY-MM-DD'T'HH:mm:ss
  hourMinute: string; // HH:mm
  fullTime: string; // HH:mm:ss
}

export const LANG_DATE_FORMATS: Record<LangType, DateFormatType> = {
  [LangType.en]: {
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
  [LangType.vi]: {
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
