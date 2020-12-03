import  { useEffect, useState } from 'react'
const MOCK_DATA = [
  {
    name: 'kiki', age: 18, detai: 'qwertyuiop'
  },
  {
    name: 'xxx', age: 10, detail: '234567890'
  }]

export default function useUsers () {
  const [users, setUsers] = useState([])
  useEffect(() => {
    console.log('mount')
    setUsers(MOCK_DATA)
  }, [])
  return users
}