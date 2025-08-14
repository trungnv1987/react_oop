"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppScreen = AppScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const base_screen_1 = require("./base_screen");
function AppScreen({ children, viewModel, viewModelContext, }) {
    return ((0, jsx_runtime_1.jsx)(base_screen_1.BaseScreen, { viewModel: viewModel, viewModelContext: viewModelContext, children: children }));
}
