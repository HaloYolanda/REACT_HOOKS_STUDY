import React, { useState, useContext } from 'react'

const themeContext = React.createContext('#090')

const Child = () => {
  // 消费者和生产者模式
  const bgColor = useContext(themeContext)
  const style = {
    backgroundColor: bgColor
  }
  return <div style={style}>

    <themeContext.Consumer>
      {(value) => <div style={{ backgroundColor: value }}>child</div>}
    </themeContext.Consumer>
  </div>
}

const Demo = () => {
  return <Child></Child>
}


export default function ContextDemo () {
  const [bgColor, setBgColor] = useState('#090')

  return (
    <>
      <br></br>
      <input type='color' onChange={ev => setBgColor(ev.target.value)} />
      <button onClick={() => setBgColor('pink')}>change color</button>
      <themeContext.Provider value={bgColor}>
        <Demo>
        </Demo>
      </themeContext.Provider>
    </>
  )
}