import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import axios from "axios";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    console.log("isLoggedIn :", isLoggedIn);
    return (
      <nav className="navbar">
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to={"/table"}>
                <img src="/images/homelink.png" id="table-page-button" alt="HOME" />
              </Link>
            </li>
            <li>
              <Link to={"/profile"}>
                <img src="/images/user2.png" id="profile-page-button" alt="PROFILE" />
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

export default withAuth(Navbar);
