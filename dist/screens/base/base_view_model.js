"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseViewModel = void 0;
const cubit_1 = require("../../bloc/cubit");
const log_util_1 = require("../../utils/log/log_util");
const request_api_1 = require("../../api/base/request_api");
class BaseViewModel {
    get name() {
        return this.constructor.name;
    }
    viewDidAppear(isCreated) {
        this.isViewDidAppear = true;
        console.log(`${this.name} viewDidAppear isCreated ${isCreated}`);
    }
    viewDidDisappear(isDismissed) {
        this.isViewDidAppear = false;
        console.log(`${this.name} viewDidDisappear ${isDismissed}`);
    }
    constructor(props) {
        this.loadingCubit = new cubit_1.UILoadingCubit();
        this.isViewDidAppear = false;
        this.props = props;
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
        log_util_1.LogUtil.debug(`base_view_model: request: ${param.rootURL} type: ${typeof param}`);
        const showLoading = props.showLoading == true;
        if (showLoading) {
            this.showLoading();
        }
        let result;
        try {
            result = await (0, request_api_1.requestApi)(param);
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
    async preload() {
        return Promise.resolve();
    }
}
exports.BaseViewModel = BaseViewModel;
