import BaseModel from "react_oop/models/base_model";
import WordModel from "react_oop/models/word/word_model";
export declare class WordMeaningModel extends BaseModel {
    word_id?: number;
    definition_vi?: string;
    definition_en?: string;
    part_of_speech?: string;
    exam?: string;
    collocations?: string[];
    synonyms?: string[];
    antonyms?: string[];
    related?: string[];
    constructor(data?: Partial<WordMeaningModel>);
    static fromJson(json: any): WordMeaningModel | undefined;
    get text_en(): string | undefined;
    get text_vi(): string | undefined;
}
export interface WordMeaningModelWithRelations extends WordMeaningModel {
    word?: WordModel;
}
//# sourceMappingURL=word_meaning_model.d.ts.map