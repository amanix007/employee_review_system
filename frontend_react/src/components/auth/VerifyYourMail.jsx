import React, {Component} from 'react';
// import {VERIFY_YOUR_MAIL} from "../../Request/OthersApi";


class VerifyYourMail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            verified: false,
            loading: true
        }
    }


    async componentDidMount() {

        localStorage.clear();
        sessionStorage.clear();

        let urlParams = new URLSearchParams(this.props.location.search);
        let token = null;
        if (urlParams.has('token')) {
            token = urlParams.get('token');
        }
        // if (token) {
        //     let res = await VERIFY_YOUR_MAIL({token});
        //     if (res) {
        //         console.log(res);
        //         this.setState({verified: !this.state.verified})
        //     } else {
        //         console.log("result not found");
        //     }
        //     this.setState({loading: !this.state.loading})
        // }
    }


    render() {
        return (

            (!this.state.loading) &&

            <div className="container">
                {
                    (this.state.verified) &&

                    <div className="card flex-row flex-wrap" style={{border:"none", marginTop:"20%", marginBottom:"20%"}}>
                        <div className="card-block border-0" style={{backgroundColor:"none"}}>
                            <img className="card-img-left" src="/assets/images/user-verified.png" alt="Card image cap"/>
                        </div>
                        <div className="card-block px-2 my-2 mx-5">
                            <h4 className="card-title">Your Account is Verified</h4>
                            <p>Thank you for staying with us. Enjoy our services</p>
                            <a href="/" className="btn btn-primary">Explore Services</a>
                        </div>
                        <div className="w-100"></div>
                    </div>

                    }
                    {
                        (!this.state.verified) &&
                        <div className="card flex-row flex-wrap" style={{border:"none", marginTop:"20%", marginBottom:"20%"}}>
                            <div className="card-block border-0" style={{backgroundColor:"none"}}>
                               {/* <img className="card-img-left" src="/assets/images/user-verified.png" alt="Card image cap"/>*/}
                            </div>
                            <div className="card-block px-2 my-2 mx-5">
                                <h4 className="card-title">The URL you followed was invalid!</h4>
                                <p>Please contact with us..</p>
                            </div>
                            <div className="w-100"></div>
                        </div>
                    }

                    </div>

                    )
                    ;
                }
                }

                VerifyYourMail.propTypes = {};

                export default VerifyYourMail;