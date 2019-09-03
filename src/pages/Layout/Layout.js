import React from "react";
import "../../route/Content";
import "./Layout.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import DateTime from "../../common/js/DataTime";
import TimePeriod from "../../common/js/Period";
import Content from "../../route/Content";

const tokenExpiry = sessionStorage.getItem("tokenexpiry");

class Layout extends React.Component {
  constructor(props) {
    super(props);
    let dropdownt = "",
      lStorage = localStorage.getItem("name");
    if (lStorage === null || lStorage === "") {
      dropdownt = "OVERVIEW";
      localStorage.clear();
    } else if (lStorage === "market-bidding") {
      dropdownt = "MARKET BIDDING";
      localStorage.clear();
    } else if (lStorage === "site-control") {
      dropdownt = "SITE CONTROL";
      localStorage.clear();
    } else if (lStorage === "activation-report") {
      dropdownt = "ACTIVATION & REPORT";
      localStorage.clear();
    } else if (lStorage === " user-list") {
      dropdownt = "USER LIST";
      localStorage.clear();
    } else {
      dropdownt = "LOGOUT";
      localStorage.clear();
    }

    this.state = {
      dropdownText: dropdownt,
      userData: props.userData
    };

    // this.appLogout = this.appLogout.bind(this);
  }

  // setTimeout = () => {
  //   this.warnTimeout = setTimeout(this.warn(), tokenExpiry - 1140000);
  // };

  // appLogout() {
  //   alert("Please login again for the account has reached the time limit");
  //   sessionStorage.removeItem("userJwt");
  //   sessionStorage.removeItem("userRole");
  //   sessionStorage.removeItem("tokenExpiry");
  //   window.location.pathname = "/login";
  // }

  logout() {
    let confirmLogout = window.confirm("Are you sure you want to logout ?");
    if (confirmLogout) {
      sessionStorage.removeItem("userJwt");
      sessionStorage.removeItem("userRole");
      sessionStorage.removeItem("tokenExpiry");
      window.location.pathname = "/login";
    }
  }

  userListPage() {
    if (sessionStorage.getItem("userRole") === "ADMIN") {
      return (
        <Link className="dropdown-item" to="/user-list">
          USER LIST
        </Link>
      );
    }

    return null;
  }

  componentDidMount() {
    $(".dropdown-menu a").click(event => {
      let text = event.target.text;
      this.setState({ dropdownText: text });
    });
    // this.setTimeout();
    // setTimeout(() => {
    //   alert("You will be logged out automatically in exactly 1 minute ");
    // }, 1140000);
    // setTimeout(() => {
    //   this.appLogout();
    // }, 1200000);
  }

  render() {
    return (
      <div className="Layout container-fluid">
        <header>
          <div className="row justify-content-start header">
            <div className="col-sm-12 col-md-3 dropdown">
              <div className="dropdown-toggle" data-toggle="dropdown">
                {this.state.dropdownText}
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    OVERVIEW
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/market-bidding">
                    MARKET BIDDING
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/site-control">
                    SITE CONTROL
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/activation-report">
                    ACTIVATION & REPORT
                  </Link>
                </li>
                <li>{this.userListPage()}</li>
                <li>
                  <a href="javascript:;" onClick={this.logout}>
                    <span class="glyphicon glyphicon-log-in" /> LOGOUT
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <DateTime portlet="header" /> Period <TimePeriod />
            </div>
            <div className="col">ContRes S$6.00/MWh</div>
            <div className="col">P. Capacity 180MW</div>
            <div className="col" />
          </div>
        </header>

        <section id="content">
          <Content />
        </section>
      </div>
    );
  }
}

export default Layout;
