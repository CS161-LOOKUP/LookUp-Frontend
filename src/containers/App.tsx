import React from "react"
import { Route, Switch } from "react-router-dom"

// const App: React.SFC = () => <div>App</div>
import { Redirect } from "react-router-dom"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"
import GetApartments from "../pages/apartment/Get"

const Auth: React.FC = (props: any) => {
  return localStorage.getItem("token") !== null ? props.children : <Redirect to={"/login"} />
}

const App: React.FC = () => {
  return (
    <Route>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Auth>
          <Switch>
            <Route exact path="/" component={GetApartments} />
          </Switch>
        </Auth>
      </Switch>
    </Route>
  )
}

export default App
