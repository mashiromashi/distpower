import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import d3 from 'd3/d3';
import './7DayPricesAndDemand.css';

class Chart extends React.Component{
    
    render(){
        function formatDate(date) {
            var monthDateArray = d3.time.format("%d%b");
            date = monthDateArray(date);
            return date;
        }
        function Last7Days() {
            var result = [];
            for (var i = 1; i <= 7; i++) {
                var d = new Date();
                d.setDate(d.getDate() - i);
                result.push(formatDate(d))
            }
            // result = result.unshift("x");
            result = result.reverse();
            return result;
        }
        var dateArray = Last7Days();
        const data = {
            columns: [
                ['Demand', 6000, 5000, 5100, 5000, 5500, 5500, 5000],
                ['USEP', 210, 200, 120, 100, 300, 250, 210],
                ['BVP', 110, 210, 200, 150, 150, 250, 180],
                ['LVP', 100, 220, 100, 100, 300, 300, 110]
            ],
            axes: {
                USEP: 'y',
                Demand: 'y2'
            },
            colors: {
                Demand: '#0000ff',
                USEP: '#ff4040',
                BVP: '#9b0000',
                LVP: '#00ffff'
            },
            type: 'spline'
          },
          axis = {
            y: {
                max: 400,
                min: 50,
                label: {
                    text: 'USEP ($/MWh)',
                    position: 'outer-middle'
                },
                tick: {
                    outer: false,
                    format: function (d) {
                        let num = Number.parseFloat(d).toFixed(2);
                        return num;
                    }
                },
                padding: {
                    bottom: 0
                }
            },
            y2: {
                min: 0,
                max: 6000,
                show: 'true',
                label: {
                    text: 'Demand (MW)',
                    position: 'outer-middle'
                },
                tick: {
                    outer: false,
                    values: [0, 2000, 4000, 6000]
                },
                padding: {
                    bottom: 0
                }
            },
            x: {
                type: 'category',
                categories: [...dateArray],
                label: {
                    text: 'Date',
                    position: 'outer-center'
                },
                tick: {
                    multiline: false,
                    rotate: 30
                }
            }
          },
          grid = {
            y: {
                show: true
            }
          },
          padding = {
              top : 0
          };
        //   size = {
        //       height : 170
        //   }
          
        return <C3Chart class={"c4"} data={data} axis={axis} grid={grid} padding={padding}/>;
    }
}

export default Chart;