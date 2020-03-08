import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    console.log("isLoggedIn :", isLoggedIn);
    return (
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to={"/table"}>
              <img src="/images/homelink.png" id="table-page-button" alt="HOME" />
            </Link>
            
            <Link to={"/profile"} >
              <img src="/images/user2.png" id="profile-page-button" alt="PROFILE" />
            </Link>
          </div>
        ) : null}
      </nav>
    );
  }
}

export default withAuth(Navbar);
