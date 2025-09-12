import { LoadMoreDataResult } from "../controllers/load_more_controller/loadmore_data";
export declare class ApiResponse<T> {
    success?: boolean;
    data?: T;
    count?: number;
    message?: string;
    code?: number;
    constructor(props: Partial<ApiResponse<T>>);
    static fromJson<T>({ json, parser, }: {
        json: any;
        parser: (json: any) => T | undefined;
    }): ApiResponse<T> | undefined;
    static fromJsons<T>({ json, parser, }: {
        json: any;
        parser: (json: any) => T | undefined;
    }): ItemsApiResponse<T> | undefined;
}
export declare class ItemsApiRequest {
    offset?: number;
    limit?: number;
    constructor(props?: Partial<ItemsApiRequest>);
    toQueryParam(): Record<string, any>;
}
export declare class ItemsApiResponse<T> extends ApiResponse<T[]> {
    get length(): number | undefined;
    toLoadMoreResult(): LoadMoreDataResult<T> | undefined;
}
//# sourceMappingURL=_api.d.ts.map