import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App root-background-color">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard token={token} setToken={setToken} />
          </Route>
          <Route path="/">
            {!token ? (
              <Login setToken={setToken} />
            ) : (
              <Redirect to="/dashboard" />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
