export default class StorageUtils {
    static getItem(key) {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem(key);
        }
        return null;
    }
    static setItem(key, value) {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(key, value);
        }
    }
    static removeItem(key) {
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem(key);
        }
    }
}
