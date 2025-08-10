export default class StorageUtils {
  static getItem(key: string): string | null {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }
  static setItem(key: string, value: string) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    }
  }
  static removeItem(key: string) {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}
