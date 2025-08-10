import { BaseModel } from "../base_model";
export class WordModel extends BaseModel {
    get text_en() {
        return undefined;
    }
    get text_vi() {
        return this.text;
    }
    constructor(data = {}) {
        super(data);
        this.text = data.text;
        this.phonetic = data.phonetic;
        this.topics = data.topics;
        this.levels = data.levels;
    }
    static fromJson(json) {
        if (!json)
            return undefined;
        return new WordModel(json);
    }
}
