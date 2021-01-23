import "./Searchbox.css";
import * as trads from "../../utils/trads";

const Searchbox = () => {
  return (
    <div className="search-container">
      <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search your location</label>
        <input
          id="search"
          type="search"
          placeholder={trads.searchBox}
          autofocus
          required
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Searchbox;
