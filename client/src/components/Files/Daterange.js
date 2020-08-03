import React, { Component } from "react";
import 'react-dates/initialize';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker} from 'react-dates';


class Daterange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }
    render(){
    return(
        <div className = "Daterange">
        <DateRangePicker
            startDate = { this.state.startDate }
            startDateId = "your_unique_start_date_id"
            endDate = { this.state.endDate }
            endDateId = "your_unique_end_date_id"
            onDatesChange = {({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput = { this.state.focusedInput }
            onFocusChange = { focusedInput => this.setState({ focusedInput }) }
            />
            

        </div>
        
    )
    }
}

export default Daterange