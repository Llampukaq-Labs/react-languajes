"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslate = exports.LocaleProvider = void 0;
const LocaleContext_1 = __importDefault(require("./context/LocaleContext"));
exports.LocaleProvider = LocaleContext_1.default;
const useTranslate_1 = __importDefault(require("./hooks/useTranslate"));
exports.useTranslate = useTranslate_1.default;
