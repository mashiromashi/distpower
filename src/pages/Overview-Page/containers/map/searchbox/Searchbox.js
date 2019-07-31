import React from 'react';
import './Searchbox.css';
import TR from './TableData';

const Searchbox = () => (
    <div className="Searchbox">
        <div className="input-group">
        <div className="input-group-btn">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="fa fa-bars fa-lg" aria-hidden="true"></span>
            </button>
            <div className="table-responsive dropdown-menu">
            <table className="table tableInMap">
                <tbody>
                    <TR dOne="Reg No." dTwo="CRP0004"/>
                    <TR dOne="Gen ID" dTwo="SDY0004"/>
                    <TR dOne="Address" dTwo="262 Pasir Panjang Rd, Singapore 118628"/>
                    <TR dOne="Rated Power (kW)" dTwo="350"/>
                    <TR dOne="Participation Power (kW)" dTwo="0"/>
                    <TR dOne="System" dTwo="Status" dClass="title"/>
                    <TR dOne="Main Breaker" dTwo="OFF"/>
                    <TR dOne="Remote/ByPass/Maintenance" dTwo="ByPass" dClass="hrline"/>
                    <TR dOne="Incoming Panel" dClass="title" />
                    <TR dOne="Incoming Voltage" dTwo="4.40"/>
                    <TR dOne="Grid Frequency" dTwo="49.99"/>
                    <TR dOne="Inverters" dTwo="ON" dClass="hrline"/>
                    <TR dOne="Standby Generator Panel" dClass="title"/>
                    <TR dOne="REMU" dTwo="ON"/>
                    <TR dOne="Start/Running/Stop" dTwo="STOPPED"/>
                    <TR dOne="Gen Running (RMP)" dTwo="0.00"/>
                    <TR dOne="Gen Voltage (V)" dTwo="0"/>
                    <TR dOne="Gen Current (Amp)" dTwo="0"/>
                    <TR dOne="Gen Power (kW)" dTwo="0"/>
                    <TR dOne="Gen Frequency (Hz)" dTwo="0"/>
                    <TR dOne="Fuel Status" dTwo="E"/>   
                    <TR dTwo={<button className="btn btn-success">Go to Site Control Page</button>}/>                 
                </tbody>
            </table>
            </div>
        </div>
        <input type="text" className="form-control" placeholder="Generator ID"/>
        <span className="input-group-btn">
            <button className="btn btn-default" type="button"><span className="fa fa-search fa-lg" aria-hidden="true"></span></button>
        </span>
        </div>
    </div>
);

export default Searchbox;