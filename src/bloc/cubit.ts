import { makeObservable, observable, action } from "mobx";
import { DateUtil } from "../utils/date/date_util";

export class GenericCubit<T> {
  value: T | undefined;
  key: string | undefined;
  callbacks: (() => void)[] = [];

  constructor(value?: T) {
    this.value = value;
    this.key = `${new Date().getMilliseconds()}`;
    makeObservable(this, {
      key: observable,
      update: action,
    });
  }

  update(value?: T) {
    this.value = value;
    this.key = `${new Date().getMilliseconds()}`;
    const callbacks = this.callbacks;
    for (let index = 0; index < callbacks.length; index++) {
      const callback = callbacks[index];
      callback.call(this);
    }
  }

  addCallback(callback: () => void) {
    this.callbacks.push(callback);
  }
}

export class ReloadCubit extends GenericCubit<number> {
  reload() {
    super.update(DateUtil.currentEpochTime);
  }
}

export class UILoadingCubit extends GenericCubit<boolean> {
  constructor(visible: boolean = false) {
    super(visible);
    makeObservable(this, {
      show: action,
      hide: action,
      toggle: action,
    });
  }

  get visible(): boolean {
    return this.value ?? false;
  }

  show() {
    this.update(true);
  }

  hide() {
    this.update(false);
  }

  toggle() {
    this.update(!this.visible);
  }
}

