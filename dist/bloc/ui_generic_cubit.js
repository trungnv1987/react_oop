import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
export class UIGenericCubit extends Component {
    constructor(props) {
        super(props);
        this.cubit = props.cubit;
    }
    render() {
        const { className, style, id } = this.props;
        return (_jsx("div", { className: className, style: style, id: id, children: this.build(this.cubit.value) }, this.cubit.key));
    }
}
