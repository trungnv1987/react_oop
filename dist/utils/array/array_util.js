"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtil = void 0;
const number_util_1 = require("../number/number_util");
class ArrayUtil {
    static splitStringToInts(str) {
        if (!str || typeof str !== "string" || str.isEmpty())
            return undefined;
        const result = str
            .split(",")
            .map((item) => number_util_1.NumberUtil.tryParseInt(item))
            .whereNotNull()
            .nullIfEmpty();
        return result;
    }
}
exports.ArrayUtil = ArrayUtil;
