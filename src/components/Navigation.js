//	components/Navigation.js

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Navigation;
