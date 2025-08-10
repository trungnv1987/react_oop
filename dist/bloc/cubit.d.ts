export declare class GenericCubit<T> {
    value: T | undefined;
    key: string | undefined;
    callbacks: (() => void)[];
    constructor(value?: T);
    update(value?: T): void;
    addCallback(callback: () => void): void;
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
//# sourceMappingURL=cubit.d.ts.map