import { ReactNode } from "react";
declare function useTranslate<T>(): {
    t: (es: string, en: string) => ReactNode | string;
};
export default useTranslate;
