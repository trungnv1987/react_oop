export declare enum ApiMethod {
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE"
}
export declare enum ApiRoute {
    none = ""
}
export interface ApiParamProps {
}
export declare abstract class ApiParam<T, P extends ApiParamProps = ApiParamProps> {
    abstract route: ApiRoute | string;
    abstract parser(json: any): T | undefined;
    queryParam?: Record<string, any>;
    slashParam?: Object;
    shouldLog: boolean;
    rootURL?: string;
    body?: Object;
    rawBody?: any;
    isSuccess: boolean;
    props: P;
    message?: string;
    showErrorMessage?: boolean;
    requireAuth: boolean;
    shouldAuthIfPossile: boolean;
    headers?: Record<string, any>;
    constructor(props: P);
    abstract getAccessToken(): Promise<string | undefined>;
    method: ApiMethod;
    onDone(_?: T): Promise<void>;
    toUrl(): string;
}
//# sourceMappingURL=api_param.d.ts.map