"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
const mitt_1 = __importDefault(require("mitt"));
class Emitter {
    static emit(event, data) {
        Emitter._emitter.emit(event, data);
    }
    static on(event, callback) {
        Emitter._emitter.on(event, callback);
    }
    static remove(event, callback) {
        Emitter._emitter.off(event, callback);
    }
    static off(event) {
        Emitter._emitter.off(event);
    }
}
exports.Emitter = Emitter;
Emitter._emitter = (0, mitt_1.default)();
