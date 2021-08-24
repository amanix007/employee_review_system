import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";



import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { GATEWAY } from "../../Request/FlightApi";

class PayPromotionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentGateWay: [],
      gateWayList: [],
      cardSeriesList: [],
      gateWay: "",
      cardSeries: "",
      coupon_applicable_list: [],
      earn_tripcoin_applicable_list: [],
      redeem_tripcoin_applicable_list: [],
      currencyModalOpen: false,
    };
  }

  handleChange = (event) => {
    this.setState({ gateWay: event.target.value }, () => this.setCardSeriesList());
  };




  setCardSeriesList = () => {
    this.state.gateWayList.map((obj) => {
      if (this.state.gateWay === obj.id) {
        if (obj.currency.code === "USD") {

          console.log('obj:', obj)
          this.props.currencyModalShow(obj.currency.conversion.rate);
        }
        if (obj.series.length > 0) {
          this.setState(
            {
              cardSeriesList: obj.series,
              cardSeries: obj.series[0].id,
            },
            () => this.props.getGateWay(this.state.gateWay, this.state.cardSeries)
          );
        } else {
          this.setState(
            {
              cardSeriesList: [],
              cardSeries: "",
            },
            () => this.props.getGateWay(this.state.gateWay, this.state.cardSeries)
          );
        }
      }
    });
  };

  cardSeriesChange = (e) => {
    this.setState({ cardSeries: e.target.value }, () => this.props.getGateWay(this.state.gateWay, this.state.cardSeries));
  };

  arrangePaymentGate = (discountMethod) => {


    let res;
    let cardInfo = {};
    let { coupon_applicable_list, earn_tripcoin_applicable_list, redeem_tripcoin_applicable_list } = this.state;
    if (discountMethod === "card") {
      res = earn_tripcoin_applicable_list;
      console.log("res:", res);
    } else if (discountMethod === "tripCoin") {
      res = redeem_tripcoin_applicable_list;
    } else if (discountMethod === "coupon") {
      res = coupon_applicable_list;
    }

    if (res.length !== 0) {
      // there is no card series
      if (res && res[0].series.length < 1) {
        cardInfo = {
          cardSeriesList: res[0].series,
          gateWayList: res,
          gateWay: res[0].id,
          cardSeries: "",
        };
      } else {
        cardInfo = {
          cardSeriesList: res[0].series,
          gateWayList: res,
          gateWay: res[0].id,
          cardSeries: res[0].series[0].id,
        };
      }
    } else {
      cardInfo = {
        gateWayList: [],
        cardSeriesList: [],
        gateWay: "",
        cardSeries: "",
      };
    }

    this.setState({ ...cardInfo }, () => this.props.getGateWay(this.state.gateWay, this.state.cardSeries));
  };
  initGateWayProcess = async (bankCode) => {

    let { serviceType, gatewayCurrency } = this.props;
    console.log('bankCode:', bankCode)
    let res = await GATEWAY(serviceType, gatewayCurrency, bankCode);
    if (res) {
      this.setState(
        {
          paymentGateWay: res,
        },
        () => {
          let earn_tripcoin_applicable_list = [];
          let redeem_tripcoin_applicable_list = [];
          let coupon_applicable_list = [];

          earn_tripcoin_applicable_list = res.filter((val) => val.earn_tripcoin_applicable);
          redeem_tripcoin_applicable_list = res.filter((val) => val.redeem_tripcoin_applicable);
          coupon_applicable_list = res.filter((val) => val.coupon_applicable);

          this.setState(
            {
              earn_tripcoin_applicable_list,
              redeem_tripcoin_applicable_list,
              coupon_applicable_list,
            },
            () => {
              this.arrangePaymentGate(this.props.discountMethod);
            }
          );
        }
      );
    }

  }
  componentDidMount() {

    this.initGateWayProcess(this.props.bankCode);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.discountMethod !== this.props.discountMethod) {
      this.arrangePaymentGate(nextProps.discountMethod);
    }

    if (nextProps.bankCode) {
      if (nextProps.bankCode.length !== this.props.bankCode.length) {
        this.initGateWayProcess(nextProps.bankCode);
      }
      if (nextProps.totalPayable === 0 && nextProps.bankCode.length === 0) {
        this.initGateWayProcess([]);
      }
    }
  }

  render() {


    console.log('this.props.totalPayable:', this.props.totalPayable)

    let GATEWAY = this.state.gateWayList;

    return (GATEWAY.length < 1) ? (
      ""
    ) : (
      <div className="h-payment-block">
        {this.props.totalPayable !== 0 && <>
          <div className="paymentMethod">
            {GATEWAY.map((res, key) => {
              return (
                <React.Fragment key={key}>
                  <FormGroup className="form-check form-check-inline">
                    <Input
                      onChange={this.handleChange}
                      checked={this.state.gateWay === res.id}
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id={"inlineRadio" + key}
                      value={res.id}
                    />
                    <Label className="form-check-label" htmlFor={"inlineRadio" + key}>
                      <img src={res.logo.small} alt={res.code} />
                    </Label>
                  </FormGroup>
                </React.Fragment>
              );
            })}
          </div>
          <React.Fragment>
            {this.state.cardSeriesList.length < 1 ? (
              ""
            ) : (
              <div className="form-field-wrap">
                <i className="mdi mdi-credit-card"></i>
                <div className="form-row">
                  <div className="form-group col-lg-12">
                    <TextField
                      className="SelectMenuNew"
                      label="Card Prefix"
                      variant="outlined"
                      select
                      margin="normal"
                      fullWidth
                      onChange={this.cardSeriesChange}
                      name="cardSeries"
                      id="cardSeries"
                      value={this.state.cardSeries}
                    >
                      {this.state.cardSeriesList.map((res, key) => {
                        return (
                          <MenuItem key={key} value={res.id}>
                            {res.series}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </div>
                </div>
              </div>
            )}




          </React.Fragment>
        </>}
      </div>
    );
  }
}

PayPromotionComponent.propTypes = {};

export default PayPromotionComponent;
