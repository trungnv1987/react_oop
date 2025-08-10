import BaseModel from "react_oop/models/base_model";
import WordModel from "react_oop/models/word/word_model";
export declare class PhrasalVerbModel extends BaseModel {
    word_id?: number;
    text?: string;
    definition_vi?: string;
    definition_en?: string;
    constructor(data?: Partial<PhrasalVerbModel>);
    get text_en(): string | undefined;
    get text_vi(): string | undefined;
    static fromJson(json: any): PhrasalVerbModel | undefined;
}
export interface PhrasalVerbModelWithRelations extends PhrasalVerbModel {
    word?: WordModel;
}
//# sourceMappingURL=phrasal_verb_model.d.ts.map