import React, { useReducer } from 'react'

export default function ReduceDemo () {
  const initialState = { count: 0, usname: 'wk' }
  const reducer = (state, action) => {
    const { type, payload = 1 } = action
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + payload }
      case 'decrement':
        return { ...state, count: state.count - payload }
      case 'rename':
        return { ...state, usname: payload }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      reducer {state.count} --- {state.usname}
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'rename', payload: 'jk' })}>change name</button>

    </>
  )
}