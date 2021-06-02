import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import CV from "./routes/CV";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/CV" component={CV} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
