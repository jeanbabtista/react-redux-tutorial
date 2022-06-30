import { getUsers, getUsersSuccess, getUsersFailure } from './usersSlice'

/*
This is called a thunk function creator pattern, we
where we allow state to update asynchronously, which
cannot be done with plain Redux.
*/
export const getUsersAsync = () => async (dispatch) => {
  dispatch(getUsers())

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    dispatch(getUsersSuccess(users))
  } catch (e) {
    dispatch(getUsersFailure(e))
  }
}
