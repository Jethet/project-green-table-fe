import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function Splashpage() {
  return (
    <div>
      <div>
        <h1>Welcome Page</h1>
      </div>

      <div>
        <h2>Already have an account?</h2>
        <button>
          <Login />
        </button>
      </div>

      <div>
        <h2>No account yet?</h2>
        <button>
          <Signup />
        </button>
      </div>
    </div>
  );
}

export default Splashpage;
