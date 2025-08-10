import { CSSProperties, PropsWithChildren, RefObject } from "react";

export enum UIScreenType {
  mobile = "mobile",
  desktop = "desktop",
}

export interface UIComponentSize {
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
}

export interface UIComponentProps {
  className?: string;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
  isColumn?: boolean;
  isRow?: boolean;
  isExpanded?: boolean;
  isOverflow?: boolean;
  isOverflowY?: boolean;
  id?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
  isScrollbarHidden?: boolean;
  isFlex?:boolean;
  isItemsCenter?:boolean;
  isJustifyCenter?:boolean;
  isTextCenter?:boolean;
}

export function UIComponent({
  children,
  ...props
}: PropsWithChildren<UIComponentProps>) {
  return (
    <div
      id={props.id}
      ref={props.ref}
      className={props.className}
      style={props.style}
    >
      {children}
    </div>
  );
}
