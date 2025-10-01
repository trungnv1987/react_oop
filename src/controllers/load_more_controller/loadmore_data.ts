import { LogUtil } from "../../utils/log/log_util";
import { ReloadState } from "../../enums/ui_enums";

export type LoadMoreRequest<T> = (
    offset: number,
    limit: number
  ) => Promise<LoadMoreDataResult<T> | undefined>;
  
  export class LoadMoreData<T> {
    static defaultLimit = 50;
    items: T[] = [];
    limit = LoadMoreData.defaultLimit;
    total?: number;    
    isLoading = false;    
    isSearching = false;
    keyword?: string;

    _ended?: boolean;
    _state?: ReloadState;

    constructor({isSearching}: {isSearching: boolean} = {isSearching: false}){
      this.isSearching = isSearching;
    }

    setLimit(limit?: number){
      this.limit = limit ?? LoadMoreData.defaultLimit;
    }
    get isEnd(): boolean | undefined {
      if(this._ended) return true;
      const total = this.total;
      if(!total) return undefined;
      return this.items.length >= total;
    }

    get couldLoadMore(): boolean {
      if(!this._state) return false;
      const flag = !this.isLoading && this.isEnd == false
      return flag;
    }

    get currentCount(): number {
      return this.items.length;
    }

    get offset(): number {
      return this.currentCount;
    }

    beginSearch(keyword?: string){
      this.items.clear();
      this.total = undefined;
      this.keyword = keyword;
    }

    
    setItems({items, state}: {items: T[], state?: ReloadState}){
      this._ended = false;
      this._state = state;
      if(state == ReloadState.refreshing){      
        this.items = items;
      }else if(state == ReloadState.loadingMore){
        if(items.length <= this.limit){
          this._ended = true;
        }        
        this.items = [...this.items, ...items];
      }

      LogUtil.debug(`setItems: ${this.items.length} isSearching: ${this.isSearching}`);            
    }
    
    clear(){
      this.items.clear();
      this.keyword = undefined;
      this.total = undefined;
    }

    dispose(): void {
      this.clear();
    }


  }
export interface LoadMoreDataResult<T> {
  items: T[];
  total: number;
}

