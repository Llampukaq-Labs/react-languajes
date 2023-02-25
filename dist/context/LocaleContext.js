"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.LocaleContext = (0, react_1.createContext)({ languaje: "es" });
function LocaleProvider({ children }) {
    const [languaje, setLangujae] = (0, react_1.useState)("es");
    (0, react_1.useEffect)(() => {
        const languaje = navigator.language;
        setLangujae(languaje.substring(0, 2));
    }, []);
    return ((0, jsx_runtime_1.jsx)(exports.LocaleContext.Provider, Object.assign({ value: { languaje } }, { children: children })));
}
exports.default = LocaleProvider;
