"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleViewModel = exports.SampleViewModelContext = void 0;
const react_1 = require("react");
const base_view_model_1 = require("../../base/base_view_model");
exports.SampleViewModelContext = (0, react_1.createContext)(undefined);
class SampleViewModel extends base_view_model_1.BaseViewModel {
}
exports.SampleViewModel = SampleViewModel;
