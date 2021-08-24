import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./CardSlider.css";


export default function CardSlider({ data, type }) {
  const [visible, setVisible] = useState(true)
  
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 7000,
    fade: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          autoplay: false,
          speed: 300,
        }
      }
    ]
  };
  
  const closeItem = ()=>{
    setVisible(false)
  }
  return (
    <React.Fragment>
      {data && visible &&
        <div className={"card-slider position-relative" + type}>
        { type === "closeAble" && <span className="mdi mdi-close close-btn" onClick={closeItem}></span> } 
          <Slider {...settings}>
            {data.map((item, i) => (
              <div className="slider-item" key={i}>
                <a href={item.link} target="_blank" className="item-inner d-flex align-items-center black-color">
                  <div className="image flex-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info pl-3 pr-5">
                    { type === "closeAble" ?
                      <>
                      <h3 className="title fw-500">
                          {item.title}
                      </h3>
                      <div className="fz16 black-color">{item.subtitle}</div>
                      </>
                      :
                      <>
                       <div className="fz16 black-color">{item.subtitle}</div>
                        <h3 className="title fw-500">
                          {item.title}
                        </h3>
                      </>
                    }
                  </div>
                  </a>
              </div>
            ))}
          </Slider>
        </div>
      }
    </React.Fragment>
  );
}
