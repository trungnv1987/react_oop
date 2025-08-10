import { ApiMethod, ApiParam, ApiRoute, } from "shared/api/base/base_api";
import WordModel from "shared/models/word/word_model";
export class GetWordApi extends ApiParam {
    constructor(props) {
        super(props);
        this.route = ApiRoute.getWord;
        this.method = ApiMethod.get;
        this.showErrorMessage = true;
        this.queryParam = { text: props.text };
        console.log(`getWordsApi_text ${props.text}`);
    }
    parser(json) {
        if (!this.isSuccess) {
            return undefined;
        }
        return WordModel.fromJson(json);
    }
}
