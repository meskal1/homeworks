import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './Greeting.module.scss'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string | null
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({ name, setNameCallback, addUser, error, totalUsers }) => {
  let inputClass = error ? s.error : s.nonstyle

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addUser() // Если нажата клавиша Энтер, вызвать функцию нажатия на кнопку
  }
  return (
    <div className={s.block}>
      <div className={s.block_container}>
        <div className={s.number_users}>
          <span>
            Total added users {`<`}
            <a className={s.red}>{totalUsers}</a>
            {`>`}
          </span>
        </div>
        <div>
          <input className={inputClass} value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} />
          <button className={s.homework3_button} onClick={addUser}>
            Add
          </button>
        </div>
      </div>
      <span className={s.errorText}>{error}</span>
    </div>
  )
}
export default Greeting
