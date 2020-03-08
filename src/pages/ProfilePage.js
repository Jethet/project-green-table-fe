//ProfilePage

import React, { Component } from "react";
import axios from "axios";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.username,
      description: this.props.password
    };
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
          <div>
            <span className="profile-image">
              <img src="{{ user.imageURL }}" class="profile-page-image" alt="" />
            </span>
            <ul>
              <li>
                <label>Name:</label>
                <button>Edit name</button>
                <input type="name" value={this.state.name} onChange={this.handleChange} />
              </li>
              <li>
                <label>Password:</label>
                <button>Edit name</button>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;
