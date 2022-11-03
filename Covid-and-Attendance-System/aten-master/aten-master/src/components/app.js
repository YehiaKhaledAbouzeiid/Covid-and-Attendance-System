import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components
import SignIn from "./Pages/signin";
import Student from "./Pages/Student";
import Professor from "./Pages/Professor";
import Admin from "./Pages/Admin";

import { CssBaseline } from "@material-ui/core";

export class App extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <a href="/student"> Student </a> <br />
        <a href="/professor"> Professor </a> <br />
        <a href="/admin"> Admin </a> <br />

        <BrowserRouter>
          <Switch fontFamily="Monospace" >
            <Route path="/" exact component={SignIn} />
            <Route path="/student" component={Student} />
            <Route path="/professor" component={Professor} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
