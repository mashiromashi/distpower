import React from "react";
import Map from "./containers/map/Map";
import "./Overview-page.css";
import SevenDayPricesAndDemandChart from "./containers/Chart/7DayPricesAndDemand/7DayPricesAndDemand";
import RealTimePricesAndDemandChart from "./containers/Chart/RealTimePricesAndDemand/RealTimePricesAndDemand";
import RealTimeAncillaryServicesPrices from "./containers/Chart/RealTimeAncillaryServicesPrices/RealTimeAncillaryServicesPrices";
import OverviewPageOneDataChart from "./containers/Chart/OverviewPageOnedataChart/OverviewPageOnedataChart";
import DateTime from "../../common/js/DataTime";

class overview extends React.Component {
  render() {
    return (
      <div className="row OverviewPage">
        <div className="col-lg-2 col-md-3">
          <div className="card mb-1 realTimePriceAndDemand">
            <div className="card-body">
              <h5 className="card-title">
                Real-Time Prices and Demand- <DateTime page="overview" />
              </h5>
              <RealTimePricesAndDemandChart />
            </div>
          </div>
          <div className="card mb-1 sevenDayPricesAndDemand">
            <div className="card-body">
              <h5 className="card-title">7 Day Prices and Demand</h5>
              <SevenDayPricesAndDemandChart />
            </div>
          </div>
          <div className="card mb-1 realTimeAncillaryServicesPrices">
            <div className="card-body">
              <h5 className="card-title">
                Real-Time Ancillary Services Prices-{" "}
                <DateTime page="overview" />
              </h5>
              <RealTimeAncillaryServicesPrices />
            </div>
          </div>
        </div>

        <div className="col-lg-10 col-md-9">
          <div>
            <Map />
          </div>
          <div className="card OverviewPageOnedataChart">
            <div className="card-body">
              <OverviewPageOneDataChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default overview;
