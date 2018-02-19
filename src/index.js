import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./store"
import Page from "./components/page/page"

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"))
