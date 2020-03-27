import { combineReducers } from "@reduxjs/toolkit"
import userModule, { UserState } from "./currentUser"
import apartmentsModule, { ApartmentsState } from "./apartment"
import { connectRouter, RouterState } from "connected-react-router"
import { History } from "history"

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    currentUser: userModule.reducer,
    apartments: apartmentsModule.reducer,
  })

export interface RootState {
  router: RouterState
  currentUser: UserState
  apartments: ApartmentsState
}

export default rootReducer
