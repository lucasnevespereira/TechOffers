import "./Main.css";
import Chart from "../charts/Chart";
import Searchbox from "../searchbox/Searchbox";
import "../../utils/trads";
import * as trads from "../../utils/trads";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <Searchbox />
        <div className="main__cards">
          <div className="card">
            <div className="align">
              <i className="fa fa-calendar fa-2x text-red"></i>
            </div>
            <div className="align">
              <div className="card_inner">
                <p className="text-primary-p">Date</p>
                <span className="font-bold text-title">24/12</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="align">
              <i className="fa fa-folder fa-2x text-yellow"></i>
            </div>
            <div className="align">
              <div className="card_inner">
                <p className="text-primary-p">{trads.job}</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="align">
              <i className="fas fa-map-pin fa-2x text-green"></i>
            </div>

            <div className="align">
              <div className="card_inner">
                <p className="text-primary-p">Location</p>
                <span className="font-bold text-title">Paris</span>
              </div>
            </div>
          </div>
        </div>
        <div className="charts">
          <Chart />
          {/* <div className="charts__container">
            <div className="charts__container__title">
              <div>
                <h1>Jobs Counted</h1>
                <p>Paris, France</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
