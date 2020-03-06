import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

//Pages
import CreateTablePage from "./pages/CreateTablePage";
import ProfilePage from "./pages/ProfilePage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/table" component={CreateTablePage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
