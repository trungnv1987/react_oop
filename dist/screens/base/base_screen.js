"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseScreen = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../../utils/exts");
class BaseScreen extends react_1.Component {
    constructor(props) {
        super(props !== null && props !== void 0 ? props : {});
        this.viewModel = this.createViewModel(props === null || props === void 0 ? void 0 : props.viewModelProps);
    }
    componentDidMount() {
        this.viewModel.componentDidMount();
    }
    componentWillUnmount() {
        this.viewModel.dispose();
    }
    render() {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: this.build() });
    }
}
exports.BaseScreen = BaseScreen;
