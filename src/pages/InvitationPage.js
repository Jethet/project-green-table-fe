import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class InvitationPage extends React.Component {
  state = {
    tableInvites: [],
    isLoading: true
  };

  componentDidMount() {
    // Make axios get request to get user info  // set it in the state
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
      .then(response => {
        console.log("response.data :", response.data);
        this.setState({ tableInvites: response.data.tableInvites, isLoading: false });
      });
  }

  render() {
    console.log("tableInvites :", this.state.tableInvites);
    return this.state.isLoading ? null : (
      <div>
        {this.state.tableInvites.map(invite => {
          return (
            <div className="invitation-background">
              <div className="invitation-container">
                <div>
                  <h1>Your invitations:</h1>
                </div>
                <div>
                  <p>{invite.date}</p>
                  <p>{invite.time}</p>
                  <Link to={`/table/${invite._id}`}>
                    <button className="profile-edit-buttons">See details </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InvitationPage;
