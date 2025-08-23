import { GenericCallback } from "../callbacks/callbacks";
interface _GenericCubit<T> {
    addCallback(callback: GenericCallback<T>): void;
    update(value?: T): void;
    removeCallback(callback: GenericCallback<T>): void;
    dispose(): void;
}
export declare class GenericCubit<T> implements _GenericCubit<T> {
    value: T | undefined;
    key: string | undefined;
    callbacks: GenericCallback<T>[];
    constructor(value?: T);
    update(value?: T): void;
    addCallback(callback: VoidFunction): void;
    removeCallback(callback: VoidFunction): void;
    dispose(): void;
}
export declare class ReloadCubit extends GenericCubit<number> {
    reload(): void;
}
export declare class UILoadingCubit extends GenericCubit<boolean> {
    constructor(visible?: boolean);
    get visible(): boolean;
    show(): void;
    hide(): void;
    toggle(): void;
}
export {};
//# sourceMappingURL=cubit.d.ts.map