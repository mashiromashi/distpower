import React, { Component } from "react";
import "./style.css";
import Select from "react-select";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { api_url } from "../../../util/apiURL";
import moment from "moment";

class LeftCom extends Component {
  state = {
    selectedGenerator: null,

    generatorList: [],

    generatorData: [],

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

  _handleGenChange = selectedGenerator => {
    this.setState({ selectedGenerator });
    console.log(`Option Selected ${selectedGenerator}`);
  };

  async _apiFetch() {
    await fetch(
      `${api_url}/v1/data/generator-info?timestamp=${moment(new Date()).format(
        "YYYY-MM-DD_hh:mm:ss.SSS"
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

  _getAllGenerators = () => {
    fetch(
      `${api_url}/v1/data/generator-info?timestamp=${moment(new Date()).format(
        "YYYY-MM-DD_hh:mm:ss.SSS"
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
        let genList = [];

        genList.push(data.data.generatorId);
        this.setState({ generatorList: genList });
        console.log(this.state.generatorList);
      });
  };

  async componentDidMount() {
    this._apiFetch();
    this._getAllGenerators();
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

      generatorList,
      selectedGenerator
    } = this.state;
    return (
      <div className="LeftComponent">
        <div className="genIDdropdown">
          <label>Generator ID</label>
          <Dropdown
            options={generatorList}
            onChange={this._handleGenChange}
            value={selectedGenerator}
            placeholder="Select an option"
          />

          {/* <Select
            value={selectedGenerator}
            onChange={this._handleGenChange}
            options={generatorList}
          /> */}
        </div>

        <div className="table-responsive-sm">
          <table className="table table-sm table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">SITE ID</th>
                <th scope="col">DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Generator ID</th>
                <td>{generatorId}</td>
              </tr>
              <tr>
                <th scope="row">Generator Name</th>
                <td>{generatorName}</td>
              </tr>
              {/* <tr>
                <th scope="row">Address</th>
                <td>30 Cecil Street, S(049712) Prudential Towe</td>
              </tr>
              <tr>
                <th scope="row">Rated Power (kW)</th>
                <td>350</td>
              </tr>
              <tr>
                <th scope="row">Participating (kW)</th>
                <td>0</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="table-responsive-sm">
          <table className="table table-sm table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">SYSTEM</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Main Breaker</th>
                <td>{sysStatusMainBreaker}</td>
              </tr>
              <tr>
                <th scope="row">Remote/ByPass/Maintenance</th>
                <td className="text-danger">{sysStatusRemote}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive-sm">
          <table className="table table-sm table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">Incoming Panel</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Incoming Voltage (V)</th>
                <td>{incPanelIncVoltage}</td>
              </tr>
              <tr>
                <th scope="row"> Grid Frequency (Hz)</th>
                <td>{incPanelGridFrequency}</td>
              </tr>
              <tr>
                <th scope="row">Inverters</th>
                <td>{incPanelInverterStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive-sm">
          <table className="table table-sm table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">Standby Generator Panel</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> REMU </th>
                <td>{standByGen_remu}</td>
              </tr>
              <tr>
                <th scope="row"> Start/Running/Stop </th>
                <td>{standByGen_start_running_stop}</td>
              </tr>
              <tr>
                <th scope="row"> Gen Running (RMP) </th>
                <td>{standByGen_gen_running}</td>
              </tr>
              <tr>
                <th scope="row"> Gen Voltage (V) </th>
                <td>{standByGen_gen_voltage}</td>
              </tr>
              <tr>
                <th scope="row">Gen Current (Amp)</th>
                <td>{standByGen_current}</td>
              </tr>
              <tr>
                <th scope="row"> Gen Power (kW)</th>
                <td>{standByGen_gen_power}</td>
              </tr>
              <tr>
                <th scope="row">Gen Frequency (Hz)</th>
                <td>{standByGen_gen_frequency}</td>
              </tr>
              <tr>
                <th scope="row">Fuel Status (F/3Q/H/1Q/E)</th>
                <td className="text-danger">{standByGen_fuel_status}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive-sm">
          <table className="table table-sm table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col" colSpan="2">
                  SERVICE ORDER
                </th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fuel</th>
                <td>To top up fuel</td>
                <td>Sent on 14 May REF: 2018051400</td>
              </tr>
              <tr>
                <th scope="row">Maintenance</th>
                <td> AdhocMaintenance</td>
                <td>Send on 14 May REF: 20180514002</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LeftCom;
