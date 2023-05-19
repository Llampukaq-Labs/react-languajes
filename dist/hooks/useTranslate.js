"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LocaleContext_1 = require("../context/LocaleContext");
function useTranslate() {
    const { language } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const functionT = (es, en) => {
        if (language == "es") {
            return es;
        }
        if (language == "en") {
            return en;
        }
        if (language != "en" && language != "es") {
            return en;
        }
    };
    return { t: functionT };
}
exports.default = useTranslate;
