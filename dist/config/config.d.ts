export declare enum BuildEnv {
    dev = "dev",
    stag = "stag",
    prod = "prod"
}
export default class GlobalConfig {
    static env: BuildEnv;
    static isDebug: boolean;
    static get debugging(): boolean;
    static isDebugInServer: () => boolean;
    static get isDev(): boolean;
    static get isStag(): boolean;
    static get isProd(): boolean;
    static get originUrl(): string;
    static get currentServerEnv(): BuildEnv;
    static domain({ env }?: {
        env?: BuildEnv;
    }): string;
    static apiUrl({ env }?: {
        env?: BuildEnv;
    }): string;
}
//# sourceMappingURL=config.d.ts.map