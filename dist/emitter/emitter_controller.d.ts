export declare class EmitterController<T> {
    key: string;
    value?: T;
    constructor(key: string);
    emit(data: T): void;
    on(callback: (data: T) => void): void;
    off(): void;
}
//# sourceMappingURL=emitter_controller.d.ts.map