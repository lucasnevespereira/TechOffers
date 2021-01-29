import "./Searchbox.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const techList = {};

const Searchbox = () => {
  const [data, setData] = useContext(AppContext);
  const [value, setValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await axios.get(
      `https://count-jobs.herokuapp.com/api?term=JavaScript&location=${value}&country=${data.country}`
    );

    console.log(result);

    setData({
      ...data,
      jobCount: result.data.count,
      location: value,
    });
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
          placeholder={String(data.searchBox)}
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
