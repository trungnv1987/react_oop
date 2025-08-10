Array.prototype.nullIfEmpty = function () {
    return this.isEmpty() ? undefined : this;
};
Array.prototype.removeWhere = function (predicate) {
    return this.filter((item) => !predicate(item));
};
Array.prototype.random = function () {
    return this.sort(() => Math.random() - 0.5);
};
Array.prototype.whereNotNull = function () {
    return this.filter((item) => item != null);
};
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.isNotEmpty = function () {
    return this.length > 0;
};
Array.prototype.first = function () {
    return this.length > 0 ? this[0] : undefined;
};
Array.prototype.firstOrNull = function (predicate) {
    if (predicate) {
        return this.find(predicate);
    }
    return this.length > 0 ? this[0] : undefined;
};
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : undefined;
};
export {};
