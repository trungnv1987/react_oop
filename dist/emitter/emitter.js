import mitt from "mitt";
export class Emitter {
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
Emitter._emitter = mitt();
