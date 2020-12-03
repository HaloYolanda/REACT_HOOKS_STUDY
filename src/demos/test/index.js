import React from 'react'
import ClassComp from './../components/ClassComp'
import FuncComp from './../components/FuncComp'
import ReduceDemo from './../components/ReduceDemo'
import ContextDemo from './../components/ContextDemo'
import HooksDemo from './../components/HooksDemo'
import RefDemo from './../components/RefDemo'
// import CallbackMemoDemo from './../components/CallbackMemoDemo'
import ReduceDm from './../components/ReduceDm'
class Test extends React.Component {
  state = {
    name: '', visable: ''
  }


  componentDidMount () {
    setTimeout(_ => {
      this.setState({
        name: 'keke',
        visable: true
      })
    }, 100)
  }

  render () {
    let { name, visable } = this.state
    return (
      <>
        姓名:<span>{name}</span>
        <br />
        <input
          type='text'
          onChange={(ev) => { this.setState({ name: ev.target.value }) }}
          value={name} />
        <ClassComp></ClassComp>
        <button onClick={() => this.setState({ visable: !visable })}>
          函数组件：{visable ? '显示' : '隐藏'}</button>
        {visable && <FuncComp></FuncComp>}
        <ReduceDemo></ReduceDemo>
        <ContextDemo></ContextDemo>
        <HooksDemo></HooksDemo>
        <RefDemo></RefDemo>
        {/* <CallbackMemoDemo></CallbackMemoDemo> */}
        <ReduceDm></ReduceDm>
      </>
    )
  }
}

export default () => (
  <Test></Test>
)
