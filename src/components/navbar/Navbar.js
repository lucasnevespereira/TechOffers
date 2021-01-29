import "./Navbar.css";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = ({ openSidebar }) => {
  const [data, setData] = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__links">
        <a
          className={activeIndex === 1 ? "active_link" : ""}
          onClick={() => {
            setActiveIndex(1);
            setData({
              jobLabel: "Ofertas",
              locationLabel: "Localisação",
              dateLabel: "Data",
              searchBox: "Entre a sua localisação..",
              country: "pt",
            });
          }}
        >
          PT 🇵🇹
        </a>
        <a
          className={activeIndex === 2 ? "active_link" : ""}
          onClick={() => {
            setActiveIndex(2);
            setData({
              jobLabel: "Jobs",
              locationLabel: "Location",
              dateLabel: "Date",
              searchBox: "Enter your location..",
              country: "uk",
            });
          }}
        >
          UK 🇬🇧
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
              searchBox: "Entrez votre ville..",
              country: "fr",
            });
          }}
        >
          FR 🇫🇷
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
