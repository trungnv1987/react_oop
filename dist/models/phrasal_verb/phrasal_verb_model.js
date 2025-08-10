import { BaseModel } from "../base_model";
export class PhrasalVerbModel extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.word_id = data.word_id;
        this.text = data.text;
        this.definition_vi = data.definition_vi;
        this.definition_en = data.definition_en;
    }
    get text_en() {
        return this.definition_en;
    }
    get text_vi() {
        return this.definition_vi;
    }
    static fromJson(json) {
        if (!json)
            return undefined;
        return new PhrasalVerbModel(json);
    }
}
