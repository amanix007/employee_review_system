import React, { Component } from "react";
import "./Awards.css";

export default class Awards extends Component {
  render() {
    return (
      <section className="award-section">
        <div className="container">
          <div className="section-title text-center">
            <div className="st-animate">
              <h5 className="fw-400">Leading Online Travel Agency</h5>
            </div>
            <div className="st-animate">
              <h2 className="mt-1 fw-600">Winning Multiple World Travel Awards</h2>
            </div>
          </div>
          <div className="section-content text-center">
            <div className="d-flex justify-content-center">
             
                <div className="image">
                  <img src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/bangladeshs-leading-travel-agency-2020.png" alt="" />
                </div>
                <div className="image">
                  <img src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/bangladeshs-leading-online-travel-agency-2020.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
