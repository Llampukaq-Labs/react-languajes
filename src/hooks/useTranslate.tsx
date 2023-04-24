import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";
function useTranslate() {
  const { languaje: language, order } = useContext(LocaleContext) as {
    languaje: string;
    order: ["es", "en"];
  };
  const t = (...args: string[]): any => {
    const translations = {} as any;
    for (let i = 0; i < order.length; i++) {
      translations[order[i]] = args[i];
    }
    return translations[language] ?? translations["en"];
  };
  return { t };
}
export default useTranslate;
