import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [trad, setTrad] = useState({
    job: "Emplois",
    location: "Ville",
    date: "Date",
    searchBox: "Entrez votre ville..",
  });
  return (
    <AppContext.Provider value={[trad, setTrad]}>
      {props.children}
    </AppContext.Provider>
  );
};
