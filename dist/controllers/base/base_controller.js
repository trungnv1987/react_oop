"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const request_api_1 = require("../../api/base/request_api");
class BaseController {
    async request(param) {
        const result = await (0, request_api_1.requestApi)(param);
        return result;
    }
    dispose() {
    }
}
exports.BaseController = BaseController;
