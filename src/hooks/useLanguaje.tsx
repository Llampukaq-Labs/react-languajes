import React, { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

function useLanguaje() {
  const a = useContext(LocaleContext) as {
    language: any;
    setLanguage: any;
  };
  return a;
}

export default useLanguaje;
