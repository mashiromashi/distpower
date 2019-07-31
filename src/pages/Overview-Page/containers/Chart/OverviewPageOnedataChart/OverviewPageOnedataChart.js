import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import './OverviewPageOnedataChart.css';

class Chart extends React.Component{
    
    render(){
        function showPeriod() {
            var result = [];
            for(var i = 1 ; i <=47 ; i++){
                result.push(i)
            }
            return result;
        }
        var periodArray = showPeriod();
        const data = {
            columns: [
                ['data1', 10, 2, 1, 4, 5, 25, 3, 2, 10, 40, 15, 25, 30, 20, 10, 40, 15, 25, 30, 20, 10, 40, 15, 25, 30, 20, 10, 40, 15, 25, 30, 20, 10, 40, 15, 25, 30, 20, 10, 40, 15, 25, 30, 20, 10, 40, 15]
            ],
            axes : {
                'data1':'y'
            }
        },
        axis = {
            y : {
                label : {
                    text : '$/MWh',
                    // position : 'outer-middle'
                },
                tick : {
                    outer : false,
                    values : [0,20,40]
                },
                padding: {
                    bottom: 7
                }
            },
            x : {
                type : 'category',
                categories : [...periodArray],
                label : {
                    text : 'period',
                    // position : 'outer-center'
                },
                tick : {
                    outer : false,
                    multiline : false,
                    centered : true
                }
            }
        },
        grid = {
            x : {
                lines : [
                    {value : 0},{ value : 1},{ value : 2},{ value : 3},{ value : 4},{ value : 5},
                    { value : 6},{ value : 7},{ value : 8},{ value : 9},{ value : 10},{ value : 11},
                    { value : 12},{ value : 13},{ value : 14},{ value : 15},{ value : 16},{ value : 17},
                    { value : 18},{ value : 19},{ value : 20},{ value : 21},{ value : 22},{ value : 23},
                    { value : 24},{ value : 25},{ value : 26},{ value : 27},{ value : 28},{ value : 29},
                    { value : 30},{ value : 31},{ value : 32},{ value : 33},{ value : 34},{ value : 35},
                    { value : 36},{ value : 37},{ value : 38},{ value : 39},{ value : 40},{ value : 41},
                    { value : 42},{ value : 43},{ value : 44},{ value : 45},{ value : 46},{ value : 47}
                ]
            },
            y : {
                    lines : [
                        {value : 20},{value : 40}
                    ]
            }
        },
        // size ={
        //     height : 135
        // },
        legend = {
            show : false
        };
        return <C3Chart data={data} axis={axis} grid={grid} legend={legend}/>;
        
    }
}

export default Chart;