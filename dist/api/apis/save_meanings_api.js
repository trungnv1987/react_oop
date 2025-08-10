import { ApiMethod, ApiParam, ApiRoute, } from "../base/base_api";
export class SaveMeaningsApi extends ApiParam {
    constructor(props) {
        super(props);
        this.route = ApiRoute.saveMeanings;
        this.method = ApiMethod.post;
        this.requireAuth = true;
        this.showErrorMessage = true;
        this.body = props.json;
        console.log(`saveMeaningsApi_body ${JSON.stringify(this.body)}`);
    }
    parser(json) {
        console.log(JSON.stringify(json));
        if (!this.isSuccess) {
            return undefined;
        }
        return json;
    }
}
