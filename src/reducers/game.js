const defaultState = {
  name: "",
  started: false,
}

const defaultAction = {
  type: null,
  payload: null,
}

export default (state = defaultState, action = defaultAction) => {
  switch (action.type) {
    case "RESET":
      state = defaultState
      break
    case "START_GAME":
      state.started = true
      break
    case "STOP_GAME":
      state.started = false
      break
    default:
      break
  }
  return state
}
