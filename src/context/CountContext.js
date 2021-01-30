import React, { createContext, useState } from "react";
import { parisCount } from "../data/techs";

export const CountContext = createContext();

export const CountProvider = (props) => {
  const [count, setCount] = useState({
    chartCount: parisCount,
    totalCount: "-",
    chartLabel: "Nombre d'emplois",
  });
  return (
    <CountContext.Provider value={[count, setCount]}>
      {props.children}
    </CountContext.Provider>
  );
};
