import React, { Component } from 'react';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import 'datatables.net-select-dt/css/select.dataTables.min.css';
import './style.css';

const $ = require('jquery');
$.DataTable = require('datatables.net-bs4');
$.DataTable = require('datatables.net-responsive-bs4');
$.DataTable = require('datatables.net-select-dt');


class Table extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.DataTable({
            "data": this.props.data,
            "columns": [
                { "data": "regno" },
                { "data": "genid" },
                { "data": "rated" },
                { "data": "part" },
                { "data": "address" },
                {
                    "data": "available",
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return '<input type="checkbox" value=' + data + ' name="available-filter-ck" className="available-filter-ck" ' + ((data === "1") ? 'checked' : 'a') + '/>';
                        }
                        return data;
                    }
                },
                {
                    "data": "offered",
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return '<input type="checkbox" value=' + data + ' name="offered-filter-ck" className="offered-filter-ck" ' + ((data === "1") ? 'checked' : '') + '/>';
                        }
                        return data;
                    }
                },
                {
                    "data": "offline",
                    render: function (data, type, row) {
                        if (type === 'display') {
                            return '<input type="checkbox" value=' + data + ' name="offline-filter-ck" className="offline-filter-ck" ' + ((data === "1") ? 'checked' : '') + '/>';
                        }
                        return data;
                    }
                }
            ],
            "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            "scrollY": "45vh",
            "scrollCollapse": true,
            "paging": false,
            "info": false,
            "select": {
                style: 'os',
                selector: 'td:nth-child(5)'
            }
        })
    }

    componentWillMount() {
    }
    render() {
        return <div>
            <table id="datatableForGeneratorBiddingPanel" className="display table table-sm table-striped dt-responsive" width="100%" ref={el => this.el = el} >
                <thead>
                    <tr>
                        <th>RegNo</th>
                        <th>Gen_ID</th>
                        <th>Rated_(kW)</th>
                        <th>Part_(kW)</th>
                        <th>Address</th>
                        <th>Available</th>
                        <th>Offered</th>
                        <th>Offline</th>
                    </tr>
                </thead>
            </table>
        </div>
    }
}

export default Table;