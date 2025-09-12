import { LoadMoreDataResult } from "../controllers/load_more_controller/loadmore_data";
import { NumberUtil } from "../utils/number/number_util";

export class ApiResponse<T> {
  success?: boolean;
  data?: T;
  count?: number;
  message?: string;
  code?: number;

  constructor(props: Partial<ApiResponse<T>>) {
    this.success = props.success;
    this.data = props.data;
    this.count = props.count;
    this.message = props.message;
    this.code = props.code;
  }

  static fromJson<T>({
    json,
    parser,
  }: {
    json: any;
    parser: (json: any) => T | undefined;
  }): ApiResponse<T> | undefined {
    if (!json) return undefined;
    const data = json.data;
    let result = parser(data);
    return new ApiResponse<T>({
      success: json.success,
      code: NumberUtil.tryParseInt(json.code),
      data: result,
      message: json.message,
    });
  }

  static fromJsons<T>({
    json,
    parser,
  }: {
    json: any;
    parser: (json: any) => T | undefined;
  }): ItemsApiResponse<T> | undefined {
    if (!json) return undefined;
    const data = json.data;
    let result: T[] | undefined;
    if (data && Array.isArray(data)) {
      result = data.map(parser).filter((item): item is T => item !== undefined);
    }

    return new ItemsApiResponse<T>({
      success: json.success,
      code: NumberUtil.tryParseInt(json.code),
      count: NumberUtil.tryParseInt(json.count),
      data: result,
      message: json.message,
    });
  }
}

export class ItemsApiRequest {
  offset?: number;
  limit?: number;

  constructor(props: Partial<ItemsApiRequest> = {}) {
    this.offset = props.offset;
    this.limit = props.limit;
  }

  toQueryParam() {
    const params: Record<string, any> = {};
    if (this.offset !== undefined) params.offset = this.offset;
    if (this.limit !== undefined) params.limit = this.limit;
    return params;
  }
}
export class ItemsApiResponse<T> extends ApiResponse<T[]> {

  get length(): number | undefined {
    return this.data?.length;
  }

  toLoadMoreResult(): LoadMoreDataResult<T> | undefined {
    const data = this.data;
    const count = this.count;
    if (!data) return undefined;
    return {
      items: data,
      total: count ?? 0,
    };
  }
}
