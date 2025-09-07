import { LogUtil } from "../../utils/log/log_util";
import { ApiMethod, ApiParam } from "./api_param";

export async function requestApi<T>(param: ApiParam<T>): Promise<T | undefined> {
  const url = param.toUrl();
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
  const accessToken = await param.getAccessToken();
  if (param.requireAuth && !accessToken) {
    throw new Error("No access token found");
  }
  if (param.requireAuth || ( param.shouldAuthIfPossile && accessToken)) {
    // Token should be provided by the consuming application
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  console.log(
    `request: url: ${url} 
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
