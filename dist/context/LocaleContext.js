"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.LocaleContext = (0, react_1.createContext)({});
function LocaleProvider({ children, defaultLanguaje = "en", order = ["es", "en"], }) {
    const [languaje, setLanguaje] = (0, react_1.useState)(defaultLanguaje);
    (0, react_1.useEffect)(() => {
        setLanguaje(navigator.language.substring(0, 2));
    }, []);
    return ((0, jsx_runtime_1.jsx)(exports.LocaleContext.Provider, Object.assign({ value: { languaje, order } }, { children: children })));
}
exports.default = LocaleProvider;
