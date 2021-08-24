import React from 'react';
import {UncontrolledCollapse} from 'reactstrap';
import {Button} from '@material-ui/core';
import moment from "moment";

const Traveller = (props) => {


    // there may be minimal and extended type of this component
    // console.log((props.type === 'minimal'));
    let {data} = props;
    let {
        titleName, givenName, surName, nationality, dateOfBirth, gender, travellerType, address1, address2,
        passportNumber, frequentFlyerNumber, passportExpireDate, email, mobileNumber, primaryContact, eticket,
        passportCopy,
        visaCopy
    } = data;
    return (
        <div className="Traveller">
            <p id={`toggler${props.index}`}> {titleName} {givenName} {surName} {primaryContact === 'Yes' && '- (Primary Contact)'} - {travellerType}
                <i className="mdi mdi-chevron-down"></i></p>
            <UncontrolledCollapse toggler={`#toggler${props.index}`}>
                <div className="row fields">
                    <div className="col-md-12">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="text">
                                <small>Full Name</small>
                                <span>{titleName} {givenName} {surName}</span>
                            </div>
                        </div>
                    </div>
                    {eticket &&
                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-ticket-confirmation"></i>
                            </div>
                            <div className="text">
                                <small>E-ticket</small>
                                <span>{eticket}</span>
                            </div>
                        </div>
                    </div>
                    }
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
                                <i className="mdi mdi-phone"></i>
                            </div>
                            <div className="text">
                                <small>Mobile Number</small>
                                <span>{mobileNumber}</span>
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
                                <span>{dateOfBirth}</span>
                            </div>
                        </div>
                    </div>


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
                                <span>{moment(passportExpireDate).format("DD/MM/YYYY")}</span>
                            </div>
                        </div>
                    </div>

                    {frequentFlyerNumber && (
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
                    )}

                    {address1 && <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-home-map-marker"></i>
                            </div>
                            <div className="text">
                                <small>Address</small>
                                <span>{address1}</span>
                            </div>
                        </div>
                    </div>
                    }

                    {address2 &&
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


                    <div className="col-md-12">
                        {passportCopy &&
                        <div className="details-field-wrap VisaPassport">
                            <div className="text">
                                <small>Passport Copy</small>
                            </div>
                            <Button size="small" variant="contained" color="primary"
                                    onClick={() => window.open(passportCopy, '_blank')}> View Passport </Button>
                        </div>
                        }
                        {visaCopy &&
                        <div className="details-field-wrap VisaPassport">
                            <div className="text">
                                <small>Visa Copy</small>
                            </div>
                            <Button size="small" variant="contained" color="primary"
                                    onClick={() => window.open(visaCopy, '_blank')}> View Visa </Button>
                        </div>
                        }
                    </div>

                </div>
            </UncontrolledCollapse>
        </div>
    )
}

export default Traveller;