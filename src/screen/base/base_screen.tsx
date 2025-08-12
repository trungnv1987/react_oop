"use client";

import { BaseViewModel, BaseViewModelProps } from "./base_view_model";
import { Component, Context, createContext, ReactNode } from "react";
import "../../utils/exts";

export interface BaseScreenProps<VMP extends BaseViewModelProps> {
  viewModelProps?: VMP;
}

export abstract class BaseScreen<
  VMP extends BaseViewModelProps
> extends Component<BaseScreenProps<VMP>> {
  viewModel!: BaseViewModel<VMP>;
  abstract createViewModel(props?: VMP): BaseViewModel<VMP>;
  abstract build(): ReactNode;

  constructor(props?: BaseScreenProps<VMP>) {
    super(props ?? {});
    this.viewModel = this.createViewModel(props?.viewModelProps);
  }

  componentDidMount() {
    this.viewModel.componentDidMount();
  }

  componentWillUnmount() {
    this.viewModel.dispose();
  }

  render(): ReactNode {
    return <>{this.build()}</>;
  }
}
