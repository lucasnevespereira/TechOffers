import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [data, setData] = useState({
    jobLabel: "Emplois",
    locationLabel: "Ville",
    dateLabel: "Date",
    searchBox: "Entrez votre ville..",
    country: "fr",
    location: "-",
    jobCount: "-",
  });
  return (
    <AppContext.Provider value={[data, setData]}>
      {props.children}
    </AppContext.Provider>
  );
};
