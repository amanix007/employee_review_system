import React, {Component} from "react";
import PropTypes from "prop-types";
import {Form, FormGroup, Input, Label} from "reactstrap";

class PayWithComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gateWay: "VISA/MASTER",
            cardPrefix: "",
        };
    }

    handleChange = event => {
        this.setState({gateWay: event.target.value}, () => {
            this.props.getGateWay(this.state.gateWay, this.state.cardPrefix);
        });
    };



    render() {
        return (
            <Form action="#">
                <FormGroup className="form-check form-check-inline">
                    <Input
                        onChange={this.handleChange}
                        checked={this.state.gateWay === "AMEX"}
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="AMEX"
                    />

                    <Label className="form-check-label" htmlFor="inlineRadio1">
                        <img
                            src="/assets/images/icons/american_express_icon_1x.png"
                            alt="Amex"
                            style={{marginTop: "-5px"}}
                        />
                    </Label>
                </FormGroup>
                <FormGroup className="form-check form-check-inline">
                    <Input
                        onChange={this.handleChange}
                        checked={this.state.gateWay === "VISA/MASTER"}
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="VISA/MASTER"
                    />

                    <Label className="form-check-label" htmlFor="inlineRadio2">
                        <img
                            src="/assets/images/icons/visa_icon_1x.png"
                            alt="Visa"
                            style={{marginTop: "-5px"}}
                        />
                        <img
                            src="/assets/images/icons/mastercard_icon_1x.png"
                            alt="Master"
                            style={{marginTop: "-5px"}}
                        />
                    </Label>
                </FormGroup>
            </Form>
        );
    }
}

PayWithComponent.propTypes = {};

export default PayWithComponent;
