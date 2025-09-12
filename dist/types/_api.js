"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsApiResponse = exports.ItemsApiRequest = exports.ApiResponse = void 0;
const number_util_1 = require("../utils/number/number_util");
class ApiResponse {
    constructor(props) {
        this.success = props.success;
        this.data = props.data;
        this.count = props.count;
        this.message = props.message;
        this.code = props.code;
    }
    static fromJson({ json, parser, }) {
        if (!json)
            return undefined;
        const data = json.data;
        let result = parser(data);
        return new ApiResponse({
            success: json.success,
            code: number_util_1.NumberUtil.tryParseInt(json.code),
            data: result,
            message: json.message,
        });
    }
    static fromJsons({ json, parser, }) {
        if (!json)
            return undefined;
        const data = json.data;
        let result;
        if (data && Array.isArray(data)) {
            result = data.map(parser).filter((item) => item !== undefined);
        }
        return new ItemsApiResponse({
            success: json.success,
            code: number_util_1.NumberUtil.tryParseInt(json.code),
            count: number_util_1.NumberUtil.tryParseInt(json.count),
            data: result,
            message: json.message,
        });
    }
}
exports.ApiResponse = ApiResponse;
class ItemsApiRequest {
    constructor(props = {}) {
        this.offset = props.offset;
        this.limit = props.limit;
    }
    toQueryParam() {
        const params = {};
        if (this.offset !== undefined)
            params.offset = this.offset;
        if (this.limit !== undefined)
            params.limit = this.limit;
        return params;
    }
}
exports.ItemsApiRequest = ItemsApiRequest;
class ItemsApiResponse extends ApiResponse {
    get length() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.length;
    }
    toLoadMoreResult() {
        const data = this.data;
        const count = this.count;
        if (!data)
            return undefined;
        return {
            items: data,
            total: count !== null && count !== void 0 ? count : 0,
        };
    }
}
exports.ItemsApiResponse = ItemsApiResponse;
