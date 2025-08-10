import { GlobalConfig } from "../../config/config";
import { ApiMethod } from "./base_api";
export class ApiParam {
    constructor(props) {
        this.shouldLog = false; //log to server
        this.isSuccess = false;
        this.isRoot = false; //use nextjs api
        this.requireAuth = false; // Default to false, set to true for endpoints requiring authentication
        this.method = ApiMethod.get;
        this.props = props;
    }
    async onDone(_) { }
    toUrl() {
        let uri = this.route;
        const queryParam = Object.assign({}, this.queryParam); // Example: { name: "John", age: 25 }
        const slashParam = this.slashParam; // Example: { id: 2 }
        // Replace placeholders in URI with values from slashParam
        const kNotEncodeParams = ["created_by", "last_updated_at"];
        if (slashParam) {
            Object.entries(slashParam).forEach(([key, value]) => {
                uri = uri.replace(`{${key}}`, encodeURIComponent(String(value)));
            });
        }
        // Append query parameters
        if (queryParam) {
            const queryString = Object.entries(queryParam)
                .map(([key, value]) => {
                if (kNotEncodeParams.includes(key)) {
                    return `${key}=${value}`;
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
            })
                .join("&");
            if (queryString) {
                uri += (uri.includes("?") ? "&" : "?") + queryString;
            }
        }
        let rootURL = this.rootURL;
        if (!rootURL) {
            rootURL = GlobalConfig.apiUrl();
        }
        if (this.isRoot) {
            rootURL = "/";
        }
        const url = rootURL + uri;
        return url;
    }
}
