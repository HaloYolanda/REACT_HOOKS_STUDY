import React from 'react';

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount () {
    const { count } = this.state
    if (count % 2 === 0) {
      console.log(count,'--')
    }
  }
  componentDidUpdate () {
    const { count } = this.state
    if (count % 2 === 0) {
      console.log(count)
    }
  }
  render () {
    const { count } = this.state

    return (
      <h3>hello class components {count}
        <button onClick={() => this.setState({ count: count + 1 })}>click me</button>
      </h3>
    )

  }
}
