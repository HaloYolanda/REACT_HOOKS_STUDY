import React, { useState, useEffect } from 'react'

let AppContext = React.createContext()
function useContext (context) {
  return context._currentValue
}
function Counter () {
  let { state, setState } = useContext(AppContext)
  let [number, setNumber] = useState(0)
  let [name, setName] = useState('didi')
  useEffect(() => {
    console.log(number)
  }, [number, name])
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => setName(Date.now() + ' ')}>修改时间</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <br />
      <p>{state.number}</p>
      <button onClick={() => setState({ number: state.number + 1 })}>+</button>
    </>
  )
}

function A () {
  let [state, setState] = useState({ number: 0 })
  return (
    <AppContext.Provider value={{ state, setState }}>
      <div>
        <div>
          <Counter></Counter>
        </div>
      </div>
    </AppContext.Provider>)
}



export default function ReduceDm () {

  return (
    <>
      <A></A>
    </>
  )
}