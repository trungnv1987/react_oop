export default class NumberUtil {
    static tryParseInt(value) {
        if (value === undefined || value === null) {
            return undefined;
        }
        if (typeof value === "number") {
            const result = Math.trunc(value);
            return result;
        }
        value = value === null || value === void 0 ? void 0 : value.trim();
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed)) {
            const result = Math.trunc(parsed);
            return result;
        }
        return undefined;
    }
    static beautifyNumber({ value, minimumFractionDigits = 2, }) {
        if (value == null)
            return undefined;
        const hasDecimal = value % 1 !== 0;
        const formatter = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: hasDecimal ? minimumFractionDigits : 0,
            maximumFractionDigits: minimumFractionDigits,
        });
        const result = formatter.format(value);
        return result;
    }
    static tryParseDouble(value) {
        if (value === undefined || value === null) {
            return undefined;
        }
        value = value.trim();
        const parsed = parseFloat(value);
        // Check if the parsed result is a valid number
        return isNaN(parsed) ? undefined : parsed;
    }
    static floatToString(num) {
        if (!num)
            return undefined;
        // Remove trailing zeroes after the decimal point
        return num % 1 === 0
            ? num.toString()
            : parseFloat(num.toFixed(10)).toString();
    }
}
