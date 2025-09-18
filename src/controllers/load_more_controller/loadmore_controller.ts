import { LoadMoreData, LoadMoreRequest } from "./loadmore_data";

import { requestApi  } from "../../api/base/request_api";
import { BaseController } from "../base/base_controller";
import { GenericCallback, GenericGetter } from "../../callbacks/callbacks";
import { ReloadState } from "../../enums/ui_enums";
import { ApiParam } from "../../api/base/api_param";

interface _LoadMoreController<T> {
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
  setItems ({items, reload, clear}: {items: T[], reload?: boolean, clear?: boolean}):void;  

  setSearching(isSearching: boolean): void;
  search(text?: string): Promise<void>;
  get searchKeyword(): string|undefined;
  get data(): LoadMoreData<T>;
  dispose(): void;
  
}

export  class LoadMoreController<T> extends BaseController implements _LoadMoreController<T> {

  _allData: LoadMoreData<T> = new LoadMoreData<T>();
  _searchData: LoadMoreData<T> = new LoadMoreData<T>({isSearching: true});
  
  isSearching = false;
  
  onReload?: GenericCallback<ReloadState>;

  private _request!: LoadMoreRequest<T>;


  constructor({ fetch, limit }: { fetch: LoadMoreRequest<T>, limit?: GenericGetter<number|undefined> }) {
    super();
    this._request = fetch;
    const _limit = limit?.();
   this._allData.setLimit(_limit);
   this._searchData.setLimit(_limit);
  }
  
  
  dispose(): void {
    this._allData.dispose();
    this._searchData.dispose();
  }
  
  setItems({items, reload, state}: {items: T[], reload?: boolean, state: ReloadState}){
    this.data.setItems({items, state});    
    if(reload){
      this._reload({state: state});
    }
  }

  async refresh() {
    this.data.clear();
    this._reload({state: ReloadState.refreshing});
    await this._fetch({clear: true});
  }

  async _fetch({clear}: {clear?: boolean} = {}) {
    const data = this.data;
    if (data.isLoading) return;
    data.isLoading = true;
    const result = await this._request(data.offset, data.limit);
    
    const items = result?.items ?? [];
    data.isLoading = false;    
    data.total = result?.total;  
    this.setItems({items, reload: true, state: clear ? ReloadState.refreshing : ReloadState.loadingMore});
  }

  async loadMore() {
    await this._fetch();
  }
  async request<T>(param: ApiParam<T>): Promise<T | undefined> {
    return requestApi(param);
  }
  setSearching(isSearching: boolean): void {
    this.isSearching = isSearching;
    this._reload({state: ReloadState.normal});
  }

  _reload({state}: {state: ReloadState}): void {
    this.onReload?.(state);
  }
  
  async search(text?: string): Promise<void> {
    this._searchData.beginSearch(text);
    await this._fetch({clear: true});
  }
  get data(): LoadMoreData<T> {
    return this.isSearching ? this._searchData : this._allData;    
  }

  get searchKeyword(): string | undefined {
    return this.isSearching ? this._searchData.keyword : undefined;
  }
  
}
