import React, { Component } from 'react';

class CancelationPolicyComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { airFareRules } = this.props;


        let rulesList = [];
        airFareRules.map((segment, index) => {

            segment.policy.rules.map((item, i) => {
                rulesList.push(
                    <div key={`cpc` + i}>
                        <h5>{item.type}</h5>
                        <p>{item.text}</p>
                    </div>
                )

            }
            )

        })

        return (
            <div className="CancelationPolicyComponent">


                {rulesList}

            </div>
        );
    }
}

export default CancelationPolicyComponent;