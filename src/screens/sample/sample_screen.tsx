import { SampleViewModel } from "./view_model/sample_view_model";
import { SampleMainView } from "./components/sample_main_view";
import { BaseViewModel, BaseViewModelProps } from "../base/base_view_model";
import { BaseScreen, BaseScreenProps } from "../base/base_screen";
import { ReactNode } from "react";

export interface SampleScreenProps
  extends BaseScreenProps<BaseViewModelProps> {}
export class SampleScreen extends BaseScreen<SampleScreenProps> {
  createViewModel(props?: SampleScreenProps): BaseViewModel<SampleScreenProps> {
    return new SampleViewModel(props);
  }
  build(): ReactNode {
    const context = SampleViewModel.context;
    return (
      <context.Provider value={this.viewModel}>
        <SampleMainView />
      </context.Provider>
    );
  }
}
