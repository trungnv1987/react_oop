import GlobalConfig, { BuildEnv } from "../../config/config";
import LogUtil from "../../utils/log/log_util";
export var ApiRoute;
(function (ApiRoute) {
    ApiRoute["saveWords"] = "save_words";
    ApiRoute["saveForms"] = "save_forms";
    ApiRoute["saveMeanings"] = "save_meanings";
    ApiRoute["savePhrasalVerbs"] = "save_phrasal_verbs";
    ApiRoute["getWord"] = "get_word";
    ApiRoute["getWords"] = "get_words";
})(ApiRoute || (ApiRoute = {}));
export var ApiMethod;
(function (ApiMethod) {
    ApiMethod["get"] = "GET";
    ApiMethod["post"] = "POST";
    ApiMethod["put"] = "PUT";
    ApiMethod["patch"] = "PATCH";
    ApiMethod["delete"] = "DELETE";
})(ApiMethod || (ApiMethod = {}));
export class ApiParam {
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
        const env = GlobalConfig.env;
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
        const rootURL = GlobalConfig.apiUrl();
        console.log(`uri ${uri} rootURL ${rootURL}`);
        const url = new URL(uri, rootURL).toString();
        return url;
    }
}
export async function request(param) {
    var _a, _b;
    const url = param.toUrl();
    const env = GlobalConfig.env;
    const method = param.method;
    let body;
    if (param.rawBody) {
        body = param.rawBody;
    }
    else {
        body = param.body ? JSON.stringify(param.body) : undefined;
    }
    // Add auth token to headers
    const headers = Object.assign({ "Content-Type": (_b = (_a = param.headers) === null || _a === void 0 ? void 0 : _a["Content-Type"]) !== null && _b !== void 0 ? _b : "application/json" }, param.headers);
    if (param.requireAuth) {
        // Token should be provided by the consuming application
        headers["Authorization"] = `Bearer `;
    }
    const shouldLog = env == BuildEnv.dev || env == BuildEnv.stag;
    console.log(`request: env ${env} url: ${url} 
    method ${method}
    headers: ${headers && JSON.stringify(headers)} 
    ${body ? `body ${JSON.stringify(body)}` : ""}`);
    try {
        // Get access token from cookies if requiresAuth is true
        const accessToken = "";
        // if (param.requireAuth) {
        //   if (accessToken) {
        //     headers["Authorization"] = `Bearer ${accessToken}`;
        //   } else {
        //     throw new Error("No access token found");
        //   }
        // }
        const request = await fetch(url, {
            method: method,
            headers: headers,
            body: body,
        });
        // Check if there's content before parsing JSON
        const contentType = request.headers.get("content-type");
        const successCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208];
        const isSuccess = successCodes.includes(request.status);
        param.isSuccess = isSuccess;
        let json = {};
        if (contentType &&
            contentType.includes("application/json") &&
            request.status !== 204) {
            const text = await request.text();
            json = text ? JSON.parse(text) : {};
        }
        // Safely access the detail property if it exists in the response
        const message = json && typeof json === "object" && "detail" in json
            ? json.detail
            : undefined;
        if (message) {
            param.message = message;
        }
        const result = param.parser(json);
        if (param.method == ApiMethod.post) {
            LogUtil.debug(`request_result ${JSON.stringify(json)}`);
        }
        await param.onDone(result);
        if (param.message && param.showErrorMessage == true) {
            // if (!isSuccess) ToastUtil.error(param.message);
        }
        return result;
    }
    catch (error) {
        console.error(`Request_failed: ${error} url ${url} method ${method} body ${body}`);
        return undefined;
    }
}
