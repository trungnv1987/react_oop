import {
  ApiMethod,
  ApiParam,
  ApiParamProps,
  ApiRoute,
} from "../base/base_api";

export interface SaveFormsApiParamProps extends ApiParamProps {
  json: any;
}

export class SaveFormsApi extends ApiParam<any, SaveFormsApiParamProps> {
  route = ApiRoute.saveForms;
  method = ApiMethod.post;
  requireAuth = true;
  showErrorMessage = true;

  constructor(props: SaveFormsApiParamProps) {
    super(props);
    this.body = props.json;
    console.log(`saveFormsApi_body ${JSON.stringify(this.body)}`);
  }

  parser(json: any): any {
    console.log(JSON.stringify(json));
    if (!this.isSuccess) {
      return undefined;
    }
    return json;
  }
}
