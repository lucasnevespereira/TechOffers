import React, { useContext } from "react";
import "./SelectBox.css";
import Select from "react-select";
import { AppContext } from "../../context/AppContext";
import { CountContext } from "../../context/CountContext";
import {
  parisCount,
  lisboaCount,
  portoCount,
  londonCount,
  manchesterCount,
  bordeauxCount,
  marseilleCount,
  lyonCount,
  totalParis,
  totalBordeaux,
  totalMarseille,
  totalLyon,
  totalLisboa,
  totalPorto,
  totalLondon,
  totalManchester,
} from "../../data/techs";

const SelectBox = () => {
  const [data, setData] = useContext(AppContext);
  const [count, setCount] = useContext(CountContext);

  const handleChange = (e) => {
    switch (e.value) {
      case "paris":
        setCount({
          chartCount: parisCount,
          totalCount: totalParis,
        });
        break;
      case "bordeaux":
        setCount({
          chartCount: bordeauxCount,
          totalCount: totalBordeaux,
        });
        break;
      case "marseille":
        setCount({
          chartCount: marseilleCount,
          totalCount: totalMarseille,
        });
        break;
      case "lyon":
        setCount({
          chartCount: lyonCount,
          totalCount: totalLyon,
        });
        break;
      case "lisboa":
        setCount({
          chartCount: lisboaCount,
          totalCount: totalLisboa,
        });
        break;
      case "porto":
        setCount({
          chartCount: portoCount,
          totalCount: totalPorto,
        });
        break;
      case "london":
        setCount({
          chartCount: londonCount,
          totalCount: totalLondon,
        });
        break;
      case "manchester":
        setCount({
          chartCount: manchesterCount,
          totalCount: totalManchester,
        });
        break;
    }
    setData({
      location: e.value,
      selectOptions: data.selectOptions,
      selectedCity: e.value,
    });
  };

  return (
    <div className="main-select">
      <Select
        placeholder={data.selectPlaceholder}
        options={data.selectOptions}
        onChange={handleChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: "#00adb5",
            primary: "#00adb5",
          },
        })}
      />
    </div>
  );
};

export default SelectBox;
