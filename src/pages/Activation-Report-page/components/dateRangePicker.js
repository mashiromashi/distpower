import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

class Daterange extends React.Component {

    componentWillMount() {
        const value = new Date().toISOString().replace("T", " ").replace("Z", "");
        const date = value;
        
        this.setState({
            value: date,
            startDate: moment(),
            endDate: moment()
        });
    }

    handleChange = (datepicker) => {
        this.setState({
            startDate: datepicker.startDate,
            endDate: datepicker.endDate,
            value: datepicker.startDate + " to " + datepicker.endDate
        });
    }

    render() {
        let start = moment(this.state.startDate).format("DD MMM YYYY");
        let end = moment(this.state.endDate).format("DD MMM YYYY");
        let dateRange = start + '   to   ' + end;

        return (
            <DateRangePicker
                readOnly="false"
                showDropdowns={true}
                startDate={this.start}
                endDate={this.end}
                opens="center"
                onApply={this.handleChange}
                onChange={this.handleChange}
            >
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Choose Date</span>
                        </div>
                    </div>
                    <input id="dateRange" type="text" value={dateRange} className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                </div>
            </DateRangePicker>
        )
    }
}
export default Daterange;