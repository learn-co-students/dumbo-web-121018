import React, { Component } from "react";

class Rapcard extends Component {
  state = {
    clicked: false
  };

  clickHandler = () => {
    console.log("clicked");
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.rapper.name}</h1>
        <img
          alt=""
          src={
            this.state.clicked
              ? this.props.rapper.happyImage
              : this.props.rapper.sadImage
          }
        />
        <button onClick={this.clickHandler}>Flip Card</button>
      </div>
    );
  }
}

export default Rapcard;
