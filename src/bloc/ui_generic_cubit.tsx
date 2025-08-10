import { ReactNode } from "react";
import { GenericCubit } from "./cubit";
import { UIComponentProps } from "../enums/ui_enums";

export interface UIGenericCubitProps<T> extends UIComponentProps {
  children: (value?: T) => ReactNode;
  cubit: GenericCubit<T>;
}

export abstract class UIGenericCubitBase<T> {
  protected props: UIGenericCubitProps<T>;

  constructor(props: UIGenericCubitProps<T>) {
    this.props = props;
  }

  abstract render(): ReactNode;
  abstract getClassName(): string;
}

function _UIGenericCubitComponent<T>({
  children,
  cubit,
  className,
  ...props
}: UIGenericCubitProps<T>) {
  return (
    <div key={cubit.key} className={className} style={props.style} id={props.id}>
      {children(cubit.value)}
    </div>
  );
}

const UIGenericCubit = _UIGenericCubitComponent;

export default UIGenericCubit;
