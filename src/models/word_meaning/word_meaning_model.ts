import { BaseModel } from "../base_model";
import { WordModel } from "../word/word_model";

export class WordMeaningModel extends BaseModel {
  word_id?: number;
  definition_vi?: string;
  definition_en?: string;
  part_of_speech?: string;
  exam?: string;
  collocations?: string[];
  synonyms?: string[];
  antonyms?: string[];
  related?: string[];

  constructor(data: Partial<WordMeaningModel> = {}) {
    super(data);
    this.word_id = data.word_id;
    this.definition_vi = data.definition_vi;
    this.definition_en = data.definition_en;
    this.part_of_speech = data.part_of_speech;
    this.exam = data.exam;
    this.collocations = data.collocations;
    this.synonyms = data.synonyms;
    this.antonyms = data.antonyms;
    this.related = data.related;
  }

  static fromJson(json: any): WordMeaningModel | undefined {
    if (!json) return undefined;

    return new WordMeaningModel(json);
  }

  get text_en(): string | undefined {
    return this.definition_en;
  }

  get text_vi(): string | undefined {
    return this.definition_vi;
  }
}

export interface WordMeaningModelWithRelations extends WordMeaningModel {
  word?: WordModel;
}
