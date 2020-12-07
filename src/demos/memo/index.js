import React, { memo, useState, useMemo } from 'react'

const UseMemoExample = () => {
  const [count, setCount] = useState(0)
  const memorizedText = useMemo(() => {
    console.log('run useMemo function')
    return `this is a memorized text ${Date.now()}`

  }, [Math.floor(count/10)])
  return <>
    <span>123</span>
    <div>
      {memorizedText}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click ME</button>
    </div>
  </>
}


export default memo(
  function TestMemo () {
    return <>
      <UseMemoExample></UseMemoExample>
    </>
  },
  () => false,
)
