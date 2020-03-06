import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <nav className="navbar">
        {isLoggedIn ? (
          <div>
            <Link to={"/"} id="homePage-btn">
              Home
            </Link>
            <Link to={"/profile"} id="profilePage-btn">
              Profile
            </Link>
          </div>
        ) : null}
      </nav>
    );
  }
}

export default withAuth(Navbar);
