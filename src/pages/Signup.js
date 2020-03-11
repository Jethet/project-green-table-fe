import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth"; // used to connect/consume from AuthProvider

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.signup(username, password);
    // call signup() method from the AuthProvider
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="signup-background">
        <div className="signup-container">
          <h1 className="signup-header">Sign Up for the Green Table!</h1>

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
            <div>
              <input type="submit" value="Signup" className="click-button-signup" />
            </div>
            <div id="have-account">
              <p>Already have account?</p>

              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <div id="button-have-account">Log in</div>
              </Link>
            </div>
          </form>
          <div id="image-box-signup">
            <img
              src="/images/greenTable.jpg"
              className="green-table"
              alt="Image of Green Table"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
// connect/consume from AuthProvider
// On the current component it adds props
// from the AuthProvider -> { isLoggedIn, user, signup, login, logout}
