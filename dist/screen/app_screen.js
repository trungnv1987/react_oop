"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppScreen = AppScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const log_util_1 = require("../utils/log/log_util");
function AppScreen({ children, viewModel, viewModelContext, dialogs, }) {
    log_util_1.LogUtil.debug("AppScreen");
    return ((0, jsx_runtime_1.jsxs)(viewModelContext.Provider, { value: viewModel, children: [children, dialogs] }));
}
