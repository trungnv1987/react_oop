"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseViewModel = void 0;
const cubit_1 = require("../bloc/cubit");
const log_util_1 = require("../utils/log/log_util");
const base_api_1 = require("../api/base/base_api");
class BaseViewModel {
    constructor() {
        this.loadingCubit = new cubit_1.UILoadingCubit();
    }
    get loadingController() {
        return this.loadingCubit;
    }
    showLoading() {
        this.loadingCubit.show();
    }
    hideLoading() {
        this.loadingCubit.hide();
    }
    componentDidMount() {
        log_util_1.LogUtil.debug(`${this.constructor.name} componentDidMount`);
    }
    dispose() {
        log_util_1.LogUtil.debug(`${this.constructor.name} dispose`);
    }
    async request(props) {
        const param = props.param;
        const showLoading = props.showLoading == true;
        if (showLoading) {
            this.showLoading();
        }
        let result;
        try {
            result = await (0, base_api_1.request)(param);
        }
        catch (error) { }
        if (!param.isSuccess) {
            // const message = param.message;
            // remove due to duplicate toast
            // if (message && param.showErrorMessage == true) {
            //   ToastUtil.error(message);
            // }
        }
        if (showLoading) {
            this.hideLoading();
        }
        return result;
    }
}
exports.BaseViewModel = BaseViewModel;
