import BaseModel from "react_oop/models/base_model";
import WordMeaningModel from "react_oop/models/word_meaning/word_meaning_model";
import PhrasalVerbModel from "react_oop/models/phrasal_verb/phrasal_verb_model";
import WordFormModel from "react_oop/models/word_form/word_form_model";

export default class WordModel extends BaseModel {
  text?: string;
  phonetic?: string;
  topics?: string[];
  levels?: string[];

  get text_en(): string | undefined {
    return undefined;
  }

  get text_vi(): string | undefined {
    return this.text;
  }
  constructor(data: Partial<WordModel> = {}) {
    super(data);
    this.text = data.text;
    this.phonetic = data.phonetic;
    this.topics = data.topics;
    this.levels = data.levels;
  }

  static fromJson(json: any): WordModel | undefined {
    if (!json) return undefined;

    return new WordModel(json);
  }
}

export interface WordModelWithRelations extends WordModel {
  word_meanings?: WordMeaningModel[];
  phrasal_verbs?: PhrasalVerbModel[];
  word_forms?: WordFormModel[];
}
