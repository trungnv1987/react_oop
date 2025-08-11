"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUtil = void 0;
class LogUtil {
    static debug(message) {
        console.debug(message);
    }
    static error(message) {
        console.error(message);
    }
    static info(message) {
        console.info(message);
    }
}
exports.LogUtil = LogUtil;
LogUtil.sum = (a, b) => a + b;
