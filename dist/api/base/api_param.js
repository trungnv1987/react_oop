"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiParam = exports.ApiRoute = exports.ApiMethod = void 0;
const config_1 = require("../../config/config");
var ApiMethod;
(function (ApiMethod) {
    ApiMethod["get"] = "GET";
    ApiMethod["post"] = "POST";
    ApiMethod["put"] = "PUT";
    ApiMethod["patch"] = "PATCH";
    ApiMethod["delete"] = "DELETE";
})(ApiMethod || (exports.ApiMethod = ApiMethod = {}));
var ApiRoute;
(function (ApiRoute) {
    ApiRoute["saveWords"] = "save_words";
    ApiRoute["saveForms"] = "save_forms";
    ApiRoute["saveMeanings"] = "save_meanings";
    ApiRoute["savePhrasalVerbs"] = "save_phrasal_verbs";
    ApiRoute["getWord"] = "get_word";
    ApiRoute["getWords"] = "get_words";
})(ApiRoute || (exports.ApiRoute = ApiRoute = {}));
class ApiParam {
    constructor(props) {
        this.isMobile = false;
        this.isChatbot = false;
        this.shouldLog = false; //log to server
        this.isSuccess = false;
        this.requireAuth = false; // Default to false, set to true for endpoints requiring authentication
        this.method = ApiMethod.get;
        this.props = props;
    }
    async onDone(_) { }
    toUrl() {
        var _a;
        let uri = this.route;
        const env = config_1.GlobalConfig.env;
        const queryParam = (_a = this.queryParam) !== null && _a !== void 0 ? _a : {}; // Example: { name: "John", age: 25 }
        const slashParam = this.slashParam; // Example: { id: 2 }
        // Replace placeholders in URI with values from slashParam
        if (slashParam) {
            Object.entries(slashParam).forEach(([key, value]) => {
                uri = uri.replace(`{${key}}`, encodeURIComponent(String(value)));
            });
        }
        // Append query parameters
        if (queryParam) {
            const queryString = Object.entries(queryParam)
                .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
                .join("&");
            if (queryString) {
                uri += (uri.includes("?") ? "&" : "?") + queryString;
            }
        }
        const rootURL = config_1.GlobalConfig.apiUrl();
        console.log(`uri ${uri} rootURL ${rootURL}`);
        const url = new URL(uri, rootURL).toString();
        return url;
    }
}
exports.ApiParam = ApiParam;
