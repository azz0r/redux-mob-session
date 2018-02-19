import reducers from "./reducers/index"
import { createStore, compose } from "redux"

const storeEnhancer = compose(
  typeof window === "object" && typeof window.devToolsExtension !== "undefined"
    ? window.devToolsExtension()
    : f => f,
)

export default initialState => {
  return createStore(reducers, initialState, storeEnhancer)
}
