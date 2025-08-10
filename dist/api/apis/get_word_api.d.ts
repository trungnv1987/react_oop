import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "shared/api/base/base_api";
import WordModel from "shared/models/word/word_model";
export interface GetWordApiParamProps extends ApiParamProps {
    text: string;
}
export declare class GetWordApi extends ApiParam<WordModel, GetWordApiParamProps> {
    route: ApiRoute;
    method: ApiMethod;
    showErrorMessage: boolean;
    constructor(props: GetWordApiParamProps);
    parser(json: any): WordModel | undefined;
}
//# sourceMappingURL=get_word_api.d.ts.map