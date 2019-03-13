// import hobbits from '../data/hobbit_data'

const initialState = {
  hobbits: [],
  selectedHobbit: {}
}


const reducer = (state = initialState, action) => {
  console.log("HOBBIT REDUCER STATE: ", state, "ACTION: ", action)
  switch (action.type) {

    case "SELECT_HOBBIT": {
      return { ...state, selectedHobbit: action.payload }
    }

    case "EDIT_HOBBIT": {
      const newHobbits = state.hobbits.map(hob => {
        if (hob.id === action.payload.id) {
          return { ...hob, ...action.payload }
        } else {
          return hob
        }
      })

      return { ...state, hobbits: newHobbits }
    }

    case "LOAD_HOBBITS": {
      return { ...state, hobbits: action.payload }
    }

    default:
      return state
  }
}

export default reducer
