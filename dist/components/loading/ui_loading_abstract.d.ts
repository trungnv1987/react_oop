import { ReactNode, Component } from "react";
import { UILoadingCubit } from "shared/bloc/cubit";
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
export default UILoadingBase;
//# sourceMappingURL=ui_loading_abstract.d.ts.map