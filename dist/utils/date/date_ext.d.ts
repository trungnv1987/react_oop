export {};
import "dayjs/locale/vi";
import "dayjs/locale/en";
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
//# sourceMappingURL=date_ext.d.ts.map