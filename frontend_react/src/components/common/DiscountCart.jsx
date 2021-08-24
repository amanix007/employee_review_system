import React from 'react';
import NumberFormat from "react-number-format";

function DiscountCart(props) {
    return (
        <div className="cart-discount">
            <h5>{props.discount}% Discount</h5>
            {
                props.types !== "Hotel"
                && <small className="op8">{props.discount}% Discount for Selected Banks only</small>
            }
            <p className="mt-xs-20 mb-xs-4 d-flex justify-content-between align-items-center">
                <span>Total Payable</span>
                <span className="fw-600">
                    <NumberFormat thousandSeparator={true}
                        decimalScale={2}
                        displayType={'text'}
                        prefix={props.currency + ' '}
                        value={props.total} />
                </span>
            </p>
        </div>
    )
}


export default DiscountCart;