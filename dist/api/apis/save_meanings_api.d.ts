import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "../base/base_api";
export interface SaveMeaningsApiParamProps extends ApiParamProps {
    json: any;
}
export declare class SaveMeaningsApi extends ApiParam<any, SaveMeaningsApiParamProps> {
    route: ApiRoute;
    method: ApiMethod;
    requireAuth: boolean;
    showErrorMessage: boolean;
    constructor(props: SaveMeaningsApiParamProps);
    parser(json: any): any;
}
//# sourceMappingURL=save_meanings_api.d.ts.map