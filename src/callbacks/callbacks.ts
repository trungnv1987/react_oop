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


export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// const debouncedSearch = debounce(handleSearch, 500);

