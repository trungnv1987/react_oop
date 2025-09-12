"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCredential = void 0;
class LoginCredential {
    constructor(user, access_token, access_expires_at, refresh_token, refresh_expires_at) {
        this.user = user;
        this.access_token = access_token;
        this.access_expires_at = access_expires_at;
        this.refresh_token = refresh_token;
        this.refresh_expires_at = refresh_expires_at;
    }
    toJson() {
        return {
            user: this.user,
            access_token: this.access_token,
            access_expires_at: this.access_expires_at,
            refresh_token: this.refresh_token,
            refresh_expires_at: this.refresh_expires_at
        };
    }
    static fromJson(json) {
        if (!json)
            return undefined;
        const user = json.user;
        return new LoginCredential(user, json.access_token, json.access_expires_at, json.refresh_token, json.refresh_expires_at);
    }
}
exports.LoginCredential = LoginCredential;
