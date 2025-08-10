import { GlobalConfig, BuildEnv } from "../../config/config";
import { LogUtil } from "../../utils/log/log_util";
import * as pathLib from "path";
export enum ApiRoute {
  saveWords = "save_words",
  saveForms = "save_forms",
  saveMeanings = "save_meanings",
  savePhrasalVerbs = "save_phrasal_verbs",
  getWord = "get_word",
  getWords = "get_words",
}
export enum ApiMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  delete = "DELETE",
}

export interface ApiParamProps {}
export abstract class ApiParam<T, P extends ApiParamProps = ApiParamProps> {
  abstract route: ApiRoute;
  abstract parser(json: any): T | undefined;
  isMobile = false;
  isChatbot = false;
  queryParam?: Record<string, any>; // ?name=1&a=2
  slashParam?: Object; // ?/event/id/
  shouldLog = false; //log to server
  rootURL?: string;
  body?: Object;
  rawBody?: any;
  isSuccess = false;
  props: P;
  message?: string;
  showErrorMessage?: boolean;
  requireAuth = false; // Default to false, set to true for endpoints requiring authentication
  headers?: Record<string, any>;
  constructor(props: P) {
    this.props = props;
  }

  method = ApiMethod.get;

  async onDone(_?: T) {}
  toUrl(): string {
    let uri: string = this.route;
    const env = GlobalConfig.env;
    const queryParam: any = this.queryParam ?? {}; // Example: { name: "John", age: 25 }
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

export async function request<T>(param: ApiParam<T>): Promise<T | undefined> {
  const url = param.toUrl();
  const env = GlobalConfig.env;
  const method = param.method;
  let body;
  if (param.rawBody) {
    body = param.rawBody;
  } else {
    body = param.body ? JSON.stringify(param.body) : undefined;
  }

  // Add auth token to headers
  const headers: Record<string, string> = {
    "Content-Type": param.headers?.["Content-Type"] ?? "application/json",
    ...param.headers,
  };
  if (param.requireAuth) {
    // Token should be provided by the consuming application
    headers["Authorization"] = `Bearer `;
  }

  const shouldLog = env == BuildEnv.dev || env == BuildEnv.stag;

  console.log(
    `request: env ${env} url: ${url} 
    method ${method}
    headers: ${headers && JSON.stringify(headers)} 
    ${body ? `body ${JSON.stringify(body)}` : ""}`
  );
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
    let json: any = {};
    if (
      contentType &&
      contentType.includes("application/json") &&
      request.status !== 204
    ) {
      const text = await request.text();
      json = text ? JSON.parse(text) : {};
    }

    // Safely access the detail property if it exists in the response
    const message =
      json && typeof json === "object" && "detail" in json
        ? (json.detail as string)
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
  } catch (error) {
    console.error(
      `Request_failed: ${error} url ${url} method ${method} body ${body}`
    );
    return undefined;
  }
}
