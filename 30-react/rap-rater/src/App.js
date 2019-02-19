import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CohortName from "./CohortName";

class App extends Component {
  state = {
    name: "String Cheese",
    anything: "anything"
  };

  render() {
    console.log("App state", this.state);
    return (
      <div>
        <CohortName name={this.state.name} />
      </div>
    );
  }
}

export default App;
