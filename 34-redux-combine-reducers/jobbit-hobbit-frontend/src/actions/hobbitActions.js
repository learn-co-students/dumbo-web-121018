
export const selectHobbit = (hob) => ({ type: "SELECT_HOBBIT", payload: hob })

const editHobbit = (hobObj) => ({ type: "EDIT_HOBBIT", payload: hobObj })

const loadHobbits = (hobs) => ({ type: "LOAD_HOBBITS", payload: hobs })

export const updateHobbit = (hob) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/hobbits/${hob.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(hob)
    })
      .then(r => r.json())
      .then(res => dispatch(editHobbit(res)))
      .catch(console.error)
  }
}


export const getHobbits = () => (dispatch =>  {
  return fetch('http://localhost:3000/hobbits')
    .then(r => r.json())
    .then(res => dispatch(loadHobbits(res)))
    .catch(console.error)
})
