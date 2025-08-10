import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "../base/base_api";
export interface SaveFormsApiParamProps extends ApiParamProps {
    json: any;
}
export declare class SaveFormsApi extends ApiParam<any, SaveFormsApiParamProps> {
    route: ApiRoute;
    method: ApiMethod;
    requireAuth: boolean;
    showErrorMessage: boolean;
    constructor(props: SaveFormsApiParamProps);
    parser(json: any): any;
}
//# sourceMappingURL=save_forms_api.d.ts.map