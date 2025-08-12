"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = void 0;
exports.useAppContext = useAppContext;
const react_1 = require("react");
exports.AppContext = (0, react_1.createContext)(undefined);
function useAppContext() {
    const context = (0, react_1.useContext)(exports.AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}
