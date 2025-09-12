export interface LoginRequest {
  email: string;
  password: string;
}

export class LoginCredential {
  user: AuthenticatedUser;
  access_token: string;
  access_expires_at: string;
  refresh_token: string;
  refresh_expires_at: string;

  constructor(
    user: AuthenticatedUser,
    access_token: string,
    access_expires_at: string,
    refresh_token: string,
    refresh_expires_at: string
  ) {
    this.user = user;
    this.access_token = access_token;
    this.access_expires_at = access_expires_at;
    this.refresh_token = refresh_token;
    this.refresh_expires_at = refresh_expires_at;
  }
  
  toJson(): any {
    return {
      user: this.user,
      access_token: this.access_token,
      access_expires_at: this.access_expires_at,
      refresh_token: this.refresh_token,
      refresh_expires_at: this.refresh_expires_at
    };
  }
  static fromJson(json: any): LoginCredential | undefined {
    if (!json) return undefined;
    const user = json.user;
    return new LoginCredential(
      user,
      json.access_token,
      json.access_expires_at,
      json.refresh_token,
      json.refresh_expires_at
    );
  }
}

export interface AuthenticatedUser {
  id: number;
  uid: string;
  full_name: string;
  email: string;
}
