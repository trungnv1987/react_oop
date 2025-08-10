export enum BuildEnv {
  dev = "dev",
  stag = "stag",
  prod = "prod",
}

export default class GlobalConfig {
  static env = BuildEnv.dev;
  static isDebug = false;

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

  static domain({ env }: { env?: BuildEnv } = {}): string {
    if (this.debugging) {
      return "http://localhost:3005/";
    }
    switch (env ?? this.env) {
      case BuildEnv.dev:
        return "http://103.9.77.165:3005/";
      case BuildEnv.stag:
        return "http://103.9.77.165:3005/";
      case BuildEnv.prod:
        return "http://103.9.77.165:3005/";
    }
  }

  static apiUrl({ env }: { env?: BuildEnv } = {}): string {
    const domain = this.domain({ env });
    return domain + "api/";
  }
}

function isServer(): boolean {
  return typeof window === "undefined";
}
