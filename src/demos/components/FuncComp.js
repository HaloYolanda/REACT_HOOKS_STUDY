import React, { useState, useEffect } from 'react'

export default function FuncComp () {
  const [count, setCount] = useState(0)
  const [disable, setDisable] = useState(true)
  useEffect(() => {
    if (count % 2 === 0) {
      console.log(`fc:${count}`)
    }
    return () => {
      console.log('unbind', count)
    }
  }, [count]) // 加上[]代表指定状态发生变化能够引起副作用的依赖，不加则表示不发生副作用

  useEffect(() => {
    console.log('fn组件挂载')
    const handleClick = () => console.log('xx')
    document.addEventListener('click', handleClick)
    return () => {
      // 卸载
      console.log('fn组件卸载')
      document.removeEventListener('click', handleClick)
    }
  }, [])
  return (
    <>
      <button onClick={() => { setDisable(!disable) }}>{disable ? '禁用' : '启用'}</button>
      <h3>hello function component {count}<button onClick={() => setCount(count + 1)}>click me</button></h3>
    </>
  )
}