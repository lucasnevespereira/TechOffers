import "./Searchbox.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { techLabels } from "../../data/techs";
import axios from "axios";

const Searchbox = () => {
  const [data, setData] = useContext(AppContext);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let totalOfJobs = 0;

    techLabels.forEach(async (tech) => {
      console.log(tech);
      let result = await axios.get(
        `http://localhost:5000/api?term=${tech}&location=${value}&country=${data.country}`
      );
      let counted = result.data.count;
      let resultCount = String(counted).trim();
      totalOfJobs = totalOfJobs + Number(resultCount);
    });

    setData({
      ...data,
      jobCount: totalOfJobs,
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
