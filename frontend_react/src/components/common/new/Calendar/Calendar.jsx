import React, { useState } from "react";
import { isInclusivelyAfterDay, SingleDatePicker } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default function Calendar({ date, onChange , label}) {

    const [focused, setFocused] = useState(false);


    return (
        <div className="single-date-picker">
            <div className="label">{ label }</div>
            <SingleDatePicker
                // numberOfMonths={window.innerWidth < 600 ? 1 : 2}
                numberOfMonths={1}
                onDateChange={date => onChange({ target: { value: date } })}
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                date={date}
                displayFormat="YYYY-MM-DD"
                ariaLabel= 'date'
                hideKeyboardShortcutsPanel
                withFullScreenPortal={window.innerWidth < 400}
                isOutsideRange={day =>
                    !isInclusivelyAfterDay(day,moment()) ||
                    isInclusivelyAfterDay(day, moment().add(3, "days"))
                  }
            />
        </div>
    )
}
