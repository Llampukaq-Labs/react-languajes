import React, { useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";

function useTranslate<T>(translates: {}[]) {
  const { languaje } = useContext(LocaleContext);
  const [t, setT] = useState<T>();
  const getLanguajes = () => {
    //@ts-ignore
    const res = translates?.find((x) => x.l == languaje);
    if (res != undefined) {
      //@ts-ignore
      setT(res.t);
      return;
    }
    if (res == undefined) {
      //@ts-ignore
      const r = translates?.find((x) => x.l == "en");
      //@ts-ignore
      setT(r?.t);
      return;
    }
  };
  useEffect(() => {
    getLanguajes();
  }, [languaje]);
  return { t };
}
export default useTranslate;
