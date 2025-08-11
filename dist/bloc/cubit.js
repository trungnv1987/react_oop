"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILoadingCubit = exports.ReloadCubit = exports.GenericCubit = void 0;
const mobx_1 = require("mobx");
const date_util_1 = require("../utils/date/date_util");
class GenericCubit {
    constructor(value) {
        this.callbacks = [];
        this.value = value;
        this.key = `${new Date().getMilliseconds()}`;
        (0, mobx_1.makeObservable)(this, {
            key: mobx_1.observable,
            update: mobx_1.action,
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
exports.GenericCubit = GenericCubit;
class ReloadCubit extends GenericCubit {
    reload() {
        super.update(date_util_1.DateUtil.currentEpochTime);
    }
}
exports.ReloadCubit = ReloadCubit;
class UILoadingCubit extends GenericCubit {
    constructor(visible = false) {
        super(visible);
        (0, mobx_1.makeObservable)(this, {
            show: mobx_1.action,
            hide: mobx_1.action,
            toggle: mobx_1.action,
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
exports.UILoadingCubit = UILoadingCubit;
