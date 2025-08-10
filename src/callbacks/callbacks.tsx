export interface UIValueProps<T> {
  selected?: T;
  onChanged?: (value?: T) => void;
  onSubmitted?: (value?: T) => void;
}

export interface EntityParserProps {
  json: any;
  isApi?: boolean;
}

export type GenericCallback<T> = (value: T) => void;
export type GenericGetter<T> = () => T | undefined;
export type StringCallback = (text?: string) => void;

export type VoidCallback = () => void;

export type ConstructorCallback<T> = new (...args: any[]) => T;
