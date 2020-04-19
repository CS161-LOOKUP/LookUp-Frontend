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
  selectedApartment: ApartmentType | null
}

const initialState: ApartmentsState = {
  isInitializing: false,
  apartments: [],
  selectedApartment: null,
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
    selectApartmentsAction: (state: ApartmentsState, action: PayloadAction<ApartmentType>) => {
      state.selectedApartment = action.payload
    },
  },
})

export const { actions: apartmentsAction } = apartmentsModule

export const createApartment = (form: object): AppThunk => async dispatch => {
  try {
    await instance
      .post("/apartment/createpost", form)
      .then(res => {
        console.log(res)
        dispatch(push(`/apartment/${res.data.post._id}`))
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

export const getApartment = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(apartmentsAction.initilizingAction(true))
    await instance
      .get(`/apartment/post/${id}`)
      .then(response => {
        console.log(response.data)
        dispatch(apartmentsAction.selectApartmentsAction(response.data.post))
        dispatch(apartmentsAction.initilizingAction(false))
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
