//HomePage

import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="background-image-homepage">
      <div>
        <h1>Welcome Page</h1>
      </div>

      <div>
        <h1>What is the Green Table?</h1>
        <p>Description</p>
      </div>
      <div>
        <h2>Already have an account?</h2>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>

      <div>
        <h2>No account yet?</h2>
        <Link to={"/signup"}>
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
