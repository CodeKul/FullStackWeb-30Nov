import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  loginClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  logoutClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            <h3>Welcome</h3>
            <p>User</p>
          </div>
        ) : (
          <h3>Please Login first</h3>
        )}
        {this.state.isLoggedIn ? (
          <LogoutButton logoutmsg={this.logoutClick} />
        ) : (
          <LoginButton loginmsg={this.loginClick} />
        )}
      </div>
    );
  }
}

export default LoginStatus;
