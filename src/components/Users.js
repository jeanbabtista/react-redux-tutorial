import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersAsync } from '../features/users/usersActions'

const Users = () => {
  const users = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)
  const error = useSelector((state) => state.users.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
