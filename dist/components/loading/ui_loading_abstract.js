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
import { UIGenericCubit } from "../../bloc/ui_generic_cubit";
export class UILoadingBase extends UIGenericCubit {
    constructor(props) {
        const { controller } = props, rest = __rest(props, ["controller"]);
        super(Object.assign(Object.assign({}, rest), { cubit: controller }));
        this.controller = controller;
    }
}
