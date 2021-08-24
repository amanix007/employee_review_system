import React, { Component, Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import DatePicker from "react-datepicker/es";
import { ADD_NEW_TRAVELLER } from "../../Request/ProfileApi";
// import { PROFILE_IMAGE } from "../../Request/FlightApi";
import _ from "lodash";
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UPLOAD_FILE } from '../../Request/OthersApi';
import NationalityHelper from './NationalityHelper';
import { titleBasedGender, genderBasedTitle } from "../../misc/common"

class UserInputsForm extends Component {

    constructor(props) {
        super(props);
        console.log('props:', props)
        this.state = {
            open: false,
            profile: props.profile,
            errors: {
                titleName: { text: "" },
                givenName: { text: "" },
                surName: { text: "" },
                gender: { text: "" },
                nationality: { text: "" },
                // postCode: { text: "" },
                passportNumber: { text: "" },
                // address1: { text: "" },
                // email: { text: "" },
                // mobileNumber: { text: "" },
                // passportCopy: { text: "" }
            }

        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (e) => {
        let { profile } = this.state;
        if (e.target.name === "titleName") {
            profile.gender = titleBasedGender(e.target.value);
        }
        if (e.target.name === "gender") {
            profile.titleName = genderBasedTitle(e.target.value);
        }


        profile[e.target.name] = e.target.value;


        this.setState({
            profile
        });
    };

    dateOfBirth = date => {
        let { profile } = this.state;
        profile.dateOfBirth = moment(date).format("YYYY-MM-DD");
        this.setState({ profile });
    };

    passportExpireDate = date => {
        let { profile } = this.state;
        profile.passportExpireDate = moment(date).format("YYYY-MM-DD");
        this.setState({ profile });
        // this.setState({ passportExpireDate: moment(date).format("YYYY-MM-DD") }, () => console.log(this.state.passportExpireDate));

    };

    savePerson = async () => {
        this.validateContact(this.state.profile);

        let hasError = [];
        for (let property in this.state.errors) {
            if (this.state.errors.hasOwnProperty(property)) {
                console.log(this.state.errors[property].text);
                if (this.state.errors[property].text === "") {
                    hasError.push(false);
                } else {
                    hasError.push(true);
                }
            }
        }



        let checkError = (bol) => {
            return bol === false
        };

        if (hasError.every(checkError)) {


            let res = await ADD_NEW_TRAVELLER(this.state.profile);
            if (res) {
                this.props.onClickSave();
            }
        }

        console.log('hasError:', hasError)


    };



    setMessage = (field, messsage) => {
        let errors = this.state.errors;
        errors[field].text = messsage;
        this.setState({ errors }, () => {
            console.log(this.state.errors);
        });

    };

    validateContact = (obj) => {



        let { titleName, givenName, surName, gender, nationality,
            address1,
            postCode, passportNumber, email, mobileNumber, passportCopy
        } = obj;

        if (titleName.length === 0) {
            this.setMessage("titleName", `Please Enter Your Title Name`);
        } else {
            this.setMessage("titleName", ``)
        }
        if (givenName.length === 0) {
            this.setMessage("givenName", `Please Enter Your First Name`);
        } else {
            this.setMessage("givenName", ``)
        }

        if (surName.length === 0) {
            this.setMessage("surName", `Please Enter Your Last Name`);
        } else {
            this.setMessage("surName", ``)
        }
        if (gender.length === 0) {
            this.setMessage("gender", `Please Enter Your Gender`);
        } else {
            this.setMessage("gender", ``)
        }
        if (nationality.length === 0) {
            this.setMessage("nationality", `Please Enter Your Nationality`);
        } else {
            this.setMessage("nationality", ``)
        }


        // if (postCode.length === 0) {
        //     this.setMessage("postCode", `Please Enter Your Post Code`);
        // } else {
        //     this.setMessage("postCode", ``)
        // }
        if (passportNumber.length === 0) {
            this.setMessage("passportNumber", `Please Enter Your Passport Number`);
        } else {
            this.setMessage("passportNumber", ``)
        }



        // if (address1.length === 0) {
        //     this.setMessage("address1", `Please Enter Your address 1`);
        // } else {
        //     this.setMessage("address1", ``)
        // }

        // if (email.length === 0) {
        //     this.setMessage("email", `Please Enter A Valid Email Address`);
        // } else {
        //     this.setMessage("email", ``)
        // }

        // if (mobileNumber.length === 0) {
        //     this.setMessage("mobileNumber", `Please Enter A Valid Phone Number`);
        // } else {
        //     this.setMessage("mobileNumber", ``)
        // }
        // if (passportCopy.length === 0) {
        //     this.setMessage("passportCopy", `Please Upload A Passport`);
        // } else {
        //     this.setMessage("passportCopy", ``)
        // }


    };

    componentDidMount() {
        // let {profile} =this.props;
        // if(!_.isEmpty(profile)){
        //     console.log(profile, "profile");
        //     let profileUpdate = profile;
        //     profileUpdate.dateOfBirth = moment(profile.dateOfBirth).format("YYYY-MM-DD");
        //     profileUpdate.passportExpireDate = moment(profile.passportExpireDate).format("YYYY-MM-DD");
        //     this.setState({profile:profileUpdate},(cb=>console.log(this.state.profile, "slkdfjklasdfkjlh")));
        // }


    }
    // passport upload

    triggerInputPassport = () => this.fileInputPassport.click();

    handleUploadPassport = async e => {
        // console.log("upload", e.target.files[0]);

        if (e.target.files[0].size > 2097152) {
            alert("File is too big!");
        } else {
            let data = new FormData();
            data.append("uploadFile", e.target.files[0]);

            this.handleOpen();
            let res = await UPLOAD_FILE(data);
            if (res) {
                this.handleClose();
                let { profile } = this.state;
                profile.passportCopy = res.path;
                this.setState({ profile })
            } else {
                this.handleClose()
            }
        }


    };

    //  visa upload

    triggerInputVisa = () => this.fileInputVisa.click();

    handleUploadVisa = async e => {
        // console.log("upload", e.target.files[0]);

        if (e.target.files[0].size > 2097152) {
            alert("File is too big!");
        } else {

            let data = new FormData();
            data.append("uploadFile", e.target.files[0]);

            this.handleOpen();
            let res = await UPLOAD_FILE(data);
            if (res) {
                this.handleClose();
                let { profile } = this.state;
                profile.visaCopy = res.path;
                this.setState({ profile })
            } else {
                this.handleClose()
            }
        }
    };

    render() {
        let {
            titleName, givenName, surName, gender,
            email, mobileNumber, address1, address2,
            passportCopy, visaCopy,
            passportNumber, passportExpireDate, postCode, nationality,
            dateOfBirth, frequentFlyerNumber
        } = this.state.profile;



        let { errors } = this.state;
        console.log('errors:', errors)
        console.log('this.state:', this.state)

        let OptionTitle = [];
        let titleNameList = [
            { titleName: "Mr", value: "Mr" },
            { titleName: "Ms", value: "Ms" },
            { titleName: "Mrs", value: "Mrs" },
            { titleName: "Dr", value: "Dr" },
            { titleName: "Engr", value: "Engr" },
            { titleName: "Master", value: "Master" },
            { titleName: "Miss", value: "Miss" }
        ];


        titleNameList.map(
            val =>
                OptionTitle.push(
                    <MenuItem key={val.titleName} value={val.value}>
                        {val.titleName}
                    </MenuItem>
                )
        );
        return (

            <Fragment>

                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className="uploadLoading-cont">
                        <h4>Uploading ...</h4>
                        <CircularProgress className="uploadLoading" />
                    </div>

                </Modal>
                <div className="UserInputsForm">
                    <form action="" className="UserInputsForm-form">
                        <div className="form-field-wrap">
                            <i className="mdi mdi-account"></i>
                            <div>
                                <div className="form-row">
                                    <div className="col-lg-2 col-md-4 mb-md-16">
                                        <TextField
                                            label='Title'
                                            onChange={this.handleChange}
                                            name={"titleName"}
                                            value={titleName}
                                            variant="outlined"
                                            select
                                            fullWidth
                                            error={errors.titleName.text.length ? true : false}
                                            helperText={errors.titleName.text}
                                        >
                                            {OptionTitle}
                                        </TextField>


                                    </div>

                                    <div className="col-lg-5 col-md-4 mb-md-16">
                                        <TextField
                                            label='First Name'
                                            onChange={this.handleChange}
                                            name={"givenName"}
                                            value={givenName}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            type="text"
                                            error={errors.givenName.text.length ? true : false}
                                            helperText={errors.givenName.text}
                                            inputProps={{
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-5 col-md-4 mb-md-16">
                                        <TextField
                                            label='Last Name'
                                            onChange={this.handleChange}
                                            name={"surName"}
                                            value={surName}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            type="text"
                                            error={errors.surName.text.length ? true : false}
                                            helperText={errors.surName.text}
                                            inputProps={{
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-field-wrap">
                            <i className="mdi mdi-flag"></i>
                            <div className={"form-group"}>



                                <NationalityHelper
                                    label='Nationality'
                                    onChange={(nationality) => {
                                        let { profile } = this.state;
                                        profile.nationality = nationality;
                                        this.setState({ profile })
                                    }}
                                    value={nationality}
                                    error={errors.nationality.text.length ? true : false}
                                    helperText={errors.nationality.text}
                                />
                            </div>
                        </div>

                        <div className="form-field-wrap">
                            <i className="mdi mdi-account-switch"></i>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <TextField
                                        variant="outlined"
                                        select
                                        label="Gender"
                                        required
                                        onChange={this.handleChange}
                                        fullWidth
                                        required
                                        name="gender"
                                        value={gender}
                                        error={errors.gender.text.length ? true : false}
                                        helperText={errors.gender.text}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </TextField>
                                </div>

                            </div>
                        </div>
                        <div className="form-field-wrap">
                            <i className="mdi mdi-calendar"></i>
                            <div className="form-row">
                                <div className="col-md-12">


                                    <DatePicker
                                        // dateFormat="DD/MM/YYYY"
                                        selected={moment(dateOfBirth).toDate()}
                                        maxDate={moment().toDate()}
                                        onChange={this.dateOfBirth}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        customInput={
                                            <TextField
                                                variant="outlined"
                                                label="Date of Birth"
                                                required
                                                fullWidth
                                                type="text"
                                                readOnly
                                                required
                                                value={dateOfBirth}
                                            />
                                        }
                                    />


                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className="form-field-wrap">
                            <i className="mdi mdi-home-map-marker"></i>
                            <div className={"form-group"}>
                                <TextField
                                    label='Address 1'
                                    onChange={this.handleChange}
                                    name={"address1"}
                                    value={address1}
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    type="text"
                                    // error={errors.address1.text.length ? true : false}
                                    // helperText={errors.address1.text}
                                />
                            </div>
                        </div>
                        <div className="form-field-wrap">
                            <i className="mdi mdi-home-map-marker"></i>

                            <div className={"form-group"}>

                                <TextField
                                    label='Address 2'
                                    onChange={this.handleChange}
                                    name={"address2"}
                                    value={address2}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="text"
                                />
                            </div>
                        </div>


                        <div className="form-field-wrap">
                            <i className="mdi mdi-home-city"></i>

                            <div className={"form-group"}>

                                <TextField
                                    label='Post Code'
                                    onChange={this.handleChange}
                                    name={"postCode"}
                                    value={postCode}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="text"
                                    error={errors.postCode.text.length ? true : false}
                                    helperText={errors.postCode.text}
                                />
                            </div>
                        </div> */}

                        <div className="form-field-wrap">
                            <i className="mdi mdi-circle-edit-outline"></i>

                            <div className={"form-group"}>

                                <TextField
                                    label='Frequent Flyer Number (If any)'
                                    onChange={this.handleChange}
                                    name={"frequentFlyerNumber"}
                                    value={frequentFlyerNumber}
                                    variant="outlined"
                                    fullWidth
                                    type="text"
                                    inputProps={{
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-field-wrap">
                            <i className="mdi mdi-passport"></i>

                            <div className={"form-group"}>

                                <TextField
                                    label='Passport Number'
                                    onChange={this.handleChange}
                                    name={"passportNumber"}
                                    value={passportNumber}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="text"
                                    error={errors.passportNumber.text.length ? true : false}
                                    helperText={errors.passportNumber.text}
                                    inputProps={{
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-field-wrap">
                            <i className="mdi mdi-passport"></i>
                            <div className="form-row">
                                <div className="col-md-12">


                                    <DatePicker
                                        // dateFormat="DD/MM/YYYY"
                                        selected={moment(passportExpireDate).toDate()}
                                        minDate={moment(passportExpireDate).toDate()}
                                        onChange={this.passportExpireDate}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        customInput={
                                            <TextField
                                                variant="outlined"
                                                label="Passport Expiry Date"
                                                required
                                                fullWidth
                                                type="text"
                                                readOnly
                                                value={passportExpireDate}
                                            />
                                        }
                                    />


                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className="form-field-wrap">
                            <i className="mdi mdi-email"></i>
                            <div className={"form-group"}>
                                <TextField
                                    label='Email address'
                                    onChange={this.handleChange}
                                    name={"email"}
                                    value={email}
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    type="email"
                                    // error={errors.email.text.length ? true : false}
                                    // helperText={errors.email.text}
                                />
                            </div>
                        </div>
                        <div className="form-field-wrap">
                            <i className="mdi mdi-phone"></i>
                            <div className={"form-group"}>
                                <TextField
                                    label='Mobile Phone Number'
                                    onChange={this.handleChange}
                                    name={"mobileNumber"}
                                    value={mobileNumber}
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    type="tel"
                                    // error={errors.mobileNumber.text.length ? true : false}
                                    // helperText={errors.mobileNumber.text}
                                />
                            </div>
                        </div> */}


                        <div className="form-field-wrap upload-section">
                            <i className="mdi mdi-email"></i>

                            <input ref={ref => (this.fileInputPassport = ref)} type="file" className="d-none"
                                onChange={this.handleUploadPassport}
                            />

                            <input ref={ref => (this.fileInputVisa = ref)} type="file" className="d-none"
                                onChange={this.handleUploadVisa}
                            />

                            <div className="form-row ">
                                <div className="col-lg-4 col-md-6">
                                    <p className="heading">Passport Copy (max 2MB)</p>
                                    <Button size="small" fullWidth color="default" className="uploadButton" onClick={this.triggerInputPassport}><i
                                        className="mdi mdi-cloud-upload"></i> Upload </Button>
                                    {passportCopy && <Button className="viewItem" size="small" variant="contained" color="primary" onClick={() => window.open(passportCopy, '_blank')} > View Passport </Button>}
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <p className="heading">Visa Copy (max 2MB)</p>
                                    <Button size="small" fullWidth color="default" className="uploadButton" onClick={this.triggerInputVisa}><i
                                        className="mdi mdi-cloud-upload" ></i> Upload  </Button>
                                    {visaCopy && <Button className="viewItem" size="small" variant="contained" color="primary" onClick={() => window.open(visaCopy, '_blank')} > View Visa </Button>}
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
                <div className="row pl-lg-40 pl-md-0">
                    <div className="col-sm-4 mb-md-8">
                        <Button onClick={this.savePerson} variant="contained" fullWidth color="primary"
                            size="large"> Save</Button>
                    </div>
                    <div className="col-sm-4">
                        <Button onClick={this.props.cancel} variant="contained" fullWidth color="primary"
                            size="large"> Back</Button>
                    </div>
                </div>
            </Fragment>


        );
    }
}

export default UserInputsForm;