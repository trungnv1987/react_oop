"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStorage = void 0;
const _auth_1 = require("../types/_auth");
const storage_1 = require("./storage");
const _kCredential = "credential";
class AuthStorage {
    static async saveCredential(response) {
        await storage_1.AppStorage.setItem(_kCredential, JSON.stringify(response.toJson()));
    }
    static async getAccessToken() {
        const rawData = await storage_1.AppStorage.getItem(_kCredential);
        if (!rawData)
            return undefined;
        const credential = _auth_1.LoginCredential.fromJson(JSON.parse(rawData));
        return credential === null || credential === void 0 ? void 0 : credential.access_token;
    }
    static async getRefreshToken() {
        const rawData = await storage_1.AppStorage.getItem(_kCredential);
        if (!rawData)
            return undefined;
        const credential = _auth_1.LoginCredential.fromJson(JSON.parse(rawData));
        return credential === null || credential === void 0 ? void 0 : credential.refresh_token;
    }
    static async isLogined() {
        const rawData = await storage_1.AppStorage.getItem(_kCredential);
        if (!rawData)
            return false;
        const credential = _auth_1.LoginCredential.fromJson(JSON.parse(rawData));
        return (credential === null || credential === void 0 ? void 0 : credential.access_token) != null;
    }
    static async getCredential() {
        const rawData = await storage_1.AppStorage.getItem(_kCredential);
        if (!rawData)
            return undefined;
        return _auth_1.LoginCredential.fromJson(JSON.parse(rawData));
    }
    static async clearCredential() {
        await storage_1.AppStorage.removeItem(_kCredential);
    }
    static async isTokenExpired() {
        const credential = await this.getCredential();
        if (!credential)
            return true;
        const now = new Date();
        const accessExpiresAt = new Date(credential.access_expires_at);
        return now >= accessExpiresAt;
    }
}
exports.AuthStorage = AuthStorage;
