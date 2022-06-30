import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../features/cart/cartSlice'

const Product = ({ name = '', price = 0, quantity = 0 }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        {name} (price {price} €)
      </h1>
      <button onClick={() => dispatch(addItem({ name, price, quantity }))}>Add to cart</button>
      <button onClick={() => dispatch(removeItem({ name }))}>Remove from cart</button>
    </div>
  )
}

export default Product
