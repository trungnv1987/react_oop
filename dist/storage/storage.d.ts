type Value = string;
interface AppStorageInterface {
    getItem(key: string): Promise<Value | null>;
    setItem(key: string, value: Value): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
}
export declare class AppStorage {
    private static _secureStorage;
    private static _localStorage;
    static init({ secureStorage, localStorage }: {
        secureStorage: AppStorageInterface;
        localStorage: AppStorageInterface;
    }): Promise<void>;
    static getItem(key: string, { isSecure }?: {
        isSecure?: boolean;
    }): Promise<Value | null>;
    static setItem(key: string, value: Value, { isSecure }?: {
        isSecure?: boolean;
    }): Promise<void>;
    static removeItem(key: string, { isSecure }?: {
        isSecure?: boolean;
    }): Promise<void>;
    static clear({ isSecure }?: {
        isSecure?: boolean;
    }): Promise<void>;
}
export {};
//# sourceMappingURL=storage.d.ts.map