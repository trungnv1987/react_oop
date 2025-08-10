import Emitter from "./emitter";
export default class EmitterController {
    constructor(key) {
        this.key = key;
    }
    emit(data) {
        this.value = data;
        Emitter.emit(this.key, data);
    }
    on(callback) {
        Emitter.on(this.key, callback);
    }
    off() {
        Emitter.off(this.key);
    }
}
