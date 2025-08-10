import { ApiMethod, ApiParam, ApiRoute, } from "../base/base_api";
export class SaveFormsApi extends ApiParam {
    constructor(props) {
        super(props);
        this.route = ApiRoute.saveForms;
        this.method = ApiMethod.post;
        this.requireAuth = true;
        this.showErrorMessage = true;
        this.body = props.json;
        console.log(`saveFormsApi_body ${JSON.stringify(this.body)}`);
    }
    parser(json) {
        console.log(JSON.stringify(json));
        if (!this.isSuccess) {
            return undefined;
        }
        return json;
    }
}
