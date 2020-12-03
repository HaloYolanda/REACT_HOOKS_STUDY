import React, {  useEffect } from 'react'
import useUsers from './useUsers'
// const MOCK_DATA = [
//   {
//     id: 0, name: 'kiki', age: 18, detai: 'qwertyuiop'
//   },
//   {
//     id: 1, name: 'xxx', age: 10, detail: '234567890'
//   }]

export default function HooksDemo () {
  // const [current, setCurrent] = useState(0)

  const users = useUsers()
  // const [users, setUsers] = useState([])
  // const [detail, setDetail] = useState([])

  // const handleClick = useCallBack(id => {
  //   console.log(id)
  // }, [])

  useEffect(() => {
    console.log('mount')
    // setTimeout(() => {
    //   setUsers(MOCK_DATA)
    // }, 1000)
    // fetch('https://cnodejs.org/api/v1/topics')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data))
    return () => { console.log('unmount') }
  }, [])
  if (users.length === 0) return 'loading'
  return <>
    <div style={{ display: 'flex' }}>

      {/* <ul style={{ width: 300, cursor: 'pointer' }}>
       {MOCK_DATA.map(e => <li key={e.name}>{e.name}---{e.age}</li>)}
        {users.map(e =>
          <li style={{ background: e.id === current ? 'pink' : '' }}
            onClick={() => handleClick(e.id)}
            key={e.id}>{e.name}---{e.age}</li>)}
      </ul> */}
      {/* <div dangerouslySetInnerHtml={{ __html: detail }}>当前显示</div> */}
      <div >当前显示</div>
    </div>


  </>
}