import { Emitter } from "./emitter";

export class EmitterController<T> {
  key!: string;
  value?: T;
  constructor(key: string) {
    this.key = key;
  }

  emit(data: T) {
    this.value = data;
    Emitter.emit(this.key, data);
  }

  on(callback: (data: T) => void) {
    Emitter.on(this.key, callback);
  }

  off() {
    Emitter.off(this.key);
  }
}
