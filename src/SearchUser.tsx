import React, { ChangeEvent, useState } from 'react';
import { UsersType } from './App';

type SearchUserType = {
  setUsers: (arg0: Array<UsersType>) => void
  users: Array<UsersType>
}
export const SearchUser = React.memo((props: SearchUserType) => {
  const [filter, setFilter] = useState<string>('')

  const onFilterChangeHandler = () => {
    props.users.filter(u => u.name == filter)
  }
  return (
    <>
      <input 
      value={filter}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.currentTarget.value)}
      type="text" 
      />
    </>
  )
})