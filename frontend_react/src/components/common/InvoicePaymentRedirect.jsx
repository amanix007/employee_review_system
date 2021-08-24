import React, { Component } from "react";
import { GET_INVOICE_URL } from "../../Request/OthersApi";


export default class InvoicePaymentRedirect extends Component {

    async componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');

        console.log('key:', key);

        let res = await GET_INVOICE_URL(key);
        if (res) {
            window.location = res.url;
        } else {
            window.location = '/';

        }


    }
    render() {
        return (
            <section className="static-page ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h1>Redirecting...</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
