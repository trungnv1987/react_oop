import { makeObservable, observable, action } from "mobx";
import { DateUtil } from "../utils/date/date_util";
export class GenericCubit {
    constructor(value) {
        this.callbacks = [];
        this.value = value;
        this.key = `${new Date().getMilliseconds()}`;
        makeObservable(this, {
            key: observable,
            update: action,
        });
    }
    update(value) {
        this.value = value;
        this.key = `${new Date().getMilliseconds()}`;
        const callbacks = this.callbacks;
        for (let index = 0; index < callbacks.length; index++) {
            const callback = callbacks[index];
            callback.call(this);
        }
    }
    addCallback(callback) {
        this.callbacks.push(callback);
    }
}
export class ReloadCubit extends GenericCubit {
    reload() {
        super.update(DateUtil.currentEpochTime);
    }
}
export class UILoadingCubit extends GenericCubit {
    constructor(visible = false) {
        super(visible);
        makeObservable(this, {
            show: action,
            hide: action,
            toggle: action,
        });
    }
    get visible() {
        var _a;
        return (_a = this.value) !== null && _a !== void 0 ? _a : false;
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
