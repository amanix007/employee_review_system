import React, { Component } from "react";
import "./TrackStatus.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { TRACK_VISA } from "../../../../Request/OthersApi";
import { logEventRecord } from "../../../../logger/log";
import { withRouter } from "react-router-dom";
import FlightTrack from "../FlightTrack/FlightTrack";

class TrackStatus extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visaTrackingNumber: "",
      status: "",
      message: "",
    };
  }

  submitVisa = async (e) => {
    e.preventDefault();
    if (this.state.visaTrackingNumber.length !== 0) {
      let trackingNumber = this.state.visaTrackingNumber.trim();
      let result = await TRACK_VISA({
        code: trackingNumber,
      });
      console.log(result);
      this.setState(result, () => console.log(this.state));
    }

    logEventRecord("Track_Your_Visa");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { status, message } = this.state;
    return (
      <section className="track-status">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-md-12 ">
              <div className="item d-flex align-items-center">
                <div className="icon-img flex-img mr-3">
                  <img src="assets/images/icons/new/flight.svg" alt="" />
                </div>
                <div className="content w-100">
                  <h5 className="fw-600 mb-3">Track your Flight Status</h5>
                  <FlightTrack />
                </div>
              </div>
            </div>

            <div className="visa-status col-xl-6 col-lg-7 col-md-12">
              <div className="item d-flex align-items-center">
                <div className="icon-img flex-img mr-3">
                  <img src="assets/images/icons/new/passport.svg" alt="" />
                </div>
                <div className="content w-100">
                  <h5 className="fw-600 mb-3">Track your Visa Application Status</h5>
                  <form onSubmit={this.submitVisa} className="visa-track-form">
                    <div className="row">
                      <div className="col-md-7 col-sm-8 pr-sm-1">
                        <TextField
                          id="outlined-basic"
                          label="Enter ST Reference Number"
                          size="small"
                          variant="outlined"
                          className="w-100"
                          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                          name="visaTrackingNumber"
                          value={this.state.visaTrackingNumber}
                        />
                      </div>
                      <div className="form-button col-md-5 col-sm-4 pl-sm-1">
                        <Button onClick={this.submitVisa} type="submit" variant="contained" color="primary">
                          Track Visa
                        </Button>
                      </div>
                    </div>
                  </form>
                  {status.length > 0 && (
                    <p className="desc fz14 mt-xs-10">
                      {message.toUpperCase().replace("SHARETRIP", "").replace("TBBD", "")}

                      <Button variant="contained" color="primary" onClick={() => this.props.history.push("/visa-guide")} color="primary" variant="contained" size="small">
                        Visa Guide
                      </Button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(TrackStatus);
