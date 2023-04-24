"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LocaleContext_1 = require("../context/LocaleContext");
function useTranslate() {
    const { languaje: language, order } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const t = (...args) => {
        var _a;
        const translations = {};
        for (let i = 0; i < order.length; i++) {
            translations[order[i]] = args[i];
        }
        return (_a = translations[language]) !== null && _a !== void 0 ? _a : translations["en"];
    };
    return { t };
}
exports.default = useTranslate;
