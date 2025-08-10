import {
  ApiMethod,
  ApiParam,
  ApiParamProps,
  ApiRoute,
} from "../base/base_api";
import { WordModel } from "../../models/word/word_model";

export interface GetWordsApiParamProps extends ApiParamProps {
  text?: string;
  topic?: string;
  topics?: string;
}

export interface GetWordsResponse {
  success: boolean;
  count: number;
  data: WordModel[];
}

export class GetWordsApi extends ApiParam<
  GetWordsResponse,
  GetWordsApiParamProps
> {
  route = ApiRoute.getWords;
  method = ApiMethod.get;
  requireAuth = false;
  showErrorMessage = true;

  constructor(props: GetWordsApiParamProps) {
    super(props);
    this.queryParam = {};

    if (props.text) {
      this.queryParam.text = props.text;
    }
    if (props.topic) {
      this.queryParam.topic = props.topic;
    }
    if (props.topics) {
      this.queryParam.topics = props.topics;
    }

    console.log(`getWordsApi params:`, this.queryParam);
  }

  parser(json: any): GetWordsResponse | undefined {
    if (!this.isSuccess) {
      return undefined;
    }
    return json as GetWordsResponse;
  }
}
