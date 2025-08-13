import { Component } from "react";
import {
  BaseViewModel,
  BaseViewModelProps,
} from "../../screens/base/base_view_model";

export interface ScreenComponentProps<VMP extends BaseViewModelProps> {}
export abstract class ScreenComponent<
  VMP extends BaseViewModelProps
> extends Component<ScreenComponentProps<VMP>> {}
