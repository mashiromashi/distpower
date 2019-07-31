import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Overview from "../pages/Overview-Page/Overview-page";
import MarketBidding from "../pages/Market-Bidding-Page/Market-bidding-page";
import ActivationReport from "../pages/Activation-Report-page/Activation-Report-page";
import SiteControl from "../pages/Site-Control-Page/Site-control-page";
import UserList from "../pages/User-List-Page/User-List-Page";
import Login from "../pages/Auth/Login";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <Overview {...props} userData={this.props.userData} />
          )}
        />
        <Route
          path="/market-bidding"
          exact
          render={props => (
            <MarketBidding {...props} userData={this.props.userData} />
          )}
        />
        <Route
          path="/site-control"
          exact
          render={props => (
            <SiteControl {...props} userData={this.props.userData} />
          )}
        />
        <Route
          path="/activation-report"
          exact
          render={props => (
            <ActivationReport {...props} userData={this.props.userData} />
          )}
        />
        <Route
          path="/user-list"
          exact
          render={props => (
            <UserList {...props} userData={this.props.userData} />
          )}
        />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }
}

export default Content;
