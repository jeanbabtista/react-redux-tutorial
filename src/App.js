import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(actions.increment())}>++</button>
      <button onClick={() => dispatch(actions.decrement())}>--</button>
      <button onClick={() => dispatch(actions.add(5))}>+5</button>
    </>
  )
}

export default App
