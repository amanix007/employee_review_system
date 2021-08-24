import React from 'react';
import { Element } from 'react-scroll';
import Button from '@material-ui/core/Button';
import NumberFormat from "react-number-format";

const MapHotel = (props) => {
    let { currency, searchCode } = props;
    let { starRating, id, thumbnail, name, discount, basePrice, lowestRate } = props.data;
    let HotelStar = () => {
        let HotelStar = [];
        for (let i = 0; i < starRating; i++) {
            HotelStar.push(<i className="mdi mdi-star" key={i}></i>);
        }
        return HotelStar;
    };



    return (
        <Element name={id}
            onClick={() => window.open('/hotel-details?hotelId=' + id + '&searchCode=' + searchCode, '_blank')}
            onMouseEnter={() => props.onMouseEnter()}
            // onMouseLeave={() => props.onMouseLeave()} 
            className="MapHotel"
        >
            <div className={id === props.mapActiveHotelID ? "map-hotel-block active" : "map-hotel-block"}>
                <div className="left"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                // style={{ backgroundImage: `url(${'https://picsum.photos/200/300'})` }}

                >

                </div>
                <div className="right">
                    <h6> {name}</h6>
                    {/* <h6> {id}</h6> */}
                    <div className="HotelStar">
                        <HotelStar />
                    </div>
                    <div className="price-block">
                        {/* <span> {currency} {lowestRate} </span> */}
                        <NumberFormat thousandSeparator={true}
                                      displayType={'text'}
                                      prefix={currency + ' '}
                                      value={lowestRate}/>
                        <small> Per Night</small>
                    </div>
                    <Button size="small" variant="contained" color="primary" onClick={() => window.open('/hotel-details?hotelId=' + id + '&searchCode=' + searchCode, '_blank')} > View Details </Button>


                </div>
            </div>
        </Element>
    )
}
export default MapHotel;