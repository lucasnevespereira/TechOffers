export let job = "Emplois";
export let location = "Ville";
export let date = "Date";
export let searchBox = "Entrez votre ville..";

export const getContent = (country) => {
  switch (country) {
    case "fr":
      job = "Emplois";
      location = "Ville";
      date = "Date";
      searchBox = "Entrez votre ville..";
      break;
    case "uk":
      job = "Jobs";
      location = "Location";
      date = "Date";
      searchBox = "Enter your location..";
      break;
    case "pt":
      job = "Ofertas";
      location = "Localisação";
      date = "Data";
      searchBox = "Entre a sua localisação";
      break;
  }
};
