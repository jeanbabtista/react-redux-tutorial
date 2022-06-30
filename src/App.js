import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from './features/cart/cartSlice'
import { logout } from './features/auth/authSlice'

import Auth from './components/Auth'
import Cart from './components/Cart'
import Products from './components/Products'
import Users from './components/Users'

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state) => state.auth.user)
  const showCart = useSelector((state) => state.cart.showCart)

  const [showUsers, setShowUsers] = useState(false)

  if (!isAuthenticated) return <Auth />

  return (
    <>
      <h1>Hello, {user.username}!</h1>
      <button onClick={() => dispatch(toggleCart())}>Show cart</button>
      <button onClick={() => setShowUsers((prev) => !prev)}>Show users</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {showCart && <Cart />}
      {showUsers && <Users />}
      <hr />
      <Products />
    </>
  )
}

export default App
