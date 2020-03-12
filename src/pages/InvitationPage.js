import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class InvitationPage extends React.Component {
  state = {
    username: "",
    tableInvites: [],
    isLoading: true
  };

  componentDidMount() {
    // Make axios get request to get user info  // set it in the state
    axios
      .get(process.env.REACT_APP_API_URL+"/profile", { withCredentials: true })
      .then(response => {
        console.log("response.data :", response.data);
        this.setState({
          username: response.data.username,
          tableInvites: response.data.tableInvites,
          isLoading: false
        });
      });
  }

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
    console.log("tableInvites:", this.state.tableInvites);
    return this.state.isLoading ? null : (
      <div>
        <div className="invitation-background">
          <div className="invitation-container">
          <h2 id="invitations-header">My invitations:</h2>
            {this.state.tableInvites.length ? (
              this.state.tableInvites.map(invite => {
                return (
                  <div>
                    <div>
                      
                    </div>
                    <div>
                      <p>Invitation from host: {invite.userId.username}</p>
                      <p>Date: {this.formatDate(invite.date)}</p>
                      <p>Time: {invite.time}</p>
                      <p>Address: {invite.address}</p>
                      <p>City: {invite.city}</p>
                      <Link to={`/table/${invite._id}`}>
                        <button className="details-button">See details</button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>You have no invites yet</p>
            )}
          </div>
          <button className="details-back-button" onClick={this.props.history.goBack}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default InvitationPage;
