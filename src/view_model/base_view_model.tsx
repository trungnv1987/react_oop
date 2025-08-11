import { UILoadingCubit } from "../bloc/cubit";
import { LogUtil } from "../utils/log/log_util";
import { ApiParam } from "../api/base/api_param";
import { request as callApi } from "../api/base/base_api";

interface _ApiRequestParam<T> {
  showLoading?: boolean;
  param: ApiParam<T>;
}

interface _BaseViewModel {}
export class BaseViewModel implements _BaseViewModel {
  loadingCubit = new UILoadingCubit();

  get loadingController(): UILoadingCubit {
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

  async request<T>(props: _ApiRequestParam<T>): Promise<T | undefined> {
    const param = props.param;

    const showLoading = props.showLoading == true;
    if (showLoading) {
      this.showLoading();
    }
    let result: T | undefined;
    try {
      result = await callApi<T>(param);
    } catch (error) {}
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
