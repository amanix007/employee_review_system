import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { logEventRecord } from '../../../../logger/log';
import { Alert } from '../../../../Request/FlightApi';
import { TRACK_VISA } from '../../../../Request/OthersApi';

function TrackVisa(props) {

    const [visaTrackingNumber, setVisaTrackingNumber] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    const submitVisa = async (e) => {
        e.preventDefault();
        if (visaTrackingNumber.length !== 0) {
            let trackingNumber = visaTrackingNumber.trim();
            let result = await TRACK_VISA({
                code: trackingNumber,
            });
            if (result) {
                setResult(result);
                setStatus(result.status)
                setMessage(result.message)

                Alert("Visa Status ",result.message.toUpperCase().replace("SHARETRIP", "").replace("TBBD", "") , "success", 10000);
            }
        }

        logEventRecord("Track_Your_Visa");
    };

    return (
        <div className="visa-status">
            <div className="item d-flex align-items-start">
                <div className="icon-img flex-img mr-3">
                    <img src="assets/images/icons/new/passport.svg" alt="" />
                </div>
                <div className="content w-100">
                    <h5 className="fw-600 mb-3">Track Visa Application Status</h5>
                    <form onSubmit={submitVisa} className="visa-track-form">
                        <div className="d-flex">
                            <TextField
                                id="outlined-basic"
                                label="ST Ref. No."
                                size="small"
                                variant="outlined"
                                className="w-100 mr-3"
                                onChange={(e) => setVisaTrackingNumber(e.target.value)}
                                name="visaTrackingNumber"
                                value={visaTrackingNumber}
                            />
                            <Button onClick={submitVisa} type="submit" variant="contained" color="primary">
                                GO <i className="mdi mdi-chevron-right ml-2 fz20"></i>
                            </Button>
                        </div>
                    </form>
                    {status.length > 0 && (
                        <p className="desc fz14 mt-xs-10">
                            {/* {message.toUpperCase().replace("SHARETRIP", "").replace("TBBD", "")} */}

                            <Button variant="contained" color="primary" onClick={() => props.history.push("/visa-guide")} color="primary" variant="contained" size="small" className="mt-xs-10">
                                Visa Guide
                        </Button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default withRouter(TrackVisa);