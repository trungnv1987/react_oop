import {
  ApiMethod,
  ApiParam,
  ApiParamProps,
  ApiRoute,
} from "../base/base_api";

export interface SaveWordsApiParamProps extends ApiParamProps {
  json: any;
}
export class SaveWordsApi extends ApiParam<any, SaveWordsApiParamProps> {
  route = ApiRoute.saveWords;
  method = ApiMethod.post;
  requireAuth = true;
  showErrorMessage = true;

  constructor(props: SaveWordsApiParamProps) {
    super(props);
    this.body = props.json;
    console.log(`saveWordsApi_body ${JSON.stringify(this.body)}`);
  }

  parser(json: any): any {
    console.log(JSON.stringify(json));
    if (!this.isSuccess) {
      return undefined;
    }
    return json;
  }
}
