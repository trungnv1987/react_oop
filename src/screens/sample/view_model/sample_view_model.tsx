import { createContext } from "react";
import { BaseViewModel, BaseViewModelProps } from "../../base/base_view_model";

export const SampleViewModelContext = createContext<
  SampleViewModel | undefined
>(undefined);

export interface SampleViewModelProps extends BaseViewModelProps {}
export class SampleViewModel extends BaseViewModel<SampleViewModelProps> {}
