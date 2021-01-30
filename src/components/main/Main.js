import "./Main.css";
import SelectBox from "../selectbox/SelectBox";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import BarChart from "../charts/BarChart";
import { CountContext } from "../../context/CountContext";

const Main = () => {
  const [data, setData] = useContext(AppContext);
  const [count, setCount] = useContext(CountContext);
  let today = new Date(),
    currDate = today.getDate() + "/" + today.getMonth() + 1;

  return (
    <main>
      <div className="main__container">
        {/* <Searchbox /> */}
        <SelectBox />
        <div className="main__cards">
          <div className="card">
            <div className="align">
              <i className="fa fa-calendar fa-2x text-red"></i>
            </div>
            <div className="align">
              <div className="card_inner">
                {/* <p className="text-primary-p">{data.dateLabel}</p> */}
                <span className="font-bold text-title">{currDate}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="align">
              <i className="fa fa-folder fa-2x text-yellow"></i>
            </div>
            <div className="align">
              <div className="card_inner">
                {/* <p className="text-primary-p">{data.jobLabel}</p> */}
                <span className="font-bold text-title">{count.totalCount}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="align">
              <i className="fas fa-map-pin fa-2x text-green"></i>
            </div>

            <div className="align">
              <div className="card_inner">
                {/* <p className="text-primary-p">{data.locationLabel}</p> */}
                <span className="font-bold text-title">
                  {data.location ? data.location : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="charts">
          <div></div>

          <BarChart />
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
