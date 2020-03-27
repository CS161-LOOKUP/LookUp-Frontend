import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CurrentUserType {
  firstName: string
  lastName: string
  email: string
  interests: string[]
}

export interface UserState {
  isInitializing: boolean
  user: CurrentUserType | null
}

const initialState: UserState = {
  isInitializing: false,
  user: null,
}

const userModule = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    initilizingAction: (state: UserState, action: PayloadAction<boolean>) => {
      state.isInitializing = action.payload
    },
    getUserInfo: (state: UserState, action: PayloadAction<CurrentUserType>) => {
      state.user = action.payload
    },
  },
})

export const { actions: userActions } = userModule
export default userModule
