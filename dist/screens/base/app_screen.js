"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppScreen = AppScreen;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const base_screen_1 = require("./base_screen");
function AppScreen({ children, viewModel, viewModelContext, }) {
    const [isLoaded, setIsLoaded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const loadViewModel = async () => {
            await viewModel.preload();
            setIsLoaded(true);
        };
        loadViewModel();
    }, [viewModel]);
    if (!isLoaded) {
        return null; // or a loading spinner
    }
    return ((0, jsx_runtime_1.jsx)(base_screen_1.BaseScreen, { viewModel: viewModel, viewModelContext: viewModelContext, children: children }));
}
