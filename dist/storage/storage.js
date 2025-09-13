"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStorage = void 0;
let rnAsyncStorage = null;
class AppStorage {
    static async init({ secureStorage, localStorage }) {
        try {
            this._secureStorage = secureStorage;
            this._localStorage = localStorage;
        }
        catch (error) {
            console.error('AppStorage.init failed:', error);
            throw error;
        }
    }
    static async getItem(key, { isSecure } = {}) {
        try {
            if (isSecure) {
                return await this._secureStorage.getItem(key);
            }
            else {
                return await this._localStorage.getItem(key);
            }
        }
        catch (error) {
            console.error('AppStorage.getItem failed:', error);
            return null;
        }
    }
    static async setItem(key, value, { isSecure } = {}) {
        try {
            if (isSecure) {
                await this._secureStorage.setItem(key, value);
            }
            else {
                await this._localStorage.setItem(key, value);
            }
        }
        catch (error) {
            console.error('AppStorage.setItem failed:', error);
            throw error;
        }
    }
    static async removeItem(key, { isSecure } = {}) {
        try {
            if (isSecure) {
                await this._secureStorage.removeItem(key);
            }
            else {
                await this._localStorage.removeItem(key);
            }
        }
        catch (error) {
            console.error('AppStorage.removeItem failed:', error);
            throw error;
        }
    }
    static async clear({ isSecure } = {}) {
        try {
            if (isSecure) {
                await this._secureStorage.clear();
            }
            else {
                await this._localStorage.clear();
            }
        }
        catch (error) {
            console.error('AppStorage.clear failed:', error);
            throw error;
        }
    }
}
exports.AppStorage = AppStorage;
