import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import { Redirect, withRouter } from "react-router-dom";
import { FORGET_PASSWORD, LOGIN, SOCIAL_LOGIN } from "../../Request/ProfileApi";
import { Button, TextField, Typography } from "@material-ui/core";
import _manifest from "../../_manifest";
import LinearProgress from '@material-ui/core/LinearProgress';
import Collapse from '@material-ui/core/Collapse';

class UserLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: {
				email: "",
				password: "",
				// mobileNumber: ""
				progress: false,
				errorMessage: '',
				successMessage: '',
				collapse: false
			},
			fireRedirect: false,
		};
	}

	onChange = (e) => {
		let {login} = this.state;
		login[e.target.name] = e.target.value;
		this.setState({login});
	};

	responseFacebook = async (response) => {
		// console.log(response, "response");
		if (typeof response.accessToken !== "undefined") {
			let facebook = {};
			facebook.facebookToken = response.accessToken;
			let res = await SOCIAL_LOGIN(facebook, "facebook");
			if (res) this.handleLogin(res);
		}
	};

	responseGoogle = async (response) => {
		if (typeof response.tokenId !== "undefined") {
			let google = {};
			google.token = response.tokenId;
			let res = await SOCIAL_LOGIN(google, "google");
			if (res) this.handleLogin(res);
		}
	};

	/*facebookClicked = async () => {
	      alert('fb click work');
	      let {facebook} = this.state;
	      // console.log(facebook);
	      if (facebook.accessToken) {
	          let res = await SOCIAL_LOGIN(facebook);
	          if (res)
	              this.handleLogin(res);
	      }
	  };*/

	loginSubmit = async (e) => {
		e.preventDefault();
		this.setState({progress: true})
		let {login} = this.state;
		let {forgetPassword} = this.props;
		if (!forgetPassword) {
			let res = await LOGIN(login);
			if (res) {
				this.setState({progress: false})
				if (res.status === 400) {
					this.setState({
						errorMessage: res.data.message
					})
					this.setState({collapse: true})
				} else {
					this.handleLogin(res);
				}
			}
			console.log('loginres', res);
		} else {
			this.setState({progress: true})
			let res = await FORGET_PASSWORD({
				email: login.email
			});

			if(res){
				this.setState({errorMessage: ''})
				this.setState({successMessage: res.message})
				this.setState({progress: false})
				this.setState({collapse: true})
			}
		}
	};

	handleLogin = (res) => {
		console.log(res, "user");
		localStorage.setItem("profile", JSON.stringify(res));
		localStorage.setItem("accessToken", res.token);
		// this.setState({ fireRedirect: true });
		if (localStorage.getItem("prevURL")) {
			// this.props.history.push(localStorage.getItem('prevURL'));
			window.location = `${localStorage.getItem("prevURL")}`;
		} else {
			this.props.history.push("/");
		}
	};

	componentDidMount() {
		if (localStorage.getItem("accessToken")) this.setState({
			fireRedirect: true
		});
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		if(this.props.forgetPassword !== prevProps.forgetPassword){
			this.setState({
				progress: false,
				errorMessage: '',
				successMessage: '',
				collapse: false
			})
		}
	}

	render() {
		return (
		<form className="UserLogin" onSubmit={this.loginSubmit}>
		
			<div className="input-groups">
			
			

				<div className="form-field-wrap">
					<i className="mdi mdi-account"></i>
					<div className="form-row">
						<div className="col-md-12">
							<TextField label="Email" type="email" name="email" id="loginEmail" required onChange={this.onChange}
								value={this.state.login.email} placeholder="example@email.com" variant="outlined" fullWidth 
								error={this.state.errorMessage}/>
						</div>
					</div>
				</div>

				{!this.props.forgetPassword && (
					<React.Fragment>
						<div className="form-field-wrap">
							<i className="mdi mdi-lock"></i>
							<div className="form-row">
								<div className="col-md-12">
									<TextField label="Password" type="password" name="password" id="loginPassword" required
										error={this.state.errorMessage}
										onChange={this.onChange} value={this.state.login.password} placeholder="Your password"
										variant="outlined" fullWidth />
								</div>
							</div>
						</div>


						<Collapse in={this.state.collapse}>
							{this.state.errorMessage && 
							<Typography className="mb-1 text-center" color="error"> {this.state.errorMessage}</Typography >
							}
							{this.state.successMessage && 
							<Typography className="mb-1 text-center" color="textPrimary"> {this.state.successMessage}</Typography >
							}
						</Collapse>
						<div className="login-button-area">
							{ !this.state.progress ?
							<Button className="loginButton" fullWidth variant="contained" size="large" color="primary" type="submit">
								LOGIN
							</Button>
							: <LinearProgress className="linear-progress-login"/>
							}
						</div>

					</React.Fragment>
				)}

				{this.props.forgetPassword && (
				<>
					<Collapse in={this.state.collapse}>
						{this.state.errorMessage && 
						<Typography className="mb-1 text-center" color="error"> {this.state.errorMessage}</Typography >
						}
						{this.state.successMessage && 
							<Typography className="mb-1 text-center" color="primary"> {this.state.successMessage}</Typography >
						}
					</Collapse>
					<div className="loginButton d-flex mt-xs-28 mb-xs-16">
						{ !this.state.progress ?
						<>
						<Button className="mr-xs-4" fullWidth variant="contained" size="large" color="primary"
							onSubmit={this.loginSubmit} type="submit">
							Continue
						</Button>
						<Button className="ml-xs-4" fullWidth variant="contained" size="large" onClick={()=> {
							this.props.initforgetPassword(false);
							}}
							color="secondary"
							>
							{" "}
							Go Back{" "}
						</Button>
						</>
						: <LinearProgress className="linear-progress-login"/>
						}
					</div>
				</>
				)}
			</div>

			{/* {this.state.fireRedirect &&
			(localStorage.getItem("prevURL") ? (
			<Redirect to={localStorage.getItem("prevURL")} />
			) : (
			<Redirect to="/" />
			))} */}
		</form>
		);
	}
}

UserLogin.propTypes = {};

export default withRouter(UserLogin);
