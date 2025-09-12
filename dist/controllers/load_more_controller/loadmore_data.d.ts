import { ReloadState } from "../../enums/ui_enums";
export type LoadMoreRequest<T> = (offset: number, limit: number) => Promise<LoadMoreDataResult<T> | undefined>;
export declare class LoadMoreData<T> {
    static defaultLimit: number;
    items: T[];
    limit: number;
    total?: number;
    isLoading: boolean;
    isSearching: boolean;
    keyword?: string;
    _ended?: boolean;
    _state?: ReloadState;
    constructor({ isSearching }?: {
        isSearching: boolean;
    });
    setLimit(limit?: number): void;
    get isEnd(): boolean | undefined;
    get couldLoadMore(): boolean;
    get currentCount(): number;
    get offset(): number;
    beginSearch(keyword?: string): void;
    setItems({ items, state }: {
        items: T[];
        state?: ReloadState;
    }): void;
    clear(): void;
    dispose(): void;
}
export interface LoadMoreDataResult<T> {
    items: T[];
    total: number;
}
//# sourceMappingURL=loadmore_data.d.ts.map