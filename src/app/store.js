import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import usersReducer from '../features/users/usersSlice'

const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer, users: usersReducer },
})

export default store
