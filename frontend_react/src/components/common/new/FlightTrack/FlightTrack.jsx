import React, { useState } from "react";
import "./FlightTrack.css";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { fade, makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Calendar from "../Calendar/Calendar";
import LoadingComponent from "../../../common/LoadingComponent";

import { IconButton } from "@material-ui/core";
import { TRACK_FLIGHT } from "../../../../Request/FlightApi";

const useStylesReddit = makeStyles((theme) => ({
  input_fill: {
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  button: {
    height: "52px",
    padding: "12px 24px",
  },
}));

export default function FlightTrack() {
  const [firstModal, setFirstModalOpen] = useState(false);
  const [secondModal, setSecondModalOpen] = useState(false);
  const [date, setDate] = useState(moment());
  const [flightNumber, setFlightNumber] = useState("");
  const [flightDetails, setFlightDetails] = useState([]);
  const [Loading, setLoading] = useState(true);

  const classes = useStylesReddit();

  const handleTextFieldChange = (event) => {
    event.persist();

    setFlightNumber(event.target.value);
  };

  let disable = true;

  if (flightNumber === "") {
    disable = true;
  } else {
    disable = false;
  }

  const getFlightDetails = async () => {
    let airline = flightNumber.slice(0, 2);
    let flightnum = flightNumber.slice(2, flightNumber.length);

    let flightDetails = await TRACK_FLIGHT(airline, flightnum, date.format("YYYY/MM/DD"));
    if (flightDetails) {
      setFlightDetails(flightDetails);
    }
    setLoading(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setFirstModalOpen(true)}>
        Track Flight
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={firstModal}
        onClose={() => setFirstModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={firstModal}>
          <div className="container st-modal">
            <div className="modal-head d-flex justify-content-between align-items-center pb-4">
              <h5>Track your Flight Status</h5>
              <IconButton className="radius-4 p-1" onClick={() => setFirstModalOpen(false)}>
                <i className="mdi mdi-close"></i>
              </IconButton>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-4">
                  <div className="icon-input-flight">
                    <div className="icon">
                      <img src="assets/images/icons/new/flight.svg" alt=""/>
                    </div>
                    <TextField className={classes.input_fill + " w-100"} label="Flight Number" variant="filled" value={flightNumber} onChange={handleTextFieldChange} />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-12 mb-4">
                  <div className="icon-input-flight">
                    <div className="icon">
                      <i className="mdi mdi-calendar"></i>
                    </div>
                    <Calendar date={date} onChange={(e) => setDate(e.target.value)} label="Departure Date" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setSecondModalOpen(true);
                      getFlightDetails();
                    }}
                    className={classes.button}
                    disabled={disable}
                  >
                    Track Flight
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={secondModal}
        onClose={() => setSecondModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          {/* <Fade in={secondModal}> */}
          {Loading ? (
            <LoadingComponent />
          ) : (
              <div className="st-modal container">
                <div className="modal-head d-flex justify-content-between align-items-center pb-4">
                  <h5>Tracking details</h5>
                  <IconButton className="radius-4 p-1" onClick={() => setSecondModalOpen(false)}>
                    <i className="mdi mdi-close"></i>
                  </IconButton>
                </div>
                <div className="modal-body">
                  {flightDetails.length === 0 ? (
                    <h4>Flight Details Not Found</h4>
                  ) : (
                      <div className="flight-module">
                        <div className="d-flex align-items-center st-mb-12">
                          <img className="c-icon" src="https://utility-assets.s3.amazonaws.com/media/assets/plane-mono-blue.svg" />
                          {flightDetails.length && (
                            <span className="fz24 c-color-primary-dark fw-500">
                              {flightDetails[0].departureAirport.code} - {flightDetails[flightDetails.length - 1].arrivalAirport.code}
                            </span>
                          )}
                        </div>

                        {flightDetails.map((frow, i) => {
                          return (
                            <>
                              <div className="d-flex align-items-center st-mb-20">
                                <img className="c-icon" src="https://utility-assets.s3.amazonaws.com/media/assets/iata-logo.png" />
                                <span className="fz20">
                                  {frow.airlines.name} {frow.aircraft} {frow.flightNumber}{" "}
                                </span>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="d-flex st-mb-20">
                                    <div className="icon">
                                      <img className="c-icon" src="https://utility-assets.s3.amazonaws.com/media/assets/plane-up.png" />
                                    </div>
                                    <div className="details">
                                      <div className="fz24 fw-500 st-mb-8"> {frow.departureDate} </div>
                                      <div className="fz20 c-color-light st-mb-4">
                                        {" "}
                                        {frow.departureTerminal && `Terminal: ${frow.departureTerminal}`} {frow.departureGate && `, Gate: ${frow.departureGate}`} <br />
                                        {frow.departureAirport.city}, {frow.departureAirport.name}{" "}
                                      </div>
                                      <div className="fz20 c-color-light"> Delay: {frow.departureDelay} </div>
                                    </div>
                                  </div>
                                  <div className="fz20 d-flex align-items-center">
                                    <img className="c-icon sm" src="https://utility-assets.s3.amazonaws.com/media/assets/checked-mono-blue.svg" />
                                    Status: <span className="ml-3 c-color-primary">{frow.status}</span>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex">
                                    <div className="icon">
                                      <img className="c-icon" src="https://utility-assets.s3.amazonaws.com/media/assets/plane-down.png" />
                                    </div>
                                    <div className="details">
                                      <div className="fz24 fw-500 st-mb-8"> {frow.arrivalDate} </div>
                                      <div className="fz20 c-color-light st-mb-4">
                                        {" "}
                                        {frow.arrivalTerminal && `Terminal: ${frow.arrivalTerminal}`} {frow.arrivalGate && `, Gate: ${frow.arrivalGate}`} <br />
                                        {frow.arrivalAirport.city}, {frow.arrivalAirport.name}{" "}
                                      </div>
                                      <div className="fz20 c-color-light"> Delay: {frow.arrivalDelay} </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    )}
                </div>
              </div>
            )}
        </div>
        {/* </Fade> */}
      </Modal>
    </>
  );
}
