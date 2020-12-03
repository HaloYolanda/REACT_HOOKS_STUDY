
import React, { memo, useMemo, useCallback, useState } from 'react'

function ChildrenDemo ({ data, addClick }) {
  console.log('child render')
  return <button onClick={addClick}>{data.number}</button>
}
ChildrenDemo = memo(ChildrenDemo)
let lastAddClick
let lastData

function It () {
  let [number, setNumber] = useState(0)
  let [name, setName] = useState('lili')
  let addClick = useCallback(() => setNumber(number + 1), [number])
  console.log('addclick === lasstAddClick', addClick === lastAddClick)
  lastAddClick = addClick
  let data = useMemo(() => ({ number }), [number])
  console.log('data === lastData', data === lastData)
  lastData = data
  return (
    <>
      <input value={name} onChange={event => setName(event.target.value)} />
      <ChildrenDemo data={data} addClick={addClick} />
    </>
  )
}
export default () => (
  <>
    <It></It>
    {/* <ChildrenDemo>
      <span>1</span>
      <span>2</span>
    </ChildrenDemo> */}
  </>
)
