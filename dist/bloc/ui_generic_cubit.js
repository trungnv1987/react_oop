"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIGenericCubit = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class UIGenericCubit extends react_1.Component {
    constructor(props) {
        super(props);
        this.cubit = props.cubit;
    }
    render() {
        const { className, style, id } = this.props;
        return ((0, jsx_runtime_1.jsx)("div", { className: className, style: style, id: id, children: this.build(this.cubit.value) }, this.cubit.key));
    }
}
exports.UIGenericCubit = UIGenericCubit;
