import { BaseViewModel, BaseViewModelProps } from "./base_view_model";
import { Component, ReactNode } from "react";
import "../../utils/exts";
export interface BaseScreenProps<VMP extends BaseViewModelProps> {
    viewModelProps?: VMP;
}
export declare abstract class BaseScreen<VMP extends BaseViewModelProps> extends Component<BaseScreenProps<VMP>> {
    viewModel: BaseViewModel<VMP>;
    abstract createViewModel(props?: VMP): BaseViewModel<VMP>;
    abstract build(): ReactNode;
    constructor(props?: BaseScreenProps<VMP>);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
//# sourceMappingURL=base_screen.d.ts.map