import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import './RealTimeAncillaryServicesPrices.css';

class Chart extends React.Component{
    render(){
        function Last7Days() {
            var result = [];
            for(var i = 1 ; i <=48 ; i+=4){
                result.push(i)
            }
            return result;
        }

        var dateArray = Last7Days();
        const data = {
            columns: [
                ['Contingency Reserve'   , 11 , 11 , 10 , 40 , 10 , 10 , 18 , 10 , 15 , 15 , 20 , 30 ],
                ['Regulation'            , 10 , 12 , 10 , 10 , 11 , 18 , 11 , 20 , 19 , 30 , 10 , 11 ]
            ],
            types : {
                Demand : 'bar'
            },
            axes: {
                'Contingency Reserve': 'y',
                'Regulation': 'y2'
            },
            colors: {
                'Contingency Reserve': '#2159b8',
                'Regulation': '#ff4040'
               
            },
            type: 'spline'
          },
          axis = {
            y: {
                max: 50,
                min: 0,
                label: {
                    text: 'Reserve Price ($/MWh)',
                    position: 'outer-middle'
                },
                tick: {
                    outer: false,
                    values : [0,10,20,30,40]
                },
                padding: {
                    bottom: 0
                }
            },
            y2: {
                min: 0,
                max: 50,
                show: 'true',
                label: {
                    text: 'Regulation Price($/MWh)',
                    position: 'outer-middle'
                },
                tick: {
                    outer: false,
                    values: [0,10,20,30]
                },
                padding: {
                    bottom: 0
                }
            },
            x: {
                type: 'category',
                categories: [...dateArray],
                label: {
                    text: 'Period',
                    position: 'outer-center'
                },
                tick: {
                    outer : false,
                    multiline: false,
                    centered : true
                },
                height: 40                
            }
          },
          grid = {
            y: {
                show: true
            }
          },
          padding = {
              top : 0
          },
        //   size = {
        //       height : 170
        //   },
          regions = [
            {axis: 'x',  end: 10, class: 'regionX'}
          ]
          ;
        return <C3Chart class={"c4"} data={data} axis={axis} grid={grid} padding={padding} regions={regions}/>;
    }
}

export default Chart;