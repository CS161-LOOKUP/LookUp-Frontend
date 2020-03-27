import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit"
import rootReducer, { RootState } from "./rootReducer"
import { ThunkAction } from "redux-thunk"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "connected-react-router"

export const history = createBrowserHistory()
const middleware = [...getDefaultMiddleware(), routerMiddleware(history)]

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
})
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export type AppDispatch = typeof store.dispatch

export default store
