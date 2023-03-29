import React, { ReactNode, useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";
function useTranslate<T>() {
  const { languaje } = useContext(LocaleContext);
  const functionT = (es: string, en: string): ReactNode | string => {
    if (languaje == "es") {
      return es;
    }
    if (languaje == "en") {
      return en;
    }
  };
  return { t: functionT };
}
export default useTranslate;
