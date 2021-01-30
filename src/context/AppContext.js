import React, { createContext, useState } from "react";
import { FR_CITIES } from "../data/cityOptions";

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
    selectOptions: FR_CITIES,
    selectedCity: "paris",
  });
  return (
    <AppContext.Provider value={[data, setData]}>
      {props.children}
    </AppContext.Provider>
  );
};
