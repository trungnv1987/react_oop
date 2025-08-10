export {};
declare global {
    interface Array<T> {
        isEmpty(): boolean;
        isNotEmpty(): boolean;
        whereNotNull<NN = T>(): NonNullable<NN>[];
        first(): T | undefined;
        last(): T | undefined;
        firstOrNull(predicate: (item: T) => boolean): T | undefined;
        random(): T[];
        removeWhere(predicate: (item: T) => boolean): T[];
        nullIfEmpty(): T[] | undefined;
    }
}
//# sourceMappingURL=array_ext.d.ts.map