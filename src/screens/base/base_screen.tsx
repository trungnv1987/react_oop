"use client";

import { Context, ReactNode, useEffect } from "react";
import { BaseViewModel } from "./base_view_model";

export interface BaseScreenProps<VM extends BaseViewModel<any>> {
  children: ReactNode;
  viewModel: VM;
  viewModelContext: Context<VM | undefined>;
}

export function BaseScreen<VM extends BaseViewModel<any>>({
  children,
  viewModel,
  viewModelContext,
}: BaseScreenProps<VM>) {
  useEffect(() => {
    viewModel.componentDidMount();
    return () => {
      viewModel.dispose();
    };
  }, []);
  return (
    <viewModelContext.Provider value={viewModel}>
      {children}
    </viewModelContext.Provider>
  );
}
