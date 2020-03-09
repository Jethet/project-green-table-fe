//ProfilePage

import React, { Component } from "react";
import axios from "axios";

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
      this.setState({ profile: response.data });
    });
    // then: make another axios request to get all tables of user
    // set it in the state
    axios.get("http://localhost:3000/table/all").then(response => {
      this.setState({ table: response.data });
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
        <div className="profile-container"></div>
        <form onSubmit={this.handleSubmit}>
          <h1>Your Profile Page</h1>
          {!this.state.user ? (
            "loading"
          ) : (
            <div>
              <span className="profile-image">
                <img src={this.state.user.imageURL} class="profile-page-image" alt="" />
              </span>
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
    );
  }
}

export default ProfilePage;
