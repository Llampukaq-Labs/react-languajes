"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LocaleContext_1 = require("../context/LocaleContext");
function useTranslate(translates) {
    const { languaje } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const [t, setT] = (0, react_1.useState)();
    const getLanguajes = () => {
        const res = translates === null || translates === void 0 ? void 0 : translates.find((x) => x.l == languaje);
        if (res != undefined) {
            setT(res.t);
            return;
        }
        if (res == undefined) {
            const r = translates === null || translates === void 0 ? void 0 : translates.find((x) => x.l == "en");
            setT(r === null || r === void 0 ? void 0 : r.t);
            return;
        }
    };
    (0, react_1.useEffect)(() => {
        getLanguajes();
    }, [languaje]);
    return { t };
}
exports.default = useTranslate;
