"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReloadState = exports.UIScreenType = void 0;
var UIScreenType;
(function (UIScreenType) {
    UIScreenType["mobile"] = "mobile";
    UIScreenType["desktop"] = "desktop";
})(UIScreenType || (exports.UIScreenType = UIScreenType = {}));
var ReloadState;
(function (ReloadState) {
    ReloadState["normal"] = "normal";
    ReloadState["refreshing"] = "refreshing";
    ReloadState["loadingMore"] = "loadingMore";
})(ReloadState || (exports.ReloadState = ReloadState = {}));
