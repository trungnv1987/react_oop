
// storage.ts
type Value = string;

let rnAsyncStorage: any = null;

export interface AppStorageInterface {
  getItem(key: string): Promise<Value | null>;
  setItem(key: string, value: Value): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;  
}

export class AppStorage {
  private static _secureStorage: AppStorageInterface;
  private static _localStorage: AppStorageInterface;
  static async init({secureStorage, localStorage}: {secureStorage: AppStorageInterface, localStorage: AppStorageInterface}) {
    try {
      this._secureStorage = secureStorage;
      this._localStorage = localStorage;
    } catch (error) {
      console.error('AppStorage.init failed:', error);
      throw error;
    }
  }

  static async getItem(key: string,{isSecure}: {isSecure?: boolean} = {}): Promise<Value | null> {
    try {
      if (isSecure) {
        return await this._secureStorage.getItem(key);
      } else {
        return await this._localStorage.getItem(key);
      }
    } catch (error) {
      console.error('AppStorage.getItem failed:', error);
      return null;
    }
  } 

  static async setItem(key: string, value: Value, {isSecure}: {isSecure?: boolean} = {}): Promise<void> {
    try {
      if (isSecure) {
        await this._secureStorage.setItem(key, value);
      } else {
        await this._localStorage.setItem(key, value);
      }
    } catch (error) {
      console.error('AppStorage.setItem failed:', error);
      throw error;
    }
  }

  static async removeItem(key: string, {isSecure}: {isSecure?: boolean} = {}): Promise<void> {
    try {
      if (isSecure) {
        await this._secureStorage.removeItem(key);
      } else {
        await this._localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('AppStorage.removeItem failed:', error);
      throw error;
    }
  }

  static async clear({isSecure}: {isSecure?: boolean} = {}): Promise<void> {
    try {
      if (isSecure) {
        await this._secureStorage.clear();
      } else {
        await this._localStorage.clear();
      }
    } catch (error) {
      console.error('AppStorage.clear failed:', error);
      throw error;
    }
  }

  


}