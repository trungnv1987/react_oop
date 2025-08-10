export var BuildEnv;
(function (BuildEnv) {
    BuildEnv["dev"] = "dev";
    BuildEnv["stag"] = "stag";
    BuildEnv["prod"] = "prod";
})(BuildEnv || (BuildEnv = {}));
class GlobalConfig {
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
    static domain({ env } = {}) {
        if (this.debugging) {
            return "http://localhost:3005/";
        }
        switch (env !== null && env !== void 0 ? env : this.env) {
            case BuildEnv.dev:
                return "http://103.9.77.165:3005/";
            case BuildEnv.stag:
                return "http://103.9.77.165:3005/";
            case BuildEnv.prod:
                return "http://103.9.77.165:3005/";
        }
    }
    static apiUrl({ env } = {}) {
        const domain = this.domain({ env });
        return domain + "api/";
    }
}
GlobalConfig.env = BuildEnv.dev;
GlobalConfig.isDebug = false;
GlobalConfig.isDebugInServer = () => {
    return (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "test");
};
export default GlobalConfig;
function isServer() {
    return typeof window === "undefined";
}
