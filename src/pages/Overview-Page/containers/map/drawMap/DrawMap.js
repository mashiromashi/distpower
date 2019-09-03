import React, { Component } from "react";
import { InfoWindow, Marker, Map, GoogleApiWrapper } from "google-maps-react";
import fontawesome from "fontawesome-markers";
import TR from "./InfoTableData";
import moment from "moment";
import { api_url } from "./../../../../../util/apiURL";

class DrawMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      generatorId: "",
      gauge: "",
      generatorName: "",
      available: "",
      incPanelIncVoltage: "",
      incPanelGridFrequency: "",
      incPanelInverterStatus: "",
      standByGen_start_running_stop: "",
      standByGen_gen_running: "",
      standByGen_gen_voltage: "",
      standByGen_gen_power: "",
      standByGen_current: "",
      standByGen_gen_frequency: "",
      standByGen_fuel_status: "",
      standByGen_remu: "",
      sysStatusMainBreaker: "",
      sysStatusRemote: ""
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this._apiFetch = this._apiFetch.bind(this);
  }

  async _apiFetch() {
    await fetch(
      `${api_url}/v1/data/generator-info?timestamp=${moment(new Date()).format(
        "YYYY-MM-DD_HH:mm:ss.SSS"
      )}`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "X-AUTH-TOKEN": sessionStorage.getItem("userJwt")
        }
      }
    )
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        this.setState({
          generatorId: data.data.generatorId,
          guage: data.data.guage,
          generatorName: data.data.generatorName,
          available: data.data.available,

          standByGen_start_running_stop:
            data.data.standby_generator_panel[0].start_running_stop,
          standByGen_gen_running:
            data.data.standby_generator_panel[0].gen_running,
          standByGen_gen_voltage:
            data.data.standby_generator_panel[0].gen_voltage,
          standByGen_gen_power: data.data.standby_generator_panel[0].gen_power,
          standByGen_current: data.data.standby_generator_panel[0].gen_current,
          standByGen_gen_frequency:
            data.data.standby_generator_panel[0].gen_frequency,
          standByGen_fuel_status:
            data.data.standby_generator_panel[0].fuel_status,
          standByGen_remu: data.data.standby_generator_panel[0].remu,

          incPanelIncVoltage: data.data.incomingPanel.incomingVoltage,
          incPanelGridFrequency: data.data.incomingPanel.gridFrequency,
          incPanelInverterStatus: data.data.incomingPanel.inverterStatus,

          sysStatusMainBreaker: data.data.system_status[0].main_breaker,
          sysStatusRemote: data.data.system_status[0].remote_byPass_maintenence
        });
      });
  }

  onMarkerClick = (props, marker, e) => {
    console.table(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    this._apiFetch();
  }

  render() {
    const {
      generatorId,
      generatorName,
      standByGen_start_running_stop,
      standByGen_gen_running,
      standByGen_gen_voltage,
      standByGen_gen_power,
      standByGen_gen_frequency,
      standByGen_fuel_status,
      standByGen_remu,
      standByGen_current,
      incPanelIncVoltage,
      incPanelGridFrequency,
      incPanelInverterStatus,
      sysStatusMainBreaker,
      sysStatusRemote,
      available
    } = this.state;
    let fillcolor = "",
      strokecolor = "";

    return (
      <div id="google-map-holder">
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%", position: "inherit" }}
          className={"map"}
          initialCenter={{
            lat: 1.329832,
            lng: 103.816317
          }}
          zoom={12}
          zoomControl={false}
          gestureHandling={"cooperative"}
          onClick={this.onMapClicked}
        >
          {latlngs.map((latlng, i) => {
            if (latlng.status === "start") {
              fillcolor = "#0f0";
              strokecolor = "red";
            }
            if (latlng.status === "standbyoff") {
              fillcolor = "black";
              strokecolor = "red";
            }
            if (latlng.status === "running") {
              fillcolor = "#00ff00";
              strokecolor = "#00ff00";
            }
            if (latlng.status === "alerts") {
              fillcolor = "red";
              strokecolor = "red";
            }
            if (latlng.status === "stop") {
              fillcolor = "black";
              strokecolor = "white";
            }
            return (
              <Marker
                key={i}
                mapCenter="aarr"
                onClick={this.onMarkerClick}
                position={{ lat: latlng.lat, lng: latlng.lng }}
                name={latlng.status}
                lat={latlng.lat}
                lng={latlng.lng}
                icon={{
                  path: fontawesome.CERTIFICATE,
                  scale: 0.3,
                  strokeWeight: 2,
                  strokeColor: strokecolor,
                  strokeOpacity: 1,
                  fillColor: fillcolor,
                  fillOpacity: 1
                }}
                title="Click for details"
              />
            );
          })}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div className="table-responsive" style={{ height: "40vh" }}>
              <h6>Status : {this.state.selectedPlace.name}</h6>
              <table className="table tableInMap table-sm">
                <tbody>
                  <TR
                    dOne="Gen Name"
                    dTwo={generatorName ? generatorName : "N/A"}
                  />
                  <TR dOne="Gen ID" dTwo={generatorId ? generatorId : "N/A"} />
                  <TR dOne="Address" dTwo="14 Gul Ave" />
                  {/* <TR dOne="Rated Power (kW)" dTwo="350" /> */}
                  {/* <TR dOne="Participation Power (kW)" dTwo="0" /> */}
                  <TR dOne="System" dTwo="Status" dClass="title" />
                  <TR
                    dOne="Main Breaker"
                    dTwo={sysStatusMainBreaker ? sysStatusMainBreaker : "N/A"}
                  />
                  <TR
                    dOne="Remote/ByPass/Maintenance"
                    dTwo={sysStatusRemote ? sysStatusRemote : "N/A"}
                    dClass="hrline"
                  />
                  <TR dOne="Incoming Panel" dClass="title" />
                  <TR
                    dOne="Incoming Voltage"
                    dTwo={incPanelIncVoltage ? incPanelIncVoltage : "N/A"}
                  />
                  <TR
                    dOne="Grid Frequency"
                    dTwo={incPanelGridFrequency ? incPanelGridFrequency : "N/A"}
                  />
                  <TR
                    dOne="Inverters"
                    dTwo={
                      incPanelInverterStatus ? incPanelInverterStatus : "N/A"
                    }
                    dClass="hrline"
                  />
                  <TR dOne="Standby Generator Panel" dClass="title" />
                  <TR
                    dOne="REMU"
                    dTwo={standByGen_remu ? standByGen_remu : "N/A"}
                  />
                  <TR
                    dOne="Start/Running/Stop"
                    dTwo={
                      standByGen_start_running_stop
                        ? standByGen_start_running_stop
                        : "N/A"
                    }
                  />
                  <TR
                    dOne="Gen Running (RMP)"
                    dTwo={
                      standByGen_gen_running ? standByGen_gen_running : "N/A"
                    }
                  />
                  <TR
                    dOne="Gen Voltage (V)"
                    dTwo={
                      standByGen_gen_voltage ? standByGen_gen_voltage : "N/A"
                    }
                  />
                  <TR
                    dOne="Gen Current (Amp)"
                    dTwo={standByGen_current ? standByGen_current : "N/A"}
                  />
                  <TR
                    dOne="Gen Power (kW)"
                    dTwo={standByGen_gen_power ? standByGen_gen_power : "N/A"}
                  />
                  <TR
                    dOne="Gen Frequency (Hz)"
                    dTwo={
                      standByGen_gen_frequency
                        ? standByGen_gen_frequency
                        : "N/A"
                    }
                  />
                  <TR dOne="Fuel Status" dTwo="" />
                  <TR
                    dTwo={
                      //   <button
                      //     className="btn btn-success"
                      //     onClick="/site-control"
                      //   >
                      //     Go to Site Control Page
                      //   </button>
                      <div class="container text-center">
                        <a
                          href="/site-control"
                          class="btn btn-info"
                          role="button"
                        >
                          Click here to go to site control page
                        </a>
                      </div>
                    }
                  />
                </tbody>
              </table>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  //apiKey: ("AIzaSyBbTJ6YDw0XIMXG0Wu-cdoYdga_Ma3jy3Y")
  apiKey: "AIzaSyDSbSS5V92UdmSRi125GPAJjH11f-9PaV0"
})(DrawMap);
let latlngs = [{ lat: 1.31553, lng: 103.67277, status: "activated" }];

// {lat:1.3364837,lng:103.8449139 ,status:'activated'},
// {lat:1.342601331131693,lng:103.9089497123108,status:'offline'},
// {lat:1.3360799809569013,lng:103.89109692910768,status:'offline'},
// {lat:1.3244101532814916,lng:103.85573468545533,status:'offline'},
// {lat:1.321321072031588,lng:103.82998547891236,status:'activated'},

// {lat : 1.358048, lng :  103.886454, status:'standbyin'},
// {lat : 1.321357, lng :  103.891386, status:'standbyin'},
// {lat : 1.343781, lng :  103.861990, status:'standbyin'},
// {lat : 1.381194, lng :  103.868811, status:'standbyin'},
// {lat : 1.377442, lng :  103.862459, status:'standbyin'},
// {lat : 1.343641, lng :  103.849618, status:'standbyin'},
// {lat : 1.375237, lng :  103.839821, status:'standbyin'},
// {lat : 1.319795, lng :  103.768209, status:'standbyin'},
// {lat : 1.316883, lng :  103.778162, status:'standbyin'},
// {lat : 1.329989, lng :  103.769665, status:'standbyin'},
// {lat : 1.347428, lng :  103.766932, status:'standbyin'},
// {lat : 1.362874, lng :  103.768648, status:'standbyin'},
// {lat : 1.366306, lng :  103.763842, status:'standbyin'},
// {lat : 1.350127, lng :  103.752341, status:'standbyin'},
// {lat : 1.338582, lng :  103.740215, status:'standbyin'},
// {lat : 1.328192, lng :  103.736173, status:'standbyin'},
// {lat : 1.360517, lng :  103.730977, status:'standbyin'},
// {lat : 1.366290, lng :  103.722316, status:'standbyin'},
// {lat : 1.341469, lng :  103.720006, status:'standbyin'},
// {lat : 1.342682, lng :  103.708057, status:'standbyin'},

// { lat : 1.352520,lng :  103.922978 , status : 'standbyoff' },
// { lat : 1.354357,lng :  103.917875 , status : 'standbyoff' },
// { lat : 1.362115,lng :  103.885530 , status : 'standbyoff' },
// { lat : 1.310945,lng :  103.865078 , status : 'standbyoff' },
// { lat : 1.364336,lng :  103.864886 , status : 'standbyoff' },
// { lat : 1.331729,lng :  103.853556 , status : 'standbyoff' },
// { lat : 1.373945,lng :  103.849089 , status : 'standbyoff' },
// { lat : 1.379140,lng :  103.848512 , status : 'standbyoff' },
// { lat : 1.357711,lng :  103.759111 , status : 'standbyoff' },
// { lat : 1.360805,lng :  103.759535 , status : 'standbyoff' },
// { lat : 1.358660,lng :  103.762785 , status : 'standbyoff' },
// { lat : 1.339106,lng :  103.744741 , status : 'standbyoff' },
// { lat : 1.338397,lng :  103.711108 , status : 'standbyoff' },
// { lat : 1.345324,lng :  103.711396 , status : 'standbyoff' },
// { lat : 1.344660,lng :  103.702319 , status : 'standbyoff' },
// { lat : 1.346376,lng :  103.704036 , status : 'standbyoff' },
// { lat : 1.345675,lng :  103.704405 , status : 'standbyoff' },

// {lat : 1.385127, lng :  103.889224 , status : 'alert'},
// {lat : 1.349139, lng :  103.848857 , status : 'alert'},
// {lat : 1.335786, lng :  103.741784 , status : 'alert'},
// {lat : 1.339727, lng :  103.713452 , status : 'alert'},
