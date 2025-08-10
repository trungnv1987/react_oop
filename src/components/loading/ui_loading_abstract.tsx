import { Component } from "react";
import { UILoadingCubit } from "../../bloc/cubit";
import { UIGenericCubit } from "../../bloc/ui_generic_cubit";

export interface UILoadingProps {
  controller: UILoadingCubit;
  children?: JSX.Element;
}

export abstract class UILoadingBase extends Component<UILoadingProps> {
  protected controller: UILoadingCubit;

  abstract build(isLoading: boolean): JSX.Element;
  constructor(props: UILoadingProps) {
    super(props);
    this.controller = props.controller;
  }

  render(): JSX.Element {
    return (
      <UIGenericCubit cubit={this.controller}>
        {(flag) => this.build(flag == true)}
      </UIGenericCubit>
    );
  }
}
