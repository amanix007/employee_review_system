import React, { Component } from 'react';
import { TextField, MenuItem } from '@material-ui/core';

class HourMinuteComponent extends Component {
    constructor(props) {
        super(props);
        let { hour, minute } = props.time.split(':');
        this.state = { hour, minute };


    }
    change = (e, type) => {
        this.setState({ [type]: e.target.value }, () => {
            let { hour, minute } = this.state;
            this.props.change(`${hour}:${minute}`);
        });


    }

    componentDidMount() {
        console.log(this.props);
    }


    render() {
        let { hour, minute } = this.state;
        return (
            <div className="HourMinute d-flex">
                <TextField
                    label='Hour'
                    onChange={e => this.change(e, "hour")}
                    name={"hour"}
                    value={hour}
                    variant="outlined"
                    select
                    margin="normal"
                    fullWidth
                >
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23].map((val, index) =>
                            <MenuItem value={val}
                                key={val}>{index + ""}</MenuItem>
                        )
                    }
                </TextField>
                <TextField
                    label='minute'
                    onChange={e => this.change(e, "minute")}
                    name={"minute"}
                    value={minute}
                    variant="outlined"
                    select
                    margin="normal"
                    fullWidth
                >
                    {
                        ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'].map((val, index) =>
                            <MenuItem value={val}
                                key={index}>{val + ""}</MenuItem>
                        )
                    }
                </TextField>
            </div>
        );
    }
}

export default HourMinuteComponent;


