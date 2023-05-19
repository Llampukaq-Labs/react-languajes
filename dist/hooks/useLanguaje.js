"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LocaleContext_1 = require("../context/LocaleContext");
function useLanguaje() {
    const a = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    return a;
}
exports.default = useLanguaje;
