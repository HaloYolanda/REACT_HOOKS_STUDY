/**
 * 必须要react和react-dom 16.7以上
 */

import React, { useState, useEffect } from 'react'

export default () => {
  const [name, setName] = useState(() => { return 'jokcy' })
  const [count, setCount] = useState(0)
  // const [users, setUsers] = useState(null)

  // const useUsers=()=>{
  //   const [users, setUsers] = useState(null)
    
  // }
  // const users = useUsers()
  // if (users === null) {
  //   return <div>loading..</div>
  // }


  useEffect(() => {
    setTimeout(() => {
      setName('lili')
    }, 2000)
    // console.log('component update')
    return name
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUsers('lili')
  //   }, 2000)
  //   // console.log('component update')
  //   return users
  // }, [])

  useEffect(() => {
    const I = setTimeout(() => {
      setCount(x => x + 1)
    }, 1000)
    // console.log('component update')
    return () => {
      clearInterval(I)
      console.log('unbind')
    }
  }, [Math.min(count, 4)])



  return (
    <>
      <p>My Name is: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      {count}
      <button onClick={() => setCount(x => x + 1)}>add</button>
     
    </>
  )
}
