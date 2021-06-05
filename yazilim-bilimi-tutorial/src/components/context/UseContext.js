import React, { useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './styles.css';
import UserList from './UserList';

//prettier-ignore
const data = [
  { id: 1,  name: "Ahmet",   email: "ahmet@site.com",  age: 25,  color: "lightcyan" },
  { id: 2,  name: "Mehmet",  email: "mehmet@site.com", age: 30,  color: "honeydew"  },
  { id: 3,  name: "Ali",     email: "ali@site.com",    age: 35,  color: "mistyrose" }
];

const UseContext = () => {
  const [users, setUsers] = useState(data)

  const changeColor = (id, color) =>
    setUsers(
      users.map((user) => (user.id === id ? { ...user, color: color } : user))
    )

  return (
    <UserContext.Provider value={{users, changeColor}}>
      <div className="UseContext">
        <header>
          <h1>Welcome!</h1>
        </header>
        <UserList/>
      </div>
    </UserContext.Provider>
  )
}

export default UseContext