"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleMainView = SampleMainView;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const sample_view_model_1 = require("../view_model/sample_view_model");
function SampleMainView() {
    const vm = (0, react_1.useContext)(sample_view_model_1.SampleViewModel.context);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "hello" });
}
