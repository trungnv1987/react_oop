export declare class NumberUtil {
    static tryParseInt(value: any): number | undefined;
    static beautifyNumber({ value, minimumFractionDigits, }: {
        value: number | undefined;
        minimumFractionDigits?: number;
    }): string | undefined;
    static tryParseDouble(value: string | undefined | null): number | undefined;
    static floatToString(num: number | undefined): string | undefined;
}
//# sourceMappingURL=number_util.d.ts.map