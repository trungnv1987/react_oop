import BaseModel from "shared/models/base_model";
import WordModel from "shared/models/word/word_model";

export default class PhrasalVerbModel extends BaseModel {
  word_id?: number;
  text?: string;
  definition_vi?: string;
  definition_en?: string;

  constructor(data: Partial<PhrasalVerbModel> = {}) {
    super(data);
    this.word_id = data.word_id;
    this.text = data.text;
    this.definition_vi = data.definition_vi;
    this.definition_en = data.definition_en;
  }

  get text_en(): string | undefined {
    return this.definition_en;
  }

  get text_vi(): string | undefined {
    return this.definition_vi;
  }

  static fromJson(json: any): PhrasalVerbModel | undefined {
    if (!json) return undefined;

    return new PhrasalVerbModel(json);
  }
}

export interface PhrasalVerbModelWithRelations extends PhrasalVerbModel {
  word?: WordModel;
}
