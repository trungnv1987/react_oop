"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseScreen = BaseScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function BaseScreen({ children, viewModel, viewModelContext, }) {
    (0, react_1.useEffect)(() => {
        viewModel.componentDidMount();
        return () => {
            viewModel.dispose();
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(viewModelContext.Provider, { value: viewModel, children: children }) }));
}
