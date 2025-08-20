import React, { useCallback, useRef } from "react";

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


function useDebounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );
}

/*
const debouncedSearch = useDebounce((query: string) => {
    console.log("Call API with:", query);
  }, 500);
<TextInput
      onChangeText={(val) => {
        setText(val);
        debouncedSearch(val);
      }}

    />

*/