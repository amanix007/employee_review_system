import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Modal from '@material-ui/core/Modal'
import ShareOptions from './ShareOptions';

class BookingState extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let { type } = this.props;


        return (
            <section className="BookingState">
                <header className="payment-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 offset-md-3">
                                <ul>
                                    <li className="active">
                                        <span>1</span>
                                        <p>Guest Information</p>
                                    </li>
                                    <li className="active">
                                        <span>2</span>
                                        <p>Payment</p>
                                    </li>
                                    <li className="active">
                                        <span>3</span>
                                        <p>Confirmation</p>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-9 offset-md-3 text-container">
                            <div className="icon">
                                <div className={type === 'success' ? 'success icon-cont' : 'fail icon-cont'}>
                                    {type === 'success' && <i className="mdi mdi-check success"></i>}
                                    {type === 'failed' && <i className="mdi mdi-close fail"></i>}
                                </div>
                            </div>


                            <div className="text">
                                {
                                    (type === 'success') &&
                                    <React.Fragment>
                                        <h3>Booking Succeed </h3>
                                        <p>Congratulations. Thank you for the booking</p>
                                    </React.Fragment>
                                }


                                {
                                    (type === 'failed') &&
                                    <React.Fragment>
                                        <h3>Booking Declined </h3>
                                        <p>Don’t worry. Please enter all your valid data and try again.</p>
                                    </React.Fragment>
                                }


                                <div className="tripCoin d-none">
                                    <ul>
                                        <li>
                                            <img src="./assets/images/icons/tripCoin.png" alt="" />
                                            <div>
                                                <p>Redeem TripCoins</p>
                                                <strong>3500</strong>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="./assets/images/icons/tripCoinShare.png" alt="" />
                                            <div className="wrap-cont">
                                                <div className="wrap">
                                                    <p>Share trip with your friends</p>
                                                    <strong>Get More 50 TripCoin </strong>
                                                </div>
                                                <Button color="primary" variant="outlined" size="small" margin="normal" onClick={this.handleOpen}>Share</Button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <Button color="primary" variant="contained" size="large" margin="normal" onClick={() => this.props.history.push('/')}>Home</Button>

                            </div>
                        </div>
                    </div>
                </div>


                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                   <div className="modal_content_share">
                        <i className="mdi mdi-close" onClick={this.handleClose}></i>
                        <h4 className="text-center">Share With Friends</h4>
                        <ShareOptions link={"https://sharetrip.net/blog/things-to-do-in-maldives/"} />
                    </div>
                </Modal>

            </section >
        );
    }
}

export default withRouter(BookingState);
