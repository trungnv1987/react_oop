import { Context, createContext } from "react";
import { UILoadingCubit } from "../../bloc/cubit";
import { ApiParam } from "../../api/base/api_param";
import { LogUtil } from "../../utils/log/log_util";
import { request } from "../../api/base/request";

interface _ApiRequestParam<T> {
  showLoading?: boolean;
  param: ApiParam<T>;
}

export interface BaseViewModelProps {}
export class BaseViewModel<P extends BaseViewModelProps> {
  loadingCubit = new UILoadingCubit();
  props?: P;

  constructor(props?: P) {
    this.props = props;
  }

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
      result = await request<T>(param);
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
