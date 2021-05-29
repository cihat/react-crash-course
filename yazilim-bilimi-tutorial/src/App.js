import Deneme from 'components/deneme'
import Navbar from 'components/Navbar'
import Users from 'components/Users'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    const title = 'Personal Info'

    return (
      <div className="container">
        <Navbar title={title} />
        <Users />
        <Deneme />
      </div>
    )
  }
}

export default App
