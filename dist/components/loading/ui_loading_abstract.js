import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import { UIGenericCubit } from "../../bloc/ui_generic_cubit";
export class UILoadingBase extends Component {
    constructor(props) {
        super(props);
        this.controller = props.controller;
    }
    render() {
        return (_jsx(UIGenericCubit, { cubit: this.controller, children: (flag) => this.build(flag == true) }));
    }
}
