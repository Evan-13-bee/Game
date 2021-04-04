import React, { ChangeEvent, useState } from 'react';
import s from './EditableSpan.module.css'
type EditableSpanType = {
  name: string
  age: number
  deleteUser: (id: string) => void
  changeUser: (name: string, age: number, id: string) => void
  id: string
}
export const EditableSpan = (props: EditableSpanType) => {

  const [status, setStatus] = useState<boolean>(true)
  const setEditMode = () => {
    setStatus(status ? false : true)
    props.changeUser(name, age, props.id)
  }

  const [name, setName] = useState<string>(props.name)
  const [age, setAge] = useState<number>(props.age)
  return (
    <p className={s.EditSpan}>
      {status
        ? <p>Name: {name} Age: {age}</p>
        : <p>
          <input
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
            type="text"
          />
          <input
            value={age}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.currentTarget.valueAsNumber)}
            type="number"
          />
        </p>}
      <button onClick={setEditMode}>Edit</button>
      <button onClick={() => props.deleteUser(props.id)}>
        Delete
      </button>
    </p>


  )
}