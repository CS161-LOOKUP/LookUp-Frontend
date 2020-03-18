import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// const App: React.SFC = () => <div>App</div>
import { Redirect } from "react-router-dom"
import Login from "../pages/login"

const Auth: React.FC = (props: any) => {
  return localStorage.getItem("token") !== null ? props.children : <Redirect to={"/login"} />
}

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Auth>
          <Switch>{/* <Route exact path="/" component={Home} /> */}</Switch>
        </Auth>
      </Switch>
    </Router>
  )
}

export default App
