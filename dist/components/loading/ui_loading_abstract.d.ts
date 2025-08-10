import { ReactNode, Component } from "react";
import { UILoadingCubit } from "react_oop/bloc/cubit";
export interface UILoadingProps {
    controller: UILoadingCubit;
    children?: ReactNode;
}
export declare abstract class UILoadingBase extends Component<UILoadingProps> {
    protected controller: UILoadingCubit;
    abstract build(isLoading: boolean): JSX.Element;
    constructor(props: UILoadingProps);
    render(): ReactNode;
}
//# sourceMappingURL=ui_loading_abstract.d.ts.map