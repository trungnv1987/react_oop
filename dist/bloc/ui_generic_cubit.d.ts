import { GenericCubit } from "./cubit";
import { UIComponentProps } from "../enums/ui_enums";
export interface UIGenericCubitProps<T> extends UIComponentProps {
    children: (value?: T) => JSX.Element;
    cubit: GenericCubit<T>;
}
export declare abstract class UIGenericCubitBase<T> {
    protected props: UIGenericCubitProps<T>;
    constructor(props: UIGenericCubitProps<T>);
    abstract render(): JSX.Element;
    abstract getClassName(): string;
}
export declare function UIGenericCubit<T>({ children, cubit, className, ...props }: UIGenericCubitProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ui_generic_cubit.d.ts.map