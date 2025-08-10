import { UILoadingCubit } from "../bloc/cubit";
import { ApiParam } from "../api/base/base_api";
interface _ApiRequestParam<T> {
    showLoading?: boolean;
    param: ApiParam<T>;
}
interface _BaseViewModel {
}
export declare class BaseViewModel implements _BaseViewModel {
    loadingCubit: UILoadingCubit;
    get loadingController(): UILoadingCubit;
    showLoading(): void;
    hideLoading(): void;
    componentDidMount(): void;
    dispose(): void;
    request<T>(props: _ApiRequestParam<T>): Promise<T | undefined>;
}
export {};
//# sourceMappingURL=base_view_model.d.ts.map