import { ReactNode } from "react";
import { GenericCubit } from "./cubit";
import { UIComponentProps } from "../enums/ui_enums";
export interface UIGenericCubitProps<T> extends UIComponentProps {
    children: (value?: T) => ReactNode;
    cubit: GenericCubit<T>;
}
export declare abstract class UIGenericCubitBase<T> {
    protected props: UIGenericCubitProps<T>;
    constructor(props: UIGenericCubitProps<T>);
    abstract render(): ReactNode;
    abstract getClassName(): string;
}
declare function _UIGenericCubitComponent<T>({ children, cubit, className, ...props }: UIGenericCubitProps<T>): import("react/jsx-runtime").JSX.Element;
export declare const UIGenericCubit: typeof _UIGenericCubitComponent;
export {};
//# sourceMappingURL=ui_generic_cubit.d.ts.map