"use client";

import { Component } from "react";
import { GenericCubit } from "./cubit";
import { UIComponentProps } from "../enums/ui_enums";

export interface UIGenericCubitProps<T> extends UIComponentProps {
  cubit: GenericCubit<T>;
}

export abstract class UIGenericCubit<T> extends Component<UIGenericCubitProps<T>> {
  protected cubit: GenericCubit<T>;

  constructor(props: UIGenericCubitProps<T>) {
    super(props);
    this.cubit = props.cubit;
  }

  abstract build(value?: T): JSX.Element;

  render(): JSX.Element {
    const { className, style, id } = this.props;
    return (
      <div key={this.cubit.key} className={className} style={style} id={id}>
        {this.build(this.cubit.value)}
      </div>
    );
  }
}
