import React, { Component } from "react";
import "./App.css";
import Layout from "./pages/Layout/Layout";

import Login from "./pages/Auth/Login";

const userData = sessionStorage.getItem("userJwt");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      isLogin: false
    };
  }

  componentDidMount() {
    if (userData) {
      this.setState({
        isLogin: true,
        userData: userData
      });
    } else {
      this.setState({
        isLogin: false
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <Layout userData={this.state.userData} />
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
