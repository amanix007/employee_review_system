import React from 'react';
import NumberFormat from 'react-number-format';
import './CardList.css';

function CardList(props) {

    return (
        // <div className="card-list-item" onClick={props.goToSearch}>
        <div className="card-list-item">
            <span className="icon"><img src={props.logo} alt=""/></span>
            <h5 className="title fw-400">{props.name}</h5>
            {props.rate &&
                <p>
                   <strong><NumberFormat thousandSeparator={true} displayType={"text"} prefix={"BDT" + " "} value={props.rate} /></strong>  
                    { props.unit && <small> / night</small> }
                </p>
            }
            <div className="arrow">
                <i className="mdi mdi-chevron-right "></i>
            </div>
        </div>
    )
}
export default CardList;