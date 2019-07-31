import React from 'react';
import d3 from 'd3/d3';
import LineChart from './components/lineChart';
import './Market-bidding-page.css';
import DateTime from '../../common/js/DataTime';
import Table from './containers/Table';
import Options from './containers/Options';
import GaugeChart from './components/gaugeChart';
import FuturePlannedCapacity from './components/FuturePlannedCapacity';


class marketBidding extends React.Component {

    componentDidMount() {

    }

    render() {
        const futureDays = () => {
            var futureDaysArray = [];
            var formatDate = d3.time.format("%d %b");
            for (var i = 1; i <= 20; i++) {
                var currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + i);
                futureDaysArray.push(formatDate(currentDate));
            }
            return futureDaysArray;
        }
        let futureDate = futureDays();
        return (
            <div className="row Market-bidding-page">
                <div className="col-lg-9 col-md-12">
                    <div className="card lineChart">
                        <div className="card-header">Date : <DateTime /></div>
                        <div className="card-body">
                            <LineChart />
                        </div>
                    </div>
                    <div className="card options">
                        <div className="card-body" style={{ padding: '0px 15px' }}>
                            <Options />
                        </div>
                    </div>
                    <div className="card table">
                        <div className="card-body">
                            <Table data={dataSet} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="card border-light gaugeChart">
                        <div className="card-header">Date : <DateTime /></div>
                        <div className="card-body" style={{ padding: 0 }}>
                            <span className="badge badge-pill badge-light" style={{ margin: '10px 0px 0px 10px', border: '1px solid' }}>
                                118<br /><small>Number of sites</small>
                            </span>
                            <GaugeChart />
                        </div>
                    </div>
                    <div className="FuturePlannedCapacities">
                        <FuturePlannedCapacity futureDate={futureDate} />
                    </div>
                </div>
            </div>
        )
    }
}

var dataSet = [
    { "regno": "CRP0001", "genid": "SDY001", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP0002", "genid": "SDY002", "rated": "320", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "0", "offered": "0", "offline": "0" },
    { "regno": "CRP0003", "genid": "SDY003", "rated": "320", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP0004", "genid": "SDY004", "rated": "320", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP0005", "genid": "SDY005", "rated": "250", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP0006", "genid": "SDY006", "rated": "250", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP0007", "genid": "SDY007", "rated": "240", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP0008", "genid": "SDY008", "rated": "240", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "0" },
    { "regno": "CRP0009", "genid": "SDY009", "rated": "240", "part": "300", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "0" },
    { "regno": "CRP00010", "genid": "SDY0010", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "0", "offered": "0", "offline": "0" },
    { "regno": "CRP00011", "genid": "SDY0011", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP00012", "genid": "SDY0012", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP00013", "genid": "SDY0013", "rated": "350", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP00014", "genid": "SDY0014", "rated": "350", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP00015", "genid": "SDY0015", "rated": "350", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP00016", "genid": "SDY0016", "rated": "350", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "0", "offline": "1" },
    { "regno": "CRP00017", "genid": "SDY0017", "rated": "350", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP00018", "genid": "SDY0018", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP00019", "genid": "SDY0019", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" },
    { "regno": "CRP00020", "genid": "SDY0020", "rated": "250", "part": "200", "address": "17 Gul Avenue,Singapore 629788(SWTS Gen Workshop)", "available": "1", "offered": "1", "offline": "0" }
];
export default marketBidding;