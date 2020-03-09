import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

//Pages
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateTablePage from "./pages/CreateTablePage";
import TableDetailsPage from "./pages/TableDetailsPage";
import TableEditPage from "./pages/TableEditPage";
import InvitationPage from "./pages/InvitationPage";
import ProfilePage from "./pages/ProfilePage";
import CreditsPage from "./pages/CreditsPage";

//Components
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <AnonRoute exact path="/" component={HomePage} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/table" component={CreateTablePage} />
          <PrivateRoute exact path="/table/:id" component={TableDetailsPage} />
          <PrivateRoute exact path="/table/:id/edit" component={TableEditPage} />
          <PrivateRoute exact path="/table/invitation/:id" component={InvitationPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/credits" component={CreditsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
