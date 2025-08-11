"use strict";
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILoadingBase = void 0;
const ui_generic_cubit_1 = require("../../bloc/ui_generic_cubit");
class UILoadingBase extends ui_generic_cubit_1.UIGenericCubit {
    constructor(props) {
        const { controller } = props, rest = __rest(props, ["controller"]);
        super(Object.assign(Object.assign({}, rest), { cubit: controller }));
        this.controller = controller;
    }
}
exports.UILoadingBase = UILoadingBase;
