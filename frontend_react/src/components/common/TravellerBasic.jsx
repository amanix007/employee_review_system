import React, { Component } from 'react';
const TravellerBasic = (props) => {
console.log(props);

    // there may be minimal and extended type of this component
    // console.log((props.type === 'minimal'));

    let { titleName, givenName, surName, age, email, mobileNumber, tourBookingId, gender, dateOfBirth, nationality } = props.data;
    return (
        <div className="Traveller" >
            <p>Primary Contact </p>
            <div>
                <div className="row fields">
                    <div className="col-md-12">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="text">
                                <small>Full Name</small>
                                <span>{`${titleName} ${givenName} ${surName}`}</span>
                            </div>
                        </div>
                    </div>
                    {
                        gender &&
                        <div className="col-md-6">
                            <div className="details-field-wrap">
                                <div className="icon">
                                    <i className="mdi mdi-gender-male-female"></i>
                                </div>
                                <div className="text">
                                    <small>Gender</small>
                                    <span>{gender}</span>
                                </div>
                            </div>
                        </div>
                    }


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

                    {
                        dateOfBirth && <div className="col-md-6">
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
                    }



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


                    {
                        nationality && <div className="col-md-6">
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
                    }



                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-home-map-marker"></i>
                            </div>
                            <div className="text">
                                <small>Address</small>
                                <span>Banani, Dhaka</span>
                            </div>
                        </div>
                    </div>


                    {/* 
                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="text">
                                <small>Passport Number</small>
                                <span>BD1234567</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="text">
                                <small>Passport Expire Date</small>
                                <span>01/01/1990</span>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="col-md-6">
                        <div className="details-field-wrap">
                            <div className="icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="text">
                                <small>Frequent Flyer Number</small>
                                <span>1234567890</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="details-field-wrap VisaPassport">
                            <div className="text">
                                <small>Passport Copy</small>
                            </div>
                            <img src="./assets/images/demoCopy.png" alt="" />
                        </div>
                        <div className="details-field-wrap VisaPassport">
                            <div className="text">
                                <small>Visa Copy</small>
                            </div>
                            <img src="./assets/images/demoCopy.png" alt="" />
                        </div>
                    </div> */}





                </div>
            
            </div>
        </div>
    )
}

export default TravellerBasic;