"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LocaleContext_1 = require("../context/LocaleContext");
function useTranslate() {
    const { languaje } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const functionT = (es, en) => {
        if (languaje == "es") {
            return es;
        }
        if (languaje == "en") {
            return en;
        }
    };
    return { t: functionT };
}
exports.default = useTranslate;
