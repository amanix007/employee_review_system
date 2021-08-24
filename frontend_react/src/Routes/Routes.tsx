import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Suspense } from 'react';
import SignUpPage from 'components/auth/SignUpPage';
import LoginPage from 'components/auth/LoginPage';
import ResetPasswordPage from 'components/auth/ResetPasswordPage';
import VerifyYourMail from 'components/auth/VerifyYourMail';
import Error404Page from 'components/etc-components/Error404Page';
import HomePage from 'components/home/HomePage';
import LoadingComponent from 'components/common/LoadingComponent';

export interface IRoutesProps {
}

export interface IRoutesState {
}

export default class Routes extends React.Component<IRoutesProps, IRoutesState> {
    constructor(props: IRoutesProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="Routes">
                <Router>
                    <Suspense fallback={<LoadingComponent />}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/signup" component={SignUpPage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/reset-password" component={ResetPasswordPage} />
                            <Route exact path="/verify-email-address" component={VerifyYourMail} />
                            <Route component={Error404Page} />
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        );
    }
}
