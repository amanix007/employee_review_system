import React from "react";
import "./FlightCard.css";
import { Link } from "react-router-dom";
import { isThisMinute } from "date-fns";

export default function FlightCard(props) {
  let item = props.data;

  return (
    <div className="flight-card">
      <div className="item-inner d-flex align-items-center">
        <div className="image flex-img">
          <img src={item.image} alt="" />
        </div>
        <div className="info d-flex flex-column justify-content-between">
          <div className="title-area d-flex align-items-center">
            <img src="/assets/images/icons/new/flight-mono.svg" alt="" />
            <h3 className="title ff3 fw-400">
              <Link to="/#">
                {item.from} <small> To </small> {item.to}
              </Link>
            </h3>
          </div>
          <div className="mt-35 d-flex align-items-center justify-content-between">
            <div className="cost">
              <div className="price fz18">BDT {item.cost}</div>
              <div className="price-bottom-text fz10">Price starts form</div>
            </div>
            <Link to="/" className="primary-color fw-500 d-flex align-items-center hover-translate-x">
              View Details
              <i className="mdi mdi-chevron-right translate ml-2 fz22"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
