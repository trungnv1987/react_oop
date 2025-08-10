"use client";

import BaseViewModel from "react_oop/view_model/base_view_model";
import { Context, ReactNode, useEffect } from "react";
import "react_oop/utils/exts";

export interface BaseScreenProps<VM extends BaseViewModel> {
  children: ReactNode;
  viewModel: VM;
  viewModelContext: Context<VM | undefined>;
  dialogs?: ReactNode[];
}

export default function BaseScreen<VM extends BaseViewModel>({
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
