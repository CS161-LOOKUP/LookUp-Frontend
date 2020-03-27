import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "../store"
import { instance } from "../api/config"
import { push } from "connected-react-router"

export interface ApartmentType {
  _id: string
  title: string
  description: string
  imageURL: string
  price: string
  user: string
}

export interface ApartmentsState {
  isInitializing: boolean
  apartments: ApartmentType[] | null
}

const initialState: ApartmentsState = {
  isInitializing: false,
  apartments: [],
}

const apartmentsModule = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    initilizingAction: (state: ApartmentsState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload
    },
    getApartmentsAction: (state: ApartmentsState, action: PayloadAction<ApartmentType[]>) => {
      state.apartments = action.payload
    },
  },
})

export const { actions: apartmentsAction } = apartmentsModule

export const fetchApartments = (): AppThunk => async dispatch => {
  try {
    await instance
      .get("/apartment/posts")
      .then(response => {
        dispatch(apartmentsAction.getApartmentsAction(response.data.post))
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

export default apartmentsModule
