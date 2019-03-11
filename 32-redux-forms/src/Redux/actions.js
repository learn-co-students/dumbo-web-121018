export const addWizard = (wizardObj) => {
  return {
    type: "ADD_WIZARD",
    payload: wizardObj
  }
}

export const removeWizard = (name) => {
  return {
    type: "REMOVE_WIZARD",
    payload: name
  }
}
