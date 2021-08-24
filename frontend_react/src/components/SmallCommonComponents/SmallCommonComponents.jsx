import React, { Fragment, Component } from "react";
// import { Collapse, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";
import ButtonBase from "@material-ui/core/ButtonBase";
// import Box from "@material-ui/core/Box";
import SVG from "react-inlinesvg";
// import dealsspecial from "./deals-special-mono.svg";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Lottie from "react-lottie";
import dealsspecial from "./../SVG/deals-special-mono.svg";
import deal from "./../SVG/deal-mono.svg";
import cheap from "./../SVG/cheap-mono.svg";
import { svgProps, between } from "../../../misc/common";
// import moment from "moment";
// import { Modal as Modal2, CircularProgress } from "@material-ui/core";
import FlightInnerRowComponent from "../../pages/flight/FlightSearchComponents/FlightInnerRowComponent";

// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Countdown from "react-countdown";
import * as flightLoadingAnimation from "../../common/flightLoadingAnimation.json";

// const ColorButton = withStyles(theme => ({
//     root: {
//         color: theme.palette.getContrastText(purple[500]),
//         backgroundColor: "#fff",
//         '&:hover': {
//             backgroundColor: "red",
//         },
//     },
// }))(Button);

// export function ButtonWhite(props) {
//     return (
//         <ColorButton variant="contained" color="primary" className={classes.margin} {...props} >
//             Custom CSS
//       </ColorButton>
//     )
// }

export function HotelPriceOnly(props) {
  let { hotelData, currency, roomCount } = props;
  return (
    <p className="hotel-price">
      <span className="Price mr-xs-0">
        <NumberFormat thousandSeparator={true} displayType={"text"} prefix={currency + " "} value={Math.ceil(hotelData.lowestRate / roomCount)} />
      </span>
      <small className="small"> /Night</small>
    </p>
  );
}

export function HotelPriceWithDiscount(props) {
  let { hotelData, currency, roomCount } = props;
  return (
    <React.Fragment>
      <p className="hotel-price line-through fz12 text-nowwrap">
        <span className="Price mr-xs-0">
          <NumberFormat thousandSeparator={true} className="fw-400" displayType={"text"} prefix={currency + " "} value={Math.ceil(hotelData.lowestRate / roomCount)} />
        </span>
        <small className="small"> /Night</small>
      </p>

      <p className="hotel-price hasDiscount fz16 text-nowwrap">
        <span className="Price mr-xs-0">
          <span className="percentage d-flex align-items-center">
            <img src="assets/images/icons/new/discount-mono.svg" alt=""/>
            {hotelData.discount}% OFF
          </span>
          <NumberFormat thousandSeparator={true} displayType={"text"} prefix={currency + " "} value={Math.ceil(hotelData.lowestRateAfterDiscount / roomCount)} />
          <small className="small"> /Night</small>
        </span>
      </p>
    </React.Fragment>
  );
}

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    window.location.reload();
    return "";
  } else {
    // Render a countdown
    return (
      <React.Fragment>
        <div className="time">
          <strong>
            <span className="inner">{minutes}</span>
          </strong>
          <span className="timeType">min </span>
        </div>
        <span>:</span>
        <div className="time">
          <strong>
            <span className="inner">{seconds}</span>
          </strong>
          <span className="timeType">sec</span>
        </div>
      </React.Fragment>
    );
  }
};

function FlightTimeCounterFunc() {
  return (
    <div className="FlightTimeCounter">
      <div className="img">
        <img
          style={{
            position: "relative",
            left: 4,
          }}
          src="./assets/images/time-out.svg"
          alt=""
        />
      </div>
      <div className="text">
        <p>Book Now before it gets sold out.</p>
        <div className="countdown">
          <Countdown date={Date.now() + 1000 * 60 * 20} renderer={renderer} />
        </div>
      </div>
    </div>
  );
}
export let FlightTimeCounter = React.memo(FlightTimeCounterFunc);
// export function FlightTimeCounter(props) {

//     return (
//         <div className="FlightTimeCounter">
//             <div className="icon">
//                 <img src="./assets/images/icons/svg/hot-deal-color-2.svg" alt="" />
//             </div>
//             <div className="text">
//                 <p>Book now before tickets run out!</p>
//                 <div className="countdown">
//                     <Countdown
//                         date={Date.now() + 1000 * 60 * 20}
//                         renderer={renderer}
//                     />

//                 </div>
//             </div>
//         </div>
//     )
// }

function FlightRouteWatchingFunc() {
  return (
    <div className="FlightRouteWatching ">
      <div className="icon">
        <i className="mdi mdi-account-group"></i>
      </div>
      <div className="text">
        <p>{between(2, 12)} people are looking at this flight.</p>
      </div>
    </div>
  );
}

export let FlightRouteWatching = React.memo(FlightRouteWatchingFunc);

export function FlightDealFilter(props) {
  let { sort, setDealSort } = props;
  return (
    <div className="FlightDealFilter">
      {/* <ButtonBase className="deal selected">
                <div className="icon">
                    <SVG className="svgIcon" src={dealsspecial} {...svgProps} />
                </div>
                <div className="text">
                    <span>Best Flights</span>
                    <p>BDT 23,059</p>
                </div>
            </ButtonBase> */}
      <ButtonBase className={sort === "earliest" ? "deal selected" : "deal"} onClick={() => setDealSort("earliest")}>
        <div className="icon">
          <SVG className="svgIcon" src={dealsspecial} {...svgProps} />
        </div>
        <div className="text">
          <p>Earliest Flights</p>
        </div>
      </ButtonBase>
      <ButtonBase className={sort === "cheapest" ? "deal selected" : "deal"} onClick={() => setDealSort("cheapest")}>
        <div className="icon">
          <SVG className="svgIcon" src={cheap} {...svgProps} />
        </div>
        <div className="text">
          <p>Cheapest Flights</p>
        </div>
      </ButtonBase>
      <ButtonBase className={sort === "fastest" ? "deal selected" : "deal"} onClick={() => setDealSort("fastest")}>
        <div className="icon">
          <SVG className="svgIcon" src={deal} {...svgProps} />
        </div>
        <div className="text">
          <p>Fastest Flights</p>
        </div>
      </ButtonBase>
    </div>
  );
}

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <div p={3}>{children}</div>}
    </Typography>
  );
}

export let SegmentComponent = (props) => {
  let { eachSegment } = props;
  return (
    <div className="details depart">
      <div className="flight-block">
        {eachSegment.segment.map((seg, j) => {
          return (
            <Fragment key={j}>
              <div className="airline-details">
                <div className="img">
                  <img src={seg.logo} alt="" />
                </div>
                <span className="airlineName fw-500">
                  {seg.airlines.short} &nbsp; {seg.airlines.code + seg.flightNumber}
                </span>
                <span className="flightNumber">
                  {seg.aircraft} - {seg.aircraftCode}
                </span>
                {/* <span className="strong">{moment(seg.departureDateTime.date).format("D MMM, YYYY")}</span> */}
              </div>
              <FlightInnerRowComponent index={j} type="details" flight={seg} />
              {seg.transitTime && <div className="layover fw-500">Layover: {seg.transitTime}</div>}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export let FlightInfo = (props) => {
  let { eachSegment } = props;
  return (
    <div className="FlightInfo">
      <div className="flight-block">
        {eachSegment.segment.map((seg, j) => {
          return (
            <Fragment key={j}>
              <div className="airline-details">
                <div className="img">
                  <img src={seg.logo} alt="" />
                </div>
                <span className="airlineName fw-500">
                  {seg.airlines.short} &nbsp; {seg.airlines.code + seg.flightNumber}
                </span>
                <span className="flightNumber">
                  {seg.aircraft} - {seg.aircraftCode}
                </span>
                {/* <span className="strong">{moment(seg.departureDateTime.date).format("D MMM, YYYY")}</span> */}
              </div>
              <FlightInnerRowComponent index={j} type="details" flight={seg} />
              {seg.transitTime && <div className="layover fw-500">Layover: {seg.transitTime}</div>}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export let FlightBaggageInfo = (props) => {
  let { baggage } = props;
  return (
    <div className="FlightInfoType FlightBaggageInfo custom-scroll-bar-gray">
      {baggage.map((b, i) => (
        <div key={"bg" + i} className="info-container mb-xs-8">
          <p className="fw-700 fz20 mb-xs-0">{b.segment}</p>
          <div className="flight-info-table">
            <div className="i-row">
              <span className="i-label ">Baggage:</span>
              <span className="i-value">{b.weight} / person</span>
            </div>
            {/* <div className="i-row">
                        <span className="i-label">Cabin Baggage:</span>
                        <span className="i-value">7 KG / person</span>
                    </div>
                    <div className="i-row">
                        <span className="i-label">Check-in Baggage:</span>
                        <span className="i-value">30 KG / Person</span>
                    </div>
                    <div className="i-row">
                        <span className="i-label">Date Change Fee:  Airline Fee + ShareTrip Fee + Fare Difference</span>
                        <span className="i-value">100 %(apprx) + BDT 500 + Fare Difference</span>
                    </div> */}
          </div>
        </div>
      ))}

      {/* <div className="info-container" >
                <p className="fz12 fw-600 mb-xs-8">Dac - Kul</p>
                <div className="flight-info-table">
                    <div className="i-row">
                        <span className="i-label">Cabin Baggage:</span>
                        <span className="i-value">7 KG / person</span>
                    </div>
                    <div className="i-row">
                        <span className="i-label">Check-in Baggage:</span>
                        <span className="i-value">30 KG / Person</span>
                    </div>
                    <div className="i-row">
                        <span className="i-label">Date Change Fee:  Airline Fee + ShareTrip Fee + Fare Difference</span>
                        <span className="i-value">100 %(apprx) + BDT 500 + Fare Difference</span>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export let FlightAirFareRulesInfo = (props) => {
  let { eachSegment } = props;
  return (
    <div className="FlightInfoType FlightAirFareRulesInfo custom-scroll-bar-gray">
      <div>
        Max Stay Maximum stay none for economy unrestricted fares.
        <br />
        Layover Stopovers for economy unrestricted fares unlimited stopovers permitted.
        <br />
        Combinations Permitted combinations fares may be combined on a half round trip basis with any fare for any carrier in any rule and tariff to form round trips/circle trips. End-on-end
        permitted. Validate all fare components. Travel must be via construction point. Add-ons permitted. Open jaws fares may be combined on a half round trip basis with any fare for any carrier in
        any rule and tariff. -to form single or double open jaws. A maximum of 2 international fare components permitted. Mileage of an international open segment must be equal to/less than mileage of
        the shortest flown fare component. No mileage restriction on an open segment within one country.
        <br />
        Travel Restrictions Travel restrictions valid for travel commencing on/after 12 may 2017.
        <br />
        Accompanied Travel Restrictions Children discounts for economy unrestricted fares note - general rule does not apply. An accompanied child 2-11 years of age - charge 75 percent of the fare.
        Must be accompanied on all flights by adult 12 or older. Or - an unaccompanied child 2-11 years of age - charge 100 percent of the fare. Or - 1st infant under 2 years of age and not occupying
        a seat - charge 10 percent of the fare. Ticket designator- in and percent of discount must be accompanied on all flights by adult 12 or older. Or - an infant under 2 years of age and occupying
        a seat - charge 75 percent of the fare. Ticket designator- ch and percent of discount must be accompanied on all flights by adult 12 or older. Note - unaccompanied infant under 2 years -
        travel not permitted at this fare.
      </div>
    </div>
  );
};

export const StSlider = withStyles({
  valueLabel: {
    top: -40,
    "& >span": {
      width: 42,
      height: 42,
      fontSize: ".65rem",
    },
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange} IconComponent={() => <i className="arrowBottomIcon mdi mdi-chevron-down" />}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const flightOptions = {
  loop: true,
  autoplay: true,
  animationData: flightLoadingAnimation.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export let FlightLoadingAnimation = () => (
  <div className="text-center flightAnimationContainer">
    <div className="animationContainer">
      <Lottie options={flightOptions} loop={true} autoplay={true} />
    </div>
    <h2 className="fw-600">Hold Tight!</h2>
    <h5 className="fw-500 mb-xs-8" style={{paddingBottom: "20%"}}>
      Fetching Best Fares..
    </h5>
    {/* <p className="tav"><span className="fw-500">Travel Advisory:</span> Domestic Travel restricted till 11th April 2021 as per Govt declaration. </p> */}
  </div>
);
