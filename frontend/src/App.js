import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect path="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/events" component={null} />
        <Route path="/bookings" component={null} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
