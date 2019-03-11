import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'

import {connect} from 'react-redux'
import {addWizard} from './Redux/actions'

class App extends Component {

  handleClick = () => {
    this.props.addWizard({
      name: "String Cheese",
      house: "Flatiron",
      redux: "Wizards"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Add a Wizard!</button>
          <p>The Wizard of the Day is: {this.props.wizard.name}</p>
          <p>Harry Potter of Redux</p>
        </header>
        <WizardForm></WizardForm>
        <WizardDisplay></WizardDisplay>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wizard: state.wizards[0]
  }
}

export default connect(mapStateToProps, {addWizard})(App);
