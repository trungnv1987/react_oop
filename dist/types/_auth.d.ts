export interface LoginRequest {
    email: string;
    password: string;
}
export declare class LoginCredential {
    user: AuthenticatedUser;
    access_token: string;
    access_expires_at: string;
    refresh_token: string;
    refresh_expires_at: string;
    constructor(user: AuthenticatedUser, access_token: string, access_expires_at: string, refresh_token: string, refresh_expires_at: string);
    toJson(): any;
    static fromJson(json: any): LoginCredential | undefined;
}
export interface AuthenticatedUser {
    id: number;
    uid: string;
    full_name: string;
    email: string;
}
//# sourceMappingURL=_auth.d.ts.map