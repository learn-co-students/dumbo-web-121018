import React from "react";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button>Log In</button>
      </form>
    );
  }
}

export default Signup;
