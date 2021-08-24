import React, { Component } from 'react';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import { GET_PROFILE } from '../../Request/ProfileApi';
import moment from "moment";
import { InputAdornment } from '@material-ui/core';

class QuickPickComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: -1,
            quickList: [],
            selectedUser: {},
            userEmail: ""
        }

    }

    componentDidMount() {
        this.getProfile();
        // let quickList = [];
        // if (localStorage.getItem("profile")) {
        //     let profile = JSON.parse(localStorage.getItem("profile"));
        //     quickList = profile.otherPassengers;
        // }
        // this.setState({ quickList }, (() => {
        //     // console.log("quickPick", this.state.quickList)
        // }));
        if (localStorage.getItem("profile")) {
            let { email } = JSON.parse(localStorage.getItem("profile"));
            this.setState({
                userEmail: email
            })

        }
    }

    getProfile = async () => {
        let quickList = [];
        let res = await GET_PROFILE();
        if (res) {
            let p = res;
            quickList = p.otherPassengers;
            let { titleName,
                givenName,
                surName,
                nationality,
                email,
                address1,
                mobileNumber,
                passportNumber,
                passportExpireDate,
                frequentFlyerNumber,
                gender,
                dateOfBirth,
                passportCopy,
                visaCopy } = p;

            quickList.unshift({
                titleName,
                givenName,
                surName,
                nationality,
                email,
                address1,
                mobileNumber,
                passportNumber,
                passportExpireDate,
                frequentFlyerNumber,
                gender,
                dateOfBirth,
                passportCopy,
                visaCopy
            })
            this.setState({ quickList });
        }
    }

    handleChange = e => {
        let selectedIndex = e.target.value;
        let User = this.state.quickList[selectedIndex];
        let selectedUser = {};


        selectedUser.titleName = (User.titleName) ? User.titleName : 'Mr';
        selectedUser.givenName = (User.givenName) ? User.givenName : '';
        selectedUser.surName = (User.surName) ? User.surName : '';
        selectedUser.nationality = (User.nationality) ? User.nationality : '';
        selectedUser.email = (User.email) ? User.email : '';
        selectedUser.address1 = (User.address1) ? User.address1 : '';
        selectedUser.mobileNumber = (User.mobileNumber) ? User.mobileNumber : '';
        selectedUser.passportNumber = (User.passportNumber) ? User.passportNumber : '';
        selectedUser.passportExpireDate = (User.passportExpireDate) ? User.passportExpireDate : moment().add(6, 'M').format("YYYY-MM-DD");
        selectedUser.frequentFlyerNumber = (User.frequentFlyerNumber) ? User.frequentFlyerNumber : '';
        selectedUser.gender = (User.gender) ? User.gender : 'Male';
        selectedUser.dateOfBirth = (User.dateOfBirth) ? User.dateOfBirth : moment();
        selectedUser.passportCopy = (User.passportCopy) ? User.passportCopy : '';
        selectedUser.visaCopy = (User.visaCopy) ? User.visaCopy : '';


        this.setState({ selectedUser, selectedIndex }, (() =>
            this.props.onChangeQuickPick(this.state.selectedUser)
        ));
    };

    render() {
        let { quickList, selectedIndex, userEmail } = this.state;
        return (
            <TextField
                className={selectedIndex !== -1 ? "SelectMenuNew selected" : "SelectMenuNew"}
                label='Select Travellers from your Favourties List'
                variant="outlined"
                select
                margin="normal"
                fullWidth
                onChange={this.handleChange}
                name={"userSelect"}
                value={selectedIndex}
                InputProps={{
                    endAdornment: <InputAdornment position="start"><i className="mdi mdi-check"></i></InputAdornment>,
                }}
            >
                <MenuItem value={-1} disabled={true}>Select one..</MenuItem>
                {
                    quickList.map((user, index) => {
                        return <MenuItem key={index} value={index}>
                            {`${user.titleName} ${user.givenName} ${user.surName} `} &nbsp; {user.email === userEmail && <b> (Myself)</b>}
                        </MenuItem>
                    }
                    )
                }

            </TextField>
        );
    }
}

QuickPickComponent.propTypes = {};

export default QuickPickComponent;