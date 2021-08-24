import React from 'react';
import './ReviewModule.css';

export default function ReviewModule(props) {
    return (
        <div className="review-module">
            <div className="destination d-flex align-items-center justify-content-between">
                <div className="to">Dhaka</div>
                <div className="line-icon">
                    <i className="mdi mdi-airplane"></i>
                </div>
                <div className="from">Dubai</div>
            </div>
            <h3 className="title fw-500">Dhaka - Dubai International Airport ( DHK - DXB )</h3>

            <div className="row d-flex align-items-center">
                <div className="col-md-8">
                    <h4 className="author mb-1 fw-400">kashfur</h4>
                    <div
                        className="flight-info mt-8 d-flex flex-column flex-sm-row align-items-sm-center fz-12 dark-gray-color">
                        <span>Date: 2020-02-22</span>
                        <span>City: dhaka</span>
                        <span>Age: 51-70</span>
                        <span>Class: Economy</span>
                    </div>
                    <p className="mt-12 fz14 fw-300">
                        Flight attendants were excellent friendly and helpful.... food grand lots of
                        water and juices offered....flight smooth and landed on time....no complaints
                    </p>
                </div>
                <div
                    className="col-md-4 d-flex flex-column align-items-md-end justify-content-center text-md-right">
                    <p className="mb-0 mr-1 fw-600">5/5</p>
                    <div className="ratting fz22 d-flex align-items-center">
                        <i className="mdi mdi-star"></i>
                        <i className="mdi mdi-star"></i>
                        <i className="mdi mdi-star"></i>
                        <i className="mdi mdi-star"></i>
                        <i className="mdi mdi-star"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
