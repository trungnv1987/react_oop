import { ReactNode, Component } from "react";
import { UILoadingCubit } from "shared/bloc/cubit";
import UIGenericCubit from "shared/bloc/ui_generic_cubit";

export interface UILoadingProps {
  controller: UILoadingCubit;
  children?: ReactNode;
}

export abstract class UILoadingBase extends Component<UILoadingProps> {
  protected controller: UILoadingCubit;

  abstract build(isLoading: boolean): JSX.Element;
  constructor(props: UILoadingProps) {
    super(props);
    this.controller = props.controller;
  }

  render(): ReactNode {
    return (
      <UIGenericCubit cubit={this.controller}>
        {(flag) => this.build(flag == true)}
      </UIGenericCubit>
    );
  }
}

export default UILoadingBase;
