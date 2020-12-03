import React from 'react'
import { render } from 'react-dom'
let lastStates = []
let index = 0
function useState (initialState) {
  lastStates = lastStates[index] || initialState
  const currentIndex = index
  function setState (newState) {
    lastStates[currentIndex] = newState
    render()
  }
  return [lastStates[index++], setState]
}
let lastCallback
let lastCallbackDependencies

function useCallback (callback, dependencies) {
  if (lastCallbackDependencies) {
    let changed = !dependencies.every((item, index) => {
      return item == lastCallbackDependencies[index]
    })
    if (changed) {
      lastCallback = callback
      lastCallbackDependencies = dependencies
    }
  } else {
    lastCallback = callback
    lastCallbackDependencies = dependencies
  }
  return lastCallback

}
let lastMemo
let lastMemoDependencies

function useMemo (callback, dependencies) {
  if (lastMemoDependencies) {
    let changed = !dependencies.every((item, index) => {
      return item == lastMemoDependencies[index]
    })
    if (changed) {
      lastMemo = callback()
      lastMemoDependencies = dependencies
    }
  } else {
    lastMemo = callback()
    lastMemoDependencies = dependencies
  }
  return lastMemo

}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function Child ({ data, addClick }) {
  console.log('child render--')
  return <button onClick={addClick}>{data.number}</button>
}


function Itt () {
  let [number, setNumber] = useState(0)
  let [name, setName] = useState('lili')
  let addClick = useCallback(() => setNumber(number + 1), [number])
  let data = useMemo(() => ({ number }), [number])
  return (
    <>
      <input value={name} onChange={event => setName(event.target.value)} />
      <Child data={data} addClick={addClick} />
    </>
  )
}
export default () => (
  <>
    <Itt></Itt>
    <Game/>
    {/* <ChildrenDemo>
      <span>1</span>
      <span>2</span>
    </ChildrenDemo> */}
  </>
)
