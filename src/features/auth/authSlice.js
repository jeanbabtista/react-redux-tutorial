import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload,
    }),
    logout: (state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }),
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
