import React, { Component } from 'react';
import Slider from 'react-slick';

class PopularDestinationComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let mobile = window.innerWidth < 768;

        let settings2 = {
            slidesToShow: 3,
            dots: false,
            arrows: false,
            autoplay: true,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };

        let staticDestination = (
            <div className="destinations">
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/china.png)" }}><span>China</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/dubai.png)" }}><span>dubai</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/malaysia.png)" }}><span>malaysia</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/singapore.png)" }}><span>singapore</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/thailand.png)" }}><span>thailand</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/uk.png)" }}><span>uk</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/vietnam.png)" }}><span>vietnam</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/india.png)" }}><span>india</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/australia.png)" }}><span>australia</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/turkey.png)" }}><span>turkey</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/russia.png)" }}><span>russia</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/spain.png)" }}><span>span</span></div>
            </div>
        );


        let SliderDestination = (
            <Slider {...settings2} className="destinations slider">
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/china.png)" }}><span>China</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/dubai.png)" }}><span>dubai</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/malaysia.png)" }}><span>malaysia</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/singapore.png)" }}><span>singapore</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/thailand.png)" }}><span>thailand</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/uk.png)" }}><span>uk</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/vietnam.png)" }}><span>vietnam</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/india.png)" }}><span>india</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/australia.png)" }}><span>australia</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/turkey.png)" }}><span>turkey</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/russia.png)" }}><span>russia</span></div>
                <div className="dest" style={{ backgroundImage: "url(./assets/images/country/spain.png)" }}><span>span</span></div>
            </Slider>
        );

        return (
            <div className="popular-destinations">
                <h2 className="mb-xs-25 text-center color-w">Popular Destinations</h2>
                {mobile ? SliderDestination : staticDestination}
                <div></div>
            </div>
        );
    }
}

export default PopularDestinationComponent;