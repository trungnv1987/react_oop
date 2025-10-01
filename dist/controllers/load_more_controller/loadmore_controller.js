"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMoreController = void 0;
const loadmore_data_1 = require("./loadmore_data");
const request_api_1 = require("../../api/base/request_api");
const base_controller_1 = require("../base/base_controller");
const ui_enums_1 = require("../../enums/ui_enums");
class LoadMoreController extends base_controller_1.BaseController {
    constructor({ fetch, limit }) {
        super();
        this._allData = new loadmore_data_1.LoadMoreData();
        this._searchData = new loadmore_data_1.LoadMoreData({ isSearching: true });
        this.isSearching = false;
        this._request = fetch;
        const _limit = limit === null || limit === void 0 ? void 0 : limit();
        this._allData.setLimit(_limit);
        this._searchData.setLimit(_limit);
    }
    dispose() {
        this._allData.dispose();
        this._searchData.dispose();
    }
    setItems({ items, reload, state }) {
        this.data.setItems({ items, state });
        if (reload) {
            this._reload({ state: state });
        }
    }
    async refresh() {
        this.data.clear();
        this._reload({ state: ui_enums_1.ReloadState.refreshing });
        await this._fetch({ clear: true });
    }
    async _fetch({ clear } = {}) {
        var _a;
        const data = this.data;
        if (data.isLoading)
            return;
        data.isLoading = true;
        const result = await this._request(data.offset, data.limit);
        const items = (_a = result === null || result === void 0 ? void 0 : result.items) !== null && _a !== void 0 ? _a : [];
        data.isLoading = false;
        data.total = result === null || result === void 0 ? void 0 : result.total;
        this.setItems({ items, reload: true, state: clear ? ui_enums_1.ReloadState.refreshing : ui_enums_1.ReloadState.loadingMore });
    }
    async loadMore() {
        await this._fetch();
    }
    async request(param) {
        return (0, request_api_1.requestApi)(param);
    }
    toggleSearching() {
        this.setSearching(!this.isSearching);
    }
    setSearching(isSearching) {
        this.isSearching = isSearching;
        if (!isSearching) {
            this._searchData.clear();
        }
        else {
            this._searchData.setItems({ items: this._allData.items, state: ui_enums_1.ReloadState.normal });
        }
        this._reload({ state: ui_enums_1.ReloadState.normal });
    }
    _reload({ state }) {
        var _a;
        (_a = this.onReload) === null || _a === void 0 ? void 0 : _a.call(this, state);
    }
    async search(text) {
        this._searchData.beginSearch(text);
        await this._fetch({ clear: true });
    }
    get data() {
        return this.isSearching ? this._searchData : this._allData;
    }
    get searchKeyword() {
        return this.isSearching ? this._searchData.keyword : undefined;
    }
}
exports.LoadMoreController = LoadMoreController;
