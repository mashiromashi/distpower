import React from 'react';
import './Map.css';
import DrawMap from './drawMap/DrawMap';

const map = () => (
    <div className='Map'>
        <DrawMap
            zoom={12}
            center={{ lat: 1.369167, lng: 103.8022343 }}
        />
        <ul className="list-group mylegend">
            <li className="list-group-item">
                <i className="fa fa-certificate standbyInMarket" aria-hidden="true"></i>
                STANDBY(IN MARKET)
            </li>
            <li className="list-group-item">
                <i className="fa fa-certificate standbyOffMarket" aria-hidden="true"></i>
                STANDBY(OFF MARKET)
            </li>
            <li className="list-group-item">
                <i className="fa fa-certificate activated" aria-hidden="true"></i>
                ACTIVATED
            </li>
            <li className="list-group-item">
                <i className="fa fa-certificate alerts" aria-hidden="true"></i>
                ALERT!!!
            </li>
            <li className="list-group-item">
                <i className="fa fa-certificate offline" aria-hidden="true"></i>
                OFFLINE
            </li>
        </ul>
    </div>
);

export default map;