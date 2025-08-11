"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterController = void 0;
const emitter_1 = require("./emitter");
class EmitterController {
    constructor(key) {
        this.key = key;
    }
    emit(data) {
        this.value = data;
        emitter_1.Emitter.emit(this.key, data);
    }
    on(callback) {
        emitter_1.Emitter.on(this.key, callback);
    }
    off() {
        emitter_1.Emitter.off(this.key);
    }
}
exports.EmitterController = EmitterController;
