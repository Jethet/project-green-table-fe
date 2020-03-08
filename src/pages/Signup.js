import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.signup(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
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
            <input type="submit" value="Signup" className="click-button" />
          </div>
          <div>
            <p>Already have account?</p>
            <Link to={"/login"} id="click-button-signup">
              {" "}
              Login
            </Link>
          </div>
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

export default withAuth(Signup);
