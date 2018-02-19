import reducers from "../reducers/index"
import { createStore, compose } from "redux"
import thunkMiddleware from "redux-thunk"

const storeEnhancer = compose(
  typeof window === "object" && typeof window.devToolsExtension !== "undefined"
    ? window.devToolsExtension()
    : f => f,
)

export default initialState => {
  return createStore(reducers, initialState, storeEnhancer)
}
