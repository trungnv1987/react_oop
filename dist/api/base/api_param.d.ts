import { ApiMethod } from "./base_api";
export interface ApiParamProps {
}
export declare abstract class ApiParam<T, P extends ApiParamProps = ApiParamProps> {
    abstract route: string;
    abstract parser(json: any): Promise<T | undefined>;
    queryParam?: Object;
    slashParam?: Object;
    shouldLog: boolean;
    rootURL?: string;
    body?: Object;
    isSuccess: boolean;
    isRoot: boolean;
    props: P;
    message?: string;
    showErrorMessage?: boolean;
    requireAuth: boolean;
    constructor(props: P);
    method: ApiMethod;
    onDone(_?: T): Promise<void>;
    toUrl(): string;
}
//# sourceMappingURL=api_param.d.ts.map