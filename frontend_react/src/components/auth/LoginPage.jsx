import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { STHelmet } from "components/SmallCommonComponents/STHelmet";
import UserLogin from "./UserLogin";
import DynamicHeaderTree from "etc/DynamicHeaderTree";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgetPassword: false,
      signUpObj: {
        email: "",
        password: "",
        mobile: "",
      },
    };
  }
  // setViewType = (viewType) => {
  //   this.setState({ viewType, forgetPassword: false });
  // };

  forgetPassword = (forgetPassword) => {
    this.setState({
      forgetPassword,
      viewType: "login",
    });
  };

  componentDidMount() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("forgetPassword")) {
      this.forgetPassword(true);
    }
  }

  render() {
    return (
      <section className="login_register">
        <STHelmet data={DynamicHeaderTree.LoginPage} />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* <div className="col-lg-7 loginHero">
              <img src="./assets/images/loginHero.png" alt="" />
            </div> */}
            <div className="col-lg-6">
              <div className="login_register_form">
                <h3 className="text-center">{this.state.forgetPassword ? "Forget Password" : "Sign In"} </h3>
                <UserLogin forgetPassword={this.state.forgetPassword} initforgetPassword={this.forgetPassword} />
                <div className="bottom-text d-flex justify-content-between">
                  <p>
                    New User ?{" "}
                    <a
                      href="#"
                      onClick={() => {
                        this.props.history.push("/signup");
                      }}
                    >
                      Sign Up
                    </a>
                  </p>
                  <p className="text-right">
                    <a href="#" onClick={() => this.forgetPassword(true)}>
                      Forget password?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginPage.propTypes = {};

export default withRouter(LoginPage);
