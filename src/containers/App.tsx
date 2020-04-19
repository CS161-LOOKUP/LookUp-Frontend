import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"

// const App: React.SFC = () => <div>App</div>
import { Redirect } from "react-router-dom"
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup"
import GetApartments from "../pages/apartment/Get"
import ShowApartment from "../pages/apartment/Show"
import Header from "../components/Header/Header"
import CreateApartment from "../pages/apartment/New"
import GetUserApartments from "../pages/user/Apartment"
import GetFavoriteApartments from "../pages/user/Favorite"
import { useDispatch } from "react-redux"
import { getUserInfo } from "../store/currentUser"
import EditApartment from "../pages/apartment/Edit"

const Auth: React.FC = (props: any) => {
  return localStorage.getItem("token") !== null ? props.children : <Redirect to={"/login"} />
}

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <Route>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Auth>
          <Header />
          <Switch>
            <Route exact path="/" component={GetApartments} />
            <Route path="/apartment/:id/edit" component={EditApartment} />
            <Route path="/apartment/:id" component={ShowApartment} />
            <Route path="/createapartment" component={CreateApartment} />
            <Route path="/user/apartments" component={GetUserApartments} />
            <Route path="/user/favorites" component={GetFavoriteApartments} />
          </Switch>
        </Auth>
      </Switch>
    </Route>
  )
}

export default App
