import Navbar from 'components/Navbar'
import Users from 'components/Users'
import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Cihat Salik',
        salary: 5000,
        department: 'Computer Science'
      },
      {
        id: 2,
        name: 'Abdulrahmen Kaşıbüyükbey',
        salary: 7000,
        department: 'Marketing'
      },
      {
        id: 3,
        name: 'Feyzullah Emrullah',
        salary: 5000,
        department: 'Designer'
      }
    ]
  }
  render() {
    const title = 'Personal Info'
    return (
      <div className="container">
        <Navbar title={title} />
        <Users users={this.state.users} />
      </div>
    )
  }
}
