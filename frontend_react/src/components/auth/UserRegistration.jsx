import React, { Component } from "react";

import { REGISTRATION } from "../../Request/ProfileApi";
import { TextField, Typography, Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Collapse from '@material-ui/core/Collapse';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: false,
      errorMessage: '',
      showForm: true,
      successMessage: '',
      collapse: false,
      user: {
        email: "",
        password: "",
        mobile: "",
        referralCode: "",
      },
      errors: {
        email: "",
        password: "",
        mobile: ""
      }
    };
  }



  signUp = async e => {
  
    e.preventDefault();
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
      this.setState({progress: true});
      let { user } = this.state;
      let res = await REGISTRATION(user);

      if (res) {
        console.log('regidter', res);
        this.setState({progress: false})
        if(res.status !== 400){
          this.setState({
            errorMessage: '',
            successMessage: "Please verify your email address. we've send an email with verification link. Please check your inbox.",
            collapse: true,
			showForm: false
          })
          setTimeout(() => {
            this.props.history.push('/');
          }, 6000);
        }else{
          this.setState({
            errorMessage: res.data.message,
            successMessage: '',
            collapse: true
          })
        }

      }


    }
  };

  handleChange = e => {
    let { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };


  setMessage = (field, messsage) => {
    let { errors } = this.state;
    errors[field] = messsage;
    this.setState({ errors });

  };


  validateContact = () => {

    let { email, password } = this.state.user;

    if (email.length === 0) {
      this.setMessage("email", `Please Enter Your Email Address`);
    }
    else {
      this.setMessage("email", ``)
    }

    if (password.length === 0) {
      this.setMessage("password", `Please Enter your Password`);
    }
    else if (password.length < 8) {
      this.setMessage("password", `Your Password should be more than 8 character`);
    }
    else {
      this.setMessage("password", ``)
    }

  };


  render() {
    let { errors } = this.state;
    return (
		<React.Fragment>
			<Collapse in={this.state.showForm}>
			<form id="sign-up" onSubmit={this.signUp}>
				<div className="input-groups">
					<div className="form-field-wrap">
						<i className="mdi mdi-email"></i>
						<div className="form-row">
							<div className="col-md-12">
								<TextField label="Email" type="email" name="email" id="registerEmail" required
									onChange={this.handleChange} value={this.state.user.email} placeholder="example@email.com"
									variant="outlined" fullWidth error={errors.email.length ? true : false}
									helperText={errors.email} />
							</div>
						</div>
					</div>
					<div className="form-field-wrap">
						<i className="mdi mdi-lock"></i>
						<div className="form-row">
							<div className="col-md-12">
								<TextField label="Password" type="password" name="password" id="registerPassword" required
									onChange={this.handleChange} value={this.state.user.password} placeholder="Your password"
									variant="outlined" fullWidth error={errors.password.length ? true : false}
									helperText={errors.password} />
							</div>
						</div>
					</div>
					<div className="form-field-wrap">
						<i className="mdi mdi-cellphone"></i>
						<div className="form-row">
							<div className="col-md-12">
								<TextField label="Mobile Number" onChange={this.handleChange} value={this.state.user.mobile}
									variant="outlined" fullWidth type="tel" name="mobile" id="registerMobile"
									placeholder="+880 17 0964 2308" error={errors.mobile}
									error={errors.mobile.length ? true : false} helperText={errors.mobile} />
							</div>
						</div>
					</div>
					<div className="form-field-wrap">
						<i className="mdi mdi-code-array"></i>
						<div className="form-row">
							<div className="col-md-12">
								<TextField label="Referral Code (Optional)" onChange={this.handleChange}
									value={this.state.user.referralCode} variant="outlined" fullWidth type="text"
									name="referralCode" id="referralCode" placeholder="Referral Code" />
							</div>
						</div>
					</div>

					<Collapse in={this.state.collapse}>
						{this.state.errorMessage &&
						<Typography className="mb-1 text-center" color="error"> {this.state.errorMessage}</Typography>
						}
					</Collapse>
					<div className="login-button-area">
						{ !this.state.progress ?
						<Button variant="contained" size="large" fullWidth type="submit" className="loginButton"
							color="primary">SIGN UP</Button>
						:
						<LinearProgress className="linear-progress-login" />
						}
					</div>
				</div>		
			</form>
			</Collapse>

			{this.state.successMessage &&
			<p className="mb-5 fz18 text-center text-black">
				<span  dangerouslySetInnerHTML={{__html: this.state.successMessage}}></span>
			</p>
			}
			
		</React.Fragment>
    );
  }
}

UserRegistration.propTypes = {};




export default withRouter(UserRegistration);