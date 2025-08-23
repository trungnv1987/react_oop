"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILoadingCubit = exports.ReloadCubit = exports.GenericCubit = void 0;
const date_util_1 = require("../utils/date/date_util");
class GenericCubit {
    constructor(value) {
        this.callbacks = [];
        this.value = value;
        this.key = `${new Date().getMilliseconds()}`;
    }
    update(value) {
        this.value = value;
        this.key = `${new Date().getMilliseconds()}`;
        const callbacks = this.callbacks;
        for (let index = 0; index < callbacks.length; index++) {
            const callback = callbacks[index];
            callback(this.value);
        }
    }
    addCallback(callback) {
        this.callbacks.push(callback);
    }
    removeCallback(callback) {
        this.callbacks = this.callbacks.filter((c) => c !== callback);
    }
    dispose() {
        this.callbacks = [];
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
