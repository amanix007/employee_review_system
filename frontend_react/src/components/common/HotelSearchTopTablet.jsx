import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import moment from "moment";
import { inject, observer } from "mobx-react";
import HotelFilterComponent from '../pages/hotel/HotelPageComponent/HotelFilterComponent';
import HotelSorting from '../pages/hotel/HotelPageComponent/HotelSorting';
import HotelSearchBar from '../pages/hotel/HotelPageComponent/HotelSearchBar';
import './HotelSearchTopTablet.css';
class HotelSearchTopTablet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
        };


    }

    toggle1 = () => {
        this.setState({
            modal1: !this.state.modal1
        });
    }

    toggle2 = () => {
        this.setState({
            modal2: !this.state.modal2
        });
    }

    toggle3 = () => {
        this.setState({
            modal3: !this.state.modal3
        });
    }

    toggle4 = () => {
        this.setState({
            modal4: !this.state.modal4
        });
    }


    render() {
        let { checkInDate, checkOutDate, cityName } = this.props.hotelSearchStore.searchObject;
        let { adult, child, roomCount } = this.props.hotelSearchStore.getTotalAdultChild;
        return (
            <div className="HotelSearchTopTablet">
                <div className="tab-HotelSearchBar" onClick={this.toggle1}>
                    <div className="text">
                        <p>{cityName}</p>
                        <p><span>
                            {moment(checkInDate).format('D MMM YY')} - {moment(checkOutDate).format('D MMM YY')},
                        {/* {checkInDate.format('D MMM YY')} - {checkOutDate.format('D MMM YY')}, */}

                        </span> <span>{adult} Adt, {child} Chd - {roomCount} Room</span></p>
                    </div>
                    <div className="search"><i className="mdi mdi-magnify"></i></div>
                </div>
                <ul className="list">
                    <li onClick={this.props.onMapClick}><i className="mdi mdi-map"></i> Map</li>
                    <li onClick={this.toggle3}><i className="mdi mdi-filter-variant"></i> Filter</li>
                    <li onClick={this.toggle4}><i className="mdi mdi-sort-descending"></i> Sort</li>
                </ul>




                <Modal isOpen={this.state.modal1} toggle={this.toggle1} className="hotel-modal modal-HotelSearchBar" >
                    <div onClick={this.toggle1} className="closeButton"><i className="mdi mdi-close"></i></div>
                    <HotelSearchBar collapse={this.state.modal1} />
                </Modal>

                <Modal isOpen={this.state.modal3} toggle={this.toggle3} className="hotel-modal modal-HotelFilterComponent" >
                    <div className="header">
                        <div className="left"><i className="mdi mdi-tune"></i>Filter</div>
                        <div className="right" onClick={this.toggle3}><i className="mdi mdi-close"></i></div>
                    </div>
                    <HotelFilterComponent
                        filter={this.props.filter}
                        priceRange={this.props.priceRange}
                        districtName={this.props.districtName}
                        distance={this.props.distance}
                        guestRating={this.props.guestRating}
                        filters={this.props.filters}


                    />
                    <div class="btn btn-primary float-right" onClick={this.toggle3}>Filter</div>
                </Modal>

                <Modal isOpen={this.state.modal4} toggle={this.toggle4} className="hotel-modal modal-HotelSorting" >
                    <div className="header">
                        <div className="left"><i className="mdi mdi-sort-descending"></i>Sort</div>
                        <div className="right" onClick={this.toggle4}><i className="mdi mdi-close"></i></div>
                    </div>
                    <HotelSorting filter={this.props.filter} />
                </Modal>
            </div>
        );
    }
}


export default inject("hotelSearchStore")(observer(HotelSearchTopTablet));