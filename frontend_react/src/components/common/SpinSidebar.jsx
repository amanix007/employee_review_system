import React, { Component } from "react";
import { SwipeableDrawer } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { logEventRecord } from "../../logger/log";



const styles = {

    paper: {
        backgroundColor: "transparent!important",
        boxShadow: "none",
        overFlow: "visible!important"
    }
};

class SpinSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            open: false,
        };


    }

    drawerState = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    toogleDrawer = () => {
        this.setState({
            left: !this.state.left
        });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
              

                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.drawerState('left', false)}
                    onOpen={this.drawerState('left', true)}
                    classes={{
                        paper: classes.paper
                    }}
                // style={{
                //     backgroundColor: "transparent!important",
                //     boxShadow: "none",
                //     overFlow: "visible!important"
                // }}

                >
                    <div className="spinLocation-cont">

                        <div
                            // tabIndex={0}
                            // role="button"
                            // onClick={this.drawerState('left', false)}
                            // onKeyDown={this.drawerState('left', false)}
                            className="spinLocation"

                        >

                            <div className="spinButton" onClick={this.toogleDrawer}>
                                <img src="/assets/images/wheelRGB-large.png" alt="" />

                            </div>
                            <div className="img-wrap">
                                <img src="/assets/images/wheelRGB-large.png" alt="" />
                            </div>
                            <div className="right-side">
                                <i onClick={this.drawerState('left', false)} className="mdi mdi-close"></i>
                                <h1>Spin To Win</h1>
                                <p>More spin more Trip Coin</p>
                                <Button variant="outlined" size="large" onClick={() => { 
                                    logEventRecord("Click_on_Spin2Win", null);
                                    window.location = '/spin.html' }}>
                                    Spin Now
                            </Button>
                            </div>
                        </div>
                    </div>
                </SwipeableDrawer>

            </React.Fragment>
        );
    }
}


export default withStyles(styles)(SpinSidebar);