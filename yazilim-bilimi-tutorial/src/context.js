import React, { Component } from 'react'

const UserContext = React.createContext()
// Provider, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id)
      }
    default:
      return state
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Cihat Salik',
        salary: 5000,
        department: 'Computer Science'
      },
      // {
      //   id: 2,
      //   name: 'Abdulrahmen Kaşıbüyükbey',
      //   salary: 7000,
      //   department: 'Marketing'
      // },
      // {
      //   id: 3,
      //   name: 'Feyzullah Emrullah',
      //   salary: 5000,
      //   department: 'Designer'
      // }
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action))
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer

export default UserConsumer
