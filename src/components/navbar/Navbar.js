import "./Navbar.css";
import { useState } from "react";
import * as trads from "../../utils/trads";

const Navbar = ({ openSidebar }) => {
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
            trads.getContent("pt");
          }}
        >
          PT 🇵🇹
        </a>
        <a
          className={activeIndex === 2 ? "active_link" : ""}
          onClick={() => {
            setActiveIndex(2);
            trads.getContent("uk");
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
            trads.getContent("fr");
          }}
        >
          FR 🇫🇷
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
