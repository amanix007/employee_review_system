import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import moment from "moment";
import DatePicker from "react-datepicker/es";

class NewSingleDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.startDate
    }
  }



  onDateChange = date => {
    let { startDate } = this.state;
    startDate = moment(date).format("YYYY-MM-DD");
    this.setState({ startDate });

  };

  render() {
    let { startDate } = this.state;
    let { label } = this.props;
    return (
      <div>
        <DatePicker
          // dateFormat="DD-MM-YYYY"
          selected={moment(startDate).toDate()}
          minDate={moment(startDate).toDate()}
          onChange={this.onDateChange}
          // peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          customInput={
            <TextField
              variant="outlined"
              label={label}
              required
              fullWidth
              type="text"
              readOnly
              value={moment(startDate).format('DD-MM-YYYY')}
            />
          }
        />
      </div>
    );
  }
}

export default NewSingleDatePicker;