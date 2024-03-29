import React from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/style.css';

class DatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({ startDate: date });
    }

    render() {
        return (
            <Datepicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}

export default DatePicker;