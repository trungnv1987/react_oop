import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/vi";
import "dayjs/locale/en";
import "./date_ext";
dayjs.extend(utc); // Enable UTC support
dayjs.extend(timezone);
export class DateUtil {
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
        const date = dayjs(string, formatter).toDate();
        return date;
    }
}
