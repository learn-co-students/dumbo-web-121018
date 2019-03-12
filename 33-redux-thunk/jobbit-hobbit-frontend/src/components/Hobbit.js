import React from "react";
import { selectHobbit } from "../actions/hobbitActions"
import { connect } from 'react-redux'

const Hobbit = props => {
  const { hobbit, selectHobbit, selected } = props
  // const selected = hobbit.id === selectedHobbit.id
  // console.log("RENDERED A HOBBIT", hobbit);
  return (
    <div className='card' style={selected ? {'borderColor':'cyan'} : {'borderColor':'red'} } onClick={() => selectHobbit(hobbit)}>
      <img alt={hobbit.name} src={hobbit.image_url} />
      <h3> Name: {hobbit.name} </h3>
      <h3> Title: {hobbit.title} </h3>
      <h3> Field: {hobbit.field} </h3>
      <h3> Seniority: {hobbit.seniority} </h3>
      <h3> Position: {hobbit.position} </h3>
      <h3> Key Skill: {hobbit.key_skill} </h3>
      <h3> Employment Type: {hobbit.employment_type} </h3>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  // console.log("STATE", state, "OWNPROPS: ", ownProps);
  return {
    selected: ownProps.hobbit.id === state.selectedHobbit.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectHobbit: (hob) => dispatch(selectHobbit(hob))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hobbit)
