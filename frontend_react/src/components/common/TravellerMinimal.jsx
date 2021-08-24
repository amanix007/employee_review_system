import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
const TravellerMinimal = (props) => {


    // there may be minimal and extended type of this component
    // console.log((props.type === 'minimal'));
    let { data, type, index } = props;
    let { titleName, givenName, surName, address1, address2, email, mobileNumber, } = data;
    let roomIndex = "";
    if (props.roomIndex) {
        roomIndex = props.roomIndex;
    }

    return (
        <div className="Traveller">
            <p id={`toggler${props.index}${props.roomIndex}`}> {titleName} {givenName} {surName} {type === 'Primary' && '- (Primary Contact)'}
                {type === 'Passenger' && `Traveller of Room ${roomIndex}`}
                <i className="mdi mdi-chevron-down"></i>

            </p>
            <UncontrolledCollapse toggler={`#toggler${props.index}${props.roomIndex}`}>
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




                    {address1 &&
                        <div className="col-md-6">
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




                    {/* <div className="col-md-12">
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
            </UncontrolledCollapse>
        </div>
    )
}

export default TravellerMinimal;