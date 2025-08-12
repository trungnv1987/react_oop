import { ReactNode, Context } from "react";
import { BaseViewModel } from "./base/base_view_model";
export interface AppScreenProps<VM extends BaseViewModel<any>> {
    children: ReactNode;
    viewModel: VM;
    viewModelContext: Context<VM | undefined>;
    dialogs?: ReactNode;
}
export declare function AppScreen<VM extends BaseViewModel<any>>({ children, viewModel, viewModelContext, dialogs, }: AppScreenProps<VM>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=app_screen.d.ts.map