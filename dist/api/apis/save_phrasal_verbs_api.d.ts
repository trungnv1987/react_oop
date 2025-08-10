import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "../base/base_api";
export interface SavePhrasalVerbsApiParamProps extends ApiParamProps {
    json: any;
}
export declare class SavePhrasalVerbsApi extends ApiParam<any, SavePhrasalVerbsApiParamProps> {
    route: ApiRoute;
    method: ApiMethod;
    requireAuth: boolean;
    showErrorMessage: boolean;
    constructor(props: SavePhrasalVerbsApiParamProps);
    parser(json: any): any;
}
//# sourceMappingURL=save_phrasal_verbs_api.d.ts.map