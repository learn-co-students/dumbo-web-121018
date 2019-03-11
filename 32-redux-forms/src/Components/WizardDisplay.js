import React from 'react'
import Wizard from './Wizard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {this.props.wizards.map(wizardObj => <Wizard key={wizardObj.name} wizard={wizardObj}></Wizard>)}
        </ul>
      </div>
    )
  }
}

// The object that is returned from MSTP will be merged in as Props
const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}

const someFunction = connect(mapStateToProps)
const someComponent = someFunction(WizardDisplay)

export default someComponent
