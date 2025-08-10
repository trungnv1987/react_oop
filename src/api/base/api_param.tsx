import { GlobalConfig } from "react_oop/config/config";
import { ApiMethod } from "./base_api";

export interface ApiParamProps {}
export abstract class ApiParam<T, P extends ApiParamProps = ApiParamProps> {
  abstract route: string;
  abstract parser(json: any): Promise<T | undefined>;
  queryParam?: Object; // ?name=1&a=2
  slashParam?: Object; // ?/event/id/
  shouldLog = false; //log to server
  rootURL?: string;
  body?: Object;
  isSuccess = false;
  isRoot = false; //use nextjs api
  props: P;
  message?: string;
  showErrorMessage?: boolean;
  requireAuth = false; // Default to false, set to true for endpoints requiring authentication
  constructor(props: P) {
    this.props = props;
  }

  method = ApiMethod.get;

  async onDone(_?: T) {}
  toUrl(): string {
    let uri: string = this.route;
    const queryParam: Record<string, any> = { ...this.queryParam }; // Example: { name: "John", age: 25 }
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
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            String(value)
          )}`;
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
