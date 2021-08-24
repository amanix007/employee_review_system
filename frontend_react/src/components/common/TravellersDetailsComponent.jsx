import React, { Component } from 'react';
import Traveller from './Traveller';

class TravellersDetailsComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { travellers } = this.props;

        return (
            <div className="TravellersDetailsComponent">
                {
                    travellers.map((traveller, i) => <Traveller 
                    data={traveller} key={'Traveller' + i} index={i} />)
                }
            </div>
        );
    }
}

export default TravellersDetailsComponent;