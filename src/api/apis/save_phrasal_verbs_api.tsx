import {
  ApiMethod,
  ApiParam,
  ApiParamProps,
  ApiRoute,
} from "../base/base_api";

export interface SavePhrasalVerbsApiParamProps extends ApiParamProps {
  json: any;
}

export class SavePhrasalVerbsApi extends ApiParam<
  any,
  SavePhrasalVerbsApiParamProps
> {
  route = ApiRoute.savePhrasalVerbs;
  method = ApiMethod.post;
  requireAuth = true;
  showErrorMessage = true;

  constructor(props: SavePhrasalVerbsApiParamProps) {
    super(props);
    this.body = props.json;
    console.log(`savePhrasalVerbsApi_body ${JSON.stringify(this.body)}`);
  }

  parser(json: any): any {
    console.log(JSON.stringify(json));
    if (!this.isSuccess) {
      return undefined;
    }
    return json;
  }
}
