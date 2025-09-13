import { LoginCredential } from "../types/_auth";
import { AppStorage } from "./storage";

const _kCredential = "credential";

export class AuthStorage {
  static async saveCredential(response: LoginCredential): Promise<void> {
    await AppStorage.setItem(_kCredential, JSON.stringify(response.toJson()), {isSecure: true});
  }

  static async getAccessToken(): Promise<string | undefined> {
    const rawData = await AppStorage.getItem(_kCredential, {isSecure: true});
    if (!rawData) return undefined;
    
    const credential = LoginCredential.fromJson(JSON.parse(rawData));
    return credential?.access_token;
  }

  static async getRefreshToken(): Promise<string | undefined> {
    const rawData = await AppStorage.getItem(_kCredential, {isSecure: true});
    if (!rawData) return undefined;
    
    const credential = LoginCredential.fromJson(JSON.parse(rawData));
    return credential?.refresh_token;
  }

  static async isLogined(): Promise<boolean> {
    const rawData = await AppStorage.getItem(_kCredential);
    if (!rawData) return false;
    
    const credential = LoginCredential.fromJson(JSON.parse(rawData));
    return credential?.access_token != null;
  }

  static async getCredential(): Promise<LoginCredential | undefined> {
    const rawData = await AppStorage.getItem(_kCredential);
    if (!rawData) return undefined;
    
    return LoginCredential.fromJson(JSON.parse(rawData));
  }

  static async clearCredential(): Promise<void> {
    await AppStorage.removeItem(_kCredential);
  }

  static async isTokenExpired(): Promise<boolean> {
    const credential = await this.getCredential();
    if (!credential) return true;
    
    const now = new Date();
    const accessExpiresAt = new Date(credential.access_expires_at);
    return now >= accessExpiresAt;
  }
}
