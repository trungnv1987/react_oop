import BaseModel from "react_oop/models/base_model";
import WordMeaningModel from "react_oop/models/word_meaning/word_meaning_model";
import PhrasalVerbModel from "react_oop/models/phrasal_verb/phrasal_verb_model";
import WordFormModel from "react_oop/models/word_form/word_form_model";
export declare class WordModel extends BaseModel {
    text?: string;
    phonetic?: string;
    topics?: string[];
    levels?: string[];
    get text_en(): string | undefined;
    get text_vi(): string | undefined;
    constructor(data?: Partial<WordModel>);
    static fromJson(json: any): WordModel | undefined;
}
export interface WordModelWithRelations extends WordModel {
    word_meanings?: WordMeaningModel[];
    phrasal_verbs?: PhrasalVerbModel[];
    word_forms?: WordFormModel[];
}
//# sourceMappingURL=word_model.d.ts.map