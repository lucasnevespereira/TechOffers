import React, { createContext, useState } from "react";
import { FR_CITIES } from "../data/cityOptions";
import { parisCount, totalParis } from "../data/techs";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [data, setData] = useState({
    jobLabel: "Emplois",
    locationLabel: "Ville",
    dateLabel: "Date",
    searchBox: "Entrez votre ville..",
    selectPlaceholder: "Sélectionner une ville",
    country: "fr",
    location: "-",
    jobCount: totalParis,
    selectOptions: FR_CITIES,
    selectedCity: "paris",
  });
  return (
    <AppContext.Provider value={[data, setData]}>
      {props.children}
    </AppContext.Provider>
  );
};
