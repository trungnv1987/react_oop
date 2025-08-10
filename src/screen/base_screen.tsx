"use client";

import { BaseViewModel } from "../view_model/base_view_model";
import { Context, ReactNode, useEffect } from "react";
import "../utils/exts";

export interface BaseScreenProps<VM extends BaseViewModel> {
  children: ReactNode;
  viewModel: VM;
  viewModelContext: Context<VM | undefined>;
  dialogs?: ReactNode[];
}

export function BaseScreen<VM extends BaseViewModel>({
  children,
  viewModel,

  viewModelContext,
  dialogs,
}: BaseScreenProps<VM>) {
  useEffect(() => {
    viewModel.componentDidMount();
    return () => {
      viewModel.dispose();
    };
  }, []);
  return (
    <>
      <viewModelContext.Provider value={viewModel}>
        {children}
      </viewModelContext.Provider>
      {dialogs}
    </>
  );
}
