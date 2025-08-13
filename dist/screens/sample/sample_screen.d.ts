import { BaseViewModel, BaseViewModelProps } from "../base/base_view_model";
import { BaseScreen, BaseScreenProps } from "../base/base_screen";
import { ReactNode } from "react";
export interface SampleScreenProps extends BaseScreenProps<BaseViewModelProps> {
}
export declare class SampleScreen extends BaseScreen<SampleScreenProps> {
    createViewModel(props?: SampleScreenProps): BaseViewModel<SampleScreenProps>;
    build(): ReactNode;
}
//# sourceMappingURL=sample_screen.d.ts.map