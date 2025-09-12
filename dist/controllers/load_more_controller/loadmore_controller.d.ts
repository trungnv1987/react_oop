import { LoadMoreData, LoadMoreRequest } from "./loadmore_data";
import { BaseController } from "../base/base_controller";
import { GenericCallback, GenericGetter } from "../../callbacks/callbacks";
import { ReloadState } from "../../enums/ui_enums";
import { ApiParam } from "../../api/base/api_param";
interface _LoadMoreController<T> {
    loadMore: () => Promise<void>;
    refresh: () => Promise<void>;
    setItems({ items, reload, clear }: {
        items: T[];
        reload?: boolean;
        clear?: boolean;
    }): void;
    setSearching(isSearching: boolean): void;
    search(text?: string): Promise<void>;
    get searchKeyword(): string | undefined;
    get data(): LoadMoreData<T>;
    dispose(): void;
}
export declare class LoadMoreController<T> extends BaseController implements _LoadMoreController<T> {
    _allData: LoadMoreData<T>;
    _searchData: LoadMoreData<T>;
    isSearching: boolean;
    onReload?: GenericCallback<ReloadState>;
    private _request;
    constructor({ fetch, limit }: {
        fetch: LoadMoreRequest<T>;
        limit?: GenericGetter<number | undefined>;
    });
    dispose(): void;
    setItems({ items, reload, state }: {
        items: T[];
        reload?: boolean;
        state: ReloadState;
    }): void;
    refresh(): Promise<void>;
    _fetch({ clear }?: {
        clear?: boolean;
    }): Promise<void>;
    loadMore(): Promise<void>;
    request<T>(param: ApiParam<T>): Promise<T | undefined>;
    setSearching(isSearching: boolean): void;
    _reload({ state }: {
        state: ReloadState;
    }): void;
    search(text?: string): Promise<void>;
    get data(): LoadMoreData<T>;
    get searchKeyword(): string | undefined;
}
export {};
//# sourceMappingURL=loadmore_controller.d.ts.map