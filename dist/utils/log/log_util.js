"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogUtil = void 0;
class LogUtil {
    static debug(message, ...args) {
        console.debug(message, ...args);
    }
    static error(message, ...args) {
        console.error(message, ...args);
    }
    static info(message, ...args) {
        console.info(message, ...args);
    }
}
exports.LogUtil = LogUtil;
LogUtil.sum = (a, b) => a + b;
