import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import './RealTimePricesAndDemand.css';

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
                ['Demand', 6000, 5000, 5100, 5000, 5500, 5500, 5000, 6000, 5000, 5100, 5000, 5500],
                ['USEP'  , 110 , 100 , 110 , 100 , 100 , 150 , 110 , 110 , 100 , 100 , 150 , 110 ],
                ['BVP'   , 110 , 110 , 100 , 150 , 150 , 150 , 180 , 100 , 150 , 150 , 150 , 180 ],
                ['LVP'   , 100 , 20 , 100 , 100 , 100 , 80 , 110 , 100 , 100 , 100 , 60 , 110 ]
            ],
            types : {
                Demand : 'bar'
            },
            axes: {
                USEP: 'y',
                Demand: 'y2'
            },
            colors: {
                Demand: '#2159b8',
                USEP: '#ff4040',
                BVP: '#9b0000',
                LVP: '#00ffff'
            },
            type: 'spline'
          },
          axis = {
            y: {
                max: 200,
                min: 0,
                label: {
                    text: 'USEP ($/MWh)',
                    position: 'outer-middle'
                },
                tick: {
                    outer: false,
                    values : [0,50,100,150]
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
                    text: 'Period',
                    position: 'outer-center'
                },
                tick: {
                    outer : false,
                    multiline: false,
                    centered : true
                },
                height: 40,
                padding: {
                    bottom:10
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