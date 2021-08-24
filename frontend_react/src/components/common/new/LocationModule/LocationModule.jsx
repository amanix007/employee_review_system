import React from "react";
import "./LocationModule.css";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Countdown from "react-countdown";
import moment from 'moment';
// import Timer from "../Timer/Timer"; 

export default function LocationModule(props) {
  let item = props.moduleObject;
  

  let { type, discount, discountType, discountPrice, image, duration, tripCoin, shareCoin, total, currency, title, withAirFare, cityName, transportPoint, vehicle } = props.moduleObject;

  let priceDisply = null;

  if (type !== "package") {
    priceDisply = (
      <div className="d-flex align-items-center mb-2 black-color">
        <span className="fz16 fw-600">
          <NumberFormat thousandSeparator={true} displayType={"text"} prefix={currency + " "} value={total} /> /<small>night</small>
        </span>
      </div>
    );
  } else {
    if (discount === 0) {
      priceDisply = (
        <div className="d-flex align-items-center mb-2 black-color">
          <span className="fz16 fw-600">
            <NumberFormat thousandSeparator={true} displayType={"text"} prefix={currency + " "} value={total} /> /<small>person</small>
          </span>
        </div>
      );
    } else {
      priceDisply = (
        <div className="d-flex align-items-center mb-2">
          <span className="fz10 text-red mr-2 d-flex align-items-center">
            <img className="mr-2" src="https://utility-assets.s3.amazonaws.com/media/assets/discount-mono.png" />
            <span>{discount}%</span>
          </span>
          <span className="line-through fz12 mr-2">
            <NumberFormat thousandSeparator={true} displayType={"text"} prefix={currency + " "} value={total} />
          </span>
          <span className="fz16 fw-600">
            <NumberFormat thousandSeparator={true} displayType={"text"} prefix={currency + " "} value={discountPrice} /> /<small>person</small>
          </span>
        </div>
      );
    }
  }

  let deadline = moment(item.periodTo).format('YYYY-MM-DDThh:mm:ss');

  return (
    <div className="package-item cursor-pointer" onClick={props.onClick}>
      <div className="image-area">
        {item.url 
         ? 
            <div className="image">
              <img src={image} alt={item.title} />
            </div>
        : <div className="image">
          <img src={image} alt={item.title} />
        </div>
        
      }

        <div className="taglines d-flex align-items-center justify-content-between">
          <div className="timer d-flex align-items-center fz12 primary-tag">
            <img src="assets/images/icons/new/timer.svg" className="icon mr-2 mt--1" alt="" />
            
            {/* <Timer deadline={deadline}/> */}
            <Countdown date={deadline} />

          </div>

          <div className="tag d-flex align-items-center fz12 primary-tag">
            <img src="assets/images/icons/new/thunder.svg" className="icon mr-2" alt="" />
            <span>Trending</span>
          </div>
        </div>
      </div>
      <h6 className="title fw-400 black-color"> {title.substring(0,60)+"..."} </h6>

      <div className="tour-info d-flex align-items-center justify-content-start fz13">
        <div className="duration d-flex align-items-center mr-2 text-nowrap">
          <i className="mdi mdi-calendar mr-1"></i>
          {duration}
        </div>

        {cityName && (
          <div className="loacation d-flex align-items-center">
            <i className="mdi mdi-map-marker mr-1"></i>
            <div className="text-ellipsis"> {cityName} </div>
          </div>
        )}
      </div>

      {withAirFare && withAirFare === "YES" && <p className="fz12">Starts from ( with Airfare)</p>}

      {priceDisply}

      <div className="fz14 d-flex align-items-center fz14 fw-500 mb-1 black-color">
        <img src="assets/images/icons/new/currency.svg" className="icon mr-2 mt--1" alt="" />
        <span>
          <NumberFormat thousandSeparator={true} displayType={"text"} value={tripCoin} />
        </span>
      </div>
    </div>
  );
}
