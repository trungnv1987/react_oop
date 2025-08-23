export enum ApiMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  delete = "DELETE",
}

export enum ApiRoute {
  none = "",
}

export interface ApiParamProps {}
export abstract class ApiParam<T, P extends ApiParamProps = ApiParamProps> {
  abstract route: ApiRoute | string;
  abstract parser(json: any): T | undefined;
  queryParam?: Record<string, any>; // ?name=1&a=2
  slashParam?: Object; // ?/event/id/
  shouldLog = false; //log to server
  rootURL?: string;
  body?: Object;
  rawBody?: any;
  isSuccess = false;
  props: P;
  message?: string;
  showErrorMessage?: boolean;
  requireAuth = false; // Default to false, set to true for endpoints requiring authentication
  headers?: Record<string, any>;
  constructor(props: P) {
    this.props = props;
  }

  abstract getAccessToken(): Promise<string | undefined>;
  method = ApiMethod.get;

  async onDone(_?: T) {}
  toUrl(): string {
    let uri: string = this.route;
    const queryParam: any = this.queryParam ?? {}; // Example: { name: "John", age: 25 }
    const slashParam = this.slashParam; // Example: { id: 2 }

    // Replace placeholders in URI with values from slashParam
    if (slashParam) {
      Object.entries(slashParam).forEach(([key, value]) => {
        uri = uri.replace(`{${key}}`, encodeURIComponent(String(value)));
      });
    }

    // Append query parameters
    if (queryParam) {
      const queryString = Object.entries(queryParam)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join("&");

      if (queryString) {
        uri += (uri.includes("?") ? "&" : "?") + queryString;
      }
    }

    const rootURL = this.rootURL;
    console.log(`uri ${uri} rootURL ${rootURL}`);
    const url = new URL(uri, rootURL).toString();
    return url;
  }
}
