export declare enum BuildEnv {
    dev = "dev",
    stag = "stag",
    prod = "prod"
}
export declare class GlobalConfig {
    static env: BuildEnv;
    static isDebug: boolean;
    static get debugging(): boolean;
    static isDebugInServer: () => boolean;
    static get isDev(): boolean;
    static get isStag(): boolean;
    static get isProd(): boolean;
    static get originUrl(): string;
    static get currentServerEnv(): BuildEnv;
}
//# sourceMappingURL=config.d.ts.map