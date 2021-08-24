import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { Button, Modal } from '@material-ui/core';
import ShareOptions from './ShareOptions';

export default class DetailsTripCoinModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let { points, source, link } = this.props;
        let { earning, shared } = points;
        return (
            <div className="Module-TripCoin">
                {
                    (source !== 'Hotel') &&

                    <React.Fragment>
                        <div className="win-redeem">
                            <div className="block">
                                <img src="./assets/images/icons/tripCoin.png" alt="" />
                                <div className="text">
                                    <p>Win TripCoin (max)</p>
                                    <strong>
                                        <NumberFormat thousandSeparator={true}
                                            displayType={'text'}
                                            value={earning} />
                                    </strong>
                                </div>
                            </div>
                            <span>or</span>
                            <div className="block">

                                <div className="text">
                                    <p>Redeem TripCoin (min)</p>
                                    <strong>
                                        <NumberFormat thousandSeparator={true}
                                            displayType={'text'}
                                            value={earning} />
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="./assets/images/icons/tripCoinShare.png" alt="" />

                            <div className="text">
                                <p>Share to earn more Trip Coins</p>
                                <strong>Get {shared} More TripCoin </strong>
                                <p className="mb-xs-0"><Button color="primary" variant="outlined" size="small" margin="normal" onClick={this.handleOpen}>Share</Button></p>


                                <Modal
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                >
                                    <div className="modal_content_share">
                                        <i className="mdi mdi-close" onClick={this.handleClose}></i>
                                        <h4 className="text-center">Share With Friends</h4>
                                        <ShareOptions link={link} source={source} />
                                    </div>
                                </Modal>


                            </div>
                        </div>
                    </React.Fragment>

                }

                {(source === 'Hotel') &&
                    <div className="block">
                        <img src="./assets/images/icons/tripCoinShare.png" alt="" />

                        <div className="text d-flex justify-content-between align-items-center">
                            <div>
                                <p>Share booking with your friends</p>
                                <strong>Get {shared} More TripCoin </strong>
                            </div>
                            <div>
                                <Button color="primary"
                                    variant="outlined"
                                    size="small"
                                    margin="normal"
                                    onClick={this.handleOpen}>Share</Button>
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
                                    <ShareOptions link={link} source={source} />
                                </div>
                            </Modal>


                        </div>
                    </div>
                }

            </div>
        )
    }
}
