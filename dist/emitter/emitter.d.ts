export declare class Emitter {
    static _emitter: import("mitt").Emitter<Record<import("mitt").EventType, unknown>>;
    static emit(event: string, data: any): void;
    static on(event: string, callback: (data: any) => void): void;
    static remove(event: string, callback?: (data: any) => void): void;
    static off(event: string): void;
}
//# sourceMappingURL=emitter.d.ts.map