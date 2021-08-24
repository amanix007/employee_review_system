import React from 'react';
import { inject, observer } from 'mobx-react';
import _ from "lodash";
import moment from "moment";
import './citySnippet.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function CitySnippet(props){
    const {
        visaCountryCode,
        countryName,
        currency,
        localTime,
        photos,
        lowestPrice,
        bookingCurrency,
        discountType,
        discount,
        visaRequirement,
        visaPrepMinDays,
        points
     } = props.item;

    let latestPrice = 0;
    let discountAmount = 0;

    if (!_.isEmpty(discount)) {

        if (discountType === "Flat") {
            discountAmount = discount;
        } else if ((discountType = "Percentage")) {
            discountAmount = Math.round((lowestPrice / 100) * discount);
        }

        latestPrice = lowestPrice - discountAmount;
    } else {
        latestPrice = lowestPrice;
    }

    function setSearchData(){
        props.visaSearchStore.updateStore({
            countryValue: props.item,
            entryDate: moment().add(props.item.visaPrepMinDays, "days").format("YYYY-MM-DD"),
            exitDate: moment().add(props.item.visaPrepMinDays + 30, "days").format("YYYY-MM-DD"),
            minStartDate: moment().add(props.item.visaPrepMinDays, "days"),
        })

        scroller.scrollTo('visa_search', {
            offset: -200,
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }

    return(
        <div className="country-item" onClick={setSearchData}>

            <div className="image-area flex-img radius-8 mb-3">
                    <img src={photos} alt={ countryName } />
            </div>

            <h6 className="title mb-1 ">{ countryName }</h6>

            <div className="visa fz12 d-flex align-items-center justify-content-between mb-1">
                <span className="">{visaRequirement}</span>
                <div className="items d-flex align-items-center">
                    <div className="d-flex align-items-center mr-3">
                        <img src="/assets/images/icons/new/currency-mono.svg" className="mr-2" alt="" /> 
                        { currency }
                    </div>
    
                    <div className="d-flex align-items-center">
                        <img src="/assets/images/icons/new/clock.svg" className="mr-2" alt="" /> 
                        { localTime }
                    </div>
                </div>
            </div>
            
            <div className="costs d-flex justify-content-between flex-wrap">

                <div className="fz14 fw-500 mb-2">
                    <span className="line-through mr-2 fw-500">
                        {bookingCurrency} { lowestPrice }
                    </span>
                    BDT { latestPrice }/<span className="fz12 fw-400">person</span>
                </div>    
            </div>
            <div className="fz14 d-flex align-items-center fz14 fw-500 mb-1">
                <img src="/assets/images/icons/new/currency.svg" className="icon mr-2 mt--1" alt="" />
                <span>{ points.earning }</span>
            </div>
            
        </div>
            
    )
}

export default inject("visaSearchStore")(observer(CitySnippet));