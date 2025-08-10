import { UILoadingCubit } from "../../bloc/cubit";
import { UIGenericCubit } from "../../bloc/ui_generic_cubit";
import { UIComponentProps } from "../../enums/ui_enums";

export interface UILoadingProps extends UIComponentProps {
  controller: UILoadingCubit;
}

export abstract class UILoadingBase extends UIGenericCubit<boolean> {
  protected controller: UILoadingCubit;

  abstract build(isLoading: boolean): JSX.Element;
  constructor(props: UILoadingProps) {
    const { controller, ...rest } = props;
    super({ ...rest, cubit: controller });
    this.controller = controller;
  }
}
