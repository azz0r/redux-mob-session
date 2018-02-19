const defaultState = {
  name: "",
  started: false,
}

const defaultAction = {
  type: null,
  payload: null,
}

export default (receivedState = defaultState, action = defaultAction) => {
  console.log("Game Reducer", "receivedState", receivedState)
  // important we dont mutate receivedState directly
  let state = Object.assign({}, receivedState)

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

  console.log("Game Reducer", "finalState", state)
  return state
}
