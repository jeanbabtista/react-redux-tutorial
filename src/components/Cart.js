import React from 'react'
import { useSelector } from 'react-redux'
import { calculateTotalPrice } from '../utils'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const total = calculateTotalPrice(items)

  return (
    <div>
      <h1>Cart</h1>
      <p>
        There are {items.length} items in your cart, worth of {total} €
      </p>
    </div>
  )
}

export default Cart
