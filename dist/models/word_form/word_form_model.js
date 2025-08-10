import { BaseModel } from "react_oop/models/base_model";
export class WordFormModel extends BaseModel {
    constructor(data = {}) {
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
    static fromJson(json) {
        if (!json)
            return undefined;
        return new WordFormModel(json);
    }
}
