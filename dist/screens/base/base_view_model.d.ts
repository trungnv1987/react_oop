import { UILoadingCubit } from "../../bloc/cubit";
import { ApiParam } from "../../api/base/api_param";
interface _ApiRequestParam<T> {
    showLoading?: boolean;
    param: ApiParam<T>;
    preload(): Promise<void>;
}
export interface BaseViewModelProps {
}
export declare class BaseViewModel<P extends BaseViewModelProps> {
    loadingCubit: UILoadingCubit;
    props?: P;
    get name(): string;
    viewDidAppear(): void;
    viewDidDisappear(): void;
    constructor(props?: P);
    get loadingController(): UILoadingCubit;
    showLoading(): void;
    hideLoading(): void;
    componentDidMount(): void;
    dispose(): void;
    request<T>(props: _ApiRequestParam<T>): Promise<T | undefined>;
    preload(): Promise<void>;
}
export {};
//# sourceMappingURL=base_view_model.d.ts.map