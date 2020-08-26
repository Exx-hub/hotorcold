import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import ContextProvider from "./contexts/Context";

import Rules from "./components/Rules";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="app-container">
          <h1 className="header">HOT or COLD </h1>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/Rules" component={Rules} />
          </Switch>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
