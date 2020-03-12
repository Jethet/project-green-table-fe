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

  getTableData = () => {
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
      .then(response => {
        console.log("response.data :", response.data);
        this.setState({ username: response.data.username, tables: response.data.table });
      });
  };

  componentDidMount() {
    // Make axios get request to get user profile  // set it in the state
    this.getTableData();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const tables = this.state.tables;
    const user = this.state.user;
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
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

  handleDeleteTable = id => {
    axios
      .delete(`http://localhost:5000/table/${id}`, { withCredentials: true })
      .then(() => {
        this.getTableData();
        this.props.history.push("/profile");
      })
      .catch(error => console.log(error));
  };

  formatDate = d => {
    let date = new Date(d);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return (d = dd + "/" + mm + "/" + yyyy);
  };

  render() {
    console.log("this.state.tables :", this.state.tables);
    return (
      <div className="profile-background">
        <div className="profile-container">
          <div>
            <h1>My profile page</h1>
          </div>
          <div className="form-profile-page">
            <form onSubmit={this.handleSubmit}>
              {!this.state.username ? (
                "loading"
              ) : (
                <div>
                  <ul className="profile-form">
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
            <h2>Tables I am hosting:</h2>
            {this.state.tables
              ? this.state.tables.map(el => {
                  return (
                    <div>
                      <div>
                        <Link to={`/table/${el._id}`}>
                          <p>{this.formatDate(el.date)}</p>
                        </Link>
                      </div>
                      <p>Time: {el.time}</p>
                      <p>{el.address}</p>
                      <p>{el.city}</p>
                      <div>
                        <div>
                          <h3>Food & drinks I am bringing:</h3>
                        </div>
                        {el.foodAndDrinks.map(item => {
                          return (
                            <div>
                              <p>{item.dishType}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <button
                          id="delete-table-button"
                          onClick={() => this.handleDeleteTable(el._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
            <ul id="tables-list">
              <li></li>
            </ul>
          </div>

          <div>
            <Link to="/table/invitations">
              <div className="button-container">
                <div className="button-holder">
                  <button id="see-invite-button">Invites</button>
                </div>
              </div>
            </Link>
          </div>

          <div className="button-container">
            <div className="button-holder">
              <button id="signout-button" onClick={this.handleClick}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(ProfilePage);
