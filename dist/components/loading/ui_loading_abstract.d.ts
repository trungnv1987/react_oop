import { Component } from "react";
import { UILoadingCubit } from "../../bloc/cubit";
export interface UILoadingProps {
    controller: UILoadingCubit;
    children?: JSX.Element;
}
export declare abstract class UILoadingBase extends Component<UILoadingProps> {
    protected controller: UILoadingCubit;
    abstract build(isLoading: boolean): JSX.Element;
    constructor(props: UILoadingProps);
    render(): JSX.Element;
}
//# sourceMappingURL=ui_loading_abstract.d.ts.map