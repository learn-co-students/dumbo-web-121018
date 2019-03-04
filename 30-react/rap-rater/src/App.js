import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import Rapcontainer from "./Containers/Rapcontainer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    let token = localStorage.token;
    fetch("http://localhost:3000/api/v1/get_user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `${token}`
      }
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.error) {
          return <Redirect to="/login" />;
        } else {
          this.setState({ user });
        }
      });
  }

  signupSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        this.setState({ user: data.user });
      });
  };

  clickHandler = () => {
    console.log("been clicked");
    localStorage.removeItem("token");
    this.setState({ user: {} });
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <Navbar clickHandler={this.clickHandler} />
        <Switch>
          <Route
            path="/rappers"
            render={() =>
              Object.keys(this.state.user).length > 0 ? (
                <Rapcontainer />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/login" component={Login} />
          <Route
            path="/signup"
            render={() => <Signup submitHandler={this.signupSubmitHandler} />}
          />
          <Route path="/" render={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
