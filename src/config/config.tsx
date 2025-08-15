export enum BuildEnv {
  dev = "dev",
  stag = "stag",
  prod = "prod",
}

const kBuildEnvs = Object.values(BuildEnv).map((env) => env.toString());
export class GlobalConfig {
  static env = BuildEnv.dev;
  static isDebug = false;
  static envAsString?: string;

  static get debugging(): boolean {
    if (isServer()) {
      return this.isDebugInServer();
    }
    return this.isDebug;
  }

  static isDebugInServer = () => {
    return (
      process.env.NODE_ENV == "development" || process.env.NODE_ENV == "test"
    );
  };

  static get isDev() {
    return this.env === BuildEnv.dev;
  }
  static get isStag() {
    return this.env === BuildEnv.stag;
  }
  static get isProd() {
    return this.env === BuildEnv.prod;
  }

  static get originUrl(): string {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return "";
  }

  static get currentServerEnv(): BuildEnv {
    return (process.env.ENV as BuildEnv | undefined) ?? BuildEnv.dev;
  }
}

function isServer(): boolean {
  return typeof window === "undefined";
}
