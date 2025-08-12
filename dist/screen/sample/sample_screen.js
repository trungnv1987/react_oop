"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleScreen = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sample_view_model_1 = require("./view_model/sample_view_model");
const sample_main_view_1 = require("./components/sample_main_view");
const base_screen_1 = require("../base/base_screen");
class SampleScreen extends base_screen_1.BaseScreen {
    createViewModel(props) {
        return new sample_view_model_1.SampleViewModel(props);
    }
    build() {
        const context = sample_view_model_1.SampleViewModel.context;
        return ((0, jsx_runtime_1.jsx)(context.Provider, { value: this.viewModel, children: (0, jsx_runtime_1.jsx)(sample_main_view_1.SampleMainView, {}) }));
    }
}
exports.SampleScreen = SampleScreen;
