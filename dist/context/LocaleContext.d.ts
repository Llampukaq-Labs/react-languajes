/// <reference types="react" />
export declare const LocaleContext: import("react").Context<{}>;
declare function LocaleProvider({ children, defaultLanguaje, order, }: {
    children: any;
    defaultLanguaje: string;
    order: string[];
}): JSX.Element;
export default LocaleProvider;
