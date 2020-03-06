//	components/PrivateRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/Auth";

function PrivateRoute({ component: Component, isLoggedIn, exact, path }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={function(props) {
        if (isLoggedIn) return <Component {...props} />;
        else if (!isLoggedIn) return <Redirect to="/login" />;
      }}
    />
  );
}

export default withAuth(PrivateRoute);
