import { UILoadingCubit } from "../../bloc/cubit";
import { ApiParam } from "../../api/base/api_param";
import { LogUtil } from "../../utils/log/log_util";
import { request as callApi } from "../../api/base/request";

interface _ApiRequestParam<T> {
  showLoading?: boolean;
  param: ApiParam<T>;
  preload(): Promise<void>;
}

export interface BaseViewModelProps {}
export class BaseViewModel<P extends BaseViewModelProps> {
  loadingCubit = new UILoadingCubit();
  props?: P;

  get name(): string {
    return this.constructor.name;
  }

  viewDidAppear() {
    console.log(`${this.name} viewDidAppear`);
  }

  viewDidDisappear() {
    console.log(`${this.name} viewDidDisappear`);
  }

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
    LogUtil.debug(
      `base_view_model: request: ${param.rootURL} type: ${typeof param}`
    );

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

  async preload(): Promise<void> {
    return Promise.resolve();
  }
}
