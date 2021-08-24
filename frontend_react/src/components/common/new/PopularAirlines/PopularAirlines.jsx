import React from 'react';
import CardList from '../CardList/CardList';
import './PopularAirlines';

export default function PopularAirlines() {
    let column = 4;
    let listContent = [
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-1.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-2.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-1.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-3.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-4.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-5.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-6.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-7.svg" },
        { name: "Thai Lion Air", url: "#", icon: "assets/images/icons/new/air/icon-8.svg" },
     ]
    return (
        <section className="list-section section-padding light-bg">
            <div className="container">
                <div className="section-title mb-4">
                    <h2 className="fw-500">Search for other Top Airlines</h2>
                </div>
                <div className="section-content">
                    <div className="row">

                        {listContent.map((item, index) =>
                        <div className="col-md-4" key={index}>
                            <CardList item={ item } />
                        </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}
