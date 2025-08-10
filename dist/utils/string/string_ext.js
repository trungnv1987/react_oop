String.prototype.isEmpty = function () {
    return this.trim().length === 0;
};
String.prototype.isNotEmpty = function () {
    return !this.isEmpty();
};
export {};
