import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./PromotionModal.css";

import { GET_CONTENT } from "../../Request/OthersApi";
import { logFirebase } from "../../logger/firebase";
import { stubTrue } from "lodash";
class PromotionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      SliderList: [],
      sliderActive: false,
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("firstvisit") === "true") {
      this.setState({
        modal: false,
      });
    } else {
      this.getSliderLists();
    }
    sessionStorage.setItem("firstvisit", "true");
  }

  getSliderLists = async () => {
    let campaign_slider = await GET_CONTENT("https://sharetrip-96054.firebaseio.com/website/data/campaign_slider.json");

    if (campaign_slider) {
      this.setState(
        { sliderActive: true }, () => {
          if (this.state.sliderActive) {
            let { bannner } = campaign_slider;

            let showModal = false;

            if( bannner.some((element) => element.active === true )){
              showModal = true;
            }else {
              showModal = false;
            }
            
            this.setState({ modal: showModal, SliderList: bannner });
          }
        }
      );
    }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
      autoplay: true,
    };

    let { SliderList, sliderActive } = this.state;
    if (!sliderActive) {
      return "";
    } else {
      return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="promotionalModal">
          <ModalBody>
            <span className="closebtn" onClick={this.toggle}>
              <img src="./assets/images/icons/close_white.png" alt="Promotional close" />{" "}
            </span>

            <Slider {...settings} className="campaign-slider">
              {SliderList.map((slide, i) => {

                return (
                    slide.active && 
                    <>
                      <div className="slide" key={slide.name + i}>
                      <div className="content">
                        <a
                        // className="flex-img "
                          href={slide.link}
                          onClick={(e) => {
                            logFirebase(slide.link.substring(slide.link.lastIndexOf("/" + 1)), {});
                          }}
                        >
                          <img src={slide.url} alt="" />
                        </a>
                      </div>
                    </div>
                    </>
                );
              })}
            </Slider>
          </ModalBody>
        </Modal>
      );
    }
  }
}

export default PromotionModal;
