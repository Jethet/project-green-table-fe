//HomePage

import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <div>
        <h1 id="home-header">Welcome to the</h1>
        <h1 id="home-header2">Green Table!</h1>
      </div>

      <div id="home-description">
        <p>
          You and your friends have chosen a sustainable way of living, and may be
          vegetarians or vegans. You want to respect each others choices when eating
          together but it is not always clear who prefers what. With the Green Table
          everyone brings dishes and drinks for all food preferences. Create a table and
          invite your friends!
        </p>
      </div>
      <div>
        <div id="signin">
          <div>
            <h4>Already have an account?</h4>
          </div>
          <div>
            <Link to={"/login"}>
              <button className="click-button">Login</button>
            </Link>
          </div>
        </div>
        <div id="signup">
          <div>
            <p>No account yet?</p>
          </div>
          <div>
            <Link to={"/signup"}>
              <button className="click-button">Signup</button>
            </Link>
          </div>
        </div>
        <div className="image-box">
          <img src="/images/greenTable.jpg" className="green-table" alt="Image of Green Table" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
