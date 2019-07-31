import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import './style.css';

class Chart extends React.Component {

    render() {
        let paddingBottom = this.props.paddingBottom;
        const data = {
            columns: [
                ["data", 180]
            ],
            type: 'gauge'
        },
            gauge = {
                min: 0,
                max: 285,
                label: {
                    format: function (value, ratio) {
                        return value + ' MW';
                    }
                }
            },
            legend = {
                show: false
            },
            padding = {
                bottom: paddingBottom
            }

        return <C3Chart data={data} gauge={gauge} legend={legend} padding={padding} />;

    }
}

export default Chart;