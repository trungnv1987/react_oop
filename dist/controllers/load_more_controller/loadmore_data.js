"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMoreData = void 0;
const log_util_1 = require("../../utils/log/log_util");
const ui_enums_1 = require("../../enums/ui_enums");
class LoadMoreData {
    constructor({ isSearching } = { isSearching: false }) {
        this.items = [];
        this.limit = LoadMoreData.defaultLimit;
        this.isLoading = false;
        this.isSearching = false;
        this.isSearching = isSearching;
    }
    setLimit(limit) {
        this.limit = limit !== null && limit !== void 0 ? limit : LoadMoreData.defaultLimit;
    }
    get isEnd() {
        if (this._ended)
            return true;
        const total = this.total;
        if (!total)
            return undefined;
        return this.items.length >= total;
    }
    get couldLoadMore() {
        if (!this._state)
            return false;
        const flag = !this.isLoading && this.isEnd == false;
        return flag;
    }
    get currentCount() {
        return this.items.length;
    }
    get offset() {
        return this.currentCount;
    }
    beginSearch(keyword) {
        this.items.clear();
        this.total = undefined;
        this.keyword = keyword;
    }
    setItems({ items, state }) {
        this._ended = false;
        this._state = state;
        if (state == ui_enums_1.ReloadState.refreshing) {
            this.items = items;
        }
        else if (state == ui_enums_1.ReloadState.loadingMore) {
            if (items.length <= this.limit) {
                this._ended = true;
            }
            this.items = [...this.items, ...items];
        }
        log_util_1.LogUtil.debug(`setItems: ${this.items.length} isSearching: ${this.isSearching}`);
    }
    clear() {
        this.items.clear();
        this.keyword = undefined;
        this.total = undefined;
    }
    dispose() {
        this.clear();
    }
}
exports.LoadMoreData = LoadMoreData;
LoadMoreData.defaultLimit = 50;
