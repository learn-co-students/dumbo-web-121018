import wizards from '../wizards.js'

const initialState = {
  wizards: wizards
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIZARD":
      const wizard = action.payload
      const addedArray = [...state.wizards, wizard]
      return {...state, wizards: addedArray}
    case "REMOVE_WIZARD":
      const name = action.payload
      const filteredArray = state.wizards.filter(wizard => wizard.name !== name)
      return {...state, wizards: filteredArray}
      // return {...state, wizards: state.wizards.filter(wizard => wizard.name !== action.payload)}

    default:
      return state

  }
}

export default reducer
