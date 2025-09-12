import { ApiParam } from "../../api/base/api_param";
export declare class BaseController {
    request<T>(param: ApiParam<T>): Promise<T | undefined>;
    dispose(): void;
}
//# sourceMappingURL=base_controller.d.ts.map