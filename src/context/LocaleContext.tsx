import React, { createContext, useEffect, useState } from "react";
export const LocaleContext = createContext({ languaje: "es" });
function LocaleProvider({ children }: { children: any }) {
  const [languaje, setLangujae] = useState("es");
  useEffect(() => {
    const languaje = navigator.language;
    setLangujae(languaje.substring(0, 2));
  }, []);
  return (
    <LocaleContext.Provider value={{ languaje }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
