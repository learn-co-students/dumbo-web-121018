import React from "react";

class CohortName extends React.Component {
  render() {
    console.log("Cohort Props", this.props.name);
    return <h1>{this.props.name}</h1>;
  }
}

export default CohortName;
