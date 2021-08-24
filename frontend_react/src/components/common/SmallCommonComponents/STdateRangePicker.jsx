import React, { Component } from 'react';
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION } from "react-dates/lib/constants";
import isInclusivelyAfterDay from "react-dates/lib/utils/isInclusivelyAfterDay";

class STdateRangePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedInput: null,
            startDate: moment(),
            endDate: moment()
        }

    }

    setDateRange = (startDate, endDate) => {
        let { focusedInput } = this.state;
        this.setState({ startDate, endDate }, () => {
            this.props.setStartDate(startDate);
            this.props.setEndDate(endDate);
            this.props.setDateRange(startDate, endDate)
        });
    };

    setStartDate = (startDate) => {
        this.setState({
            startDate
        })
    }
    setEndDate = (endDate) => {
        this.setState({
            endDate
        })
    }
    render() {
        let mobile = window.innerWidth < 768;
        let { startDate, endDate } = this.state;
        let rangeStartDate = this.props;

        return (
            <DateRangePicker
                numberOfMonths={1}
                minimumNights={0}
                startDateId="STstartDateId"
                endDateId="STendDateId"
                startDatePlaceholderText="Depart"
                endDatePlaceholderText="Return"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => {
                    this.setDateRange(startDate, endDate);
                    // this.change(startDate, endDate);
                    // this.props.hotelSearchStore.updateSearchObject("checkInDate", startDate);
                    // this.props.hotelSearchStore.updateSearchObject("startDate", endDate);

                }}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => {
                    this.setState({ focusedInput });
                }}
                noBorder
                // showDefaultInputIcon={!mobile}
                block
                regular
                keepOpenOnDateSelect={false}
                hideKeyboardShortcutsPanel
                enableOutsideDays
                orientation={mobile ? VERTICAL_ORIENTATION : HORIZONTAL_ORIENTATION}
                isOutsideRange={day =>
                    !isInclusivelyAfterDay(day, moment(rangeStartDate)) ||
                    isInclusivelyAfterDay(day, moment().add(365, "days"))
                }
                displayFormat="D MMM YY"
                readOnly={true}
                customArrowIcon={<span />}
                transitionDuration={500}
                {...this.props}
            />
        );
    }
}

STdateRangePicker.propTypes = {};

// export default inject("hotelSearchStore")(observer(STdateRangePicker));
export default STdateRangePicker;