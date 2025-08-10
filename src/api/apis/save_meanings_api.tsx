import {
  ApiMethod,
  ApiParam,
  ApiParamProps,
  ApiRoute,
} from "../base/base_api";

export interface SaveMeaningsApiParamProps extends ApiParamProps {
  json: any;
}

export class SaveMeaningsApi extends ApiParam<any, SaveMeaningsApiParamProps> {
  route = ApiRoute.saveMeanings;
  method = ApiMethod.post;
  requireAuth = true;
  showErrorMessage = true;

  constructor(props: SaveMeaningsApiParamProps) {
    super(props);
    this.body = props.json;
    console.log(`saveMeaningsApi_body ${JSON.stringify(this.body)}`);
  }

  parser(json: any): any {
    console.log(JSON.stringify(json));
    if (!this.isSuccess) {
      return undefined;
    }
    return json;
  }
}
