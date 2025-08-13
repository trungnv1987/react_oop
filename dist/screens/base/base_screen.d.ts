import { Context, ReactNode } from "react";
import { BaseViewModel } from "./base_view_model";
export interface BaseScreenProps<VM extends BaseViewModel<any>> {
    children: ReactNode;
    viewModel: VM;
    viewModelContext: Context<VM | undefined>;
}
export declare function BaseScreen<VM extends BaseViewModel<any>>({ children, viewModel, viewModelContext, }: BaseScreenProps<VM>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=base_screen.d.ts.map