import React, { Component } from 'react';
import CircleButton from '../../components/circleButton';
import DateRangePicker from '../../components/dateRangePicker';

class EMCNemReport extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <label className="col-9">  Create Report</label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9">  Export DOC File </label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9">  Export PDF File </label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9">  Email Report & Files </label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                    </div>
                    <div className="col-3">
                        <CircleButton btnValue="CREATE" classes='btn btn-warning' />
                    </div>
                </div><br /><br />
                <div>
                    <DateRangePicker />
                </div>
            </div>
        )
    }
}

export default EMCNemReport;