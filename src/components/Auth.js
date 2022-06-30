import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Auth = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    dispatch(login({ username }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" />
        </label>

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Auth
