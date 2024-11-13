import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../store/counterSlice.ts'
import { RootState } from '../store'

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.sample.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Home
