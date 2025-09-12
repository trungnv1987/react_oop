import { LogUtil } from "../utils/log/log_util";

// storage.ts
type Value = string;

let rnAsyncStorage: any = null;

interface AppStorageInterface {
  getItem(key: string): Promise<Value | null>;
  setItem(key: string, value: Value): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;  
}

export class AppStorage {
  private static _secureStorage: AppStorageInterface;
  private static _localStorage: AppStorageInterface;
  static async init({secureStorage, localStorage}: {secureStorage: AppStorageInterface, localStorage: AppStorageInterface}) {
    this._secureStorage = secureStorage;
    this._localStorage = localStorage;
  }

  static async getItem(key: string,{isSecure}: {isSecure?: boolean} = {}): Promise<Value | null> {
    if (isSecure) {
      return this._secureStorage.getItem(key);
    } else {
      return this._localStorage.getItem(key);
    }
  } 

  static async setItem(key: string, value: Value, {isSecure}: {isSecure?: boolean} = {}): Promise<void> {
    if (isSecure) {
      return this._secureStorage.setItem(key, value);
    } else {
      return this._localStorage.setItem(key, value);
    }
  }

  static async removeItem(key: string, {isSecure}: {isSecure?: boolean} = {}): Promise<void> {
    if (isSecure) {
      return this._secureStorage.removeItem(key);
    } else {
      return this._localStorage.removeItem(key);
    }
  }

  static async clear({isSecure}: {isSecure?: boolean} = {}): Promise<void> {
    if (isSecure) {
      return this._secureStorage.clear();
    } else {
      return this._localStorage.clear();
    }
  }

  


}