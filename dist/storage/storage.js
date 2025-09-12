"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStorage = void 0;
let rnAsyncStorage = null;
class AppStorage {
    static async init({ secureStorage, localStorage }) {
        this._secureStorage = secureStorage;
        this._localStorage = localStorage;
    }
    static async getItem(key, { isSecure } = {}) {
        if (isSecure) {
            return this._secureStorage.getItem(key);
        }
        else {
            return this._localStorage.getItem(key);
        }
    }
    static async setItem(key, value, { isSecure } = {}) {
        if (isSecure) {
            return this._secureStorage.setItem(key, value);
        }
        else {
            return this._localStorage.setItem(key, value);
        }
    }
    static async removeItem(key, { isSecure } = {}) {
        if (isSecure) {
            return this._secureStorage.removeItem(key);
        }
        else {
            return this._localStorage.removeItem(key);
        }
    }
    static async clear({ isSecure } = {}) {
        if (isSecure) {
            return this._secureStorage.clear();
        }
        else {
            return this._localStorage.clear();
        }
    }
}
exports.AppStorage = AppStorage;
