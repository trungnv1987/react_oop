import { NumberUtil } from "../number/number_util";
export class ArrayUtil {
    static splitStringToInts(str) {
        if (!str || typeof str !== "string" || str.isEmpty())
            return undefined;
        const result = str
            .split(",")
            .map((item) => NumberUtil.tryParseInt(item))
            .whereNotNull()
            .nullIfEmpty();
        return result;
    }
}
