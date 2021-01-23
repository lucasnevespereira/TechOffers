import "./Sidebar.css";
import logo from "../../assets/logo-w.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a>Home</a>
        </div>
        <h2>Infos</h2>
        <div className="sidebar__link">
          <i className="fa fa-folder"></i>
          <a>About</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake"></i>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
