import React, { Component } from 'react';
import GaugeChart from './gaugeChart';

class FlexItem extends Component {

    render() {
        return (
            <div className="flexItem" style={{ height: 115 }}>
                <div className="flexItemGaugeChart">
                    <span className="badge badge-pill badge-light"
                        style={{ border: '1px solid', fontSize: 10, marginTop: 2 }}>
                        118
                        <br />
                        <small>Number of sites</small>
                    </span>
                    <div>
                        <GaugeChart paddingBottom='100' />
                    </div>
                </div>
                <div className="flexItemDate" style={{ marginTop: -100 }}>
                    {this.props.date}
                </div>
            </div>
        )
    }
}

export default FlexItem;