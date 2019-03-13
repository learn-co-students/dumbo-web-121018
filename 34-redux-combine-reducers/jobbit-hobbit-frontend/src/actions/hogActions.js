


export const removeHog = (id) => ({ type: "REMOVE_HOG", payload: id })

const loadHogs = (hogs) => ({ type: "LOAD_HOGS", payload: hogs })


export const getHogs = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hogs')
      .then(r => r.json())
      .then(res => dispatch(loadHogs(res)))
      .catch(console.error)
  }
}


export const deleteHog = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3000/hogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(r => r.json())
      .then(res => dispatch(removeHog(res.id)))
  }
}
