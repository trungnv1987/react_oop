import BaseModel from "shared/models/base_model";
export default class WordMeaningModel extends BaseModel {
    constructor(data = {}) {
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
    static fromJson(json) {
        if (!json)
            return undefined;
        return new WordMeaningModel(json);
    }
    get text_en() {
        return this.definition_en;
    }
    get text_vi() {
        return this.definition_vi;
    }
}
