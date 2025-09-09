import "dayjs/locale/vi";
import "dayjs/locale/en";
import "./date_ext";
export interface DateParserProps {
    string?: string;
    toUtcTime: boolean;
    formatter?: string;
}
export declare class DateUtil {
    static formatQuizDate(): string;
    static get localId(): number;
    static get currentEpochTime(): number;
    static parseServerDate(value: DateParserProps): Date | undefined;
    static parseGeneric(value: DateParserProps): Date | undefined;
    static parseISODate(value: DateParserProps): Date | undefined;
    static toUtcTime(date: Date): Date;
    static formatApi(date: Date): string;
    static formatDateOnly(date: Date): string;
    static addDays(date: Date, days: number): Date;
    static addHours(date: Date, hours: number): Date;
    static addMinutes(date: Date, minutes: number): Date;
    static addSeconds(date: Date, seconds: number): Date;
    static addMilliseconds(date: Date, milliseconds: number): Date;
    static addMonths(date: Date, months: number): Date;
    static addYears(date: Date, years: number): Date;
    static subtractDays(date: Date, days: number): Date;
}
//# sourceMappingURL=date_util.d.ts.map