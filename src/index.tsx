import React from "react"
import { render } from "react-dom"
import App from "./containers/App"
import { Provider } from "react-redux"
import store, { history } from "./store/index"
import { ConnectedRouter } from "connected-react-router"

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
