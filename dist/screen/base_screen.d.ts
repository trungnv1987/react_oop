import BaseViewModel from "react_oop/view_model/base_view_model";
import { Context, ReactNode } from "react";
import "react_oop/utils/exts";
export interface BaseScreenProps<VM extends BaseViewModel> {
    children: ReactNode;
    viewModel: VM;
    viewModelContext: Context<VM | undefined>;
    dialogs?: ReactNode[];
}
export declare function BaseScreen<VM extends BaseViewModel>({ children, viewModel, viewModelContext, dialogs, }: BaseScreenProps<VM>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=base_screen.d.ts.map