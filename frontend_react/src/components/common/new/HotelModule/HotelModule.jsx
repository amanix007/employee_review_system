import { inject, observer } from "mobx-react";
import React from "react";
import NumberFormat from "react-number-format";
import { withRouter } from "react-router-dom";
import "./HotelModule.css";

function HotelModule(props) {
  let item = props.item;

  let ratting = [];
  for (let i = 0; i < item.starRating; i++) {
    ratting.push(<i className="mdi mdi-star" key={i}></i>);
  }

  return (
    <div className="hotel-module" onClick={() => props.goToSearch(item)}>
      <div className="image-area">
        <div className="flex-img">
          <img src={`https://api.sharetrip.net/api/v1/hotel/image?key=${item.thumbnail}`} alt={item.name} />
        </div>
      </div>
      <h6 className="title fw-500">{item.name}</h6>

      {item.ratting && (
        <div className="d-flex align-items-center mb--15">
          <div className="rattings fz22 d-flex align-items-center">{ratting}</div>
          <div className="likes d-flex align-items-center">
            <i className="mdi mdi-thumb-up"></i>
            {item.rating}
          </div>
        </div>
      )}

      {item.address && (
        <div className="tour-info d-flex align-items-center justify-content-start fz12">
          <div className="loacation">
            <p className="m-0 fz13  d-flex align-items-center">
              <i className="mdi mdi-map-marker mr-1"></i>
              {item.address}
            </p>
          </div>
        </div>
      )}

      <div className="costs d-flex justify-content-between align-items-end flex-wrap">
        <div className="fz16 fw-500">
          <p className="m-0">
            <small>Starts from</small>
            <br />
            <NumberFormat thousandSeparator={true} displayType={"text"} prefix={"BDT" + " "} value={item.rate} /> <small> / night</small>
          </p>
        </div>

        {item.tripCoin && (
          <div className="fz14 d-flex align-items-center fz14 fw-500">
            <img src="assets/images/icons/new/currency.svg" className="icon mr-2 mt--1" alt="" />
            <span>{item.tripCoin}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(inject("sTstore", "hotelSearchStore")(observer(HotelModule)));
