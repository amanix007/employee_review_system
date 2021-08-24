import React, { Component } from "react";
import "./Nomination.css";
import { Button } from "@material-ui/core";

export default class Nomination extends Component {
  render() {
    return (
      <section className="nomination-section">
        <div className="container">
          <div className="section-title text-center st-animate">
            <h2 className="mt-1 fw-600">Nominated for World Travel Awards 2020</h2>
          </div>
          <div className="section-content text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 col-sm-4 mb-5 d-flex justify-content-center">
                <div className="item">
                  <div className="image">
                    <img src="https://utility-assets.s3.amazonaws.com/media/assets/nom-1.png" alt="" />
                  </div>
                  <div className="button-group d-flex justify-content-center">
                    <Button href="https://www.worldtravelawards.com/vote-for-sharetrip-bangladeshs-leading-travel-agency-2020" target="_blank" variant="contained" color="primary" size="large">
                      Vote Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-4 mb-5 d-flex justify-content-center">
                <div className="item">
                  <div className="image">
                    <img src="https://utility-assets.s3.amazonaws.com/media/assets/nom-2.png" alt="" />
                  </div>
                  <div className="button-group d-flex justify-content-center">
                    <Button href="https://www.worldtravelawards.com/vote-for-sharetrip-bangladeshs-leading-tour-operator-2020" target="_blank" variant="contained" color="primary" size="large">
                      Vote Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-4 d-flex justify-content-center">
                <div className="item">
                  <div className="image">
                    <img src="https://utility-assets.s3.amazonaws.com/media/assets/nom-3.png" alt="" />
                  </div>
                  <div className="button-group d-flex justify-content-center">
                    <Button href="https://www.worldtravelawards.com/vote-for-sharetrip-bangladeshs-leading-online-travel-agency-2020" target="_blank" variant="contained" color="primary" size="large">
                      Vote Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
