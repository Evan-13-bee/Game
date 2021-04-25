import React, { ChangeEvent, useState } from 'react';
import { UsersType } from './HW1';

type SearchUserType = {
  setUsers: (arg0: Array<UsersType>) => void
  users: Array<UsersType>
}
export const SearchUser = React.memo((props: SearchUserType) => {
  const [filter, setFilter] = useState<string>('')
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