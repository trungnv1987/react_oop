export {};
import "dayjs/locale/vi";
import "dayjs/locale/en";
declare global {
    interface Date {
        toUtcTime(): Date;
        formatApi(): string;
        formatDateOnly(): string;
    }
}
//# sourceMappingURL=date_ext.d.ts.map