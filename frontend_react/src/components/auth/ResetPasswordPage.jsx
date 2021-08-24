import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { RESET_PASSWORD } from "../../Request/ProfileApi";
import { TextField, Button } from '@material-ui/core';
import queryString from 'query-string';





class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetPasswordData: {
        token: "",
        newPassword: "",
        newPasswordRepeat: "",
      },
      errors: {
        newPassword: "",
        newPasswordRepeat: "",
      }
    };
  }
  componentDidMount() {
    if (localStorage.getItem("accessToken")) this.props.history.push("/");
    const parsed = queryString.parse(this.props.location.search);
    let { resetPasswordData } = this.state;
    resetPasswordData.token = parsed.token;
    this.setState({ resetPasswordData });
    console.log(parsed.token);
  }



  setMessage = (field, messsage) => {
    let { errors } = this.state;
    errors[field] = messsage;
    this.setState({ errors });

  };


  validateContact = () => {

    let { newPassword, newPasswordRepeat
    } = this.state.resetPasswordData;

    if (newPassword.length === 0) {
      this.setMessage("newPassword", `Please Enter Your New Password`);
    }
    else if (newPassword.length < 8) {
      this.setMessage("newPassword", `Your Password should be more than 8 character`);
    }
    else {
      this.setMessage("newPassword", ``)
    }


    if (newPasswordRepeat.length === 0) {
      this.setMessage("newPasswordRepeat", `Please Enter your Password`);
    }
    else if (newPasswordRepeat.length < 8) {
      this.setMessage("newPasswordRepeat", `Your Password should be more than 8 character`);
    }
    else if (newPassword !== newPasswordRepeat) {
      this.setMessage("newPasswordRepeat", `Password does not match`);
    }
    else {
      this.setMessage("newPasswordRepeat", ``)
    }



  };


  submit = async e => {


    e.preventDefault();
    console.log(this.state.resetPasswordData);
    this.validateContact();


    let hasError = [];
    for (let property in this.state.errors) {
      if (this.state.errors.hasOwnProperty(property)) {
        if (this.state.errors[property] === "") {
          hasError.push(false);
        } else {
          hasError.push(true);
        }
      }
    }



    let checkError = (bol) => {
      return bol === false
    };

    if (hasError.every(checkError)) {
      let { resetPasswordData } = this.state;
      let res = await RESET_PASSWORD(resetPasswordData);
      if (res) {
        localStorage.clear();
        sessionStorage.clear();
        this.props.history.push('/login');
      }

    }

  };


  handleChange = e => {
    let { resetPasswordData } = this.state;
    resetPasswordData[e.target.name] = e.target.value;
    this.setState({ resetPasswordData });
  };


  render() {

    let { errors, resetPasswordData } = this.state;
    let { newPassword, newPasswordRepeat } = resetPasswordData;

    return (
      <section className="login_register">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* <div className="col-lg-7 loginHero">
              <img src="./assets/images/loginHero.png" alt="" />
            </div> */}
            <div className="col-lg-6">
              <div className="login_register_form">
                <h3 className="text-center">Reset Password </h3>

                <form onSubmit={this.submit} >
                  <div className="input-groups">
                    <div className="form-field-wrap">
                      <i className="mdi mdi-lock"></i>
                      <div className="form-row">
                        <div className="col-md-12">
                          <TextField
                            label="New Password"
                            type="password"
                            name="newPassword"
                            required
                            onChange={this.handleChange}
                            value={newPassword}
                            placeholder="Enter your new password"
                            variant="outlined"
                            fullWidth
                            error={errors.newPassword.length ? true : false}
                            helperText={errors.newPassword}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-field-wrap">
                      <i className="mdi mdi-lock"></i>
                      <div className="form-row">
                        <div className="col-md-12">
                          <TextField
                            label="Confirm New Password"
                            type="password"
                            name="newPasswordRepeat"
                            required
                            onChange={this.handleChange}
                            value={newPasswordRepeat}
                            placeholder="Confirm New Password"
                            variant="outlined"
                            fullWidth
                            error={errors.newPasswordRepeat.length ? true : false}
                            helperText={errors.newPasswordRepeat}
                          />
                        </div>
                      </div>
                    </div>

                    <Button variant="contained" size="large" fullWidth
                      type="submit"
                      className="loginButton"
                      color="primary">Submit</Button>
                  </div>
                </form >

                <div className="bottom-text d-flex justify-content-between">

                  <p>Existing User ? {" "}
                    <a href="#" onClick={() => {
                      this.props.history.push('/login')

                    }}>Log in</a>
                  </p>
                  <p className="text-right"><a href="#"
                    onClick={() => {
                      this.props.history.push('/login?forgetPassword=true')

                    }}
                  >Forget password?</a></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

ResetPasswordPage.propTypes = {};


export default withRouter(ResetPasswordPage);