import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';
import './SafeTravelAlert.css';

export default function SafeTravel() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {open &&
                <section className="safe-travel-wraper">
                    <div className="container">
                        <div className="safe-travel p-3">
                            <IconButton className="close-btn" size="small" onClick={handleClose}>
                                <i className="mdi mdi-close"></i>
                            </IconButton>
                            <div className="d-flex flex-wrap">
                                <div className="left">
                                    <div className="d-flex align-items-center border-right pr-4 h-100">
                                        <div className="icon">
                                            <img src="/assets/images/icons/new/safe-travel.svg" alt="" />
                                        </div>
                                        <p className="title fw-700">
                                            <span className="text-green fz22">Safe </span> <br />
                                            <span className="text-primary fz14">Travel</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="right px-sm-4">
                                    <p className="fz16 mb-0"><strong>Travel Advisory:</strong>
                                        <br />
                                        
                                        Domestic Travel is restricted from 23 July 2021 - 5 August 2021, however, only International Connecting flight passengers are allowed to travel on domestic routes. Passengers must show International flight tickets / Boarding pass to Check-In for domestic flights. 
International flights remain open as per Govt. declaration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}
