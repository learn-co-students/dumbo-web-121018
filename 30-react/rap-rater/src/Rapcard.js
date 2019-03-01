import React, { Component } from "react";
import { Link } from "react-router-dom";

class Rapcard extends Component {
  state = {
    clicked: false
  };

  componentWillUnmount() {
    alert("Is you stupid is you dumb");
  }

  flipClickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.rapper.name}</h1>
        <Link to={`/rappers/${this.props.rapper.name}`}>
          <img
            alt=""
            src={
              this.state.clicked
                ? this.props.rapper.happyImage
                : this.props.rapper.sadImage
            }
          />
        </Link>
        <button onClick={this.flipClickHandler}>Flip Card</button>
        <button
          onClick={() => this.props.deleteClickHandler(this.props.rapper)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Rapcard;
