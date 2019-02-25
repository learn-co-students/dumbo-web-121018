import React from "react";
import Rapcard from "./Rapcard";
import Form from "./Form";
import Search from "./Search";

class Rapcontainer extends React.Component {
  state = {
    rappers: [],
    filteredRappers: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3001/rapperList")
      .then(resp => resp.json())
      .then(allRappers =>
        this.setState({
          rappers: allRappers,
          filteredRappers: allRappers
        })
      );
  }
  submitHandler = rapperObj => {
    this.setState({
      rappers: [rapperObj, ...this.state.rappers]
    });
  };

  changeHandler = e => {
    let newArray = [...this.state.rappers].filter(rapper =>
      rapper.name.includes(e.target.value)
    );
    this.setState({
      searchTerm: e.target.value,
      filteredRappers: newArray
    });
  };

  deleteClickHandler = rapperObj => {
    console.log("deleted");
    let newArray = [...this.state.rappers].filter(
      rapper => rapper.name !== rapperObj.name
    );
    this.setState({
      rappers: newArray,
      filteredRappers: newArray
    });
  };

  render() {
    let rappers = this.state.filteredRappers.map(rapperObj => (
      <Rapcard
        rapper={rapperObj}
        deleteClickHandler={this.deleteClickHandler}
      />
    ));
    return (
      <div>
        {this.state.rappers.length > 0 ? (
          <div>
            <Form submitHandler={this.submitHandler} />
            <br />
            <Search
              searchTerm={this.state.searchTerm}
              changeHandler={this.changeHandler}
            />
            {rappers}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default Rapcontainer;
