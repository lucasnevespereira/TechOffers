import React, { createContext, useState } from "react";
import { techCount } from "../data/techs";

export const CountContext = createContext();

export const CountProvider = (props) => {
  const [count, setCount] = useState(techCount);
  return (
    <CountContext.Provider value={[count, setCount]}>
      {props.children}
    </CountContext.Provider>
  );
};
