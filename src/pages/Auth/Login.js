import React, { Component } from "react";
import { api_url } from "../../util/apiURL";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: "",
        password: ""
      },
      loginError: {
        emailError: false,
        passwordError: false
      },
      noUserError: false
    };
  }

  loginInputChange = e => {
    let name = e.target.dataset.name;
    let data = this.state.loginData;
    data[name] = e.target.value;
    this.setState({
      loginData: data
    });
  };

  login = () => {
    let data = this.state.loginData;
    let errorList = this.state.loginError;
    if (data.email === "") {
      errorList.emailError = true;
    } else {
      errorList.emailError = false;
    }
    if (data.password === "") {
      errorList.passwordError = true;
    } else {
      errorList.passwordError = false;
    }
    this.setState({
      loginError: errorList
    });

    if (data.email !== "" && data.password !== "") {
      fetch(`${api_url}/v1/user/login`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        },
        method: "POST",
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            window.alert("Password/Username is incorrect. Please try again.");
            window.location.reload();
            this.setState({
              loginData: {
                email: "",
                password: ""
              }
            });
          }
        })
        .then(res => {
          console.log(res);
          if (res.status === "OK") {
            this.setState(
              {
                noUserError: false
              },
              () => {
                console.log("Hello");

                sessionStorage.setItem("userJwt", res.data.token);
                sessionStorage.setItem("userRole", res.data.role);
                sessionStorage.setItem(
                  "tokenExpiry",
                  res.data.expiryTimeInMillis
                );
                window.location.pathname = "/";
                document.querySelector("#loginbutton").click();
                this.setState({
                  loginData: {
                    email: "",
                    password: ""
                  }
                });
              }
            );
          } else {
            window.alert(res.message);
            this.setState({
              loginData: {
                email: "",
                password: ""
              }
            });
          }
        });
    }
  };

  forceLogin = e => {
    if (e.which === 13) {
      this.login();
    }
  };

  render() {
    return (
      <div
        id="login"
        className="loginpanel"
        onKeyDown={this.forceLogin}
        className="container"
      >
        <div>
          <div className="loginTitle" />
          {this.state.noUserError ? (
            <small className="error-txt">No user found</small>
          ) : (
            ""
          )}

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              data-name="email"
              value={this.state.loginData.email}
              onChange={this.loginInputChange}
            />
            {this.state.loginError.emailError ? (
              <small className="error-txt">Email is required</small>
            ) : (
              ""
            )}
          </div>

          <div className=" form-group mb-0">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              data-name="password"
              value={this.state.loginData.password}
              onChange={this.loginInputChange}
            />
            {this.state.loginError.passwordError ? (
              <small className="error-txt">Password is required</small>
            ) : (
              ""
            )}
          </div>

          <br />
          <div>
            <button id="loginbutton" className="loginBtn" onClick={this.login}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
