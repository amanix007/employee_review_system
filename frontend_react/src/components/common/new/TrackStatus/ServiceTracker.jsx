import { Button } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import FlightTrack from "../FlightTrack/FlightTrack";
import TrackVisa from "../TrackVisa/TrackVisa";
import "./TrackStatus.css";

function ServiceTracker(props) {
    return (
      <section className="track-status">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6  mb-3">
              <div className="item d-flex align-items-center ">
                <div className="icon-img flex-img mr-3">
                  <img src="assets/images/icons/new/flight.svg" alt="" />
                </div>
                <div className="content w-100">
                  <h5 className="fw-600 mb-3">Track your Flight Status</h5>
                  <FlightTrack />
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6  mb-3">
              <div className="item d-flex align-items-center ">
                <div className="icon-img  mr-3">
                  <img src="assets/images/icons/new/subtract.svg" alt="" />
                </div>
                <div className="content w-100">
                  <h5 className="fw-600 mb-3">Can I travel to…?</h5>
                  <Link  to={'/safe-travel'}>
                    <Button variant="contained" color="primary"> EXPLORE </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 mb-3">
              <TrackVisa />
            </div>
          </div>
        </div>
      </section>
    )
}

export default withRouter(ServiceTracker);
