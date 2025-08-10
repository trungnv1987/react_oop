"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import "../utils/exts";
export function BaseScreen({ children, viewModel, viewModelContext, dialogs, }) {
    useEffect(() => {
        viewModel.componentDidMount();
        return () => {
            viewModel.dispose();
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(viewModelContext.Provider, { value: viewModel, children: children }), dialogs] }));
}
