import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "."
import { instance } from "../api/config"
import { push } from "connected-react-router"
import { ApartmentType } from "./apartment"

export interface CurrentUserType {
  createdApartments: ApartmentType[]
  favorites: string[]
}

export interface UserState {
  isInitializing: boolean
  user: CurrentUserType | null
}

const initialState: UserState = {
  isInitializing: false,
  user: {
    createdApartments: [],
    favorites: [],
  },
}

const userModule = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    initilizingAction: (state: UserState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload
    },
    // getUserInfo: (state: UserState, action: PayloadAction<CurrentUserType>) => {
    //   state.user = {
    //     firstName: action.payload.firstName,
    //     lastName: action.payload.lastName,
    //     email: action.payload.email,
    //     interests: action.payload.interests,
    //     posts: action.payload.posts,
    //   }
    // },
    getCreatedUserApartments: (state: UserState, action: PayloadAction<ApartmentType[]>) => {
      state.user = {
        ...state.user,
        createdApartments: action.payload,
      }
    },
    getUserFavorites: (state: UserState, action: PayloadAction<string[]>) => {
      state.user = {
        ...state.user,
        favorites: action.payload,
      }
    },
  },
})

export const getUserInfo = (): AppThunk => async dispatch => {
  try {
    dispatch(userActions.initilizingAction(true))
    await instance
      .get(`/apartment/getApartmentByToken`)
      .then(response => {
        console.log(response.data.apartments)
        dispatch(userActions.getCreatedUserApartments(response.data.apartments))
      })
      .catch(err => {
        if (err.response.status == 500) dispatch(push("/login"))
        console.log(err.response)
      })
    await instance
      .get(`/user/getFavorite`)
      .then(response => {
        dispatch(userActions.getUserFavorites(response.data.favorite))
      })
      .catch(err => {
        if (err.response.status == 500) dispatch(push("/login"))
        console.log(err.response)
      })
    dispatch(userActions.initilizingAction(false))
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const addFavorite = (id): AppThunk => async dispatch => {
  try {
    await instance
      .put("/user/addFavorite", { apartmentId: id })
      .then(res => {
        console.log(res)
        dispatch(getUserInfo())
      })
      .catch(err => {
        if (err.response.status == 500) dispatch(push("/login"))
        console.log(err.response)
      })
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const deleteApartment = (id): AppThunk => async dispatch => {
  try {
    await instance
      .delete(`/apartment/delete/${id}`)
      .then(res => {
        console.log(res)
        dispatch(push(""))
      })
      .catch(err => {
        if (err.response.status == 500) dispatch(push("/login"))
        console.log(err.response)
      })
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const { actions: userActions } = userModule
export default userModule
