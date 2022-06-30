import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    showCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload

      const found = state.items.find((i) => i.name === item.name)
      if (found) found.quantity++
      else state.items.push({ ...item, quantity: 1 })
    },
    removeItem: (state, action) => {
      const item = action.payload

      const found = state.items.find((i) => i.name === item.name)
      if (found && found?.quantity > 0) found.quantity--
      if (found?.quantity === 0) state.items = state.items.filter((i) => i.name !== item.name)
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart
    },
    setItems: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { addItem, removeItem, toggleCart } = cartSlice.actions

export default cartSlice.reducer
