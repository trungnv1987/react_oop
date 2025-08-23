import { DateUtil } from "../utils/date/date_util";
import { GenericCallback } from "../callbacks/callbacks";

interface _GenericCubit<T> {
  addCallback(callback: GenericCallback<T>): void;
  update(value?: T): void;
  removeCallback(callback: GenericCallback<T>): void;

  dispose(): void;
}

export class GenericCubit<T> implements _GenericCubit<T> {
  value: T | undefined;
  key: string | undefined;
  callbacks: GenericCallback<T>[] = [];

  constructor(value?: T) {
    this.value = value;
    this.key = `${new Date().getMilliseconds()}`;
   
  }

  update(value?: T) {
    this.value = value;
    this.key = `${new Date().getMilliseconds()}`;
    const callbacks = this.callbacks;
    for (let index = 0; index < callbacks.length; index++) {
      const callback = callbacks[index];
      callback(this.value)
    }
  }

  addCallback(callback: VoidFunction) {
    this.callbacks.push(callback);
  }

  removeCallback(callback: VoidFunction) {
    this.callbacks = this.callbacks.filter((c) => c !== callback);
  }

  dispose() {
    this.callbacks = [];
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

