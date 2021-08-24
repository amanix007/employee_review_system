import React, { Component } from "react";
import { LEADERBOARD_LIST } from "../../../Request/OthersApi";
import NumberFormat from "react-number-format";
import LoadingComponent from "../LoadingComponent";
import { isEmpty } from "lodash";
import moment from "moment";

// let data = {
//     special: [
//         {
//             type: 'Flight',
//             activity: 'Dhaka- Paro Air Ticket',
//             note: 'Dhaka- Paro Air Ticket',
//             value: 22000,
//             winingDate: '2019-07-25 06:58:23',
//             expireDate: '2020-01-25 18:58:23',
//             name: 'Mr Technica Manasdfasd',
//             avatar: 'https://tbbd-user-files.s3.amazonaws.com/1-c0145250-adf9-11e9-8a36-0dac9f278469.png'
//         },
//         {
//             type: 'Flight',
//             activity: 'Dhaka - Kolkata Air Ticket',
//             note: 'Dhaka - Kolkata Air Ticket',
//             value: 15000,
//             winingDate: '2019-07-20 12:21:53',
//             expireDate: '2020-01-20 12:21:53',
//             name: 'Mr Technica Manasdfasd',
//             avatar: 'https://tbbd-user-files.s3.amazonaws.com/1-c0145250-adf9-11e9-8a36-0dac9f278469.png'
//         }
//     ],
//     tripCoin: [
//         {
//             type: 'Coin',
//             activity: '280 Tripcoin',
//             note: '280 Tripcoin',
//             value: 280,
//             winingDate: '2019-07-25 02:21:53',
//             expireDate: '2020-01-25 14:21:53',
//             name: 'Mr Technica Manasdfasd',
//             avatar: 'https://tbbd-user-files.s3.amazonaws.com/1-c0145250-adf9-11e9-8a36-0dac9f278469.png'
//         },
//         {
//             type: 'TripCoin',
//             activity: '260 Tripcoin',
//             note: '260 Tripcoin',
//             value: 260,
//             winingDate: '2019-07-25 06:58:23',
//             expireDate: '2020-01-25 18:58:23',
//             name: 'Mr Technica Manasdfasd',
//             avatar: 'https://tbbd-user-files.s3.amazonaws.com/1-c0145250-adf9-11e9-8a36-0dac9f278469.png'
//         },
//         {
//             type: 'Coin',
//             activity: '240 Tripcoin',
//             note: '240 Tripcoin',
//             value: 240,
//             winingDate: '2019-07-24 01:21:53',
//             expireDate: '2020-01-24 01:21:53',
//             name: 'Mr Technica Manasdfasd',
//             avatar: 'https://tbbd-user-files.s3.amazonaws.com/1-c0145250-adf9-11e9-8a36-0dac9f278469.png'
//         },
//         {
//             type: 'Coin',
//             activity: '60 Tripcoin',
//             note: '60 Tripcoin',
//             value: 60,
//             winingDate: '2019-06-25 03:21:53',
//             expireDate: '2019-12-25 03:21:53',
//             name: 'Mr Technica Manasdfasd',
//             avatar: 'https://tbbd-user-files.s3.amazonaws.com/1-c0145250-adf9-11e9-8a36-0dac9f278469.png'
//         }
//     ]
// }

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      loading: true,
    };
  }
  getList = async () => {
    let list = await LEADERBOARD_LIST();
    if (list) {
      console.log(list);
      this.setState({ list, loading: false });
    }
  };

  componentDidMount() {
    localStorage.setItem("prevURL", this.props.history.location.pathname + this.props.history.location.search);

    if (!localStorage.getItem("accessToken")) {
      this.props.history.push("/login");
    } else {
      this.getList();
    }
  }

  render() {
    let { list, loading } = this.state;

    return loading ? (
      <LoadingComponent />
    ) : (
      <div className="LearderBoard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <i className="mdi mdi-monitor-dashboard"></i>
                <span> Leader Board</span>
              </div>
              {!isEmpty(list) && list.special.length !== 0 && (
                <React.Fragment>
                  <h6>Top Rewards</h6>
                  <div className="LeaderList special">
                    {list.special.map((res, i) => {
                      return (
                        <div className="Leader" key={i}>
                          <div className="left">
                            {/* <small>{("0" + i + 1).slice(-2)}</small> */}
                            {/* <small>{1 + i.toString("00")}</small> */}
                            <small>{1 + i}</small>
                            <img src={res.avatar ? res.avatar : "./assets/images/lbAvatar.png"} alt={res.name} />
                            <span>{res.name.trim().length === 0 ? "No Name" : res.name}</span>
                          </div>
                          <div className="right">
                            <div className="tripCoinPoint">
                              {/* <img src="./assets/images/icons/tripCoin.png" alt="" />
                                                            <NumberFormat thousandSeparator={true}
                                                                displayType={'text'}
                                                                value={res.point} /> */}
                              {res.activity}
                            </div>
                            <i className="mdi mdi-crown"></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}

              {!isEmpty(list) && list.tripCoin.length !== 0 && (
                <React.Fragment>
                  <h6>TripCoin</h6>
                  <div className="LeaderList">
                    {list.tripCoin.map((res, i) => {
                      return (
                        <div className="Leader" key={i}>
                          <div className="left">
                            {/* <small>{("0" + i + 1).slice(-2)}</small> */}
                            {/* <small>{1 + i.toString("00")}</small> */}
                            <small>{1 + i}</small>
                            <img src={res.avatar ? res.avatar : "./assets/images/lbAvatar.png"} alt={res.name} />
                            <span>{res.name.trim().length === 0 ? "No Name" : res.name}</span>
                          </div>
                          <div className="right">
                            <div className="tripCoinPoint">
                              <img src="./assets/images/icons/tripCoin.png" alt="" />
                              <NumberFormat thousandSeparator={true} displayType={"text"} value={res.value} />
                            </div>
                            <i className="mdi mdi-crown"></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
