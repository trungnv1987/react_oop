import { ApiParam } from "../../api/base/api_param";
import { requestApi  } from "../../api/base/request_api";

export class BaseController {
  async request<T>(param: ApiParam<T>): Promise<T | undefined> {
    const result = await requestApi<T>(param);
    return result;
  }

  dispose() {
  }
}