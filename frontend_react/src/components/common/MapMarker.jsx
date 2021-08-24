import React, { Component } from 'react';
import { Link } from 'react-scroll'

class MapMarker extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }
    render() {

        return (
            <div className="MapMarker">
                <Link to={this.props.id}
                    // spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-180}
                    containerId="containerElement">
                    <div
                        className={this.props.mapActiveHotelID === this.props.id ? "active" : ""}
                        onClick={() => this.props.setMapActiveHotelID(this.props.id)}
                        // onMouseEnter={() => this.props.setMapActiveHotelID(this.props.id)}
                        // onMouseLeave={() => this.props.setMapActiveHotelID(null)}
                    >
                    {`${this.props.lowestRate} ৳`}

                    </div>
                    <span className="pulse"></span>
                </Link>
            </div>
        );
    }
}

export default MapMarker;