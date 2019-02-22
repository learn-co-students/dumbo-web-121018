import React from "react";
import Rapcard from "./Rapcard";
import Form from "./Form";
import Search from "./Search";
import rapperList from "./rapperList";

class Rapcontainer extends React.Component {
  // constructor() {
  //   super();
  //   this.submitHandler = this.submitHandler.bind(this);
  //   this.state={}
  // }

  state = {
    rappers: rapperList,
    filteredRappers: rapperList,
    searchTerm: ""
  };

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

  render() {
    let rappers = this.state.filteredRappers.map(rapperObj => (
      <Rapcard rapper={rapperObj} />
    ));
    console.log("Rap Container", rappers);
    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <br />
        <Search
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />
        {rappers}
      </div>
    );
  }
}

export default Rapcontainer;
