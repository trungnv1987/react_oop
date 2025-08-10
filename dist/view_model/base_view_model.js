import { UILoadingCubit } from "../bloc/cubit";
import { LogUtil } from "../utils/log/log_util";
import { request as callApi } from "../api/base/base_api";
export class BaseViewModel {
    constructor() {
        this.loadingCubit = new UILoadingCubit();
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
        LogUtil.debug(`${this.constructor.name} componentDidMount`);
    }
    dispose() {
        LogUtil.debug(`${this.constructor.name} dispose`);
    }
    async request(props) {
        const param = props.param;
        const showLoading = props.showLoading == true;
        if (showLoading) {
            this.showLoading();
        }
        let result;
        try {
            result = await callApi(param);
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
