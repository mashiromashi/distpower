import React, { Component } from 'react';
import CircleButton from '../../components/circleButton';

class EMCNemReport extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <label className="col-9">  Instruction Received from PSO</label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                        <div className="row">
                            <label className="col-9"> Authentication with PSO </label>
                            <select className="col-3 custom-select"><option>Yes</option> <option selected>No</option></select>
                        </div>
                    </div>
                    <div className="col-3">
                        <CircleButton btnValue="STOP" classes='btn btn-primary' />
                    </div>
                </div>
            </div>
        )
    }
}

export default EMCNemReport;