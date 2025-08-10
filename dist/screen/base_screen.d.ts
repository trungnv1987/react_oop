import { BaseViewModel } from "../view_model/base_view_model";
import { Context } from "react";
import "../utils/exts";
export interface BaseScreenProps<VM extends BaseViewModel> {
    children: JSX.Element;
    viewModel: VM;
    viewModelContext: Context<VM | undefined>;
    dialogs?: JSX.Element[];
}
export declare function BaseScreen<VM extends BaseViewModel>({ children, viewModel, viewModelContext, dialogs, }: BaseScreenProps<VM>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=base_screen.d.ts.map