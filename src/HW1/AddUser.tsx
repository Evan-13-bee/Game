import React, { ChangeEvent, useState } from 'react';
import { v1 } from 'uuid';
import { UsersType } from './HW1';

type AddUserType = {
  addUser: (name: string, age: number) => void
}

export const AddUser = React.memo((props: AddUserType) => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)


  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.currentTarget.valueAsNumber)
  }
  const addUser = (name: string, age: number) => {
    props.addUser(name, age)
    setName('')
    setAge(0)
    
  }
  return (
    <div>
    <p>
      <span>Name</span>
      <input
        value={name}
        onChange={nameChangeHandler}
        type="text"
      />
    </p>
    <p>
      <span>Age</span>
      <input
        value={age}
        onChange={ageChangeHandler}
        type="number"
      />
    </p>
    <p>
      Add user
      <button onClick={() => addUser(name, age)}>+</button>
    </p>
  </div>
  )
})