"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIEmitter = UIEmitter;
const react_1 = require("react");
function UIEmitter(controller, callback) {
    (0, react_1.useEffect)(() => {
        controller.on(callback);
        return () => {
            controller.off();
        };
    }, []);
}
