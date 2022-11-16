import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.scss'
// import s from '../../p1-main/m1-ui/u1-app/App.module.scss'

export type UserType = {
  _id: string
  name: string
}

const HW3 = () => {
  const [users, setUsers] = useState<UserType[]>([])

  const addUserCallback = (name: string) => {
    setUsers([{ _id: v1(), name: name }, ...users])
  }

  return (
    <>
      <div className={s.hwContainer}>
        <p>Homework 3</p>
        <div className={s.homework3}>
          <GreetingContainer users={users} addUserCallback={addUserCallback} />
          {users.map(a => {
            return (
              <div className={s.listOfAddedUsers} key={a._id}>
                {a.name}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default HW3
