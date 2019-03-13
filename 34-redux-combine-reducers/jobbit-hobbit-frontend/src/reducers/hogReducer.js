// import hogs from '../data/porkers_data'


const initialState = []


const hogReducer = (state = initialState, action) => {
  console.log("HOG REDUCER STATE: ", state, "ACTION: ", action)
  switch (action.type) {
    case "ADD_HOG": {
      return [ ...state, action.payload ]
    }

    case "LOAD_HOGS": {
      return action.payload
    }

    case "REMOVE_HOG": {
      return state.filter(hog => hog.id !== action.payload)
    }

    default:
      return state
  }
}

export default hogReducer
