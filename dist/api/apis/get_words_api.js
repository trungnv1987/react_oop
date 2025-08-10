import { ApiMethod, ApiParam, ApiRoute, } from "react_oop/api/base/base_api";
export class GetWordsApi extends ApiParam {
    constructor(props) {
        super(props);
        this.route = ApiRoute.getWords;
        this.method = ApiMethod.get;
        this.requireAuth = false;
        this.showErrorMessage = true;
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
    parser(json) {
        if (!this.isSuccess) {
            return undefined;
        }
        return json;
    }
}
