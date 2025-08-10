export default class BaseModel {
    constructor(data = {}) {
        this.id = data.id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.deleted_at = data.deleted_at;
    }
    get text_en() {
        return undefined;
    }
    get text_vi() {
        return undefined;
    }
}
