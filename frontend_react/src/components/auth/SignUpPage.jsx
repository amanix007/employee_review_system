import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { STHelmet } from "components/SmallCommonComponents/STHelmet";
import UserRegistration from "./UserRegistration";
import DynamicHeaderTree from "etc/DynamicHeaderTree";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "login",
      // viewType: "signup",
      forgetPassword: false,
      signUpObj: {
        email: "",
        password: "",
        mobile: "",
      },
    };
  }

  componentDidMount() {
    // if (localStorage.getItem("accessToken")) this.props.history.push("/");
  }

  setViewType = (viewType) => {
    this.setState({ viewType, forgetPassword: false });
  };

  forgetPassword = (forgetPassword) => {
    this.setState({
      forgetPassword,
      viewType: "login",
    });
  };

  render() {
    let { viewType } = this.state;
    return (
      <section className="login_register">
        <STHelmet data={DynamicHeaderTree.SignUpPage} />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="login_register_form">
                <h3 className="text-center">Sign Up </h3>

                <UserRegistration />
                <div className="bottom-text d-flex justify-content-between">
                  <p>
                    Existing User ?{" "}
                    <a
                      href="#"
                      onClick={() => {
                        this.props.history.push("/login");
                      }}
                    >
                      Log in
                    </a>
                  </p>
                  <p className="text-right">
                    <a
                      href="#"
                      onClick={() => {
                        this.props.history.push("/login?forgetPassword=true");
                      }}
                    >
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

SignUpPage.propTypes = {};

export default withRouter(SignUpPage);
