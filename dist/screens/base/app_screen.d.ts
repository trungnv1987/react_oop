import { BaseViewModel } from "./base_view_model";
import { BaseScreenProps } from "./base_screen";
export interface AppScreenProps<VM extends BaseViewModel<any>> extends BaseScreenProps<VM> {
}
export declare function AppScreen<VM extends BaseViewModel<any>>({ children, viewModel, viewModelContext, }: AppScreenProps<VM>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=app_screen.d.ts.map