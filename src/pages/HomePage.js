//HomePage

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  return (
    <div className="home-background">
      <div className="home-container">
        <div>
          <h1 id="home-header">Welcome to the</h1>
          <h1 id="home-header2">Green Table!</h1>
        </div>

        <div id="home-description">
          <p>
            You and your friends enjoy eating together. Some of you are vegetarian or
            vegan. You respect each other's choices but it is not always clear who prefers
            what. With the Green Table everyone brings dishes and drinks for all food
            preferences. Create a table and invite your friends!
          </p>
        </div>

        <div id="signin">
          <div>
            <h4>Already have an account?</h4>
          </div>
          <div>
            <Link to={"/login"}>
              <button id="signin-button">Login</button>
            </Link>
          </div>
        </div>
        <div id="signup">
          <div>
            <h4>No account yet?</h4>
          </div>
          <div>
            <Link to={"/signup"}>
              <button id="signup-button">Signup</button>
            </Link>
          </div>
        </div>
        <div id="image-box-home">
          <img
            src="/images/greentableBlue.jpg"
            id="green-table-home"
            alt="Image of Green Table"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
