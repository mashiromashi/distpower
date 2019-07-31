import React, { Component } from 'react';
import CircleButton from '../../components/circleButton';
const $ = require('jquery');

class EMCNemReport extends Component {
    constructor() {
        super();
        this.state = {
            lock: true,
            valueForIRF: false,
            valueForAWP: false
        }
    }

    changedSelectBoxHandler = () => {
        let a = $('.custom-select-IR').val();
        let b = $('.custom-select-A').val();
        (a === "true" && b === "true") ? this.setState({ lock: false }) : this.setState({ lock: true });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <label className="col-9">  Instruction Received from PSO</label>
                            <select className="col-3 custom-select custom-select-IR" onChange={this.changedSelectBoxHandler} defaultValue={this.state.valueForIRF}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div className="row">
                            <label className="col-9"> Authentication with PSO </label>
                            <select className="col-3 custom-select custom-select-A" onChange={this.changedSelectBoxHandler} defaultValue={this.state.valueForAWP}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <CircleButton lock={this.state.lock} btnValue="ACTIVATE" classes='btn btn-danger'>
                            <span className="fa fa-lock"></span> Lock
                        </CircleButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default EMCNemReport;