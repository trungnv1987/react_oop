import { ApiMethod, ApiParam, ApiParamProps, ApiRoute } from "../base/base_api";
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
export declare class GetWordsApi extends ApiParam<GetWordsResponse, GetWordsApiParamProps> {
    route: ApiRoute;
    method: ApiMethod;
    requireAuth: boolean;
    showErrorMessage: boolean;
    constructor(props: GetWordsApiParamProps);
    parser(json: any): GetWordsResponse | undefined;
}
//# sourceMappingURL=get_words_api.d.ts.map