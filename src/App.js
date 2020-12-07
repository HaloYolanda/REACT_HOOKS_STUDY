import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import routes from './routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navs">
          <Link to="/ref">RefDemo</Link>
          <Link to="/forward-ref">ForwardRefDemo</Link>
          <Link to="/context">ContextDemo</Link>
          <Link to="/concurrent">ConcurrentModeDemo</Link>
          <Link to="/suspense">SuspenseDemo</Link>
          <Link to="/hooks">HooksDemo</Link>
          <Link to="/children">ChildrenDemo</Link>
          <Link to="/memo">MemoDemo</Link>
          <Link to="/portal">PortalDemo</Link>
          <Link to="/test">类组件和函数式组件</Link>
          <Link to="/list">用Hooks开发一个拖拽列表</Link>
        </nav>
        <div className="contents">{routes}</div>
      </div>
    )
  }
}

export default App
