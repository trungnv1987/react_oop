"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleScreen = SampleScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const sample_view_model_1 = require("./view_model/sample_view_model");
const sample_main_view_1 = require("./components/sample_main_view");
const app_screen_1 = __importDefault(require("../base/app_screen"));
function SampleScreen(props) {
    const viewModel = new sample_view_model_1.SampleViewModel();
    return ((0, jsx_runtime_1.jsx)(app_screen_1.default, { viewModel: viewModel, viewModelContext: sample_view_model_1.SampleViewModelContext, children: (0, jsx_runtime_1.jsx)(sample_main_view_1.SampleMainView, {}) }));
}
