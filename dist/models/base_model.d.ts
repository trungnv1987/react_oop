export declare abstract class BaseModel {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    constructor(data?: Partial<BaseModel>);
    get text_en(): string | undefined;
    get text_vi(): string | undefined;
}
//# sourceMappingURL=base_model.d.ts.map