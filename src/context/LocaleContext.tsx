import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const LocaleContext = createContext({});
function LocaleProvider({ children }: { children: any }) {
  const [language, setLanguage] = useLocalStorage("language", "en");
  useEffect(() => {
    setLanguage(navigator.language.substring(0, 2));
  }, []);
  return (
    <LocaleContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
