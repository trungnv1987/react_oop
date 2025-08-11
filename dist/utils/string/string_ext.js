"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isEmpty = function () {
    return this.trim().length === 0;
};
String.prototype.isNotEmpty = function () {
    return !this.isEmpty();
};
