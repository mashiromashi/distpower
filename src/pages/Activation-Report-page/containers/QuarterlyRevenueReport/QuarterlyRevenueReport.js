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
                            <label className="col-9">  Create QTR Revenue Report</label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9">  Export CSV File </label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9">  Convert to PDF File </label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9"> Email Report & File</label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                    </div>
                    <div className="col-3">
                        <CircleButton btnValue="CREATE" classes='btn btn-primary' />
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