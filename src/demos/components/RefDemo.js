import React, { useRef, useEffect } from 'react'

function Input () {
  const inputRef = useRef()
  useEffect(() => {
    console.log('mount--')
    inputRef.current.focus()

  }, [])
  return <input ref={inputRef} />
}
const FInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
})
export default function RefDemo () {
  const fInputRef = useRef()
  useEffect(() => {
    fInputRef.current.focus()
    fInputRef.current.value = 'hello world'
  }, [])

  return <>
    <div>
      <Input></Input>
      <FInput ref={fInputRef} placeholder='pleace input ...'></FInput>
    </div>
  </>
}