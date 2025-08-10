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
}
//# sourceMappingURL=date_util.d.ts.map