import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "../base/base_api";
export interface SaveWordsApiParamProps extends ApiParamProps {
    json: any;
}
export declare class SaveWordsApi extends ApiParam<any, SaveWordsApiParamProps> {
    route: ApiRoute;
    method: ApiMethod;
    requireAuth: boolean;
    showErrorMessage: boolean;
    constructor(props: SaveWordsApiParamProps);
    parser(json: any): any;
}
//# sourceMappingURL=save_words_api.d.ts.map