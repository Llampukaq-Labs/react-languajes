"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useLocalStorage_1 = require("../hooks/useLocalStorage");
exports.LocaleContext = (0, react_1.createContext)({});
function LocaleProvider({ children }) {
    const [language, setLanguage] = (0, useLocalStorage_1.useLocalStorage)("language", "en");
    (0, react_1.useEffect)(() => {
        setLanguage(navigator.language.substring(0, 2));
    }, []);
    return ((0, jsx_runtime_1.jsx)(exports.LocaleContext.Provider, Object.assign({ value: { language, setLanguage } }, { children: children })));
}
exports.default = LocaleProvider;
