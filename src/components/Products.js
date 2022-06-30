import React from 'react'
import Product from './Product'
import { products } from '../utils/products'

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </div>
  )
}

export default Products
