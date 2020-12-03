import React, { useState, useMemo, useEffect, useCallback } from 'react'

export default function CallbackMemoDemo () {
  const [count, setCount] = useState(0)
  const [otherCount, setOutCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setOutCount((otherCount) => otherCount + 1)
    }, 30)
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  // console.log('更新')
  const handleClick = useCallback(ev => {
    console.log(ev.target)
  }, [])
  const result = useMemo(() => {
    // console.log('----------------caculate')
    return count * 100
  }, [count])
  
  return (
    <div onClick={handleClick}>{count}-{otherCount}-{result}</div>
  )
}