import "./Navbar.css";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = ({ openSidebar }) => {
  const [trad, setTrad] = useContext(AppContext);
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
            setTrad({
              job: "Ofertas",
              location: "Localisação",
              date: "Data",
              searchBox: "Entre a sua localisação..",
            });
          }}
        >
          PT 🇵🇹
        </a>
        <a
          className={activeIndex === 2 ? "active_link" : ""}
          onClick={() => {
            setActiveIndex(2);
            setTrad({
              job: "Jobs",
              location: "Location",
              date: "Date",
              searchBox: "Enter your location..",
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
            setTrad({
              job: "Emplois",
              location: "Ville",
              date: "Date",
              searchBox: "Entrez votre ville..",
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
