"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConfig = exports.BuildEnv = void 0;
var BuildEnv;
(function (BuildEnv) {
    BuildEnv["dev"] = "dev";
    BuildEnv["stag"] = "stag";
    BuildEnv["prod"] = "prod";
})(BuildEnv || (exports.BuildEnv = BuildEnv = {}));
class GlobalConfig {
    static setEnvAsString(env) {
        this.envAsString = env;
        this.env = env;
    }
    static get debugging() {
        if (isServer()) {
            return this.isDebugInServer();
        }
        return this.isDebug;
    }
    static get isDev() {
        return this.env === BuildEnv.dev;
    }
    static get isStag() {
        return this.env === BuildEnv.stag;
    }
    static get isProd() {
        return this.env === BuildEnv.prod;
    }
    static get originUrl() {
        if (typeof window !== "undefined") {
            return window.location.origin;
        }
        return "";
    }
    static get currentServerEnv() {
        var _a;
        return (_a = process.env.ENV) !== null && _a !== void 0 ? _a : BuildEnv.dev;
    }
}
exports.GlobalConfig = GlobalConfig;
GlobalConfig.env = BuildEnv.dev;
GlobalConfig.isDebug = false;
GlobalConfig.isDebugInServer = () => {
    return (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "test");
};
function isServer() {
    return typeof window === "undefined";
}
