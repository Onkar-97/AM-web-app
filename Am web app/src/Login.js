import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Add from "../src/Add";

//import Table from "../src/Add";
//class Login extends Component {

//export const Login = props => {
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      login: false
    };
  }
  responseGoogle = response => {
    console.log("-->" + response.profileObj.name);
    this.setState({
      name: response.profileObj.name,
      email: response.profileObj.email,
      login: true
    });
  };
  logout = resp => {
    this.setState({
      name: "",
      email: "",
      login: false
    });
  };
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Account Mgmt Web app </h3>
        <h5>Login With your Google Account</h5>
        {this.state.login ? (
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          />
        ) : (
          <GoogleLogin
            clientId="642750602243-7qc27bpmvbkm19jr7vbv9s2t61a7q7ml.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        )}
        <h3 style={{ textAlign: "left", fontWeight: "bold" }}>
          Name: {this.state.name}
        </h3>
        <h3 style={{ textAlign: "left", fontWeight: "bold" }}>
          Email: {this.state.email}
        </h3>
        {this.state.login ? <Add /> : <h4>You are logged out</h4>}
      </div>
    );
  }
}
export default Login;
