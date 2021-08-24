import React, { Component } from 'react';

class ModuleSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lowest: false
        }
    }

    render() {
        return (
            <div className="ModuleSort">
                <div className="text">
                    <p>Explore All Trips</p>
                    <small>*Price includes VAT & Tax</small>
                </div>
                <div className="sort">
                    <span>Lowest Price</span>
                    <i className="mdi mdi-chevron-down"></i>
                </div>
            </div>
        );
    }
}

export default ModuleSort;