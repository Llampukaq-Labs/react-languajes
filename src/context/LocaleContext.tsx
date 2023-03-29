import { createContext, useEffect, useState } from "react";
export const LocaleContext = createContext({ languaje: "es" });
function LocaleProvider({ children }: { children: any }) {
  const [languaje, setLanguaje] = useState("es");
  useEffect(() => {
    setLanguaje(navigator.language.substring(0, 2));
  }, []);
  return (
    <LocaleContext.Provider value={{ languaje }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
