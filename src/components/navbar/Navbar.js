import "./Navbar.css";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FR_CITIES, UK_CITIES, PT_CITIES } from "../../data/cityOptions";
import logo from "../../assets/logo.svg";
import { CountContext } from "../../context/CountContext";

const Navbar = () => {
  const [data, setData] = useContext(AppContext);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="navbar">
      <div className="nav_logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar__links">
        <a
          className={activeIndex === 1 ? "active_link" : ""}
          onClick={() => {
            setActiveIndex(1);
            setData({
              jobLabel: "Ofertas",
              locationLabel: "Cidade",
              dateLabel: "Data",
              selectPlaceholder: "Escolha uma cidade",
              searchBox: "Entre a sua localisação..",
              country: "pt",
              selectOptions: PT_CITIES,
            });
          }}
        >
          <span>PT</span> 🇵🇹
        </a>
        <a
          className={activeIndex === 2 ? "active_link" : ""}
          onClick={() => {
            setActiveIndex(2);
            setData({
              jobLabel: "Jobs",
              locationLabel: "City",
              dateLabel: "Date",
              selectPlaceholder: "Select a city",
              searchBox: "Enter your location..",
              country: "uk",
              selectOptions: UK_CITIES,
            });
          }}
        >
          <span>UK</span> 🇬🇧
        </a>
        <a
          className={
            activeIndex === 0
              ? "active_link"
              : activeIndex === 3
              ? "active_link"
              : ""
          }
          onClick={() => {
            setActiveIndex(3);
            setData({
              jobLabel: "Emplois",
              locationLabel: "Ville",
              dateLabel: "Date",
              selectPlaceholder: "Sélectionner une ville",
              searchBox: "Entrez votre ville..",
              country: "fr",
              selectOptions: FR_CITIES,
            });
          }}
        >
          <span>FR</span> 🇫🇷
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
