import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {Element} from 'react-scroll';
import MapMarker from './MapMarker';
import MapHotel from './MapHotel';
import "./MapPage.css";

export class MapPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bunchOfHotel: props.data,
            searchCode: props.searchCode,
            // mapActiveHotelID: props.mapActiveHotelID,
            // mapCenter: [-8.4559965, 114.791356],
            mapCenter: [props.data[0].center.lat, props.data[0].center.lon]
        }


    }

    componentDidMount() {

    }


    componentDidUpdate(prevProps, prevState) {
        // console.log('MapPage', prevProps, prevState);


    }

    // MouseLeave = () => {
    //     this.setState({
    //         mapActiveHotelID: null
    //     })
    // }


    setMapActiveHotel = (mapActiveHotelID) => {
        // this.setState({ mapActiveHotelID });
        this.props.setMapActiveHotelID(mapActiveHotelID);

    }


    // Return map bounds based on list of places
    getMapBounds = (map, maps, places) => {
        const bounds = new maps.LatLngBounds();

        places.forEach((place) => {
            bounds.extend(new maps.LatLng(
                place.center.lat,
                place.center.lon,
            ));
        });
        return bounds;
    };

    // Re-center map when resizing the window
    bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
            maps.event.addDomListener(window, 'resize', () => {
                map.fitBounds(bounds);
            });
        });
    };

    // Fit map to its bounds after the api is loaded
    apiIsLoaded = (map, maps, places) => {
        // Get bounds by our places
        //  const bounds = this.getMapBounds(map, maps, places);
        // Fit map to bounds
        //  map.fitBounds(bounds);
        // Bind the resize listener
        // this.bindResizeListener(map, maps, bounds);

    };


    render() {
        let {bunchOfHotel, mapActiveHotelID, searchCode} = this.state;

        return (
            <section className="hotel-price-map">
                <div className="hotel-price-map-container">

                    <Element className="aside element" id="containerElement">
                        {
                            bunchOfHotel.map((data, key) => (
                                    <MapHotel
                                        mapActiveHotelID={this.props.mapActiveHotelID}
                                        data={data}
                                        searchCode={searchCode}
                                        key={`${key}-${searchCode}`}
                                        currency={this.props.currency}
                                        onMouseEnter={() => this.props.setMapActiveHotelID(data.id)}
                                        // onMouseLeave={() => this.MouseLeave()}
                                        //onClick={(data) =>this.viewDetails(data.id)}
                                    />
                                )
                            )
                        }
                    </Element>

                    <div className="main-map"
                        // style={{ height: 'calc(100vh - 200px)', width: '100%' }}
                    >
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                // key: "AIzaSyCYc3U2zpF5V8DiAsY9PSSq0SF_CeRbdkA",
                                key: "AIzaSyAsHxbL3oRZbz4dJ5acw2WWRf8GlZcL0Lg",
                                libraries: 'places'
                            }}
                            defaultZoom={12}
                            defaultCenter={this.state.mapCenter}
                            scrollwheel={true}
                            options={{
                                scrollwheel: true,
                                language: 'en',
                                mapTypeId: 'roadmap',
                            }}
                            ref={(ref) => {
                                this.map = ref;
                            }}
                            yesIWantToUseGoogleMapApiInternals
                            /* onGoogleApiLoaded={({map, maps}) => {
                                 this.apiIsLoaded(map, maps, bunchOfHotel)
                             }
                             }*/
                        >

                            {bunchOfHotel.map((data, key) => {
                                return (<MapMarker
                                    lat={data.center.lat} lng={data.center.lon}
                                    key={`map${key}-${searchCode}`}
                                    id={data.id}
                                    mapActiveHotelID={this.props.mapActiveHotelID}
                                    lowestRate={data.lowestRate}
                                    setMapActiveHotelID={() => this.props.setMapActiveHotelID(data.id)}
                                />);
                            })}

                        </GoogleMapReact>
                    </div>
                </div>
            </section>
        );
    }
}


export default MapPage;