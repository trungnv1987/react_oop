import { createContext } from "react";
import { BaseViewModel, BaseViewModelProps } from "../../base/base_view_model";

export interface SampleViewModelProps extends BaseViewModelProps {}
export class SampleViewModel extends BaseViewModel<SampleViewModelProps> {
  static context = createContext<SampleViewModel | undefined>(undefined);
}
