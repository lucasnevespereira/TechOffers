import "./Searchbox.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Searchbox = () => {
  const [trad] = useContext(AppContext);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor="search">Search your location</label>
        <input
          id="search"
          type="search"
          placeholder={String(trad.searchBox)}
          autoFocus
          required
          onChange={handleSearch}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Searchbox;
