export {}; // Mark file as module

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
    clear(): void;
  }
}

Array.prototype.clear = function () {
  this.length = 0;
};

Array.prototype.nullIfEmpty = function () {
  return this.isEmpty() ? undefined : this;
};

Array.prototype.removeWhere = function (predicate) {
  return this.filter((item) => !predicate(item));
};

Array.prototype.random = function () {
  return this.sort(() => Math.random() - 0.5);
};

Array.prototype.whereNotNull = function <NN = unknown>(
  this: NN[]
): NonNullable<NN>[] {
  return this.filter((item): item is NonNullable<NN> => item != null);
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

Array.prototype.isNotEmpty = function () {
  return this.length > 0;
};

Array.prototype.first = function <T>(): T | undefined {
  return this.length > 0 ? this[0] : undefined;
};

Array.prototype.firstOrNull = function <T>(
  predicate: (item: T) => boolean
): T | undefined {
  if (predicate) {
    return this.find(predicate);
  }
  return this.length > 0 ? this[0] : undefined;
};

Array.prototype.last = function <T>(): T | undefined {
  return this.length > 0 ? this[this.length - 1] : undefined;
};
