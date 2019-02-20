import React from "react";
import Rapcard from "./Rapcard";
import rapperList from "./rapperList";

class Rapcontainer extends React.Component {
  state = {
    rappers: rapperList
  };

  render() {
    let rappers = this.state.rappers.map(rapperObj => (
      <Rapcard rapper={rapperObj} />
    ));
    console.log("Rap Container", rappers);
    return <div className="RapContainer">{rappers}</div>;
  }
}

export default Rapcontainer;
