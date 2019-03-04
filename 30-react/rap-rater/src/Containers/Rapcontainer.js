import React from "react";
import { Route, Switch } from "react-router-dom";
import Rapcard from "../Components/Rapcard";
import Form from "../Components/Form";
import Search from "../Components/Search";

class Rapcontainer extends React.Component {
  state = {
    rappers: [],
    filteredRappers: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3002/rapperList")
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

  createRappers = () => {
    return this.state.filteredRappers.map(rapperObj => (
      <Rapcard
        rapper={rapperObj}
        deleteClickHandler={this.deleteClickHandler}
      />
    ));
  };
  render() {
    return (
      <div>
        <Switch>
          <div>
            <Route
              path="/rappers/:name"
              render={routerProps => {
                let name = routerProps.match.params.name;
                let rapper = this.state.rappers.find(
                  rapper => rapper.name === name
                );
                return <Rapcard rapper={rapper} />;
              }}
            />
            <Route
              path="/rappers"
              render={() => {
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
                        {this.createRappers()}
                      </div>
                    ) : (
                      <h1>LOADING</h1>
                    )}
                  </div>
                );
              }}
            />
          </div>
        </Switch>
      </div>
    );
  }
}

export default Rapcontainer;
