import { GenericCubit } from "../../bloc/cubit";
import { useEffect, useState } from "react";

interface UICubitProps<T> {
  cubit: GenericCubit<T>;
  children: (value: T | undefined) => React.ReactNode;
}

export function UICubit<T>({ cubit, children }: UICubitProps<T>) {
  const [value, setValue] = useState<T | undefined>(cubit.value);

  const callback = (_value: T | undefined) => {
    setValue(_value);
  };
  useEffect(() => {
    cubit.addCallback(callback);

    return () => {
      cubit.removeCallback(callback);
    };
  }, [cubit]);

  return <>{children(value)}</>;
}
