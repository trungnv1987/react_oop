import { BaseViewModel } from "./base_view_model";
import { BaseScreen, BaseScreenProps } from "./base_screen";

export interface AppScreenProps<VM extends BaseViewModel<any>>
  extends BaseScreenProps<VM> {}

export default function AppScreen<VM extends BaseViewModel<any>>({
  children,
  viewModel,
  viewModelContext,
}: AppScreenProps<VM>) {
  return (
    <BaseScreen<VM> viewModel={viewModel} viewModelContext={viewModelContext}>
      {children}
    </BaseScreen>
  );
}
