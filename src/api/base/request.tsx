import { GlobalConfig, BuildEnv } from "../../config/config";
import { LogUtil } from "../../utils/log/log_util";
import { ApiMethod, ApiParam } from "./api_param";

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
