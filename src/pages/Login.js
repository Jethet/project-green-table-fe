import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div id="login-container">
        <h1 className="signup-header">Log in for the Green Table!</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-fields">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-fields">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="Login" className="click-button" />
        </form>

        <div className="image-box">
          <img
            src="/images/greenTable.jpg"
            className="green-table"
            alt="Image of Green Table"
          />
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
