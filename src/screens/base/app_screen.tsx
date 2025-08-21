import { useEffect, useState } from "react";
import { BaseViewModel } from "./base_view_model";
import { BaseScreen, BaseScreenProps } from "./base_screen";

export interface AppScreenProps<VM extends BaseViewModel<any>>
  extends BaseScreenProps<VM> {}

export function AppScreen<VM extends BaseViewModel<any>>({
  children,
  viewModel,
  viewModelContext,
}: AppScreenProps<VM>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadViewModel = async () => {
      await viewModel.preload();
      setIsLoaded(true);
    };

    loadViewModel();
  }, [viewModel]);

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <BaseScreen<VM> viewModel={viewModel} viewModelContext={viewModelContext}>
      {children}
    </BaseScreen>
  );
}
