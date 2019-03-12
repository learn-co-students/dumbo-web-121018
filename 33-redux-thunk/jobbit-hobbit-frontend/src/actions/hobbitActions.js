
export const selectHobbit = (hob) => ({ type: "SELECT_HOBBIT", payload: hob })

export const editHobbit = (hobObj) => ({ type: "EDIT_HOBBIT", payload: hobObj })

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
