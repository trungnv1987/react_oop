"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UICubit = UICubit;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function UICubit({ cubit, children }) {
    const [value, setValue] = (0, react_1.useState)(cubit.value);
    const callback = (_value) => {
        setValue(_value);
    };
    (0, react_1.useEffect)(() => {
        cubit.addCallback(callback);
        return () => {
            cubit.removeCallback(callback);
        };
    }, [cubit]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children(value) });
}
