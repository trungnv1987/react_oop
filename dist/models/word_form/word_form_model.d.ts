import BaseModel from "react_oop/models/base_model";
import WordModel from "react_oop/models/word/word_model";
export declare class WordFormModel extends BaseModel {
    word_id?: number;
    base_form?: string;
    third_person_singular?: string;
    present_participle?: string;
    past_simple?: string;
    past_participle?: string;
    noun_singular?: string;
    noun_plural?: string;
    adj_base?: string;
    adj_comparative?: string;
    adj_superlative?: string;
    adv_base?: string;
    adv_comparative?: string;
    adv_superlative?: string;
    constructor(data?: Partial<WordFormModel>);
    static fromJson(json: any): WordFormModel | undefined;
}
export interface WordFormModelWithRelations extends WordFormModel {
    word?: WordModel;
}
//# sourceMappingURL=word_form_model.d.ts.map