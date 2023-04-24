import { createContext, useEffect, useState } from "react";
export const LocaleContext = createContext({});
function LocaleProvider({
  children,
  defaultLanguaje = "en",
  order = ["es", "en"],
}: {
  children: any;
  defaultLanguaje: string;
  order: string[];
}) {
  const [languaje, setLanguaje] = useState(defaultLanguaje);
  useEffect(() => {
    setLanguaje(navigator.language.substring(0, 2));
  }, []);
  return (
    <LocaleContext.Provider value={{ languaje, order }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
