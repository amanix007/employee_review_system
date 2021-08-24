import React, { Component } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Slider, Typography, IconButton, Button, Collapse } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import Radio from "@material-ui/core/Radio";
import { VALIDATE_COUPON } from "../../Request/OthersApi";
import { isEmpty } from "lodash";

const styles = (theme) => ({
  inputInactive: {
    backgroundColor: "#ddd!important",
  },
  disabled: {
    color: "#000!important",
  },
});

class TripCoinCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponCode: "",
      redeemTripCoin: 0,
      couponCodeActive: false,
      couponEnable: false,
      isCouponSubmitted: false,
      couponRes: {},
      CouponValid: false,
      CouponInValid: false,
      couponCodeErrorMessage: "",
    };
    console.log("props", props);
  }

  componentDidMount() { }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.replace(/\s+/g, ''),
      redeemTripCoin: 0,
    });
  };

  handleChangeCheckbox = (name) => (event) => {
    this.setState(
      {
        [name]: event.target.checked,
        couponEnable: !this.state.couponEnable,
        isCouponSubmitted: false,
        couponCode: "",
        redeemTripCoin: 0,
      },
      () => {
        this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode, this.state.couponRes);
      }
    );
  };

  usethisCouponCheckbox = (name) => (event) => {
    this.setState(
      {
        useThisCoupon: event.target.checked,
      },
      () => {
        this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode, this.state.couponRes);
      }
    );
  };

  handleSliderChange = (event, redeemTripCoin) => {
    this.setState(
      {
        redeemTripCoin: redeemTripCoin,
        couponCode: "",
        couponCodeActive: false,
        couponEnable: false,
        useThisCoupon: false,
      },
      () => {
        console.log("this.state.redeemTripCoin:", this.state.redeemTripCoin);
        this.props.getRedeemCoupon(redeemTripCoin, this.state.couponCode, this.state.couponRes);
        this.props.flightBookingStore.updateStore({ redeemTripCoin });
      }
    );
  };

  couponApply = async () => {
    //change state value
    //update props action
    let { type, extraParams } = this.props;
    let obj = {
      coupon: this.state.couponCode,
      serviceType: type,
      deviceType: "Web",
      extraParams
    };
    let couponRes = await VALIDATE_COUPON(obj);
    if (couponRes) {

      if (typeof (this.props.setcouponGatewayList) === 'function') {
        this.props.setcouponGatewayList(couponRes.gateway);
      }

      this.setState(
        {
          isCouponSubmitted: true,
          couponRes: couponRes,
          CouponValid: true,
        },
        () => {
          this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode, couponRes);

          // flight specific code start
          let { type, priceBreakDown } = this.props;
          if (type === "Flight") {
            let totalbaseFareCombined = 0;
            priceBreakDown.details.map(item => {
              totalbaseFareCombined = item.baseFare * item.numberPaxes + totalbaseFareCombined;
            })

            let couponDiscountAmount = 0;

            let couponDiscount = couponRes.discount;
            let { discountType } = couponRes;



            if (discountType === 'Flat') {
              couponDiscountAmount = couponDiscount;
            } else if (discountType === "Percentage") {
              couponDiscountAmount = Math.round((totalbaseFareCombined / 100) * couponDiscount);
            }

            this.props.flightBookingStore.updateStore({ couponDiscountAmount })
          }

          // flight specific code end

        }
      );
    } else {
      this.setState({
        CouponInValid: true,
      });
    }
  };

  couponSubmit = (e) => {
    if (e.key === "Enter") {
      if (this.state.couponCode.length > 1) {
        this.couponApply();
      }
    }
  };

  discountMethodChange = (e) => {

    let { value } = e.target;
    if (value === "card") {
      this.setState(
        {
          redeemTripCoin: 0,
          couponCode: "",
          couponCodeActive: false,
          couponEnable: false,
          isCouponSubmitted: false,
          useThisCoupon: false,
        },
        () => {
          this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode);

        }
      );
    } else if (value === "tripCoin") {
      this.setState(
        {
          redeemTripCoin: 0,
          couponCode: "",
          couponCodeActive: false,
          couponEnable: false,
          isCouponSubmitted: false,
          useThisCoupon: false,
        },
        () => {
          this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode);
        }
      );
    } else if (value === "coupon") {
      this.setState(
        {
          redeemTripCoin: 0,
          couponCodeActive: true,
          couponEnable: true,
          useThisCoupon: true,
        },
        () => {
          this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode);
        }
      );
    }
    this.props.handleDiscountMethodChange(e);
  };
  setCouponOption = (couponCode) => {
    this.setState({
      couponCode

    }, () => {
      this.couponApply();
    })

  }
  render() {
    let max = parseInt(this.props.redeemPoint);
    console.log("max:", max);
    let { CouponValid, CouponInValid, couponCodeErrorMessage } = this.state;
    let { discountMethod, bankOfferEnable, type } = this.props;

    const { classes } = this.props;
    console.log("classes:", classes);
    let buttonClass = "";
    if (CouponValid) {
      buttonClass = "valid";
    } else if (CouponInValid) {
      buttonClass = "invalid";
    }
    let isTK = false;
    if (!isEmpty(this.props.flightBookingStore.flightDetails)) {
      isTK = this.props.flightBookingStore.flightDetails.flight.some((singleFlight) => singleFlight.operatedBy === "TK");
    }



    return (
      <div className="PaymentSideBarWidget TripCoinCoupon">
        <div className="WidgetPanel">
          <div className="panelHead">
            <div className="new-payment-header">
              <div className="icon">
                <img src="/assets/images/icons/svg/discount-mono.svg" alt="" />
              </div>
              <div className="text">
                <h6>Select Discount Option </h6>
                <p>Choose your discount option </p>
              </div>
            </div>
          </div>
          <div className="PaymentSideBarWidget-body">

            <div className="tc-body">

              {bankOfferEnable && (
                <React.Fragment>
                  <FormControlLabel
                    classes={{
                      root: "MUI-Label-root",
                      label: "MUI-Label",
                    }}
                    control={<Radio checked={discountMethod === "card"} value="card" color="primary" name="discountMethod" onChange={(e) => this.discountMethodChange(e)} />}
                    label="I want to Earn Trip Coin"
                    labelPlacement="end"
                  />

                  {/* <p>Instant discount available on AMEX, BRAC, EBL, NRB, Standard Chartered, UCBL card payment. Please select the AMEX or Visa/Master card as payment option-</p> */}
                </React.Fragment>
              )}

              <FormControlLabel
                classes={{
                  root: "MUI-Label-root",
                  label: "MUI-Label",
                }}
                control={<Radio checked={discountMethod === "tripCoin"} value="tripCoin" color="primary" name="discountMethod" onChange={(e) => this.discountMethodChange(e)} />}
                label="I want to Redeem TripCoins"
                labelPlacement="end"
              />
              <Collapse
                classes={{
                  // root: "MUI-Accordion-root",
                }}
                in={discountMethod === "tripCoin"}
              >
                <div className="reedeem mt-xs-16 mb-xs-16">
                  <div className="img">
                    <img src="./assets/images/icons/tripCoinGray.png" alt="" />
                  </div>
                  <div className="reedemPointOption mb-xs-30">
                    <Typography id="label" className="mb-xs-20">
                      Redeem Point {this.state.redeemTripCoin}
                    </Typography>
                    <Slider value={this.state.redeemTripCoin} aria-labelledby="label" onChange={this.handleSliderChange} min={0} max={max} step={1} disabled={discountMethod !== "tripCoin"} />
                  </div>
                </div>
              </Collapse>


              <React.Fragment>
                <FormControlLabel
                  className="mb-0"
                  classes={{
                    root: "MUI-Label-root",
                    label: "MUI-Label",
                  }}
                  name="discountMethod"
                  control={
                    <Radio
                      // checked={this.state.couponEnable}
                      checked={discountMethod === "coupon"}
                      // onChange={this.handleChangeCheckbox('couponEnable')}
                      value="coupon"
                      color="primary"
                      //   size="large"
                      onChange={(e) => this.discountMethodChange(e)}
                    />
                  }
                  label="I want to use Coupon Code"
                />
                <Collapse
                  classes={{
                    // root: "MUI-Accordion-root",
                  }}
                  in={discountMethod === "coupon"}
                >
                  <div className="form-field-wrap mt-xs-16 mb-xs-16">
                    <i className="mdi mdi-chess-king"></i>

                    <div className={"form-group"}>
                      <div className="coupon-input-and-button">
                        <TextField
                          className="coupon-input"
                          label="Enter Coupon Code"
                          onChange={this.handleChange}
                          onKeyUp={this.couponSubmit}
                          name={"couponCode"}
                          value={this.state.couponCode}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          error={couponCodeErrorMessage.length > 0}
                          helperText={couponCodeErrorMessage}
                          type="text"
                          placeholder="COUPON"
                          disabled={discountMethod !== "coupon" || this.state.isCouponSubmitted}

                          InputProps={{

                            endAdornment: (
                              <React.Fragment>
                                {this.state.couponCode !== "" && (
                                  <IconButton
                                    onClick={() => {
                                      this.setState(
                                        {
                                          couponCode: "",
                                          isCouponSubmitted: false,
                                        },
                                        () => this.props.getRedeemCoupon(this.state.redeemTripCoin, this.state.couponCode, null)
                                      );
                                    }}
                                  >
                                    <i className="mdi mdi-delete"></i>
                                  </IconButton>
                                )}
                              </React.Fragment>
                            ),
                          }}
                        />

                        <div className="validateCoupon">
                          <Button
                            color="primary"
                            disabled={discountMethod !== "coupon" || this.state.isCouponSubmitted}
                            className={buttonClass}
                            variant="contained"
                            size="small"
                            margin="normal"
                            onClick={this.couponApply}
                          >
                            <i className="mdi mdi-checkbox-marked-circle"></i>
                          </Button>
                        </div>
                      </div>

                    </div>
                  </div>
                  {isTK && <div className="coupons mt-3">
                    <div className="form-group">
                      <p className="fz14 mb-2 text-gray">Available coupon</p>
                      <Button
                        onClick={() => this.setCouponOption("TKSCEC")}
                        variant="outlined" color={this.state.couponCode === "TKSCEC" ? "primary" : ""} className="mb-2" fullWidth={true}>
                        <div className="d-flex flex-column align-items-start w-100">
                          <span className="fz12 fw-700">TKSCEC</span>
                          <span className="fz10 text-dark">Save 8% using SC card on Turkish Airlines Economy</span>
                        </div>
                      </Button>
                      <Button
                        onClick={() => this.setCouponOption("TKSCBC")}
                        variant="outlined" color={this.state.couponCode === "TKSCBC" ? "primary" : ""} className="mb-2" fullWidth={true}>
                        <div className="d-flex flex-column align-items-start w-100">
                          <span className="fz12 fw-700">TKSCBC</span>
                          <span className="fz10 text-dark">Save 15% using SC card on Turkish Airlines Business</span>
                        </div>
                      </Button>
                    </div>
                  </div>}

                </Collapse>

              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default inject("flightBookingStore")(observer(withStyles(styles)(TripCoinCoupon)));