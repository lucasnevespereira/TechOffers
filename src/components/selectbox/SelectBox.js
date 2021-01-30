import React, { useContext } from "react";
import "./SelectBox.css";
import Select from "react-select";
import { AppContext } from "../../context/AppContext";

const SelectBox = () => {
  const [data, setData] = useContext(AppContext);
  console.log(data);

  return (
    <div className="main-select">
      <Select
        defaultValue={data.selectedCity}
        options={data.selectOptions}
        onChange={(e) => {
          console.log("VALLLL => ", e.value);
          setData({
            location: e.value,
            selectOptions: data.selectOptions,
            selectedCity: e.value,
          });

          console.log(data.selectedCity);
        }}
      />
    </div>
  );
};

export default SelectBox;
