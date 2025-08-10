import mitt from "mitt";

export class Emitter {
  static _emitter = mitt();
  static emit(event: string, data: any) {
    Emitter._emitter.emit(event, data);
  }

  static on(event: string, callback: (data: any) => void) {
    Emitter._emitter.on(event, callback);
  }

  static remove(event: string, callback?: (data: any) => void) {
    Emitter._emitter.off(event, callback);
  }

  static off(event: string) {
    Emitter._emitter.off(event);
  }
}
