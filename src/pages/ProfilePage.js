//ProfilePage

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    // Make axios get request to get user profile  // set it in the state
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
      .then(response => {
        this.setState({ username: response.data.username, tables: response.data.table });
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const tables = this.state.tables;
    const user = this.state.user;
    axios
      .get("http://localhost:5000/api/profile", { withCredentials: true })
      .then(() => {
        // this.props.getData();
        this.setState({ tables: "", user: "" });
        console.log(tables, user);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = event => {
    const { user } = event.target;
    this.props.logout(user);
  };

  render() {
    return (
      <div className="profile-background">
        <div className="profile-container">
          <div>
            <h1>Your Profile Page</h1>
          </div>
          <div className="form-profile-page">
            <form onSubmit={this.handleSubmit}>
              {!this.state.username ? (
                "loading"
              ) : (
                <div className="profile-form">
                  <ul>
                    <li className="form-fields">
                      <label>Username:</label>

                      <input
                        type="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                      <button className="profile-edit-buttons">Edit username</button>
                    </li>
                    <li className="form-fields">
                      <label>Password:</label>

                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <button className="profile-edit-buttons">Edit password</button>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>

          <div>
            <h2>My tables:</h2>
            {this.state.tables
              ? this.state.tables.map(el => {
                  return (
                    <div>
                      <p>{el.date}</p>
                      <p>{el.time}</p>
                      <p>{el.address}</p>
                      <p>{el.city}</p>
                      <div>
                        {el.foodAndDrinks.map(item => {
                          return (
                            <div>
                              <p>{item.dishType}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              : null}
            <ul id="tables-list">
              <li></li>
            </ul>
          </div>
          <div className="button-holder">
            <Link to={"/credits"}>
              <button id="credits-button">Credits</button>
            </Link>
          </div>
          <div className="button-container">
            <div className="button-holder">
              <Link to={"/"}>
                <button id="signout-button" onClick={this.handleClick}>
                  Sign out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ProfilePage);
