import React from 'react';
import './PlaceModule.css';
import { Link } from 'react-router-dom';

export default function PlaceModule(props) {
    let item=props.data;
    return (
        <div className={"" + props.type == 'vertical' ? 'place-module vertical' : 'place-module '}>
            <Link to="/#" className="d-flex align-items-center">
                <div className="image flex-img">
                    <img src={ item.image } alt="" />
                </div>
                <div className="info">
                        <h4 className="title fz14 fw-500">{ item.title }</h4>
                        <p className="loacation fz10 d-flex align-items-center black-color mt-1 mb-0">
                            <i className="mdi mdi-map-marker mr-1"></i>
                            { item.location }
                        </p>
                </div>
            </Link>
        </div>
    )
}
