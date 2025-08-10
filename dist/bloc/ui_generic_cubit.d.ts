import { Component } from "react";
import { GenericCubit } from "./cubit";
import { UIComponentProps } from "../enums/ui_enums";
export interface UIGenericCubitProps<T> extends UIComponentProps {
    cubit: GenericCubit<T>;
}
export declare abstract class UIGenericCubit<T> extends Component<UIGenericCubitProps<T>> {
    protected cubit: GenericCubit<T>;
    constructor(props: UIGenericCubitProps<T>);
    abstract build(value?: T): JSX.Element;
    render(): JSX.Element;
}
//# sourceMappingURL=ui_generic_cubit.d.ts.map