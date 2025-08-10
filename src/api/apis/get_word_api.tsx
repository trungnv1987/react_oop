import {
  ApiMethod,
  ApiParam,
  ApiParamProps,
  ApiRoute,
} from "../base/base_api";
import { WordModel } from "../../models/word/word_model";

export interface GetWordApiParamProps extends ApiParamProps {
  text: string;
}

export class GetWordApi extends ApiParam<WordModel, GetWordApiParamProps> {
  route = ApiRoute.getWord;
  method = ApiMethod.get;
  showErrorMessage = true;

  constructor(props: GetWordApiParamProps) {
    super(props);
    this.queryParam = { text: props.text };
    console.log(`getWordsApi_text ${props.text}`);
  }

  parser(json: any): WordModel | undefined {
    if (!this.isSuccess) {
      return undefined;
    }
    return WordModel.fromJson(json);
  }
}
