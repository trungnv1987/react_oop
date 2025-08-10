import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "react_oop/api/base/base_api";
import WordModel from "react_oop/models/word/word_model";
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