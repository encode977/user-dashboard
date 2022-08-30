import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import Header from "../components/Header";

function routes() {
  return (
    <Router>
      <Header />
      <div className="grid grid-cols-12 gap-8">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Setting />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default routes;
