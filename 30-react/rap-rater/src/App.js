import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Rapcontainer from "./Rapcontainer";
import Home from "./Home";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Switch>
          <Route path="/rappers" component={Rapcontainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
