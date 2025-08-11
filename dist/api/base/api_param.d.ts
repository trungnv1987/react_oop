export declare enum ApiMethod {
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE"
}
export declare enum ApiRoute {
    saveWords = "save_words",
    saveForms = "save_forms",
    saveMeanings = "save_meanings",
    savePhrasalVerbs = "save_phrasal_verbs",
    getWord = "get_word",
    getWords = "get_words"
}
export interface ApiParamProps {
}
export declare abstract class ApiParam<T, P extends ApiParamProps = ApiParamProps> {
    abstract route: ApiRoute | string;
    abstract parser(json: any): T | undefined;
    isMobile: boolean;
    isChatbot: boolean;
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
    headers?: Record<string, any>;
    constructor(props: P);
    method: ApiMethod;
    onDone(_?: T): Promise<void>;
    toUrl(): string;
}
//# sourceMappingURL=api_param.d.ts.map