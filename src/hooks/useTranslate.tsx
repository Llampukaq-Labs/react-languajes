import React, { ReactNode, useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";

function useTranslate() {
  const { language } = useContext(LocaleContext) as {
    setLanguage: any;
    language: any;
  };
  const functionT = (es: string, en: string): any => {
    if (language == "es") {
      return es;
    }
    if (language == "en") {
      return en;
    }
    if (language != "en" && language != "es") {
      return en;
    }
  };
  return { t: functionT };
}
export default useTranslate;
