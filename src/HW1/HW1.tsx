import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v1 } from 'uuid';
import { EditableSpan } from './EditableSpan';
import { AddUser } from './AddUser';
export type UsersType = {
  id: string
  name: string
  age: number
}
function HW1() {
  const [users, setUsers] = useState<Array<UsersType>>([
    { id: v1(), name: 'Valli', age: 1400 },
    { id: v1(), name: 'Valldoor', age: 62 },
    { id: v1(), name: 'Val', age: 12 },
    { id: v1(), name: 'Former', age: 44 },
    { id: v1(), name: 'Fire', age: 68 },
    { id: v1(), name: 'Cat', age: 27 },
    { id: v1(), name: 'Dog', age: 33 },
    { id: v1(), name: 'Duck', age: 36 },
    { id: v1(), name: 'Ducker', age: 22 },
  ])
  const addUser = (name: string, age: number) => {
    const newUser = { id: v1(), name, age }
    setUsers([newUser, ...users])
    setFilteredUsers([newUser, ...filteredUsers])
  }

  const deleteUser = (id: string) => {
    const newArr = users.filter(u => u.id !== id)
    setUsers(newArr)
    setFilteredUsers(newArr)
    console.log(users);
    
  }
  const changeUser = (name: string, age: number, id: string) => {
    let currentUser = users.find(u => u.id == id)
    if (currentUser) {
      currentUser.name = name
      currentUser.age = age
      setUsers([...users])
      console.log(users);

    }
  }

  const [filteredUsers, setFilteredUsers] = useState<Array<UsersType>>(users)
  const [filter, setFilter] = useState<string>('')
  const onFilterChangeHandler = (filter: string) => {
    const newArr = users.filter(u => u.name.slice(0, filter.length) === filter)
    setFilteredUsers(newArr)
  }
  return (
    <div className="App">
      <AddUser
        addUser={addUser}
      />

      <div>
        <p>Search user:</p>
        <input
          value={filter}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFilter(e.currentTarget.value)
            onFilterChangeHandler(e.currentTarget.value)
          }}
          type="text"
        />
      </div>


      {
        filteredUsers.map(u => (
          <EditableSpan
            key={u.id}
            deleteUser={deleteUser}
            changeUser={changeUser}
            name={u.name}
            age={u.age}
            id={u.id}
          />
        ))
      }
    </div>
  );
}

export default HW1;
