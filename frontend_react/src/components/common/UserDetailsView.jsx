import React, { Component } from 'react';
import moment from 'moment';
import { CardContent, CardHeader, Card, CardMedia, Button } from '@material-ui/core';

class UserDetailsView extends Component {



    render() {

        let {
            titleName, givenName, surName, gender,
            email, mobileNumber, address1, address2,
            passportNumber, passportExpireDate, postCode, nationality,
            dateOfBirth, frequentFlyerNumber, passportCopy, visaCopy
        } = this.props.profile;

        return (
            <div className="UserDetailsView">
                <div className="row">
                    <div className="col-md-12">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="text">
                                <small>Full Name</small>
                                <span>{titleName + " " + givenName + " " + surName}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-flag"></i>
                            </div>
                            <div className="text">
                                <small>Nationality</small>
                                <span>{nationality}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account-switch"></i>
                            </div>
                            <div className="text">
                                <small>Gender</small>
                                <span>{gender}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-calendar"></i>
                            </div>
                            <div className="text">
                                <small>Date of Birth</small>
                                <span>{moment(dateOfBirth).format('D MMM YYYY')}</span>
                            </div>
                        </div>
                    </div>
                    {
                        address1 && <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-home-map-marker"></i>
                                </div>
                                <div className="text">
                                    <small>Address 1</small>
                                    <span>{address1}</span>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        address2 &&
                        <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-home-map-marker"></i>
                                </div>
                                <div className="text">
                                    <small>Address 2</small>
                                    <span>{address2}</span>
                                </div>
                            </div>
                        </div>

                    }

                    {postCode &&
                        <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-home-city"></i>
                                </div>
                                <div className="text">
                                    <small>Post Code</small>
                                    <span>{postCode}</span>
                                </div>
                            </div>
                        </div>
                    }


                    {
                        frequentFlyerNumber &&
                        <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-circle-edit-outline"></i>
                                </div>
                                <div className="text">
                                    <small>Frequent Flyer Number</small>
                                    <span>{frequentFlyerNumber}</span>
                                </div>
                            </div>
                        </div>
                    }




                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-passport"></i>
                            </div>
                            <div className="text">
                                <small>Passport Number</small>
                                <span>{passportNumber}</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-passport"></i>
                            </div>
                            <div className="text">
                                <small>Passport Expire Date</small>
                                <span>{moment(passportExpireDate).format('D MMM YYYY')}</span>
                            </div>
                        </div>
                    </div>

                    {
                        email &&
                        <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-email"></i>
                                </div>
                                <div className="text">
                                    <small>Email Address</small>
                                    <span>{email}</span>
                                </div>
                            </div>
                        </div>

                    }


                    {
                        mobileNumber &&

                        <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-phone"></i>
                                </div>
                                <div className="text">
                                    <small>Mobile Number</small>
                                    <span>{mobileNumber}</span>
                                </div>
                            </div>
                        </div>

                    }




                    <div className="col-md-12">

                        <div className="details-field-wrap VisaPassport">

                            {passportCopy && (
                                <React.Fragment>
                                    <div className="text">
                                        <small>Passport Copy</small>
                                    </div>
                                    <Button size="small" variant="contained" color="primary" onClick={() => window.open(passportCopy, '_blank')} > View Passport </Button>
                                </React.Fragment>
                            )}
                        </div>
                        <div className="details-field-wrap VisaPassport">
                            {visaCopy && (
                                <React.Fragment>
                                    <div className="text">
                                        <small>Visa Copy</small>
                                    </div>
                                    <Button size="small" variant="contained" color="primary" onClick={() => window.open(visaCopy, '_blank')} > View Visa </Button>
                                </React.Fragment>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetailsView;