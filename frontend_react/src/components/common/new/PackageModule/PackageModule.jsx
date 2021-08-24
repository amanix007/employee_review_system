import React from 'react';
import "./PackageModule.css";
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default function PackageModule(props) {
    let item = props.item;
    let id = props.id;
    return (
        <div className={"package-module " + ( id === 0 ? "large" : '' )} onClick={props.onClick}>

            <div className="image-area">
                <div className="flex-img w-100">
                    <img src={item.image} alt={item.cityName} />
                </div>
            </div>

            <div className="info">
                <div className="packages d-flex align-items-center">
                    <img src="assets/images/icons/new/package.svg" alt="" className="icon mr-2" />
                    <p>{item.count} Packages</p>
                </div>

                <h5 className="fw-500 title">{item.cityName}</h5>

                <div className="amount mr-sm-2">
                    <p> 
                        <span>Starts From </span> 
                        {/* <strong>BDT {item.minPrice}</strong> */}
                        <strong>
                            <NumberFormat thousandSeparator={true} displayType={"text"} prefix={item.currency + " "} value={item.minPrice} />
                        </strong>
                    </p>
                </div>

            </div>
        </div>
    )
}
