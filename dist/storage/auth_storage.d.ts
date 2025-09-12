import { LoginCredential } from "../types/_auth";
export declare class AuthStorage {
    static saveCredential(response: LoginCredential): Promise<void>;
    static getAccessToken(): Promise<string | undefined>;
    static getRefreshToken(): Promise<string | undefined>;
    static isLogined(): Promise<boolean>;
    static getCredential(): Promise<LoginCredential | undefined>;
    static clearCredential(): Promise<void>;
    static isTokenExpired(): Promise<boolean>;
}
//# sourceMappingURL=auth_storage.d.ts.map