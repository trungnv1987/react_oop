"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useDebounce(func, delay) {
    const timeoutRef = (0, react_1.useRef)();
    return (0, react_1.useCallback)((...args) => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            func(...args);
        }, delay);
    }, [func, delay]);
}
/*
const debouncedSearch = useDebounce((query: string) => {
    console.log("Call API with:", query);
  }, 500);
<TextInput
      onChangeText={(val) => {
        setText(val);
        debouncedSearch(val);
      }}

    />

*/ 
