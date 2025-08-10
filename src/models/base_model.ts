export abstract class BaseModel {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  constructor(data: Partial<BaseModel> = {}) {
    this.id = data.id;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.deleted_at = data.deleted_at;
  }
}
