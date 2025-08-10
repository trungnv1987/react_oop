import { BaseModel } from "react_oop/models/base_model";
import { WordModel } from "react_oop/models/word/word_model";

export class WordFormModel extends BaseModel {
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

  constructor(data: Partial<WordFormModel> = {}) {
    super(data);
    this.word_id = data.word_id;
    this.base_form = data.base_form;
    this.third_person_singular = data.third_person_singular;
    this.present_participle = data.present_participle;
    this.past_simple = data.past_simple;
    this.past_participle = data.past_participle;
    this.noun_singular = data.noun_singular;
    this.noun_plural = data.noun_plural;
    this.adj_base = data.adj_base;
    this.adj_comparative = data.adj_comparative;
    this.adj_superlative = data.adj_superlative;
    this.adv_base = data.adv_base;
    this.adv_comparative = data.adv_comparative;
    this.adv_superlative = data.adv_superlative;
  }

  static fromJson(json: any): WordFormModel | undefined {
    if (!json) return undefined;

    return new WordFormModel(json);
  }
}

export interface WordFormModelWithRelations extends WordFormModel {
  word?: WordModel;
}
