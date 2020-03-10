//ProfilePage

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      user: null
    };
  }
  componentDidMount() {
    // Make axios get request to get user profile  // set it in the state
    axios.get("http://localhost:3000/profile").then(response => {
      this.setState({ profile: response.data.user });
    });
    // then: make another axios request to get all tables of user
    // set it in the state
    axios.get("http://localhost:3000/table/all").then(response => {
      this.setState({ table: response.data.tables });
    });
  }

  handleFormSubmit = event => {};

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="profile-background">
        <div className="profile-container">
          <div>
            <h1>Your Profile Page</h1>
          </div>
          <div>
          <form onSubmit={this.handleSubmit}>
            {!this.state.user ? (
              "loading"
            ) : (
              <div className="profile-image">
                <img
                  src={this.state.user.imageURL}
                  className="profile-page-image"
                  alt="Upload your profile image"
                />

                <ul>
                  <li>
                    <label>Name:</label>
                    <button>Edit name</button>
                    <input
                      type="name"
                      value={this.state.user.name}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <label>Password:</label>
                    <button>Edit name</button>
                    <input
                      type="password"
                      value={this.state.user.password}
                      onChange={this.handleChange}
                    />
                  </li>
                </ul>
              </div>
            )}
          </form>
          </div>
          <div>
            <Link to={"/"}>
              <button id="signout-button">Sign out</button>
            </Link>
          </div>

          <div>
            <h2>My tables:</h2>
            {this.state.tables}
            <ul>
              <li></li>
            </ul>
          </div>
          <div>
            <Link to={"/credits"}>
              <button id="credits-button">Credits</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
